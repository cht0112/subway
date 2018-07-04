function tabFlowChartxforms_select(event) {
	var control = justep.xbl("processChart");
	var process = "/OA/asset/process/assetBuyApply/assetBuyApplyProcess";
	var bizData = justep.xbl('dBuyApplyM').getCurrentRowId();
	control.loadByData(process, bizData);
}

function mdMainxforms_model_construct_done(event) {
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dBuyApplyM');
	if (operator == "view") {
		data.filters.setFilter("buyApplyFilter", "OA_AS_BuyApplyM='" + id + "'");
		data.refreshData();
	}
}
function trgPrintClick(event){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var rowid = justep.xbl("dBuyApplyM").getCurrentRowId();
	if (rowid && (rowid != "")) {
		var url = "/OA/asset/process/assetReport/BuyApplyReport/BuyApplyReport.w?process="
				+ process + "&activity=" + activity + "&rowid=" + rowid;
		justep.Portal.openWindow("固定资产采购申请打印", url);
		}
}
