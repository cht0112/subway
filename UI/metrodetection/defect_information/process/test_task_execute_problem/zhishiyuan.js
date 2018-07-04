var zhishiyuan = {};
zhishiyuan._inputParams = {
	a : null,
	d: null
};

zhishiyuan.grdMainRowDblClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

zhishiyuan.gridSelect1Closeup = function(event) {
	var bizData1 = justep.xbl("bizData1");
	var bizData2 = justep.xbl("bizData2");
	var aPPLYFOROBJECT = bizData1.getValue("DETECTION_OBJECT_TYPE");
	if (typeof aPPLYFOROBJECT == "number") {
		bizData2.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "
				+ aPPLYFOROBJECT);
		bizData2.refreshData();
	}
};

zhishiyuan.gridSelect3Closeup = function(event) {
	var bizData1 = justep.xbl("bizData3");
	var bizData2 = justep.xbl("bizData4");
	var aPPLYFOROBJECT = bizData1.getCurrentID();
	if (typeof aPPLYFOROBJECT == "number") {
		bizData2.setFilter("filter0",
				"DETECTION_RANGE_CODE.dETECTIONRANGETYPE = " + aPPLYFOROBJECT);
		bizData2.refreshData();
	}
};

zhishiyuan.gridSelect5Closeup = function(event) {
	var bizData3 = justep.xbl("bizData5");
	var bizData2 = justep.xbl("bizData6");
	var aPPLYFOROBJECT = bizData3.getValue("PROBLEM_PRIOR_CODE");
	if (typeof aPPLYFOROBJECT == "number") {
		bizData2.setFilter("filter0", "PROBLEM_TYPE_CODE.pROBLEMPRIOR = "
				+ aPPLYFOROBJECT + "");
		bizData2.refreshData();
	}
};

zhishiyuan.tabListSelect = function(event) {
	justep.xbl("dataMain").refreshData();
};

zhishiyuan.gridSelect8Closeup = function(event) {
	var bizData = justep.xbl("dataMain");
	var bizData7 = justep.xbl("bizData8");
	var c = bizData.getValue("MANUFACTURE_ID");
	if (typeof c == "number") {
		bizData7.setFilter("filter0", "AFC_MANUFACTURER_INFO =" + c);
		bizData7.refreshData();
		var type = bizData7.getValue("mANUFACTURETYPE", c);
		bizData.setValue("mANUFACTURETYPE", type, bizData.getCurrentId());
	}
};

/**
 * name:windowReceiver#onReceive
 * 
 * @event description: <b>[回调型事件]</b> window接收对话框传入的数据
 * @param event
 *            {"source":组件的js对象,"data":传入的数据}
 */
zhishiyuan.windowReceiver1Receive = function(event) {
	zhishiyuan._inputParams.a = event.data.a;
	zhishiyuan._inputParams.d = event.data.d;
	justep.xbl("smartFilter1").getInnerInput().input.value = zhishiyuan._inputParams.a;
	justep.xbl("smartFilter1").getInnerInput().blur();
	justep.xbl("dataMain").refreshData();
};

/**
 * name:smartFilter#onGetCondition
 * 
 * @event description: <b>[回调型事件]</b>构造过滤条件
 * @param event
 *            它的结构如下:<br/>{ "filterData": 过滤数据集 "filterRelations":过滤的关系
 *            "value":当前过滤值 "defaultCondition":当前过滤语句 }
 */
zhishiyuan.smartFilter1GetCondition = function(event) {
	var myfilter = (event.value).split("");// 把查询的条件分割成单个汉字
	var myfilters = "";
	for ( var i = 0; i < myfilter.length; i++) {
		myfilters += "%" + myfilter[i];
	}
	myfilters += "%";// 重新连接成%A%B%C%的格式
	var datafilter = "PROBLEM_RESOURCE_INFO.PROBLEM_DESC like '" + myfilters
			+ "'";
	event.handled = true;
	return datafilter;
};

zhishiyuan.trigger2Click = function(event) {
	var maindata = justep.xbl("dataMain");
	var state = "";
	var fid;
	var id = "";
	var obj = document.getElementsByName("checkbox");
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			state = "checked";
			fid = obj[i].id;
			id = id + "," + fid;
		}
	}
	var ID = id.substring(1, id.length);
	if (state == "checked") {
		justep.windowReceiver.windowEnsure({
		ID:ID
	},true);
	justep.windowReceiver.windowCancel();
	} else {
		alert("请先勾选要选择的信息！");
	}
};

zhishiyuan.grdMain_recCBRender = function(event){
		var fid = event.rowId;
		var html = "<input type=\"checkbox\" name=\"checkbox\" id=\"" + fid
				+ "\" onClick=\"chooseOne(this)\">";
		return html;
	};
	function chooseOne(cb) {
		var obj = document.getElementsByName("checkbox");
		for (i = 0; i < obj.length; i++) {
			if (obj[i] != cb)
				obj[i].checked = false;
			else
				obj[i].checked = true;
		}
	};
zhishiyuan.removeTriggerClick = function(event){
	var maindata = justep.xbl("dataMain");
	var state = "";
	var fid;
	var id = "";
	var obj = document.getElementsByName("checkbox");
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			state = "checked";
			fid = obj[i].id;
			id = id + "," + fid;
		}
	}
	var ids = id.substring(1, id.length);
	if (state == "checked") {
		maindata.deleteData(ids);
	} else {
		alert("请选择要删除的信息！");
	}
};
zhishiyuan.insertTriggerClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var dataMain = justep.xbl("dataMain");
	var bizData1 = justep.xbl("bizData9");
	bizData1.setFilter("filter0", "TEST_TASK_EXECUTE_PROBLEM = "
				+ zhishiyuan._inputParams.d );
	bizData1.refreshData();
	var a =bizData1.getValue("pROBLEMPRIOR");
	dataMain.setValue("PROBLEM_PRIOR",a);
	var b =bizData1.getValue("pROBLEMTYPE");
	dataMain.setValue("PROBLEM_TYPE",b);
	var v =bizData1.getValue("pROBLEMDESC");
	dataMain.setValue("PROBLEM_DESC",v);
	var c =bizData1.getValue("mEMO");
	dataMain.setValue("MEMO",c);
};
zhishiyuan.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("iptHARDWARE_VERSION").input).attr("maxlength", 10);
	$(justep.xbl("iptDEVICE_STYLE").input).attr("maxlength", 200);
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false}} );
};
//zhishiyuan.tabDetailSelect = function(event){
//	var problem =justep.xbl("problem");
//	var dataMain=justep.xbl("dataMain");
//	var a =dataMain.getCurrentID();
//	problem.setFilter("filter0", "TEST_TASK_EXECUTE_PROBLEM.pROBLEMID = "+a);
//	problem.refreshData();
//};

zhishiyuan.saveMore = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.saveData();
	var i = document.getElementById('saveMas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
	var ID = justep.xbl("dataMain").getCurrentID();
	justep.windowReceiver.windowEnsure({
		ID:ID
	},true);
	justep.windowReceiver.windowCancel();
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
zhishiyuan.dataMainValueChanged = function(event){
	var i = document.getElementById('saveMas');
	i.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(false);
};
