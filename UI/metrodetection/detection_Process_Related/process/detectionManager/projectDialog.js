var projectDialog = {};
projectDialog._inputParams = {};
projectDialog._defaultInputParams = {
	openMode : null,
	applicationNo : null ,
	rowID : null
};
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
projectDialog.windowReceiverReceive = function(event){
	for (o in projectDialog._defaultInputParams)
		projectDialog._inputParams[o] = projectDialog._defaultInputParams[o];
	
	projectDialog._inputParams.openMode = event.data.openMode;
	if (event.data.applicationNo)
		projectDialog._inputParams.applicationNo = event.data.applicationNo;
	if (event.data.rowID)
		projectDialog._inputParams.rowID = event.data.rowID;

	if(projectDialog._inputParams.openMode == 'new'){
		var projectData = justep.xbl("projectData");
		//projectData.refreshData();
		projectData.newData();
		projectData.setValue("aPPLICATIONNO",projectDialog._inputParams.applicationNo );	
		var lineID = event.data.dataMain.getValue("lINEID");
		var expectEndingDate = event.data.dataMain.getValue("eXPECTENDINGDATE");
		var businessId = event.data.dataMain.getValue("bUSINESSID");
		var productManufactureId = event.data.dataMain.getValue("pRODUCTMANUFACTUREID");
		var assignedManufactureId = event.data.dataMain.getValue("aSSIGNEDMANUFACTUREID");
		var contactPerson = event.data.dataMain.getValue("cONTACTPERSON");
		var contactMobile = event.data.dataMain.getValue("cONTACTMOBILE");
		var contactTelephone = event.data.dataMain.getValue("cONTACTTELEPHONE");
		var contactEmail = event.data.dataMain.getValue("cONTACTEMAIL");
		 
		
		projectData.setValue("lINEID", lineID);
		projectData.setValue("eNDINGDATE",expectEndingDate);
		projectData.setValue("bUSINESSID",businessId);
		projectData.setValue("mANUFACTUREID", productManufactureId);
		projectData.setValue("aSSIGNEDMANUFACTUREID", assignedManufactureId);
		projectData.setValue("cONTACTPERSON", contactPerson);
		projectData.setValue("cONTACTMOBILE", contactMobile);
		projectData.setValue("cONTACTTELEPHONE", contactTelephone);
		projectData.setValue("cONTACTEMAIL", contactEmail);	
	}else{
		var projectData = justep.xbl("projectData");
		projectData.setFilter("filter0", "TEST_PROJECT_INFO = "+projectDialog._inputParams.rowID);
		projectData.refreshData();
	}
};

projectDialog.btnProjectClick = function(event){
	xforms.blur(true);
	var projectData = justep.xbl("projectData");
	projectData.saveData();
	justep.windowReceiver.windowCancel();
};


function btnCancelClick(event){
		justep.windowReceiver.windowCancel();
}


//选择方案时，自动加载方案制定日期
projectDialog.gridSelect3Closeup = function(event){
	var testSchemeData = justep.xbl("testSchemeData");
	var projectData = justep.xbl("projectData");
	var makeDate = testSchemeData.getValue("mAKEDATETIME");
	projectData.setValue("mAKEDATE",makeDate);
};

/**
	name:treeSelect#onRowDisabled
	description: <b>[回调事件]</b> 行是否可选回调
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象}
	@return {boolean} 返回true 可选，false不可选。 
*/

/**
	name:treeSelect#onRowDisabled
	description: <b>[回调事件]</b> 行是否可选回调
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象}
	@return {boolean} 返回true 可选，false不可选。 
*/

