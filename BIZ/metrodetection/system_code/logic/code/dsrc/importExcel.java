import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.SQL;
import com.justep.system.data.Table;
public class importExcel{
	private static String path;
	private static final int CELL_TYPE_NUMERIC = 0;	
	public static String importE(String fileName){
		path=fileName;
		StringBuffer res = new StringBuffer();
		int length=0;
	    /****************************数据库中查数据字典中的编码开始*******************************/
	    /********************查询检测对象对象类别********************************/
		String mySql = "select object.detection_object_type as id,object.DETECTION_OBJECT_CNAME as name from DETECTION_OBJECT_TYPE object";
		Table table = null;
		Map mapSql = new HashMap();
		Map objectMap = new HashMap();
		mapSql.put("SYBASE", mySql);
		table = SQL.select(mapSql,null, "/metrodetection/system_code/data");
		Iterator<Row> rs = table.iterator();
		while(rs.hasNext()){
			Row r = rs.next();
			Integer id = r.getInteger(0);
			String name = r.getString(1);
			objectMap.put(name, id);
		}
		System.out.println("检测对象对象类别    "+objectMap);
	    /********************查询检测对象***********************************/
		mySql = "select device.dEVICE_TYPE as id,device.dEVICE_TYPE_CNAME as name from DEVICE_TYPE_CODE device";
		Table table1 = null;
		Map mapSql1 = new HashMap();
		Map deviceMap = new HashMap();
		mapSql1.put("SYBASE", mySql);
		table1 = SQL.select(mapSql1,null, "/metrodetection/system_code/data");
		Iterator<Row> rs1 = table1.iterator();
		while(rs1.hasNext()){
			Row r = rs1.next();
			Integer id = r.getInteger(0);
			String name = r.getString(1);
			deviceMap.put(name, id);
		}
		System.out.println("检测对象    "+deviceMap);		    
	    /********************查询检测业务类型********************************/
		mySql = "select business.bUSINESS_ID as id,business.bUSINESS_ID_CNAME as name from BUSINESS_TYPE_CODE business";
		Table table2 = null;
		Map mapSql2 = new HashMap();
		Map businessMap = new HashMap();
		mapSql2.put("SYBASE", mySql);
		table2 = SQL.select(mapSql2,null, "/metrodetection/system_code/data");
		Iterator<Row> rs2 = table2.iterator();
		while(rs2.hasNext()){
			Row r = rs2.next();
			Integer id = r.getInteger(0);
			String name = r.getString(1);
			businessMap.put(name, id);
		}
		System.out.println("检测业务类型    "+businessMap);	
/***********************************数据库中查数据字典中的编码结束**************************************/
		/********************获取指标序号最大值***********/
		String maxSql = "select max(tt.INDEX_NO) as maxId from index_system_value tt";
		Table maxIndexTable = null;
		Map maxMap = new HashMap();
		maxMap.put("SYBASE", maxSql);
		maxIndexTable = SQL.select(maxMap,null, "/metrodetection/system_code/data");
		Iterator<Row> maxRs = maxIndexTable.iterator();
		Integer maxId = 0;
		int a = maxId.intValue();
		while(maxRs.hasNext()){
			Row r = maxRs.next();
			maxId = r.getInteger(0);
			if(maxId!=null){
				a = maxId+1;
			}else{
				a = 1;
			}
		}
		//读取excel中信息
		try {
			System.out.println(path.substring(path.length()-1));
			if(path.substring(path.length()-1).equals("s")){
				//path = PropertiesAction.PropertiesA("importValueFileNameUrl");
				FileInputStream input = new FileInputStream(path);
				HSSFWorkbook wb=new HSSFWorkbook(input);
				HSSFSheet sheet = wb.getSheetAt(0);		
				length = sheet.getPhysicalNumberOfRows();
//				System.out.println(length+"行");
			    for(int j=1;j<length;j++){
			    	HSSFRow row = sheet.getRow(j);
//			    	System.out.println(row);
				    if(row.getCell(0)!=null){
				    	List valueList = new ArrayList();
				    	int type = row.getCell(0).getCellType();
				    	if(type==CELL_TYPE_NUMERIC){
				    		valueList.add(row.getCell(0).getNumericCellValue());
				    	}else{
				    		valueList.add(row.getCell(0).getStringCellValue());
				    	}
//				    	valueList.add(row.getCell(0).getNumericCellValue());
				    	if(row.getCell(8)==null){
				    		valueList.add(null);
				    	}else{
				    		valueList.add(row.getCell(8).getRichStringCellValue());
				    	}
				    	if(row.getCell(9)==null){
				    		valueList.add(null);
				    	}else{
				    		valueList.add(row.getCell(9).getRichStringCellValue());
				    	}
				    	System.out.println(valueList);
				    	/******更新数据*********/
						StringBuffer updateSql = new StringBuffer();
						Map<String, Object> mapp = new  HashMap<String,Object>();
						mapp.put("id", Integer.valueOf(valueList.get(0).toString()));
						if(valueList.get(1)==null){
							mapp.put("iNDEXVALUE"," ");
						}else{
							mapp.put("iNDEXVALUE", valueList.get(1).toString());
						}
						if(valueList.get(2)==null){
							mapp.put("iNDEXVALUEDESC"," ");
						}else{
							mapp.put("iNDEXVALUEDESC", valueList.get(2).toString());
						}
						updateSql.append("update INDEX_SYSTEM_VALUE value set value.iNDEXVALUE=:iNDEXVALUE, value.iNDEXVALUEDESC=:iNDEXVALUEDESC  where value=:id ");
						KSQL.executeUpdate(updateSql.toString(), mapp, "/metrodetection/system_code/data", null);
						System.out.println("数据库中更新的数据"+valueList);
				    }else if(row.getCell(8)!= null && row.getCell(9)!= null){
				    	List valueList = new ArrayList();
				    	valueList.add(0);
				    	valueList.add(row.getCell(1).getNumericCellValue());			    	
				    	valueList.add(row.getCell(2).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(3).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(4).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(5).getRichStringCellValue().toString());		
				    	valueList.add(row.getCell(6).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(7).getRichStringCellValue().toString());			    	
				    	valueList.add(row.getCell(8).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(9).getRichStringCellValue().toString());	
				    	valueList.add(row.getCell(10).getNumericCellValue());
				    	System.out.println(valueList);
				    	StringBuffer insertSql = new StringBuffer();
				    	Map<String, Object> mapp = new  HashMap<String,Object>();
						mapp.put("id", a++);
						mapp.put("bUSINESSID",businessMap.get(valueList.get(7)));
						mapp.put("iNDEXID", valueList.get(1));
						mapp.put("aPPLYFOROBJECT", objectMap.get(valueList.get(5)));
						mapp.put("aPPLYFORDEVICETYPE", deviceMap.get(valueList.get(6)));
						mapp.put("iNDEXVALUE", valueList.get(8));
						mapp.put("iNDEXVALUEDESC", valueList.get(9));
						mapp.put("iNDEXSYSTEMNO",valueList.get(10));
						System.out.println(mapp);
						insertSql.append("insert into INDEX_SYSTEM_VALUE value(value,value.bUSINESSID,value.iNDEXID,value.aPPLYFOROBJECT,value.aPPLYFORDEVICETYPE,value.iNDEXVALUE,value.iNDEXVALUEDESC,value.iNDEXSYSTEMNO) values(")
						.append(":id,")
						.append(":bUSINESSID,")
						.append(":iNDEXID,")
						.append(":aPPLYFOROBJECT,")
						.append(":aPPLYFORDEVICETYPE,")
						.append(":iNDEXVALUE,")
						.append(":iNDEXVALUEDESC,")
						.append(":iNDEXSYSTEMNO)");
						System.out.println(insertSql);
						String s = "select * from index_system_value value where value.BUSINESS_ID="+mapp.get("bUSINESSID")+" and value.APPLY_FOR_OBJECT="+mapp.get("aPPLYFOROBJECT")+" and value.APPLY_FOR_DEVICE_TYPE="+mapp.get("aPPLYFORDEVICETYPE")+" and value.INDEX_VALUE='"+mapp.get("iNDEXVALUE")+"' and value.INDEX_VALUE_DESC='"+mapp.get("iNDEXVALUEDESC")+"' and value.INDEX_SYSTEM_NO="+mapp.get("iNDEXSYSTEMNO");
//						System.out.println(s);
						Table bb = null;
						Map isOk = new HashMap();
						isOk.put("SYBASE", s);
						bb = SQL.select(isOk,null, "/metrodetection/system_code/data");
						if(bb.size()==0){
							KSQL.executeUpdate(insertSql.toString(), mapp, "/metrodetection/system_code/data", null);
						}
						System.out.println("数据库中新增的数据"+valueList);
				    }
			    }
				
			}else{
				XSSFWorkbook xwb = new XSSFWorkbook(path);
				XSSFSheet sheet = xwb.getSheetAt(0); 
				length = sheet.getPhysicalNumberOfRows();
				System.out.println(length+"行");
			    for(int j=1;j<length;j++){
			    	XSSFRow row  = sheet.getRow(j);	
			    	System.out.println(row);
				    if(row.getCell(0)!=null){
				    	List valueList = new ArrayList();
				    	valueList.add(row.getCell(0).getNumericCellValue());
				    	//System.out.println(row.getCell(8));
				    	valueList.add(row.getCell(8).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(9).getRichStringCellValue().toString());	
				    	System.out.println("************888"+valueList);
				    	/******更新数据*********/
						StringBuffer updateSql = new StringBuffer();
						Map<String, Object> mapp = new  HashMap<String,Object>();
						mapp.put("id", valueList.get(0));
						if(valueList.get(1).toString().equals("")){
							mapp.put("iNDEXVALUE"," ");
						}else{
							mapp.put("iNDEXVALUE", valueList.get(1));
						}
						if(valueList.get(2).toString().equals("")){
							mapp.put("iNDEXVALUEDESC"," ");
						}else{
							mapp.put("iNDEXVALUEDESC", valueList.get(2));
						}
						updateSql.append("update INDEX_SYSTEM_VALUE value set value.iNDEXVALUE=:iNDEXVALUE, value.iNDEXVALUEDESC=:iNDEXVALUEDESC  where value=:id ");
						System.out.println("数据库中更新的数据"+valueList);
						KSQL.executeUpdate(updateSql.toString(), mapp, "/metrodetection/system_code/data", null);
				    }else if(row.getCell(8)!= null && row.getCell(9)!= null){
				    	List valueList = new ArrayList();
				    	valueList.add(0);
				    	valueList.add(row.getCell(1).getNumericCellValue());			    	
				    	valueList.add(row.getCell(2).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(3).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(4).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(5).getRichStringCellValue().toString());		
				    	valueList.add(row.getCell(6).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(7).getRichStringCellValue().toString());			    	
				    	valueList.add(row.getCell(8).getRichStringCellValue().toString());
				    	valueList.add(row.getCell(9).getRichStringCellValue().toString());	
				    	valueList.add(row.getCell(10).getNumericCellValue());
				    	System.out.println("数据库中新增的数据"+valueList);
				    	StringBuffer insertSql = new StringBuffer();
				    	Map<String, Object> mapp = new  HashMap<String,Object>();
						mapp.put("id", a++);
						mapp.put("bUSINESSID",businessMap.get(valueList.get(7)));
						mapp.put("iNDEXID", valueList.get(1));
						mapp.put("aPPLYFOROBJECT", objectMap.get(valueList.get(5)));
						mapp.put("aPPLYFORDEVICETYPE", deviceMap.get(valueList.get(6)));
						mapp.put("iNDEXVALUE", valueList.get(8));
						mapp.put("iNDEXVALUEDESC", valueList.get(9));
						mapp.put("iNDEXSYSTEMNO",valueList.get(10));
//						System.out.println(mapp);
						insertSql.append("insert into INDEX_SYSTEM_VALUE value(value,value.bUSINESSID,value.iNDEXID,value.aPPLYFOROBJECT,value.aPPLYFORDEVICETYPE,value.iNDEXVALUE,value.iNDEXVALUEDESC,value.iNDEXSYSTEMNO) values(")
						.append(":id,")
						.append(":bUSINESSID,")
						.append(":iNDEXID,")
						.append(":aPPLYFOROBJECT,")
						.append(":aPPLYFORDEVICETYPE,")
						.append(":iNDEXVALUE,")
						.append(":iNDEXVALUEDESC,")
						.append(":iNDEXSYSTEMNO)");
						System.out.println(insertSql);
						String s = "select * from index_system_value value where value.BUSINESS_ID="+mapp.get("bUSINESSID")+" and value.APPLY_FOR_OBJECT="+mapp.get("aPPLYFOROBJECT")+" and value.APPLY_FOR_DEVICE_TYPE="+mapp.get("aPPLYFORDEVICETYPE")+" and value.INDEX_VALUE='"+mapp.get("iNDEXVALUE")+"' and value.INDEX_VALUE_DESC='"+mapp.get("iNDEXVALUEDESC")+"' and value.INDEX_SYSTEM_NO="+mapp.get("iNDEXSYSTEMNO");
//						System.out.println(s);
						Table bb = null;
						Map isOk = new HashMap();
						isOk.put("SYBASE", s);
						bb = SQL.select(isOk,null, "/metrodetection/system_code/data");
						if(bb.size()==0){
							KSQL.executeUpdate(insertSql.toString(), mapp, "/metrodetection/system_code/data", null);
						}
				    }
			    }
			}
			res = res.append("导入成功！");
			return res.toString();
		}catch (Exception e){
			e.printStackTrace();
			res = res.append("导入失败！");
			return res.toString();			
		}
	}
}