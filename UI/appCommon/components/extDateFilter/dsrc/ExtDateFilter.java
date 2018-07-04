import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import appCommon.component.Utils;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class ExtDateFilter implements JavaTemplate {

	private final String FILTER_DATE_MODE_SINGLE = "single";
	private final String FILTER_DATE_MODE_RANGE = "range";

	private final String[] DATE_SELECT_ITEMS = { "全部", "今天", "昨天", "本周", "上周", "本月", "上月", "今年", "去年", "自定义..." };

	private String id;

	private String filterData;
	private String filterDateMode;
	private String fitlerDateRelation1;
	private String fitlerDateRelation2;

	private String defaultSelect;
	private String defaultLabel;
	private String autoRefresh;

	private String onGetCondition;

	private String modelID;
	private String innerDataID;
	private String selectID;
	private String dialogID;

	@SuppressWarnings("unchecked")
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
		bound.addAttribute("class", "xui-select" + (Utils.isStringEmpty(boundClass)? "" : (" " + boundClass)));

		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.filterData = Utils.getAttributeOfReuired(bound, "filter-data");
		this.filterDateMode = Utils.getAttributeOfDefault(bound, "filter-date-mode", FILTER_DATE_MODE_SINGLE);
		this.fitlerDateRelation1 = Utils.getAttributeOfReuired(bound, "filter-date-relation1");
		if (this.filterDateMode.equals(FILTER_DATE_MODE_RANGE)) {
			this.fitlerDateRelation2 = Utils.getAttributeOfReuired(bound, "filter-date-relation2");
		}
		this.defaultSelect = Utils.getAttributeOfDefault(bound, "default-select", "0");
		this.defaultLabel = this.DATE_SELECT_ITEMS[Integer.parseInt(this.defaultSelect)];

		this.autoRefresh = Utils.getAttributeOfDefault(bound, "auto-refresh", "true");

		this.onGetCondition = bound.attributeValue("onGetCondition");

		String globalID = com.justep.xbl.Utils.generateGlobalId();
		this.modelID = this.id + "_model_" + globalID;
		this.innerDataID = this.id + "_data_" + globalID;
		this.selectID = this.id + "_select_" + globalID;
		this.dialogID = this.id + "_dialog_" + globalID;
	}

	private Element createDataModel() {
		Element m = Utils.createModel(this.modelID);
		Element d = Utils.createSimpleData(this.innerDataID, "value,label,beginDate,endDate", true);
		m.addElement(new QName("bind", Utils.XFORMS_NAMESPACE))
			.addAttribute("type", "xsd:date")
			.addAttribute("nodeset", String.format("instance('%s')/beginDate", this.innerDataID));
		m.addElement(new QName("bind", Utils.XFORMS_NAMESPACE))
			.addAttribute("type", "xsd:date")
			.addAttribute("nodeset", String.format("instance('%s')/endDate", this.innerDataID));
		m.add(d);
		/*
		appCommon.component.ExtDateFilter.setFilterCondition = function(id, filterData,
				filterMode, dateRelation1, dateRelation2, currentSelect, defaultSelect,
				customBeginDate, customEndDate, onGetConditionEvent, isRefresh) {
			 
		 */
		Element constructEvent = Utils.createScriptAction(
				"xforms-model-construct",
				null,
				String.format(
						"appCommon.component.ExtDateFilter.setFilterCondition(\"%s\", justep.xbl(\"%s\"), \"%s\", \"%s\", \"%s\", \"\", \"%s\", null, null, \"%s\", false); ",
						this.id, this.filterData, this.filterDateMode, 
						this.fitlerDateRelation1, 
						this.fitlerDateRelation2 == null ? "" : this.fitlerDateRelation2, 
						this.defaultSelect,
						this.onGetCondition == null ? "" : this.onGetCondition));
		m.add(constructEvent);
		return m;
	}

	private Element createSelect() {
		Element select = Utils.createComponentDiv(Utils.GRID_SELECT_COMPONENT, selectID);
		select.addAttribute("ref", String.format("instance('%s')/value", this.innerDataID));
		select.addAttribute("label-ref", String.format("instance('%s')/label", this.innerDataID));
		select.addAttribute("default-label-ref", String.format("'%s'", this.defaultLabel));
		select.addAttribute("class", "xui-autofill");

		select.addElement(new QName("value", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "rowid");
		select.addElement(new QName("label", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "label");

		Element itemset = select.addElement(new QName("itemset", Utils.XFORMS_NAMESPACE));

		itemset.addElement(new QName("column", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "label");

		Element itemsetData = itemset.addElement(new QName("itemset-data")).addAttribute("xmlns", "");
		Element rows = itemsetData.addElement("rows");
		for (int i = 0; i < this.DATE_SELECT_ITEMS.length; i++) {
			Element row = rows.addElement("row").addAttribute("id", String.format("%d", i));
			row.addElement("cell").addText(this.DATE_SELECT_ITEMS[i]);
		}

		return select;
	}

	private Element createDialog() {
		Element table = DocumentHelper.createElement(new QName("table", Utils.XHTML_NAMESPACE));
		table.addAttribute("style", "margin: 5px; width: 220px; font-size: 12px;");

		Element tr = table.addElement(new QName("tr", Utils.XHTML_NAMESPACE))
			.addAttribute("style", "height: 25px");
		tr.addElement(new QName("td", Utils.XHTML_NAMESPACE))
			.addAttribute("style", "width: 67px; text-align: center;")
			.addText("开始日期");
		tr.addElement(new QName("td", Utils.XHTML_NAMESPACE))
			.addElement(new QName("input", Utils.XFORMS_NAMESPACE))
			.addAttribute("ref", String.format("instance('%s')/beginDate", this.innerDataID));

		tr = table.addElement(new QName("tr", Utils.XHTML_NAMESPACE))
			.addAttribute("style", "height: 25px");
		tr.addElement(new QName("td", Utils.XHTML_NAMESPACE))
			.addAttribute("style", "width: 67px; text-align: center;")
			.addText("结束日期");
		tr.addElement(new QName("td", Utils.XHTML_NAMESPACE))
			.addElement(new QName("input", Utils.XFORMS_NAMESPACE))
			.addAttribute("ref", String.format("instance('%s')/endDate", this.innerDataID));

		tr = table.addElement(new QName("tr", Utils.XHTML_NAMESPACE))
			.addAttribute("style", "height: 35px");
		Element buttonTD = tr.addElement(new QName("td", Utils.XHTML_NAMESPACE)).addAttribute("style", "text-align: center;").addAttribute("colspan", "2");
		buttonTD.addElement(new QName("input", Utils.XHTML_NAMESPACE))
			.addAttribute("type", "button")
			.addAttribute("value", "确定")
			.addAttribute("style", "width: 60px")
			.addAttribute("onclick", String.format("xforms.blur(true); if (justep.xbl('%s')._doDialogCheck()) {xforms('%s').close();}", this.id, this.dialogID));
		buttonTD.addElement(new QName("input", Utils.XHTML_NAMESPACE))
			.addAttribute("type", "button")
			.addAttribute("value", "取消")
			.addAttribute("style", "width: 60px")
			.addAttribute("onclick", String.format("xforms('%s').close();", this.dialogID));
		
		Element dialog = DocumentHelper.createElement(new QName("dialog", Utils.XFORMS_NAMESPACE))
			.addAttribute("id", this.dialogID)
			.addAttribute("title", "自定义")
			.addAttribute("minmax", "false")
			.addAttribute("resizeable", "false")
			.addAttribute("width", "250")
			.addAttribute("height", "135");
		dialog.add(table);
		return dialog;
	}
	
	private Element createXBLAttribute() {
		Element e = Utils.createXBLAttribute();
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

		return e;
	}
}
