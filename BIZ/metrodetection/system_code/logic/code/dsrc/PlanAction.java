
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang.StringUtils;

import com.becom.test.DetectionTask;
import com.becom.test.IndexEntity;
import com.becom.test.IndexsContent;
//import com.becom.test.MD5Utils;
import com.becom.test.PublicContent;
import com.becom.test.TaskReport;
import com.becom.test.TestCase;
import com.becom.test.TestCases;
import com.becom.test.XmlBean;
import com.justep.model.ModelUtils;
import com.justep.system.data.BizData;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;


public class PlanAction {
	
	/**
	 * 生成xml
	 * @param table
	 * @return
	 */
	/*@SuppressWarnings({ "rawtypes", "unused" })
	public static String creatXmlOld(Table table,String planOperatorID,String projectId,
			String taskArea,String taskId,String taskIterative,
			String taskPlanEndDate,String taskPlanStartDate,String operatorID,String taskStartDate,String taskEndDate,List<String> caseIdList,
			Map<String,List<String>> resMap) {
		String res = "";
		//try {
			//载入castor的映射文件
			//Mapping mapping = new Mapping();
			//FileSystem fileSystem = FileSystemWrapper.instance();
			//String p1 = fileSystem.getRealPath("/metrodetection/system_code/logic/code/src/com/becom/test/subway.xml");
			//mapping.loadMapping(p1);
			
			Map subCaseMap = PlanUtils.getAllCaseTimeMap(table);
			Map tempMap = PlanUtils.getProjectInfoByProjectId(projectId);
			String projectName = (String) tempMap.get("projectName");
			String productName = (String) tempMap.get("productName");
			String kaifa = (String) tempMap.get("kaifa");
			String weituo = (String) tempMap.get("weiduo");
			String detectionObjType = (String) tempMap.get("detectionObjType");
			String detectionObj = (String) tempMap.get("detectionObj");
			String bussinessType = (String) tempMap.get("bussinessType");
			String bussinessStage = (String) tempMap.get("bussinessStage");
			System.out.println("新取到的东西："+projectName+"---"+productName+"---"+kaifa+"---"+weituo+"---"+detectionObjType+"---"+detectionObj+"---"+bussinessType+"---"+bussinessStage);
			
			DetectionTask dt = new DetectionTask();
			//Excel中的public部分
			PublicContent pc = new PublicContent();
			pc.setPlanOperatorID(planOperatorID);
			pc.setProjectId(projectId);
			
			//2012-11-14日public节点新增的字段
			pc.setProductName(productName);
			pc.setProductName(productName);
			pc.setAssigned(weituo);
			pc.setDevelop(kaifa);
			pc.setDetectionObjType(detectionObjType);
			pc.setDetectionObj(detectionObj);
			pc.setBussinessType(bussinessType);
			pc.setBussinessStage(bussinessStage);
			
			pc.setTaskArea(taskArea);
			pc.setTaskId(taskId);
			pc.setTaskIterative(taskIterative);
			pc.setTaskPlanEndDate(taskPlanEndDate);
			pc.setTaskPlanStartDate(taskPlanStartDate);
			TaskReport tr = new TaskReport();
			tr.setOperatorID(operatorID);
			tr.setTaskCheck("0");
			tr.setTaskStatus("0");
			tr.setTaskStartDate(taskStartDate);
			tr.setTaskEndDate(taskEndDate);
			pc.setTaskReport(tr);
			
			//得到这人分配得到的子用例
			List<String> vList = resMap.get(planOperatorID); 
			List<String> subIdList = new ArrayList<String>();
			for (String sr : vList) {
				String subCaseIdV = sr.split(":")[1].split("_")[0]; 
				subIdList.add(subCaseIdV.trim());
			}
			for (String string : subIdList) {
				System.out.println("hhhhhhhhhhhhhh"+string);
			}
			
			List<IndexEntity> indexList = new ArrayList<IndexEntity>();
			//用例集信息
			TestCases tcs = new TestCases();
			List<TestCase> tcList = new ArrayList<TestCase>();
			for (String cIdL : caseIdList) {
				String cId = cIdL.split("_")[0];
				String cVer = cIdL.split("_")[1];
				//得到用例
				//Table cTable = PlanUtils.getCaseByCaseId(cId);
				Table cTable = PlanUtils.getCaseByCaseIdAndCaseVersion(cId, Integer.valueOf(cVer));
				Row rw = cTable.iterator().next();
				String str = (String) rw.getValue("tESTCASEFILE");
				
				//取得用例实体
				StringReader srd = new StringReader(str);
				Unmarshaller umsl = new Unmarshaller(TestCase.class);
				umsl.setMapping(mapping);
				TestCase tc = (TestCase) umsl.unmarshal(srd);
				TestCase tc = (TestCase) XmlBean.xmlToCase(str);
				//得到用例下的子用例
				SubTestCases scs = tc.getSubTestCases();
				List<SubTestCase> subcList = scs.getSubTestCaseList();
				System.out.println("从XML里解析出的子用例个数:"+subcList.size());
				//遍历此人分配到的子用例
				List<Integer> noHav = new ArrayList<Integer>();
				for (SubTestCase sc : subcList) {
					String subCaseId = sc.getSubTestCaseInfo().getSubCaseID().trim();
					if(subIdList.indexOf(subCaseId) == -1) {
						System.out.println("不包含子用例："+subCaseId);
						noHav.add(subcList.indexOf(sc));
					}
				}
				List<SubTestCase> subcListNoHav = new ArrayList<SubTestCase>();
				for (Integer index : noHav) {
					System.out.println("No hav:"+index);
					SubTestCase sc = subcList.get(index);
					//subcList.remove(sc);
					subcListNoHav.add(sc);
				}
				for (SubTestCase stc : subcListNoHav) {
					subcList.remove(stc);
				}
				System.out.println("处理后："+subcList.size());
				scs.setSubTestCaseList(subcList);
				tc.setSubTestCases(scs);
				tcList.add(tc);
			}
			System.out.println("用例id的list:"+tcList.size());
			tcs.setTestCaseList(tcList);
			dt.setPublicContent(pc);
			dt.setTestCases(tcs);
			
			IndexsContent indexs = new IndexsContent();
			indexs.setIndexes(indexList);
			dt.setIndexsContent(indexs);
			
			Writer wt = new StringWriter();
			Marshaller msl = new Marshaller(wt);
			msl.setMapping(mapping);
			msl.marshal(dt);
			System.out.println(wt);
			res = wt.toString();
			res = XmlBean.beanToXml(dt);
			
		*//**} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} /*catch (MarshalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ValidationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*//*
		return res;
	}
	
	
	
	*//**
	 * 制定计划
	 * @param tabParam
	 * @param applicationNo
	 * @throws ParseException 
	 *//*
	@SuppressWarnings({ "rawtypes", "unchecked", "deprecation" })
	public static void planOld(Table tabParam,String applicationNo,String currentPersonId,Integer pattern) throws ParseException{
		//取得页面传入的用例子用例的树形数据
		Table table = (Table)ModelUtils.getRequestContext().getActionContext().getParameter("tabParam");
		//取得申请编号
		String no = (String)ModelUtils.getRequestContext().getActionContext().getParameter("applicationNo");
		//System.out.println(no);
		//根据申请编号获取项目id
		Integer projectId = PlanUtils.getProjectId(no);
		//取得当前人的id（即计划指定人）
		String currentPID = (String)ModelUtils.getRequestContext().getActionContext().getParameter("currentPersonId");
		//取得生成任务的模式
		Integer taskPattern = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("pattern");
		//制定计划初始化操作(如果之前制定过计划则删除)
		PlanUtils.initProjectTask(projectId);
		PlanUtils.saveCaseHouse(table, applicationNo,null);
		//找到所有安排任务的人员和总的开始和结束时间
		Map<String,String> pMap = PlanUtils.getAllTaskHr(table);
		//获取目标Map<人员id,List<用例+":"+子用例+"_"+开始日期+"="+结束日期>>
		Map<String,List<String>> resMap = new HashMap<String,List<String>>();
		Iterator it = pMap.entrySet().iterator();
		while(it.hasNext()) {
			Entry en = (Entry)it.next();
			//人员id
			String pId = (String) en.getKey();
			
			if((!pId.equals("startMon"))&&(!pId.equals("endMon"))) {
				Iterator<Row> row = table.iterator();
				while(row.hasNext()) {
					Row r = row.next();
					String valiP = (String)r.getValue("oPERATORNAME");
					String valiRoot = (String)r.getValue("fPARENTID");
					//找到这个人对应的信息针对子用例
					if(StringUtils.isNotBlank(valiRoot) && (!"root".equals(valiRoot.trim()))) {
						if(StringUtils.isNotBlank(valiP)) {
							if(valiP.equals(pId)) {
								String subCaseId = (String)r.getValue("tv");
								String startT = (String)r.getValue("sTARTTIME");
								String endT = (String)r.getValue("eNDTIME");
								if(!resMap.containsKey(pId)) {
									List<String> subCaseList = new ArrayList<String>();
									subCaseList.add(valiRoot+":"+subCaseId+"_"+startT+"="+endT);
									resMap.put(pId, subCaseList);
								} else {
									List<String> list = resMap.get(pId);
									if(list.indexOf(pId) == -1) {
										list.add(valiRoot+":"+subCaseId+"_"+startT+"="+endT);
										System.out.println("****");
									} 
								}
							}
						}
					} 
				}
			}
		}
		
		
		
		
		
		Long minDt = 999999999999999999L;
		Long maxDt = 0L;
		int i = 0;
		//遍历计划中的每个人生成任务包
		Iterator itr = resMap.entrySet().iterator();
		while(itr.hasNext()) {
			Entry en = (Entry)itr.next();
			String key = (String) en.getKey();
			
			Long lst = 0L;
			Long let = 0L;
			List<String> val = (List<String>) en.getValue();
			//找到此人所有的用例和开始结束日期
			List<String> areaList = new ArrayList<String>();
			for (String str : val) {
				String s = str.split("_")[1].split("=")[0];
				String e = str.split("_")[1].split("=")[1];
				if(s.indexOf(".") != -1) {
					s = s.substring(0,s.indexOf("."));
				}
				if(e.indexOf(".") != -1) {
					e = e.substring(0,e.indexOf("."));
				}
				Long ls = new Date(s.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z","")).getTime();
				Long le = new Date(e.replace("-", "/").replace("-", "/").replace("T", " ").replace("Z","")).getTime();
				if(ls < minDt) {
					lst = ls;
				}
				if(maxDt < le) {
					let = le;
				}
				//区域
				String fParentId =  str.split(":")[0];
				String area = PlanUtils.getArea(fParentId);
				if(areaList.indexOf(area) == -1) {
					areaList.add(area);
				}
			}
			StringBuffer sbf = new StringBuffer();
			for (String str : areaList) {
				sbf.append(str);
			}
			//System.out.println(key+"++++"+sbf.toString());
			String areaStr = PlanUtils.getTaskArea(projectId);
			if(sbf.toString().length() > 0) {
				if(sbf.toString().length() >= 200) {
					areaStr = sbf.toString().substring(0,10);
				} else {
					areaStr = sbf.toString();
				}
			}
			//System.out.println(areaStr.length()+areaStr+"*************");
			
			//System.out.println(key+" : "+new Date(lst).toLocaleString()+" : "+new Date(let).toLocaleString());
			//找到此人所有用例的idList
			List<String> caseIdList = PlanUtils.getCaseIdList(table,key);
			System.out.println("AAAAAAAAAAAAA:"+caseIdList.size());
			String sD =  new Date(lst).toLocaleString().replace("年","-").replace("月","-").replace("日","");
			String eD =  new Date(let).toLocaleString().replace("年","-").replace("月","-").replace("日","");
			
			
			//保存项目测试任务
			Integer tv = PlanUtils.getMaxTaskId();
			Table valiPT = PlanUtils.getTestProjectTaskInfoByProIdAndPId(Integer.valueOf(projectId),key);
			//执行修改
//			if(valiPT != null && valiPT.size() > 0) {
//				String xmlRes = creatXml(table, currentPID, String.valueOf(projectId), areaStr,String.valueOf( tv+1), "第一轮",sD, eD, 
//					key, sD, eD, caseIdList,resMap);
//				
//				List<String> tempVal = (List<String>) en.getValue();
//				String subCaseId = tempVal.get(0).split(":")[1].split("_")[0];
//				//得到子用例信息
//				Table tb = PlanUtils.getSubcaseIdBySubcaseId(subCaseId);
//				if(tb != null && tb.size() > 0) {
//					String caseId = (String) tb.iterator().next().getValue("tESTCASEID");
//					//根据项目和用例id得到任务信息
//					Table tl = PlanUtils.getTestProjectTaskInfoByProIdAndCaseId(projectId, caseId,key);
//					if(tl != null && tl.size() > 0) {
//						BigDecimal tId = (BigDecimal) PlanUtils.getTestProjectTaskInfoByProIdAndCaseId(projectId, caseId,key).iterator().next().getValue("tASKID");
//						PlanUtils.saveTestProjectTaskInfo(projectId, 1, Integer.valueOf(tId.toString()), currentPID,new Timestamp( new Date(lst).getTime()), new Timestamp(new Date(let).getTime()) ,"sdfsdf", 
//								"第一轮", 1, key,new Timestamp( new Date(lst).getTime()),  new Timestamp(new Date(let).getTime()), 0, 
//								0, xmlRes, null);
//					}
//				}
				
//			} else {//执行保存
				String xmlRes = creatXmlOld(table, key, String.valueOf(projectId), areaStr,String.valueOf( tv+1), "第一轮",eD, sD, 
						"00000000", sD, eD, caseIdList,resMap);
				PlanUtils.saveTestProjectTaskInfo(projectId, 1, tv+1, key,new Timestamp( new Date(lst).getTime()), new Timestamp(new Date(let).getTime()) ,areaStr, 
						"第一轮", 1, key,new Timestamp( new Date(lst).getTime()),  new Timestamp(new Date(let).getTime()), 0, 
						0, xmlRes, null);
				//人员占用信息入库
				PlanUtils.saveHrOccupyInfo(key, tv+1, sD, eD, "");
				//冗余测试用例和子用例信息
				List<String> pSubCaseList = PlanUtils.getAllSubCaseIdList(table, key);
				for (String cIdL : caseIdList) {
					String cId = cIdL.split("_")[0];
					String cVer = cIdL.split("_")[1];
					//Table ctb = PlanUtils.getCaseByCaseId(cId);
					Table ctb = PlanUtils.getCaseByCaseIdAndCaseVersion(cId, Integer.valueOf(cVer));
					Integer tESTCASEVER = (Integer) ctb.iterator().next().getValue("tESTCASEVER");
					String tESTCASEID = (String) ctb.iterator().next().getValue("tESTCASEID");
					PlanUtils.saveTestTaskCaseInfo(no, cId, BigDecimal.valueOf(tv+1));
					//Table tb = PlanUtils.getSubTestCaseByCaseId(cId);
					Table tb = PlanUtils.getSubTestCaseByCaseIdAndCaseVersion(cId, Integer.valueOf(cVer));
					Iterator<Row> scI = tb.iterator();
					while(scI.hasNext()) {
						Row scR = scI.next();
						String sUBTESTCASEID =(String) scR.getValue("sUBTESTCASEID");
						String sUBTESTCASENAME=(String) scR.getValue("sUBTESTCASENAME");
						Integer sUBTESTCASEPRIOR=Integer.valueOf(((BigDecimal) scR.getValue("sUBTESTCASEPRIOR")).toString());
						Integer sUBTESTCASEORDER=Integer.valueOf(((BigDecimal) scR.getValue("sUBTESTCASEORDER")).toString());;
						Integer sUBTESTCASETIME=Integer.valueOf(((BigDecimal) scR.getValue("sUBTESTCASETIME")).toString());;
						Integer tIMEUNITID=Integer.valueOf(((BigDecimal) scR.getValue("tIMEUNITID")).toString());;
						System.out.println(sUBTESTCASEPRIOR);
						//String sUBTESTCASEDESC=(String) scR.getValue("sUBTESTCASEDESC");
						if(pSubCaseList.indexOf(sUBTESTCASEID.trim()) != -1) {
							System.out.println("<------------->"+new Date(0));
							SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
							PlanUtils.saveTestTaskExecuteSubCase(projectId, BigDecimal.valueOf(tv+1), tESTCASEVER, tESTCASEID, sUBTESTCASEID, sUBTESTCASENAME, sUBTESTCASEPRIOR, sUBTESTCASEORDER, sUBTESTCASETIME, tIMEUNITID,
									0, 0, 0, sdf.parse("1970-01-01 00:00:00"), "", new Date());
							
							PlanUtils.saveTestTaskExecuteStep(projectId, BigDecimal.valueOf(tv+1), sUBTESTCASEID);
						}
					}
					
				}
			//}
			
			
			
			i++;
		}
		
		
	}*/
	
	
	/**
	 * 查询房间和工具的占用信息
	 * @param range
	 * @param concept
	 * @param select
	 * @param from
	 * @param aggregate
	 * @param dataModel
	 * @param fnModel
	 * @param condition
	 * @param distinct
	 * @param idColumn
	 * @param filter
	 * @param limit
	 * @param offset
	 * @param columns
	 * @param orderBy
	 * @param aggregateColumns
	 * @param variables
	 * @return
	 */
	public static Table queryTaskRoomDevice(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	/**
	 * 查询房间和区域构建树形结构
	 * @param range
	 * @param concept
	 * @param select
	 * @param from
	 * @param aggregate
	 * @param dataModel
	 * @param fnModel
	 * @param condition
	 * @param distinct
	 * @param idColumn
	 * @param filter
	 * @param limit
	 * @param offset
	 * @param columns
	 * @param orderBy
	 * @param aggregateColumns
	 * @param variables
	 * @return
	 */
	public static Table queryRoomArea(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		Table tb = null;
		String query = "select rai.FID as fid,"+
						"RAI.ROOM_ID as parentId,"+
						"RAI.ROOM_AREA as area "+
						"from ROOM_APPLY_INFO rai"+
						" UNION "+
						"select CONCAT(CONCAT(DRI.ROOM_ID, '**'),DRI.ROOM_CNAME) as fid,"+
						"null as parentId,"+
						"null as area "+
						"from DETECTION_ROOM_INFO dri";
		KSQL.select(query, null, dataModel, null);
		return tb;
	}
	
	
	
	
	/**
	 * 2012.12.11日修改生成xml
	 * @param table
	 * @param planOperatorID
	 * @param projectId
	 * @param taskArea
	 * @param taskId
	 * @param taskIterative
	 * @param taskPlanEndDate
	 * @param taskPlanStartDate
	 * @param operatorID
	 * @param taskStartDate
	 * @param taskEndDate
	 * @param caseIdList
	 * @param resMap
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unused" })
	public static String creatXml(Table table,String planOperatorID,String projectId,
			String taskArea,String taskId,String taskIterative,
			String taskPlanEndDate,String taskPlanStartDate,String operatorID,String taskStartDate,String taskEndDate,
			String resKey,Integer taskPattern,String timeParamVal) {
		String res = "";
			
		Map tempMap = PlanUtils.getProjectInfoByProjectId(projectId);
		String projectName = (String) tempMap.get("projectName");
		String productName = (String) tempMap.get("productName");
		String kaifa = (String) tempMap.get("kaifa");
		String weituo = (String) tempMap.get("weiduo");
		String detectionObjType = (String) tempMap.get("detectionObjType");
		String detectionObj = (String) tempMap.get("detectionObj");
		String bussinessType = (String) tempMap.get("bussinessType");
		String bussinessStage = (String) tempMap.get("bussinessStage");
		System.out.println("新取到的东西："+projectName+"---"+productName+"---"+kaifa+"---"+weituo+"---"+detectionObjType+"---"+detectionObj+"---"+bussinessType+"---"+bussinessStage);
		
		DetectionTask dt = new DetectionTask();
		//Excel中的public部分
		PublicContent pc = new PublicContent();
		pc.setPlanOperatorID(planOperatorID);
		pc.setProjectId(projectId);
		
		//2012-11-14日public节点新增的字段
		pc.setProjectName(projectName);
		pc.setProductName(productName);
		pc.setAssigned(weituo);
		pc.setDevelop(kaifa);
		pc.setDetectionObjType(detectionObjType);
		pc.setDetectionObj(detectionObj);
		pc.setBussinessType(bussinessType);
		pc.setBussinessStage(bussinessStage);
		
		pc.setTaskArea(taskArea);
		pc.setTaskId(taskId);
		pc.setTaskName(resKey);
		pc.setTaskIterative(taskIterative);
		pc.setTaskPlanEndDate(taskPlanEndDate);
		pc.setTaskPlanStartDate(taskPlanStartDate);
		TaskReport tr = new TaskReport();
		tr.setOperatorID("");
		tr.setTaskCheck("0");
		tr.setTaskStatus("0");
		tr.setTaskStartDate("");
		tr.setTaskEndDate("");
		pc.setTaskReport(tr);
		
		
		//用例集信息
		TestCases tcs = new TestCases();
		//映射信息
		List<IndexEntity> indexList = new ArrayList<IndexEntity>();
		//初始化用例List
		List<TestCase> tcList = new ArrayList<TestCase>();
		Map<String, List<String>> resMap = PlanUtils.getAllTaskGroup(table,taskPattern,timeParamVal);
		List<String> resList = (List<String>)resMap.get(resKey);
		
		for (String str : resList) {
			String caseId = str.split("!-!")[0];
			String caseVer = str.split("!-!")[1];
			Table caseTable = PlanUtils.getCaseByCaseIdAndCaseVersion(caseId, Integer.valueOf(caseVer));
			Iterator iterator = caseTable.iterator();
			while(iterator.hasNext()) {
				Row row = (Row) iterator.next();
				String caseFile = (String) row.getValue("tESTCASEFILE");
				if(StringUtils.isNotBlank(caseFile)) {
					TestCase tc = (TestCase) XmlBean.xmlToCase(caseFile);
					tcList.add(tc);
					
					Integer cVer=(Integer) row.getValue("tESTCASEVER");
					//根据用例id和用例版本取得子用例信息
					Table tb = PlanUtils.getSubTestCaseByCaseIdAndCaseVersion(caseId, cVer);
					Iterator<Row> it = tb.iterator();
					while(it.hasNext()) {
						Row r = it.next();
						//子用例id
						String subCaseId = (String) r.getValue("sUBTESTCASEID");
						Table indexTable = PlanUtils.getIndexByCaseIdAndSubCaseId(cVer,caseId, subCaseId);
						Iterator<Row> itr = indexTable.iterator();
						while(itr.hasNext()) {
							Row rw = itr.next();
							Integer indexId = (Integer) rw.getValue("iNDEXID");
							String indexDes = (String) rw.getValue("iNDEXVALUEDESC");
							IndexEntity index = new IndexEntity();
							index.setIndexDesc(indexDes);
							index.setIndexValue(String.valueOf(indexId));
							indexList.add(index);
						}
					}
				}
			}
			
		}
		
		tcs.setTestCaseList(tcList);
		dt.setPublicContent(pc);
		dt.setTestCases(tcs);
		//指标和映射部分
		IndexsContent indexs = new IndexsContent();
		indexs.setIndexes(indexList);
		dt.setIndexsContent(indexs);
		//dt.setMd5("");
		
		/*Writer wt = new StringWriter();
		Marshaller msl = new Marshaller(wt);
		msl.setMapping(mapping);
		msl.marshal(dt);
		System.out.println(wt);
		res = wt.toString();*/
		res = XmlBean.beanToXml(dt);
		System.out.println(res);
		
		/*String resMd5 = Md5Encrypt.md5(res.substring(0,res.lastIndexOf("<md5>")));
		dt.setMd5(resMd5);
		res=XmlBean.beanToXml(dt);
		System.out.println("加密值："+resMd5);*/
		
		return res;
	}
	public static void main(String[] args) {
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			System.out.println(new Timestamp(df.parse("2013-7-29 9:00:00").getTime()));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 2012.12.11日修改打包任务
	 * @param tabParam
	 * @param applicationNo
	 * @param currentPersonId
	 * @param pattern
	 * @throws ParseException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static String plan(Table tabParam,String applicationNo,String currentPersonId,Integer pattern,String timeParam,String modeCode,Integer schemeParam) throws ParseException{
		String res = "success";
		//取得页面传入的用例子用例的树形数据
		Table table = (Table)ModelUtils.getRequestContext().getActionContext().getParameter("tabParam");
		//取得申请编号
		String no = (String)ModelUtils.getRequestContext().getActionContext().getParameter("applicationNo");
		//System.out.println(no);
		//根据申请编号获取项目id
		Integer projectId = PlanUtils.getProjectId(no);
		//取得当前人的id（即计划指定人）
		String currentPID = (String)ModelUtils.getRequestContext().getActionContext().getParameter("currentPersonId");
		//取得生成任务的模式
		Integer taskPattern = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("pattern");
		//String disStyleNo = taskPattern.split("_")[1];
		//System.out.println("******"+disStyleNo);
		//取得时间的设置
		String timeParamVal = (String) ModelUtils.getRequestContext().getActionContext().getParameter("timeParam");
		//取得任务环节是制定计划环节还是调整计划环节
		String modeCodeVal = (String) ModelUtils.getRequestContext().getActionContext().getParameter("modeCode");
		String diedai = "第1轮";
		//调整计划环节  只把相关占用信息删除 原任务不删 只是更改状态
		if(StringUtils.isNotBlank(modeCodeVal) && "modify".equals(modeCodeVal)) {
			PlanUtils.modifyInit(projectId);
		} else if(StringUtils.isNotBlank(modeCodeVal) && "huigui".equals(modeCodeVal)) {
			//回归计划
			Integer countDD = PlanUtils.getIteratorCou(Integer.valueOf(applicationNo));
			diedai = "第"+countDD+"轮";
			PlanUtils.modifyTaskStatus(projectId,diedai);
			PlanUtils.saveCaseHouse(table, applicationNo,timeParamVal,schemeParam);
		} else {
			//制定计划环节  (如果之前制定过计划则删除)
			PlanUtils.initProjectTask(projectId);
			PlanUtils.saveCaseHouse(table, applicationNo,timeParamVal,schemeParam);
		}
		
		//任务区域
		String areaStr = PlanUtils.getTaskArea(projectId);
		//按照检测方面类别+检测对象+人员id得到目标Map
		Map<String,List<String>> pMap = PlanUtils.getAllTaskGroup(table,taskPattern,timeParamVal);
		System.out.println("******"+pMap.size());
		System.out.println("******"+pMap);
		Map<String,String> tMap = PlanUtils.getTaskTime(pMap);
		
		Boolean bl = true;
		//按照检测方面类别+检测对象+人员id生成任务
		Iterator it = pMap.entrySet().iterator();
		while(it.hasNext()) {
			Entry ery = (Entry) it.next();
			String resKey = (String) ery.getKey();
			List<String> temp = (List<String>) ery.getValue();
			//得到开始和结束时间
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String str = (String) tMap.get(resKey);
			String taskPlanStartDate = str.split("_")[0];
			String taskPlanEndDate = str.split("_")[1];
			System.out.println(taskPlanStartDate+"《《《======》》》"+taskPlanEndDate);
			String planOperatorID = temp.get(0).split("!-!")[4];
			Integer sn = PlanUtils.getMaxTaskId();
			
			//人员占用信息入库
			bl = PlanUtils.valiHrDate(planOperatorID, taskPlanStartDate, taskPlanEndDate);
			System.out.println("-------->"+bl);
			if(bl) {
				//生成xml文件
				String xmlFile = creatXml(table, planOperatorID, String.valueOf(projectId), areaStr, String.valueOf(sn+1), diedai, taskPlanEndDate, taskPlanStartDate, 
						"00000000", taskPlanStartDate, taskPlanEndDate, resKey,taskPattern,timeParamVal);
				
				//生成任务
				//System.out.println("------->"+new Timestamp(df.parse(taskPlanStartDate).getTime())+":" +new Timestamp(df.parse(taskPlanEndDate).getTime()));
//				PlanUtils.saveTestProjectTaskInfo(projectId, 1, sn+1, resKey, planOperatorID, new Timestamp(df.parse(taskPlanStartDate).getTime()), new Timestamp(df.parse(taskPlanEndDate).getTime()), areaStr, 
//						diedai, 1, planOperatorID, new Timestamp(df.parse(taskPlanStartDate).getTime()), new Timestamp(df.parse(taskPlanEndDate).getTime()), 0, 0, xmlFile, 
//						null);
				System.out.println("任务名："+resKey);
				PlanUtils.saveTestProjectTaskInfo(projectId, 1, sn+1, resKey, planOperatorID, new Timestamp(df.parse(taskPlanStartDate).getTime()), new Timestamp(df.parse(taskPlanEndDate).getTime()), areaStr, 
						diedai, 1, null, null, null, -1, 0, xmlFile, null);
				System.out.println("JJJJJJJJ"+diedai);
				PlanUtils.saveHrOccupyInfo(planOperatorID, sn+1, taskPlanStartDate, taskPlanEndDate, "");
				/**冗余测试用例和子用例信息**/
				//得到本条任务的用例
				for (String resVal : temp) {
					//用例id
					String cId = resVal.split("!-!")[0];
					//用例版本
					String cVer = resVal.split("!-!")[1];
					//根据用例id和用例版本得到用例对象
					Table ctb = PlanUtils.getCaseByCaseIdAndCaseVersion(cId, Integer.valueOf(cVer));
					Iterator tarIt = ctb.iterator();
					while(tarIt.hasNext()) {
						Row trw = (Row) tarIt.next();
						Integer tESTCASEVER = (Integer) trw.getValue("tESTCASEVER");
						String tESTCASEID = (String) trw.getValue("tESTCASEID");
						//根据检测方案id和用例id和任务id将测试用例信息冗余到测试任务用例里面去
						PlanUtils.saveTestTaskCaseInfo(no, cId, BigDecimal.valueOf(sn+1),projectId,tESTCASEVER);
						//根据用例id和用例版本查找子用例信息
						Table tb = PlanUtils.getSubTestCaseByCaseIdAndCaseVersion(cId, tESTCASEVER);
						//遍历子用例冗余信息
						Iterator<Row> scI = tb.iterator();
						while(scI.hasNext()) {
							Row scR = scI.next();
							String sUBTESTCASEID =(String) scR.getValue("sUBTESTCASEID");
							String sUBTESTCASENAME=(String) scR.getValue("sUBTESTCASENAME");
							Integer sUBTESTCASEPRIOR=Integer.valueOf(((BigDecimal) scR.getValue("sUBTESTCASEPRIOR")).toString());
							Integer sUBTESTCASEORDER=Integer.valueOf(((BigDecimal) scR.getValue("sUBTESTCASEORDER")).toString());;
							Double sUBTESTCASETIME=Double.valueOf(((BigDecimal) scR.getValue("sUBTESTCASETIME")).toString());;
							Integer tIMEUNITID=Integer.valueOf(((BigDecimal) scR.getValue("tIMEUNITID")).toString());;
							System.out.println(sUBTESTCASEPRIOR);
							//将子用例信息冗余到测试任务执行子用例信息
							PlanUtils.saveTestTaskExecuteSubCase(projectId, BigDecimal.valueOf(sn+1), tESTCASEVER, tESTCASEID, sUBTESTCASEID, sUBTESTCASENAME, sUBTESTCASEPRIOR, sUBTESTCASEORDER, sUBTESTCASETIME, tIMEUNITID,
									0, 0, 0.0, df.parse("1970-01-01 00:00:00"), "", new Date());
							//子用例步骤冗余测试任务执行步骤信息
							PlanUtils.saveTestTaskExecuteStep(projectId, BigDecimal.valueOf(sn+1), sUBTESTCASEID,cId,BigDecimal.valueOf(tESTCASEVER));
						}
					}
					
				}
			} else {
				PlanUtils.initProjectTask(projectId);
				PlanUtils.clearCaseHouse(applicationNo,schemeParam);
				res = "人员任务时间冲突";
				break;
			}
		}
		//对应更新用例仓库中的检测任务
		PlanUtils.updateCaseHouse(applicationNo, schemeParam);
		if(bl) {
			System.out.println("成功制定计划");
		} else {
			System.out.println("制定计划失败");
		}
		return res;
	}
	

}
