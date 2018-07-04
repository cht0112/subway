import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.naming.NamingException;

import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.util.BizUtils;

public class queryProjectMemberList {
	public static Table queryList(){
		String oracle = "select t4.fid as TEST_PROJECT_MEMBER_INFO,t4.oPERATORNAME as oPERATORNAME,t4.project_member_id as pROJECTMEMBERID,t4.application_no as aPPLICATION_NO, "+
							"t4.POSITION_ID as pOSITIONID,occupy.OCCUPY_START_DATE_TIME as oCCUPYSTARTDATETIME, "+
							"occupy.OCCUPY_END_DATE_TIME as oCCUPYENDDATETIME,t4.project_name as pROJECTNAME,t4.task_id as tASKID," +
							"t4.task_name as taskname, t4.POSITION_ID_CNAME as pOSITIONIDCNAME," +
							"t4.project_member_role as project_member_role, t4.project_name as project_id "+
						"from  "+
							"(select t3.fid as fid,t3.application_no as application_no,t3.project_member_id as project_member_id, "+
								"t3.project_member_role as project_member_role,t3.project_name as project_name, "+
								"t3.project_name as project_id,t3.task_id as task_id,t3.task_name as task_name, "+
								"t3.POSITION_ID,position.POSITION_ID_CNAME as POSITION_ID_CNAME,t3.oPERATORNAME as oPERATORNAME "+
							"from  "+
								"(select t2.fid as fid,t2.application_no as application_no,t2.project_member_id as project_member_id, "+
									"t2.project_member_role as project_member_role,t2.project_name as project_name, "+
									"t2.project_id as project_id,t2.TASK_ID as task_id,t2.TASK_NAME as task_name,base.oPERATOR_NAME as oPERATORNAME,base.POSITION_ID as POSITION_ID "+
								"from "+
									"(select t1.fid as fid,t1.application_no as application_no,t1.project_member_id as project_member_id, "+
										"t1.project_member_role as project_member_role,t1.project_name as project_name, "+
										"t1.project_id as project_id,task.TASK_ID as task_id,task.TASK_NAME as task_name "+
									"from "+
										"(select member.fid as fid,member.application_no as application_no, "+
											"member.project_member_id as project_member_id,member.project_member_role as project_member_role, "+
											"project.project_name as project_name,project.project_id as project_id "+
										"from TEST_PROJECT_MEMBER_INFO member "+
										"left join "+
											"TEST_PROJECT_INFO project "+
										"on member.application_no=project.application_no)  t1 "+
									"left join "+
										"TEST_PROJECT_TASK_INFO task "+
									"on t1.project_member_id=task.PLAN_OPERATOR_ID and t1.project_id=task.PROJECT_ID) t2, "+
									"HR_BASE_INFO base "+
							"where  t2.project_member_id=base.OPERATOR_ID) t3 "+
						"left join  "+
							"POSITION_TYPE_CODE position "+
						"on t3.position_id=position.position_id) t4 "+
					"left join "+
						"HR_OCCUPY_INFO occupy "+
					"on t4.project_member_id=occupy.operator_id "+
						"and t4.task_id=occupy.test_task_id " +
					"order by t4.aPPLICATION_NO desc";
		HashMap<String,String> sqlMap = new HashMap<String,String>();
		sqlMap.put("ORACLE",oracle);
		Connection conn = null;
		Statement st = null;
		Table table = null; 
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
			st = conn.createStatement();
			ResultSet rs = st.executeQuery(oracle);
			table = BizUtils.resultSet2Table(rs, (Model)null);
		    Iterator<Row> rowDatas = table.iterator();
		    while(rowDatas.hasNext()){
		    	Row rowData = rowDatas.next();
		    	System.out.println(rowData+"******");
		    }
		}catch(SQLException ex){
			ex.printStackTrace(); 
		} catch (NamingException e) {
			e.printStackTrace();
		}
		table.getProperties().put(Table.PROP_NAME_ROWID, "TEST_PROJECT_MEMBER_INFO");
//		table.getProperties().put(Table.PROP_DB_COUNT, 20);
		 
	    return table;
	}
	public static int deleteMember(String id){
		try{
			System.out.println(id);
			Map<String, Object> mapdelete = new  HashMap<String,Object>();
			mapdelete.put("id", id);
			System.out.println(mapdelete);
			String ksql = "delete from  TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO "+
			" where TEST_PROJECT_MEMBER_INFO = :id";
			System.out.println(ksql);
			int tabApplication = KSQL.executeUpdate(ksql, mapdelete, "/metrodetection/system_code/data", null);
			System.out.println(tabApplication+" 删除记录");
		}catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		return 1;
	}
}