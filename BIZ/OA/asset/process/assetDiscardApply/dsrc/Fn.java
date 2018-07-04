import java.text.SimpleDateFormat;
import java.util.Iterator;

import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class Fn {
	private static final String DATA_MODEL = "/OA/asset/data";
	private static final String CONCEPT = "OA_AS_DiscardApply";
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
	
	
	public static String getSummary(String bizID) {
		Row row = getData(bizID);
		String s = String.format("%s于%s申请报废资产编号:%s,名称:%s。", 
					row.getString("fApplyPsnName"), 
					new SimpleDateFormat("yyyy-MM-dd").format(row.getDate("fApplyDate")),
					row.getString("fCode"), row.getString("fName"));
		return s;
	}
}