import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.naming.NamingException;

import org.apache.commons.lang.StringUtils;

import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.data.BizData;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.util.BizUtils;


public class mytesttest {
	
	public static ResultSet weastTotal(String startDate,String endTaskDate){
		String weasteTotal = "select ttci.BUSINESS_ID as businessId, " +
				" sum(case when ttesc.TIME_UNIT_ID = 1 then actual_sub_test_case_time*(24*30*12) " +
				" when ttesc.TIME_UNIT_ID = 2 then actual_sub_test_case_time*(24*30)"+ 
						 " when ttesc.TIME_UNIT_ID = 3 then actual_sub_test_case_time*(24*7)"+ 
						 " when ttesc.TIME_UNIT_ID = 4 then actual_sub_test_case_time*24"+
						 " when ttesc.TIME_UNIT_ID = 5 then actual_sub_test_case_time*1"+ 
						 " when ttesc.TIME_UNIT_ID = 6 then actual_sub_test_case_time/60"+ 
						 " when ttesc.TIME_UNIT_ID = 7 then actual_sub_test_case_time/(60*60)"+ 
						 " end) as weastTimeTotal from "+ 
						 " test_task_case_info ttci,"+
						 " test_project_task_info tpti,"+
						 " test_task_execute_sub_case ttesc"+
						 " where ttci.TASK_ID = tpti.TASK_ID"+
						 " and ttci.test_case_id = ttesc.test_case_id";
						 
		if(!StringUtils.isEmpty(startDate)){
			weasteTotal += " and tpti.actual_start_date>=convert(datetime,'"+startDate+"')";
		}
		
		if(StringUtils.isNotEmpty(endTaskDate)){
			weasteTotal += " and tpti.actual_ending_date<=convert(datetime,'"+endTaskDate+"')";
		}
		weasteTotal += " group by ttci.BUSINESS_ID";
		
		
		Connection conn = null;
		Statement st = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			ResultSet weastTotalResult = st.executeQuery(weasteTotal);
			 return weastTotalResult;
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}
//		finally{
//			if(st != null){
//				try {
//					st.close();
//				} catch (SQLException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			}
//		}
	}

	public static ResultSet excampleTotal(String startDate,String endTaskDate){
		String exampleTotal = "select testTaskCaseinfo.business_id as businessId,count(*) as exampleTotal " +
							  "from test_task_case_info testTaskCaseinfo, TEST_PROJECT_TASK_INFO tpti " +
							  "where testTaskCaseinfo.task_id=tpti.task_id ";
							  
		if(!StringUtils.isEmpty(startDate)){
			exampleTotal += " and tpti.actual_start_date>=convert(datetime,'"+startDate+"')";
		}
		
		if(StringUtils.isNotEmpty(endTaskDate)){
			exampleTotal += " and tpti.actual_ending_date<=convert(datetime,'"+endTaskDate+"')";
		}
		exampleTotal += " group by testTaskCaseinfo.business_id";
		
		Connection conn = null;
		Statement st = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			ResultSet exampleTotalResult = st.executeQuery(exampleTotal);
			 return exampleTotalResult;
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}
//		finally{
//			if(st != null){
//				try {
//					st.close();
//				} catch (SQLException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			}
//		}
	}
	
	public static Table actualDate(){
		String actualDate = "select distinct trri.PROJECT_ID,trri.ACTUAL_START_DATE as actualStartDate, " +
									  "trri.ACTUAL_ENDING_DATE as actualEndingDate "+
							  "from TEST_PROJECT_TASK_INFO trri where trri.PROJECT_ID=1";
		Connection conn = null;
		Statement st = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			ResultSet actualDateResult = st.executeQuery(actualDate);
			Table actualDateTable = BizUtils.resultSet2Table(actualDateResult, (Model)null);
			Iterator<Row> actualDateIt = actualDateTable.iterator();
			while(actualDateIt.hasNext()){
				Row actualDateData = actualDateIt.next();
				System.out.println(actualDateData);
			}
			 return actualDateTable;
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}
//		finally{
//			if(st != null){
//				try {
//					st.close();
//				} catch (SQLException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			}
//		}
	}
	
	public static Table mytest(String startDate,String endTaskDate){
			System.out.println("myset方法******************");
		String taskTotal = "select business.BUSINESS_ID as BUSINESS_ID,count(business.task_id) as taskTotal "+ 
							"from (select distinct ttci.task_id as task_id, ttci.business_id as business_id "+ 
								  "from test_task_case_info ttci, TEST_PROJECT_TASK_INFO "+
								  "where TEST_PROJECT_TASK_INFO.task_id=ttci.task_id ";
		if(StringUtils.isNotEmpty(startDate)){
			taskTotal += " and TEST_PROJECT_TASK_INFO.actual_start_date>=convert(datetime,'"+startDate+"') ";
		}
		if(StringUtils.isNotEmpty(endTaskDate)){
			taskTotal += "and TEST_PROJECT_TASK_INFO.actual_ending_date<=convert(datetime,'"+endTaskDate+"')";
		}
		taskTotal += ") business group by business.business_id";
		String businessType = "select businesstype.business_id as BUSINESSID,businesstype.business_id_cname as BUSINESSTYPENAME " +
							  "from business_type_code businesstype";
		System.out.println("=====taskTotal=======: "+taskTotal);
		//String exampleTotal = "select testTaskCaseinfo.business_id as businessId,count(*) as exampleTotal from test_task_case_info testTaskCaseinfo group by testTaskCaseinfo.business_id";
		Connection conn = null;
		Statement st = null;
		Table table = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			//System.out.println("st******************"+st);
			ResultSet businessTypeResult = st.executeQuery(businessType);
		    table = BizUtils.resultSet2Table(businessTypeResult, (Model)null);
		    table.addColumns("taskToal", "Integer","exampleTotal", "Integer","weastTimeTotal","Integer");
		    //table.addColumn("exampleTotal", "Integer");
		    Iterator<Row> businessIt = table.iterator();
		    
		    ResultSet taskTotalResult = st.executeQuery(taskTotal);
		   
		    ResultSet exampleTotalResult = excampleTotal(startDate,endTaskDate);
//		    while(exampleTotalResult.next()){
//		    	System.out.println(exampleTotalResult.getInt("businessId")+"======"+exampleTotalResult.getInt("exampleTotal"));
//		    }
		    ResultSet weastTimeTotalResult = weastTotal(startDate,endTaskDate);
		    //ResultSet exampleTotalResult = st.executeQuery(exampleTotal);
//		    while(exampleTotalResult.next()){
//		    	BigDecimal exampleTotalBusinessId = exampleTotalResult.getBigDecimal("BUSINESSID");
//		    	System.out.println(exampleTotalBusinessId+"****exampleTotalBusinessId****");
//		    	System.out.println(exampleTotalResult.getBigDecimal("exampleTotal")+"****exampleTotal****");
//		    }
		    while(businessIt.hasNext()){
		    	Row businessRowData = businessIt.next();
		    	System.out.println(businessRowData.toString());
		    	Integer businessId = businessRowData.getInteger("BUSINESSID");
		    	
		    	while( taskTotalResult.next() ){
		    		//System.out.println("--------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		    		Integer totalBusinessId = taskTotalResult.getInt("BUSINESS_ID");
		    		//System.out.println("aa"+totalBusinessId);
		    		if( businessId.compareTo(totalBusinessId) == 0 ){
		    			businessRowData.setValue("taskToal", taskTotalResult.getInt("taskTotal"));
		    			break;
		    		}
		    	}
		    	while(exampleTotalResult.next()){
		    		//System.out.println("=========================================");
		    		Integer exampleTotalBusinessId = exampleTotalResult.getInt("businessId");
	    			//System.out.println(exampleTotalBusinessId+"$$$$$$$$$exampleTotalBusinessId****");
	    			if(businessId.compareTo(exampleTotalBusinessId) == 0 ){
	    				
	    				businessRowData.setValue("exampleTotal", exampleTotalResult.getInt("exampleTotal"));
	    				break;
	    			}
	    		}
		    	
		    	while(weastTimeTotalResult.next()){
		    		Integer weastTimeTotalBusinessId = weastTimeTotalResult.getInt("businessId");
		    		if(weastTimeTotalBusinessId.compareTo(businessId) == 0){
		    			businessRowData.setValue("weastTimeTotal", weastTimeTotalResult.getInt("weastTimeTotal"));
	    				break;
		    		}
		    	}
		    	
		    }
			//table = BizUtils.resultSet2Table(rsTask, (Model)null);
			//System.out.println(table.size()+"%%%%%%%%%%%%");
			//table.addColumns("xixi","String","taskType", "String","hha","Integer");
//			Iterator<Row> rows = table.iterator();
//			Row row = null;
//			System.out.println(row+"@@@@@");
//			while(rows.hasNext()){
//				row = rows.next();
//				System.out.println(row);
//			}
			return table;
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}finally{
			if(st != null){
				try {
					st.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
	}
	
	
	
	//饼图
	public static Table chartTestTask(String startDate,String endTaskDate){
		String taskTotal = "select business.BUSINESS_ID as BUSINESS_ID,count(business.task_id) as taskTotal "+ 
							"from (select distinct ttci.task_id as task_id, ttci.business_id as business_id "+ 
								"from test_task_case_info ttci, TEST_PROJECT_TASK_INFO "+
								"where TEST_PROJECT_TASK_INFO.task_id=ttci.task_id ";
		
		if(StringUtils.isNotEmpty(startDate)){
			taskTotal += " and TEST_PROJECT_TASK_INFO.actual_start_date>=convert(datetime,'"+startDate+"') ";
		}
		if(StringUtils.isNotEmpty(endTaskDate)){
			taskTotal += "and TEST_PROJECT_TASK_INFO.actual_ending_date<=convert(datetime,'"+endTaskDate+"')";
		}
		taskTotal += ") business group by business.business_id";
		
		String businessType = "select businesstype.business_id as BUSINESSID,businesstype.business_id_cname as BUSINESSTYPENAME " +
								"from business_type_code businesstype";
		Connection conn = null;
		Statement st = null;
		Table table = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			ResultSet businessTypeResult = st.executeQuery(businessType);
		    table = BizUtils.resultSet2Table(businessTypeResult, (Model)null);
		    table.addColumns("taskToal", "Integer","exampleTotal", "Integer","weastTimeTotal","Integer");
		    Iterator<Row> businessIt = table.iterator();
		    
		    ResultSet taskTotalResult = st.executeQuery(taskTotal);
		    ResultSet exampleTotalResult = excampleTotal(startDate,endTaskDate);
		    ResultSet weastTimeTotalResult = weastTotal(startDate,endTaskDate);
		    while(businessIt.hasNext()){
		    	Row businessRowData = businessIt.next();
		    	Integer businessId = businessRowData.getInteger("BUSINESSID");
		    	while( taskTotalResult.next() ){
		    		Integer totalBusinessId = taskTotalResult.getInt("BUSINESS_ID");
		    		//System.out.println("aa"+totalBusinessId);
		    		if( businessId.compareTo(totalBusinessId) == 0 ){
		    			businessRowData.setValue("taskToal", taskTotalResult.getInt("taskTotal"));
		    			break;
		    		}
		    	}
		    	while(exampleTotalResult.next()){
		    		//System.out.println("=========================================");
	    			Integer exampleTotalBusinessId = exampleTotalResult.getInt("businessId");
	    			//System.out.println(exampleTotalBusinessId+"$$$$$$$$$exampleTotalBusinessId****");
	    			if(businessId.compareTo(exampleTotalBusinessId) == 0 ){
	    				
	    				businessRowData.setValue("exampleTotal", exampleTotalResult.getInt("exampleTotal"));
	    				break;
	    			}
	    		}
		    	
		    	while(weastTimeTotalResult.next()){
		    		//System.out.println("=========================================");
	    			Integer weastTimeTotalBusinessId = weastTimeTotalResult.getInt("businessId");
	    			//System.out.println(weastTimeTotalBusinessId+"$$$$$$$$$weastTimeTotalBusinessId****");
	    			if(businessId.compareTo(weastTimeTotalBusinessId) == 0 ){
	    				
	    				businessRowData.setValue("weastTimeTotal", weastTimeTotalResult.getInt("weastTimeTotal"));
	    				break;
	    			}
	    		}
		    	
		    }
			return table;
		} catch (NamingException e) {
			throw new RuntimeException(e);
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}finally{
			if(st != null){
				try {
					st.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	//汇总图
	public static Table chartTestTaskSummary(String startDate,String endTaskDate){
		
		String taskTotal = "select business.BUSINESS_ID as BUSINESS_ID,count(business.task_id) as taskTotal "+ 
		"from (select distinct ttci.task_id as task_id, ttci.business_id as business_id "+ 
			"from test_task_case_info ttci, TEST_PROJECT_TASK_INFO "+
			"where TEST_PROJECT_TASK_INFO.task_id=ttci.task_id ";

		if(StringUtils.isNotEmpty(startDate)){
			taskTotal += " and TEST_PROJECT_TASK_INFO.actual_start_date>=convert(datetime,'"+startDate+"') ";
		}
		if(StringUtils.isNotEmpty(endTaskDate)){
			taskTotal += "and TEST_PROJECT_TASK_INFO.actual_ending_date<=convert(datetime,'"+endTaskDate+"')";
		}
		taskTotal += ") business group by business.business_id";
		String businessType = "select businesstype.business_id as BUSINESSID,businesstype.business_id_cname as BUSINESSTYPENAME " +
							  "from business_type_code businesstype";
		Connection conn = null;
		Statement st = null;
		Table table = null;
		
		try {
			
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			ResultSet businessTypeResult = st.executeQuery(businessType);
			table = BizUtils.resultSet2Table(businessTypeResult, (Model)null);
			table.addColumns("total", "Integer","summaryType","String");
			Iterator<Row> businessTypeIt = table.iterator();
			ResultSet taskTotalResult = st.executeQuery(taskTotal);
		    ResultSet exampleTotalResult = excampleTotal(startDate,endTaskDate);
		    ResultSet weastTimeTotalResult = weastTotal(startDate,endTaskDate);
		    
		    //填充任务总数
			while(businessTypeIt.hasNext()){
				Row businessTypeRowData = businessTypeIt.next();
				Integer businessTypeId = businessTypeRowData.getInteger("BUSINESSID");
				//String BusinessName = businessTypeRowData.getString("BUSINESSTYPENAME");
				
				while(taskTotalResult.next()){
					
					Integer totalBusinessId = taskTotalResult.getInt("BUSINESS_ID");
					
					if(businessTypeId.compareTo(totalBusinessId)==0){
						
						businessTypeRowData.setValue("summaryType", "任务总数");
						businessTypeRowData.setValue("total", taskTotalResult.getInt("taskTotal"));
						break;
					}
				}
				
			}
				
				
			//填充用例总数	
			while(exampleTotalResult.next()){
				Row newRow = table.appendRow();
				BigDecimal businessId = exampleTotalResult.getBigDecimal("businessId");
				newRow.setValue("BUSINESSID", businessId.intValue());
				
				Iterator<Row> businessTypeIter = table.iterator();
				while(businessTypeIter.hasNext()){
					//System.out.println("&&&&&&businessTypeIt&&&&&");
					Row businessTypeRowData = businessTypeIter.next();
					Integer businessTypeId = businessTypeRowData.getInteger("BUSINESSID");
					String BusinessName = businessTypeRowData.getString("BUSINESSTYPENAME");
					//System.out.println("bb"+businessTypeId);
					if(businessId.intValue()==businessTypeId.intValue()){
						//System.out.println("if==============");
						newRow.setValue("BUSINESSTYPENAME", BusinessName);
						break;
					}
				}
					
				newRow.setValue("summaryType", "用例总数");
				newRow.setValue("total", exampleTotalResult.getInt("exampleTotal"));
			}
		//填充计划工时总数
			while(weastTimeTotalResult.next()){
				Row newRow = table.appendRow();
				BigDecimal businessId = weastTimeTotalResult.getBigDecimal("businessId");
				newRow.setValue("BUSINESSID", businessId.intValue());
				
				Iterator<Row> businessTypeIter = table.iterator();
				while(businessTypeIter.hasNext()){
					//System.out.println("&&&&&&businessTypeIt&&&&&");
					Row businessTypeRowData = businessTypeIter.next();
					Integer businessTypeId = businessTypeRowData.getInteger("BUSINESSID");
					String BusinessName = businessTypeRowData.getString("BUSINESSTYPENAME");
					//System.out.println("bb"+businessTypeId);
					if(businessId.intValue() == businessTypeId.intValue()){
						//System.out.println("if==============");
						newRow.setValue("BUSINESSTYPENAME", BusinessName);
						break;
					}
				}
					
				newRow.setValue("summaryType", "计划工时总数");
				newRow.setValue("total", weastTimeTotalResult.getInt("weastTimeTotal"));
			}
			
			
			//测试
//			Iterator<Row> rows = table.iterator();
//			Row row = null;
//			System.out.println(row+"@@@@@");
//			while(rows.hasNext()){
//				row = rows.next();
//				System.out.println("@@@@@@@@@@"+row);
//			}
			return table;
		} catch (NamingException e) {
			throw new RuntimeException(e);
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public static Table taskQuery(String startDate,String endTaskDate ){
		//String startDate = (String) ModelUtils.getRequestContext().getActionContext().getParameter("startDate");
		//System.out.println("myset方法******************");
		System.out.println("-----------");
		String taskTotal = "select business.BUSINESS_ID as BUSINESS_ID,count(business.task_id) as taskTotal "+ 
							"from (select distinct ttci.task_id as task_id, ttci.business_id as business_id "+ 
								  "from test_task_case_info ttci, TEST_PROJECT_TASK_INFO "+
								  "where TEST_PROJECT_TASK_INFO.task_id=ttci.task_id ";
		if(StringUtils.isNotEmpty(startDate)){
			taskTotal += " and TEST_PROJECT_TASK_INFO.actual_start_date>=convert(datetime,'"+startDate+"') ";
		}
		if(StringUtils.isNotEmpty(endTaskDate)){
			taskTotal += "and TEST_PROJECT_TASK_INFO.actual_ending_date<=convert(datetime'"+endTaskDate+"')";
		}
		taskTotal += ") business group by business.business_id";
		String businessType = "select businesstype.business_id as businessId,businesstype.business_id_cname as businessTypeName " +
							  "from business_type_code businesstype";
		//String exampleTotal = "select testTaskCaseinfo.business_id as businessId,count(*) as exampleTotal from test_task_case_info testTaskCaseinfo group by testTaskCaseinfo.business_id";
		Connection conn = null;
		Statement st = null;
		Table table = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			//System.out.println("st******************"+st);
			ResultSet businessTypeResult = st.executeQuery(businessType);
		    table = BizUtils.resultSet2Table(businessTypeResult, (Model)null);
		    table.addColumns("taskToal", "Integer","exampleTotal", "Integer","weastTimeTotal","Integer");
		    //table.addColumn("exampleTotal", "Integer");
		    Iterator<Row> businessIt = table.iterator();
		    
		    ResultSet taskTotalResult = st.executeQuery(taskTotal);
		    ResultSet exampleTotalResult = excampleTotal(startDate,endTaskDate);
		    ResultSet weastTimeTotalResult = weastTotal(startDate,endTaskDate);
		    //ResultSet exampleTotalResult = st.executeQuery(exampleTotal);
//		    while(exampleTotalResult.next()){
//		    	BigDecimal exampleTotalBusinessId = exampleTotalResult.getBigDecimal("BUSINESSID");
//		    	System.out.println(exampleTotalBusinessId+"****exampleTotalBusinessId****");
//		    	System.out.println(exampleTotalResult.getBigDecimal("exampleTotal")+"****exampleTotal****");
//		    }
		    while(businessIt.hasNext()){
		    	Row businessRowData = businessIt.next();
		    	BigDecimal businessId = businessRowData.getDecimal("businessId");
		    	
		    	while( taskTotalResult.next() ){
		    		//System.out.println("--------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		    		BigDecimal totalBusinessId = taskTotalResult.getBigDecimal("businessId");
		    		//System.out.println("aa"+totalBusinessId);
		    		if( businessId.compareTo(totalBusinessId) == 0 ){
		    			businessRowData.setValue("taskToal", taskTotalResult.getInt("taskTotal"));
		    			break;
		    		}
		    	}
		    	while(exampleTotalResult.next()){
		    		//System.out.println("=========================================");
	    			BigDecimal exampleTotalBusinessId = exampleTotalResult.getBigDecimal("businessId");
	    			//System.out.println(exampleTotalBusinessId+"$$$$$$$$$exampleTotalBusinessId****");
	    			if(businessId.compareTo(exampleTotalBusinessId) == 0 ){
	    				
	    				businessRowData.setValue("exampleTotal", exampleTotalResult.getInt("exampleTotal"));
	    				break;
	    			}
	    		}
		    	
		    	while(weastTimeTotalResult.next()){
		    		BigDecimal weastTimeTotalBusinessId = weastTimeTotalResult.getBigDecimal("businessId");
		    		if(weastTimeTotalBusinessId.compareTo(businessId) == 0){
		    			businessRowData.setValue("weastTimeTotal", weastTimeTotalResult.getInt("weastTimeTotal"));
	    				break;
		    		}
		    	}
		    	
		    }
			//table = BizUtils.resultSet2Table(rsTask, (Model)null);
			//System.out.println(table.size()+"%%%%%%%%%%%%");
			//table.addColumns("xixi","String","taskType", "String","hha","Integer");
//			Iterator<Row> rows = table.iterator();
//			Row row = null;
//			System.out.println(row+"@@@@@");
//			while(rows.hasNext()){
//				row = rows.next();
//				System.out.println(row);
//			}
			return table;
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}finally{
			if(st != null){
				try {
					st.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
	}
	
}