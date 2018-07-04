import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Iterator;

import javax.naming.NamingException;

import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.util.BizUtils;
import com.justep.system.process.ProcessUtils;

public class queLiXiangMuChengYuan {
	public static Table projectMember(){
		String oracle = "select a.OPERATOR_ID,a.OPERATOR_NAME,a.POSITION_ID_CNAME,officeType.OFFICE_ID_CNAME,a.applicationNo,a.operatorState "+
						"from (select hr.OPERATOR_ID as OPERATOR_ID,hr.OPERATOR_NAME as OPERATOR_NAME,hr.OFFICE_ID as OFFICE_ID,positionType.POSITION_ID_CNAME as POSITION_ID_CNAME, 107 as applicationNo, "+
						"(case hr.OPERATOR_STATE when 1 then '正常' when 2 then '工作' when 3 then '病假' when 4 then '年假' when 5 then '事假' when 6 then '公出' when 7 then '离职' end) as operatorState "+
						"from HR_BASE_INFO hr left join POSITION_TYPE_CODE positionType on hr.POSITION_ID=positionType.POSITION_ID ) a "+
						"left join OFFICE_TYPE_CODE officeType on a.OFFICE_ID=officeType.OFFICE_ID";
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
//		    Iterator<Row> rowDatas = table.iterator();
//		    while(rowDatas.hasNext()){
//		    	Row rowData = rowDatas.next();
//		    	System.out.println(rowData+"******");
//		    }
		}catch(SQLException ex){
			ex.printStackTrace();
		} catch (NamingException e) {
			e.printStackTrace();
		}
		table.getProperties().put(Table.PROP_NAME_ROWID, "OPERATOR_ID");
	    return table;
	}
}