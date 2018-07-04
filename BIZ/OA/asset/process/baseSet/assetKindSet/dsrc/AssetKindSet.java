import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class AssetKindSet {

	public static void assetKindSetProcessAfterSaveASKindAction() {
		//System.out.println("==============================");
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		Table tb = (Table) conn.getParameter("table");
		Iterator<Row>  it = tb.iterator();
		while(it.hasNext()){
			//取出遍历的当前记录，格式数据
			Row rowData = it.next();
			String fCode = (String)rowData.getValue("fCode");
			if(StringUtils.isNotBlank(fCode)) {
				fCode = fCode.replace("!*!", "");
//				System.out.println("===fCode====: "+rowData.getValue("fCode"));
				if(fCode.length() >= 8) {
					if(fCode.indexOf("undefined") == -1) {
						String toolCategory = fCode.substring(0, 4);
						Integer category = Integer.parseInt(toolCategory);
						String toolSort = fCode.substring(4, 6);
						Integer sort = Integer.parseInt(toolSort);
						String toolType = fCode.substring(6);
						Integer type = Integer.parseInt(toolType);
						System.out.println(category+"----"+sort+"----"+type);
						
						//查看工具映射表中是否有相应的记录，没有则增加。
						Map<String,Object> varScode = new HashMap<String,Object>();
						varScode.put("category", category);
						varScode.put("sort", sort);
						varScode.put("type", type);
						String ksqlSelecttoolRelationship = "select RELATIONSHIP.* from TOOL_RELATIONSHIP RELATIONSHIP " +
								"where RELATIONSHIP.tOOLCATEGORY = :category " +
									"and RELATIONSHIP.tOOLSORT = :sort " +
									"and RELATIONSHIP.tOOLTYPE = :type";
						Table tabRelation =KSQL.select(ksqlSelecttoolRelationship,varScode,"/metrodetection/system_code/data",null);
						if(tabRelation != null && tabRelation.size()==0){
							String insertRelationship = "insert into TOOL_RELATIONSHIP " +
									"RELATIONSHIP(RELATIONSHIP,RELATIONSHIP.tOOLCATEGORY,RELATIONSHIP.tOOLSORT," +
									"RELATIONSHIP.tOOLTYPE) values(:toInteger(nextSeqString('1000','2003')),:category,:sort,:type)";
							KSQL.executeUpdate(insertRelationship, varScode, "/metrodetection/system_code/data",null);
						}
					}
				}
			}
		}
	}
}