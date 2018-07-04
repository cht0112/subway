import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;
import org.dom4j.io.SAXReader;

import com.justep.report.edit.XLSEditTransformer;
import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.util.PageUtils;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.runtime.XBLException;

public class ReportEditor extends Report {

	private String reportEditorID;
	
	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		String rulesFilePath = bound.attributeValue("rules");
		String wFilePath = (String) context.get(PageUtils.WINDOW_FILE_URL);
		String wAbsPath = ResourceManagerWrapper.instance().getRealPath(wFilePath);
		String canonicalPath = wAbsPath;
		File tempF = new File(wAbsPath);
		if(tempF.exists()){
			try {
				canonicalPath = tempF.getCanonicalPath();
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}
		String basePath = canonicalPath.substring(0, canonicalPath.lastIndexOf(File.separator)+1);
		if (basePath != null) {
			rulesFilePath = basePath  + rulesFilePath;
		}
		
		Document ruleDoc = this.fileToDOM(rulesFilePath);
		Element datasetsRootE = ruleDoc.getRootElement();
		Element mappingE = (Element)datasetsRootE.element("mapping");
		if(mappingE != null){			
			bound.add((Element)(mappingE.clone()));
		}
		
		super.execute(bound, context);
		init();
		build();
		return rootE;
	}
	
	protected Document generateReportDoc(String xlsFilePath , Document mappingDoc){		
		return XLSEditTransformer.transform(xlsFilePath,"", mappingDoc.getRootElement());
	}
	
	private void init() {
		reportEditorID = String.format("report_%s_editor", id);
	}
	
	/**
	 * 构建
	 */
	private void build() {
		Element inhead = rootE.addElement(new QName("inhead", new Namespace("xui", "http://www.justep.com/xui")));
		Element script = inhead.addElement(new QName("script",XMLConstants.XHTML_NAMESPACE));
		script.addAttribute("language", "javascript");

		String designFilePath = reportDef.attributeValue("rules");
		String reportEditorStr = generateReportEditorDefine(designFilePath);

		script.addCDATA(reportEditorStr);	
	}
	
	/**
	 * 规则处理
	 * @param rulesFilePath
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private String generateReportEditorDefine(String rulesFilePath){
		
		//报表XLS模板文件必须以当前目录为基础的相对路径
		String wFilePath = (String) context.get(PageUtils.WINDOW_FILE_URL);
		String wAbsPath = ResourceManagerWrapper.instance().getRealPath(wFilePath);
		String canonicalPath = wAbsPath;
		File tempF = new File(wAbsPath);
		if(tempF.exists()){
			try {
				canonicalPath = tempF.getCanonicalPath();
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}
		String basePath = canonicalPath.substring(0, canonicalPath.lastIndexOf(File.separator)+1);
		if (basePath != null) {
			rulesFilePath = basePath  + rulesFilePath;
		}

		Document ruleDoc = this.fileToDOM(rulesFilePath);
		Element datasetsRootE = ruleDoc.getRootElement();
		ArrayList<Element> datasetList = (ArrayList<Element>) datasetsRootE.elements("dataset");
		int dataSize = datasetList.size();
		
		String jsonObj = reportEditorID+"_initjsonObj";
		StringBuffer sb = new StringBuffer();
		sb.append(" var "+jsonObj+" = { ");
		sb.append(" 'size':'"+dataSize+"', ");
		sb.append(" 'datasets':[ ");
		
		String temp = "";
		for(int i=0; i<datasetList.size(); i++){
			Element datasetE = datasetList.get(i);
			String datasetName = datasetE.attributeValue("id");
			String rowCalculate = datasetE.element("calculate").element("row").getText();
			String colCalculate = datasetE.element("calculate").element("col").getText();
			String rowCheck = datasetE.element("check").element("row").getText();
			String colCheck = datasetE.element("check").element("col").getText();
			temp += generateReportEditorDatasetJsonStr(datasetName ,rowCalculate ,colCalculate ,rowCheck ,colCheck);
			temp += ",";
		}
		if(!temp.equals("")){
			temp = temp.substring(0,temp.length()-1);
			sb.append(temp);
		}
		
		sb.append(" ]");
		sb.append(" }; ");
		
		//获取当前编辑器对象 (该对象已经初始化)
		String info = String.format(" var %1$s=new XReportEditor(); "+sb.toString()+" %1$s.init("+jsonObj+"); function get%1$s(){ if (%1$s==null){ %1$s=new XReportEditor(); "+sb.toString()+" %1$s.init("+jsonObj+"); } return %1$s} ", reportEditorID);
		
		return info;
	}
	
	/**
	 * 数据集运算校验规则JS对象
	 * 		TODO: 需扩展 
	 * @param datasetName
	 * @param rowCalculate
	 * @param colCalculate
	 * @param rowCheck
	 * @param colCheck
	 * @return
	 */
	private String generateReportEditorDatasetJsonStr(String datasetName ,String rowCalculate ,String colCalculate ,String rowCheck ,String colCheck){
		StringBuffer sb = new StringBuffer();
		sb.append(" { ");
		sb.append(" 'name':'"+datasetName+"', ");
		sb.append(" 'formula':[{'calculate':[{'row':'"+rowCalculate+"'},{'col':'"+colCalculate+"'}]},{'check':[{'row':'"+rowCheck+"'},{'col':'"+colCheck+"'}]}] ");
		sb.append(" } ");
		return sb.toString();
	}
	
	/**
	 * 
	 * @param filePath
	 * @return
	 */
	private Document fileToDOM(String filePath){
		Document doc = DocumentHelper.createDocument();
		try{
			SAXReader reader = new SAXReader();
			File file = new File(filePath);
			FileInputStream fileInputStream = new FileInputStream(file);
			InputStreamReader inputStramReader = new InputStreamReader(fileInputStream, "utf-8");
			if (file.exists()) {
				doc = reader.read(inputStramReader);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return doc;
	}
	
}
