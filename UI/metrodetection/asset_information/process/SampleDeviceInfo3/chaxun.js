var chaxun = {};
chaxun._inputParams = {
	id : null,
	fId : null
};
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
chaxun.windowReceiverReceive = function(event){
			chaxun._inputParams.id = event.data.id;
	chaxun._inputParams.fId = event.data.fId;
	var dataMaster = justep.xbl("dataMaster");
	var lvliData = justep.xbl("lvliData");
	lvliData.setFilter("lvliDataNOApp", "SAMPLE_DEVICE_MOVING_RECORD.sAMPLEDEVICENO="+event.data.id);
	lvliData.refreshData();
	lvliData.newData();
	dataMaster.setFilter("filter0", "SAMPLE_DEVICE_INFO=" + event.data.id);
	dataMaster.refreshData();
	// alert(dataMaster.getCount());
	var dEVICEID1 = dataMaster.getValue("dEVICEID", event.data.id);
	var application = dataMaster.getValue("aPPLICATIONNO");
	var bizData1 = justep.xbl("bizData2");
//	alert(application);
	 bizData1.setFilter("filter","TEST_PROJECT_INFO.aPPLICATIONNO="+application);
	 bizData1.refreshData();
//	 alert(bizData1.getCount());
	 if(bizData1.getCount()!=0){
		 var projectID = bizData1.getCurrentID();
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
	lvliData.setValue("sAMPLEDEVICENO", chaxun._inputParams.id);
	
	
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
	var hrData1 = justep.xbl("hrData");
	lvliData.refreshData();
};
