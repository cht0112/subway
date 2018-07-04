function grdDiscardApply_fNORender(event)
{	
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openDiscardApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}
function grdDiscardApplyRowDblClick(event)
{	
	var data = justep.xbl('dDiscardApply');
	var id = data.getCurrentRowId();
	openDiscardApplyDetail(id);
}

function openDiscardApplyDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/OA/asset/process/assetDiscardApplyDetail/assetDiscardApplyDetail.w?process=" 
		+ process + "&activity="+ activity + "&operator=" + operator+ "&id=" + id;
	justep.Portal.openWindow("资产报废申请",url);
}

function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dDiscardApply');
	data.refreshData();
}