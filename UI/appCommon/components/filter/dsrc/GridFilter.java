import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import appCommon.component.Utils;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class GridFilter implements JavaTemplate {

	private String id;

	private String filterData;
	private String filterRelation;
	private String defaultValue;
	private String defaultLabel;
	private String allSelectedLabel;
	
	private String autoRefresh;
	private String multiSelect;
	private String valueSeparator;
	private String labelSeparator;

	private String dropdownHeight;
	private String smartRender;
	private String delayCreateGrid;
	private String inputChangeable;

	private String onGetCondition;
	private String onRowDisabled;
	private String onAfterRowFill;

	private Element itemset;
	private Element valueColumn;
	private Element labelColumn;

	private String modelID;
	private String innerDataID;
	private String selectID;
	private String defaultValueBindingID;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.init(bound);

		String boundClass = bound.attributeValue("class");
		bound.addAttribute("class", "xui-select" + (Utils.isStringEmpty(boundClass)? "" : (" " + boundClass)));

		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createXBLAttribute());
		root.add(this.createDataModel());
		root.add(this.createSelect());

		Element b = this.createDefaultValueBinding();
		if (b != null)
			root.add(b);
		return root;
	}

	private void init(Element bound) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.filterData = Utils.getAttributeOfReuired(bound, "filter-data");
		this.filterRelation = Utils.getAttributeOfReuired(bound, "filter-relation");
		this.defaultValue = bound.attributeValue("default-value");
		this.defaultLabel = bound.attributeValue("default-label");
		this.allSelectedLabel = bound.attributeValue("all-selected-label");
		
		this.autoRefresh = Utils.getAttributeOfDefault(bound, "auto-refresh", "true");
		this.multiSelect = Utils.getAttributeOfDefault(bound, "multi-select", "false");
		this.valueSeparator = Utils.getAttributeOfDefault(bound, "value-separator", ",");
		this.labelSeparator = Utils.getAttributeOfDefault(bound, "label-separator", ",");
		
		this.dropdownHeight = bound.attributeValue("dropdown-height");
		this.smartRender = bound.attributeValue("smart-render");
		this.delayCreateGrid = Utils.getAttributeOfDefault(bound, "delay-create-grid", "false");
		this.inputChangeable = Utils.getAttributeOfDefault(bound, "input-changeable", "false");

		this.onGetCondition = bound.attributeValue("onGetCondition");
		this.onRowDisabled = bound.attributeValue("onRowDisabled");
		this.onAfterRowFill = bound.attributeValue("onAfterRowFill");

		this.itemset = (Element) bound.element(new QName("itemset", Utils.XFORMS_NAMESPACE)).createCopy();
		this.valueColumn = (Element) bound.element(new QName("value", Utils.XFORMS_NAMESPACE)).createCopy();
		this.labelColumn = (Element) bound.element(new QName("label", Utils.XFORMS_NAMESPACE)).createCopy();

		String globalID = com.justep.xbl.Utils.generateGlobalId();
		this.modelID = this.id + "_model_" + globalID;
		this.innerDataID = this.id + "_data_" + globalID;
		this.selectID = this.id + "_select_" + globalID;
		this.defaultValueBindingID = this.id + "_defaultValue_" + globalID;
	}

	private Element createXBLAttribute() {
		Element e = Utils.createXBLAttribute();
		e.addAttribute("filter-data", this.filterData);
		e.addAttribute("filter-relation", this.filterRelation);
		e.addAttribute("auto-refresh", this.autoRefresh);

		e.addAttribute("model-id", this.modelID);
		e.addAttribute("inner-data-id", this.innerDataID);
		e.addAttribute("select-id", this.selectID);
		e.addAttribute("default-value-binding-id", this.defaultValueBindingID);

		e.addAttribute("onGetCondition", this.onGetCondition);

		return e;
	}

	private Element createDataModel() {
		Element m = Utils.createModel(this.modelID);
		Element d = Utils.createSimpleData(this.innerDataID, "value,label", true);
		m.add(d);
		/*
			appCommon.component.Filter.setFilterCondition = function(id, filterData,
				filterRelation, value, defaultValueBinding, multiSelect,
				valueSeparator, onGetConditionEvent, isRefresh)
			 
		*/
		Element constructEvent = Utils.createScriptAction(
				"xforms-model-construct",
				null,
				String.format(
						"appCommon.component.Filter.setFilterCondition(\"%s\", justep.xbl(\"%s\"), \"%s\", \"\", appCommon.component.Filter.getDefaultValueBinding(\"%s\"), %s, \"%s\", \"%s\", false); ",
						this.id, this.filterData, this.filterRelation, this.defaultValueBindingID, this.multiSelect,
						this.valueSeparator == null ? "" : this.valueSeparator,
						this.onGetCondition == null ? "" : this.onGetCondition));
		m.add(constructEvent);
		return m;
	}

	private Element createSelect() {
		Element g = Utils.createComponentDiv(Utils.GRID_SELECT_COMPONENT, selectID);
		g.addAttribute("ref", String.format("instance('%s')/value", this.innerDataID));
		g.addAttribute("label-ref", String.format("instance('%s')/label", this.innerDataID));
		g.addAttribute("default-label-ref", this.defaultLabel);
		g.addAttribute("all-selected-label-ref", this.allSelectedLabel);
		g.addAttribute("multi-select", this.multiSelect);
		g.addAttribute("class", "xui-autofill");
		g.addAttribute("dropdown-height", this.dropdownHeight);
		g.addAttribute("value-separator", this.valueSeparator);
		g.addAttribute("label-separator", this.labelSeparator);
		g.addAttribute("smart-render", this.smartRender);
		g.addAttribute("delay-create-grid", this.delayCreateGrid);
		g.addAttribute("input-changeable", this.inputChangeable);
		g.addAttribute("onRowDisabled", this.onRowDisabled);
		g.addAttribute("onAfterRowFill", this.onAfterRowFill);

		g.add(this.valueColumn);
		g.add(this.labelColumn);
		g.add(this.itemset);
		return g;
	}

	private Element createDefaultValueBinding() {
		if (this.defaultValue == null || "".equals(this.defaultValue))
			return null;
		Element e = DocumentHelper.createElement(new QName("output", Utils.XFORMS_NAMESPACE));
		e.addAttribute("id", this.defaultValueBindingID);
		e.addAttribute("value", this.defaultValue);
		e.addAttribute("style", "display:none");
		return e;
	}
}
