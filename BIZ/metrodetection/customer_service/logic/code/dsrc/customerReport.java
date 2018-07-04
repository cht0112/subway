import java.util.*;
import java.math.*;
import java.sql.*;

import com.justep.model.ModelUtils;
import com.justep.system.data.*;

import org.dom4j.*;

public class customerReport {
	public static Table complaintAnalysisByType(String startDate, String endDate) {
		//System.out.println("====开始selectByType====");
		Table tb = null;
		String sql = "select CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE,case when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 1 then '对设备的投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 2 then '对服务态度' " + "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 3 then '对服务人员技能' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 4 then '对异常事件' " + "else '其它' end as TYPE1,COUNT(CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE) AS COUNT1 "
				+ "from CUSTOMER_COMPLAINT_INFO CUSTOMER_COMPLAINT_INFO";
		String groupSql = sql + " group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE";
		String sql1 = sql + " where CUSTOMER_COMPLAINT_INFO.COMPLAINT_DATE between '" + startDate + "' and '" + endDate
				+ "' group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE";
		Map map = new HashMap();
		if (startDate == null && endDate == null) {
			map.put("SYBASE", groupSql);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		} else {
			map.put("SYBASE", sql1);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		}
		Iterator<Row> rows = tb.iterator();
		List data = new ArrayList();
		while (rows.hasNext()) {
			Row row = rows.next();
			data.add(row.getString("TYPE1"));
		}
		if (!data.contains("对设备的投诉")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "对设备的投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("对服务态度")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "对服务态度");
			r.setInt("COUNT1", 0);
		}

		if (!data.contains("对服务人员技能")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "对服务人员技能");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("对异常事件")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "异常事件");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("其它")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "其它");
			r.setInt("COUNT1", 0);
		}
		return tb;
	}

	public static Table complaintAnalysisByTypeChart(String startDate, String endDate) {
		//System.out.println("====开始selectByTypeChart====");
		Table tb = null;
		String sql = "select CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE,case when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 1 then '对设备的投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 2 then '对服务态度' " 
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 3 then '对服务人员技能' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE = 4 then '对异常事件' " 
				+ "else '其它' end as TYPE1,COUNT(CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE) AS COUNT1 "
				+ "from CUSTOMER_COMPLAINT_INFO CUSTOMER_COMPLAINT_INFO";
		String groupSql = sql + " group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE";
		String sql1 = sql + " where CUSTOMER_COMPLAINT_INFO.COMPLAINT_DATE between '" + startDate + "' and '" + endDate
				+ "' group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_TYPE";
		Map map = new HashMap();
		if (startDate == null && endDate == null) {
			map.put("SYBASE", groupSql);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		} else {
			map.put("SYBASE", sql1);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		}
		Iterator<Row> rows = tb.iterator();
		List data = new ArrayList();
		while (rows.hasNext()) {
			Row row = rows.next();
			data.add(row.getString("TYPE1"));
		}
		if (!data.contains("对设备的投诉")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "对设备的投诉");
		}
		if (!data.contains("对服务态度")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "对服务态度");
		}

		if (!data.contains("对服务人员技能")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "对服务人员技能");
		}
		if (!data.contains("对异常事件")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "异常事件");
		}
		if (!data.contains("其它")) {
			Row r = tb.appendRow();
			r.setString("TYPE1", "其它");
		}
		return tb;
	}

	public static Table complaintAnalysisSeverity(String startDate1, String endDate1) {
		//System.out.println("====开始selectBySeverity====");
		Table tb = null;
		String sql = "select CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY,case when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 1 then '严重投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 2 then '较严重投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 3 then '一般投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 4 then '较小投诉' "
				+ "else '其它' end as SEVERITY1,COUNT(CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY) AS COUNT1 " + "from CUSTOMER_COMPLAINT_INFO CUSTOMER_COMPLAINT_INFO";
		String groupSql = sql + " group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY";
		String sql1 = sql + " where CUSTOMER_COMPLAINT_INFO.COMPLAINT_DATE between '" + startDate1 + "' and '"
				+ endDate1 + "' group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY";
		Map map = new HashMap();
		if (startDate1 == null && endDate1 == null) {
			map.put("SYBASE", groupSql);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		} else {
			map.put("SYBASE", sql1);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		}
		Iterator<Row> rows = tb.iterator();
		List data = new ArrayList();
		while (rows.hasNext()) {
			Row row = rows.next();
			data.add(row.getString("SEVERITY1"));
		}
		if (!data.contains("严重投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "严重投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("较严重投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "较严重投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("一般投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "一般投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("较小投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "较小投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("其它")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "其它");
			r.setInt("COUNT1", 0);
		}
		
		return tb;
	}

	public static Table complaintAnalysisSeverityChart(String startDate1, String endDate1) {
		//System.out.println("====开始selectBySeverityChart====");
		Table tb = null;
		String sql = "select CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY,case when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 1 then '严重投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 2 then '较严重投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 3 then '一般投诉' "
				+ "when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY = 4 then '较小投诉' "
				+ "else '其它' end as SEVERITY1,COUNT(CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY) AS COUNT1 " + "from CUSTOMER_COMPLAINT_INFO CUSTOMER_COMPLAINT_INFO";
		String groupSql = sql + " group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY";
		String sql1 = sql + " where CUSTOMER_COMPLAINT_INFO.COMPLAINT_DATE between '" + startDate1 + "' and '"
				+ endDate1 + "' group by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY order by CUSTOMER_COMPLAINT_INFO.COMPLAINT_SEVERITY";
		Map map = new HashMap();
		if (startDate1 == null && endDate1 == null) {
			map.put("SYBASE", groupSql);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		} else {
			map.put("SYBASE", sql1);
			tb = SQL.select(map, null, "/metrodetection/customer_service/data");
		}
		Iterator<Row> rows = tb.iterator();
		List data = new ArrayList();
		while (rows.hasNext()) {
			Row row = rows.next();
			data.add(row.getString("SEVERITY1"));
		}
		if (!data.contains("严重投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "严重投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("较严重投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "较严重投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("一般投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "一般投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("较小投诉")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "较小投诉");
			r.setInt("COUNT1", 0);
		}
		if (!data.contains("其它")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY1", "其它");
			r.setInt("COUNT1", 0);
		}
		return tb;
	}


	public static Table complaintProcessQueryReport(String sflowid){
//		System.out.println("sflowid:"+sflowid);
		Table tb = null;
		if(sflowid==null){
			String sql2 = "SELECT " +
				"SA_Task.sParentid AS SPARENTID," +
				"SA_Task.sActivityName AS SACTIVITYNAME," +
				"SA_Task.sContent AS SCONTENT," +
				"SA_Task.sExecutorDeptName AS SEXECUTORDEPTNAME," +
				"SA_Task.sExecutorPersonName AS SEXECUTORPERSONNAME," +
				"SA_Task.sStatusName AS STATUSNAME," +
				"SA_Task.sActualFinishTime AS SACTUALFINISHTIME " +
				"FROM SA_Task SA_Task WHERE SA_Task.sTypeName = '客户投诉管理' " +
				"AND SA_Task.sParentid is not null "+
				" and (SA_Task.sKindID in ('tkTask', 'tkExecutor')) "+
				" and (SA_Task.sActualFinishTime is not null) "+
				" and (SA_Task.sExecutorPersonID is not null) " +
				"order by SA_Task.sActualFinishTime";
			Map map2 = new HashMap();
			map2.put("SYBASE", sql2);
			tb = SQL.select(map2, null, "/system/data");
		} else {
			String sql = "SELECT " +
			"SA_Task.sParentid AS SPARENTID," +
			"SA_Task.sActivityName AS SACTIVITYNAME," +
			"SA_Task.sContent AS SCONTENT," +
			"SA_Task.sExecutorDeptName AS SEXECUTORDEPTNAME," +
			"SA_Task.sExecutorPersonName AS SEXECUTORPERSONNAME," +
			"SA_Task.sStatusName AS STATUSNAME," +
			"SA_Task.sActualFinishTime AS SACTUALFINISHTIME " +
			"FROM SA_Task SA_Task WHERE SA_Task.sTypeName = '客户投诉管理' " +
			"AND SA_Task.sParentid is not null "+
			" and (SA_Task.sKindID in ('tkTask', 'tkExecutor')) "+
			" and (SA_Task.sActualFinishTime is not null) "+
			" and (SA_Task.sExecutorPersonID is not null) " +
			"AND sflowid='" + sflowid+"' order by SA_Task.sActualFinishTime";
		Map map = new HashMap();
		map.put("SYBASE", sql);
		tb = SQL.select(map, null, "/system/data");
		}
		return tb;
	}
}