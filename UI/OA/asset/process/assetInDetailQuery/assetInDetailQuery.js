function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dAssetIn');
	data.refreshData();
}

function grdAssetInListRowDblclick(event) {
	var data = justep.xbl("dAssetIn");
	var rowId = data.getCurrentRowId();
	id = data.getValue("fMasterID", rowId);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/asset/process/assetInDetailView/assetInDetailView.w?process="
			+ process + "&activity=" + activity + "&id=" + id;
	justep.Portal.openWindow("资产入库", url);
}