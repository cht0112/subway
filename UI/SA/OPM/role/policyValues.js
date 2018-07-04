var policyValues = {};

policyValues._inputParams = {
	values : null
};

policyValues.receiverReceive = function(event) {
	justep.xbl("gridValues").grid.setNoHeader(true);

	policyValues._inputParams.values = event.data.values;

	var dValues = justep.xbl("dValues");
	var actionParams = new justep.Request.ActionParam();
	actionParams.setString("values", policyValues._inputParams.values);
	var translateParam = new justep.Request.TranslateParam();
	translateParam.dataType = justep.Request.TranslateParam.DATATYPE_ROW_LIST;
	translateParam.rowOption.sequence = dValues.getColumnIds();
	justep.Request.sendBizRequest2({
		action: "policyValuesStringToTableAction", 
		parameters: actionParams, 
		translateParam: translateParam,
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				dValues.loadXML(callbackData.response);
			}
		}
	});
};
policyValues.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};
policyValues.btnOKClick = function(event) {
	xforms.blur(true);
	var dValues = justep.xbl("dValues");
	var params = new justep.Request.ActionParam();
	params.setTable("table", new justep.Request.TableParam(dValues.getDoc(false)));
	justep.Request.sendBizRequest2({
		action: "policyValuesTableToStringAction", 
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				var result = justep.Request.transform(justep.Request.getData(callbackData.response));
				justep.windowDialogReceiver.windowEnsure(result);
			}
		}
	});
};
policyValues.insertItemClick = function(event){
	var dValues = justep.xbl("dValues");
	dValues.newData(dValues.getCount());
};

