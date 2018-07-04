import java.math.*;
import java.sql.*;
import java.util.*;

import org.dom4j.*;
import com.justep.system.data.*;

public class System_resource {


	public static Table MyQuerryName(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);	
	}

	public static Table NewchangeQuery(String concept,String idColumn,String select,String from,String aggregate,String condition,List range,String filter,Integer limit,Integer offset,Boolean distinct,String columns,String orderBy,String aggregateColumns,Map variables,String fnModel,String dataModel,String status,String org){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);	
	}

	public static Table changeProcessQuery(String concept,String idColumn,String select,String from,String aggregate,String condition,List range,String filter,Integer limit,Integer offset,Boolean distinct,String columns,String orderBy,String aggregateColumns,Map variables,String fnModel,String dataModel,String status,String org){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);	
	}

	public static Table newchange(String sflowid){
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
				"FROM SA_Task SA_Task WHERE SA_Task.sTypeName = '检测计划变更审核' " +
				"AND SA_Task.sParentid is not null "+
				" and (SA_Task.sKindID in ('tkTask', 'tkExecutor')) "+
				" and (SA_Task.sActualFinishTime is not null) "+
				" and (SA_Task.sExecutorPersonID is not null) ";
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
			"FROM SA_Task SA_Task WHERE SA_Task.sTypeName = '检测计划变更审核' " +
			"AND SA_Task.sParentid is not null "+
			" and (SA_Task.sKindID in ('tkTask', 'tkExecutor')) "+
			" and (SA_Task.sActualFinishTime is not null) "+
			" and (SA_Task.sExecutorPersonID is not null) " +
			"AND sflowid='" + sflowid+"'";
		Map map = new HashMap();
		map.put("SYBASE", sql);
		tb = SQL.select(map, null, "/system/data");
		}
		return tb;
	}
}