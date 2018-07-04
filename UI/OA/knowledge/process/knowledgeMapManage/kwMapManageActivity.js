
function mdKWMapManagexbl_loaded(event) {
	try {
		xforms('grdFolder').grid.expand('map');
	} catch (e) {
	}
}

function showNodeImg(event) {
	if (event.rowId == '' || event.rowId == undefined) {
		return;
	}

	if (event.rowId == 'map') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		var parent = event.instance.getValue("fParent", event.rowId);
		if (parent == 'map') {
			return "/UI/OA/common/images/org.gif";
		} else {
			return "/UI/OA/common/images/dept.gif";
		}
	}
}

function canAddKnowledge() {
	var data = justep.xbl('dFolder');
	var parent = data.getValue('fParent');
	if(parent != '' && parent != 'map') {
		var psnID = justep.Context.getCurrentPersonID();
		var folderID = data.getCurrentRowId();
		var managers = getKnowledgeMapManagers(folderID);
		if(managers.indexOf(psnID) != -1) {
			return false;
		}
	}
	return true;
}

function getKnowledgeMapManagers(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getKnowledgeMapManagersAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		alert("获取管理员失败!");
		return "";
	}
	return justep.Request.transform(justep.Request.getData(r.responseXML));
}

function openSelectKnowledgeDialog() {
	var dlg = justep.xbl("dlgKnowledge");
	dlg.initEveryTimes = true;
	dlg.open();
}

function dlgKnowledgeReceive(obj) {
	var folderID = justep.xbl('dFolder').getCurrentRowId();
	var folderFullID = justep.xbl('dFolder').getValue("fFullID");
	var data = justep.xbl('dKWFolder');
	var grd = xforms('grdKWFolder').grid; 
	var grdReturn = obj.data;
	var len = grdReturn.getRowsNum();
	for (var i = 0; i < len; i++) {
		var fKWID = grdReturn.getValueByName("rowid",i);
		if(grd.getIndex(["fKWID"], [fKWID])== -1) {
			var fFolderKind = 'MapFolder';
			var fFolderID = folderID; 
			var fKWFullID = folderFullID + "/" + fKWID;
			var fTitle = grdReturn.getValueByName("fTitle",i);
			var fKeyword = grdReturn.getValueByName("fKeyword",i);
			var fWriter = grdReturn.getValueByName("fWriter",i);
			var fContentTypeName = grdReturn.getValueByName("fContentTypeName",i);
			var fReleaseTime = grdReturn.getValueByName("fReleaseTime",i);
		
			data.newData();
			var rowid = data.getCurrentRowId();
			data.setRowData(rowid, [fKWID, fFolderKind,
					fFolderID, fKWFullID, fTitle,
					fKeyword, fWriter,fContentTypeName,fReleaseTime], ['fKWID',
					'fFolderKind', 'fFolderID', 'fKWFullID',
					'fTitle', 'fKeyword', 'fWriter','fContentTypeName','fReleaseTime']);
		}
	}	
}
