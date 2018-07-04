var selectPermissionParams = {};

selectPermissionParams._inputParams = {};
selectPermissionParams._defaultInputParams = {
	selectMode : "multi",
	process : null,
	activity : null
};

selectPermissionParams.receiverReceive = function(event) {
	for (o in selectPermissionParams._defaultInputParams)
		selectPermissionParams._inputParams[o] = selectPermissionParams._defaultInputParams[o];

	selectPermissionParams._inputParams.process = event.data.process;
	selectPermissionParams._inputParams.activity = event.data.activity;
	if (event.data.selectMode)
		selectPermissionParams._inputParams.selectMode = event.data.selectMode;

	var gridParams = justep.xbl("gridParams").grid;
	gridParams.setColumnHidden(gridParams.getColIndexById("ch"), ("single" == selectPermissionParams._inputParams.selectMode));

	var dParams = justep.xbl("dParams");
	var actionParams = new justep.Request.ActionParam();
	actionParams.setString("process", selectPermissionParams._inputParams.process);
	actionParams.setString("activity", selectPermissionParams._inputParams.activity);
	var translateParam = new justep.Request.TranslateParam();
	translateParam.dataType = justep.Request.TranslateParam.DATATYPE_ROW_LIST;
	translateParam.rowOption.sequence = dParams.getColumnIds();
	justep.Request.sendBizRequest2({
		action: "getPermissionParamsOfActivityAction", 
		parameters: actionParams,
		translateParam: translateParam, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				dParams.loadXML(callbackData.response);
			}
		}
	});
};
selectPermissionParams.btnOKClick = function(event) {
	var gridParams = justep.xbl("gridParams").grid;
	var checkColIndex = gridParams.getColIndexById("ch");
	var selectedRowIDs = [];
	if ("single" == selectPermissionParams._inputParams.selectMode) {
		if (!gridParams.getSelectedRowId())
			return;
		selectedRowIDs[0] = gridParams.getSelectedRowId();
	} else
		selectedRowIDs = gridParams.getCheckedRows(checkColIndex).split(",");
	var r = new SimpleStore(null, gridParams.getColumnIds());
	for ( var i = 0; i < selectedRowIDs.length; i++) {
		if (selectedRowIDs[i]) {
			r.insert(selectedRowIDs[i], 0, 0, justep.OpmUtils.getRowDataExt(gridParams, selectedRowIDs[i]));
		}
	}
	justep.windowDialogReceiver.windowEnsure(r);
};
selectPermissionParams.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};
selectPermissionParams.gridParamsRowDblClick = function(event) {
	if ("single" == selectPermissionParams._inputParams.selectMode)
		selectPermissionParams.btnOKClick(event);
};
