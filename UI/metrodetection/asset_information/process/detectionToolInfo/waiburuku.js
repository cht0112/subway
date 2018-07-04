var waiburuku = {};
waiburuku._inputParams = {
		id : null
};


waiburuku.windowReceiverReceive = function(event){
debugger;
	waiburuku._inputParams.id = event.data.id;
//	alert(waiburuku._inputParams.id);
	var toolData = justep.xbl("toolData");
	toolData.setFilter("filter0","DETECTION_TOOL_INFO="+waiburuku._inputParams.id);
	toolData.refreshData();
//	alert(toolData.getCount());
	var toolId = toolData.getValue("tOOLID");
//	alert(toolId);
	var toolType = toolData.getValue("tOOLTYPEID");
	var toolStatus = toolData.getValue("uSESTATECODE");
	var beipinbeijian = justep.xbl("beipinbeijian");
	beipinbeijian.newData();
	beipinbeijian.setValue("tOOLID",toolId);
	beipinbeijian.setValue("tOOLTYPEID",toolType);
	beipinbeijian.setValue("tOOLIDSTATE",toolStatus);	
	beipinbeijian.setValue("oPERATETYPE",4);
	
	
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

waiburuku.inputbutton1Click = function(event){
	debugger;
//	var data = justep.xbl("beipinbeijian");
	var bizData1 = justep.xbl("beipinbeijian");
//	var aa = bizData1.getCurrentID();
//	bizData1.setValue("oPERATETYPE",3,aa);
	bizData1.setValue("tOOLNO",waiburuku._inputParams.id );
//	bizData1.setValue("pROJECTID", 11);
//	bizData1.setValue("tESTTASKID",14);
	if(bizData1.saveData()){
		alert("外部出库成功！");
	}else{
		alert("外部出库失败！");
	}
	var toolData = justep.xbl("toolData");
	toolData.setValue("rECIVESTATE",1);
	toolData.saveData();
//	alert(toolData.getCount());
//	var aaa = toolData.getValue("rECIVESTATE");
//	alert(aaa);
//	toolData.setValue("rECIVESTATE",1);
	justep.windowReceiver.windowCancel();
};

