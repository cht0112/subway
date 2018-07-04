import java.math.BigDecimal;
import java.math.BigInteger;

import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class DetectionToolInfoProcess {

	public static void detectionToolInfoProcessAfterSaveDETECTION_TOOL_INFOAction() {
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		Table tb = (Table)conn.getParameter("table");
		Row dataRow = (Row)tb.iterator().next();
		String cName = (String)dataRow.getValue("tOOLCNAME");
		String eName = (String)dataRow.getValue("tOOLENAME");
		int toolType = (Integer)dataRow.getValue("tOOLTYPEID");
		
//		System.out.println(cName);
//		System.out.println(eName);
//		System.out.println(toolType);

		//查询TOOL_TYPE_CODE工具名称中的max(id)实现自增长
		String ksqlSelectMaxId = "select max(TOOL_TYPE_CODE) from TOOL_TYPE_CODE TOOL_TYPE_CODE";
		Table tabId = KSQL.select(ksqlSelectMaxId, null, "/metrodetection/system_code/data", null);
		Row row = (Row)tabId.iterator().next();
		Integer maxToolID = (Integer)row.getValue(0);
		int id = maxToolID.intValue()+1;
//		System.out.println(id);
		//将工具信息插入TOOL_TYPE_CODE
		String ksqlInsertToolType = "insert into TOOL_TYPE_CODE o(o,o.tOOLTYPECNAME,o.tOOLTYPEENAME) values("+id+",'"+cName+"','"+eName+"')";
		KSQL.executeUpdate(ksqlInsertToolType, null, "/metrodetection/system_code/data", null);
		//查询工具映射表，取出max(id)自增
		String ksqlSelectMaxRelationshipID = "select max(TOOL_RELATIONSHIP) from TOOL_RELATIONSHIP TOOL_RELATIONSHIP";
		Table tabId1 = KSQL.select(ksqlSelectMaxRelationshipID, null, "/metrodetection/system_code/data", null);
		Row row1 = (Row)tabId1.iterator().next();
		Integer maxRelationshipID = (Integer)row1.getValue(0);
		int nowId = maxRelationshipID.intValue() +1;
//		System.out.println(nowId);
		//将工具信息插入映射表中
		String ksqlInsertToolRelationShip = "insert into TOOL_RELATIONSHIP o(o,o.tOOLCATEGORY,o.tOOLSORT,o.tOOLTYPE)values("+nowId+","+1+","+toolType+","+id+")";
		KSQL.executeUpdate(ksqlInsertToolRelationShip, null, "/metrodetection/system_code/data", null);
		//将工具信息插入备品备件出入库信息
//		String kslInsertSampleDeviceMovingRecord = "insert into SAMPLE_DEVICE_MOVING_RECORD o(o,)"
//		KSQL.executeUpdate(ksqlInsertSsmpleDeviceMovingRecord,null,"/metrodetection/system_code/data"，null);
	}
}