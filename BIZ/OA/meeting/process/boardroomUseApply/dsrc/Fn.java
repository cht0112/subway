import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class Fn {
	private static final String DATA_MODEL = "/OA/meeting/data";
	private static final String CONCEPT = "OA_MT_UseApply";
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
		String s = String.format("%s在%s到%s预定%s,主题:%s。", 
					row.getString("fApplyPsnName"), row.getDateTime("fBeginTime").toLocaleString(),
					row.getDateTime("fEndTime").toLocaleString(), row.getString("fBoardroom"), 
					row.getString("fMeetName"));
		return s;
	}
}