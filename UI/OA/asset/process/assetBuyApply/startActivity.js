var startActivity = {};
function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dBuyApplyM');
	var sData1 = justep.Context.getProcessData1();
	if (sData1 == null || sData1 == undefined) {
		data.newData();
	} else {
		data.filters
				.setFilter("flowFilter", "OA_AS_BuyApplyM='" + sData1 + "'");
		data.refreshData();
	}
}


function dBuyApplyMValueChanged(event) {
	var data = justep.xbl('dBuyApplyM');
	if (event.column == "fApplyDeptID") {
		var rowid = data.getCurrentRowId();
		data.setValue("fApplyPsnID", "", rowid);
		data.setValue("fApplyPsnName", "", rowid);
	}
}

// 人员下拉事件
function treeSltPsmDropdown(event) {
	var data = justep.xbl('dBuyApplyM');
	var applyDeptID = data.getValue("fApplyDeptID");

	var personData = justep.xbl('dPsm');
	personData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/"
			+ applyDeptID + ".%'");
	personData.refreshData();
}

function dBuyApplyDAfterDelete(event) {
	sumAmount();
}

function dBuyApplyDValueChanged(event) {
	var data = justep.xbl('dBuyApplyD');
	if (event.column == "fBuyNum" || event.column == "fPrice") {
		var rowid = data.getCurrentRowId();
		var fPrice = data.getValue("fPrice", rowid);
		var fBuyNum = data.getValue("fBuyNum", rowid);
		var fAmount = parseFloat((fPrice * fBuyNum).toFixed(2));
		data.setValue("fAmount", fAmount, rowid);
		sumAmount();
	}
}

function tabFlowChartxforms_select(event) {
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dBuyApplyM').getCurrentRowId();
	control.loadByData(process, bizData);
}

function sumAmount() {
	var mainData = justep.xbl('dBuyApplyM');
	var buyApplyData = justep.xbl('dBuyApplyD');
	var totleAmount = 0;
	var length = buyApplyData.getCount();
	for (var i = 0; i < length; i++) {
		var mID = buyApplyData.getRowId(i);
		if (typeof mID == "undefined") {
			continue;
		}
		var fAmount = buyApplyData.getValue("fAmount", mID);
		totleAmount = parseFloat(totleAmount - (-fAmount)).toFixed(2);
	}
	mainData.setValue("fAmount", totleAmount, mainData.getCurrentRowId());
}
startActivity.trgPrintClick = function(event){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var rowid = justep.xbl("dBuyApplyM").getCurrentRowId();
	if (rowid && (rowid != "")) {
		var url = "/OA/asset/process/assetReport/BuyApplyReport/BuyApplyReport.w?process="
				+ process + "&activity=" + activity + "&rowid=" + rowid;
		justep.Portal.openWindow("打印", url);
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
	var data = justep.xbl('dBuyApplyM');
	data.setValue("fApplyPsnFID",sFID);
	data.setValue("fApplyPsnFName",sFName);
};

/**
	name:process#onBeforeAdvanceQuery
	description: <b>[回调型事件]</b>流转查询之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"cancel":false}
*/
startActivity.assetBuyApplyProcessBeforeAdvanceQuery = function(data){
	var len = justep.xbl('dBuyApplyD').getCount();
	if (len == 0) {
		data.cancel = "true";
		alert('请填写资产明细！');
	}
};
