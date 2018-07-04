var reviewDefectBug = {};

reviewDefectBug.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	isEditOrSee();
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
};


reviewDefectBug.newItemClick = function(event){
	var dataMain = justep.xbl("dataMain");
	//dataMain.setValue("DEFECT_STATUS",4);
	dataMain.saveData();
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
	var status = dataMain.getValue("DEFECT_STATUS");
	var reviewer = dataMain.getValue("REVIEWER");
	var reviewDate = dataMain.getValue("REVIEW_DATE");
	if((parseInt(status)==6 || parseInt(status)==7) && justep.String.trim(reviewer) == justep.String.trim(sCode)){
		if(reviewDate==''||reviewDate==null){
			var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
			dataMain.setValue("REVIEW_DATE", nowDateTimeStr);
//			dataMain.setValue("REVIEW_DATE",justep.System.datetimeString());
		}
		justep.xbl('textarea2').setDisabled(false);
		justep.xbl('iptDEFECT_STATUS').setDisabled(false);		
	}else{
		justep.xbl('textarea2').setDisabled(true);
		justep.xbl('iptDEFECT_STATUS').setDisabled(true);
	}
}

reviewDefectBug.tabListSelect = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.refreshData();
};

reviewDefectBug.tabDetailSelect = function(event){
	isEditOrSee();
};

/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
reviewDefectBug.dataMainIndexChanged = function(event){
	isEditOrSee();	
};

reviewDefectBug.iptDEFECT_STATUSDropdown = function(event){
	var defectStatusData = justep.xbl("defectStatusData");
	defectStatusData.setFilter("filter0", "DEFECT_STATUS_CODE = 7 or DEFECT_STATUS_CODE = 6");
	defectStatusData.refreshData();	
};

reviewDefectBug.iptDEFECT_STATUSCloseup = function(event){
	var defectStatusData = justep.xbl("defectStatusData");
	defectStatusData.setFilter("filter0", "");
	defectStatusData.refreshData();		
};

reviewDefectBug.mdDefaultXBLLoaded = function(event){
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
	var perId = '';
	if(hrPerData.getCount()!=0){
		var perId = hrPerData.getCurrentID();
	}
	
	return perId;
}
reviewDefectBug.trigger3Click = function(event){
	var cData = justep.xbl("cData");
	var value = cData.getValue("value");
	var dataMain = justep.xbl('dataMain');
//	alert(value);
	if(parseInt(value)==1){
//		alert(getLoginId());
		dataMain.setFilter("filter0", "DEFECT_TRACK_BUG_INFO.REVIEWER = '"+getLoginId()+"'");
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
reviewDefectBug.dataMainValueChanging = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);		
};
