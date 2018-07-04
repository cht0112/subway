	var bizActivity2 = {};

bizActivity2.tabPage1_1Select = function(event){
	alert("11");
	var cData = justep.xbl("cData");
	var c = cData.getCount();
	if(c == 0) {
		cData.newData();
	}
	cData.setValue("aPPLICATIONTYPE",2);
	var applicationType = justep.xbl("applicationType");
	applicationType.loadData();
	cData.setValue("aPPLICATIONNO",justep.Context.getProcessData1());
};

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
bizActivity2.grid2_2RowClick = function(event){
	//alert(0);
	//var wl = justep.xbl("siteInfo");
	//wl.open();
};



/**
	name:windowDialog#onSend
	@event {"source":组件的js对象,"data":数据}
description: <b>[回调型事件]</b> 向对话框传递数据，该事件函数的返回值将传递给对话框
*/
bizActivity2.siteInfoSend = function(event){
	event.data.roomId = justep.xbl("cData").getValue("aPPLICATIONNO");
	return event.data;
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
bizActivity2.siteInfoReceive = function(event){
	event.data.roomId = justep.xbl("cData").getValue("aPPLICATIONNO");
};

bizActivity2.queryBtnClick = function(event){
	var tt = justep.xbl("testSelect");
	var ot = $(tt).attr("value");
//	alert(ot);
	
	
	var param = new justep.Request.ActionParam();
	param.setInteger("ot", ot);
	
	var dis = justep.xbl("qData");
	dis.setFilter("filter0", "ROOM_APPLY_INFO.aPPLYFOROBJECT="+ot);
	dis.refreshData();
	//var res = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess","bizActivity2", "testAction", param);
	//dis.loadXML(res.responseXML, null, false, true);
	//alert(justep.XML.toString(res.responseXML));
};

bizActivity2.gridSelect1_5Dropdown = function(event){
	var tt = justep.xbl("applicationType");
	tt.loadData();
};


bizActivity2.selRoomClick = function(event){
	var tt = justep.xbl("queryRoomSel");
	var ot = $(tt).attr("value");
	alert(ot);
	var dis = justep.xbl("qData");
	dis.setFilter("filter0", "ROOM_APPLY_INFO.aPPLYFOROBJECT="+ot);
	dis.refreshData();
};

bizActivity2.trigger1_1Click = function(event){
	var sel = justep.xbl("tempData").instance.getValueByName("name");
	var rts = justep.xbl("roomType").instance.getValueByName("tName");
	
	var qData = justep.xbl("qData");
	
	if(sel != null && sel != '') {
		if(rts != null && rts != '') {
			qData.setFilter("filter0", "ROOM_APPLY_INFO.aPPLYFOROBJECT="+sel+" and ROOM_TYPE_CODE="+rts);
		} else {
			qData.setFilter("filter0", "ROOM_APPLY_INFO.aPPLYFOROBJECT="+sel);
		}
	} else {
		if(rts != null && rts != '') {
			qData.setFilter("filter0", "ROOM_TYPE_CODE="+rts);
		} else {
			qData.setFilter("filter0", "");
		}
	}
	qData.refreshData();
	//var vl = sel.instance.getValue("");
};

bizActivity2.trigger1_2Click = function(event){
	var p1 = justep.xbl("tempData").instance.getValueByName("val");
	var pData = justep.xbl("pData");
	if(p1 != '' && p1 != null) {
		pData.setFilter("filter0", "HR_SKILL_INFO.aPPLYFOROBJECT="+p1);
	} else {
		pData.setFilter("filter0", "");
	}
	pData.refreshData();
};

bizActivity2.tabPage2_7Select = function(event){
	//获取检测对象类型
	//alert("12");
	var grid = justep.xbl("dataMain");
	//grid.loadData();
	var dETECTIONOBJECTTYPE = grid.getValue("dETECTIONOBJECTTYPE");
	
	var pData = justep.xbl("pData");
	pData.setFilter("filterTime", "HR_OCCUPY_INFO.oCCUPYENDDATETIME > :currentDateTime()");
//	pData.setFilter("filter0", "HR_SKILL_INFO.aPPLYFOROBJECT="+dETECTIONOBJECTTYPE);
	pData.refreshData();
	pData.loadData();
};

/**
	name:grid#onInit
	description: 表格初始化时
	@param event 事件属性:<br/>{"source":XFGrid对象,"grid":dhtmlxGrid对象}
*/
bizActivity2.grid1_8Init = function(event){
	var grid = justep.xbl("dataMain");
	var dETECTIONOBJECTTYPE = grid.getValue("dETECTIONOBJECTTYPE");
	
//	var tempData = justep.xbl("tempData");
//	tempData.setValue("name",dETECTIONOBJECTTYPE);
	var qData = justep.xbl("qData");
	if(dETECTIONOBJECTTYPE!=""){
		qData.setFilter("filter0", "ROOM_APPLY_INFO.aPPLYFOROBJECT="+dETECTIONOBJECTTYPE);
		qData.refreshData();
	}
};




bizActivity2.trigger1_5Click = function(event){
	var sel = justep.xbl("tempData").instance.getValueByName("name");
	var rts = justep.xbl("roomType").instance.getValueByName("tName");
	justep.xbl("roomScheduleDialog").open({
		sel : sel,
		rts : rts
	});
};

bizActivity2.trigger1_4Click = function(event){
	var person = justep.xbl("tempData").instance.getValueByName("val");
	justep.xbl("hrScheduleDialog").open({
		person : person
	});
};

bizActivity2.mdDefaultXBLLoaded = function(event){
	var checkRecordData = justep.xbl("cData");
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="+justep.Context.getProcessData1());
	checkRecordData.refreshData();
	var c = checkRecordData.getCount();
	if(c == 0) {
		checkRecordData.newData();
		checkRecordData.setValue("aPPLICATIONNO",justep.Context.getProcessData1());	
		checkRecordData.setValue("aPPLICATIONTYPE",2);
		checkRecordData.setValue("cHECKRESULT", 1);
	}
	
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	//alert(perId);
	checkRecordData.setValue("cHECKER",perId);
	$(justep.xbl('textarea2_9').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('textarea1_9').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
//	justep.xbl("textarea2_9").input.focus();
	var qData = justep.xbl("qData");
	qData.setFilter("filter0", "DETECTION_ROOM_INFO.rOOMTYPE="+2);
	qData.refreshData();
};

bizActivity2.testSelect = function(event){
//	justep.xbl("textarea2_9").input.focus();	
};

/**
	name:process#onBeforeAdvance
	description: <b>[回调型事件]</b>流转之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
bizActivity2.flwBeforeAdvance = function(data){
	var cData = justep.xbl("cData");
	cData.saveData();
};

bizActivity2.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
};
