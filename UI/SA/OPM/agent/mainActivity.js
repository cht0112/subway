var mainActivity = {};
mainActivity.model1ModelConstructDone = function(event) {
	mainActivity.refreshAgentData();
};
mainActivity.refreshAgentData = function() {
	var dAgent = justep.xbl("dAgent");
	if (!dAgent.saveData()) return;
	
	dAgent.setFilter("personFilter", "SA_OPAgent.sOrgFID like '%/" + justep.Context.getOperatorID()	+ "@%' or SA_OPAgent.sCreatorID = :operatorID()");
	var isShowHistory = document.getElementById("cbShowHistory").checked;
	if (isShowHistory)
		dAgent.setFilter("historyFilter", "");
	else
		dAgent.setFilter("historyFilter", "SA_OPAgent.sValidState = 1 and (SA_OPAgent.sFinishTime is null or SA_OPAgent.sFinishTime > :currentDateTime())");

	var searchText = $("#inputSearch").val();
	
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}
	
	if (searchText)
		dAgent.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPAgent.sOrgFName,SA_OPPerson.sName", searchText));
	else
		dAgent.setFilter("searchFilter", "");
	dAgent.refreshData();
};
mainActivity.btnAppendAgentsClick = function(event) {
	var dAgent = justep.xbl("dAgent");
	if (!dAgent.saveData()) return;
	
	justep.xbl("wdAppendAgents").open({});
};
mainActivity.cbShowHistoryClick = function(event) {
	mainActivity.refreshAgentData();
};
mainActivity.gridAgentSValidStateRender = function(event) {
	if (event.value == 1)
		return "有效";
	else
		return "取消";
};
mainActivity.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		mainActivity.refreshAgentData();
};
mainActivity.imageSearchClick = function(event) {
	mainActivity.refreshAgentData();
};
mainActivity.btnCancelAgentClick = function(event) {
	var dAgent = justep.xbl("dAgent");
	if (!dAgent.saveData()) return;
	
	var gridAgent = justep.xbl("gridAgent").grid;

	var checkColIndex = gridAgent.getColIndexById("calcCheckBox");
	var checkedIDs = gridAgent.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选需要被取消的代理！");
		return;
	}
	justep.OpmUtils.showConfirm("确实要取消当前勾选的代理吗？", function(e) {
		var agents = new justep.Request.MapParam();
		var checkedIDsArray = checkedIDs.split(",");
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var version = gridAgent.getValueById(id, "version");
			agents.put(id, new justep.Request.SimpleParam(version, justep.XML.Namespaces.XMLSCHEMA_INTEGER));
		}
		var params = new justep.Request.ActionParam();
		params.setMap("agents", agents);
		justep.Request.sendBizRequest2({
			action: "cancelAgentsAction", 
			parameters: params,
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					mainActivity.refreshAgentData();
					justep.OpmUtils.showSuccess("取消代理成功。");
				}
			}
		});
	});
};
mainActivity.btnDeleteAgentClick = function(event) {
	var dAgent = justep.xbl("dAgent");
	if (!dAgent.saveData())	return;

	var gridAgent = justep.xbl("gridAgent").grid;
	var checkColIndex = gridAgent.getColIndexById("calcCheckBox");
	var checkedIDs = gridAgent.getCheckedRows(checkColIndex);
	if (!checkedIDs) {
		justep.OpmUtils.showWarning("请勾选需要被删除的代理！");
		return;
	}
	justep.OpmUtils.showConfirm("确实要删除当前勾选的代理吗？", function(e) {
		var agents = new justep.Request.MapParam();
		var checkedIDsArray = checkedIDs.split(",");
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var version = gridAgent.getValueById(id, "version");
			agents.put(id, new justep.Request.SimpleParam(version, justep.XML.Namespaces.XMLSCHEMA_INTEGER));
		}
		var params = new justep.Request.ActionParam();
		params.setMap("agents", agents);
		justep.Request.sendBizRequest2({
			action: "deleteAgentsAction", 
			parameters: params,
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					mainActivity.refreshAgentData();
					justep.OpmUtils.showSuccess("删除代理成功。");
				}
			}
		});
	});
};
mainActivity.wdAppendAgentsReceive = function(event) {
	mainActivity.refreshAgentData();
};
mainActivity.openAgentProcess = function(rowID) {
	var dAgent = justep.xbl("dAgent");
	if (!dAgent.saveData())	return;
	
	var orgFID = dAgent.getValue("sOrgFID", rowID);
	var process = dAgent.getValue("sProcess", rowID);
	justep.xbl("wdAgentProcess").open({
		orgFID : orgFID,
		process : process
	});
};
mainActivity.wdAgentProcessReceive = function(event) {
	var dAgent = justep.xbl("dAgent");
	dAgent.setValue("sProcess", event.data.process);
	dAgent.setValue("processLabel", event.data.processLabel);
	dAgent.saveData();
};

mainActivity.gridAgent_processLabelButtonClick = function(event){
	mainActivity.openAgentProcess(event.rowId);
};
