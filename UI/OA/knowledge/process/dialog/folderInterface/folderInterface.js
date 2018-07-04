acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var srcd = justep.xbl('dInfo');
	var folderData = justep.xbl('dFolder');
	if (data.fTitle != null)
		srcd.setValue("fTitle", data.fTitle);
	if (data.fFolderID != null) {
		folderData.setTreeRootFilter("OA_KM_Folder = '" + data.fFolderID + "'");
		srcd.setValue("fFolderID", data.fFolderID);
	}
	if (data.fOtherFolderIDs != null)
		srcd.setValue("fOtherFolderIDs", data.fOtherFolderIDs);
	if (data.fOtherFolderNames != null)
		srcd.setValue("fOtherFolderNames", data.fOtherFolderNames);
	folderData.refreshData();
}

function trgOtherFoldersDOMActivate(event) {
	var dlg = justep.xbl("dlgOtherFolders");
	dlg.open();
}

function dlgOtherFoldersSend(event) {
	var otherFolderIDs = justep.xbl('dInfo').getValue('fOtherFolderIDs');
	return {
		"otherFolderIDs" : otherFolderIDs
	};
}

function dlgOtherFoldersReceive(obj) {
	var grdReturn = obj.data;
	var otherFoldersName = "";
	var otherFolderIDs = "";
	var len = grdReturn.getRowsNum();
	for (var i = 0; i < len; i++) {
		otherFolderIDs = otherFolderIDs + ","
				+ grdReturn.getValueByName("rowId", i);
		if (i < 6)
			otherFoldersName = otherFoldersName + " "
					+ grdReturn.getValueByName("fName", i);
		if (i == 6)
			otherFoldersName = otherFoldersName + "等栏目";
	}
	otherFolderIDs = otherFolderIDs.replace(",", "");
	otherFoldersName = otherFoldersName.replace(" ", "");
	justep.xbl('dInfo').setValue('fOtherFolderIDs', otherFolderIDs);
	justep.xbl('dInfo').setValue('fOtherFolderNames', otherFoldersName);
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

function trgOKDOMActivate(event) {
	var data = justep.xbl("dInfo");
	windowEnsure(data);
}

function trgCancelDOMActivate(event) {
	windowCancel();
}
function grdFolderAfterIndexChanged(event) {
	var srcd = justep.xbl('dInfo');
	srcd.setValue("fFolderID", event.rowId);
}
