import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class DetectionManagerProcess {
	
	/**
	 **立项之后 根据申请序号找到合同  ,根据合同编号修改受测样品信息,将其项目id设为本次所立项目
	**/
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void detectionManagerProcessAfterSaveTEST_PROJECT_INFOAction() {
		Table tb = (Table)ModelUtils.getRequestContext().getActionContext().getParameter("table");
		Integer applicationNo = (Integer)tb.iterator().next().getValue("aPPLICATIONNO");
		Integer projectId = (Integer)tb.iterator().next().getValue("TEST_PROJECT_INFO");
		System.out.println("申请序号："+applicationNo+"项目id："+projectId);
		Map map = new HashMap();
		map.put("applicationNo", Integer.valueOf(applicationNo.toString()));
		//根据申请序号更改受测样品占用信息里的项目id
		String updateq = "update SAMPLE_DEVICE_INFO sdi set sdi.pROJECTID="+ projectId +
				"where sdi.cONTRACTCODE=( " +
				"select tci from TEST_CONTRACT_INFO tci where tci.aPPLICATIONNO=:applicationNo)";
		KSQL.executeUpdate(updateq, map,"/metrodetection/system_code/data", null);
		//根据申请序号更改项目成员里的项目id（默认为0）
		String updateP = "update TEST_PROJECT_MEMBER_INFO tpmi set tpmi.pROJECTID="+projectId+
				" where tpmi.aPPLICATION_NO=:applicationNo";
		KSQL.executeUpdate(updateP, map, "/metrodetection/system_code/data", null);
	}


	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public static void bizActivity6AfterSaveSAMPLE_DEVICE_INFOAction() {
		String kSqlSelect = "select hbi from HR_BASE_INFO hbi where hbi.Scode = :currentPersonCode()";
		Table table = (Table)KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
		String userID="";
		if(table.size()>0){
			userID = table.iterator().next().getValue("hbi").toString();
		}
		
//		kSqlSelect = "select max(sdmr) as maxsdmr from SAMPLE_DEVICE_MOVING_RECORD sdmr";
//		Table maxf = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
//		Integer mr = 0;
//		if(maxf.iterator().next().getValue("maxsdmr")!=null){
//			mr = Integer.parseInt(maxf.iterator().next().getValue("maxsdmr").toString());
//		}
		
		Table tb = (Table)ModelUtils.getRequestContext().getActionContext().getParameter("table");
		Iterator<Row> rs = tb.iterator(); 
		Row row = null;
		int i=0;
		while(rs.hasNext()){
			row = rs.next();
			Integer sampleID = (Integer)tb.iterator().next().getValue("SAMPLE_DEVICE_INFO");
			
			String deviceID = tb.iterator().next().getValue("dEVICEID").toString();
			
			String aPPLICATIONNO = tb.iterator().next().getValue("aPPLICATIONNO").toString();
			
			kSqlSelect = "select tri from TEST_PROJECT_INFO tri where tri.aPPLICATIONNO = "+aPPLICATIONNO;
			table = (Table)KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			Integer porjectID = 0;
			if(table.size()>0){
				porjectID = (Integer)table.iterator().next().getValue("tri");
			}
			Map map = new HashMap();
			map.put("sampleID", sampleID);
			map.put("porjectID", porjectID);
			
			kSqlSelect = "select sdmr from SAMPLE_DEVICE_MOVING_RECORD sdmr where sdmr.sAMPLEDEVICENO = :sampleID and sdmr.pROJECTID = :porjectID";
			table = (Table)KSQL.select(kSqlSelect, map, "/metrodetection/system_code/data", null);
			
			if(table.size()>0){
				map.put("sdmr", table.iterator().next().getValue("sdmr").toString());
				String kSqlUpdate = "update SAMPLE_DEVICE_MOVING_RECORD sdmr set sdmr.oPERATEDATETIME=:currentDateTime() where sdmr=:sdmr";
				KSQL.executeUpdate(kSqlUpdate, map, "/metrodetection/system_code/data", null);
				map = new HashMap();
				map.put("sampleID", sampleID);
				kSqlUpdate = "update SAMPLE_DEVICE_INFO sdi set sdi.rECIVESTATE=1 where sdi=:sampleID";
				KSQL.executeUpdate(kSqlUpdate, map, "/metrodetection/system_code/data", null);
			}else{
//				i++;
//				mr = mr+i;
				
				map = new HashMap();
//				map.put("fID", mr);
				map.put("sampleID", sampleID);
				map.put("oPERATETYPE", 3);
				map.put("oPERATORID", userID);
				map.put("porjectID", porjectID);
				map.put("deviceID", deviceID);
				map.put("oPERATERESULTSTATE", 0);
				String kSqlInsert = "insert into SAMPLE_DEVICE_MOVING_RECORD sdmr "+
									"(sdmr, sdmr.sAMPLEDEVICENO, sdmr.oPERATEDATETIME, sdmr.oPERATETYPE, sdmr.oPERATORID, sdmr.pROJECTID, sdmr.dEVICEID, sdmr.oPERATERESULTSTATE) values "+
									"(:guid(), :sampleID, :currentDateTime(), :oPERATETYPE, :oPERATORID, :porjectID, :deviceID, :oPERATERESULTSTATE)";
				
				KSQL.executeUpdate(kSqlInsert, map, "/metrodetection/system_code/data", null);
				
				map = new HashMap();
				map.put("sampleID", sampleID);
				String kSqlUpdate = "update SAMPLE_DEVICE_INFO sdi set sdi.rECIVESTATE=1 where sdi=:sampleID";
				KSQL.executeUpdate(kSqlUpdate, map, "/metrodetection/system_code/data", null);
			}
		}
	}

	public static void detectionManagerProcessBeforeSaveSAMPLE_DEVICE_HARDWARE_INFOAction() {
		//String deviceID = tb.iterator().next().getValue("mODELNAME").toString();
	}

	public static void detectionManagerProcessAfterNewSchemeAction() {
		Integer schemeId = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("schemeId");
		String detectionSelect = "select dboi.* from DECTION_BASED_ON_INFO dboi";
		Table tabDetection = KSQL.select(detectionSelect, null, "/metrodetection/system_code/data", null);
		Integer testBaseId = (Integer)tabDetection.iterator().next().getValue("dboi");
		String queryRecurTestScheme = "select rts.*  from RECURRENCE_TEST_SCHEME rts where rts.APPLICATION_NO="+schemeId+" and rts.IS_USED=1";
	    Table tab= KSQL.select(queryRecurTestScheme, null, "/metrodetection/system_code/data", null);
	    Integer schemeIdTest = (Integer)tab.iterator().next().getValue("TEST_SCHEME_ID");
		
		String insertSchemeKsql = "insert into TEST_SCHEME_BASE_INFO tcbi(tcbi,tcbi.tESTSCHEMENAME,tcbi.tESTSCHEMEDESC,tcbi.bUSINESSID," +
				"tcbi.dECTIONBASEDONID,tcbi.mAKEDATETIME,tcbi.vALIDSTATE) " +
				"values("+schemeIdTest+",'回归方案','用于回归计划',1,"+testBaseId+",:currentDateTime(),1)";
		KSQL.executeUpdate(insertSchemeKsql, null, "/metrodetection/system_code/data", null);
	}
}