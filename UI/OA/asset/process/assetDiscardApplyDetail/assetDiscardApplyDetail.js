var assetDiscardApplyDetail = {};
function mdMainxforms_model_construct_done(event)
{	
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dDiscardApply');
	if(operator=="view"){
		data.filters.setFilter("discardpplyFilter", "OA_AS_DiscardApply='" + id + "'");
		data.refreshData();	
	}
}
function tabFlowChartxforms_select(event)
{	
	var control = justep.xbl("processChart");
	var process = "/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess";
	var bizData = justep.xbl('dDiscardApply').getCurrentRowId();
	control.loadByData(process,bizData);
}
assetDiscardApplyDetail.trgPrintClick = function(event){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var rowid = justep.xbl("dDiscardApply").getCurrentRowId();
	if (rowid && (rowid != "")) {
		var url = "/OA/asset/process/assetReport/DiscardReport/DiscardApplyReport.w?process="
				+ process + "&activity=" + activity + "&rowid=" + rowid;
		justep.Portal.openWindow("固定资产报废单打印", url);
		}	
};
