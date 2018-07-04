var DialogActivity = {};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
DialogActivity.windowReceiverReceive = function(event){
	var projectData = justep.xbl("bizData1");
		projectData.newData();
};


DialogActivity.inputbutton1Click = function(event){
	var projectDat = justep.xbl("bizData1");
	projectDat.saveData();
	var ID = projectDat.getCurrentID();
	justep.windowReceiver.windowEnsure({
		ID:ID
	},true);
		justep.windowReceiver.windowCancel();
};


