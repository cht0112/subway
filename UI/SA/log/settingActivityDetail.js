var settingActivityDetail = {};
settingActivityDetail.windowReceiverReceive = function(event){
	var operator = event.data.operator;
	var data = justep.xbl('detailData');
	if (operator == "new") {
		data.newData();
	} else if (operator == "edit") {
		var id = event.data.id;
		data.filters.setFilter("idFilter", data.getConceptAliasName() + "='" + id + "'");
		data.refreshData();
	}
};
settingActivityDetail.btnOKClick = function(event){
	xforms.blur(true);
	var data = justep.xbl('detailData');
	if (data.saveData())
		justep.windowDialogReceiver.windowEnsure({
			id : data.getCurrentRowId()
		});
};
settingActivityDetail.btnCancelClick = function(event){
	justep.windowDialogReceiver.windowCancel();
};
settingActivityDetail.searchProcessButtonClick = function(event){
	justep.xbl("wdSelectSingleFunction").open();
};
settingActivityDetail.searchActionButtonClick = function(event){
	var data = justep.xbl("detailData");
	var model = data.getValue("sModel");
	var process = data.getValue("sProcess");
	var activity = data.getValue("sActivity");
	justep.xbl("windowDialog1").open({"model":model,"process":process, "activity":activity});
	
};
settingActivityDetail.wdSelectSingleFunctionReceive = function(event){
	var data = justep.xbl("detailData");
	data.setValue("sProcess", event.data.getValueByName("process", 0));		
	data.setValue("sActivity", event.data.getValueByName("activity", 0));		
	data.setValue("sActivityName", event.data.getValueByName("label", 0));
};
settingActivityDetail.windowDialog1Receive = function(event){
	var data = justep.xbl("detailData");
	data.setValue("sAction", event.data.action);
	data.setValue("sActionName", event.data.name);
};
settingActivityDetail.searchModelButtonClick = function(event){
	justep.xbl("modelDialog").open();
};
settingActivityDetail.modelDialogReceive = function(event){
	var data = justep.xbl("detailData");
	data.setValue("sModel", event.data.model);
	data.setValue("sModelName", event.data.model);
};
settingActivityDetail.actionInitBtnClick = function(event){
	var data = justep.xbl("detailData");
	data.setValue("sAction", "*");
	data.setValue("sActionName", "所有");
};
settingActivityDetail.activityInitBtnClick = function(event){
	var data = justep.xbl("detailData");
	data.setValue("sActivity", "*");
	data.setValue("sActivityName", "所有");
	data.setValue("sProcess", "*");
	data.setValue("sProcessName", "所有");
};
settingActivityDetail.modelInitBtnClick = function(event){
	var data = justep.xbl("detailData");
	data.setValue("sModel", "*");
	data.setValue("sModelName", "所有");
};
