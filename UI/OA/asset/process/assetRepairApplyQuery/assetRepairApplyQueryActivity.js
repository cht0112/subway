
function grdRepairApply_fNORender(event)
{	
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openRepairApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}
function grdRepairApplyRowDblClick(event)
{	
	var data = justep.xbl('dRepairApply');
	var id = data.getCurrentRowId();
	openRepairApplyDetail(id);
}

function openRepairApplyDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/OA/asset/process/assetRepairApplyDetail/assetRepairApplyDetail.w?process=" 
		+ process + "&activity="+ activity + "&operator=" + operator+ "&id=" + id;
	justep.Portal.openWindow("资产维修申请",url);
}

function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dRepairApply');
	data.refreshData();
}