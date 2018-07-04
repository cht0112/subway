import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;


import com.justep.common.MessageUtils;
import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.component.ComponentUtils;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class DateFilter implements JavaTemplate {

	private final String FILTER_DATE_MODE_SINGLE = "single";
	private final String FILTER_DATE_MODE_RANGE = "range";

	private final String[] DATE_SELECT_ITEMS = { 
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_ALL), 
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_TODAY), 
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_YESTERDAY),
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_THIS_WEEK),
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_LAST_WEEK),
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_THIS_MONTH),
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_LAST_MONTH),
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_THIS_YEAR),
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_LAST_YEAR),
			MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_CUSTOM)
			};

	private String id;

	private String filterData;
	private String filterDateMode;
	private String fitlerDateRelation1;
	private String fitlerDateRelation2;

	private String defaultSelect;
	private String defaultLabel;
	private String autoRefresh;

	private String onGetCondition;
	private String onChanged;

	private String modelID;
	private String innerDataID;
	private String selectID;
	private String dialogID;
	
	private String tabindex;
	private String accesskey;
	private String readonly;
	private String disabled;

	@SuppressWarnings("rawtypes")
	public Element execute(Element bound, Map context) throws XBLException {
		this.init(bound);
		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createDataModel());
		root.add(this.createSelect());
		root.add(this.createDialog());
		root.add(this.createXBLAttribute());
		return root;
	}

	private void init(Element bound) throws XBLException {
		String boundClass = bound.attributeValue("class");
		bound.addAttribute("class", "xui-select" + (ComponentUtils.isStringEmpty(boundClass)? "" : (" " + boundClass)));

		this.id = ComponentUtils.getAttributeOfReuired(bound, "id");
		this.filterData = ComponentUtils.getAttributeOfDefault(bound, "filter-data","");
		this.fitlerDateRelation1 = ComponentUtils.getAttributeOfDefault(bound, "filter-date-relation1","");
		
		this.filterDateMode = ComponentUtils.getAttributeOfDefault(bound, "filter-date-mode", FILTER_DATE_MODE_SINGLE);
		if (this.filterDateMode.equals(FILTER_DATE_MODE_RANGE)) {
			this.fitlerDateRelation2 = ComponentUtils.getAttributeOfReuired(bound, "filter-date-relation2");
		}
		this.defaultSelect = ComponentUtils.getAttributeOfDefault(bound, "default-select", "0");
		this.defaultLabel = this.DATE_SELECT_ITEMS[Integer.parseInt(this.defaultSelect)];

		this.autoRefresh = ComponentUtils.getAttributeOfDefault(bound, "auto-refresh", "false");

		this.onGetCondition = bound.attributeValue("onGetCondition");
		this.onChanged = bound.attributeValue("onChanged");

		String globalID = com.justep.xbl.Utils.generateGlobalId();
		this.modelID = this.id + "_model_" + globalID;
		this.innerDataID = this.id + "_data_" + globalID;
		this.selectID = this.id + "_select_" + globalID;
		this.dialogID = this.id + "_dialog_" + globalID;
		
		this.tabindex = ComponentUtils.getAttributeOfDefault(bound, "tabindex", "");
		this.accesskey = ComponentUtils.getAttributeOfDefault(bound, "accesskey", "");
		this.readonly = ComponentUtils.getAttributeOfDefault(bound, "readonly", "");
		this.disabled = ComponentUtils.getAttributeOfDefault(bound, "disabled", "");
		
		if(bound.attribute("disabled") != null)
			bound.remove(bound.attribute("disabled"));
		if(bound.attribute("readonly") != null)
			bound.remove(bound.attribute("readonly"));	
	}

	private Element createDataModel() {
		Element m = ComponentUtils.createModel(this.modelID);
		Element d = ComponentUtils.createSimpleData(this.innerDataID, "value,label,beginDate,endDate", true);
		
		m.addElement(new QName("bind", ComponentUtils.XFORMS_NAMESPACE))
			.addAttribute("type", "xsd:date")
			.addAttribute("nodeset", String.format("instance('%s')/beginDate", this.innerDataID));
		m.addElement(new QName("bind", ComponentUtils.XFORMS_NAMESPACE))
			.addAttribute("type", "xsd:date")
			.addAttribute("nodeset", String.format("instance('%s')/endDate", this.innerDataID));
		m.add(d);
		/*
		justep.component.ExtDateFilter.setFilterCondition = function(id, filterData,
				filterMode, dateRelation1, dateRelation2, currentSelect, defaultSelect,
				customBeginDate, customEndDate, onGetConditionEvent, isRefresh) {
			 
		 */
		if("true".equals(this.autoRefresh) && !"".equals(filterData) && !"".equals(fitlerDateRelation1)){
			Element constructEvent = ComponentUtils.createScriptAction(
					"xbl-loaded",
					null,
					String.format(
							"justep.DateFilter.setFilter(\"%s\", justep.xbl(\"%s\"), \"%s\", \"%s\", \"%s\", \"\", \"%s\", null, null, \"%s\", false); ",
							this.id, this.filterData, this.filterDateMode, 
							this.fitlerDateRelation1, 
							this.fitlerDateRelation2 == null ? "" : this.fitlerDateRelation2, 
									this.defaultSelect,
									this.onGetCondition == null ? "" : this.onGetCondition));
			m.add(constructEvent);			
		}
		return m;
	}

	private Element createSelect() {
		Element select = ComponentUtils.createComponentDiv(ComponentUtils.GRID_SELECT_COMPONENT, selectID);
		select.addAttribute("ref", String.format("instance('%s')/value", this.innerDataID));
		select.addAttribute("label-ref", String.format("instance('%s')/label", this.innerDataID));
		select.addAttribute("default-label-ref", String.format("'%s'", this.defaultLabel));
		select.addAttribute("class", "xui-autofill");
		
		if(!"".equals(this.tabindex)){
			select.addAttribute("tabindex", this.tabindex);			
		}
		if(!"".equals(this.accesskey)){
			select.addAttribute("accesskey", this.accesskey);
		}
		if(!"".equals(this.readonly)){
			select.addAttribute("readonly", this.readonly);
		}
		if(!"".equals(this.disabled)){
			select.addAttribute("disabled", this.disabled);			
		}

		select.addElement(new QName("value", ComponentUtils.XFORMS_NAMESPACE)).addAttribute("ref", "rowid");
		select.addElement(new QName("label", ComponentUtils.XFORMS_NAMESPACE)).addAttribute("ref", "label");

		Element itemset = select.addElement(new QName("itemset", ComponentUtils.XFORMS_NAMESPACE));

		itemset.addElement(new QName("column", ComponentUtils.XFORMS_NAMESPACE)).addAttribute("ref", "label");

		Element itemsetData = itemset.addElement(new QName("itemset-data")).addAttribute("xmlns", "");
		Element rows = itemsetData.addElement("rows");
		for (int i = 0; i < this.DATE_SELECT_ITEMS.length; i++) {
			Element row = rows.addElement("row").addAttribute("id", String.format("%d", i));
			row.addElement("cell").addText(this.DATE_SELECT_ITEMS[i]);
		}

		return select;
	}

	private Element createDialog() {
		Element table = DocumentHelper.createElement(new QName("table", ComponentUtils.XHTML_NAMESPACE));
		table.addAttribute("style", "width:100%;height:100%;table-layout:fixed")
		.addAttribute("cellspacing", "8")
		.addAttribute("cellpadding", "0")
		.addAttribute("border", "0");

		Element tr = table.addElement(new QName("tr", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("style", "height: 28px").addAttribute("valign", "middle");
		tr.addElement(new QName("td", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("style", "width: 56px;")
			.addText(MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_START_DATE));
		tr.addElement(new QName("td", ComponentUtils.XHTML_NAMESPACE))
			.addElement(new QName("input", ComponentUtils.XFORMS_NAMESPACE))
			.addAttribute("ref", String.format("instance('%s')/beginDate", this.innerDataID)).addAttribute("style", "width:100%");

		tr = table.addElement(new QName("tr", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("style", "height: 28px").addAttribute("valign", "middle");
		tr.addElement(new QName("td", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("style", "width: 56px;")
			.addText(MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_END_DATE));
		tr.addElement(new QName("td", ComponentUtils.XHTML_NAMESPACE))
			.addElement(new QName("input", ComponentUtils.XFORMS_NAMESPACE))
			.addAttribute("ref", String.format("instance('%s')/endDate", this.innerDataID)).addAttribute("style", "width:100%");

		tr = table.addElement(new QName("tr", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("style", "height: 100%").addAttribute("valign", "middle");
		Element buttonTD = tr.addElement(new QName("td", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("align", "right").addAttribute("colspan", "2");
		buttonTD.addElement(new QName("button", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("class", "xforms-trigger xui-button")
			.addAttribute("style", "width: 75px;margin-right:8px;")
			.addAttribute("onclick", String.format("xforms.blur(true); if (justep.xbl('%s')._doDialogCheck()) {xforms('%s').close();}", this.id, this.dialogID))
			.addText(MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_OK));
		buttonTD.addElement(new QName("button", ComponentUtils.XHTML_NAMESPACE))
			.addAttribute("class", "xforms-trigger xui-button")
			.addAttribute("style", "width: 75px")
			.addAttribute("onclick", String.format("xforms('%s').close();", this.dialogID))
			.addText(MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_CANCEL));
		
		Element dialog = DocumentHelper.createElement(new QName("dialog", ComponentUtils.XFORMS_NAMESPACE))
			.addAttribute("id", this.dialogID)
			.addAttribute("title", MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_DATEFILTER_LABEL_CUSTOM))
			.addAttribute("minmax", "false")
			.addAttribute("resizable", "false")
			.addAttribute("width", "242")
			.addAttribute("height", "135");
		dialog.add(table);
		return dialog;
	}
	
	private Element createXBLAttribute() {
		Element e = ComponentUtils.createXBLAttribute();
		e.addAttribute("filter-data", this.filterData);
		e.addAttribute("filter-date-mode", this.filterDateMode);
		e.addAttribute("filter-date-relation1", this.fitlerDateRelation1);
		e.addAttribute("filter-date-relation2", this.fitlerDateRelation2);

		e.addAttribute("default-select", this.defaultSelect);
		e.addAttribute("auto-refresh", this.autoRefresh);

		e.addAttribute("model-id", this.modelID);
		e.addAttribute("inner-data-id", this.innerDataID);
		e.addAttribute("select-id", this.selectID);
		e.addAttribute("dialog-id", this.dialogID);

		e.addAttribute("onGetCondition", this.onGetCondition);
		e.addAttribute("onChanged", this.onChanged);
		return e;
	}
}
