var mainActivity = {};

mainActivity.btnInsertRoleClick = function(event) {
	xforms("newRolesMenu").show(event.srcElement || event.target);
};

mainActivity.newRolesMenuClick = function(event) {
	var menuitemId = event.getData().itemId;
	if (menuitemId == "newFunRole") {
		var dialog = justep.xbl("wdRoleDetail");
		dialog.open({
			"openMode" : "new",
			"id" : "",
			"roleKind" : "fun"
		});
	} else if (menuitemId == "newDataRole") {
		var dialog = justep.xbl("wdRoleDetail");
		dialog.open({
			"openMode" : "new",
			"id" : "",
			"roleKind" : "data"
		});
	}
};

mainActivity.btnEditRoleClick = function(event) {
	var dRole = justep.xbl("dRole");
	var dialog = justep.xbl("wdRoleDetail");
	dialog.open({
		"openMode" : "edit",
		"id" : dRole.getCurrentRowId()
	});
};

mainActivity.wdRoleDetailReceive = function(event) {
	var dRole = justep.xbl("dRole");
	dRole.refreshData();
	dRole.setIndex(dRole.getIndex(event.data.id));
};

mainActivity.gridRoleRowDblClick = function(event) {
	mainActivity.btnEditRoleClick(event);
};

mainActivity.getRoleCheckedParams = function() {
	var gridRole = justep.xbl("gridRole").grid;
	var checkColIndex = gridRole.getColIndexById("calcCheckBox");
	var checkedIDs = gridRole.getCheckedRows(checkColIndex);
	if (!checkedIDs)
		return null;

	var checkedIDsArray = checkedIDs.split(",");
	var params = new justep.Request.ActionParam();
	var roles = new justep.Request.MapParam();
	for ( var i = 0; i < checkedIDsArray.length; i++) {
		var id = checkedIDsArray[i];
		var version = gridRole.getValueById(id, "version");
		roles.put(id, new justep.Request.SimpleParam(version,
				justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	}
	params.setMap("roles", roles);
	return params;
};

mainActivity.btnDeleteRoleClick = function(event) {
	var params = mainActivity.getRoleCheckedParams();
	if (params == null) {
		justep.OpmUtils.showWarning("请勾选要删除的角色。");
		return;
	}
	justep.OpmUtils.showConfirm("确实要删除当前勾选的角色吗？<br/><br/>角色删除后不可恢复！",
		function(e) {
			justep.Request.sendBizRequest2({
				dataType: "json",
				action: "deleteRolesAction",
				parameters:	params, 
				callback: function(callbackData) {
					callbackData.ignoreError = false;
					if (callbackData.state) {
						mainActivity.refreshRoleData();
						justep.OpmUtils.showSuccess("删除角色成功。");
					}
				}
			});
		}
	);
};

mainActivity.btnEnableRolesClick = function(event) {
	var params = mainActivity.getRoleCheckedParams();
	if (params == null) {
		justep.OpmUtils.showWarning("请勾选要启用的角色。");
		return;
	}
	justep.OpmUtils.showConfirm("确实要启用当前勾选的角色吗？",
		function(e) {
			justep.Request.sendBizRequest2({
				dataType: "json", 
				action: "enableRolesAction",
				parameters: params, 
				callback: function(callbackData) {
					callbackData.ignoreError = false;
					if (callbackData.state) {
						mainActivity.refreshRoleData();
						justep.OpmUtils.showSuccess("启用角色成功。");
					} 
				}
			});
		}
	);
};

mainActivity.btnDisableRolesClick = function(event) {
	var params = mainActivity.getRoleCheckedParams();
	if (params == null) {
		justep.OpmUtils.showWarning("请勾选要禁用的角色。");
		return;
	}
	justep.OpmUtils.showConfirm("确实要禁用当前勾选的角色吗？",
		function(e) {
			justep.Request.sendBizRequest2({
				dataType: "json", 
				action: "disableRolesAction",
				parameters: params, 
				callback: function(callbackData) {
					callbackData.ignoreError = false;
					if (callbackData.state) {
						mainActivity.refreshRoleData();
						justep.OpmUtils.showSuccess("禁用角色成功。");
					}
				}
			});
		}
	);
};

mainActivity.btnInsertPermissionClick = function(event) {
	var dRole = justep.xbl("dRole");
	var roleKind = dRole.getValue("sRoleKind");
	if (roleKind == "fun")
		xforms("newPermissionsMenu").menu.setItemEnabled("newFunPermission");
	else
		xforms("newPermissionsMenu").menu.setItemDisabled("newFunPermission");
	xforms("newPermissionsMenu").show(event.srcElement || event.target);
};

mainActivity.newPermissionsMenuClick = function(event) {
	var menuitemId = event.getData().itemId;
	if (justep.xbl("dRole").getCurrentRowId()) {
		if (menuitemId == "newFunPermission") {
			justep.xbl("wdSelectFunTree").open({});
		} else if (menuitemId == "newDataPermission") {
			justep.xbl("wdDataPermissionDetail").open({
				openMode : "new",
				roleID : justep.xbl("dRole").getCurrentRowId()
			});
		}
	}
};

mainActivity.deletePermissionClick = function(event) {
	var gridPermission = justep.xbl("gridPermission").grid;
	var checkColIndex = gridPermission.getColIndexById("calcCheckBox");
	var checkedIDs = gridPermission.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选要删除的权限！");
		return;
	}
	var checkedIDsArray = checkedIDs.split(",");
	var params = new justep.Request.ActionParam();
	var permissions = new justep.Request.MapParam();
	for ( var i = 0; i < checkedIDsArray.length; i++) {
		var id = checkedIDsArray[i];
		var version = gridPermission.getValueById(id, "version");
		permissions.put(id, new justep.Request.SimpleParam(version,	justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	}
	params.setMap("permissions", permissions);
	justep.OpmUtils.showConfirm("确实要删除当前勾选的权限吗？", function(e) {
		justep.Request.sendBizRequest2({
			dataType: "json",
			action: "deletePermissionsAction",
			parameters:	params, 
			callback: function(callbackData) {
				callbackData.igonreError = false;
				if (callbackData.state) {
					mainActivity.refreshPermissionData();
					justep.OpmUtils.showSuccess("删除权限成功。");
				}
			}
		});
	});
};

mainActivity.gridPermissionSPermissionKindRender = function(event) {
	var rt = event.cell.getValueByColId("sValidState") == "1" ? "" : "-disable";
	if (event.value == "0")
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/funPermission" + rt + ".gif", true) + "\"/>";
	else
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/dataPermission" + rt + ".gif", true) + "\"/>";
};

mainActivity.gridPermission_actionsLabelButtonClick = function(event){
	mainActivity.setPolicy(event.rowId);
};

mainActivity.gridRoleSRoleKindRender = function(event) {
	var rt = (event.cell.getValueByColId("sValidState") == "1") ? "" : "-disable";
	if (event.value == "fun")
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/funRole" + rt + ".gif", true) + "\" alt=\"功能角色\"/>";
	else
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/dataRole" + rt + ".gif", true) + "\" alt=\"数据角色\"/>";
};

mainActivity.refreshRoleData = function() {
	var dRole = justep.xbl("dRole");
	var showDisabledRole = document.getElementById("cbShowDisabledRole").checked;
	if (showDisabledRole)
		dRole.setFilter("disableFilter", "");
	else
		dRole.setFilter("disableFilter", "SA_OPRole.sValidState = 1");
	var searchText = $("#inputSearchRole").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchRole").val("");
		searchText = "";
	}
	if (!!searchText)
		dRole.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPRole.sName,SA_OPRole.sCode,SA_OPRole.sCatalog", searchText));
	else
		dRole.setFilter("searchFilter", "");
	dRole.refreshData();
};

mainActivity.refreshPermissionData = function() {
	var dPermission = justep.xbl("dPermission");
	var searchText = $("#inputSearchPermission").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchPermission").val("");
		searchText = "";
	}
	if (!!searchText)
		dPermission.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPPermission.sActivityFName,SA_OPRole.sName", searchText));
	else
		dPermission.setFilter("searchFilter", "");
	dPermission.refreshData();
};

mainActivity.funPermissionRefreshCreateParam = function(event) {
	var dRole = justep.xbl("dRole");
	var roleID = dRole.getCurrentRowId();
	var includeInherited = document.getElementById("cbShowInheritedPermission").checked;
	if (!roleID) {
		event.param.setString("roleID", "");
		event.param.setBoolean("includeInherited", false);
	} else {
		event.param.setString("roleID", roleID);
		event.param.setBoolean("includeInherited", includeInherited);
	}
};

mainActivity.model1ModelConstructDone = function(event) {
	mainActivity.refreshRoleData();
};

mainActivity.dRoleIndexChanged = function(event) {
	xforms("newPermissionsMenu").hide();
	mainActivity.refreshPermissionData();
};

mainActivity.dRoleAfterRefresh = function(event) {
	mainActivity.dRoleIndexChanged(event);
};

mainActivity.dRoleAfterRefreshPage = function(event) {
	mainActivity.dRoleIndexChanged(event);
};

mainActivity.wdSelectFunTreeReceive = function(event) {
	var roleID = justep.xbl("dRole").getCurrentRowId();
	var processes = new justep.Request.ListParam();
	var activities = new justep.Request.ListParam();
	var activitiesFNames = new justep.Request.ListParam();
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		var process = event.data.getValueByName("process", i);
		var activity = event.data.getValueByName("activity", i);
		var activityFName = event.data.getValueByName("activityFName", i);
		processes.add(new justep.Request.SimpleParam(process, justep.XML.Namespaces.XMLSCHEMA_STRING));
		activities.add(new justep.Request.SimpleParam(activity,	justep.XML.Namespaces.XMLSCHEMA_STRING));
		activitiesFNames.add(new justep.Request.SimpleParam(activityFName, justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	var params = new justep.Request.ActionParam();
	params.setString("roleID", roleID);
	params.setList("processes", processes);
	params.setList("activities", activities);
	params.setList("activitiesFNames", activitiesFNames);
	
	justep.Request.sendBizRequest2({
		dataType: "json",
		action: "assignFunPermissionsAction",
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				mainActivity.refreshPermissionData();
				justep.OpmUtils.showSuccess("分配功能权限成功。");
			}
		}
	});
};

mainActivity.setPolicy = function(permissionID) {
	var dPermission = justep.xbl("dPermission");
	var kind = dPermission.getValue("sPermissionKind", permissionID);
	if (kind == "0")
		mainActivity.setActionsPolicy(permissionID);
	else if (kind == "1")
		mainActivity.setDataPermission(permissionID);
};

mainActivity.setActionsPolicy = function(permissionID) {
	var dPermission = justep.xbl("dPermission");

	var roleID = justep.xbl("dRole").getCurrentRowId();
	var permissionRoleID = dPermission.getValue("sPermissionRoleID", permissionID);
	if (roleID != permissionRoleID) {
		justep.OpmUtils.showWarning("不能设置继承权限的动作策略！");
		return;
	}

	var process = dPermission.getValue("sProcess", permissionID);
	var activity = dPermission.getValue("sActivity", permissionID);
	var selectedActions = dPermission.getValue("actionPolicyNames",	permissionID);
	justep.xbl("wdselectProtectedActions").open({
		"process" : process,
		"activity" : activity,
		"selectedActions" : selectedActions
	});
};

mainActivity.wdselectProtectedActionsReceive = function(event) {
	var actions = new justep.Request.MapParam;
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		var actionName = event.data.getValueByName("name", i);
		var actionLabel = event.data.getValueByName("label", i);
		actions.put(actionName, new justep.Request.SimpleParam(actionLabel,	justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	var dPermission = justep.xbl("dPermission");
	var params = new justep.Request.ActionParam();
	params.setString("permissionID", dPermission.getCurrentRowId());
	params.setInteger("permissionVersion", dPermission.getValue("version"));
	params.setMap("actions", actions);
	justep.Request.sendBizRequest2({
		dataType: "json",
		action: "setActionsPolicyAction",
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				mainActivity.refreshPermissionData();
				justep.OpmUtils.showSuccess("设置动作策略成功。");
			} 
		}
	});
};

mainActivity.setDataPermission = function(permissionID) {
	var dPermission = justep.xbl("dPermission");

	var roleID = justep.xbl("dRole").getCurrentRowId();
	var permissionRoleID = dPermission.getValue("sPermissionRoleID", permissionID);
	if (roleID != permissionRoleID) {
		justep.OpmUtils.showWarning("不能设置继承权限的数据策略！");
		return;
	}

	justep.xbl("wdDataPermissionDetail").open({
		openMode : "edit",
		id : permissionID
	});
};

mainActivity.wdDataPermissionDetailReceive = function(event){
	mainActivity.refreshPermissionData();
	justep.OpmUtils.showSuccess("设置数据策略成功。");
};

mainActivity._gridPermissionValueChanging = false;
mainActivity.gridPermissionRowValueChanged = function(event) {
	if (mainActivity._gridPermissionValueChanging) return;
	
	var roleID = justep.xbl("dRole").getCurrentRowId();
	var permissionRoleID = event.grid.getValueById(event.rowId,	"sPermissionRoleID");
	if (permissionRoleID != roleID) {
		mainActivity._gridPermissionValueChanging = true;
		try {
			event.grid.setValueById(event.rowId, "calcCheckBox", 0);
		} finally {
			mainActivity._gridPermissionValueChanging = false;
		}
	}
};

mainActivity.cbShowDisabledRoleClick = function(event) {
	mainActivity.refreshRoleData();
};

mainActivity.cbShowInheritedPermissionClick = function(event) {
	mainActivity.refreshPermissionData();
};

mainActivity.inputSearchRoleKeydown = function(event) {
	if (event.keyCode == 13)
		mainActivity.refreshRoleData();
};

mainActivity.imageSearchRoleClick = function(event) {
	mainActivity.refreshRoleData();
};

mainActivity.inputSearchPermissionKeydown = function(event) {
	if (event.keyCode == 13)
		mainActivity.refreshPermissionData();
};

mainActivity.imageSearchPermissionClick = function(event) {
	mainActivity.refreshPermissionData();
};

