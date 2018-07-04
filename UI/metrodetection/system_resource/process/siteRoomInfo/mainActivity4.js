var mainActivity4 = {};
// mainActivity4.grdMasterRowDblClick = function(event) {
// justep.xbl("tabpanel1").setTabActive("tabDetail");
// var i = document.getElementById('saveMas');
// i.disabled = true;
// var cc = justep.Request.convertURL(
// "/UI/system/images/standardToolbar/standard/un_save.gif", true);
// $("#saveMas").attr("src", cc);
// var id = document.getElementById('save2Mas');
// id.disabled = true;
// var c = justep.Request.convertURL(
// "/UI/system/images/standardToolbar/standard/un_save.gif", true);
// $("#save2Mas").attr("src", c);
// aa();
// };

mainActivity4.newItemClick = function(event) {
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	var ii = document.getElementById('saveMas');
	justep.xbl('insertMas').setDisabled(true);
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
	var i = document.getElementById('save2Mas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#save2Mas").attr("src", cc);
	justep.xbl('save2Mas').setDisabled(true);
};

mainActivity4.saveMore = function(event) {
	var d = justep.xbl("dataMaster");
	d.saveData();
	var idd = document.getElementById('insertMas');
	idd.disabled = false;
	var t = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src", t);
	justep.xbl('insertMas').setDisabled(false);
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
	d.refreshData();
};

mainActivity4.insertMore = function(event) {
	justep.xbl("dataDetail").refreshData();
	justep.xbl("dataDetail").newData();
};

mainActivity4.tabListSelect = function(event) {
	var d = justep.xbl("dataMaster");
	d.refreshData();
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);

};

mainActivity4.save2More = function(event) {
	justep.xbl("dataDetail").saveData();
	justep.xbl("dataDetail").refreshData();
	var id = document.getElementById('save2Mas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#save2Mas").attr("src", tt);
	justep.xbl('save2Mas').setDisabled(true);
};

mainActivity4.insertMasClick = function(event) {
	var dm = justep.xbl("dataMaster");
	var bianhao = dm.getCurrentID();
	justep.xbl("windowDialog1").open({
		openMode : "new",
		bianhao : bianhao
	});
};
mainActivity4.windowDialog1Close = function(event) {
	var mData = justep.xbl("dataDetail");
	justep.xbl("dataDetail").saveData();
	justep.xbl("dataMaster").saveData();
	mData.refreshData();
	var id = document.getElementById('save2Mas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#save2Mas").attr("src", tt);
	justep.xbl('save2Mas').setDisabled(false);
};

mainActivity4.tabDetailSelect = function(event) {
	var cData = justep.xbl("dataMaster");
	var id = cData.getCurrentID();
	var dataDetail = justep.xbl("dataDetail");
	dataDetail.setFilter("filter0", "ROOM_APPLY_INFO.rOOMID = " + id);
	dataDetail.refreshData();
	var row = justep.xbl('dataMaster').getCurrentRowId();
	justep.xbl('blobImage1').refresh(row);
	var i = document.getElementById('saveMas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
	var id = document.getElementById('save2Mas');
	id.disabled = true;
	var c = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#save2Mas").attr("src", c);
	justep.xbl('save2Mas').setDisabled(true);
	aa();
};

mainActivity4.grid1RowDblClick = function(event) {
	justep.xbl("windowDialog1").open({
		openMode : "edit",
		rowID : justep.xbl("dataDetail").getRowId()
	});
};

mainActivity4.removeMore = function(event) {
	var dataMaster = justep.xbl("dataMaster");
	var room=justep.xbl("rrom");
	var zhanyong=justep.xbl("zhanyong");
	var tsbi = dataMaster.getCurrentID();
	var jcfaylxxData = justep.xbl("dataDetail");
	zhanyong.setFilter("filter0", "ROOM_OCCUPY_INFO.rOOMID=" + tsbi);
	zhanyong.refreshData();
	var dd=zhanyong.getCount();
//	alert(dd);
	if(dd>0){
	alert("该房间已经被占用，不能删除！");
	}else if(confirm("确认删除该数据吗？")){
	jcfaylxxData.setFilter("filter0", "ROOM_APPLY_INFO.rOOMID=" + tsbi);
	jcfaylxxData.refreshData();
	var arr = new Array();
	if (jcfaylxxData.getCount() != 0) {
		for ( var i = 0; i < jcfaylxxData.getCount(); i++) {
			var id = jcfaylxxData.getRowId(i);
			arr.push(id);
		}
		jcfaylxxData.deleteData(arr);
	}
	dataMaster.deleteData(tsbi);
	jcfaylxxData.loadData();
	justep.xbl("tabpanel1").setTabActive("tabList");
	}
};

mainActivity4.setDelete = function(event) {
	var data = justep.xbl('dataDetail');
	var zhanyong=justep.xbl("zhanyong");
	var infoIDs = data.getStore().getCheckedRowIds();
//	alert(infoIDs);
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
		if (confirm("确认删除所选数据吗？")) {
			for ( var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
			}
			if (deleteIDs != "") {
				var cc=data.getValue("rOOMID");
//				alert(cc);
				zhanyong.setFilter("filter5","ROOM_OCCUPY_INFO.rOOMID="+cc);
				zhanyong.refreshData();
				var qq=zhanyong.getCount();
//				alert(qq);
				if(qq>0){
				alert("该区域已经被占用不能删除！");
				}else{
				data.deleteData(deleteIDs);
				}
			}
		}
	}
};

mainActivity4.trigger8Click = function(event) {
	justep.xbl("windowDialog2").open();

};

mainActivity4.update = function(fid) {
	justep.xbl("windowDialog3").open({
		"fid" : fid
	});
};
mainActivity4.work = function(fid) {
	justep.xbl("windowDialog4").open({
		"fid" : fid
	});
};
mainActivity4.grdMaster_imRender = function(event) {
	var fid = event.rowId;
	var c = event.value;
	var html = "";
	if (c == 1) {
		html = "<a href=\"#\" id=\"btnselect\" onclick=\"mainActivity4.update('"
				+ fid + "')\" >查看</a>";
	} else {
		html = "<a href=\"#\" id=\"btnselect\" onclick=\"mainActivity4.work('"
				+ fid + "')\" >上传</a>";
	}
	return html;
};

mainActivity4.assetDelete = function(event) {
	var data = justep.xbl('dataMaster');
	var dataDetail = justep.xbl("dataDetail");
	var room = justep.xbl("room");
	var zhanyong = justep.xbl("zhanyong");
	dataDetail.refreshData();
	var infoIDs = data.getStore().getCheckedRowIds();// 获取选择信息的ID
	justep.xbl("tabpanel1").setTabActive("tabList");
	var deleteIDs = "";
	abc = false;
	bcd=false;
	var length = infoIDs.length;// 选择的信息个数长度
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		for ( var t = 0; t < length; t++) {
			zhanyong.setFilter("filter3","ROOM_OCCUPY_INFO.rOOMID="+infoIDs[t]);
			zhanyong.refreshData();
			var v2=zhanyong.getCount();
			if(v2>0){
			bcd=true;
			}
			room.setFilter("filter2", "ROOM_APPLY_INFO.rOOMID=" + infoIDs[t]);
			room.refreshData();
			var v1 = room.getCount();
//			alert(v1);
			if (v1 != 0) {
				abc = true;
			}
		}
		if(bcd==true){
		alert("房间被占用，不能删除该信息！");
		}
		else if (abc == true) {
			alert("请先到详细页面删除对应的子数据！");
		} else {
			if (confirm("确认删除所选数据吗？")) {
			for ( var t = 0; t < length; t++) {
				deleteIDs = infoIDs[t];
				if (deleteIDs != "") {
					zhanyong.setFilter("filter1", "ROOM_OCCUPY_INFO.rOOMID="
							+ infoIDs[t]);
					zhanyong.refreshData();
					var v2 = zhanyong.getCount();
					if(v2>0){
						for ( var p = 0; p < v2; p++) {
							var d = zhanyong.getCurrentID(0);
							zhanyong.deleteData(d);
						}
					}
					data.deleteData(deleteIDs);
				}
				
			}
		}
	}

}
};

function cq(){

//var data = justep.xbl('dataMaster');
//	var dataDetail = justep.xbl("dataDetail");
//	var room = justep.xbl("room");
//	var zhanyong = justep.xbl("zhanyong");
//	dataDetail.refreshData();
//	var infoIDs = data.getStore().getCheckedRowIds();// 获取选择信息的ID
//	justep.xbl("tabpanel1").setTabActive("tabList");
//	var deleteIDs = "";
//	var length = infoIDs.length;// 选择的信息个数长度
//	if (length == 0) {
//		alert("请先选择要删除的信息！");
//	} else {
//		if (confirm("确认删除吗？")) {
//			for ( var t = 0; t < length; t++) {
//				deleteIDs = infoIDs[t];
//				if (deleteIDs != "") {
//					zhanyong.setFilter("filter1", "ROOM_OCCUPY_INFO.rOOMID="
//							+ infoIDs[t]);
//					zhanyong.refreshData();
//					var v2 = zhanyong.getCount();
//					if(v2>0){
//						for ( var p = 0; p < v2; p++) {
//							var d = zhanyong.getCurrentID(0);
//							zhanyong.deleteData(d);
//						}
//					}
//					room.setFilter("filter2", "ROOM_APPLY_INFO.rOOMID="
//							+ infoIDs[t]);
//					var v1 = room.getCount();
//					if (v1 > 0) {
//						for ( var j = 0; j < v1; j++) {
//							var d1 = room.getCurrentID(0);
//							room.deleteData(d1);
//						}
//					}
//					data.deleteData(deleteIDs);
//				}
//				
//			}
//		}
//	}
};
mainActivity4.windowDialog4Close = function(event) {
	var mData = justep.xbl("dataMaster");
	justep.xbl("dataMaster").saveData();
	mData.refreshData();
};

mainActivity4.windowDialog3Close = function(event) {
	var mData = justep.xbl("dataMaster");
	justep.xbl("dataMaster").saveData();
	mData.refreshData();

};

mainActivity4.windowDialog5Close = function(event) {
	var d = justep.xbl("dataDetail");
	d.refreshData();
};

mainActivity4.grid1_IMRender = function(event) {
	var fid = event.rowId;
	var c = event.value;
	var html = "";
	if (c == 1) {
		html = "<a href=\"#\" id=\"btnselect\" onclick=\"mainActivity4.chakan('"
				+ fid + "')\" >查看</a>";
	} else {
		html = "<a href=\"#\" id=\"btnselect\" onclick=\"mainActivity4.shang('"
				+ fid + "')\" >上传</a>";
	}
	return html;
};
mainActivity4.chakan = function(fid) {
	justep.xbl("windowDialog5").open({
		"fid" : fid
	});
};
mainActivity4.shang = function(fid) {
	justep.xbl("windowDialog6").open({
		"fid" : fid
	});
};

mainActivity4.windowDialog6Close = function(event) {
	var d = justep.xbl("dataDetail");
	d.refreshData();
};

//mainActivity4.dataMasterValueChanging = function(event) {
//	
//};

function aa() {
	var data = justep.xbl("dataMaster");
	var bizData = justep.xbl("bizData1");
	var currentId = data.getCurrentId();
	if (data.getValue("rOOMTYPE", currentId) == 2) {
		justep.xbl('radio1').setDisabled(false);
		if (data.getValue("IS_DELEGATE", currentId) == 1) {
			justep.xbl('gridSelect4').setDisabled(false);
		} else {
			justep.xbl('gridSelect4').setDisabled(true);
		}
		bizData.setFilter("filter0", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = "
				+ 3 + "");
	} else {
		justep.xbl('radio1').setDisabled(true);
		justep.xbl('gridSelect4').setDisabled(true);
	}
};
function bb() {
	var data = justep.xbl("dataMaster");
	var bizData = justep.xbl("bizData1");
	var currentId = data.getCurrentId();
	if (data.getValue("rOOMTYPE", currentId) == 2) {
		justep.xbl('radio1').setDisabled(false);
		justep.xbl('gridSelect4').setDisabled(false);
		bizData.setFilter("filter0", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = "
				+ 3 + "");
	} else {
		justep.xbl('radio1').setDisabled(true);
		justep.xbl('gridSelect4').setDisabled(true);
		data.setValue("MANUFACTURE_ID", null, data.getCurrentId());
		data.setValue("mANUFACTUREIDCNAME", "", data.getCurrentId());
	}
};

mainActivity4.gridSelect1Closeup = function(event) {
	var data = justep.xbl('dataMaster');
	if (data.getValue("rOOMTYPE", data.getCurrentId()) == 2) {
		justep.xbl('radio1').setDisabled(false);
	} else {
		justep.xbl('radio1').setDisabled(true);
		justep.xbl('gridSelect4').setDisabled(true);
	}
};

mainActivity4.selectItem1Select = function(event) {
	// var data = justep.xbl('dataMaster');
	// if(data.getValue("IS_DELEGATE",data.getCurrentId())==1){
	justep.xbl('gridSelect4').setDisabled(false);
	// }
};

mainActivity4.gridSelect4Dropdown = function(event) {
	var bizData = justep.xbl("bizData1");
	bizData.setFilter("filter0", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE = " + 3
			+ "");
	bizData.refreshData();
};

mainActivity4.selectItem2Select = function(event) {
	var data = justep.xbl('dataMaster');
	data.setValue("MANUFACTURE_ID", null, data.getCurrentId());
	data.setValue("mANUFACTUREIDCNAME", "", data.getCurrentId());
	justep.xbl('gridSelect4').setDisabled(true);
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity4.dataMasterValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};

/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
mainActivity4.dataMasterIndexChanged = function(event){
	var cData = justep.xbl("dataMaster");
	var id = cData.getCurrentID();
	var dataDetail = justep.xbl("dataDetail");
	dataDetail.setFilter("filter0", "ROOM_APPLY_INFO.rOOMID = " + id);
	dataDetail.refreshData();
};
