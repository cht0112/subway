import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.commons.io.output.ByteArrayOutputStream;
import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.hwpf.usermodel.Range;
import org.apache.poi.poifs.filesystem.DirectoryEntry;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.SQL;
import com.justep.system.data.Table;


public class exportWordProcess {
	
	public static String exportWord(Map paramMap) {
			String st = "";
			String path = "";
			String cp="";
			st = PropertiesAction.PropertiesA("exportWordUrl");
			path= PropertiesAction.PropertiesA("downloadTaskUrl");
			cp= PropertiesAction.PropertiesA("getRunTimeCpOrder");
			Integer applicationNo = (Integer)paramMap.get("applicationNo");
			String sql = "select tai.*,ami.MANUFACTURE_ID_CNAME as amimanufacturename, " +
					"amiDeve.MANUFACTURE_ID_CNAME as amidevemanufacturename,dot.DETECTION_OBJECT_CNAME, " +
					"dtc.DEVICE_TYPE_CNAME,btc.BUSINESS_ID_CNAME,hbiCon.OPERATOR_NAME as hbiConname, " +
					"hbiRece.OPERATOR_NAME as hbirecename " +
					"from TEST_APPLICATION_INFO tai " +
					"left outer join AFC_MANUFACTURER_INFO ami on tai.ASSIGNED_MANUFACTURE_ID=ami.MANUFACTURE_ID " +
					"left outer join AFC_MANUFACTURER_INFO amiDeve on tai.PRODUCT_MANUFACTURE_ID=amiDeve.MANUFACTURE_ID " +
					"left outer join DETECTION_OBJECT_TYPE dot on tai.DETECTION_OBJECT_TYPE=dot.DETECTION_OBJECT_TYPE " +
					"left outer join DEVICE_TYPE_CODE dtc on tai.DETECTION_OBJECT_TYPE=dtc.DETECTION_OBJECT_TYPE and tai.DEVICE_TYPE=dtc.DEVICE_TYPE " +
					"left outer join BUSINESS_TYPE_CODE btc on tai.BUSINESS_ID=btc.bUSINESS_ID " +
					"left outer join HR_BASE_INFO hbiCon on tai.OPERATOR_ID=hbiCon.oPERATOR_ID " +
					"left outer join HR_BASE_INFO hbiRece on tai.RECEIPTER=hbiRece.oPERATOR_ID " +
					"where tai.aPPLICATION_NO="+applicationNo;
			System.out.println("===sql===:"+sql);
				Map<String,String> sqlMap = new HashMap<String,String>();
				sqlMap.put("SYBASE", sql);
			Table tab = SQL.select(sqlMap, null, "/metrodetection/system_code/data");
			Iterator<Row> it = tab.iterator();
			
			Row row = it.next();
			System.out.println(row+"\t");
			String appDocNo = row.getValue("APP_DOC_NO").toString();
			//path = filePath+"/"+appDocNo+".doc";
			String appDocId = row.getValue("APP_DOC_ID").toString();
			String assigentManuName = (String)row.getValue("amimanufacturename");
			String deveManuName = (String)row.getValue("amidevemanufacturename");
			String productname = (String)row.getValue("PRODUCT_NAME");
			String detectionObject = (String)row.getValue("DETECTION_OBJECT_CNAME");
			String lineId = ((Integer)row.getValue("LINE_ID")).toString();
			String deviceTypeName = (String)row.getValue("DEVICE_TYPE_CNAME");
			String businessName = (String)row.getValue("BUSINESS_ID_CNAME");
			String detectionName = (String)row.getValue("DECTION_BASED_ON_NAME");
			String contronPersonName = (String)row.getValue("CONTACT_PERSON");
			String miniPersonName = (String)row.getValue("hbiConname");
			String mobel = (String)row.getValue("CONTACT_MOBILE");
			String telephone = (String)row.getValue("CONTACT_TELEPHONE");
			String email = (String)row.getValue("CONTACT_EMAIL");
			String adress = (String)row.getValue("CONTACT_ADDRESS");
			String postcode = (String)row.getValue("CONTACT_POSTCODE");
			String faxNum = (String)row.getValue("CONTACT_FAX_NUMBER");
			Date appDateTime = ((Date)row.getValue("APPLICATION_DATE"));
			String appDate = "";
			if(appDateTime != null){
			   appDate = appDateTime.toString();
			}else{
				appDate = " ";
			}
			Date endDateTime = (Date)row.getValue("EXPECT_ENDING_DATE");
			String endDate = "";
			if(endDateTime != null){
				endDate = endDateTime.toString();
			}else{
				endDate = " ";
			}
			String productStyle = (String)row.getValue("PRODUCT_STYLE");
			String companyType = (String)row.getValue("COMPANY_TYPE");
			String fields = (String)row.getValue("APPLICATION_FIELDS");
			String tools = (String)row.getValue("DEVELOPMENT_TOOLS");
			String environment = (String)row.getValue("COMPILER_ENVIRONMENT");
			String productConfig = (String)row.getValue("PRODUCT_CONFIGURATION");
			String models = (String)row.getValue("FEATURES_AND_MODELS");
			String reqirement = (String)row.getValue("TESTING_REQUIREMENTS");
			String conname = (String)row.getValue("hbiConname");
			String recName = (String)row.getValue("hbirecename");
			String minitelephone = (String)row.getValue("MNITL_TELEPHONE");
			String miniFaxNum = (String)row.getValue("MNITL_FAX_NUMBER");
			String miniAddress = (String)row.getValue("MNITL_ADDRESS");
			String miniEmail = (String)row.getValue("MNITL_EMAIL");
			String miniMoble = (String)row.getValue("MNITL_MOBILE");
			String miniPoseCode = (String)row.getValue("MNITL_POSTCODE");
			String companyPromise = ((Integer)row.getValue("COMPANY_PROMISE")).toString();
			String memo = (String)row.getValue("MEMO");
			
			Map<String,String> mapData = new HashMap<String,String>();
			
			mapData.put("appDocNo", appDocNo);
			mapData.put("appDocId", appDocId);
			mapData.put("assigentManuName", assigentManuName);
			mapData.put("deveManuName", deveManuName);
			mapData.put("productname", productname);
			mapData.put("detectionObject", detectionObject);
			mapData.put("lineId", lineId);
			mapData.put("deviceTypeName", deviceTypeName);
			mapData.put("businessName", businessName);
			mapData.put("detectionName", detectionName);
			mapData.put("contronPersonName", contronPersonName);
			mapData.put("miniPersonName", miniPersonName);
			mapData.put("mobel", mobel);
			mapData.put("telephone", telephone);
			mapData.put("email", email);
			mapData.put("adress", adress);
			mapData.put("postcode", postcode);
			mapData.put("faxNum", faxNum);
			mapData.put("appDate", appDate);
			mapData.put("endDate", endDate);
			mapData.put("productStyle", productStyle);
			mapData.put("companyType", companyType);
			mapData.put("fields", fields);
			mapData.put("tools", tools);
			mapData.put("environment", environment);
			mapData.put("productConfig", productConfig);
			mapData.put("models", models);
			mapData.put("reqirement", reqirement);
			mapData.put("conname", conname);
			mapData.put("recName", recName);
			mapData.put("minitelephone", minitelephone);
			mapData.put("miniFaxNum", miniFaxNum);
			mapData.put("miniAddress", miniAddress);
			mapData.put("miniEmail", miniEmail);
			mapData.put("miniMoble", miniMoble);
			mapData.put("miniPoseCode", miniPoseCode);
			mapData.put("memo", memo);
			mapData.put("companyPromise", companyPromise);
			
//			Row applacation = tab.iterator().next();
//			int aSSIGNEDMANUFACTUREID = (Integer)applacation.getValue("aSSIGNEDMANUFACTUREID");
//			Map<String, String> map=new HashMap<String, String>(); 
//			map.put("name", "Zues");
//			map.put("sex", "男");
//			map.put("idCard", "200010");
//			map.put("year1", "2000");
//			map.put("month1", "07");
//			map.put("year2", "2008");
//			map.put("month2", "07");
//			map.put("gap", "2");
//			map.put("zhuanye", "计算机科学与技术");
//			map.put("type", "研究生");
//			map.put("bianhao", "2011020301");
//			map.put("nowy", "2011");
//			map.put("nowm", "01");
//			map.put("nowd", "20220301");
			//注意biyezheng_moban.doc文档位置,此例中为应用根目录
//			st = System_code.class.getResource("").toString();
//			st = st.split("BIZ")[0];
//			st = st.substring(6, st.length());
//			path = File.separator+"BIZ"+File.separator+"xmlupload"+File.separator;
//			st = st+path;
			//File.separator+"var"+File.separator+"X5.2.3_ent"+File.separator+"model"+
			//st = "/var/X5.2.3_ent/model/UI/xmlupload/";
			try {
				Runtime.getRuntime().exec(cp+st+"newWord.doc   "+mapData.get("appDocId")+".doc");
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			String mapPath = FileSystemWrapper.instance().getRealPath("/metrodetection/system_code/logic/code/src/com/becom/test/tablemoban.doc");
			HWPFDocument document=new exportWord().replaceDoc(mapPath, mapData);
			ByteArrayOutputStream ostream = new ByteArrayOutputStream();
			try {
				document.write(ostream);
				//输出word文件
				//OutputStream outs=new FileOutputStream(destFile);
				st = st+mapData.get("appDocId")+".doc";
				OutputStream outs=new FileOutputStream(st);
				outs.write(ostream.toByteArray());
				outs.close();
				
			} catch (IOException e) {
				e.printStackTrace();
			}
			path = path+mapData.get("appDocId")+".doc";
			return path;
		}
}
