var businessActivity2 = {};

businessActivity2.model1XBLLoaded = function(event){
	var checkRecordData = justep.xbl("cData");
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="+justep.Context.getProcessData1());
	checkRecordData.refreshData();
	var c = checkRecordData.getCount();
	if(c == 0) {
		checkRecordData.newData();
		checkRecordData.setValue("aPPLICATIONNO",justep.Context.getProcessData1());	
		checkRecordData.setValue("aPPLICATIONTYPE",1);
		checkRecordData.setValue("cHECKRESULT", 1);
		var orgData = justep.xbl("sysOperData");
		var operId = justep.Context.getOperatorID();
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
		checkRecordData.setValue("cHECKER",perId);
	}
};

businessActivity2.model1Load = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("1","DOCUMENTS_DESTROY_RECORD="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
};
