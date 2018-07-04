var mainActivityNew = {};

mainActivityNew.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivityNew.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivityNew.trigger1Click = function(event){
	var dataMain = justep.xbl("dataMain");
	var tt = dataMain.getValue("dEVICETYPE");
	
};
//申请检测对象筛选
mainActivityNew.gridSelect3Closeup = function(event){
    //debugger;
	var dataMain = justep.xbl("dataMain");
	var tt = dataMain.getValue("dETECTIONOBJECTTYPE");
	if(typeof tt == "number"){
	var deviceType = dataMain.getValue("dEVICETYPE");
	var deviceTypeCodeData = justep.xbl("deviceTypeCodeData");
	deviceTypeCodeData.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "+ tt);
	deviceTypeCodeData.refreshData();
	//for(var i = 0; i<deviceTypeCodeData.getCount();i++){
		var aa = deviceTypeCodeData.getValue("dEVICETYPE");
		var bb = deviceTypeCodeData.getValue("dEVICETYPECNAME");
	//}
	dataMain.setValue("dEVICETYPE", aa);
	dataMain.setValue("dEVICETYPECNAME" ,bb);
	}	
};
//委托单位取值
mainActivityNew.gridSelect1Closeup = function(event){
	var dataMain = justep.xbl("dataMain");
	var assignManufacture = dataMain.getValue("aSSIGNEDMANUFACTUREID");
	if(assignManufacture!=""){
		var manufactureData = justep.xbl("manufactureData");
		manufactureData.setFilter("filter0", "AFC_MANUFACTURER_INFO =" + assignManufacture);
		manufactureData.refreshData();
		var id = manufactureData.getValue("mANUFACTUREIDCNAME");
		// 委托单位联系手机 
		var cONTACTMOBILE = manufactureData.getValue("cONTACTMOBILE",assignManufacture);
		dataMain.setValue("cONTACTMOBILE",cONTACTMOBILE);
		// 委托单位通信地址 
		var mANUFACTUREADDRESS = manufactureData.getValue("mANUFACTUREADDRESS",assignManufacture);
		dataMain.setValue("cONTACTADDRESS",mANUFACTUREADDRESS);
		// 委托联系人
		var cONTACTOR = manufactureData.getValue("cONTACTOR", assignManufacture);
		dataMain.setValue("cONTACTPERSON",cONTACTOR);
		// 委托单位联系邮件 
		var cONTACTEMAIL = manufactureData.getValue("cONTACTEMAIL", assignManufacture);
		dataMain.setValue("cONTACTEMAIL",cONTACTEMAIL);
		// 委托单位联系电话
		var cONTACTTELEPHONE = manufactureData.getValue("cONTACTTELEPHONE", assignManufacture);
		dataMain.setValue("cONTACTTELEPHONE",cONTACTTELEPHONE);
		// 委托单位邮政编码
		var mANUFACTUREPOSTCODE = manufactureData.getValue("mANUFACTUREPOSTCODE", assignManufacture);
		dataMain.setValue("cONTACTPOSTCODE",mANUFACTUREPOSTCODE);
		// 委托单位传真 
		var fAXNUMBER = manufactureData.getValue("fAXNUMBER", assignManufacture);
		dataMain.setValue("cONTACTFAXNUMBER",fAXNUMBER);
	}

};
//设置文本输入框输入长度
mainActivityNew.mdDefaultXBLLoaded = function(event){
	//var dataMain = justep.xbl("dataMain");
	//dataMain.setFilter("filter","TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	//dataMain.refreshData();
	$(justep.xbl("pRODUCTNAME").input).attr("maxlength",200);
	$(justep.xbl("lINEID").input).attr("maxlength",2);
	
	$(justep.xbl("eXPECTENDINGDATE").input).bind('keydown',function(evt){evt.preventDefault();});
	
	
	// 实验室
	var manufactureData = justep.xbl("manufactureData");
	manufactureData.setFilter("filter0", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 4");
	manufactureData.refreshData();	
	//加工单位
	var jiagongdanweiDB = justep.xbl("jiagongdanweiDB");
	jiagongdanweiDB.setFilter("filterjia", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 5");
	jiagongdanweiDB.refreshData();
	// 实验室联系人
	var currId = manufactureData.getCurrentID();
	var cONTACTORId= manufactureData.getValue("oPERATOR_ID",currId);
	var cONTACTOR= manufactureData.getValue("cONTACTOR",currId);
//	alert(manufactureData.getCount());
//	alert(cONTACTOR);
	
	// 实验室电话
	var cONTACTTELEPHONE= manufactureData.getValue("cONTACTTELEPHONE");
	var dataMain = justep.xbl("dataMain");
//	alert(manufactureData.getCount());
	dataMain.setValue("oPERATORID",cONTACTORId);
	dataMain.setValue("oPERATORNAME",cONTACTOR);
	
	dataMain.setValue("mNITLTELEPHONE",cONTACTTELEPHONE);
	//实验室传真
	var fAXNUMBER= manufactureData.getValue("fAXNUMBER");
	dataMain.setValue("mNITLFAXNUMBER",fAXNUMBER);
	//实验室联系手机
	var cONTACTMOBILE= manufactureData.getValue("cONTACTMOBILE");
	dataMain.setValue("mNITLMOBILE",cONTACTMOBILE);
	//实验室联系邮件
	var cONTACTEMAIL= manufactureData.getValue("cONTACTEMAIL");
	dataMain.setValue("mNITLEMAIL",cONTACTEMAIL);
	//实验室通讯地址
	var mANUFACTUREADDRESS= manufactureData.getValue("mANUFACTUREADDRESS");
	dataMain.setValue("mNITLADDRESS",mANUFACTUREADDRESS);
	//实验室邮政编码
	var mANUFACTUREPOSTCODE= manufactureData.getValue("mANUFACTUREPOSTCODE");
	dataMain.setValue("mNITLPOSTCODE",mANUFACTUREPOSTCODE);
	
	// 人员
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	//alert(perId);
	dataMain.setValue("rECEIPTER",perId);
	
};

mainActivityNew.gridSelect1Dropdown = function(event){
	var manufactureData = justep.xbl("afcData");
	manufactureData.setFilter("filter0", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 1"); 
	manufactureData.refreshData();	
};

mainActivityNew.gridSelect2Dropdown = function(event){
var manufactureData = justep.xbl("afcData");
	manufactureData.setFilter("filter0", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 1"); 
	manufactureData.refreshData();	
};
/**
	name:process#onAdvanceCommit
	description: <b>[回调型事件]</b>流转成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
mainActivityNew.flwAdvanceCommit = function(data){
	var d = justep.xbl("dataMain");
	var applicationId = d.getValue("APP_DOC_ID");
	var id =d.getCurrentID();
//	d.saveData();
	var SA_Task = justep.xbl("SA_TaskData");
	SA_Task.refreshData();
//	alert(SA_Task);
//	alert(SA_Task.getCount());
	SA_Task.setFilter("filter0", "SA_Task.sTypeName = '检测流程' and SA_Task.sParent is null and SA_Task.sData1 = '"+id+"'");
	SA_Task.refreshData();
	SA_Task.setValue("sESField05", applicationId);
	SA_Task.saveData();		
};

/**
	name:process#onAbortCommit
	description: <b>[回调型事件]</b>终止成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
mainActivityNew.flwAbortCommit = function(data){
	var d = justep.xbl("dataMain");
	var applicationId = d.getValue("APP_DOC_ID");
	var id =d.getCurrentID();
//	d.saveData();
	var SA_Task = justep.xbl("SA_TaskData");
	SA_Task.refreshData();
//	alert(SA_Task.getCount());
	SA_Task.setFilter("filter0", "SA_Task.sTypeName = '检测流程' and SA_Task.sParent is null and SA_Task.sData1 = '"+id+"'");
	SA_Task.refreshData();
//	alert(SA_Task.getCount());
	SA_Task.setValue("sESField05", applicationId);
	SA_Task.saveData();		
};




mainActivityNew.gridSelect8Closeup = function(event){
	var d = justep.xbl("jiagongdanweiDB");
	var id = d.getCurrentID();
	//alert(d.getCurrentID());
	if(id != null && id != ""){
		var unit = "";
		var name = d.getValue("mANUFACTUREIDCNAME", id);
		var address = d.getValue("mANUFACTUREADDRESS", id);
		var phone = d.getValue("cONTACTTELEPHONE", id);
		var fax = d.getValue("fAXNUMBER", id);
		//alert("-name--"+name+"-address--"+address+"-phone--"+phone+"-fax--"+fax);
		unit = "单位名称："+name+"，联系电话："+phone;
		if(address != null && address != ""){
			unit = unit+"，地址："+address;
		}
		if(fax != null && fax != ""){
			unit = unit+"，传真："+fax;
		}
		//alert(unit);
		var application = justep.xbl("dataMain");
		application.setValue("pROCESSUNIT", unit);
	}
	
};

mainActivityNew.gridSelect8Dropdown = function(event){
	//加工单位
	var jiagongdanweiDB = justep.xbl("jiagongdanweiDB");
	jiagongdanweiDB.setFilter("filterjia", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 5");
	jiagongdanweiDB.refreshData();
};

mainActivityNew.gridSelect9Closeup = function(event){
	//var dataMain = justep.xbl("dataMain");
	//alert(dataMain.getValue("dECTIONBASEDONNAME"));
};

mainActivityNew.lINEIDBlur = function(event){
	var d = justep.xbl("dataMain");
	var line = d.getValue("lINEID");
	alert(line);
};
