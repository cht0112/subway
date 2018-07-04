var mainActivity2 = {};

mainActivity2.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity2.newItemClick = function(event){
	var dataMaster = justep.xbl("dataMain");
	dataMaster.newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");		
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
	dataMaster.setValue("APPLY_PERSONPERSON",perId);
	dataMaster.setValue("oPERATORNAME",name);	
};

mainActivity2.tabListSelect = function(event){
	var dataMaster = justep.xbl("dataMain");
	dataMaster.refreshData();
};

mainActivity2.removeMore = function(event){
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

mainActivity2.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("input2").input).attr("maxlength", 50);
	$(justep.xbl("CHANGE_TITLETITLE2").input).attr("maxlength", 256);
	$(justep.xbl('textarea9').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=100){return false}} );
	$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea4').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	$(justep.xbl('textarea6').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea12').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
	$(justep.xbl('textarea11').input).bind('keydown', function(evt){if(this.value.length>=200){return false}} );
};

