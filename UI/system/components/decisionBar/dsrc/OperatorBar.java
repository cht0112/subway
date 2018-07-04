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


public class OperatorBar implements JavaTemplate {
	
	private static final String DECISION_OPERATOR_LEVEL_STYLE_ITEM = "decision-operator-level-style-item";//显示父成员
	private static final String DECISION_OPERATOR_PROPERTIES_ITEM = "decision-operator-properties-item"; //显示属性
	private static final String DECISION_OPERATOR_PROPERTIES_CONFIG_ITEM = "decision-operator-properties-config-item"; //配置显示属性
	private static final String DECISION_OPERATOR_NON_EMPTY_ITEM = "decision-operator-non-empty-item"; //压缩空行列
	private static final String DECISION_OPERATOR_SWAP_AXES_ITEM = "decision-operator-swap-axes-item"; //交换坐标轴
	
	
	private String decisionOperator;
	private static final String DECISION_OPERATOR_BAR_STATUS_INSTANCE = "decision.operator.bar.status.instance";
	
	private static List<String> DECISION_OPERATOR_BAR_ITEMS = new ArrayList<String>();
	static {
		DECISION_OPERATOR_BAR_ITEMS.add(DECISION_OPERATOR_LEVEL_STYLE_ITEM);
		DECISION_OPERATOR_BAR_ITEMS.add(DECISION_OPERATOR_PROPERTIES_ITEM);
		DECISION_OPERATOR_BAR_ITEMS.add(DECISION_OPERATOR_PROPERTIES_CONFIG_ITEM);
		DECISION_OPERATOR_BAR_ITEMS.add(DECISION_OPERATOR_NON_EMPTY_ITEM);
		DECISION_OPERATOR_BAR_ITEMS.add(DECISION_OPERATOR_SWAP_AXES_ITEM);
	}
	
	public Element execute(Element bound, Map context) throws XBLException {
		Element root = DocumentHelper.createElement(new QName("root"));
		decisionOperator = bound.attributeValue("decision");
		if ((decisionOperator == null) || (decisionOperator.equals(""))) {
			throw XBLException.create(UISystemMessages.XBL_OPERATORBAR_DEFINE_ERROR);
		} else {
			Element toolbar = root.addElement(new QName("toolbar", XMLConstants.XUI_NAMESPACE));
			createDecisionBarStatusInstance(root, context);

			List<Element> items = getDecisionBarItems(bound);
			for (Element item : items) {
				String name = item.attributeValue(new QName("name"));
				if ((name != null) && !name.equals("")) {
					if (DECISION_OPERATOR_BAR_ITEMS.contains(name)) {
						toolbar.add(buildItem(item));
					} else {
						throw XBLException.create(UISystemMessages.XBL_OPERATORBAR_ITEM_DEFINE_ERROR, name);
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
		if (name.equals(DECISION_OPERATOR_LEVEL_STYLE_ITEM)) {
			action = createItem(toolbarItem, name, "level-style-up.gif", "level-style-down.gif", "justep.xbl('" + decisionOperator + "').executeLevelStyle('"+decisionOperator+"');");
		}else if (name.equals(DECISION_OPERATOR_PROPERTIES_ITEM)) {
			action = createItem(toolbarItem, name, "properties-up.gif", "properties-down.gif", "justep.xbl('" + decisionOperator + "').executeProperties('"+decisionOperator+"');");
		}else if (name.equals(DECISION_OPERATOR_PROPERTIES_CONFIG_ITEM)) {
			action = createItem(toolbarItem, name, "properties-config-up.gif", "properties-config-up.gif", "justep.xbl('" + decisionOperator + "').executePropertiesConfig('"+decisionOperator+"');");
		}else if (name.equals(DECISION_OPERATOR_NON_EMPTY_ITEM)) {
			action = createItem(toolbarItem, name, "non-empty-up.gif", "non-empty-down.gif", "justep.xbl('" + decisionOperator + "').executeNonEmpty('"+decisionOperator+"');");
		}else if (name.equals(DECISION_OPERATOR_SWAP_AXES_ITEM)) {
			action = createItem(toolbarItem, name, "swap-axes-up.gif", "swap-axes-down.gif", "justep.xbl('" + decisionOperator + "').executeSwapAxes('"+decisionOperator+"');");
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
		group.addAttribute(new QName("ref"), "instance('decisionoperatorbar_" + decisionOperator + "_status_instance')/" + name);
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
		if (!context.keySet().contains(decisionOperator + '.' + OperatorBar.DECISION_OPERATOR_BAR_STATUS_INSTANCE)) {
			context.put(decisionOperator + '.' + OperatorBar.DECISION_OPERATOR_BAR_STATUS_INSTANCE, "true");

			Element model = container.addElement(new QName("model", XMLConstants.XFORMS_NAMESPACE));
			model.addAttribute(new QName("id"), "decisionoperatorbar_" + decisionOperator + "_status_model");
			
			Element instance = model.addElement(new QName("instance", XMLConstants.XFORMS_NAMESPACE));
			instance.addAttribute(new QName("id"), "decisionoperatorbar_" + decisionOperator + "_status_instance");
			instance.addAttribute(new QName("type"), "simple");
			instance.addAttribute(new QName("language"), "CONSTANT");
			
			String cols = DECISION_OPERATOR_LEVEL_STYLE_ITEM + "," + DECISION_OPERATOR_PROPERTIES_ITEM
				+ "," +  DECISION_OPERATOR_PROPERTIES_CONFIG_ITEM + "," +  DECISION_OPERATOR_NON_EMPTY_ITEM + "," + DECISION_OPERATOR_SWAP_AXES_ITEM;
			
			instance.addAttribute(new QName("columnids"), cols);
			Element rows = instance.addElement(new QName("rows"));
			Element row = rows.addElement(new QName("row"));
			row.addElement(new QName("cell"));
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
		for (String name : DECISION_OPERATOR_BAR_ITEMS) {
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