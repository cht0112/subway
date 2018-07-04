	var mainActivity1 = {};

mainActivity1.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity1.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};


mainActivity1.tabListSelect = function(event){
	var dataMaster = justep.xbl("dataMain");
	dataMaster.refreshData();
};

mainActivity1.removeMore = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
		if (confirm("    确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
			}
			if (deleteIDs != "") {
				data.deleteData(deleteIDs);
			}
		}
	}
};

mainActivity1.saveMore = function(event){
	var dataMaster = justep.xbl("dataMain");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
	dataMaster.setValue("CHANGE_AUDITOR",perId);
	dataMaster.setValue("oPERATORNAME1",name);	
	dataMaster.saveData();	
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
};

mainActivity1.dataMainValueChanging = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);	
};


mainActivity1.tabPage1Select = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
};

mainActivity1.mdDefaultXBLLoaded = function(event){
	$(justep.xbl('textarea17').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea18').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea18').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea20').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea21').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea22').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea23').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	$(justep.xbl('textarea24').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
};
