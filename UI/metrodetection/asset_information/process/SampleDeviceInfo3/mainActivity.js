	var mainActivity = {};

mainActivity.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
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
};

//function assetDelete(event){
//	var data = justep.xbl('dataMaster');
//	var dataDetail = justep.xbl("dataDetail");
//	dataDetail.refreshData();
//	var infoIDs = data.getStore().getCheckedRowIds();// 获取选择信息的ID
//	justep.xbl("tabpanel1").setTabActive("tabList");
//	var deleteIDs = "";
//	var length = infoIDs.length;// 选择的信息个数长度
//	if (length == 0) {
//		alert("请先选择要删除的信息！");
//	} else {
//		if (confirm("确认删除吗？")) {
//			for ( var i = 0; i < length; i++) {
//				dataDetail.setFilter("filter0", "SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO="
//						+ infoIDs[i]);
//				dataDetail.refreshData();
//				var vl = dataDetail.getCount();
//				for ( var j = 0; j < vl; j++) {
//					var d = dataDetail.getCurrentID(0);
//					dataDetail.deleteData(d);
//				}
//				deleteIDs = infoIDs[i];
//				if (deleteIDs != "") {
//					data.deleteData(deleteIDs);
//				}
//			}
//		}
//	}
//}

mainActivity.tabListSelect = function(event){
	var data = justep.xbl('dataMaster');
	data.refreshData();
};

mainActivity.setDelete = function(event){
var data = justep.xbl('dataDetail');
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
//设置文本输入框输入长度
mainActivity.mdDefaultXBLLoaded = function(event){
	var SA_Task = justep.xbl("bizData1");
	SA_Task.setFilter("filter0","SA_Task.sTypeName = '检测流程' AND SA_Task.sParent is null");
	SA_Task.refreshData();
	
	$(justep.xbl("input1").input).bind('keydown',function(evt){evt.preventDefault();});
	$(justep.xbl("iptINDEEDRECEIVEDATEok").input).bind('keydown',function(evt){evt.preventDefault();});
	$(justep.xbl("iptRETURNDATEok").input).bind('keydown',function(evt){evt.preventDefault();});
	
//	$(justep.xbl("iptHARDWAREVERSION").input).attr("maxlength",10)	
//	$(justep.xbl("iptDEVICEID").input).attr("maxlength",8)	
//	$(justep.xbl("iptSOFTWAREVERSION").input).attr("maxlength",10)	
//	$(justep.xbl("iptHARDWAREVERSION").input).attr("maxlength",1000)	
};


mainActivity.insertMasClick = function(event){
	var dataDetail = justep.xbl("dataDetail");
	dataDetail.newData();
};

mainActivity.saveMore = function(event){
	justep.xbl("dataMaster").saveData();
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
	var idd = document.getElementById('insertMas');
	idd.disabled = false;
	var t = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src", t);	
	justep.xbl('insertMas').setDisabled(false);
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMasterValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);	
	justep.xbl('saveMas').setDisabled(false);
};


mainActivity.assetDelete = function(event){

	var data = justep.xbl('dataMaster');
	var dataDetail = justep.xbl("bizData5");
	var data1 = justep.xbl('bizData2');
	var data2 = justep.xbl('bizData4');
	dataDetail.refreshData();
	var infoIDs = data.getStore().getCheckedRowIds();// 获取选择信息的ID
	justep.xbl("tabpanel1").setTabActive("tabList");
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		debugger;
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					dataDetail.setFilter("filter1", "SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO="
							+ parseInt(infoIDs[i]));
					dataDetail.refreshData();
					var n1 = dataDetail.getCount();
					if(n1>0){
						for ( var j = 0; j < n1; j++) {
							var d = dataDetail.getCurrentID(0);
							dataDetail.deleteData(d);
						}
					}
					data1.setFilter("filter2","SAMPLE_DEVICE_MOVING_RECORD.sAMPLEDEVICENO="
							+ parseInt(infoIDs[i]));
					data1.refreshData();
					var n2 = data1.getCount();
					if(n2>0){
						for ( var j = 0; j < n2; j++) {
							var d1 = data1.getCurrentID(0);
							data1.deleteData(d1);
						}
					}
					data2.setFilter("filter3", "SAMPLE_DEVICE_OCCUPY_INFO.sAMPLEDEVICENO="
							+ parseInt(infoIDs[i]));
					data2.refreshData();
					var n3 = data2.getCount();
					if(n3>0){
						for ( var j = 0; j < n3; j++) {
							var d2 = data2.getCurrentID(0);
							data2.deleteData(d2);
						}
					}
					data.deleteData(deleteIDs);
				}
			}
		}
	}
};


mainActivity.gridSelect3Closeup = function(event){
	    debugger;
	var dataMain = justep.xbl("dataMaster");
	var tt = dataMain.getValue("pROJECTID");
	if(typeof tt == "number"){
		//var deviceType = dataMain.getValue("dEVICETYPE");
//取出申请序号		
		var deviceTypeCodeData = justep.xbl("xiangmuming");//被筛选的bizdata
		deviceTypeCodeData.setFilter("filter0", "TEST_PROJECT_INFO = "+ tt);
		deviceTypeCodeData.refreshData();
//		alert(deviceTypeCodeData.getCount());
		var aa = deviceTypeCodeData.getValue("aPPLICATIONNO");
		dataMain.setValue("aPPLICATIONNO",aa);
//		alert("申请序号"+aa);
//取出合同编号
		var hetong = justep.xbl("hetong");
		hetong.setFilter("filter0", "TEST_CONTRACT_INFO.aPPLICATIONNO = "+ aa);
		hetong.refreshData();
		var bb = hetong.getRowId(0);
		var cc = hetong.getValue("cONTRACTNAME",bb);
		dataMain.setValue("cONTRACTNO", bb);
		dataMain.setValue("cONTRACTNAME" ,cc); 
//取出供应商名称
		var xiangmuming = justep.xbl("xiangmuming");
		xiangmuming.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO = "+ aa);
		xiangmuming.refreshData();
		var gongyingshangId = xiangmuming.getValue("mANUFACTUREID");
		//alert(gongyingshangId);
		var gongyingshangname = justep.xbl("gongyingshang");
		gongyingshangname.setFilter("filter0", "AFC_MANUFACTURER_INFO = "+ gongyingshangId);
		gongyingshangname.refreshData();
//		alert(gongyingshangname.getCount());
		var gongyingshangIdname = gongyingshangname.getValue("mANUFACTUREIDCNAME");
		dataMain.setValue("mANUFACTUREID", gongyingshangId);
		dataMain.setValue("mANUFACTUREIDCNAME" ,gongyingshangIdname);
//取出检测对象
		var jianceshenqing = justep.xbl("jianceshenqing");
		jianceshenqing.setFilter("filter0","TEST_APPLICATION_INFO = "+aa );
		jianceshenqing.refreshData();
		//alert(jianceshenqing.getCount());
		var detectionObjectType = jianceshenqing.getValue("dETECTIONOBJECTTYPE",aa);
		var deviceType = jianceshenqing.getValue("dEVICETYPE",aa);
//		alert(detectionObjectType);
//		alert(deviceType);
		var jianceduixiang = justep.xbl("jianceduixiang");
		jianceduixiang.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "+detectionObjectType + " and DEVICE_TYPE_CODE.dEVICETYPE = " + deviceType);
		jianceduixiang.refreshData();
		//alert(jianceduixiang.getCount());
		
		var deviceTypeName = jianceduixiang.getValue("dEVICETYPECNAME");
		dataMain.setValue("dEVICETYPE", deviceType);
		dataMain.setValue("dEVICETYPECNAME", deviceTypeName);
	}
};



// 供应商移交
mainActivity.trigger1Click = function(event){
	debugger;
	var yijiaoDialog = justep.xbl("yijiaoDialog");
	yijiaoDialog.initEveryTimes = true;
	var dataDetail = justep.xbl("dataMaster");
	var id = dataDetail.getCurrentID();
	var fId = dataDetail.getValue("aPPLICATIONNO",id);
	var infoIDs = dataDetail.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataDetail.getCount();
	if(length == 0) {
		alert("请选择要移交的信息！");
	}else{
	yijiaoDialog.open({
		id : infoIDs[0],
		fId : fId
		
	});
};
};
//返还供应商
mainActivity.trigger2Click = function(event){
debugger;
	var fanhuanDialog = justep.xbl("fanhuanDialog");
	fanhuanDialog.initEveryTimes = true;
	var dataDetail = justep.xbl("dataMaster");
	var id = dataDetail.getCurrentID();
	var fId = dataDetail.getValue("aPPLICATIONNO",id);
	var infoIDs = dataDetail.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataDetail.getCount();
	if(length == 0) {
	alert("请选择要返还的信息！");
	}else{
	fanhuanDialog.open({
		id :infoIDs[0],
		fId : fId
	});
};
};
//内部归还
mainActivity.trigger3Click = function(event){
	var neibuguihuanDialog = justep.xbl("neibuguihuanDialog");
	neibuguihuanDialog.initEveryTimes = true;
	var dataDetail = justep.xbl("dataMaster");
	var id = dataDetail.getCurrentID();
	var fId = dataDetail.getValue("aPPLICATIONNO",id);
	var infoIDs = dataDetail.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataDetail.getCount();
	if(length == 0) {
	alert("请选择要归还的信息！");
	}else{
	neibuguihuanDialog.open({
		id :infoIDs[0],
		fId : fId
		
	});
};
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.yijiaoDialogClose = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.refreshData();
};

mainActivity.grdDetail_mODELNAMEEditDone = function(event){
	var cc = justep.xbl("dataMaster");
	var biz = justep.xbl("dataDetail");
	var aa =justep.xbl("bizData6");
	var id = biz.getCurrentID();
	var q = cc.getCurrentID();
	var d = biz.getValue("sAMPLEDEVICENO");
	var a = biz.getValue("mODELNAME");
	aa.setFilter("filter2","SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO ="+q);
	aa.refreshData();
	aa.setFilter("filter0","SAMPLE_DEVICE_HARDWARE_INFO.mODELNAME = '"+a+"'" );
	aa.refreshData();
	var b = aa.getCount();
	if(b!=0){
	alert("模块名称已经存在！");
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
	}
};

mainActivity.trigger4Click = function(event){
	var chaxunDialog = justep.xbl("chaxunDialog");
	chaxunDialog.initEveryTimes = true;
	var dataDetail = justep.xbl("dataMaster");
	var id = dataDetail.getCurrentID();
	var fId = dataDetail.getValue("aPPLICATIONNO",id);
	var infoIDs = dataDetail.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataDetail.getCount();
	if(length == 0) {
		alert("请选择要查询的履历！");
	}else{
	chaxunDialog.open({
		id : infoIDs[0],
		fId : dataDetail.getValue("aPPLICATIONNO",infoIDs[0])
		
	});
};
}

