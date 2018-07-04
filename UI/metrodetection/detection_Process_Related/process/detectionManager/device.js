var device = {};
device._inputParams = {
	openMode : null,
	applicationNo : null,
	rowID : null,
	// contractCode : null,
	deviceType : null,
	aSSIGNEDMANUFACTUREID : null
};

device.windowReceiverReceive = function(event) {
	device._inputParams.openMode = event.data.openMode;
	if (event.data.applicationNo)
		device._inputParams.applicationNo = event.data.applicationNo;
	if (event.data.rowID)
		device._inputParams.rowID = event.data.rowID;
	// if (event.data.contractCode)
	// device._inputParams.contractCode = event.data.contractCode;
	if (event.data.deviceType)
		device._inputParams.deviceType = event.data.deviceType;
	if (event.data.manufacture_id)
		device._inputParams.aSSIGNEDMANUFACTUREID = event.data.manufacture_id;
	if (device._inputParams.openMode == 'new') {
		var bizData1 = justep.xbl("bizData1");
		var bizData2 = justep.xbl("bizData2");
		bizData1.newData();
		var projectData = justep.xbl("projectData");
		projectData.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATION = "
				+ device._inputParams.applicationNo);
		projectData.refreshData();
		var projectId = projectData.getCurrentID();
		var manufactureId = projectData.getValue("mANUFACTUREID", projectId);
		var bizData1 = justep.xbl("bizData1");
		var id = bizData1.getCurrentID();
		bizData1.setValue("aPPLICATIONNO", device._inputParams.applicationNo);
		// bizData1.setValue("pROJECTID",projectId,id);
		bizData1.setValue("mANUFACTUREID",
				device._inputParams.aSSIGNEDMANUFACTUREID);
		bizData1.setValue("dEVICETYPE", device._inputParams.deviceType);
	} else {
		var bizData1 = justep.xbl("bizData1");
		var bizData2 = justep.xbl("bizData2");
		bizData1.setFilter("filter0", "SAMPLE_DEVICE_INFO = "
				+ device._inputParams.rowID);
		bizData1.refreshData();
		bizData2.refreshData();
	}
};

device.inputbutton1Click = function(event) {
	var bizData1 = justep.xbl("bizData1");
	var bizData2 = justep.xbl("bizData2");
	bizData1.saveData();
	bizData2.saveData();
	justep.windowReceiver.windowCancel();
};

device.model1XBLLoaded = function(event) {
	$(justep.xbl("dEVICEID").input).attr("maxlength", 8);
	$(justep.xbl("dEVICESTYLE").input).attr("maxlength", 200);
	$(justep.xbl("sOFTWAREVERSION").input).attr("maxlength", 10);
	$(justep.xbl("hARDWAREVERSION").input).attr("maxlength", 10);
	$(justep.xbl('textarea1').input).bind('keydown', function(evt) {
		if (this.value.length >= 1000) {
			return false;
		}
	});
	var i = document.getElementById('saveMas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
};
device.saveMore = function(event){
	var cc = justep.xbl("bizData1");
	var biz = justep.xbl("bizData2");
	var aa =justep.xbl("bizData3");
//	var id = biz.getCurrentID();
//	var q = cc.getCurrentID();
//	var d = biz.getValue("sAMPLEDEVICENO");
//	var a = biz.getValue("mODELNAME");
//	aa.setFilter("filter0","SAMPLE_DEVICE_HARDWARE_INFO = '"+id+"'" )
//	aa.refreshData();
	biz.saveData();
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);

};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
device.bizData2ValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};

device.grid2_mODELNAMEEditDone = function(event){
	var cc = justep.xbl("bizData1");
	var biz = justep.xbl("bizData2");
	var aa =justep.xbl("bizData3");
	var id = biz.getCurrentID();
	var q = cc.getCurrentID();
	var d = biz.getValue("sAMPLEDEVICENO");
	var a = biz.getValue("mODELNAME");
	aa.setFilter("filter2","SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO ="+q);
	aa.refreshData();
	aa.setFilter("filter0","SAMPLE_DEVICE_HARDWARE_INFO.mODELNAME = '"+a+"'" );
	aa.refreshData();
	var b = aa.getCount();
	if(b!=0){
	alert("模块名称已经存在！");
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
	}
};
