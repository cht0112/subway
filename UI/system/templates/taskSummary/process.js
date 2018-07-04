var process = {};
process.model1Load = function(event){
	if (task != undefined && task != null){
		var data = justep.xbl("main");
		data.filters.setFilter("_custom_filter_", "SA_Task='" + task + "'");
		data.refreshData();
	}else{
		var msg = new justep.Message(justep.Message.JUSTEP230058);
		throw justep.Error.create(msg);
	}
};

process.barVisible = function(){
	var pattern = justep.Context.getRequestParameter("activity-pattern");
	if (pattern == 'do'){
		return true;
	}else{
		return false;
	}
};


