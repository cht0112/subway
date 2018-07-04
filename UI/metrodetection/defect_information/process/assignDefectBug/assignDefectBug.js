var assignDefectBug = {};

assignDefectBug.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	isEditOrSee();
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
};

function isEditOrSee(){
debugger;
	var dataMain = justep.xbl("dataMain");
	//获取当前登录人ID
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId='';
	var sCode='';
	if(hrPerData.getCount()!= 0){
		var perId = hrPerData.getCurrentID();
		var sCode = hrPerData.getValue("Scode",perId);
	}
	var status = dataMain.getValue("DEFECT_STATUS");
//	alert(status);
//	alert(perId);
	if(parseInt(status) ==1 && justep.String.trim(dataMain.getValue("ASSIGN_PERSON"))==justep.String.trim(sCode)){
		justep.xbl('iptASSIGN_PERSON').setDisabled(false);
		justep.xbl('iptCC_PERSON').setDisabled(false);		
		justep.xbl('iptDEFECT_STATUS').setDisabled(false);
		justep.xbl('textarea1').setDisabled(false);
		justep.xbl('iptMEMO').setDisabled(false);
		justep.xbl('gridSelect1').setDisabled(false);
		var id = document.getElementById('saveMas');
		id.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMas").attr("src", tt);
		justep.xbl('saveMas').setDisabled(false);
	}else{
		justep.xbl('iptASSIGN_PERSON').setDisabled(true);
		justep.xbl('iptCC_PERSON').setDisabled(true);
		justep.xbl('iptDEFECT_STATUS').setDisabled(true);
		justep.xbl('textarea1').setDisabled(true);
		justep.xbl('iptMEMO').setDisabled(true);
		justep.xbl('gridSelect1').setDisabled(true);	
		var ii = document.getElementById('saveMas');
		ii.disabled = true;
		var cc = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/un_save.gif", true);
		$("#saveMas").attr("src", cc);
		justep.xbl('saveMas').setDisabled(true);	
	}
}
assignDefectBug.saveMore = function(event){
	var dataMain = justep.xbl("dataMain");
	var status = dataMain.getValue("DEFECT_STATUS");
	if(status == 1){
		dataMain.setValue("DEFECT_STATUS",2);
	}
	dataMain.saveData();	
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);	
};


assignDefectBug.tabDetailSelect = function(event){
	isEditOrSee();
};

assignDefectBug.tabListSelect = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.refreshData();
};

/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
assignDefectBug.dataMainIndexChanged = function(event){
	isEditOrSee();	
};

assignDefectBug.iptDEFECT_STATUSDropdown = function(event){
		var defectStatusData = justep.xbl("defectStatusData");
		defectStatusData.setFilter("filter0","DEFECT_STATUS_CODE = 2 or DEFECT_STATUS_CODE=1");
		defectStatusData.refreshData();	
};

assignDefectBug.mdDefaultXBLLoaded = function(event){
	$(justep.xbl('iptMEMO').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('iptDEFECT_DESC').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}});
	$(justep.xbl('iptDEFECT_DETAIL').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
};

function getLoginId(){
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	return perId;
}

assignDefectBug.trigger3Click = function(event){
	var cData = justep.xbl("cData");
	var value = cData.getValue("value");
	var dataMain = justep.xbl('dataMain');
//	alert(value);
	if(value==1){
//		alert(getLoginId());
		dataMain.setFilter("filter0", "DEFECT_TRACK_BUG_INFO.ASSIGN_PERSON = '"+getLoginId()+"'");
		dataMain.refreshData();
	}else{
		dataMain.setFilter("filter0", "");
		dataMain.refreshData();
	}	
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
assignDefectBug.dataMainValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);	
};
