var yijiao = {};
yijiao._inputParams = {
	id : null,
	fId : null
};
var proIdzf,deviceIdzf,deviceNOzf,operIdzf;

/**
 * name:windowReceiver#onReceive
 * 
 * @event description: <b>[回调型事件]</b> window接收对话框传入的数据
 * @param event
 *            {"source":组件的js对象,"data":传入的数据}
 */
yijiao.windowReceiverReceive = function(event) {
	debugger;
	yijiao._inputParams.id = event.data.id;
	yijiao._inputParams.fId = event.data.fId;
	var dataMaster = justep.xbl("dataMaster");
	var lvliData = justep.xbl("lvliData");
	lvliData.newData();
	dataMaster.setFilter("filter0", "SAMPLE_DEVICE_INFO=" + event.data.id);
	dataMaster.refreshData();
	// alert(dataMaster.getCount());
	var dEVICEID1 = dataMaster.getValue("dEVICEID", event.data.id);
	deviceIdzf=dEVICEID1;
	var application = dataMaster.getValue("aPPLICATIONNO");
	var bizData1 = justep.xbl("bizData1");
//	alert(application);
	 bizData1.setFilter("filter","TEST_PROJECT_INFO.aPPLICATIONNO="+application);
	 bizData1.refreshData();
//	 alert(bizData1.getCount());
	 if(bizData1.getCount()!=0){
		 var projectID = bizData1.getCurrentID();
		 proIdzf=projectID;
		 lvliData.setValue("pROJECTID",projectID);
	 }

	// alert(dEVICEID1);
	// lvliData.newData();
	var xiangmu = dataMaster.getValue("");
	// lvliData.setValue("sAMPLEDEVICENO",yijiao._inputParams);
	lvliData.setValue("dEVICEID", dEVICEID1);
	// alert(dEVICEID1);
	lvliData.setValue("oPERATETYPE", 1);
	// var aa = dataMaster.getValue("")
	lvliData.setValue("sAMPLEDEVICENO", yijiao._inputParams.id);
	deviceNOzf = yijiao._inputParams.id;
	
	
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'" + operId + "@%'");
	orgData.refreshData();
	// alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	// alert(oprScode);
	var hrData = justep.xbl("hrData");
	hrData.setFilter("filter2", " HR_BASE_INFO.Scode ='" + oprScode + "'");
	hrData.refreshData();
	var perId = hrData.getCurrentID();
	// alert(perId);
	lvliData.setValue("oPERATORID", perId);
	operIdzf=perId;
	var hrData1 = justep.xbl("hrData");
	
	 //项目
//	 dataMaster.setFilter("filter0","SAMPLE_DEVICE_INFO="+yijiao._inputParams.id);
//	 dataMaster.refreshData();
//	 var zhanyong = justep.xbl("zhanyong");
//	 zhanyong.setFilter("filer0","SAMPLE_DEVICE_OCCUPY_INFO.sAMPLEDEVICENO ="+yijiao._inputParams.id);
//	 zhanyong.refreshData();
//	 if(zhanyong.getCount()!=0){
//		 var pROJECTID = zhanyong.getValue("pROJECTID");
//		 lvliData.setValue("pROJECTID",pROJECTID);
//	 }
	 

	 
};

yijiao.model1XBLLoaded = function(event) {
//	var operId = justep.Context.getOperatorID();
//	var orgData = justep.xbl("sysOperData");
//	var dataMain = justep.xbl("lvliData");
//	orgData.setFilter("filter1", " SA_OPOrg like'" + operId + "@%'");
//	orgData.refreshData();
//	// alert(orgData.getCount());
//	var oprScode = orgData.getValue("sCode");
//	// alert(oprScode);
//	var hrData = justep.xbl("hrData");
//	hrData.setFilter("filter2", " HR_BASE_INFO.Scode ='" + oprScode + "'");
//	hrData.refreshData();
//	var perId = hrData.getCurrentID();
//	// alert(perId);
//	dataMain.setValue("oPERATORID", perId);
//	var hrData1 = justep.xbl("hrData");

	// 传参
	// var dataMaster = justep.xbl("dataMaster");
	// var zhanyong = justep.xbl("zhanyong");

};

/**
 * name:bizData#onValueChanged description: <b>[回调型事件]</b>数据变化
 * 
 * @param event
 *            它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
 */
// var bizData1 = justep.xbl("beipinbeijian");
// var aa = bizData1.getCurrentID();
// bizData1.setValue("tOOL_NO",lingyong._inputParams.id );
// bizData1.setValue("oPERATETYPE",1,aa);
//	
// bizData1.setValue("pROJECTID", 11);
// bizData1.setValue("tESTTASKID",14);
//	
// bizData1.saveData();
// alert("工具领用成功！");
// justep.windowReceiver.windowCancel();
yijiao.inputbutton1Click = function(event) {
	debugger;
	var lvliData = justep.xbl("lvliData");
	var dataMaster = justep.xbl("dataMaster");
	// var aa = dataMaster.getValue("sAMPLEDEVICENO");
	// lvliData.setValue("sAMPLEDEVICENO",aa);
	// lvliData.setValue("sAMPLEDEVICENO", yijiao._inputParams);
	// alert(yijiao._inputParams);
	var memoZf = lvliData.getValue("mEMO");
	var statusZf = lvliData.getValue("oPERATERESULTSTATE");
	var date = lvliData.getValue("oPERATEDATETIME");
	var id = lvliData.getValue("sAMPLEDEVICENO", lvliData.getCurrentID());
	var param = new justep.Request.ActionParam();
	param.setString("date", date);
	param.setString("id", id);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	justep.Request.sendBizRequest(process, activity, "updateSampleDeviceInfo", param, null, null, null, null, null);
	//var date = new justep.Date();
	//dataMaster.setFilter("filterDataMaster", "SAMPLE_DEVICE_INFO="+id);
	//dataMaster.refreshData();
	//var size = dataMaster.getCount();
	//dataMaster.setValue("iNDEEDRECEIVEDATE",aa,id);
	// dataMaster.saveData();
	/*var vali = true;
	var cou = lvliData.getTotal();
	for (var i = 0; i < cou; i++) {
		var rowID = lvliData.getID(i);
		var oPERATETYPE=lvliData.getValue("oPERATETYPE", rowID);
		var pROJECTID = lvliData.getValue("pROJECTID", rowID);
		var dEVICEID = lvliData.getValue("dEVICEID", rowID);
		var sAMPLEDEVICENO = lvliData.getValue("sAMPLEDEVICENO", rowID);
		if(oPERATETYPE==1 && pROJECTID==proIdzf && dEVICEID==deviceIdzf && sAMPLEDEVICENO==deviceNOzf) {
			vali = false;
			break;
		}
	}*/
	
	lvliData.setFilter("filterHav", "SAMPLE_DEVICE_MOVING_RECORD.oPERATETYPE=1 and SAMPLE_DEVICE_MOVING_RECORD.pROJECTID="+proIdzf +
						" and SAMPLE_DEVICE_MOVING_RECORD.dEVICEID='"+deviceIdzf+"' and SAMPLE_DEVICE_MOVING_RECORD.sAMPLEDEVICENO="+deviceNOzf);
	lvliData.refreshData();
	var hav = lvliData.getCount();
	
	
	if(hav == 0) {
		//alert(deviceNOzf);
		lvliData.newData();
		lvliData.setValue("pROJECTID",proIdzf);
		lvliData.setValue("dEVICEID",deviceIdzf);
		lvliData.setValue("sAMPLEDEVICENO",deviceNOzf);
		lvliData.setValue("oPERATETYPE",1);
		lvliData.setValue("oPERATORID", operIdzf);
		lvliData.setValue("tESTTASKID", null);
		lvliData.setValue("mEMO", memoZf);
		lvliData.setValue("oPERATERESULTSTATE", statusZf);
		lvliData.saveData();
		alert("移交成功！");
	} else {
		alert("该项目下该样品已经移交!");
	}
//	dataMaster.refreshData();
	justep.windowReceiver.windowCancel();

};
