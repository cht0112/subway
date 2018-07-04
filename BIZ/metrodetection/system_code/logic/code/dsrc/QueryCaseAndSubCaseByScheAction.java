import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import javax.naming.NamingException;

import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Table;
import com.justep.system.util.BizUtils;


public class QueryCaseAndSubCaseByScheAction {
	
	/**
	 * 根据项目申请序号查询用例
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Table queryCaseAndSubCaseBySche(String applicationNO) {
		Table tb = null;
		/*Map map = new HashMap();
		map.put("applicationNO", applicationNO);
		String query = "SELECT t.* from ("+
					"select 'root' as fid,"+
					"'' as fparentid,"+
					"'用例信息' as tESTCASENAME,"+
					"null as shijian,"+
					"NULL as startTime,"+
					"null as endTime,"+
					"null as qzrw,"+
					"null as operatorName,"+
					"null as roomName,"+
					"null as toolName "+
					"from TEST_CASE_BASE_INFO t "+
					"union "+
					"select TEST_CASE_BASE_INFO.TEST_CASE_ID as fid,"+
					"'root' as fparentid,"+
					"TEST_CASE_BASE_INFO.TEST_CASE_NAME as tESTCASENAME,"+
					"null as shijian,"+
					"NULL as startTime,"+
					"null as endTime,"+
					"null as qzrw,"+
					"null as operatorName,"+
					"null as roomName,"+
					"null as toolName"+
					"    from (select tcbi.* from TEST_CASE_BASE_INFO tcbi where "+
						"TCBI.TEST_CASE_ID IN ("+
						"select DISTINCT(TEST_CASE_ID) from test_scheme_case_info tsci WHERE tsci.TEST_SCHEME_ID = (select tpi.tESTSCHEMEID from " +
						"TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO=:applicationNO)"+
						") TEST_CASE_BASE_INFO "+
					"union "+
					"select SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_ID as fID,"+
					"SUB_TEST_CASE_BASE_INFO.TEST_CASE_ID as  fparentid,"+
					"SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_NAME as sUBTESTCASENAME,"+
					"case when TUC.TIME_UNIT_ID=1 THEN SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*12*30*24"+
					"when TUC.TIME_UNIT_ID=2 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*30*24"+
					"when TUC.TIME_UNIT_ID=3 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*7*24"+
					"when TUC.TIME_UNIT_ID=4 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*24"+
					"when TUC.TIME_UNIT_ID=5 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME"+
					"when TUC.TIME_UNIT_ID=6 then TRUNC(SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME/60, 1)"+
					"when TUC.TIME_UNIT_ID=7 then TRUNC(SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME/3600,1)"+
					"END AS shijian,"+
					"null as startTime,"+
					"null as endTime,"+
					"null as qzrw,"+
					"null as operatorName,"+
					"null as roomName,"+
					"null as toolName"+
					"     from SUB_TEST_CASE_BASE_INFO SUB_TEST_CASE_BASE_INFO,TIME_UNIT_CODE TUC WHERE TUC.TIME_UNIT_ID=SUB_TEST_CASE_BASE_INFO.TIME_UNIT_ID"+
					")t";
		tb = KSQL.select(query, map, "/metrodetection/system_code/data", null);*/
		
		
		
		String conQuery = "select 'root' as fid,"+
		"'' as fparentid,"+
		"'用例信息' as tESTCASENAME,"+
		"null as shijian,"+
		"NULL as startTime,"+
		"null as endTime,"+
		"null as qzrw,"+
		"null as operatorName,"+
		"null as roomName,"+
		"null as toolName "+
		"from TEST_CASE_BASE_INFO t "+
		"union "+
		"select tc.TEST_CASE_ID as fid,"+
		"'root' as fparentid,"+
		"tc.TEST_CASE_NAME as tESTCASENAME,"+
		"null as shijian,"+
		"NULL as startTime,"+
		"null as endTime,"+
		"null as qzrw,"+
		"null as operatorName,"+
		"null as roomName,"+
		"null as toolName "+
		"from (select tcbi.* from TEST_CASE_BASE_INFO tcbi where "+
		"tcbi.TEST_CASE_ID IN ("+
		"select DISTINCT(tsci.TEST_CASE_ID) from TEST_SCHEME_CASE_INFO tsci WHERE tsci.TEST_SCHEME_ID=" +
		"(select tpi.TEST_SCHEME_ID from TEST_PROJECT_INFO tpi where tpi.APPLICATION_NO="+applicationNO+" )"+
		")"+
		") tc "+
		"UNION "+
		"select SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_ID as fID,"+
		"SUB_TEST_CASE_BASE_INFO.TEST_CASE_ID as  fparentid,"+
		"SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_NAME as tESTCASENAME,"+
		"case when TUC.TIME_UNIT_ID=1 THEN SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*12*30*24 "+
		"when TUC.TIME_UNIT_ID=2 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*30*24 "+
		"when TUC.TIME_UNIT_ID=3 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*7*24 "+
		"when TUC.TIME_UNIT_ID=4 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME*24 "+
		"when TUC.TIME_UNIT_ID=5 then SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME "+
		"when TUC.TIME_UNIT_ID=6 then TRUNC(SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME/60, 1) "+
		"when TUC.TIME_UNIT_ID=7 then TRUNC(SUB_TEST_CASE_BASE_INFO.SUB_TEST_CASE_TIME/3600,1) "+
		"END AS shijian,"+
		"null as startTime,"+
		"null as endTime,"+
		"null as qzrw,"+
		"null as operatorName,"+
		"null as roomName,"+
		"null as toolName "+
		"from SUB_TEST_CASE_BASE_INFO SUB_TEST_CASE_BASE_INFO,TIME_UNIT_CODE TUC WHERE TUC.TIME_UNIT_ID=SUB_TEST_CASE_BASE_INFO.TIME_UNIT_ID";
		
		Connection con = null;
		Statement st = null;
		try {
			con = ModelUtils.getConnection("/metrodetection/system_code/data");
			st = con.createStatement();
			ResultSet rs = st.executeQuery(conQuery);
			tb = BizUtils.resultSet2Table(rs, (Model)null);
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return tb;
	}

}
