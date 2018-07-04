var projectActivity = {};

projectActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

projectActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

projectActivity.tabDetailSelect = function(event){
	//debugger;
	var reData = justep.xbl("recuScheProD");
	var dataMain = justep.xbl("dataMain");
	var id = dataMain.getCurrentID();
	if(id != null && id !=""){
		appNo = dataMain.getValue("aPPLICATIONNO", id);
		reData.setFilter("reFileter", "RECURRENCE_TEST_SCHEME.APPLICATION_NO="+appNo);
		reData.refreshData();
	}
};

projectActivity.iptPROJECTNAMEChange = function(event){
	var reData = justep.xbl("recuScheProD");
	var dataMain = justep.xbl("dataMain");
	var id = dataMain.getCurrentID();
	if(id != null && id !=""){
		appNo = dataMain.getValue("aPPLICATIONNO", id);
		reData.setFilter("reFileter", "RECURRENCE_TEST_SCHEME.APPLICATION_NO="+appNo);
		reData.refreshData();
	}
};

projectActivity.grid1RowDblClick = function(event){
	//alert("33");
	var schemeCaseWD = justep.xbl("schemeCaseWD");
	var reData = justep.xbl("recuScheProD");
	var id = reData.getCurrentID();
	if(id != null && id != ""){
		var schemeId = reData.getValue("curTESTSCHEMEID", id);
		//alert(schemeId);
		schemeCaseWD.open({"schemeId":schemeId});
	}
	
};
