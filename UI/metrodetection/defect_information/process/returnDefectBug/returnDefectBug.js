var returnDefectBug = {};

returnDefectBug.grdMainRowDblClick = function(event){
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
	var status = dataMain.getValue("DEFECT_STATUS");
	var creator = dataMain.getValue("CREATOR");
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
	var perId='';
	var sCode='';
	if(hrPerData.getCount()!= 0){
		var perId = hrPerData.getCurrentID();
		var sCode = hrPerData.getValue("Scode",perId);
	}
//	alert(perID);
//	alert(status);
	if((parseInt(status)==3 || parseInt(status) == 4 || parseInt(status) ==7) && (justep.String.trim(creator)==justep.String.trim(perId) || justep.String.trim(creator)==justep.String.trim(sCode))){
//		alert("yes");
		justep.xbl('iptDEFECT_STATUS').setDisabled(false);
//		justep.xbl('gridSelect1').setDisabled(true);
//		justep.xbl('iptSEVERITY').setDisabled(true);
		justep.xbl('iptASSIGN_PERSON').setDisabled(true);
//		justep.xbl('iptPRIORITY').setDisabled(true);
//		justep.xbl('iptDEFECT_DESC').setDisabled(true);
//		justep.xbl('iptDEFECT_DETAIL').setDisabled(true);
//		justep.xbl('iptMEMO').setDisabled(true);
		justep.xbl('iptCC_PERSON').setDisabled(true);
	}else{
//		alert("no");
		justep.xbl('iptDEFECT_STATUS').setDisabled(true);
		justep.xbl('gridSelect1').setDisabled(true);
//		justep.xbl('iptSEVERITY').setDisabled(false);
		justep.xbl('iptASSIGN_PERSON').setDisabled(true);
//		justep.xbl('iptPRIORITY').setDisabled(false);
//		justep.xbl('iptDEFECT_DESC').setDisabled(false);
//		justep.xbl('iptDEFECT_DETAIL').setDisabled(false);
//		justep.xbl('iptMEMO').setDisabled(false);
		justep.xbl('iptCC_PERSON').setDisabled(true);
	}
}
returnDefectBug.newItemClick = function(event){
	var dataMain = justep.xbl("dataMain");
	//dataMain.setValue("DEFECT_STATUS",5);
	dataMain.saveData();
		var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
};

returnDefectBug.tabListSelect = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.refreshData();	
};

returnDefectBug.tabDetailSelect = function(event){
	isEditOrSee();
	statusFilter();
};
function statusFilter(){
	var dataMain = justep.xbl("dataMain");
	var status = dataMain.getValue("DEFECT_STATUS");
	var defectStatusData = justep.xbl("defectStatusData");
	if(status == 3){
		defectStatusData.setFilter("filter0", "DEFECT_STATUS_CODE = 2 or DEFECT_STATUS_CODE = 8 or DEFECT_STATUS_CODE = 3");
		defectStatusData.refreshData();	
	}else if(status == 4){
		defectStatusData.setFilter("filter0", "DEFECT_STATUS_CODE = 6 or DEFECT_STATUS_CODE = 2 or DEFECT_STATUS_CODE = 8 or DEFECT_STATUS_CODE = 4");
		defectStatusData.refreshData();	
//	}else if(status == 5){
//		defectStatusData.setFilter("filter0", "DEFECT_STATUS_CODE = 3 or DEFECT_STATUS_CODE = 4 or DEFECT_STATUS_CODE = 5");
//		defectStatusData.refreshData();	
	}else if(status == 7){
		defectStatusData.setFilter("filter0", "DEFECT_STATUS_CODE = 2 or DEFECT_STATUS_CODE = 7 or DEFECT_STATUS_CODE = 8");
		defectStatusData.refreshData();	
	}else{
		defectStatusData.setFilter("filter0", "");
		defectStatusData.refreshData();	
	}	
}

/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
returnDefectBug.dataMainIndexChanged = function(event){
	isEditOrSee();
	statusFilter();
};

returnDefectBug.iptDEFECT_STATUSCloseup = function(event){
	var dataMain = justep.xbl("dataMain");
	var status = dataMain.getValue("DEFECT_STATUS");
	if(status == 2){
		justep.xbl('iptASSIGN_PERSON').setDisabled(false);
		justep.xbl('iptCC_PERSON').setDisabled(false);
	}else if(status == 6){
		justep.xbl('iptASSIGN_PERSON').setDisabled(true);
		justep.xbl('iptCC_PERSON').setDisabled(true);
		justep.xbl('gridSelect1').setDisabled(false);
	}else{
		justep.xbl('iptASSIGN_PERSON').setDisabled(true);
		justep.xbl('iptCC_PERSON').setDisabled(true);
		justep.xbl('gridSelect1').setDisabled(true);
	}	
};

returnDefectBug.mdDefaultXBLLoaded = function(event){
	$(justep.xbl('iptMEMO').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('iptDEFECT_DESC').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}});
	$(justep.xbl('iptDEFECT_DETAIL').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('iptDEFECT_REASON').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
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
returnDefectBug.trigger3Click = function(event){
	var cData = justep.xbl("cData");
	var value = cData.getValue("value");
	var dataMain = justep.xbl('dataMain');
//	alert(value);
	if(value==1){
//		alert(getLoginId());
		dataMain.setFilter("filter0", "DEFECT_TRACK_BUG_INFO.CREATOR = '"+getLoginId()+"'");
		dataMain.refreshData();
	}else{
		dataMain.setFilter("filter0", "");
		dataMain.refreshData();
	}	
};

/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
returnDefectBug.dataMainValueChanging = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);		
};
