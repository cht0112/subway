var detailData2 = {};

detailData2.model1XBLLoaded = function(event){
	
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
detailData2.windowReceiver1Receive = function(event){
	var data = justep.xbl("bizData1");
	var templateID = event.data ? event.data.templateID : "";
	data.setFilter("customFilter", "SA_ProcessTemplate='" + templateID + "'");
	
	data.refreshData();
	if(data.getCount() == 0){
		data.newData();
	}
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
detailData2.windowReceiver2Receive = function(event){
	var id = event.data.id;
	var data = justep.xbl("bizData1");
	if ((id!=undefined) && (id!=null)){
		data.setFilter("__custom__", "SA_ProcessTemplate='" + id + "'");
		data.refreshData();
		if (data.getCount() != 1){
			alert("流程模板“" + id + "“不存在！");
		}
	}else{
		data.clear();
		data.newData();
	}
};
