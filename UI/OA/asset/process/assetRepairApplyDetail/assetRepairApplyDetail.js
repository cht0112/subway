
function tabFittingInfoxforms_select(event){
	var dFittingInfo = justep.xbl('dFittingInfo');
	dFittingInfo.refreshData();	
}
function mdMainxforms_model_construct_done(event)
{	
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dRepairApply');
	if(operator=="view"){
		data.filters.setFilter("repairApplyFilter", "OA_AS_RepairApply='" + id + "'");
		data.refreshData();	
	}
}
function tabFlowChartxforms_select(event)
{	
	var control = justep.xbl("processChart");
	var process = "/OA/asset/process/assetRepairApply/assetRepairApplyProcess";
	var bizData = justep.xbl('dRepairApply').getCurrentRowId();
	control.loadByData(process,bizData);
}