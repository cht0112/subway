var selectProtectedActions = {};

selectProtectedActions._inputParams = {};
selectProtectedActions._defaultInputParams = {
	selectMode : "multi",
	process : null,
	activity : null,
	selectedActions : ""
};

selectProtectedActions.receiverReceive = function(event) {
	for (o in selectProtectedActions._defaultInputParams)
		selectProtectedActions._inputParams[o] = selectProtectedActions._defaultInputParams[o];

	selectProtectedActions._inputParams.process = event.data.process;
	selectProtectedActions._inputParams.activity = event.data.activity;
	if (event.data.selectMode)
		selectProtectedActions._inputParams.selectMode = event.data.selectMode;
	if (event.data.selectedActions)
		selectProtectedActions._inputParams.selectedActions = event.data.selectedActions;

	var gridActions = justep.xbl("gridActions").grid;
	gridActions.setColumnHidden(gridActions.getColIndexById("ch"), ("single" == selectProtectedActions._inputParams.selectMode));

	var dActions = justep.xbl("dActions");
	var actionParams = new justep.Request.ActionParam();
	actionParams.setString("process", selectProtectedActions._inputParams.process);
	actionParams.setString("activity", selectProtectedActions._inputParams.activity);
	var translateParam = new justep.Request.TranslateParam();
	translateParam.dataType = justep.Request.TranslateParam.DATATYPE_ROW_LIST;
	translateParam.rowOption.sequence = dActions.getColumnIds();
	justep.Request.sendBizRequest2({
		action: "getProtectedActionsOfActivityAction",
		parameters: actionParams,
		translateParam: translateParam,
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				dActions.loadXML(callbackData.response);
				if ("multi" == selectProtectedActions._inputParams.selectMode)
					selectProtectedActions.initSelectedActions();
			}
		}
	});
};
selectProtectedActions.initSelectedActions = function() {
	var selectedActions = "," + selectProtectedActions._inputParams.selectedActions + ",";
	var gridActions = justep.xbl("gridActions").grid;
	var checkColIndex = gridActions.getColIndexById("ch");
	gridActions.forEachRow(function(id) {
		var actionName = gridActions.getValueById(id, "name");
		gridActions.cells(id, checkColIndex).setValue((selectedActions.indexOf(actionName) > -1) ? 1 : 0);
	});
};
selectProtectedActions.btnOKClick = function(event) {
	var gridActions = justep.xbl("gridActions").grid;
	var checkColIndex = gridActions.getColIndexById("ch");
	var selectedRowIDs = [];
	if ("single" == selectProtectedActions._inputParams.selectMode) {
		if (!gridActions.getSelectedRowId())
			return;
		selectedRowIDs[0] = gridActions.getSelectedRowId();
	} else
		selectedRowIDs = gridActions.getCheckedRows(checkColIndex).split(",");
	var r = new SimpleStore(null, gridActions.getColumnIds());
	for ( var i = 0; i < selectedRowIDs.length; i++) {
		if (selectedRowIDs[i]) {
			r.insert(selectedRowIDs[i], 0, 0, justep.OpmUtils.getRowDataExt(gridActions, selectedRowIDs[i]));
		}
	}
	justep.windowDialogReceiver.windowEnsure(r);
};
selectProtectedActions.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};
selectProtectedActions.gridActionsRowDblClick = function(event) {
	if ("single" == selectProtectedActions._inputParams.selectMode)
		selectProtectedActions.btnOKClick(event);
};
