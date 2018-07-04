import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.system.component.data.DataDef;
import com.justep.ui.system.component.data.DataUtils;
import com.justep.ui.system.component.data.bizdata.BizDataUtils;

public class Select {
	private String  kind;
	private Element defE;
	private Map context;
	private String dataId;
	private String gridId;
	
	public static String GRIDSELECT = "grid-select";
	public static String TREESELECT = "tree-select";
	
	public Select(Element bound, Map context, String kind){
		setKind(kind);
		setDefE(bound);
		setContext(context);
	}

	public String getKind() {
		return kind;
	}
	
	public void setKind(String kind) {
		this.kind = kind;
	}
	
	public Element getDefE() {
		return defE;
	}

	public void setDefE(Element defE) {
		this.defE = defE;
	}

	public Map getContext() {
		return context;
	}

	public void setContext(Map context) {
		this.context = context;
	}

	private boolean isMultiSelect(){
		return "true".equalsIgnoreCase(defE.attributeValue("multi-select"));
	}
	
	private String getSelectName(){
		String result = "gridselect";
		if(Select.GRIDSELECT.equals(getKind()))
			result = !isMultiSelect()?"gridselect1":"gridselect";
		else if(Select.TREESELECT.equals(getKind()))
			result = !isMultiSelect()?"treeselect1":"treeselect";
			
		return result;
	}
	
	public Element buildSelect(){
		
		//创建 root
		//创建 xui:inbody
		//生成 script
		//创建回调关系
		//创建 column
		//this.gridId = treeSelectE.attributeValue("id")+"-option-grid";
		Element rootE = DocumentHelper.createElement("root");
		Element inBodyE = DocumentHelper.createElement(DataUtils.INBODY_QNAME);
		rootE.add(inBodyE);
		
		Element treeSelectE = (Element)defE.clone();
		rootE.add(treeSelectE);
		treeSelectE.setQName(new QName(getSelectName(), DataUtils.XFORMS_NAMESPACE));
		treeSelectE.remove(treeSelectE.attribute("component"));		
		
		DataDef dataDef = this.getDataDef();
		String delay = "false";
		if (null != dataDef && BizDataUtils.isDelayLoad(dataDef.getDataDef())) {
			delay = "true";
			createDelayLoadDataEvent(treeSelectE,inBodyE);
			createRowAfterRenderEvent(treeSelectE,inBodyE,dataDef.getDataDef());
		}
		defE.addAttribute("delay", delay);
		
		processColumn(treeSelectE,dataDef);
		
		return rootE;
	}

	private void createRowAfterRenderEvent(Element treeSelectE,Element inBodyE,Element treeOptionE) {
 
		String nodeImgCallback = treeSelectE.attributeValue(new QName("onRowHasChildren"));

		if (!DataUtils.isStringEmpty(nodeImgCallback))
			return;
		
		String nodeKindPath = BizDataUtils.getNodeKindPath(treeOptionE);
		if (!DataUtils.isStringEmpty(nodeKindPath)) {
			String callback = createHasChildrenCallbackFunc(inBodyE);
			if (!DataUtils.isStringEmpty(callback))
				treeSelectE.addAttribute(new QName("onRowHasChildren"), callback);
		}		
	}

	private String createHasChildrenCallbackFunc(Element bodyE) {
		
		String funcName = getScriptFunName();
		String script = "function "+funcName
						+ "(data){" 
						+ "var instance = data.instance;"
						+ "var grid = data.grid;var cell = data.cell;"
						+ "var nodeKind =cell.getValueByColId(instance.nodeKindPath);"
						+ "return !grid.isLeafNode(nodeKind);"
						+ "}";
		Element funcE = DataUtils.createXHTMLScript(script);
		bodyE.add(funcE);	
		
/*		funcName = getScriptFunName();
		script = "function "+funcName
						+ "(data){" 
						+"var f = eval("+script+");"
						+"if (f && typeof f == 'function') {data.grid.hasChildrenCallback=f}"
						+ "}";
		Element funcEE = DataUtils.createXHTMLScript(script);
		bodyE.add(funcEE);	
*/		return funcName;
	}

	private void createDelayLoadDataEvent(Element treeSelectE,Element inBodyE) {
		String selfFunc = treeSelectE.attributeValue(new QName("onRowExpand"));
		String callback = createRowExpandFunc(inBodyE,selfFunc);
		if (!DataUtils.isStringEmpty(callback))
			treeSelectE.addAttribute(new QName("onRowExpand"), callback);		
	}

	private DataDef getDataDef(){
		Element e = defE.element(new QName("itemset", DataUtils.XFORMS_NAMESPACE));
		this.dataId = e.attributeValue("data");
		
		if(null!=e){
			return DataUtils.getDataDef(this.dataId, context);
		}else return null;
	}
	
	private boolean isBizData(){
		return getDataDef() instanceof com.justep.ui.system.component.data.bizdata.BizDataDef;
	}
	
	private boolean isColumn(List<String> columns, String col) {
		// TODO Auto-generated method stub
		for(String s : columns){
			if(s.equals(col)) return true;
		}
		return false;
	}

	private List<String> getColumns() {
		List<String> result = new ArrayList<String>();
		Element itemE = defE.element(new QName("itemset", DataUtils.XFORMS_NAMESPACE));
		if(null!=itemE){
			List<Element> list = itemE.elements(new QName("column", DataUtils.XFORMS_NAMESPACE));
			if(list.size()>0){
				for(Element e : list){
					if(!isBizData() || !"false".equals(e.attributeValue("visible"))) result.add(e.attributeValue("ref"));
				}
			}				
		}
		return result;
	}

	private void processColumn(Element e,DataDef ddf) {
		Element itemE = e.element(new QName("itemset", DataUtils.XFORMS_NAMESPACE));
		
		List<String> relations = null;
		if(ddf != null) relations = ddf.getRelationList();
		
		if(isBizData()){
			List<Element> ls = itemE.elements(new QName("column",DataUtils.XFORMS_NAMESPACE));
			if(null!=ls){
				for(int i=ls.size()-1;i>=0;i--){
					Element tempE = ls.get(i);
					if(relations != null && "false".equals(tempE.attributeValue("visible")) && isColumn(relations,tempE.attributeValue("ref")))
						itemE.remove(tempE);
					else{
						String w = tempE.attributeValue("width");
						if(null==w || "".equals(w)) tempE.addAttribute("width", "#");
					}
				}
			}		
		}else{
			List<Element> ls = itemE.elements(new QName("column",DataUtils.XFORMS_NAMESPACE));
			if(null!=ls){
				for(int i=ls.size()-1;i>=0;i--){
					Element tempE = ls.get(i);
					String w = tempE.attributeValue("width");
					if(null==w || "".equals(w)) tempE.addAttribute("width", "#");
				}
			}		
		}

		{//增加自动适应的列
			Element columnE = itemE.addElement(new QName("column",DataUtils.XFORMS_NAMESPACE));
			columnE.addAttribute("ref", "__c_");
			columnE.addAttribute("width", "*");
		}
		
		if(null != ddf && null != itemE){
			List<String> columns = getColumns();
			for(String r : relations){
				if(!isColumn(columns, r)){
					Element columnE = itemE.addElement(new QName("column",DataUtils.XFORMS_NAMESPACE));
					columnE.addAttribute("ref", r);
					columnE.addAttribute("visible", "false");
				}
			}
		}
	}
	
	private String createRowExpandFunc(Element bodyE,String fun){
		String funcName = getScriptFunName();
		String script = "function "+funcName
				+ "(data){"
				+ "var oData = justep.XData.$('"+this.dataId+"');"
				+ "var eventData = data;"
				+ "var rowID = eventData['rowId'];"
				+ "var delay = eventData['delay'];"
				+ "var control = eventData['source'];"
				+ "if(delay){if(oData){ " 
				+ "oData.loadTreeData(rowID, function(){control.setNodeLoadSuccess(rowID);});"
				+ (DataUtils.isStringEmpty(fun)?"":fun+"(data);")
				+ "}}}";
		Element funcE = DataUtils.createXHTMLScript(script);
		bodyE.add(funcE);
		return funcName;		
	}
	
	private String getScriptFunName(){
		String funcName = "func_"
			+ String.valueOf(java.lang.Math.abs(java.util.UUID.randomUUID()
					.toString().hashCode()));		
		return funcName;
	}
}
