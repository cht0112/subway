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

public class OrgTree implements JavaTemplate {
	private final String READER_ACTION = "/system/logic/action/queryOrgAction";
	private Element rootE;
	private Element dataE;
	private Element treeE;
	private Element defE;
	private String dataId;
	private String treeId;

	public Element execute(Element bound, Map context) throws XBLException {
		dataId = null;
		treeId = null;

		defE = bound;
		dataE = getDataDef();
		treeE = getTreeDef();

		if (null == treeE)
			throw XBLException.create(UISystemMessages.XBL_ORGTREE_TREE_DEFINE_ERROR, bound.asXML());

		rootE = DocumentHelper.createElement("root");
		processData();
		addDefaultClass();
		processTree();
		processAttribute();
		return this.rootE;
	}

	private void addDefaultClass(){
		String s = defE.attributeValue("class");
		defE.addAttribute("class", "xui-orgTree" + (DataUtils.isStringEmpty(s)?"":(" "+s)));
	}
	
	private void processAttribute() {
		Element e = rootE.addElement(new QName("span", XMLConstants.XHTML_NAMESPACE));
		e.addAttribute("style", "display:none");
		e.addAttribute("xblid", "attribute");
		e.addAttribute("data-id", getDataId());
		e.addAttribute("grid-id", getTreeId());
		e.addAttribute("auto-load", getAutoLoad());
	}

	private void processTree() {
		Element e = (Element) treeE.clone();
		rootE.add(e);
		e.addAttribute("id", getTreeId());
		e.addAttribute("delay", "true");
		e.addAttribute("data", getDataId());
		List<?> list = e.elements(new QName("column", XMLConstants.XUI_NAMESPACE));
		if (list.size() <= 0) {
			Element columnE = e.addElement(new QName("column", XMLConstants.XUI_NAMESPACE));
			columnE.addAttribute("ref", "sName");
			columnE.addAttribute("type", "tree");
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
		resultData.addAttribute("component", "/UI/system/components/data.xbl.xml#bizData");
		resultData.addAttribute("concept", "SA_OPOrg");
		resultData.addAttribute("offset", "0");
		resultData.addAttribute("limit", "-1");
		resultData.addAttribute("is-tree", "true");
		resultData.addAttribute("auto-load", "false");
		setActionAttribute(resultData);
		setTreeAttribute(resultData);
	}

	private void setActionAttribute(Element resultData) {
		Element e = resultData.element(new QName("reader", XMLConstants.XUI_NAMESPACE));
		if (null == e)
			e = resultData.addElement(new QName("reader", XMLConstants.XUI_NAMESPACE));
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
		else if(!isUseVirtualRoot())	
			e.addAttribute("virtual-root", "");
		if (null == e.attribute("root-filter"))
			e.addAttribute("root-filter", DataUtils.isStringEmpty(defE
					.attributeValue("manage-codes")) ? "" : "1=1");
	}

	private boolean isUseVirtualRoot(){
		return !"false".equalsIgnoreCase(defE.attributeValue("use-virtual-root"));
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
			resultDataE = (Element) modelE.selectSingleNode("./*[@component='/UI/system/components/data.xbl.xml#bizData']");
		}
		return resultDataE;
	}

	private Element createModel() {
		Element modelE = DocumentHelper.createElement(new QName("model", DataUtils.XFORMS_NAMESPACE));
		modelE.addAttribute("id", "model-" + Utils.generateGlobalId());
		rootE.add(modelE);
		return modelE;
	}

	private Element createData() {
		Element resultDataE = DocumentHelper.createElement(new QName("data", XMLConstants.XUI_NAMESPACE));
		resultDataE.addAttribute("id", getDataId());
		createModel().add(resultDataE);

		return resultDataE;
	}

	private String getTreeId() {
		if (DataUtils.isStringEmpty(treeId)) {
			if (null != treeE)
				treeId = treeE.attributeValue("id");
			if (DataUtils.isStringEmpty(treeId))
				treeId = "tree-" + Utils.generateGlobalId();
		}
		return treeId;
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

	private String getAutoLoad() {
		if (null != dataE && "true".equalsIgnoreCase(dataE.attributeValue("auto-load")))
			return "true";
		else
			return "false";
	}

	private Element getTreeDef() {
		return (Element) defE.selectSingleNode("./*[starts-with(@component,'/UI/system/components/grid.xbl.xml')]");
	}

	private Element getDataDef() {
		return (Element) defE.selectSingleNode(".//*[@component='/UI/system/components/data.xbl.xml#bizData']");
	}

}
