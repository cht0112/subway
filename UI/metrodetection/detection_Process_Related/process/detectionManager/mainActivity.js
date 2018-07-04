var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivity.mdDefaultLoad = function(event){
	//var date = new Date();
	//var resDT = date.toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
	//var dataMain = justep.xbl("dataMain");
	//dataMain.setValue("aPPLICATIONDATE",resDT);
	//$("#iptAPPLICATIONDATE").val(resDT);
//	var checkRecordData = justep.xbl("cData");
//	var c = checkRecordData.getCount();
//	if(c == 0) {
//		checkRecordData.newData();
//		checkRecordData.setValue("aPPLICATIONNO",justep.Context.getProcessData1());	
//		checkRecordData.setValue("aPPLICATIONTYPE",2);
//		checkRecordData.setValue("cHECKRESULT", 2);
//	}
};

mainActivity.trigger1Click = function(event){
//	var dataMain = justep.xbl("dataMain");
//	var tt = dataMain.getValue("dEVICETYPE");
//	alert(tt);
};
