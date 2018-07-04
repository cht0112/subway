var mainActivity = {};
function onload(event){
	try {
		document.getElementById('taOpinion').getElementsByTagName('TextArea')[0].focus();
	} catch(e) {};
}
mainActivity.model1Load = function(event){
	try {
		document.getElementById('taOpinion').getElementsByTagName('TextArea')[0].focus();
	} catch(e) {};
	
};
acceptParentParamsFun = "acceptData";

var dataModel;
var executeConcept;

var verdictDisplayed;
var opinionRequired;
var advanceEnabled;
var backEnabled;
var transferEnabled;
var abortEnabled;

var bizID;
var taskID;
var processEngine;

function acceptData(eventData) {
	dataModel = eventData.dataModel;
	executeConcept = eventData.executeConcept;

	verdictDisplayed = eventData.verdictDisplayed;
	opinionRequired = eventData.opinionRequired;
	advanceEnabled = eventData.advanceEnabled;
	backEnabled = eventData.backEnabled;
	transferEnabled = eventData.transferEnabled;
	abortEnabled = eventData.abortEnabled;

	bizID = eventData.bizID;
	taskID = eventData.taskID;
	processEngine = eventData.processEngine;

	var executeReturnData = appCommon.ProcessExecute.getCurrentExecuteData(dataModel, executeConcept,
			bizID, taskID);

	var dExecute = justep.xbl("dExecute");
	if (executeReturnData) {
		dExecute.setValue("fExecuteID", executeReturnData.getRowId(0));
		dExecute.setValue("fOpinion", executeReturnData.getValueByName('fOpinion', 0));
		dExecute.setValue("fVerdict", executeReturnData.getValueByName('fVerdict', 0));
	} else {
		dExecute.setValue("fExecuteID", "");
		dExecute.setValue("fOpinion", "");
		dExecute.setValue("fVerdict", "");
	}
	dExecute.getStore().clsAllChangedState();
	
	initComponentsState();
}

function initComponentsState() {
	document.getElementById("rdVerdict").style.display = verdictDisplayed ? "" : "none";
	document.getElementById("trgAdvance").style.display = advanceEnabled ? "" : "none";
	document.getElementById("trgBack").style.display = backEnabled ? "" : "none";
	document.getElementById("trgTransfer").style.display = transferEnabled ? "" : "none";
	document.getElementById("trgAbort").style.display = abortEnabled ? "" : "none";
}

function doSetCurrentExecuteData() {
	var dExecute = justep.xbl("dExecute");

	if (verdictDisplayed && dExecute.getValue("fVerdict").trim() == "") {
		alert("必须选择[同意]或[不同意]");
		return;
	}
	if (opinionRequired && dExecute.getValue("fOpinion").trim() == "") {
		alert("必须填写处理内容");
		return;
	}

	var executeReturnData = appCommon.ProcessExecute.setCurrentExecuteData(
			dataModel, executeConcept, bizID, taskID, dExecute.getValue("fExecuteID"),
			dExecute.getValue("fOpinion"), dExecute.getValue("fVerdict"));
	dExecute.getStore().clsAllChangedState();
	return executeReturnData;
}

function trgCloseDOMActivate(event){
	var executeReturnData = doSetCurrentExecuteData(); 
	if (executeReturnData)
		windowEnsure(executeReturnData);
}

function trgAdvanceDOMActivate(event) {
	var executeReturnData = doSetCurrentExecuteData(); 
	if (executeReturnData) {
		windowEnsure(executeReturnData);
		processEngine.advanceQuery();
	}
}

function trgBackDOMActivate(event) {
	var executeReturnData = doSetCurrentExecuteData(); 
	if (executeReturnData) {
		windowEnsure(executeReturnData);
		processEngine.backQuery();
	}
}

function trgTransferDOMActivate(event) {
	var executeReturnData = doSetCurrentExecuteData(); 
	if (executeReturnData) {
		windowEnsure(executeReturnData);
		processEngine.transferQuery();
	}
}

function trgAbortDOMActivate(event) {
	var executeReturnData = doSetCurrentExecuteData(); 
	if (executeReturnData) {
		windowEnsure(executeReturnData);
		processEngine.abortQuery();
	}
}

mainActivity.btnSelectCommonWordsClick = function(event){
	justep.xbl("dlgCommonWords").open();
};

mainActivity.dlgCommonWordsReceive = function(event){
	var dExecute = justep.xbl("dExecute");
	dExecute.setValue("fOpinion", event.data.commonWords);
};




