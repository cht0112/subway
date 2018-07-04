var mainActivity = {};

mainActivity.grdMasterRowDblClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var dataMaster = justep.xbl("dataMaster");
	var bizData2 = justep.xbl("bizData2");
	var projectID = dataMaster.getValue("PROJECT_ID");
	var productID = dataMaster.getValue("PRODUCT_IDID");
	var productName = dataMaster.getValue("PRODUCT_NAME");
	bizData2.setFilter("filter0", "DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectID);
	bizData2.refreshData();
	dataMaster.setValue("PRODUCT_IDID",productID);
	dataMaster.setValue("PRODUCT_NAME",productName);
};

mainActivity.newItemClick = function(event) {
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	justep.xbl("bizData2").setFilter("filter0", "1=0");
	justep.xbl("bizData2").refreshData();
	
	var i = document.getElementById('insertTrigger1');
	i.disabled = true;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTrigger1").attr("src", cc);
	justep.xbl('insertTrigger1').setDisabled(true);	
	
	var i = document.getElementById('insertTrigger11');
	i.disabled = true;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTrigger11").attr("src", cc);
	justep.xbl('insertTrigger11').setDisabled(true);	
};

mainActivity.gridSelect1Closeup = function(event) {
	var bizData1 = justep.xbl("bizData1");
	var bizData2 = justep.xbl("bizData2");
	var dataMaster = justep.xbl("dataMaster");
	var projectID = dataMaster.getValue("PROJECT_ID");
	if ( projectID!='') {
	    bizData2.setFilter("filter0","1=1");
	    bizData2.refreshData();
		bizData2.setFilter("filter0", "DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectID);
		bizData2.refreshData();
		dataMaster.setValue("PRODUCT_IDID", bizData2.getRowId(0));
		dataMaster.setValue("PRODUCT_NAME",bizData2.getValue("PRODUCT_NAME",bizData2.getRowId(0)));
	}
};

mainActivity.removeTrigger1Click = function(event){
	var dataMaster = justep.xbl('dataMaster');
	var infoIDs = dataMaster.getStore().getCheckedRowIds();// 获取选择信息的ID
//	alert(infoIDs);
	justep.xbl("tabpanel1").setTabActive("tabList");
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
//	alert(length);
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					dataMaster.deleteData(deleteIDs);
				}
			}
		}
	}
};
mainActivity.tabDetailSelect = function(event){
	var dataMaster = justep.xbl("dataMaster");
	var bizData2 = justep.xbl("bizData2");
	var projectID = dataMaster.getValue("PROJECT_ID");
	if( projectID!='' ){
		var productID = dataMaster.getValue("PRODUCT_IDID");
		var productName = dataMaster.getValue("PRODUCT_NAME");
		bizData2.setFilter("filter0", "DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectID);
		bizData2.refreshData();
		dataMaster.setValue("PRODUCT_IDID",productID);
		dataMaster.setValue("PRODUCT_NAME",productName);
	}
};

mainActivity.newItemClick1 = function(event){
	var dataDetail = justep.xbl("dataDetail");
	dataDetail.newData();
    var moduleID = justep.xbl("dataMaster").getCurrentID();
//    alert(moduleID);
	var moduleName = justep.xbl("dataMaster").getValue("MODULE_NAME");
	dataDetail.setValue("MODULE_ID", moduleID);
	dataDetail.setValue("MODULE_NAME",moduleName);
	
	var i = document.getElementById('saveTrigger2');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger2").attr("src", cc);
	justep.xbl('saveTrigger2').setDisabled(false);
	
};

mainActivity.removeTrigger1Click1 = function(event){
//    debugger;
	var dataDetail = justep.xbl('dataDetail');
	var infoIDs = dataDetail.getStore().getCheckedRowIds();// 获取选择信息的ID
//  alert(infoIDs);
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
//	alert(length);
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					dataDetail.deleteData(deleteIDs);
				}
			}
		}
	}
};

mainActivity.removeTrigger1Click3 = function(event){
	var dataMaster = justep.xbl("dataMaster");
	var moduleID = justep.xbl("dataMaster").getCurrentID();
	if (confirm("确认删除吗？")) {
		dataMaster.deleteData(moduleID);
	}
};

mainActivity.tabListSelect = function(event){
    var dataMaster = justep.xbl("dataMaster");
	dataMaster.refreshData();	
};

mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("iptMODULE_NAME").input).attr("maxlength", 200);
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
};

mainActivity.saveTrigger2Click = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.saveData();
	
	var i = document.getElementById('saveTrigger2');
	i.disabled = true;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger2").attr("src", cc);
	justep.xbl('saveTrigger2').setDisabled(true);
	
	var i = document.getElementById('insertTrigger1');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTrigger1").attr("src", cc);
	justep.xbl('insertTrigger1').setDisabled(false);	
	
	var i = document.getElementById('insertTrigger11');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTrigger11").attr("src", cc);
	justep.xbl('insertTrigger11').setDisabled(false);	
	var dataDetail = justep.xbl("dataDetail");
	if(dataDetail.getCount()!=0){
		dataDetail.saveData();
	}
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMasterValueChanged = function(event){
	var i = document.getElementById('saveTrigger2');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger2").attr("src", cc);
	justep.xbl('saveTrigger2').setDisabled(false);	
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataDetailValueChanged = function(event){
	var i = document.getElementById('saveTrigger2');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger2").attr("src", cc);
	justep.xbl('saveTrigger2').setDisabled(false);	
};
