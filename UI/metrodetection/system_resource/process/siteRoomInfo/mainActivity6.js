var mainActivity6 = {};
mainActivity6._inputParams = {
	fid : null
};
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
mainActivity6.windowReceiverReceive = function(event){
	if (event.data.fid)
		mainActivity6._inputParams.fid = event.data.fid;
		var bizData1 = justep.xbl("bizData1");
		bizData1.setFilter("filter0", "ROOM_APPLY_INFO = '"
				+ mainActivity6._inputParams.fid + "'");
				var d = justep.xbl("bizData1");
				window.setTimeout(function(){
      $('#img-blobImage1').css("width","");
      $('#img-blobImage1').css("height","");
      },400);
		bizData1.refreshData();
};

mainActivity6.inputbutton1Click = function(event){
	var projectDat = justep.xbl("bizData1");
	projectDat.saveData();
	justep.windowReceiver.windowCancel();	
};

