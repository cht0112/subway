var mainActivity = {};

mainActivity.isNotEmptyString = function(v){
	if (v == null || v == undefined || v==""){
		return false;
	}else{
		return true;
	}
};

mainActivity.activityFilterClick = function(event){
	mainActivity.activityFilter();
};
mainActivity.activityFilterButtonClick = function(event){
	mainActivity.activityFilter();
};
mainActivity.activityFilter = function(){
	justep.xbl("activityDialog").open();
};

mainActivity.actionFilterClick = function(event){
	mainActivity.actionFilter();
};
mainActivity.actionFilterButtonClick = function(event){
	mainActivity.actionFilter();
};

mainActivity.actionFilter = function(){
	var activityInput = justep("activityFilter");
	var process = "*";
	if (mainActivity.isNotEmptyString(activityInput.process)){
		process = activityInput.process;
	}
	var activity = "*";
	if (mainActivity.isNotEmptyString(activityInput.activity)){
		activity = activityInput.activity;
	}
	
	var param = {
			"model":"*",
			"process":process,
			"activity":activity
	};

	justep.xbl("actionDialog").open(param);
};

mainActivity.searchClick = function(event){
	var filter = justep("likeFilter").value;
	if (mainActivity.isNotEmptyString(filter)){
		filter = "SA_Log.sCreatorPersonName like '%" + filter + "%' " + 
				" or SA_Log.sActionName like '%" + filter + "%' " +
				" or SA_Log.sActivityName like '%" + filter + "%' " +
				" or SA_Log.sTypeName like '%" + filter + "%' " +
				" or SA_Log.sDescription like '%" + filter + "%' " +
				"";
	}else{
		filter = "";
	}
	
	justep.xbl("dataMain").filters.setFilter("_custom_like_filter_", filter);
	
	justep.xbl("dataMain").refreshData();
};
mainActivity.dateFilterChanged = function(event){
	var filter = justep.xbl("dateFilter").getDateFilter("SA_Log.sCreateTime");
	justep.xbl("dataMain").filters.setFilter("_custom_date_filter_", filter);
};

mainActivity.activityDialogReceive = function(event){
	var process = event.data.getValueByName("process", 0);		
	var activity = event.data.getValueByName("activity", 0);
	var name = event.data.getValueByName("label", 0);
	var input = justep("activityFilter");
	input.value = name;
	input.process = process;
	input.activity = activity;		

	var filter = "";
	if (mainActivity.isNotEmptyString(process) && mainActivity.isNotEmptyString(activity)){
		filter = "SA_Log.sProcess='" + process + "' and SA_Log.sActivity='" + activity + "'";
	}
	
	justep.xbl("dataMain").filters.setFilter("_custom_activity_filter_", filter);	
};
mainActivity.actionDialogReceive = function(event){
	var name = event.data.name;
	var action = event.data.action;
	var actionFilter = justep("actionFilter");
	actionFilter.value = name;
	actionFilter.action = action;

	var filter = "";
	if (mainActivity.isNotEmptyString(action)){
		filter = "SA_Log.sAction='" + action + "'";
	}else{
		filter = "";
	}
	
	justep.xbl("dataMain").filters.setFilter("_custom_action_filter_", filter);		
};
mainActivity.clearActivityFilterButtonClick = function(event){
	var input = justep("activityFilter");
	input.value = "";
	input.process = "";
	input.activity = "";	
	justep.xbl("dataMain").filters.setFilter("_custom_activity_filter_", "");	
};
mainActivity.clearActionFilterButtonClick = function(event){
	var actionFilter = justep("actionFilter");
	actionFilter.value = "";
	actionFilter.action = "";
	justep.xbl("dataMain").filters.setFilter("_custom_action_filter_", "");		
};


mainActivity.executorFilterButtonClick = function(event){
	justep.xbl("executorDialog").open({		
		"rootFilter" : "SA_OPOrg.sParent is null",
		"fixedFilter" : "",
		"manageTypeCodes" : "",
		"displayableOrgKinds" : "ogn,dpt,pos,psm",
		"selectableOrgKinds" : "ogn,dpt,pos,psm",
		"onlyMasterPsm" : false,
		"forceRefresh" : true}
	);
};
mainActivity.clearExecutorFilterButtonClick = function(event){
	var executorFilter = justep("executorFilter");
	executorFilter.value = "";
	executorFilter.executor = "";
	justep.xbl("dataMain").filters.setFilter("_custom_executor_filter_", "");		
};


mainActivity.executorDialogReceive = function(event){
	var executorFilter = justep("executorFilter");
	executorFilter.value = event.data.getValueByName("sName", 0);
	executorFilter.executor = event.data.getValueByName("sFID", 0);;
	justep.xbl("dataMain").filters.setFilter("_custom_executor_filter_", "SA_Log.sCreatorFID like '" + executorFilter.executor + "%'");		
};
mainActivity.grdMainRowDblClick = function(event){
	justep.xbl('tabPanel1').setTabActive("tabPage2");
};
