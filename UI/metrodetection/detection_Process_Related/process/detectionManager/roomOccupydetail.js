var roomOccupydetail = {};

var roomId ="";
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
roomOccupydetail.roomWRReceive = function(event){
	roomId = event.data.roomId;
	var roomOccupyD = justep.xbl("roomOccupyD");
	roomOccupyD.setFilter("filterRoom","roi='"+roomId+"'");
	roomOccupyD.refreshData();
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
roomOccupydetail.roomOccupyDAfterRefresh = function(event){
	var scode = justep.Context.getCurrentPersonCode();
	var name = justep.Context.getCurrentPersonName();
	//alert(scode);
	var hrBaseD = justep.xbl("hrBaseD");
	hrBaseD.setFilter("filterHr", "HR_BASE_INFO.Scode='"+scode+"'");
	hrBaseD.refreshData();
	//alert(hrBaseD.getCount());
	var operId = hrBaseD.getCurrentID();
	//alert(operId);
	var roomOccupyD = justep.xbl("roomOccupyD");
	roomOccupyD.setValue("tECHMANAGER",operId);
	roomOccupyD.setValue("oPERATORNAME",name);
};
