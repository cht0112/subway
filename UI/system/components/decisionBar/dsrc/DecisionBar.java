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


public class DecisionBar implements JavaTemplate {
	
	private static final String DECISION_CUBE_NAV_ITME = "decision-cube-nav-item"; //OLAP导航
	private static final String DECISION_SORT_CONFIG_ITEM = "decision-sort-config-item";//排序规则
	
	private static final String DECISION_LEVEL_STYLE_ITEM = "decision-level-style-item";//显示父成员
	private static final String DECISION_PROPERTIES_ITEM = "decision-properties-item"; //显示属性
	private static final String DECISION_PROPERTIES_CONFIG_ITEM = "decision-properties-config-item"; //配置显示属性
	private static final String DECISION_NON_EMPTY_ITEM = "decision-non-empty-item"; //压缩空行列
	private static final String DECISION_SWAP_AXES_ITEM = "decision-swap-axes-item"; //交换坐标轴
	
	private static final String DECISION_DRILL_MEMBER_ITEM = "decision-drill-member-item"; //成员钻取
	private static final String DECISION_DRILL_POSITION_ITME = "decision-drill-position-item";//位置钻取
	private static final String DECISION_DRILL_REPLACE_ITEM = "decision-drill-replace-item";//钻取替代
	private static final String DECISION_DRILL_THROUGH_ITEM = "decision-drill-through-item";//钻取指标
	
	private String decision;
	private static final String DECISION_BAR_STATUS_INSTANCE = "decision.bar.status.instance";
	
	private static List<String> DECISION_BAR_ITEMS = new ArrayList<String>();
	static {
		DECISION_BAR_ITEMS.add(DECISION_CUBE_NAV_ITME);
		DECISION_BAR_ITEMS.add(DECISION_SORT_CONFIG_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_LEVEL_STYLE_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_PROPERTIES_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_PROPERTIES_CONFIG_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_NON_EMPTY_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_SWAP_AXES_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_DRILL_MEMBER_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_DRILL_POSITION_ITME);
		DECISION_BAR_ITEMS.add(DECISION_DRILL_REPLACE_ITEM);
		DECISION_BAR_ITEMS.add(DECISION_DRILL_THROUGH_ITEM);
	}
	
	public Element execute(Element bound, Map context) throws XBLException {
		Element root = DocumentHelper.createElement(new QName("root"));
		decision = bound.attributeValue("decision");
		if ((decision == null) || (decision.equals(""))) {
			throw XBLException.create(UISystemMessages.XBL_DECISIONBAR_DEFINE_ERROR);
		} else {
			Element toolbar = root.addElement(new QName("toolbar", XMLConstants.XUI_NAMESPACE));
			createDecisionBarStatusInstance(root, context);

			List<Element> items = getDecisionBarItems(bound);
			for (Element item : items) {
				String name = item.attributeValue(new QName("name"));
				if ((name != null) && !name.equals("")) {
					if (DECISION_BAR_ITEMS.contains(name)) {
						toolbar.add(buildItem(item, decision));
					} else {
						throw XBLException.create(UISystemMessages.XBL_DECISIONBAR_ITEM_DEFINE_ERROR, name);
					}
				} else {
					Element toolbarItem = toolbar.addElement(new QName("toolbar-item", XMLConstants.XUI_NAMESPACE));
					toolbarItem.content().addAll(((Element) item.clone()).content());
				}
			}
			
		}
		return root;
	}
	
	
	private Element buildItem(Element item, String decision) throws XBLException {
		Element toolbarItem = DocumentHelper.createElement(new QName("toolbar-item", XMLConstants.XUI_NAMESPACE));
		Element action = null;

		String name = item.attributeValue("name");
		if (name.equals(DECISION_CUBE_NAV_ITME)) {
			action = createItem(toolbarItem, name, "cube-up.gif", "cube-up.gif", "justep.xbl('" + decision + "').executeCube('"+decision+"');");
		} else if (name.equals(DECISION_SORT_CONFIG_ITEM)) {
			action = createItem(toolbarItem, name, "sort-asc-up.gif", "sort-asc-up.gif", "justep.xbl('" + decision + "').executeSortConfig('"+decision+"');");
		} else if (name.equals(DECISION_LEVEL_STYLE_ITEM)) {
			action = createItem(toolbarItem, name, "level-style-up.gif", "level-style-down.gif", "justep.xbl('" + decision + "').executeLevelStyle('"+decision+"');");
		}else if (name.equals(DECISION_PROPERTIES_ITEM)) {
			action = createItem(toolbarItem, name, "properties-up.gif", "properties-down.gif", "justep.xbl('" + decision + "').executeProperties('"+decision+"');");
		}else if (name.equals(DECISION_PROPERTIES_CONFIG_ITEM)) {
			action = createItem(toolbarItem, name, "properties-config-up.gif", "properties-config-up.gif", "justep.xbl('" + decision + "').executePropertiesConfig('"+decision+"');");
		}else if (name.equals(DECISION_NON_EMPTY_ITEM)) {
			action = createItem(toolbarItem, name, "non-empty-up.gif", "non-empty-down.gif", "justep.xbl('" + decision + "').executeNonEmpty('"+decision+"');");
		}else if (name.equals(DECISION_SWAP_AXES_ITEM)) {
			action = createItem(toolbarItem, name, "swap-axes-up.gif", "swap-axes-down.gif", "justep.xbl('" + decision + "').executeSwapAxes('"+decision+"');");
		}else if (name.equals(DECISION_DRILL_MEMBER_ITEM)) {
			action = createItem(toolbarItem, name, "navi-member-up.gif", "navi-member-down.gif", "justep.xbl('" + decision + "').executeDrillMember('"+decision+"');");
		}else if (name.equals(DECISION_DRILL_POSITION_ITME)) {
			action = createItem(toolbarItem, name, "navi-position-up.gif", "navi-position-down.gif", "justep.xbl('" + decision + "').executeDrillPosition('"+decision+"');");
		}else if (name.equals(DECISION_DRILL_REPLACE_ITEM)) {
			action = createItem(toolbarItem, name, "navi-replace-up.gif", "navi-replace-down.gif", "justep.xbl('" + decision + "').executeDrillReplace('"+decision+"');");
		}else if (name.equals(DECISION_DRILL_THROUGH_ITEM)) {
			action = createItem(toolbarItem, name, "navi-through-up.gif", "navi-through-down.gif", "justep.xbl('" + decision + "').executeDrillThrough('"+decision+"');");
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
		group.addAttribute(new QName("ref"), "instance('decisionbar_" + decision + "_status_instance')/" + name);
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
		if (!context.keySet().contains(decision + '.' + DecisionBar.DECISION_BAR_STATUS_INSTANCE)) {
			context.put(decision + '.' + DecisionBar.DECISION_BAR_STATUS_INSTANCE, "true");

			Element model = container.addElement(new QName("model", XMLConstants.XFORMS_NAMESPACE));
			model.addAttribute(new QName("id"), "decisionbar_" + decision + "_status_model");
			
			Element instance = model.addElement(new QName("instance", XMLConstants.XFORMS_NAMESPACE));
			instance.addAttribute(new QName("id"), "decisionbar_" + decision + "_status_instance");
			instance.addAttribute(new QName("type"), "simple");
			instance.addAttribute(new QName("language"), "CONSTANT");
			
			String cols = DECISION_CUBE_NAV_ITME + "," + DECISION_SORT_CONFIG_ITEM + "," + DECISION_LEVEL_STYLE_ITEM + "," + DECISION_PROPERTIES_ITEM
				+ "," +  DECISION_PROPERTIES_CONFIG_ITEM + "," +  DECISION_NON_EMPTY_ITEM + "," + DECISION_SWAP_AXES_ITEM + "," + DECISION_DRILL_MEMBER_ITEM
				+ "," + DECISION_DRILL_POSITION_ITME + "," + DECISION_DRILL_REPLACE_ITEM + "," +DECISION_DRILL_THROUGH_ITEM;
			
			instance.addAttribute(new QName("columnids"), cols);
			Element rows = instance.addElement(new QName("rows"));
			Element row = rows.addElement(new QName("row"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
			row.addElement(new QName("cell"));
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
		for (String name : DECISION_BAR_ITEMS) {
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