import java.util.List;
import java.util.Map;
import java.util.Random;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.Node;
import org.dom4j.QName;

import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

/**
 * html/js 实现轻量页签
 * 
 * @author  xyh
 * @version  2010-3-30
 */

public class SimpleTabs implements JavaTemplate {
	private Element bound;
	private List<Element> tabs;
	private Element root;
	private String id;
	private static Random random = new Random(System.currentTimeMillis());
	public static final Namespace JUSTEP_NAMESPACE = XMLConstants.XUI_NAMESPACE;

	public Element execute(Element bound, Map context) throws XBLException {
		this.bound = bound;
		this.tabs = this.bound.elements(new QName("tab", JUSTEP_NAMESPACE));
		//addDefaultClass();
		
		this.root = DocumentHelper.createElement("root");
		this.id = bound.attributeValue("id")!=null?bound.attributeValue("id"):SimpleTabs.genId();
		if(bound.attributeValue("id")==null){
			bound.addAttribute("id", this.id);
		}
		createBind(this.root,this.id,bound.attributeValue("ref"));
		createBody();

		return this.root;
	}

	private void addDefaultClass(){
		String s = this.bound.attributeValue("class");
		this.bound.addAttribute("class", "xui-tabPanel" + ((s == null || "".equals(s))?"":(" "+s)));
	}
	
	private void createBind(Element parent,String nodeId,String ref) {
		if(ref==null || ref.equals(""))return;
		Element div = parent.addElement(new QName("div",XMLConstants.XHTML_NAMESPACE));
		div.addAttribute("style", "display:none");
		Element output = div.addElement(new QName("output", XMLConstants.XFORMS_NAMESPACE));
		output.addAttribute("id", nodeId+"_ref");
		output.addAttribute("ref", ref);
	}

	private void createBody() {
		boolean hasSelectedTab = this.bound.selectNodes("//*[local-name()='tab' and @selected = 'true']").size()==1;
		Element rootDiv = this.root.addElement(new QName("div",XMLConstants.XHTML_NAMESPACE));
		rootDiv.addAttribute("class","jstabbar");
		rootDiv.addAttribute("id",this.id+"_root");

/*		
		Element rootTable = rootDiv.addElement(new QName("table",XMLConstants.XHTML_NAMESPACE));
		rootTable.addAttribute("width", "100%");
		rootTable.addAttribute("height", "100%");
		rootTable.addAttribute("cellpadding", "0");
		rootTable.addAttribute("cellspacing", "0");
//		rootTable.addAttribute("style", "table-layout:fixed");
			
		Element tabTD = rootTable.addElement(new QName("tr",XMLConstants.XHTML_NAMESPACE)).addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		Element contentTD = rootTable.addElement(new QName("tr",XMLConstants.XHTML_NAMESPACE)).addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		tabTD.addAttribute("height", "1");
		contentTD.addAttribute("height", "100%");
*/		
		
		Element ul = rootDiv.addElement(new QName("ul",XMLConstants.XHTML_NAMESPACE)).addAttribute("class", "tabItems clearfix");
		
		Element contentDiv = rootDiv.addElement(new QName("div",XMLConstants.XHTML_NAMESPACE));
		contentDiv.addAttribute("class", "contents");
		contentDiv.addAttribute("id", this.id+"_contents");
		
		for (int i = 0;i<tabs.size();i++) {
			//tabs
			Element tab = tabs.get(i);
			String tabid = tab.attributeValue("id");
			tabid = (tabid==null || "".equals(tabid))?SimpleTabs.genId():tabid;
			boolean selected = (!hasSelectedTab && i==0)||hasSelectedTab && "true".equals(tab.attributeValue("selected"));
			
			Element li = ul.addElement(new QName("li",XMLConstants.XHTML_NAMESPACE));
			li.addAttribute("id",tabid+"_tab");
			if("false".equalsIgnoreCase(tab.attributeValue("visable"))) li.addAttribute("style","display:none;");
			
			Element a = li.addElement(new QName("button",XMLConstants.XHTML_NAMESPACE));
			a.addAttribute("onclick", "this.parentNode.parentNode.parentNode.parentNode.tabbar.setTabActive('"+tabid+"');this.blur();");
			a.addAttribute("type","button"); 
			
			String accesskey = tab.attributeValue("accesskey");
			String tabindex = tab.attributeValue("tabindex");
			String disabled = tab.attributeValue("disabled");
			
			if (accesskey!=null) a.addAttribute("accesskey",accesskey); 
			if (tabindex!=null) a.addAttribute("tabindex",tabindex);
			if ("true".equals(disabled)) a.addAttribute("disabled",disabled);
			a.addText(tab.elementTextTrim(new QName("label", JUSTEP_NAMESPACE)));
			
			if(selected){
				li.addAttribute("class", "selected");
				a.addAttribute("class", "selected");
			}
			
			createBind(li,tabid,tab.attributeValue("ref")); 
			
			//contents
			Element div = contentDiv.addElement(new QName("div",XMLConstants.XHTML_NAMESPACE));
			div.addAttribute("id", tabid);
			div.addAttribute("class", selected?"content selected":"content");
			if (tab.attributeValue("xforms-select")!=null && !"".equals(tab.attributeValue("xforms-select"))){
				div.addAttribute("xforms-select", tab.attributeValue("xforms-select"));
			}
			if (tab.attributeValue("xforms-deselect")!=null && !"".equals(tab.attributeValue("xforms-deselect"))){
				div.addAttribute("xforms-deselect", tab.attributeValue("xforms-deselect"));
			}
			List<Element> actions = tab.elements(new QName("action", XMLConstants.XFORMS_NAMESPACE));
			for (Element action : actions) {
				div.add((Element)action.clone());
			}
			List<Node> nodes = tab.selectNodes("text()|*[not(local-name()='label' and namespace-uri()='http://www.justep.com/xui') and name()!='xforms:action']");
			for (Node node : nodes) {
				div.add((Node)node.clone());
			}
		}
		
	}

	private static String genId(){
		return "GLOBAL_ID_"+Math.abs(SimpleTabs.random.nextInt());
	}

	private boolean attributeNull(String attr){
		return bound.attributeValue(attr)==null || "".equals(bound.attributeValue(attr));
	}
	
}
