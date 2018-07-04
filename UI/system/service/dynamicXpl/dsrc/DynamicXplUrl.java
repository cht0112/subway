import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.justep.biz.client.ActionUtils;
import com.justep.ui.JProcessor;
import com.justep.ui.serializer.ForwardRequestWrapper;
import com.justep.ui.util.UIUtils;


public class DynamicXplUrl implements JProcessor {
	private static final Logger logger = Logger.getLogger(DynamicXplUrl.class);
	private static final String PARAM_PREFIX = "xml-data-";
	private static Document ERROR;
	static{
		String message = "<html><body><font color=\"red\">called error!</font></body></html>";
		SAXReader reader = new SAXReader();
		try {
			ERROR = reader.read(new ByteArrayInputStream(message.getBytes("utf-8")));
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage(), e);
		}
	}
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, String> params = getParameters(request);
		String value = combinParameters(params);
		if (value.equals("")){
			error(request, response);
		}
		
		try{
			value = URLDecoder.decode(value, "utf-8");
			ByteArrayInputStream in = new ByteArrayInputStream(value.getBytes("utf-8"));
			SAXReader reader = new SAXReader();
			Document doc = reader.read(in);
			Element callURL = doc.getRootElement();
			String url = callURL.attributeValue("url");
			if (!callURL.getName().equals("call-url") || url==null || url.equals("")){
				error(request, response);
			}
			
			List<Element> children = callURL.elements();
			byte[] body = null;
			if (!children.isEmpty()){
				Element child = children.get(0);
				//addNamespaces(child);
				body = child.asXML().getBytes("utf-8");
			}
			
			forward(url, body,  request, response);
			
		}catch(Exception e){
			e.printStackTrace();
			logger.error(e.getMessage(), e);
			error(request, response);
		}
	}
	/*
	private void addNamespaces(Element e){
		e.addNamespace("wx", "http://schemas.microsoft.com/office/word/2003/auxHint");
		e.addNamespace("w", "http://schemas.microsoft.com/office/word/2003/wordml");
		e.addNamespace("w10", "urn:schemas-microsoft-com:office:word");
		e.addNamespace("v", "urn:schemas-microsoft-com:vml");
		e.addNamespace("o", "urn:schemas-microsoft-com:office:office");
		e.addNamespace("xs", "http://www.w3.org/2001/XMLSchema");
		e.addNamespace("xdb", "http://orbeon.org/oxf/xml/xmldb");
		e.addNamespace("snapshot", "ccm.job.snapshot.Snapshot");
		e.addNamespace("xslt", "http://www.w3.org/1999/XSL/Transform");
		e.addNamespace("saxon", "http://saxon.sf.net/");
		e.addNamespace("xhtml", "http://www.w3.org/1999/xhtml");
		e.addNamespace("xforms", "http://www.justep.com/xforms");
		e.addNamespace("ev", "http://www.w3.org/2001/xml-events");
		e.addNamespace("xbl", "http://www.w3.org/ns/xbl");
		e.addNamespace("f", "http://orbeon.org/oxf/xml/formatting");
		e.addNamespace("rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
		e.addNamespace("xsl", "http://www.w3.org/1999/XSL/Transform");
		e.addNamespace("xsd", "http://www.w3.org/2001/XMLSchema");
		e.addNamespace("widget", "http://orbeon.org/oxf/xml/widget");
		e.addNamespace("exf", "http://www.exforms.org/exf/1-0");
		e.addNamespace("ajx", "http://www.ajaxforms.net/2006/ajx");
		e.addNamespace("justep", "http://www.justep.com/x5#");
		e.addNamespace("ns", "http://www.justep.com/x5#");
		e.addNamespace("xreport", "http://www.justep.com/x5/xreport");
		e.addNamespace("data", "http://www.justep.com/x5/xui/data#");
		e.addNamespace("xblcompliexblns", "http://www.w3.org/ns/xbl");
	}
*/
	
	private void forward(String url, byte[] body, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		/*不需要，forward会自动带上request中的参数
		Enumeration<String> names = request.getParameterNames();
		while(names.hasMoreElements()){
			String name = names.nextElement();
			if (url.contains("?")){
				url += "&";
			}else{
				url += "?";
			}
			
			url += name + "=" + request.getParameter(name);
		}
		*/
		
		ForwardRequestWrapper requestWrapper = new ForwardRequestWrapper(request, url, request.getMethod(), ActionUtils.XML_CONTENT_TYPE, body);
		request.getRequestDispatcher(url).forward(requestWrapper, response);
	}
	
	private void error(HttpServletRequest request, HttpServletResponse response){
		Document htmlConverterDoc = UIUtils.htmlConverter(ERROR);
		UIUtils.httpSerializer(request, response, htmlConverterDoc);
	}
	
	
	private String combinParameters(Map<String, String> params){
		String[] names = new String[params.size()];
		for (String name : params.keySet()){
			int index = Integer.parseInt(name.substring(PARAM_PREFIX.length()));
			names[index] = name;
		}
		
		String result = "";
		for (int i=0; i<names.length; i++){
			String value = params.get(names[i]);
			if (value == null){
				value = "";
			}
			
			result += value;
		}
		
		return result;
	}
	
	private Map<String, String> getParameters(HttpServletRequest request){
		Map<String, String> params = new HashMap<String, String>();
		Enumeration<String> names = request.getParameterNames();
		while(names.hasMoreElements()){
			String name = names.nextElement();
			if (name.startsWith(PARAM_PREFIX)){
				params.put(name, request.getParameter(name));
			}
		}
		
		return params;
	}
	
}
