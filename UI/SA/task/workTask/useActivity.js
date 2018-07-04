var useActivity = {};
useActivity.mainmodelLoad = function(event){
	var task = justep.Context.getTask();
	var data = justep.xbl("main");
	if (task != null){
		data.filters.setFilter("_work_task_default_filter_", "SA_WorkTask='" + task + "'");
		data.refreshData();
	}else{
		data.newData();
	}
};
useActivity.mainValueChanged = function(event){
	mainActivity.mainValueChanged(event);
};
useActivity.WorkTaskImportanceCloseup = function(event){
	mainActivity.setImportanceName();
};
useActivity.WorkTaskEmergencyCloseup = function(event){
	mainActivity.setEmergencyName();
};
useActivity.WorkTaskHandleStatusCloseup = function(event){
	mainActivity.setStatusName();
};
