var detailActivity = {};
function xforms_model_construct_done(event) {
	var data = justep.xbl('dataMain');
	var rowid = justep.Request.URLParams.rowid;
	if (rowid && (rowid != '')) {
		data.filters.setFilter("flowFilter", "OA_GZJH='" + rowid + "'");
		data.refreshData();
	} else {
		data.newData();
		// concatForTittle();
	}
	concatForTittle();
}
function dataMainAfterNew(event) {
	concatForTittle();
}
function dataMainValueChanged(event) {
	var data = justep.xbl('dataMain');
	if ((event.column == 'fPlanYear' || event.column == 'fPlanWeek' || event.column == 'fPlanMonth')) {
		concatForTittle();
	}
}
function concatForTittle() {
	var data = justep.xbl('dataMain');
	var rowID = data.getRowId();
	var fPlanYear = data.getValue("fPlanYear", rowID);
	var fPlanMonth = data.getValue("fPlanMonth", rowID);
	var fPlanWeek = data.getValue("fPlanWeek", rowID);
	var fCBBM = data.getValue("fCreateDeptName", rowID);
	var fCBR = data.getValue("fCreatePsnName", rowID);
	var title = "";
	if ("" != fPlanYear && "" != fPlanMonth && "" != fPlanWeek) {
		title = fCBR + " " + fPlanYear + "年" + fPlanMonth + "月" + fPlanWeek + " 工作计划";
	} else if ("" != fPlanYear && "" != fPlanMonth) {
		title = fCBR + " " + fPlanYear + "年" + fPlanMonth + "月" + " 工作计划";
	} else if ("" != fPlanYear) {
		title = fCBR + " " + fPlanYear + "年" + fPlanMonth + " 工作计划";
	}
	data.setValue("fJHZT", title, rowID);
	document.getElementById('iptTitle').value = title;
	if ("" != fPlanYear && "" == fPlanMonth) {
		data.setValue("fJHKSRQ", fPlanYear + "-01-01", rowID);
		return;
	}
	if ("" != fPlanYear && fPlanMonth.length > 1) {
		data.setValue("fJHKSRQ", fPlanYear + "-" + fPlanMonth + "-01", rowID);
	} else if ("" != fPlanYear && fPlanMonth.length == 1) {
		data.setValue("fJHKSRQ", fPlanYear + "-0" + fPlanMonth + "-01", rowID);
	} else {
		data.setValue("fJHKSRQ", "", rowID);
	}
}
function dataMainBeforeSave(event){
	var contentData = justep.xbl('dGZNR');
	var len = contentData.getCount();
	if(len <= 0){
		event.cancel = true;
		alert("工作内容为空,请填写!");
	}
}
detailActivity.insertItemClick = function(event){
	var been = justep.xbl('dGZNR');
	//alert(been.getCount());
	been.newData(been.getCount());
};
detailActivity.mdDefaultXBLLoaded = function(event){
	//禁止下拉框和日期类型的input的输入
	$(justep.xbl('fCreateTime').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('fPlanYear').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('fPlanMonth').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('fPlanWeek').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('treeSelect1').input).bind('keydown', function(evt){evt.preventDefault();});
};

/**
	name:bizData#onSaveCommit
	description: <b>[回调型事件]</b>业务数据保存事务提交后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
detailActivity.dataMainSaveCommit = function(event){
	var caller = null;
	var callerName = justep.Request.URLParams.callerName;
	if (callerName && (callerName != "")) {
		var frames = window.parent.frames;
		for ( var i = 0; i < frames.length; i++) {
			if (frames[i].name == callerName) {
				caller = frames[i];
				break;
			}
		}
	}
	if (caller) {
		if (caller.dataChangeCallBackFun) {
			var data = justep.xbl("dataMain");
			var rowid = data.getCurrentRowId();
			caller.dataChangeCallBackFun(rowid);
		}
	}
};
