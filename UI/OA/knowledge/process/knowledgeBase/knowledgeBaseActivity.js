var knowledgeBaseActivity = {};
function mdKnowledgexforms_model_construct_done(event) {
	xforms('grdFolder').grid.expand('public');
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
	var personId = justep.Context.getCurrentPersonID();
	var dKW = justep.xbl('dKnowledge');
	var folderID = justep.xbl('dFolder').getCurrentRowId();
	var folderFullID = justep.xbl('dFolder').getValue('folderFullID',folderID);
	var psnID = justep.Context.getCurrentPersonID();	
	
	if (!psnID)
		return;

	var orgCondition = appCommon.FilterUtils
			.getCurrentMembersURLFilter('OA_KM_Rights.fOrgFID');
	var rightsCondition = "OA_KM_Rights.fCanReadKW = '1'";
	var folderCondition = "(OA_KM_KWFolder.fFolderID='"
			+ folderID + "')" + " and (OA_KM_Rights.fFolderID='"
			+ folderID + "' or OA_KM_Rights.fFolderID IS NULL)";
	if (displaySubChb.checked) { // 显示当前栏目及其子栏目下的知识
		folderCondition = "(OA_KM_KWFolder.fKWFullID LIKE '"
			+ folderFullID + "%')" + " and (OA_KM_Rights.fKWFullID LIKE '"
			+ folderFullID + "%' or OA_KM_Rights.fFolderID IS NULL)";
	} 

	filterCondition = "(OA_KM_Rights.fOrgID='" + psnID + "' or "
			+ orgCondition + ")";
	filterCondition += " and (" + rightsCondition + ")";
	filterCondition += " and (" + folderCondition + ")";
	filterCondition += " and (fReleaseStatus = 1)";
	if(iptCheckBox.checked){
		var gzCondition = "'"+personId+"' in (select p.fCreatePsnID from OA_KM_KnowledgeGZPsn p where p.fMasterID = OA_KM_Knowledge)";
		filterCondition += " and ("+gzCondition+")";
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
knowledgeBaseActivity.trgAddClick = function(event){
	var data = justep.xbl('dKnowledge');
	var kwid = data.getCurrentRowId();
	var len = data.getCount();
	if(len==0){
		alert("请选择需要增加关注的文档，再进行增加关注操作！");
	}else{
		var param = new justep.Request.ActionParam();
		param.setString("kwid", kwid);
		var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
				justep.Context.getCurrentActivity(), "addKnowledgeGZAction",param);
		if (!justep.Request.isBizSuccess(r)) {
			throw new Error(justep.Request.getServerError(r, "增加关注失败"));
		} else {
			var result = justep.Request.transform(justep.Request.getData(r.responseXML));
			if(result=="YES"){
				alert("增加关注成功！");
				data.refreshData();
			}else if(result=="NO"){
				alert("当前文档已经设置关注！");
			}
		}
	}
};
knowledgeBaseActivity.trgCancelClick = function(event){
	var data = justep.xbl('dKnowledge');
	var kwid = data.getCurrentRowId();
	var len = data.getCount();
	if(len==0){
		alert("请选择需要取消关注的文档，再进行取消关注操作！");
	}else{
		var param = new justep.Request.ActionParam();
		param.setString("kwid", kwid);	
		var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
				justep.Context.getCurrentActivity(), "cancelKnowledgeGZAction",param);
		if (!justep.Request.isBizSuccess(r)) {
			throw new Error(justep.Request.getServerError(r, "取消关注失败"));
		} else {
			var result = justep.Request.transform(justep.Request.getData(r.responseXML));
			if(result=="YES"){
				alert("取消关注成功！");
				data.refreshData();
			}else if(result=="NO"){
				alert("当前文档没有设置关注，不能进行取消关注操作！");
			}
		}
	}
};
function grdKnowledgeRecStateRender(event){
	var personId = justep.Context.getCurrentPersonID();
	if (event.value.indexOf(personId) == -1) {
		return "未关注";
	} else {
		return "已关注";
	}
};
knowledgeBaseActivity.searchSelect1Closeup = function(event){
	displayKnowledge()
	/*var selectFolderFullID = event.source.select.currentValue;
	var data = justep.xbl('dKnowledge');
	if(selectFolderFullID!=""){
		data.filters.setFilter("knowledgeFilter", "OA_KM_Knowledge.fFolderFullID like '" + selectFolderFullID + "%'");
		data.refreshData();
	}*/
};
knowledgeBaseActivity.searchSelect3Closeup = function(event){
	displayKnowledge()
	/*var selectFolderName = event.source.select.currentValue;
	var data = justep.xbl('dKnowledge');
	if(selectFolderName!=""){
		data.filters.setFilter("knowledgeFilter", "OA_KM_Knowledge.fFolderFullName like '%" + selectFolderName + "%'");
		data.refreshData();
	}*/
	
};
