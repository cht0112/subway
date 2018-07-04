acceptParentParamsFun = receiveData;

var _controller;

function model1XformsModelConstructDone(event) {
	if (!_controller) {
		_controller = new appCommon.component.orgSelectDialogController();
		_controller.orgTreeData = justep.xbl("dOrgTree");
		_controller.orgListData = justep.xbl("dOrgList");
		_controller.inputSearch = document.getElementById("inputSearch");
		_controller.trList = document.getElementById("gridList");
		_controller.trTree = document.getElementById("gridTree");
		_controller.pageNavigator = document.getElementById("pageNavigator");
		_controller.initComponentsEvent();
		_controller.onCurrentDataChanged = doDataChanged;
	}
}

function receiveData(data) {
	_controller.receiveData(data);
	refreshSelectedData(data.selectedOrgIDs, data.selectedOrgFIDs,
			data.selectedPersonIDs);
}

function refreshSelectedData(selectedOrgIDs, selectedOrgFIDs, selectedPersonIDs) {
	var filter = "1 = 0";
	if (selectedOrgIDs)
		filter = appCommon.FilterUtils.joinFilter(filter, appCommon.FilterUtils
				.getInFilter("SA_OPOrg", selectedOrgIDs, ","), "OR");
	if (selectedOrgFIDs)
		filter = appCommon.FilterUtils.joinFilter(filter, appCommon.FilterUtils
				.getInFilter("SA_OPOrg.sFID", selectedOrgFIDs, ","), "OR");
	if (selectedPersonIDs) {
		var personFilter = appCommon.FilterUtils.joinFilter(
				appCommon.component.orgSelectDialogController.MAIN_PSM_FILTER,
				appCommon.FilterUtils.getInFilter("SA_OPOrg.sPersonID",
						selectedPersonIDs, ","), "AND");
		filter = appCommon.FilterUtils.joinFilter(filter, personFilter, "OR");
	}

	var selectedData = justep.xbl("dSelected");
	selectedData.setFilter("selectedFilter", filter);
	selectedData.refreshData();
}

function returnData() {
	windowEnsure(justep.xbl("dSelected").getStore());
}

function cancelData() {
	windowCancel();
}

function gridTreeRowDblClick(event) {
	doSelect();
}

function gridListRowDblClick(event) {
	doSelect();
}

function doDataChanged() {
	document.getElementById("btnAllSelect").disabled = (!_controller
			.isListMode())
			|| (_controller.currentData.getCount() <= 0);
	document.getElementById("btnSelect").disabled = !_controller
			.checkSelectedOrgKind()
			&& !_controller.isGroup();
}

function dOrgListIndexChanged(event) {
	doDataChanged();
}
function dOrgListAfterRefresh(event) {
	doDataChanged();
}
function dOrgListAfterRefreshPage(event) {
	doDataChanged();
}
function dOrgTreeIndexChanged(event) {
	doDataChanged();
}
function dOrgTreeAfterRefresh(event) {
	doDataChanged();
}
function dOrgTreeAfterRefreshPage(event) {
	doDataChanged();
}
function doSelectedDataChanged() {
	var selectedData = justep.xbl("dSelected");
	document.getElementById("btnAllUnSelect").disabled = (selectedData
			.getCount() <= 0);
	document.getElementById("btnUnSelect").disabled = (selectedData.getCount() <= 0);
}
function dSelectedIndexChanged(event) {
	doSelectedDataChanged();
}
function dSelectedAfterRefresh(event) {
	doSelectedDataChanged();
}
function doAllSelect() {
	if (_controller.isListMode()) {
		var currentData = _controller.currentData;
		var selectedData = justep.xbl("dSelected");
		for (var index = 0; index < currentData.getCount(); index++) {
			var rowID = currentData.getRowId(index);
			if (selectedData.getIndex(rowID) < 0) {
				var rowData = appCommon.DataUtils.createRowData(selectedData,
						function(col) {
							return currentData.getValue(col, rowID);
						});
				selectedData.insert(rowID, selectedData.getCount(), rowData);
			}
		}
	}
}
function doSelect(autoMoveIndex) {
	var selectedData = justep.xbl("dSelected");
	var currentData = _controller.currentData;
	var rowID = currentData.getRowId();
	if (_controller.checkSelectedOrgKind()) {
		var realRowID = rowID.substring(rowID.indexOf("|") + 1);
		if (selectedData.getIndex(realRowID) < 0) {
			var rowData = appCommon.DataUtils.createRowData(selectedData,
					function(col) {
						return currentData.getValue(col, rowID);
					});
			selectedData.insert(realRowID, selectedData.getCount(), rowData);
		}
		if (autoMoveIndex) {
			var grid;
			if (_controller.isListMode())
				grid = xforms("gridList").grid;
			else
				grid = xforms("gridTree").grid;
			grid.setIndex(grid.getRowIndex(grid.getSelectedRowId()) + 1);
		}
	} else if (_controller.isGroup()) {
		var details = getGroupDetails(rowID);
		for (var index = 0; index < details.getRowsNum(); index++) {
			var detailID = details.getRowId(index);
			var realDetailID = detailID.substring(detailID.indexOf("|") + 1);
			if (selectedData.getIndex(realDetailID) < 0) {
				var rowData = appCommon.DataUtils.createRowData(selectedData,
						function(col) {
							return details.getValueByName(col, index);
						});
				selectedData.insert(realDetailID, selectedData.getCount(),
						rowData);
			}
		}
	}
}
function doUnSelect() {
	var selectedData = justep.xbl("dSelected");
	selectedData.remove(selectedData.getRowId());
	doSelectedDataChanged();
}
function doAllUnSelect() {
	var selectedData = justep.xbl("dSelected");
	for (var i = selectedData.getCount(); i > 0; i--)
		selectedData.removeByIndex(i - 1);
	doSelectedDataChanged();
}
function gridSelectedRowDblClick(event) {
	doUnSelect();
}
function gridSelectedCellHint(event) {
	return _controller.doGridHintEvent(event);
}
function gridSelectedSOrgKindIDRender(event) {
	return _controller.doListGridSOrgKindIDRenderEvent(event)
}
function getGroupDetails(groupID) {
	var treeData = _controller.orgTreeData;

	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var aciton = treeData.queryAction;
	var queryParam = new justep.Request.ActionParam();

	queryParam.setInteger("offset", 0);
	queryParam.setInteger("limit", -1);

	treeData.setTreeFilter(appCommon.FilterUtils.joinFilter(_controller
			.getOrgKindsFilter(this.selectableOrgKinds), _controller
			.getOrgRootFilter(), "and"));
	var filter = treeData.buildFilter();
	if (filter)
		queryParam.setString('filter', filter);
	else
		queryParam.deleteParam('filter');
	queryParam.setString("filter", filter);
	queryParam.setString("queryKind",
			appCommon.component.orgSelectDialogController.QUERY_KIND_DETAILS);
	queryParam.setString("groupParentID", groupID);
	var translateParam = treeData.createRefreshTranslateParam();
	var r = justep.Request.sendBizRequest(process, activity, aciton,
			queryParam, translateParam, function(resultData) {
				if (resultData && (resultData.state == false)) {
					justep.Request.errorMessage(resultData, "刷新数据失败！",
							resultData.url, resultData.param);
				}
			}, true);
	if (justep.Request.isBizSuccess(r)) {
		var st = new SimpleStore("details", treeData.getColumnIds());
		st.loadData(null, r.responseXML);
	}
	return st;
}