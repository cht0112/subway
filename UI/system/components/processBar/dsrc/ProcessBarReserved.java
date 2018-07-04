import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

/**
 * @author hcr
 *
 */
public class ProcessBarReserved implements JavaTemplate {
	//private static final Namespace JUSTEP_NAMESPACE = DocumentHelper.createNamespace("justep", "http://www.justep.com/x5#");
	private static final String BACK_PROCESS_ITEM = "back-process-item";
	private static final String ADVANCE_PROCESS_ITEM = "advance-process-item";
	private static final String TRANSFER_PROCESS_ITEM = "transfer-task-item";
	private static final String SUSPEND_PROCESS_ITEM = "suspend-process-item";
	private static final String ABORT_PROCESS_ITEM = "abort-process-item";
	private static final String CUSTOMIZED_PROCESS_ITEM = "customized-process-item";
	private static final String PROCESS_CHART_ITEM = "process-chart-item";
	
	private static final String SEPARATOR_ITEM = "separator";
	private static List<String> DEFAULT_PROCESS_BAR_ITEMS = new ArrayList<String>();
	
	private static final String FLOW_BAR_STATUS_INSTANCE = "flow.bar.status.instance";
	
	static{
		DEFAULT_PROCESS_BAR_ITEMS.add(BACK_PROCESS_ITEM);
		DEFAULT_PROCESS_BAR_ITEMS.add(ADVANCE_PROCESS_ITEM);
		DEFAULT_PROCESS_BAR_ITEMS.add(TRANSFER_PROCESS_ITEM);
		DEFAULT_PROCESS_BAR_ITEMS.add(SUSPEND_PROCESS_ITEM);
		DEFAULT_PROCESS_BAR_ITEMS.add(ABORT_PROCESS_ITEM);
		DEFAULT_PROCESS_BAR_ITEMS.add(CUSTOMIZED_PROCESS_ITEM);
		DEFAULT_PROCESS_BAR_ITEMS.add(PROCESS_CHART_ITEM);
	}
	
	private String getDefaultModelID(Element bound) throws XBLException{
		String id = null;
		Document doc = bound.getDocument();
		if (doc != null){
			Element defaultModel = (Element)doc.selectSingleNode("//*[local-name()='model']");
			if (defaultModel != null){
				id = defaultModel.attributeValue("id");
				if (id == null){
					throw XBLException.create(UISystemMessages.ID_OF_MODEL_NULL);
				}
			}
		}
		
		return id;
		
	}
	
	public Element execute(Element bound, Map context) throws XBLException {
		String flow = bound.attributeValue("process");
		if ((flow == null) || (flow.equals(""))){
			throw XBLException.create(UISystemMessages.PROCESS_OF_PROCESS_BAR_NULL);
		}else{
			Element root = DocumentHelper.createElement(new QName("root"));
			Element toolbar = root.addElement(new QName("toolbar", XMLConstants.XUI_NAMESPACE));
			
			//String modelID = generateID("processbar_status_model_");
			
			String modelID = getDefaultModelID(bound);
			if (modelID == null){
				throw XBLException.create(UISystemMessages.MODEL_OF_WINDOW_NULL);
			}
			String instanceID = generateID("processbar_status_instance_");
			Element model = createProcessBarStatusInstance(root, modelID, instanceID);
			
			List<Element> items = getProcessBarItems(bound);
			for (Element item : items){
				String name = item.attributeValue(new QName("name"));
				if ((name != null) && !name.equals("")){
					if (DEFAULT_PROCESS_BAR_ITEMS.contains(name)){
						toolbar.add(buildItem(item, flow, model, instanceID));
						
					}else if (name.equals(SEPARATOR_ITEM)){
						toolbar.add(DocumentHelper.createElement(new QName("toolbar-separator", XMLConstants.XUI_NAMESPACE)));
						
					}else{
						throw XBLException.create(UISystemMessages.ITEM_OF_PROCESS_BAR_NOT_SUPPORT1, name);
					}
				}else{
					Element toolbarItem = toolbar.addElement(new QName("toolbar-item", XMLConstants.XUI_NAMESPACE));
					toolbarItem.content().addAll(((Element)item.clone()).content());
				}
			}

			
			return root;
		}
	}
	
	private String generateID(String prefix){
		if (prefix != null){
			return prefix + UUID.randomUUID().toString();
		}else{
			return UUID.randomUUID().toString();
		}
	}
	
	private Element createProcessBarStatusInstance(Element container, String modelID, String instanceID){
		Element model = container.addElement(new QName("model", XMLConstants.XFORMS_NAMESPACE));
		model.addAttribute(new QName("partial"), modelID);
		
		Element instance = model.addElement(new QName("instance", XMLConstants.XFORMS_NAMESPACE));
		instance.addAttribute(new QName("id"), instanceID);
		instance.addAttribute(new QName("type"), "simple");
		instance.addAttribute(new QName("language"), "CONSTANT");
		instance.addAttribute(new QName("columnids"), BACK_PROCESS_ITEM + "," + ADVANCE_PROCESS_ITEM + "," 
				+ TRANSFER_PROCESS_ITEM + "," + SUSPEND_PROCESS_ITEM  + "," + ABORT_PROCESS_ITEM + "," 
				+ CUSTOMIZED_PROCESS_ITEM + "," + PROCESS_CHART_ITEM);
		Element rows = instance.addElement(new QName("rows"));
		Element row = rows.addElement(new QName("row"));
		row.addElement(new QName("cell"));
		row.addElement(new QName("cell"));
		row.addElement(new QName("cell"));
		row.addElement(new QName("cell"));
		row.addElement(new QName("cell"));
		row.addElement(new QName("cell"));
		row.addElement(new QName("cell"));
		
		return model;
	}

	
	private Element createItem(Element container, String name, String img, String unImg, String script, String instanceID, String accessKey, String disabled){
		String imgPath = "/UI/system/images/standardToolbar/standard/";
		Element trigger = container.addElement(new QName("trigger", XMLConstants.XFORMS_NAMESPACE));
		trigger.addAttribute(new QName("appearance"), "image");
		trigger.addAttribute(new QName("src"), imgPath + img);
		trigger.addAttribute(new QName("dis-src"), imgPath + unImg);
		trigger.addAttribute(new QName("ref"), "instance('" + instanceID + "')/" + name);
		trigger.addElement(new QName("label", XMLConstants.XFORMS_NAMESPACE)).addText("i18n{" + name + "}");

		if (!(accessKey==null || "".equals(accessKey)))
			trigger.addAttribute("accesskey", accessKey);
		if (!(disabled==null || "".equals(disabled)))
			trigger.addAttribute("disabled", disabled);

		
		Element action = trigger.addElement(new QName("action", XMLConstants.XFORMS_NAMESPACE));
		action.addAttribute(new QName("event", XMLConstants.XML_EVENTS_NAMESPACE), "DOMActivate");
		action.addElement(new QName("script", XMLConstants.XFORMS_NAMESPACE)).addCDATA(script);

		return action;
	}

	
	
	private Element buildItem(Element item, String flow, Element model, String instanceID)throws XBLException {
		Element toolbarItem = DocumentHelper.createElement(new QName("toolbar-item", XMLConstants.XUI_NAMESPACE));
		Element action = null;
		String accessKey = item.attributeValue("accesskey");
		String disabled = item.attributeValue("disabled");
		String name = item.attributeValue("name");
		if (name.equals(BACK_PROCESS_ITEM)){
			action = createItem(toolbarItem, name, "back.gif", "un_back.gif", "var flowEngine = justep.xbl('" + flow + "');  flowEngine.backQuery() ", instanceID, accessKey, disabled);
		}else if (name.equals(ADVANCE_PROCESS_ITEM)){
			action = createItem(toolbarItem, name, "turn.gif", "un_turn.gif", "var flowEngine = justep.xbl('" + flow + "');  flowEngine.advanceQuery();", instanceID, accessKey, disabled);
		}else if (name.equals(SUSPEND_PROCESS_ITEM)){
			action = createItem(toolbarItem, name, "pause.gif", "un_pause.gif", "var flowEngine = justep.xbl('" + flow + "'); flowEngine.suspendQuery(); ", instanceID, accessKey, disabled);
		}else if (name.equals(ABORT_PROCESS_ITEM)){
			action = createItem(toolbarItem, name, "stop.gif", "un_stop.gif", "var flowEngine = justep.xbl('" + flow + "');  flowEngine.abortQuery();", instanceID, accessKey, disabled);
		}else if (name.equals(TRANSFER_PROCESS_ITEM)){
			action = createItem(toolbarItem, name, "redirect.gif", "un_redirect.gif", "var flowEngine = justep.xbl('" + flow + "');  flowEngine.transferQuery();", instanceID, accessKey, disabled);

		}else if (name.equals(CUSTOMIZED_PROCESS_ITEM)){
			action = createItem(toolbarItem, name, "customized.gif", "un_customized.gif", "var flowEngine = justep.xbl('" + flow + "');  flowEngine.startCustomizedQuery();", instanceID, accessKey, disabled);

		}else if (name.equals(PROCESS_CHART_ITEM)){
			action = createItem(toolbarItem, name, "chart.gif", "chart.gif", "var flowEngine = justep.xbl('" + flow + "');  flowEngine.showChart();", instanceID, accessKey, disabled);
		
		}else {
			throw XBLException.create(UISystemMessages.ITEM_OF_PROCESS_BAR_NOT_SUPPORT1, name);
		}
		
		if ((action != null) && (item.elements().size() > 0)){
			Element parentE = action.getParent();
			parentE.content().clear();
			parentE.content().addAll(((Element)item.clone()).content());
		}
		
		//处理readonly和relevant
		String readonly = item.attributeValue(new QName("readonly"));
		String relevant = item.attributeValue(new QName("relevant"));
		if (readonly!=null || relevant!=null){
			Element bind = model.addElement(new QName("bind", XMLConstants.XFORMS_NAMESPACE));
			bind.addAttribute(new QName("nodeset"), "instance('" + instanceID + "')/" + name);
			if (readonly != null){
				bind.addAttribute(new QName("readonly"), readonly);
			}
			if (relevant != null){
				bind.addAttribute(new QName("relevant"), relevant);
			}
		}
		
		
		return toolbarItem;
	}
	
	private List<Element> getProcessBarItems(Element bound){
		List<Element> children = bound.elements();
		return children;
		/*
		if (children.size() != 0){
			return children;
		}else{
			return createDefaultProcessBarItems();
		}
		*/
	}
	
	/**
		<item name="flow-back-item"/>
		<item name="flow-out-item"/>
		<item name="flow-transmit-item"/>
		<item name="flow-suspend-item"/>
		<item name="flow-abort-item"/>
	 */
	private List<Element> createDefaultProcessBarItems(){
		List<Element> items = new ArrayList<Element>();
		for (String name : DEFAULT_PROCESS_BAR_ITEMS){
			items.add(createProcessBarItem(name));
		}
		return items;
	}
	
	private Element createProcessBarItem(String name){
		Element item = DocumentHelper.createElement(new QName("item", XMLConstants.XUI_NAMESPACE));
		item.addAttribute(new QName("name"), name);
		return item;
	}
	
}