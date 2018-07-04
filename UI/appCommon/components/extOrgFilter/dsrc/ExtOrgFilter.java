import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import appCommon.component.Utils;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class ExtOrgFilter implements JavaTemplate {
	private static final String ORG_READER_ACTION = "/system/logic/action/queryOrgAction";
	private static final String ORG_COLUMNS = "sName,sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID";

	private String id;

	private String filterData;
	private String personIDRelation;
	private String orgURLRelation;
	private String manageTypeCodes;
	private String dropdownHeight;
	private String executeConcept;
	
	private String autoRefresh;
	private String onGetCondition;

	private String modelID;
	private String innerDataID;
	private String orgDataID;
	private String selectID;
	private String manageTypeCodesBindingID;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.init(bound);

		String boundClass = bound.attributeValue("class");
		bound.addAttribute("class", "xui-select" + (Utils.isStringEmpty(boundClass)? "" : (" " + boundClass)));

		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createXBLAttribute());
		
		Element binding = this.createManageTypeCodesBinding();
		if (null != binding)
			root.add(binding);
		
		root.add(this.createDataModel());
		root.add(this.createSelect());
		return root;
	}

	private void init(Element bound) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.filterData = Utils.getAttributeOfReuired(bound, "filter-data");
		this.personIDRelation = Utils.getAttributeOfReuired(bound, "person-id-relation");
		this.orgURLRelation = Utils.getAttributeOfReuired(bound, "org-url-relation");
		this.manageTypeCodes = bound.attributeValue("manage-type-codes");
		this.dropdownHeight = bound.attributeValue("dropdown-height");
		this.executeConcept = bound.attributeValue("execute-concept");
		
		this.autoRefresh = Utils.getAttributeOfDefault(bound, "auto-refresh", "true");
		this.onGetCondition = bound.attributeValue("onGetCondition");

		String globalID = com.justep.xbl.Utils.generateGlobalId();
		this.modelID = this.id + "_model_" + globalID;
		this.innerDataID = this.id + "_data_" + globalID;
		this.orgDataID = this.id + "_orgData_" + globalID;
		this.selectID = this.id + "_select_" + globalID;
		this.manageTypeCodesBindingID = this.id + "_manageTypeCodes_" + globalID;
	}

	private Element createXBLAttribute() {
		Element e = Utils.createXBLAttribute();
		e.addAttribute("filter-data", this.filterData);
		e.addAttribute("person-id-relation", this.personIDRelation);
		e.addAttribute("org-url-relation", this.orgURLRelation);
		e.addAttribute("auto-refresh", this.autoRefresh);
		e.addAttribute("execute-concept", this.executeConcept);

		e.addAttribute("model-id", this.modelID);
		e.addAttribute("inner-data-id", this.innerDataID);
		e.addAttribute("org-data-id", this.orgDataID);
		e.addAttribute("select-id", this.selectID);
		e.addAttribute("manage-type-codes-binding-id", this.manageTypeCodesBindingID);

		e.addAttribute("onGetCondition", this.onGetCondition);

		return e;
	}
	
	private Element createDataModel() {
		Element m = Utils.createModel(this.modelID);

		Element d = Utils.createSimpleData(this.innerDataID, "value,label", true);
		m.add(d);

		Element orgData = DocumentHelper.createElement(new QName("data", Utils.XUI_NAMESPACE));
		orgData.addAttribute("component", Utils.BIZ_DATA_COMPONENT);
		orgData.addAttribute("id", this.orgDataID);
		orgData.addAttribute("concept", "SA_OPOrg");
		orgData.addAttribute("relations", ORG_COLUMNS);
		orgData.addAttribute("offset", "0");
		orgData.addAttribute("limit", "-1");
		orgData.addAttribute("is-tree", "true");
		orgData.addAttribute("auto-load", "false");
		orgData.addAttribute("refresh-confirm", "false");
		
		orgData.addElement(new QName("reader", Utils.XUI_NAMESPACE))
			.addAttribute("action", ORG_READER_ACTION);
		orgData.addElement(new QName("filter", Utils.XUI_NAMESPACE))
			.addAttribute("name", "_valid_state_filter_")
			.addText("SA_OPOrg.sValidState = 1");
		
		orgData.addElement(new QName("tree-option", Utils.XUI_NAMESPACE))
			.addAttribute("parent-relation", "sParent")
			.addAttribute("node-kind-relation", "sNodeKind")
			.addAttribute("root-filter", "1=1");
		
		m.add(orgData);

		/*
		appCommon.component.ExtOrgFilter.setFilterCondition = function(id, filterData,
			personIDRelation, orgURLRelation, executeConcept, value, onGetConditionEvent, isRefresh) {
		 */
			 
		Element constructEvent = Utils.createScriptAction(
				"xforms-model-construct",
				null,
				String.format(
						"appCommon.component.ExtOrgFilter.setFilterCondition(\"%s\", justep.xbl(\"%s\"), \"%s\", \"%s\", \"%s\", \"本人\", \"%s\", false); ",
						this.id, this.filterData, this.personIDRelation, this.orgURLRelation, 
						this.executeConcept == null ? "" : this.executeConcept,
						this.onGetCondition == null ? "" : this.onGetCondition));
		m.add(constructEvent);
		return m;
		
	}
	
	private Element createSelect() {
		Element g = Utils.createComponentDiv(Utils.TREE_SELECT_COMPONENT, selectID);
		g.addAttribute("ref", String.format("instance('%s')/value", this.innerDataID));
		g.addAttribute("label-ref", String.format("instance('%s')/label", this.innerDataID));
		g.addAttribute("default-label-ref", "'本人'");

		g.addAttribute("multi-select", "true");
		
		g.addAttribute("value-separator", ",");
		g.addAttribute("label-separator", ",");
		
		g.addAttribute("class", "xui-autofill");
		g.addAttribute("dropdown-height", this.dropdownHeight);
		g.addAttribute("delay", "true");

		g.addElement(new QName("label", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "sName");
		g.addElement(new QName("value", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "sFID");  
		
		Element itemsetE = g.addElement(new QName("itemset", Utils.XFORMS_NAMESPACE))
			.addAttribute("data", this.orgDataID);
		itemsetE.addElement(new QName("column", Utils.XFORMS_NAMESPACE))
			.addAttribute("ref", "sName")
			.addAttribute("visable", "true");
		return g;
	}

	private Element createManageTypeCodesBinding() {
		if (this.manageTypeCodes == null || "".equals(this.manageTypeCodes))
			return null;
		Element e = DocumentHelper.createElement(new QName("output", Utils.XFORMS_NAMESPACE));
		e.addAttribute("id", this.manageTypeCodesBindingID);
		e.addAttribute("value", this.manageTypeCodes);
		e.addAttribute("style", "display:none");
		return e;
	}
}
