import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import com.justep.system.data.BizData;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class myQueryFunc {
	public static Table queryFuncAction(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Table selectLineAction(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static String funcXML(String processes) throws IOException{
		try {
			System.out.println(processes+"**************");
			File file = new File(processes);
			SAXReader reader = new SAXReader(); 
			Document document = reader.read(file);
			Element root=document.getRootElement(); 
			List<Element> elementList=root.elements();
			List<Element> elList = new ArrayList<Element>();
			Element el_2 = null;
			Element el_3 = null;
			Element el_4 = null;
			for(Element el : elementList){
				if(el.attributeValue("label").equals("支撑平台系统")){
					el_2 = el;
					elList = el.elements();
					for(Element el5 : elList){
						el.remove(el5);
					}
				} else if(el.attributeValue("label").equals("检测平台系统")){
					el_3 = el;
					elList = el.elements();
					for(Element el5 : elList){
						el.remove(el5);
					}
				} else {
					el_4 = el;
					elList = el.elements();
					for(Element el5 : elList){
						el.remove(el5);
					}
				}
			}
			
			String kSqlSelect = "select func, func.fUNCNAME, func.sYSTEMTYPE  from FUNC_ID func where func.sYSTEMTYPE > 1";
			Table table = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			
			if(table.size()>0){
				Iterator<Row> rs = table.iterator(); 
				Row row = null;
				while(rs.hasNext()){
					row = rs.next();
					String type = row.getValue("sYSTEMTYPE").toString();
					String fname = row.getValue("fUNCNAME").toString();
					String fID = row.getValue("func").toString();
					
					Element el5 = null;
					if(type.equals("2")){
						el5 = el_2.addElement("item");
					}else if(type.equals("3")){
						el5 = el_3.addElement("item");
					} else {
						el5 = el_4.addElement("item");
					}
					el5.setAttributeValue("label", fname);
					el5.setAttributeValue("process", fID);
					el5.setAttributeValue("activity", "a");
					el5.setAttributeValue("url", type);
				}
			}
			
			FileOutputStream fos = new FileOutputStream(processes);
	        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos,
	                "utf-8"));
	        XMLWriter writer = new XMLWriter(bw);
	        writer.write(document);
	        bw.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "ok";
	}
}