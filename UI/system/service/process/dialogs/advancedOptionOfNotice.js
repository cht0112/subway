var advancedOptionOfNotice = {};

/**********************************************************************************
对话框入口
	入参格式
	{
		noticeItem: justep.ProcessControl.Item
	}
***********************************************************************************/
advancedOptionOfNotice.inputData = null;
advancedOptionOfNotice.windowReceiverReceive = function(event){
	advancedOptionOfNotice.inputData = event.data;
	
	var item = advancedOptionOfNotice.inputData.noticeItem; 
	
	var dMain = justep.xbl("dMain");
	dMain.setValue("sName", item.getTaskRelationValue("sName"));
};

advancedOptionOfNotice.btnCancelClick = function(event){
	justep.xbl("windowReceiver").windowCancel();
};

advancedOptionOfNotice.btnOkClick = function(event){
	xforms.blur(true);
	
	var dMain = justep.xbl("dMain");

	var item = advancedOptionOfNotice.inputData.noticeItem; 
	item.setTaskRelationValue("sName", dMain.getValue("sName"));
	justep.xbl("windowReceiver").windowEnsure(advancedOptionOfNotice.inputData);
};
