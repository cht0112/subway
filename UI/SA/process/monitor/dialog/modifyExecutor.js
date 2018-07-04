function expandAllPersonNode() {
	var orgTreeData = justep.xbl("orgPersonMemberTree1").getData();
	orgTreeData.expandAll();
}

function filterOrgTreeData() {
	var orgTreeData = justep.xbl("orgTreeData");
	orgTreeData.collapseAll();
	var inputCond = document.getElementById("flow_to_query_input");
	if (inputCond.value != "") {
		orgTreeData.filters.clear();
		orgTreeData.setFilter("_customFilter_", "(SA_OPOrg.sName LIKE '%" + inputCond.value + "%') OR (SA_OPOrg.sCode LIKE '%" + inputCond.value + "%') OR (SA_OPOrg.sOrgKindID <> 'psm')");
		orgTreeData.refreshData();
		orgTreeData.expandAll();
	} else {
		orgTreeData.filters.clear();
		orgTreeData.setFilter("_treeFilter_", "SA_OPOrg.sParent='_is_root_'");
		orgTreeData.refreshData();
		orgTreeData.expandRowsToLevel(0);
	}
}

function flowToFilterInputKeydown(event) {
	var keycode = event.keyCode || event.which || event.charCode;
	if (keycode == 13) {
		filterOrgTreeData();
	}
}

function getModifyFlowDataRowCount(event) {
	return justep.xbl("modifyFlowData").getCount();
}

function removeAllDataRows(data) {
	if (typeof data == "string") {
		data = justep.xbl(data);
	}

	if (typeof data == "object") {
		var rowCount = data.getCount();
		while (rowCount > 0) {
			data.removeByIndex(0);
			rowCount--;
		}
	}
}

function selectExecutor(event) {
	var orgTreeData = justep.xbl("orgTreeData");
	var currentOrgKindID = orgTreeData.getValue("sOrgKindID");
	if (currentOrgKindID.toLowerCase() == "psm") {
		var sParent = orgTreeData.getValue("sParent");
	
		var sExecutorPersonID = orgTreeData.getValue("sPersonID");
		var sExecutorPersonName = orgTreeData.getValue("sName");
		var sExecutorPosID = "";
		var sExecutorPosName = "";
		var sExecutorDeptID = "";
		var sExecutorDeptName = "";
		var sExecutorFID = orgTreeData.getValue("sFID", sParent) + "/" + sExecutorPersonID + "@" + sParent + ".psm";
		var sExecutorFName = orgTreeData.getValue("sFName", sParent) + "/" + sExecutorPersonName;
		var sExecutorNames = sExecutorPersonName;
		
		var sOrgKindID = orgTreeData.getValue("sOrgKindID", sParent);
		if (sOrgKindID.toLowerCase() == "pos") {
			sExecutorPosID = sParent;
			sExecutorPosName = orgTreeData.getValue("sName", sExecutorPosID);
			sExecutorDeptID = orgTreeData.getValue("sParent", sExecutorPosID);
			sExecutorDeptName = orgTreeData.getValue("sName", sExecutorDeptID);
		} else {
			sExecutorDeptID = sParent;
			sExecutorDeptName = orgTreeData.getValue("sName", sExecutorDeptID);
		}
		
		var modifyFlowData = justep.xbl("modifyFlowData");
		removeAllDataRows(modifyFlowData);
		var newRowId = modifyFlowData.createUUID();
		modifyFlowData.insert(newRowId, modifyFlowData.getCount(), [sExecutorDeptID, sExecutorDeptName, sExecutorPosID, sExecutorPosName, sExecutorPersonID, sExecutorPersonName, sExecutorFID, sExecutorFName, sExecutorNames]);
		
		refreshSelectButtonState();
	}
}

function removeSelectedExecutor() {
	var modifyFlowData = justep.xbl("modifyFlowData");
	var rowId = modifyFlowData.getCurrentRowId();
	modifyFlowData.remove(rowId);
	refreshSelectButtonState();
}

function refreshSelectButtonState() {
	var modifyFlowData = justep.xbl("modifyFlowData");
	modifyFlowData.xformsRefresh();
}