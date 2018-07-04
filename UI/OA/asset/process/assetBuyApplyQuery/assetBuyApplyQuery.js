function grdBuyApplyM_fNORender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openBuyApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}
function grdBuyApplyMRowDblclick(event) {
	var data = justep.xbl('dBuyApplyM');
	var id = data.getCurrentRowId();
	openBuyApplyDetail(id)
}

function openBuyApplyDetail(id) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/OA/asset/process/assetBuyApplyDetail/assetBuyApplyDetail.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&operator="
			+ operator
			+ "&id=" + id;
	justep.Portal.openWindow("固定资产采购详细", url);
}

function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dBuyApplyM');
	data.refreshData();
}