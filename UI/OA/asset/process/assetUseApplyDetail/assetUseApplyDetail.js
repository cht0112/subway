function tabFlowChartxforms_select(event)
{	
	var control = justep.xbl("processChart");
	var process = "/OA/asset/process/assetUseApply/assetUseApplyProcess";
	var bizData = justep.xbl('dUseApply').getCurrentRowId();
	control.loadByData(process,bizData);
}
function mdMainxforms_model_construct_done(event)
{	
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dUseApply');
	if(operator=="view"){
		data.filters.setFilter("useApplyFilter", "OA_AS_UseApplyM='" + id + "'");
		data.refreshData();
	}
}