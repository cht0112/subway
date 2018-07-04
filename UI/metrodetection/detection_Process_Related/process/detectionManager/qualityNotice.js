var qualityNotice = {};

qualityNotice.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
	
	var dataMain = justep.xbl("pData");
	dataMain.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
	dataMain.loadData();
	
	var projectMember = justep.xbl("projectMember");
	projectMember.setFilter("filter0", "TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO="+parseInt(justep.Context.getProcessData1()));
	//projectMember.refreshData();
	projectMember.loadData();
	
	var pDataList = justep.xbl("member");
	pDataList.setFilter("filter", "TEST_PROJECT_INFO.aPPLICATIONNO="+parseInt(justep.Context.getProcessData1()));
	pDataList.loadData();
	
};
