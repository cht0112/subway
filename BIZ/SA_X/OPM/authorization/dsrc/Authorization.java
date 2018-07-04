import java.util.ArrayList;
import java.util.Map;

import com.justep.system.context.*;
import com.justep.system.data.*;
import com.justep.system.action.*;
import com.justep.model.*;

public class Authorization {

	public static void authorizationProcessAfterAppendAuthorizesAction() {
		//保存用户角色分配
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		ArrayList<String> orgIDs = ((ArrayList) con.getParameter("orgIDs"));
		ArrayList<String> roleIDs = ((ArrayList) con.getParameter("roleIDs"));
		ArrayList<String> orgs = new ArrayList<String>();
		for(String orgID : orgIDs){
			boolean bool = true;
			for(String org : orgs){
				if(orgID.equals(org)){
					bool = false;
				}
			}
			if(bool){
				orgs.add(orgID);
			}
		}
		for(String orgID : orgs){
			for(String rID : roleIDs){
				String kSqlOPAuthorize = "select saop from SA_OPAuthorize saop where saop.sOrgID='"+orgID+"' and saop.sAuthorizeRoleID='"+rID+"'";
				Table object = KSQL.select(kSqlOPAuthorize, null, "/system/data", null);
				String fID = object.iterator().next().getValue("saop").toString();
				
				String kSqlOperID = "select oper from OPERATOR_PASSWORD oper where oper.oRGID='"+orgID+"'";
				object = KSQL.select(kSqlOperID, null, "/metrodetection/system_code/data", null);
				String operID = object.iterator().next().getValue("oper").toString();
				
				String kSqlRole = "select r from ROLE_ID r where r.rID='"+rID+"'";
				object = KSQL.select(kSqlRole, null, "/metrodetection/system_code/data", null);
				if(object.size()>0){
					String roleID = object.iterator().next().getValue("r").toString();
					
					String kSqlSelect = "select roleOP.oPERATORID from ROLE_OPERATOR roleOP where roleOP.oPERATORID='"+operID+"' and roleOP.rOLEID="+roleID;
					object = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
					if(object.size()<=0){
						String kSqlInsert = "insert into ROLE_OPERATOR r(r, r.oPERATORID, r.rOLEID, r.mANAGEMENTTYPE) values ('"+fID+"','"+operID+"', "+roleID+", 1)";
						KSQL.executeUpdate(kSqlInsert, null, "/metrodetection/system_code/data", null);
					}
				}
			}
		}
	}

	public static void authorizationProcessBeforeDeleteAuthorizesAction() {
		//删除用户角色分配
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		Map hm = (Map)con.getParameter("authorizes");
		Object[] roids = hm.entrySet().toArray();
		for(int i=0; i<roids.length; i++){
			String opAurhID = roids[i].toString().split("=")[0];
			String kSqlSelect = "select saop.sOrgID, saop.sAuthorizeRoleID from SA_OPAuthorize saop where saop='"+opAurhID+"'";
			Table object = KSQL.select(kSqlSelect, null, "/system/data", null);
			Row dataRow = object.iterator().next();
			
			String orgId = dataRow.getValue("sOrgID").toString();
			String rid = dataRow.getValue("sAuthorizeRoleID").toString();
			
			String kSqlOperID = "select oper from OPERATOR_PASSWORD oper where oper.oRGID='"+orgId+"'";
			object = KSQL.select(kSqlOperID, null, "/metrodetection/system_code/data", null);
			String operID = object.iterator().next().getValue("oper").toString();
			
			kSqlSelect = "select r from ROLE_ID r where r.rID='"+rid+"'";
			object = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			if(object.size()>0){
				String roleID = object.iterator().next().getValue("r").toString();
				if(!roleID.equals("") && !operID.equals("")){
					String kSqlDelete = "delete from ROLE_OPERATOR roleOP where roleOP.oPERATORID='"+operID+"' and roleOP.rOLEID="+roleID;
					KSQL.executeUpdate(kSqlDelete, null, "/metrodetection/system_code/data", null);
				}
			}
			
		}
	}
}