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
	
	var dMain = justep.xbl("dMain");
	dMain.setValue("sName", item.getTaskRelationValue("sName"));
	dMain.setValue("sExecuteMode", item.getTaskRelationValue("sExecuteMode"));
	dMain.setValue("sExecuteModeLabel", advancedOptionOfTo.getExecuteModeLabel(item.getTaskRelationValue("sExecuteMode")));
	dMain.setValue("sPreemptMode", item.getTaskRelationValue("sPreemptMode"));
	dMain.setValue("sPreemptModeLabel", advancedOptionOfTo.getPreemptModeLabel(item.getTaskRelationValue("sPreemptMode")));
	//新增的字段
	var sCreateTime = item.getTaskRelationValue("sCreateTime");
	//alert(item.getTaskRelationValue("sCreateTime"));
	var sLimitTime = item.getTaskRelationValue("sLimitTime");
	var sWarningTime = item.getTaskRelationValue("sWarningTime");
	if(sCreateTime != null) {
		dMain.setValue("sCreateTime", sCreateTime);
	} else {
		dMain.setValue("sCreateTime",justep.System.datetimeString());
	}
	if(sLimitTime != null) {
		dMain.setValue("sLimitTime", sLimitTime);
	} else {
		dMain.setValue("sLimitTime","");
	}
	if(sWarningTime != null) {
		dMain.setValue("sWarningTime", sWarningTime);
	} else {
		dMain.setValue("sWarningTime","");
	}
};

advancedOptionOfTo.getExecuteModeLabel = function(executeMode) {
	if (executeMode == "temSequential") {
		return "顺序";
	} else if (executeMode == "temPreempt") {
		return "抢占";
	} else if (executeMode == "temSimultaneous") {
		return "同时";
	}
	return null;
};

advancedOptionOfTo.getPreemptModeLabel = function(preemptMode) {
	if (preemptMode == "tpmOpen") {
		return "打开时抢占";
	} else if (preemptMode == "tpmExecute") {
		return "执行时抢占";
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
	//新增字段
	item.setTaskRelationValue("sCreateTime", dMain.getValue("sCreateTime"));
	item.setTaskRelationValue("sLimitTime", dMain.getValue("sLimitTime"));
	item.setTaskRelationValue("sWarningTime", dMain.getValue("sWarningTime"));
	justep.xbl("windowReceiver").windowEnsure(advancedOptionOfTo.inputData);
};
