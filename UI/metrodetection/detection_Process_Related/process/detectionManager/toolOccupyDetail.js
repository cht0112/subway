var toolOccupyDetail = {};

var toolId ="";
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
toolOccupyDetail.toolWRReceive = function(event){
	toolId = event.data.toolId;
	var toolOccupyD = justep.xbl("toolOccupyD");
	toolOccupyD.setFilter("filterRoom","TOOL_OCCUPY_INFO='"+toolId+"'");
	toolOccupyD.refreshData();
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
toolOccupyDetail.toolOccupyDAfterRefresh = function(event){
	var scode = justep.Context.getCurrentPersonCode();
	var name = justep.Context.getCurrentPersonName();
	var hrBaseD = justep.xbl("hrBaseD");
	hrBaseD.setFilter("filterHr", "HR_BASE_INFO.Scode='"+scode+"'");
	hrBaseD.refreshData();
	var operId = hrBaseD.getCurrentID();
	var toolOccupyD = justep.xbl("toolOccupyD");
	toolOccupyD.setValue("tECHMANAGER",operId);
	toolOccupyD.setValue("oPERATORNAME",name);
};
