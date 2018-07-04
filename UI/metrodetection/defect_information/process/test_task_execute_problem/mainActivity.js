var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};


//mainActivity.iptPROBLEMIDChange = function(event){
//	var a = justep.xbl("dataMain");
//	var b = a.getValue("pROBLEMID");
//	var c = justep.xbl("bizData1");
//	c.setFilter("filter0", "PROBLEM_RESOURCE_INFO = "+ b );
//	c.refreshData();
//};


mainActivity.newItemClick = function(event){
	justep.xbl("windowDialog2").open();
};

mainActivity.windowDialog2Receive = function(event){
	var list = event.data.ID;
	var b = justep.xbl("dataMain");
	b.setValue("pROBLEMID", list);
	var c =justep.xbl("bizData1");
	c.setFilter("filter0", "PROBLEM_RESOURCE_INFO="+list);
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

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.windowDialog2Close = function(event){
	var ii = document.getElementById('saveMas');
	ii.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(false);
};

mainActivity.gridSelect2Closeup = function(event){
	var bizData =justep.xbl("bizData1");
	var bizData7 =justep.xbl("bizData9");
	var c = bizData.getValue("MANUFACTURE_ID");
	if(typeof c=="number" ){
	bizData7.setFilter("filter0", "AFC_MANUFACTURER_INFO ="+c);
	bizData7.refreshData();
	var type = bizData7.getValue("mANUFACTURETYPE", c);
	bizData.setValue("mANUFACTURETYPE",type,bizData.getCurrentId());
	}
};

mainActivity.gridSelect3Closeup = function(event){
	var bizData1 =justep.xbl("bizData2");
	var bizData2 =justep.xbl("bizData3");
	var aPPLYFOROBJECT = bizData1.getValue("DETECTION_OBJECT_TYPE");
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "+ aPPLYFOROBJECT);
	bizData2.refreshData();
	}
};

mainActivity.gridSelect5Closeup = function(event){
	var bizData1 =justep.xbl("bizData4");
	var bizData2 =justep.xbl("bizData5");
	var aPPLYFOROBJECT = bizData1.getCurrentID();
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "DETECTION_RANGE_CODE.dETECTIONRANGETYPE = "+ aPPLYFOROBJECT);
	bizData2.refreshData();
	}
};

mainActivity.gridSelect7Closeup = function(event){
	var bizData3 =justep.xbl("bizData6");
	var bizData2 =justep.xbl("bizData8");
	var aPPLYFOROBJECT = bizData3.getValue("PROBLEM_PRIOR_CODE");
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "PROBLEM_TYPE_CODE.pROBLEMPRIOR = "+ aPPLYFOROBJECT);
	bizData2.refreshData();
	}
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
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.windowDialog3Close = function(event){
	var ii = document.getElementById('saveMas');
	ii.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(false);
	justep.xbl("bizData1").refreshData();
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
mainActivity.windowDialog4Receive = function(event){
	var list = event.data.ID;
	var b = justep.xbl("dataMain");
	var c = justep.xbl("bizData1");
	b.setValue("pROBLEMID",list);
	c.setFilter("filter0", "PROBLEM_RESOURCE_INFO="+list);
	c.refreshData();
};

mainActivity.trigger2Click = function(event){
	var a = document.getElementById('input1').value;
	var d =justep.xbl("dataMain").getCurrentID();
	justep.xbl("windowDialog4").open({
	a:a,
	d:d
	});
};


/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.windowDialog4Close = function(event){
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
	var b = a.getValue("pROBLEMID");
	var c = justep.xbl("bizData1");
	c.setFilter("filter0", "PROBLEM_RESOURCE_INFO = "+ b );
	c.refreshData();
};
