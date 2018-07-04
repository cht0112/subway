var mainActivity = {};
//debugger;
mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivity.saveItemClick = function(event){
	var dataMain = justep.xbl("dataMain");
	//var indexId = dtatMain.getValue("iNDEXID");
	//alert(indexId);
	//var zbyyinfo = justep.xbl("zbyyxxData");
	//alert(zbyyinfo.getCount());
	//zbyyinfo.setFilter("filter0", "INDEX_ID_APPLY_INFO.iNDEXID="+indexId);
	//zbyyinfo.refreshData();
	//alert(zbyyinfo.getCount());
	//var applyObject = zbyyinfo.getValue("aPPLYFOROBJECT");
	//alert(applyObject);
	//var applyType = zbyyinfo.getValue("aPPLYFORDEVICETYPE");
	//alert(applyType);
	//dtatMain.setValue("aPPLYFOROBJECT",applyObject);
	//dtatMain.setValue("aPPLYFORDEVICETYPE",applyType);
	dataMain.saveData();
	var save= document.getElementById("saveTrigger");
	save.disabled=true;
	var savePic = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src",savePic);
	justep.xbl('saveTrigger').setDisabled(true);
	var insert= document.getElementById("insertMore");
	insert.disabled=false;
	var insertPic = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMore").attr("src",insertPic);
	justep.xbl('insertMore').setDisabled(false);
	//dtatMain.refreshData();
	//justep.xbl("tabpanel1").setTabActive("tabList");
};

mainActivity.gridSelect2Closeup = function(event){
	var zbyyinfo = justep.xbl("zbyyxxData");
	var indexId = justep.xbl("gridSelect2");
	var indexIdValue = indexId.getValue("iNDEXID");
	//alert(indexIdValue);
	//alert(typeof(indexIdValue));
	if(indexIdValue != null && indexIdValue != "" && indexIdValue.length != 0){
		zbyyinfo.setFilter("filter0", "INDEX_ID_APPLY_INFO.iNDEXID="+indexIdValue);
		zbyyinfo.refreshData();
	}
	
	//alert(zbyyinfo.getCount());
	//alert(zbyyinfo.getValue("iNDEXID"));
};


mainActivity.gridSelect5Closeup = function(event){
	var zbyyinfo = justep.xbl("zbyyxxData");
	//alert(zbyyinfo.getCount());
	var indexId = justep.xbl("gridSelect2");
	var indexIdValue = indexId.getValue("iNDEXID");
	var deviceObject = justep.xbl("gridSelect5");
	var deviceObjectValue = deviceObject.getValue("aPPLYFORDEVICETYPE");
	if(deviceObjectValue != null && deviceObjectValue != "" && deviceObjectValue.length != 0 && indexIdValue != null && indexIdValue != "" && indexIdValue.length != 0){
		//alert(8);
		zbyyinfo.setFilter("filter1", "INDEX_ID_APPLY_INFO.aPPLYFORDEVICETYPE="+deviceObjectValue + " and INDEX_ID_APPLY_INFO.iNDEXID="+indexIdValue);
		zbyyinfo.refreshData();
		//alert(zbyyinfo.getCount());
		var ObjectType = zbyyinfo.getValue("aPPLYFOROBJECT");
		//var detectionOjbectType = justep.xbl("detectionOjbectTypeData");
		//detectionOjbectType.setFilter("filter2", "DETECTION_OBJECT_TYPE="+ObjectType);
		//detectionOjbectType.refreshData();
		//var ObjectTypeCnName = detectionOjbectType.getValue("dETECTIONOBJECTCNAME");
		//alert(ObjectTypeCnName);
		var indexLib = justep.xbl("dataMain");
		indexLib.setValue("aPPLYFOROBJECT",ObjectType);
		//justep.xbl("gridSelect4").refreshData();
		//indexLib.refreshData();
	}
	
};

mainActivity.tabListSelect = function(event){
	justep.xbl("dataMain").refreshData();
};

mainActivity.insertItemClick = function(event){
	justep.xbl("dataMain").newData();
	var save= document.getElementById("saveTrigger");
	save.disabled=false;
	var savePic = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger").attr("src",savePic);
	justep.xbl('saveTrigger').setDisabled(false);
	var insert= document.getElementById("insertMore");
	insert.disabled=true;
	var insertPic = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMore").attr("src",insertPic);
	justep.xbl('insertMore').setDisabled(true);
};

/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
mainActivity.dataMainValueChanging = function(event){
	var save= document.getElementById("saveTrigger");
	save.disabled=false;
	var savePic = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger").attr("src",savePic);
	justep.xbl('saveTrigger').setDisabled(false);
};

mainActivity.assetDelete = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
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
};

mainActivity.trigger1Click = function(event){
	justep.xbl("zhibiaoDialog").open();
};
