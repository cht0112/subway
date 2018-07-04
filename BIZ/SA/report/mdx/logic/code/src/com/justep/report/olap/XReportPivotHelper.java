package com.justep.report.olap;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.xml.soap.Name;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPException;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.olap.common.WEBConstants;

/**
 * 
 * 决策辅助类
 * 
 * @author zhangfengjin
 *
 */
public class XReportPivotHelper {

	public static final String XMLA_URI = "urn:schemas-microsoft-com:xml-analysis";

	public static Map<String, String> stringToMap(String str) {
		Map<String, String> map = new HashMap<String, String>();
		if (str == null || str.equals("null") || str.equals("")) {
			return map;
		}
		String[] temp = str.split("#");
		for (int i = 0; i < temp.length; i++) {
			String t = temp[i];
			if (t == null || t.equals("null") || t.equals("")) {
				return map;
			}
			if (t != null && t.indexOf("~") != -1) {
				String[] tt = t.split("~");
				if (tt.length == 2) {
					map.put(tt[0], tt[1]);
				}
			}
		}
		return map;
	}

	/**
	 * SOAP 添加 执行动作所需的 参数信息 或 约束信息
	 * 
	 * @param envelope
	 * @param eParent
	 * @param typeName
	 * @param listName
	 * @param params
	 * @throws SOAPException
	 */
	@SuppressWarnings("unchecked")
	public static void addParameterList(SOAPEnvelope envelope, SOAPElement eParent, String typeName, String listName, Map params) throws SOAPException {
		Name nPara = envelope.createName(typeName, "", XMLA_URI);
		SOAPElement eType = eParent.addChildElement(nPara);
		nPara = envelope.createName(listName, "", XMLA_URI);
		SOAPElement eList = eType.addChildElement(nPara);
		if (params == null){
			return;
		}
		Iterator it = params.keySet().iterator();
		while (it.hasNext()) {
			String tag = (String) it.next();
			String value = (String) params.get(tag);
			nPara = envelope.createName(tag, "", XMLA_URI);
			SOAPElement eTag = eList.addChildElement(nPara);
			eTag.addTextNode(value);
		}
	}

	public static void checkOlapDatasource(Map<String, String> propertiesMap,String dataModel){
		String datasourceinfo = propertiesMap.get("DataSourceInfo");
		if(datasourceinfo == null){
			//TODO:错误处理
		}		
		//addDatasourcesToFile(datasourceinfo,dataModel);
		long t1 = System.currentTimeMillis(); 
		buildDatasourcesToFile();
		long t2 = System.currentTimeMillis();   
		long total = t2 - t1;   		
		System.out.println(String.format("%s: %s", "init olap datasource: OK ", total +" ms"));
	}
	
	//TODO:后期动态增加
	@SuppressWarnings("unchecked")
	private static void addDatasourcesToFile(String datasourceinfo ,String dataModel){
		boolean flag = false;
		String datasourceConfigPath = WEBConstants.getWebRootAbsPath() +"WEB-INF" + File.separator + "datasources.xml";
		Document dsconfigDoc = fileToDOM(datasourceConfigPath);
		List<Element> dsList = dsconfigDoc.getRootElement().elements("DataSource");
		for(Element e :dsList){
			Element dsNameE = e.element("DataSourceName");
			String dsN = dsNameE.getTextTrim();
			if(datasourceinfo.equalsIgnoreCase(dsN)){
				flag = true;
				break;
			}
		}
		if(!flag){//扫描合成数据配置
			ArrayList dList = new ArrayList();
			String currentDSPath = FileSystemWrapper.instance().getRealPath("/")+ File.separator + dataModel;
			File ds = new File(currentDSPath);
			if(ds.exists() && ds.isDirectory()){
				try {
					proc(ds ,dsconfigDoc.getRootElement() , dList);
				} catch (Exception e1) {
					e1.printStackTrace();
				}
			}
			domToFile(dsconfigDoc,datasourceConfigPath);
		}
	}
	
	@SuppressWarnings("unchecked")
	private static void buildDatasourcesToFile(){
		ArrayList dList = new ArrayList();
		Document datasourceDoc = org.dom4j.DocumentHelper.createDocument();
		Element rootE = datasourceDoc.addElement("DataSources");
		try{
			String bizDirPath = FileSystemWrapper.instance().getRealPath("/");
			File bizDir = new File(bizDirPath);
			if(bizDir.exists() && bizDir.isDirectory()){
				proc(bizDir,rootE,dList);
			}			
			String dsFilePath = WEBConstants.getWebRootAbsPath() +"WEB-INF" + File.separator + "datasources.xml";
			domToFile(datasourceDoc,dsFilePath);			
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}
	
	@SuppressWarnings("unchecked")
	private static void proc(File file ,Element rootE , ArrayList dList) throws Exception{
		String fileName = file.getName();
		if(fileName.equalsIgnoreCase("olap")){
			File parentFile = file.getParentFile();
			File[] projects =  file.listFiles();
			for(int i=0; i<projects.length; i++){
				File projectFileDir = projects[i];
				if(projectFileDir.isDirectory()){
					File [] ps = projectFileDir.listFiles();
					for(int j=0; j<ps.length; j++){
						File p = ps[j];
						String dName = p.getName();
						if(dName.equalsIgnoreCase("datasource")){
							File [] dsFiles = p.listFiles();
							for(int k=0; k<dsFiles.length; k++){
								File d = dsFiles[k];
								String dn = d.getName();
								if(dn.equalsIgnoreCase("datasources.xml")){
									String dspath = d.getAbsolutePath();
									Document singleDoc = fileToDOM(dspath);
									mergeDatasources(rootE,singleDoc,dList,parentFile);
								}
							}
						}
					}
				}
			}
		}else{
			if(file.isDirectory()){
				File [] childFiles = file.listFiles();
				for(int i=0; i< childFiles.length; i++){
					proc(childFiles[i],rootE,dList);
				}
			}
		}
	}
	
	@SuppressWarnings("unchecked")
	private static void mergeDatasources(Element rootE , Document singleDoc, ArrayList dList ,File parentFile) throws Exception{
		Element singleRootE = singleDoc.getRootElement();
		List singleDataSourceList = singleRootE.elements("DataSource");
		for(int i=0; i<singleDataSourceList.size(); i++){
			Element singleDataSourceE = (Element)singleDataSourceList.get(i);
			String singleDatasourceName = singleDataSourceE.elementTextTrim("DataSourceName");
			if(!dList.contains(singleDatasourceName)){
				//是否采用系统配置
				Element useSysConfigE = singleDataSourceE.element("UseSysConfig");
				Element localeE = singleDataSourceE.element("Locale");
				String flag = useSysConfigE.getText();
				if(flag == null || flag.equals("") || flag.trim().equalsIgnoreCase("true")){					
					Element urlE = singleDataSourceE.element("URL");
					urlE.setText(WEBConstants.getOlapServerURL());	
					
					String locale = localeE.getTextTrim();					
					String sysJndi = findSysJNDIDataSourceConnection(parentFile);
					//System.out.println("***********************************==" + sysJndi);
					String dataSourceInfo = "Provider=mondrian;Locale="+locale+";DynamicSchemaProcessor=com.justep.olap.i18n.JustepLocalizingDynamicSchemaProcessor;";
					dataSourceInfo+="DataSource="+sysJndi;
					Element dataSourceInfoE = singleDataSourceE.element("DataSourceInfo");
					dataSourceInfoE.clearContent();
					dataSourceInfoE.addCDATA(dataSourceInfo);
					
					Element catalogDefinitionE = singleDataSourceE.element("Catalogs").element("Catalog").element("Definition");
					String definition = catalogDefinitionE.getTextTrim();
					String newDefinition = FileSystemWrapper.instance().getRealPath("/")+ definition;
					catalogDefinitionE.setText(newDefinition);
					
				}
				//删除临时配置信息
				singleDataSourceE.remove(useSysConfigE);
				singleDataSourceE.remove(localeE);
				
				dList.add(singleDatasourceName);
				rootE.add((Element)singleDataSourceE.clone());				
			}else{
				System.out.println("Datasource " +singleDatasourceName+" already exists...");
			}
		}
	}
	
	/**
	 * 查找系统数据库连接 -JNDI 
	 * 	JDBC 不考虑
	 * 	约定olap 目录的同级中存在data目录 并且data目录有db.config.m文件 且其中定义了该模块的数据库连接JNDI
	 * @param parentFile    olap 目录的上级目录 
	 * @return
	 * @throws Exception
	 */
	private static String findSysJNDIDataSourceConnection(File parentFile) throws Exception{
		String jndi="";
		File[] fs = parentFile.listFiles();
		for(int i=0; i<fs.length; i++){
			File f = fs[i];
			if(f.getName().equalsIgnoreCase("data")){
				if(f.isDirectory()){
					File[] cfs = f.listFiles();
					for(int j=0; j<cfs.length; j++){
						File cf = cfs[j];
						if(cf.getName().equalsIgnoreCase("db.config.m")){
							Document doc = fileToDOM(cf.getAbsolutePath());
							Element modelE = doc.getRootElement();
							Element dataSourceConfigE = (Element) modelE.selectSingleNode("child::*[@name='dataSource']");
							if(dataSourceConfigE != null){
								jndi = dataSourceConfigE.attributeValue("value");
								break;
							}							
							break;
						}
					}
				}
				break;
			}
		}		
        return jndi;
	}
	
	public static Document fileToDOM(String filePath){
		Document doc = null;
		SAXReader reader = new SAXReader();
		File file = new File(filePath);
		try {
			FileInputStream fileInputStream = new FileInputStream(file);
			InputStreamReader inputStramReader = new InputStreamReader(fileInputStream, "utf-8");
			if (file.exists()) {
				doc = reader.read(inputStramReader);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (DocumentException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return doc;
	}
	
	private static void domToFile(Document doc ,String filePath){
		File file = new File(filePath);
		if(file.exists()){
			file.delete();
		}
		try {
			OutputStreamWriter osw;
			osw = new OutputStreamWriter(new FileOutputStream(file), "UTF-8");
			XMLWriter writer = new XMLWriter(osw, OutputFormat.createPrettyPrint());
			writer.write(doc);
			writer.close();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
}
