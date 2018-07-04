var businessActivity4 = {};


businessActivity4.saveMore = function(event){
	var bizData2 = justep.xbl("bizData2");	
	bizData2.saveData();
	
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
businessActivity4.flwAdvanceCommit = function(data){
	var bizData2 = justep.xbl("bizData2");
//	bizData2.refreshData();
//	alert(bizData2.getCount());
	bizData2.saveData();
};

businessActivity4.mdDefaultLoad = function(event){
var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("filter2", "CUSTOMER_COMPLAINT_INFO="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();		
	var bizData2 = justep.xbl("bizData2");
	var id = dataMain.getCurrentID();
//	alert(id);
	bizData2.setFilter("filter0", "CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ID ="
			+ id);
	bizData2.refreshData();
	var opratorname = bizData2.getValue("oPERATORNAME2");
	if (opratorname == '' || opratorname == null){
		var operId = justep.Context.getOperatorID();
		var orgData = justep.xbl("sysOperData");
		orgData.setFilter("filter1", " SA_OPOrg like'" + operId + "@%'");
		orgData.refreshData();
//		alert(orgData.getCount());
		var oprScode = orgData.getValue("sCode");
//		alert(oprScode);
		var hrPerData = justep.xbl("hrPerData");
		hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='" + oprScode + "'");
		hrPerData.refreshData();
		var perId = hrPerData.getCurrentID();
		var name = hrPerData.getValue("oPERATORNAME", perId);
//		alert(perId);
//	    alert(name);
		bizData2.setValue("VERIFIER", perId);
		bizData2.setValue("oPERATORNAME2", name);
		
//		var str = justep.System.datetimeString();
//	    var tempStr = str.replace("-", "/").replace("-", "/");
//	    var dt = new Date(tempStr);
		var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
		bizData2.setValue("VERIFY_DATE", nowDateTimeStr, bizData2.getCurrentID());
		bizData2.setValue("RELEASE", 2);
		
		$(justep.xbl('textarea6').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
		$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	}
	
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
businessActivity4.bizData2ValueChanged = function(event){
	var i = document.getElementById('saveTrigger');
	i.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(false);	
};
