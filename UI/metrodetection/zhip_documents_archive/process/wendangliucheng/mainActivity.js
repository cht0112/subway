var mainActivity = {};

mainActivity.mdDefaultXBLLoaded = function(event){
//	var bizData1 = justep.xbl("bizData1");
//	bizData1.setFilter("filter0", "P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 1 and P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 1");
//	bizData1.refreshData();	
	$(justep.xbl("rETURNDATE3").input).bind('keydown',function(evt){evt.preventDefault();});

};

mainActivity.gridSelect2Dropdown = function(event){
	var dataMain = justep.xbl("dataMain");
	var docCategory = dataMain.getValue("dOCUMENTCATEGORY", dataMain.getCurrentID());
	if(docCategory!=""){
		var leixing = justep.xbl("leixing");
		leixing.setFilter("filter0", "DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY = "+ docCategory);
		leixing.refreshData();
	}	
};

/**
	name:bizData#onAfterNew
	description: <b>[回调型事件]</b>业务数据新增后
	@param event 它的结构如下:<br/>{"source":组件的js对象,"id":新增的行Id}
*/
mainActivity.dataMainAfterNew = function(event){
	var dataMain = justep.xbl("dataMain");
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
	dataMain.setValue("bORROWER",perId);	
};

mainActivity.gridSelect1Closeup = function(event){
	var bizData1 = justep.xbl("bizData1");
	var dataMain = justep.xbl("dataMain");
	var leixing = justep.xbl("leixing");
	var dOCUMENTCATEGORY = dataMain.getValue("dOCUMENTCATEGORY");
	if(dOCUMENTCATEGORY!=''){
//		alert("文档科目："+dOCUMENTCATEGORY);
		leixing.setFilter("filter0", "1=1");
		leixing.refreshData();
		leixing.setFilter("filter0", "DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY="+dOCUMENTCATEGORY);
		leixing.refreshData();
		dataMain.setValue("dOCUMENTTYPE1", leixing.getRowId(0));
		dataMain.setValue("dOCUMENTTYPECNAME", leixing.getValue("dOCUMENTTYPECNAME",leixing.getRowId(0)));
		var dOCUMENTTYPE = dataMain.getValue("dOCUMENTTYPE1");
		if ( dOCUMENTTYPE!='') {
//			debugger;
			bizData1.setFilter("filter1", "1=1");
			bizData1.refreshData();
//			alert("文档类型："+dOCUMENTTYPE);
			bizData1.setFilter("filter1", "P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 1 and P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 1 and P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE="+dOCUMENTTYPE+" and P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY="+dOCUMENTCATEGORY);
			bizData1.refreshData();
//			alert(bizData1.getCount());
			dataMain.setValue("pFILEID", bizData1.getRowId(0));
			dataMain.setValue("pFILENAME",bizData1.getValue("pFILENAME",bizData1.getRowId(0)));
		} else {
			bizData1.setFilter("filter1", "1=0");
			bizData1.refreshData();
			dataMain.setValue("pFILEID", bizData1.getRowId(0));
			dataMain.setValue("pFILENAME",bizData1.getValue("pFILENAME",bizData1.getRowId(0)));
		}
	}
};

mainActivity.gridSelect2Closeup = function(event){
	var bizData1 = justep.xbl("bizData1");
	var dataMain = justep.xbl("dataMain");
	var dOCUMENTCATEGORY = dataMain.getValue("dOCUMENTCATEGORY");
	var dOCUMENTTYPE = dataMain.getValue("dOCUMENTTYPE1");
	if ( dOCUMENTTYPE!='') {
//		alert("文档类型："+dOCUMENTTYPE);
		bizData1.setFilter("filter1", "1=1");
		bizData1.refreshData();
		bizData1.setFilter("filter1", "P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 1 and P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 1 and P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE="+dOCUMENTTYPE+" and P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY="+dOCUMENTCATEGORY);
		bizData1.refreshData();
		dataMain.setValue("pFILEID", bizData1.getRowId(0));
		dataMain.setValue("pFILENAME",bizData1.getValue("pFILENAME",bizData1.getRowId(0)));
	} 
};
