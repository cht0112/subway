var selectSingleOrg = {};

selectSingleOrg._currentData = null;

selectSingleOrg._initialized = false;

selectSingleOrg._inputParams = {};
selectSingleOrg._defaultInputParams = {
		rootFilter : "SA_OPOrg.sParent is null",
		manageTypeCodes : "",
		fixedFilter : "",
		displayableOrgKinds : "ogn,dpt,pos,psm",
		selectableOrgKinds : "ogn,dpt,pos,psm",
		onlyMasterPsm : false,
		displayVirtualRoot : false,
		forceRefresh : false
	};

selectSingleOrg.receiverReceive = function(event) {
	for (o in selectSingleOrg._defaultInputParams)
		selectSingleOrg._inputParams[o] = selectSingleOrg._defaultInputParams[o];
	
	if (event.data.rootFilter)
		selectSingleOrg._inputParams.rootFilter = event.data.rootFilter;
	if (event.data.manageTypeCodes)
		selectSingleOrg._inputParams.manageTypeCodes = event.data.manageTypeCodes;
	if (event.data.fixedFilter)
		selectSingleOrg._inputParams.fixedFilter = event.data.fixedFilter;
	if (event.data.displayableOrgKinds)
		selectSingleOrg._inputParams.displayableOrgKinds = event.data.displayableOrgKinds;
	if (event.data.selectableOrgKinds)
		selectSingleOrg._inputParams.selectableOrgKinds = event.data.selectableOrgKinds;
	if (event.data.onlyMasterPsm)
		selectSingleOrg._inputParams.onlyMasterPsm = event.data.onlyMasterPsm;
	if (event.data.displayVirtualRoot)
		selectSingleOrg._inputParams.displayVirtualRoot = event.data.displayVirtualRoot;
	if (event.data.forceRefresh)
		selectSingleOrg._inputParams.forceRefresh = event.data.forceRefresh;

	if (!selectSingleOrg._initialized
			|| selectSingleOrg._inputParams.forceRefresh)
		selectSingleOrg.initAll();

	$("#inputSearch").focus();
};

selectSingleOrg.initAll = function() {
	$("#inputSearch").val("");

	var dOrgTree = justep.xbl("dOrgTree");
	selectSingleOrg.setCurrentData(dOrgTree);
	if (selectSingleOrg._inputParams.displayVirtualRoot)
		dOrgTree.defTreeOption.option.virtualRootLabel = "组织机构";
	selectSingleOrg.initOrgTreeFilter();
	dOrgTree.refreshData();
	selectSingleOrg.initOrgListFilter();

	if (dOrgTree.getCurrentRowId())
		dOrgTree.getStore().expand(dOrgTree.getCurrentRowId());

	selectSingleOrg._initialized = true;
};

selectSingleOrg.setCurrentData = function(data) {
	selectSingleOrg._currentData = data;
	var isListDisplay = (data == justep.xbl("dOrgList"));
	if (isListDisplay) {
		$("#divList").show();
		$("#divList").height("100%");
		$("#divNavigator").show();
		$("#divTree").hide();
		justep.xbl("gridList").onWindowResize();
	} else {
		$("#divList").hide();
		$("#divTree").show();
		$("#divNavigator").hide();
		$("#divTree").height("100%");
		justep.xbl("gridTree").onWindowResize();
	}
	/*
	document.getElementById("trList").style.display = isListDisplay ? ""
			: "none";
	document.getElementById("tdNavigator").style.display = isListDisplay ? ""
			: "none";
	document.getElementById("trTree").style.display = isListDisplay ? "none"
			: "";
	*/
};

selectSingleOrg.getOrgKindsFilter = function(orgKinds) {
	if (!orgKinds)
		return "";
	var orgKindsArray = orgKinds.split(",");
	return " SA_OPOrg.sOrgKindID in ('" + orgKindsArray.join("','") + "')";
};

selectSingleOrg.initOrgTreeFilter = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	dOrgTree.setTreeRootFilter(selectSingleOrg._inputParams.rootFilter);
	dOrgTree.setFilter("fixedFilter",
			selectSingleOrg._inputParams.fixedFilter);
	dOrgTree
			.setFilter(
					"diaplayableFilter",
					selectSingleOrg
							.getOrgKindsFilter(selectSingleOrg._inputParams.displayableOrgKinds));
	dOrgTree.setFilter("validStateFilter", "SA_OPOrg.sValidState = 1");
	if (selectSingleOrg._inputParams.onlyMasterPsm)
		dOrgTree
				.setFilter("onlyMasterPsmFilter",
						"(SA_OPOrg.sOrgKindID <> 'psm' or SA_OPOrg.sParent = SA_OPPerson.sMainOrgID)");
};

selectSingleOrg.initOrgListFilter = function() {
	var dOrgList = justep.xbl("dOrgList");
	dOrgList.setFilter("fixedFilter",
			selectSingleOrg._inputParams.fixedFilter);
	dOrgList
			.setFilter(
					"displayableFilter",
					selectSingleOrg
							.getOrgKindsFilter(selectSingleOrg._inputParams.displayableOrgKinds));
	dOrgList
			.setFilter(
					"selectableFilter",
					selectSingleOrg
							.getOrgKindsFilter(selectSingleOrg._inputParams.selectableOrgKinds));

	dOrgList.setFilter("validStateFilter", "SA_OPOrg.sValidState = 1");
	if (selectSingleOrg._inputParams.onlyMasterPsm)
		dOrgList
				.setFilter("onlyMasterPsmFilter",
						"(SA_OPOrg.sOrgKindID <> 'psm' or SA_OPOrg.sParent = SA_OPPerson.sMainOrgID)");
};

selectSingleOrg.checkSelectedOrgKind = function() {
	if (!selectSingleOrg._currentData)
		return false;
	var orgKind = selectSingleOrg._currentData.getValue("sOrgKindID");
	if (!orgKind
			&& justep.OpmUtils.isTreeRoot(selectSingleOrg._currentData
					.getCurrentRowId()))
		orgKind = "ogn";
	return (selectSingleOrg._inputParams.selectableOrgKinds
			.indexOf(orgKind) >= 0);
};

selectSingleOrg.btnOKClick = function(event) {
	if (selectSingleOrg.checkSelectedOrgKind()) {
		var rowID = selectSingleOrg._currentData.getRowId();
		var r = new SimpleStore(null, selectSingleOrg._currentData
				.getColumnIds());
		r.insert(rowID, 0, 0, selectSingleOrg._currentData
				.getRowData(rowID));
		justep.windowDialogReceiver.windowEnsure(r);
	}
};

selectSingleOrg.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

selectSingleOrg.gridTreeRowDblClick = function(event) {
	selectSingleOrg.btnOKClick();
};

selectSingleOrg.gridListRowDblClick = function(event) {
	selectSingleOrg.btnOKClick();
};
selectSingleOrg.doDataChanged = function() {
	document.getElementById("btnOK").disabled = !selectSingleOrg
			.checkSelectedOrgKind();
};

selectSingleOrg.dOrgListIndexChanged = function(event) {
	selectSingleOrg.doDataChanged();
};

selectSingleOrg.dOrgListAfterRefresh = function(event) {
	selectSingleOrg.doDataChanged();
};

selectSingleOrg.dOrgListAfterRefreshPage = function(event) {
	selectSingleOrg.doDataChanged();
};
selectSingleOrg.dOrgTreeIndexChanged = function(event) {
	selectSingleOrg.doDataChanged();
};

selectSingleOrg.dOrgTreeAfterRefresh = function(event) {
	selectSingleOrg.doDataChanged();
};

selectSingleOrg.gridListCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

selectSingleOrg.gridTreeCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

selectSingleOrg.gridListSOrgKindIDRender = function(event) {
	return "<img src='"
			+ justep.Request.convertURL(justep.Resource
					.getOrgImgURL(event.value), true) + "'/>";
};

selectSingleOrg.gridTreeShowNodeImg = function(event) {
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	if (!orgKind && justep.OpmUtils.isTreeRoot(event.rowId))
		orgKind = "root";
	return justep.Resource.getOrgImgURL(orgKind);
};

selectSingleOrg.dOrgTreeRefreshCreateParam = function(event) {
	if ((event.source.defTreeOption.loadTreeParent == justep.XData.IS_TREE_ROOT)
			&& selectSingleOrg._inputParams.manageTypeCodes)
		event.param.setString("manageCodes",
				selectSingleOrg._inputParams.manageTypeCodes);
	else
		event.param.deleteParam("manageCodes");
};

selectSingleOrg.searchData = function() {
	var dOrgList = justep.xbl("dOrgList");
	var dOrgTree = justep.xbl("dOrgTree");

	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}

	if (!searchText)
		selectSingleOrg.setCurrentData(dOrgTree);
	else
		selectSingleOrg.setCurrentData(dOrgList);
	if (selectSingleOrg._currentData == dOrgList) {
		var searchFilter = justep.OpmUtils.getMultiLikeFilter(
				"SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPOrg.sFName", searchText);
		if (searchFilter != dOrgList.getFilter("searchFilter")) {
			dOrgList.setFilter("searchFilter", searchFilter);
			dOrgList.refreshData();
		}
	}
	selectSingleOrg.doDataChanged();
};

selectSingleOrg.imageSearchClick = function(event) {
	selectSingleOrg.searchData();
};

selectSingleOrg.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		selectSingleOrg.searchData();
};
selectSingleOrg.dOrgListRefreshCreateParam = function(event){
	if (!!selectSingleOrg._inputParams.manageTypeCodes) {
		event.param.setString("manageCodes",
				selectSingleOrg._inputParams.manageTypeCodes);
		event.param.setString("manageFilterMode", "like");
	} 
	else {
		event.param.deleteParam("manageCodes");
		event.param.deleteParam("manageFilterMode");
	} 
};
