var businessActivity1 = {};

businessActivity1.mdDefaultLoad = function(event){
	var aa= justep.Context.getProcessData1();
	var dataMaster = justep.xbl("dataMain");
	dataMaster.setFilter("filter6", "CHANGE_APPLY_INFO="+aa);
	dataMaster.refreshData();
	var dataMaster = justep.xbl("dataMain");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
//	dataMaster.setValue("APPLY_PERSONPERSON",perId);
//	dataMaster.setValue("oPERATORNAME",name);	
	dataMaster.setValue("APPLY_APPROVER",perId);
	dataMaster.setValue("oPERATORNAME1",name);	
};
