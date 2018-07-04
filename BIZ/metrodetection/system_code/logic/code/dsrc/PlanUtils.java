
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.mail.search.DateTerm;

import mondrian.rolap.BitKey.Big;

import org.apache.commons.lang.StringUtils;
import org.exolab.castor.types.DateTime;

import com.justep.design.model.ksql.KSQLParser;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;


public class PlanUtils {
	/**
	 * 根据申请序号查询项目id
	 * @param applicationNo
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Integer getProjectId(String applicationNo) {
		Map map = new HashMap();
		map.put("no", Integer.valueOf(applicationNo));
		String queryProject = "select tpi from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO="+Integer.valueOf(applicationNo);
		Table tb = (Table)KSQL.select(queryProject, null, "/metrodetection/system_code/data", null);
		Integer projectId = (Integer)tb.iterator().next().getValue("tpi");
		return  projectId;
	}
	
	/**
	 * 根据项目id 获取项目名称   产品名称    委托单位  开发单位  检测对象类别    检测对象  业务类型  业务阶段
	 * @param applicationNo
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Map getProjectInfoByProjectId(String projectId) {
		Map resMap = new HashMap();
		Map map = new HashMap();
		map.put("projectId", Integer.valueOf(projectId));
		//取项目名称 ,产品名称,委托单位,开发单位,检测对象类别,检测对象的查询部分
		String queryInfo = "select tpi.pROJECTNAME,tai.pRODUCTNAME,wtdw.mANUFACTUREIDCNAME as wt,kfdw.mANUFACTUREIDCNAME as kf,dot.dETECTIONOBJECTCNAME,dtc.dEVICETYPECNAME " +
				"from TEST_PROJECT_INFO tpi  optional join " +
				"TEST_APPLICATION_INFO tai on tpi.aPPLICATIONNO=tai optional join " +
				"DETECTION_OBJECT_TYPE dot on dot=tai.dETECTIONOBJECTTYPE optional join " +
				"DEVICE_TYPE_CODE dtc on dtc.dEVICETYPE=tai.dEVICETYPE and dtc.dETECTIONOBJECTTYPE=tai.dETECTIONOBJECTTYPE optional join " +
				"AFC_MANUFACTURER_INFO wtdw on tai.aSSIGNEDMANUFACTUREID=wtdw optional join " +
				"AFC_MANUFACTURER_INFO kfdw on tai.pRODUCTMANUFACTUREID=kfdw where tpi=:projectId";
		Table tb = KSQL.select(queryInfo, map, "/metrodetection/system_code/data", null);
		String projectName = (String) tb.iterator().next().getValue("pROJECTNAME");
		String productName = (String) tb.iterator().next().getValue("pRODUCTNAME");
		String kaifa = (String) tb.iterator().next().getValue("kf");
		String weiduo = (String) tb.iterator().next().getValue("wt");
		String detectionObjType = (String) tb.iterator().next().getValue("dETECTIONOBJECTCNAME");
		String detectionObj = (String) tb.iterator().next().getValue("dEVICETYPECNAME");
		
		//业务类型 和业务阶段的查询部分
		String queryBussinessInfo = "select btc.bUSINESSIDCNAME,bsc.bUSINESSSTAGECNAME from TEST_PROJECT_INFO tpi optional join " +
				"TEST_SCHEME_BASE_INFO tsbi on tpi.tESTSCHEMEID=tsbi optional join " +
				"TEST_SCHEME_CASE_INFO tsci on tsci.tESTSCHEMEID=tsbi optional join " +
				"BUSINESS_TYPE_CODE btc on tsci.bUSINESSID=btc optional join " +
				"BUSINESS_STAGE_CODE bsc on tsci.bUSINESSSTAGE=bsc.bUSINESSSTAGE and tsci.bUSINESSID=bsc.bUSINESSID " +
				"where tpi=:projectId";
		Table bTable = KSQL.select(queryBussinessInfo, map, "/metrodetection/system_code/data", null);
		String bussinessType = "";
		String bussinessStage = "";
		Iterator<Row> it = bTable.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			bussinessType = (String) r.getValue("bUSINESSIDCNAME");
			bussinessStage = (String)r.getValue("bUSINESSSTAGECNAME");
			break;
		}
		
		resMap.put("projectName", projectName);
		resMap.put("productName", productName);
		resMap.put("kaifa", kaifa);
		resMap.put("weiduo", weiduo);
		resMap.put("detectionObjType", detectionObjType);
		resMap.put("detectionObj", detectionObj);
		resMap.put("bussinessType", bussinessType);
		resMap.put("bussinessStage", bussinessStage);
		
		System.out.println(projectName+"---"+productName+"---"+kaifa+"---"+weiduo+"---"+detectionObjType+"---"+detectionObj+"---"+bussinessType+"---"+bussinessStage);
		
		return resMap;
	}
	
	/**
	 * 找到所有安排任务的人员以及总的开始和结束的月份
	 * @param table
	 * @return
	 */
	public static Map<String,String> getAllTaskHr(Table table) {
		Map<String,String> pMap = new HashMap<String,String>();
		//开始月份
		String startMon = "0";
		//结束月份
		String endMon = "0";
		Iterator<Row> it = table.iterator();
		//先找到所有安排任务的人员
		while(it.hasNext()) {
			Row r = (Row)it.next();
			String id = (String)r.getValue("tv");
			if(StringUtils.isNotBlank(id) && "root".equals(id)) {
				String stime = (String) r.getValue("sTARTTIME");
				String etime = (String) r.getValue("eNDTIME");
				if(StringUtils.isNotBlank(stime)) {
					//总的开始月份
					startMon = stime.split("-")[1];
					//总的结束月份
					endMon = etime.split("-")[1];
				}
			}
			String personId = (String) r.getValue("oPERATORNAME");
			if(StringUtils.isNotBlank(personId)) {
				if(!pMap.containsKey(personId)) {
					pMap.put(personId, personId);
				} 
			}
		}
		pMap.put("startMon", startMon);
		pMap.put("endMon", endMon);
		return pMap;
	}
	
	/**
	 * 制定计划时的项目测试任务中的区域
	 * @param caseId
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static String getArea(String caseId) {
		Map paramMap = new HashMap();
		paramMap.put("caseId", caseId);
		String ksql = "select distinct dtc.dEVICETYPECNAME,bsc.bUSINESSSTAGECNAME,btc.bUSINESSIDCNAME " +
				"from TEST_SCHEME_CASE_INFO tsci optional join " +
				"BUSINESS_STAGE_CODE bsc on tsci.bUSINESSSTAGE=bsc optional join " +
				"BUSINESS_TYPE_CODE btc on tsci.bUSINESSID=btc optional join " +
				"DEVICE_TYPE_CODE dtc on tsci.aPPLYFORDEVICETYPE=dtc where tsci.tESTCASEID= :caseId";
		Table tb = KSQL.select(ksql, paramMap, "/metrodetection/system_code/data", null);
		
		StringBuffer sbf = new StringBuffer();
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			String name = (String) r.getValue("dEVICETYPECNAME");
			String type = (String) r.getValue("bUSINESSIDCNAME");
			String stage = (String) r.getValue("bUSINESSSTAGECNAME");
			sbf.append(name).append(type).append(stage);
		}
		return sbf.toString();
	}
	
	/**
	 * 保存项目测试任务
	 * @param pROJECTID 			项目ID
	 * @param tASKTYPE 				任务类型
	 * @param tASKID				任务ID
	 * @param pLANOPERATORID		计划执行人
	 * @param pLANSTARTDATE			计划开始日期
	 * @param pLANENDINGDATE		计划结束日期
	 * @param tESTTASKAREA			区域
	 * @param tESTTASKITERATIVE		迭代
	 * @param tESTTASKREASON		任务生成原因
	 * @param aCTUALOPERATORID		任务执行人
	 * @param aCTUALSTARTDATE		任务开始日期
	 * @param aCTUALENDINGDATE		任务结束日期
	 * @param tASKEXECUTE			任务执行状态
	 * @param tASKCHECK				任务执行结果
	 * @param tESTTASKFILE			测试任务下发XML文件
	 * @param tESTTASKRESULTFILE	测试任务结果XML文件
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveTestProjectTaskInfo(Integer pROJECTID,Integer tASKTYPE,Integer tASKID,String pLANOPERATORID,
			Date pLANSTARTDATE,Date pLANENDINGDATE, String tESTTASKAREA,String tESTTASKITERATIVE,Integer tESTTASKREASON,
			String aCTUALOPERATORID,Date aCTUALSTARTDATE,Date aCTUALENDINGDATE,Integer tASKEXECUTE,Integer tASKCHECK,
			String tESTTASKFILE,String tESTTASKRESULTFILE) {
		//构造参数
		Map map = new HashMap();
		map.put("pROJECTID", pROJECTID);
		map.put("tASKTYPE", tASKTYPE);
		map.put("tASKID", tASKID);
		map.put("pLANOPERATORID", pLANOPERATORID);
		map.put("pLANSTARTDATE", pLANSTARTDATE);
		map.put("pLANENDINGDATE", pLANENDINGDATE);
		map.put("tESTTASKAREA", tESTTASKAREA);
		map.put("tESTTASKITERATIVE", tESTTASKITERATIVE);
		map.put("tESTTASKREASON", tESTTASKREASON);
		map.put("aCTUALOPERATORID", aCTUALOPERATORID);
		map.put("aCTUALSTARTDATE", aCTUALSTARTDATE);
		map.put("aCTUALENDINGDATE", aCTUALENDINGDATE);
		map.put("tASKEXECUTE", tASKEXECUTE);
		map.put("tASKCHECK", tASKCHECK);
		map.put("tESTTASKFILE", tESTTASKFILE);
		map.put("tESTTASKRESULTFILE", tESTTASKRESULTFILE);
		
		String ksql = "insert into TEST_PROJECT_TASK_INFO tpi (tpi,tpi.pROJECTID,tpi.tASKTYPE,tpi.tASKID,tpi.pLANOPERATORID," +
				" tpi.pLANSTARTDATE,tpi.pLANENDINGDATE,tpi.tESTTASKAREA,tpi.tESTTASKITERATIVE,tpi.tESTTASKREASON,tpi.aCTUALOPERATORID," +
				" tpi.aCTUALSTARTDATE,tpi.aCTUALENDINGDATE,tpi.tASKEXECUTE,tpi.tASKCHECK,tpi.tESTTASKFILE,tpi.tESTTASKRESULTFILE)" +
				" values (:guid(),:pROJECTID,:tASKTYPE,:tASKID,:pLANOPERATORID,:pLANSTARTDATE,:pLANENDINGDATE,:tESTTASKAREA,:tESTTASKITERATIVE," +
				" :tESTTASKREASON,'00000000',:toDateTime('2000-01-01 00:00:00'),:toDateTime('2000-01-01 00:00:00'),:tASKEXECUTE,:tASKCHECK,:tESTTASKFILE,:tESTTASKRESULTFILE)";
		
		String updateTask = "update TEST_PROJECT_TASK_INFO tpi set  tpi.pLANSTARTDATE=:pLANSTARTDATE,tpi.pLANENDINGDATE=:pLANENDINGDATE," +
				"tpi.aCTUALOPERATORID='00000000'," +
				"tpi.aCTUALSTARTDATE=:toDateTime('2000-01-01 00:00:00'),tpi.aCTUALENDINGDATE=:toDateTime('2000-01-01 00:00:00') " +
				"where tpi.tASKID=:tASKID";
		
		String valiTask = "select tpi.* from TEST_PROJECT_TASK_INFO tpi where tpi.tASKID=:tASKID";
		Table vt = KSQL.select(valiTask, map, "/metrodetection/system_code/data", null);
		if(vt != null && vt.size() > 0) {  //执行修改
			KSQL.executeUpdate(updateTask, map, "/metrodetection/system_code/data", null);
		} else {  //执行保存
			KSQL.executeUpdate(ksql, map, "/metrodetection/system_code/data", null);
		}
	}
	
	/**
	 * 根据项目id删除所分配的任务
	 * @param projectId
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void deleteProjectTask(String projectId) {
		Map map = new HashMap();
		map.put("projectId", projectId);
		String delete = "delete from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId";
		KSQL.executeUpdate(delete, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 根据项目id得到项目测试任务信息
	 * @param projectId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getTestProjectTaskInfoByProId(Integer projectId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("projectId", projectId);
		String ksql = "select tpti.* from TEST_PROJECT_TASK_INFO tpti where tpti.pROJECTID=:projectId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据项目id和人员id得到项目测试任务信息
	 * @param projectId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getTestProjectTaskInfoByProIdAndPId(Integer projectId,String pId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("projectId", projectId);
		map.put("pId", pId);
		String ksql = "select tpti.* from TEST_PROJECT_TASK_INFO tpti where tpti.pROJECTID=:projectId and tpti.aCTUALOPERATORID=:pId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据项目id和用例id和人员id得到项目测试任务信息
	 * @param projectId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getTestProjectTaskInfoByProIdAndCaseId(Integer projectId,String caseId,String pId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("projectId", projectId);
		map.put("caseId", caseId);
		map.put("pId", pId);
		String ksql = "select tpti.* from TEST_PROJECT_TASK_INFO tpti optional join " +
				"TEST_TASK_CASE_INFO ttci on ttci.tASKID=tpti.tASKID " +
				"where tpti.pROJECTID=:projectId " +
				"and ttci.tESTCASEID=:caseId and tpti.aCTUALOPERATORID=:pId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据用例id查询用例信息
	 * @param caseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getCaseByCaseId(String caseId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		String ksql = "select tcbi.* from TEST_CASE_BASE_INFO tcbi where tcbi.tESTCASEID=:caseId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据用例id和用例版本查询用例信息
	 * @param caseId
	 * @param caseVersion
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Table getCaseByCaseIdAndCaseVersion(String caseId,Integer caseVersion) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("caseVersion", caseVersion);
		String ksql = "select tcbi.* from TEST_CASE_BASE_INFO tcbi where tcbi.tESTCASEID=:caseId and tcbi.tESTCASEVER=:caseVersion";
		String ksql2 = "select tcbi.* from TEST_CASE_BASE_INFO tcbi where tcbi.tESTCASEID=:caseId";
		if(caseVersion != 0) {
			tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		} else {
			tb = KSQL.select(ksql2, map, "/metrodetection/system_code/data", null);
		}
		
		return tb;
	}
	
	/**
	 * 根据用例id查询测试用例检测信息
	 * @param caseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table queryTestCaseDetectionInfo(String caseId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		String ksql = "select tcdi.* from TEST_CASE_DECTION_INFO tcdi where tcdi.tESTCASEID=:caseId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	} 
	
	/**
	 * 根据id查找检测对象类别信息
	 * @param id
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getDetectionObjectTypeById(java.math.BigDecimal id) {
		Table tb = null;
		Map map = new HashMap();
		map.put("id", id);
		String query = "select dot.* from DETECTION_OBJECT_TYPE dot where dot = :id";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据检测对象类别和检测对象id获取检测对象定义信息
	 * @param detectionObjId
	 * @param typeId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getDetectionTypeCode(java.math.BigDecimal detectionObjId,java.math.BigDecimal typeId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("detectionObjId", detectionObjId);
		map.put("typeId", typeId);
		System.out.println("UUUUUUUUU"+detectionObjId+"---"+typeId);
		String query = "select dtc.* from DEVICE_TYPE_CODE dtc where dtc.dETECTIONOBJECTTYPE = :detectionObjId and dtc.dEVICETYPE = :typeId";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 获取检测方面类别信息
	 * @param id
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getDetectionRangeType(java.math.BigDecimal id) {
		Table tb = null;
		Map map = new HashMap();
		map.put("id", id);
		String query = "select drt.* from DETECTION_RANGE_TYPE drt where drt=:id";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 获取检测方面定义信息
	 * @param typeId
	 * @param id
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getDetectionRangeCode(java.math.BigDecimal typeId,java.math.BigDecimal id) {
		Table tb = null;
		Map map = new HashMap();
		map.put("typeId", typeId);
		map.put("id", id);
		String query = "select drc.* from DETECTION_RANGE_CODE drc where drc.dETECTIONRANGETYPE=:typeId and drc.dETECTIONRANGEID=:id";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	
	/**
	 * 根据用例id查找子用例信息
	 * @param caseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getSubTestCaseByCaseId(String caseId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		String query = "select stci.* from SUB_TEST_CASE_BASE_INFO stci where stci.tESTCASEID=:caseId";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据用例id和用例版本查找子用例信息
	 * @param caseId
	 * @param caseVersion
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Table getSubTestCaseByCaseIdAndCaseVersion(String caseId,Integer caseVersion) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("caseVersion", caseVersion);
		String query = "select stci.* from SUB_TEST_CASE_BASE_INFO stci where stci.tESTCASEID=:caseId and stci.tESTCASEVER=:caseVersion";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 得到每个子用例对应的开始和结束时间
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Map getAllCaseTimeMap(Table tb) {
		Map tarMap = new HashMap();
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			String caseId = (String) r.getValue("tv");
			String valiRoot = (String)r.getValue("fPARENTID");
			//找到这个人对应的信息针对子用例
			if(StringUtils.isNotBlank(valiRoot) && (!"root".equals(valiRoot.trim()))) {
				String startT = (String)r.getValue("sTARTTIME");
				String endT = (String)r.getValue("eNDTIME");
				tarMap.put(caseId, startT+"_"+endT);
			}
			
		}
		return tarMap;
	}
	
	/**
	 * 找到制定计划中所有的用例
	 * @param tb
	 * @return
	 */
	public static List<String> getCaseIdListInPlan(Table tb) {
		List<String> caseList = new ArrayList<String>();
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			String valiP = (String) r.getValue("fPARENTID");
			String caseId = (String) r.getValue("tv");
			if(StringUtils.isNotBlank(valiP) && valiP.trim().equals("root")) {
				if(caseList.indexOf(caseId) == -1) {
					caseList.add(caseId);
				}
			}
		}
		for (String str : caseList) {
			System.out.println("**************"+str+"***********");
		}
		return caseList;
	}
	
	/**
	 * 得到制定人员分配到的用例list
	 * @param tb
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static List<String> getCaseIdList(Table tb,String pId) {
		List<String> res = new ArrayList<String>();
		Map<String,List<String>> map = new HashMap<String,List<String>>();
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			String caseId = (String) r.getValue("tv");
			String valiP = (String)r.getValue("oPERATORNAME");
			String valiRoot = (String)r.getValue("fPARENTID");
			BigDecimal caseVer = (BigDecimal) r.getValue("tESTCASEVER");
			
			if(StringUtils.isNotBlank(valiRoot) && (!valiRoot.trim().equals("root"))) {
				if(StringUtils.isNotBlank(valiP)) {
					if(valiP.equals(pId)) {
						if(!map.containsKey(pId)) {
							List<String> list = new ArrayList<String>();
							list.add(valiRoot+"_"+Integer.valueOf(caseVer.toString()));
							map.put(pId, list);
						} else {
							List<String> list = map.get(pId);
							if(list.indexOf(valiRoot+"_"+Integer.valueOf(caseVer.toString())) == -1) {
								list.add(valiRoot+"_"+Integer.valueOf(caseVer.toString()));
							}
							//map.put(pId, list);
						}
					}
				}
			}
		}
		/*Iterator irr = map.entrySet().iterator();
		while(irr.hasNext()) {
			Entry en = (Entry)irr.next();
			//System.out.println(en.getKey());
			List<String> list = (List<String>) en.getValue();
			for (String str : list) {
				System.out.println(en.getKey()+"--->"+str);
			}
		}*/
		res = map.get(pId);
		
		return res;
	}
	
	/**
	 * 找到对应人员分配到的所有子用例
	 * @param tb
	 * @param pId
	 * @return
	 */
	public  static List<String> getAllSubCaseIdList(Table tb,String pId){
		List<String> res = new ArrayList<String>();
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			String caseId = (String) r.getValue("tv");
			String valiP = (String)r.getValue("oPERATORNAME");
			String valiRoot = (String)r.getValue("fPARENTID");
			if(StringUtils.isNotBlank(valiRoot) && (!valiRoot.trim().equals("root"))) {
				if(StringUtils.isNotBlank(valiP)) {
					if(valiP.equals(pId)) {
						if(res.indexOf(caseId) == -1) {
							res.add(caseId.trim());
						}
					}
				}
			}
		}
		for (String str : res) {
			System.out.println(pId + "有："+str);
		}
		return res;
	}
	
	/**
	 * 根据子用例id和用例id获取子用例的步骤信息
	 * @param subCaseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getSubTestCaseSteps(String caseId,String subCaseId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("subCaseId", subCaseId);
		String query = "select stcsi.* from SUB_TEST_CASE_STEP_INFO stcsi where stcsi.tESTCASEID=:caseId and stcsi.sUBTESTCASEID=:subCaseId";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据用例id和子用例id获取指标
	 * @param caseId
	 * @param subCaseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getIndexByCaseIdAndSubCaseId(Integer caseVer,String caseId,String subCaseId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("caseVer", caseVer);
		map.put("subCaseId", subCaseId);
		String query = "select iv.iNDEXID,iv.iNDEXVALUEDESC" +
		" from RELATIONSHIP_INDEX_AND_CASE r optional join " +
		"INDEX_SYSTEM_VALUE iv on r.iNDEXNO=iv " +
		"where r.tESTCASEID=:caseId and r.tESTCASEVER=:caseVer and r.sUBTESTCASEID=:subCaseId";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据用例id和子用例id获取子用例对象
	 * @param caseId
	 * @param subCaseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getSubTestCaseInfoByCaseIdAndSubCasId(String caseId,String subCaseId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("subCaseId", subCaseId);
		String query = "select stci.* from SUB_TEST_CASE_BASE_INFO stci where " +
				"stci.tESTCASEID = :caseId and stci.sUBTESTCASEID = :subCaseId";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 根据id查询任务的最大值
	 * @return
	 */
	public static Integer getMaxTaskId() {
		Integer c = 1;
		String query = "select MAX(tpti.tASKID) as maxTask from TEST_PROJECT_TASK_INFO tpti";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		if(tb != null) {
			Integer ig = (Integer) tb.iterator().next().getValue("maxTask");
			if(ig != null) {
				c = Integer.valueOf(String.valueOf(ig));
			}
		}
		return c;
	}
	
	/**
	 *将测试用例信息冗余到测试任务用例里面去
	 * @param tASKID				任务id
	 * @param bUSINESSID			业务类型
	 * @param bUSINESSSTAGE			业务阶段
	 * @param aPPLYFOROBJECT		应用检测对象类型
	 * @param aPPLYFORDEVICETYPE	应用检测对象
	 * @param tESTCASEVER			测试用例版本
	 * @param tESTCASEID			测试用例ID
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveTestTaskCaseInfo(BigDecimal tASKID,Integer bUSINESSID,BigDecimal bUSINESSSTAGE,
			BigDecimal aPPLYFOROBJECT,BigDecimal aPPLYFORDEVICETYPE,BigDecimal tESTCASEVER,
			String tESTCASEID) {
		Map map = new HashMap();
		map.put("tASKID", tASKID);
		map.put("bUSINESSID", bUSINESSID);
		map.put("bUSINESSSTAGE", bUSINESSSTAGE);
		map.put("aPPLYFOROBJECT", aPPLYFOROBJECT);
		map.put("aPPLYFORDEVICETYPE", aPPLYFORDEVICETYPE);
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		String insert = "insert into TEST_TASK_CASE_INFO ttci (ttci,tASKID,bUSINESSID,bUSINESSSTAGE," +
				"aPPLYFOROBJECT,aPPLYFORDEVICETYPE,tESTCASEVER,tESTCASEID) values (:guid(),:tASKID," +
				":bUSINESSID,:bUSINESSSTAGE,:aPPLYFOROBJECT,:aPPLYFORDEVICETYPE,:tESTCASEVER,:tESTCASEID)";
		KSQL.executeUpdate(insert, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 根据检测方案id和用例id和任务id将测试用例信息冗余到测试任务用例里面去
	 * @param caseId
	 * @param tASKID
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveTestTaskCaseInfo(String applicaNo,String caseId,BigDecimal tASKID,Integer projectId,Integer cVer) {
		Map map = new HashMap();
		map.put("tASKID", tASKID);
		map.put("caseId", caseId);
		map.put("applicaNo", Integer.valueOf(applicaNo));
		map.put("projectId", projectId);
		map.put("cVer", cVer);
		String insert = "insert into TEST_TASK_CASE_INFO ttci (ttci,ttci.tASKID,ttci.bUSINESSID,ttci.bUSINESSSTAGE," +
				"ttci.aPPLYFOROBJECT,ttci.aPPLYFORDEVICETYPE,ttci.tESTCASEVER,ttci.tESTCASEID,ttci.pROJECTID)(" +
				"select :guid(),:tASKID,tsci.bUSINESSID,tsci.bUSINESSSTAGE,tsci.aPPLYFOROBJECT,tsci.aPPLYFORDEVICETYPE,tsci.tESTCASEVER,:caseId,:projectId " +
				"from " +
				"TEST_SCHEME_CASE_INFO tsci where tsci.tESTSCHEMEID=(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO=:applicaNo) and " +
				"tsci.tESTCASEID=:caseId and tsci.tESTCASEVER=:cVer)";
		KSQL.executeUpdate(insert, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 根据用例id得到用例
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table queryTestCase(BigDecimal tASKID) {
		Table tb = null;
		Map map = new HashMap();
		map.put("tASKID", tASKID);
		String query = "select ttci.* from TEST_TASK_CASE_INFO ttci where " +
				"ttci.tASKID = :tASKID";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	
	/**
	 * 将子用例信息冗余到测试任务执行子用例信息
	 * @param pROJECTID 			项目ID
	 * @param tASKID				任务ID
	 * @param tESTCASEVER			测试用例版本
	 * @param tESTCASEID			测试用例ID
	 * @param sUBTESTCASEID			测试子用例ID
	 * @param sUBTESTCASENAME		测试子用例名称
	 * @param sUBTESTCASEPRIOR		测试子用例执行级别
	 * @param sUBTESTCASEORDER		测试子用例执行顺序
	 * @param sUBTESTCASETIME		测试子用例执行耗时
	 * @param tIMEUNITID			执行时间单位
	 * @param sUBTESTCASEEXECUTE	测试子用例执行情况
	 * @param sUBTESTCASECHECK		测试子用例检查情况
	 * @param aCTUALSUBTESTCASETIME	测试子用例实际执行耗时
	 * @param eXECUTEDATETIME		测试子用例执行日期时间
	 * @param sUBTESTCASEDESC		测试子用例执行描述
	 * @param rEPORTDATE			上报日期
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveTestTaskExecuteSubCase(Integer pROJECTID,BigDecimal tASKID,Integer tESTCASEVER,
			String tESTCASEID,String sUBTESTCASEID,String sUBTESTCASENAME,Integer sUBTESTCASEPRIOR,
			Integer sUBTESTCASEORDER,Double sUBTESTCASETIME,Integer tIMEUNITID,Integer sUBTESTCASEEXECUTE,
			Integer sUBTESTCASECHECK,Double aCTUALSUBTESTCASETIME,Date eXECUTEDATETIME,String sUBTESTCASEDESC,Date rEPORTDATE) {
		Map map = new HashMap();
		map.put("pROJECTID", pROJECTID);
		map.put("tASKID", tASKID);
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("sUBTESTCASEID", sUBTESTCASEID);
		map.put("sUBTESTCASENAME", sUBTESTCASENAME);
		map.put("sUBTESTCASEPRIOR", sUBTESTCASEPRIOR);
		map.put("sUBTESTCASEORDER", sUBTESTCASEORDER);
		map.put("sUBTESTCASETIME", sUBTESTCASETIME);
		map.put("tIMEUNITID", tIMEUNITID);
		map.put("sUBTESTCASEEXECUTE", sUBTESTCASEEXECUTE);
		map.put("sUBTESTCASECHECK", sUBTESTCASECHECK);
		map.put("aCTUALSUBTESTCASETIME", aCTUALSUBTESTCASETIME);
		map.put("eXECUTEDATETIME", "1970-01-01 00:00:00");
		System.out.println(eXECUTEDATETIME+"++++++++++");
		System.out.println(eXECUTEDATETIME+"++++++++++");
		map.put("sUBTESTCASEDESC", sUBTESTCASEDESC);
		map.put("rEPORTDATE", rEPORTDATE);
		String insert = "insert into TEST_TASK_EXECUTE_SUB_CASE ttesc (ttesc,ttesc.tASKID,ttesc.tESTCASEVER,ttesc.tESTCASEID," +
				"ttesc.sUBTESTCASEID,ttesc.sUBTESTCASENAME,ttesc.sUBTESTCASEPRIOR,ttesc.sUBTESTCASEORDER,ttesc.sUBTESTCASETIME,ttesc.tIMEUNITID," +
				"ttesc.sUBTESTCASEEXECUTE,ttesc.sUBTESTCASECHECK,ttesc.aCTUALSUBTESTCASETIME,ttesc.eXECUTEDATETIME,ttesc.sUBTESTCASEDESC,ttesc.rEPORTDATE) " +
				"values (:guid(),:tASKID,:tESTCASEVER,:tESTCASEID,:sUBTESTCASEID,:sUBTESTCASENAME,:sUBTESTCASEPRIOR,:sUBTESTCASEORDER," +
				":sUBTESTCASETIME,:tIMEUNITID,:sUBTESTCASEEXECUTE,:sUBTESTCASECHECK,:aCTUALSUBTESTCASETIME,:toDateTime('1970-01-01 00:00:00'),:sUBTESTCASEDESC,:currentDate())";
		KSQL.executeUpdate(insert, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 将子用例信息冗余到测试任务执行子用例信息
	 * @param pROJECTID
	 * @param tASKID
	 * @param tESTCASEID
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveTestTaskExecuteSubCase(Integer pROJECTID,BigDecimal tASKID,String tESTCASEID) {
		Map map = new HashMap();
		map.put("pROJECTID", pROJECTID);
		map.put("tASKID", tASKID);
		map.put("tESTCASEID", tESTCASEID);
		map.put("excuteDate", new Date(0));
		
		String insert = "insert into TEST_TASK_EXECUTE_SUB_CASE ttesc (ttesc,ttesc.pROJECTID,ttesc.tASKID,ttesc.tESTCASEVER,ttesc.tESTCASEID," +
				"ttesc.sUBTESTCASEID,ttesc.sUBTESTCASENAME,ttesc.sUBTESTCASEPRIOR,ttesc.sUBTESTCASEORDER,ttesc.sUBTESTCASETIME,ttesc.tIMEUNITID,ttesc.sUBTESTCASEDESC," +
				"ttesc.sUBTESTCASEEXECUTE,ttesc.sUBTESTCASECHECK,ttesc.aCTUALSUBTESTCASETIME,ttesc.eXECUTEDATETIME,ttesc.rEPORTDATE) " +
				"values (:guid(),:pROJECTID,:tASKID," +
				"select stcbi.tESTCASEVER,:tESTCASEID,stcbi.sUBTESTCASEID, stcbi.sUBTESTCASENAME,stcbi.sUBTESTCASEPRIOR,stcbi.sUBTESTCASEORDER," +
				"stcbi.sUBTESTCASETIME,stcbi.tIMEUNITID,stcbi.sUBTESTCASEDESC" +
				"from SUB_TEST_CASE_BASE_INFO stcbi where stcbi.tESTCASEID=:tESTCASEID" +
				",0,0,0,:excuteDate,:currentDate())";
		KSQL.executeUpdate(insert, map, "/metrodetection/system_code/data", null);
		
	}
	
	/**
	 * 子用例步骤冗余测试任务执行步骤信息
	 * @param pROJECTID						项目ID
	 * @param tASKID						任务ID
	 * @param tESTCASEVER					测试用例版本
	 * @param tESTCASEID					测试用例ID
	 * @param sUBTESTCASEID					测试子用例ID
	 * @param sUBTESTCASESTEPID				测试子用例步骤ID
	 * @param sUBTESTCASESTEPDESC			测试子用例步骤描述
	 * @param sUBTESTCASESTEPPRIOR			测试子用例步骤级别
	 * @param sUBTESTCASESTEPEXECUTE		测试子用例步骤执行情况
	 * @param sUBTESTCASESTEPCHECK			测试子用例步骤检查情况
	 * @param eXECUTEDATETIME				测试子用例步骤执行日期
	 * @param rEPORTDATE					上报日期
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveTestTaskExecuteStep(Integer pROJECTID,BigDecimal tASKID,Integer tESTCASEVER,String tESTCASEID,
			String sUBTESTCASEID,Integer sUBTESTCASESTEPID,String sUBTESTCASESTEPDESC,Integer sUBTESTCASESTEPPRIOR,Integer sUBTESTCASESTEPEXECUTE,
			Integer sUBTESTCASESTEPCHECK,Date eXECUTEDATETIME,Date rEPORTDATE) {
		Map map = new HashMap();
		map.put("pROJECTID", pROJECTID);
		map.put("tASKID", tASKID);
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("sUBTESTCASEID", sUBTESTCASEID);
		map.put("sUBTESTCASESTEPID", sUBTESTCASESTEPID);
		map.put("sUBTESTCASESTEPDESC", sUBTESTCASESTEPDESC);
		map.put("sUBTESTCASESTEPPRIOR", sUBTESTCASESTEPPRIOR);
		map.put("sUBTESTCASESTEPEXECUTE", sUBTESTCASESTEPEXECUTE);
		map.put("sUBTESTCASESTEPCHECK", sUBTESTCASESTEPCHECK);
		map.put("eXECUTEDATETIME", eXECUTEDATETIME);
		map.put("rEPORTDATE", rEPORTDATE);
		String insert = "insert into TEST_TASK_EXECUTE_STEP ttes (ttes,ttes.pROJECTID,ttes.tASKID,ttes.tESTCASEVER,ttes.tESTCASEID," +
				"ttes.sUBTESTCASEID,ttes.sUBTESTCASESTEPID,ttes.sUBTESTCASESTEPDESC,ttes.sUBTESTCASESTEPPRIOR,ttes.sUBTESTCASESTEPEXECUTE," +
				"ttes.sUBTESTCASESTEPCHECK,ttes.eXECUTEDATETIME,ttes.rEPORTDATE) values (:guid(),:pROJECTID," +
				":tASKID,:tESTCASEVER,:tESTCASEID,:sUBTESTCASEID,:sUBTESTCASESTEPID,:sUBTESTCASESTEPDESC,:sUBTESTCASESTEPPRIOR," +
				":sUBTESTCASESTEPEXECUTE,:sUBTESTCASESTEPCHECK,:eXECUTEDATETIME,:rEPORTDATE)";
		KSQL.executeUpdate(insert, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 子用例步骤冗余测试任务执行步骤信息
	 * @param pROJECTID			项目id
	 * @param tASKID			任务id
	 * @param sUBTESTCASEID		子用例id
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveTestTaskExecuteStep(Integer pROJECTID,BigDecimal tASKID,String sUBTESTCASEID,String caseId,BigDecimal caseVer) {
		Map map = new HashMap();
		map.put("pROJECTID", pROJECTID);
		map.put("tASKID", tASKID);
		map.put("sUBTESTCASEID", sUBTESTCASEID);
		map.put("caseId", caseId);
		map.put("caseVer", caseVer);
		String insert = "insert into TEST_TASK_EXECUTE_STEP ttes (ttes,ttes.pROJECTID,ttes.tASKID,ttes.tESTCASEVER,ttes.tESTCASEID," +
				"ttes.sUBTESTCASEID,ttes.sUBTESTCASESTEPID,ttes.sUBTESTCASESTEPDESC,ttes.sUBTESTCASESTEPPRIOR,ttes.sUBTESTCASESTEPEXECUTE," +
				"ttes.sUBTESTCASESTEPCHECK,ttes.eXECUTEDATETIME,ttes.rEPORTDATE,ttes.sUBTESTCASESTEPEXCUTEDESC)("+
				"select guid(),:pROJECTID,:tASKID, :caseVer,:caseId,stci.sUBTESTCASEID,stci.sUBTESTCASESTEPID,stci.sUBTESTCASESTEPDESC,stci.sUBTESTCASESTEPPRIOR," +
				" 0,0,:toDateTime('1970-01-01 00:00:00'),:currentDate(),'' " +
				"from SUB_TEST_CASE_STEP_INFO stci where stci.sUBTESTCASEID=:sUBTESTCASEID AND stci.tESTCASEID=:caseId AND stci.tESTCASEVER=:caseVer" +
				")";
		KSQL.executeUpdate(insert, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 人员占用信息入库
	 * @param pId					操作员
	 * @param taskId				测试任务ID
	 * @param oCCUPYSTARTDATETIME	计划占用起始日期时间
	 * @param oCCUPYENDDATETIME		计划占用结束日期时间
	 * @param beizhu				备注
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveHrOccupyInfo(String pId,Integer taskId,String oCCUPYSTARTDATETIME,String oCCUPYENDDATETIME,String beizhu) {
		Map map = new HashMap();
		map.put("pId", pId);
		map.put("taskId", taskId);
		map.put("oCCUPYSTARTDATETIME", oCCUPYSTARTDATETIME);
		map.put("oCCUPYENDDATETIME", oCCUPYENDDATETIME);
		map.put("beizhu", beizhu);
		System.out.println(oCCUPYSTARTDATETIME+"====="+oCCUPYENDDATETIME);
		String insert = "insert into HR_OCCUPY_INFO hoi (hoi,hoi.oPERATORID,hoi.tESTTASKID,hoi.oCCUPYSTARTDATETIME,hoi.oCCUPYENDDATETIME,hoi.mEMO) " +
				"values (:guid(),:pId,:taskId,:toDateTime('"+oCCUPYSTARTDATETIME+"'),:toDateTime('"+oCCUPYENDDATETIME+"'),:beizhu)";
		KSQL.executeUpdate(insert, map,"/metrodetection/system_code/data", null);
	}
	
	
	/**
	 * 2014.6.11日修改
	 * @param pId
	 * @param oCCUPYSTARTDATETIME
	 * @param oCCUPYENDDATETIME
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static boolean valiHrDate(String pId,String oCCUPYSTARTDATETIME,String oCCUPYENDDATETIME) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Boolean flag = true;
		Map map = new HashMap();
		map.put("pId", pId);
		map.put("oCCUPYSTARTDATETIME", oCCUPYSTARTDATETIME);
		map.put("oCCUPYENDDATETIME", oCCUPYENDDATETIME);
		
		String sql = "select hoi.* from HR_OCCUPY_INFO hoi where hoi.oPERATORID=:pId and hoi.oCCUPYSTARTDATETIME=:oCCUPYSTARTDATETIME and hoi.oCCUPYENDDATETIME=:oCCUPYENDDATETIME";
		
		Table tb = KSQL.select(sql, map, "/metrodetection/system_code/data", null);
		if(tb.size() > 0) {
			flag = false;
		}
		return flag;
	} 
	
	/**
	 * 根据申请序号更改项目成员里的项目id（默认为0）;
	 * @param applicationNo
	 */
	/*@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void updateTestProjectMemberByApplicationNo(String applicationNo) {
		String updateq = "";
		Map map = new HashMap();
		map.put("applicationNo", applicationNo);
		KSQL.executeUpdate(updateq, map,"/metrodetection/system_code/data", null);
	}*/
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getSubcaseIdBySubcaseId(String subCaseId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("subCaseId", subCaseId);
		String query = "select stcbi.* from SUB_TEST_CASE_BASE_INFO stcbi where stcbi.sUBTESTCASEID=:subCaseId";
		tb = KSQL.select(query,map,"/metrodetection/system_code/data", null);
		return tb;
	}
	
	/**
	 * 流程标题函数
	 * @return
	 */
	public static String titleFn() {
		String taskTitle = "select tai.aPPLICATIONDATE,tai.eXPECTENDINGDATE,tai.lINEID,tai.pRODUCTNAME,dt.dEVICETYPECNAME," +
				"dot.dETECTIONOBJECTCNAME,btc.bUSINESSIDCNAME," +
				"weituo.mANUFACTUREIDCNAME as wtdw,kaifa.mANUFACTUREIDCNAME as kfdw " +
				"from TEST_APPLICATION_INFO tai " +
				"optional join DEVICE_TYPE_CODE dt on " +
				"tai.dEVICETYPE=dt.dEVICETYPE "+
				"optional join DETECTION_OBJECT_TYPE dot on " +
				"tai.dETECTIONOBJECTTYPE=dot " +
				"optional join BUSINESS_TYPE_CODE btc on " +
				"tai.bUSINESSID=btc " +
				"optional join AFC_MANUFACTURER_INFO weituo on " +
				"tai.aSSIGNEDMANUFACTUREID=weituo " +
				"optional join AFC_MANUFACTURER_INFO kaifa on " +
				"tai.pRODUCTMANUFACTUREID=kaifa "+
				"where tai=:toInteger(getProcessData1())";
		Table tb = KSQL.select(taskTitle, null, "/metrodetection/system_code/data", null);
		String pName = (String) tb.iterator().next().getValue("pRODUCTNAME");
		String dtName = (String) tb.iterator().next().getValue("dEVICETYPECNAME");
		String dotName = (String) tb.iterator().next().getValue("dETECTIONOBJECTCNAME");
		String bnsName = (String) tb.iterator().next().getValue("bUSINESSIDCNAME");
		BigDecimal lineName = (BigDecimal) tb.iterator().next().getValue("lINEID");
		String wtName = (String) tb.iterator().next().getValue("wtdw");
		String kfName = (String) tb.iterator().next().getValue("kfdw");
		Date applyDate = (Date) tb.iterator().next().getValue("aPPLICATIONDATE");
		Date yqwcDate = (Date) tb.iterator().next().getValue("eXPECTENDINGDATE");
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String disApplyDate = df.format(applyDate);
		String disFinishDate = df.format(yqwcDate);
		//String res = "检测流程"+pName+dtName;
		String res = lineName+"号线路-"+"委托单位:"+wtName+"-开发单位:"+kfName+"-"+dotName+"-"+dtName+"-"+bnsName+"-"+pName+"-申请日期:"+disApplyDate+"-预期完成日期:"+disFinishDate;
		return res;
	}
	
	
	/**
	 * 保存制定计划之前的初始化
	 * 如果之前对该项目已经制定过计划则将以前制定的计划以及和任务相关的信息全部删除
	 * @param projectId
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void initProjectTask(Integer projectId) {
		System.out.println(projectId);
		Map map = new HashMap();
		map.put("projectId", projectId);
		String vali = "select tpi.* from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId";
		Table valiTb = KSQL.select(vali, map, "/metrodetection/system_code/data", null);
		
		//对该项目以前制定过计划
		if(valiTb != null && valiTb.size() > 0) {
			//删除受测样品占用
			//String deleteSO = "delete from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			String deleteSO = "delete from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.pROJECTID=:projectId";
			KSQL.executeUpdate(deleteSO, map, "/metrodetection/system_code/data", null);
			//删除工具占用
			String deleteTO = "delete from TOOL_OCCUPY_INFO toi where toi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteTO, map, "/metrodetection/system_code/data", null);
			//删除房间占用
			String deleteRO = "delete from ROOM_OCCUPY_INFO roi where roi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteRO, map, "/metrodetection/system_code/data", null);
			//删除人员占用
			String deleteHO = "delete from HR_OCCUPY_INFO hoi where hoi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteHO, map, "/metrodetection/system_code/data", null);
			//删除测试任务执行问题
			String delPro = "delete from TEST_TASK_EXECUTE_PROBLEM tep where tep.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(delPro, map, "/metrodetection/system_code/data", null);
			//删除测试任务执行步骤
			//String deleteTestSubStep = "delete from TEST_TASK_EXECUTE_STEP ttes where ttes.pROJECTID=:projectId";
			String deleteTestSubStep = "delete from TEST_TASK_EXECUTE_STEP ttes where ttes.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteTestSubStep, map, "/metrodetection/system_code/data", null);
			//删除测试任务执行子用例
			//String deleteTestSubCase = "delete from TEST_TASK_EXECUTE_SUB_CASE ttesc where ttesc.pROJECTID=:projectId";
			String deleteTestSubCase = "delete from TEST_TASK_EXECUTE_SUB_CASE ttesc where ttesc.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteTestSubCase, map, "/metrodetection/system_code/data", null);
			//删除测试任务用例
			//String deleteTestCase = "delete from TEST_TASK_CASE_INFO ttci where ttci.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			String deleteTestCase = "delete from TEST_TASK_CASE_INFO ttci where ttci.pROJECTID=:projectId";
			KSQL.executeUpdate(deleteTestCase, map, "/metrodetection/system_code/data", null);
			//删除项目测试任务
			String deleteProjectTask = "delete from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId";
			KSQL.executeUpdate(deleteProjectTask, map, "/metrodetection/system_code/data", null);
		}
		
	}
	
	/**
	 * 调整计划初始化
	 * 删除相关占用信息,测试任务和用例信息保留 更改先前任务的状态为5(终止)
	 * @param projectId
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void modifyInit(Integer projectId) {
		Map map = new HashMap();
		map.put("projectId", projectId);
		String vali = "select tpi.* from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId";
		Table valiTb = KSQL.select(vali, map, "/metrodetection/system_code/data", null);
		//对该项目以前制定过计划
		if(valiTb != null && valiTb.size() > 0) {
			//删除受测样品占用
			//String deleteSO = "delete from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			String deleteSO = "delete from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.pROJECTID=:projectId";
			KSQL.executeUpdate(deleteSO, map, "/metrodetection/system_code/data", null);
			//删除工具占用
			String deleteTO = "delete from TOOL_OCCUPY_INFO toi where toi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteTO, map, "/metrodetection/system_code/data", null);
			//删除房间占用
			String deleteRO = "delete from ROOM_OCCUPY_INFO roi where roi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteRO, map, "/metrodetection/system_code/data", null);
			//删除人员占用
			String deleteHO = "delete from HR_OCCUPY_INFO hoi where hoi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			KSQL.executeUpdate(deleteHO, map, "/metrodetection/system_code/data", null);
			//修改项目测试任务的执行状态(2--完成)
			String updateProjectTask = "update TEST_PROJECT_TASK_INFO tpi set tpi.tASKEXECUTE=2 where tpi.pROJECTID=:projectId";
			KSQL.executeUpdate(updateProjectTask, map, "/metrodetection/system_code/data", null);
			//修改项目测试任务的检查结果(4--受阻)
			String updateTaskCheck = "update TEST_PROJECT_TASK_INFO tpi set tpi.tASKCHECK=4 where tpi.pROJECTID=:projectId";
			KSQL.executeUpdate(updateTaskCheck,  map, "/metrodetection/system_code/data", null);
		}
	}
	
	/**
	 * 回归计划初始化
	 * 删除相关占用信息,测试任务和用例信息保留 更改先前任务的状态为5(终止)
	 * @param projectId
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void modifyTaskStatus(Integer projectId,String diedai) {
		Map map = new HashMap();
		map.put("projectId", projectId);
		map.put("diedai", diedai);
		String vali = "select tpi.* from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai";
		Table valiTb = KSQL.select(vali, map, "/metrodetection/system_code/data", null);
		//此轮迭代对该项目制定过回归计划
		if(valiTb != null && valiTb.size() > 0) {
			//删除受测样品占用
			String deleteSO = "delete from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			//String deleteSO = "delete from SAMPLE_DEVICE_OCCUPY_INFO sdoi where sdoi.pROJECTID=:projectId";
			KSQL.executeUpdate(deleteSO, map, "/metrodetection/system_code/data", null);
			//删除工具占用
			String deleteTO = "delete from TOOL_OCCUPY_INFO toi where toi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			KSQL.executeUpdate(deleteTO, map, "/metrodetection/system_code/data", null);
			//删除房间占用
			String deleteRO = "delete from ROOM_OCCUPY_INFO roi where roi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			KSQL.executeUpdate(deleteRO, map, "/metrodetection/system_code/data", null);
			//删除人员占用
			String deleteHO = "delete from HR_OCCUPY_INFO hoi where hoi.tESTTASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			KSQL.executeUpdate(deleteHO, map, "/metrodetection/system_code/data", null);
			//删除测试任务执行问题
			String delPro = "delete from TEST_TASK_EXECUTE_PROBLEM tep where tep.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			KSQL.executeUpdate(delPro, map, "/metrodetection/system_code/data", null);
			//删除测试任务执行步骤
			//String deleteTestSubStep = "delete from TEST_TASK_EXECUTE_STEP ttes where ttes.pROJECTID=:projectId";
			String deleteTestSubStep = "delete from TEST_TASK_EXECUTE_STEP ttes where ttes.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			KSQL.executeUpdate(deleteTestSubStep, map, "/metrodetection/system_code/data", null);
			//删除测试任务执行子用例
			//String deleteTestSubCase = "delete from TEST_TASK_EXECUTE_SUB_CASE ttesc where ttesc.pROJECTID=:projectId";
			String deleteTestSubCase = "delete from TEST_TASK_EXECUTE_SUB_CASE ttesc where ttesc.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			KSQL.executeUpdate(deleteTestSubCase, map, "/metrodetection/system_code/data", null);
			//删除测试任务用例
			//String deleteTestCase = "delete from TEST_TASK_CASE_INFO ttci where ttci.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId)";
			String deleteTestCase = "delete from TEST_TASK_CASE_INFO ttci where ttci.tASKID in (select tpi.tASKID from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai)";
			KSQL.executeUpdate(deleteTestCase, map, "/metrodetection/system_code/data", null);
			//删除项目测试任务
			String deleteProjectTask = "delete from TEST_PROJECT_TASK_INFO tpi where tpi.pROJECTID=:projectId and tpi.tESTTASKITERATIVE=:diedai";
			KSQL.executeUpdate(deleteProjectTask, map, "/metrodetection/system_code/data", null);
		}
		//修改项目测试任务的执行状态(2--完成)
		String updateProjectTask = "update TEST_PROJECT_TASK_INFO tpi set tpi.tASKEXECUTE=2 where tpi.pROJECTID=:projectId";
		KSQL.executeUpdate(updateProjectTask, map, "/metrodetection/system_code/data", null);
	}
	/**
	 * 回归计划得到迭代次数
	 * 删除相关占用信息,测试任务和用例信息保留 更改先前任务的状态为5(终止)
	 * @param projectId
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Integer getIteratorCou(Integer applicationNo) {
		Map map = new HashMap();
		map.put("applicationNo", applicationNo);
		String vali = "select count(1) as countDD from RECURRENCE_TEST_SCHEME rts where rts.APPLICATION_NO=:applicationNo";
		Table valiTb = KSQL.select(vali, map, "/metrodetection/system_code/data", null);
		Integer count = 0;
		if(valiTb != null) {
			Integer temp = (Integer) valiTb.iterator().next().getValue("countDD");
			if(temp != null) {
				count = temp+1;
			}
		}
		return count;
	}
	
	/**
	 * 根据项目id获取业务类型+业务阶段+检测对象
	 * @param projectId
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static String getTaskArea(Integer projectId) {
		String res = "";
		Map map = new HashMap();
		map.put("projectId", projectId);
		String query = "select btc.bUSINESSIDCNAME,dtc.dEVICETYPECNAME,bsc.bUSINESSSTAGECNAME from TEST_SCHEME_CASE_INFO tsci optional join DEVICE_TYPE_CODE dtc on " +
				"tsci.aPPLYFORDEVICETYPE=dtc.dEVICETYPE and tsci.aPPLYFOROBJECT=dtc.dETECTIONOBJECTTYPE optional join BUSINESS_TYPE_CODE btc on " +
				"tsci.bUSINESSID =btc optional join BUSINESS_STAGE_CODE bsc on " +
				"tsci.bUSINESSSTAGE=bsc.bUSINESSSTAGE where tsci.tESTSCHEMEID=(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi " +
				"where tpi=:projectId)";
		Table tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			String c1 = (String)r.getValue("dEVICETYPECNAME");
			String c2 = (String)r.getValue("bUSINESSIDCNAME");
			String c3 = (String)r.getValue("bUSINESSSTAGECNAME");
			if(StringUtils.isNotBlank(c1)) {
				res += c1;
			}
			if(StringUtils.isNotBlank(c2)) {
				res += c2;		
			}
			if(StringUtils.isNotBlank(c3)) {
				res += c3;
			}
			break;
		}
		return res;
	}
	
	
	@SuppressWarnings("unchecked")
	public static void clearCaseHouse(String applicationNo,Integer schemeParam) {
		Map initMap = new HashMap();
		initMap.put("applicationNo", applicationNo);
		initMap.put("schemeParam", schemeParam);
		String deleteCaseHouse = "delete from CASE_HOUSE che where che.FAPPLICATIONNO=:applicationNo and che.SCHEMEID=:schemeParam";
		KSQL.executeUpdate(deleteCaseHouse, initMap, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 得到用例树组装成Map 回显时调用
	 * @param tb
	 * @param applicationNo
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked", "deprecation" })
	public static void saveCaseHouse(Table tb,String applicationNo,String timeParam,Integer schemeParam) {
		//每次存储之前先把之前的清掉
		Map initMap = new HashMap();
		initMap.put("applicationNo", applicationNo);
		initMap.put("schemeParam", schemeParam);
		String queryCaseHouse = "select ch.* from CASE_HOUSE ch where ch.FAPPLICATIONNO=:applicationNo and ch.SCHEMEID=:schemeParam";
		//Table table = KSQL.select(queryCaseHouse, initMap, "/metrodetection/system_code/data", null);
		//if(table != null && table.size() > 0) {
			String deleteCaseHouse = "delete from CASE_HOUSE che where che.FAPPLICATIONNO=:applicationNo and che.SCHEMEID=:schemeParam";
			KSQL.executeUpdate(deleteCaseHouse, initMap, "/metrodetection/system_code/data", null);
		//}
		
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row r = it.next();
			String fId = (String)r.getValue("tv");
			String cName = (String)r.getValue("tESTCASENAME");
			String stime = (String)r.getValue("sTARTTIME");
			String etime = (String)r.getValue("eNDTIME");
			String qzrw = (String)r.getValue("qZRW");
			String pId = (String)r.getValue("oPERATORNAME");
			String rangName = (String)r.getValue("rANGENAME");
			String detObjName = (String)r.getValue("dETOBJNAME");
			
			if(stime != null && stime != "" && etime != null && etime != "") {
				Map map = new HashMap();
				map.put("fId", fId);
				map.put("cName", cName);
				if(stime.indexOf(".") != -1) {
					stime = stime.substring(0,stime.indexOf("."));
				}
				if(etime.indexOf(".") != -1) {
					etime = etime.substring(0,etime.indexOf("."));
				}
				map.put("stime", new Timestamp(new Date(stime.replace("-", "/").replace("-", "/").replace("T"," ").replace("Z","")).getTime()));
				map.put("etime", new Timestamp(new Date(etime.replace("-", "/").replace("-", "/").replace("T"," ").replace("Z","")).getTime()));
				map.put("qzrw", qzrw);
				map.put("pId", pId);
				map.put("applicationNo", applicationNo);
				map.put("timeParam", timeParam);
				map.put("schemeParam", schemeParam);
				map.put("rangName", rangName);
				map.put("taskId", null);
				map.put("detObjName", detObjName);
				
				String saveCaseHouse = "insert into CASE_HOUSE che (che,che.FCID,che.FCNAME,che.FSTIME,che.FETIME,che.FQZRW,che.FPID,che.FAPPLICATIONNO,che.TIMEPARAM,che.SCHEMEID,che.RANGENAME,che.TASKID,che.DETOBJNAME) values (" +
						":guid(),:fId,:cName,:stime,:etime,:qzrw,:pId,:applicationNo,:timeParam,:schemeParam,:rangName,:taskId,:detObjName)";
				
				KSQL.executeUpdate(saveCaseHouse, map, "/metrodetection/system_code/data", null);
			}
			
		}
		
		
	}
	
	/**
	 * 通知标题
	 * @return
	 */
	public static String noticeTitleFn() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date dt = new Date();
		String str = sdf.format(dt);
		String query = "select tpi.* from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO=:toInteger(getProcessData1())";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		String pName = tb.iterator().next().getString("pROJECTNAME");
		String res = str+"关于"+pName+"的通知";
		return res;
	}
	
	/**
	 * 通知标题
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static String noticeToPersonFn() {
		String query = "select tpi.* from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO=:toInteger(getProcessData1())";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		String pName = tb.iterator().next().getString("qAMANAGER");
		
		Map map = new HashMap();
		map.put("opId", pName);
		String querypScode = "select hr.* from HR_BASE_INFO hr where hr=:opId";
		Table tbl = KSQL.select(querypScode,map,"/metrodetection/system_code/data", null);
		String scode = tbl.iterator().next().getString("Scode");
		return scode;
	}
	/**
	 * 得到项目负责人
	 * @return
	 */
	public static String xmfzrFn() {
		String query = "select tpi.* from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO=:toInteger(getProcessData1())";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		String pName = tb.iterator().next().getString("pROJECTMANAGER");
		
		Map map = new HashMap();
		map.put("opId", pName);
		String querypScode = "select hr.* from HR_BASE_INFO hr where hr=:opId";
		Table tbl = KSQL.select(querypScode,map,"/metrodetection/system_code/data", null);
		String scode = tbl.iterator().next().getString("Scode");
		return scode;
	}
	/**
	 * 得到技术负责人
	 * @return
	 */
	public static String jsfzrFn() {
		String query = "select tpi.* from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO=:toInteger(getProcessData1())";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		String pName = tb.iterator().next().getString("tECHMANAGER");
		
		Map map = new HashMap();
		map.put("opId", pName);
		String querypScode = "select hr.* from HR_BASE_INFO hr where hr=:opId";
		Table tbl = KSQL.select(querypScode,map,"/metrodetection/system_code/data", null);
		String scode = tbl.iterator().next().getString("Scode");
		return scode;
	}
	/**
	 * 得到检测负责人
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static String jcfzrFn() {
		String query = "select tpi.* from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO=:toInteger(getProcessData1())";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		String pName = tb.iterator().next().getString("tESTMANAGER");
		
		Map map = new HashMap();
		map.put("opId", pName);
		String querypScode = "select hr.* from HR_BASE_INFO hr where hr=:opId";
		Table tbl = KSQL.select(querypScode,map,"/metrodetection/system_code/data", null);
		String scode = tbl.iterator().next().getString("Scode");
		System.out.println("------>"+scode);
		return scode;
	}
	
	public static void main(String[] args) {
		StringBuffer sbf = new StringBuffer();
		String[] arr = {"wo","ad","bc","cb","c","a"};
		for (int i = 0; i < arr.length; i++) {
			if(sbf.indexOf(arr[i]) == -1) {
				sbf.append(arr[i]);
			}
		}
		System.out.println(sbf.toString());
		System.out.println(Integer.toHexString(22));
		String str = "自动售票机入围检测入围检测阶段自动售票机接入检测单功能检测阶段自动售票机样机检测样机检测阶段自动售票机入围检测入围检测阶段自动售票机接入检测单功能检测阶段自动售票机接入检测常规连接检测阶段自动售票机接入检测接入检测阶段自动售票机样机检测样机检测阶段";
		System.out.println(str.length());
		
		Date dte = new Date(0);
		System.out.println(dte.toLocaleString());
		
		String s = "03|1";
		System.out.println("****"+s.split("\\|").length+"****");
		String regex = "[0-9]*";
		System.out.println(s.split("\\|")[0].matches(regex));;
	}
	
	
	
	/**
	 * 2012.12.11日 修改
	 * 根据任务计划人--检测对象-检测方面类别拆分 
	 * @param table
	 * @param taskPattern		生成任务的模式[半日-0,日-1,周-2,月-3]
	 * @param timeParamVal		时间设置参数[9:00_12:00_13:00_18:00_1,其中1:正常工作日,2:周六加班,3:周日加班,4：周六日加班]
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static Map<String,List<String>> getAllTaskGroup(Table table,Integer taskPattern,String timeParamVal) {
		Map<String,List<String>> resMap = new HashMap<String,List<String>>();
		System.out.println("KKKKKKKKKK"+table.size());
		Iterator<Row> it = table.iterator();
		//遍历由前台传入的table
		while(it.hasNext()) {
			Row row = it.next();
			//用例id
			//String caseId = row.getString("tv").split("-")[1];
			//System.out.println(row.getString("tv"));
			//得到父关系
			String parId = row.getString("fPARENTID");
			//执行人员
			String pId = row.getString("oPERATORNAME");
			//用例版本
			Integer caseVer = 0;
			if(row.getValue("cASEVERSION") != null) {
				caseVer = (Integer) row.getValue("cASEVERSION");
			}
			System.out.println("用例版本："+caseVer);
			//开始时间
			String sTime = (String) row.getValue("sTARTTIME");
			//结束时间
			String eTime = (String) row.getValue("eNDTIME");
			System.out.println(sTime+"_____________________________"+eTime);
			//节点层次
			//Integer lev = (Integer) row.getValue("tREESN");
			//System.out.println("disStyle:"+disStyle + "=====lev:"+lev);
			//如果是用例
			if(StringUtils.isNotBlank(parId) && "root".equals(parId)) {
				//用例id
				//String caseId = row.getString("tv").split("-")[1];
				String caseId = "";
				System.out.println("---->"+row.getString("tv"));
				if(row.getString("tv").indexOf("=_=") == -1){
					caseId = row.getString("tv");
				}else{
					caseId = row.getString("tv").split("=_=")[1];
				}
				//执行人员不为空
				if(StringUtils.isNotBlank(pId)) {
					//根据用例id和用例版本得到用例检测信息
					Table caseTb = queryTestCaseDetectionInfoByIdAndVer(caseId, Integer.valueOf(caseVer.toString()));
					Iterator iterator = caseTb.iterator();
					while(iterator.hasNext()) {
						Row r = (Row) iterator.next();
						//获取检测方面类别
						BigDecimal rangType = r.getDecimal("aPPLYFORRANGE");
						//获取检测对象类别
						BigDecimal detObjType = r.getDecimal("aPPLYFOROBJECT");
						//获取检测对象
						BigDecimal detObj = r.getDecimal("aPPLYFORDEVICETYPE");
						//根据获取检测方面类别获取获取检测方面类别信息
						Table rangTable = getDetectionRangeType(rangType);
						//检测方面类别中文名称
						String rangName = rangTable.iterator().next().getString("dETECTIONRANGECNAME");
						//根据检测对象类别和检测对象获取检测对象信息
						System.out.println("AAAAAAAAAAAA"+detObjType+":"+detObj);
						Table detObjTable = getDetectionTypeCode(detObjType,detObj);
						//检测对象中文名称
						String detObjName=detObjTable.iterator().next().getString("dEVICETYPECNAME");
						//操作员姓名
						Table hrTable = getHrTableById(pId);
						String pName = hrTable.iterator().next().getString("oPERATORNAME");
						
						String key = pName+"-"+detObjName+"-"+rangName;
						String val = caseId+"!-!"+caseVer+"!-!"+sTime+"!-!"+eTime+"!-!"+pId;
						if(!resMap.containsKey(key)) {
							List<String> list = new ArrayList<String>();
							list.add(val);
							resMap.put(key, list);
						} else {
							List<String> tempList = resMap.get(key);
							if(tempList.indexOf(val) == -1) {
								tempList.add(val);
								//resMap.put(key, tempList);
							}
						}
					}
				}
				
			}
		}
		
		//return resMap;
		Map<String,List<String>> tarMap = splitTaskByMode(resMap, taskPattern, timeParamVal);
		System.out.println(tarMap);
		return tarMap;
	}
	
	
	/**
	 * 2013.11.29日 修改增加根据生成模式进行二次拆分的功能
	 * 根据任务计划人--检测对象-检测方面类别拆分,拆分完之后再根据生成任务的模式进一步拆分 
	 * @param taskMap
	 * @param taskPattern		生成任务的模式[半日-0,日-1,周-2,月-3]
	 * @param timeParamVal		时间设置参数[9:00_12:00_13:00_18:00_1,其中1:正常工作日,2:周六加班,3:周日加班,4：周六日加班]
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "deprecation" })
	public static Map<String,List<String>> splitTaskByMode(Map<String,List<String>> taskMap,Integer taskPattern,String timeParamVal) {
		Map<String,List<String>> tarMap = new HashMap<String, List<String>>();
		//取得一天的有效时间
		String amEndClock = timeParamVal.split("_")[1];
		String pmEndClock = timeParamVal.split("_")[3];
		//遍历按照任务计划人--检测对象-检测方面拆分得到的Map对象
		Iterator it = taskMap.entrySet().iterator();
		while(it.hasNext()) {
			Entry en = (Entry)it.next();
			//得到map的key：任务计划人--检测对象-检测方面
			String key = (String)en.getKey();
			//得到map的value：用例id+"!-!"+用力版本+"!-!"+用例开始时间+"!-!"+用例结束时间+"!-!"+执行人员id;
			List<String> tempVal = (List<String>) en.getValue();
			//找到最小的开始时间
			/*Long minDt = 999999999999999999L;
			for (String val : tempVal) {
				System.out.println(val);
				String s = val.split("!-!")[2];
				s = s.substring(0,s.lastIndexOf("."));
				System.out.println("======>"+s);
				Long ls = new Date(s.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z","")).getTime();
				if(ls<minDt) {
					minDt=ls;
				}
			}*/
			
			//日期设置参数得到一天的工作小时(毫秒表示)
			long dayWorkHours = getDayWorkTimes(timeParamVal);
			//按照生成模式任务的理论结束时间
			long endWorkTimes;
			if(taskPattern == 0) {//按照半日拆分任务
				//循环这些用例
				for (String caseVal : tempVal) {
					String s = caseVal.split("!-!")[2];
					//String e = caseVal.split("!-!")[3];
					if(s.lastIndexOf(".") != -1) {
						s = s.substring(0,s.lastIndexOf("."));
					}
					Date caseStartDt = new Date(s.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z",""));
					//Date caseEndDt = new Date(e.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z",""));
					Integer caseStartDay = caseStartDt.getDate();
					//Integer caseEndDay = caseStartDt.getDate();
					Calendar clr = Calendar.getInstance();
					clr.setTime(caseStartDt);
					Integer caseStartYear = clr.get(Calendar.YEAR);
					Integer caseStartMonth = caseStartDt.getMonth()+1;
					String mts = String.valueOf(caseStartDt.getMinutes());
					if("0".equals(mts)) {
						mts="0"+mts;
					}
					Integer checkVal = Integer.valueOf(String.valueOf(caseStartDt.getHours())+mts);
					//用例开始时间在上半天则归属到上半天的任务中去
					if(checkVal <= Integer.valueOf(amEndClock.replace(":", ""))) {
						if(!tarMap.containsKey(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日上午")) {
							List<String> tempList= new ArrayList<String>();
							tempList.add(caseVal);
							tarMap.put(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日上午", tempList);
						} else {
							List<String> tempList= tarMap.get(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日上午");
							tempList.add(caseVal);
						}
					} else {//用例开始时间在下半天归属到下半天任务中
						if(!tarMap.containsKey(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日下午")) {
							List<String> tempList= new ArrayList<String>();
							tempList.add(caseVal);
							tarMap.put(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日下午", tempList);
						} else {
							List<String> tempList= tarMap.get(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日下午");
							tempList.add(caseVal);
						}
					}
				}
				
			} else if(taskPattern == 1) {//按照日拆分任务
				
				for (String caseVal : tempVal) {
					String s = caseVal.split("!-!")[2];
					if(s.lastIndexOf(".") != -1) {
						s = s.substring(0,s.lastIndexOf("."));
					}
					Date caseStartDt = new Date(s.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z",""));
					Calendar clr = Calendar.getInstance();
					clr.setTime(caseStartDt);
					Integer caseStartYear = clr.get(Calendar.YEAR);
					Integer caseStartMonth = caseStartDt.getMonth()+1;
					Integer caseStartDay = caseStartDt.getDate();
					if(!tarMap.containsKey(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日")) {
						List<String> tempList= new ArrayList<String>();
						tempList.add(caseVal);
						tarMap.put(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日", tempList);
					} else {
						List<String> tempList= tarMap.get(key+"-"+caseStartYear+"年"+caseStartMonth+"月"+caseStartDay+"日");
						tempList.add(caseVal);
					}
				}
			} else if(taskPattern == 2) {//按照周拆分任务
				//endWorkTimes = minDt+dayWorkHours*7;
				for (String caseVal : tempVal) {
					String s = caseVal.split("!-!")[2];
					if(s.lastIndexOf(".") != -1) {
						s = s.substring(0,s.lastIndexOf("."));
					}
					Date caseStartDt = new Date(s.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z",""));
					Calendar clr = Calendar.getInstance();
					clr.setTime(caseStartDt);
					Integer caseStartYear = clr.get(Calendar.YEAR);
					Integer caseStartWeek = clr.get(Calendar.WEEK_OF_YEAR);
					if(!tarMap.containsKey(key+"-"+caseStartYear+"年第"+caseStartWeek+"周")) {
						List<String> tempList= new ArrayList<String>();
						tempList.add(caseVal);
						tarMap.put(key+"-"+caseStartYear+"年第"+caseStartWeek+"周", tempList);
					} else {
						List<String> tempList= tarMap.get(key+"-"+caseStartYear+"年第"+caseStartWeek+"周");
						tempList.add(caseVal);
					}
				}
			} else if(taskPattern == 3) {//按照月拆分任务
				for (String caseVal : tempVal) {
					String s = caseVal.split("!-!")[2];
					if(s.lastIndexOf(".") != -1) {
						s = s.substring(0,s.lastIndexOf("."));
					}
					Date caseStartDt = new Date(s.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z",""));
					Calendar clr = Calendar.getInstance();
					clr.setTime(caseStartDt);
					Integer caseStartYear = clr.get(Calendar.YEAR);
					Integer caseStartMonth = caseStartDt.getMonth()+1;
					if(!tarMap.containsKey(key+"-"+caseStartYear+"年"+caseStartMonth+"月")) {
						List<String> tempList= new ArrayList<String>();
						tempList.add(caseVal);
						tarMap.put(key+"-"+caseStartYear+"年"+caseStartMonth+"月", tempList);
					} else {
						List<String> tempList= tarMap.get(key+"-"+caseStartYear+"年"+caseStartMonth+"月");
						tempList.add(caseVal);
					}
				}
				
			}
			
		}
		return tarMap;
	}
	
	/**
	 * 得到一天工作的时间毫秒数
	 * @param timeParamVal
	 * @return
	 */
	@SuppressWarnings("deprecation")
	public static long getDayWorkTimes(String timeParamVal) {
		//上午开始时间
		Date amsDt = new Date("2013/1/1");
		amsDt.setHours(Integer.valueOf(timeParamVal.split("_")[0].split(":")[0]));
		amsDt.setMinutes(Integer.valueOf(timeParamVal.split("_")[0].split(":")[1]));
		amsDt.setSeconds(0);
		//上午结束时间
		Date ameDt = new Date("2013/1/1");
		ameDt.setHours(Integer.valueOf(timeParamVal.split("_")[1].split(":")[0]));
		ameDt.setMinutes(Integer.valueOf(timeParamVal.split("_")[1].split(":")[1]));
		ameDt.setSeconds(0);
		//上午总时间
		long amTimes = ameDt.getTime()-amsDt.getTime();
		
		//下午开始时间
		Date pmsDt = new Date("2013/1/1");
		pmsDt.setHours(Integer.valueOf(timeParamVal.split("_")[2].split(":")[0]));
		pmsDt.setMinutes(Integer.valueOf(timeParamVal.split("_")[2].split(":")[1]));
		pmsDt.setSeconds(0);
		//下午结束时间
		Date pmeDt = new Date("2013/1/1");
		pmeDt.setHours(Integer.valueOf(timeParamVal.split("_")[1].split(":")[0]));
		pmeDt.setMinutes(Integer.valueOf(timeParamVal.split("_")[1].split(":")[1]));
		pmeDt.setSeconds(0);
		//下午总时间
		long pmTimes = pmeDt.getTime()-pmsDt.getTime();
		
		long totalTimes = amTimes+pmTimes;
		return totalTimes;
		
	}
	
	/**
	 * 每月有多少天
	 * @param month
	 * @return
	 */
	public static Integer getMonthDays(Integer month) {
		Integer days = 31;
		if(month==2 || month == 4 || month == 6 || month == 9 || month == 11) {
			days = 30;
		}
		return days;
	}
	
	
	/**
	 * 2012.12.11得到每条任务的开始和结束时间
	 * @param map
	 * @return
	 */
	public static Map<String,String> getTaskTime(Map<String,List<String>> map) {
		Map<String,String> res = new HashMap<String,String>();
		Iterator itr = map.entrySet().iterator();
		//遍历Map
		while(itr.hasNext()) {
			Entry er = (Entry) itr.next();
			String key = (String) er.getKey();
			
			//初始化最大值和最小值
			Long minDt = 999999999999999999L;
			Long maxDt = 0L;
			List<String> tempVal = (List<String>) er.getValue();
			for (String str : tempVal) {
				String s = str.split("!-!")[2];
				String e = str.split("!-!")[3];
				if(s.indexOf(".") != -1) {
					s = s.substring(0,s.indexOf("."));
				}
				if(e.indexOf(".") != -1) {
					e = e.substring(0,e.indexOf("."));
				}
				Long ls = new Date(s.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z","")).getTime();
				Long le = new Date(e.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z","")).getTime();
				if(ls < minDt) {
					minDt = ls;
				}
				if(maxDt < le) {
					maxDt = le;
				}
			}
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			System.out.println(new Date(minDt));
			System.out.println(new Date(maxDt));
			System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
			String sD =  format.format(new Date(minDt));
			String eD =  format.format(new Date(maxDt));
			System.out.println(sD+"<<++++++++++++>>"+eD);
			res.put(key, sD+"_"+eD);
		}
		return res;
	}
	
	/**
	 * 2012.12.11日修改 
	 * 根据用例id和用例版本查询测试用例检测信息
	 * @param caseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table queryTestCaseDetectionInfoByIdAndVer(String caseId,Integer caseVersion) {
		Table tb = null;
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("caseVer", caseVersion);
		String ksql = "select tcdi.* from TEST_CASE_DECTION_INFO tcdi where tcdi.tESTCASEID=:caseId and tcdi.tESTCASEVER=:caseVer";
		String ksqlV2 = "select tcdi.* from TEST_CASE_DECTION_INFO tcdi where tcdi.tESTCASEID=:caseId";
		if(caseVersion != 0) {
			tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		} else {
			tb = KSQL.select(ksqlV2, map, "/metrodetection/system_code/data", null);
		}
		return tb;
	} 
	
	/**
	 * 2012.12.11日修改
	 * 根据人员id获取人员信息
	 * @param pId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table getHrTableById(String pId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("pId", pId);
		String query = "select hr.* from HR_BASE_INFO hr where hr=:pId";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}
	
	
	/**
	 * 2012.12.12日 修改增加任务名称
	 * 保存项目测试任务
	 * @param pROJECTID 			项目ID
	 * @param tASKTYPE 				任务类型
	 * @param tASKID				任务ID
	 * @param tASKNAME				任务名称
	 * @param pLANOPERATORID		计划执行人
	 * @param pLANSTARTDATE			计划开始日期
	 * @param pLANENDINGDATE		计划结束日期
	 * @param tESTTASKAREA			区域
	 * @param tESTTASKITERATIVE		迭代
	 * @param tESTTASKREASON		任务生成原因
	 * @param aCTUALOPERATORID		任务执行人
	 * @param aCTUALSTARTDATE		任务开始日期
	 * @param aCTUALENDINGDATE		任务结束日期
	 * @param tASKEXECUTE			任务执行状态
	 * @param tASKCHECK				任务执行结果
	 * @param tESTTASKFILE			测试任务下发XML文件
	 * @param tESTTASKRESULTFILE	测试任务结果XML文件
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveTestProjectTaskInfo(Integer pROJECTID,Integer tASKTYPE,Integer tASKID,String tASKNAME,String pLANOPERATORID,
			Date pLANSTARTDATE,Date pLANENDINGDATE, String tESTTASKAREA,String tESTTASKITERATIVE,Integer tESTTASKREASON,
			String aCTUALOPERATORID,Date aCTUALSTARTDATE,Date aCTUALENDINGDATE,Integer tASKEXECUTE,Integer tASKCHECK,
			String tESTTASKFILE,String tESTTASKRESULTFILE) {
		//构造参数
		Map map = new HashMap();
		map.put("pROJECTID", pROJECTID);
		map.put("tASKTYPE", tASKTYPE);
		map.put("tASKID", tASKID);
		String tName = tASKNAME.split("-")[0]+"-"+tASKID+"-"+tASKNAME.split("-")[1]+"-"+tASKNAME.split("-")[2]+"-"+tASKNAME.split("-")[3];
		map.put("tASKNAME", tName);
		map.put("pLANOPERATORID", pLANOPERATORID);
		map.put("pLANSTARTDATE", pLANSTARTDATE);
		map.put("pLANENDINGDATE", pLANENDINGDATE);
		map.put("tESTTASKAREA", tESTTASKAREA);
		map.put("tESTTASKITERATIVE", tESTTASKITERATIVE);
		map.put("tESTTASKREASON", tESTTASKREASON);
		map.put("aCTUALOPERATORID", aCTUALOPERATORID);
		map.put("aCTUALSTARTDATE", aCTUALSTARTDATE);
		map.put("aCTUALENDINGDATE", aCTUALENDINGDATE);
		map.put("tASKEXECUTE", tASKEXECUTE);
		map.put("tASKCHECK", tASKCHECK);
		map.put("tESTTASKFILE", tESTTASKFILE);
		map.put("tESTTASKRESULTFILE", tESTTASKRESULTFILE);
		
		String ksql = "insert into TEST_PROJECT_TASK_INFO tpi (tpi,tpi.pROJECTID,tpi.tASKTYPE,tpi.tASKID,tpi.tASKNAME,tpi.pLANOPERATORID," +
				" tpi.pLANSTARTDATE,tpi.pLANENDINGDATE,tpi.tESTTASKAREA,tpi.tESTTASKITERATIVE,tpi.tESTTASKREASON,tpi.aCTUALOPERATORID," +
				" tpi.aCTUALSTARTDATE,tpi.aCTUALENDINGDATE,tpi.tASKEXECUTE,tpi.tASKCHECK,tpi.tESTTASKFILE,tpi.tESTTASKRESULTFILE)" +
				" values (:guid(),:pROJECTID,:tASKTYPE,:tASKID,:tASKNAME,:pLANOPERATORID,:pLANSTARTDATE,:pLANENDINGDATE,:tESTTASKAREA,:tESTTASKITERATIVE," +
				" :tESTTASKREASON,null,null,null,:tASKEXECUTE,:tASKCHECK,:tESTTASKFILE,:tESTTASKRESULTFILE)";
		
		String updateTask = "update TEST_PROJECT_TASK_INFO tpi set  tpi.pLANSTARTDATE=:pLANSTARTDATE,tpi.pLANENDINGDATE=:pLANENDINGDATE," +
				"tpi.aCTUALOPERATORID=null," +
				"tpi.aCTUALSTARTDATE=null,tpi.aCTUALENDINGDATE=null " +
				"where tpi.tASKID=:tASKID";
		
		String valiTask = "select tpi.* from TEST_PROJECT_TASK_INFO tpi where tpi.tASKID=:tASKID";
		Table vt = KSQL.select(valiTask, map, "/metrodetection/system_code/data", null);
		if(vt != null && vt.size() > 0) {  //执行修改
			KSQL.executeUpdate(updateTask, map, "/metrodetection/system_code/data", null);
		} else {  //执行保存
			KSQL.executeUpdate(ksql, map, "/metrodetection/system_code/data", null);
		}
	}
	
	/**
	 * 导入用例时查询检测对象类别是否存在
	 * @param typeId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Table queryDetectionObjectType(String typeId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("typeId", Integer.valueOf(typeId));
		String ksql = "select dot.* from DETECTION_OBJECT_TYPE dot where dot=:typeId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	} 
	
	/**
	 * 保存检测对象类别
	 * @param typeId
	 * @param dETECTIONOBJECTCNAME
	 * @param dETECTIONOBJECTENAME
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveDetectionObjectType(String typeId,String dETECTIONOBJECTCNAME,String dETECTIONOBJECTENAME) {
		Map map = new HashMap();
		map.put("typeId", Integer.valueOf(typeId));
		map.put("dETECTIONOBJECTCNAME", dETECTIONOBJECTCNAME);
		map.put("dETECTIONOBJECTENAME", dETECTIONOBJECTENAME);
		String ksql = "insert into DETECTION_OBJECT_TYPE dot (dot,dot.dETECTIONOBJECTCNAME,dot.dETECTIONOBJECTENAME) values(:typeId,:dETECTIONOBJECTCNAME,:dETECTIONOBJECTENAME)";
		KSQL.executeUpdate(ksql, map, "/metrodetection/system_code/data", null);
	}
	
	 /** 导入用例时查询检测对象是否存在
	 * @param typeId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Table queryDetectionTypeCode(String typeId,String objId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("typeId", Integer.valueOf(typeId));
		map.put("objId", Integer.valueOf(objId));
		String ksql = "select dtc.* from DEVICE_TYPE_CODE dtc where dtc.dETECTIONOBJECTTYPE=:typeId and dtc.dEVICETYPE=:objId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	} 
	
	/**
	 * 导入用例时查询检测对象的最大值
	 * @return
	 */
	public static Integer getDetectionTypeCodeId() {
		Integer c = 1;
		String query = "select MAX(dtc) as maxId from DEVICE_TYPE_CODE dtc";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		if(tb != null) {
			Integer ig = (Integer) tb.iterator().next().getValue("maxId");
			if(ig != null) {
				c = Integer.valueOf(String.valueOf(ig));
			}
		}
		return c;
	}
	
	/**
	 * 保存检测对象
	 * @param typeId
	 * @param objId
	 * @param dETECTIONOBJECTCNAME
	 * @param dETECTIONOBJECTENAME
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveDetectionTypeCode(String dETECTIONOBJECTTYPE,String dEVICETYPE,String dEVICETYPECNAME,String dEVICETYPEENAME ) {
		Map map = new HashMap();
		map.put("dETECTIONOBJECTTYPE", Integer.valueOf(dETECTIONOBJECTTYPE));
		map.put("dEVICETYPE", Integer.valueOf(dEVICETYPE));
		map.put("dEVICETYPECNAME", dEVICETYPECNAME);
		map.put("dEVICETYPEENAME", dEVICETYPEENAME);
		String ksql = "insert into DEVICE_TYPE_CODE dtc (dtc,dtc.dETECTIONOBJECTTYPE,dtc.dEVICETYPE,dtc.dEVICETYPECNAME,dtc.dEVICETYPEENAME) values (:guid(),:dETECTIONOBJECTTYPE,:dEVICETYPE,:dEVICETYPECNAME,:dEVICETYPEENAME)";
		KSQL.executeUpdate(ksql, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 导入用例时查询检测方面类别是否存在
	 * @param typeId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table queryDetectionRangeType(String typeId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("typeId", Integer.valueOf(typeId));
		String ksql = "select drt.* from DETECTION_RANGE_TYPE drt where drt=:typeId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	}  
	
	/**
	 * 保存检测方面类别
	 * @param typeId
	 * @param dETECTIONRANGECNAME
	 * @param dETECTIONRANGEENAME
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveDetectionRangeType(String typeId,String dETECTIONRANGECNAME,String dETECTIONRANGEENAME) {
		Map map = new HashMap();
		map.put("typeId", Integer.valueOf(typeId));
		map.put("dETECTIONRANGECNAME", dETECTIONRANGECNAME);
		map.put("dETECTIONRANGEENAME", dETECTIONRANGEENAME);
		String ksql = "insert into DETECTION_RANGE_TYPE drt (drt,drt.dETECTIONRANGECNAME,drt.dETECTIONRANGEENAME) values ("+
						":typeId,:dETECTIONRANGECNAME,:dETECTIONRANGEENAME)";
		
		KSQL.executeUpdate(ksql, map, "/metrodetection/system_code/data", null);
	}
	
	/** 导入用例时查询检测方面是否存在
	 * @param typeId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table queryDetectionRangeCode(String typeId,String objId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("typeId", Integer.valueOf(typeId));
		map.put("objId", Integer.valueOf(objId));
		String ksql = "select drc.* from DETECTION_RANGE_CODE drc where drc.dETECTIONRANGETYPE=:typeId and drc.dETECTIONRANGEID=:objId";
		tb = KSQL.select(ksql, map, "/metrodetection/system_code/data", null);
		return tb;
	}  
	
	/**
	 * 导入用例时查询检测方面的最大值
	 * @return
	 */
	public static Integer getDetectionRangeCodeId() {
		Integer c = 1;
		String query = "select MAX(drc) as maxId from DETECTION_RANGE_CODE drc";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		if(tb != null) {
			Integer ig = (Integer) tb.iterator().next().getValue("maxId");
			if(ig != null) {
				c = Integer.valueOf(String.valueOf(ig));
			}
		}
		return c;
	}
	
	/**
	 * 保存检测方面
	 * @param dETECTIONRANGETYPE
	 * @param dETECTIONRANGEID
	 * @param rANGEIDCNAME
	 * @param rANGEIDENAME
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveDetectionRangeCode(String dETECTIONRANGETYPE,String dETECTIONRANGEID,String rANGEIDCNAME,String rANGEIDENAME) {
		Map map = new HashMap();
		map.put("dETECTIONRANGETYPE", Integer.valueOf(dETECTIONRANGETYPE));
		map.put("dETECTIONRANGEID", Integer.valueOf(dETECTIONRANGEID));
		map.put("rANGEIDCNAME", rANGEIDCNAME);
		map.put("rANGEIDENAME", rANGEIDENAME);
		String ksql = "insert into DETECTION_RANGE_CODE drc (drc,drc.dETECTIONRANGETYPE,drc.dETECTIONRANGEID,drc.rANGEIDCNAME,drc.rANGEIDENAME) values ("+
					   ":guid(),:dETECTIONRANGETYPE,:dETECTIONRANGEID,:rANGEIDCNAME,:rANGEIDENAME)";
		KSQL.executeUpdate(ksql, map, "/metrodetection/system_code/data", null);
	}
	
	
	/**
	 * 根据项目id得到项目下的任务所包含的用例集合
	 * @param projectId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Map<String,Integer> getTaskCaseMap(Integer projectId) {
		Map<String,Integer> tarMap = new HashMap<String,Integer>();
		//查询任务测试用例
		Map paramMap = new HashMap();
		paramMap.put("projectId", projectId);
		String querySql = "select ttci.* from TEST_TASK_CASE_INFO ttci where ttci.pROJECTID=:projectId";
		Table tb = KSQL.select(querySql, paramMap, "/metrodetection/system_code/data", null);
		//循环得到的结果
		Iterator<Row> it = tb.iterator();
		while(it.hasNext()) {
			Row row = it.next();
			//任务id
			BigDecimal taskId = (BigDecimal) row.getValue("tASKID");
			//用例版本
			BigDecimal caseVer = (BigDecimal) row.getValue("tESTCASEVER");
			//用例id
			String caseId = (String)row.getValue("tESTCASEID");
			String key = caseVer.toString()+"=_="+caseId.trim();
			if(!tarMap.containsKey(key)) {
				tarMap.put(key, taskId.intValue());
			} 
		}
		System.out.println(tarMap);
		return tarMap;
	}
	
	/**
	 * 根据申请编号,检测方案,用例版本+用例id 对应更新检测任务
	 * @param applicationNo
	 * @param schemeParam
	 * @param fcId
	 * @param taskId
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void updateCaseHouseOperation(String applicationNo,Integer schemeParam,String fcId,Integer taskId) {
		Map map = new HashMap();
		map.put("applicationNo", applicationNo);
		map.put("schemeId", schemeParam);
		map.put("fcId", fcId);
		map.put("taskId", taskId);
		
		String updateSql = "update CASE_HOUSE che set che.TASKID=:taskId where che.FAPPLICATIONNO=:applicationNo and che.SCHEMEID=:schemeId and che.FCID=:fcId";
		KSQL.executeUpdate(updateSql, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 
	 * @param applicationNo
	 * @param schemeParam
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void updateCaseHouse(String applicationNo,Integer schemeParam) {
		//根据申请序号获取项目id
		Integer proId = getProjectId(applicationNo);
		if(proId != null) {
			//获取该项目下的任务包含的用例信息
			Map<String,Integer> taskCaseMap = getTaskCaseMap(proId);
			//根据申请序号和检测方案获取用例仓库中的信息
			Map paramMap = new HashMap();
			paramMap.put("applicationNo", applicationNo);
			paramMap.put("schemeId", schemeParam);
			String querySql = "select che.* from CASE_HOUSE che where che.FAPPLICATIONNO=:applicationNo and che.SCHEMEID=:schemeId";
			Table caseHouseInfo = KSQL.select(querySql, paramMap, "/metrodetection/system_code/data", null);
			//循环这些信息
			Iterator<Row> it = caseHouseInfo.iterator();
			while(it.hasNext()) {
				Row row = it.next();
				String fcid = (String) row.getValue("FCID");
				//System.out.println("用例仓库："+fcid+"***");
				if(taskCaseMap.containsKey(fcid.trim())) {
					Integer taskId = taskCaseMap.get(fcid.trim());
					updateCaseHouseOperation(applicationNo, schemeParam, fcid, taskId);
				} else {
					//System.out.println("不包含："+fcid);
				}
			}
			
		}
	}
	

}
