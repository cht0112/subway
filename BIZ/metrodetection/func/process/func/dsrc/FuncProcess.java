import java.util.Iterator;

import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class FuncProcess {
	public static void funcProcessAfterSaveFUNC_IDAction() {
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		
		Table tab = (Table) con.getParameter("table");
		Iterator<Row> rs = ((Table) con.getParameter("table")).iterator();
		Row row = null;
		while (rs.hasNext()){
			row = rs.next();
			String type = row.getValue("sYSTEMTYPE").toString();
			String fname = row.getValue("fUNCNAME").toString();
			String fID = row.getValue("FUNC_ID").toString();
			if(row.getState().toString().equals("DELETE")){
				String kSqlDelete = "delete from SA_OPPermission sa where sa.sActivityFName like '%"+fname+"' and sa.sActivity='a'";
				KSQL.executeUpdate(kSqlDelete, null, "/system/data", null);
			}else{
				if(type.equals("2")){
					String kSqlUpdate = "update SA_OPPermission sa set sa.sActivityFName ='/支撑平台系统/"+fname+"' where sa.sProcess='"+fID+"'";
					KSQL.executeUpdate(kSqlUpdate, null, "/system/data", null);
				}
				if(type.equals("3")){
					String kSqlUpdate = "update SA_OPPermission sa set sa.sActivityFName ='/检测平台系统/"+fname+"' where sa.sProcess='"+fID+"'";
					KSQL.executeUpdate(kSqlUpdate, null, "/system/data", null);
				}
			}
		}
	}

	public static void funcProcessBeforeSaveFUNC_IDAction() {
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		
		Table tab = (Table) con.getParameter("table");
		Iterator<Row> rs = ((Table) con.getParameter("table")).iterator();
		Row row = null;
		while (rs.hasNext()){
			row = rs.next();
			String type = row.getValue("sYSTEMTYPE").toString();
			String fname = row.getValue("fUNCNAME").toString();
			String fID = row.getValue("FUNC_ID").toString();
			if(row.getState().toString().equals("DELETE")){
				String kSqlSelect = "select func.fUNCID from FUNC_ID func where func = "+fID;
				Table table = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
				
				String funcID = table.iterator().next().getValue("fUNCID").toString();
				
				kSqlSelect = "select pri from PRIVILEGE_FUNC pri where pri.fUNCID = "+funcID;
				Table priTable = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);

				
				Iterator<Row> priIte = priTable.iterator();
			
				String kSqlDelete = "";
				while(priIte.hasNext()){
					String priID = priIte.next().getValue("pri").toString();
					kSqlDelete = "delete from ROLE_PRIVILEGE role where role.pRIVILEGEID = "+priID;
					KSQL.executeUpdate(kSqlDelete, null, "/metrodetection/system_code/data", null);
				}
				
				kSqlDelete = "delete from PRIVILEGE_FUNC pri where pri.fUNCID = "+funcID;
				KSQL.executeUpdate(kSqlDelete, null, "/metrodetection/system_code/data", null);
			}
		}
	}
}