package com.becom.timertask;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TimerTask;

import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.opm.OrgUnit;
import com.justep.system.opm.OrgUtils;
import com.justep.system.process.TaskHelper;

public class MyTask extends TimerTask{
	
	private static final String DBDriver = "oracle.jdbc.driver.OracleDriver";//驱动    
    private static final String DBURL = "jdbc:oracle:thin:@192.168.10.32:1521:ORCL";//URL命名规则:jdbc:oracle:thin:@IP地址:端口号:数据库实例名  
      
    private static final String DBUser = "metrodetection";  
    private static final String DBPassWord = "becom";  
	
	public void run() {
		test();
    } 
	 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void test() {
		System.out.println("开始创建通知...");
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String dt = df.format(new Date());
		Map tMap = new HashMap();
        String queryApp = "select tai.* from TEST_APPLICATION_INFO tai";
        Table tb = KSQL.select(queryApp, tMap, "/metrodetection/system_code/data", null);
        Iterator<Row> it = tb.iterator();
        while(it.hasNext()) {
        	Row r = it.next();
        	//申请单号
        	String applicationNo = r.getString("aPPLICATION_NO");
        	System.out.println("申请单号："+applicationNo);
        	//受理人
        	String shouli = r.getString("rECEIPTER");
        	System.out.println("受理人："+shouli);
        	//查询此申请的流程执行情况
        	Map map = new HashMap();
        	map.put("applicationNo", applicationNo);
        	String queryPro = "select task.* from SA_Task task where task.sData1=:applicationNo and task.sParent is null";
        	Table pTb = KSQL.select(queryPro, map, "/system/data", null);
            if(pTb != null && pTb.size() > 0) {
            	System.out.println("******************");
            	 Iterator<Row> pit = pTb.iterator();
            	 //获取流程执行状态
                 String statusCode = pit.next().getString("sStatusID");
                 //若此流程当前并没有完成和终止
                 if(!statusCode.equals("tesFinished") && !statusCode.equals("tesAborted")) {
                	 //创建通知
                	 //List<OrgUnit> list = OrgUtils.findOrgUnitsByFID(shouli);
                	 List<OrgUnit> list = OrgUtils.findOnePersonMemberByID(null, shouli);
                	 System.out.println("找到人数："+list.size());
                	 TaskHelper.createNotice(dt+"--关于提交样品的通知", 															//标题
                			 "/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", 		//流程
                			 "bizActivityNew1", 																				//环节
                			 "/metrodetection/detection_Process_Related/process/detectionManager/planNotice.w",                 //创建页面
                			 "/metrodetection/detection_Process_Related/process/detectionManager/planNotice.w", 				//处理页面
                			 "/metrodetection/system_code/data", 																//数据
                			 list.get(0),																						//执行者
                			 null);																								//其他关系的值
                	//TaskHelper.createTask(name, process, activity, sCURL, sEURL, sData1, units, options);
                	 System.out.println("call at " + (new Date())+"创建通知完毕");
                 }
            }
        }
        
        
        
        
	}
	
	
	public static void main(String[] args) {
		Connection con = null;
		Statement st = null;
		ResultSet rs = null;
		Connection conP = null;
		PreparedStatement pstP = null;
		ResultSet rsP = null;
		try {
			Class.forName(DBDriver);
			
			String queryProcess = "select task.* from SA_Task task where task.SDATA1=? and task.SPARENTID is null";
			conP = DriverManager.getConnection(DBURL, "x5sys", "x5");
			pstP = conP.prepareStatement(queryProcess);
			
			con = DriverManager.getConnection(DBURL, DBUser, DBPassWord);
			st = con.createStatement();
			String queryApp = "select tai.* from TEST_APPLICATION_INFO tai";
			rs = st.executeQuery(queryApp);
			while(rs.next()) {
				//申请单号
				String applicationNo = rs.getString("aPPLICATION_NO");
				//受理人
				String recPerson = rs.getString("RECEIPTER");
				System.out.println("*********"+applicationNo+recPerson+"*********");
				//根据申请单据号查询流程
				pstP.setString(1, applicationNo);
				rsP = pstP.executeQuery();
				while(rsP.next()) {
					String statusCode = rsP.getString("SSTATUSID");
					System.out.println(statusCode);
					//若此流程当前并没有完成和终止
	                 if(!statusCode.equals("tesFinished") && !statusCode.equals("tesAborted")) {
	                	// List<OrgUnit> list =  OrgUtils.findPersonMembersByCode(null, recPerson);
	                	// System.out.println("找到人数："+list.size()+list.get(0));
	                	 
	                 }
				}
				
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				rsP.close();
				pstP.close();
				conP.close();
				rs.close();
				st.close();
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
	}
}
