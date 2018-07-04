var selectMultiOrgs = {};

selectMultiOrgs._currentData = null;

selectMultiOrgs._initialized = false;

selectMultiOrgs._inputParams = {};
selectMultiOrgs._defaultInputParams = {
	rootFilter : "SA_OPOrg.sParent is null",
	manageTypeCodes : "",
	fixedFilter : "",
	displayableOrgKinds : "ogn,dpt,pos,psm",
	selectableOrgKinds : "ogn,dpt,pos,psm",
	onlyMasterPsm : false,
	displayVirtualRoot : false,
	forceRefresh : false,
	selectedOrgIDs : "",
	selectedOrgFIDs : "",
	selectedPersonIDs : ""
};

selectMultiOrgs.receiverReceive = function(event) {
	for (o in selectMultiOrgs._defaultInputParams) 
		selectMultiOrgs._inputParams[o] = selectMultiOrgs._defaultInputParams[o];
	
	if (event.data.rootFilter)
		selectMultiOrgs._inputParams.rootFilter = event.data.rootFilter;
	if (event.data.manageTypeCodes)
		selectMultiOrgs._inputParams.manageTypeCodes = event.data.manageTypeCodes;
	if (event.data.fixedFilter)
		selectMultiOrgs._inputParams.fixedFilter = event.data.fixedFilter;
	if (event.data.displayableOrgKinds)
		selectMultiOrgs._inputParams.displayableOrgKinds = event.data.displayableOrgKinds;
	if (event.data.selectableOrgKinds)
		selectMultiOrgs._inputParams.selectableOrgKinds = event.data.selectableOrgKinds;
	if (event.data.onlyMasterPsm)
		selectMultiOrgs._inputParams.onlyMasterPsm = event.data.onlyMasterPsm;
	if (event.data.displayVirtualRoot)
		selectMultiOrgs._inputParams.displayVirtualRoot = event.data.displayVirtualRoot;
	if (event.data.forceRefresh)
		selectMultiOrgs._inputParams.forceRefresh = event.data.forceRefresh;
	if (event.data.selectedOrgIDs)
		selectMultiOrgs._inputParams.selectedOrgIDs = event.data.selectedOrgIDs;
	if (event.data.selectedOrgFIDs)
		selectMultiOrgs._inputParams.selectedOrgFIDs = event.data.selectedOrgFIDs;
	if (event.data.selectedPersonIDs)
		selectMultiOrgs._inputParams.selectedPersonIDs = event.data.selectedPersonIDs;

	if (!selectMultiOrgs._initialized
			|| selectMultiOrgs._inputParams.forceRefresh)
		selectMultiOrgs.initAll();

	selectMultiOrgs.refreshSelectedData(
			selectMultiOrgs._inputParams.selectedOrgIDs,
			selectMultiOrgs._inputParams.selectedOrgFIDs,
			selectMultiOrgs._inputParams.selectedPersonIDs);

	$("#inputSearch").focus();
};

selectMultiOrgs.initAll = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	selectMultiOrgs.setCurrentData(justep.xbl("dOrgTree"));

	selectMultiOrgs.initOrgTreeFilter();
	dOrgTree.refreshData();
	selectMultiOrgs.initOrgListFilter();

	if (dOrgTree.getCurrentRowId())
		dOrgTree.getStore().expand(dOrgTree.getCurrentRowId());

	$("#inputSearch").val("");

	selectMultiOrgs._initialized = true;
};

selectMultiOrgs.initOrgTreeFilter = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	dOrgTree.setTreeRootFilter(selectMultiOrgs._inputParams.rootFilter);
	dOrgTree.setFilter("fixedFilter",
			selectMultiOrgs._inputParams.fixedFilter);
	dOrgTree
			.setFilter(
					"diaplayableFilter",
					selectMultiOrgs
							.getOrgKindsFilter(selectMultiOrgs._inputParams.displayableOrgKinds));
	dOrgTree.setFilter("validStateFilter", "SA_OPOrg.sValidState = 1");
	if (selectMultiOrgs._inputParams.onlyMasterPsm)
		dOrgTree
				.setFilter("onlyMasterPsmFilter",
						"(SA_OPOrg.sOrgKindID <> 'psm' or SA_OPOrg.sParent = SA_OPPerson.sMainOrgID)");
};

selectMultiOrgs.initOrgListFilter = function() {
	var dOrgList = justep.xbl("dOrgList");
	dOrgList.setFilter("fixedFilter",
			selectMultiOrgs._inputParams.fixedFilter);
	dOrgList
			.setFilter(
					"displayableFilter",
					selectMultiOrgs
							.getOrgKindsFilter(selectMultiOrgs._inputParams.displayableOrgKinds));
	dOrgList
			.setFilter(
					"selectableFilter",
					selectMultiOrgs
							.getOrgKindsFilter(selectMultiOrgs._inputParams.selectableOrgKinds));

	dOrgList.setFilter("validStateFilter", "SA_OPOrg.sValidState = 1");
	if (selectMultiOrgs._inputParams.onlyMasterPsm)
		dOrgList
				.setFilter("onlyMasterPsmFilter",
						"(SA_OPOrg.sOrgKindID <> 'psm' or SA_OPOrg.sParent = SA_OPPerson.sMainOrgID)");
};

selectMultiOrgs.setCurrentData = function(data) {
	selectMultiOrgs._currentData = data;
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
};

selectMultiOrgs.getOrgKindsFilter = function(orgKinds) {
	if (!orgKinds)
		return "";
	var orgKindsArray = orgKinds.split(",");
	return " SA_OPOrg.sOrgKindID in ('" + orgKindsArray.join("','") + "')";
};

selectMultiOrgs.checkSelectedOrgKind = function() {
	if (!selectMultiOrgs._currentData)
		return false;
	var orgKind = selectMultiOrgs._currentData.getValue("sOrgKindID");
	if (!orgKind)
		return false;
	return (selectMultiOrgs._inputParams.selectableOrgKinds
			.indexOf(orgKind) >= 0);
};

selectMultiOrgs.refreshSelectedData = function(selectedOrgIDs,
		selectedOrgFIDs, selectedPersonIDs) {
	var filter = "1 = 0";
	if (selectedOrgIDs)
		filter = justep.OpmUtils.joinCondition(filter, "SA_OPOrg in ('"
				+ selectedOrgIDs.split(",").join("','") + "')", "or");
	if (selectedOrgFIDs)
		filter = justep.OpmUtils.joinCondition(filter, "SA_OPOrg.sFID in ('"
				+ selectedOrgFIDs.split(",").join("','") + "')", "or");
	if (selectedPersonIDs) {
		filter = justep.OpmUtils
				.joinCondition(filter,
						"SA_OPOrg.sParent = SA_OPPerson.sMainOrgID and SA_OPOrg.sPersonID in ('"
								+ selectedPersonIDs.split(",").join("','")
								+ "')", "or");
	}

	var dSelected = justep.xbl("dSelected");
	dSelected.setFilter("selectedFilter", filter);
	dSelected.refreshData();
};

selectMultiOrgs.btnOKClick = function(event) {
	justep.windowDialogReceiver
			.windowEnsure(justep.xbl("dSelected").getStore());
};

selectMultiOrgs.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

selectMultiOrgs.gridTreeRowDblClick = function(event) {
	selectMultiOrgs.doSelect();
};

selectMultiOrgs.gridListRowDblClick = function(event) {
	selectMultiOrgs.doSelect();
};

selectMultiOrgs.doDataChanged = function() {
	justep.xbl("btnAllSelect").setDisabled((selectMultiOrgs._currentData == justep.xbl("dOrgTree"))	|| (selectMultiOrgs._currentData.getCount() <= 0));
	justep.xbl("btnSelect").setDisabled(!selectMultiOrgs.checkSelectedOrgKind());
};

selectMultiOrgs.dOrgListIndexChanged = function(event) {
	selectMultiOrgs.doDataChanged();
};

selectMultiOrgs.dOrgListAfterRefresh = function(event) {
	selectMultiOrgs.doDataChanged();
};

selectMultiOrgs.dOrgListAfterRefreshPage = function(event) {
	selectMultiOrgs.doDataChanged();
};

selectMultiOrgs.dOrgTreeIndexChanged = function(event) {
	selectMultiOrgs.doDataChanged();
};
selectMultiOrgs.dOrgTreeAfterRefresh = function(event) {
	selectMultiOrgs.doDataChanged();
};

selectMultiOrgs.doSelectedDataChanged = function() {
	var dSelected = justep.xbl("dSelected");
	justep.xbl("btnAllUnSelect").setDisabled(dSelected.getCount() <= 0);
	justep.xbl("btnUnSelect").setDisabled(dSelected.getCount() <= 0);
};

selectMultiOrgs.dSelectedIndexChanged = function(event) {
	selectMultiOrgs.doSelectedDataChanged();
};

selectMultiOrgs.dSelectedAfterRefresh = function(event) {
	selectMultiOrgs.doSelectedDataChanged();
};

selectMultiOrgs.doAllSelect = function() {
	var dOrgList = justep.xbl("dOrgList");
	if (selectMultiOrgs._currentData == dOrgList) {
		var dSelected = justep.xbl("dSelected");
		for ( var index = 0; index < dOrgList.getCount(); index++) {
			var rowID = dOrgList.getRowId(index);
			if (dSelected.getIndex(rowID) < 0) {
				var rowData = justep.OpmUtils.createRowData(dSelected,
						function(col) {
							return dOrgList.getValue(col, rowID);
						});
				dSelected.insert(rowID, dSelected.getCount(), rowData);
			}
		}
	}
};

selectMultiOrgs.doSelect = function(autoMoveIndex) {
	var dSelected = justep.xbl("dSelected");
	var rowID = selectMultiOrgs._currentData.getRowId();
	if (selectMultiOrgs.checkSelectedOrgKind()) {
		if (dSelected.getIndex(rowID) < 0) {
			var rowData = justep.OpmUtils.createRowData(dSelected,
					function(col) {
						return selectMultiOrgs._currentData.getValue(
								col, rowID);
					});
			dSelected.insert(rowID, dSelected.getCount(), rowData);
		}
		if (autoMoveIndex) {
			var grid;
			if (selectMultiOrgs._currentData == justep.xbl("dOrgList"))
				grid = xforms("gridList").grid;
			else
				grid = xforms("gridTree").grid;
			grid.setIndex(grid.getRowIndex(grid.getSelectedRowId()) + 1);
		}
	}
};

selectMultiOrgs.doUnSelect = function() {
	var dSelected = justep.xbl("dSelected");
	dSelected.remove(dSelected.getRowId());
	selectMultiOrgs.doSelectedDataChanged();
};

selectMultiOrgs.doAllUnSelect = function() {
	var dSelected = justep.xbl("dSelected");
	for ( var i = dSelected.getCount(); i > 0; i--)
		dSelected.removeByIndex(i - 1);
	selectMultiOrgs.doSelectedDataChanged();
};

selectMultiOrgs.gridSelectedRowDblClick = function(event) {
	selectMultiOrgs.doUnSelect();
};

selectMultiOrgs.gridListCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

selectMultiOrgs.gridTreeCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

selectMultiOrgs.gridListSOrgKindIDRender = function(event) {
	return "<img src='"
			+ justep.Request.convertURL(justep.Resource
					.getOrgImgURL(event.value), true) + "'/>";
};

selectMultiOrgs.gridTreeShowNodeImg = function(event) {
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	return justep.Resource.getOrgImgURL(orgKind);
};

selectMultiOrgs.gridSelectedCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

selectMultiOrgs.gridSelectedSOrgKindIDRender = function(event) {
	return "<img src='"
			+ justep.Request.convertURL(justep.Resource
					.getOrgImgURL(event.value), true) + "'/>";
};

selectMultiOrgs.dOrgTreeRefreshCreateParam = function(event) {
	if ((event.source.defTreeOption.loadTreeParent == justep.XData.IS_TREE_ROOT)
			&& !!selectMultiOrgs._inputParams.manageTypeCodes)
		event.param.setString("manageCodes",
				selectMultiOrgs._inputParams.manageTypeCodes);
	else
		event.param.deleteParam("manageCodes");
};

selectMultiOrgs.searchData = function() {
	var dOrgList = justep.xbl("dOrgList");
	var dOrgTree = justep.xbl("dOrgTree");

	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}

	if (!searchText)
		selectMultiOrgs.setCurrentData(dOrgTree);
	else
		selectMultiOrgs.setCurrentData(dOrgList);
	if (selectMultiOrgs._currentData == dOrgList) {
		var searchFilter = justep.OpmUtils.getMultiLikeFilter(
				"SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPOrg.sFName", searchText);
		if (searchFilter != dOrgList.getFilter("searchFilter")) {
			dOrgList.setFilter("searchFilter", searchFilter);
			dOrgList.refreshData();
		}
	}
	selectMultiOrgs.doDataChanged();
};
selectMultiOrgs.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		selectMultiOrgs.searchData();
};
selectMultiOrgs.imageSearchClick = function(event) {
	selectMultiOrgs.searchData();
};
selectMultiOrgs.btnAllSelectClick = function(event) {
	selectMultiOrgs.doAllSelect();
};
selectMultiOrgs.btnSelectClick = function(event) {
	selectMultiOrgs.doSelect(true);
};
selectMultiOrgs.btnUnSelectClick = function(event) {
	selectMultiOrgs.doUnSelect();
};
selectMultiOrgs.btnAllUnSelectClick = function(event) {
	selectMultiOrgs.doAllUnSelect();
};
selectMultiOrgs.dOrgListRefreshCreateParam = function(event) {
	if (!!selectMultiOrgs._inputParams.manageTypeCodes) {
		event.param.setString("manageCodes",
				selectMultiOrgs._inputParams.manageTypeCodes);
		event.param.setString("manageFilterMode", "like");
	} else {
		event.param.deleteParam("manageCodes");
		event.param.deleteParam("manageFilterMode");
	}
};
