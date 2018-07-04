import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.justep.appCommon.Constants;
import com.justep.appCommon.FilterUtils;
import com.justep.system.context.ContextHelper;
import com.justep.system.data.BizData;
import com.justep.system.data.DataPermission;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class OrgSelectDialogProcedure {
	private static final String GROUP_ROOT = "___group__root___";
	private static final String GROUP_ROOT_LABEL = "常用组";

	private static final String ORG_KIND_GROUP = "grp";

	private static final String QUERY_KIND_TREE_ROOT = "treeRoot";
	private static final String QUERY_KIND_TREE_GROUP_ROOT = "treeGroupRoot";
	private static final String QUERY_KIND_TREE_GROUP = "treeGroup";
	private static final String QUERY_KIND_DETAILS = "details";

	private static final String NODE_KIND_LEAF = "nkLeaf";

	public static Table query(String concept, String idColumn, String select,
			String from, String condition, List<DataPermission> range, String filter,
			Boolean distinct, int offset, int limit, String columns,
			String orderBy, String aggregate, String aggregateColumns,
			Map<String, Object> variables, String dataModel, String fnModel,
			String queryKind, String manageCodes, String groupParentID) {
		if (QUERY_KIND_TREE_ROOT.equals(queryKind)) {
			return getTreeRootTable(concept, idColumn, select, from, condition,
					range, filter, distinct, offset, limit, columns, orderBy,
					aggregate, aggregateColumns, variables, dataModel, fnModel,
					manageCodes);
		} else if (QUERY_KIND_TREE_GROUP_ROOT.equals(queryKind)) {
			return getTreeGroupRootTable(concept, idColumn, select, from,
					columns, dataModel, fnModel);
		} else if (QUERY_KIND_TREE_GROUP.equals(queryKind)) {
			return getTreeGroupTable(concept, idColumn, select, from,
					condition, range, filter, distinct, offset, limit, columns,
					orderBy, aggregate, aggregateColumns, variables, dataModel,
					fnModel, groupParentID);
		} else if (QUERY_KIND_DETAILS.equals(queryKind)) {
			return getDetailsTable(concept, idColumn, select, from, condition,
					range, filter, distinct, offset, limit, columns, orderBy,
					aggregate, aggregateColumns, variables, dataModel, fnModel,
					groupParentID);
		} else {
			return BizData.query(concept, idColumn, select, from, condition,
					range, filter, distinct, offset, limit, columns, orderBy,
					aggregate, aggregateColumns, variables, dataModel, fnModel);
		}
	}

	private static Table getTreeRootTable(String concept, String idColumn,
			String select, String from, String condition, List<DataPermission> range,
			String filter, Boolean distinct, int offset, int limit,
			String columns, String orderBy, String aggregate,
			String aggregateColumns, Map<String, Object> variables,
			String dataModel, String fnModel, String manageCodes) {
		condition = FilterUtils.joinFilter(condition,
				getManageCondition(manageCodes), "and");
		Table table = BizData.query(concept, idColumn, select, from, condition,
				range, filter, distinct, offset, limit, columns, orderBy,
				aggregate, aggregateColumns, variables, dataModel, fnModel);
		appendVirtualGroupRootRow(table);
		return table;
	}

	private static Table getTreeGroupRootTable(String concept, String idColumn,
			String select, String from, String columns, String dataModel,
			String fnModel) {
		Table table = getEmptyOrgTable(concept, idColumn, select, from,
				columns, dataModel, fnModel);
		Table groupTable = getGroupTableByRoot();
		Iterator<Row> groupRows = groupTable.iterator();
		while (groupRows.hasNext())
			appendRowByGroupRow(table, groupRows.next());
		return table;
	}

	private static Table getTreeGroupTable(String concept, String idColumn,
			String select, String from, String condition, List<DataPermission> range,
			String filter, Boolean distinct, int offset, int limit,
			String columns, String orderBy, String aggregate,
			String aggregateColumns, Map<String, Object> variables,
			String dataModel, String fnModel, String groupParentID) {
		Table table = getEmptyOrgTable(concept, idColumn, select, from,
				columns, dataModel, fnModel);

		Table groupTable = getGroupTableByParent(groupParentID);
		Iterator<Row> groupRows = groupTable.iterator();
		while (groupRows.hasNext())
			appendRowByGroupRow(table, groupRows.next());

		appendDetails(concept, idColumn, select, from, condition, range,
				filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel, groupParentID,
				table);
		return table;
	}

	private static Table getDetailsTable(String concept, String idColumn,
			String select, String from, String condition, List<DataPermission> range,
			String filter, Boolean distinct, int offset, int limit,
			String columns, String orderBy, String aggregate,
			String aggregateColumns, Map<String, Object> variables,
			String dataModel, String fnModel, String groupParentID) {
		Table table = getEmptyOrgTable(concept, idColumn, select, from,
				columns, dataModel, fnModel);
		appendDetails(concept, idColumn, select, from, condition, range,
				filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel, groupParentID,
				table);
		return table;
	}

	private static void appendDetails(String concept, String idColumn,
			String select, String from, String condition, List<DataPermission> range,
			String filter, Boolean distinct, int offset, int limit,
			String columns, String orderBy, String aggregate,
			String aggregateColumns, Map<String, Object> variables,
			String dataModel, String fnModel, String groupParentID, Table table) {
		Table detailTable = getDetailTableByGroupID(groupParentID);
		List<String> details = getValueListFromTable(detailTable, "fOrgID");
		String detailCondition = FilterUtils.getInFilter("SA_OPOrg", details);
		condition = FilterUtils.joinFilter(condition, detailCondition, "and");
		Table detailOrgs = BizData.query(concept, idColumn, select, from,
				condition, range, filter, distinct, offset, limit, columns,
				orderBy, aggregate, aggregateColumns, variables, dataModel,
				fnModel);
		detailOrgs.getMetaData().setKeyColumn("SA_OPOrg");

		for (String detail : details) {
			Row r = detailOrgs.getRow(detail);
			if (Utils.isNotNull(r))
				appendRowByDetailRow(table, r, groupParentID);
		}
	}

	private static String getManageCondition(String manageCodes) {
		if (Utils.isNotEmptyString(manageCodes)) {
			List<String> fIDs = ContextHelper.getRootManagementFIDs(manageCodes
					.split(","));
			return FilterUtils.getInFilter("SA_OPOrg.sFID", fIDs);
		} else
			return "";
	}

	private static void appendVirtualGroupRootRow(Table table) {
		Row row = table.appendRow();
		row.setString("SA_OPOrg", GROUP_ROOT);
		row.setString("sName", GROUP_ROOT_LABEL);
		row.setString("sOrgKindID", ORG_KIND_GROUP);
	}

	private static Table getGroupTable(String condition) {
		String ksql = "select AP_CustomOrgGroup.* "
				+ "	from AP_CustomOrgGroup AP_CustomOrgGroup "
				+ "		optional join AP_CustomOrgRange AP_CustomOrgRange on AP_CustomOrgRange.fMasterID = AP_CustomOrgGroup ";
		String rangeCondition = FilterUtils
				.getCurrentMembersURLFilter("AP_CustomOrgRange.fOrgFID");
		rangeCondition = FilterUtils.joinFilter(
				"AP_CustomOrgGroup.fType = 'departmental'", rangeCondition,
				"and");
		rangeCondition = FilterUtils
				.joinFilter(
						rangeCondition,
						"(AP_CustomOrgGroup.fType = 'global' or "
								+ "	(AP_CustomOrgGroup.fType = 'personal' and AP_CustomOrgGroup.fCreatePsnID = :currentPersonID()))",
						"or");
		ksql = ksql + " where "
				+ FilterUtils.joinFilter(rangeCondition, condition, "and");
		return KSQL.select(ksql, null, Constants.APPCOMMON_DATA, null);
	}

	private static Table getGroupTableByRoot() {
		String condition = "AP_CustomOrgGroup.fParent is null";
		return getGroupTable(condition);
	}

	private static Table getGroupTableByParent(String parentID) {
		String condition = String.format("AP_CustomOrgGroup.fParent = '%s'",
				parentID);
		return getGroupTable(condition);
	}

	private static Table getEmptyOrgTable(String concept, String idColumn,
			String select, String from, String columns, String dataModel,
			String fnModel) {
		return BizData.query(concept, idColumn, select, from, "1=0", null,
				null, null, 0, 0, columns, null, null, null, null, dataModel,
				fnModel);
	}

	private static void appendRowByGroupRow(Table table, Row rowGroup) {
		Row row = table.appendRow();
		row.setString("SA_OPOrg", rowGroup.getString("AP_CustomOrgGroup"));
		row.setString("sName", rowGroup.getString("fName"));
		row.setString("sOrgKindID", ORG_KIND_GROUP);
		row.setValue("sParent", rowGroup.getValue("fParent"));
	}

	private static void appendRowByDetailRow(Table table, Row rowDetail,
			String groupID) {
		Row row = table.appendRow();
		Collection<String> columns = table.getColumnNames();
		for (String column : columns) {
			if (column.equals("SA_OPOrg"))
				row.setValue(column, String.format("%s|%s", groupID, rowDetail
						.getValue(column)));
			else if (column.equals("sNodeKind"))
				row.setValue(column, NODE_KIND_LEAF);
			else if (column.equals("sParent"))
				row.setValue(column, groupID);
			else
				row.setValue(column, rowDetail.getValue(column));
		}
	}

	private static Table getDetailTableByGroupID(String groupID) {
		String ksql = String.format("select AP_CustomOrgDetail.* "
				+ "	from AP_CustomOrgDetail AP_CustomOrgDetail "
				+ "	where AP_CustomOrgDetail.fMasterID = '%s' "
				+ "	order by AP_CustomOrgDetail.fSequence ", groupID);
		return KSQL.select(ksql, null, Constants.APPCOMMON_DATA, null);
	}

	private static List<String> getValueListFromTable(Table table,
			String idColumn) {
		List<String> l = new ArrayList<String>();
		Iterator<Row> rows = table.iterator();
		while (rows.hasNext())
			l.add(rows.next().getString(idColumn));
		return l;
	}

}
