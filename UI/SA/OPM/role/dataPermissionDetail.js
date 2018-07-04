var dataPermissionDetail = {};

dataPermissionDetail._inputParams = {};
dataPermissionDetail._defaultInputParams = {
	openMode : null,
	id : null,
	roleID : null
};

dataPermissionDetail.receiverReceive = function(event) {
	dataPermissionDetail.initData();

	for (o in dataPermissionDetail._defaultInputParams)
		dataPermissionDetail._inputParams[o] = dataPermissionDetail._defaultInputParams[o];

	dataPermissionDetail._inputParams.openMode = event.data.openMode;
	if (event.data.id)
		dataPermissionDetail._inputParams.id = event.data.id;
	if (event.data.roleID)
		dataPermissionDetail._inputParams.roleID = event.data.roleID;

	var dPermission = justep.xbl("dPermission");
	var dDataPolicy = justep.xbl("dDataPolicy");
	if (dataPermissionDetail._inputParams.openMode != "new") {
		var params = new justep.Request.ActionParam();
		params.setString("id", dataPermissionDetail._inputParams.id);
		var translateParam = new justep.Request.TranslateParam();
		translateParam.dataType = justep.Request.TranslateParam.DATATYPE_ROW_LIST;
		translateParam.rowOption.sequence = dDataPolicy.getColumnIds();
		justep.Request.sendBizRequest2({
			dataType: "json",
			action: "getDataPermissionAction",
			parameters: params, 
			translateParam: translateParam, 
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					dPermission.setValue("id", callbackData.response.id);
					dPermission.setValue("process", callbackData.response.process);
					dPermission.setValue("activity", callbackData.response.activity);
					dPermission.setValue("activityFName", callbackData.response.activityFName);
					dDataPolicy.loadJson(callbackData.response.dataPolicyTable);
				}
			}
		});
	}
};

dataPermissionDetail.initData = function() {
	var dPermission = justep.xbl("dPermission");
	dPermission.setValue("id", "");
	dPermission.setValue("process", "");
	dPermission.setValue("activity", "");
	dPermission.setValue("activityFName", "");
	var dDataPolicy = justep.xbl("dDataPolicy");
	justep.OpmUtils.setUserDataForCommonData(dDataPolicy);
	for ( var i = dDataPolicy.getCount() - 1; i >= 0; i--)
		dDataPolicy.removeByIndex(i);
};

dataPermissionDetail.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};
dataPermissionDetail.btnOKClick = function(event) {
	xforms.blur(true);
	var dPermission = justep.xbl("dPermission");
	var dDataPolicy = justep.xbl("dDataPolicy");
	if (dataPermissionDetail._inputParams.openMode == "new") {
		var params = new justep.Request.ActionParam();
		params.setString("roleID", dataPermissionDetail._inputParams.roleID);
		params.setString("process", dPermission.getValue("process"));
		params.setString("activity", dPermission.getValue("activity"));
		params.setString("activityFName", dPermission.getValue("activityFName"));
		params.setTable("dataPolicyTable", new justep.Request.TableParam(dDataPolicy.getDoc(false)));

		justep.Request.sendBizRequest2({
			dataType: "json",
			action: "appendDataPermission",
			parameters: params,
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					dataPermissionDetail._inputParams.id = callbackData.response;
					justep.windowDialogReceiver.windowEnsure(dataPermissionDetail._inputParams);
				} 
			}
		});
	} else if (dataPermissionDetail._inputParams.openMode == "edit") {
		var params = new justep.Request.ActionParam();
		params.setString("id", dataPermissionDetail._inputParams.id);
		params.setString("process", dPermission.getValue("process"));
		params.setString("activity", dPermission.getValue("activity"));
		params.setString("activityFName", dPermission.getValue("activityFName"));
		params.setTable("dataPolicyTable", new justep.Request.TableParam(dDataPolicy.getDoc(false)));
		justep.Request.sendBizRequest2({
			dataType: "json",
			action: "updateDataPermission",
			parameters: params,
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					justep.windowDialogReceiver.windowEnsure(dataPermissionDetail._inputParams);
				} 
			}
		});
	}
};
dataPermissionDetail.btnSelectFunClick = function(event) {
	justep.xbl("wdSelectSingleFunction").open({});
};
dataPermissionDetail.wdSelectSingleFunctionReceive = function(event) {
	var dPermission = justep.xbl("dPermission");
	dPermission.setValue("process", event.data.getValueByName("process", 0));
	dPermission.setValue("activity", event.data.getValueByName("activity", 0));
	dPermission.setValue("activityFName", event.data.getValueByName("activityFName", 0));
};

dataPermissionDetail.btnInsertPolicyClick = function(event) {
	xforms("newDataPolicyMenu").show(event.srcElement || event.target);
};

dataPermissionDetail.newDataPolicyMenuClick = function(event) {
	var dPermission = justep.xbl("dPermission");
	var dDataPolicy = justep.xbl("dDataPolicy");
	var menuitemId = event.getData().itemId;
	if (menuitemId == "newBizPolicy") {
		dDataPolicy.newData(dDataPolicy.getCount());
		dDataPolicy.setValue("action", "*");
		dDataPolicy.setValue("actionLabel", "所有");
		dDataPolicy.setValue("typeOrParam", "");
		dDataPolicy.setValue("typeOrParamLabel", "");
		dDataPolicy.setValue("kind", "expr");
		dDataPolicy.setValue("kindLabel", "表达式");
		justep.xbl("gridDataPolicy").grid.refreshHtmlEditor(dDataPolicy.getCurrentRowId());
	} else if (menuitemId == "newParamPolicy") {
		var process = dPermission.getValue("process");
		var activity = dPermission.getValue("activity");
        if(process && activity){
        	justep.xbl("wdSelectParam").open({
        		selectMode : "single",
        		activity : activity,
        		process : process
        	});
        } else justep.OpmUtils.showWarning('请选择应用范围！');	
	}
};
dataPermissionDetail.wdSelectParamReceive = function(event) {
	var dDataPolicy = justep.xbl("dDataPolicy");
	dDataPolicy.newData(dDataPolicy.getCount());
	dDataPolicy.setValue("action", event.data.getValueByName("action", 0));
	dDataPolicy.setValue("actionLabel", event.data.getValueByName("actionLabel", 0));
	dDataPolicy.setValue("typeOrParam", event.data.getValueByName("param", 0));
	dDataPolicy.setValue("typeOrParamLabel", event.data.getValueByName("paramLabel", 0));
	dDataPolicy.setValue("kind", "expr");
	dDataPolicy.setValue("kindLabel", "表达式");
	justep.xbl("gridDataPolicy").grid.refreshHtmlEditor(dDataPolicy.getCurrentRowId());
};
dataPermissionDetail.gridDataPolicyValuesLabelButtonClick = function(rowID) {
	var dDataPolicy = justep.xbl("dDataPolicy");
	var values = dDataPolicy.getValue("values", rowID);
	justep.xbl("wdPolicyValues").open({
		values : values
	});
};
dataPermissionDetail.gridDataPolicy_valuesLabelButtonClick = function(event){
	dataPermissionDetail.gridDataPolicyValuesLabelButtonClick(event.rowId);
};
dataPermissionDetail.wdPolicyValuesReceive = function(event){
	var dDataPolicy = justep.xbl("dDataPolicy");
	dDataPolicy.setValue("values", event.data.values);
	dDataPolicy.setValue("valuesLabel", event.data.valuesLabel);
};
dataPermissionDetail.dDataPolicyValueChanged = function(event){
	if (event.column == "typeOrParam") 
		event.source.setValue("typeOrParamLabel", event.value, event.rowId);
};

