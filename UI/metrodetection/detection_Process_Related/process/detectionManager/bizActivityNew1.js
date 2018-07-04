var bizActivityNew1 = {};


bizActivityNew1.mdDefaultXBLLoaded = function(event){
		var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("filter","TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
};
