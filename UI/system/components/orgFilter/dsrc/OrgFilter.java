import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.system.component.data.DataUtils;

import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.Utils;
import com.justep.xbl.runtime.XBLException;

public class OrgFilter implements JavaTemplate {
	private final String READER_ACTION = "/system/logic/action/queryOrgAction";
	private final String COLUMNS = "sName,sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID";

	private Element rootE;
	private Element selectE;
	private Element dataE;
	private Element defE;
	private String dataId;
	private String selectId;
	private String instanceId;

	private String id;
	private String filterData;
	private String personIDRelation;
	private String orgURLRelation;
	//private String manageTypeCodes;
	private String dropdownHeight;
	private String executeConcept;
	private String defaultValue;
	private String autoRefresh;
	private String onGetCondition;
	
	public Element execute(Element bound, Map context) throws XBLException {
		dataId = null;
		selectId = null;
		instanceId = null;

		defE = bound;
		dataE = getDataDef();
		selectE = getSelectDef();

		this.id = com.justep.ui.system.component.ComponentUtils.getAttributeOfReuired(bound, "id");
		this.filterData = com.justep.ui.system.component.ComponentUtils.getAttributeOfDefault(bound, "filter-data","");
		this.personIDRelation = com.justep.ui.system.component.ComponentUtils.getAttributeOfDefault(bound, "person-id-relation","");
		this.orgURLRelation = com.justep.ui.system.component.ComponentUtils.getAttributeOfDefault(bound, "org-url-relation","");
		this.dropdownHeight = bound.attributeValue("dropdown-height");
		
		this.autoRefresh = com.justep.ui.system.component.ComponentUtils.getAttributeOfDefault(bound, "auto-refresh", "false");
		this.onGetCondition = bound.attributeValue("onGetCondition");
		this.defaultValue = com.justep.ui.system.component.ComponentUtils.getAttributeOfDefault(bound, "default-value", "");
		
		if (null == selectE)
			selectE = createSelect();

		rootE = DocumentHelper.createElement("root");
		processData();
		processSelect();
		processAttribute();		
		return this.rootE;
	}

	private void processAttribute() {
		Element e = rootE.addElement(new QName("span", XMLConstants.XHTML_NAMESPACE));
		e.addAttribute("style", "display:none");
		e.addAttribute("xblid", "attribute");
		e.addAttribute("data-id", getDataId());
		e.addAttribute("select-id", getSelectId());
		e.addAttribute("instance-id", getInstanceId());
		
		e.addAttribute("filter-data", this.filterData);
		e.addAttribute("person-id-relation", this.personIDRelation);
		e.addAttribute("org-url-relation", this.orgURLRelation);
		e.addAttribute("auto-refresh", this.autoRefresh);
		e.addAttribute("onGetCondition", this.onGetCondition);
		e.addAttribute("default-value", this.defaultValue);
	}

	private Element createSelect() {
		Element resultE = DocumentHelper.createElement(new QName("div",
				XMLConstants.XHTML_NAMESPACE));
		resultE.addAttribute("component",
				"/UI/system/components/select.xbl.xml#treeSelect");
		return resultE;
	}

	private void addDefaultClass(){
		String s = defE.attributeValue("class");
		defE.addAttribute("class", "xui-select" + (DataUtils.isStringEmpty(s)?"":(" "+s)));
	}
	
	private void processSelect() {
		//原节点上增加class
		addDefaultClass();
		Element e = (Element) selectE.clone();
		rootE.add(e);

		List<String> columns = getColumns();

		e.addAttribute("id", getSelectId());
		if (null == e.attribute("multi-select"))
			e.addAttribute("multi-select", "true");
		e.addAttribute("ref", "instance('" + getInstanceId() + "')/value");
		e.addAttribute("label-ref", "instance('" + getInstanceId() + "')/label");
		e.addAttribute("delay", "true");
		e.addAttribute("class", "xui-autofill xforms-no-border");
		e.addAttribute("label-separator", ",");
		e.addAttribute("value-separator", ",");
		String s = defE.attributeValue("tabindex");
		if (null != s && !"".equals(s))
			e.addAttribute("tabindex", s);
		s = defE.attributeValue("accesskey");
		if (null != s && !"".equals(s))
			e.addAttribute("accesskey", s);
		s = defE.attributeValue("readonly");
		if (null != s && !"".equals(s))
			e.addAttribute("readonly", s);
		s = defE.attributeValue("disabled");
		if (null != s && !"".equals(s))
			e.addAttribute("disabled", s);
		s= this.dropdownHeight;
		if (null != s && !"".equals(s))
			e.addAttribute("dropdown-height", this.dropdownHeight);
		
		Element labelE = e.element(new QName("label",
				DataUtils.XFORMS_NAMESPACE));
		if (null == labelE) {
			labelE = e.addElement(new QName("label", DataUtils.XFORMS_NAMESPACE));
			labelE.addAttribute("ref", columns.get(0));
		}

		Element valueE = e.element(new QName("value",
				DataUtils.XFORMS_NAMESPACE));
		if (null == valueE) {
			valueE = e.addElement(new QName("value", DataUtils.XFORMS_NAMESPACE));
			valueE.addAttribute("ref", "rowid");
		}

		Element itemsetE = e.element(new QName("itemset",
				DataUtils.XFORMS_NAMESPACE));
		if (null != itemsetE)
			e.remove(itemsetE);
		itemsetE = e.addElement(new QName("itemset", DataUtils.XFORMS_NAMESPACE));
		itemsetE.addAttribute("data", getDataId());

		for (String s1 : columns) {
			Element columnE = itemsetE.addElement(new QName("column",
					DataUtils.XFORMS_NAMESPACE));
			columnE.addAttribute("ref", s1);
			columnE.addAttribute("visable", "true");
		}
	}

	private List<String> getColumns() {
		List<String> result = new ArrayList<String>();
		Element itemE = selectE.element(new QName("itemset",
				DataUtils.XFORMS_NAMESPACE));
		if (null == itemE) {
			result.add("sName");
		} else {
			List<?> list = itemE.elements(new QName("column",
					DataUtils.XFORMS_NAMESPACE));
			if (list.size() > 0) {
				for (Object e : list) {
					result.add(((Element) e).attributeValue("ref"));
				}
			} else
				result.add("sName");
		}
		return result;
	}

	private void processData() {
		
		Element resultData = null;
		if (null == dataE)
			resultData = createData();
		else
			resultData = cloneData();
		setDataAttribute(resultData);
		if(!"".equals(this.filterData) && (!"".equals(this.personIDRelation) || !"".equals(this.orgURLRelation))){
			Element constructEvent = com.justep.ui.system.component.ComponentUtils.createScriptAction(
					"xbl-loaded",
					null,
					String.format(
							"justep.xbl(\"%s\")._setFilter(\"%s\", justep.xbl(\"%s\"), \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", false); ",
							this.id, this.id, this.filterData, this.personIDRelation, this.orgURLRelation, 
							this.executeConcept == null ? "" : this.executeConcept, this.defaultValue,
									this.onGetCondition == null ? "" : this.onGetCondition));
			resultData.getParent().add(constructEvent);			
		}
		
	}

	private void setDataAttribute(Element resultData) {
		resultData.addAttribute("id", getDataId());
		resultData.addAttribute("component",
				"/UI/system/components/data.xbl.xml#bizData");
		resultData.addAttribute("concept", "SA_OPOrg");
		resultData.addAttribute("relations", COLUMNS);
		resultData.addAttribute("offset", "0");
		resultData.addAttribute("limit", "-1");
		resultData.addAttribute("is-tree", "true");
		resultData.addAttribute("auto-load", "false");
		resultData.addAttribute("refresh-confirm", "false");
		setActionAttribute(resultData);
		setTreeAttribute(resultData);
	}

	private void setActionAttribute(Element resultData) {
		Element e = resultData.element(new QName("reader",
				XMLConstants.XUI_NAMESPACE));
		if (null == e)
			e = resultData.addElement(new QName("reader",
					XMLConstants.XUI_NAMESPACE));
		e.addAttribute("action", READER_ACTION);
		
		resultData.addElement(new QName("filter", com.justep.ui.system.component.ComponentUtils.XUI_NAMESPACE))
		.addAttribute("name", "_valid_state_filter_")
		.addText("SA_OPOrg.sValidState = 1");		
	}

	private void setTreeAttribute(Element resultData) {
		Element e = resultData.element(new QName("tree-option",
				XMLConstants.XUI_NAMESPACE));
		if (null == e)
			e = resultData.addElement(new QName("tree-option",
					XMLConstants.XUI_NAMESPACE));
		e.addAttribute("parent-relation", "sParent");
		e.addAttribute("node-kind-relation", "sNodeKind");
		if (null == e.attribute("root-filter"))
			e.addAttribute("root-filter", "1=1");
	}

	private Element getDataModelE(Element e) {
		if (e != defE) {
			if (e.getName().equals("model")) {
				return e;
			} else {
				e = e.getParent();
				return getDataModelE(e);
			}
		} else {
			return null;
		}
	}

	private Element cloneData() {
		Element resultDataE = null;
		Element modelE = getDataModelE(dataE);
		if (null == modelE) {
			modelE = createModel();
			resultDataE = (Element) dataE.clone();
			modelE.add(resultDataE);
		} else {
			modelE = (Element) modelE.clone();
			rootE.add(modelE);
			resultDataE = (Element) modelE
					.selectSingleNode("./*[@component='/UI/system/components/data.xbl.xml#bizData']");
		}
		return resultDataE;
	}

	private Element createModel() {
		Element modelE = DocumentHelper.createElement(new QName("model",
				DataUtils.XFORMS_NAMESPACE));
		modelE.addAttribute("id", "model-" + Utils.generateGlobalId());
		rootE.add(modelE);
		return modelE;
	}

	private Element createData() {
		Element resultDataE = DocumentHelper.createElement(new QName("data",
				XMLConstants.XUI_NAMESPACE));
		resultDataE.addAttribute("id", getDataId());
		Element modelE = createModel();
		modelE.add(resultDataE);
		// 增加内置的instance存放数据
		Element instanceE = DocumentHelper.createElement(new QName("instance",
				DataUtils.XFORMS_NAMESPACE));
		modelE.add(instanceE);
		instanceE.addAttribute("id", getInstanceId());
		instanceE.addAttribute("type", DataUtils.INSTANCE_STORE_TYPE_SIMPLE);
		instanceE.addAttribute("columnids", "value,label");
		Element rowsE = instanceE.addElement("rows");
		Element rowE = rowsE.addElement("row");
		rowE.addElement("cell");
		rowE.addElement("cell");

		return resultDataE;
	}

	private String getSelectId() {
		if (DataUtils.isStringEmpty(selectId)) {
			if (null != selectE)
				selectId = selectE.attributeValue("id");
			if (DataUtils.isStringEmpty(selectId))
				selectId = "select-" + Utils.generateGlobalId();
		}
		return selectId;
	}

	private String getDataId() {
		if (DataUtils.isStringEmpty(dataId)) {
			if (null != dataE)
				dataId = dataE.attributeValue("id");
			if (DataUtils.isStringEmpty(dataId))
				dataId = "data-" + Utils.generateGlobalId();
		}
		return dataId;
	}

	private String getInstanceId() {
		if (DataUtils.isStringEmpty(instanceId)) {
			instanceId = "instance-" + Utils.generateGlobalId();
		}
		return instanceId;
	}

	private Element getDataDef() {
		return (Element) defE
				.selectSingleNode("./*[@component='/UI/system/components/data.xbl.xml#bizData']");
	}

	private Element getSelectDef() {
		return (Element) defE
				.selectSingleNode("./*[@component='/UI/system/components/select.xbl.xml#treeSelect']");
	}
}
