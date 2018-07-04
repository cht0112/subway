import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import com.justep.system.context.ContextHelper;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.util.CommonUtils;

public class Portal2 {

	private static final String DATA_MODEL = "/portal2/data";
	private static final String SYSTEM_DATA_MODEL = "/system/data";

	public static boolean savePortalProfiles(String value,String personID){
		Boolean result = false;
		String ksql = "SELECT s1.* FROM Portal2Profiles s1 where s1.sPersonID=:personID and s1.sPublishType='person'";
		Map<String,Object> vars = new HashMap<String,Object>();
		vars.put("personID", personID);
		Table table = KSQL.select(ksql, vars, DATA_MODEL, null);
		if(table.size()>0){
			String updateksql = "UPDATE Portal2Profiles s1 SET s1.sValue=:value where s1.sPersonID=:personID and s1.sPublishType='person'";
			Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("value", value);
			updatevars.put("personID", personID);
			KSQL.executeUpdate(updateksql, updatevars, DATA_MODEL, null);
		}else{
			String insertksql = "INSERT INTO Portal2Profiles s1(s1,s1.version,s1.sName,s1.sPersonID,s1.sValue, s1.sPublishType) values (:id,:version,:personID,:value, 'person')";
			Map<String,Object> insertvars = new HashMap<String,Object>();
			insertvars.put("id",CommonUtils.createGUID());
			insertvars.put("version", 0);
			insertvars.put("value", value);
			insertvars.put("personID", personID);
			KSQL.executeUpdate(insertksql, insertvars, DATA_MODEL, null);
		}
		return true;

	}

	public static Map<String,String> selectPortalProfiles(String personID){
		String ksql = "SELECT s1.* FROM Portal2Profiles s1 where s1.sPersonID=:personID and s1.sPublishType='person'";
		Map<String,Object> vars = new HashMap<String,Object>();
		vars.put("personID", personID);
		Table table = KSQL.select(ksql, vars, DATA_MODEL, null);
		Iterator<Row> it = table.iterator();
		
		Map<String,String> result = new HashMap<String,String>();
		String[] relations = new String[]{"sFunctree", "sPortal", "sOther"};
		if (it.hasNext()) {
			Row row = it.next();
			for(String rel : relations){
				result.put(rel, row.getString(rel));
			}
		}else{
			result = selectThemeByOrg(ContextHelper.getPersonMember().getID());
		}
		return result;
	}
	
	private static Map<String,String> selectThemeByOrg(String orgID){
		String sql = "SELECT t1.* FROM Portal2Profiles t1 where t1 IN (SELECT s1.sThemeID FROM Portal2ProfileManager s1 where s1.sOrgID=:orgid)";
		Map<String,Object> vars = new HashMap<String,Object>();
		vars.put("orgid", orgID);
		Table table = KSQL.select(sql, vars, DATA_MODEL, null);
		Iterator<Row> it = table.iterator();
		Map<String,String> result = new HashMap<String,String>();
		String[] relations = new String[]{"sFunctree", "sPortal", "sOther"};
		if (it.hasNext()) {
			Row row = it.next();
			for(String rel : relations){
				result.put(rel, row.getString(rel));
			}
		}else{	
			String sql2 = "SELECT s1.sParent FROM SA_OPOrg s1 where s1='"+orgID+"'";
			Table table2 = KSQL.select(sql2, null, SYSTEM_DATA_MODEL, null);
			Iterator<Row> it2 = table2.iterator();
			if(it2.hasNext()){
				result = selectThemeByOrg(it2.next().getString("sParent"));
				
			}else{
				for(String rel : relations){
					result.put(rel, "");
				}
			}
		}
		return result;
	}
	

	public static void removePortalProfiles(String personID){
		
	}
	
	public static boolean saveFunctree(String functree,String personID){
		String ksql = "SELECT s1.* FROM Portal2Profiles s1 where s1.sPersonID=:personID and s1.sPublishType='person'";
		Map<String,Object> vars = new HashMap<String,Object>();
		vars.put("personID", personID);
		Table table = KSQL.select(ksql, vars, DATA_MODEL, null);
		if(table.size()>0){
			String updateksql = "UPDATE Portal2Profiles s1 SET s1.sFunctree=:functree where s1.sPersonID=:personID and s1.sPublishType='person'";
			Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("functree", functree);
			updatevars.put("personID", personID);
			KSQL.executeUpdate(updateksql, updatevars, DATA_MODEL, null);
		}else{
			Map<String,String> defaultValue = selectPortalProfiles(personID);
			String insertksql = "INSERT INTO Portal2Profiles s1(s1,s1.version, s1.sPersonID,s1.sOther, s1.sPortal, s1.sFunctree, s1.sPublishType) values (:id,:version,:personID,:other, :portal, :functree,'person')";
			Map<String,Object> insertvars = new HashMap<String,Object>();
			insertvars.put("id",CommonUtils.createGUID());
			insertvars.put("version", 0);
			insertvars.put("functree", functree);
			insertvars.put("portal", defaultValue.get("sPortal"));
			insertvars.put("other", defaultValue.get("sOther"));
			insertvars.put("personID", personID);
			KSQL.executeUpdate(insertksql, insertvars, DATA_MODEL, null);
		}
		return true;

	}
	
	public static boolean saveOther(String other,String personID){
		String ksql = "SELECT s1.* FROM Portal2Profiles s1 where s1.sPersonID=:personID and s1.sPublishType='person'";
		Map<String,Object> vars = new HashMap<String,Object>();
		vars.put("personID", personID);
		Table table = KSQL.select(ksql, vars, DATA_MODEL, null);
		if(table.size()>0){
			String updateksql = "UPDATE Portal2Profiles s1 SET s1.sOther=:other where s1.sPersonID=:personID and s1.sPublishType='person'";
			Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("other", other);
			updatevars.put("personID", personID);
			KSQL.executeUpdate(updateksql, updatevars, DATA_MODEL, null);
		}else{
			Map<String,String> defaultValue = selectPortalProfiles(personID);
			String insertksql = "INSERT INTO Portal2Profiles s1(s1,s1.version, s1.sPersonID,s1.sOther, s1.sPortal, s1.sFunctree, s1.sPublishType) values (:id,:version,:personID,:other, :portal, :functree,'person')";
			Map<String,Object> insertvars = new HashMap<String,Object>();
			insertvars.put("id",CommonUtils.createGUID());
			insertvars.put("version", 0);
			insertvars.put("functree", defaultValue.get("sFunctree"));
			insertvars.put("portal", defaultValue.get("sPortal"));
			insertvars.put("other", other);
			insertvars.put("personID", personID);
			KSQL.executeUpdate(insertksql, insertvars, DATA_MODEL, null);
		}
		return true;

	}
	
	public static boolean savePortal(String portal,String personID){
		String ksql = "SELECT s1.* FROM Portal2Profiles s1 where s1.sPersonID=:personID and s1.sPublishType='person'";
		Map<String,Object> vars = new HashMap<String,Object>();
		vars.put("personID", personID);
		Table table = KSQL.select(ksql, vars, DATA_MODEL, null);
		if(table.size()>0){
			String updateksql = "UPDATE Portal2Profiles s1 SET s1.sPortal=:portal where s1.sPersonID=:personID and s1.sPublishType='person'";
			Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("portal", portal);
			updatevars.put("personID", personID);
			KSQL.executeUpdate(updateksql, updatevars, DATA_MODEL, null);
		}else{
			Map<String,String> defaultValue = selectPortalProfiles(personID);
			String insertksql = "INSERT INTO Portal2Profiles s1(s1,s1.version, s1.sPersonID,s1.sOther, s1.sPortal, s1.sFunctree, s1.sPublishType) values (:id,:version,:personID,:other, :portal, :functree,'person')";
			Map<String,Object> insertvars = new HashMap<String,Object>();
			insertvars.put("id",CommonUtils.createGUID());
			insertvars.put("version", 0);
			insertvars.put("portal", portal);
			insertvars.put("functree", defaultValue.get("sFunctree"));
			insertvars.put("other", defaultValue.get("sOther"));
			insertvars.put("personID", personID);
			KSQL.executeUpdate(insertksql, insertvars, DATA_MODEL, null);
		}
		return true;

	}
	
	public static boolean clearPortal(String personID){
		String ksql = "SELECT s1.* FROM Portal2Profiles s1 where s1.sPersonID=:personID";
		Map<String,Object> vars = new HashMap<String,Object>();
		vars.put("personID", personID);
		Table table = KSQL.select(ksql, vars, DATA_MODEL, null);
		if(table.size()>0){
			String updateksql = "DELETE from Portal2Profiles s1 where s1.sPersonID=:personID and s1.sPublishType='person'";
			Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("personID", personID);
			KSQL.executeUpdate(updateksql, updatevars, DATA_MODEL, null);
		}
		return true;

	}
}