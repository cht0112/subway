	var mainActivity = {};

//mainActivity.grdMainRowDblClick = function(event){
//	justep.xbl("tabpanel1").setTabActive("tabDetail");
//};
//
//mainActivity.newItemClick = function(event){
//	justep.xbl("dataMain").newData();
//	justep.xbl("tabpanel1").setTabActive("tabDetail");	
//};

//mainActivity.grid1RowDblClick = function(event){
//	justep.xbl("tabpanel1").setTabActive("tabDetail");
//
//	var dataMain = justep.xbl("dataMain");
//	var id = dataMain.getValue("pFILEID",dataMain.getCurrentID());
//	var guidang = justep.xbl("guidang");
//	guidang.setFilter("filter0","P_DOCUMENTS_ARCHIVE ='"+id+"'");
//	guidang.refreshData();
////	alert(guidang.getCount());
//	var allow = dataMain.getValue("aLLOWBORROW", dataMain.getCurrentID());
//	if(allow == 2){
//		dataMain.setValue("iNDEEDRETURNDATE",justep.System.datetimeString());
//	}
//	
//};


//mainActivity.tabDetailSelect = function(event){
//	var dataMain = justep.xbl("dBorrowReturn");
//	var id = dataMain.getValue("pFILEID",dataMain.getCurrentID());
//	var guidang = justep.xbl("guidang");
//	guidang.setFilter("filter0","P_DOCUMENTS_ARCHIVE ='"+id+"'");
//	guidang.refreshData();
////	alert(guidang.getCount());
//	var allow = dataMain.getValue("aLLOWBORROW", dataMain.getCurrentID());
////	alert(allow);
//	if(allow == 2){
//		dataMain.setValue("iNDEEDRETURNDATE",justep.System.datetimeString());
//	}	
//};

//mainActivity.saveMasClick = function(event){
//	var dataMain = justep.xbl("dBorrowReturn");	
//	var guidang = justep.xbl("guidang");
//	dataMain.saveData();
//	guidang.saveData();
//	var id = document.getElementById('saveMas');
//	id.disabled = true;
//	var tt = justep.Request.convertURL(
//			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
//	$("#saveMas").attr("src", tt);
//	justep.xbl('saveMas').setDisabled(true);
//};

/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
mainActivity.dataMainValueChanging = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.guidangValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};

mainActivity.mdDefaultXBLLoaded = function(event){
	var dataMain = justep.xbl("dBorrowReturn");
	dataMain.setFilter("filter0","P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 2");
	dataMain.refreshData();
		
};

//mainActivity.trigger1Click = function(event){
//	var borrowReturnDlg = justep.xbl("dlgBorrowReturn");
//	borrowReturnDlg.initEveryTimes = true;
//	borrowReturnDlg.open();
//};

/**
	name:windowDialog#onSend
	@event {"source":组件的js对象,"data":数据}
description: <b>[回调型事件]</b> 向对话框传递数据，该事件函数的返回值将传递给对话框
*/
//发送信息（归还）
//mainActivity.dlgBorrowReturnSend = function(event){
//	var data = justep.xbl("dBorrowReturn");
//	var rowId = data.getCurrentRowId();
////	var params = {
////		"historyId" : rowId
////	};
//};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
// 返回(归还)
//mainActivity.dlgBorrowReturnReceive = function(event){
//	var data = justep.xbl("dBorrowReturn");
//	data.refreshData();
//};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/


mainActivity.btnReturnClick = function(event){
debugger;
	var borrowReturnDlg = justep.xbl("dlgBorrowReturn");
	borrowReturnDlg.initEveryTimes = true;
	var dataDetail = justep.xbl("dBorrowReturn");
	var id = dataDetail.getCurrentID();
	var fId = dataDetail.getValue("pFILEID",id);
	var infoIDs = dataDetail.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataDetail.getCount();
	if(length ==0){
		alert("请先选择 要归还的文档！");
	}else{
		borrowReturnDlg.open({
			id : infoIDs[0],
			fId : fId
		});
	}
//	alert(id);
};
mainActivity.dlgBorrowReturnClose = function(event){
	var dBorrowReturn = justep.xbl("dBorrowReturn");
	dBorrowReturn.refreshData();
};
