var bizActivity3 = {};

bizActivity3.mdDefaultXBLLoaded = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
	var checkRecordData = justep.xbl("checkRecordData");
	var input2_2 = document.getElementById("input2_2");
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="+parseInt(justep.Context.getProcessData1())+" and CHECK_RECORD.cHECKNAME='技术审核'");
	checkRecordData.refreshData();
	input2_2.setAttribute("value",checkRecordData.getValue("cHECKDESC"));
	checkRecordData.loadData();
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="+parseInt(justep.Context.getProcessData1())+" and CHECK_RECORD.cHECKNAME='行政审核'");
	checkRecordData.refreshData();
	var c = checkRecordData.getCount();
	if(c == 0) {
		checkRecordData.newData();
		checkRecordData.setValue("aPPLICATIONNO",parseInt(justep.Context.getProcessData1()));	
		checkRecordData.setValue("aPPLICATIONTYPE",2);
		checkRecordData.setValue("cHECKRESULT", 1);
	}
	//确立审批人
	//alert(justep.xbl("dataMain").getValue("dEVICETYPE"));
	var checkRecordData = justep.xbl("checkRecordData");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	//alert(perId);
	checkRecordData.setValue("cHECKER",perId);
	$(justep.xbl('textarea1_3').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('textarea2_2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
//	justep.xbl("textarea1_3").input.focus();
	var projectRoomData = justep.xbl("projectRoomData");
	projectRoomData.setFilter("filter0", "DETECTION_ROOM_INFO.rOOMTYPE="+2);
	projectRoomData.refreshData();
};
bizActivity3.insertTriggerClick = function(event){
	justep.xbl("hrDialog").open({
		applicationNo : justep.Context.getProcessData1()
	});
};


bizActivity3.trigger1_1Click = function(event){
	var sel = justep.xbl("tempData").instance.getValueByName("name");
	var rts = justep.xbl("roomType").instance.getValueByName("tName");
	justep.xbl("roomOccupyDialog").open({
		sel : sel,
		rts : rts
	});	
};

bizActivity3.trigger2_1Click = function(event){
	var sel = justep.xbl("tempData").instance.getValueByName("name");
	var rts = justep.xbl("roomType").instance.getValueByName("tName");

	var qData = justep.xbl("projectRoomData");

	if(sel != null && sel != '') {
		if(rts != null && rts != '') {
			qData.setFilter("filter0", "ROOM_APPLY_INFO.aPPLYFOROBJECT="+sel+" and ROOM_TYPE_CODE="+rts);
		} else {
			qData.setFilter("filter0", "ROOM_APPLY_INFO.aPPLYFOROBJECT="+sel);
		}
	} else {
		if(rts != null && rts != '') {
			qData.setFilter("filter0", "ROOM_TYPE_CODE="+rts);
		} else {
			qData.setFilter("filter0", "");
		}
	}
	qData.refreshData();
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
 */
bizActivity3.hrDialogClose = function(event){
	var qData = justep.xbl("projectMemberData");
	qData.loadData();
	qData.refreshData();
};

bizActivity3.removeTriggerClick = function(event){
	debugger;
	//alert(justep.Context.getProcessData1())
	var data = justep.xbl('projectMemberData');
	var id = data.getCurrentID();
//	alert(id);
	var applicationNo = data.getValue("aPPLICATION_NO",id);
	var project_info = data.getValue("project_info", id);
	var OCCUPYENDDATETIME = data.getValue("OCCUPYENDDATETIME",id);
//	alert(OCCUPYENDDATETIME)
	if(applicationNo!=justep.Context.getProcessData1()){
		alert("非本项目数据，您没有权限删除！");
	}else if(OCCUPYENDDATETIME!=null && OCCUPYENDDATETIME!=''){
		alert("此成员已被占用，您没有权限删除！");
	}else{
		if (confirm("是否确定删除数据？")) {
			data.deleteData(id);
			var param = new justep.Request.ActionParam();
			param.setString("id", project_info);
			var response = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess","bizActivity3", "queryProjectMemberListAction", param);
		}
	}
	data.refreshData();
};

bizActivity3.roomClick = function(event){
	var sel = justep.xbl("tempData").instance.getValueByName("name");
	var rts = justep.xbl("roomType").instance.getValueByName("tName");
	justep.xbl("hrOccupyDialog").open({
		sel : sel,
		rts : rts
	});
};
function aa(){
	return justep.Context.getProcessData1();
}


/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
 */
bizActivity3.hrDialogReceive = function(event){
	var projectMemberData = justep.xbl("projectMemberData");
	debugger;
	var param = new justep.Request.ActionParam();
	var listparam = new justep.Request.ListParam();
	var list = event.data.list;
	var list = list.split(",");
	for( var i = 0;i<list.length-1;i++ ){
		listparam.add(new justep.Request.SimpleParam(list[i],justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	param.setList("list", listparam);
	param.setString("applNo", justep.Context.getProcessData1().toString());
	var response = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess","bizActivity3", "projectMember", param);
};




/**
	name:process#onBeforeAdvance
	description: <b>[回调型事件]</b>流转之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
bizActivity3.flwBeforeAdvance = function(data){
	var checkRecordData = justep.xbl("checkRecordData");
	checkRecordData.saveData();
};

bizActivity3.refreshTriggerClick = function(event){
	var projectRoomData = justep.xbl("projectRoomData");
	projectRoomData.refreshData();
};

bizActivity3.roomInfoSelect = function(event){
	var pDate = justep.xbl("projectMemberData");
	var applicationNO = justep.Context.getProcessData1();
	pDate.setFilter("filterTime", "TEST_PROJECT_MEMBER_INFO_VIEW.aPPLICATION_NO = "+applicationNO+" or TEST_PROJECT_MEMBER_INFO_VIEW.OCCUPYENDDATETIME > :currentDateTime()");
	pDate.refreshData();
	pDate.loadData();
};

/**
	name:process#onBeforeBack
	description: <b>[回调型事件]</b>回退之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
bizActivity3.flwBeforeBack = function(event){
	//回退之前删除之前选择的人员
	var pData = justep.xbl("projectMember");
	var applicationNO = justep.Context.getProcessData1();
	pData.setFilter("filterTime", "TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = "+applicationNO);
	pData.refreshData();
	pData.loadData();
	var cou = pData.getCount();
	for ( var i = 0; i < cou; i++) {
		var rowIDs = pData.getID(i);
		pData.deleteData(rowIDs);
		/*if(!pData.eof()) {
			pData.next();
		} else {
			break;
		}*/
	}
	pData.saveData();
};
