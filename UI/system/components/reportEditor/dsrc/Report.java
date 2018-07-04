
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;

import com.justep.report.ReportConstants;
import com.justep.report.xls.XLSTransUtils;
import com.justep.report.xls.XLSTransformer;
import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.util.PageUtils;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;
import com.justep.xls.Cell;
import com.justep.xls.Workbook;
import com.justep.xls.Worksheet;

public class Report implements JavaTemplate {

	protected Map<Object, Object> context;
	protected Element reportDef;
	protected Element rootE;
	protected String id;
	protected String reportDefineID;
	protected String reportContentID;
	protected String reportExportFrameID;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		init(bound, context);
		build();
		return rootE;
	}

	@SuppressWarnings("unchecked")
	private void init(Element bound, Map context) {
		this.context = context;
		reportDef = bound;
		id = reportDef.attributeValue("id");
		reportDefineID = String.format("report_%s_define", id);
		reportContentID = String.format("report_%s_content", id);
		reportExportFrameID = String.format("report_%s_frame", id);
		rootE = DocumentHelper.createElement("root");
		rootE.addAttribute(new QName("class", new Namespace("xbl", "http://www.w3.org/ns/xbl")), "xui-report");
	}
	
	private void build() throws XBLException {
		Element inhead = rootE.addElement(new QName("inhead", new Namespace("xui", "http://www.justep.com/xui")));
		Element script = inhead.addElement(new QName("script", XMLConstants.XHTML_NAMESPACE));
		script.addAttribute("language", "javascript");

		String xlsFilePath = reportDef.attributeValue("src");
		Document reportDoc = generateReportDefine(xlsFilePath);
		String reportStr = generateReportXMLDocStr(reportDoc);
		script.addCDATA(reportStr);

		String autoLoad = reportDef.attributeValue("auto-load");
		if(autoLoad == null){autoLoad="";}
		if ("true".equals(autoLoad)) {
			Element model = rootE.addElement(new QName("model", XMLConstants.XFORMS_NAMESPACE));
			model.addAttribute("id", String.format("report_%s_model", id));
			Element onload = model.addElement(new QName("action", XMLConstants.XFORMS_NAMESPACE));
			onload.addAttribute(new QName("event", XMLConstants.XML_EVENTS_NAMESPACE), "onload");
			Element onloadScript = onload.addElement(new QName("script", XMLConstants.XFORMS_NAMESPACE));
			onloadScript.addCDATA(String.format("justep.xbl('%s').refresh()", id));
		}

		Element link = rootE.addElement(new QName("link", XMLConstants.XHTML_NAMESPACE)); 
		link.addAttribute("rel", "STYLESHEET");
		link.addAttribute("type", "text/css");
		link.addAttribute("href", "/form/dhtmlx/dhtmlxWindows/dhtmlxwindows.css");
		link = rootE.addElement(new QName("link", XMLConstants.XHTML_NAMESPACE)); 
		link.addAttribute("rel", "STYLESHEET");
		link.addAttribute("type", "text/css");
		link.addAttribute("href", "/form/dhtmlx/dhtmlxWindows/skins/dhtmlxwindows_dhx_blue.css");

		Element contentDivE = rootE.addElement("div");
		contentDivE.addAttribute("id", this.reportContentID);
		contentDivE.addAttribute("style", "width:100%;height:100%;");
		
		//兼容旧版本 
		if(reportDef.attributeValue("width") != null){
			contentDivE.addAttribute("width", reportDef.attributeValue("width"));
		}
		if(reportDef.attributeValue("height") != null){			
			contentDivE.addAttribute("height", reportDef.attributeValue("height"));
		}
				
		contentDivE.addAttribute("report-name", reportDef.attributeValue("report-name"));

		Element frameE = rootE.addElement("iframe");
		//frameE.addAttribute("id", this.reportExportFrameID);
		frameE.addAttribute("name", this.reportExportFrameID);
		frameE.addAttribute("onReadyStateChange", String.format("var xbl=justep.xbl('%s'); if (xbl != null) xbl._hideWaittingDialog()", id));
		frameE.addAttribute("width", "0");
		frameE.addAttribute("height", "0");
	}


	
	@SuppressWarnings("unchecked")
	private Document generateReportDefine(String xlsFilePath) throws XBLException {
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
			xlsFilePath = basePath  + xlsFilePath;
		}
		
		Document mappingDoc = generateReportMapping(reportDef);
		Document reportDoc = generateReportDoc(xlsFilePath, mappingDoc);
		
		List<Element> objects = (List<Element>)reportDoc.selectNodes("//rdl:report-object");
		for (Element object : objects) {
			String path = object.attributeValue("path");
			if (path == null) {
				throw new XBLException("报表对象单元格引用不能为空");
			}
			Element objDef = (Element)reportDef.getDocument().selectSingleNode(String.format("//*[@id='%s']", path));
			if (objDef == null) {
				throw new XBLException(String.format("报表对象单元格引用的对象“%s”不存在", path));
			}
			
			String type = getObjectType(objDef.attributeValue("component"));
			object.addAttribute("type", type);
			object.addAttribute("get-object-define", getGetObjectDefine(type, path));
		}
		
		return reportDoc;
	}

	protected Document generateReportDoc(String xlsFilePath,Document mappingDoc){
		if(mappingDoc == null){
			mappingDoc = generateReportMapping(xlsFilePath);
		}
		return XLSTransformer.transform(xlsFilePath, mappingDoc.getRootElement());
	}
	
	/**
	 * 兼容旧版本 
	 * @param reportDef
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private Document generateReportMapping(Element reportDef) {
		Element mappingE = (Element) reportDef.selectSingleNode("//child::*[local-name()='mapping']");
		if(mappingE == null){
			return null;
		}
		Document mappingDoc = DocumentHelper.createDocument();
		Element rootE = mappingDoc.addElement("mapping");
		List eList = mappingE.elements();
		for (int i = 0; i < eList.size(); i++) {
			Element e = (Element) eList.get(i);
			rootE.add((Element) e.clone());
		}
		return mappingDoc;
	}

	private String generateReportXMLDocStr(Document report) {
		String xml = report.asXML();
		xml = xml.replaceAll("[\\r\\n]", "").replaceAll("'", "\\\\'");
		return String.format(" var %1$s=null; function get%1$s(){ if (%1$s==null){%1$s= justep.XML.fromString('%2$s');}return %1$s} ",reportDefineID, xml);
	}

	@SuppressWarnings("unchecked")
	private Document generateReportMapping(String xlsFilePath){
		StringBuffer sb = new StringBuffer();
		sb.append("<mapping>");
		HashMap<String,ArrayList<String>> map = generateReportMappingMap(xlsFilePath);
		Iterator it = map.entrySet().iterator();
		while(it.hasNext()){
			Map.Entry<String, ArrayList<String>> entry = (Map.Entry<String, ArrayList<String>>)it.next();
			String key = entry.getKey();
			ArrayList<String> value = entry.getValue();
			sb.append("<data xmlns=\"\" id=\"" + key +"\" path=\"record\" >");
			for(String v: value){
				sb.append("<"+v+" path=\""+v+"\" />");
			}
			sb.append("</data>");
		}
		sb.append("</mapping>");
		Document mappingDoc = DocumentHelper.createDocument();
		try {
			mappingDoc = DocumentHelper.parseText(sb.toString());
		} catch (DocumentException e) {
			e.printStackTrace();
		}
		return mappingDoc;
	}
	
	private HashMap<String,ArrayList<String>> generateReportMappingMap(String xlsFilePath){
		//data-list属性可有可无   运行期环境无法获取data 列表
		
		HashMap<String,ArrayList<String>> map = new HashMap<String,ArrayList<String>>();
		try {
			FileInputStream in = new FileInputStream(xlsFilePath);
			Workbook wb = new Workbook(in);
			Worksheet sheet = wb.getSheet(0);
			int rowCount = sheet.getRowCount();
			int colCount = sheet.getColCount();
			
			//统计报表中所有的数据集
			ArrayList<String> didList = new ArrayList<String>();
			for(int r=0; r< rowCount; r++){
				for(int c=0; c<colCount; c++){
					Cell cell = sheet.getCell(r, c);
					if(cell != null){
						String cellValue = cell.getValue();
						if(XLSTransUtils.isRepeatCell(cellValue)){
							cellValue = XLSTransUtils.getRepeatFieldIDWithDataSet(cellValue);
							int index = cellValue.indexOf(".");
							if (index != -1){
								String dataSetId = cellValue.substring(0, index);
								didList.add(dataSetId);
							}
						}
					}
				}
			}
			
			for(int r=0; r< rowCount; r++){
				for(int c=0; c<colCount; c++){
					Cell cell = sheet.getCell(r, c);
					if(cell != null){
						
						String cellValue = cell.getValue();
						if(XLSTransUtils.isRepeatCell(cellValue)){
							cellValue = XLSTransUtils.getRepeatFieldIDWithDataSet(cellValue);
						}
						
						if(cellValue != null){
							int index = cellValue.indexOf(".");
							if (index != -1){
								String dataSetId = cellValue.substring(0, index);
								//验证是否合法是否存在于.W文件中的DATA 定义
								if(didList.contains(dataSetId)){									
									if(!map.containsKey(dataSetId)){
										map.put(dataSetId, new ArrayList<String>());
									}
									String feild = cellValue.substring(index + 1, cellValue.length());
									ArrayList<String> feildList =  map.get(dataSetId);
									if(!feildList.contains(feild)){
										feildList.add(feild);
									}
								}
							}
						}
						
						//公式分析 
						String formula = cell.getFormula();						
						if(formula != null && !formula.equals("")){													
							if (!Pattern.compile(ReportConstants.REGEXPR_STAT_CELL).matcher(formula).find()) {
								Pattern pattern = Pattern.compile(ReportConstants.REGEXPR_STAT_FULL);
								Matcher matcher = pattern.matcher(formula);
								String expr;
								while (matcher.find()) {
									for (int type = 1; type < 6; type++) {
										expr = matcher.group(type);
										if (expr != null) {
											Pattern p = Pattern.compile("\\b[a-zA-Z_][a-zA-Z0-9_]*\\.[a-zA-Z_][a-zA-Z0-9_]*\\b");
											Matcher matcher2 = p.matcher(expr);
											while(matcher2.find()){
												String word = matcher2.group();
												int n = word.indexOf(".");
												if (n != -1){
													String dataSetId = word.substring(0, n);	
													if(didList.contains(dataSetId)){															
														if(!map.containsKey(dataSetId)){
															map.put(dataSetId, new ArrayList<String>());
														}
														String feild = word.substring(n + 1, word.length());
														ArrayList<String> feildList =  map.get(dataSetId);
														if(!feildList.contains(feild)){
															feildList.add(feild);
														}
													}
												}
											}							
										}
									}
								}
	
							}
						}
						
						String comment = cell.getComment();
						if(comment != null && !comment.equals("")){
							Pattern p = Pattern.compile("\\b[a-zA-Z_][a-zA-Z0-9_]*\\.[a-zA-Z_][a-zA-Z0-9_]*\\b");
							Matcher matcher2 = p.matcher(comment);
							while(matcher2.find()){
								String word = matcher2.group();
								int n = word.indexOf(".");
								if (n != -1){
									String dataSetId = word.substring(0, n);
									if(didList.contains(dataSetId)){												
										if(!map.containsKey(dataSetId)){
											map.put(dataSetId, new ArrayList<String>());
										}
										String feild = word.substring(n + 1, word.length());
										ArrayList<String> feildList =  map.get(dataSetId);
										if(!feildList.contains(feild)){
											feildList.add(feild);
										}									
									}
								}
							}		
						}

						
					}
				}
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (DocumentException e) {
			e.printStackTrace();
		}
		return map;
	}
	
	
	private String getGetObjectDefine(String type, String id) {
		if ("chart".equals(type)) {
			return String.format("getchart_%s_define()", id);
		}else {
			return null;
		}
	}

	private String getObjectType(String component) {
		if (component != null && component.startsWith("/UI/system/components/chart.xbl.xml")) {
			return "chart";
		}else {
			return null;
		}
	}
	
	
	public static void main(String[] args) {
		String str = "s1.UnitPrice*s1.Quantity";
		str="SUM(STOCK)";
		//Pattern p = Pattern.compile("\\b[a-zA-Z_][a-zA-Z0-9_]*\\.[a-zA-Z_][a-zA-Z0-9_]*\\b");
		Pattern p = Pattern.compile("\\b[a-zA-Z_][a-zA-Z0-9_][^SUM]*\\b");
		Matcher matcher = p.matcher(str);
		while(matcher.find()){
			String word = matcher.group();
			System.out.println(word);
		}
		
		
		
	}
}
