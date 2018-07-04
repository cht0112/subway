import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.justep.system.data.BizData;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.SQL;
import com.justep.system.data.Table;

public class testScheme {
	
	//获得检测方案流程的标题
	public static String schemeTitleFn(){
		String schemeprocessTitle = "";
		String schemeSelect = "select tsbi.* from TEST_SCHEME_BASE_INFO tsbi where tsbi=:toInteger(getProcessData1())";
		Table tabScheme = KSQL.select(schemeSelect, null, "/metrodetection/system_code/data", null);
		Row rowScheme = tabScheme.iterator().next();
		String schemeName = (String)rowScheme.getValue("tESTSCHEMENAME");
		Date schemeDate = (Date)rowScheme.getValue("mAKEDATETIME");
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
		String schemeTrueDate = sf.format(schemeDate);
		String schemeDescription = (String)rowScheme.getValue("tESTSCHEMEDESC");
		schemeprocessTitle = "检测方案名称: "+schemeName+"--制作日期: "+schemeTrueDate+"--方案描述: "+schemeDescription;
		System.out.println(schemeprocessTitle);
		return schemeprocessTitle;
	}
	
	//检测方案流程报表查询
	public static Table testSchemeProcessQueryReport(String sFlowID){
		System.out.println("====开始selectComplaintProcessQueryReport===="+sFlowID);
		Table tb = null;
		if(sFlowID==null){
			String sql2 = "SELECT " +
			"SA_Task.sParentid AS SPARENT," +
			"SA_Task.sActivityName AS SACTIVITYNAME," +
			"SA_Task.sContent AS SCONTENT," +
			"SA_Task.sExecutorDeptName AS SEXECUTORDEPTNAME," +
			"SA_Task.sExecutorPersonName AS SEXECUTORPERSONNAME," +
			"SA_Task.sStatusName AS SSTATUSNAME," +
			"SA_Task.sActualFinishTime AS SACTUALFINISHTIME " +
				"FROM SA_Task SA_Task WHERE SA_Task.sTypeName = '检测方案基本信息' " +
				"AND SA_Task.sParentid is not null"+
				" and SA_Task.sKindID='tkTask' ";
			Map map2 = new HashMap();
			map2.put("SYBASE", sql2);
			tb = SQL.select(map2, null, "/system/data");
		} else {
			String sql = "SELECT " +
			"SA_Task.sParentid AS SPARENT," +
			"SA_Task.sActivityName AS SACTIVITYNAME," +
			"SA_Task.sContent AS SCONTENT," +
			"SA_Task.sExecutorDeptName AS SEXECUTORDEPTNAME," +
			"SA_Task.sExecutorPersonName AS SEXECUTORPERSONNAME," +
			"SA_Task.sStatusName AS SSTATUSNAME," +
			"SA_Task.sActualFinishTime AS SACTUALFINISHTIME " +
			"FROM SA_Task SA_Task WHERE SA_Task.sTypeName = '检测方案基本信息' " +
			"AND SA_Task.sParentid is not null " +
			" and SA_Task.sKindID='tkTask' "+
			"AND SA_Task.sflowid='" + sFlowID+"'";
		Map map = new HashMap();
		map.put("SYBASE", sql);
		tb = SQL.select(map, null, "/system/data");
		}
		return tb;
	}
	
	//检测流程查询
	public static Table testSchemeProcessQuery(String concept,String idColumn,String select,String from,String aggregate,String condition,List range,String filter,Integer limit,Integer offset,Boolean distinct,String columns,String orderBy,String aggregateColumns,Map variables,String fnModel,String dataModel,String status,String org){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Integer newScheme(Integer schemeId){
		System.out.println("=============================:      "+schemeId);
	
		//更新 RECURRENCE_TEST_SCHEME记录
//		String updateRecurTestScheme = "update RECURRENCE_TEST_SCHEME rts set rts.IS_USED=2 where rts.APPLICATION_NO="+schemeId;
//		KSQL.executeUpdate(updateRecurTestScheme, null,"/metrodetection/system_code/data", null);	
		
		// RECURRENCE_TEST_SCHEME插入记录
		String insertRecurTestScheme = "insert into RECURRENCE_TEST_SCHEME rts(rts,rts.APPLICATION_NO,rts.TEST_SCHEME_ID,rts.IS_USED) values(:guid(),"+schemeId+",:toInteger(nextSeqString('1000','2003')),1)";
		KSQL.executeUpdate(insertRecurTestScheme, null, "/metrodetection/system_code/data", null);
		
		//查询RECURRENCE_TEST_SCHEME中刚插入的记录
		String queryRecurTestScheme = "select rts.*  from RECURRENCE_TEST_SCHEME rts where rts.APPLICATION_NO="+schemeId+" and rts.IS_USED=1";
	    Table tab= KSQL.select(queryRecurTestScheme, null, "/metrodetection/system_code/data", null);
	    Integer schemeIdTest = (Integer)tab.iterator().next().getValue("TEST_SCHEME_ID");
	    return schemeIdTest;
	}
	
	public static void changeSchemeState(Integer schemeId){
		String updateRecurTestScheme = "update RECURRENCE_TEST_SCHEME rts set rts.IS_USED=2 where rts.APPLICATION_NO="+schemeId;
		KSQL.executeUpdate(updateRecurTestScheme, null,"/metrodetection/system_code/data", null);
		
	}
	
	public static String readSchemeUrl(){
		String path = "";
		path= PropertiesAction.PropertiesA("schemeUrl");
		return path;
	}
}