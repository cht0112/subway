var advancedOptionOfTo = {};

/**********************************************************************************
对话框入口
	入参格式
	{
		toItem: justep.ProcessControl.Item
	}
***********************************************************************************/
advancedOptionOfTo.inputData = null;
advancedOptionOfTo.windowReceiverReceive = function(event){
	advancedOptionOfTo.inputData = event.data;
	
	var item = advancedOptionOfTo.inputData.toItem; 
	var action = advancedOptionOfTo.inputData.action;
	
	if (action == "backQuery") {
		$("#viewBack").show();
		$("#viewAdvance").hide();
	} else {
		$("#viewBack").hide();
		$("#viewAdvance").show();
	}
	
	var dMain = justep.xbl("dMain");
	dMain.setValue("sName", item.getTaskRelationValue("sName"));
	dMain.setValue("sExecuteMode", item.getTaskRelationValue("sExecuteMode"));
	dMain.setValue("sExecuteModeLabel", advancedOptionOfTo.getExecuteModeLabel(item.getTaskRelationValue("sExecuteMode")));
	dMain.setValue("sPreemptMode", item.getTaskRelationValue("sPreemptMode"));
	dMain.setValue("sPreemptModeLabel", advancedOptionOfTo.getPreemptModeLabel(item.getTaskRelationValue("sPreemptMode")));
	dMain.setValue("sExecuteMode2", item.getTaskRelationValue("sExecuteMode2"));
	dMain.setValue("sExecuteMode2Label", advancedOptionOfTo.getExecuteMode2Label(item.getTaskRelationValue("sExecuteMode2")));
};

advancedOptionOfTo.getExecuteModeLabel = function(executeMode) {
	if (executeMode == "temSequential") {
		return "顺序";
	} else if (executeMode == "temSimultaneous") {
		return "同时";
	} else if (executeMode == "temPreempt" || !executeMode) {
		return "抢占";
	}
	return null;
};

advancedOptionOfTo.getExecuteMode2Label = function(executeMode2) {
	if (executeMode2 == "flowToFront") {
		return "原路返回";
	} else if (executeMode2 == "flowToFrontOrAgain") {
		return "原路返回或重新流转";
	} else if (executeMode2 == "flowToAgain" || !executeMode2) {
		return "重新流转";
	}
	return null;
};

advancedOptionOfTo.getPreemptModeLabel = function(preemptMode) {
	if (preemptMode == "tpmExecute") {
		return "执行时抢占";
	} else if (preemptMode == "tpmOpen" || !preemptMode) {
		return "打开时抢占";
	}  
	return null;
};

advancedOptionOfTo.btnCancelClick = function(event){
	justep.xbl("windowReceiver").windowCancel();
};

advancedOptionOfTo.btnOkClick = function(event){
	xforms.blur(true);
	
	var dMain = justep.xbl("dMain");

	var item = advancedOptionOfTo.inputData.toItem; 
	item.setTaskRelationValue("sName", dMain.getValue("sName"));
	item.setTaskRelationValue("sExecuteMode", dMain.getValue("sExecuteMode"));
	item.setTaskRelationValue("sPreemptMode", dMain.getValue("sPreemptMode"));
	item.setTaskRelationValue("sExecuteMode2", dMain.getValue("sExecuteMode2"));
	justep.xbl("windowReceiver").windowEnsure(advancedOptionOfTo.inputData);
};
