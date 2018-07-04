var gradeActivity = {};
gradeActivity.dOrgTreeRefreshCreateParam = function(event){
	if (event.source.defTreeOption.loadTreeParent == justep.XData.IS_TREE_ROOT) 
		event.param.setString("manageCodes", justep.OpmUtils.MANAGE_TYPE_SYSTEM);
	else
		event.param.deleteParam("manageCodes");
};
gradeActivity.wdSelectMoveToOrgSend = function(event){
	event.data.rootFilter = "";
	event.data.manageCodes = justep.OpmUtils.MANAGE_TYPE_SYSTEM;
	event.data.showVirtualRoot = false;
	return event.data;
};
gradeActivity.wdSearchOrgSend = function(event){
	event.data.manageTypeCodes = justep.OpmUtils.MANAGE_TYPE_SYSTEM;
	return event.data;
};

gradeActivity.wdAssignRolesSend = function(event){
	event.data.managed = true;
	return event.data;
};
