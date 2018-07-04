import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.io.Writer;
import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.naming.NamingException;

import org.apache.commons.lang.StringUtils;
import org.apache.tools.zip.ZipEntry;
import org.apache.tools.zip.ZipFile;
import org.apache.tools.zip.ZipOutputStream;
import org.castor.util.StringUtil;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.QName;
import org.exolab.castor.mapping.Mapping;
import org.exolab.castor.xml.Marshaller;

import com.becom.test.DetectionTask;
import com.becom.test.FuncDto;
import com.becom.test.FuncList;
import com.becom.test.Permission;
import com.becom.test.Step;
import com.becom.test.StepReoprt;
import com.becom.test.Steps;
import com.becom.test.SubTestCase;
import com.becom.test.SubTestCaseReport;
import com.becom.test.SubTestCases;
import com.becom.test.TaskReport;
import com.becom.test.TestCase;
import com.becom.test.TestCaseRollbackRecord;
import com.becom.test.TestCaseRollbackRecords;
import com.becom.test.TestCases;
import com.becom.test.UserDto;
import com.becom.test.XmlBean;
import com.justep.filesystem.FileSystemWrapper;
import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.data.BizData;
import com.justep.system.data.DataPermission;
import com.justep.system.data.KSQL;
import com.justep.system.data.ModifyState;
import com.justep.system.data.Row;
import com.justep.system.data.SQL;
import com.justep.system.data.Table;
import com.justep.system.util.BizUtils;
import com.justep.util.Utils;

public class System_code {


	public static Table myQueryToolSortCode(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryScheduleHrName(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryScheduleHrOccupyInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryDectionBasedOnInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQuerylist(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryTestBaseCaseInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myTestCaseBaseDectionInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryScheduleRoomOccupy(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryProjectMember(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryRoomSchedule(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryIndexIdBaseInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table ROOM_APPLY_INFO(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table roomtype(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryAllRoleOfOperator(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryHrOccupy(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static String downloadTask(List taskID) throws IOException{
		List taskList = taskID;
		String st = "";
		String url = "";
		ZipOutputStream zipos = null;
		DataOutputStream os = null;
		try {
			for(int i=0; i<taskList.size(); i++){
				String nameCode = taskList.get(i).toString();
				String kSqlSelect = "select test, test.tESTTASKFILE, test.aCTUALOPERATORID from TEST_PROJECT_TASK_INFO test where test.tASKID = "+nameCode;
				Table table = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
				if(table.iterator().next().getText("tESTTASKFILE")==null){
					return null;
				}else{
					String taskXML = table.iterator().next().getText("tESTTASKFILE");
					String uesrID = table.iterator().next().getString("aCTUALOPERATORID");
					String projectID = table.iterator().next().getString("test");
					if(i==0){
//						st = System_code.class.getResource("").toString();
//						st = st.split("BIZ")[0];
//						st = st.substring(6, st.length());
//						url = "UI"+File.separator+"projectPlan"+File.separator+uesrID+"-"+projectID+"project.zip";
//						st = st+url;
						//url = "/var/X5.2.3_ent/model/BIZ/xmlupload/"+uesrID+"-"+projectID+"project.zip";
						//st = "/var/X5.2.3_ent/model/UI/xmlupload/"+uesrID+"-"+projectID+"project.zip";
						st = PropertiesAction.PropertiesA("uploadTaskUrl")+ File.separator+uesrID+"-"+projectID+"project.zip";
						zipos=new ZipOutputStream(new FileOutputStream(st)); 
						//System.out.println(url+"_________________________"+zipos);
						zipos.setMethod(ZipOutputStream.DEFLATED);
						//st = "/UI/xmlupload/"+uesrID+"-"+projectID+"project.zip";;
						st = PropertiesAction.PropertiesA("downloadTaskUrl")+ File.separator+uesrID+"-"+projectID+"project.zip";
					}
					byte[] c = taskXML.getBytes("utf-8");
					
					zipos.putNextEntry((org.apache.tools.zip.ZipEntry) new ZipEntry(nameCode+".xml")); 
					
					os=new DataOutputStream(zipos); 
			
					os.write(c);
					String kSqlUpdate = "update TEST_PROJECT_TASK_INFO test set test.tASKEXECUTE = 1 where test.tASKID = '"+nameCode+"' and test.tASKEXECUTE = 0";
					KSQL.executeUpdate(kSqlUpdate, null, "/metrodetection/system_code/data", null);
				}
			}
		} catch (Exception e) {
		}finally{
			os.close();
		}
		return st;
	}
	
	public static Table myQueryIndexIdApplyInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}


	public static Table myQueryTools(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myIndexValue(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table queryProject(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryIndexSystemValue(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static boolean formatDate(String date, Integer type){
		boolean bool = true;
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			SimpleDateFormat sdfdate = new SimpleDateFormat("yyyy-MM-dd");
			
			if(type==0){
				sdf.parse(date);
			}else{
				sdfdate.parse(date);
			}
		} catch (Exception e) {
			bool = false;
		}
		return bool;
	}
	
	public static String uploadTask(Document processes){
		List<Element> itemList = processes.selectNodes("//item");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat sdfdate = new SimpleDateFormat("yyyy-MM-dd");
		Date startdate = null;
		Date enddate = null;
		Timestamp tstart = null;
		Timestamp tend = null;
		String str = "";
		boolean bool = true;
		List<String> filedelete = new ArrayList<String>();
		try {
			for (Element item : itemList){
//				String taskID = item.attributeValue(new QName("taskID"));
				
				String fileName = item.attributeValue(new QName("file"));
				String fileURL = item.attributeValue(new QName("fileURL"));
				//String fileURL = PropertiesAction.PropertiesA("importValueFileNameUrl");
				String type = fileName.substring(fileName.length()-3, fileName.length());
				if (type.toUpperCase().equals("XML")) {
					File file = new File(fileName);
//					InputStream is = new FileInputStream(file);
//					InputStreamReader isr = new InputStreamReader(is); 
//					BufferedReader br = new BufferedReader(isr);
//					String zipstr = "";
//					while(br.ready()){
//						zipstr = zipstr + new String(br.readLine().getBytes("GBK"),"UTF-8");
//					}
//					System.out.println(zipstr);
					char[] tempbytes = new char[1];   
					int byteread = 0;   
					
					InputStream in = new FileInputStream(fileName);
					InputStreamReader aa = new InputStreamReader(in,"UTF-8");
					
					String st = "";
					while ((byteread = aa.read(tempbytes)) != -1) {
						st = st + new String(tempbytes);
					}
					aa.close();
					in.close();
					//System.out.println(st);
					
					if(st.indexOf("<md5>") != -1) {
						String valiStr = st.split("  <md5>")[0];
						String tarStr = st.substring(st.lastIndexOf("<md5>"),st.lastIndexOf("</md5>")+6);
						String md5Val = tarStr.substring(5,tarStr.lastIndexOf("</md5>"));
						//st=st.replace(tarStr, "");
						//System.out.println(valiStr+"</DetectionTask>");
						
						
						//开始校验
						String valiMd5 = Md5Encrypt.md5(valiStr);
						System.out.println(valiMd5);
						if(!valiMd5.trim().equals(md5Val)) {
							str = "Md5校验不通过!请核对";
							break;
						}
					}
					
					
					//获取上传文件的公共信息
					DetectionTask dt = XmlBean.xmlToDetectionTask(st);
					//获取上传文件的任务ID
					String task = dt.getPublicContent().getTaskId();
					
					String ksqlSelect = "select sa, sa.sFID from SA_OPOrg sa where sa.sFID = :currentPersonMemberFID()";
					Table table = KSQL.select(ksqlSelect, null, "/system/data", null);
					Row row = table.iterator().next();
					String orgID = row.getString("sa");
					String sFID = row.getString("sFID");
					
					ksqlSelect = "select test.tASKID from TEST_PROJECT_TASK_INFO test OPTIONAL JOIN "
										+" OPERATOR_PASSWORD oper on test.pLANOPERATORID = oper "
										+" where oper.oRGID = '"+orgID+"'";
					table = KSQL.select(ksqlSelect, null, "/metrodetection/system_code/data", null);
					Iterator<Row> rs = table.iterator(); 
					row = null;
					while (rs.hasNext()){
						row = rs.next();
						String taskID = row.getValue("tASKID").toString();
						if(taskID.equals(task)){
							bool = false;
						}
					}
					if(bool){
						str = "你没有上传任务计划中的任务，请检查！";
					}else{
						System.out.println("true");
						//获取上传的文件的测试任务的状态信息
						TaskReport tp = dt.getPublicContent().getTaskReport();
						//测试任务的执行状态
						String taskStatus = tp.getTaskStatus();
						if(StringUtils.isNotEmpty(taskStatus) && !taskStatus.equals("")){
							
							//测试任务的任务执行人
							String operatorID = tp.getOperatorID();
							//测试任务的执行开始时间
							String tpStartDate = tp.getTaskStartDate();
							if(tpStartDate.equals("") || tpStartDate==null){
								str = "TaskStartDate不能为空!";
								break;
							}
							bool = formatDate(tpStartDate, 0);
							if(!bool){
								str = "TaskStartDate的数据格式错误，请检查!";
								break;
							}
							startdate = sdf.parse(tpStartDate);
							tstart = new Timestamp(startdate.getTime());
							
							//测试任务的执行结束时间
							String tpEndDate = tp.getTaskEndDate();
							if(tpEndDate.equals("") || tpEndDate==null){
								str = "TaskEndDate不能为空!";
								break;
							}
							bool = formatDate(tpEndDate, 0);
							if(!bool){
								str = "TaskEndDate的数据格式错误，请检查!";
								break;
							}
							enddate = sdf.parse(tpEndDate);
							tend = new Timestamp(enddate.getTime());
							//测试任务的执行结果
							String taskCheck = tp.getTaskCheck();
							//将测试任务的测试结果导入数据库
							Map map = new HashMap();
							map.put("tESTTASKRESULTFILE", st);
							map.put("aCTUALOPERATORID", operatorID);
							map.put("aCTUALSTARTDATE", tstart);
							map.put("aCTUALENDINGDATE", tend);
							map.put("tASKEXECUTE", Integer.parseInt(taskStatus));
							map.put("tASKCHECK", Integer.parseInt(taskCheck));
							map.put("tASKID", Integer.parseInt(task));
							String updateSql = "update TEST_PROJECT_TASK_INFO test set test.tESTTASKRESULTFILE=:tESTTASKRESULTFILE, test.aCTUALOPERATORID=:aCTUALOPERATORID, test.aCTUALSTARTDATE=:aCTUALSTARTDATE, test.aCTUALENDINGDATE=:aCTUALENDINGDATE, test.tASKEXECUTE=:tASKEXECUTE, test.tASKCHECK=:tASKCHECK where test.tASKID=:tASKID";
							int i = KSQL.executeUpdate(updateSql, map, "/metrodetection/system_code/data", null);
							//取出测试任务的用例集
							TestCases tcases = dt.getTestCases();
							//取出用例集里面的用例
							List<TestCase> tcase = tcases.getTestCaseList();
							for(TestCase tca : tcase){
								//取出用例里面的子用例集
								SubTestCases subtcs = tca.getSubTestCases();
								//取出用例ID
								String caseID = tca.getTestCaseInfo().getCaseId();
								List<SubTestCase> stcList = subtcs.getSubTestCaseList();
								//遍历子用例集
								for(SubTestCase subtc : stcList){
									//取出子用例的执行信息
									SubTestCaseReport stcreport = subtc.getSubTestCaseReport();
									//取出子用例的执行情况
									String caseStatus = stcreport.getSubCaseStatus().substring(0, 1);
									if(!caseStatus.equals("0")){
										//取出子用例的ID
										String subcaseID = subtc.getSubTestCaseInfo().getSubCaseID();							
										//取出子用例的检查情况
										String caseCheck = stcreport.getSubCaseCheck().substring(0, 1);
										//取出子用例的实际执行耗时
										String caseTime = stcreport.getSubCaseElapsedTime();
										//取出子用例的实际执行日期时间
										String castStart = stcreport.getSubCaseStartTime().replaceAll("/", "-");;
										if(castStart.equals("") || castStart==null){
											str = "SubCaseStartTime不能为空!";
											break;
										}
										bool = formatDate(castStart, 0);
										if(!bool){
											str = "SubCaseStartTime的数据格式错误，请检查!";
											break;
										}
										startdate = sdf.parse(castStart);
										tstart = new Timestamp(startdate.getTime());
										//取出子用例的执行描述
										
										//取出子用例的上报日期
										String caseReport = stcreport.getSubCaseReportDate().replaceAll("/", "-");
										if(caseReport.equals("") || caseReport==null){
											str = "SubCaseReportDate不能为空!";
											break;
										}
										bool = formatDate(caseReport, 1);
										if(!bool){
											str = "SubCaseReportDate的数据格式错误，请检查!";
											break;
										}
										enddate = sdfdate.parse(caseReport);
										tend = new Timestamp(enddate.getTime());
										
										//上传子用例的执行结果信息
										map = new HashMap();
										map.put("sUBTESTCASEEXECUTE", Integer.parseInt(caseStatus));
										map.put("sUBTESTCASECHECK", Integer.parseInt(caseCheck));
										map.put("aCTUALSUBTESTCASETIME", Double.valueOf(caseTime));
										map.put("eXECUTEDATETIME", tstart);
										map.put("sUBTESTCASEDESC", "好");
										map.put("rEPORTDATE", tend);
										map.put("tASKID", Integer.parseInt(task));
										map.put("tESTCASEID", caseID);
										map.put("sUBTESTCASEID", subcaseID);
										updateSql = "update TEST_TASK_EXECUTE_SUB_CASE test set test.sUBTESTCASEEXECUTE=:sUBTESTCASEEXECUTE, test.sUBTESTCASECHECK=:sUBTESTCASECHECK, test.aCTUALSUBTESTCASETIME=:aCTUALSUBTESTCASETIME, test.eXECUTEDATETIME=:eXECUTEDATETIME, test.sUBTESTCASEDESC=:sUBTESTCASEDESC, test.rEPORTDATE=:rEPORTDATE "
													+" where test.tASKID=:tASKID and test.tESTCASEID=:tESTCASEID and test.sUBTESTCASEID=:sUBTESTCASEID";
										i = KSQL.executeUpdate(updateSql, map, "/metrodetection/system_code/data", null);
										
										//取出子用例的步骤集
										Steps steps = subtc.getSteps();
										List<Step> stepList = steps.getStepList();
										//取出步骤集里的步骤
										for(Step step : stepList){
											//取出步骤的执行详细信息
											StepReoprt stepReoprt = step.getStepReoprt();
											//取出步骤的执行情况
											String stepStatus = stepReoprt.getStepStatus().substring(0, 1);
											if(!stepStatus.equals("0")){
												//取出步骤的ID
												Integer stepID = Integer.parseInt(step.getStepNo());
												//取出步骤的描述
												String stepDesc = stepReoprt.getStepDesc();
												//取出步骤的检查情况
												String stepCheck = stepReoprt.getStepCheck().substring(0, 1);
												//取出步骤的执行日期
												String stepDate = stepReoprt.getStepStartDateTime().replaceAll("/", "-");
												if(stepDate.equals("") || stepDate==null){
													str = "StepStartDateTime不能为空!";
													break;
												}
												bool = formatDate(stepDate, 0);
												if(!bool){
													str = "StepStartDateTime的数据格式错误，请检查!";
													break;
												}
												startdate = sdf.parse(stepDate);
												tstart = new Timestamp(startdate.getTime());
												//取出步骤的上报日期
												String stepReport = stepReoprt.getStepReportDate().replaceAll("/", "-");
												if(stepReport.equals("") || stepReport==null){
													str = "StepReportDate不能为空!";
													break;
												}
												bool = formatDate(stepReport, 1);
												if(!bool){
													str = "StepReportDate的数据格式错误，请检查!";
													break;
												}
												enddate = sdfdate.parse(stepReport);
												tend = new Timestamp(enddate.getTime());
												
												//上次步骤的执行结果
												map = new HashMap();
												map.put("sUBTESTCASESTEPDESC", stepDesc);
												map.put("sUBTESTCASESTEPEXECUTE", Integer.parseInt(stepStatus));
												map.put("sUBTESTCASESTEPCHECK", Integer.parseInt(stepCheck));
												map.put("eXECUTEDATETIME", tstart);
												map.put("rEPORTDATE", tend);
												map.put("tASKID", Integer.parseInt(task));
												map.put("tESTCASEID", caseID);
												map.put("sUBTESTCASEID", subcaseID);
												map.put("sUBTESTCASESTEPID", stepID);
												updateSql = "update TEST_TASK_EXECUTE_STEP test set test.sUBTESTCASESTEPDESC=:sUBTESTCASESTEPDESC, test.sUBTESTCASESTEPEXECUTE=:sUBTESTCASESTEPEXECUTE, test.sUBTESTCASESTEPCHECK=:sUBTESTCASESTEPCHECK, test.eXECUTEDATETIME=:eXECUTEDATETIME, test.rEPORTDATE=:rEPORTDATE "
															+" where test.tASKID=:tASKID and test.tESTCASEID=:tESTCASEID and test.sUBTESTCASEID=:sUBTESTCASEID and test.sUBTESTCASESTEPID=:sUBTESTCASESTEPID";
												i = KSQL.executeUpdate(updateSql, map, "/metrodetection/system_code/data", null);
											}
										}
									}
									
								}
								
								//2013.12.5日新增用例回滚记录
								TestCaseRollbackRecords tcrs = tca.getTestCaseRollbackRecords();
								if(tcrs != null) {
									 List<TestCaseRollbackRecord> tcrList = tcrs.getTestCaseRollbackRecordList();
									 if(tcrList != null && tcrList.size() > 0) {
										 for (TestCaseRollbackRecord tcr : tcrList) {
											String authId = tcr.getAuthorizerID();
											String opId = tcr.getOperatorID();
											String proId = tcr.getProjectID();
											String taskId = tcr.getTaskID();
											String rbdesc = tcr.getRollbackDesc();
											String caseId = tcr.getCaseID();
											String times = tcr.getTimes();
											String rbTime = tcr.getRollbackTime();
											Timestamp rbDtm = Timestamp.valueOf(rbTime);
											
											Map pamMap = new HashMap();
											pamMap.put("authId", authId);
											pamMap.put("opId", opId);
											pamMap.put("proId", Integer.valueOf(proId));
											pamMap.put("taskId", Integer.valueOf(taskId));
											pamMap.put("rbdesc", rbdesc);
											pamMap.put("caseId", caseId);
											pamMap.put("times", Integer.valueOf(times));
											pamMap.put("rbTime", rbDtm);
											
											String saveKql = "insert into TEST_CASE_ROLLBACK_RECORD tcr (tcr.AUTHORIZER_ID,tcr.OPERATOR_ID,tcr.ROLLBACK_DESC," +
													"tcr.PROJECT_ID,tcr.TASK_ID,tcr.TEST_CASE_ID,tcr.ROLLBACK_TIME,tcr.TIMES) values (:authId,:opId,:rbdesc,:proId,:taskId,:caseId,:rbTime,:times)";
											KSQL.executeUpdate(saveKql, pamMap, "/metrodetection/system_code/data", null);
										}
									 }
								}
								
							}
							if(str.equals("")){
								str="上传成功!";
							}
						}else{
							if(str.equals("")){
								str="上传成功!";
							}
						}
					}
					file.delete();
				}else{
					ZipFile zipFile = new ZipFile(fileName);
					String zipName = fileName;
					java.util.Enumeration e = zipFile.getEntries();
				    org.apache.tools.zip.ZipEntry zipEntry;
				    ArrayList<String> fileList = new ArrayList<String>();
				    
				    while (e.hasMoreElements()) {
				      zipEntry = (org.apache.tools.zip.ZipEntry) e.nextElement();
				      InputStream fis = zipFile.getInputStream(zipEntry);
				      if (zipEntry.isDirectory()) {
				      } else {
				    	  	fileName = fileURL + File.separator + zipEntry.getName();
				    	  	filedelete.add(fileName);
					        File file = new File(fileName);
					        File parentFile = file.getParentFile();
					        parentFile.mkdirs();
					        FileOutputStream fos = new FileOutputStream(file);
					        byte[] b = new byte[1024];
					        int len;
					        while ((len = fis.read(b, 0, b.length)) != -1) {
					          fos.write(b, 0, len);
					        }
					        fos.close();
					        fis.close();
					        
					        char[] tempbytes = new char[1];   
							int byteread = 0;   
							
							InputStream in = new FileInputStream(fileName);
							InputStreamReader aa = new InputStreamReader(in,"utf-8");
							String st = "";
							while ((byteread = aa.read(tempbytes)) != -1) {
								st = st + new String(tempbytes);
							}
							aa.close();
							in.close();
							
							/************校验部分**********************/
							if(st.indexOf("<md5>") != -1) {
								String valiStr = st.split("  <md5>")[0];
								String tarStr = st.substring(st.lastIndexOf("<md5>"),st.lastIndexOf("</md5>")+6);
								String md5Val = tarStr.substring(5,tarStr.lastIndexOf("</md5>"));
								//st=st.replace(tarStr, "");
								//System.out.println(valiStr+"</DetectionTask>");
								
								//开始校验
								String valiMd5 = Md5Encrypt.md5(valiStr);
								System.out.println(valiMd5);
								if(!valiMd5.trim().equals(md5Val)) {
									str = "Md5校验不通过!请核对";
									return str;
								}
							}
							
							fileList.add(st);
							//获取上传文件的公共信息
							DetectionTask dt = XmlBean.xmlToDetectionTask(st);
							//获取上传文件的任务ID
							String task = dt.getPublicContent().getTaskId();
							String ksqlSelect = "select sa, sa.sFID from SA_OPOrg sa where sa.sFID = :currentPersonMemberFID()";
							Table table = KSQL.select(ksqlSelect, null, "/system/data", null);
							Row row = table.iterator().next();
							String orgID = row.getString("sa");
							String sFID = row.getString("sFID");
							
							ksqlSelect = "select test.tASKID from TEST_PROJECT_TASK_INFO test OPTIONAL JOIN "
												+" OPERATOR_PASSWORD oper on test.pLANOPERATORID = oper "
												+" where oper.oRGID = '"+orgID+"'";
							table = KSQL.select(ksqlSelect, null, "/metrodetection/system_code/data", null);
							Iterator<Row> rs = table.iterator(); 
							row = null;
							bool = true;
							while (rs.hasNext()){
								row = rs.next();
								String taskID = row.getValue("tASKID").toString();
								if(taskID.equals(task)){
									bool = false;
								}
							}
							if(bool){
								if(!str.equals("")){
									str = str +","+zipEntry.getName();
								}else{
									str = zipEntry.getName();
								}
							}
				      	}
				    }
				    filedelete.add(zipName);
				    if(!str.equals("")){
				    	str = str+"的内容与你的任务不符，请检查!";
				    }else{
				    	for(String filestr : fileList){
				    		System.out.println("true");
				    		//获取上传文件的公共信息
							DetectionTask dt = XmlBean.xmlToDetectionTask(filestr);
							//获取上传文件的任务ID
							String task = dt.getPublicContent().getTaskId();
							//获取上传的文件的测试任务的状态信息
							TaskReport tp = dt.getPublicContent().getTaskReport();
							//测试任务的执行状态
							String taskStatus = tp.getTaskStatus();

							if(!taskStatus.equals("0")){
								//测试任务的任务执行人
								String operatorID = tp.getOperatorID();

								//测试任务的执行开始时间
								String tpStartDate = tp.getTaskStartDate();
								if(tpStartDate.equals("") || tpStartDate==null){
									str = "TaskStartDate不能为空!";
									break;
								}
								bool = formatDate(tpStartDate, 0);
								if(!bool){
									str = "TaskStartDate的数据格式错误，请检查!";
									break;
								}
								startdate = sdf.parse(tpStartDate);
								tstart = new Timestamp(startdate.getTime());
								//测试任务的执行结束时间
								String tpEndDate = tp.getTaskEndDate();
								if(tpEndDate.equals("") || tpEndDate==null){
									str = "TaskEndDate不能为空!";
									break;
								}
								bool = formatDate(tpEndDate, 0);
								if(!bool){
									str = "TaskEndDate的数据格式错误，请检查!";
									break;
								}
								enddate = sdf.parse(tpEndDate);
								tend = new Timestamp(enddate.getTime());
								//测试任务的执行结果
								String taskCheck = tp.getTaskCheck();
								//将测试任务的测试结果导入数据库
								Map map = new HashMap();
								map.put("tESTTASKRESULTFILE", filestr);
								map.put("aCTUALOPERATORID", operatorID);
								map.put("aCTUALSTARTDATE", tstart);
								map.put("aCTUALENDINGDATE", tend);
								map.put("tASKEXECUTE", Integer.parseInt(taskStatus));
								map.put("tASKCHECK", Integer.parseInt(taskCheck));
								map.put("tASKID", Integer.parseInt(task));
								String updateSql = "update TEST_PROJECT_TASK_INFO test set test.tESTTASKRESULTFILE=:tESTTASKRESULTFILE, test.aCTUALOPERATORID=:aCTUALOPERATORID, test.aCTUALSTARTDATE=:aCTUALSTARTDATE, test.aCTUALENDINGDATE=:aCTUALENDINGDATE, test.tASKEXECUTE=:tASKEXECUTE, test.tASKCHECK=:tASKCHECK where test.tASKID=:tASKID";
								int i = KSQL.executeUpdate(updateSql, map, "/metrodetection/system_code/data", null);
								//取出测试任务的用例集
								TestCases tcases = dt.getTestCases();
								//取出用例集里面的用例
								List<TestCase> tcase = tcases.getTestCaseList();
								for(TestCase tca : tcase){
									//取出用例里面的子用例集
									SubTestCases subtcs = tca.getSubTestCases();
									//取出用例ID
									String caseID = tca.getTestCaseInfo().getCaseId();
									List<SubTestCase> stcList = subtcs.getSubTestCaseList();
									//遍历子用例集
									for(SubTestCase subtc : stcList){
										//取出子用例的执行信息
										SubTestCaseReport stcreport = subtc.getSubTestCaseReport();
										//取出子用例的执行情况
										String caseStatus = stcreport.getSubCaseStatus().substring(0, 1);
										if(!caseStatus.equals("0")){
											//取出子用例的ID
											String subcaseID = subtc.getSubTestCaseInfo().getSubCaseID();							
											//取出子用例的检查情况
											String caseCheck = stcreport.getSubCaseCheck().substring(0, 1);
											//取出子用例的实际执行耗时
											String caseTime = stcreport.getSubCaseElapsedTime();
											System.out.print(caseTime+"--->");
											//取出子用例的实际执行日期时间
											String castStart = stcreport.getSubCaseStartTime().replaceAll("/", "-");;
											if(castStart.equals("") || castStart==null){
												str = "SubCaseStartTime不能为空!";
												break;
											}
											bool = formatDate(castStart, 0);
											if(!bool){
												str = "SubCaseStartTime的数据格式错误，请检查!";
												break;
											}
											startdate = sdf.parse(castStart);
											tstart = new Timestamp(startdate.getTime());
											//取出子用例的执行描述
											
											//取出子用例的上报日期
											String caseReport = stcreport.getSubCaseReportDate().replaceAll("/", "-");
											if(caseReport.equals("") || caseReport==null){
												str = "SubCaseReportDate不能为空!";
												break;
											}
											bool = formatDate(caseReport, 1);
											if(!bool){
												str = "SubCaseReportDate的数据格式错误，请检查!";
												break;
											}
											enddate = sdfdate.parse(caseReport);
											tend = new Timestamp(enddate.getTime());
											
											//上传子用例的执行结果信息
											map = new HashMap();
											map.put("sUBTESTCASEEXECUTE", Integer.parseInt(caseStatus));
											map.put("sUBTESTCASECHECK", Integer.parseInt(caseCheck));
											map.put("aCTUALSUBTESTCASETIME", Double.valueOf(caseTime));
											map.put("eXECUTEDATETIME", tstart);
											map.put("sUBTESTCASEDESC", "好");
											map.put("rEPORTDATE", tend);
											map.put("tASKID", Integer.parseInt(task));
											map.put("tESTCASEID", caseID);
											map.put("sUBTESTCASEID", subcaseID);
											updateSql = "update TEST_TASK_EXECUTE_SUB_CASE test set test.sUBTESTCASEEXECUTE=:sUBTESTCASEEXECUTE, test.sUBTESTCASECHECK=:sUBTESTCASECHECK, test.aCTUALSUBTESTCASETIME=:aCTUALSUBTESTCASETIME, test.eXECUTEDATETIME=:eXECUTEDATETIME, test.sUBTESTCASEDESC=:sUBTESTCASEDESC, test.rEPORTDATE=:rEPORTDATE "
														+" where test.tASKID=:tASKID and test.tESTCASEID=:tESTCASEID and test.sUBTESTCASEID=:sUBTESTCASEID";
											i = KSQL.executeUpdate(updateSql, map, "/metrodetection/system_code/data", null);
											
											//取出子用例的步骤集
											Steps steps = subtc.getSteps();
											List<Step> stepList = steps.getStepList();
											//取出步骤集里的步骤
											for(Step step : stepList){
												//取出步骤的执行详细信息
												StepReoprt stepReoprt = step.getStepReoprt();
												//取出步骤的执行情况
												String stepStatus = stepReoprt.getStepStatus().substring(0, 1);
												if(!stepStatus.equals("0")){
													//取出步骤的ID
													Integer stepID = Integer.parseInt(step.getStepNo());
													//取出步骤的描述
													String stepDesc = stepReoprt.getStepDesc();
													//取出步骤的检查情况
													String stepCheck = stepReoprt.getStepCheck().substring(0, 1);
													//取出步骤的执行日期
													String stepDate = stepReoprt.getStepStartDateTime().replaceAll("/", "-");
													if(stepDate.equals("") || stepDate==null){
														str = "StepStartDateTime不能为空!";
														break;
													}
													bool = formatDate(stepDate, 0);
													if(!bool){
														str = "StepStartDateTime的数据格式错误，请检查!";
														break;
													}
													startdate = sdf.parse(stepDate);
													tstart = new Timestamp(startdate.getTime());
													//取出步骤的上报日期
													String stepReport = stepReoprt.getStepReportDate().replaceAll("/", "-");
													if(stepReport.equals("") || stepReport==null){
														str = "StepReportDate不能为空!";
														break;
													}
													bool = formatDate(stepReport, 1);
													if(!bool){
														str = "StepReportDate的数据格式错误，请检查!";
														break;
													}
													enddate = sdfdate.parse(stepReport);
													tend = new Timestamp(enddate.getTime());
													
													//上次步骤的执行结果
													map = new HashMap();
													map.put("sUBTESTCASESTEPDESC", stepDesc);
													map.put("sUBTESTCASESTEPEXECUTE", Integer.parseInt(stepStatus));
													map.put("sUBTESTCASESTEPCHECK", Integer.parseInt(stepCheck));
													map.put("eXECUTEDATETIME", tstart);
													map.put("rEPORTDATE", tend);
													map.put("tASKID", Integer.parseInt(task));
													map.put("tESTCASEID", caseID);
													map.put("sUBTESTCASEID", subcaseID);
													map.put("sUBTESTCASESTEPID", stepID);
													updateSql = "update TEST_TASK_EXECUTE_STEP test set test.sUBTESTCASESTEPDESC=:sUBTESTCASESTEPDESC, test.sUBTESTCASESTEPEXECUTE=:sUBTESTCASESTEPEXECUTE, test.sUBTESTCASESTEPCHECK=:sUBTESTCASESTEPCHECK, test.eXECUTEDATETIME=:eXECUTEDATETIME, test.rEPORTDATE=:rEPORTDATE "
																+" where test.tASKID=:tASKID and test.tESTCASEID=:tESTCASEID and test.sUBTESTCASEID=:sUBTESTCASEID and test.sUBTESTCASESTEPID=:sUBTESTCASESTEPID";
													i = KSQL.executeUpdate(updateSql, map, "/metrodetection/system_code/data", null);
												}
											}
										}
									}
									
									
									//2013.12.5日新增用例回滚记录
									TestCaseRollbackRecords tcrs = tca.getTestCaseRollbackRecords();
									if(tcrs != null) {
										 List<TestCaseRollbackRecord> tcrList = tcrs.getTestCaseRollbackRecordList();
										 if(tcrList != null && tcrList.size() > 0) {
											 for (TestCaseRollbackRecord tcr : tcrList) {
												String authId = tcr.getAuthorizerID();
												String opId = tcr.getOperatorID();
												String proId = tcr.getProjectID();
												String taskId = tcr.getTaskID();
												String rbdesc = tcr.getRollbackDesc();
												String caseId = tcr.getCaseID();
												String times = tcr.getTimes();
												String rbTime = tcr.getRollbackTime();
												Timestamp rbDtm = Timestamp.valueOf(rbTime);
												
												Map pamMap = new HashMap();
												pamMap.put("authId", authId);
												pamMap.put("opId", opId);
												pamMap.put("proId", Integer.valueOf(proId));
												pamMap.put("taskId", Integer.valueOf(taskId));
												pamMap.put("rbdesc", rbdesc);
												pamMap.put("caseId", caseId);
												pamMap.put("times", Integer.valueOf(times));
												pamMap.put("rbTime", rbDtm);
												
												String saveKql = "insert into TEST_CASE_ROLLBACK_RECORD tcr (tcr.AUTHORIZER_ID,tcr.OPERATOR_ID,tcr.ROLLBACK_DESC," +
														"tcr.PROJECT_ID,tcr.TASK_ID,tcr.TEST_CASE_ID,tcr.ROLLBACK_TIME,tcr.TIMES) values (:authId,:opId,:rbdesc,:proId,:taskId,:caseId,:rbTime,:times)";
												KSQL.executeUpdate(saveKql, pamMap, "/metrodetection/system_code/data", null);
											}
										 }
									}
									
								}
					    	}
							
							//取出测试任务的用例集
							TestCases tcasesTemp = dt.getTestCases();
							//取出用例集里面的用例
							List<TestCase> tcaseT = tcasesTemp.getTestCaseList();
							for(TestCase tca : tcaseT){
								//2013.12.5日新增用例回滚记录
								TestCaseRollbackRecords tcrs = tca.getTestCaseRollbackRecords();
								if(tcrs != null) {
									 List<TestCaseRollbackRecord> tcrList = tcrs.getTestCaseRollbackRecordList();
									 if(tcrList != null && tcrList.size() > 0) {
										 for (TestCaseRollbackRecord tcr : tcrList) {
											String authId = tcr.getAuthorizerID();
											String opId = tcr.getOperatorID();
											String proId = tcr.getProjectID();
											String taskId = tcr.getTaskID();
											String rbdesc = tcr.getRollbackDesc();
											String caseId = tcr.getCaseID();
											String times = tcr.getTimes();
											String rbTime = tcr.getRollbackTime();
											Timestamp rbDtm = Timestamp.valueOf(rbTime);
											
											Map pamMap = new HashMap();
											pamMap.put("authId", authId);
											pamMap.put("opId", opId);
											pamMap.put("proId", Integer.valueOf(proId));
											pamMap.put("taskId", Integer.valueOf(taskId));
											pamMap.put("rbdesc", rbdesc);
											pamMap.put("caseId", caseId);
											pamMap.put("times", Integer.valueOf(times));
											pamMap.put("rbTime", rbDtm);
											
											String saveKql = "insert into TEST_CASE_ROLLBACK_RECORD tcr (tcr.AUTHORIZER_ID,tcr.OPERATOR_ID,tcr.ROLLBACK_DESC," +
													"tcr.PROJECT_ID,tcr.TASK_ID,tcr.TEST_CASE_ID,tcr.ROLLBACK_TIME,tcr.TIMES) values (:authId,:opId,:rbdesc,:proId,:taskId,:caseId,:rbTime,:times)";
											KSQL.executeUpdate(saveKql, pamMap, "/metrodetection/system_code/data", null);
										}
									 }
								}
							}
							
				    	}
				    	System.out.println("11111"+str);
				    	if(str.equals("")){
							str="上传成功!";
							System.out.println(str);
						}else{
							System.out.println("22222"+str);
						}
				    }
				    zipFile.close();
				}
			}
			for(String fst : filedelete){
				File defile = new File(fst);
				defile.delete();
			}
		} catch (Exception e) {
			str = "数据异常,上传失败!";
			e.printStackTrace();
		}
		return str;
	}

	public static Table myQueryIndexSystemValueParam(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryIndexApplyType(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryTool_Relationship(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	

	public static Table myQueryTestCaseDetectionObject(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	public static Table myQueryToolSortCodeNew(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryTestCaseDetectionDevice(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQuerySampleDeviceSchedule(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static String downUser(String orgID) throws IOException{
		String st = "";
		String url = "";
		String path = "";
		ZipOutputStream zipos = null;
		DataOutputStream os = null;
		try {
			String kSqlSelect = "select pass, pass.uSERNAME, pass.oPERATORPASSWORD, pass.vALIDENDDATE, hr.pOSITIONID "+
								" from OPERATOR_PASSWORD pass "+
								" JOIN HR_BASE_INFO hr on pass = hr "+
								" where pass.oRGID = '"+orgID+"'";
			Table table = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			if(table.size()>0){
				Row row = table.iterator().next();
				
				String typeName = "";
				if(row.getValue("pOSITIONID")!=null && !row.getValue("pOSITIONID").toString().equals("999")){
					String selectType = "select type.pOSITIONIDCNAME from POSITION_TYPE_CODE type where type = "+row.getValue("pOSITIONID").toString();
					Table typetable = KSQL.select(selectType, null, "/metrodetection/system_code/data", null);
					System.out.println(row.getValue("pOSITIONID")+"+++"+typetable.size()+"****");
					Row rowtype = typetable.iterator().next();
					typeName = rowtype.getValue("pOSITIONIDCNAME").toString().trim();
				}
				String operID = row.getValue("pass").toString();
				Permission permission = new Permission();
				
				UserDto userDto = new UserDto();
				userDto.setLoginID(row.getValue("pass").toString().trim());
				userDto.setLoginName(row.getValue("uSERNAME").toString().trim());
				userDto.setPasswd(row.getValue("oPERATORPASSWORD").toString().trim());
				userDto.setExpiration(row.getValue("vALIDENDDATE").toString());
				userDto.setPost(typeName);
				
				permission.setUserDto(userDto);
				
				FuncList funcList = new FuncList();
				List<FuncDto> funcDtos = new ArrayList<FuncDto>();
				
				kSqlSelect = "select distinct type, type.sYSTEMTYPECNAME, func, func.fUNCID, func.fUNCNAME, funcpri.pRIVILEGETYPE"+
							 " from ROLE_OPERATOR oper "+
							 " join ROLE_PRIVILEGE rolepri on oper.rOLEID = rolepri.rOLEID "+
							 " join PRIVILEGE_FUNC funcpri on rolepri.pRIVILEGEID = funcpri "+
							 " join FUNC_ID func on funcpri.fUNCID = func.fUNCID "+
							 " join SYSTEM_TYPE_CODE type on type = func.sYSTEMTYPE "+
							 " join MEMBER_IN_USERGROUP member on 1=1 " +
							 " where oper.oPERATORID = '"+operID+"' or oper.oPERATORID = member.oPERATORID";
				table = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
				
				Iterator<Row> rs = table.iterator(); 
				Row rowfunc = null;
				while(rs.hasNext()){
					rowfunc = rs.next();
					
					FuncDto fdto = new FuncDto();
					fdto.setSystemType(rowfunc.getValue("type").toString()+"|"+rowfunc.getValue("sYSTEMTYPECNAME").toString());
					fdto.setDeviceId(rowfunc.getValue("func").toString());
					fdto.setModuleId(rowfunc.getValue("fUNCID").toString());
					fdto.setModuleName(rowfunc.getValue("fUNCNAME").toString());
					
					String str = rowfunc.getValue("pRIVILEGETYPE").toString();
					if(str.equals("1")){
						str = str+"|读";
					}else{
						str = str+"|读写";
					}
					fdto.setPrivilege(str);
					
					funcDtos.add(fdto);
				}
				funcList.setFuncList(funcDtos);
				
				permission.setFuncList(funcList);
				Writer wt = new StringWriter();
				Mapping mapping = new Mapping();
				Marshaller msl;
				
				String mapPath = FileSystemWrapper.instance().getRealPath("/metrodetection/system_code/logic/code/src/com/becom/test/permission.xml");
				
				mapping.loadMapping(mapPath);
				msl = new Marshaller(wt);
				
				msl.setMapping(mapping);
				msl.marshal(permission);
				String res = wt.toString();
				
				st=PropertiesAction.PropertiesA("exportWordUrl");
				path= PropertiesAction.PropertiesA("downloadTaskUrl");
//				st = System_code.class.getResource("").toString();
//				st = st.split("BIZ")[0];
//				st = st.substring(6, st.length());
				url = st+operID.trim()+".zip";
				//st = st+url;
				path=path+operID.trim()+".zip";
				zipos=new ZipOutputStream(new FileOutputStream(url)); 
				
				zipos.setMethod(ZipOutputStream.DEFLATED);
				
				byte[] c = res.getBytes("utf-8");
				
				zipos.putNextEntry((org.apache.tools.zip.ZipEntry) new ZipEntry(operID.trim()+".xml")); 
				
				os=new DataOutputStream(zipos); 
		
				os.write(c);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			os.close();
		}
		return path;
	}

	public static Table myQueryP_documents_archive(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table system(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryborrowState(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryp_documents_borrow_record(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQuerydocuments_destroy_record(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQuerydocdestroy(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	

	public static Table detectionProcessQuery(String concept,String idColumn,String select,String from,String aggregate,String condition,List range,String filter,Integer limit,Integer offset,Boolean distinct,String columns,String orderBy,String aggregateColumns,Map variables,String fnModel,String dataModel,String status,String org){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Table complaintProcessQuery(String concept,String idColumn,String select,String from,String aggregate,String condition,List range,String filter,Integer limit,Integer offset,Boolean distinct,String columns,String orderBy,String aggregateColumns,Map variables,String fnModel,String dataModel,String status,String org){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	public static Table detectionProcessQueryReport(String sflowid){
		Table tb = null;
		if(sflowid==null){
			System.out.println("执行没有过滤的查询");
			String sql2 = "SELECT " +
				"SA_Task.sParentid AS SPARENT," +
				"SA_Task.sActivityName AS SACTIVITYNAME," +
				"SA_Task.sExecutorDeptName AS SEXECUTORDEPTNAME," +
				"SA_Task.sExecutorPersonName AS SEXECUTORPERSONNAME," +
				"SA_Task.sStatusName AS SSTATUSNAME," +
				"SA_Task.sActualFinishTime AS SACTUALFINISHTIME," +
				"SA_Task.sContent AS SCONTENT "+
				"FROM SA_Task SA_Task " +
				"WHERE SA_Task.sTypeName = '检测流程' " +
				"AND SA_Task.sParentid is not null "+
				" and (SA_Task.sKindID in ('tkTask', 'tkExecutor')) "+
				" and (SA_Task.sActualFinishTime is not null) "+
				" and (SA_Task.sExecutorPersonID is not null) ";
			Map map2 = new HashMap();
			map2.put("SYBASE", sql2);
			tb = SQL.select(map2, null, "/system/data");
		} else {
			String sql = "SELECT " +
			"SA_Task.sParentid AS SPARENT," +
			"SA_Task.sActivityName AS SACTIVITYNAME," +
			"SA_Task.sExecutorDeptName AS SEXECUTORDEPTNAME," +
			"SA_Task.sExecutorPersonName AS SEXECUTORPERSONNAME," +
			"SA_Task.sStatusName AS SSTATUSNAME," +
			"SA_Task.sActualFinishTime AS SACTUALFINISHTIME," +
			"SA_Task.sContent AS SCONTENT "+
			"FROM SA_Task SA_Task WHERE SA_Task.sTypeName = '检测流程' " +
			"AND SA_Task.sParentid is not null " +
			" and (SA_Task.sKindID in ('tkTask', 'tkExecutor')) "+
			" and (SA_Task.sActualFinishTime is not null) "+
			" and (SA_Task.sExecutorPersonID is not null) "+
			"AND sflowid='" + sflowid+"'";
		Map map = new HashMap();
		map.put("SYBASE", sql);
		tb = SQL.select(map, null, "/system/data");
		}
		Iterator<Row> rows = tb.iterator();
		while (rows.hasNext()) {
			Row row = rows.next();
		}
		return tb;
	}

	public static int destoryE_FileActin(String FileId){
		try{
//			System.out.println(FileId);
			Map<String, Object> mapdelete = new  HashMap<String,Object>();
			mapdelete.put("FileId", FileId);
			System.out.println(mapdelete);
			String ksql = "delete from  SA_DocNode SA_DocNode "+
			" where SA_DocNode = :FileId";
//			System.out.println(ksql);
			int tabApplication = KSQL.executeUpdate(ksql, mapdelete, "/metrodetection/training_management/data", null);
//			System.out.println(tabApplication+" 删除记录");
		}catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		return 1;
	}

	public static Table newMulIndexQuery(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables,Integer id){
		Table tb = null;
		System.out.println("执行********查询");
		String sql2 =" select xx.INDEX_NO as INDEXNO,xx.INDEX_ID as INDEXID,xx.index_id_cname as INDEXIDCNAME, "+
							"range.DETECTION_RANGE_CNAME as DETECTIONRANGECNAME,rangeCode.RANGE_ID_CNAME as RANGEIDCNAME," +
							"object.DETECTION_OBJECT_CNAME as DETECTIONOBJECTCNAME,device.DEVICE_TYPE_CNAME as DEVICETYPECNAME, "+
							"xx.business_id_cname as BUSINESSIDCNAME,xx.INDEX_VALUE as INDEXVALUE,xx.INDEX_VALUE_DESC as INDEXVALUEDESC,"+
							"xx.INDEX_SYSTEM_NO as INDEXSYSTEMNO,xx.BUSINESS_ID as BUSINESSID,xx.APPLY_FOR_OBJECT as APPLYFOROBJECT," +
							"xx.APPLY_FOR_DEVICE_TYPE as APPLYFORDEVICETYPE,xx.detection_range_type as DETECTIONRANGETYPE," +
							"xx.detection_range_id as DETECTIONRANGEID,xx.INDEX_SYSTEM_NAME as INDEXSYSTEMNAME,xx.INDEX_NO as INDEX_SYSTEM_VALUE " +
							//"1 as indexSysValue "+ 
					"from "+
						"(SELECT vv.INDEX_SYSTEM_NO as INDEX_SYSTEM_NO,vv.INDEX_SYSTEM_NAME as INDEX_SYSTEM_NAME,vv.INDEX_ID as INDEX_ID,vv.index_id_cname as index_id_cname, "+
							"vv.detection_range_type as detection_range_type,vv.detection_range_id as detection_range_id, "+
							"vv.APPLY_FOR_OBJECT as APPLY_FOR_OBJECT,vv.APPLY_FOR_DEVICE_TYPE as APPLY_FOR_DEVICE_TYPE, "+
							"vv.BUSINESS_ID as BUSINESS_ID,vv.business_id_cname as business_id_cname,FF.INDEX_NO as INDEX_NO, "+
							"FF.INDEX_VALUE as INDEX_VALUE,FF.INDEX_VALUE_DESC as INDEX_VALUE_DESC "+
						"from  "+
							"(select AA.INDEX_SYSTEM_NO,AA.INDEX_SYSTEM_NAME,BB.INDEX_ID,BB.index_id_cname, "+
								"BB.detection_range_type,BB.detection_range_id, "+
								"cc.APPLY_FOR_OBJECT,cc.APPLY_FOR_DEVICE_TYPE,DD.BUSINESS_ID,dd.business_id_cname "+
							"from index_system_parameter aa,index_id_base_info bb,index_id_apply_info cc,business_type_code dd "+
							"where bb.index_id = cc.index_id "+
							") vv "+ 
						"LEFT OUTER JOIN index_system_value ff "+
						"ON VV.INDEX_ID = FF.INDEX_ID and VV.INDEX_SYSTEM_NO=FF.INDEX_SYSTEM_NO "+ 
							"and VV.APPLY_FOR_OBJECT=FF.APPLY_FOR_OBJECT  "+
							"and VV.APPLY_FOR_DEVICE_TYPE=FF.APPLY_FOR_DEVICE_TYPE and vv.BUSINESS_ID=FF.BUSINESS_ID "+
						")xx,DETECTION_RANGE_TYPE range,DETECTION_RANGE_CODE rangeCode,DETECTION_OBJECT_TYPE object,DEVICE_TYPE_CODE device "+
					"where xx.detection_range_type = range.DETECTION_RANGE_TYPE "+
					     "and (xx.detection_range_id = rangeCode.DETECTION_RANGE_ID AND rangeCode.DETECTION_RANGE_TYPE = xx.detection_range_type) "+
					     "and xx.APPLY_FOR_OBJECT = object.DETECTION_OBJECT_TYPE "+
					     "and (xx.APPLY_FOR_DEVICE_TYPE = device.DEVICE_TYPE AND device.DETECTION_OBJECT_TYPE = xx.APPLY_FOR_OBJECT) ";
		if(filter!=null && filter!=""){
			String[] fils=filter.split("=");
			String no = fils[1].substring(0, fils[1].length()-1);
//			System.out.println(no);
			sql2+=" and xx.INDEX_SYSTEM_NO="+no;
		}
		sql2+=" order by xx.INDEX_ID,xx.APPLY_FOR_OBJECT,xx.APPLY_FOR_DEVICE_TYPE,xx.BUSINESS_ID";
//		System.out.println(sql2);
		Map map2 = new HashMap();
		map2.put("SYBASE", sql2);
		tb = SQL.select(map2, null, "/metrodetection/system_code/data");
		
		
		/********************获取指标序号最大值***********/
		String maxSql = "select max(tt.INDEX_NO) as maxId from index_system_value tt";
		Table table = null;
		Map map3 = new HashMap();
		map3.put("SYBASE", maxSql);
		table = SQL.select(map3,null, "/metrodetection/system_code/data");
		Iterator<Row> rs = table.iterator();
		Integer maxId=0;	
		int a=0;
		while(rs.hasNext()){
			Row r = rs.next();
			maxId =  r.getInteger(0);
			if(maxId!= null){
				a=maxId;
			}else{
				a=0;
			}
			System.out.println(a+"1111111111111");
		}

		tb.addColumn("indexSysValue", "Integer");
		Iterator<Row> rows = tb.iterator();
		while (rows.hasNext()) {
			Row row = rows.next();
			a++;
			row.setInt("indexSysValue", a);
			System.out.println("******"+row);
			Integer value=row.getInteger("indexSysValue");
			System.out.println("++++++"+value);	
			row.setState(ModifyState.NONE);
		}
		Iterator<Row> rowData = tb.iterator();
//		while(rowData.hasNext()){
//			Row row1 = rowData.next();
//			System.out.println(row1+"******");
//		}
		tb.getProperties().put(Table.PROP_NAME_ROWID, "indexSysValue");
		return tb;
	}

	public static Table maxIdOfIndexSystemValue(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);		
	}

	public static int saveIndexValue(Map map)throws IOException{
		int mapSize = map.size();
		String[] key = new String[mapSize];
		List[]	list = new List[mapSize];
		int[] size = new int[mapSize];
//		System.out.println(map.size());
		System.out.println(map);
		/********************获取指标序号最大值***********/
		String maxSql = "select max(tt.INDEX_NO) as maxId from index_system_value tt";
		Table table = null;
		Map map3 = new HashMap();
		map3.put("SYBASE", maxSql);
		table = SQL.select(map3,null, "/metrodetection/system_code/data");
		Iterator<Row> rs = table.iterator();
		Integer maxId=0;	
		int v=0;
		while(rs.hasNext()){
			Row r = rs.next();
			maxId =  r.getInteger(0);
			if(maxId!= null){
				v=maxId+1;
			}else{
				v=1;
			}
			System.out.println(v+"1111111111111");
		}
		int i=0;
		try{
			Set set = map.entrySet();  
			Iterator it = set.iterator();  
			//获取保存数据
			while (it.hasNext()){
//				System.out.println(it.next());  
				Map.Entry me = (Map.Entry)it.next();
				key[i]=(String)me.getKey();
				list[i]=(List)me.getValue();
				size[i]=list[i].size();
				i++;
			}

			Map<String, Object> mapp = new  HashMap<String,Object>();
			for(int j=0;j<mapSize;j++){
				StringBuffer insertSql = new StringBuffer();
				if(size[j]==8){
					mapp.put("id", v);
					mapp.put("bUSINESSID", Integer.parseInt(list[j].get(1).toString()));
					mapp.put("iNDEXID", Integer.parseInt(list[j].get(2).toString()));
					mapp.put("aPPLYFOROBJECT", Integer.parseInt(list[j].get(3).toString()));
					mapp.put("aPPLYFORDEVICETYPE", Integer.parseInt(list[j].get(4).toString()));
					mapp.put("iNDEXVALUE", list[j].get(5));
					mapp.put("iNDEXVALUEDESC", list[j].get(6));
					mapp.put("iNDEXSYSTEMNO",Integer.parseInt(list[j].get(7).toString()));
					System.out.println(mapp);
					insertSql.append("insert into INDEX_SYSTEM_VALUE value(value,value.bUSINESSID,value.iNDEXID,value.aPPLYFOROBJECT,value.aPPLYFORDEVICETYPE,value.iNDEXVALUE,value.iNDEXVALUEDESC,value.iNDEXSYSTEMNO) values(")
					.append(":id,")
					.append(":bUSINESSID,")
					.append(":iNDEXID,")
					.append(":aPPLYFOROBJECT,")
					.append(":aPPLYFORDEVICETYPE,")
					.append(":iNDEXVALUE,")
					.append(":iNDEXVALUEDESC,")
					.append(":iNDEXSYSTEMNO)");
					System.out.println(insertSql);
					KSQL.executeUpdate(insertSql.toString(), mapp, "/metrodetection/system_code/data", null);
					v++;
				}else if(size[j]==3){
					StringBuffer updateSql = new StringBuffer();
					System.out.println(list[j].get(1)+"11111111");
					System.out.println(list[j].get(2)+"22222222");
					mapp.put("id", list[j].get(0));
					mapp.put("iNDEXVALUE", list[j].get(1).equals("")?"　":list[j].get(1));
					mapp.put("iNDEXVALUEDESC", list[j].get(2).equals("")?"　":list[j].get(2));
					updateSql.append("update INDEX_SYSTEM_VALUE value set value.iNDEXVALUE=:iNDEXVALUE, value.iNDEXVALUEDESC=:iNDEXVALUEDESC  where value=:id ");
					System.out.println(updateSql);
					int c = KSQL.executeUpdate(updateSql.toString(), mapp, "/metrodetection/system_code/data", null);
					System.out.println(c);
				}
			}
			}catch (Exception e) {
				e.printStackTrace();
				return 0;
			}
			return 1;
		}

	public static Table myQueryProjectMemberForPlan(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQuerybeipinbeijian(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQuerylvli(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryProjectMemberActionForSel(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}


	public static Table selectLineProcess(){
		Table tb = null;
		String sql = "select distinct TEST_PROJECT_INFO.lINEID as lINEID,concat(:toString(TEST_PROJECT_INFO.lINEID),'号线') as lineName from TEST_PROJECT_INFO TEST_PROJECT_INFO";
		tb = KSQL.select(sql, null, "/metrodetection/system_code/data", null);
		return tb;
	}

	public static Table myQueryToolSort(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryToolTypeName(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryToolTypeNamezf(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
}