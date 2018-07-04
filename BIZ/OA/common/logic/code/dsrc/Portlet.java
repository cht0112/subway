import java.util.Iterator;

import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class Portlet {
	public static String getRoleType(String fOrgFID) {
		String[] orgIDs = fOrgFID.split("/");
		String resultIDs = "", resultNames = "";
		for (int i = 1; i < orgIDs.length; i++) {
			String tempOrgID = orgIDs[i].substring(0, orgIDs[i].lastIndexOf("."));//orgIDs[i].split(".")[0];
			if (tempOrgID != "" && tempOrgID != null) {
				String roleStr = getRoleInfoByOrgID(tempOrgID);
				if(roleStr.indexOf("|") != -1){
					resultIDs += roleStr.substring(0, roleStr.indexOf("|"));//roleStr.split("|")[0];
					resultNames += roleStr.substring(roleStr.indexOf("|")+1, roleStr.length());// roleStr.split("|")[1];
					System.out.println(roleStr);
				}
			}
		}
		if(resultIDs == ""){
			return "";
		}
		return resultIDs.substring(0, resultIDs.length()-1) + "|" + resultNames.substring(0, resultNames.length()-1);
	}

	public static String getRoleInfoByOrgID(String orgID) {
		String ksql = String
				.format("select role as roleID,role.sName as roleName from SA_OPRole role join SA_OPAuthorize author on role = author.sAuthorizeRoleID and author.sOrgID = '%s' and role.sValidState = 1",
						orgID);
		Table table = KSQL.select(ksql, null, "/system/data", null);
		String roleIDs = "", roleNames = "";
		for(Iterator<Row> it = table.iterator(); it.hasNext();){
			Row row = it.next();
			String roleName = row.getString("roleName");
			String roleID = row.getString("roleID");
			if(roleID != null && roleID != ""){
				roleIDs += roleID + ",";
				roleNames += roleName + ",";
			}
		}
		if(roleIDs == "")
			return "";
		return roleIDs + "|" + roleNames;
	}
	
	public static String getAllDeptUnderOrg(){
		String ksql = "select SA_OPOrg as orgID,SA_OPOrg.sName as orgName from SA_OPOrg SA_OPOrg where SA_OPOrg.sValidState = 1 and (SA_OPOrg.sDescription='0' or SA_OPOrg.sDescription='1') and (SA_OPOrg.sOrgKindID <> 'pos' and SA_OPOrg.sOrgKindID <> 'psm') and SA_OPOrg.sParent in (select org from SA_OPOrg org where org.sParent is null and org.sValidState = 1)";
		Table table = KSQL.select(ksql, null, "/system/data", null);
		String deptIDs = "", deptNames = "";
		for(Iterator<Row> it = table.iterator(); it.hasNext();){
			Row row = it.next();
			String orgName = row.getString("orgName");
			String orgID = row.getString("orgID");
			if(orgID != null && orgID != ""){
				deptIDs += orgID + ",";
				deptNames += orgName + ",";
			}
		}
		if(deptIDs == "")
				return "";
		return deptIDs.substring(0, deptIDs.length()-1) + "|" + deptNames.substring(0, deptNames.length()-1);
	}
}