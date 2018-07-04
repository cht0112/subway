acceptParentParamsFun = "acceptData";
function acceptData(data) {
	var isFilter = data.isFilter;
	if (isFilter == "yes") {
		var kindID = data.kindID;
		var kind = data.kind;
		justep.xbl('dTemp').setValue("kindID", kindID);
		justep.xbl('dTemp').setValue("kind", kind);
		filterRefreshData();
	} else if (isFilter == "no") {
		filterRefreshData();
	}
}

function trgOKDOMActivate(event) {
	returnData();
}

function grdAssetCardRowDblClick(event) {
	returnData();
}

function returnData() {
	var data = justep.xbl('dAssetCard');
	var fID = data.getCurrentRowId();
	var fCode = data.getValue("fCode", fID);
	var fName = data.getValue("fName", fID);
	var fSpecType = data.getValue("fSpecType", fID);
	var fKindID = data.getValue("fKindID", fID);
	var fKind = data.getValue("fKind", fID);
	var fUnitID = data.getValue("fUnitID", fID);
	var fUnit = data.getValue("fUnit", fID);
	var fServiceYear = data.getValue("fServiceYear", fID);
	var fRemainValue = data.getValue("fRemainValue", fID);
	/*var fCreateTime = data.getValue("fCreateTime", fID);
	fCreateTime = justep.Date.fromString(fCreateTime.substring(0,10),"yyyy-mm-dd");
	var date = justep.System.datetimeString();
	date = justep.Date.fromString(date.substring(0,10),"yyyy-mm-dd");
	var fUsedYear = justep.Date.diff(fCreateTime,date,"y");*/
	var params = {
		"fID" : fID,
		"fCode" : fCode,
		"fName" : fName,
		"fSpecType" : fSpecType,
		"fKindID" : fKindID,
		"fKind" : fKind,
		"fUnitID" : fUnitID,
		"fUnit" : fUnit,
		"fServiceYear" : fServiceYear,
		"fRemainValue" : fRemainValue
	};
	windowEnsure(params);
}

function trgCancelDOMActivate(event) {
	windowCancel();
}

function iptLikexforms_value_changed(event) {
	filterRefreshData();
}
function grdSltKindCloseup(event) {
	filterRefreshData();
}
function grdSltStatusCloseup(event) {
	filterRefreshData();
}

function filterRefreshData() {
	var statusFilter = "", kindFilter = "", likeFilter = "", joinFilter = "";
	var data = justep.xbl('dAssetCard');
	var dTemp = justep.xbl("dTemp");
	var status = dTemp.getValue("status");
	statusFilter = appCommon.FilterUtils.getMuiltSelectFilter(
			"OA_AS_Card.fStatus", status);
	var kindID = dTemp.getValue("kindID");
	kindFilter = appCommon.FilterUtils.getMuiltSelectFilter(
			"OA_AS_Card.fKindID", kindID);
//	var like = dTemp.getValue("like");
//	likeFilter = appCommon.FilterUtils
//			.getMultiLikeFilter(
//					"fKind,fCode,fName,fSpecType,fUnit,fStatusName,fRemainValue,fServiceYear",
//					like);
	if (status == "") {
		if (kindID == "") {
			joinFilter = likeFilter;
		} else if (kindID != "") {
			joinFilter = appCommon.FilterUtils.joinFilter(kindFilter,
					likeFilter, "AND");
		}
	} else if (status != "") {
		if (kindID == "") {
			joinFilter = appCommon.FilterUtils.joinFilter(statusFilter,
					likeFilter, "AND");
		} else if (kindID != "") {
			joinFilter = appCommon.FilterUtils.joinFilter(statusFilter,
					kindFilter, "AND");
			joinFilter = appCommon.FilterUtils.joinFilter(joinFilter,
					likeFilter, "AND");
		}
	}
	data.filters.setFilter("assetCardFilter", joinFilter);
	data.refreshData();
}