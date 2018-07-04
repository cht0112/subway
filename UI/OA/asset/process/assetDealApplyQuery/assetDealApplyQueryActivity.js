function grdDealApply_fNORender(event)
{	
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openDealApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}
function grdDealApplyRowDblClick(event)
{	
	var data = justep.xbl('dDealApply');
	var id = data.getCurrentRowId();
	openDealApplyDetail(id);
}

function openDealApplyDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/OA/asset/process/assetDealApplyDetail/assetDealApplyDetail.w?process=" 
		+ process + "&activity="+ activity + "&operator=" + operator+ "&id=" + id;
	justep.Portal.openWindow("资产处置申请",url);
}

function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dDealApply');
	data.refreshData();
}