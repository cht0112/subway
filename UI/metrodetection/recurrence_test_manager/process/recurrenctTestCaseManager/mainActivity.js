var mainActivity = {};

mainActivity.model1Load = function(event){
	//在配置文件中读取url
	var windowFram = justep.xbl("recurrenceTestCaseFrame");
	var url = "";
	var processScheme = justep.Context.getCurrentProcess();
	var activityScheme = justep.Context.getCurrentActivity();
	var mDataParam = new justep.Request.ActionParam();
	mDataParam.setString("urlStr", "recurrenceTestCaseurl");
	var action = justep.Request.sendBizRequest(processScheme, activityScheme, "queryUrlAction", mDataParam, null, null, null, null, null);
	debugger;
	url = justep.Request.transform(justep.Request.getData(action.responseXML));
	//url="www.baidu.com";
	var param = {};
	windowFram.open(param,url);
};
