var businessActivity2 = {};


businessActivity2.mdDefaultXBLLoaded = function(event){
    
};



businessActivity2.saveMore = function(event) {
	var dataMain = justep.xbl("dataMain");
	dataMain.saveData();
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
businessActivity2.flwAdvanceCommit = function(data){
	var dataMain = justep.xbl("dataMain");
		dataMain.saveData();
	
};



businessActivity2.mdDefault2Load = function(event){
	var dataMaster = justep.xbl("dataMaster");
//	alert(parseInt(justep.Context.getProcessData1()));
	dataMaster.setFilter("filter2", "CUSTOMER_COMPLAINT_INFO="+parseInt(justep.Context.getProcessData1()));
	dataMaster.refreshData();
	
	var dataMain = justep.xbl("dataMain");
//    alert(justep.xbl("dataMaster").getCount());
	var id = justep.xbl("dataMaster").getCurrentID();
	
//	alert(id);
	dataMain.setFilter("filter0", "CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ID ="
			+ id);
	dataMain.refreshData();
	
	if (dataMain.getCount() == 0) {
		dataMain.newData();
		dataMain.setValue("COMPLAINT_ID", id,dataMain.getCurrentID());	
	}
	
	var opratorname = dataMain.getValue("oPERATORNAME");
	if (opratorname == '' || opratorname == null){
		var operId = justep.Context.getOperatorID();
		var orgData = justep.xbl("sysOperData");
		orgData.setFilter("filter1", " SA_OPOrg like'" + operId + "@%'");
		orgData.refreshData();
		// alert(orgData.getCount());
		var oprScode = orgData.getValue("sCode");
		// alert(oprScode);
		var hrPerData = justep.xbl("hrPerData");
		hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='" + oprScode + "'");
		hrPerData.refreshData();
		var perId = hrPerData.getCurrentID();
		var name = hrPerData.getValue("oPERATORNAME", perId);
		// alert(perId);
		// alert(name);
		dataMain.setValue("RESPONSOR", perId);
		dataMain.setValue("oPERATORNAME", name);
		
		$(justep.xbl('textarea7').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	}
	
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
businessActivity2.dataMainValueChanged = function(event){
	var i = document.getElementById('saveTrigger');
	i.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(false);
};
