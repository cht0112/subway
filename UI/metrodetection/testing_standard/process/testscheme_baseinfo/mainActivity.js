var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	//var state = justep.xbl("gridSelect3");
	justep.xbl("dataMain").setValue("vALIDSTATE",2);
	var id = document.getElementById("insertNew");
	id.disabled=true;
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertNew").attr("src",t);	
	justep.xbl('insertNew').setDisabled(true);
	var id = document.getElementById("saveMore1");
	id.disabled=true;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMore1").attr("src",tt);
	justep.xbl('saveMore1').setDisabled(true);	
};

mainActivity.insertNewClick = function(event){
//	var wd = justep.xbl("windowDialog2");
//	wd.open();
	
//	var jcfaylxxData = justep.xbl("jcfaylxxData");
//	jcfaylxxData.newData();
	var dataMain = justep.xbl("dataMain");
	var yuId = dataMain.getValue("dECTIONBASEDONID");
	var businessId = dataMain.getValue("bUSINESSID");
	var testSchemeId = dataMain.getCurrentID();
	//alert(testSchemeId);
	var wd2 = justep.xbl("wdTestSckema");
	wd2.open({"yuId":yuId,"businessId":businessId,"testSchemeId":testSchemeId});
//	 alert(businessId);
//	 var tcbi = justep.xbl("testCaseBaseInfoData");
//	tcbi.setFilter("fiter0", "TEST_CASE_BASE_INFO.dECTIONBASEDONID="+yuId);
//	tcbi.refreshData();
//	var testVersion = tcbi.getValue("tESTCASEVER");
//	var testId = tcbi.getValue("tESTCASEID");
//	jcfaylxxData.setValue("tESTCASEVER",testVersion);
//	jcfaylxxData.setValue("tESTCASEID",testId);
//	jcfaylxxData.setValue("bUSINESSID",businessId);
};

mainActivity.saveMore = function(event){
	justep.xbl("dataMain").saveData();
	//justep.xbl("dataDetail").saveData();
	//justep.xbl("dataMaster").refreshData();
	//justep.xbl("tabpanel1").setTabActive("tabList");
	var save = document.getElementById("saveMore");
	save.disabled=true;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMore").attr("src",tt);	
	justep.xbl('saveMore').setDisabled(true);
	var insert = document.getElementById("insertNew");
	insert.disabled=false;
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertNew").attr("src",t);
	justep.xbl('insertNew').setDisabled(false);
};

mainActivity.saveMore1 = function(event){
	justep.xbl("jcfaylxxData").saveData();
	justep.xbl("dataMain").refreshData();
	justep.xbl("tabpanel1").setTabActive("tabList");
	var save = document.getElementById("saveMore");
	save.disabled=false;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore").attr("src",tt);	
	justep.xbl('saveMore').setDisabled(false);
};
function assetDelete(event) {
	var data = justep.xbl('dataMain');
	var dataDetail = justep.xbl("jcfaylxxData");
	dataDetail.refreshData();
	var infoIDs = data.getStore().getCheckedRowIds();// 获取选择信息的ID
	justep.xbl("tabpanel1").setTabActive("tabList");
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				dataDetail.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="
						+ infoIDs[i]);
				dataDetail.refreshData();
				var vl = dataDetail.getCount();
				for ( var j = 0; j < vl; j++) {
					var d = dataDetail.getCurrentID(0);
					dataDetail.deleteData(d);
				}
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					data.deleteData(deleteIDs);
				}
			}
		}
	}
};



/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.wdTestSckemaClose = function(event){
	justep.xbl("jcfaylxxData").refreshData();
};

mainActivity.removeClick = function(event){
	var dataMain = justep.xbl("dataMain");
	var tsbi = dataMain.getCurrentID();
	//alert(tsbi);
	var jcfaylxxData = justep.xbl("jcfaylxxData");
	jcfaylxxData.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+tsbi);
	jcfaylxxData.refreshData();
	//alert(jcfaylxxData.getCount());
	var arr = new Array();
	if(jcfaylxxData.getCount()!= 0){
		for(var i = 0;i < jcfaylxxData.getCount();i++ ){
		var id = jcfaylxxData.getRowId(i);
		//alert(id);
		arr.push(id);
		//alert(arr[i] );
	}
	jcfaylxxData.deleteData(arr);
	}
	dataMain.deleteData(tsbi);
};

mainActivity.removeDetailClick = function(event){
	var dataMain = justep.xbl("dataMain");
	var tsbi = dataMain.getCurrentID();
	var jcfaylxxData = justep.xbl("jcfaylxxData");
	jcfaylxxData.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+tsbi);
	jcfaylxxData.refreshData();
	//alert(jcfaylxxData.getCount());
	var arr = new Array();
	if(jcfaylxxData.getCount()!= 0){
		for(var i = 0;i < jcfaylxxData.getCount();i++ ){
		var id = jcfaylxxData.getRowId(i);
		//alert(id);
		arr.push(id);
		//alert(arr[i] );
	}
	jcfaylxxData.deleteData(arr);
	}
	dataMain.deleteData(tsbi);
	jcfaylxxData.loadData();
	justep.xbl("tabpanel1").setTabActive("tabList");
};

mainActivity.tabDetailSelect = function(event){
	var save = document.getElementById("saveMore");
	save.disabled=false;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore").attr("src",tt);	
	justep.xbl('saveMore').setDisabled(false);
	var insert = document.getElementById("insertNew");
	insert.disabled=false;
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertNew").attr("src",t);
	justep.xbl('insertNew').setDisabled(false);
	var dataMain = justep.xbl("dataMain");
	var tsbi = dataMain.getCurrentID();
	var jcfaylxxData = justep.xbl("jcfaylxxData");
	jcfaylxxData.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+tsbi);
	jcfaylxxData.refreshData();
	
	var dectionBase = justep.xbl("bizData4");
	dectionBase.setFilter("filter1","DECTION_BASED_ON_INFO.vALIDSTATE="+2);
	dectionBase.refreshData();
	
};

mainActivity.setDelete = function(event){
var data = justep.xbl('jcfaylxxData');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
	if (confirm("确认删除吗？")) {
		for (var i = 0; i < length; i++) {
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


mainActivity.grid1RowValueChanged = function(event){
	var id = document.getElementById('saveMore1');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore1").attr("src", tt);
	justep.xbl('saveMore1').setDisabled(false);
};

mainActivity.grdMainRowValueChanged = function(event){
	var id = document.getElementById('saveMore');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore").attr("src", tt);	
	justep.xbl('saveMore').setDisabled(false);
};


mainActivity.removeTrigger1Click = function(event){
	var data = justep.xbl('dataMain');
	var dataDetail = justep.xbl("jcfaylxxData");
	dataDetail.refreshData();
	var infoIDs = data.getStore().getCheckedRowIds();// 获取选择信息的ID
	justep.xbl("tabpanel1").setTabActive("tabList");
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				dataDetail.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="
						+ infoIDs[i]);
				dataDetail.refreshData();
				var vl = dataDetail.getCount();
				for ( var j = 0; j < vl; j++) {
					var d = dataDetail.getCurrentID(0);
					dataDetail.deleteData(d);
				}
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					data.deleteData(deleteIDs);
				}
			}
		}
	}
};
