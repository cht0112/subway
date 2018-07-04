var searchOrg = {};

searchOrg._inputParams = {};
searchOrg._defaultInputParams = {
	manageTypeCodes : "",
	fixedFilter : "",
	orgKinds : "",
	onlyMasterPsm : false,
	forceRefresh : false,
	searchText : ""
};

searchOrg.receiverReceive = function(event) {
	for (o in searchOrg._defaultInputParams)
		searchOrg._inputParams[o] = searchOrg._defaultInputParams[o];

	if (event.data.manageTypeCodes)
		searchOrg._inputParams.manageTypeCodes = event.data.manageTypeCodes;
	if (event.data.fixedFilter)
		searchOrg._inputParams.fixedFilter = event.data.fixedFilter;
	if (event.data.orgKinds)
		searchOrg._inputParams.orgKinds = event.data.orgKinds;
	if (event.data.onlyMasterPsm)
		searchOrg._inputParams.onlyMasterPsm = event.data.onlyMasterPsm;
	if (event.data.forceRefresh)
		searchOrg._inputParams.forceRefresh = event.data.forceRefresh;
	if (event.data.searchText)
		searchOrg._inputParams.searchText = event.data.searchText;

	searchOrg.initAll();

	try {
		$("#inputSearch").focus();
	} catch (e) {
	}
};

searchOrg.initAll = function() {
	$("#inputSearch").val(searchOrg._inputParams.searchText);
	searchOrg.initOrgListFilter();
	searchOrg.searchData();
};

searchOrg.getOrgKindsFilter = function(orgKinds) {
	if (!orgKinds) return "";
	var orgKindsArray = orgKinds.split(",");
	return " SA_OPOrg.sOrgKindID in ('" + orgKindsArray.join("','") + "')";
};

searchOrg.initOrgListFilter = function() {
	var dOrgList = justep.xbl("dOrgList");
	dOrgList.setFilter("fixedFilter", searchOrg._inputParams.fixedFilter);
	dOrgList.setFilter("orgKindsFilter", searchOrg.getOrgKindsFilter(searchOrg._inputParams.orgKinds));
	dOrgList.setFilter("validStateFilter", "SA_OPOrg.sValidState = 1");
	if (searchOrg._inputParams.onlyMasterPsm)
		dOrgList.setFilter("onlyMasterPsmFilter", "(SA_OPOrg.sOrgKindID <> 'psm' or SA_OPOrg.sParent = SA_OPPerson.sMainOrgID)");
};

searchOrg.btnOKClick = function(event) {
	var dOrgList = justep.xbl("dOrgList");
	var rowID = dOrgList.getRowId();
	if (!rowID)	return;
	
	var r = new SimpleStore(null, dOrgList.getColumnIds());
	r.insert(rowID, 0, 0, dOrgList.getRowData(rowID));
	justep.windowDialogReceiver.windowEnsure(r, true);
};

searchOrg.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

searchOrg.gridListRowDblClick = function(event) {
	searchOrg.btnOKClick();
};

searchOrg.gridListCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

searchOrg.gridListSOrgKindIDRender = function(event) {
	return "<img src='"	+ justep.Request.convertURL(justep.Org.OrgKinds.getImageURL(event.value)) + "'/>";
};

searchOrg.searchData = function() {
	var dOrgList = justep.xbl("dOrgList");
	var dOrgTree = justep.xbl("dOrgTree");

	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}

	var searchFilter = justep.OpmUtils.getMultiLikeFilter("SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPOrg.sFName", searchText);
	dOrgList.setFilter("searchFilter", searchFilter);
	dOrgList.refreshData();
};

searchOrg.imageSearchClick = function(event) {
	searchOrg.searchData();
};

searchOrg.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		searchOrg.searchData();
};
searchOrg.dOrgListRefreshCreateParam = function(event) {
	if (!!searchOrg._inputParams.manageTypeCodes) {
		event.param.setString("manageCodes", searchOrg._inputParams.manageTypeCodes);
		event.param.setString("manageFilterMode", "like");
	} else {
		event.param.deleteParam("manageCodes");
		event.param.deleteParam("manageFilterMode");
	}
};
