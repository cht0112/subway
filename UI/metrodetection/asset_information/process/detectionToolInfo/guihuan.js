var guihuan = {};
guihuan._inputParams = {
		id : null
};
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
guihuan.windowReceiverReceive = function(event){
debugger;
	guihuan._inputParams.id = event.data.id;
//	alert(guihuan._inputParams.id);
	var toolData = justep.xbl("toolData");
	toolData.setFilter("filter0","DETECTION_TOOL_INFO="+guihuan._inputParams.id);
	toolData.refreshData();
//	alert(toolData.getCount());
	var toolId = toolData.getValue("tOOLID");
	var toolType = toolData.getValue("tOOLTYPEID");
	var toolStatus = toolData.getValue("uSESTATECODE");
	var beipinbeijian = justep.xbl("beipinbeijian");
	beipinbeijian.newData();
	beipinbeijian.setValue("tOOLID",toolId);
//	alert(toolId);
	beipinbeijian.setValue("tOOLTYPEID",toolType);
//	alert(toolType);
	beipinbeijian.setValue("tOOLIDSTATE",toolStatus);
//	alert(toolStatus);
	beipinbeijian.setValue("oPERATETYPE",2);
//	alert(1);
	beipinbeijian.setValue("mOVINGREASON",1);
//	alert(2);
//	alert(beipinbeijian.getValue("tOOLNO"));
//	beipinbeijian.setValue("tOOLNO",guihuan._inputParams.id);	
	
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
//	alert(3);

};

guihuan.inputbutton1Click = function(event){
	debugger;
	var toolData = justep.xbl("toolData");
	var bizData1 = justep.xbl("beipinbeijian");
	
	
	var proData = justep.xbl("bizData3");
	var proId = proData.getCurrentID();
	bizData1.setFilter("filter0", "DETECTION_TOOL_MOVING_RECORD.tOOLNO="+guihuan._inputParams.id+" and DETECTION_TOOL_MOVING_RECORD.pROJECTID="+proId+" and DETECTION_TOOL_MOVING_RECORD.oPERATETYPE=2");
	bizData1.refreshData();
	
	if(bizData1.getCount() > 0) {
		alert("该项目下的该工具已经归还!");
	} else {
		var toolData = justep.xbl("toolData");
		var toolType=toolData.getValue("tOOLTYPEID");
		var toolId=toolData.getValue("tOOLID");
		//工具数量
		var toolNum = justep.xbl('tOOLNUMBER').input.value;
		//备注
		var memo = justep.xbl('textarea1').input.value;
		//当前人
		var peoId = justep.Context.getCurrentPersonID();
		
		bizData1.newData();
		bizData1.setValue("tOOLNO",guihuan._inputParams.id );
		bizData1.setValue("tOOLTYPEID",toolType);
		bizData1.setValue("tOOLID",toolId);
		bizData1.setValue("tOOLIDSTATE",2);
		bizData1.setValue("tOOLNUMBER",toolNum);
		bizData1.setValue("mOVINGREASON",1);
		bizData1.setValue("pROJECTID",proId);
		bizData1.setValue("oPERATETYPE",2);
		bizData1.setValue("oPERATORID",peoId);
		bizData1.setValue("mEMO",memo);
		
		if(bizData1.saveData()){
			alert("工具归还成功！");
		}else{
			alert("工具归还失败！");
		}
		
		var toolData = justep.xbl("toolData");
		toolData.setValue("rECIVESTATE",0);
		toolData.saveData();
	}

	
	
	justep.windowReceiver.windowCancel();
};


