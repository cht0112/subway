function orgDlgReceiveDept(event) {

	var orgInfos = event.data.store;

	var data = justep.xbl('dSchedule');

	data.setValue("fExecutors", orgInfos.getValueByName("sName", 0));
}
function orgDlgSendDept(event) {
	var eData = justep.xbl('dExecutor');
	var selectedPersonIDs = [];
	for ( var i = 0; i < eData.getCount(); i++) {
		selectedPersonIDs[i] = eData.getValue("fExecutorID", eData.getRowId(i));
	}
	var data = {
		"rootFilter" : "sParent is null",
		"fixedFilter" : "1=1",
		"manageTypeCodes" : "",
		"displayableOrgKinds" : "ogn,dpt,pos,psm",
		"selectableOrgKinds" : "psm",
		"onlyMainPsm" : true,
		"selectedPersonIDs" : selectedPersonIDs
	};
	return data;
}
function dlgExecutorReceive(event) {
	var eData = justep.xbl('dExecutor');
	var idStr = "";
	for ( var i = 0; i < eData.getCount(); i++) {
		idStr += eData.getRowId(i) + ",";
	}
	if (idStr != "") {
		idStr = idStr.substring(0, idStr.length - 1);
	}
	eData.deleteData(idStr);
	var sNames = "";
	var sPersonIDs = "";
	var plannames = event.data;
	for ( var i = 0; i < plannames.getRowsNum(); i++) {
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		sNames += sName + ",";
		sPersonIDs += sPersonId + ",";
		eData.newData();
		eData.instance.setValueByName('fExecutorName', sName);
		eData.instance.setValueByName('fExecutorID', sPersonId);
	}
	if (sNames != "") {
		sNames = sNames.substring(0, sNames.length - 1);
	}
	justep.xbl("dSchedule").setValue("fExecutors", sNames);
}
acceptParentParamsFun = "acceptData";
function triCancelDOMActivate(event) {
	windowCancel();
}
function triRefreshDOMActivate(event) {
	windowRefresh();
}
function triEnsureDOMActivate(event) {
	var data = justep.xbl("dSchedule");
	var isRightTime = isValidScheduleDateTime();
	if (!isRightTime)
		return;
	data.setValue("fBeginTime", concatDateAndTime(data
			.getValue("fBeginDatePart"), data.getValue("fBeginTimePart")));
	data.setValue("fEndTime", concatDateAndTime(data.getValue("fEndDatePart"),
			data.getValue("fEndTimePart")));
	if (data.saveData()) {
		var rowid = data.getRowId();
		windowEnsure(rowid);
	}
}

function concatDateAndTime(datePartValue, timePartValue) {
	if (datePartValue == "" || timePartValue == "")
		return "";
	var dateAndTime = datePartValue + 'T' + timePartValue + ':00.000Z';
	return dateAndTime;
}

// 选人对框
function addExecutors() {
	var dlgExec = justep.xbl("dlgExecutor");

	var orgInfoDlg = justep.xbl("orgDlgSingleDept");
	if (orgInfoDlg) {

		orgInfoDlg.initEveryTimes = true;
		orgInfoDlg.open();
	}

}

function acceptData(data) {
	var fID = data.scheduleID;
	var operator = data.operator;
	var executor = data.executor;
	var executorID = data.executorID;
	var dataSchedule = justep.xbl('dSchedule');
	if (operator == 'new') {
		dataSchedule.newData();
		if (executor != "") {
			dataSchedule.setValue("fExecutors", executor);
			var eData = justep.xbl('dExecutor');
			eData.newData();
			eData.setValue('fExecutorID', executorID);
			eData.setValue('fExecutorName', executor);
		}
	} else {
		dataSchedule.filters.setFilter("scheduleFilter", "OA_SD_Schedule ='"
				+ fID + "'");
		dataSchedule.refreshData();
	}
}

function fEndTimePartCloseup(event) {
	isValidScheduleDateTime();
}

function isValidScheduleDateTime() {
	var instance = justep.xbl("dSchedule");
	var fBeginDatePart = instance.getValue("fBeginDatePart");
	var fBeginTimePart = instance.getValue("fBeginTimePart");
	var fEndDatePart = instance.getValue("fEndDatePart");
	var fEndTimePart = instance.getValue("fEndTimePart");
	if (fBeginDatePart > fEndDatePart) {
		alert("开始日期必须小于结束日期");
		return false;
	} else if (fBeginDatePart == fEndDatePart) {
		if (fBeginTimePart >= fEndTimePart) {
			alert("开始时间必须小于结束时间");
			return false;
		}
	}
	return true;
}
function dlgExecutorSend() {
	var data = new SimpleStore('mySimpleStoreas', 'sName,sPersonID');
	var para = new justep.CommonChoosePara('sName,sPersonID', data);
	data.loadData(null);
	return para;
}