function fFolderFilter(event) {
	var can = canCreateKWFun(event);
	if (can) {
		return true;
	}
	return false;
}
function canCreateKWFun(event) {
	var folderID = event.rowId;
	var useStatus = event.instance.getValue('fUseStatus', folderID);
	if (useStatus != '1') {
		return false;
	}

	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "canCreateKWAction", param);

	if (justep.Request.isBizSuccess(r)) {
		var can = justep.Request.transform(justep.Request.getData(r.responseXML));
		if (can == "true") {
			return true;
		}
	}
	return false;
}
function fFolderShowNodeImg(event) {
	var data = justep.xbl(event.instance.element.id);
	if (!data)
		return;
	if (event.rowId == 'public') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		return "/UI/OA/common/images/org.gif";
	}
}
function fFolderCloseup(event) {
	var data = justep.xbl('dKnowledge');
	var grd = event.grid;
	var rowid = grd.getValueByName("rowid");
	if (rowid && (rowid) != '') {
		var kwid = justep.xbl('dKnowledge').getCurrentRowId();
		var folderID = grd.getValueByName("rowid");
		var folderName = grd.getValueByName("fName");
		var folderFullID = grd.getValueByName("fFullID");
		var folderFullName = grd.getValueByName("fFullName");
		var isNeedApprove = grd.getValueByName("fIsNeedApprove");
		data.setValue("fFolderFullID", folderFullID);
		data.setValue("fFolderFullName", folderFullName);
		data.setValue("fIsNeedApprove", isNeedApprove);
	}
}
/* 直接发布 */
function relaseKnowledge(event) {
	//debugger;
	var data = justep.xbl('dKnowledge');
	if (data.saveData()) {
		var param = new justep.Request.ActionParam();
		param.setString("id", data.getCurrentRowId());
		var r = justep.Request.sendBizRequest(justep.Context
				.getCurrentProcess(), justep.Context.getCurrentActivity(),
				"docBatchPublishAction", param);
		if (!justep.Request.isBizSuccess(r)) {
			throw new Error(justep.Request.getServerError(r, "批量发布失败！"));
			return;
		}else{
			alert("发布成功！");
		}
	}
}
function newKnowledge(event) {
	var data = justep.xbl('dKnowledge');
	if (data.saveData()) {
		var kwid = data.getCurrentRowId();
		var folderID = data.getValue("fFolderID");
		var folderName = data.getValue("fFolderName");
		var folderFullID = data.getValue("fFolderFullID");
		var folderFullName = data.getValue("fFolderFullName");
		var isNeedApprove = data.getValue("fIsNeedApprove");
		data.newData();
		if (confirm("是否发布到新建前同样的栏目?")) {
			if (kwid != '' && kwid != undefined) {
				data.setValue("fFolderID", folderID)
				data.setValue("fFolderName", folderName)
				data.setValue("fFolderFullID", folderFullID)
				data.setValue("fFolderFullName", folderFullName)
				data.setValue("fIsNeedApprove", isNeedApprove)
			}
		} else {
			otherFolderIDs = "";
		}
	}
}
