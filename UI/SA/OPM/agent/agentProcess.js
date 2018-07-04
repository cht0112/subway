var agentProcess = {};

agentProcess._inputParams = {
	process : null,
	orgFID : null
};

agentProcess.receiverReceive = function(event) {
	agentProcess._inputParams.process = event.data.process;
	agentProcess._inputParams.orgFID = event.data.orgFID;
	agentProcess.refreshData();
};

agentProcess.refreshData = function() {
	var dAgentProcess = justep.xbl("dAgentProcess");
	for ( var i = dAgentProcess.getCount() - 1; i >= 0; i--)
		dAgentProcess.removeByIndex(i);

	var params = new justep.Request.ActionParam();
	var process = (!agentProcess._inputParams.process) ? "" : agentProcess._inputParams.process;
	params.setString("process", process);
	var translateParam = new justep.Request.TranslateParam();
	translateParam.dataType = justep.Request.TranslateParam.DATATYPE_ROW_LIST;
	translateParam.rowOption.sequence = dAgentProcess.getColumnIds();
	justep.Request.sendBizRequest2({
		action: "agentProcessStringToTableAction", 
		parameters: params, 
		translateParam: translateParam,
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				dAgentProcess.loadXML(callbackData.response);
			}
		}
	});
};
agentProcess.btnOKClick = function(event) {
	xforms.blur(true);
	var dAgentProcess = justep.xbl("dAgentProcess");
	var params = new justep.Request.ActionParam();
	params.setTable("table", new justep.Request.TableParam(dAgentProcess.getDoc(false)));

	justep.Request.sendBizRequest2({
		dataType: "json",
		action: "agentProcessTableToStringAction", 
		parameters: params, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				var process = callbackData.response.process;
				var processLabel = callbackData.response.processLabel;
				justep.windowDialogReceiver.windowEnsure({
					process : (!process ? "" : process),
					processLabel : (!processLabel ? "" : processLabel)
				});
			}
		}
	});
};
agentProcess.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

agentProcess.getTypeLabel = function(type) {
	if (type == "r")
		return "角色";
	else if (type == "m")
		return "模块";
	else if (type == "p")
		return "过程";
	else if (type == "a")
		return "功能";
	else
		return "";
};
agentProcess.appendAgentProcess = function(type, content, label) {
	var dAgentProcess = justep.xbl("dAgentProcess");
	if (dAgentProcess.locate([ content ], [ "content" ]).length > 0) return;
	
	dAgentProcess.newData(dAgentProcess.getCount());
	dAgentProcess.setValue("checkBox", null);
	dAgentProcess.setValue("type", type);
	dAgentProcess.setValue("typeLabel", agentProcess.getTypeLabel(type));
	dAgentProcess.setValue("content", content);
	dAgentProcess.setValue("label", label);
};

agentProcess.btnSelectRoleClick = function(event) {
	justep.xbl("wdSelectRole").open({
		filter: "SA_OPRole in (select SA_OPAuthorize.sAuthorizeRoleID from SA_OPAuthorize SA_OPAuthorize where "
			+ justep.OpmUtils.createParentPathFilter("SA_OPAuthorize.sOrgFID", agentProcess._inputParams.orgFID) + ")"
	});
};
agentProcess.wdSelectRoleReceive = function(event) {
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		var content = event.data.getRowId(i);
		var label = event.data.getValueByName("sName", i);
		agentProcess.appendAgentProcess("r", content, label);
	}
};
agentProcess.btnSelectFuncClick = function(event) {
	justep.xbl("wdSelectPermission").open({
		orgFID : agentProcess._inputParams.orgFID
	});
};
agentProcess.wdSelectPermissionReceive = function(event) {
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		var process = event.data.getValueByName("sProcess", i);
		var activity = event.data.getValueByName("sActivity", i);
		if (process.lastIndexOf("/") > -1)
			process = process.substring(0, process.lastIndexOf("/"));
		var content = process + "/" + activity;
		var label = event.data.getValueByName("sActivityFName", i);

		agentProcess.appendAgentProcess("a", content, label);
	}
};
agentProcess.btnDeleteClick = function(event) {
	var gridAgentProcess = justep.xbl("gridAgentProcess").grid;
	var checkColIndex = gridAgentProcess.getColIndexById("checkBox");
	var selectedRowIDs = gridAgentProcess.getCheckedRows(checkColIndex);
	selectedRowIDs = selectedRowIDs ? selectedRowIDs.split(",") : [];
	if (selectedRowIDs.length == 0) {
		justep.OpmUtils.showWarning("请勾选要删除的数据！");
		return;
	}
	var dAgentProcess = justep.xbl("dAgentProcess");
	dAgentProcess.deleteData(selectedRowIDs);
};
agentProcess.btnSelectModelClick = function(event) {
	justep.xbl("wdSelectModel").open({});
};
agentProcess.wdSelectModelReceive = function(event){
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		var content = event.data.getValueByName("modelPath", i);
		var label = content;
		agentProcess.appendAgentProcess("m", content, label);
	}
};
agentProcess.btnRefreshClick = function(event){
	agentProcess.refreshData();
};
