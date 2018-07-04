var useActivity = {};
useActivity.mainmodelLoad = function(event){
	var task = justep.Context.getTask();
	var data = justep.xbl("main");
	if (task != null){
		data.filters.setFilter("_work_record_default_filter_", "SA_WorkRecord='" + task + "'");
		data.refreshData();
	}else{
		data.newData();
	}
};
useActivity.mainValueChanged = function(event){
	mainActivity.mainValueChanged(event);	
};
useActivity.TaskImportanceCloseup = function(event){
	mainActivity.setImportanceName();
};
