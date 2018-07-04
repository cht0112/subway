var hrOccupyDialog = {};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
hrOccupyDialog.windowReceiverReceive = function(event){
	var hrOccupyInfoData = justep.xbl("hrOccupyInfoData");
	hrOccupyInfoData.newData();
};


hrOccupyDialog.inputbutton1Click = function(event){
	var hrOccupyInfoData = justep.xbl("hrOccupyInfoData");
	hrOccupyInfoData.saveData();
}; 
