var businessActivity1 = {};

businessActivity1.model1XBLLoaded = function(event){
	var dataMain = justep.xbl("bizData1");
	dataMain.setFilter("1","P_DOCUMENTS_BORROW_RECORD="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();	
	
	$(justep.xbl("input7").input).bind('keydown',function(evt){evt.preventDefault();});
};
