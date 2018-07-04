var DialogActivity = {};

DialogActivity.gridSelect8Closeup = function(event){
	var bizData =justep.xbl("dataMain");
	var bizData7 =justep.xbl("bizData8");
	var c = bizData.getValue("MANUFACTURE_ID");
	if(typeof c=="number" ){
	bizData7.setFilter("filter0", "AFC_MANUFACTURER_INFO ="+c);
	bizData7.refreshData();
	var type = bizData7.getValue("mANUFACTURETYPE", c);
	bizData.setValue("mANUFACTURETYPE",type,bizData.getCurrentId());
	}
};

DialogActivity.gridSelect1Closeup = function(event){
	var bizData1 =justep.xbl("bizData1");
	var bizData2 =justep.xbl("bizData2");
	var aPPLYFOROBJECT = bizData1.getValue("DETECTION_OBJECT_TYPE");
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "+ aPPLYFOROBJECT);
	bizData2.refreshData();
	}
};

DialogActivity.gridSelect5Closeup = function(event){
	var bizData3 =justep.xbl("bizData5");
	var bizData2 =justep.xbl("bizData6");
	var aPPLYFOROBJECT = bizData3.getValue("PROBLEM_PRIOR_CODE");
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "PROBLEM_TYPE_CODE.pROBLEMPRIOR = "+ aPPLYFOROBJECT + "");
	bizData2.refreshData();
	}
};

DialogActivity.gridSelect3Closeup = function(event){
	var bizData1 =justep.xbl("bizData3");
	var bizData2 =justep.xbl("bizData4");
	var aPPLYFOROBJECT = bizData1.getCurrentID();
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "DETECTION_RANGE_CODE.dETECTIONRANGETYPE = "+ aPPLYFOROBJECT);
	bizData2.refreshData();
	}
};



DialogActivity.inputbutton1Click = function(event){
	var projectDat = justep.xbl("dataMain");
	projectDat.saveData();
	var ID = projectDat.getCurrentID();
	justep.windowReceiver.windowEnsure({
		ID:ID
	},true);
		justep.windowReceiver.windowCancel();
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
DialogActivity.windowReceiverReceive = function(event){
	var projectData = justep.xbl("dataMain");
		projectData.newData();
};
