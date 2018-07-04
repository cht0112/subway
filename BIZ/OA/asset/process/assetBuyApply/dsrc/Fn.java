import java.text.SimpleDateFormat;
import java.util.Iterator;

import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class Fn {
	private static final String DATA_MODEL = "/OA/asset/data";
	private static final String CONCEPT = "OA_AS_BuyApplyM";
	private static final String CONCEPT_D = "OA_AS_BuyApplyD";
	private static Row getData(String bizID) {
		String ksql = String.format(
				"select m.* from %s m where m = '%s' ",
				CONCEPT, bizID);
		Table table = KSQL.select(ksql, null, DATA_MODEL, null);
		Utils.check(table.iterator().hasNext(),
				String.format("无效的ID[%s]", bizID));
		Row row = table.iterator().next();
		return row;
	}
	
	private static Table getDetailData(String bizID) {
		String ksql = String.format(
				"select m.* from %s m where m.fMasterID = '%s' ",
				CONCEPT_D, bizID);
		Table table = KSQL.select(ksql, null, DATA_MODEL, null);
		
		return table;
	}
	
	public static String getSummary(String bizID) {
		Row row = getData(bizID);
		Table table = getDetailData(bizID);
		Iterator<Row> it = table.iterator();
		String detail = "";
		while(it.hasNext()){
			Row r = it.next();
			String fName = r.getString("fName");
			if("".equals(detail)){
				detail = fName;
			}else{
				detail += "、" + fName;
			}
		}
		String s = String.format("%s在%s申请采购%s等资产,总额%s元。", 
					row.getString("fApplyPsnName"), 
					new SimpleDateFormat("yyyy-MM-dd").format(row.getDate("fApplyDate")),
					detail, row.getDecimal("fAmount").toString());
		return s;
	}
}