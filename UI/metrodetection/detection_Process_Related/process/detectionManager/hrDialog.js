var hrDialog = {};
hrDialog._inputParams = {
	applicationNo : null 
};
hrDialog.btnHrClick = function(event){

//	var  mainData = justep.xbl("main");
//	var hrSelect = justep.xbl("hrSelect");
//	var hr = $(hrSelect).attr("value");
//	
//	var param = new justep.Request.ActionParam();
//	param.setInteger("hr", hr);
//	mainData.setFilter("filter0","HR_SKILL_INFO.aPPLYFOROBJECT="+hr);
//	mainData.refreshData();
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
hrDialog.windowReceiverReceive = function(event){
debugger;
	hrDialog._inputParams.applicationNo = event.data.applicationNo;
	var main = justep.xbl("main");
	var mainCount = main.getCount();
//	alert(mainCount);
	var projectMemberData = justep.xbl("projectMemberData");
	projectMemberData.setFilter("filter0", "TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = "+hrDialog._inputParams.applicationNo);
	projectMemberData.refreshData();
	var memberCount = projectMemberData.getCount();
	//alert(memberCount);
	for(var i=0;i<memberCount;i++){
		var projectId = projectMemberData.getRowId(i);
		var memberId = projectMemberData.getValue("pROJECTMEMBERID",projectId);
		for(var j=0;j<mainCount;j++){
			var mainId = main.getRowId(j);
			if(memberId == mainId){
//				main.setValue("ch",1,mainId);
//				checkRow(mainId, "1");
				break;
			}
		}
	}
};

hrDialog.gridSelect2_2Dropdown = function(event){

		//role.setFilter("filter0", "ROLE_ID = ");
};

hrDialog.modelLoad = function(event){
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
	main.loadXML(result.xml);
	//alert(main.getCount());
	//输出xml中内容
	//alert(justep.XML.toString(response.responseXML));
	//验证Action调用是否成功
	//alert(justep.Request.getMessage(response.responseXML));
};


/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
hrDialog.gridRowClick = function(event){
		var main = justep.xbl("main");
		var currentId = main.getCurrentID();
		//alert(currentId);
		var roleData = justep.xbl("roleData");
		roleData.setFilter("filter0", "ROLE_OPERATOR.oPERATORID  like '"+currentId+"'" );
		roleData.refreshData();
};


hrDialog.refresh_btnClick = function(event){
	justep.MultiList.windowRefresh();
};

/**
	name:grid#onRowCheck
	description: 当有column的类型为checkbox时候，选择触发，可以通过event.cancel忽略当前操作
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID,"checked":是否选中,"cancel":是否取消当前动作}
*/
hrDialog.gridRowCheck = function(event){
	var main = justep.xbl("main");
	var grid = justep.xbl("grid").grid;
	var currentId = event.rowId;
	grid.setIndex(currentId);
 	main.setValue("aPPLICATION_NO",hrDialog._inputParams.applicationNo,currentId);
};


/**
	name:grid#onAfterIndexChanged
	description: 当前行改变结束后触发
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":选中行的ID,"oldRowID":行改变前的rowID}
*/
hrDialog.gridAfterIndexChanged = function(event){
debugger;
	var currentId = event.oldRowId;
	var main = justep.xbl("main");
	var ch = main.getValue("ch", currentId);
	if(ch=="1"){
		main.setValue("ch",0,currentId);
//		main.setValue("ch",1,currentId);
		$(document.getElementById(currentId)).remove();
		checkCount();
		synchrSelectIds();
		deleteSelectData(currentId);
		main.setValue("ch",1,currentId);
		checkRow(currentId, "0");
	}
	
};

hrDialog.gridSelect9_2Closeup = function(event){
	debugger;
	var main = justep.xbl("main");
	var grid = justep.xbl("grid").grid;
	var num = parseInt((Math.random() * main.getCount()) + 1);
	var currentId = main.getRowId(num);
	grid.setIndex(currentId);
	
};

hrDialog.ensure_btnClick = function(event){
debugger;
var selectData = new Array(new Array());
justep.xbl('windowReceiver').windowEnsure(selectData);
//justep.MultiList.windowOK();	
};
