var mainActivity = {};
mainActivity.gridOrgTreeShowNodeImg = function(event) {
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	if (justep.OpmUtils.isTreeRoot(event.rowId))
		orgKind = "root";
	return justep.Org.OrgKinds.getImageURL(orgKind);
};
mainActivity.gridManagementManageOrgKindIDRender = function(event) {
	var orgKind = event.value;
	return "<img src='"	+ justep.Request.convertURL(justep.Org.OrgKinds.getImageURL(orgKind)) + "' alt='" + justep.Org.OrgKinds.getLabel(orgKind) + "'/>";
};
mainActivity.dOrgTreeIndexChanged = function(event) {
	mainActivity.refreshManagementData();
	mainActivity.refreshRoleManagementData();
	mainActivity.setComponentsStatus();
};
mainActivity.dOrgTreeAfterRefresh = function(event) {
	mainActivity.dOrgTreeIndexChanged(event);
};
mainActivity.setComponentsStatus = function() {
	var orgIDValid = mainActivity.checkOrgIDValid();
	justep.xbl("btnInsertManagements").setDisabled(!orgIDValid);
	justep.xbl("btnDeleteManagements").setDisabled(!orgIDValid);
	justep.xbl("btnInsertRoleManagements").setDisabled(!orgIDValid);
	justep.xbl("btnDeleteRoleManagements").setDisabled(!orgIDValid);
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
	if (!!searchText) {
		dManagement.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPManagement.sOrgFName,SA_OPManagement.sManageOrgFName", searchText));
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
	if (mainActivity._gridManagementValueChanging) return;
	
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
mainActivity.btnInsertManagementsClick = function(event) {
	if (mainActivity.checkOrgIDValid());
		justep.xbl("wdSelectOrgs").open();
};
mainActivity.wdSelectOrgsReceive = function(event) {
	if (event.data.getRowsNum == 0) return;

	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();

	var manageOrgIDs = new justep.Request.ListParam();
	for ( var i = 0; i < event.data.length; i++) {
		var manageOrgID = event.data[i]["rowid"];
		manageOrgIDs.add(new justep.Request.SimpleParam(manageOrgID, justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	var params = new justep.Request.ActionParam();
	params.setString("orgID", orgID);
	params.setString("manageTypeID", justep.OpmUtils.MANAGE_TYPE_SYSTEM);
	params.setList("manageOrgIDs", manageOrgIDs);
	justep.Request.sendBizRequest2({
		action: "appendManagementsAction", 
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				mainActivity.refreshManagementData();
				justep.OpmUtils.showSuccess("分配管理的组织成功。");
			}
		}
	});
};
mainActivity.btnDeleteManagementsClick = function(event) {
	var gridManagement = justep.xbl("gridManagement").grid;
	var checkColIndex = gridManagement.getColIndexById("calcCheckBox");
	var checkedIDs = gridManagement.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选要删除的组织！");
		return;
	} 
	
	justep.OpmUtils.showConfirm("确实要删除当前勾选的组织吗？", function(e) {
		var checkedIDsArray = checkedIDs.split(",");
		var params = new justep.Request.ActionParam();
		var managements = new justep.Request.MapParam();
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var version = gridManagement.getValueById(id, "version");
			managements.put(id, new justep.Request.SimpleParam(version,
					justep.XML.Namespaces.XMLSCHEMA_INTEGER));
		}
		params.setMap("managements", managements);
		
		justep.Request.sendBizRequest2({
			action: "deleteManagementsAction", 
			parameters: params, 
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					mainActivity.refreshManagementData();
					justep.OpmUtils.showSuccess("删除管理的组织成功。");
				}
			}
		});
	});
};
mainActivity.refreshRoleManagementData = function() {
	var dRoleManagement = justep.xbl("dRoleManagement");
	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	var orgFID = dOrgTree.getValue("sFID", orgID);
	var inherited = document.getElementById("cbShowInheritedRole").checked;
	if (inherited)
		dRoleManagement.setFilter("orgFilter", justep.OpmUtils.createParentPathFilter("SA_OPRoleManagement.sOrgFID", orgFID));
	else
		dRoleManagement.setFilter("orgFilter", "SA_OPRoleManagement.sOrgFID = '" + orgFID + "'");
	var searchText = $("#inputSearchRole").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchRole").val("");
		searchText = "";
	}
	if (!!searchText) {
		dRoleManagement.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPRoleManagement.sOrgFName,SA_OPRole.sName", searchText));
	} else
		dRoleManagement.setFilter("searchFilter", "");
	dRoleManagement.refreshData();
};
mainActivity.cbShowInheritedRoleClick = function(event) {
	mainActivity.refreshRoleManagementData();
};
mainActivity.imageSearchRoleClick = function(event) {
	mainActivity.refreshRoleManagementData();
};
mainActivity.inputSearchRoleKeydown = function(event) {
	if (event.keyCode == 13)
		mainActivity.refreshRoleManagementData();
};
mainActivity.btnInsertRoleManagementsClick = function(event) {
	if (mainActivity.checkOrgIDValid())
		justep.xbl("wdSelectRoles").open({});
};
mainActivity.wdSelectRolesReceive = function(event) {
	if (event.data.getRowsNum == 0)	return;

	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();

	var roleIDs = new justep.Request.ListParam();
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		var roleID = event.data.getRowId(i);
		roleIDs.add(new justep.Request.SimpleParam(roleID, justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	var params = new justep.Request.ActionParam();
	params.setString("orgID", orgID);
	params.setList("roleIDs", roleIDs);
	justep.Request.sendBizRequest2({
		action: "appendRoleManagementsAction",
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				mainActivity.refreshRoleManagementData();
				justep.OpmUtils.showSuccess("分配管理的角色成功。");
			}
		}
	});
};
mainActivity.btnDeleteRoleManagementsClick = function(event) {
	var gridRoleManagement = justep.xbl("gridRoleManagement").grid;
	var checkColIndex = gridRoleManagement.getColIndexById("calcCheckBox");
	var checkedIDs = gridRoleManagement.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选要删除的角色！");
		return;
	} 

	justep.OpmUtils.showConfirm("确实要删除当前勾选的角色吗？", function(e) {
		var checkedIDsArray = checkedIDs.split(",");
		var params = new justep.Request.ActionParam();
		var roleManagements = new justep.Request.MapParam();
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var version = gridRoleManagement.getValueById(id, "version");
			roleManagements.put(id, new justep.Request.SimpleParam(version,
					justep.XML.Namespaces.XMLSCHEMA_INTEGER));
		}
		params.setMap("roleManagements", roleManagements);

		justep.Request.sendBizRequest2({
			action: "deleteRoleManagementsAction", 
			parameters: params, 
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					mainActivity.refreshRoleManagementData();
					justep.OpmUtils.showSuccess("删除管理的角色成功。");
				}
			}
		});
	});
};
mainActivity.gridRoleManagementRowValueChanged = function(event){
	if (mainActivity._gridManagementValueChanging) return;
	
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
mainActivity.refreshOrgData = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	var onlyShowValidOrg = document.getElementById("cbOnlyShowValidOrg").checked;
	if (onlyShowValidOrg)
		dOrgTree.setFilter("onlyShowValidOrgFilter", 
				"exists(select management_ "
				+ "		from SA_OPManagement management_ "
				+ "		where management_.sManageTypeID = 'systemManagement' and management_.sOrgFID like concat(SA_OPOrg.sFID, '%')" 
				+ " ) or " 
				+ "exists(select roleManagement_ "
				+ "		from SA_OPRoleManagement roleManagement_ "
				+ "		where roleManagement_.sOrgFID like concat(SA_OPOrg.sFID, '%') "
				+ " ) ");
	else
		dOrgTree.setFilter("onlyShowValidOrgFilter", "");

	var gridOrgTree = justep.xbl("gridOrgTree").grid;
	var oldIDPath = justep.OpmUtils.getTreeGridIdPath(gridOrgTree);
	var oldIndex = dOrgTree.getIndex(dOrgTree.getCurrentRowId());
	dOrgTree.refreshData();
	if (oldIndex <= 0 && !!dOrgTree.getCurrentRowId())
		dOrgTree.expandRow(dOrgTree.getCurrentRowId());
	else
		dOrgTree.expandTreeByIdPath(oldIDPath);
};
mainActivity.cbOnlyShowValidOrgClick = function(event){
	mainActivity.refreshOrgData();
};
mainActivity.model1ModelConstructDone = function(event){
	mainActivity.refreshOrgData();
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
