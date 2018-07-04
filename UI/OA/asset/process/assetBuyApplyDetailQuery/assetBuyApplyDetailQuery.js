function grdBuyApplyDetailRowDblclick(event) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var data = justep.xbl('dBuyApplyDetail');
	var rowID = data.getCurrentRowId();
	var id = data.getValue("fMasterID", rowID);
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
	var data = justep.xbl('dBuyApplyDetail');
	data.refreshData();
}