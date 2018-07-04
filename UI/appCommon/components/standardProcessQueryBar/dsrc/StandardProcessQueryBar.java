import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

import appCommon.component.Utils;

public class StandardProcessQueryBar implements JavaTemplate {

	private String id;
	private String data;

	private String bizStateRelation;

	private String dateFilterMode;
	private String dateRelation1;
	private String dateRelation2;

	private String personIDRelation;
	private String orgURLRelation;
	private String executeConcept;

	private String smartRelations;

	private String navigatorID;
	private String bizStateFilterID;
	private String dateFilterID;
	private String orgFilterID;
	private String smartFilterID;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.data = Utils.getAttributeOfReuired(bound, "data");

		this.bizStateRelation = Utils.getAttributeOfDefault(bound, "biz-state-relation", "fBizState");

		this.dateFilterMode = Utils.getAttributeOfDefault(bound, "date-filter-mode", "single");
		this.dateRelation1 = Utils.getAttributeOfDefault(bound, "date-relation1", "fCreateTime");
		this.dateRelation2 = bound.attributeValue("date-relation2");

		this.personIDRelation = Utils.getAttributeOfDefault(bound, "person-id-relation", "fCreatePsnID");
		this.orgURLRelation = Utils.getAttributeOfDefault(bound, "org-url-relation", "fCreatePsnFID");
		this.executeConcept = Utils.getAttributeOfReuired(bound, "execute-concept");

//		this.smartRelations = Utils.getAttributeOfReuired(bound, "smart-relations");

		this.navigatorID = this.id + "_navigator";
		this.bizStateFilterID = this.id + "_bizStateFilter";
		this.dateFilterID = this.id + "_dateFilter";
		this.orgFilterID = this.id + "_orgFilter";
//		this.smartFilterID = this.id + "_smartFilter";

		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createNavigatorBar());
		root.add(this.createFilter());
		return root;
	}

	private Element createNavigatorBar() {
		Element bar = DocumentHelper.createElement(new QName("bar", Utils.XUI_NAMESPACE));
		bar.addAttribute("component", Utils.NAVIGATOR_BAR_COMPONENT);
		bar.addAttribute("id", this.navigatorID);
		bar.addAttribute("data", this.data);

		bar.add(DocumentHelper.createElement("item").addAttribute("name", "refresh-item"));
		bar.add(DocumentHelper.createElement("item").addAttribute("name", "filter-item"));
		bar.add(DocumentHelper.createElement("item").addAttribute("name", "filter-pattern-item"));
		bar.add(DocumentHelper.createElement("item").addAttribute("name", "separator"));
		bar.add(DocumentHelper.createElement("item").addAttribute("name", "custom-page-item"));

		return bar;
	}

	private Element createFilter() {
		Element filter = Utils.createToolbar(null);

		{
			Element stateItem = Utils.createToolbarItem(null);
			Element stateFilter = Utils.createComponentDiv(Utils.BIZ_STATE_FILTER_COMPONENT, this.bizStateFilterID);
			stateFilter.addAttribute("style", "width: 80px");
			stateFilter.addAttribute("filter-data", this.data);
			stateFilter.addAttribute("filter-relation", this.bizStateRelation);

			stateItem.add(stateFilter);
			filter.add(stateItem);
		}
		filter.add(Utils.createToolbarSeparator());
		{
			Element dateItem = Utils.createToolbarItem(null);
			Element dateFilter = Utils.createComponentDiv(Utils.EXT_DATE_FILTER_COMPONENT, this.dateFilterID);
			dateFilter.addAttribute("style", "width: 80px");
			dateFilter.addAttribute("filter-data", this.data);
			dateFilter.addAttribute("filter-date-mode", this.dateFilterMode);
			dateFilter.addAttribute("filter-date-relation1", this.dateRelation1);
			dateFilter.addAttribute("filter-date-relation2", this.dateRelation2);
			
			dateItem.add(dateFilter);
			filter.add(dateItem);
		}
		filter.add(Utils.createToolbarSeparator());
		{
			Element orgItem = Utils.createToolbarItem(null);
			Element orgFilter = Utils.createComponentDiv(Utils.EXT_ORG_FILTER_COMPONENT, this.orgFilterID); 
			orgFilter.addAttribute("style", "width: 140px");
			orgFilter.addAttribute("filter-data", this.data);
			orgFilter.addAttribute("person-id-relation", this.personIDRelation);
			orgFilter.addAttribute("org-url-relation", this.orgURLRelation);
			orgFilter.addAttribute("manage-type-codes", "call('appCommon.component.StandardProcessQueryBar.getManageTypeCodes')");
			orgFilter.addAttribute("execute-concept", this.executeConcept);
			
			orgItem.add(orgFilter);
			filter.add(orgItem);
		}
//		filter.add(Utils.createToolbarSeparator());
//		{
//			Element smartItem = Utils.createToolbarItem(null);
//			Element smartFilter = Utils.createComponentDiv(Utils.SMART_FILTER_COMPONENT, this.smartFilterID);
//			smartFilter.addAttribute("style", "width: 140px");
//			smartFilter.addAttribute("filter-data", this.data);
//			smartFilter.addAttribute("filter-relations", this.smartRelations);
//			
//			smartItem.add(smartFilter);
//			filter.add(smartItem);
//		}
		return filter;
	}
}
