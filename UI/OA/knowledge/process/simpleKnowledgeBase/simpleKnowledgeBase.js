function mdKnowledgexforms_model_construct_done(event) {
	var grdFolder = xforms('grdFolder').grid;
	var rowid = grdFolder.selectRowID;
	
	if(rowid != '' && rowid != null && rowid != undefined) {
		grdFolder.expand(rowid);
	}
}

function grdFolderShowNodeImg(event) {
	var data = justep.xbl(event.instance.element.id);
	if (!data)
		return;
	if (event.rowId == 'public') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		return "/UI/OA/common/images/org.gif";
	}
}

function grdFolderRowExpand(event) {
	if (event.delay) {
		var grdFolder = xforms('grdFolder').grid;
		var parent = event.rowId;
		var subFolders = getDirectSubFolders(parent);
		if ((subFolders != '') && (subFolders != null)) {
			var arrFolder = subFolders.split("|");
			var len = arrFolder.length;
			if (len <= 0) {
				return;
			}

			var nodeHead = "<rows parent=\"" + parent + "\">";
			var nodeTail = "</rows>";
			var rows = "";
			for (var i = 0; i < len; i++) {
				var folder = arrFolder[i];
				var folderID = folder.split(":")[0];
				var folderName = folder.split(":")[1];
				var folderFullID = folder.split(":")[2];
				grdFolder.addRowPro(folderID, [folderName, folderFullID], i,
						parent);
			}
		}
		event.source.setNodeLoadSuccess(event.rowId);
	}
}

function grdFolderAfterIndexChanged(event) {
	displayKnowledge();
}

function displayKnowledge() {
	var filterCondition = '';
	var dKW = justep.xbl('dKnowledge');
	var folderID = justep.xbl('dFolder').getCurrentRowId();
	var folderFullID = justep.xbl('dFolder').getValue('folderFullID',folderID);
	var psnID = justep.Context.getCurrentPersonID();
	if (!psnID)
		return;

	var orgCondition = appCommon.FilterUtils
			.getCurrentMembersURLFilter("OA_KM_Rights.fOrgFID");
	var rightsCondition = "OA_KM_Rights.fCanReadKW = '1'";
	var folderCondition = "(OA_KM_KWFolder.fFolderID='"
			+ folderID + "')" + " and (OA_KM_Rights.fFolderID='"
			+ folderID + "' or OA_KM_Rights.fFolderID IS NULL)";
	if (displaySubChb.checked) { // 显示当前栏目及其子栏目下的知识
		folderCondition = "(OA_KM_KWFolder.fKWFullID LIKE '"
			+ folderFullID + "%')" + " and (OA_KM_Rights.fKWFullID LIKE '"
			+ folderFullID + "%' or OA_KM_Rights.fFolderID IS NULL)";
	} 
	filterCondition = "(" + orgCondition + ")" ;
	filterCondition += " and (" + rightsCondition + ")";
	filterCondition += " and (" + folderCondition + ")";
	filterCondition += " and (fReleaseStatus = 1)";
	//alert(filterCondition);
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

function trgViewClick(event){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var folderFullID=justep.xbl("dFolder").getValue("folderFullID");
	var fName=justep.xbl("dFolder").getValue("fName");
	var url = "/OA/knowledge/process/knowledgePortlet/textMorePortlet.p?folderFullID=" + folderFullID;
	justep.Portal.openWindow(fName, url);
}