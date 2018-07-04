var bizActivity10 = {};

bizActivity10.mdDefaultLoad = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
	var rowID = dataMain.getCurrentID();
	//alert(rowID);
	var detObjType = dataMain.getValue("dETECTIONOBJECTTYPE", rowID);
	var detObj = dataMain.getValue("dEVICETYPE", rowID);
	
	
	//取得项目id
	//debugger;
	var testProjectInfoD = justep.xbl("testProjectInfoD");
	testProjectInfoD.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+parseInt(justep.Context.getProcessData1()));
	testProjectInfoD.refreshData();
	var projectId = testProjectInfoD.getCurrentID();
	
	//调用action插入一条新的检测方案记录,并取得检测方案Id
	var testShemeId;
	var recurrenceSchemeD = justep.xbl("recurrenceSchemeD");
	recurrenceSchemeD.setFilter("schemeFilter", "RECURRENCE_TEST_SCHEME.APPLICATION_NO="+parseInt(justep.Context.getProcessData1())+" and RECURRENCE_TEST_SCHEME.IS_USED=1");
	recurrenceSchemeD.refreshData();
	if(recurrenceSchemeD.getCount()==0){
		var process = justep.Context.getCurrentProcess();
		var activity = justep.Context.getCurrentActivity();
		var param = new justep.Request.ActionParam();
		param.setInteger("schemeId", parseInt(justep.Context.getProcessData1()));
		var action = justep.Request.sendBizRequest(process, activity, "newSchemeAction", param, null, null, null, null, null);
		var ui = justep.Request.transform(justep.Request.getData(action.responseXML));
		testShemeId=parseInt(ui);
	}else{
		testShemeId = recurrenceSchemeD.getValue("TEST_SCHEME_ID");
	}
	
	//在配置文件中读取url
	var windowFram = justep.xbl("myFrame");
	var url = "";
	var processScheme = justep.Context.getCurrentProcess();
	var activityScheme = justep.Context.getCurrentActivity();
	var action = justep.Request.sendBizRequest(processScheme, activityScheme, "readSchemeUrlAction", null, null, null, null, null, null);
	debugger;
	url = justep.Request.transform(justep.Request.getData(action.responseXML));
	//url="http://192.168.10.118:8088/tqms/test.jsp?projectId="+projectId+"&&testShemeId="+testShemeId
	url=url+"?projectId="+projectId+"&&testSchemeId="+testShemeId;
	var param = {objTypeP:detObjType,objP:detObj};
	windowFram.open(param,url);
	
};

/**
	name:windowFrame#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> windowFrame返回数据。
*/
bizActivity10.myFrameReceive = function(event){
	/*var data = event.data;
	var type = data.objTypeP;
	var obj = data.objP;
	alert("获取的参数--检测对象类型："+type+"检测对象："+obj);*/
};

/**
	name:windowFrame#onInit
	@event 
description: <b>[回调型事件]</b> 组件初始化完成后触发
*/
bizActivity10.myFrameInit = function(event){
	var data = event.data;
	var type = data.objTypeP;
	var obj = data.objP;
	alert("获取的参数--检测对象类型："+type+"检测对象："+obj);
};


