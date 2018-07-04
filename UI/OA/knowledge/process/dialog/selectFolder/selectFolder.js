acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var srcd = justep.xbl('dSelected');
	var ids = "('" + data.otherFolderIDs.replace(/(,)/g, "','") + "')";
	srcd.filters.setFilter("kwFolderFilter", "OA_KM_Folder in " + ids);
	srcd.refreshData();
}

function showNodeImg(event) {
	var data = justep.xbl(event.instance.element.id);
	if (!data)
		return;
	if (event.rowId == 'public') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		return "/UI/OA/common/images/org.gif";
	}
}

function windowSend() {
	return xforms('grdDes').grid;
}

// 选择
function select() {
	var data = justep.xbl('dFolder');
	var folderID = data.getValue('rowid');
	var folderName = data.getValue('fName');
	var folderFullID = data.getValue('fFullID');
	var text = ['', folderID, folderFullID, folderName];

	var des = xforms('grdDes').grid;
	var ind = des.getIndex() + 1;
	var pos = des.getIndex(["fName"], [folderName]);
	if (pos == -1) {
		des.addRowPro(folderID, text, ind);
		des.selectRow(ind, true);
	} else {
		des.selectRow(pos, true);
	}
}

// 取消
function cancel() {
	var des = xforms('grdDes').grid;
	ind = des.getIndex();
	des.del(ind);
}

// 取消所有
function cancelAll() {
	xforms('grdDes').grid.clearAll();
}