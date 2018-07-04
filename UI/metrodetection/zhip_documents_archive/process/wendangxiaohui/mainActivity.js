	var mainActivity = {};



mainActivity.gridSelect4Closeup = function(event){
	var dataMain = justep.xbl("dataMain");
//	var docCategory = dataMain.getCurrentID();
//	if( typeof docCategory == "number"){
//		var leixing = justep.xbl("leixing");
//		leixing.setFilter("filter0", "DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY = "+ docCategory);
//		leixing.refreshData();
//		var bizData1 = justep.xbl("bizData1")
//		bizData1.setFilter("filter0", "P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = "+ docCategory);
//		bizData1.refreshData();


	
	
	var bizData1 = justep.xbl("bizData1");
	var leixing = justep.xbl("leixing");
	var dOCUMENTCATEGORY = dataMain.getValue("dOCUMENTCATEGORY");
//	alert("文档科目："+dOCUMENTCATEGORY);
	if(dOCUMENTCATEGORY!=''){
		
		leixing.setFilter("filter0", "1=1");
		leixing.refreshData();
		leixing.setFilter("filter0", "DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY="+dOCUMENTCATEGORY);
		leixing.refreshData();
		dataMain.setValue("dOCUMENTTYPE", leixing.getRowId(0));
		dataMain.setValue("dOCUMENTTYPECNAME", leixing.getValue("dOCUMENTTYPECNAME",leixing.getRowId(0)));
		var dOCUMENTTYPE = dataMain.getValue("dOCUMENTTYPE");
//		alert("文档类型："+dOCUMENTTYPE);
		if ( dOCUMENTTYPE!='') {
//			debugger;
			bizData1.setFilter("filter1", "1=1");
			bizData1.refreshData();

			bizData1.setFilter("filter1", "P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 1 and P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 1 and P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE="+dOCUMENTTYPE+" and P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY="+dOCUMENTCATEGORY);
			bizData1.refreshData();
//			alert(bizData1.getCount());
			dataMain.setValue("fILEID", bizData1.getRowId(0));
			dataMain.setValue("fILENAME",bizData1.getValue("pFILENAME",bizData1.getRowId(0)));
		} else {
			bizData1.setFilter("filter1", "1=0");
			bizData1.refreshData();
			
			dataMain.setValue("fILEID", bizData1.getRowId(0));
			dataMain.setValue("fILENAME",bizData1.getValue("pFILENAME",bizData1.getRowId(0)));
		}
	}	
//		}	
};



mainActivity.gridSelect3Closeup = function(event){
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

mainActivity.gridSelect3Dropdown = function(event){
	var bizData1 = justep.xbl("bizData1");
	bizData1.setFilter("filter0", "P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 1 and P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 1");
	bizData1.refreshData();		
};


mainActivity.gridSelect2Closeup = function(event){
	var dataMain = justep.xbl("dataMain");
	var status = dataMain.getValue("dESTROYTYPE");
	if(status == 1) {
		justep.xbl('gridSelect4').setDisabled(true);
		justep.xbl('gridSelect5').setDisabled(true);
		justep.xbl('treeSelect1').setDisabled(false);
		justep.xbl('gridSelect8').setDisabled(false);
		justep.xbl('gridSelect3').setDisabled(true);
		
		
	}else{
		justep.xbl('gridSelect4').setDisabled(false);
		justep.xbl('gridSelect5').setDisabled(false);
		justep.xbl('treeSelect1').setDisabled(true);
		justep.xbl('gridSelect8').setDisabled(true);
		justep.xbl('gridSelect3').setDisabled(false);
		
	}
};

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
mainActivity.treeSelect1Closeup = function(event){
	var dataMain = justep.xbl("dataMain");
	var docNode = dataMain.getValue("sParentID", dataMain.getCurrentID());
	var docNodeTree = justep.xbl("docNodeTree");
	var id = docNodeTree.getCurrentID();
	//alert(id);
	if(docNode!='' &&docNode!=null){
		var docData = justep.xbl("docData");
		docData.setFilter("filter0", "SA_DocNode.sSize is not null and SA_DocNode.sParentID ='"+id+"'");
		docData.refreshData();
	}
		dataMain.setValue("fILEID",'');
//		dataMain.setValue("sDocName",'');
};


mainActivity.gridSelect5Closeup = function(event){
	var bizData1 = justep.xbl("bizData1");
	var dataMain = justep.xbl("dataMain");
	var dOCUMENTCATEGORY = dataMain.getValue("dOCUMENTCATEGORY");
	var dOCUMENTTYPE = dataMain.getValue("dOCUMENTTYPE");
	if ( dOCUMENTTYPE!='') {

		bizData1.setFilter("filter1", "1=1");
		bizData1.refreshData();
		bizData1.setFilter("filter1", "P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 1 and P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 1 and P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE="+dOCUMENTTYPE+" and P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY="+dOCUMENTCATEGORY);
		bizData1.refreshData();
		
		dataMain.setValue("fILEID", bizData1.getRowId(0));
		dataMain.setValue("fILENAME",bizData1.getValue("pFILENAME",bizData1.getRowId(0)));
	} 
};
