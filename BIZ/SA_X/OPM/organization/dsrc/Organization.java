import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;


public class Organization {

	public static void organizationProcessAfterSaveHR_BASE_INFOAction() {
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		Table tb = (Table) conn.getParameter("table");
		Row dataRow = (Row)tb.iterator().next();
		String sname = (String)dataRow.getValue("oPERATORNAME");
		String operatorId = (String)dataRow.getValue("HR_BASE_INFO");
		String sCode = (String)dataRow.getValue("Scode");
		//System.out.println("***用户编码******"+sCode);
		Map varScode = new HashMap();
		varScode.put("sCode", sCode);
		String ksqlSelectOrgId = "select SA_OPOrg.* from SA_OPOrg SA_OPOrg where SA_OPOrg.sCode = :sCode ";
		Table tabOrg =KSQL.select(ksqlSelectOrgId,varScode,"/system/data",null);
		Row rOrg = (Row)tabOrg.iterator().next();
		String orgId = (String)rOrg.getValue("SA_OPOrg").toString();
		String org  = orgId.split("@")[1];
		//System.out.println("*******人员的orgId*********："+org);
		
		//查询用户组(operator_password)，条件是：user_type=2
		String ksqlSelectOperPass = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.uSERTYPE=2";
		System.out.println("*******用户组查询语句*********："+ksqlSelectOperPass);
		Table userGroupTab = KSQL.select(ksqlSelectOperPass, null, "/metrodetection/system_code/data", null);
		Iterator rowDatas= userGroupTab.iterator();
		boolean flag = false;
		for(int i = 0; i<userGroupTab.size();i++){
			Row rowData = (Row)rowDatas.next();
			String userGroupOrgId = (String)rowData.getValue("oRGID");
			//System.out.println(userGroupOrgId+" ++++++++++++用户组++++++++++");
			if(userGroupOrgId.equals(org)){
				flag = true;
				break;
			}
		}
		//System.out.println(flag+"  ***********flag********");
		
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(date);
		calendar.add(2, 3);
		Date date1 = calendar.getTime();
		
		Map var = new HashMap();
		var.put("sname", sname);
		var.put("operatorId", operatorId);
		Timestamp tmp = new Timestamp(date1.getTime());
		var.put("date1", tmp);
		var.put("orgId", orgId);
		
		Map vars = new HashMap();
		vars.put("operatorId", operatorId);
		
		String ksqlSelect = "select op.* from OPERATOR_PASSWORD op where op = '"+operatorId+"'";
		Table tabOperator = KSQL.select(ksqlSelect,null,"/metrodetection/system_code/data",null);
		for(int i=0; i<tabOperator.size(); i++){
			//System.out.println(tabOperator.iterator().next().getValue("op").toString());
			System.out.println("************"+tabOperator.iterator().next().getValue("vALIDENDDATE").getClass().getName());
		}
		if(tabOperator.size() <= 0){
			
			String kSqlInsert = "insert into OPERATOR_PASSWORD o (o,o.uSERNAME,o.uSERTYPE,o.vALIDENDDATE,o.oPERATORPASSWORD,o.oRGID) values (:operatorId,:sname,1,:date1,'c4ca4238a0b923820dcc509a6f75849b',:orgId)";
			KSQL.executeUpdate(kSqlInsert,var,"/metrodetection/system_code/data",null);
			
			//判断是否是在用户组下增加人员
			//System.out.println(flag+"  ***********插入用户组前的flag********");
			if(flag){
				
				String ksqlSelectOrg = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.oRGID = '"+org+"'";
				String orgOperatorId = (String)KSQL.select(ksqlSelectOrg,null,"/metrodetection/system_code/data",null).iterator().next().getValue("OPERATOR_PASSWORD");
				
				Map varUserGroup = new HashMap();
				varUserGroup.put("operatorId", operatorId);
				varUserGroup.put("orgOperatorId", orgOperatorId);
				//System.out.println("&&&&&&&&&&&进入插入用户组了&&&&&&&&&&&&&");
				String kSqlInsertMemberUserGroup = "insert into MEMBER_IN_USERGROUP m (m,m.oPERATORID,m.gROUPMEMBERID) values (:guid(),:orgOperatorId,:operatorId)";
				KSQL.executeUpdate(kSqlInsertMemberUserGroup,varUserGroup,"/metrodetection/system_code/data",null);
			}
			
		}else{
			//修改
			String ksqlUpdate = "update OPERATOR_PASSWORD o set o.uSERNAME = :sname where o = :operatorId"; 
			KSQL.executeUpdate(ksqlUpdate,var,"/metrodetection/system_code/data",null);
		}
		
	}

	public static void organizationProcessAfterSaveOPOrgAction() {
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		Table tb = (Table) conn.getParameter("table");
		Row dataRow = (Row)tb.iterator().next();
		String id = (String)dataRow.getValue("SA_OPOrg").toString();
		String name = (String)dataRow.getValue("sName");
		Map var = new HashMap();
		var.put("id",id);
		var.put("name",name);
		var.put("kind",2);
		Map vars = new HashMap();
		vars.put("id", id);
		String ksqlSelect = "select o.* from OPERATOR_PASSWORD o where o.oRGID = :id";
		Table tabOperator =KSQL.select(ksqlSelect,vars,"/metrodetection/system_code/data",null);
		if(tabOperator.size()<=0){
			String ksqlSave = "insert into OPERATOR_PASSWORD o (o,o.uSERNAME,o.uSERTYPE,o.vALIDENDDATE,o.oPERATORPASSWORD,o.oRGID) values (:nextSeqString('o', '0000000'),:name,:kind,:currentDate(),'c4ca4238a0b923820dcc509a6f75849b',:id)";
			KSQL.executeUpdate(ksqlSave, var, "/metrodetection/system_code/data", null);
		}else{
			String ksqlUpdate = "update OPERATOR_PASSWORD o set o.uSERNAME = :name where o.oRGID = :id"; 
			KSQL.executeUpdate(ksqlUpdate,var,"/metrodetection/system_code/data",null);
		}
		
	}
	
	public static void organizationProcessBeforeMoveOrgAction() {
		//System.out.println("=================扩展移动==========================");
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		String newParentID = conn.getParameter("newParentID").toString();
		System.out.println("******newParentID****** "+newParentID);
		String id = conn.getParameter("id").toString();
		//System.out.println("================移动人员的Id================= "+id);
		String personId = id.split("@")[0]+"@"+newParentID;//@前的纯person的id号
		String personOrgId = id.split("@")[1].toString();
		
		//查询用户组，并判断移动人员的是否在用户组下
		String ksqlSelectOperPass = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.uSERTYPE=2";
		//System.out.println("*******用户组查询语句*********："+ksqlSelectOperPass);
		Table userGroupTab = KSQL.select(ksqlSelectOperPass, null, "/metrodetection/system_code/data", null);
		Iterator rowDatas= userGroupTab.iterator();
		boolean flag = false;
		for(int i = 0; i<userGroupTab.size();i++){
			Row rowData = (Row)rowDatas.next();
			String userGroupOrgId = (String)rowData.getValue("oRGID");
			//System.out.println(userGroupOrgId+" ++++++++++++用户组++++++++++");
			if(userGroupOrgId.equals(personOrgId)){
				flag = true;
				break;
			}
		}
		
		//判断人员移动到的组织是否是用户组
		boolean flagAfter = false;
		Iterator rowDatasAfter = userGroupTab.iterator();
		for(int i = 0; i<userGroupTab.size();i++){
			Row rowData = (Row)rowDatasAfter.next();
			String userGroupOrgId = (String)rowData.getValue("oRGID");
			//System.out.println(userGroupOrgId+" ++++++++++++用户组++++++++++");
			if(userGroupOrgId.equals(newParentID)){
				flagAfter = true;
				break;
			}
		}
		
		
		String ksqlSelectOperatorPasswordPer = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.oRGID = '"+id+"'";
		String operatorPersonId = (String)KSQL.select(ksqlSelectOperatorPasswordPer,null,"/metrodetection/system_code/data",null).iterator().next().getValue("OPERATOR_PASSWORD");
		//System.out.println("+++++++++++++移动人员的operatorId++++++++++ "+operatorPersonId);
		
		if(flag){
			//人员移动后的组织是用户组
			if(flagAfter){
				//移动到的组织是用户组，得到用户组的operatorId
				String ksqlSelectOperatorPasswordOrg = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.oRGID = '"+newParentID+"'";
				String operatorOrgId = (String)KSQL.select(ksqlSelectOperatorPasswordOrg,null,"/metrodetection/system_code/data",null).iterator().next().getValue("OPERATOR_PASSWORD");
				
				String ksqlUpdateMemberUseGroup = "update MEMBER_IN_USERGROUP MEMBER_IN_USERGROUP set MEMBER_IN_USERGROUP.oPERATORID = '"+operatorOrgId+"' where MEMBER_IN_USERGROUP.gROUPMEMBERID='"+operatorPersonId+"'";
				KSQL.executeUpdate(ksqlUpdateMemberUseGroup, null, "/metrodetection/system_code/data", null);
			}else{
				String ksqlDeleteMemberUseGroup = "delete from MEMBER_IN_USERGROUP MEMBER_IN_USERGROUP where MEMBER_IN_USERGROUP.gROUPMEMBERID='"+operatorPersonId+"'";
				KSQL.executeUpdate(ksqlDeleteMemberUseGroup, null, "/metrodetection/system_code/data", null);
			}
			
		}else{
			String ksqlSelectOperatorPasswordOrg = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.oRGID = '"+newParentID+"'";
			String operatorOrgId = (String)KSQL.select(ksqlSelectOperatorPasswordOrg,null,"/metrodetection/system_code/data",null).iterator().next().getValue("OPERATOR_PASSWORD");
			Map varUserGroup = new HashMap();
			varUserGroup.put("operatorId", operatorPersonId);
			varUserGroup.put("orgOperatorId", operatorOrgId);
			String kSqlInsertMemberUserGroup = "insert into MEMBER_IN_USERGROUP m (m,m.oPERATORID,m.gROUPMEMBERID) values (:guid(),:orgOperatorId,:operatorId)";
			KSQL.executeUpdate(kSqlInsertMemberUserGroup,varUserGroup,"/metrodetection/system_code/data",null);
		}
		
		
		String ksqlUpdateOperatorPassword = "update OPERATOR_PASSWORD OPERATOR_PASSWORD set OPERATOR_PASSWORD.oRGID = '"+personId+"'  where OPERATOR_PASSWORD='"+operatorPersonId+"'";
		KSQL.executeUpdate(ksqlUpdateOperatorPassword, null, "/metrodetection/system_code/data", null);
		
	}


	public static void organizationProcessAfterAssignPersonAction() {
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		List personIds = (List)conn.getParameter("personIDs");
		String orgID = (String)conn.getParameter("orgID");
		System.out.println("******orgID*****"+orgID);
		String ksqlSelectPasswordOrg = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.oRGID = '"+orgID+"'";
		String operatorOrgId = (String)(KSQL.select(ksqlSelectPasswordOrg, null,"/metrodetection/system_code/data", null).iterator().next().getValue("OPERATOR_PASSWORD"));
		System.out.println("*******operatorOrgId*******"+operatorOrgId);
		for(int i = 0; i < personIds.size();i++){
			String personId = (String)personIds.get(i);
			System.out.println("&&&&&&&personId&&&&&"+personId);
			
			//查询移动人员前所属的组织的id
			//String ksqlSelectOpOrg = "select SA_OPOrg.* from SA_OPOrg SA_OPOrg where SA_OPORG like '"+personId+"@%'";
			//String personTotalId = (String)KSQL.select(ksqlSelectOpOrg, null, "/system/data", null).iterator().next().getValue("SA_OPORG");
			//String personParentId = personTotalId.split("@")[1].toString();
			
			String newPersonId = personId.split("@")[0]+"@"+orgID;
			System.out.println("*********newPersonId********"+newPersonId);
			String ksqlSelectPasswordPer = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.oRGID like '"+personId+"@%'";
			String operatorPerId = (String)(KSQL.select(ksqlSelectPasswordPer, null,"/metrodetection/system_code/data", null).iterator().next().getValue("OPERATOR_PASSWORD"));
			System.out.println("*********operatorPerId********"+operatorPerId);
			
//			//查询用户组，并判断移动人员的是否在用户组下
//			String ksqlSelectOperPass = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.uSERTYPE=2";
//			System.out.println("*******用户组查询语句*********："+ksqlSelectOperPass);
//			Table userGroupTab = KSQL.select(ksqlSelectOperPass, null, "/metrodetection/system_code/data", null);
//			Iterator rowDatas= userGroupTab.iterator();
//			boolean flag = false;
//			for(int j = 0; i<userGroupTab.size();j++){
//				Row rowData = (Row)rowDatas.next();
//				String userGroupOrgId = (String)rowData.getValue("oRGID");
//				System.out.println(userGroupOrgId+" ++++++++++++用户组++++++++++");
//				if(userGroupOrgId.equals(personParentId)){
//					flag = true;
//					break;
//				}
//			}
			
			//if(flag){
				String ksqlUpdateMemberGroup = "update MEMBER_IN_USERGROUP MEMBER_IN_USERGROUP set MEMBER_IN_USERGROUP.oPERATORID= '"+operatorOrgId+"' where MEMBER_IN_USERGROUP.gROUPMEMBERID = '"+operatorPerId+"'";
				KSQL.executeUpdate(ksqlUpdateMemberGroup, null, "/metrodetection/system_code/data", null);
//			}else{
//				Map varUserGroup = new HashMap();
//				varUserGroup.put("operatorId", operatorPerId);
//				varUserGroup.put("orgOperatorId", operatorOrgId);
//				String kSqlInsertMemberUserGroup = "insert into MEMBER_IN_USERGROUP m (m,m.oPERATORID,m.gROUPMEMBERID) values (:currentDateTime(),:orgOperatorId,:operatorId)";
//				KSQL.executeUpdate(kSqlInsertMemberUserGroup,varUserGroup,"/metrodetection/system_code/data",null);
//			}
			
			
			String ksqlUpdatePassword = "update OPERATOR_PASSWORD OPERATOR_PASSWORD set OPERATOR_PASSWORD.oRGID= '"+newPersonId+"' where OPERATOR_PASSWORD = '"+operatorPerId+"'";
			KSQL.executeUpdate(ksqlUpdatePassword, null, "/metrodetection/system_code/data", null);
			
		}
	}

	public static void organizationProcessAfterSaveHrBaseInfoAction() {
		System.out.println("=========进入执行后事件=========");
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		//Table tb = (Table) conn.getParameter("table");
		//Row dataRow = (Row)tb.iterator().next();
		String sname = (String)conn.getParameter("sName");
		String operId = (String)conn.getParameter("operatorId");
		String scode = (String)conn.getParameter("sCode");
		System.out.println("***用户编码******"+sname+"=="+operId+"======"+scode);
		Map varScode = new HashMap();
		varScode.put("scode", scode);
		String ksqlSelectOrgId = "select SA_OPOrg.* from SA_OPOrg SA_OPOrg where SA_OPOrg.sCode = :scode ";
		Table tabOrg =KSQL.select(ksqlSelectOrgId,varScode,"/system/data",null);
		Row rOrg = (Row)tabOrg.iterator().next();
		String orgId = (String)rOrg.getValue("SA_OPOrg").toString();
		String org  = orgId.split("@")[1];
		System.out.println("*******人员的orgId*********："+org);
		
		//查询用户组(operator_password)，条件是：user_type=2
		String ksqlSelectOperPass = "select OPERATOR_PASSWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.uSERTYPE=2";
		System.out.println("*******用户组查询语句*********："+ksqlSelectOperPass);
		Table userGroupTab = KSQL.select(ksqlSelectOperPass, null, "/metrodetection/system_code/data", null);
		Iterator rowDatas= userGroupTab.iterator();
		boolean flag = false;
		for(int i = 0; i<userGroupTab.size();i++){
			Row rowData = (Row)rowDatas.next();
			String userGroupOrgId = (String)rowData.getValue("oRGID");
			System.out.println(userGroupOrgId+" ++++++++++++用户组++++++++++");
			if(userGroupOrgId.equals(org)){
				flag = true;
				break;
			}
		}
		//System.out.println(flag+"  ***********flag********");
		
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(date);
		calendar.add(2, 3);
		Date date1 = calendar.getTime();
		
		Map var = new HashMap();
		var.put("sname", sname);
		var.put("operId", operId);
		Timestamp tmp = new Timestamp(date1.getTime());
		var.put("date1", tmp);
		var.put("orgId", orgId);
		
		Map vars = new HashMap();
		vars.put("operId", operId);
		
		String ksqlSelect = "select op.* from OPERATOR_PASSWORD op where trim(op) = '"+operId+"'";
		Table tabOperator = KSQL.select(ksqlSelect,null,"/metrodetection/system_code/data",null);
		for(int i=0; i<tabOperator.size(); i++){
			//System.out.println(tabOperator.iterator().next().getValue("op").toString());
			System.out.println("************"+tabOperator.iterator().next().getValue("vALIDENDDATE").getClass().getName());
		}
		if(tabOperator.size() <= 0){
			
			String kSqlInsert = "insert into OPERATOR_PASSWORD o (o,o.uSERNAME,o.uSERTYPE,o.vALIDENDDATE,o.oPERATORPASSWORD,o.oRGID) values (:operId,:sname,1,:date1,'E10ADC3949BA59ABBE56E057F20F883E',:orgId)";
			KSQL.executeUpdate(kSqlInsert,var,"/metrodetection/system_code/data",null);
			
			//判断是否是在用户组下增加人员
			//System.out.println(flag+"  ***********插入用户组前的flag********");
			if(flag){
				
				String ksqlSelectOrg = "select OPERATOR_PAS" +
						"SWORD.* from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD.oRGID = '"+org+"'";
				String orgOperatorId = (String)KSQL.select(ksqlSelectOrg,null,"/metrodetection/system_code/data",null).iterator().next().getValue("OPERATOR_PASSWORD");
				
				Map varUserGroup = new HashMap();
				varUserGroup.put("operId", operId);
				varUserGroup.put("orgOperatorId", orgOperatorId);
				System.out.println("&&&&&&&&&&&进入插入用户组了&&&&&&&&&&&&&");
				String kSqlInsertMemberUserGroup = "insert into MEMBER_IN_USERGROUP m (m,m.oPERATORID,m.gROUPMEMBERID) values (:guid(),:orgOperatorId,:operId)";
				KSQL.executeUpdate(kSqlInsertMemberUserGroup,varUserGroup,"/metrodetection/system_code/data",null);
			}
			
		}else{
			//修改
			String ksqlUpdate = "update OPERATOR_PASSWORD o set o.uSERNAME = :sname where trim(o) = :operId"; 
			KSQL.executeUpdate(ksqlUpdate,var,"/metrodetection/system_code/data",null);
		}
	}


	public static void organizationProcessAfterResetPasswordAction() {
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		String id = (String)conn.getParameter("id");
		System.out.println("id=======>>>>>"+id);
		String selectOpPerson = "select SA_OPPerson.* from SA_OPPerson SA_OPPerson where SA_OPPerson = '"+id+"'";
		Table tabOp = KSQL.select(selectOpPerson, null, "/system/data", null);
		Row rowOp = tabOp.iterator().next();
		String sCode = (String)rowOp.getValue("sCode");
		String password = (String)rowOp.getValue("sPassword");
		String ksqlSelectHr = "select HR_BASE_INFO.* from HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode = '"+sCode+"'";
		Table tabHr = KSQL.select(ksqlSelectHr, null, "/system/data", null);
		if(tabHr.size()>0){
			String operatorId = (String)tabHr.iterator().next().getValue("HR_BASE_INFO");
			String ksqlUpdatePassword = "update OPERATOR_PASSWORD o set o.oPERATORPASSWORD = '"+password+"' where o = '"+operatorId+"'"; 
			KSQL.executeUpdate(ksqlUpdatePassword,null,"/metrodetection/system_code/data",null);
		}
	}
}