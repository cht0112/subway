var gradeActivity = {};

gradeActivity.dOrgTreeRefreshCreateParam = function(event){
	if (event.source.defTreeOption.loadTreeParent == justep.XData.IS_TREE_ROOT) 
		event.param.setString("manageCodes", justep.OpmUtils.MANAGE_TYPE_SYSTEM);
	else
		event.param.deleteParam("manageCodes");
};

gradeActivity.dOrgByPermissionRefreshCreateParam = function(event){
	mainActivity.dOrgByPermissionRefreshCreateParam(event);
	event.param.setBoolean("graded", true);
};
