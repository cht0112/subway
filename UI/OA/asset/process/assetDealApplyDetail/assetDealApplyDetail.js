function mdMainxforms_model_construct_done(event)
{	
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dDealApply');
	if(operator=="view"){
		data.filters.setFilter("dealApplyFilter", "OA_AS_DealApply='" + id + "'");
		data.refreshData();	
	}
}
function tabFlowChartxforms_select(event)
{	
	var control = justep.xbl("processChart");
	var process = "/OA/asset/process/assetDealApply/assetDealApplyProcess";
	var bizData = justep.xbl('dDealApply').getCurrentRowId();
	control.loadByData(process,bizData);
}