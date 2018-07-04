var assignRoles = {};

assignRoles.inputData = {
	"orgID": null,
	"orgFullID": null,
	"managed": false
};

assignRoles.windowReceiverReceive = function(event){
	assignRoles.inputData = event.data;
		
	$("#inputSearchAuthorize").val("");
	$("#cbShowInheritedAuthorize").attr("checked", "checked");
	assignRoles.refreshAuthorizeData();
};

assignRoles.refreshAuthorizeData = function() {
	var orgFID = assignRoles.inputData.orgFullID;

	var dAuthorize = justep.xbl("dAuthorize");
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

assignRoles.cbShowInheritedAuthorizeClick = function(event){
	assignRoles.refreshAuthorizeData();
};


assignRoles.imageSearchAuthorizeClick = function(event){
	assignRoles.refreshAuthorizeData();
};

assignRoles.inputSearchAuthorizeKeydown = function(event){
	if (event.keyCode == 13)
		assignRoles.refreshAuthorizeData();
};

assignRoles.btnInsertAuthorizeClick = function(event){
	justep.xbl("wdSelectRoles").open({
		"managed": assignRoles.inputData.managed
	});
};

assignRoles.wdSelectRolesReceive = function(event){
	var orgID = assignRoles.inputData.orgID;

	var orgIDs = new justep.Request.ListParam();
	var roleIDs = new justep.Request.ListParam();

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
				assignRoles.refreshAuthorizeData();
				justep.OpmUtils.showSuccess("分配角色成功。");
			}
		}
	});
};

assignRoles.btnDeleteAuthorizeClick = function(event){
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
					assignRoles.refreshAuthorizeData();
					justep.OpmUtils.showSuccess("删除角色成功。");
				}
			}
		});
	});
};

assignRoles._gridAuthorizeValueChanging = false;
assignRoles.gridAuthorizeRowValueChanged = function(event){
	if (assignRoles._gridAuthorizeValueChanging) return;
	
	var orgID = assignRoles.inputData.orgID;
	var authorizeOrgID = event.grid.getValueById(event.rowId, "sOrgID");
	if (authorizeOrgID != orgID) {
		assignRoles._gridAuthorizeValueChanging = true;
		try {
			event.grid.setValueById(event.rowId, "calcCheckBox", 0);
		} finally {
			assignRoles._gridAuthorizeValueChanging = false;
		}
	}
	
};

assignRoles.gridAuthorize_roleRoleKindRender = function(event){
	if (event.value == "fun")
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/funRole.gif", true) + "\" alt=\"功能角色\"/>";
	else
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/dataRole.gif", true) + "\" alt=\"数据角色\"/>";
};
