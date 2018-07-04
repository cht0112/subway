var mainActivity = {};
mainActivity.gridOrgTreeShowNodeImg = function(event) {
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	if (justep.OpmUtils.isTreeRoot(event.rowId))
		orgKind = "root";
	return justep.Org.OrgKinds.getImageURL(orgKind);
};
mainActivity.gridManagementManageOrgKindIDRender = function(event) {
	var orgKind = event.value;
	return "<img src='" + justep.Request.convertURL(justep.Org.OrgKinds.getImageURL(orgKind)) + "' alt='" + justep.Org.OrgKinds.getLabel(orgKind) + "'/>";
};
mainActivity.dOrgTreeIndexChanged = function(event) {
	mainActivity.refreshManagementData();
	mainActivity.setComponentsStatus();
};
mainActivity.dOrgTreeAfterRefresh = function(event) {
	mainActivity.dOrgTreeIndexChanged();
};
mainActivity.setComponentsStatus = function() {
	var orgIDValid = mainActivity.checkOrgIDValid();
	justep.xbl("btnInsertManagement").setDisabled(!orgIDValid);
	justep.xbl("btnDeleteManagement").setDisabled(!orgIDValid);
};
mainActivity.checkOrgIDValid = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	return (!!orgID && !justep.OpmUtils.isTreeRoot(orgID));
};
mainActivity.refreshManagementData = function() {
	var dManagement = justep.xbl("dManagement");
	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	var orgFID = dOrgTree.getValue("sFID", orgID);
	var inherited = document.getElementById("cbShowInherited").checked;
	if (inherited)
		dManagement.setFilter("orgFilter", justep.OpmUtils.createParentPathFilter("SA_OPManagement.sOrgFID", orgFID));
	else
		dManagement.setFilter("orgFilter", "SA_OPManagement.sOrgFID = '" + orgFID + "'");
	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}
	if (searchText) {
		dManagement.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPManagement.sOrgFName,SA_OPManagement.sManageOrgFName,manageType.sName", searchText));
	} else
		dManagement.setFilter("searchFilter", "");
	dManagement.refreshData();
};
mainActivity.cbShowInheritedClick = function(event) {
	mainActivity.refreshManagementData();
};
mainActivity.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		mainActivity.refreshManagementData();
};
mainActivity.imageSearchClick = function(event) {
	mainActivity.refreshManagementData();
};
mainActivity._gridManagementValueChanging = false;
mainActivity.gridManagementRowValueChanged = function(event) {
	if (mainActivity._gridManagementValueChanging)
		return;
	var orgID = justep.xbl("dOrgTree").getCurrentRowId();
	var managementOrgID = event.grid.getValueById(event.rowId, "sOrgID");
	if (managementOrgID != orgID) {
		mainActivity._gridManagementValueChanging = true;
		try {
			event.grid.setValueById(event.rowId, "calcCheckBox", 0);
		} finally {
			mainActivity._gridManagementValueChanging = false;
		}
	}
};
mainActivity._manageTypeID = null;
mainActivity.btnInsertManagementClick = function(event) {
	if (mainActivity.checkOrgIDValid());
		justep.xbl("wdSelectManageType").open({});
};
mainActivity.wdSelectManageTypeReceive = function(event) {
	mainActivity._manageTypeID = event.data.getRowId(0);
	justep.xbl("wdSelectOrgs").open();
};
mainActivity.wdSelectOrgsReceive = function(event) {
	if (event.data.getRowsNum == 0)
		return;

	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();

	var manageOrgIDs = new justep.Request.ListParam();
	for ( var i = 0; i < event.data.length; i++) {
		var manageOrgID = event.data[i]["rowid"];
		manageOrgIDs.add(new justep.Request.SimpleParam(manageOrgID, justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	var params = new justep.Request.ActionParam();
	params.setString("orgID", orgID);
	params.setString("manageTypeID", mainActivity._manageTypeID);
	params.setList("manageOrgIDs", manageOrgIDs);
	justep.Request.sendBizRequest2({
		action: "appendManagementsAction", 
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				mainActivity.refreshManagementData();
				justep.OpmUtils.showSuccess("分配业务管理权限成功。");
			}
		}
	});
};
mainActivity.btnDeleteManagementClick = function(event) {
	var gridManagement = justep.xbl("gridManagement").grid;
	var checkColIndex = gridManagement.getColIndexById("calcCheckBox");
	var checkedIDs = gridManagement.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选要删除的业务管理权限！");
		return;
	} 

	justep.OpmUtils.showConfirm("确实要删除当前勾选的业务管理权限吗？", function(e) {
		var checkedIDsArray = checkedIDs.split(",");
		var params = new justep.Request.ActionParam();
		var managements = new justep.Request.MapParam();
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var version = gridManagement.getValueById(id, "version");
			managements
					.put(id, new justep.Request.SimpleParam(version, justep.XML.Namespaces.XMLSCHEMA_INTEGER));
		}
		params.setMap("managements", managements);
		justep.Request.sendBizRequest2({
			action: "deleteManagementsAction", 
			parameters: params, 
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					mainActivity.refreshManagementData();
					justep.OpmUtils.showSuccess("删除业务管理权限成功。");
				}
			}
		});
	});
};
mainActivity.model1Load = function(event){
	var dOrgTree = justep.xbl("dOrgTree");
	if (dOrgTree.getCurrentRowId())
		dOrgTree.expandRow(dOrgTree.getCurrentRowId());
};
mainActivity.imageSearchOrgClick = function(event){
	mainActivity.openSearchOrg();
};
mainActivity.inputSearchOrgKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.openSearchOrg();
};
mainActivity.openSearchOrg = function() {
	var searchText = $("#inputSearchOrg").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchOrg").val("");
		searchText = "";
	}
	justep.xbl("wdSearchOrg").open({
		searchText : searchText
	});
};
mainActivity.wdSearchOrgReceive = function(event){
	var dOrgTree = justep.xbl("dOrgTree");
	var gridOrgTree = justep.xbl("gridOrgTree").grid;
	var sFID = event.data.getValueByName("sFID", 0);
	var idPath = justep.OpmUtils.getTreeGridIDPathByFullID(gridOrgTree, sFID);
	if (!!idPath)
		dOrgTree.expandTreeByIdPath(idPath);
};
