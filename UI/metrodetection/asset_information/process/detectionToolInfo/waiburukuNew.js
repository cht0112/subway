var waiburukuNew = {};
waiburukuNew._inputParams = {
		id : null
};
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
waiburukuNew.windowReceiverReceive = function(event){
//alert(11);
	waiburukuNew._inputParams.id = event.data.id;
	var toolData = justep.xbl("toolData");
	toolData.setFilter("filter0","DETECTION_TOOL_INFO="+waiburukuNew._inputParams.id);
	toolData.refreshData();
	var toolId = toolData.getValue("tOOLID");
	var toolType = toolData.getValue("tOOLTYPEID");
	var toolStatus = toolData.getValue("uSESTATECODE");
	var beipinbeijian = justep.xbl("beipinbeijian");
	beipinbeijian.newData();
	beipinbeijian.setValue("tOOLID",toolId);
	beipinbeijian.setValue("tOOLTYPEID",toolType);
	beipinbeijian.setValue("tOOLIDSTATE",toolStatus);	
	beipinbeijian.setValue("oPERATETYPE",3);
	
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

waiburukuNew.inputbutton1Click = function(event){
	debugger;
//	var data = justep.xbl("beipinbeijian");
	var bizData1 = justep.xbl("beipinbeijian");
	var aa = bizData1.getCurrentID();
	bizData1.setValue("oPERATETYPE",3,aa);
	bizData1.setValue("tOOLNO",waiburukuNew._inputParams.id );
//	bizData1.setValue("pROJECTID", 11);
//	bizData1.setValue("tESTTASKID",14);
	bizData1.saveData();
	alert("外部入库成功！")
	var toolData = justep.xbl("toolData");
	toolData.setValue("rECIVESTATE",0);
	justep.windowReceiver.windowCancel();
};

waiburukuNew.model1XBLLoaded = function(event){

};
