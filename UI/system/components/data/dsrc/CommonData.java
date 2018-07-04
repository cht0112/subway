import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;
import org.json.JSONException;
import org.json.JSONObject;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.component.data.DataUtils;
import com.justep.ui.system.component.data.commondata.CommonDataDef;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class CommonData implements JavaTemplate {
	private Element rootE;
	private Map<String, Object> context;
	private Element dataDef;
	private String dataId;
	private String partId;
	private CommonDataDef commonDataDef;
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Element execute(Element bound, Map context) throws XBLException {
		this.dataDef = bound;
		this.dataId = DataUtils.getDataId(dataDef);
		this.partId = "";
		this.context = context;
		try {
			this.commonDataDef = new CommonDataDef(bound, context);
		} catch (Exception e) {
			throw XBLException.create(e, UISystemMessages.XBL_DATA_DEFINE_ERROR, dataId, e.getMessage());
		}
		this.rootE = DocumentHelper.createElement("root");
		if(!commonDataDef.isAutoLoad() && !commonDataDef.isAutoNew()){
			this.partId = DataUtils.getPartId(dataDef);
			this.rootE = this.rootE.addElement(new QName("part",DataUtils.XFORMS_NAMESPACE));
			this.rootE.addAttribute("id", this.partId);
			this.rootE.addAttribute(new QName("lazy",DataUtils.XFORMS_NAMESPACE), "true");
		}
		// 生成instance
		this.rootE.add(this.createInstance());
		this.processRule();
		// 生成数据加载事件
		//this.processLoadData();
		// 处理事件
		this.processAction();
		// 处理data对象
		this.processData();
		//把data定义写入上下文
		this.context.put("data."+this.dataId, commonDataDef);
		return DataUtils.isStringEmpty(this.partId)?this.rootE:this.rootE.getParent();
	}

	/**
	 * 创建data对应的instance
	 * 
	 * @return
	 */
	private Element createInstance() {
		Element instanceE = DocumentHelper.createElement(new QName("instance",
				DataUtils.XFORMS_NAMESPACE));

		String Id = this.dataId;
		instanceE.addAttribute(new QName("id"), Id);
		instanceE.addAttribute(new QName("type"),
				commonDataDef.getStoreType());
		instanceE.addAttribute(new QName("columnids"),
				commonDataDef.getColumns());

		instanceE.addAttribute(new QName("columnids"),
				commonDataDef.getColumns());

		Element e = commonDataDef.getDefaultData();
		if(null!=e)
			instanceE.add((Element)e.clone());

		return instanceE;
	}	

	/**
	 * 处理data相关的事件
	 */
	private void processAction() {
		List<Element> actions = commonDataDef.getActionDefList();
		for (Element action : actions) {
			Element e = (Element) action.clone();
			if(null!=e.attribute("target"))
				e.addAttribute("target", dataId);
			this.rootE.add(e);
		}
	}

	/**
	 * 处理data相关的规则
	 */
	private void processRule() {
		// 规则的处理
		List<Element> rules = commonDataDef.getRuleDefList();
		for (Element rule : rules) {
			if (null != rule.attribute("column"))
				processColumnRule(rule);
		}
	}
	
	private void processColumnRule(Element rule) {
		String relation = rule.attributeValue("column");
		String nodeset = "instance('" + this.dataId + "')/"+relation;
		Element bindE = DataUtils.getBind(nodeset, this.rootE);
		if(null==bindE){
			bindE = DataUtils.createBind(nodeset, null);
			rootE.add(bindE);
		}
		
		String[] bindAttributeNames = {"constraint","required","relevant","calculate","readonly","type"};
		for(int i=0; i<bindAttributeNames.length; i++){
			String bindAttributeName = bindAttributeNames[i];
			String value = rule.attributeValue(bindAttributeName);
			if(!DataUtils.isStringEmpty(value)){
				if("type".equals(bindAttributeName)&&!value.startsWith("xsd:"))value="xsd:"+value;
				bindE.addAttribute(bindAttributeName, value);
			}
		}
		
		String alert = rule.attributeValue("alert");
		if(!DataUtils.isStringEmpty(alert))
			bindE.addAttribute("validInfo", alert);
	}
	
	/**
	 * 初始化数据处理
	 */
//	private void processLoadData(){
//		if(commonDataDef.loadDataWhenInit()){
//			Element actionE = DataUtils.createAction(DataUtils.LOAD_DATA_EVENT, null);
//			String script = "dataUtils.refreshData('"+this.dataId+"');";
//			actionE.add(DataUtils.createScript(script));
//			this.rootE.add(actionE);
//		}
//	}
	
	/**
	 * 处理生成data的js对象
	 */
	private void processData() throws XBLException {
		String definition = "{";
		String s = commonDataDef.isDeleteConfirm()?"true":"false";
		definition += commonDataDef.getDefinitionItem("deleteConfirm", s, "boolean");
		s = commonDataDef.getDeleteConfirmText();
		if(!DataUtils.isStringEmpty(s))
			definition += ","+commonDataDef.getDefinitionItem("deleteConfirmText", s);
		s = commonDataDef.isRefreshConfirm()?"true":"false";
		definition += ","+commonDataDef.getDefinitionItem("refreshConfirm", s, "boolean");
		s = commonDataDef.getRefreshConfirmText();
		if(!DataUtils.isStringEmpty(s))
			definition += ","+commonDataDef.getDefinitionItem("refreshConfirmText", s);
		if(!DataUtils.isStringEmpty(commonDataDef.getDataType()))
			definition += ","+commonDataDef.getDefinitionItem("dataType", commonDataDef.getDataType());
		definition += "}";
		
		boolean autoLoad = commonDataDef.isAutoLoad();
		boolean autoNew = commonDataDef.isAutoNew();
		if(autoLoad && autoNew){
			throw XBLException.create(UISystemMessages.XBL_BIZDATA_AUTO_DEFINE_ERROR, dataId);
		}
		String src = commonDataDef.getSrc();
		String events = commonDataDef.getEvents();
		String script = "new justep.XCommonData('"+this.dataId+"',"
						+(autoLoad?"true,":"false,")
						+(autoNew?"true,":"false,")
						+(DataUtils.isStringEmpty(src)?"null":"'"+src+"'")
						+",'"+this.partId+"'"
						+",''"
						+"," + definition + ", " + this.getOperations() + ")"
						+(!DataUtils.isStringEmpty(events)?".attachEvents("+events+")":"")
						+";";
		Element scriptE = DataUtils.createXHTMLScript(script);
		Element headE = DocumentHelper.createElement(DataUtils.INHEAD_QNAME);
		this.rootE.add(headE);
		if(null!=headE){
			headE.add(scriptE);
		}
	}
	private String getOperations() throws XBLException {
		@SuppressWarnings("unchecked")
		List<Element> ops = (List<Element>)this.dataDef.selectNodes("//*[local-name(.) = 'operation']");
		JSONObject jsOps = new JSONObject();
		try{
			for (Iterator<Element> iter = ops.iterator(); iter.hasNext();) {
				Element op = iter.next();
				String name = op.attribute("name").getValue();
				JSONObject jsOp = new JSONObject();
				//label
				if(op.attribute("label") != null){
					String label = op.attribute("label").getValue();
					if(label != null)
						jsOp.put("label", label);
				}
				
				//img-src
				if(op.attribute("img-src") != null){
					String imgSrc = op.attribute("img-src").getValue();
					if(imgSrc != null)
						jsOp.put("imgSrc", imgSrc);
				}
				
				//dis-src
				if(op.attribute("dis-src") != null){
					String disSrc = op.attribute("dis-src").getValue();
					if(disSrc != null)
						jsOp.put("disSrc", disSrc);
				}

				//enable
				if(op.attribute("enable") != null){
					String enable = op.attribute("enable").getValue();
					if(enable != null)
						jsOp.put("enable", !enable.equals("false"));
				}

				//visible
				if(op.attribute("visible") != null){
					String visible = op.attribute("visible").getValue();
					if(visible != null)
						jsOp.put("visible", !visible.equals("false"));
				}

				//success-hint
				if(op.attribute("success-hint") != null){
					String success = op.attribute("success-hint").getValue();
					if(success != null)
						jsOp.put("successHint", success);
				}
				
				jsOps.put(name, jsOp);
			}
		}catch(JSONException e){
			throw XBLException.create(e, UISystemMessages.XBL_DATA_DEFINE_ERROR, dataId, e.getMessage());
		}
		return jsOps.toString();
	}
}
