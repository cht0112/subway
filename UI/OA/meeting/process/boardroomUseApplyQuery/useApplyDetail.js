function tabPage2xforms_select(event) {
}
var rowId = "";
function mdMainxforms_model_construct_done(event) {
	var fID = justep.Request.URLParams.applyID;
	rowId = fID;
	var data = justep.xbl("dUseApply");
	data.filters.setFilter("mainFilter", "OA_MT_UseApply='" + fID + "'");
	data.refreshData();
}

function tabFlowChartxforms_select(event) {
	var flowChart = justep.xbl("processChart");
	flowChart.loadByData(
			"/OA/meeting/process/boardroomUseApply/boardroomUseApplyProcess",
			rowId);
}