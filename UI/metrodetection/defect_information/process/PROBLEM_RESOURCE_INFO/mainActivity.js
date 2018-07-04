var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivity.gridSelect1Closeup = function(event){
	var bizData1 =justep.xbl("bizData1");
	var bizData2 =justep.xbl("bizData2");
	var aPPLYFOROBJECT = bizData1.getValue("DETECTION_OBJECT_TYPE");
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "+ aPPLYFOROBJECT);
	bizData2.refreshData();
	}
};

mainActivity.gridSelect3Closeup = function(event){
	var bizData1 =justep.xbl("bizData3");
	var bizData2 =justep.xbl("bizData4");
	var aPPLYFOROBJECT = bizData1.getCurrentID();
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "DETECTION_RANGE_CODE.dETECTIONRANGETYPE = "+ aPPLYFOROBJECT);
	bizData2.refreshData();
	}
};

mainActivity.gridSelect5Closeup = function(event){
	var bizData3 =justep.xbl("bizData5");
	var bizData2 =justep.xbl("bizData6");
	var aPPLYFOROBJECT = bizData3.getValue("PROBLEM_PRIOR_CODE");
	if(typeof aPPLYFOROBJECT=="number" ){
	bizData2.setFilter("filter0", "PROBLEM_TYPE_CODE.pROBLEMPRIOR = "+ aPPLYFOROBJECT + "");
	bizData2.refreshData();
	}
};

mainActivity.tabListSelect = function(event){
	justep.xbl("dataMain").refreshData();
};

mainActivity.assetDelete = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
//	alert(infoIDs);
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

mainActivity.gridSelect8Closeup = function(event){
	var bizData =justep.xbl("dataMain");
	var bizData7 =justep.xbl("bizData8");
	var c = bizData.getValue("MANUFACTURE_ID");
	if(typeof c== "number"){
	bizData7.setFilter("filter0", "AFC_MANUFACTURER_INFO ="+c);
	bizData7.refreshData();
	var type = bizData7.getValue("mANUFACTURETYPE", c);
	bizData.setValue("mANUFACTURETYPE",type,bizData.getCurrentId());
	}
};


mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("iptHARDWARE_VERSION").input).attr("maxlength", 10);
	$(justep.xbl("iptDEVICE_STYLE").input).attr("maxlength", 200);
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
	$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
};

mainActivity.tabDetailSelect = function(event){
	var problem =justep.xbl("problem");
	var dataMain=justep.xbl("dataMain");
	var a =dataMain.getCurrentID();
	var b = problem.getCurrentID();
	if(a!=null){
	problem.setFilter("filter0", "TEST_TASK_EXECUTE_PROBLEM.pROBLEMID = "+a);
	problem.refreshData();
//	alert(1234);
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
	problem.setFilter("filter0", "TEST_TASK_EXECUTE_PROBLEM.pROBLEMID = "+a);
	problem.refreshData();
	}
};
