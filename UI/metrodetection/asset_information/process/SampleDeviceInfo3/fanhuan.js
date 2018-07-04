var fanhuan = {};
fanhuan._inputParams = {
		id : null,
		fId : null
};
var proIdzf,deviceIdzf,deviceNOzf,operIdzf;
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
fanhuan.windowReceiverReceive = function(event){
	fanhuan._inputParams.id = event.data.id;
	fanhuan._inputParams.fId = event.data.fId;
	//fanhuan._inputParams.id = event.data.id;
	var dataMaster = justep.xbl("dataMaster");
	var lvliData = justep.xbl("lvliData");
	lvliData.newData();
//	alert(111);
	dataMaster.setFilter("filter0","SAMPLE_DEVICE_INFO="+event.data.id);
	dataMaster.refreshData();
//	alert(lvliData.getCount());
	var dEVICEID1 = dataMaster.getValue("dEVICEID");
	deviceIdzf=dEVICEID1;
	var application = dataMaster.getValue("aPPLICATIONNO");
//	alert(dEVICEID1);
//	var aa = dataMaster.getValue("sAMPLEDEVICENO");
//	lvliData.setValue("sAMPLEDEVICENO", aa);
	
//	lvliData.newData();
	lvliData.setValue("dEVICEID",dEVICEID1);
	lvliData.setValue("oPERATETYPE",2);
//	lvliData.refreshData();
//	var aa = dataMaster.getValue("")
	lvliData.setValue("sAMPLEDEVICENO",fanhuan._inputParams.id);
	deviceNOzf=fanhuan._inputParams.id;


	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	var dataMain = justep.xbl("lvliData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrData = justep.xbl("hrData");
	hrData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrData.refreshData();
	var perId = hrData.getCurrentID();
	operIdzf=perId;
	//alert(perId);
	dataMain.setValue("oPERATORID",perId);
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


};

fanhuan.model1XBLLoaded = function(event){
//	var operId = justep.Context.getOperatorID();
//	var orgData = justep.xbl("sysOperData");
//	var dataMain = justep.xbl("lvliData");
//	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
//	orgData.refreshData();
//	//alert(orgData.getCount());
//	var oprScode = orgData.getValue("sCode");
//	//alert(oprScode);
//	var hrData = justep.xbl("hrData");
//	hrData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
//	hrData.refreshData();
//	var perId = hrData.getCurrentID();
//	//alert(perId);
//	dataMain.setValue("oPERATORID",perId);
};


fanhuan.inputbutton1Click = function(event){
	var lvliData = justep.xbl("lvliData");
	var dataMaster = justep.xbl("dataMaster");
	var memoZf = lvliData.getValue("mEMO");
	var statusZf = lvliData.getValue("oPERATERESULTSTATE");
	
//	lvliData.setValue("sAMPLEDEVICENO",event.data.id);
//	var aa = dataMaster.getValue("sAMPLEDEVICENO");
//	lvliData.setValue("sAMPLEDEVICENO",aa);
//lvliData.setValue("sAMPLEDEVICENO", yijiao._inputParams);
//alert(yijiao._inputParams);
	
	lvliData.setFilter("filterHav", "SAMPLE_DEVICE_MOVING_RECORD.oPERATETYPE=2 and SAMPLE_DEVICE_MOVING_RECORD.pROJECTID="+proIdzf +
						" and SAMPLE_DEVICE_MOVING_RECORD.dEVICEID='"+deviceIdzf+"' and SAMPLE_DEVICE_MOVING_RECORD.sAMPLEDEVICENO="+deviceNOzf);
	lvliData.refreshData();
	if(lvliData.getCount() == 0) {
		lvliData.newData();
		lvliData.setValue("pROJECTID",proIdzf);
		lvliData.setValue("dEVICEID",deviceIdzf);
		lvliData.setValue("sAMPLEDEVICENO",deviceNOzf);
		lvliData.setValue("oPERATETYPE",2);
		lvliData.setValue("oPERATORID", operIdzf);
		lvliData.setValue("tESTTASKID", null);
		lvliData.setValue("mEMO", memoZf);
		lvliData.setValue("oPERATERESULTSTATE", statusZf);
		lvliData.saveData();
		lvliData.saveData();
		alert("返还成功！");
	} else {
		alert("该项目下该样品已经返还供应商!");
	}
	
	justep.windowReceiver.windowCancel();
};
