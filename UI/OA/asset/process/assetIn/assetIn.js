var assetIn = {};
window.name = "assetIn.w";
var openPortalOperator = "";

function insertDOMActivate(event) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	openPortalOperator = "new";
	var url = "/OA/asset/process/assetInDetail/assetInDetail.w?process="
			+ process + "&activity=" + activity + "&callerName=" + window.name
			+ "&openPortalOperator=" + openPortalOperator;
	justep.Portal.openWindow("资产入库", url);
}

function grdAssetInListRowDblclick(event) {
	var data = justep.xbl('dAssetInM');
	var id = data.getCurrentRowId();
	openAssetInDetail(id);
}
function grdAssetInList_fNORender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openAssetInDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function openAssetInDetail(id) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	openPortalOperator = "edit";
	var url = "/OA/asset/process/assetInDetail/assetInDetail.w?process="
			+ process + "&activity=" + activity + "&callerName=" + window.name
			+ "&openPortalOperator=" + openPortalOperator + "&id=" + id;
	justep.Portal.openWindow("资产入库", url);
}

function dataChangeCallBackFun(id) {
	var data = justep.xbl("dAssetInM");
	// data.filters.setFilter("assetInFilter", "OA_AS_InM='" + id + "'");
	data.refreshData();
}

function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl("dAssetInM");
	data.refreshData();
}
assetIn.barItem1Click = function(event) {
	var data = justep.xbl("dAssetInM");
	var id = data.getCurrentRowId();
	var fNO = data.getValue("fNO", id);
	var param = new justep.Request.ActionParam();
	param.setString("id", id);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity,
			"checkCanDeleteAssetInDataAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "检查失败!"));
	} else {
		var result = justep.Request.transform(justep.Request
				.getData(r.responseXML));
		if (result == "false") {
			alert("入库单：" + fNO + "中，存在已入库的资产，不能删除！");
		} else {
			if (confirm("是否确定删除数据？")) {
				deleteAssetIn(id);
				data.refreshData();
			}
		}
	}
};

function deleteAssetIn(id) {
	var param = new justep.Request.ActionParam();
	param.setString("id", id);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity,
			"deleteAssetInDataAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "删除入库单失败!"));
	}
}

assetIn.gridFilterStateGetCondition = function(event) {
	var value = event.value;
	var defaultValue = event.defaultValue;
	var contdition = null;
	if (value == '')
		var contdition = "OA_AS_InM.fState IN (1)";

	else if (value == '0')
		var contdition = "OA_AS_InM.fState IN (0)";
	else if (value == '1') {
		var contdition = "OA_AS_InM.fState IN (1)";
	} else
		var contdition = "OA_AS_InM.fState IN (1,0)";
	event.handled = true;
	return contdition;
};
