var mainActivity8 = {};
mainActivity8._inputParams = {
	fid : null
	};

mainActivity8.inputbutton1Click = function(event){
	var projectDat = justep.xbl("bizData1");
	projectDat.saveData();
	justep.windowReceiver.windowCancel();
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
mainActivity8.windowReceiverReceive = function(event){
	if (event.data.fid)
		mainActivity8._inputParams.fid = event.data.fid;
		var bizData1 = justep.xbl("bizData1");
		bizData1.setFilter("filter0", "DETECTION_ROOM_INFO = "
				+ mainActivity8._inputParams.fid + "");
				window.setTimeout(function(){
      $('#img-blobImage1').css("width","");
      $('#img-blobImage1').css("height","");
      },400);
		bizData1.refreshData();
};	

