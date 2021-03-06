var startActivity = {};

function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dDiscardApply');
	var sData1 = justep.Context.getProcessData1();
	if (sData1 == null || sData1 == undefined) {
		data.newData();
	} else {
		data.filters.setFilter("flowFilter", "OA_AS_DiscardApply='" + sData1
				+ "'");
		data.refreshData();
	}
}
var isFilter = "";
var dDiscardApplyValueChanging = false;
function dDiscardApplyValueChanged(event) {
	if (!dDiscardApplyValueChanging) {
		dDiscardApplyValueChanging = true;
		try {
			var psnID = justep.Context.getCurrentPersonID();
			var psnName = justep.Context.getCurrentPersonName();
			var time = justep.Date.toString(justep.System.datetime(),
					justep.Date.STANDART_FORMAT);
			var data = justep.xbl("dDiscardApply");

			if (event.column == "fApplyDeptID") {
				var rowid = data.getCurrentRowId();
				data.setValue("fApplyPsnID", "", rowid);
				data.setValue("fApplyPsnName", "", rowid);
			}

			data.setValue("fUpdatePsnID", psnID);
			data.setValue("fUpdatePsnName", psnName);
			data.setValue("fUpdateTime", time);
		} finally {
			dDiscardApplyValueChanging = false;
		}
	}
}
// 人员下拉事件
function treeSltPsmDropdown(event) {
	var data = justep.xbl('dDiscardApply');
	var applyDeptID = data.getValue("fApplyDeptID");

	var personData = justep.xbl('dPsm');
	personData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/"
			+ applyDeptID + ".%'");
	personData.refreshData();
}
function trgSelectAssetDOMActivate(event) {
	isFilter = "no";
	var wDlgAssetCard = justep.xbl("wDlgAssetCard");
	wDlgAssetCard.initEveryTimes = true;
	wDlgAssetCard.open();
}

function wDlgAssetCardSend(event) {
	var params = {
		"isFilter" : isFilter
	};
	return params;
}

function wDlgAssetCardReceive(obj) {
	var data = justep.xbl('dDiscardApply');
	data.setValue("fAssetID", obj.data.fID);
	data.setValue("fCode", obj.data.fCode);
	data.setValue("fName", obj.data.fName);
	data.setValue("fSpecType", obj.data.fSpecType);
	data.setValue("fKindID", obj.data.fKindID);
	data.setValue("fKind", obj.data.fKind);
	data.setValue("fServiceYear", obj.data.fServiceYear);
	data.setValue("fEvaluateValue", obj.data.fRemainValue);
}
function tabFlowChartxforms_select(event) {
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dDiscardApply').getCurrentRowId();
	control.loadByData(process, bizData);
}
startActivity.trgPrintClick = function(event){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var rowid = justep.xbl("dDiscardApply").getCurrentRowId();
	if (rowid && (rowid != "")) {
		var url = "/OA/asset/process/assetReport/DiscardReport/DiscardApplyReport.w?process="
				+ process + "&activity=" + activity + "&rowid=" + rowid;
		justep.Portal.openWindow("固定资产报废单打印", url);
	}	
};

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
startActivity.treeSltPsmCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dDiscardApply');
	data.setValue("fApplyPsnFID",sFID);
	data.setValue("fApplyPsnFName",sFName);
};

/**
	name:process#onBeforeAdvanceQuery
	description: <b>[回调型事件]</b>流转查询之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"cancel":false}
*/
startActivity.assetDiscardApplyProcessBeforeAdvanceQuery = function(data){
	var dDiscardApply = justep.xbl('dDiscardApply');
	var fCode = dDiscardApply.getValue("fCode");
	if (fCode == "") {
		data.cancel = true;
		alert('请选择需要报废的资产！');
	}
};
