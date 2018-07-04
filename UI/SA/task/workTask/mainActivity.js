var mainActivity = {};
mainActivity.gotoDetailTab = function() {
	justep.xbl("tablist").tabbar.setTabActive("detail_tab");
};

mainActivity.setImportanceName = function() {
	var importanceData = justep.xbl("task_importance");
	var rowId = importanceData.getCurrentRowId();
	var sName = importanceData.getValue("sName", rowId);
	
	var mainData = justep.xbl("main");
	var rowId1 = mainData.getCurrentRowId();
	mainData.setValue("sImportanceName", sName, rowId1);
};

mainActivity.setEmergencyName = function() {
	var emergencyData = justep.xbl("task_emergency");
	var rowId = emergencyData.getCurrentRowId();
	var sName = emergencyData.getValue("sName", rowId);
	
	var mainData = justep.xbl("main");
	var rowId1 = mainData.getCurrentRowId();
	mainData.setValue("sEmergencyName", sName, rowId1);
};

mainActivity.setStatusName = function() {
	var statusData = justep.xbl("task_status");
	var rowId = statusData.getCurrentRowId();
	var sName = statusData.getValue("sName", rowId);
	
	var mainData = justep.xbl("main");
	var rowId1 = mainData.getCurrentRowId();
	mainData.setValue("sStatusName", sName, rowId1);
};


mainActivity.setDateTimeFilter1 = function() {
	setDateTimeFilter("main", "SA_WorkTask", "date-selector");
};
mainActivity.mainmodelLoad = function(event){
	var data = justep.xbl("custom_filter");
	var parameter = justep.Context.getRequestParameter("parameter");
	if ((parameter == 'submited') || (parameter == 'waiting')){
		data.setValue("status", parameter);
	}else{
		data.setValue("status", "submited");
	}
	
	mainActivity.setDateTimeFilter1();
	justep.xbl("main").refreshData();
};
mainActivity.mainValueChanged = function(event){
	var fieldName = event.column;
	if (fieldName == "sLastModifyTime"){
		return;
	}
	
	var nowDateTime = justep.System.datetime() || new Date();
	var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT);

	var mainData = justep.xbl("main");
	var rowId = mainData.getCurrentRowId();
	mainData.setValue("sLastModifyTime", nowDateTimeStr, rowId);
	
	if (fieldName == "sExecutorFID") {
		var fid = mainData.getValue("sExecutorFID", rowId);
		var personID = getPersonIDByFID(fid);
		mainData.setValue("sExecutorPersonID", personID, rowId);

		var posID = getPosIDByFID(fid);
		mainData.setValue("sExecutorPosID", posID, rowId);

		var deptID = getDeptIDByFID(fid);
		mainData.setValue("sExecutorDeptID", deptID, rowId);

		var ognID = getOgnIDByFID(fid);
		mainData.setValue("sExecutorOgnID", ognID, rowId);
	}

	if (fieldName == "sExecutorFName") {
		var fid = mainData.getValue("sExecutorFID", rowId);
		var fname = mainData.getValue("sExecutorFName", rowId);
		
		var personName = getPersonNameByFName(fid, fname);
		mainData.setValue("sExecutorPersonName", personName, rowId);

		var posName = getPosNameByFName(fid, fname);
		mainData.setValue("sExecutorPosName", posName, rowId);

		
		var deptName = getDeptNameByFName(fid, fname);
		mainData.setValue("sExecutorDeptName", deptName, rowId);

		var ognName = getOgnNameByFName(fid, fname);
		mainData.setValue("sExecutorOgnName", ognName, rowId);
	}
	
	
	if (fieldName == "sStatusID") {
		var sActualStartTime = mainData.getValue("sActualStartTime", rowId);
		if (sActualStartTime == "") {
			mainData.setValue("sActualStartTime", nowDateTimeStr, rowId);
		}
	}
};
mainActivity.mainRefreshCreateParam = function(event){
	onRefreshCreateParam(event);
};
mainActivity.image1Click = function(event){
	justep.xbl("main").newData();
	mainActivity.gotoDetailTab();
	
};
mainActivity.dateSelectorChanged = function(event){
	mainActivity.setDateTimeFilter1();
};
mainActivity.input1Change = function(event){
	setLikeFilter("main", "custom_filter", "SA_WorkTask");
};
mainActivity.trigger1Click = function(event){
	justep.xbl("main").refreshData();
};
mainActivity.mainGridRowDblClick = function(event){
	mainActivity.gotoDetailTab();
};
mainActivity.WorkTaskImportanceCloseup = function(event){
	mainActivity.setImportanceName();
};
mainActivity.WorkTaskEmergencyCloseup = function(event){
	mainActivity.setEmergencyName();
};
mainActivity.WorkTaskHandleStatusCloseup = function(event){
	mainActivity.setStatusName();
};
mainActivity.detailTabSelect = function(event){
	//load_part("detail_toolbar");
	load_part("detail_form");
	setTimeout(function(){
		var data = justep.xbl("main");
		if (data.getCount()>0){
			var name = justep.xbl("WorkTaskName");
			if (name && name.input){
				name.input.focus();
				
			}	
		}
	}, 1);
};



mainActivity.trigger2Click = function(event){
	justep.xbl("main").newData();
	mainActivity.gotoDetailTab();	
};

mainActivity.mainIndexChanged = function(event){
	var creator = justep.xbl("main").getValue('sCreatorFID'),
		enable = !creator || (creator.indexOf(justep.Context.getCurrentPersonID()) != -1);
	justep.xbl("main").getOperation('delete').setEnable(enable);
};
