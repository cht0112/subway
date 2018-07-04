var planNotice = {};

planNotice.mdDefaultLoad = function(event){
	var applicationData = justep.xbl("dataMain");
	applicationData.setFilter("filter0", "TEST_APPLICATION_INFO='"+justep.Context.getProcessData1()+"'");
	applicationData.refreshData();
	applicationData.loadData();
	
	var sampleDeviceData = justep.xbl("sampleDeviceData");
	sampleDeviceData.setFilter("filter0", "SAMPLE_DEVICE_INFO.aPPLICATIONNO ='"+justep.Context.getProcessData1()+"'");
	sampleDeviceData.refreshData();
	sampleDeviceData.loadData();
};
