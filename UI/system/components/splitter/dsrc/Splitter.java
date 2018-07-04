import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.QName;

import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

/**
 * html/js splitter 组件
 * 
 * @author  xyh
 * @version  2010-3-30
 */
public class Splitter implements JavaTemplate{
	private Element bound;
	private Element root;
	private Element rootTable;
	private String mode;
	private boolean drag, arrow, resizable;
	private String fixSize,comSize,fixType;
	private static String IMG_DIR ="/UI/system/components/splitter/";
	private static String IMG_MOUSEOVER = "$(this).find('img').css('filter','')";
	private static String IMG_MOUSEOUT = "$(this).find('img').css('filter','alpha(opacity=50)')";
	private static String DRAG_STYLE = "line-height:0px;font-size:1px;background:#DFE8F6;";
	private static String IMG_STYLE = "font-size:1px;cursor:hand;filter:alpha(opacity=50);";
		
	public Element execute(Element bound, Map context) throws XBLException {
		this.bound = bound;
		
		//addDefaultClass();
		
		this.root = DocumentHelper.createElement("root");
		this.mode = attributeNull("mode")?"horz":bound.attributeValue("mode");
		this.drag = attributeNull("has-drag-bar")?true:"true".equals(bound.attributeValue("has-drag-bar"));
		this.arrow = attributeNull("has-arrow-button")?true:"true".equals(bound.attributeValue("has-drag-bar"));
		this.resizable = attributeNull("resizable")?true:"true".equals(bound.attributeValue("resizable"));
		this.fixType = bound.attributeValue("fix-type");
		this.fixSize = attributeNull("fix-size")?"50%":bound.attributeValue("fix-size");
		if(this.fixSize.indexOf("%") != -1){
			this.comSize = String.valueOf(100-Integer.parseInt(this.fixSize.substring(0,this.fixSize.indexOf("%"))))+"%";			
		}
		
		if("right".equals(this.fixType)||"bottom".equals(this.fixType)){
			String tmp = this.comSize;
			this.comSize = this.fixSize;
			this.fixSize = tmp;
		}

		this.rootTable = this.root.addElement(new QName("table",XMLConstants.XHTML_NAMESPACE));
		this.rootTable.addAttribute("width", "100%");
		this.rootTable.addAttribute("height", "100%");
		this.rootTable.addAttribute("cellpadding", "0");
		this.rootTable.addAttribute("cellspacing", "0");
		this.rootTable.addAttribute("border", "0");
		this.rootTable.addAttribute("style", "table-layout:fixed");
		
		if(this.mode.equals("vert")){
			createVert();
		}else{
			createHorz();
		}
		
		return this.root;
	}
	
	private void addDefaultClass(){
		String s = bound.attributeValue("class");
		bound.addAttribute("class", "xui-splitter" + ((s == null || "".equals(s))?"":(" "+s)));
	}
	
	private boolean attributeNull(String attr){
		return bound.attributeValue(attr)==null || "".equals(bound.attributeValue(attr));
	}
	/**
	 * 横向
	 */
	private void createHorz(){
		this.rootTable.addAttribute("class", "spliter-horz");

		Element tr = this.rootTable.addElement(new QName("tr",XMLConstants.XHTML_NAMESPACE)).addAttribute("height", "100%");
		
//		左
		Element leftTd = tr.addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		leftTd.addAttribute("class", "splitter-first");
		leftTd.addAttribute("align", "left");
		leftTd.addAttribute("valign", "top");
		if(fixSize != null){
			leftTd.addAttribute("style", "width:"+fixSize+";height:100%;");			
		}
		List<Node> lnodes = this.bound.selectSingleNode("./xhtml:div[@region='left']").selectNodes("text()|*");
		for (Node c : lnodes) {
			leftTd.add((Node)c.clone());
		}

//		中	
		Element middleTd = tr.addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		middleTd.addAttribute("class", "splitter-resizer");
		middleTd.addAttribute("style", "width:5px;");
		if(this.drag){
			middleTd.addAttribute("style", DRAG_STYLE + (resizable?"cursor:col-resize;":"")+"width:5px;");
			if(this.arrow){
				middleTd.addAttribute("onmouseover", IMG_MOUSEOVER);
				middleTd.addAttribute("onmouseout", IMG_MOUSEOUT);
				middleTd.addElement(new QName("img",XMLConstants.XHTML_NAMESPACE)).addAttribute("style",IMG_STYLE).addAttribute("src", IMG_DIR+"little_left.gif");
				middleTd.addElement(new QName("img",XMLConstants.XHTML_NAMESPACE)).addAttribute("style",IMG_STYLE).addAttribute("src", IMG_DIR+"little_right.gif");
			}
		}else{

		}
		
		Node center = this.bound.selectSingleNode("./xhtml:div[@region='center']"); 
		if(center != null){
			Element centerTd = tr.addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
			centerTd.addAttribute("class", "splitter-center");
			centerTd.addAttribute("align", "left");
			centerTd.addAttribute("valign", "top");
			if (this.comSize != null){
				centerTd.addAttribute("style", "width:"+this.comSize+";height:100%");
			}
			
			List<Node> rnodes = this.bound.selectSingleNode("./xhtml:div[@region='right']").selectNodes("text()|*");
			for (Node c : rnodes) {
				centerTd.add((Node)c.clone());
			}
		}
		
		
//		右
		Element rightTd = tr.addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		rightTd.addAttribute("class", "splitter-second");
		rightTd.addAttribute("align", "left");
		rightTd.addAttribute("valign", "top");
		if (this.comSize != null){
			rightTd.addAttribute("style", "width:"+this.comSize+";height:100%");
		}
		
		List<Node> rnodes = this.bound.selectSingleNode("./xhtml:div[@region='right']").selectNodes("text()|*");
		for (Node c : rnodes) {
			rightTd.add((Node)c.clone());
		}
	}
	
	/**
	 * 纵向
	 */
	private void createVert(){
		this.rootTable.addAttribute("class", "spliter-vert");	
//		上
		Element topTr = this.rootTable.addElement(new QName("tr",XMLConstants.XHTML_NAMESPACE));
		topTr.addAttribute("class", "splitter-first");
		if(fixSize != null){
			topTr.addAttribute("style", "height:"+this.fixSize+";");			
		}
		Element topTd = topTr.addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		topTd.addAttribute("align", "left");
		topTd.addAttribute("valign", "top");
		List<Node> tnodes = this.bound.selectSingleNode("./xhtml:div[@region='top']").selectNodes("text()|*");
		for (Node c : tnodes) {
			topTd.add((Node)c.clone());
		}
		
//		中
		Element centerTr = topTr.addElement(new QName("tr",XMLConstants.XHTML_NAMESPACE));
		centerTr.addAttribute("class", "splitter-resizer");
		centerTr.addAttribute("style", "height:5px;font-size:1px;");
		Element centerTd = centerTr.addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		if(this.drag){
			centerTd.addAttribute("align", "center");
			centerTd.addAttribute("style", DRAG_STYLE + (resizable?"cursor:row-resize;":""));			
			if(this.arrow){
				centerTd.addAttribute("onmouseover", IMG_MOUSEOVER);
				centerTd.addAttribute("onmouseout", IMG_MOUSEOUT);
				centerTd.addElement(new QName("img",XMLConstants.XHTML_NAMESPACE)).addAttribute("style",IMG_STYLE).addAttribute("src", IMG_DIR+"little_up.gif");
				centerTd.addElement(new QName("img",XMLConstants.XHTML_NAMESPACE)).addAttribute("style",IMG_STYLE).addAttribute("src", IMG_DIR+"little_down.gif");
			}
		}else{
		}
		
//		下
		Element bottomTr = topTr.addElement(new QName("tr",XMLConstants.XHTML_NAMESPACE));
		bottomTr.addAttribute("class", "splitter-second");
		Element bottomTd = bottomTr.addElement(new QName("td",XMLConstants.XHTML_NAMESPACE));
		bottomTd.addAttribute("align", "left");
		bottomTd.addAttribute("valign", "top");
		bottomTd.addAttribute("width", "100%");
		if (this.comSize != null){
			bottomTr.addAttribute("style", "height:"+this.comSize+";");
		}
		List<Node> bnodes = this.bound.selectSingleNode("./xhtml:div[@region='bottom']").selectNodes("text()|*");
		for (Node c : bnodes) {
			bottomTd.add((Node)c.clone());
		}
	}	 
}
