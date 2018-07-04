var businessActivity1 = {};

businessActivity1.mdDefaultLoad = function(event){
var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("filter2", "CUSTOMER_COMPLAINT_INFO="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();	
};
