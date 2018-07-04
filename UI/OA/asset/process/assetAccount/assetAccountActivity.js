var assetAccountActivity = {};
function grdAssetAccountRowDblClick(event) {
	var data = justep.xbl('dAssetAccount');
	var id = data.getCurrentRowId();
	openAssetCardDetail(id);
}
function grdAssetAccount_fCodeRender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openAssetCardDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function openAssetCardDetail(id) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/asset/process/assetCardDetailView/assetCardDetailView.w?process="
			+ process + "&activity=" + activity + "&id=" + id;
	justep.Portal.openWindow("资产卡片详细", url);
}

function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dAssetAccount');
	data.refreshData();
}

//assetAccountActivity.grdFilterStatusGetCondition = function(event) {
//	var value = event.value;
//	var defaultValue = event.defaultValue;
//	var contdition = null;
//	if (value == '')
//		var contdition = "OA_AS_Card.fStatus IN ('0','1')";
//
//	else if (value == '0')
//		var contdition = "OA_AS_Card.fStatus IN ('0')";
//	else if (value == '1') {
//		var contdition = "OA_AS_Card.fStatus IN ('1')";
//	} else
//		var contdition = "OA_AS_Card.fStatus IN ('1','0')";
//	event.handled = true;
//	return contdition;
//};
