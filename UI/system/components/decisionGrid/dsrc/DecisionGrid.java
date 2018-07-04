
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;

import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class DecisionGrid implements JavaTemplate {

	private String id;
	private String decisionGridFrameID;
	private String decisionGridDefID;
	private Element decisionGridDef;
	private Element rootE;
	
	public Element execute(Element bound, Map context) throws XBLException {
		init(bound);
		build();
		return rootE;
	}
	
	private void init(Element bound){
		this.decisionGridDef = bound;
		this.id = this.decisionGridDef.attributeValue("id");
		this.decisionGridDefID = String.format("decisionGrid_%s_define", this.id);
		this.decisionGridFrameID = String.format("decisionGrid_%s_frame", this.id);
		this.rootE = DocumentHelper.createElement("root");
		rootE.addAttribute(new QName("class", new Namespace("xbl", "http://www.w3.org/ns/xbl")), "xui-decisionGrid");
	}
	
	private void build(){
	
		Element inhead = rootE.addElement(new QName("inhead", new Namespace("xui", "http://www.justep.com/xui")));
		Element script = inhead.addElement(new QName("script", XMLConstants.XHTML_NAMESPACE));
		script.addAttribute("language", "javascript");

		String chartStr = generateDecisionGridDefine();
		script.addCDATA(chartStr);
		
		String autoLoad = this.decisionGridDef.attributeValue("auto-load");
		if(autoLoad == null){autoLoad="";}
		if ("true".equals(autoLoad)) {	
			Element model = rootE.addElement(new QName("model", XMLConstants.XFORMS_NAMESPACE));
			model.addAttribute("id", String.format("report_%s_model", id));
			Element onload = model.addElement(new QName("action", XMLConstants.XFORMS_NAMESPACE));
			onload.addAttribute(new QName("event", XMLConstants.XML_EVENTS_NAMESPACE), "onload");
			Element onloadScript = onload.addElement(new QName("script", XMLConstants.XFORMS_NAMESPACE));
			onloadScript.addCDATA(String.format("justep.xbl('%s').refresh()", id));		
		}
		
		//高度宽度直接受外部环境设定 自身不设置
		Element frameE = this.rootE.addElement("iframe");
		frameE.addAttribute("name", this.decisionGridFrameID);
		frameE.addAttribute("style", "width:100%;height:100%;");
		frameE.addAttribute("frameborder", "0");
		
		//frameE.addAttribute("width", this.decisionGridDef.attributeValue("width"));
		//frameE.addAttribute("height", this.decisionGridDef.attributeValue("height"));
		
	}
	
	
	private String generateDecisionGridDefine(){
		Document decisionGridDoc;
		try {
			decisionGridDoc = DocumentHelper.parseText(
				"<request data=\""+this.decisionGridDef.attributeValue("data")+"\" >" +
					"<business-params>" +
						"<businessid></businessid>" +
						"<activity></activity>" +
						"<process></process>" +
					"</business-params>" +
					"<mdx>" +
						"<key>"+this.id+"</key>" +
						"<datasource></datasource>" +
						"<catalog></catalog>" +
						"<query></query>" +
					"</mdx>" +
				"</request>");
		} catch (DocumentException e) {
			return "";
		}
		
		String xml = decisionGridDoc.asXML();
		xml = xml.replaceAll("[\\r\\n]", "").replaceAll("'", "\\\\'");
		
		String info = String.format(" var %1$s=null; function get%1$s(){ if (%1$s==null){%1$s= justep.XML.fromString('%2$s');}return %1$s} ",
				this.decisionGridDefID, xml);
		
		return info;
		
	}
	
}
