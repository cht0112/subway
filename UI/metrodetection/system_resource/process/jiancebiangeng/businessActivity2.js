var businessActivity2 = {};

businessActivity2.tabPage2Select = function(event){
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
	dataMaster.setValue("APPLY_PERSONPERSON",perId);
	dataMaster.setValue("oPERATORNAME",name);	
	dataMaster.setValue("APPLY_APPROVER",perId);
	dataMaster.setValue("oPERATORNAME1",name);	
};

businessActivity2.model1XBLLoaded = function(event){
	var aa= justep.Context.getProcessData1();
	var dataMaster = justep.xbl("dataMain");
	dataMaster.setFilter("filter6", "CHANGE_APPLY_INFO="+aa);
	dataMaster.refreshData();
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
	dataMaster.setValue("CHANGE_AUDITOR",perId);
	dataMaster.setValue("oPERATORNAME2",name);
//	dataMaster.setValue("CHANGE_AUDIT_DATE",justep.System.datetimeString());
$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea4').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea5').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea6').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea7').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
$(justep.xbl('textarea8').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );	
};
