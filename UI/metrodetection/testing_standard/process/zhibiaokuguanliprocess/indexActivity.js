var indexActivity = {};

indexActivity.grdMasterRowDblClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

indexActivity.newItemClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.newData();
	var indexId = dataMaster.getCurrentID();
	var zbyyxx = justep.xbl("dataDetail");
	zbyyxx.setFilter("filter0", "INDEX_ID_APPLY_INFO.iNDEXID=" + indexId);
	zbyyxx.refreshData();
	var id = document.getElementById("saveMore");
	id.disabled = true;
	var dd = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMore").attr("src", dd);
	justep.xbl('saveMore').setDisabled(true);
	var insert = document.getElementById("insertMore");
	insert.disabled = true;
	var t = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMore").attr("src", t);
	justep.xbl('insertMore').setDisabled(true);
	var save1 = document.getElementById("saveMore1");
	save1.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMore1").attr("src", tt);
	justep.xbl('saveMore1').setDisabled(true);
};

indexActivity.inserMore = function(event) {
	var zbyyxx = justep.xbl("dataDetail");
	var data = justep.xbl('dataMaster');
	var id = data.getCurrentID();
	// alert(zbyyxx);
	// zbyyxx.refreshData();
	zbyyxx.newData();
	zbyyxx.setValue("iNDEXID", id);
	// var selectGrid = justep.xbl("gridSelect1");
	// alert(selectGrid);
	// var a = selectGrid.getValue("dETECTIONRANGETYPE");
	// alert(a);
	var save1 = document.getElementById("saveMore1");
	save1.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore1").attr("src", tt);
	justep.xbl('saveMore1').setDisabled(false);
};

indexActivity.saveMore = function(event) {
	justep.xbl("dataMaster").saveData();
	// justep.xbl("dataDetail").saveData();
	// justep.xbl("dataMaster").refreshData();
	// justep.xbl("tabpanel1").setTabActive("tabList");
	var save = document.getElementById("saveMore");
	save.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMore").attr("src", tt);
	justep.xbl('saveMore').setDisabled(true);
	var insert = document.getElementById("insertMore");
	insert.disabled = false;
	var t = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMore").attr("src", t);
	justep.xbl('insertMore').setDisabled(false);
};

indexActivity.saveMore1 = function(event) {
	justep.xbl("dataDetail").saveData();
	var save = document.getElementById("saveMore1");
	save.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMore1").attr("src", tt);
	justep.xbl('saveMore1').setDisabled(true);
};

indexActivity.assetDelete = function(event) {
	// debugger;
	var data = justep.xbl('dataMaster');
	var zbsjD = justep.xbl("zbsjD");
	// dataDetail.refreshData();
	var infoIDs = data.getStore().getCheckedRowIds();// 获取选择信息的ID
	// justep.xbl("tabpanel1").setTabActive("tabList");
	var array = new Array();
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				zbsjD.setFilter("filter0", "INDEX_SYSTEM_VALUE.iNDEXID="
						+ infoIDs[i]);
				zbsjD.refreshData();
				var vl = zbsjD.getCount();
				if (vl > 0) {
					array.push(infoIDs[i]);
					continue;
				}
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
			}
			if (deleteIDs != "") {
				data.deleteData(deleteIDs);
				data.saveData();
			}
			if (array.length > 0) {
				alert("有的指标已被占用，不能删除！");
			}
		}
	}
};

indexActivity.setDelete = function(event) {
	var data = justep.xbl('dataDetail');
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

indexActivity.gridSelect3Closeup = function(event) {
	var dataDetail = justep.xbl("dataDetail");

	var detectionObject = justep.xbl("gridSelect3");
	var objectValue = detectionObject.getValue("aPPLYFOROBJECT");
	var deviceObject = justep.xbl("jcdxdyData");
	// alert(justep.String.toInt(objectValue, 1));
	// alert(typeof(justep.String.toInt(objectValue, 1)));
	if (objectValue != null && objectValue != '') {
		deviceObject.setFilter("filter1",
				"DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE=" + objectValue);
		deviceObject.refreshData();
		if (deviceObject.getCount() != 0) {
			dataDetail.setValue("aPPLYFORDEVICETYPE", deviceObject
					.getValue("dEVICETYPE"));
			dataDetail.setValue("dEVICETYPECNAME", deviceObject
					.getValue("dEVICETYPECNAME"));
		} else {
			dataDetail.setValue("aPPLYFORDEVICETYPE", null);
			dataDetail.setValue("dEVICETYPECNAME", null);
		}
		var id = document.getElementById('saveMore1');
		id.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMore1").attr("src", tt);
		justep.xbl('saveMore1').setDisabled(false);
	}
};

indexActivity.gridSelect4Closeup = function(event) {
	var id = document.getElementById('saveMore1');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore1").attr("src", tt);
	justep.xbl('saveMore1').setDisabled(false);
};

indexActivity.gridSelect1Closeup = function(event) {
	// debugger;
	// alert(4);
	var rangeType = justep.xbl("dataMaster");
	var rageValue = rangeType.getValue("dETECTIONRANGETYPE");
	// alert(rageValue);
	if (rageValue != null) {
		var jcfmdy = justep.xbl("jcfmData");
		jcfmdy.setFilter("filter0", "DETECTION_RANGE_CODE.dETECTIONRANGETYPE="
				+ rageValue);
		jcfmdy.refreshData();
		if (jcfmdy.getCount() != 0) {
			rangeType.setValue("dETECTIONRANGEID", jcfmdy
					.getValue("dETECTIONRANGEID"));
		} else {
			rangeType.setValue("dETECTIONRANGEID", null);
		}
		var id = document.getElementById('saveMore');
		id.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMore").attr("src", tt);
		justep.xbl('saveMore').setDisabled(false);
	}
};

indexActivity.tabListSelect = function(event) {
	justep.xbl('dataMaster').refreshData();
};

indexActivity.tabDetailSelect = function(event) {
	var data = justep.xbl('dataMaster');
	var detail = justep.xbl('dataDetail');
	var id = data.getCurrentID();
	if (id != null && id != '') {
		detail.setFilter("filter0", "INDEX_ID_APPLY_INFO.iNDEXID=" + id);
		detail.refreshData();
	}

};

indexActivity.iptINDEXIDCNAMEFocus = function(event) {
	var id = document.getElementById('saveMore');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore").attr("src", tt);
	justep.xbl('saveMore').setDisabled(false);
};

indexActivity.iptINDEXIDDEFINITIONFocus = function(event) {
	var id = document.getElementById('saveMore');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore").attr("src", tt);
	justep.xbl('saveMore').setDisabled(false);
};

indexActivity.gridSelect2Closeup = function(event) {
	var id = document.getElementById('saveMore');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore").attr("src", tt);
	justep.xbl('saveMore').setDisabled(false);
};

indexActivity.textarea1Focus = function(event) {
	var id = document.getElementById('saveMore');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMore").attr("src", tt);
	justep.xbl('saveMore').setDisabled(false);
};

indexActivity.insertMore1Click = function(event) {
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.newData();
	var indexId = dataMaster.getCurrentID();
	var zbyyxx = justep.xbl("dataDetail");
	zbyyxx.setFilter("filter0", "INDEX_ID_APPLY_INFO.iNDEXID=" + indexId);
	zbyyxx.refreshData();
	var insert = document.getElementById("insertMore");
	insert.disabled = true;
	var t = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMore").attr("src", t);
	justep.xbl('insertMore').setDisabled(true);
};
