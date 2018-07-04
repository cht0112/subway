import java.io.UnsupportedEncodingException;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;


public class DecisionData implements JavaTemplate {

	private Map<Object, Object> context;
	private Element dataDef;
	private Element rootE;
	private String dataId;
	
	
	/**
	 * 
	 * @param bound
	 * @param context
	 */
	public Element execute(Element bound, Map context) throws XBLException {
		this.dataDef = bound;
		this.dataId = dataDef.attributeValue("id");
		this.context = context;
		this.rootE = DocumentHelper.createElement("root");
		//this.rootE.add(this.generateDecisionDataInstance());
		this.processData();
		this.context.put("data." + this.dataId, bound.elements());
		return this.rootE;
		
		
	}
	
	/**
	 * 
	 * @return
	 */
	private Element generateDecisionDataInstance(){
		Element instanceE = DocumentHelper.createElement(new QName("instance", XMLConstants.XFORMS_NAMESPACE));
		instanceE.addAttribute(new QName("id"), this.dataId);
		instanceE.addAttribute(new QName("type"), "simple");
				
		Element rows = instanceE.addElement("rows");
		Element row = rows.addElement("row");	
		row.addAttribute("id", "mdx-params");
		
		Element datasourceE = row.addElement("cell");
		Element catalogE = row.addElement("cell");
		Element queryE = row.addElement("cell");
		
		Element mdxQuery = (Element) dataDef.selectSingleNode("mdx-query");
		
		datasourceE.setText(this.dataDef.attributeValue("datasource"));
		catalogE.setText(this.dataDef.attributeValue("catalog"));
		
		try {
			queryE.setText(java.net.URLEncoder.encode(mdxQuery.getText(),"UTF-8"));
		} catch (UnsupportedEncodingException e) {
			throw XBLException.create(e, UISystemMessages.XBL_DECISIONDATA_GENERATE_INSTANCE_ERROR);
		}
		
		/*
		<data xmlns="" id="" component="/UI/system/components/decisionData.xbl.xml#data" datasource="" catalog="">
			<mdx-query />
		</data>
		*/
		
		return instanceE;
	}
	
	
	private void processData() throws XBLException {
		
		//动态生成xbl组件
		Element scriptE = DocumentHelper.createElement(new QName("script", XMLConstants.XHTML_NAMESPACE));
		scriptE.add(DocumentHelper.createCDATA(this.createData()));

		Element headE = DocumentHelper.createElement(new QName("inhead", XMLConstants.XUI_NAMESPACE));
		this.rootE.add(headE);

		if (null != headE) {
			headE.add(scriptE);
		}
	}
	
	/**
	 * 创建并注册reportData到xbl
	 * @return
	 * @throws  
	 */
	private String createData(){
	
		String script = "";
		String type = "mdx";
		String datasource = this.dataDef.attributeValue("datasource");
		String catalog = this.dataDef.attributeValue("catalog");
		
		Element mdxQuery = (Element) dataDef.selectSingleNode("mdx-query");
		String query = "";
		try {
			query = java.net.URLEncoder.encode(mdxQuery.getText(),"UTF-8");
		} catch (UnsupportedEncodingException e) {
			throw XBLException.create(e, UISystemMessages.XBL_DECISIONDATA_CREATE_DATA_ERROR);
		}
		
		script = String.format("jQuery('head').append('<span id=\"%1$s\"/>');" +
				"jQuery('#%1$s')[0].xblObject = new justep.DecisionData(" +
				"{id:'%1$s',type:'%2$s',datasource:'%3$s',catalog:'%4$s',query:'%5$s'});"
				,dataId,type,datasource,catalog,query);
		return script;		
	}
}
