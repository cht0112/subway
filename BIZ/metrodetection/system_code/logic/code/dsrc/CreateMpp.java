import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import net.sf.mpxj.Duration;
import net.sf.mpxj.ProjectFile;
import net.sf.mpxj.Relation;
import net.sf.mpxj.RelationType;
import net.sf.mpxj.Resource;
import net.sf.mpxj.ResourceAssignment;
import net.sf.mpxj.Task;
import net.sf.mpxj.TimeUnit;
import net.sf.mpxj.mpp.MPPReader;
import net.sf.mpxj.mpx.MPXWriter;

import org.apache.tools.zip.ZipEntry;
import org.apache.tools.zip.ZipOutputStream;

import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
public class CreateMpp {
	public static String createMpp(Integer applicationNo){
		String path = "";
		String st = "";
		String filename = "";
		st = PropertiesAction.PropertiesA("exportWordUrl");
		path = PropertiesAction.PropertiesA("downloadTaskUrl");
		String ksqlSelect = "select tv.*,TEST_SCHEME_CASE_INFO.tESTCASEVER as tESTCASEVER, " +
		"TEST_SCHEME_CASE_INFO.tESTCASEID as tESTCASEID, " +
		"TEST_SCHEME_CASE_INFO.tESTSCHEMEID as tESTSCHEMEID " +
		"from PLAN_VIEW tv optional join TEST_SCHEME_CASE_INFO TEST_SCHEME_CASE_INFO " +
		"on tv.cASEVERSION = TEST_SCHEME_CASE_INFO.tESTCASEVER AND tv.cASEID = TEST_SCHEME_CASE_INFO.tESTCASEID " +
		//			"where TEST_SCHEME_CASE_INFO.aPPLICATIONNO="+applicationNo;
		"where tv='root' or TEST_SCHEME_CASE_INFO.tESTSCHEMEID=(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO="+applicationNo+")";
		System.out.println("===sql1===:"+ksqlSelect);
		Table tTask = KSQL.select(ksqlSelect, null, "/metrodetection/system_code/data", null);
		System.out.println("---------------->"+tTask.size());
		Iterator<Row> rTasks = tTask.iterator();
		Iterator<Row> rTimes = tTask.iterator();
		
		String ksqlSelect1 = "select TEST_PROJECT_MEMBER_INFO,TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID as pROJECTMEMBERID,TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO as aPPLICATION_NO, " +
		"HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO.pOSITIONID as pOSITIONID, " +
		"TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,POSITION_TYPE_CODE.pOSITIONIDCNAME as pOSITIONIDCNAME, " +
		"TEST_PROJECT_TASK_INFO,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME, " +
		"HR_OCCUPY_INFO,HR_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME, " +
		"HR_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME, " +
		"TEST_PROJECT_TASK_INFO.aCTUALSTARTDATE as aCTUALSTARTDATE, " +
		"TEST_PROJECT_TASK_INFO.aCTUALENDINGDATE as aCTUALENDINGDATE " +
		"from TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO " + 
		"optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = TEST_PROJECT_INFO.aPPLICATIONNO " +
		"optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID " +
		"optional  join POSITION_TYPE_CODE POSITION_TYPE_CODE on POSITION_TYPE_CODE = HR_BASE_INFO.pOSITIONID " +
		"optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_PROJECT_INFO = TEST_PROJECT_TASK_INFO.pROJECTID AND TEST_PROJECT_TASK_INFO.pLANOPERATORID = HR_BASE_INFO " +
		"optional  join HR_OCCUPY_INFO HR_OCCUPY_INFO on HR_BASE_INFO = HR_OCCUPY_INFO.oPERATORID AND TEST_PROJECT_TASK_INFO.tASKID = HR_OCCUPY_INFO.tESTTASKID " +
		"where TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO="+applicationNo;
		System.out.println("===sql2===:"+ksqlSelect1);
		Table tName = KSQL.select(ksqlSelect1, null, "/metrodetection/system_code/data", null);
		Iterator<Row> rNames = tName.iterator();

		//资源列表
		List<String> names = new ArrayList<String>();

		while(rNames.hasNext()){
			Row r = rNames.next();
			names.add((String) r.getValue("oPERATORNAME"));
			System.out.println((String) r.getValue("oPERATORNAME")+" | ");
		}

		ProjectFile file =new ProjectFile();

		//给project文件添加资源列表
		for(int i=0; i<names.size(); i++){
			file.addResource().setName(names.get(i));
		}

		//存放前置关系
		List<Integer> r = new ArrayList<Integer>();
		//存放从数据库读取的用例
		List<Task> t = new ArrayList<Task>();
		
		//计算工时
		List<Double> times = new ArrayList<Double>();
		while(rTimes.hasNext()){
			Row rr = rTimes.next();
			BigDecimal shijian = rr.getDecimal("sHIJIAN");
			if(shijian != null) {
				times.add(shijian.doubleValue());
			} else {
				times.add(null);
			}
		}
		Double time1 = 0.0;
		for(int k=0; k<times.size(); k++){
//			int f = 0;
			if(times.get(k)!=null){
				time1 = time1 + times.get(k);
			}
		}
		times.set(0, time1);
		int s = 1;
		Double m = 0.0;
		for(int k=1; k<times.size(); k++){
			m = m + (times.get(k)==null?0:times.get(k));
			if(times.get(k)==null){
				times.set(s, m);
				s = k;
				m = 0.0;
			}
		}
		times.set(s, m);
		
		//添加测试用例信息
		int j=0;
		while (rTasks.hasNext()){
			//添加任务
			Task task = file.addTask();
			Row row = rTasks.next();
			task.setID(j+1);
			task.setUniqueID(j+1);
			task.setName(row.getValue("tESTCASENAME").toString());
			//			task.setDuration(row.getValue("sHIJIAN"));
			if(times.get(j)!=null){
				double d = Double.parseDouble(String.valueOf(times.get(j)));
				task.setDuration(Duration.getInstance(d, TimeUnit.HOURS));
			} else {
				task.setDuration(Duration.getInstance(0, TimeUnit.HOURS));
			}

			r.add((Integer)row.getValue("qZRW"));
			//给文件中的测试用例写入前置关系
			if(row.getValue("qZRW")!=null){
//				System.out.println("前置任务："+t.get(r.get(j)-1));
				task.addPredecessor(t.get(r.get(j)-1), RelationType.FINISH_START, null);
//				System.out.println(r.get(j)-1+"<--"+row.getValue("qZRW"));
			} 
			j++;
		}


		try {
			st=PropertiesAction.PropertiesA("exportWordUrl");
			path= PropertiesAction.PropertiesA("downloadTaskUrl");
			filename = st+applicationNo.toString()+".mpx";
			MPXWriter writer = new MPXWriter();
			writer.setLocale(Locale.CHINESE);	
			writer.write(file, filename);
			zipSingleFile(st+applicationNo.toString()+".mpx", st+applicationNo.toString()+".zip");
			path = path+applicationNo.toString()+".zip";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		return path;
	}

	public static boolean zipSingleFile(String file, String zipFile)
	throws IOException {
		boolean bf = true;
		File f = new File(file);
		if (!f.exists()) {
			System.out.println("文件不存在");
			bf = false;
		} else {
			File ff = new File(zipFile);
			if (!f.exists()) {
				ff.createNewFile();
			}
			// 创建文件输入流对象
			FileInputStream in = new FileInputStream(file);
			// 创建文件输出流对象
			FileOutputStream out = new FileOutputStream(zipFile);
			// 创建ZIP数据输出流对象
			ZipOutputStream zipOut = new ZipOutputStream(out);
			// 得到文件名称
			String fileName = file.substring(file.lastIndexOf('/') + 1, file.length());
			// 创建指向压缩原始文件的入口
			ZipEntry entry = new ZipEntry(fileName);
			zipOut.putNextEntry(entry);
			// 向压缩文件中输出数据
			int number = 0;
			byte[] buffer = new byte[512];
			while ((number = in.read(buffer)) != -1) {
				zipOut.write(buffer, 0, number);
			}
			zipOut.close();
			out.close();
			in.close();
		}
		return bf;
	}

	public static String importMpp(String filename, String applicationNo, String timeParam) {
		Map initMap = new HashMap();
		initMap.put("applicationNo", applicationNo);
		String deleteCaseHouse = "delete from CASE_HOUSE che where che.FAPPLICATIONNO=:applicationNo";
		KSQL.executeUpdate(deleteCaseHouse, initMap, "/metrodetection/system_code/data", null);
		StringBuffer res = new StringBuffer();
		String ksqlSelect1 = "select TEST_PROJECT_MEMBER_INFO,TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID as pROJECTMEMBERID,TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO as aPPLICATION_NO, "
				+ "HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO.pOSITIONID as pOSITIONID, "
				+ "TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,POSITION_TYPE_CODE.pOSITIONIDCNAME as pOSITIONIDCNAME, "
				+ "TEST_PROJECT_TASK_INFO,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME, "
				+ "HR_OCCUPY_INFO,HR_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME, "
				+ "HR_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME, "
				+ "TEST_PROJECT_TASK_INFO.aCTUALSTARTDATE as aCTUALSTARTDATE, "
				+ "TEST_PROJECT_TASK_INFO.aCTUALENDINGDATE as aCTUALENDINGDATE "
				+ "from TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO "
				+ "optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = TEST_PROJECT_INFO.aPPLICATIONNO "
				+ "optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID "
				+ "optional  join POSITION_TYPE_CODE POSITION_TYPE_CODE on POSITION_TYPE_CODE = HR_BASE_INFO.pOSITIONID "
				+ "optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_PROJECT_INFO = TEST_PROJECT_TASK_INFO.pROJECTID AND TEST_PROJECT_TASK_INFO.pLANOPERATORID = HR_BASE_INFO "
				+ "optional  join HR_OCCUPY_INFO HR_OCCUPY_INFO on HR_BASE_INFO = HR_OCCUPY_INFO.oPERATORID AND TEST_PROJECT_TASK_INFO.tASKID = HR_OCCUPY_INFO.tESTTASKID "
				+ "where TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO=" + applicationNo;
		System.out.println("===sql2===:" + ksqlSelect1);
		Table tName = KSQL.select(ksqlSelect1, null, "/metrodetection/system_code/data", null);
		Iterator<Row> rNames = tName.iterator();
		List<String> names = new ArrayList<String>();

		while (rNames.hasNext()) {
			Row r = rNames.next();
			names.add((String) r.getValue("pROJECTMEMBERID") + "," + (String) r.getValue("oPERATORNAME"));
			System.out.println((String) r.getValue("oPERATORNAME") + " | ");
		}

		String ksqlSelect = "select tv.*,TEST_SCHEME_CASE_INFO.tESTCASEVER as tESTCASEVER, "
				+ "TEST_SCHEME_CASE_INFO.tESTCASEID as tESTCASEID, "
				+ "TEST_SCHEME_CASE_INFO.tESTSCHEMEID as tESTSCHEMEID "
				+ "from PLAN_VIEW tv optional join TEST_SCHEME_CASE_INFO TEST_SCHEME_CASE_INFO "
				+ "on tv.cASEVERSION = TEST_SCHEME_CASE_INFO.tESTCASEVER AND tv.cASEID = TEST_SCHEME_CASE_INFO.tESTCASEID "
				+ "where tv='root' or TEST_SCHEME_CASE_INFO.tESTSCHEMEID=(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO="
				+ Integer.parseInt(applicationNo) + ")";
		System.out.println("===sql1===:" + ksqlSelect);
		Table tTask = KSQL.select(ksqlSelect, null, "/metrodetection/system_code/data", null);
		Iterator<Row> rTasks = tTask.iterator();
		String[] ts = new String[tTask.size()];

		Map<Integer, List<String>> m = new HashMap<Integer, List<String>>();
		int j = 0;
		while (rTasks.hasNext()) {
			Row r = rTasks.next();
			String fId = (String) r.getValue("tv");
			ts[j] = fId;
			j++;
		}

		try {
			File file = new File(filename);
			MPPReader mppRead = new MPPReader();
			ProjectFile pf = mppRead.read(file);
			System.out.println("项目文件 : " + pf.getProjectFilePath());
			List<Task> tasks = pf.getAllTasks();
			System.out.println("ID|任务名称|资源|开始时间|完成时间|前置任务");
			for (int i = 1; i < tasks.size(); i++) {

				List<Relation> p = ((Task) tasks.get(i)).getPredecessors();
				String t = "";
				if (p != null && p.size() > 0) {
					List<String> pred = new ArrayList<String>();
					for (int x = 0; x < p.size(); x++) {
						Relation r = (Relation) p.get(x);
						String rid = String.valueOf(r.getTargetTask().getUniqueID());
						pred.add(rid);
						for (int n = 0; n < pred.size(); n++) {
							if (t == "") {
								t = t + pred.get(n);
							} else {
								t = t + "," + pred.get(n);
							}
						}
					}
				} else {
					List<String> pred = null;
				}
				System.out.println(((Task) tasks.get(i)).getUniqueID() + "|" + ((Task) tasks.get(i)).getName() + "|"
						+ getResource((Task) tasks.get(i)) + "|" + ((Task) tasks.get(i)).getStart() + "|" + ((Task) tasks.get(i)).getFinish() + "|"
						+ t);
				List<String> list = new ArrayList<String>();
				list.add(ts[i - 1]);
				list.add(((Task) tasks.get(i)).getName());
				list.add(getResource((Task) tasks.get(i)));
				list.add(((Task) tasks.get(i)).getStart().toString());
				list.add(((Task) tasks.get(i)).getFinish().toString());
				list.add(t);
				m.put(i - 1, list);
			}

			Map map = new HashMap();
			for (int k = 0; k < m.size(); k++) {

				map.put("fId", m.get(k).get(0));
				map.put("cName", m.get(k).get(1));
//				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-dd-MM HH:mm:ss");
				DateFormat df = new SimpleDateFormat("E MMM dd HH:mm:ss yyyy", Locale.ENGLISH);
				String str1 = m.get(k).get(3).replace(" CST", "");
				String str2 = m.get(k).get(4).replace(" CST", "");
//				String tt1 = sdf.format(df.parse(str1));
//				String tt2 = sdf.format(df.parse(str2));
				map.put("stime", new Timestamp(df.parse(str1).getTime()));
				map.put("etime", new Timestamp(df.parse(str2).getTime()));
				
				map.put("qzrw", m.get(k).get(5));
				String a[] = null;
				for (int t = 0; t < names.size(); t++) {
					a = names.get(t).split(",");
//					System.out.println("nameziyuan:" + a[1] + "id:" + (names.get(t)).split(",")[0].trim());
//					System.out.println("namebiao:" + m.get(k).get(2));
					if ((a[1].trim()).equals((m.get(k).get(2)).trim())) {
						map.put("pId", (names.get(t)).split(",")[0].trim());
					}
					if (k == 0) {
						map.put("pId", "");
					}
				}
				map.put("applicationNo", applicationNo);
				map.put("timeParam", timeParam);
				String saveCaseHouse = "insert into CASE_HOUSE che (che,che.FCID,che.FCNAME,che.FSTIME,che.FETIME,che.FQZRW,che.FPID,che.FAPPLICATIONNO,che.TIMEPARAM) values ("
						+ ":guid(),:fId,:cName,:stime,:etime,:qzrw,:pId,:applicationNo,:timeParam)";
				KSQL.executeUpdate(saveCaseHouse, map, "/metrodetection/system_code/data", null);
			}
			res = res.append("导入成功！");
			return res.toString();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			res = res.append("导入失败！");
			return res.toString();
		}
	}
	public static String getResource(Task task) {
		StringBuffer buf = new StringBuffer();
		List<ResourceAssignment> assignments = task.getResourceAssignments();
		
		for (int i = 0; i < assignments.size(); i++) {
			ResourceAssignment assignment = (ResourceAssignment) assignments.get(i);
			Resource resource = assignment.getResource();

			if (resource != null) {
				buf.append(resource.getName()).append(" ");
			}
		}
		return buf.toString();
	}
}