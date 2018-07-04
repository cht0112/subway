import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.common.MessageUtils;
import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.component.data.DataUtils;

import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.Utils;
import com.justep.xbl.runtime.XBLException;

public class OrgSelect implements JavaTemplate {
	private final String READER_ACTION = "/system/logic/action/queryOrgAction";
	private Element rootE;
	private Element dataE;
	private Element selectE;
	private Element defE;
	private String dataId;
	private String selectId;

	@SuppressWarnings("rawtypes")
	public Element execute(Element bound, Map context) throws XBLException {
		dataId = null;
		selectId = null;
		defE = bound;
		dataE = getDataDef();
		selectE = getSelectDef();

		if (null == selectE)
			throw XBLException.create(UISystemMessages.XBL_ORGSELECT_SELECT_DEFINE_ERROR, bound.asXML());

		rootE = DocumentHelper.createElement("root");
		processData();
		processSelect();
		processAttribute();
		return this.rootE;
	}

	private void processAttribute() {
		Element e = rootE.addElement(new QName("span",
				XMLConstants.XHTML_NAMESPACE));
		e.addAttribute("style", "display:none");
		e.addAttribute("xblid", "attribute");
		e.addAttribute("data-id", getDataId());
		e.addAttribute("grid-id", getSelectId());
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
		e.addAttribute("delay", "true");
		e.addAttribute("class", "xui-autofill xforms-no-border");
		Element labelE = e.element(new QName("label",
				DataUtils.XFORMS_NAMESPACE));
		if (null == labelE) {
			labelE = e
					.addElement(new QName("label", DataUtils.XFORMS_NAMESPACE));
			labelE.addAttribute("ref", columns.get(0));
		}
		Element valueE = e.element(new QName("value",
				DataUtils.XFORMS_NAMESPACE));
		if (null == valueE) {
			valueE = e
					.addElement(new QName("value", DataUtils.XFORMS_NAMESPACE));
			valueE.addAttribute("ref", "rowid");
		}
		Element itemsetE = e.element(new QName("itemset",
				DataUtils.XFORMS_NAMESPACE));
		if (null != itemsetE)
			e.remove(itemsetE);
		itemsetE = e
				.addElement(new QName("itemset", DataUtils.XFORMS_NAMESPACE));
		itemsetE.addAttribute("data", getDataId());
		for (String s : columns) {
			Element columnE = itemsetE.addElement(new QName("column",
					DataUtils.XFORMS_NAMESPACE));
			columnE.addAttribute("ref", s);
			columnE.addAttribute("visable", "true");
		}
	}

	private void processData() {
		Element resultData = null;
		if (null == dataE)
			resultData = createData();
		else
			resultData = cloneData();
		setOrgDataAttribute(resultData);
	}

	private void setOrgDataAttribute(Element resultData) {
		resultData.addAttribute("id", getDataId());
		resultData.addAttribute("component",
				"/UI/system/components/data.xbl.xml#bizData");
		resultData.addAttribute("concept", "SA_OPOrg");
		resultData.addAttribute("offset", "0");
		resultData.addAttribute("limit", "-1");
		resultData.addAttribute("is-tree", "true");
		resultData.addAttribute("auto-load", "false");
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
	}

	private void setTreeAttribute(Element resultData) {
		Element e = resultData.element(new QName("tree-option",
				XMLConstants.XUI_NAMESPACE));
		if (null == e)
			e = resultData.addElement(new QName("tree-option",
					XMLConstants.XUI_NAMESPACE));
		e.addAttribute("parent-relation", "sParent");
		e.addAttribute("node-kind-relation", "sNodeKind");
		if (isUseVirtualRoot()
				&& DataUtils.isStringEmpty(e.attributeValue("virtual-root")))
			e.addAttribute("virtual-root", MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.XBL_ORG_VIRTUAL_ROOT));
		else if (!isUseVirtualRoot())
			e.addAttribute("virtual-root", "");
		if (null == e.attribute("root-filter"))
			e.addAttribute("root-filter", DataUtils.isStringEmpty(defE
					.attributeValue("manage-codes")) ? "" : "1=1");
	}

	private boolean isUseVirtualRoot() {
		return "true".equalsIgnoreCase(defE.attributeValue("use-virtual-root"));
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
		createModel().add(resultDataE);

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
					if (!"false"
							.equals(((Element) e).attributeValue("visible")))
						result.add(((Element) e).attributeValue("ref"));
				}
			} else
				result.add("sName");
		}
		return result;
	}

	private Element getSelectDef() {
		return (Element) defE
				.selectSingleNode("./*[@component='/UI/system/components/select.xbl.xml#treeSelect']");
	}

	private Element getDataDef() {
		return (Element) defE
				.selectSingleNode(".//*[@component='/UI/system/components/data.xbl.xml#bizData']");
	}

}
