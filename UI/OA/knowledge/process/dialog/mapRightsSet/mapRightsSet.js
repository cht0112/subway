acceptParentParamsFun = "acceptData";
var rt_folderID = "";
var rt_folderFullID = "";

function acceptData(data) {
	rt_folderID = data.folderID;
	rt_folderFullID = data.folderFullID;

	var data = justep.xbl('dRights');
	data.filters.setFilter("RightsFilter", 'fFolderID = "' + rt_folderID
			+ '" and fKWKind = "Folder"');
	data.refreshData();
}

function sendData() {
	var data = justep.xbl('dRights');
	try {
		return data.saveData();
	} catch(e) {
		alert("保存数据失败!");
	}
}

function openSelectRightOrgDialog() {
	justep.xbl("dlgSelectRightOrg").open();
}

function dlgSelectRightOrgSend(event) {
	var data = new SimpleStore('mySimpleStoreas', 'sName');
	var para = new justep.CommonChoosePara('sName', data);
	data.loadData(null);
	return para;
}

function dlgSelectRightOrgReceive(obj) {
	var data = justep.xbl('dRights');
	var grd = xforms('grdRights').grid
	var store = obj.data.getSimpleStore();
	var len = store.getRowsNum();
	for (var i = 0; i < len; i++) {
		var fKWKind = "Folder";
		var orgKind = "org";
		var orgID = "";
		var orgName = store.getValueByName("sName", i);
		var orgFID = store.getValueByName("sFID", i);
		var orgFName = store.getValueByName("sFName", i);
		var pos = orgFID.lastIndexOf("/") + 1;
		orgID = orgFID.substring(pos, pos + 36);
		
		var index = grd.getIndex(["fOrgFID"], [orgFID]);
		if (index == -1) {
			data.newData();
			data
					.setRowData(data.getCurrentRowId(), [fKWKind, rt_folderID,
							rt_folderFullID, orgKind, orgID, orgName, orgFID,
							orgFName, '0'], ["fKWKind", "fFolderID",
							"fKWFullID", "fOrgKind", "fOrgID", "fOrgName",
							"fOrgFID", "fOrgFName", "fIsInherit"]);
		}
	}
}


