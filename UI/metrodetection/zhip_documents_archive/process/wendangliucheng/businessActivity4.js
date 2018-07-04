var businessActivity4 = {};

businessActivity4.model1XBLLoaded = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("1","P_DOCUMENTS_BORROW_RECORD="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
	
	var checkRecordData = justep.xbl("cData");
	checkRecordData.setFilter("filter0", "CHECK_RECORD.cHECKNAME = '终审' and CHECK_RECORD.aPPLICATIONNO ="+justep.Context.getProcessData1());
	checkRecordData.refreshData();
	var c = checkRecordData.getCount();
	if(c == 0) {
		checkRecordData.newData();
		checkRecordData.setValue("aPPLICATIONNO",justep.Context.getProcessData1());	
		checkRecordData.setValue("aPPLICATIONTYPE",1);
		checkRecordData.setValue("cHECKRESULT", 1);
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
		checkRecordData.setValue("cHECKER",perId);
	}
};

/**
	name:process#onAdvanceCommit
	description: <b>[回调型事件]</b>流转成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
businessActivity4.process1AdvanceCommit = function(event){
	var cData = justep.xbl("cData");
	cData.saveData();
};
