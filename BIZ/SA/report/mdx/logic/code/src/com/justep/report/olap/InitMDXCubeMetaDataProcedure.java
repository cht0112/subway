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

public class InitMDXCubeMetaDataProcedure {
	
	private static SOAPConnectionFactory scf = null;
	private static MessageFactory mf = null;
	private static String olapServerUri = WEBConstants.getOlapServerURL();
	
	public static String initMDX(String request, String restrictions ,String properties,String dataModel){
		initSOAP();

		request = request.trim();
		restrictions = restrictions.trim();
		properties = properties.trim();
		
		Map<String, String> restrictionMap = XReportPivotHelper.stringToMap(restrictions);
		Map<String, String> propertiesMap = XReportPivotHelper.stringToMap(properties);
		
		XReportPivotHelper.checkOlapDatasource(propertiesMap,dataModel);
		
		String replyXml = null;
		SOAPConnection connection = null;
		SOAPMessage reply = null;
		ByteArrayOutputStream out = null;
		// BufferedReader in = null;
		BufferedReader in = null;

		try {
			connection = scf.createConnection();

			SOAPMessage msg = mf.createMessage();
			MimeHeaders mh = msg.getMimeHeaders();
			mh.setHeader("SOAPAction", "\"urn:schemas-microsoft-com:xml-analysis:Discover\"");

			/** soap部件 */
			SOAPPart soapPart = msg.getSOAPPart();
			/** 信封 */
			SOAPEnvelope envelope = soapPart.getEnvelope();
			/** 主题 */
			SOAPBody body = envelope.getBody();
			Name nDiscover = envelope.createName("Discover", "", XReportPivotHelper.XMLA_URI);
			SOAPElement eDiscover = body.addChildElement(nDiscover);
			Name nPara = envelope.createName("RequestType", "", XReportPivotHelper.XMLA_URI);
			SOAPElement eRequestType = eDiscover.addChildElement(nPara);
			eRequestType.addTextNode(request);
			// add the parameters
			if (restrictions != null) {
				/** 约束 */
				XReportPivotHelper.addParameterList(envelope, eDiscover, "Restrictions", "RestrictionList", restrictionMap);
			}
			
			/** 参数 */
			XReportPivotHelper.addParameterList(envelope, eDiscover, "Properties", "PropertyList", propertiesMap);
			msg.saveChanges();

			// call WebService
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