acceptParentParamsFun = "acceptData";
var assetInIDs = "";
var assetInCheckInfo = "";

function grdAssetInD_fBuyApplyNORender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openBuyApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function openBuyApplyDetail(fID) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var data = justep.xbl('subData');
	var buyId = data.getValue("fBuyApplyID", fID);
	var operator = "view";
	var url = "/OA/asset/process/assetBuyApplyDetail/assetBuyApplyDetail.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&operator="
			+ operator
			+ "&id=" + buyId;
	justep.Portal.openWindow("固定资产请购详细", url);
}

function grdAssetInD_fCheckNORender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openCheckInfo('" + event.rowId + "')\">"
			+ event.value + "</a>";
	return html;
}

function openCheckInfo(fID) {
	var data = justep.xbl('subData');
	var checkId = data.getValue("fCheckID", fID);
	assetInCheckInfo = checkId;
	var assetInDlg = justep.xbl("dlgInCheckInfo");
	assetInDlg.initEveryTimes = true;
	assetInDlg.open();
}

function dlgAssetInCheckSend(event) {
	var params = {
		"assetInID" : assetInCheckInfo
	};
	return params;
}

function acceptData(data) {
	var assetInID = data.assetInID;
	var dataDlg = justep.xbl("mainData");
	dataDlg.filters.setFilter("assetInFilter", "OA_AS_InM='" + assetInID + "'");
	dataDlg.refreshData();
}