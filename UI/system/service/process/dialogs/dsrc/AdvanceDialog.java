import java.net.URLDecoder;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.json.JSONObject;

import com.justep.ui.WModel;

public class AdvanceDialog implements WModel {
	public void execute(Map<String, Object> result, HttpServletRequest request, HttpServletResponse response) {
		Map<String, String> xmlData = new HashMap<String, String>();
		Enumeration<?> params = request.getParameterNames();
		while (params.hasMoreElements()) {
			String paramName = (String) params.nextElement();
			if (paramName.startsWith("xml-data-")) {
				String paramValue = request.getParameter(paramName);
				xmlData.put(paramName, paramValue);
			}
		}
		StringBuffer xmlParam = new StringBuffer();
		for (int i = 0; i < xmlData.size(); i++) {
			xmlParam.append(xmlData.get("xml-data-" + i));
		}
		String xmlString = "";
		try {
			xmlString = URLDecoder.decode(xmlParam.toString(), "utf-8");
			Document dom = DocumentHelper.parseText(xmlString);
			
			JSONObject json = ProcessControlConvertor.xmlToJson(dom);
			result.put("processControlJSON", json.toString());

			/*
			System.out.println("processControl XML->" + xmlString);
			System.out.println("processControl JSON->" + json.toString());
			Document dom1 = ProcessControlConvertor.jsonToXml(json);
			System.out.println("XML->" + dom1.asXML());
			*/
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}