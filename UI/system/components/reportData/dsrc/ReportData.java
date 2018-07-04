import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

/**
 * 
 * 转换为 commonData 模式存储数据
 */
public class ReportData implements JavaTemplate {
	
	private Map<Object, Object> context;
	private Element dataDef;
	private Element rootE;
	private String dataId;
	
	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.dataDef = bound;
		this.dataId = dataDef.attributeValue("id");
		
		this.context = context;
		this.rootE = DocumentHelper.createElement("root");
		this.processData();
		this.context.put("data." + this.dataId, bound.elements());
		return this.rootE;
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
	 * @throws XBLException 
	 */
	private String createData() throws XBLException {
	
		String script = "";
		String src = dataDef.attributeValue("src") != null?dataDef.attributeValue("src"):"";
		String defaultSql = "", oracle = "",mssql = "",sybase = "",db2 = "",ksql="",dataModel = "",fnModel = "",action = "",columns = "";
		String type = "sql";

		//运行期兼容旧版本
		String dm = dataDef.attributeValue("dataModel");
		if(dm != null && !"".equals(dm)){
			dataModel = dm;
		}
		
		Element sourceE = dataDef.element("source");
		if(sourceE == null) 
			throw XBLException.create(UISystemMessages.XBL_REPORT_DATA_ERROR);
		
		Element sqlE = sourceE.element("SQL");
		if(sqlE != null && sqlE.elements().size() > 0){
			Element element = sqlE.element("DEFAULT");
			defaultSql = element != null ? element.getText() : "";
			element = sqlE.element("ORACLE");
			oracle = element != null ? element.getText() : "";
			element = sqlE.element("MSSQL");
			mssql = element != null ? element.getText() : "";
			element = sqlE.element("SYBASE");
			sybase = element != null ? element.getText() : "";
			element = sqlE.element("DB2");
			db2 = element != null ? element.getText() : "";
			
			dataModel = sqlE.attributeValue("data-model");
			dataModel = dataModel==null?"":dataModel;

			oracle = oracle==null?"":oracle;
			mssql = mssql==null?"":mssql;
			db2 = db2==null?"":db2;
			sybase = sybase==null?"":sybase;
		}
		
		Element ksqlE = sourceE.element("KSQL");
		if(ksqlE != null && ksqlE.getText() != null && !"".equals(ksqlE.getText())){
			dataModel = ksqlE.attributeValue("data-model");
			fnModel = ksqlE.attributeValue("fn-model");	
			ksql = ksqlE.getText();
			dataModel = dataModel==null?"":dataModel;
			fnModel = fnModel==null?"":fnModel;
			ksql = ksql==null?"":ksql;
		}
		
		Element actionE = sourceE.element("action");
		if(actionE != null){
			action = actionE.attributeValue("name");
			action = action == null?"":action;
			
			if(!"".equalsIgnoreCase(action)){
				type = actionE.attributeValue("type");
				type = type == null?"action":type;				

				fnModel = actionE.attributeValue("fn-model");	
				fnModel = fnModel==null?"":fnModel;
			}
			
			columns = actionE.attributeValue("columns");
			columns = columns == null?"":columns;
			
		}
		String beforeR = dataDef.attributeValue("onBeforeRefresh") == null ? "" :dataDef.attributeValue("onBeforeRefresh");
		String afterR = dataDef.attributeValue("onAfterRefresh") == null ? "" :dataDef.attributeValue("onAfterRefresh");
		
		script = String.format("jQuery('head').append('<span id=\"%1$s\"/>');" +
				"jQuery('#%1$s')[0].xblObject = new justep.ReportData(" +
				"{id:'%1$s',autoLoad:false,src:'%2$s',type:'%3$s',onBeforeRefresh:'%4$s',onAfterRefresh:'%5$s',dataModel:'%6$s',fnModel:'%7$s'," +
				"sql:{oracle:\"%8$s\",mssql:\"%9$s\",db2:\"%10$s\",sybase:\"%11$s\",defaultSql:\"%12$s\"},ksql:\"%13$s\",action:\"%14$s\",columns:\"%15$s\"});"
				,dataId,src,type,beforeR,afterR,dataModel,fnModel
				,oracle,mssql,db2,sybase,defaultSql
				,ksql,action,columns);
		return script;		
	}
}