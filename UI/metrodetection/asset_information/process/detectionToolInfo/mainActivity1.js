var mainActivity1 = {};
var code = "";
mainActivity1.grdMasterRowDblClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var idd = document.getElementById('saveMas');
	idd.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
};

mainActivity1.newItemClick = function(event) {
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	var i = document.getElementById('saveMas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
};

// 打开工具占用信息查询
mainActivity1.trigger1Click = function(event) {
	justep.xbl("windowDialog2").open();
};

mainActivity1.tabListSelect = function(event) {
	var dataDetail = justep.xbl("dataMaster");
	// alert(6);
	dataDetail.refreshData();
	// dataDetail.loadData();

};

mainActivity1.objTypeSelectCloseup = function(event) {
	var bizData3 = justep.xbl("detectionobjecttypeData");
	var bizData2 = justep.xbl("devicetypecodeData");
	var aPPLYFOROBJECT = bizData3.getValue("DETECTION_OBJECT_TYPE");
	bizData2.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "
			+ aPPLYFOROBJECT + "");
	bizData2.refreshData();
};

mainActivity1.saveMore = function(event) {
	var id = document.getElementById('insertMas');
	id.disabled = false;
	var tr = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src", tr);
	var idd = document.getElementById('saveMas');
	idd.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);

	debugger;
	var dataMaster = justep.xbl("dataMaster");	
	var tool_relationship = justep.xbl("tool_relationship");
	
	var tool_category_code = justep.xbl("tool_category_code").getCurrentID();
	var tool_sort_code = justep.xbl("bizData1").getCurrentID();
	var tool_type_code = justep.xbl("tool_type_code").getCurrentID();
	
	//alert(tool_category_code+'-'+tool_sort_code+'-'+tool_type_code);
	//var tool_category = tool_relationship.getValue("tOOLCATEGORY");
	//var tool_sort = tool_relationship.getValue("tOOLSORT");
	//var tool_type = tool_relationship.getValue("tOOLTYPE");
	
	tool_relationship.setFilter("filter0", "TOOL_RELATIONSHIP.tOOLCATEGORY = "+tool_category_code +" and TOOL_RELATIONSHIP.tOOLSORT = "+ tool_sort_code+ " and TOOL_RELATIONSHIP.tOOLTYPE ="+ tool_type_code);
	tool_relationship.refreshData();
//	alert(tool_relationship.getCount());
	if(tool_relationship.getCount()==0){
		tool_relationship.newData();
		tool_relationship.setValue("tOOLCATEGORY", tool_category_code);
		tool_relationship.setValue("tOOLSORT", tool_sort_code);
		tool_relationship.setValue("tOOLTYPE", tool_type_code);
		
		//var categoryNum=justep.xbl("tool_category_code").getValue("", tool_category_code);
		//var sortNum=justep.xbl("bizData1").getValue("", tool_sort_code);
		//var typeNum=justep.xbl("tool_type_code").getValue("", tool_type_code);
		//var curNum=categoryNum+sortNum+typeNum;
		//tool_relationship.setValue("TOOL_RELATIONSHIP",curNum);
		
		tool_relationship.saveData();
		
		var tool_type_id = tool_relationship.getCurrentID();
		dataMaster.setValue("tOOLTYPEID",tool_type_id);
	}else{
		var tool_type_id = tool_relationship.getCurrentID();
		dataMaster.setValue("tOOLTYPEID",tool_relationship.getCurrentID());
	}
//	alert(dataMaster.getValue("aSSETSORTCODE", dataMaster.getCurrentID())+"="+code);
	dataMaster.saveData();

	
};

mainActivity1.inserMore = function(event) {
    var dataMaster = justep.xbl("dataMaster");
	var dataDetail = justep.xbl("dataDetail");
	dataDetail.newData();
	dataDetail.setValue("tOOLNO2",dataMaster.getCurrentID());
	
};
// 2
mainActivity1.setDelete = function(event) {
	var data = justep.xbl('dataDetail');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
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

mainActivity1.dataMasterValueChanging = function(event) {
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
};

// 设置文本输入框输入长度
mainActivity1.mdDefaultXBLLoaded = function(event) {
	$(justep.xbl("iptTOOLCNAME").input).attr("maxlength", 200);
	$(justep.xbl("iptTOOLENAME").input).attr("maxlength", 200);
	$(justep.xbl("iptTOOLSTANDARDS").input).attr("maxlength", 200);
	$(justep.xbl("iptINPRICE").input).attr("maxlength", 10);
	$(justep.xbl("iptTOOLMODEL").input).attr("maxlength", 200);
	$(justep.xbl("iptTOOLID").input).attr("maxlength", 200);
	$(justep.xbl("iptTOOLUNIT").input).attr("maxlength", 200);
	$(justep.xbl("iptINDATE").input).bind('keydown',function(evt){evt.preventDefault();});

};

// 1
mainActivity1.removeTrigger1Click = function(event) {
	var dataMaster = justep.xbl('dataMaster');
	var infoIDs = dataMaster.getStore().getCheckedRowIds();// 获取选择信息的ID
	justep.xbl("tabpanel1").setTabActive("tabList");
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					dataMaster.deleteData(deleteIDs);
					dataMaster.saveData();
				}
			}
		}
	}
};

mainActivity1.gridSelect3Dropdown = function(event) {
	// 工具厂商筛选
	var manufactureData = justep.xbl("gongyingshang");
	manufactureData.setFilter("filter0",
			"AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 2");
	manufactureData.refreshData();
};

mainActivity1.removeMasClick = function(event) {
	var dataMaster = justep.xbl("dataMaster");
	var tsbi = dataMaster.getCurrentID();
	dataMaster.deleteData(tsbi);
	dataMaster.saveData();
};
// 点击领用
mainActivity1.trigger3Click = function(event){
debugger;
	var lingyongDialog = justep.xbl("lingyongDialog");
	lingyongDialog.initEveryTimes = true;
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
//	var fId = dataMaster.getValue("tOOLNO",id);
	var infoIDs = dataMaster.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataMaster.getCount();
	var status = dataMaster.getValue("rECIVESTATE", infoIDs[0]);
//	alert(status);
	if(length == 0) {
		alert("请选择要领用的工具！");
	}else if(status == 1){
		alert("此样品已被领用！");
	}else{
		lingyongDialog.open({
			id : infoIDs[0]
	//		fId : fId
		});
	}
};
// 点击外部出库
mainActivity1.trigger6Click = function(event){
debugger;
	var waibuchukuDialog = justep.xbl("waibuchukuDialog");
	waibuchukuDialog.initEveryTimes = true;
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
	var infoIDs = dataMaster.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataMaster.getCount();
	if(length == 0) {
		alert("请选择要出库的工具！")
	}else{
	waibuchukuDialog.open({
		id : infoIDs[0]
	});
}
};

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
mainActivity1.grid3RowClick = function(event){
};
//点击归还
mainActivity1.trigger4Click = function(event){
	debugger;
	var guihuanDialog = justep.xbl("guihuanDialog");
	guihuanDialog.initEveryTimes = true;
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
	var infoIDs = dataMaster.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataMaster.getCount();
	if(length == 0) {
		alert("请选择要归还的工具！")
	}else{
//	alert(id);
	guihuanDialog.open({
		id : infoIDs[0]
		});
	}
};
// 外部入库

mainActivity1.trigger2Click = function(event){

	var waiburukuDialog = justep.xbl("waiburukuDialog");
	waiburukuDialog.initEveryTimes = true;
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
	var infoIDs = dataMaster.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataMaster.getCount();
	if(length == 0) {
		alert("请选择要入库的工具！")
	}else{
	waiburukuDialog.open({
		id : infoIDs[0]
	});
}
};


/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity1.lingyongDialogClose = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.refreshData();
};

mainActivity1.trigger5Click = function(event){
//debugger;
	var chaxunDialog = justep.xbl("chaxunDialog");
	chaxunDialog.initEveryTimes = true;
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
	var infoIDs = dataMaster.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var count = dataMaster.getCount();
	if(length == 0) {
		alert("请选择要查询的履历！");
	}else{
		chaxunDialog.open({
		id : infoIDs[0]
	});
}
};

mainActivity1.input1Focus = function(event){
	var assetSortCodeWD = justep.xbl("assetSortCodeWD");
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
	var sort = dataMaster.getValue("aSSETSORTCODE", id);
	assetSortCodeWD.open({"id":id,"sort":sort});
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
mainActivity1.assetSortCodeWDReceive = function(event){
	var dataMaster = justep.xbl("dataMaster");
    code = event.data.code;
	if(code != null && code != ""){
		dataMaster.setValue("aSSETSORTCODE",code, dataMaster.getCurrentID());
	}
};

mainActivity1.gridSelect7Dropdown = function(event){
	var TOOL_SORT_CODE=justep.xbl("bizData1");
	var tool_category_code = justep.xbl("tool_category_code");
	var parId = tool_category_code.getCurrentID();
	if(parId != null && parId != "") {
		TOOL_SORT_CODE.setFilter("filter0", "TOOL_SORT_CODE.pARENTLEV="+parId);
		TOOL_SORT_CODE.refreshData();
		TOOL_SORT_CODE.loadData();
	} else {
		alert("请选择工具分类!");
	}
	
};

mainActivity1.gridSelect6Dropdown = function(event){
	var TOOL_SORT_CODE=justep.xbl("bizData1");
	var parId = TOOL_SORT_CODE.getCurrentID();
	var tool_type_code = justep.xbl("tool_type_code");
	if(parId != null && parId != "") {
		tool_type_code.setFilter("filter0", "TOOL_TYPE_CODE.pARENTLEV="+parId);
		tool_type_code.refreshData();
		tool_type_code.loadData();
	} else {
		alert("请选择工具类型!");
	}
};
