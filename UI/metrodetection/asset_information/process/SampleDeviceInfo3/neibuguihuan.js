var neibuguihuan = {};
neibuguihuan._inputParams = {
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
neibuguihuan.windowReceiverReceive = function(event){
	neibuguihuan._inputParams.id = event.data.id;
	neibuguihuan._inputParams.fId = event.data.fId;
//	alert(neibuguihuan._inputParams.id)
	var dataMaster = justep.xbl("dataMaster");
	var lvliData = justep.xbl("lvliData");
	lvliData.newData();
	deviceNOzf=neibuguihuan._inputParams.id;
	/*var bizData2 = justep.xbl("bizData2");
	bizData2.setFilter("filter0","SAMPLE_DEVICE_MOVING_RECORD.sAMPLEDEVICENO="+neibuguihuan._inputParams.id);
	bizData2.refreshData();
	deviceNOzf=neibuguihuan._inputParams.id;
	if(bizData2.getCount()!=0){
		var projectId = bizData2.getValue("pROJECTID");
		proIdzf=projectId;
		lvliData.setValue("pROJECTID",projectId);
	}*/
	
	dataMaster.setFilter("filter0","SAMPLE_DEVICE_INFO="+event.data.id);
	dataMaster.refreshData();
	
	var application = dataMaster.getValue("aPPLICATIONNO");
	var bizData1 = justep.xbl("bizData1");
	bizData1.setFilter("filter","TEST_PROJECT_INFO.aPPLICATIONNO="+application);
	bizData1.refreshData();
	if(bizData1.getCount()!=0){
		var projectID = bizData1.getCurrentID();
		proIdzf=projectID;
		lvliData.setValue("pROJECTID",projectID);
	}
	
	var dEVICEID1 = dataMaster.getValue("dEVICEID");
	deviceIdzf=dEVICEID1;
//	alert(dEVICEID1);
//	lvliData.newData();
	lvliData.setValue("dEVICEID",dEVICEID1);
	lvliData.setValue("oPERATETYPE",4);
//	var aa = dataMaster.getValue("")
//	alert(projectId);
	

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
	//alert(perId);
	dataMain.setValue("oPERATORID",perId);
	operIdzf=perId;


}; 

neibuguihuan.model1XBLLoaded = function(event){
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

neibuguihuan.inputbutton1Click = function(event){
	debugger;
	var bizData1 = justep.xbl("lvliData");
	var memoZf = bizData1.getValue("mEMO");
	var statusZf = bizData1.getValue("oPERATERESULTSTATE");
	bizData1.setValue("sAMPLEDEVICENO",neibuguihuan._inputParams.id);
	var aa = bizData1.getCurrentID();
	
	bizData1.setFilter("filterHav", "SAMPLE_DEVICE_MOVING_RECORD.oPERATETYPE=4 and SAMPLE_DEVICE_MOVING_RECORD.pROJECTID="+proIdzf +
						" and SAMPLE_DEVICE_MOVING_RECORD.dEVICEID='"+deviceIdzf+"' and SAMPLE_DEVICE_MOVING_RECORD.sAMPLEDEVICENO="+deviceNOzf);
	bizData1.refreshData();
	
	if(bizData1.getCount() == 0) {
		bizData1.newData();
		bizData1.setValue("pROJECTID",proIdzf);
		bizData1.setValue("dEVICEID",deviceIdzf);
		bizData1.setValue("sAMPLEDEVICENO",deviceNOzf);
		bizData1.setValue("oPERATETYPE",4);
		bizData1.setValue("oPERATORID", operIdzf);
		bizData1.setValue("tESTTASKID", null);
		bizData1.setValue("mEMO", memoZf);
		bizData1.setValue("oPERATERESULTSTATE", statusZf);
		bizData1.saveData();
		alert("内部归还成功！");
	} else {
		alert("该项目下该样品已经返还!");
	}
	
	justep.windowReceiver.windowCancel();
};
