import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;


public class OccupyAction {
	
	/**
	 * 保存房间和工具占用信息
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void occupyOperate(Table tabParam,Integer projectId) {
		Table tb = (Table) ModelUtils.getRequestContext().getActionContext().getParameter("tabParam");
		Integer pId = (Integer) ModelUtils.getRequestContext().getActionContext().getParameter("projectId");
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			Integer taskId = (Integer) r.getValue("tASKID");
			String areaId = (String) r.getValue("rOOMAREA");
			Integer toolId = (Integer) r.getValue("tOOLNO1");
			Integer sdiId = (Integer) r.getValue("sAMPLEDEVICENO");
			System.out.println("任务："+taskId+"区域："+areaId+"工具："+toolId+"样品序号："+sdiId);
			Map map = new HashMap();
			map.put("taskId",taskId );
			map.put("areaId",areaId );
			map.put("toolId",toolId );
			map.put("sdiId",sdiId );
			map.put("projectId",pId );
			String queryRoom = "select rai.rOOMID,rai.rOOMAREA from ROOM_APPLY_INFO rai where rai=:areaId";
			String queryDate = "select tpti.pLANSTARTDATE,tpti.pLANENDINGDATE from TEST_PROJECT_TASK_INFO tpti where tpti.tASKID=:taskId";
			String queryDevice = "select sdi.dEVICEID from SAMPLE_DEVICE_INFO sdi where sdi=:sdiId";
			Table roomTable = KSQL.select(queryRoom, map, "/metrodetection/system_code/data", null);
			Table dateTable = KSQL.select(queryDate, map, "/metrodetection/system_code/data", null);
			Table deviceTable = KSQL.select(queryDevice, map, "/metrodetection/system_code/data", null);
			Integer roomId = null;
			String roomArea = null;
			if(roomTable != null && roomTable.size() > 0) {
				roomId = roomTable.iterator().next().getInteger("rOOMID");
				roomArea = roomTable.iterator().next().getString("rOOMAREA");
			}
			Timestamp sdt = dateTable.iterator().next().getDateTime("pLANSTARTDATE");
			Timestamp edt = dateTable.iterator().next().getDateTime("pLANENDINGDATE");
			String deviceId = null;
			if(deviceTable != null && deviceTable.size() > 0) {
				deviceId = deviceTable.iterator().next().getString("dEVICEID");
			}
			map.put("roomId", roomId);
			map.put("roomArea", roomArea);
			map.put("sDate", sdt);
			map.put("eDate", edt);
			map.put("deviceId", deviceId);
/**********************************************房间占用信息*************************************************************************************/			
			//验证该任务是否分配了房间
			String valiRO = "select roi.* from ROOM_OCCUPY_INFO roi where roi.tESTTASKID=:taskId";
			//保存房间占用信息
			/*String insertRO = "insert into ROOM_OCCUPY_INFO roi (roi,roi.rOOMID,roi.rOOMAREA,roi.tESTTASKID,roi.oCCUPYSTARTDATETIME,roi.oCCUPYENDDATETIME,roi.mEMO) values " +
					"(:guid()," +
					"(select rai.rOOMID from ROOM_APPLY_INFO rai where rai=:areaId)," +
					"(select rai.rOOMAREA from ROOM_APPLY_INFO rai where rai=:areaId)," +
					":taskId," +
					"(select tpti.pLANSTARTDATE from TEST_PROJECT_TASK_INFO tpti where tpti.tASKID=:taskId)," +
					"(select tpti.pLANENDINGDATE from TEST_PROJECT_TASK_INFO tpti where tpti.tASKID=:taskId),"+
					"'')";*/
			String insertRO = "insert into ROOM_OCCUPY_INFO roi (roi,roi.rOOMID,roi.rOOMAREA,roi.tESTTASKID,roi.oCCUPYSTARTDATETIME,roi.oCCUPYENDDATETIME,roi.mEMO,roi.version) values " +
			"(:guid()," +
			":roomId," +
			":roomArea," +
			":taskId," +
			":sDate," +
			":eDate,"+
			"'',1)";
			//更新房间占用
			String updateRO = "update ROOM_OCCUPY_INFO roi set " +
					"roi.rOOMID=(select rai.rOOMID from ROOM_APPLY_INFO rai where rai=:areaId)," +
					"roi.rOOMAREA=(select rai.rOOMAREA from ROOM_APPLY_INFO rai where rai=:areaId) "+
					" where roi.tESTTASKID=:taskId";
			//删除房间占用
			String deleteRO = "delete from ROOM_OCCUPY_INFO roi where roi.tESTTASKID=:taskId";
			
			Table valiR = KSQL.select(valiRO, map, "/metrodetection/system_code/data", null);
			if(valiR != null && valiR.size() > 0) {//执行修改操作
				if(StringUtils.isNotBlank(areaId)) {
					KSQL.executeUpdate(updateRO, map, "/metrodetection/system_code/data", null);
				}  else {
					//删除
					KSQL.executeUpdate(deleteRO, map, "/metrodetection/system_code/data", null);
				}
			} else {//执行保存操作
				//区域不为空时：
				if(StringUtils.isNotBlank(areaId)) {
					KSQL.executeUpdate(insertRO, map, "/metrodetection/system_code/data", null);
				}
			}
			
/***********************************************工具占用信息**************************************************************************/
			//验证该任务是否分配了工具
			String valiTO = "select toi.* from TOOL_OCCUPY_INFO toi where toi.tESTTASKID=:taskId";
			//保存工具占用信息
			System.out.println("----->"+sdt+"---->"+edt);
			String insertTO = "insert into TOOL_OCCUPY_INFO toi (toi,toi.tOOLNO1,toi.tESTTASKID,toi.oCCUPYSTARTDATETIME,toi.oCCUPYENDDATETIME,toi.mEMO,toi.version) values " +
					"(:guid()," +
					":toolId,"+
					":taskId," +
					":sDate," +
					":eDate,"+
					"'',1)";
			//更新工具占用信息
			String updateTO = "update TOOL_OCCUPY_INFO toi set " +
					"toi.tOOL_NO=:toolId " +
					" where toi.tESTTASKID=:taskId";
			//删除工具占用
			String deleteTO = "delete from TOOL_OCCUPY_INFO toi where toi.tESTTASKID=:taskId";
			
			Table valiT = KSQL.select(valiTO, map, "/metrodetection/system_code/data", null);
			if(valiT != null && valiT.size() > 0) {//执行修改操作
				if(toolId != null) {
					KSQL.executeUpdate(updateTO, map, "/metrodetection/system_code/data", null);
				} else {
					KSQL.executeUpdate(deleteTO, map, "/metrodetection/system_code/data", null);
				}
			} else {//执行保存操作
				if(toolId != null) {
					KSQL.executeUpdate(insertTO, map, "/metrodetection/system_code/data", null);
				}
			}
			
/************************************************受测样品占用信息*************************************************************************/	
			//验证该任务是否分配了受测样品
			String valiSO = "select sdoi.* from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.tESTTASKID=:taskId";
			//保存受测样品占用信息
			String insertSO = "insert into SAMPLE_DEVICE_OCCUPY_INFO sdoi (sdoi,sdoi.sAMPLEDEVICENO,sdoi.pROJECTID,sdoi.dEVICEID,sdoi.tESTTASKID,sdoi.oCCUPYSTARTDATETIME,sdoi.oCCUPYENDDATETIME,sdoi.mEMO) values " +
					"(:guid()," +
					":sdiId," +
					":projectId," +
					":deviceId," +
					":taskId," +
					":sDate," +
					":eDate," +
					"'')";
			//修改受测样品占用信息
			String updateSO = "update SAMPLE_DEVICE_OCCUPY_INFO sdoi set " +
					"sdoi.sAMPLEDEVICENO=:sdiId," +
					"sdoi.dEVICEID=(select sdi.dEVICEID from SAMPLE_DEVICE_INFO sdi where sdi=:sdiId)" +
					" where sdoi.tESTTASKID=:taskId";
			//删除受测样品占用信息
			String deleteSO = "delete from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.tESTTASKID=:taskId";
			
			Table valiS = KSQL.select(valiSO, map, "/metrodetection/system_code/data", null);
			if(valiS != null && valiS.size() > 0) {//执行修改操作
				if(sdiId != null) {
					KSQL.executeUpdate(updateSO, map, "/metrodetection/system_code/data", null);
				} else {
					KSQL.executeUpdate(deleteSO, map, "/metrodetection/system_code/data", null);
				}
			} else {//执行保存操作
				if(sdiId != null) {
					KSQL.executeUpdate(insertSO, map, "/metrodetection/system_code/data", null);
				}
			}
		}
	}

}
