var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivity.tabListSelect = function(event){
	justep.xbl("dataMain").refreshData();
};

mainActivity.assetDelete = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
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

mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("input1").input).attr("maxlength", 200);
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
	$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
	$(justep.xbl('textarea4').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
};

mainActivity.tabDetailSelect = function(event){
	var problem =justep.xbl("problem");
	var dataMain=justep.xbl("dataMain");
	var a =dataMain.getCurrentID();
	if(a!=null){
	problem.setFilter("filter0", "SYSTEM_PROBLEM_RECORD.error_id = "+a);
	problem.refreshData();
	}
};


/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
mainActivity.dataMainIndexChanged = function(event){
	var problem =justep.xbl("problem");
	var dataMain=justep.xbl("dataMain");
	var a =dataMain.getCurrentID();
	if(a!=null){
	problem.setFilter("filter0", "SYSTEM_PROBLEM_RECORD.error_id = "+a);
	problem.refreshData();
	}
};

