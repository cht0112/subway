var mainActivity = {};

/**
	name:bizData#onCreate
	description: <b>[回调型事件]</b>组件创建时
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
mainActivity.gridSelect2Dropdown = function(event){
	var data1 = justep.xbl("bizData1");
	data1.setFilter("filter0", "SYSTEM_TYPE_CODE>1");
	data1.refreshData();
};
