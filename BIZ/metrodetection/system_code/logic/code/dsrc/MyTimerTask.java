import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.opm.OrgUnit;
import com.justep.system.opm.OrgUtils;
import com.justep.system.process.Task;
import com.justep.system.process.TaskHelper;


public class MyTimerTask{
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static String sendNotice() {
		System.out.println("开始创建通知...");
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String dt = df.format(new Date());
		String queryApp = "select tai.* from TEST_APPLICATION_INFO tai";
        Table tb = KSQL.select(queryApp, null, "/metrodetection/system_code/data", null);
        System.out.println(tb.size());
        Iterator<Row> it = tb.iterator();
        while(it.hasNext()) {
        	Row r = it.next();
        	//申请单号
        	Integer applicationNo = r.getInteger("tai");
        	//System.out.println("申请单号："+applicationNo);
        	//受理人
        	String shouli = r.getString("rECEIPTER");
        	//System.out.println("受理人："+shouli);
        	//承诺最晚进场天数
        	Integer pDays = r.getInteger("COMPANY_PROMISE");
        	//最晚进场日期
        	Date lastDt = getLasterDate(String.valueOf(applicationNo));
        	//是否已发通知
        	Boolean flag = valiNotice(String.valueOf(applicationNo));
        	if(lastDt !=  null) {
        		System.out.println(lastDt);
        		Date noticeDate = new Date(lastDt.getTime()-pDays*24*60*60*1000);
            	//查询此申请的流程执行情况
            	Map map = new HashMap();
            	map.put("applicationNo", String.valueOf(applicationNo));
            	map.put("shouli", shouli);
            	String queryPro = "select task.* from SA_Task task where task.sData1=:applicationNo and task.sParent is null ";
            	Table pTb = KSQL.select(queryPro, map, "/system/data", null);
                if(pTb != null && pTb.size() > 0) {
                	System.out.println("******************");
                	 Iterator<Row> pit = pTb.iterator();
                	 //获取流程执行状态
                     String statusCode = pit.next().getString("sStatusID");
                     //若此流程当前并没有完成和终止
                     if(!statusCode.equals("tesFinished") && !statusCode.equals("tesAborted")) {
                    	 Date temp = new Date();
                    	 if(noticeDate.getTime() <= temp.getTime() && temp.getTime() <= lastDt.getTime()) {
                    		if(!flag) {
                    			 //创建通知
	                           	 //得到执行者
	                           	 String queryOpr = "select hr.* from HR_BASE_INFO hr where hr=:shouli";
	                           	 String sCode = (String) KSQL.select(queryOpr,map, "/system/data", null).iterator().next().getValue("Scode");
	                           	 List<OrgUnit> list2 = OrgUtils.findPersonMembersByCode(null,sCode);
	                           	// System.out.println("找到人数："+list2.size()+"--"+list2.get(0));
	                           	 Task task = TaskHelper.createNotice(dt+"--关于提交样品的通知", 																//标题
	                           			 "/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", 		//流程
	                           			 "bizActivityNew1", 																				//环节
	                           			 "/metrodetection/detection_Process_Related/process/detectionManager/planNotice.w",                 //创建页面
	                           			 "/metrodetection/detection_Process_Related/process/detectionManager/planNotice.w", 				//处理页面
	                           			 String.valueOf(applicationNo), 																	//数据
	                           			 list2.get(0),																						//执行者
	                           			 null);																								//其他关系的值
	                           	 task.save();
	                           	 String upadateApp = "update TEST_APPLICATION_INFO tai set tai.mEMO='已发通知' where tai=:applicationNo";
	                           	 KSQL.executeUpdate(upadateApp, map, "/metrodetection/system_code/data", null);
	                           	//TaskHelper.createTask(name, process, activity, sCURL, sEURL, sData1, units, options);
	                           	 System.out.println("call at " + (new Date())+"创建通知完毕");
                    		}
                    	 }
                     }
                }
        	}
        }
        return "***success***";
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Date getLasterDate(String appNo) {
		Map map = new HashMap();
		map.put("appNo", appNo);
		String queryDate = "select min(sdi.dEADLINERECEIVEDATE) as minDate from SAMPLE_DEVICE_INFO sdi where sdi.aPPLICATIONNO=:appNo";
		Table dateTb = KSQL.select(queryDate, map, "/metrodetection/system_code/data", null);
		Timestamp dt = dateTb.iterator().next().getDateTime("minDate");
		Date date = new Date();
		date = dt;
		return date;
	}
	/**
	 * 是否已发通知
	 * @param appNo
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Boolean valiNotice(String appNo) {
		Boolean flag = false;
		Map map = new HashMap();
		map.put("appNo", appNo);
		String queryDate = "select tai.* from TEST_APPLICATION_INFO tai where tai=:appNo";
		Table dateTb = KSQL.select(queryDate, map, "/metrodetection/system_code/data", null);
		String str = dateTb.iterator().next().getString("mEMO");
		if(StringUtils.isNotBlank(str) && str.indexOf("已发通知") != -1) {
			flag = true;
		}
		return flag;
	}
	
	public static void main(String[] args) {
		Date dt = new Date();
		System.out.println(dt);
		Long longl = dt.getTime();
		dt = new Date(longl);
		System.out.println(dt);
		Date d = new Date();
		DateFormat dft = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = dft.format(dt);
		String str2 = dft.format(d);
		if(str1.equals(str2)) {
			System.out.println(true);
		} else {
			System.out.println(dt.getTime() + "-----" +d.getTime()+false);
		}
	}
	public static void dayclosing(){
		System.out.println("报表日结！");
	}
}
