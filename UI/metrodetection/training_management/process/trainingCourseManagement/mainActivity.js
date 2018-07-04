var mainActivity = {};

mainActivity.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var idd = document.getElementById('insertMas');
	idd.disabled = false;
	var t = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src", t);
	justep.xbl('insertMas').setDisabled(false);	
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(true);
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
//	justep.xbl("iptCOURSE_NAME").input.focus();
	var id = document.getElementById('insertTriggerDetail');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTriggerDetail").attr("src", tt);
	justep.xbl('insertTriggerDetail').setDisabled(true);

};

mainActivity.insertMasClick = function(event){
debugger;
	var dataMaster = justep.xbl("dataMaster");
	var dataDetail = justep.xbl("dataDetail");
	var list = new Array();
	var id = dataMaster.getCurrentID();
	dataDetail.setFilter("filter0", "RELATION_CONTENT_SUBJECT.COURSE_IDID ="+id);
	dataDetail.refreshData();
	var count = dataDetail.getCount();
	for(var i=0;i<count;i++){
		list[i]=dataDetail.getValue("TRAINING_CONTENT_ID",dataDetail.getRowId(i));
	}
	justep.xbl("ContentDialog").open({
		list : list
	});
};

mainActivity.save2More = function(event){
//	justep.xbl("dataDetail").saveData();
//	justep.xbl("dataDetail").refreshData();
//	var id = document.getElementById('save2Mas');
//	id.disabled = true;
//	var tt = justep.Request.convertURL(
//			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
//	$("#save2Mas").attr("src", tt);
//	justep.xbl('save2Mas').setDisabled(true);
};

mainActivity.saveMore = function(event){
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
	var id = document.getElementById('insertTriggerDetail');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertTriggerDetail").attr("src", tt);
	justep.xbl('insertTriggerDetail').setDisabled(false);
};

/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
mainActivity.dataMasterValueChanging = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};


/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.ContentDialogClose = function(event){
	var mData = justep.xbl("dataDetail");
	justep.xbl("dataDetail").saveData();
	mData.refreshData();
//	var id = document.getElementById('save2Mas');
//	id.disabled = false;
//	var tt = justep.Request.convertURL(
//			"/UI/system/images/standardToolbar/standard/save.gif", true);
//	$("#save2Mas").attr("src", tt);
//	justep.xbl('save2Mas').setDisabled(false);
};

mainActivity.deleteTriggerClick = function(event){
	var data = justep.xbl('dataMaster');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除培训课程的信息！");
	} else {
		if (confirm("是否确定删除数据？")) {
			for ( var i = 0; i < length; i++) {
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
		}
	}	
};

mainActivity.deleteTrigger1Click = function(event){
	var data = justep.xbl('dataDetail');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的课程内容信息！");
	} else {
		if (confirm("是否删除数据？")) {
			for ( var i = 0; i < length; i++) {
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
		}
	}	
};

mainActivity.tabDetailSelect = function(event){
	var dataMaster = justep.xbl("dataMaster");
	var dataDetail = justep.xbl("dataDetail");
	var id = dataMaster.getCurrentID();
	dataDetail.setFilter("filter0", "RELATION_CONTENT_SUBJECT.COURSE_IDID ="+id);
	dataDetail.refreshData();	
};

mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("iptCOURSE_NAME").input).attr("maxlength",50);
	$(justep.xbl("input1").input).attr("maxlength",20);
};



mainActivity.tabListSelect = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.refreshData();
};

mainActivity.insertTriggerDetailClick = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.newData();
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(true);
	var id = document.getElementById('insertTriggerDetail');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTriggerDetail").attr("src", tt);
	justep.xbl('insertTriggerDetail').setDisabled(true);	
};
