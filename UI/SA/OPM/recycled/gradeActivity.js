var gradeActivity = {};

gradeActivity.dOrgRefreshCreateParam = function(event){
	event.param.setString("manageCodes", justep.OpmUtils.MANAGE_TYPE_SYSTEM);
	event.param.setString("manageFilterMode", justep.OpmUtils.MANAGE_FILTER_MODE_LIKE);
};
