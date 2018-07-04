import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.justep.system.data.BizData;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.process.ProcessUtils;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.text.DateFormat;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;
import com.justep.util.Utils;


public class Detection_Process_Related {


	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table test(Integer ot){
		Table tb = null;
		Map map = new HashMap();
		map.put("ot", ot);
		String ksql = "select DETECTION_ROOM_INFO.rOOMTYPE as rOOMTYPE," +
				"DETECTION_ROOM_INFO.rOOMCNAME as rOOMCNAME," +
				"DETECTION_ROOM_INFO.rOOMENAME as rOOMENAME," +
				"ROOM_APPLY_INFO.rOOMAREA as rOOMAREA," +
				"ROOM_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT," +
				"ROOM_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE," +
				"ROOM_APPLY_INFO.aPPLYFORRANGE as aPPLYFORRANGE," +
				"ROOM_OCCUPY_INFO.tESTTASKID as tESTTASKID," +
				"ROOM_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME," +
				"ROOM_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME," +
				"DETECTION_ROOM_INFO "+
				"from DETECTION_ROOM_INFO DETECTION_ROOM_INFO " +
				"optional  join ROOM_APPLY_INFO ROOM_APPLY_INFO on DETECTION_ROOM_INFO = ROOM_APPLY_INFO.rOOMID "+
				"optional  join ROOM_OCCUPY_INFO ROOM_OCCUPY_INFO on ROOM_APPLY_INFO.rOOMID = ROOM_OCCUPY_INFO.rOOMID "+
				"where ROOM_APPLY_INFO.aPPLYFOROBJECT =:ot";
		tb = KSQL.select(ksql, map, "/metrodetection/system_resource/data", null);
		return tb;
	}
	
	public static Table queryTestTaskExeProblem(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);

	}

	public static Table myQueryManufacture(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);

	}

	public static Table queryTestProJectTaskInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryAFCManufacturer(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryAFCTestProject(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static void saveTaskProjectInfo(Map paramMap){
		Integer pROJECTID = (Integer)paramMap.get("pROJECTID");
		//Integer tASKTYPE = (Integer)paramMap.get("tASKTYPE");
		String pLANOPERATORID = (String)paramMap.get("pLANOPERATORID");
		Date pLANSTARTDATE = (Date)paramMap.get("pLANSTARTDATE");
		Date pLANENDINGDATE = (Date)paramMap.get("pLANENDINGDATE");
		String tESTTASKAREA = (String)paramMap.get("tESTTASKAREA");
		String tESTTASKITERATIVE = (String)paramMap.get("tESTTASKITERATIVE");
		Integer tESTTASKREASON = (Integer)paramMap.get("tESTTASKREASON");
		String aCTUALOPERATORID = (String)paramMap.get("aCTUALOPERATORID");
		Date aCTUALSTARTDATE = (Date)paramMap.get("aCTUALSTARTDATE");
		Date aCTUALENDINGDATE = (Date)paramMap.get("aCTUALENDINGDATE");
		//Integer tASKEXECUTE = (Integer)paramMap.get("tASKEXECUTE");
		//Integer tASKCHECK = (Integer)paramMap.get("tASKCHECK");
		System.out.println("***************"+pLANOPERATORID);
		System.out.println("***************"+tESTTASKITERATIVE);
		
		
		Map map = new HashMap();
		map.put("pROJECTID",pROJECTID);
		map.put("pLANOPERATORID", pLANOPERATORID);
		map.put("pLANSTARTDATE", pLANSTARTDATE);
		map.put("pLANENDINGDATE", pLANENDINGDATE);
		map.put("tESTTASKAREA", tESTTASKAREA);
		map.put("tESTTASKITERATIVE", tESTTASKITERATIVE);
		map.put("tESTTASKREASON", tESTTASKREASON);
		map.put("aCTUALOPERATORID", aCTUALOPERATORID);
		map.put("aCTUALSTARTDATE", aCTUALSTARTDATE);
		map.put("aCTUALENDINGDATE", aCTUALENDINGDATE);
		map.put("tASKTYPE", 1);
		map.put("tASKEXECUTE", 0);
		map.put("tASKCHECK", 0);
		
		/**String testNo = ProcessUtils.getProcessData1();
		System.out.println("=================="+testNo);
		Map p1 = new HashMap();
		p1.put("testNo", testNo);
		String ksql = "select TEST_PROJECT_TASK_INFO.* from TEST_PROJECT_INFO TEST_PROJECT_INFO where TEST_PROJECT_INFO.aPPLICATIONNO= :testNo";
		Table tb = KSQL.select(ksql,p1, "/metrodetection/detection_Process_Related/data", null);
		Row r = (Row)tb.iterator().next();
		Integer pId = (Integer)r.getValue("pROJECTID");
		map.put("pROJECTID", pId);*/
		
		String insertKsql = "insert into TEST_PROJECT_TASK_INFO pti (pti,pti.tASKID,pti.pROJECTID,pti.pLANOPERATORID,pti.pLANSTARTDATE," +
				"pti.pLANENDINGDATE,pti.tESTTASKAREA,pti.tESTTASKITERATIVE,pti.tESTTASKREASON,pti.aCTUALOPERATORID," +
				"pti.aCTUALSTARTDATE,pti.aCTUALENDINGDATE,pti.tASKTYPE,pti.tASKEXECUTE,pti.tASKCHECK) values (" +
				":guid(),:toDecimal(toString(nextSeq('1000000000'))),:pROJECTID,:pLANOPERATORID,:pLANSTARTDATE," +
				":pLANENDINGDATE,:tESTTASKAREA,:tESTTASKITERATIVE,:tESTTASKREASON,:aCTUALOPERATORID,:aCTUALSTARTDATE,:aCTUALENDINGDATE," +
				"1,0,0)";
		KSQL.executeUpdate(insertKsql, map, "/metrodetection/detection_Process_Related/data", null);
		
		//System.out.println(pROJECTID+tASKTYPE+pLANOPERATORID);
	}

	public static Table myQueryProjectInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table queryTestApplication(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryRoomScheduleLeftName(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Table queryRoomOccupy(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Table querytoolOccupy(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
}