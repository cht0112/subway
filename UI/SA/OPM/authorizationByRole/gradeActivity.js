var gradeActivity = {};

gradeActivity.dRoleRefreshCreateParam = function(event){
	event.param.setBoolean("managed", true);
};

gradeActivity.dAuthorizeRefreshCreateParam = function(event){
	mainActivity.dAuthorizeRefreshCreateParam(event);
	event.param.setBoolean("graded", true);
};
