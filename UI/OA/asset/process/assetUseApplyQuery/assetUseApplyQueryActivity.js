
function grdUseApply_fNORender(event)
{	
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openUseApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}
function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dUseApply');
	data.refreshData();
}

function openUseApplyDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/OA/asset/process/assetUseApplyDetail/assetUseApplyDetail.w?process=" 
		+ process + "&activity="+ activity + "&operator=" + operator+ "&id=" + id;
	justep.Portal.openWindow("资产使用申请",url);
}

function grdUseApplyRowDblClick(event)
{	
	var data = justep.xbl('dUseApply');
	var id = data.getCurrentRowId();
	openUseApplyDetail(id);
}