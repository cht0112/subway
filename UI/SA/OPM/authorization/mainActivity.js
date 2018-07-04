var mainActivity = {};
mainActivity._currentTab = "tabAuthorize";

mainActivity.gridOrgTreeShowNodeImg = function(event) {
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	if (justep.OpmUtils.isTreeRoot(event.rowId))
		orgKind = "root";
	return justep.Org.OrgKinds.getImageURL(orgKind);
};
mainActivity.dOrgTreeIndexChanged = function(event) {
	if (mainActivity._currentTab == "tabAuthorize")
		mainActivity.refreshAuthorizeData();
	else
		mainActivity.refreshAuthorizePermissionData();
	mainActivity.setComponentsStatus();
};
mainActivity.dOrgTreeAfterRefresh = function(event) {
	mainActivity.dOrgTreeIndexChanged();
};
mainActivity.setComponentsStatus = function() {
	var orgIDValid = mainActivity.checkOrgIDValid();
	justep.xbl("btnInsertAuthorize").setDisabled(!orgIDValid);
	justep.xbl("btnDeleteAuthorize").setDisabled(!orgIDValid);
};
mainActivity.checkOrgIDValid = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	return (!!orgID && !justep.OpmUtils.isTreeRoot(orgID));
};
mainActivity.refreshAuthorizeData = function() {
	var dAuthorize = justep.xbl("dAuthorize");
	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	var orgFID = dOrgTree.getValue("sFID", orgID);
	var inherited = document.getElementById("cbShowInheritedAuthorize").checked;
	if (inherited)
		dAuthorize.setFilter("orgFilter", justep.OpmUtils.createParentPathFilter("sOrgFID", orgFID));
	else
		dAuthorize.setFilter("orgFilter", "sOrgFID = '" + orgFID + "'");
		
	var searchText = $("#inputSearchAuthorize").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchAuthorize").val("");
		searchText = "";
	}
	if (searchText) {
		dAuthorize.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPRole.sName", searchText));
	} else
		dAuthorize.setFilter("searchFilter", "");
	dAuthorize.refreshData();
};
mainActivity.cbShowInheritedAuthorizeClick = function(event) {
	mainActivity.imageSearchAuthorizeClick();
};
mainActivity.inputSearchAuthorizeKeydown = function(event) {
	if (event.keyCode == 13)
		mainActivity.imageSearchAuthorizeClick();
};
mainActivity.imageSearchAuthorizeClick = function(event) {
	mainActivity.refreshAuthorizeData();
};
mainActivity.refreshAuthorizePermissionData = function() {
	var dAuthorizePermission = justep.xbl("dAuthorizePermission");
	var searchText = $("#inputSearchPermission").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchPermission").val("");
		searchText = "";
	}
	if (!!searchText) {
		dAuthorizePermission.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPPermission.sActivityFName", searchText));
	} else
		dAuthorizePermission.setFilter("searchFilter", "");
	dAuthorizePermission.refreshData();
};
mainActivity.dAuthorizePermissionRefreshCreateParam = function(event) {
	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	var orgFID = dOrgTree.getValue("sFID", orgID);
	var inheirted = document.getElementById("cbShowInheritedPermission").checked;
	if (!orgFID) {
		event.param.setString("orgFID", "");
		event.param.setBoolean("includeInherited", false);
	} else {
		event.param.setString("orgFID", orgFID);
		event.param.setBoolean("includeInherited", inheirted);
	}
};
mainActivity.imageSearchPermissionClick = function(event) {
	mainActivity.refreshAuthorizePermissionData();
};
mainActivity.inputSearchPermissionKeydown = function(event) {
	if (event.keyCode == 13)
		mainActivity.imageSearchPermissionClick();
};
mainActivity.cbShowInheritedPermissionClick = function(event) {
	mainActivity.imageSearchPermissionClick();
};
mainActivity.btnInsertAuthorizeClick = function(event) {
	if (mainActivity.checkOrgIDValid());
		justep.xbl("wdSelectRoles").open({});
};
mainActivity.wdSelectRolesReceive = function(event) {
	var orgIDs = new justep.Request.ListParam();
	var roleIDs = new justep.Request.ListParam();

	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		var roleID = event.data.getRowId(i);
		orgIDs.add(new justep.Request.SimpleParam(orgID, justep.XML.Namespaces.XMLSCHEMA_STRING));
		roleIDs.add(new justep.Request.SimpleParam(roleID, justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	var params = new justep.Request.ActionParam();
	params.setList("orgIDs", orgIDs);
	params.setList("roleIDs", roleIDs);
	justep.Request.sendBizRequest2({
		action: "appendAuthorizesAction",
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				mainActivity.refreshAuthorizeData();
				justep.OpmUtils.showSuccess("分配角色成功。");
			}
		}
	});
};
mainActivity.gridAuthorizePermissionSPermissionKindRender = function(event) {
	return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/funPermission.gif", true) + "\"/>";
};
mainActivity.gridAuthorizeRoleRoleKindRender = function(event) {
	if (event.value == "fun")
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/funRole.gif", true) + "\" alt=\"功能角色\"/>";
	else
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/dataRole.gif", true) + "\" alt=\"数据角色\"/>";
};
mainActivity._gridAuthorizeValueChanging = false;
mainActivity.gridAuthorizeRowValueChanged = function(event) {
	if (mainActivity._gridAuthorizeValueChanging) return;
	
	var orgID = justep.xbl("dOrgTree").getCurrentRowId();
	var authorizeOrgID = event.grid.getValueById(event.rowId, "sOrgID");
	if (authorizeOrgID != orgID) {
		mainActivity._gridAuthorizeValueChanging = true;
		try {
			event.grid.setValueById(event.rowId, "calcCheckBox", 0);
		} finally {
			mainActivity._gridAuthorizeValueChanging = false;
		}
	}
};
mainActivity.btnDeleteAuthorizeClick = function(event) {
	var gridAuthorize = justep.xbl("gridAuthorize").grid;
	var checkColIndex = gridAuthorize.getColIndexById("calcCheckBox");
	var checkedIDs = gridAuthorize.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选要删除的角色！");
		return;
	} 
	
	justep.OpmUtils.showConfirm("确实要删除当前勾选的角色吗？", function(e) {
		var checkedIDsArray = checkedIDs.split(",");
		var params = new justep.Request.ActionParam();
		var authorizes = new justep.Request.MapParam();
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var version = gridAuthorize.getValueById(id, "version");
			authorizes.put(id, new justep.Request.SimpleParam(version, justep.XML.Namespaces.XMLSCHEMA_INTEGER));
		}
		params.setMap("authorizes", authorizes);
		
		justep.Request.sendBizRequest2({
			action:	"deleteAuthorizesAction", 
			parameters: params, 
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					mainActivity.refreshAuthorizeData();
					justep.OpmUtils.showSuccess("删除角色成功。");
				}
			}
		});
	});
	
};
mainActivity.tabAuthorizeSelect = function(event) {
	mainActivity._currentTab = "tabAuthorize";
	mainActivity.refreshAuthorizeData();
};
mainActivity.tabPermissionSelect = function(event) {
	mainActivity._currentTab = "tabPermission";
	mainActivity.refreshAuthorizePermissionData();
};
mainActivity.model1Load = function(event) {
	var dOrgTree = justep.xbl("dOrgTree");
	if (!!dOrgTree.getCurrentRowId())
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
