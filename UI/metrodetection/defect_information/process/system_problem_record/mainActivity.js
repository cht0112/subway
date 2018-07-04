	var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivity.iptSystem_problem_noChange = function(event){
	var a = justep.xbl("dataMain");
	var b = a.getValue("error_id");
	var c = justep.xbl("bizData1");
	c.setFilter("filter0", "SYSTEM_RESOURCE_INFO = "+ b );
	c.refreshData();
};

mainActivity.newInsertClick = function(event){
	justep.xbl("windowDialog1").open();
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
mainActivity.windowDialog1Receive = function(event){
	var list = event.data.ID;
	var b = justep.xbl("dataMain");
	b.setValue("error_id", list);
	var c =justep.xbl("bizData1");
	c.setFilter("filter0", "SYSTEM_RESOURCE_INFO="+list);
	c.refreshData();
	b.saveData();
};

mainActivity.saveMore = function(event){
	justep.xbl("dataMain").saveData();
	justep.xbl("bizData1").saveData();
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.windowDialog1Close = function(event){
	var ii = document.getElementById('saveMas');
	ii.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(false);
	justep.xbl("bizData1").refreshData();
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMainValueChanged = function(event){
	var ii = document.getElementById('saveMas');
	ii.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(false);
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.bizData1ValueChanged = function(event){
	var ii = document.getElementById('saveMas');
	ii.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(false);
};

mainActivity.tabDetailSelect = function(event){
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
mainActivity.windowDialog2Receive = function(event){
	var list = event.data.ID;
//	alert(list);
	var b = justep.xbl("dataMain");
	var c = justep.xbl("bizData1");
	b.setValue("error_id",list);
	c.setFilter("filter0", "SYSTEM_RESOURCE_INFO = "+ list );
	c.refreshData();
//	var aa =event.data.CD;
//	b.setValue("error_id",aa);
//	c.setFilter("filter0", "SYSTEM_RESOURCE_INFO = "+aa );
//	c.refreshData();
};

mainActivity.trigger2Click = function(event){
	var a = document.getElementById('input2').value;
	var d = justep.xbl("dataMain").getCurrentID();
	justep.xbl("windowDialog2").open({
	a:a,
	d:d
	});
};


/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.windowDialog2Close = function(event){
	justep.xbl("dataMain").saveData();
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
};

/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
mainActivity.dataMainIndexChanged = function(event){
	var a = justep.xbl("dataMain");
	var b = a.getValue("error_id");
	var c = justep.xbl("bizData1");
	c.setFilter("filter0", "SYSTEM_RESOURCE_INFO = "+ b );
	c.refreshData();
};
