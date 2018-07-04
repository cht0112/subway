function mdKWMapxforms_model_construct_done(event) {
	xforms('grdFolder').grid.expand('map');
}

function grdFolderShowNodeImg(event) {
	var data = justep.xbl(event.instance.element.id);
	if (!data)
		return;
	if (event.rowId == 'map') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		var parent = event.instance.getValue('fParent',event.rowId);
		if(parent == 'map') {
			return "/UI/OA/common/images/org.gif";
		} else {
			return "/UI/OA/common/images/dept.gif";
		}
	}
}

function grdFolderRowExpand(event) {
	if (event.delay) {
		var grdFolder = xforms('grdFolder').grid;
		var curtFolderID = event.rowId;
		var ind = event.grid.getRowIndex(curtFolderID);
		var curtFolderParent = event.grid.getValueByName("fParent",ind);
		var queryKind = "map";
		if (curtFolderParent != '') {
			queryKind = 'mapKind';
		}
		var subFolders = getCurrentPsnKnowledgeMap(curtFolderID, queryKind);
		if ((subFolders != '') && (subFolders != null)) {
			var arrFolder = subFolders.split("|");
			var len = arrFolder.length;
			if (len <= 0) {
				return;
			}
			for (var i = 0; i < len; i++) {
				var folder = arrFolder[i];
				var folderID = folder.split(":")[0];
				var folderName = folder.split(":")[1];
				var folderFullID = folder.split(":")[2];
				grdFolder.addRowPro(folderID, [folderName, folderFullID,curtFolderID], i,
						curtFolderID);
			}
		}
		event.source.setNodeLoadSuccess(event.rowId);
	}
}

function getCurrentPsnKnowledgeMap(folderID,queryKind) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	param.setString("queryKind", queryKind);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getCurrentPsnKnowledgeMapAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("获取栏目信息出错!");
	}
	return justep.Request.transform(justep.Request.getData(r.responseXML));
}

function grdFolderAfterIndexChanged(event) {
	displayKnowledge();
}

function displayKnowledge() {
	var filterCondition = '';
	var dKW = justep.xbl('dKnowledge');
	var folderID = justep.xbl('dFolder').getCurrentRowId();
	if(folderID != 'map') {
		var folderFullID = justep.xbl('dFolder').getValue('folderFullID',folderID);
		var psnID = justep.Context.getCurrentPersonID();
		if (!psnID)
			return;
	
		var orgCondition = appCommon.FilterUtils
				.getCurrentMembersURLFilter('OA_KM_Knowledge.fHasRights.fOrgFID');
		var rightsCondition = 'OA_KM_Knowledge.fHasRights.fCanReadKW = "1"';
		var folderCondition = '(OA_KM_Knowledge.fAttachFolder.fFolderID="' + folderID + '")';
		if (displaySubChb.checked) { // 显示当前栏目及其子栏目下的知识
			folderCondition = '(OA_KM_Knowledge.fAttachFolder.fKWFullID LIKE "' + folderFullID + '%")' ;
		} 
	
		filterCondition = '(OA_KM_Knowledge.fHasRights.fOrgID="' + psnID + '" or '
				+ orgCondition + ')';
		filterCondition += " and (" + rightsCondition + ")";
		filterCondition += " and (" + folderCondition + ")";
		filterCondition += " and (fReleaseStatus = 1)";
	} else {
		filterCondition = "1 = 0";
	}
	
//	alert(filterCondition);
	dKW.filters.setFilter("knowledgeFilter", filterCondition);
	dKW.refreshData();
}

// 获取父栏目下的直属级子栏目(知识库)
function getDirectSubFolders(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getDirectSubFoldersAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		return '';
	} else {
		return justep.Request.transform(justep.Request.getData(r.responseXML));
	}
}

function hyperlink2Knowledge(data) {
	try {
		var value = data.value;// 当前行/列
		return '<a href="javascript:void(0)" onclick="viewKnowlegde(this);">'
				+ value + '</a>';
	} catch (e) {
		alert(e);
	}
}

function viewKnowlegde(gridElement) {
	var gridInfo = getGridInfoByElement(gridElement);
	var gridID = '';
	if (gridInfo) {
		gridID = gridInfo.rowId;
	}
	if (!gridID || gridID == '') {
		gridID = $('main').xfElement.getValueByName('rowid');
	}

	 var title = gridElement.title;
	 var process = justep.Context.getCurrentProcess();
	 var activity = justep.Context.getCurrentActivity();
	 var url = "/OA/knowledge/process/viewKnowledge/viewKnowledge.w"
	 + "?process=" + process + "&activity=" + activity
	 + "&kwid="+ gridID;
	 justep.Portal.openWindow(title, url);
}