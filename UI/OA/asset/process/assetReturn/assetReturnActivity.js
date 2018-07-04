var assetReturnActivity = {};
function grdAssetCard_fCodeRender(event) {
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

function wDlgReturnReceive(obj) {
	var returnDate = obj.data.returnDate;
	var remark = obj.data.remark;
	var data = justep.xbl('dAssetCard');
	var assetID = data.getCurrentRowId();
	var code = data.getValue("fCode", assetID);
	var name = data.getValue("fName", assetID);
	var kind = data.getValue("fKind", assetID);
	var unit = data.getValue("fUnit", assetID);
	var specType = data.getValue("fSpecType", assetID);
	var ognID = justep.Context.getCurrentOgnID();
	var ognName = justep.Context.getCurrentOgnName();
	var ognFID = justep.Context.getCurrentOgnFID();
	var deptID = justep.Context.getCurrentDeptID() || justep.Context.getCurrentOgnID();
	var deptName = justep.Context.getCurrentDeptName() || justep.Context.getCurrentOgnName();
	var posID = justep.Context.getCurrentPosID();
	var posName = justep.Context.getCurrentPosName();
	var psnID = justep.Context.getCurrentPersonID();
	var psnName = justep.Context.getCurrentPersonName();
	var psnFID = justep.Context.getCurrentPersonMemberFID();

    data.setRowData(assetID,[ognID,ognName,ognFID,deptID,deptName,posID,posName,psnID,psnName,psnFID,
                             '0',"闲置"],["fDutyOgnID","fDutyOgnName","fDutyOgnFID","fDutyDeptID",
                             "fDutyDeptName","fDutyPosID","fDutyPosName","fDutyPsnID","fDutyPsnName",
                             "fDutyPsnFID","fStatus","fStatusName"]);

	var dAssetReturn = justep.xbl('dAssetReturn');
	dAssetReturn.newData();
	dAssetReturn.setRowData(dAssetReturn.getCurrentRowId(),[returnDate,remark,code,name,kind,unit,specType,
	                          ognID,ognName,deptID,deptName,posID,posName,psnID,psnName,psnFID],
	                          ["fTime","fRemark","fCode","fName","fKind","fUnit","fSpecType",
                             "fDutyOgnID","fDutyOgnName","fDutyDeptID","fDutyDeptName",
                             "fDutyPosID","fDutyPosName","fDutyPsnID","fDutyPsnName","fDutyPsnFID"]);
	dAssetReturn.saveData();
	data.saveData();
	data.refreshData();
	var result = assetReturn(assetID, returnDate);
	if (result == true) {
		alert("资产：" + code + "归还成功！");
	}
}

function assetReturn(assetID, returnDate) {
	var param = new justep.Request.ActionParam();
	param.setString("assetID", assetID);
	param.setString("returnDate", returnDate);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity,
			"assetReturnAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "更新资产安排记录失败!"));
	}
	return true;
}

function trgReturnDOMActivate(event) {
	var wDlgReturn = justep.xbl("wDlgReturn");
	wDlgReturn.initEveryTimes = true;
	wDlgReturn.open();
}

function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dAssetCard');
	data.refreshData();
	setComponentsStatus();
}
function setComponentsStatus() {
	var data = justep.xbl("dAssetCard");
	var count = data.getCount();
	if(count==0){
		justep.xbl("trgReturn").setDisabled(true);
	}else{
		justep.xbl("trgReturn").setDisabled(false);
	}
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
assetReturnActivity.dAssetCardAfterRefresh = function(event){
	setComponentsStatus();
};
