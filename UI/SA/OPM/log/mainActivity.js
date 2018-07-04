var mainActivity = {};

mainActivity.imageSearchClick = function(event){
	justep.xbl("dLog").refreshData();
};

mainActivity.smartFilter1GetCondition = function(event){
	event.handled = true;
	return justep.Components.FilterUtils.joinFilter(event.defaultCondition, "sDescription like '%" + event.value + "%'", "or");
};
