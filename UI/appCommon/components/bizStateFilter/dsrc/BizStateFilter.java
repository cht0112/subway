import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import appCommon.component.Utils;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class BizStateFilter implements JavaTemplate {

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
	
	private String autoSize;
	private String style;

	private String onGetCondition;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.init(bound);

		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createFilter());
		return root;
	}

	private void init(Element bound) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.filterData = Utils.getAttributeOfReuired(bound, "filter-data");
		this.filterRelation = Utils.getAttributeOfDefault(bound, "filter-relation", "fBizState");
		this.defaultValue = Utils.getAttributeOfDefault(bound, "default-value", "'bsEditing,bsExecuting,bsFinished'");
		this.defaultLabel = Utils.getAttributeOfDefault(bound, "default-label", "'编辑中,处理中,已完成'");
		this.allSelectedLabel = Utils.getAttributeOfDefault(bound, "all-selected-label", "'全部'");

		this.autoRefresh = Utils.getAttributeOfDefault(bound, "auto-refresh", "true");
		this.multiSelect = Utils.getAttributeOfDefault(bound, "multi-select", "true");
		this.valueSeparator = Utils.getAttributeOfDefault(bound, "value-separator", ",");
		this.labelSeparator = Utils.getAttributeOfDefault(bound, "label-separator", ",");
		
		this.autoSize = bound.attributeValue("auto-size");
		this.style = bound.attributeValue("style");

		this.onGetCondition = bound.attributeValue("onGetCondition");
	}

	private Element createFilter() {
		Element c = Utils.createComponentDiv(Utils.GRID_FILTER_COMPONENT, this.id);
		c.addAttribute("filter-data", this.filterData);
		c.addAttribute("filter-relation", this.filterRelation);
		c.addAttribute("default-value", this.defaultValue);
		c.addAttribute("default-label", this.defaultLabel);
		c.addAttribute("all-selected-label", this.allSelectedLabel);

		c.addAttribute("auto-refresh", this.autoRefresh);
		c.addAttribute("multi-select", this.multiSelect);
		c.addAttribute("value-separator", this.valueSeparator);
		c.addAttribute("label-separator", this.labelSeparator);

		c.addAttribute("auto-size", this.autoSize);
		c.addAttribute("style", this.style);
		
		c.addAttribute("onGetCondition", this.onGetCondition);

		c.addElement(new QName("value", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "rowid");
		c.addElement(new QName("label", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "label");
		
		Element itemset = c.addElement(new QName("itemset", Utils.XFORMS_NAMESPACE));
		
		itemset.addElement(new QName("column", Utils.XFORMS_NAMESPACE)).addAttribute("ref", "label");
		
		Element itemsetData = itemset.addElement(new QName("itemset-data")).addAttribute("xmlns", "");
		Element rows = itemsetData.addElement("rows");
		Element editingRow = rows.addElement("row").addAttribute("id", "bsEditing");
		editingRow.addElement("cell").addText("编辑中");
		Element executingRow = rows.addElement("row").addAttribute("id", "bsExecuting");
		executingRow.addElement("cell").addText("处理中");
		Element finishedRow = rows.addElement("row").addAttribute("id", "bsFinished");
		finishedRow.addElement("cell").addText("已完成");
		Element abortedRow = rows.addElement("row").addAttribute("id", "bsAborted");
		abortedRow.addElement("cell").addText("已终止");

		return c;
	}

}
