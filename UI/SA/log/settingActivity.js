var settingActivity = {};

settingActivity.openDialog = function(operator, id){
	justep.xbl("detailDialog").open({
		operator : operator,
		id : id
	});
};

settingActivity.insertItemClick = function(event){
	settingActivity.openDialog("new");
};

settingActivity.listGridRowDblClick = function(event){
	var data = justep.xbl('listData');
	var id = data.getCurrentRowId();
	if (!!id)
		settingActivity.openDialog("edit", id);
};
settingActivity.detailDialogReceive = function(event){
	var data = justep.xbl("listData");
	data.refreshData();
	id = event.data.id;
	if (!!id && (data.getCurrentRowId() != id) && (data.getIndex(id) >= 0))
		data.setIndex(data.getIndex(id));
};
settingActivity.trigger2Click = function(event){
	var data = justep.xbl('listData');
	var id = data.getCurrentRowId();
	if (!!id)
		settingActivity.openDialog("edit", id);
};

settingActivity.allowEdit = function(){
	var data = justep.xbl('listData');
	return data.getCount() == 0;
	
};
settingActivity.useClick = function(event){
	justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), 
			justep.Context.getCurrentActivity(), 
			"enableLogSettingAction", 
			"<form/>");
};
settingActivity.searchClick = function(event){
	var searchText = justep("searchText").value;
	
	if (searchText == null || searchText == undefined || searchText == ""){
		searchText = "";
	}else{
		searchText = "SA_LogSetting.sModelName like '%" + searchText + "%' " + 
					"or SA_LogSetting.sActivityName like '%" + searchText + "%' "
					"or SA_LogSetting.sActionName like '%" + searchText + "%' "
					"or SA_LogSetting.sCreatorName like '%" + searchText + "%'";
	}
	
	var data = justep.xbl("listData");
	data.filters.setFilter("_custom_like_filter_", searchText);
	data.refreshData();
	
};
