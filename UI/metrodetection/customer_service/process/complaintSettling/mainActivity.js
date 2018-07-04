var mainActivity = {};

mainActivity.grdMasterRowDblClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event) {
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.saveMore = function(event) {
	var dataMaster = justep.xbl("dataMaster");
	var bizData1 = justep.xbl("bizData1");
	// dataMaster.saveData();
	bizData1.saveData();
	dataMaster.setValue("STATUS", 2, dataMaster.getCurrentID());
	// dataMaster.saveData();
	var i = document.getElementById('saveTrigger');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(true);
};

mainActivity.clickSaveMore = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.tabDetailSelect = function(event) {
	var bizData1 = justep.xbl("bizData1");
	var id = justep.xbl("dataMaster").getCurrentID();
	// alert(id);
	bizData1.setFilter("filter0", "CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ID ="
			+ id);
	bizData1.refreshData();
	if (bizData1.getCount() == 0) {
		bizData1.newData();
		bizData1.setValue("COMPLAINT_ID", id);
	}


	
	var opratorname = bizData1.getValue("oPERATORNAME");
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
		bizData1.setValue("RESPONSOR", perId);
		bizData1.setValue("oPERATORNAME", name);
	}


	var i = document.getElementById('saveTrigger');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(true);
};

mainActivity.trigger1Click = function(event) {
	var dataMaster = justep.xbl("dataMaster");
	var type = justep.xbl("tempData").instance.getValueByName("val");
	if (type == 1 || type == 2) {
		dataMaster.setFilter("filter3", "CUSTOMER_COMPLAINT_INFO.STATUS="
				+ type);
		dataMaster.refreshData();
	}
	if (type == 0) {
		dataMaster.setFilter("filter3", "1=1");
		dataMaster.refreshData();
	}
	if (type == '' || type == null) {
		alert('请选择受理状态!');
	}

};

mainActivity.tabListSelect = function(event) {
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.refreshData();

};

/**
 * name:bizData#onValueChanging description: <b>[回调型事件]</b>数据变化中
 * 
 * @param event
 *            它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
 */
mainActivity.bizData1ValueChanging = function(event) {
	var id = document.getElementById('saveTrigger');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger").attr("src", tt);
	justep.xbl('saveTrigger').setDisabled(false);
};
