var mainActivity = {};

mainActivity.mdDefaultXBLLoaded = function(event){
    var dataMain = justep.xbl("dataMain");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'" + operId + "@%'");
	orgData.refreshData();
//	alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
//	alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='" + oprScode + "'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME", perId);
//	 alert(perId);
//	 alert(name);
	dataMain.setValue("RECEIPT", perId);
	dataMain.setValue("oPERATORNAME", name);
	
	$(justep.xbl("iptCONTACTOR").input).attr("maxlength", 50);
	$(justep.xbl("input3").input).attr("maxlength", 200);
	$(justep.xbl("input4").input).attr("maxlength", 20);
	$(justep.xbl("input14").input).attr("maxlength", 20);
	$(justep.xbl("input15").input).attr("maxlength", 200);
	$(justep.xbl("input16").input).attr("maxlength", 50);
	$(justep.xbl("input20").input).attr("maxlength", 200);
	$(justep.xbl("input21").input).attr("maxlength", 200);
	$(justep.xbl("input24").input).bind('keydown',function(evt){evt.preventDefault();});
	$(justep.xbl("input19").input).bind('keydown',function(evt){evt.preventDefault();});

	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
//	justep.Request.sendHttpRequest("/UI/metrodetection/customer_service/process/infomationComplaint/importValue.j", null, null, null, null, null, null);
};

mainActivity.input15Blur = function(event){
    var email = justep.xbl('input15').input.value;
    //	alert(email);
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	// alert(!reg.test(email));
	if (reg.test(email)  || email == '') {
		
		return;
	}else{
		alert('邮箱格式错误!');
	}
};

mainActivity.saveMore = function(event){
//debugger;
    var dataMain = justep.xbl("dataMain");
	var main = justep.xbl("main");
//	alert(dataMain.getCurrentID());
	main.setFilter("filter", "sData1='"+dataMain.getCurrentID()+"' AND SA_Task.sParent is null AND SA_Task.sTypeName = '客户投诉管理'");
	main.refreshData();
	dataMain.saveData();
//	alert(main.getCount());
//	alert(main.getCurrentID());
	main.setValue("sESField05", dataMain.getValue("COMPLAINT_DOC_NO"));
	main.saveData();
	var i = document.getElementById('saveTrigger');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(true);
};

/**
	name:process#onAdvanceCommit
	description: <b>[回调型事件]</b>流转成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
mainActivity.flwAdvanceCommit = function(data){
	var dataMain = justep.xbl("dataMain");
//	dataMain.saveData();
	var main = justep.xbl("main");
//	alert(dataMain.getCurrentID());
	main.setFilter("filter0", "sData1='"+dataMain.getCurrentID()+"' AND SA_Task.sParent is null AND SA_Task.sTypeName = '客户投诉管理'");
	main.refreshData();
//	alert(main.getCount());
//	alert(main.getCurrentID());
	main.setValue("sESField05", dataMain.getValue("COMPLAINT_DOC_NO"),main.getCurrentID());
	main.saveData();
};




/**
	name:process#onAbortCommit
	description: <b>[回调型事件]</b>终止成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
mainActivity.flwAbortCommit = function(data){
	var dataMain = justep.xbl("dataMain");
	dataMain.saveData();
	var main = justep.xbl("main");
//	alert(dataMain.getCurrentID());
	main.setFilter("filter", "sData1='"+dataMain.getCurrentID()+"' AND SA_Task.sParent is null AND SA_Task.sTypeName = '客户投诉管理'");
	main.refreshData();
//	alert(main.getCount());
//	alert(main.getCurrentID());
	main.setValue("sESField05", dataMain.getValue("COMPLAINT_DOC_NO"),main.getCurrentID());
	main.saveData();
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMainValueChanged = function(event){
	var i = document.getElementById('saveTrigger');
	i.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(false);
};
