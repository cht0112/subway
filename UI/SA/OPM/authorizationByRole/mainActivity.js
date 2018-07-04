var mainActivity = {};
mainActivity._currentTab = "tabAssign";

mainActivity.gridRole_sRoleKindRender = function(event){
	if (event.value == "fun")
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/funRole.gif", true) + "\" alt=\"功能角色\"/>";
	else
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/dataRole.gif", true) + "\" alt=\"数据角色\"/>";
};

mainActivity.gridAuthorize_orgKindIDRender = function(event){
	var orgKind = event.value;
	return "<img src='" + justep.Request.convertURL(justep.Org.OrgKinds.getImageURL(orgKind)) + "' alt='" + justep.Org.OrgKinds.getLabel(orgKind) + "'/>";
	
};

mainActivity.refreshRole = function() {
	var dRole = justep.xbl("dRole");

	var searchText = $("#inputSearchRole").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchRole").val("");
		searchText = "";
	}
	if (searchText) {
		dRole.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPRole.sName,SA_OPRole.sCode,SA_OPRole.sCatalog", searchText));
	} else
		dRole.setFilter("searchFilter", "");
	
	dRole.refreshData();	
};

mainActivity.dAuthorizeRefreshCreateParam = function(event){
	event.param.setString("roleID", justep.xbl("dRole").getID());
	event.param.setBoolean("includeRoleChildren", $("#cbShowRoleChildren").is(":checked"));
};

mainActivity.refreshAuthorize = function() {
	var dAuthorize = justep.xbl("dAuthorize");

	var searchText = $("#inputSearchAuthorize").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchAuthorize").val("");
		searchText = "";
	}
	if (searchText) {
		dAuthorize.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPOrg.sFName,SA_OPOrg.sFCode", searchText));
	} else
		dAuthorize.setFilter("searchFilter", "");
		
	dAuthorize.refreshData();
};

mainActivity.dAuthorizeOrgRefreshCreateParam = function(event){
	event.param.setString("roleID", justep.xbl("dRole").getID());
	event.param.setBoolean("includeRoleChildren", $("#cbShowRoleChildren1").is(":checked"));
};

mainActivity.refreshAuthorizeOrg = function() {
	var dAuthorizeOrg = justep.xbl("dAuthorizeOrg");

	var searchText = $("#inputSearchOrg").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchOrg").val("");
		searchText = "";
	}
	if (searchText) {
		dAuthorizeOrg.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPOrg.sFName,SA_OPOrg.sFCode", searchText));
	} else
		dAuthorizeOrg.setFilter("searchFilter", "");
		
	dAuthorizeOrg.refreshData();
};

mainActivity.model1ModelConstructDone = function(event){
	mainActivity.refreshRole();
};

mainActivity.tabAssignSelect = function(event){
	mainActivity._currentTab = "tabAssign";
	mainActivity.refreshAuthorize();
};

mainActivity.tabQuerySelect = function(event){
	mainActivity._currentTab = "tabQuery";
	mainActivity.refreshAuthorizeOrg();
};

mainActivity.imageSearchRoleClick = function(event){
	mainActivity.refreshRole();
};

mainActivity.inputSearchRoleKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.imageSearchRoleClick();	
};

mainActivity.dRoleIndexChanged = function(event){
	if (mainActivity._currentTab == "tabAssign") {
		mainActivity.refreshAuthorize();
	} else {
		mainActivity.refreshAuthorizeOrg();
	}
};

mainActivity.dRoleAfterRefresh = function(event){
	mainActivity.dRoleIndexChanged();
};

mainActivity.dRoleAfterRefreshPage = function(event){
	mainActivity.dRoleIndexChanged();
};

mainActivity.cbShowRoleChildrenClick = function(event){
	mainActivity.refreshAuthorize();
};

mainActivity.inputSearchAuthorizeKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.imageSearchAuthorizeClick();	
};

mainActivity.imageSearchAuthorizeClick = function(event){
	mainActivity.refreshAuthorize();
};

mainActivity.btnInsertAuthorizeClick = function(event){
	if (justep.xbl("dRole").getCount() > 0) {
		justep.xbl("wdSelectOrgs").open();
	}
};

mainActivity.wdSelectOrgsReceive = function(event){
	if (event.data.getRowsNum == 0)
		return;

	var dRole = justep.xbl("dRole");
	var roleID = dRole.getCurrentRowId();

	var	orgIDs = new justep.Request.ListParam();
	var	roleIDs = new justep.Request.ListParam();
	for ( var i = 0; i < event.data.length; i++) {
		var orgID = event.data[i]["rowid"];
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
				mainActivity.refreshAuthorize();
				justep.OpmUtils.showSuccess("分配授权组织成功。");
			} 
		}
	});
};

mainActivity.btnDeleteAuthorizeClick = function(event){
	var gridAuthorize = justep.xbl("gridAuthorize").grid;
	var checkColIndex = gridAuthorize.getColIndexById("calcCheck");
	var checkedIDs = gridAuthorize.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选要删除的组织！");
		return;
	} 

	justep.OpmUtils.showConfirm("确实要删除当前勾选的组织吗？", function(e) {
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
					mainActivity.refreshAuthorize();
					justep.OpmUtils.showSuccess("删除授权组织成功。");
				} 
			}
		});
	});
};


mainActivity._gridAuthorizeValueChanging = false;
mainActivity.gridAuthorizeRowValueChanged = function(event) {
	if (mainActivity._gridAuthorizeValueChanging) return;
	
	var roleID = justep.xbl("dRole").getID();
	var authorizeRoleID = event.grid.getValueById(event.rowId, "sAuthorizeRoleID");
	if (roleID != authorizeRoleID) {
		mainActivity._gridAuthorizeValueChanging = true;
		try {
			event.grid.setValueById(event.rowId, "calcCheck", 0);
		} finally {
			mainActivity._gridAuthorizeValueChanging = false;
		}
	}
};

mainActivity.cbShowRoleChildren1Click = function(event){
	mainActivity.refreshAuthorizeOrg();
};

mainActivity.imageSearchOrgClick = function(event){
	mainActivity.refreshAuthorizeOrg();
};

mainActivity.inputSearchOrgKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.imageSearchOrgClick();	
};
