var knowledgeMoreActivity = {};
function mdKnowledgexforms_model_construct_done() {
	displayKnowledge();
}

function displayKnowledge() {
	var filterCondition = '';
	var dKW = justep.xbl('dKnowledge');
	//var folderFullID = justep.Request.URLParams.folderFullID;
	var folderFullID = justep.Context.getRequestParameter("folderFullID");
	var psnID = justep.Context.getCurrentPersonID();
	if (!psnID)
		return;
	var orgCondition = appCommon.FilterUtils
			.getCurrentMembersURLFilter("OA_KM_Rights.fOrgFID");
	var rightsCondition = "OA_KM_Rights.fCanReadKW = '1'";
	
	var	folderCondition = "(OA_KM_KWFolder.fKWFullID LIKE '"
			+ folderFullID + "%')" + " and (OA_KM_Rights.fKWFullID LIKE '"
			+ folderFullID + "%' or OA_KM_Rights.fFolderID IS NULL)";

	filterCondition = "(OA_KM_Rights.fOrgID='" + psnID + "' or "
			+ orgCondition + ")";
	filterCondition += " and (" + rightsCondition + ")";
	filterCondition += " and (" + folderCondition + ")";
	filterCondition += " and (OA_KM_Knowledge.fReleaseStatus = 1)";
	
	dKW.filters.setFilter("knowledgeFilter", filterCondition);
	dKW.refreshData();
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

