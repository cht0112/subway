var ziyuanActivity = {};
ziyuanActivity._inputParams = {
	a : null,
	d: null
};

ziyuanActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

ziyuanActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var dataMain = justep.xbl("dataMain");
	var bizData1 = justep.xbl("bizData1");
//	bizData1.setFilter("filter0", "SYSTEM_PROBLEM_RECORD.system_problem_no=" + ziyuanActivity._inputParams.d);
	bizData1.setFilter("filter0", "SYSTEM_PROBLEM_RECORD.system_problem_no = "
				+ ziyuanActivity._inputParams.d );
	bizData1.refreshData();
	var c = bizData1.getValue("system_type");
	dataMain.setValue("sYSTEMTYPE",c);
	
	var d =bizData1.getValue("error_type");
	dataMain.setValue("eRRORTYPE", d);
	
	var e =bizData1.getValue("model_name");
	dataMain.setValue("MODULE_NAME", e);
	
	var f =bizData1.getValue("dection_object");
	dataMain.setValue("dECTIONOBJECT", f);
	var g =bizData1.getValue("dection_business");
	dataMain.setValue("dECTIONBUSINESS", g);
	var h =bizData1.getValue("error_desc");
	dataMain.setValue("eRRORDESC", h);
	var i =bizData1.getValue("memo");
	dataMain.setValue("mEMO", i);
};

ziyuanActivity.windowReceiver1Receive = function(event){
	ziyuanActivity._inputParams.a = event.data.a;
	ziyuanActivity._inputParams.d = event.data.d;
	justep.xbl("smartFilter1").getInnerInput().input.value = ziyuanActivity._inputParams.a;
	justep.xbl("smartFilter1").getInnerInput().blur();
	justep.xbl("dataMain").refreshData();
};

ziyuanActivity.tabListSelect = function(event){
	justep.xbl("dataMain").refreshData();
};


ziyuanActivity.smartFilter1GetCondition = function(event){
	var myfilter=(event.value).split("");//把查询的条件分割成单个汉字
    var myfilters="";
    for (var i=0;i<myfilter.length;i++){
    	 myfilters+="%"+myfilter[i];
    }
    myfilters+="%";//重新连接成%A%B%C%的格式
    var datafilter="SYSTEM_RESOURCE_INFO.eRRORSOLUTION like '"+myfilters+"'";
    event.handled = true;
    return datafilter;
};

ziyuanActivity.trigger3Click = function(event){
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

ziyuanActivity.grdMain_recCBRender = function(event){
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

ziyuanActivity.assetDelete = function(event){
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

ziyuanActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("iptMODULE_NAME").input).attr("maxlength", 200);
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=2){return false;}} );
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
	$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
	$(justep.xbl('textarea4').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
};


ziyuanActivity.saveMore = function(event){
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
ziyuanActivity.dataMainValueChanged = function(event){
	var i = document.getElementById('saveMas');
	i.disabled = false;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(false);
};
