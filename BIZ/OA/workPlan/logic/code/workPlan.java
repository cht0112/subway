import org.dom4j.*;
import java.sql.*;
import java.util.*;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.context.ContextHelper;

public class workPlan {
	public static Table getWorkPlan(String count) throws Exception {
		String ognID = com.justep.appCommon.SysUtils.getCurrentPersonID();
		String ksql = String
				.format("SELECT OA_GZJH, OA_GZJH.fJHZT, OA_GZJH.fFZR,OA_GZJH.fJHKSRQ,OA_GZJH.fJHJSRQ,OA_GZJH.fGZJHLX"
						+ "	FROM OA_GZJH OA_GZJH"
						// + "	WHERE OA_GZJH.fApplyPsnID = '%s'"
						// + "	ORDER BY fApplyDate desc LIMIT 0,%s"
						// ,ognID,count);
						+ "	ORDER BY fJHKSRQ desc LIMIT 0,%s", count);
		Table result = KSQL.select(ksql, null, "/OA/workPlan/data", null);
		return result;
	}

	public static Table getDeptWorkPlan(String year, String month) {
		String ksql = String
				.format("select OA_GZNR.fWorkContent,OA_GZJH.fCBBM,OA_GZJH as planID from OA_GZNR OA_GZNR join OA_GZJH OA_GZJH on OA_GZNR.fGZJHID=OA_GZJH where OA_GZNR.fGZJHID in (select OA_GZJH from OA_GZJH OA_GZJH where OA_GZJH.fGZJHLX='部工作计划' and OA_GZJH.fPlanYear='%s' and OA_GZJH.fPlanMonth='%s') order by OA_GZNR.fSequence asc",
						year, month);
		Table table = KSQL.select(ksql, null, "/OA/workPlan/data", null);
		System.out.println(ksql);
		return table;
	}

	public static Table getOfficeWorkPlan(String year, String month,
			String week, String deptID) {
		String ksql = String
				.format("select OA_GZNR.fWorkContent,OA_GZJH.fCBBM,OA_GZJH as planID from OA_GZNR OA_GZNR join OA_GZJH OA_GZJH on OA_GZNR.fGZJHID=OA_GZJH where OA_GZNR.fGZJHID in (select OA_GZJH from OA_GZJH OA_GZJH where OA_GZJH.fGZJHLX='局工作计划' and OA_GZJH.fPlanYear='%s' and OA_GZJH.fPlanMonth='%s' and OA_GZJH.fPlanWeek='%s' and OA_GZJH.fCreateDeptID='%s') order by OA_GZNR.fSequence asc",
						year, month, week, deptID);
		Table table = KSQL.select(ksql, null, "/OA/workPlan/data", null);
		System.out.println(ksql);
		return table;
	}

	public static Table getWorkPlansOfWeekPP(String year, String month,
			String week) {
		// System.out.println("aa");
		String ksql = String
				.format("select OA_GZNR.fWorkContent,OA_GZJH.fCBBM,OA_GZJH.fCreateTime,OA_GZJH as planID from OA_GZNR OA_GZNR join OA_GZJH OA_GZJH on OA_GZNR.fGZJHID=OA_GZJH where OA_GZNR.fGZJHID in (select OA_GZJH from OA_GZJH OA_GZJH where OA_GZJH.fGZJHLX='部工作计划' and OA_GZJH.fPlanYear = '%s' and  OA_GZJH.fPlanMonth='%s' and  OA_GZJH.fPlanWeek='%s') order by OA_GZNR.fSequence asc",
						year, month, week);
		System.out.println("bu:" + ksql);
		Table table = KSQL.select(ksql, null, "/OA/workPlan/data", null);
		// System.out.println("aa");
		return table;
	}

	public static Table getDeptWorkPlanOfCurrWeek(String beginDate,
			String endDate) {
		String ksql = String
				.format("select OA_GZNR.fWorkContent,OA_GZJH.fCBBM,OA_GZJH.fCreateTime,OA_GZJH as planID from OA_GZNR OA_GZNR join OA_GZJH OA_GZJH on OA_GZNR.fGZJHID=OA_GZJH where OA_GZNR.fGZJHID in (select OA_GZJH from OA_GZJH OA_GZJH where OA_GZJH.fGZJHLX='部工作计划' and OA_GZJH.fJHKSRQ >= stringToDate('%s') and stringToDate('%s') >= OA_GZJH.fJHKSRQ) order by OA_GZNR.fSequence asc",
						beginDate, endDate);
		/*
		 * String ksql = String .format(
		 * "select OA_GZNR.fWorkContent,OA_GZJH.fCBBM,OA_GZJH.fCreateTime,OA_GZJH as planID from OA_GZNR OA_GZNR join OA_GZJH OA_GZJH on OA_GZNR.fGZJHID=OA_GZJH where OA_GZNR.fGZJHID in (select OA_GZJH from OA_GZJH OA_GZJH where OA_GZJH.fGZJHLX='部工作计划') order by OA_GZNR.fSequence asc"
		 * );
		 */
		Table table = KSQL.select(ksql, null, "/OA/workPlan/data", null);
		System.out.println("bu:" + ksql);
		return table;
	}

	public static Table getOfficeWorkPlanOfCurrMonth(String beginDate,
			String endDate, String deptID) { 
		String ksql = "select OA_GZNR.fWorkContent,OA_GZJH.fCBBM,OA_GZJH.fCreateTime,OA_GZJH as planID from OA_GZNR OA_GZNR join OA_GZJH OA_GZJH on OA_GZNR.fGZJHID=OA_GZJH where OA_GZNR.fGZJHID in (select OA_GZJH from OA_GZJH OA_GZJH where OA_GZJH.fGZJHLX='局工作计划' and OA_GZJH.fJHKSRQ >= stringToDate('"
				+ beginDate
				+ "') and stringToDate('"
				+ endDate
				+ "') >= OA_GZJH.fJHKSRQ and OA_GZJH.fCreatePsnFID like '%"
				+ deptID + "%') order by OA_GZNR.fSequence asc";
		Table table = KSQL.select(ksql, null, "/OA/workPlan/data", null);
		System.out.println("ju:" + ksql);
		return table;
	}

	public static String getTaskIDByOwnCreate(String sData1, String activity,
			String executorID) {
		String ksql = String
				.format("select SA_Task as taskID from SA_Task SA_Task where SA_Task.sData1 = '%s' and SA_Task.sActivity = '%s' and SA_Task.sStatusID = 'tesReady' and SA_Task.sExecutorPersonID = '%s'",
						sData1, activity, executorID);
		System.out.println("ksql========" + ksql);
		Table table = KSQL.select(ksql, null, "/system/data", null);
		String taskID = "";
		Iterator<Row> rows = table.iterator();
		if (rows.hasNext()) {
			Row row = rows.next();
			taskID = row.getString("taskID");
		}
		return taskID;
	}

	public static String getFDeptTiltle(String sID) {
		String ksql = String
				.format("SELECT SA_OPOrg.sName,SA_OPOrg.sFName FROM SA_OPOrg SA_OPOrg where SA_OPOrg='%s'", sID);
		System.out.println("ksql========" + ksql);
		Table table = KSQL.select(ksql, null, "/system/data", null);
		String sName = "";
		String sFName="";
		String dept="";
		Iterator<Row> rows = table.iterator();
		if (rows.hasNext()) {
			Row row = rows.next();
			sName = row.getString("sName");
			sFName = row.getString("sFName");
			if(!("".equals(sFName))&&!("".equals(sName))){
				int p=sFName.lastIndexOf(sName);
				dept=sFName.substring(1,p+sName.length());
			}
		}
		String a[];
		if(dept.indexOf("/")!=-1){
			a=dept.split("/");
			dept=a[0]+"/"+a[1];
		}
		System.out.println("dept:"+dept);
		return dept;
	}
}