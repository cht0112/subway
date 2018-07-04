import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.naming.NamingException;

import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.data.DataPermission;
import com.justep.system.data.KSQL;
import com.justep.system.data.ModifyState;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class Recycled {

	public static void recycledProcessBeforePhysicalDeleteOrgAction() {
		//System.out.println("*******************物理删除组织前*****************");
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		String id = (String) conn.getParameter("id");
		System.out.println("*******SA_OPOrg*******" + id);
		Map var = new HashMap();
		var.put("id", id);
		int idSize = id.length();
		if (idSize <= 32) {
			String ksqlSelect = "select SA_OPOrg.* from SA_OPOrg SA_OPOrg where SA_OPOrg like '%@" + id + "'";
			//System.out.println("******删除组织下所有成员*******"+ksqlSelect);
			Table tabOrg = KSQL.select(ksqlSelect, null, "/system/data", null);
			Iterator it = tabOrg.iterator();
			while (it.hasNext()) {
				Row r = (Row) it.next();
				String sCode = (String) r.getValue("sCode");

				Map varSCode = new HashMap();
				varSCode.put("sCode", sCode);
				String ksqlSelectHr = "select HR_BASE_INFO.* from HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode = :sCode";
				Table tabHr = KSQL.select(ksqlSelectHr, varSCode, "/system/data", null);
				String operatorId = (String) tabHr.iterator().next().getValue("HR_BASE_INFO");
				Map varHr = new HashMap();
				varHr.put("operatorId", operatorId);
				
				String occupySelect = "select HR_OCCUPY_INFO.* from HR_OCCUPY_INFO HR_OCCUPY_INFO where HR_OCCUPY_INFO.oPERATORID=:operatorId";
				Table tabOccupy = KSQL.select(occupySelect, varHr, "/metrodetection/system_code/data", null);
				if (tabOccupy.size() > 0) {
					Iterator<Row> ittab = tabOccupy.iterator();
					while (ittab.hasNext()) {
						Row itOccpuy = ittab.next();
						Integer hrOccupyTaskId = Integer.valueOf((String)itOccpuy.getValue("tESTTASKID"));
						if (hrOccupyTaskId.toString() != null && hrOccupyTaskId.toString() != "") {
							return;
						}
					}

				}
				KSQL.executeUpdate("delete from MEMBER_IN_USERGROUP niu where niu.gROUPMEMBERID=:operatorId", varHr,
						"/metrodetection/system_code/data", null);
				String privilegeDelete = "delete from OPERATOR_PRIVILEGE op where op.oPERATORID=:operatorId";
				KSQL.executeUpdate(privilegeDelete, varHr, "/metrodetection/system_code/data", null);
				String roleDelete = "delete from ROLE_OPERATOR ROLE_OPERATOR where ROLE_OPERATOR.oPERATORID=:operatorId";
				KSQL.executeUpdate(roleDelete, varHr, "/metrodetection/system_code/data", null);
				KSQL.executeUpdate("delete from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD=:operatorId", varHr, "/metrodetection/system_code/data", null);
				String educationDelete = "delete from EDUCATION_AND_JOB_INFO  EDUCATION_AND_JOB_INFO where EDUCATION_AND_JOB_INFO.oPERATORID='"
						+ operatorId + "'";
				KSQL.executeUpdate(educationDelete, null, "/metrodetection/system_code/data", null);
				String skillDelete = "delete from HR_SKILL_INFO HR_SKILL_INFO where HR_SKILL_INFO.oPERATORID=:operatorId";
				KSQL.executeUpdate(skillDelete, varHr, "/metrodetection/system_code/data", null);
				String occupyDelete = "delete from HR_OCCUPY_INFO HR_OCCUPY_INFO where HR_OCCUPY_INFO.oPERATORID=:operatorId";
				KSQL.executeUpdate(occupyDelete, varHr, "/metrodetection/system_code/data", null);
				Connection conn1 = null;
				Statement st = null;
				ResultSet rs = null;
				try {
					conn1 = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
					String deleteHrBaseInfo = "delete from HR_BASE_INFO where oPERATOR_ID='" + operatorId + "'";
					st = conn1.createStatement();
					st.execute(deleteHrBaseInfo);
				} catch (NamingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}

			String ksqlDelete = "delete from OPERATOR_PASSWORD o where o.oRGID = :id";
			KSQL.executeUpdate(ksqlDelete, var, "/metrodetection/system_code/data", null);
		} else {
			String parentId = id.split("@")[1].toString();
			String ksqlSelectOrg = "select SA_OPOrg.* from SA_OPOrg SA_OPOrg where SA_OPOrg = :id";
			Table tabOrg = KSQL.select(ksqlSelectOrg, var, "/system/data", null);
			String sCode = (String) tabOrg.iterator().next().getValue("sCode");

			Map varSCode = new HashMap();
			varSCode.put("sCode", sCode);
			String ksqlSelectHr = "select HR_BASE_INFO.* from HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode = :sCode";
			Table tabHr = KSQL.select(ksqlSelectHr, varSCode, "/system/data", null);
			if (tabHr.size() <= 0) {
				return;
			}
			String operatorId = (String) tabHr.iterator().next().getValue("HR_BASE_INFO");
			Map varHr = new HashMap();
			varHr.put("operatorId", operatorId);

			String occupySelect = "select HR_OCCUPY_INFO.* from HR_OCCUPY_INFO HR_OCCUPY_INFO where HR_OCCUPY_INFO.oPERATORID=:operatorId";
			Table tabOccupy = KSQL.select(occupySelect, varHr, "/metrodetection/system_code/data", null);
			if (tabOccupy.size() > 0) {
				Iterator<Row> it = tabOccupy.iterator();
				while (it.hasNext()) {
					Row itOccpuy = it.next();
					Integer hrOccupyTaskId = Integer.valueOf((String)itOccpuy.getValue("tESTTASKID"));
					if (hrOccupyTaskId.toString() != null && hrOccupyTaskId.toString() != "") {
						return;
					}
				}

			}
			KSQL.executeUpdate("delete from MEMBER_IN_USERGROUP niu where niu.gROUPMEMBERID=:operatorId", varHr, "/metrodetection/system_code/data",
					null);

			String privilegeDelete = "delete from OPERATOR_PRIVILEGE op where op.oPERATORID=:operatorId";
			KSQL.executeUpdate(privilegeDelete, varHr, "/metrodetection/system_code/data", null);

			String roleDelete = "delete from ROLE_OPERATOR ROLE_OPERATOR where ROLE_OPERATOR.oPERATORID=:operatorId";
			KSQL.executeUpdate(roleDelete, varHr, "/metrodetection/system_code/data", null);

			String deleteOperatorPasswordKsql = "delete from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD=:operatorId";
			KSQL.executeUpdate(deleteOperatorPasswordKsql, varHr, "/metrodetection/system_code/data", null);

			String educationDelete = "delete from EDUCATION_AND_JOB_INFO  EDUCATION_AND_JOB_INFO where EDUCATION_AND_JOB_INFO.oPERATORID='"
					+ operatorId + "'";
			KSQL.executeUpdate(educationDelete, null, "/metrodetection/system_code/data", null);
			//删除人员技能信息
			String skillDelete = "delete from HR_SKILL_INFO HR_SKILL_INFO where HR_SKILL_INFO.oPERATORID=:operatorId";
			KSQL.executeUpdate(skillDelete, varHr, "/metrodetection/system_code/data", null);
			//删除人员占用信息
			String occupyDelete = "delete from HR_OCCUPY_INFO HR_OCCUPY_INFO where HR_OCCUPY_INFO.oPERATORID=:operatorId";
			KSQL.executeUpdate(occupyDelete, varHr, "/metrodetection/system_code/data", null);
			//删除人员基本信息

			//oracle删除人力资源表数据
			Connection conn1 = null;
			Statement st = null;
			ResultSet rs = null;
			try {
				conn1 = ModelUtils.getConnectionInTransaction("/metrodetection/system_code/data");
				String deleteHrBaseInfo = "delete from HR_BASE_INFO where oPERATOR_ID='" + operatorId + "'";
				st = conn1.createStatement();
				st.execute(deleteHrBaseInfo);
			} catch (NamingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
	}
}