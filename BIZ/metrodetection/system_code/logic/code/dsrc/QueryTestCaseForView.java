import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.StringReader;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.tools.zip.ZipFile;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.QName;

import com.becom.test.DetectionObject;
import com.becom.test.DetectionRange;
import com.becom.test.DetectionTask;
import com.becom.test.Step;
import com.becom.test.Steps;
import com.becom.test.SubTestCase;
import com.becom.test.SubTestCaseInfo;
import com.becom.test.SubTestCases;
import com.becom.test.TestCase;
import com.becom.test.TestCaseInfo;
import com.becom.test.TestCases;
import com.becom.test.XmlBean;
import com.justep.model.ModelUtils;
import com.justep.system.data.BizData;
import com.justep.system.data.DataPermission;
import com.justep.system.data.KSQL;
import com.justep.system.data.Table;

/**
 * 
 * @author hy
 *
 */
public class QueryTestCaseForView {

	/**
	 * 检测用例的查看
	 */
	public static Table queryDetectionCaseInfo(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Table queryDetectionCaseInfoModify(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	/**
	 * 检测子用例步骤信息
	 */
	public static Table queryStepInfo(List range, String concept, String select, String from, String aggregate, String dataModel, String fnModel,
			String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns, String orderBy,
			String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	/**
	 * 检测用例基本信息
	 */
	public static Table queryCaseBaseInfo(List range, String concept, String select, String from, String aggregate, String dataModel, String fnModel,
			String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns, String orderBy,
			String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	/**
	 * 检测子用例基本信息
	 */
	public static Table querySubCaseBaseInfo(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	/**
	 * 读物文件 将内容转为String返回
	 * @param file
	 * @return
	 */
	public static String readFileToString(File file) {
		BufferedReader reader = null;
		String res = "";
		try {
			//构建流
			/*reader = new BufferedReader(new FileReader(file));
			String temp = "";
			while((temp=reader.readLine()) != null) {
				res += temp;
			}
			res = new String(res.getBytes(), "utf-8").trim();*/

			char[] tempbytes = new char[1];
			int byteread = 0;
			InputStream in = new FileInputStream(file);
			InputStreamReader aa = new InputStreamReader(in, "UTF-8");
			while ((byteread = aa.read(tempbytes)) != -1) {
				res += new String(tempbytes);
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			//关闭流
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		return res;
	}

	/**
	 * 导入用例信息
	 * @param schemeId
	 * @param fpath
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static String importCase(Document processes) {
		List<Element> itemList = processes.selectNodes("//item");
		StringBuffer res = new StringBuffer();
		//StringBuffer sbf = new StringBuffer();
		List<String> fileDelete = new ArrayList<String>();
		for (Element element : itemList) {
			if (element != null) {
				String fileName = element.attributeValue(new QName("file"));
				String fileURL = element.attributeValue(new QName("fileURL"));
				//String fileURL = PropertiesAction.PropertiesA("importValueFileNameUrl");
				String detionBaseId = element.attributeValue(new QName("detionBaseId"));
				String tESTCASEVER = element.attributeValue(new QName("tESTCASEVER"));
				String importMod = element.attributeValue(new QName("importMod"));
				String type = fileName.substring(fileName.length() - 3, fileName.length());
				if (type.toUpperCase().equals("ZIP")) {
					ZipFile zipFile;
					try {
						zipFile = new ZipFile(fileName);
						String zipName = fileName;
						java.util.Enumeration e = zipFile.getEntries();
						org.apache.tools.zip.ZipEntry zipEntry;
						while (e.hasMoreElements()) {
							zipEntry = (org.apache.tools.zip.ZipEntry) e.nextElement();
							if (zipEntry != null) {
								InputStream fis = zipFile.getInputStream(zipEntry);
								if (zipEntry.isDirectory()) {
								} else {
									fileName = fileURL + File.separator + zipEntry.getName();
									File file = new File(fileName);
									System.out.println("实际得到的路径：" + fileName);

									//标记用例模版中是否包含indexName这个属性，包含为true，不包含为 false;
									//Boolean flag = true;
									if (file != null) {
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
										InputStreamReader aa = new InputStreamReader(in, "utf-8");
										String caseString = "";
										while ((byteread = aa.read(tempbytes)) != -1) {
											caseString += new String(tempbytes);
										}
										aa.close();
										in.close();
										//将用例xml对象转为用例对象
										/*DetectionTask dt = XmlBean.xmlToDetectionTask(caseString);
										TestCases tcs = dt.getTestCases();
										TestCase tc = tcs.getTestCaseList().get(0);*/

										//判断用例模版中是否有indexName这个属性
//										if (caseString.indexOf("IndexName") == -1) {
//											flag = false;
//										}
										TestCase tc = XmlBean.xmlToCaseForImport(caseString);
										TestCaseInfo tci = tc.getTestCaseInfo();
										if (tci == null) {
											res.append("请检查" + file.getName() + "文件的内容是否以TestCase开始" + "\n");
											continue;
										}
										fileDelete.add(fileName);
										String caseId = tci.getCaseId();
										String caseName = tci.getCaseName();
										String casePrior = tci.getCasePrior();
										System.out.println(caseName + "************");

										if (casePrior.indexOf("|") != -1) {
											casePrior = casePrior.split("\\|")[0];
										}
										String caseDesc = " ";
										if (StringUtils.isNotBlank(tci.getDescription())) {
											caseDesc = tci.getDescription();
										}
										DetectionObject dot = tci.getDetectionObject();
										DetectionRange dre = tci.getDetectionRange();

										String aPPLYFOROBJECT = "";
										String aPPLYFORDEVICETYPE = "";
										String aPPLYFORRANGE = "";
										String aPPLYFORSUBRANGE = "";

										String dotS = dot.getType();
										String dtS = dot.getSubType();
										String drt = dre.getType();
										String drs = dre.getSubType();
										String regex = "[0-9]*";
										//检查检测对象类别
										if (dotS.indexOf("|") != -1) {
											if(dotS.split("\\|").length != 2) {
												res.append(file.getName() + "文件的DetectionObject节点的Type属性内容不全面,请检查|前后内容是否为空" + "\n");
												continue;
											} else {
												aPPLYFOROBJECT = dotS.split("\\|")[0];
												if(!aPPLYFOROBJECT.matches(regex)) {
													res.append(file.getName() + "文件的DetectionObject节点的Type属性格式不正确,|前应为数字" + "\n");
													continue;
												} else {
													String dETECTIONOBJECTCNAME = dotS.split("\\|")[1];
													Table tb = PlanUtils.queryDetectionObjectType(aPPLYFOROBJECT);
													if(tb==null || tb.size() == 0) {
														PlanUtils.saveDetectionObjectType(aPPLYFOROBJECT, dETECTIONOBJECTCNAME, "");
													}
												}
											}
										} else {
											res.append(file.getName() + "文件的DetectionObject节点的Type属性格式不正确" + "\n");
											continue;
										}
										
										
										//检测检测对象
										if (dtS.indexOf("|") != -1) {
											if(dtS.split("\\|").length != 2) {
												res.append(file.getName() + "文件的DetectionObject节点的SubType属性内容不全面,请检查|前后内容是否为空" + "\n");
												continue;
											} else {
												aPPLYFORDEVICETYPE = dtS.split("\\|")[0];
												if(!aPPLYFORDEVICETYPE.matches(regex)) {
													res.append(file.getName() + "文件的DetectionObject节点的SubType属性格式不正确,|前应为数字" + "\n");
													continue;
												} else {
													String dEVICETYPECNAME = dtS.split("\\|")[1];
													Table tb = PlanUtils.queryDetectionTypeCode(aPPLYFOROBJECT, aPPLYFORDEVICETYPE);
													if(tb == null || tb.size() == 0) {
														PlanUtils.saveDetectionTypeCode(aPPLYFOROBJECT, aPPLYFORDEVICETYPE, dEVICETYPECNAME, "");
													}
												}
											}
											
										} else {
											res.append(file.getName() + "文件的DetectionObject节点的SubType属性格式不正确" + "\n");
											continue;
										}
										
										
										//检测方面类别
										if (drt.indexOf("|") != -1) {
											if(drt.split("\\|").length != 2) {
												res.append(file.getName() + "文件的DetectionRange节点的Type属性内容不全面,请检查|前后内容是否为空" + "\n");
												continue;
											} else {
												aPPLYFORRANGE = drt.split("\\|")[0];
												if(!aPPLYFORRANGE.matches(regex)) {
													res.append(file.getName() + "文件的DetectionRange节点的Type属性格式不正确,|前应为数字" + "\n");
													continue;
												} else {
													String dETECTIONRANGECNAME = drt.split("\\|")[1];
													Table tb = PlanUtils.queryDetectionRangeType(aPPLYFORRANGE);
													if(tb == null || tb.size() == 0) {
														PlanUtils.saveDetectionRangeType(aPPLYFORRANGE, dETECTIONRANGECNAME, "");
													}
												}
											}
											
										} else {
											res.append(file.getName() + "文件的DetectionRange节点的Type属性格式不正确" + "\n");
											continue;
										}
										
										
										//检测方面
										if (drs.indexOf("|") != -1) {
											if(drs.split("\\|").length != 2) {
												res.append(file.getName() + "文件的DetectionRange节点的SubType属性内容不全面,请检查|前后内容是否为空" + "\n");
												continue;
											} else {
												aPPLYFORSUBRANGE = drs.split("\\|")[0];
												if(!aPPLYFORSUBRANGE.matches(regex)) {
													res.append(file.getName() + "文件的DetectionRange节点的SubType属性格式不正确,|前应为数字" + "\n");
													continue;
												} else {
													String rANGEIDCNAME = drs.split("\\|")[1]; 
													Table tb = PlanUtils.queryDetectionRangeCode(aPPLYFORRANGE, aPPLYFORSUBRANGE);
													if(tb == null || tb.size() == 0) {
														PlanUtils.saveDetectionRangeCode(aPPLYFORRANGE, aPPLYFORSUBRANGE, rANGEIDCNAME, "");
													}
												}
											}
											
										} else {
											res.append(file.getName() + "文件的DetectionRange节点的SubType属性格式不正确" + "\n");
											continue;
										}

										Table tb = getDetionBaseInfo(detionBaseId);
										//String sTANDARDEFILEID = "";
										/*
										 * if(tb != null && tb.size() > 0) {
											sTANDARDEFILEID = (String) tb.iterator().next().getValue("sTANDARDEFILEID");
										}*/
										//System.out.println(tESTCASEVER+"============="+caseId);
										Table tbe = queryCaseByIdAndVersion(Integer.valueOf(tESTCASEVER), caseId);
										//Table tbe = queryCaseById(caseId);
										if (tbe != null && tbe.size() > 0) {
											//return "error";
											if (importMod.equals("true")) {
												if(caseOccupyInfo(Integer.valueOf(tESTCASEVER), caseId)){
													res.append(file.getName() + "文件中id为" + caseId + " 版本为"+tESTCASEVER+" 的用例已被占用，请改变版本" + "\n");
													continue;
												}else{
													//删除以前的各项内容
													deleteCaseInfo(Integer.valueOf(tESTCASEVER), caseId);
												}
												
												
											} else {
												res.append(file.getName() + "文件中id为" + caseId + "的用例已存在" + "\n");
												continue;
											}
										}

										//保存用例信息
										saveTestCaseInfo(Integer.valueOf(tESTCASEVER), caseId, caseName, casePrior, caseDesc, caseString,
												new Timestamp(new Date().getTime()), BigDecimal.valueOf(Integer.valueOf(detionBaseId)));
										//保存用例检测信息
										saveTestCaseDectionInfo(Integer.valueOf(tESTCASEVER), caseId,
												BigDecimal.valueOf(Integer.valueOf(aPPLYFOROBJECT)),
												BigDecimal.valueOf(Integer.valueOf(aPPLYFORDEVICETYPE)),
												BigDecimal.valueOf(Integer.valueOf(aPPLYFORRANGE)),
												BigDecimal.valueOf(Integer.valueOf(aPPLYFORSUBRANGE)));

										//子用例部分
										SubTestCases stcs = tc.getSubTestCases();
										List<SubTestCase> list = stcs.getSubTestCaseList();
										for (SubTestCase stc : list) {
											SubTestCaseInfo sci = stc.getSubTestCaseInfo();
											String subCaseId = sci.getSubCaseID();
											String subCaseName = sci.getSubCaseName();
											String spendTime = "0.0";
											if (StringUtils.isNotBlank(sci.getSubCaseSpendTime())) {
												spendTime = sci.getSubCaseSpendTime();
											}
											String subLeabel = sci.getSubCaseLevel();
											String subOrder = sci.getSubCaseSeq();

											/**************2013.1.5增加指标节点部分*************************************************************/
											String indexName = sci.getIndexName();
											if (!StringUtils.isEmpty(indexName)) {
												
												Boolean hasIndex = valiIndexIdBaseInfo(indexName, BigDecimal.valueOf(Double.valueOf(aPPLYFORRANGE)),
														BigDecimal.valueOf(Double.valueOf(aPPLYFORSUBRANGE)));
												if (hasIndex) {//如果存在
													Boolean hasIndexApply = valiIndexIdApplayInfo(BigDecimal.valueOf(Double.valueOf(aPPLYFOROBJECT)),
															BigDecimal.valueOf(Double.valueOf(aPPLYFORDEVICETYPE)));
													if (!hasIndexApply) {
														Table tableIndex = queryIndexIdBaseInfo(indexName,
																BigDecimal.valueOf(Double.valueOf(aPPLYFORRANGE)),
																BigDecimal.valueOf(Double.valueOf(aPPLYFORSUBRANGE)));
														Integer iNDEXID = tableIndex.iterator().next().getInteger("INDEX_ID_BASE_INFO");
														saveIndexIdApplyInfo(iNDEXID, BigDecimal.valueOf(Double.valueOf(aPPLYFOROBJECT)),
																BigDecimal.valueOf(Double.valueOf(aPPLYFORDEVICETYPE)));
													}
												} else {//数据库中不存在此指标保存指标信息和指标应用信息
													Integer indexId = getMaxIndexId();
													saveIndeIdBaseInfo(indexId, indexName, indexName,
															BigDecimal.valueOf(Double.valueOf(aPPLYFORRANGE)),
															BigDecimal.valueOf(Double.valueOf(aPPLYFORSUBRANGE)), "");
													saveIndexIdApplyInfo(indexId, BigDecimal.valueOf(Double.valueOf(aPPLYFOROBJECT)),
															BigDecimal.valueOf(Double.valueOf(aPPLYFORDEVICETYPE)));
												}
												//保存子用例基本信息
												saveSubTestCaseInfo(Integer.valueOf(tESTCASEVER), caseId, subCaseId, subCaseName,
														BigDecimal.valueOf(Integer.valueOf(subLeabel)),
														BigDecimal.valueOf(Integer.valueOf(subOrder)),
														BigDecimal.valueOf(Double.valueOf(spendTime)), BigDecimal.valueOf(5), indexName);
											} else {
												saveSubTestCaseInfo(Integer.valueOf(tESTCASEVER), caseId, subCaseId, subCaseName,
														BigDecimal.valueOf(Integer.valueOf(subLeabel)),
														BigDecimal.valueOf(Integer.valueOf(subOrder)),
														BigDecimal.valueOf(Double.valueOf(spendTime)), BigDecimal.valueOf(5), indexName);
											}

											/***************************************************************************/

											//子用例步骤信息
											Steps steps = stc.getSteps();
											List<Step> stepList = steps.getStepList();
											for (Step step : stepList) {
												String stepId = step.getStepNo();
												String stepDes = step.getDescription();
												String stepLevel = "0";
												if (StringUtils.isNotBlank(step.getStepLevel())) {
													stepLevel = step.getStepLevel();
												}
												//保存测试子用例执行步骤信息
												saveSubTestCaseStepInfo(Integer.valueOf(tESTCASEVER), caseId, subCaseId,
														BigDecimal.valueOf(Integer.valueOf(stepId)), stepDes,
														BigDecimal.valueOf(Integer.valueOf(stepLevel)));
											}
										}
										res.append(file.getName() + "中的用例成功导入" + "\n");

										//file.delete();

									}
								}

							}
						}
						if (zipFile != null) {
							zipFile.close();
							fileDelete.add(zipName);
						}
					} catch (IOException e1) {
						// TODO Auto-generated catch block
						System.out.println("******Error");
						e1.printStackTrace();
					}

				}

			}
		}
		System.out.println("长度是：" + fileDelete.size());
		for (String fileName : fileDelete) {
			if (StringUtils.isNotBlank(fileName)) {
				File file = new File(fileName);
				file.delete();
			}
		}
		//System.out.println(res.toString());
		return res.toString();
	}

	public static String importCase1(String dectionBaseInfoId, String fpath, String caseVersion) {
		String detionBaseId = (String) ModelUtils.getRequestContext().getActionContext().getParameter("dectionBaseInfoId");
		String filePath = (String) ModelUtils.getRequestContext().getActionContext().getParameter("fpath");
		String tESTCASEVER = (String) ModelUtils.getRequestContext().getActionContext().getParameter("caseVersion");
		System.out.println("方案：" + detionBaseId + "路径：" + filePath);

		File file = new File("D:/temp/caseInfo");
		System.out.println(file.getAbsolutePath());
		//遍历文件夹下的xml文件
		File[] fileArray = file.listFiles();
		StringBuffer sbf = new StringBuffer();
		for (int i = 0; i < fileArray.length; i++) {
			String caseString = readFileToString(fileArray[i]);
			//System.out.println("***********"+caseString);
			//将用例xml对象转为用例对象
			DetectionTask dt = XmlBean.xmlToDetectionTask(caseString);
			TestCases tcs = dt.getTestCases();
			TestCase tc = tcs.getTestCaseList().get(0);
			TestCaseInfo tci = tc.getTestCaseInfo();
			String caseId = tci.getCaseId();
			String caseName = tci.getCaseName();
			String casePrior = tci.getCasePrior();
			if (casePrior.indexOf("|") != -1) {
				casePrior = casePrior.split("\\|")[0];
			}
			String caseDesc = " ";
			if (StringUtils.isNotBlank(tci.getDescription())) {
				caseDesc = tci.getDescription();
			}
			DetectionObject dot = tci.getDetectionObject();
			DetectionRange dre = tci.getDetectionRange();

			String aPPLYFOROBJECT = "";
			String aPPLYFORDEVICETYPE = "";
			String aPPLYFORRANGE = "";
			String aPPLYFORSUBRANGE = "";

			String dotS = dot.getType();
			String dtS = dot.getSubType();
			String drt = dre.getType();
			String drs = dre.getSubType();
			if (dotS.indexOf("|") != -1) {
				aPPLYFOROBJECT = dotS.split("\\|")[0];
			}
			if (dtS.indexOf("|") != -1) {
				aPPLYFORDEVICETYPE = dtS.split("\\|")[0];
			}
			if (drt.indexOf("|") != -1) {
				aPPLYFORRANGE = drt.split("\\|")[0];
			}
			if (drs.indexOf("|") != -1) {
				aPPLYFORSUBRANGE = drs.split("\\|")[0];
			}

			Table tb = getDetionBaseInfo(detionBaseId);
			String sTANDARDEFILEID = "";
			if (tb != null && tb.size() > 0) {
				sTANDARDEFILEID = (String) tb.iterator().next().getValue("sTANDARDEFILEID");
			}
			System.out.println(tESTCASEVER + "=============" + caseId);
			//Table tbe = queryCaseByIdAndVersion(Integer.valueOf(tESTCASEVER), caseId);
			Table tbe = queryCaseById(caseId);
			if (tbe != null && tbe.size() > 0) {
				System.out.println("用例已存在");
				sbf.append("," + fileArray[i].getName());
				return "error";
			} else {
				//保存用例信息
				saveTestCaseInfo(Integer.valueOf(tESTCASEVER), caseId, caseName, casePrior, caseDesc, caseString,
						new Timestamp(new Date().getTime()), BigDecimal.valueOf(Integer.valueOf(detionBaseId)));
				//保存用例检测信息
				saveTestCaseDectionInfo(Integer.valueOf(tESTCASEVER), caseId, BigDecimal.valueOf(Integer.valueOf(aPPLYFOROBJECT)),
						BigDecimal.valueOf(Integer.valueOf(aPPLYFORDEVICETYPE)), BigDecimal.valueOf(Integer.valueOf(aPPLYFORRANGE)),
						BigDecimal.valueOf(Integer.valueOf(aPPLYFORSUBRANGE)));

				//子用例部分
				SubTestCases stcs = tc.getSubTestCases();
				List<SubTestCase> list = stcs.getSubTestCaseList();
				for (SubTestCase stc : list) {
					SubTestCaseInfo sci = stc.getSubTestCaseInfo();
					String subCaseId = sci.getSubCaseID();
					String subCaseName = sci.getSubCaseName();
					String spendTime = "0";
					if (StringUtils.isNotBlank(sci.getSubCaseSpendTime())) {
						spendTime = sci.getSubCaseSpendTime();
					}
					String subLeabel = sci.getSubCaseLevel();
					String subOrder = sci.getSubCaseSeq();
					//保存子用例基本信息
					saveSubTestCaseInfo(Integer.valueOf(tESTCASEVER), caseId, subCaseId, subCaseName, BigDecimal.valueOf(Integer.valueOf(subLeabel)),
							BigDecimal.valueOf(Integer.valueOf(subOrder)), BigDecimal.valueOf(Integer.valueOf(spendTime)), BigDecimal.valueOf(5), "");
					//子用例步骤信息
					Steps steps = stc.getSteps();
					List<Step> stepList = steps.getStepList();
					for (Step step : stepList) {
						String stepId = step.getStepNo();
						String stepDes = step.getDescription();
						String stepLevel = "0";
						if (StringUtils.isNotBlank(step.getStepLevel())) {
							stepLevel = step.getStepLevel();
						}
						//保存测试子用例执行步骤信息
						saveSubTestCaseStepInfo(Integer.valueOf(tESTCASEVER), caseId, subCaseId, BigDecimal.valueOf(Integer.valueOf(stepId)),
								stepDes, BigDecimal.valueOf(Integer.valueOf(stepLevel)));
					}
				}
				return "success";
			}

		}
		return null;
	}

	/**
	 * 保存测试用例信息
	 * @param tESTCASEVER  		测试用例名称
	 * @param tESTCASEID 		测试用例ID
	 * @param tESTCASENAME 		测试用例名称
	 * @param tESTCASEPRIOR		测试用例级别
	 * @param tESTCASEDESC		测试用例描述
	 * @param tESTCASEFILE		测试用例XML文件
	 * @param mAKEDATETIME		作成时间
	 * @param dECTIONBASEDONID	检测依据
	 * @param sTANDARDEFILEID	依据标准内部文件ID
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveTestCaseInfo(Integer tESTCASEVER, String tESTCASEID, String tESTCASENAME, String tESTCASEPRIOR, String tESTCASEDESC,
			String tESTCASEFILE, Date mAKEDATETIME, BigDecimal dECTIONBASEDONID) {
		//构建参数信息
		Map map = new HashMap();
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("tESTCASENAME", tESTCASENAME);
		map.put("tESTCASEPRIOR", tESTCASEPRIOR);
		map.put("tESTCASEDESC", tESTCASEDESC);
		map.put("tESTCASEFILE", tESTCASEFILE);
		map.put("mAKEDATETIME", mAKEDATETIME);
		map.put("dECTIONBASEDONID", dECTIONBASEDONID);
		//map.put("sTANDARDEFILEID", sTANDARDEFILEID);
		//KSQL保存语句
		String saveCase = "insert into TEST_CASE_BASE_INFO tc (tc,tc.tESTCASEVER,tc.tESTCASEID,tc.tESTCASENAME,tc.tESTCASEPRIOR,"
				+ "tc.tESTCASEDESC,tc.tESTCASEFILE,tc.mAKEDATETIME,tc.dECTIONBASEDONID) values (:guid(),:tESTCASEVER,:tESTCASEID,:tESTCASENAME,"
				+ ":tESTCASEPRIOR,:tESTCASEDESC,:tESTCASEFILE,:mAKEDATETIME,:dECTIONBASEDONID)";
		//执行
		KSQL.executeUpdate(saveCase, map, "/metrodetection/system_code/data", null);

	}

	/**
	 * 保存测试用例检测信息
	 * @param tESTCASEVER			测试用例版本
	 * @param tESTCASEID			测试用例ID
	 * @param aPPLYFOROBJECT		应用检测对象类型
	 * @param aPPLYFORDEVICETYPE	应用检测对象
	 * @param aPPLYFORRANGE			应用检测方面类型
	 * @param aPPLYFORSUBRANGE		应用检测方面
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveTestCaseDectionInfo(Integer tESTCASEVER, String tESTCASEID, BigDecimal aPPLYFOROBJECT, BigDecimal aPPLYFORDEVICETYPE,
			BigDecimal aPPLYFORRANGE, BigDecimal aPPLYFORSUBRANGE) {
		//构建参数信息
		Map map = new HashMap();
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("aPPLYFOROBJECT", aPPLYFOROBJECT);
		map.put("aPPLYFORDEVICETYPE", aPPLYFORDEVICETYPE);
		map.put("aPPLYFORRANGE", aPPLYFORRANGE);
		map.put("aPPLYFORSUBRANGE", aPPLYFORSUBRANGE);
		//KSQL保存语句
		String saveCaseDectionInfo = "insert into TEST_CASE_DECTION_INFO tcdi (tcdi,tcdi.tESTCASEVER,tcdi.tESTCASEID,tcdi.aPPLYFOROBJECT,tcdi.aPPLYFORDEVICETYPE,tcdi.aPPLYFORRANGE,tcdi.aPPLYFORSUBRANGE) "
				+ "values (:guid(),:tESTCASEVER,:tESTCASEID,:aPPLYFOROBJECT,:aPPLYFORDEVICETYPE,:aPPLYFORRANGE,:aPPLYFORSUBRANGE)";
		//执行
		KSQL.executeUpdate(saveCaseDectionInfo, map, "/metrodetection/system_code/data", null);
	}

	/**
	 * 保存测试子用例基本信息
	 * @param tESTCASEVER		测试用例版本
	 * @param tESTCASEID		测试用例ID
	 * @param sUBTESTCASEID		测试子用例ID
	 * @param sUBTESTCASENAME	测试子用例名称
	 * @param sUBTESTCASEPRIOR	测试子用例执行级别
	 * @param sUBTESTCASEORDER	测试子用例执行顺序
	 * @param sUBTESTCASETIME	测试子用例执行耗时
	 * @param tIMEUNITID		执行时间单位.默认单位小时
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveSubTestCaseInfo(Integer tESTCASEVER, String tESTCASEID, String sUBTESTCASEID, String sUBTESTCASENAME,
			BigDecimal sUBTESTCASEPRIOR, BigDecimal sUBTESTCASEORDER, BigDecimal sUBTESTCASETIME, BigDecimal tIMEUNITID, String indexName) {
		//构建参数信息
		Map map = new HashMap();
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("sUBTESTCASEID", sUBTESTCASEID);
		map.put("sUBTESTCASENAME", sUBTESTCASENAME);
		map.put("sUBTESTCASEPRIOR", sUBTESTCASEPRIOR);
		map.put("sUBTESTCASEORDER", sUBTESTCASEORDER);
		map.put("sUBTESTCASETIME", sUBTESTCASETIME);
		map.put("tIMEUNITID", tIMEUNITID);
		map.put("indexName", indexName);
		//KSQL保存语句
		String saveSubTestCase = "insert into SUB_TEST_CASE_BASE_INFO stcbi (stcbi,stcbi.tESTCASEVER,stcbi.tESTCASEID,stcbi.sUBTESTCASEID,stcbi.sUBTESTCASENAME,"
				+ "stcbi.sUBTESTCASEPRIOR,stcbi.sUBTESTCASEORDER,stcbi.sUBTESTCASETIME,stcbi.tIMEUNITID,stcbi.iNDEXNAME) values "
				+ "(:guid(),:tESTCASEVER,:tESTCASEID,:sUBTESTCASEID,:sUBTESTCASENAME,:sUBTESTCASEPRIOR,:sUBTESTCASEORDER,:sUBTESTCASETIME,:tIMEUNITID,:indexName)";
		//执行
		KSQL.executeUpdate(saveSubTestCase, map, "/metrodetection/system_code/data", null);
	}

	/**
	 * 保存测试子用例步骤信息
	 * @param tESTCASEVER 			测试用例版本
	 * @param tESTCASEID			测试用例ID
	 * @param sUBTESTCASEID			测试子用例ID
	 * @param sUBTESTCASESTEPID		测试子用例步骤ID
	 * @param sUBTESTCASESTEPDESC	测试子用例步骤描述
	 * @param sUBTESTCASESTEPPRIOR	测试子用例步骤级别
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveSubTestCaseStepInfo(Integer tESTCASEVER, String tESTCASEID, String sUBTESTCASEID, BigDecimal sUBTESTCASESTEPID,
			String sUBTESTCASESTEPDESC, BigDecimal sUBTESTCASESTEPPRIOR) {
		//构建参数信息
		Map map = new HashMap();
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("sUBTESTCASEID", sUBTESTCASEID);
		map.put("sUBTESTCASESTEPID", sUBTESTCASESTEPID);
		map.put("sUBTESTCASESTEPDESC", sUBTESTCASESTEPDESC);
		map.put("sUBTESTCASESTEPPRIOR", sUBTESTCASESTEPPRIOR);
		//KSQL保存语句
		String saveSubCaseStep = "insert into SUB_TEST_CASE_STEP_INFO stcsi (stcsi,stcsi.tESTCASEVER,stcsi.tESTCASEID,stcsi.sUBTESTCASEID,stcsi.sUBTESTCASESTEPID,"
				+ "stcsi.sUBTESTCASESTEPDESC,stcsi.sUBTESTCASESTEPPRIOR) values "
				+ "(:guid(),:tESTCASEVER,:tESTCASEID,:sUBTESTCASEID,:sUBTESTCASESTEPID,:sUBTESTCASESTEPDESC,:sUBTESTCASESTEPPRIOR)";
		//执行
		KSQL.executeUpdate(saveSubCaseStep, map, "/metrodetection/system_code/data", null);
	}

	/**
	 * 保存测试子用例数据准备信息
	 * @param tESTCASEVER					测试用例版本
	 * @param tESTCASEID					测试用例ID
	 * @param sUBTESTCASEID					测试子用例ID
	 * @param sUBTESTCASESTEPID				测试子用例步骤ID
	 * @param sUBTESTCASESTEPSENDFLAG		测试子用例数据发送方式，1、执行产生；2、提前产生
	 * @param sUBTESTCASESTEPDATANUMBER		测试子用例数据数量
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveSubTestCaseDataInfo(Integer tESTCASEVER, String tESTCASEID, String sUBTESTCASEID, BigDecimal sUBTESTCASESTEPID,
			BigDecimal sUBTESTCASESTEPSENDFLAG, BigDecimal sUBTESTCASESTEPDATANUMBER) {
		//构建参数信息
		Map map = new HashMap();
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("sUBTESTCASEID", sUBTESTCASEID);
		map.put("sUBTESTCASESTEPID", sUBTESTCASESTEPID);
		map.put("sUBTESTCASESTEPSENDFLAG", sUBTESTCASESTEPSENDFLAG);
		map.put("sUBTESTCASESTEPDATANUMBER", sUBTESTCASESTEPDATANUMBER);
		//KSQL保存语句
		String saveSubCaseData = "insert into SUB_TEST_CASE_DATA_INFO stcdi (stcdi,stcdi.tESTCASEVER,stcdi.tESTCASEID,stcdi.sUBTESTCASEID,stcdi.sUBTESTCASESTEPID,"
				+ "stcdi.sUBTESTCASESTEPSENDFLAG,stcdi.sUBTESTCASESTEPDATANUMBER) values "
				+ "(:guid(),:tESTCASEVER,:tESTCASEID,:sUBTESTCASEID,:sUBTESTCASESTEPID,:sUBTESTCASESTEPSENDFLAG,:sUBTESTCASESTEPDATANUMBER)";
		//执行
		KSQL.executeUpdate(saveSubCaseData, map, "/metrodetection/system_code/data", null);

	}

	/**
	 * 保存测试用例和指标的映射关系
	 * @param tESTCASEVER	测试用例版本
	 * @param tESTCASEID	测试用例ID
	 * @param sUBTESTCASEID	测试子用例ID
	 * @param bUSINESSID	指标应用业务类型
	 * @param iNDEXNO		指标序号
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveIndexAndCase(Integer tESTCASEVER, String tESTCASEID, String sUBTESTCASEID, BigDecimal bUSINESSID, BigDecimal iNDEXNO) {
		//构建参数信息
		Map map = new HashMap();
		map.put("tESTCASEVER", tESTCASEVER);
		map.put("tESTCASEID", tESTCASEID);
		map.put("sUBTESTCASEID", sUBTESTCASEID);
		map.put("bUSINESSID", bUSINESSID);
		map.put("iNDEXNO", iNDEXNO);
		//KSQL保存语句
		String saveIndexAndCase = "insert into RELATIONSHIP_INDEX_AND_CASE riac (stcdi,stcdi.tESTCASEVER,stcdi.tESTCASEID,stcdi.sUBTESTCASEID,"
				+ "riac.bUSINESSID,riac.iNDEXNO) values " + "(:guid(),:tESTCASEVER,:tESTCASEID,:sUBTESTCASEID,:bUSINESSID,:iNDEXNO)";
		//执行
		KSQL.executeUpdate(saveIndexAndCase, map, "/metrodetection/system_code/data", null);
	}

	/**
	 * 根据检测依据id获取检测依据对象
	 * @param detionBaseId
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Table getDetionBaseInfo(String detionBaseId) {
		//构建参数信息
		Map map = new HashMap();
		map.put("detionBaseId", Integer.valueOf(detionBaseId));
		String query = "select dboi.* from DECTION_BASED_ON_INFO dboi where dboi=:detionBaseId";
		Table tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}

	/**
	 * 根据用例id和版本获取检测用例对象
	 * @param ver
	 * @param caseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table queryCaseByIdAndVersion(Integer ver, String caseId) {
		Map map = new HashMap();
		map.put("ver", ver);
		map.put("caseId", caseId);
		String query = "select tcbi.* from TEST_CASE_BASE_INFO tcbi where tcbi.tESTCASEVER=:ver and replace(tcbi.tESTCASEID,' ','')=:caseId";
		Table tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}

	/**
	 * 根据用例id和版本获取检测用例对象
	 * @param ver
	 * @param caseId
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Table queryCaseById(String caseId) {
		Map map = new HashMap();
		map.put("caseId", caseId);
		String query = "select tcbi.* from TEST_CASE_BASE_INFO tcbi where replace(tcbi.tESTCASEID,' ','')=:caseId";
		Table tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}

	/**
	 * 删除测试用例的关联信息
	 * @param caseVersion    用力版本
	 * @param caseId         用例id
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void deleteCaseInfo(Integer caseVersion, String caseId) {
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("caseVersion", caseVersion);

		//删除测试用例检测信息
		String delCaseDev = "delete from TEST_CASE_DECTION_INFO tcdi where replace(tcdi.tESTCASEID,' ','')=:caseId and tcdi.tESTCASEVER=:caseVersion";
		KSQL.executeUpdate(delCaseDev, map, "/metrodetection/system_code/data", null);

		//删除测试子用例步骤信息
		String delSubCaseStep = "delete from SUB_TEST_CASE_STEP_INFO stcsi where replace(stcsi.tESTCASEID,' ','')=:caseId and stcsi.tESTCASEVER=:caseVersion";
		KSQL.executeUpdate(delSubCaseStep, map, "/metrodetection/system_code/data", null);
		
		//删除测试子用例数据准备信息
		String delSubCaseData = "delete from SUB_TEST_CASE_DATA_INFO stcdi where replace(stcdi.tESTCASEID,' ','')=:caseId and stcdi.tESTCASEVER=:caseVersion";
		KSQL.executeUpdate(delSubCaseData, map, "/metrodetection/system_code/data", null);
		
		//删除指标和用例映射信息
		String delIndexCase="delete from RELATIONSHIP_INDEX_AND_CASE riac where replace(riac.tESTCASEID,' ','')=:caseId and riac.tESTCASEVER=:caseVersion";
		KSQL.executeUpdate(delIndexCase, map, "/metrodetection/system_code/data", null);
		
		//删除测试子用例信息
		String delSubCaseInfo = "delete from SUB_TEST_CASE_BASE_INFO stcbi where replace(stcbi.tESTCASEID,' ','')=:caseId and stcbi.tESTCASEVER=:caseVersion";
		KSQL.executeUpdate(delSubCaseInfo, map, "/metrodetection/system_code/data", null);
		
		//删除测试用例基本信息
		String delCaseInfo = "delete from TEST_CASE_BASE_INFO tcbi where replace(tcbi.tESTCASEID,' ','')=:caseId and tcbi.tESTCASEVER=:caseVersion";
		KSQL.executeUpdate(delCaseInfo, map, "/metrodetection/system_code/data", null);
	}
	
	/**
	 * 查询用例是否被占用
	 * @param caseVersion用例版本
	 * @param caseId用例Id
	 * @return
	 */
	public static boolean caseOccupyInfo(Integer caseVersion, String caseId){
		boolean occupy = false;
		Map map = new HashMap();
		map.put("caseId", caseId);
		map.put("caseVersion", caseVersion);
		
		//用例是否被测试用例检测工具占用
		String queryTestCaseDectionTool = "select tcti.* from TEST_CASE_TOOL_INFO tcti where replace(tcti.tESTCASEID,' ','')=:caseId and tcti.tESTCASEVER=:caseVersion";
		Table tabTestCaseDectionTool = KSQL.select(queryTestCaseDectionTool, map, "/metrodetection/system_code/data", null);
		
		//用例是否被测试用例检测信息占用
		//String queryTestCaseDection = "select tcdi.* from TEST_CASE_DECTION_INFO tcdi where replace(tcdi.tESTCASEID,' ','')=:caseId and tcdi.tESTCASEVER=:caseVersion";
		//Table tabTestCaseDection = KSQL.select(queryTestCaseDection, map, "/metrodetection/system_code/data", null);
		
		//用例是否被测试用例检测信息占用
		String queryTestCaseScheme = "select tsci.* from TEST_SCHEME_CASE_INFO tsci where replace(tsci.tESTCASEID,' ','')=:caseId and tsci.tESTCASEVER=:caseVersion";
		Table tabTestCaseScheme = KSQL.select(queryTestCaseScheme, map, "/metrodetection/system_code/data", null);
		
		//用例是否被测试子用例检测信息占用
		//String queryTestCaseSubTest = "select stcbi.* from SUB_TEST_CASE_BASE_INFO stcbi where replace(stcbi.tESTCASEID,' ','')=:caseId and stcbi.tESTCASEVER=:caseVersion";
		//Table tabTestCaseSubTest = KSQL.select(queryTestCaseSubTest, map, "/metrodetection/system_code/data", null);
		
		
		if(tabTestCaseDectionTool.size()>0 || tabTestCaseScheme.size()>0){
			occupy = true;
		}
		return occupy;
	}

	/**
	 * 根据指标名称,检测方面类别,检测方面查询指标
	 * @param indexIdName
	 * @param detetionRangeType
	 * @param detectionRangeId
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Table queryIndexIdBaseInfo(String indexIdName, BigDecimal detetionRangeType, BigDecimal detectionRangeId) {
		Table tb = null;
		Map map = new HashMap();
		map.put("indexIdName", indexIdName);
		map.put("detetionRangeType", detetionRangeType);
		map.put("detectionRangeId", detectionRangeId);
		String query = "select iibi.* from INDEX_ID_BASE_INFO iibi where iibi.iNDEXIDCNAME=:indexIdName and iibi.dETECTIONRANGETYPE=:detetionRangeType "
				+ "and iibi.dETECTIONRANGEID=:detectionRangeId";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		return tb;
	}

	/**
	 * 根据指标名称,检测方面类别,检测方面查询指标是否存在
	 * @param indexIdName
	 * @param detetionRangeType
	 * @param detectionRangeId
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Boolean valiIndexIdBaseInfo(String indexIdName, BigDecimal detetionRangeType, BigDecimal detectionRangeId) {
		Boolean flag = false;
		Map map = new HashMap();
		map.put("indexIdName", indexIdName);
		map.put("detetionRangeType", detetionRangeType);
		map.put("detectionRangeId", detectionRangeId);
		String query = "select iibi.* from INDEX_ID_BASE_INFO iibi where iibi.iNDEXIDCNAME=:indexIdName and iibi.dETECTIONRANGETYPE=:detetionRangeType "
				+ "and iibi.dETECTIONRANGEID=:detectionRangeId";
		Table tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		if (tb.size() > 0) {
			flag = true;
		}
		return flag;
	}

	/**
	 * 根据检测对象类别和检测对象查询指标应用信息是否存在
	 * @param aPPLYFOROBJECT
	 * @param aPPLYFORDEVICETYPE
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Boolean valiIndexIdApplayInfo(BigDecimal aPPLYFOROBJECT, BigDecimal aPPLYFORDEVICETYPE) {
		Boolean flag = false;
		Map map = new HashMap();
		map.put("aPPLYFOROBJECT", aPPLYFOROBJECT);
		map.put("aPPLYFORDEVICETYPE", aPPLYFORDEVICETYPE);
		String query = "select iiai.* from INDEX_ID_APPLY_INFO iiai where iiai.aPPLYFOROBJECT=:aPPLYFOROBJECT and iiai.aPPLYFORDEVICETYPE=:aPPLYFORDEVICETYPE";
		Table tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);
		if (tb.size() > 0) {
			flag = true;
		}
		return flag;
	}

	/**
	 * 查询定义基础信息中指标id的最大值
	 * @return
	 */
	public static Integer getMaxIndexId() {
		Integer sn = 1;
		String query = "select max(iibi) as maxId from INDEX_ID_BASE_INFO iibi";
		Table tb = KSQL.select(query, null, "/metrodetection/system_code/data", null);
		if (tb.size() > 0) {
			Integer bd = (Integer) tb.iterator().next().getValue("maxId");
			if (bd != null) {
				sn = Integer.valueOf(String.valueOf(bd)) + 1;
			}
		} else {
			System.out.println("***************");
		}
		return sn;
	}

	/**
	 * 保存指标定义基础信息
	 * @param iNDEXIDCNAME              指标名称
	 * @param iNDEXIDDEFINITION			指标定义
	 * @param dETECTIONRANGETYPE		指标检测方面类别
	 * @param dETECTIONRANGEID			检测方面
	 * @param memo						备注
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void saveIndeIdBaseInfo(Integer indexId, String iNDEXIDCNAME, String iNDEXIDDEFINITION, BigDecimal dETECTIONRANGETYPE,
			BigDecimal dETECTIONRANGEID, String memo) {
		Map map = new HashMap();
		map.put("indexId", indexId);
		map.put("iNDEXIDCNAME", iNDEXIDCNAME);
		map.put("iNDEXIDDEFINITION", iNDEXIDDEFINITION);
		map.put("dETECTIONRANGETYPE", dETECTIONRANGETYPE);
		map.put("dETECTIONRANGEID", dETECTIONRANGEID);
		map.put("memo", memo);
		String saveQ = "insert into INDEX_ID_BASE_INFO iibi (iibi,iibi.iNDEXIDCNAME,iibi.iNDEXIDDEFINITION,iibi.dETECTIONRANGETYPE,iibi.dETECTIONRANGEID,iibi.mEMO) "
				+ "values (:indexId,:iNDEXIDCNAME,:iNDEXIDDEFINITION,:dETECTIONRANGETYPE,:dETECTIONRANGEID,:memo)";
		KSQL.executeUpdate(saveQ, map, "/metrodetection/system_code/data", null);
	}

	/**
	 * 保存指标应用信息
	 * @param iNDEXID 				指标id
	 * @param aPPLYFOROBJECT		应用检测对象类别
	 * @param aPPLYFORDEVICETYPE	应用检测对象
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void saveIndexIdApplyInfo(Integer iNDEXID, BigDecimal aPPLYFOROBJECT, BigDecimal aPPLYFORDEVICETYPE) {
		Map map = new HashMap();
		map.put("iNDEXID", iNDEXID);
		map.put("aPPLYFOROBJECT", aPPLYFOROBJECT);
		map.put("aPPLYFORDEVICETYPE", aPPLYFORDEVICETYPE);
		String saveQ = "insert into INDEX_ID_APPLY_INFO iiai (iiai,iiai.iNDEXID,iiai.aPPLYFOROBJECT,iiai.aPPLYFORDEVICETYPE) "
				+ "values (:guid(),:iNDEXID,:aPPLYFOROBJECT,:aPPLYFORDEVICETYPE)";
		KSQL.executeUpdate(saveQ, map, "/metrodetection/system_code/data", null);
	}

}
