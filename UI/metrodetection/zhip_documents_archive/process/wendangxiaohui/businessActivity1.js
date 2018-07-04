var businessActivity1 = {};

businessActivity1.gridSelect4Closeup = function(event){
	var dataMain = justep.xbl("kemu");
	var docCategory = dataMain.getCurrentID();
	if( typeof docCategory == "number"){
		var leixing = justep.xbl("leixing");
		leixing.setFilter("filter0", "DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY = "+ docCategory);
		leixing.refreshData();
		var bizData1 = justep.xbl("bizData1")
		bizData1.setFilter("filter0", "P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = "+ docCategory);
		bizData1.refreshData();

	}
		
};

businessActivity1.gridSelect3Closeup = function(event){
var dataMain = justep.xbl("dataMain");
	var assignManufacture = dataMain.getValue("fILEID");
	if(assignManufacture!=""){
		var manufactureData = justep.xbl("bizData1");
		manufactureData.setFilter("filter0", "P_DOCUMENTS_ARCHIVE ='" + assignManufacture+"'");
		manufactureData.refreshData();
		// 文档版本
		var fILEVER = manufactureData.getValue("fILEVER",assignManufacture);
		dataMain.setValue("fILEVER",fILEVER);
		// 涉密级别 
		var sECRETLEVEL = manufactureData.getValue("sECRETLEVEL",assignManufacture);
		dataMain.setValue("sECRETLEVEL",sECRETLEVEL);
		//文档简介
		var pFILEDESC = manufactureData.getValue("pFILEDESC",assignManufacture);
		dataMain.setValue("fILEDESC",pFILEDESC);
		//备注
		var mEMO = manufactureData.getValue("mEMO",assignManufacture);
		dataMain.setValue("mEMO",mEMO);
	}	
};



businessActivity1.model1XBLLoaded = function(event){
		var dataMain = justep.xbl("dataMain");
	var status = dataMain.getValue("dESTROYTYPE");
	if(status == 1) {
		justep.xbl('gridSelect4').setDisabled(true);
		justep.xbl('gridSelect5').setDisabled(true);
		justep.xbl('treeSelect1').setDisabled(false);
		justep.xbl('gridSelect6').setDisabled(false);
		justep.xbl('gridSelect3').setDisabled(true);
		
		
	}else{
		justep.xbl('gridSelect4').setDisabled(false);
		justep.xbl('gridSelect5').setDisabled(false);
		justep.xbl('treeSelect1').setDisabled(true);
		justep.xbl('gridSelect6').setDisabled(true);
		justep.xbl('gridSelect3').setDisabled(false);
		
	}
};

businessActivity1.gridSelect2Closeup = function(event){
		var dataMain = justep.xbl("dataMain");
	var status = dataMain.getValue("dESTROYTYPE");
	if(status == 1) {
		justep.xbl('gridSelect4').setDisabled(true);
		justep.xbl('gridSelect5').setDisabled(true);
		justep.xbl('treeSelect1').setDisabled(false);
		justep.xbl('gridSelect6').setDisabled(false);
		justep.xbl('gridSelect3').setDisabled(true);
		
		
	}else{
		justep.xbl('gridSelect4').setDisabled(false);
		justep.xbl('gridSelect5').setDisabled(false);
		justep.xbl('treeSelect1').setDisabled(true);
		justep.xbl('gridSelect6').setDisabled(true);
		justep.xbl('gridSelect3').setDisabled(false);
		
	}
};
