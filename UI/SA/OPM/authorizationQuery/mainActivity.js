var mainActivity = {};

mainActivity.gridOrgTreeShowNodeImg = function(event){
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	var validState = event.grid.getValueById(event.rowId, "sValidState");
	return justep.Org.OrgKinds.getImageURL(orgKind, validState == 0);
};

mainActivity.inputSearchOrgKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.openSearchOrg();
};

mainActivity.imageSearchOrgClick = function(event){
	mainActivity.openSearchOrg();
};

mainActivity.openSearchOrg = function() {
	var searchText = $("#inputSearchOrg").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchOrg").val("");
		searchText = "";
	}
	justep.xbl("wdSearchOrg").open({
		orgKinds : justep.Org.OrgKinds.getIDs().join(","),
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

mainActivity.dPermisionByOrgRefreshCreateParam = function(event){
	var dOrgTree = justep.xbl("dOrgTree");
	var orgID = dOrgTree.getCurrentRowId();
	var orgFID = dOrgTree.getValue("sFID", orgID);
	event.param.setString("orgFID", orgFID);
	event.param.setBoolean("includeInherited", true);
};

mainActivity.refreshAuthorizePermissionData = function() {
	var dPermisionByOrg = justep.xbl("dPermisionByOrg");
	var searchText = $("#inputSearchPermissionByOrg").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchPermissionByOrg").val("");
		searchText = "";
	}
	if (!!searchText) {
		dPermisionByOrg.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPPermission.sActivityFName,SA_OPPermission.sProcess,SA_OPPermission.sActivity,SA_OPRole.sName", searchText));
	} else
		dPermisionByOrg.setFilter("searchFilter", "");
	dPermisionByOrg.refreshData();
};

mainActivity.dOrgTreeIndexChanged = function(event){
	mainActivity.refreshAuthorizePermissionData();
};

mainActivity.inputSearchPermissionByOrgKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.imageSearchPermissionByOrgClick();
};

mainActivity.imageSearchPermissionByOrgClick = function(event){
	mainActivity.refreshAuthorizePermissionData();
};

mainActivity._funTreeDataLoaded = false;
mainActivity.loadFunTreeData = function() {
	if (!mainActivity._funTreeDataLoaded) {
		var r = justep.Request.sendHttpRequest("/SA/OPM/dialogs/selectFunTree/getFunctionTree.j?type=tree");
		if (justep.Request.isSuccess(r)) {
			justep.xbl("dFunTree").loadXML(r.responseXML);
			mainActivity._funTreeDataLoaded = true;
		} else {
			throw new Error("读取功能菜单失败！");
		}
	}
};

mainActivity._funListDataLoaded = false;
mainActivity.loadFunListData = function() {
	if (!mainActivity._funListDataLoaded) {
		var r = justep.Request.sendHttpRequest("/SA/OPM/dialogs/selectFunTree/getFunctionTree.j?type=list");
		if (justep.Request.isSuccess(r)) {
			justep.xbl("dFunList").loadXML(r.responseXML);
			mainActivity._funListDataLoaded = true;
		} else {
			throw new Error("读取功能菜单失败！");
		}
	}
};

mainActivity.refreshFunData = function() {
	var searchText = $("#inputSearchFun").val();
	if (searchText) {
		$("#gridFunTree").hide();
		$("#gridFunList").show();
		mainActivity.loadFunListData();
		var listGrid = justep.xbl("gridFunList").grid;
		listGrid.filterBy(listGrid.getColIndexById("activityFName"), searchText);
	} else {
		$("#gridFunTree").show();
		$("#gridFunList").hide();
		mainActivity.loadFunTreeData();
	}
	mainActivity.refreshOrgByPermissionData();
};

mainActivity.tabByPermissionSelect = function(event){
	mainActivity.refreshFunData();
};

mainActivity.imageSearchFunClick = function(event){
	mainActivity.refreshFunData();
};

mainActivity.inputSearchFunKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.imageSearchFunClick();
};

mainActivity.gridFunTreeShowNodeImg = function(event){
	var isFolder = event.grid.getValueById(event.rowId, "isFolder");
	if (isFolder == "1") {
		return "/UI/SA/OPM/images/folder.gif";
	} else {
		return "/UI/SA/OPM/images/funPermission.gif";
	}
};

mainActivity.isFunTree = function() {
	return $("#gridFunTree").is(":visible");
};

mainActivity.dFunListIndexChanged = function(event){
	mainActivity.refreshOrgByPermissionData();
};

mainActivity.dFunTreeIndexChanged = function(event){
	mainActivity.refreshOrgByPermissionData();
};

mainActivity.dOrgByPermissionRefreshCreateParam = function(event){
	var dFun;
	if (mainActivity.isFunTree()) {
		dFun = justep.xbl("dFunTree");
	} else {
		dFun = justep.xbl("dFunList");
	}
	event.param.setString("process", dFun.getValue("process"));
	event.param.setString("activity", dFun.getValue("activity"));
};

mainActivity.refreshOrgByPermissionData = function() {
	var dOrgByPermission = justep.xbl("dOrgByPermission");
	var searchText = $("#inputSearchOrgByPermission").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearchOrgByPermission").val("");
		searchText = "";
	}
	if (!!searchText) {
		dOrgByPermission.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPOrg.sFName,SA_OPOrg.sFCode,SA_OPRole.sName", searchText));
	} else
		dOrgByPermission.setFilter("searchFilter", "");
	dOrgByPermission.refreshData();
};

mainActivity.inputSearchOrgByPermissionKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.imageSearchOrgByPermissionClick();
};

mainActivity.imageSearchOrgByPermissionClick = function(event){
	mainActivity.refreshOrgByPermissionData();
};

mainActivity.model1Load = function(event){
	var dOrgTree = justep.xbl("dOrgTree");
	if (!!dOrgTree.getCurrentRowId())
		dOrgTree.expandRow(dOrgTree.getCurrentRowId());
};

mainActivity.gridOrgByPermission_orgKindIDRender = function(event){
	var orgKind = event.value;
	return "<img src='" + justep.Request.convertURL(justep.Org.OrgKinds.getImageURL(orgKind)) + "' alt='" + justep.Org.OrgKinds.getLabel(orgKind) + "'/>";
};
