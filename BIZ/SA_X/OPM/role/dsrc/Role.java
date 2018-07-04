import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.justep.system.context.*;
import com.justep.system.data.*;
import com.justep.system.action.*;
import com.justep.model.*;

public class Role{
//保存角色
	public static void roleProcessAfterSaveOPRoleAction() {
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		Row dataRow = ((Table) con.getParameter("table")).iterator().next();
		String calcRoleKind = dataRow.getValue("calcRoleKind").toString();
		if(calcRoleKind.equals("功能角色")){
			String roleName = dataRow.getValue("sName").toString();
			String roleID = dataRow.getValue("SA_OPRole").toString();
			
			String gwName = dataRow.getValue("fGW").toString();
			String zwName = dataRow.getValue("fZW").toString();

			String kSqlSelectZW = "select otc from OFFICE_TYPE_CODE otc where otc.oFFICEIDCNAME='"+zwName+"'";
			String kSqlSelectGW = "select ptc from POSITION_TYPE_CODE ptc where ptc.pOSITIONIDCNAME='"+gwName+"'";
			
			String zwID = KSQL.select(kSqlSelectZW, null, "/metrodetection/system_code/data", null).iterator().next().getValue("otc").toString();
			String gwID = KSQL.select(kSqlSelectGW, null, "/metrodetection/system_code/data", null).iterator().next().getValue("ptc").toString();

			String kSqlSelect = "select rol from ROLE_ID rol where rol.rID = '"+roleID+"'";
			Table roles = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			if(roles.size()>0){
				String kSqlUpdate = "update ROLE_ID rol set rol.rOLENAME = '"+roleName+"', rol.oFFICEID = "+zwID+", rol.pOSITIONID = "+gwID+" where rol.rID = '"+roleID+"'";
				KSQL.executeUpdate(kSqlUpdate, null, "/metrodetection/system_code/data", null);
			}else{			
				String kSqlInsert = "insert into ROLE_ID rol (rol, rol.rOLENAME, rol.mANAGEMENTTYPE, rol.oFFICEID, rol.pOSITIONID, rol.rID) values(sum(:nextSeq('100')+99), '"+roleName+"', 1, "+zwID+", "+gwID+", '"+roleID+"')";
				KSQL.executeUpdate(kSqlInsert, null, "/metrodetection/system_code/data", null);
			}
		}
	}
	//删除角色
	public static void roleProcessAfterDeleteRolesAction() {
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		Map hm = (Map)con.getParameter("roles");
		Object[] roids = hm.entrySet().toArray();
		for(int i=0; i<roids.length; i++){
			//获取角色表ID
			String roid = roids[i].toString().split("=")[0];
			String kSqlSelect = "select rol from ROLE_ID rol where rol.rID = '"+roid+"'";
			Table roles = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			if(roles.size()>0){
				String roleID = roles.iterator().next().getValue("rol").toString();
				//删除关联的角色权限表数据
				String kSqlDelete = "delete from ROLE_PRIVILEGE r where r.rOLEID = "+roleID;
				KSQL.executeUpdate(kSqlDelete, null, "/metrodetection/system_code/data", null);
				
				//删除角色表数据
				kSqlDelete = "delete from ROLE_ID rol where rol.rID = '"+roid+"'";
				KSQL.executeUpdate(kSqlDelete, null, "/metrodetection/system_code/data", null);
				
			}
		}
	}
	//保存功能
	public static void roleProcessAfterAssignFunPermissionsAction() {
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		ArrayList<String> dataRow = (ArrayList)con.getParameter("activitiesFNames");
		String rID = con.getParameter("roleID").toString();
		//获取角色ID
		String kSqlSelect = "select rol from ROLE_ID rol where rol.rID = '"+rID+"'";
		Table roles = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
		String roleID = roles.iterator().next().getValue("rol").toString();
		
		//获取角色权限表最大ID
		kSqlSelect = "select max(rol.pRIVILEGEID) as maxrol from ROLE_PRIVILEGE rol";
		Table maxf = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
		Integer mr = 0;
		if(maxf.iterator().next().getValue("maxrol")!=null){
			mr = Integer.parseInt(maxf.iterator().next().getValue("maxrol").toString());
			System.out.println("mr="+mr);
		}
		
		//获取功能权限表最大ID
		kSqlSelect = "select max(rol) as maxrol from PRIVILEGE_FUNC rol";
		maxf = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
		Integer mf = 0;
		if(maxf.iterator().next().getValue("maxrol")!=null){
			mf = Integer.parseInt(maxf.iterator().next().getValue("maxrol").toString());
		}
		int r=0;
		int f=0;
		for(String st : dataRow){
			String[] sts = st.split("/");
			String fName = sts[sts.length-1];

			//查询功能表是否有该功能
			kSqlSelect = "select fun.fUNCID, fun.sYSTEMTYPE from FUNC_ID fun where fun.fUNCNAME = '"+fName+"'";
			Table funcs = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			if(funcs.size()>0){
				//获取功能编码
				String funcID = funcs.iterator().next().getValue("fUNCID").toString();
				//获取系统类型
				String sysType = funcs.iterator().next().getValue("sYSTEMTYPE").toString();
				//查询功能权限表里是否有该功能
				kSqlSelect = "select func, func.pRIVILEGETYPE from PRIVILEGE_FUNC func where func.fUNCID = "+funcID;
				Table pritable = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
				//如果没有就添加该功能记录
				if(pritable.size()<=0){
					Integer ropriID = 0;
					for(int j=1; j<4; j++){
						f++;
						//功能权限ID
						Integer fpriID = mf+f;
						
						//添加功能权限
						String kSqlInsert = "insert into PRIVILEGE_FUNC pri (pri, pri.pRIVILEGETYPE, pri.fUNCID) values("+fpriID+", "+j+", "+funcID+")";
						KSQL.executeUpdate(kSqlInsert, null, "/metrodetection/system_code/data", null);
					
						//添加角色权限
						if(j==1){
							r++;
							//角色权限ID
							ropriID = mf+r;
							//添加角色权限
							if(!sysType.equals("1")){
								ropriID = mf+(r*3);
							}else{
								ropriID = mf+(r-1)*3+1;
							}
						}

					}
//					mr = mr+2;
					String kSqlInsert = "insert into ROLE_PRIVILEGE rolePri (rolePri.pRIVILEGEID, rolePri.mANAGEMENTTYPE, rolePri.rOLEID) values("+ropriID+", 1, "+roleID+")";
					KSQL.executeUpdate(kSqlInsert, null, "/metrodetection/system_code/data", null);
				}else{
					Iterator<Row> rs = pritable.iterator(); 
					Row row = null;
					boolean bool = true;
					Integer fpriID = 0;
					Integer pritype = 0;
					Integer pri = 0;
					while(rs.hasNext()){
						row = rs.next();
						//获取功能权限ID
						pritype = Integer.parseInt(row.getValue("pRIVILEGETYPE").toString());
						if(pritype.equals(1)){
							fpriID = Integer.parseInt(row.getValue("func").toString());
						}
						pri = Integer.parseInt(row.getValue("func").toString());
						//查询该角色是否拥有该功能权限
						
						kSqlSelect = "select r.pRIVILEGEID from ROLE_PRIVILEGE r where r.pRIVILEGEID = "+pri+" and r.rOLEID = "+roleID;
						Table rolefunc = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);

						if(rolefunc.size()>0){
							bool = false;
						}
					}
					//添加角色权限表数据
					if(bool){
						if(!sysType.equals("1")){
							fpriID = fpriID+2;
						}
						String kSqlInsert = "insert into ROLE_PRIVILEGE rolePri (rolePri.pRIVILEGEID, rolePri.mANAGEMENTTYPE, rolePri.rOLEID) values("+fpriID+", 1, "+roleID+")";		
						KSQL.executeUpdate(kSqlInsert, null, "/metrodetection/system_code/data", null);					
					}
					
				}
//				kSqlSelect = "select role.pRIVILEGEID from ROLE_PRIVILEGE role OPTIONAL JOIN PRIVILEGE_FUNC func on role.pRIVILEGEID = func.pRIVILEGEID where func.fUNCID = '"+funcID+"' and role.rOLEID = '"+roleID+"'";
//				Table rolefunc = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
//				
//				System.out.println(rolefunc.size());
//				if(rolefunc.size()<=0){
//					r++;
//					//添加新功能
//					Integer ropriID = mr+r;
//					//添加角色权限
//					String kSqlInsert = "insert into ROLE_PRIVILEGE rolePri (rolePri.pRIVILEGEID, rolePri.mANAGEMENTTYPE, rolePri.rOLEID) values('"+ropriID+"', 1, '"+roleID+"')";
//					KSQL.executeUpdate(kSqlInsert, null, "/metrodetection/system_code/data", null);
//								
//					//添加新功能权限
//					kSqlInsert = "insert into PRIVILEGE_FUNC pri (pri.pRIVILEGEID, pri.pRIVILEGETYPE, pri.fUNCID) values('"+ropriID+"', 1, '"+funcID+"')";
//					KSQL.executeUpdate(kSqlInsert, null, "/metrodetection/system_code/data", null);
//				}
			}
		}
	}
	
	//删除功能
	public static void roleProcessBeforeDeletePermissionsAction() {
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		Map hm = (Map)con.getParameter("permissions");
		Object[] funcs = hm.entrySet().toArray();
		for(int i=0; i<funcs.length; i++){
			String fid = funcs[i].toString().split("=")[0];
			String kSqlSelect = "select sa.sActivityFName, sa.sPermissionRoleID from SA_OPPermission sa where sa = '"+fid+"'";
			Table saopp = KSQL.select(kSqlSelect, null, "/system/data", null);
			
			String[] fNames = saopp.iterator().next().getValue("sActivityFName").toString().split("/");
			String fName = fNames[fNames.length-1];
			
			String rID = saopp.iterator().next().getValue("sPermissionRoleID").toString();
			
			kSqlSelect = "select rol from ROLE_ID rol where rol.rID = '"+rID+"'";
			Table roles = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			if(roles.size()>0){
				String roleID = roles.iterator().next().getValue("rol").toString();
				
				//获取功能编码
				kSqlSelect = "select fun.fUNCID from FUNC_ID fun where fun.fUNCNAME = '"+fName+"'";
				Table fun = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
				if(fun.size()>0){
					String funID = fun.iterator().next().getValue("fUNCID").toString();
					//获取关联的功能权限表的权限ID
					kSqlSelect = "select pri from PRIVILEGE_FUNC pri join ROLE_PRIVILEGE rolepri on rolepri.pRIVILEGEID=pri where pri.fUNCID = "+funID+" and rolepri.rOLEID="+roleID;
					fun = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
					if(fun.size()>0){
						String priID = fun.iterator().next().getValue("pri").toString();
						
						//删除关联的角色表权限数据
						String kSqlDelete = "delete from ROLE_PRIVILEGE r where r.pRIVILEGEID = "+priID+" and r.rOLEID="+roleID;
						KSQL.executeUpdate(kSqlDelete, null, "/metrodetection/system_code/data", null);
					}
				}
			}
		}
	}

	//添加功能权限
	public static void roleProcessAfterSetActionsPolicyAction() {
		ActionContext con = ModelUtils.getRequestContext().getActionContext();
		String permissionID = (String)con.getParameter("permissionID");
		Map hm = (Map)con.getParameter("actions");
		
		//获取具体动作指令
		Object[] actions = hm.entrySet().toArray();
		
		//获取功能名称和角色关联ID
		String kSqlSelect = "select sa.sActivityFName, sa.sPermissionRoleID from SA_OPPermission sa where sa = '"+permissionID+"'";
		Table saopp = KSQL.select(kSqlSelect, null, "/system/data", null);

		String[] fNames = saopp.iterator().next().getValue("sActivityFName").toString().split("/");
		String fName = fNames[fNames.length-1];
		String rID = saopp.iterator().next().getValue("sPermissionRoleID").toString();

		//获取角色ID
		kSqlSelect = "select r from ROLE_ID r where r.rID = '"+rID + "'";
		Table role = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
		if(role.size()>0){
			String roleID = role.iterator().next().getValue("r").toString();
			
			//获取功能ID
			kSqlSelect = "select fun.fUNCID from FUNC_ID fun where fun.fUNCNAME = '"+fName+"'";
			Table fun = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
			if(fun.size()>0){
				String funID = fun.iterator().next().getValue("fUNCID").toString();
				//获取功能权限ID
				kSqlSelect = "select pri,pri.pRIVILEGETYPE from PRIVILEGE_FUNC pri where pri.fUNCID="+funID;
				Table priFunc = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
				Iterator<Row> rs = priFunc.iterator(); 
				Row row = null;
				
				String dupri = "";
				String duxiepri = "";
				while(rs.hasNext()){
					row = rs.next();
					//该功能读权限ID
					if(row.getValue("pRIVILEGETYPE").toString().equals("1")){
						dupri = row.getValue("pri").toString();
					}
					//该功能读写权限ID
					if(row.getValue("pRIVILEGETYPE").toString().equals("3")){
						duxiepri = row.getValue("pri").toString();
					}
				}
				//获取角色功能权限ID
				kSqlSelect = "select r.pRIVILEGEID from ROLE_PRIVILEGE r join PRIVILEGE_FUNC pri on r.pRIVILEGEID = pri where r.rOLEID="+roleID+" and pri.fUNCID="+funID;
				Table priRole = KSQL.select(kSqlSelect, null, "/metrodetection/system_code/data", null);
				if(priRole.size()>0){
					String priID = priRole.iterator().next().getValue("pRIVILEGEID").toString();
					if(actions.length>0){
						//修改功能权限为读写权限
						String kSqlUpdate = "update ROLE_PRIVILEGE r set r.pRIVILEGEID = "+duxiepri+" where r.pRIVILEGEID = "+priID;
						KSQL.executeUpdate(kSqlUpdate, null, "/metrodetection/system_code/data", null);
					}else{
						//修改功能权限为读权限
						String kSqlUpdate = "update ROLE_PRIVILEGE r set r.pRIVILEGEID = "+dupri+" where r.pRIVILEGEID = "+priID;
						KSQL.executeUpdate(kSqlUpdate, null, "/metrodetection/system_code/data", null);
					}
				}
			}
		}
	}
}