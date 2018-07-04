import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.justep.system.context.ContextHelper;
import com.justep.system.data.BizData;
import com.justep.system.data.DataPermission;
import com.justep.system.data.KSQL;
import com.justep.system.data.ModifyState;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.opm.api.OpmUtils;
import com.justep.system.opm.api.Org;
import com.justep.system.opm.api.OrgHelper;
import com.justep.system.opm.api.OrgKind;
import com.justep.system.opm.api.Person;
import com.justep.system.opm.api.PersonHelper;
import com.justep.system.opm.api.ValidState;
import com.justep.system.util.CommonUtils;
import com.justep.util.Utils;

public class OrgProcedure {
	private static String MANAGE_FILTER_MODE_EQUAL = "equal";
	private static String MANAGE_FILTER_MODE_LIKE = "like";

	public static Table queryOPOrg(String concept, String idColumn,
			String select, String from, String condition,
			List<DataPermission> range, String filter, Boolean distinct,
			int offset, int limit, String columns, String orderBy,
			String aggregate, String aggregateColumns,
			Map<String, Object> variables, String dataModel, String fnModel,
			String manageCodes, String manageFilterMode,
			Boolean splitFullIDCodeName) {
		
		if (Utils.isNotEmptyString(manageCodes)) {
			manageFilterMode = Utils.isEmptyString(manageFilterMode) ? MANAGE_FILTER_MODE_EQUAL
					: manageFilterMode;
			String manageCondition = "";
			List<String> manageOrgFIDs = ContextHelper
					.getRootManagementFIDs(manageCodes.split(","));
			if (MANAGE_FILTER_MODE_EQUAL.equals(manageFilterMode))
				manageCondition = OpmUtils.getMultiValuesEqualCondition(
						"SA_OPOrg.sFID", manageOrgFIDs.toArray());
			else if (MANAGE_FILTER_MODE_LIKE.equals(manageFilterMode))
				manageCondition = OpmUtils.arrayToString(
						manageOrgFIDs.toArray(), "SA_OPOrg.sFID like '%s%%'",
						"or");
			else
				throw new RuntimeException("无效的业务管理权限过滤模式：" + manageFilterMode);
			condition = OpmUtils.joinCondition("and", condition,
					manageCondition);
		}

		Table table = BizData.query(concept, idColumn, select, from, condition,
				range, filter, distinct, offset, limit, columns, orderBy,
				aggregate, aggregateColumns, variables, dataModel, fnModel);
		table.setRecordState(false);
		splitFullIDCodeName = splitFullIDCodeName == null ? false
				: splitFullIDCodeName;
		if (splitFullIDCodeName)
			extendOrgTableForSplit(table);
		return table;
	}

	private static void extendOrgTableForSplit(Table table) {
		table.addColumns("ognID", "String");
		table.addColumns("ognCode", "String");
		//table.addColumns("ognName", "String");
		table.addColumns("dptID", "String");
		table.addColumns("dptCode", "String");
		//table.addColumns("dptName", "String");
		table.addColumns("posID", "String");
		table.addColumns("posCode", "String");
		//table.addColumns("posName", "String");
		Iterator<Row> rows = table.iterator();
		while (rows.hasNext()) {
			Row row = rows.next();
			Map<String, String> splits = splitFullIDCodeName(
					row.getString("sFID"), row.getString("sFCode"),
					row.getString("sFName"));
			if (splits.containsKey("posID")) {
				row.setString("posID", splits.get("posID"));
				row.setString("posCode", splits.get("posCode"));
				row.setString("posName", splits.get("posName"));
			}
			if (splits.containsKey("dptID")) {
				row.setString("dptID", splits.get("dptID"));
				row.setString("dptCode", splits.get("dptCode"));
				row.setString("dptName", splits.get("dptName"));
			}
			if (splits.containsKey("ognID")) {
				row.setString("ognID", splits.get("ognID"));
				row.setString("ognCode", splits.get("ognCode"));
				row.setString("ognName", splits.get("ognName"));
			}
		}
	}

	private static Map<String, String> splitFullIDCodeName(String fullID,
			String fullCode, String fullName) {
		Map<String, String> result = new HashMap<String, String>();
		String[] ids = fullID.split("/");
		String[] codes = fullCode.split("/");
		String[] names = fullName.split("/");
		if (ids.length != codes.length || ids.length != names.length
				|| ids.length == 0)
			throw new RuntimeException(
					String.format(
							"路径数据错误，请使用修复工具修复！\n\r\n\rsFID：%s\n\rsFCode：%s\n\rsFName：%s",
							fullID, fullCode, fullName));
		for (int i = ids.length - 1; i >= 0; i--) {
			String idWithExt = ids[i];
			if (Utils.isEmptyString(idWithExt))
				continue;

			OrgKind orgKind = OrgKind.valueOf(CommonUtils.getExtOfFile(idWithExt));
			String id = CommonUtils.getNameNoExtOfFile(idWithExt);
			if (OrgKind.psm.equals(orgKind)) {
				if (!result.containsKey("psmID")) {
					result.put("psmID", id);
					result.put("psmCode", codes[i]);
					result.put("psmName", names[i]);
				}
			} else if (OrgKind.pos.equals(orgKind)) {
				if (!result.containsKey("posID")) {
					result.put("posID", id);
					result.put("posCode", codes[i]);
					result.put("posName", names[i]);
				}
			} else if (OrgKind.dpt.equals(orgKind)) {
				if (!result.containsKey("dptID")) {
					result.put("dptID", id);
					result.put("dptCode", codes[i]);
					result.put("dptName", names[i]);
				}
			} else if (OrgKind.ogn.equals(orgKind)) {
				if (!result.containsKey("ognID")) {
					result.put("ognID", id);
					result.put("ognCode", codes[i]);
					result.put("ognName", names[i]);
					break;
				}
			}
		}
		return result;
	}

	public static int saveOPOrg(Table table, String concept,
			List<DataPermission> insertRange, List<DataPermission> deleteRange,
			List<DataPermission> updateRange, String readOnly, String notNull,
			String dataModel, String fnModel) {
		Iterator<Row> newIterator = table.iterator(ModifyState.NEW);
		Collection<Org> newOrgs = OrgHelper.getOrgsByIterator(newIterator)
				.values();
		OrgHelper.appendOrgs(newOrgs);

		Iterator<Row> editIterator = table.iterator(ModifyState.EDIT);
		Collection<Org> editOrgs = OrgHelper.getOrgsByIterator(editIterator)
				.values();
		OrgHelper.updateOrgs(editOrgs);
		return newOrgs.size() + editOrgs.size();
	}

	public static Table createOPOrg(Table table, String concept,
			Map<String, String> defaultValues, String fnModel) {
		return BizData.create(table, concept, defaultValues, fnModel);
	}

	public static Table queryOPPerson(String concept, String idColumn,
			String select, String from, String condition,
			List<DataPermission> range, String filter, Boolean distinct,
			int offset, int limit, String columns, String orderBy,
			String aggregate, String aggregateColumns,
			Map<String, Object> variables, String dataModel, String fnModel) {
		return BizData.query(concept, idColumn, select, from, condition, range,
				filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static int saveOPPerson(Table table, String concept,
			List<DataPermission> insertRange, List<DataPermission> deleteRange,
			List<DataPermission> updateRange, String readOnly, String notNull,
			String dataModel, String fnModel) {
		Iterator<Row> newIterator = table.iterator(ModifyState.NEW);
		Collection<Person> newPersons = PersonHelper.getPersonsByIterator(
				newIterator).values();
		PersonHelper.appendPersons(newPersons);

		Iterator<Row> editIterator = table.iterator(ModifyState.EDIT);
		Collection<Person> editPersons = PersonHelper.getPersonsByIterator(
				editIterator).values();
		PersonHelper.updatePersons(editPersons);
		return newPersons.size() + editPersons.size();
	}

	public static Table createOPPerson(Table table, String concept,
			Map<String, String> defaultValues, String fnModel) {
		return BizData.create(table, concept, defaultValues, fnModel);
	}

	public static void disableOrg(String id, Integer version) {
		OrgHelper.disableOrg(id, version);
	}

	public static void enableOrg(String id, Integer version,
			Boolean enableSlavePsm) {
		OrgHelper.enableOrg(id, version, enableSlavePsm == null ? false
				: enableSlavePsm);
	}

	public static void logicDeleteOrg(String id, Integer version) {
		OrgHelper.logicDeleteOrg(id, version);
	}

	public static void restoreOrg(String id, Integer version,
			Boolean restoreSlavePsm) {
		OrgHelper.restoreOrg(id, version, restoreSlavePsm == null ? false
				: restoreSlavePsm);
	}

	public static void physicalDeleteOrg(String id, Integer version,
			Boolean deletePerson) {
		
//		java.util.Map vars = new java.util.HashMap();
//		vars.put("id", id);
//		com.justep.system.data.Table tab = com.justep.system.data.KSQL.select("select SA_OPOrg.* from " +
//				"SA_OPOrg SA_OPOrg where SA_OPOrg = :id",vars,"/system/data",null);
//		
//		com.justep.system.data.Row r = (com.justep.system.data.Row)tab.iterator().next();
//		java.lang.String scode = (java.lang.String)r.getValue("sCode");
//		java.util.Map var = new java.util.HashMap();
//		var.put("scode", scode);
//		System.out.println("--------->"+scode);
//		
//		com.justep.system.data.Table tabHrBaseInfo = com.justep.system.data.KSQL.select("select HR_BASE_INFO.* from " +
//				"HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode = :scode",var,"/system/data",null);
//		com.justep.system.data.Row rr = (com.justep.system.data.Row)tabHrBaseInfo.iterator().next();
//		java.util.Map varOperator = new java.util.HashMap();
//		java.lang.String operatorId = (java.lang.String)rr.getValue("HR_BASE_INFO");
//		varOperator.put("operatorId", operatorId);
//		com.justep.system.data.KSQL.executeUpdate("delete from MEMBER_IN_USERGROUP niu where niu.oPERATORID=:operatorId",varOperator,"/metrodetection/system_Authority_Related/data",null);
//		com.justep.system.data.KSQL.executeUpdate("delete from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD=:operatorId",varOperator,"/system/data",null);
//		
//		com.justep.system.data.KSQL.executeUpdate("delete from HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode=:scode",var,"/system/data",null);
		 OrgHelper.physicalDeleteOrg(id, version, deletePerson == null ? true
					: deletePerson);
	}

	public static void sortOrgs(List<String> ids, List<Integer> versions,
			String parentID) {
		OrgHelper.sortOrgs(ids, versions, parentID);
	}

	public static void moveOrg(String id, Integer version, String newParentID) {
		OrgHelper.moveOrg(id, version, newParentID);
	}

	public static void assignPerson(List<String> personIDs, String orgID,
			Integer psmValidState, Boolean autoEnableOldPsm) {
		OrgHelper.appendPersonMembers(
				personIDs,
				orgID,
				psmValidState == null ? null : ValidState
						.fromNumber(psmValidState),
				autoEnableOldPsm == null ? false : autoEnableOldPsm);
	}

	public static void resetPassword(String id, Integer version) {
		PersonHelper.resetPassword(id, version);
	}

	public static void changePersonMainOrg(String id, Integer version,
			String newMainOrgID, Boolean disableOldMasterPsm) {
		PersonHelper.changePersonMainOrg(id, version, newMainOrgID,
				disableOldMasterPsm == null ? true : disableOldMasterPsm);
	}

	public static void enableSlavePsm(String psmID, Integer psmVersion,
			String personID) {
		if (Utils.isEmptyString(personID))
			personID = psmID.substring(0, psmID.indexOf('@'));
		PersonHelper.enablePerson(personID, null, false);
		OrgHelper.enableOrg(psmID, psmVersion, false);
	}

	public static void physicalDeletePerson(String id, Integer version) {
//		java.util.Map vars = new java.util.HashMap();
//		vars.put("id", id);
//		com.justep.system.data.Table tab = com.justep.system.data.KSQL.select("select SA_OPOrg.* from " +
//				"SA_OPOrg SA_OPOrg where SA_OPOrg = :id",vars,"/system/data",null);
//		
//		com.justep.system.data.Row r = (com.justep.system.data.Row)tab.iterator().next();
//		java.lang.String scode = (java.lang.String)r.getValue("sCode");
//		java.util.Map var = new java.util.HashMap();
//		var.put("scode", scode);
//		System.out.println("--------->"+scode);
//		
//		com.justep.system.data.Table tabHrBaseInfo = com.justep.system.data.KSQL.select("select HR_BASE_INFO.* from " +
//				"HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode = :scode",var,"/system/data",null);
//		com.justep.system.data.Row rr = (com.justep.system.data.Row)tabHrBaseInfo.iterator().next();
//		java.util.Map varOperator = new java.util.HashMap();
//		java.lang.String operatorId = (java.lang.String)rr.getValue("HR_BASE_INFO");
//		varOperator.put("operatorId", operatorId);
//		com.justep.system.data.KSQL.executeUpdate("delete from MEMBER_IN_USERGROUP niu where niu.oPERATORID=:operatorId",varOperator,"/metrodetection/system_Authority_Related/data",null);
//
//		com.justep.system.data.KSQL.executeUpdate("delete from OPERATOR_PASSWORD OPERATOR_PASSWORD where OPERATOR_PASSWORD=:operatorId",varOperator,"/system/data",null);
//		
//		com.justep.system.data.KSQL.executeUpdate("delete from HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode=:scode",var,"/system/data",null);
		PersonHelper.physicalDeletePerson(id, version);
//		HashMap vars = new HashMap();
//		vars.put("id", id);
//		com.justep.system.data.Table tab = com.justep.system.data.KSQL.select("select SA_OPOrg.* from " +
//				"SA_OPOrg SA_OPOrg where SA_OPOrg = :id",vars,"/system/data",null);
//		 for(Iterator it = tab.iterator(); it.hasNext();){
//			 com.justep.system.data.Row r = (com.justep.system.data.Row)it.next();
//		 }
	}

	public static void restorePerson(String id, Integer version,
			Boolean restoreSlavePsm, String newMainOrgID) {
		if (Utils.isNotEmptyString(newMainOrgID)) {
			PersonHelper.changePersonMainOrg(id, version, newMainOrgID, false);
		} else
			PersonHelper.restorePerson(id, version,
					restoreSlavePsm == null ? false : restoreSlavePsm);
	}
}