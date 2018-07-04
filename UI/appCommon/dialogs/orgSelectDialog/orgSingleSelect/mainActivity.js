var mainActivity = {};
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

		_controller.groupData = justep.xbl("dGroup");
		_controller.detailData = justep.xbl("dDetail");
	}
}

function receiveData(data) {
	_controller.receiveData(data);
}

function returnData() {
	if (_controller.checkSelectedOrgKind()) {
		var currentData = _controller.currentData;
		var rowID = currentData.getRowId();
		var r = new SimpleStore(null, currentData.getColumnIds());
		r.insert(rowID.substring(rowID.indexOf("|") + 1), 0, 0, currentData.getRowData(rowID));
		windowEnsure(r);
	}
}

function cancelData() {
	windowCancel();
}

function gridTreeRowDblClick(event) {
	returnData();
}

function gridListRowDblClick(event) {
	returnData();
}

function doDataChanged() {
	document.getElementById("btnOK").disabled = !_controller
			.checkSelectedOrgKind();
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
