package appCommon.component;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.Node;
import org.dom4j.QName;

import com.justep.xbl.runtime.XBLException;

public class Utils {
	public static final Namespace XFORMS_NAMESPACE = new Namespace("xforms", "http://www.justep.com/xforms");
	public static final Namespace XUI_NAMESPACE = new Namespace("xui", "http://www.justep.com/xui");
	public static final Namespace EVENT_NAMESPACE = new Namespace("ev", "http://www.w3.org/2001/xml-events");
	public static final Namespace XHTML_NAMESPACE = new Namespace("xhtml", "http://www.w3.org/1999/xhtml");

	public static final QName INHEAD_QNAME = new QName("inhead", XUI_NAMESPACE);
	public static final QName INBODY_QNAME = new QName("inbody", XUI_NAMESPACE);
	
	public static final String BIZ_DATA_COMPONENT = "/UI/system/components/data.xbl.xml#bizData";
	public static final String COMMON_DATA_COMPONENT = "/UI/system/components/data.xbl.xml#data";
	public static final String GRID_SELECT_COMPONENT = "/UI/system/components/select.xbl.xml#gridSelect"; 
	public static final String TREE_SELECT_COMPONENT = "/UI/system/components/select.xbl.xml#treeSelect";
	public static final String DIALOG_COMPONENT = "/UI/system/components/dialog.xbl.xml#dialog";
	public static final String NAVIGATOR_BAR_COMPONENT = "/UI/system/components/bar.xbl.xml#navigatorBar";
	public static final String COLLAPSE_PANEL = "/UI/system/components/collapsePanel.xbl.xml#collapsePanel";
	public static final String WINDOW_FRAME = "/UI/system/components/windowFrame.xbl.xml#windowFrame";
	
	public static final String GRID_FILTER_COMPONENT = "/UI/appCommon/components/filter.xbl.xml#gridFilter";
	public static final String TREE_FILTER_COMPONENT = "/UI/appCommon/components/filter.xbl.xml#treeFilter";
	public static final String BIZ_STATE_FILTER_COMPONENT = "/UI/appCommon/components/bizStateFilter.xbl.xml#bizStateFilter";
	public static final String EXT_DATE_FILTER_COMPONENT = "/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter";
	public static final String EXT_ORG_FILTER_COMPONENT = "/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter";
	public static final String SMART_FILTER_COMPONENT = "/UI/appCommon/components/smartFilter.xbl.xml#smartFilter";
	public static final String PROCESS_EXECUTE_LIST_IFRAME = "/UI/appCommon/components/processExecuteListIframe.xbl.xml#processExecuteListIframe";
	
	public static boolean isStringEmpty(String s) {
		return (s == null || "".equals(s.trim()));
	}

	public static String getAttributeOfReuired(Element bound, String attribute) throws XBLException {
		String s = bound.attributeValue(attribute);
		if (isStringEmpty(s))
			throw new XBLException(String.format("attribute [%s] is required.", attribute));
		return s;
	}

	public static String getAttributeOfDefault(Element bound, String attribute, String defaultValue) {
		String s = bound.attributeValue(attribute);
		if (isStringEmpty(s))
			return defaultValue;
		return s;
	}

	public static Element createToolbar(String name) {
		Element e = DocumentHelper.createElement(new QName("toolbar", XUI_NAMESPACE));
		if (!isStringEmpty(name))
			e.addAttribute("name", name);
		return e;
	}

	public static Element createToolbarItem(String name) {
		Element item = DocumentHelper.createElement(new QName("toolbar-item", XUI_NAMESPACE));
		if (!isStringEmpty(name))
			item.addAttribute("name", name);
		return item;
	}

	public static Element createToolbarItem(String name, Element trigger, Element action) {
		Element item = DocumentHelper.createElement(new QName("toolbar-item", XUI_NAMESPACE));
		item.addAttribute("name", name);
		Element group = item.addElement(new QName("group", XFORMS_NAMESPACE));
		group.add(trigger);
		group.add(action);
		return item;
	}
	
	public static Element createToolbarSeparator() {
		return DocumentHelper.createElement(new QName("toolbar-separator", XUI_NAMESPACE));
	}

	public static Element createImageTrigger(String id, String label, String src, String disSrc, Element action) {
		Element trigger = DocumentHelper.createElement(new QName("trigger", XFORMS_NAMESPACE));
		trigger.addAttribute("appearance", "image");
		if (!isStringEmpty(id))
			trigger.addAttribute("id", id);
		if (!isStringEmpty(src))
			trigger.addAttribute("src", src);
		if (!isStringEmpty(disSrc))
			trigger.addAttribute("dis-src", disSrc);

		Element labelElement = trigger.addElement(new QName("label", XFORMS_NAMESPACE));
		if (!isStringEmpty(label))
			labelElement.setText(label);

		if (action != null)
			trigger.add(action);
		return trigger;
	}

	public static Element createAction(String event, String condition) {
		Element action = DocumentHelper.createElement(new QName("action", XFORMS_NAMESPACE));
		if (event != null) {
			action.addAttribute(new QName("event", EVENT_NAMESPACE), event);
		}
		if (condition != null) {
			action.addAttribute(new QName("if"), condition);
		}
		return action;
	}

	public static Element createScriptAction(String event, String condition, String script) {
		Element action = createAction(event, condition);
		action.add(createXFROMScript(script));
		return action;
	}

	public static Element createXFROMScript(String script) {
		Element e = DocumentHelper.createElement(new QName("script", XFORMS_NAMESPACE));
		e.addCDATA(script);
		return e;
	}

	public static Element createXHTMLScript(String script) {
		Element e = DocumentHelper.createElement(new QName("script", XHTML_NAMESPACE));
		e.addCDATA(script);
		return e;
	}

	public static Element createComponentDiv(String component, String id) {
		Element e = DocumentHelper.createElement(new QName("div", XHTML_NAMESPACE));
		e.addAttribute("component", component);
		e.addAttribute("id", id);
		return e;
	}

	public static String getModelIDByDataID(Element bound, String dataID) throws XBLException {
		Document doc = bound.getDocument();
		Node dataNode = doc.selectSingleNode(String.format("//*[@id='%s']", dataID));
		if (dataNode == null)
			throw new XBLException(String.format("无效的data[%s]", dataID));

		Element parent = dataNode.getParent();
		while (parent != null) {
			if (parent.getName().equals("model"))
				return parent.attributeValue("id");
			else
				parent = parent.getParent();
		}

		throw new XBLException(String.format("没有找到data[%s]的model", dataID));
	}

	public static Element createModel(String modelID) {
		Element e = DocumentHelper.createElement(new QName("model", XFORMS_NAMESPACE));
		e.addAttribute(new QName("id"), modelID);
		return e;
	}

	public static Element createModelPartial(String modelID) {
		Element e = DocumentHelper.createElement(new QName("model", XFORMS_NAMESPACE));
		e.addAttribute(new QName("partial", XFORMS_NAMESPACE), modelID);
		return e;
	}

	public static Element createSimpleData(String dataID, String columns, boolean autoLoad) {
		Element e = DocumentHelper.createElement(new QName("data"));
		e.addAttribute("component", COMMON_DATA_COMPONENT);
		e.addAttribute("store-type", "simple");
		e.addAttribute("id", dataID);
		e.addAttribute("columns", columns);
		e.addAttribute("auto-load", autoLoad ? "true" : "false");
		Element rows = e.addElement("rows");
		rows.addAttribute("rows", "");
		rows.addElement("row");
		return e;
	}

	public static Element createBind(String nodeset, String readonly, String relevant) {
		Element e = DocumentHelper.createElement(new QName("bind", XFORMS_NAMESPACE));
		e.addAttribute("nodeset", nodeset);
		if (!isStringEmpty(readonly))
			e.addAttribute("readonly", readonly);
		if (!isStringEmpty(relevant))
			e.addAttribute("relevant", relevant);
		return e;
	}

	public static Element createXBLAttribute() {
		Element e = DocumentHelper.createElement(new QName("span", XHTML_NAMESPACE));
		e.addAttribute("style", "display:none");
		e.addAttribute("xblid", "attribute");
		return e;
	}
}