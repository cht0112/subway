import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;


public class DrillBar implements JavaTemplate {
	
	private static final String DECISION_DRILL_MEMBER_ITEM = "decision-drill-member-item"; //成员钻取
	private static final String DECISION_DRILL_POSITION_ITME = "decision-drill-position-item";//位置钻取
	private static final String DECISION_DRILL_REPLACE_ITEM = "decision-drill-replace-item";//钻取替代
	private static final String DECISION_DRILL_THROUGH_ITEM = "decision-drill-through-item";//钻取指标
	
	private String decisionDrill;
	private static final String DECISION_DRILL_BAR_STATUS_INSTANCE = "decision.drill.bar.status.instance";
	
	private static List<String> DECISION_DRILL_BAR_ITEMS = new ArrayList<String>();
	static {
		DECISION_DRILL_BAR_ITEMS.add(DECISION_DRILL_MEMBER_ITEM);
		DECISION_DRILL_BAR_ITEMS.add(DECISION_DRILL_POSITION_ITME);
		DECISION_DRILL_BAR_ITEMS.add(DECISION_DRILL_REPLACE_ITEM);
		DECISION_DRILL_BAR_ITEMS.add(DECISION_DRILL_THROUGH_ITEM);
	}
	
	public Element execute(Element bound, Map context) throws XBLException {
		Element root = DocumentHelper.createElement(new QName("root"));
		decisionDrill = bound.attributeValue("decision");
		if ((decisionDrill == null) || (decisionDrill.equals(""))) {
			throw XBLException.create(UISystemMessages.XBL_DRILLBAR_DEFINE_ERROR);
		} else {
			Element toolbar = root.addElement(new QName("toolbar", XMLConstants.XUI_NAMESPACE));
			createDecisionBarStatusInstance(root, context);

			List<Element> items = getDecisionBarItems(bound);
			for (Element item : items) {
				String name = item.attributeValue(new QName("name"));
				if ((name != null) && !name.equals("")) {
					if (DECISION_DRILL_BAR_ITEMS.contains(name)) {
						toolbar.add(buildItem(item));
					} else {
						throw XBLException.create(UISystemMessages.XBL_DRILLBAR_ITEM_DEFINE_ERROR, name);
					}
				} else {
					Element toolbarItem = toolbar.addElement(new QName("toolbar-item", XMLConstants.XUI_NAMESPACE));
					toolbarItem.content().addAll(((Element) item.clone()).content());
				}
			}
			
		}
		return root;
	}
	
	
	private Element buildItem(Element item) throws XBLException {
		Element toolbarItem = DocumentHelper.createElement(new QName("toolbar-item", XMLConstants.XUI_NAMESPACE));
		Element action = null;

		String name = item.attributeValue("name");
		if (name.equals(DECISION_DRILL_MEMBER_ITEM)) {
			action = createItem(toolbarItem, name, "navi-member-up.gif", "navi-member-down.gif", "justep.xbl('" + decisionDrill + "').executeDrillMember('"+decisionDrill+"');");
		}else if (name.equals(DECISION_DRILL_POSITION_ITME)) {
			action = createItem(toolbarItem, name, "navi-position-up.gif", "navi-position-down.gif", "justep.xbl('" + decisionDrill + "').executeDrillPosition('"+decisionDrill+"');");
		}else if (name.equals(DECISION_DRILL_REPLACE_ITEM)) {
			action = createItem(toolbarItem, name, "navi-replace-up.gif", "navi-replace-down.gif", "justep.xbl('" + decisionDrill + "').executeDrillReplace('"+decisionDrill+"');");
		}else if (name.equals(DECISION_DRILL_THROUGH_ITEM)) {
			action = createItem(toolbarItem, name, "navi-through-up.gif", "navi-through-down.gif", "justep.xbl('" + decisionDrill + "').executeDrillThrough('"+decisionDrill+"');");
		}

		if (item.elements().size() > 0) {
			action.content().clear();
			action.content().addAll(((Element) item.clone()).content());
		}

		return toolbarItem;
	}
	
	
	private Element createItem(Element container, String name, String img, String unImg, String script) {
		String imgPath = "/UI/system/images/decision/";
		Element group = container.addElement(new QName("group", XMLConstants.XFORMS_NAMESPACE));
		group.addAttribute(new QName("ref"), "instance('decisionbar_" + decisionDrill + "_status_instance')/" + name);
		Element trigger = group.addElement(new QName("trigger", XMLConstants.XFORMS_NAMESPACE));
		trigger.addAttribute(new QName("appearance"), "image");
		trigger.addAttribute(new QName("src"), imgPath + img);
		trigger.addAttribute(new QName("dis-src"), imgPath + unImg);
		trigger.addElement(new QName("label", XMLConstants.XFORMS_NAMESPACE)).addText("i18n{" + name + "}");

		Element action = group.addElement(new QName("action", XMLConstants.XFORMS_NAMESPACE));
		action.addAttribute(new QName("event", XMLConstants.XML_EVENTS_NAMESPACE), "DOMActivate");
		action.addElement(new QName("script", XMLConstants.XFORMS_NAMESPACE)).addCDATA(script);

		return action;
	}
	
	
	private void createDecisionBarStatusInstance(Element container, Map context) {
		if (!context.keySet().contains(decisionDrill + '.' + DrillBar.DECISION_DRILL_BAR_STATUS_INSTANCE)) {
			context.put(decisionDrill + '.' + DrillBar.DECISION_DRILL_BAR_STATUS_INSTANCE, "true");

			Element model = container.addElement(new QName("model", XMLConstants.XFORMS_NAMESPACE));
			model.addAttribute(new QName("id"), "decisionbar_" + decisionDrill + "_status_model");
			
			Element instance = model.addElement(new QName("instance", XMLConstants.XFORMS_NAMESPACE));
			instance.addAttribute(new QName("id"), "decisionbar_" + decisionDrill + "_status_instance");
			instance.addAttribute(new QName("type"), "simple");
			instance.addAttribute(new QName("language"), "CONSTANT");
			
			String cols = DECISION_DRILL_MEMBER_ITEM
				+ "," + DECISION_DRILL_POSITION_ITME + "," + DECISION_DRILL_REPLACE_ITEM 
				+ "," +DECISION_DRILL_THROUGH_ITEM;
			
			instance.addAttribute(new QName("columnids"), cols);
			Element rows = instance.addElement(new QName("rows"));
			Element row = rows.addElement(new QName("row"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
			
		}
	}
	
	private List<Element> getDecisionBarItems(Element bound) {
		List<Element> children = bound.elements();
		if (children.size() != 0) {
			return children;
		} else {
			return createDefaultDecisionBarItems();
		}
	}

	private List<Element> createDefaultDecisionBarItems() {
		List<Element> items = new ArrayList<Element>();
		for (String name : DECISION_DRILL_BAR_ITEMS) {
			items.add(createDecisionBarItem(name));
		}
		return items;
	}

	private Element createDecisionBarItem(String name) {
		Element item = DocumentHelper.createElement(new QName("item", XMLConstants.XUI_NAMESPACE));
		item.addAttribute(new QName("name"), name);
		return item;
	}
	
}