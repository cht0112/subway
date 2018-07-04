package com.justep.report.olap;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;

import javax.xml.soap.MessageFactory;
import javax.xml.soap.MimeHeaders;
import javax.xml.soap.Name;
import javax.xml.soap.SOAPBody;
import javax.xml.soap.SOAPConnection;
import javax.xml.soap.SOAPConnectionFactory;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPMessage;
import javax.xml.soap.SOAPPart;

import com.justep.olap.common.WEBConstants;

public class QueryMDXProcedure {
	
	private static SOAPConnectionFactory scf = null;
	private static MessageFactory mf = null;
	private static String olapServerUri = WEBConstants.getOlapServerURL();

	public static String queryMDX(String mdxQuery, String properties,String dataModel){
		
		initSOAP();
		
		mdxQuery = mdxQuery.trim();
		properties = properties.trim();

		String replyXml = null;
		SOAPConnection connection = null;
		SOAPMessage reply = null;
		ByteArrayOutputStream out = null;
		BufferedReader in = null;

		Map<String, String> paramMap = XReportPivotHelper.stringToMap(properties);
		
		XReportPivotHelper.checkOlapDatasource(paramMap,dataModel);
		
		try {
			connection = scf.createConnection();
			SOAPMessage msg = mf.createMessage();
			MimeHeaders mh = msg.getMimeHeaders();
			mh.setHeader("SOAPAction", "\"urn:schemas-microsoft-com:xml-analysis:Execute\"");

			SOAPPart soapPart = msg.getSOAPPart();
			SOAPEnvelope envelope = soapPart.getEnvelope();

			SOAPBody body = envelope.getBody();
			Name nameExec = envelope.createName("Execute", "", XReportPivotHelper.XMLA_URI);

			SOAPElement elemExec = body.addChildElement(nameExec);

			// add the COMMAND parameters
			Name nameComm = envelope.createName("Command", "", XReportPivotHelper.XMLA_URI);
			SOAPElement execComm = elemExec.addChildElement(nameComm);
			Name nameStat = envelope.createName("Statement", "", XReportPivotHelper.XMLA_URI);
			SOAPElement execStat = execComm.addChildElement(nameStat);
			execStat.addTextNode(mdxQuery);



			XReportPivotHelper.addParameterList(envelope, elemExec, "Properties", "PropertyList", paramMap);
			msg.saveChanges();

			/** 调用 OLAP WebService 接口 */
			reply = connection.call(msg, olapServerUri);

			out = new ByteArrayOutputStream();
			reply.writeTo(out);
			byte[] bytes = out.toByteArray();
			out.close();

			String line;
			StringBuilder replyTmp = new StringBuilder();
			in = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(bytes), "UTF-8"));
			while ((line = in.readLine()) != null) {
				replyTmp.append(line);
			}
			in.close();
			replyXml = replyTmp.toString();
		} catch (SOAPException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (connection != null)
				try {
					connection.close();
				} catch (SOAPException e) {
					// log and ignore
				}
		}
		return replyXml;
	}

	public static void initSOAP() {
		try {
			scf = SOAPConnectionFactory.newInstance();
			mf = MessageFactory.newInstance();
		} catch (UnsupportedOperationException e) {
			e.printStackTrace();
		} catch (SOAPException e) {
			e.printStackTrace();
		}
	}
	
}
