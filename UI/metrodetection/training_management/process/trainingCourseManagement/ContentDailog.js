var ContentDailog = {};
ContentDailog._inputParams = {
		list : null
};
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
ContentDailog.windowReceiverReceive = function(event){
debugger;
	ContentDailog._inputParams.list = event.data.list;
	var main = justep.xbl("main");
	var count = main.getCount();
	for(var i=0;i<count;i++){
		var mainId = main.getRowId(i);
		main.setValue("ch",0,mainId);
		justep.MultiList.removeRow(mainId);
		for(var j=0;j<ContentDailog._inputParams.list.length;j++){
			var id = ContentDailog._inputParams.list[j];
			if(id == mainId){
				main.setValue("ch",1,mainId);
				checkRow(mainId, "1");
				break;
			}
		}
	}		
};
