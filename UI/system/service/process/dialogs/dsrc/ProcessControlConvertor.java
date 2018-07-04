import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

public class ProcessControlConvertor {
	
	private static final String XML_ELEMENT_TAG = "@@tag";
	private static final String XML_CHILDREN = "@@children";
	
	// ProcessControl数据结构转换 xml->json
	public static JSONObject xmlToJson(Document dom) throws JSONException {
//		System.out.println("xmlToJson:xml->" + dom.asXML());

		Element root = dom.getRootElement();

		// 转换简单数据
		JSONObject json = simpleXmlToJson(root);

		// 转换复杂数据
		json.put("runnable-activities", runnableActivitiesXmlToJson(root.element("runnable-activities")));
		json.put("to", processControlItemsXmlToJson(root.element("to")));
		json.put("notice", processControlItemsXmlToJson(root.element("notice")));
		
		json.put("exts", simpleXmlToJson(root.element("exts")));
		
//		System.out.println("xmlToJson:json->" + json.toString());

		return json;
	}

	// ProcessControl数据结构转换  json->xml
	public static Document jsonToXml(JSONObject json) throws JSONException {
//		System.out.println("jsonToXml:json->" + json.toString());

		Document dom = DocumentHelper.createDocument();

		// 转换简单数据
		Element root = simpleJsonToXml(json);
		
		// 转换复杂数据
//		root.add(runnableActivityJsonToXml(json.getJSONArray("runnable-activities"), "runnable-activities"));
		root.add(processControlItemsJsonToXml(json.getJSONArray("to"), "to"));
		root.add(processControlItemsJsonToXml(json.getJSONArray("notice"), "notice"));
		
		root.add(simpleJsonToXml(json.getJSONObject("exts")));
		
		dom.add(root);

//		System.out.println("jsonToXml:xml->" + dom.asXML());
		
		return dom;
	}

	// 简单转换 xml->json
	@SuppressWarnings("unchecked")
	private static JSONObject simpleXmlToJson(Element element) throws JSONException {
		JSONObject json = new JSONObject();

		// 转换标签
		json.put(XML_ELEMENT_TAG, element.getName());
		// 转换属性
		for (Attribute attribute : (List<Attribute>) element.attributes()) {
			json.put("@" + attribute.getName(), attribute.getValue());
		}
		// 转换下级节点
		for (Element child : (List<Element>) element.elements()) {
			json.put(child.getName(), child.getTextTrim());
		}
		return json;
	};
	
	// 简单转换 json->xml
	private static Element simpleJsonToXml(JSONObject json) throws JSONException {
		// 转换标签
		String tag = json.getString(XML_ELEMENT_TAG);
		Element element = DocumentHelper.createElement(tag);
		@SuppressWarnings("unchecked")
		Iterator<String> keys = json.keys();
		while (keys.hasNext()) {
			String key = keys.next();
			Object value = json.get(key);
			// 判断是简单类型，并且不是标签
			if (value instanceof String && !XML_ELEMENT_TAG.equals(key)) {
				if (key.startsWith("@")) {
					// 转换属性
					element.addAttribute(key.replaceFirst("@", ""), value.toString());
				} else {
					// 转换下级节点
					element.addElement(key).setText(value.toString());
				}
			}
		}
		return element;
	}

	// 环节转换 xml->json
	@SuppressWarnings("unchecked")
	private static JSONArray runnableActivitiesXmlToJson(Element element) throws JSONException {
		JSONArray jsonArray = new JSONArray();
		if (element == null) {
			return jsonArray;
		}
		for (Element child : (List<Element>) element.elements()) {
			JSONObject json = null;
			String name = child.getName();
			if ("xor".equals(name) || "and".equals(name)) {
				// 如果是xor或者and，递归转换
				json = new JSONObject();
				json.put(XML_ELEMENT_TAG, name);
				json.put("@id", UUID.randomUUID().toString());
				json.put(XML_CHILDREN, runnableActivitiesXmlToJson(child));
			} else {
				json = simpleXmlToJson(child);
			}
			jsonArray.put(json);
		}
		return jsonArray;
	}

	/*
	// 环节转换 json->xml
	private static Element runnableActivityJsonToXml(JSONArray jsonArray, String tag) throws JSONException {
		Element element = DocumentHelper.createElement(tag);
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject json = jsonArray.getJSONObject(i);
			String name = json.getString(XML_ELEMENT_TAG);
			Element child = null;
			if ("xor".equals(name) || "and".equals(name)) {
				// 如果是xor或者and，递归转换
				child = runnableActivityJsonToXml(json.getJSONArray(XML_CHILDREN), name);
			} else {
				child = simpleJsonToXml(json);
			}
			element.add(child);
		}
		return element;
	}
	 */
	
	// ProcessControlItems结构转换 xml->json
	@SuppressWarnings("unchecked")
	private static JSONArray processControlItemsXmlToJson(Element element) throws JSONException {
		JSONArray jsonArray = new JSONArray();
		for (Element child : (List<Element>) element.elements("process-control-item")) {

			// 先简单转换
			JSONObject json = simpleXmlToJson(child);

			// 如果存在activity-id属性，以activity-id作为id
			json.put("@id", (child.attribute("activity-id") == null ? UUID.randomUUID().toString() : child.attribute("activity-id").getText()));
			// 转换执行者范围
			json.put("executor-range", orgUnitsXmlToJson(child.element("executor-range")));
			// 转换默认执行者
			json.put("executors", orgUnitsXmlToJson(child.element("executors")));
			// 转换任务关系
			json.put("task-relation-value", simpleXmlToJson(child.element("task-relation-value")));
			
			json.put("exts", simpleXmlToJson(child.element("exts")));

			jsonArray.put(json);
		}
		return jsonArray;
	}
	
	// ProcessControlItems结构转换 json->xml
	private static Element processControlItemsJsonToXml(JSONArray jsonArray, String tag) throws JSONException {
		Element element = DocumentHelper.createElement(tag);
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject json = jsonArray.getJSONObject(i);
			
			// 先简单转换
			Element child = simpleJsonToXml(json);

			// 转换执行者范围
			child.add(orgUnitsJsonToXml(json.getJSONArray("executor-range"), "executor-range"));
			// 转换默认执行者
			child.add(orgUnitsJsonToXml(json.getJSONArray("executors"), "executors"));
			// 转换任务关系
			child.add(simpleJsonToXml(json.getJSONObject("task-relation-value")));
			
			child.add(simpleJsonToXml(json.getJSONObject("exts")));

			element.add(child);
		}
		return element;
	}
	
	// OrgUnits结构转换 xml->json
	@SuppressWarnings("unchecked")
	private static JSONArray orgUnitsXmlToJson(Element element) throws JSONException {
		JSONArray orgUnits = new JSONArray();
		for (Element child : (List<Element>) element.elements("org-unit")) {
			orgUnits.put(simpleXmlToJson(child));
		}
		return orgUnits;
	}
	
	// OrgUnits结构转换 json->xml
	private static Element orgUnitsJsonToXml(JSONArray jsonArray, String tag) throws JSONException {
		Element element = DocumentHelper.createElement(tag);
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject json = jsonArray.getJSONObject(i);
			element.add(simpleJsonToXml(json));
		}
		return element;
	}

}
