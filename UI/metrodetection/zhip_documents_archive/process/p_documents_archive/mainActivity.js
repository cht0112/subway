var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
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
	dataMain.setValue("iNPUTOPERATOR",perId);
	dataMain.setValue("oPERATORNAME1",hrPerData.getValue("oPERATORNAME", perId));
	dataMain.setValue("dESTROYSTATE",1);
};

mainActivity.gridSelect5Dropdown = function(event){
	var dataMain = justep.xbl("dataMain");
	var docCategory = dataMain.getValue("dOCUMENTCATEGORY", dataMain.getCurrentID());
	if(docCategory!=""){
		var leixing = justep.xbl("leixing");
		leixing.setFilter("filter0", "DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY = "+ docCategory);
		leixing.refreshData();
	}	
};

mainActivity.gridSelect7Dropdown = function(event){
	var dataMain = justep.xbl("dataMain");
	var docCategory = dataMain.getValue("rOOMTYPE", dataMain.getCurrentID());
		var leixing = justep.xbl("roomData");
		leixing.setFilter("filter0", "DETECTION_ROOM_INFO.rOOMTYPE = "+ docCategory);
		leixing.refreshData();
}

mainActivity.tabListSelect = function(event){
	var dataDetail = justep.xbl("dataMain");
	dataDetail.refreshData();
};

mainActivity.mdDefaultXBLLoaded = function(event){
	var dataMain = justep.xbl("roomtypeData");
	dataMain.setFilter("filter0","ROOM_TYPE_CODE = 1");
	dataMain.refreshData();
};

mainActivity.newItemClick1 = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
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
	dataMain.setValue("iNPUTOPERATOR",perId);
	dataMain.setValue("oPERATORNAME1",hrPerData.getValue("oPERATORNAME", perId));
	dataMain.setValue("dESTROYSTATE",1);
};
