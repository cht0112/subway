var lingyong = {};
lingyong._inputParams = {
		id : null
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
lingyong.windowReceiverReceive = function(event){
	debugger;
	lingyong._inputParams.id = event.data.id;
	var beipinbeijian = justep.xbl("beipinbeijian");
//	alert(lingyong._inputParams.id);
//	beipinbeijian.newData();
	var toolData = justep.xbl("toolData");
	toolData.setFilter("filter0","DETECTION_TOOL_INFO="+lingyong._inputParams.id);
	toolData.refreshData();
	//	alert(toolData.getCount());
	var toolId = toolData.getValue("tOOLID");
//	alert(toolId);
	var toolType = toolData.getValue("tOOLTYPEID");
	var toolStatus = toolData.getValue("uSESTATECODE");
	beipinbeijian.setValue("tOOLID",toolId);
	beipinbeijian.setValue("tOOLTYPEID",toolType);
	beipinbeijian.setValue("tOOLIDSTATE",toolStatus);
	beipinbeijian.setValue("oPERATETYPE",1);
	beipinbeijian.setValue("mOVINGREASON",1);
	beipinbeijian.setValue("tOOLNO",lingyong._inputParams.id);
	var zhanyong = justep.xbl("zhanyong");
	zhanyong.setFilter("filer0", "TOOL_OCCUPY_INFO.tOOLNO1 = " + lingyong._inputParams.id);
	zhanyong.refreshData();
	if(zhanyong.getCount()!=0){
		var taskId = zhanyong.getValue("tESTTASKID");
		var bizData3 = justep.xbl("bizData3");
		bizData3.setFilter("fil", "TEST_PROJECT_TASK_INFO.tASKID="+taskId);
		bizData3.refreshData();
		if(bizData3.getCount()!=0){
			var projectId = bizData3.getValue("pROJECTID");		
			beipinbeijian.setValue("pROJECTID", projectId);
		}
	}
};

lingyong.inputbutton1Click = function(event){
	debugger;
	var bizData1 = justep.xbl("beipinbeijian");
	var toolData = justep.xbl("toolData");
	toolData.setValue("rECIVESTATE",1);
	var aa = bizData1.getCurrentID();
//	bizData1.saveData();
	if(bizData1.saveData()&&toolData.saveData()){
		alert("工具领用成功！");
	}else{
		alert("工具领用失败！");
	}
	justep.windowReceiver.windowCancel();
};



lingyong.model1XBLLoaded = function(event){
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	var dataMain = justep.xbl("beipinbeijian");
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
};



