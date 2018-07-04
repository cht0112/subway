import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.util.PageUtils;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class Chart implements JavaTemplate {

	public static final String PIE_TYPE = "|pie|pie-3d|";
	public static final String BAR_TYPE = "|vertical-bar|vertical-bar-3d|stacked-vertical-bar|stacked-vertical-bar-3d|cylinder-vertical-bar|cylinder-vertical-bar-3d|horizontal-bar|horizontal-bar-3d|stacked-horizontal-bar|stacked-horizontal-bar-3d|cylinder-horizontal-bar|cylinder-horizontal-bar-3d|";
	public static final String LINE_TYPE = "|vertical-line|vertical-line-3d|horizontal-line|horizontal-line-3d|";
	public static final String XY_LINE_TYPE = "|vertical-xy-line|horizontal-xy-line|";
	public static final String AREA_TYPE = "|vertical-area|vertical-area-3d|horizontal-area|horizontal-area-3d|";
	public static final String TIME_SERIES_TYPE = "|time-series|";
	public static final String METER_TYPE = "|simple-meter|dial-meter|arc-dial-meter|thermometer-meter|";
	public static final String GANTT_TYPE = "|vertical-gantt|horizontal-gantt|";
	public static final String RADAR_TYPE = "|radar|";

	protected Map<Object, Object> context;
	
	private Element chartDef;
	private Element rootE;
	private String id;
//	private String chartDefineID;
	private String chartContentID;
	private String chartExportFrameID;
	private String cacheFile;
	
	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.context = context;
		this.chartDef = bound;
		id = chartDef.attributeValue("id");
//		chartDefineID = String.format("chart_%s_define", id);
		chartContentID = String.format("chart_%s_content", id);
		chartExportFrameID = String.format("chart_%s_frame", id);
		
		rootE = DocumentHelper.createElement("root");
		rootE.addAttribute(new QName("class", new Namespace("xbl", "http://www.w3.org/ns/xbl")), "xui-chart");
		
		Document chartDoc = generateChartDefine();
		generateCacheChartReport(chartDoc);

//		Element inhead = rootE.addElement(new QName("inhead", new Namespace("xui", "http://www.justep.com/xui")));		
//		Element script = inhead.addElement(new QName("script", XMLConstants.XHTML_NAMESPACE));
//		script.addAttribute("language", "javascript");
//		String jsonStr = generateChartJSONStr(chartDoc);
//		script.addCDATA(jsonStr);
		
		try {
			generateReportSpan(chartDoc);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		generateReportContentDiv();
		return rootE;
	}

	/**
	 * 生成用于报表展示的容器div
	 */
	private void generateReportContentDiv(){
		Element contentDivE = rootE.addElement("div");
		contentDivE.addAttribute("id", this.chartContentID);		
		contentDivE.addAttribute("chart-name", chartDef.attributeValue("chart-name"));
		contentDivE.addAttribute("style","width:100%;height:100%");
		
		Element frameE = rootE.addElement("iframe");
		//frameE.addAttribute("id", this.chartExportFrameID);
		frameE.addAttribute("name", this.chartExportFrameID);
		frameE.addAttribute("style", "position:absolute;top:-1000px;left:-1000px;width:1px;height:1px;");
	}
	
	/**
	 * 生成span，存储rdl相关数据用于前端配置
	 */
	private void generateReportSpan(Document reportDoc) throws UnsupportedEncodingException {
		Element e = DocumentHelper.createElement(new QName("span", XMLConstants.XHTML_NAMESPACE));
		e.addAttribute("style", "display:none");
		e.addAttribute("xblid", "attribute");

		Element layoutE = (Element) reportDoc.selectSingleNode("//child::*[local-name()='layout-set']/child::*[local-name()='layout']");
		if(layoutE != null){			
			e.addAttribute("paperType", getValue(layoutE.attributeValue("master-name")));
			e.addAttribute("pageWidth", getValue(layoutE.attributeValue("page-width")));
			e.addAttribute("pageHeight", getValue(layoutE.attributeValue("page-height")));
			e.addAttribute("orientation", getValue(layoutE.attributeValue("Orientation")));
			e.addAttribute("marginTop", getValue(layoutE.attributeValue("margin-top")));
			e.addAttribute("marginBottom", getValue(layoutE.attributeValue("margin-bottom")));
			e.addAttribute("marginLeft", getValue(layoutE.attributeValue("margin-left")));
			e.addAttribute("marginRight", getValue(layoutE.attributeValue("margin-right")));
			e.addAttribute("marginHeader", getValue(layoutE.attributeValue("margin-header")));
			e.addAttribute("marginFootter", getValue(layoutE.attributeValue("margin-footter")));
		}
		
		String temp = "";
		Element mappingE = (Element) reportDoc.selectSingleNode("//child::*[local-name()='mapping']");
		if(mappingE != null){
			List<Element> dataList = mappingE.elements();
			for(Element data : dataList){
				String did = data.attributeValue("id");
				temp += did+",";
			}
		}

		if(!temp.equals("")){	
			temp = temp.substring(0, temp.length()-1);
			e.addAttribute("dataList", getValue(temp));
		}	
		e.addAttribute("cacheFile", java.net.URLEncoder.encode(cacheFile, "UTF-8"));
		rootE.add(e);
	}
	
	//图表JSON
//	private String generateChartJSONStr(Document chart) {
//		ChartJSONHelper chartJsonHelper = new ChartJSONHelper(chart,cacheFile);
//		String chartJsonString = chartJsonHelper.toJSONString();
//		return String.format(" var %1$s=null; function get%1$s(){ if (%1$s==null){%1$s= %2$s;}return %1$s} ",chartDefineID+"_JSONObj", chartJsonString);
//	}
	
	//图表定义缓存		
	private void generateCacheChartReport(Document chart) {
		
		//TODO:验证是否需要缓存 监控当前.w文件目录中是否改变
		
		Document chartRD = generateCacheChartReportTemplate();
		
		Element rdlReportE = (Element) chartRD.selectSingleNode("//rdl:report");		
		Element chartModelE = (Element) chart.selectSingleNode("//child::*[local-name()='model']");
		rdlReportE.add((Element)chartModelE.clone());
		
		Element chartTableCell = (Element) chartRD.selectSingleNode("//child::*[local-name()='table-cell' and @id='R1C1']");
		chartTableCell.add((Element)chart.getRootElement().clone());
		
		String reportRDFile = "";
		String wFilePath = (String) context.get(PageUtils.WINDOW_FILE_URL);
		String wFileName = wFilePath.substring(wFilePath.lastIndexOf("/")+1, wFilePath.length()-2);
				
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
		String basePath = wFilePath.substring(0, wFilePath.lastIndexOf("/")+1);
		if (basePath != null) {
			String cacheDIRStr = basePath  + ".cache";
			File temp = new File(ResourceManagerWrapper.instance().getRealPath(cacheDIRStr));
			if(!temp.exists()){
				temp.mkdir();
			}
			cacheFile = basePath  + ".cache/"+wFileName+".report";
			reportRDFile = ResourceManagerWrapper.instance().getRealPath(cacheFile);
		}
		File rdlFile = new File(reportRDFile);
		if(rdlFile.exists()){
			//文件存在 取节点替换 
			try {
				Document rdlDoc =  fileToDOM(reportRDFile);
				Element chartRDE = (Element) rdlDoc.selectSingleNode("//child::*[@id='"+id+"']");	
				Element pE = null;
				if(chartRDE != null){
					pE = chartRDE.getParent();
					pE.remove(chartRDE);
				}else{
					pE = rdlDoc.getRootElement().element("report-view");
				}
				pE.add((Element)chartRD.getRootElement().clone());
				try {
					writeReportFile(rdlDoc,reportRDFile);
				} catch (IOException e) {
					e.printStackTrace();
				}				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		}else{	
			//创建模版文件 chartRD
			Document rdl = generateCacheReportTemplate();
			rdl.getRootElement().add((Element)chartRD.getRootElement().clone());
			try {
				writeReportFile(rdl,reportRDFile);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	private Document generateCacheReportTemplate(){
		Document doc = DocumentHelper.createDocument();
		String rdl="<report xmlns:xreport=\"http://www.justep.com/x5/xreport\" xmlns:rdl=\"http://www.justep.com/RDL\">"+
			"<report-model/>"+"<report-view/>"+"</report>";
		try {
			doc = DocumentHelper.parseText(rdl);
		} catch (DocumentException e) {
			e.printStackTrace();
		}
		return doc;
	}
	
	private Document generateCacheChartReportTemplate(){
		Document doc = DocumentHelper.createDocument();
		String chartRD ="<request id=\""+id+"\" xmlns:xreport=\"http://www.justep.com/x5/xreport\" xmlns:rdl=\"http://www.justep.com/RDL\">"+
		  "<xreport:params>"+
		    "<report-name></report-name>"+
		    "<uiserver-url></uiserver-url>"+
		    "<current-process></current-process>"+
		    "<current-activity></current-activity>"+
		  "</xreport:params>"+
		  "<xreport:model>"+
		  "</xreport:model>"+
		  "<xreport:view output-type=\"\" >"+
		  	"<rdl:report>" +
				"<rdl:layout-set master-name=\"A4\">" +
					"<rdl:layout master-name=\"A4\" width=\"210mm\" height=\"297mm\" Orientation=\"\" margin-top=\"10mm\" margin-bottom=\"10mm\" margin-left=\"10mm\"" +
						" margin-right=\"10mm\" page-width=\"210mm\" page-height=\"297mm\" margin-header=\"\" margin-footter=\"\"  />" +
				"</rdl:layout-set>" +
				"<rdl:content-set>" +
					"<rdl:styles>" +
						"<rdl:style id=\"s24\" vertical-align=\"Top\" />" +
						"<rdl:style id=\"s23\" vertical-align=\"Bottom\" />" +
						"<rdl:style id=\"Default\" vertical-align=\"Bottom\" font-family=\"宋体\" font-size=\"12px\" />" +
					"</rdl:styles>" +
					"<rdl:content>" +
						"<rdl:table autoWidth=\"true\" vertical-align=\"Bottom\" font-family=\"宋体\" font-size=\"12px\">" +
							"<rdl:table-columns>" +
								"<rdl:table-column id=\"C1\"/>" +
							"</rdl:table-columns>" +
							"<rdl:table-rows>" +
								"<rdl:table-row id=\"R1\">" +
									"<rdl:table-cell id=\"R1C1\" column=\"C1\">" +
									"</rdl:table-cell>" +
								"</rdl:table-row>" +
							"</rdl:table-rows>" +
						"</rdl:table>" +
					"</rdl:content>" +
				"</rdl:content-set>" +
			"</rdl:report>"+
		  "</xreport:view>"+
		  "</request>";
		try {
			doc = DocumentHelper.parseText(chartRD);
		} catch (DocumentException e) {
			e.printStackTrace();
		}
		return doc;
	}
	
	
	private Document fileToDOM(String filePath) throws MalformedURLException, DocumentException, FileNotFoundException, UnsupportedEncodingException {
		Document doc = null;
		SAXReader reader = new SAXReader();
		File file = new File(filePath);
		FileInputStream fileInputStream = new FileInputStream(file);
		InputStreamReader inputStramReader = new InputStreamReader(fileInputStream, "utf-8");
		if (file.exists()) {
			doc = reader.read(inputStramReader);
		}
		return doc;
	}
	
	private void writeReportFile(Document doc , String targetFilePath) throws IOException{
		File tFile = new File(targetFilePath);
		if(!tFile.exists()){
			tFile.createNewFile();
		}
		OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(targetFilePath), "UTF-8");
		XMLWriter writer = new XMLWriter(osw, OutputFormat.createPrettyPrint());
		writer.write(doc);
		writer.close();
		writer = null;
		osw = null;
		doc = null;
	}
	
	@SuppressWarnings("unchecked")
	private Document generateChartDefine() {
		Document chartDoc;
		try {
			chartDoc = DocumentHelper.parseText(
				"<rdl:report-chart xmlns:rdl=\"http://www.justep.com/RDL\">" +
					"<rdl:report>" +
						"<rdl:model>" +
							"<rdl:mapping>" +
							"</rdl:mapping>" +
							"<rdl:dataset>" +
							"</rdl:dataset>" +
						"</rdl:model>" +
						"<rdl:layout-set master-name='A4'>" +
						"<rdl:layout master-name='A4' width='210mm' height='297mm' Orientation='' margin-top='10mm' margin-bottom='10mm' margin-left='10mm' " +
							" margin-right='10mm' page-width='210mm' page-height='297mm' margin-header='' margin-footter='' />" +
						"</rdl:layout-set>" +
						"<rdl:content-set>" +
							"<rdl:content>" +
								"<rdl:chart>" +
								"</rdl:chart>" +
							"</rdl:content>" +
						"</rdl:content-set>" +
					"</rdl:report>" +
				"</rdl:report-chart>");
		} catch (DocumentException e) {
			return DocumentHelper.createDocument();
		}
		
		Element chartRootE = chartDoc.getRootElement();
		chartRootE.addAttribute("id", chartDef.attributeValue("id"));
	
		Element mapping = (Element) chartDoc.selectSingleNode("//rdl:model/rdl:mapping");
		Element srcMapping = (Element) chartDef.selectSingleNode("mapping");
		if (srcMapping != null) {//运行期 兼容旧版本
			mapping.appendContent((Element) srcMapping.clone());
		}else{
			String mappingText = generateReportChartMapping();
			try {
				Document newMappingDoc = DocumentHelper.parseText(mappingText);
				mapping.appendContent((Element)newMappingDoc.getRootElement().clone());
			} catch (DocumentException e) {
				e.printStackTrace();
			}			
		}
		
		//决策图表
		if(mapping.elements().size() ==0){
			String datas = chartDef.attributeValue("data-list");
			String [] temp = datas.split(",");
			for(String t : temp){
				Element dataE = mapping.addElement("data");
				dataE.addAttribute("id", t);
				dataE.addAttribute("path", "record");
			}
		}			
			

		Element dataset = (Element) chartDoc.selectSingleNode("//rdl:model/rdl:dataset");
		Element datasetM = (Element) mapping.elements().get(0);
		String id = datasetM.attributeValue("id");
		
		dataset.addAttribute("id", id);
		Element root = dataset.addElement("root");
		Element record = root.addElement("record");			
		record.addAttribute("ref", id);
		
		Iterator<Element> it = datasetM.elementIterator();
		while (it.hasNext()) {
			Element e = it.next();
			record.add((Element) e.clone());
		}
			
		Element chart = (Element) chartDoc.selectSingleNode("//rdl:content-set/rdl:content/rdl:chart");
		Element srcChart = (Element) chartDef.selectSingleNode("chart");
		if (srcChart != null) {
			chart.appendContent((Element) srcChart.clone());
		}
		return chartDoc;
	}
	
	
	@SuppressWarnings("unchecked")
	private String generateReportChartMapping(){	
		HashMap <String ,ArrayList<String>> map = new HashMap<String,ArrayList<String>>();
		map.clear();
		List<Element> seriesList = chartDef.selectNodes(".//series");
		for(Element e :seriesList){
			String chartType = e.attributeValue("chart-type");
			String baseRef = e.attributeValue("ref");
			
			List<Element> dataList = e.elements("data");
			for(Element d :dataList){
				String ref = d.attributeValue("ref");
				if(ref == null || ref.equals("")){
					ref = baseRef;
				}
				if(!map.containsKey(ref)){
					map.put(ref, new ArrayList<String>());
				}
				
				ArrayList<String> temp = map.get(ref);
				String ca = null ,na = null,title=null,v=null,sd=null,ed=null;
				String type = "|" + chartType + "|";		
				if (PIE_TYPE.indexOf(type) != -1) {
					ca = d.attributeValue("categoryAxis");
					na = d.attributeValue("numberAxis");					
				} else if (BAR_TYPE.indexOf(type) != -1 || AREA_TYPE.indexOf(type) != -1 || LINE_TYPE.indexOf(type) != -1
						|| XY_LINE_TYPE.indexOf(type) != -1 ||TIME_SERIES_TYPE.indexOf(type) != -1 ||RADAR_TYPE.indexOf(type) != -1) {
					String autoData = d.attributeValue("autoData");
					if(autoData != null && autoData.equals("true")){
						title = d.attributeValue("title");
					}
					ca = d.attributeValue("categoryAxis");
					na = d.attributeValue("numberAxis");
				} else if (METER_TYPE.indexOf(type) != -1) {
					v = d.attributeValue("value");				
				} else if (GANTT_TYPE.indexOf(type) != -1) { //TODO: title ? autoData属性不存在
					ca = d.attributeValue("categoryAxis");
					sd = d.attributeValue("startDate");
					ed = d.attributeValue("endDate");					
				} 
				
				if(ca !=null && ! ca.equals("")){
					String str = getValue(ca);
					if(!temp.contains(ca)){
						temp.add(str);
					}
				}
				if(na !=null && !na.equals("")){
					String str = getValue(na);
					if(!temp.contains(na)){
						temp.add(str);
					}
				}
				if(title != null && !title.equals("")){
					String str = getValue(title);
					if(!temp.contains(title)){
						temp.add(str);
					}
				}
				if(v!=null && !v.equals("")){
					String str = getValue(v);
					if(!temp.contains(v)){
						temp.add(str);
					}
				}
				if(sd!=null && !sd.equals("")){
					String str = getValue(sd);
					if(!temp.contains(sd)){
						temp.add(str);
					}
				}
				if(ed!=null && !ed.equals("")){
					String str = getValue(ed);
					if(!temp.contains(ed)){
						temp.add(str);
					}
				}
				
				
			}
		}
		
		StringBuffer sb = new StringBuffer();
		sb.append("<mapping>");
		Iterator it = map.entrySet().iterator();
		while(it.hasNext()){
			Map.Entry<String, ArrayList<String>> entry = (Entry<String, ArrayList<String>>) it.next();
			String key = entry.getKey();
			ArrayList<String> fList = entry.getValue();
			sb.append("<data id=\""+key+"\" path=\"record\"> ");
			for(String f : fList ){
				sb.append("<" + f + " path=\""+f+"\" />");
			}
			sb.append("</data>");
		}
		sb.append("</mapping>");
		
		return sb.toString();
	}
	
	private String getValue(String str){
		String v = str;
		Pattern p = Pattern.compile("\\b[a-zA-Z_][a-zA-Z0-9_][^SUM]*\\b");
		Matcher matcher = p.matcher(str);
		while(matcher.find()){
			v = matcher.group();
			break;
		}
		return v;
	}

}
