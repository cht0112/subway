var bgsh = {};

bgsh.tabPage2_8Select = function(event) {
	var w = justep.xbl("dataMain");
	var s = w.getCurrentID();

};

bgsh.mdDefaultXBLLoaded = function(event) {
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
	$(justep.xbl('textarea1_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea2_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea3_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea4_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea5_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea6_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea7_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 1000) {
			return false;
		}
	});
	$(justep.xbl('textarea8_9').input).bind('keydown', function(evt) {
		if (this.value.length >= 1000) {
			return false;
		}
	});
	var w = justep.xbl("dataMain");
	var s = w.getCurrentID();

	var a = justep.xbl("xiangmu");
	a.setFilter("filter", "TEST_PROJECT_INFO.aPPLICATIONNO=" + s);
	a.refreshData();
	var projectId = a.getCurrentID();

	var biangeng = justep.xbl("biangeng");
	var qw = a.getValue("pROJECTMANAGER");
	biangeng.setFilter("filter0", "CHANGE_APPLY_INFO.PROJECT_IDID=" + projectId);
	biangeng.refreshData();
	var sysOperData = justep.xbl("hrPerData");
	sysOperData.setFilter("filter1","HR_BASE_INFO='"+qw+"'");
	sysOperData.refreshData();
	var aa =sysOperData.getValue("oPERATORNAME");
	biangeng.setValue("APPLY_APPROVER",qw);
	biangeng.setValue("oPERATORNAME1",aa);
	var dataMaster = justep.xbl("dataMain");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	
	hrPerData.setFilter("filter1", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
	biangeng.setValue("CHANGE_AUDITOR",perId);
	biangeng.setValue("oPERATORNAME2",name);	
	
};

bgsh.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
};
