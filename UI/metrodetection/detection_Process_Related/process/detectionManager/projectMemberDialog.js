var projectMemberDialog = {};
var hrDialog = {};
projectMemberDialog._inputParams = {
		applicationNo : null 
};

projectMemberDialog.modelLoad = function(event){
	debugger;
	var main = justep.xbl("main");
	var param = new justep.Request.ActionParam();
	var tp= new justep.Request.TranslateParam();
	tp.rowOption.sequence = justep.xbl("main").getColumnIds();
//	tp.rowOption.sequence = "OPERATOR_NAME,OFFICE_ID_CNAME,ROLE_CNME,ROLEID";
	//alert(justep.xbl("main").getColumnIds());
	var options = {};
	options.translateParam = tp;
	options.parameters = param;
	options.action = "queLiXiangMuChengYuanAction";
	var response = justep.Request.sendBizRequest2(options);
	var result = justep.Request.transform(justep.Request.getData(response.responseXML));
	main.loadXML(justep.XML.toString(result));
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
 */
projectMemberDialog.windowReceiverReceive = function(event){
	//debugger;
	projectMemberDialog._inputParams.applicationNo = event.data.applicationNo;
	var main = justep.xbl("main");
	var mainCount = main.getCount();
//	alert(mainCount);
	for(var i=0;i<mainCount;i++){
		main.setValue("APPLICATIONNO", projectMemberDialog._inputParams.applicationNo, main.getRowId(i));
	}

	var projectMemberData = justep.xbl("projectMemberData");
	projectMemberData.setFilter("filter0", "TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = "+projectMemberDialog._inputParams.applicationNo);
	projectMemberData.refreshData();
	var memberCount = projectMemberData.getCount();
//	alert(memberCount);
	for(var i=0;i<memberCount;i++){
		var projectId = projectMemberData.getRowId(i);
		var memberId = projectMemberData.getValue("pROJECTMEMBERID",projectId);
		for(var j=0;j<mainCount;j++){
			var mainId = main.getRowId(j);
			if(memberId == mainId){
				main.setValue("ch",1,mainId);
				checkRow(mainId, "1");
				break;
			}
		}
	}
//	alert("ok2")
};


projectMemberDialog.ensure_btnClick = function(event){
	debugger;
	var projectMemberData = justep.xbl("projectMemberData");
	var c = projectMemberData.getCount();
	var main = justep.xbl("main");
	var mainCount = main.getCount();
	var list = '';
	for(var i=0;i<mainCount;i++){
		var id = main.getRowId(i);
		if(main.getValue("ch",id)=="1"){
			list += id+",";
		}
	}
	justep.windowReceiver.windowEnsure({
		list:list
	},true);
	justep.windowReceiver.windowCancel();
};
