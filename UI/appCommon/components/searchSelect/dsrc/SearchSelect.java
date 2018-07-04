import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import appCommon.component.Utils;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class SearchSelect implements JavaTemplate {

	private String id;

	private String ref;
	private String labelRef;
	private String extRef;
	private String defaultLabelRef;

	private String dropdownHeight;
	private String inputChangeable;

	private Element itemset;
	private Element valueColumn;
	private Element labelColumn;
	private Element extColumn;

	//	private String defaultClass;
	//	private String customClass;
	//	private String style;

	private String tabindex;
	private String accesskey;
	private String readonly;
	private String disabled;

	private String onRowDisabled;
	private String onAfterRowFill;
	//	private String onDropdown;
	//	private String onCloseup;
	//	private String onKeyDown;
	//	private String onKeyUp;
	//	private String onKeyPress;      

	//	private String onSearch;

	private String selectID;

	public Element execute(Element bound, @SuppressWarnings("rawtypes") Map context) throws XBLException {
		this.init(bound);

		String boundClass = bound.attributeValue("class");
		bound.addAttribute("class", "xui-select" + (Utils.isStringEmpty(boundClass) ? "" : (" " + boundClass)));

		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createXBLAttribute());
		root.add(this.createSelect());
		return root;
	}

	private void init(Element bound) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.ref = Utils.getAttributeOfReuired(bound, "ref");
		this.labelRef = Utils.getAttributeOfReuired(bound, "label-ref");
		this.extRef = bound.attributeValue("ext-ref");
		this.defaultLabelRef = bound.attributeValue("default-label-ref");

		this.dropdownHeight = bound.attributeValue("dropdown-height");
		this.inputChangeable = Utils.getAttributeOfDefault(bound, "input-changeable", "false");

		this.itemset = (Element) bound.element(new QName("itemset", Utils.XFORMS_NAMESPACE)).createCopy();
		this.valueColumn = (Element) bound.element(new QName("value", Utils.XFORMS_NAMESPACE)).createCopy();
		this.labelColumn = (Element) bound.element(new QName("label", Utils.XFORMS_NAMESPACE)).createCopy();
		this.extColumn = bound.element(new QName("ext-value", Utils.XFORMS_NAMESPACE)) == null ? null : (Element) bound
				.element(new QName("ext-value", Utils.XFORMS_NAMESPACE)).createCopy();

		//		this.defaultClass = bound.attributeValue("defaultClass");
		//		this.customClass = bound.attributeValue("class");
		//		this.style = bound.attributeValue("style");

		this.tabindex = bound.attributeValue("tabindex");
		this.accesskey = bound.attributeValue("accesskey");
		this.readonly = bound.attributeValue("readonly");
		this.disabled = bound.attributeValue("disabled");

		this.onRowDisabled = bound.attributeValue("onRowDisabled");
		this.onAfterRowFill = bound.attributeValue("onAfterRowFill");
		//		this.onDropdown = bound.attributeValue("onDropdown");
		//		this.onCloseup = bound.attributeValue("onCloseup");
		//		this.onKeyDown = bound.attributeValue("onKeyDown");
		//		this.onKeyUp = bound.attributeValue("onKeyUp");
		//		this.onKeyPress = bound.attributeValue("onKeyPress");

		//		this.onSearch = bound.attributeValue("onSearch");

		String globalID = com.justep.xbl.Utils.generateGlobalId();
		this.selectID = this.id + "_select_" + globalID;
	}

	private Element createXBLAttribute() {
		Element e = Utils.createXBLAttribute();
		e.addAttribute("select-id", this.selectID);
		return e;
	}

	private Element createSelect() {
		Element select = Utils.createComponentDiv(Utils.GRID_SELECT_COMPONENT, this.selectID);
		select.addAttribute("ref", this.ref);
		select.addAttribute("label-ref", this.labelRef);
		select.addAttribute("ext-ref", this.extRef);
		select.addAttribute("default-label-ref", this.defaultLabelRef);

		select.addAttribute("dropdown-height", this.dropdownHeight);
		select.addAttribute("input-changeable", this.inputChangeable);

		select.addAttribute("tabindex", this.tabindex);
		select.addAttribute("accesskey", this.accesskey);
		select.addAttribute("readonly", this.readonly);
		select.addAttribute("disabled", this.disabled);

		//		select.addAttribute("default-class", this.defaultClass);
		//		select.addAttribute("class", this.customClass);
		//		select.addAttribute("style", this.style);
		select.addAttribute("class", "xui-autofill");

		select.addAttribute("delay-create-grid", "false");

		select.add(this.valueColumn);
		select.add(this.labelColumn);
		if (this.extColumn != null) {
			select.add(this.extColumn);
		}
		select.add(this.itemset);

		select.addAttribute("onRowDisabled", this.onRowDisabled);
		select.addAttribute("onAfterRowFill", this.onAfterRowFill);
		select.addAttribute("onDropdown", "appCommon.component.SearchSelect._doDropdown");
		select.addAttribute("onCloseup", "appCommon.component.SearchSelect._doCloseup");
		select.addAttribute("onKeyDown", "appCommon.component.SearchSelect._doKeyDown");
		select.addAttribute("onKeyUp", "appCommon.component.SearchSelect._doKeyUp");
		select.addAttribute("onKeyPress", "appCommon.component.SearchSelect._doKeyPress");
		return select;
	}
}
