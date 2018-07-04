var publishKWActivity = {};

// 全局变量：其他栏目ID，用于其他栏目弹出窗和保存时的后台逻辑
var otherFolderIDs = "";

function mdKnowledgeConstructDone(event) {
	var data = justep.xbl('dKnowledge');
	var KWID = justep.Request.URLParams.KWID;
	var sData1 = justep.Context.getProcessData1();

	if (sData1 == undefined || sData1 == null) {
		if (KWID == undefined || KWID == null) {
			data.newData();
			// fContextTypeCloseup(null);
			return;
		} else {
			data.filters
					.setFilter("KWFilter", "OA_KM_Knowledge='" + KWID + "'");
		}
	} else {
		data.filters.setFilter("KWFilter", "OA_KM_Knowledge='" + sData1 + "'");
	}

	data.refreshData();
	// fContextTypeCloseup1(null);
}
function mdKnowledgeLoad(event) {
	otherFolderIDs = getKWFolderIDs();
	var currentActivity = justep.Context.getCurrentActivity();
	if(currentActivity != 'publishKWActivity' && currentActivity != 'docActivity' && currentActivity != 'urlActivity' && currentActivity != 'htmlActivity'){
		justep.xbl('fDocument').setAttachmentPermission(1543);
	}
}
function getKWFolderIDs() {
	var param = new justep.Request.ActionParam();
	param.setString("kwID", justep.xbl('dKnowledge').getCurrentRowId());
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getKWFolderIDsAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取知识其他目录失败！"));
		return;
	}

	var folders = justep.Request.transform(justep.Request.getData(r.responseXML));
	return folders;
}
function dKnowledgeBeforeNew(event) {
	justep.Context.setTask("");
}
function dKnowledgeBeforeSave(event) {
	var data = justep.xbl('dKnowledge');
	var knowledgeType = data.getValue('fContentType');
	if(knowledgeType && knowledgeType == 'htmltemplate') {
		event.cancel = true;
		var page = generateStaticHTML();
		if (page) {
			event.cancel = false;
			setStaticPage2MainData(page);
		}
	}
}
/**
 * 生成静态HTML页面 参数: mode 预览/生成
 */
function generateStaticHTML() {
	var data = justep.xbl('dKnowledge');
	var knowledgeType = data.getValue('fContentType');
	if (!knowledgeType || knowledgeType != 'htmltemplate')
		return;
	var rowid = data.getCurrentRowId();
	var fTitle = data.getValue('fTitle');
	var fKeyword = data.getValue('fKeyword');
	var fDocNumber = data.getValue('fDocNumber');
	var fImportant = data.getValue('fImportant');
	var fWriter = data.getValue('fWriter');
	var fFolderID = data.getValue('fFolderID');
	var fFolderName = data.getValue('fFolderName');
	var fFolderFullID = data.getValue('fFolderFullID');
	var fFolderFullName = data.getValue('fFolderFullName');
	var fRightsText = data.getValue('fRightsText');
	var fIsNeedApprove = data.getValue('fIsNeedApprove');
	var fContentType = data.getValue('fContentType');
	var fContentTypeName = data.getValue('fContentTypeName');
	var fTemplateID = data.getValue('fTemplateID');

	var fTemplateName = data.getValue('fTemplateName');
	var fTemplateFileName = data.getValue('fTemplateFileName');
	var fLinkURL = data.getValue('fLinkURL');
	var fContent = data.getValue('fContent');
	var fContentURL = data.getValue('fContentURL');
	var fIsTop = data.getValue('fIsTop');
	var fCreateOgnID = data.getValue('fCreateOgnID');
	var fCreateOgnName = data.getValue('fCreateOgnName');
	var fCreateDeptID = data.getValue('fCreateDeptID');
	var fCreateDeptName = data.getValue('fCreateDeptName');
	var fCreatePsnID = data.getValue('fCreatePsnID');
	var fCreatePsnName = data.getValue('fCreatePsnName');
	var fCreatePsnFID = data.getValue('fCreatePsnFID');
	var fCreatePsnFName = data.getValue('fCreatePsnFName');
	var fCreateTime = data.getValue('fCreateTime');
	fCreateTime = fCreateTime.substring(0, 19);
	fCreateTime = fCreateTime.replace("T", " ");
	var fReleaseOgnID = data.getValue('fReleaseOgnID');
	var fReleaseOgnName = data.getValue('fReleaseOgnName');
	var fReleaseDeptID = data.getValue('fReleaseDeptID');
	var fReleaseDeptName = data.getValue('fReleaseDeptName');
	var fReleasePsnID = data.getValue('fReleasePsnID');
	var fReleasePsnName = data.getValue('fReleasePsnName');
	var fReleasePsnFID = data.getValue('fReleasePsnFID');
	var fReleasePsnFName = data.getValue('fReleasePsnFName');
	var fReleaseTime = data.getValue('fReleaseTime');
	fReleaseTime = fReleaseTime.substring(0, 19).replace("T", " ");
	var fApproverID = data.getValue('fApproverID');
	var fApproverName = data.getValue('fApproverName');
	var fApproveTime = data.getValue('fApproveTime');
	var fReleaseStatus = data.getValue('fReleaseStatus');
	var fReleaseStatusName = data.getValue('fReleaseStatusName');
	var fIsDisplayOnPortal = data.getValue('fIsDisplayOnPortal');
	var fBizState = data.getValue('fBizState');
	var fBizStateName = data.getValue('fBizStateName');
	var fPicture1 = data.getValue('fPicture1');
	var fPicture2 = data.getValue('fPicture2');
	var fPicture3 = data.getValue('fPicture3');

	var pics = [];
	if (fPicture1 != '') {
		var picUrl1 = getPicUrlByPicRowId(fPicture1);
		if (picUrl1)
			pics.push(picUrl1);
	}
	if (fPicture2 != '') {
		var picUrl2 = getPicUrlByPicRowId(fPicture2);
		if (picUrl2)
			pics.push(picUrl2);
	}
	if (fPicture3 != '') {
		var picUrl3 = getPicUrlByPicRowId(fPicture3);
		if (picUrl3)
			pics.push(picUrl3);
	}

	var xmlParams = "<knowledge>";
	xmlParams += "<rowid>" + rowid + "</rowid>";
	xmlParams += "<fTitle>" + fTitle + "</fTitle>";
	xmlParams += "<fKeyword>" + fKeyword + "</fKeyword>";
	xmlParams += "<fDocNumber>" + fDocNumber + "</fDocNumber>";
	xmlParams += "<fImportant>" + fImportant + "</fImportant>";
	xmlParams += "<fWriter>" + fWriter + "</fWriter>";
	xmlParams += "<fFolderID>" + fFolderID + "</fFolderID>";
	xmlParams += "<fFolderName>" + fFolderName + "</fFolderName>";
	xmlParams += "<fFolderFullID>" + fFolderFullID + "</fFolderFullID>";
	xmlParams += "<fFolderFullName>" + fFolderFullName + "</fFolderFullName>";
	xmlParams += "<fRightsText>" + fRightsText + "</fRightsText>";
	xmlParams += "<fIsNeedApprove>" + fIsNeedApprove + "</fIsNeedApprove>";
	xmlParams += "<fContentType>" + fContentType + "</fContentType>";
	xmlParams += "<fContentTypeName>" + fContentTypeName
			+ "</fContentTypeName>";
	xmlParams += "<fTemplateID>" + fTemplateID + "</fTemplateID>";
	xmlParams += "<fTemplateName>" + fTemplateName + "</fTemplateName>";
	xmlParams += "<fTemplateFileName>" + fTemplateFileName
			+ "</fTemplateFileName>";
	xmlParams += "<fContent>" + appCommon.ToolUtils.xmlEncode(fContent)
			+ "</fContent>";
	xmlParams += "<fContentURL>" + fContentURL + "</fContentURL>";
	xmlParams += "<fIsTop>" + fIsTop + "</fIsTop>";
	xmlParams += "<fCreateOgnID>" + fCreateOgnID + "</fCreateOgnID>";
	xmlParams += "<fCreateOgnName>" + fCreateOgnName + "</fCreateOgnName>";
	xmlParams += "<fCreateDeptID>" + fCreateDeptID + "</fCreateDeptID>";
	xmlParams += "<fCreateDeptName>" + fCreateDeptName + "</fCreateDeptName>";
	xmlParams += "<fCreatePsnID>" + fCreatePsnID + "</fCreatePsnID>";
	xmlParams += "<fCreatePsnName>" + fCreatePsnName + "</fCreatePsnName>";
	xmlParams += "<fCreatePsnFID>" + fCreatePsnFID + "</fCreatePsnFID>";
	xmlParams += "<fCreatePsnFName>" + fCreatePsnFName + "</fCreatePsnFName>";
	xmlParams += "<fCreateTime>" + fCreateTime + "</fCreateTime>";
	xmlParams += "<fReleaseOgnID>" + fReleaseOgnID + "</fReleaseOgnID>";
	xmlParams += "<fReleaseOgnName>" + fReleaseOgnName + "</fReleaseOgnName>";
	xmlParams += "<fReleaseDeptID>" + fReleaseDeptID + "</fReleaseDeptID>";
	xmlParams += "<fReleaseDeptName>" + fReleaseDeptName
			+ "</fReleaseDeptName>";
	xmlParams += "<fReleasePsnID>" + fReleasePsnID + "</fReleasePsnID>";
	xmlParams += "<fReleasePsnName>" + fReleasePsnName + "</fReleasePsnName>";
	xmlParams += "<fReleasePsnFID>" + fReleasePsnFID + "</fReleasePsnFID>";
	xmlParams += "<fReleasePsnFName>" + fReleasePsnFName
			+ "</fReleasePsnFName>";
	xmlParams += "<fReleaseTime>" + fReleaseTime + "</fReleaseTime>";
	xmlParams += "<fApproverID>" + fApproverID + "</fApproverID>";
	xmlParams += "<fApproverName>" + fApproverName + "</fApproverName>";
	xmlParams += "<fApproveTime>" + fApproveTime + "</fApproveTime>";
	xmlParams += "<fReleaseStatus>" + fReleaseStatus + "</fReleaseStatus>";
	xmlParams += "<fReleaseStatusName>" + fReleaseStatusName
			+ "</fReleaseStatusName>";
	xmlParams += "<fIsDisplayOnPortal>" + fIsDisplayOnPortal
			+ "</fIsDisplayOnPortal>";
	xmlParams += "<fBizState>" + fBizState + "</fBizState>";
	xmlParams += "<fBizStateName>" + fBizStateName + "</fBizStateName>";
	xmlParams += "<pics>";
	for (var i = 0; i < pics.length; i++) {
		var picUrl = pics[i];
		xmlParams += "<pic>";
		xmlParams += picUrl;
		xmlParams += "</pic>";
	}
	xmlParams += "</pics>";
	xmlParams += "</knowledge>";
	var loader = justep.Request
			.sendHttpRequest(
					"/OA/knowledge/process/publishKnowledge/extend/generateStaticPage.j",
					xmlParams, null, null);
	var status = loader.status;
	var statusText = loader.statusText;

	if (statusText == 'OK') {
		return loader.responseXML.text;
	} else {
		alert("生成该知识页面时发生了错误,错误码：" + status);
		return null;
	}
}
function getPicUrlByPicRowId(picInfo_s) {
	// var dPic = justep.xbl('dKMPicture');
	if (!picInfo_s) {
		return null;
	}
	try {
		var picInfo = eval('(' + picInfo_s + ')');
	} catch (e) {
		alert("图片数据有误!");

	}
	var docPath = picInfo[0].docPath;
	var fileID = picInfo[0].fileID;
	var docID = picInfo[0].docID;
	//var docServerInfo = justep.Doc.getDocServerByDocPath(docPath);
	//var url = docServerInfo.url + "/repository/file/view/" + fileID + "?" + "bsessionid=" + justep.Request.URLParams["bsessionid"];
	var sdocPath = justep.Doc.getDocFullPath(docID, docPath);
	var url = justep.Doc.getdocServerAction(sdocPath, "/repository/file/view/"+fileID);
	url = url.replace('&bsessionid=','&amp;bsessionid=');
	return url;
}
function setStaticPage2MainData(fileName) {
	var data = justep.xbl('dKnowledge');
	var knowledgeType = data.getValue('fContentType');
	if (knowledgeType == 'htmltemplate') {
		var webContext = "/KW/";
		var url = webContext + fileName;
		data.setValue('fContentURL', url);
	}
}
function dKnowledgeSaveCreateParam(event) {
	event.param.setString("otherFolderIDs", otherFolderIDs);
}
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
function conceptIsReadonly() {
	var data = justep.xbl('dKnowledge');
	var operator = justep.Request.URLParams.operator;

	if (operator == 'new') {
		return false;
	} else if (operator == 'edit') {
		var createPsnID = data.getValue("fCreatePsnID");
		var releasePsnID = data.getValue("fReleasePsnID");
		var psnID = justep.Context.getCurrentPersonID();
		if ((psnID == createPsnID) || (psnID == releasePsnID)) {
			return false;
		}
	} else if (operator == 'manage') {
		return false;
	} else if (operator == undefined || operator == '') {
		return false;
	}

	return true;
}
function trgOtherFoldersDOMActivate(event) {
	var dlg = justep.xbl("dlgOtherFolders");
	dlg.open();
}
function dlgOtherFoldersSend(event) {
	return {
		"otherFolderIDs" : otherFolderIDs
	};
}
function dlgOtherFoldersReceive(obj) {
	// var dKWFolder = justep.xbl('dKWFolder');
	var otherFoldersName = "";
	var kwid = justep.xbl('dKnowledge').getCurrentRowId();
	if (kwid == '') {
		return;
	}
	var grdReturn = obj.data;
	var len = grdReturn.getRowsNum();
	otherFolderIDs = "";
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
	justep.xbl('dKnowledge').setValue('fOtherFolders', otherFoldersName, kwid);
}
function canOpenRightsSet() {
	var dKnowledge = justep.xbl('dKnowledge');
	if (dKnowledge.isChanged()) {
		return true;
	} else {
		return false;
	}
}
function openRightsSetDialog(event) {
	/*
	 * if (justep.xbl('dKnowledge').saveData()) { }
	 */
	var dlg = justep.xbl("dlgRights");
	dlg.initEveryTimes = true;
	dlg.open();
}
function dlgRightsSend(event) {
	var data = justep.xbl("dKnowledge");
	var kwid = data.getCurrentRowId();
	var isInheritRights = data.getValue("fIsInheritRights");

	return {
		"kwid" : kwid,
		"isInheritRights" : isInheritRights
	};
}
function dKnowledgeValueChanged(event) {
	var dKnowledge = justep.xbl('dKnowledge');
	var fieldName = event.column;
	if (fieldName == "fDocument") {
		var fDocument = event.value;
		if (fDocument != '') {
			dKnowledge.setValue('fContentType', 'uploaddoc');
			dKnowledge.setValue('fContentTypeName', '上传文档');
			dKnowledge.setValue('fLinkURL', '');
			dKnowledge.setValue('fTemplateID', '');
			dKnowledge.setValue('fTemplateName', '');
			dKnowledge.setValue('fContent', '');
			dKnowledge.setValue('fContentURL', '');
			dKnowledge.setValue('fPicture1', '');
			dKnowledge.setValue('fPicture2', '');
			dKnowledge.setValue('fPicture3', '');
			/*justep.xbl('fPicture1').deleteattachmentImage();
			justep.xbl('fPicture2').deleteattachmentImage();
			justep.xbl('fPicture3').deleteattachmentImage();*/
		}
	}
	if (fieldName == "fLinkURL") {
		var fLinkURL = event.value;
		if (fLinkURL != '') {
			dKnowledge.setValue('fContentType', 'urllink');
			dKnowledge.setValue('fContentTypeName', '引用链接');
			dKnowledge.setValue('fDocument', '');
			dKnowledge.setValue('fTemplateID', '');
			dKnowledge.setValue('fTemplateName', '');
			dKnowledge.setValue('fContent', '');
			dKnowledge.setValue('fContentURL', '');
			dKnowledge.setValue('fPicture1', '');
			dKnowledge.setValue('fPicture2', '');
			dKnowledge.setValue('fPicture3', '');
			/*justep.xbl('fPicture1').deleteattachmentImage();
			justep.xbl('fPicture2').deleteattachmentImage();
			justep.xbl('fPicture3').deleteattachmentImage();*/
		}
	}
	if (fieldName == "fContent") {
		var fContent = event.value;
		var fTemplateName = dKnowledge.getValue('fTemplateName');
		if (fContent != '') {
			dKnowledge.setValue('fContentType', 'htmltemplate');
			dKnowledge.setValue('fContentTypeName', 'HTML模板');
			dKnowledge.setValue('fDocument', "");
			dKnowledge.setValue('fLinkURL', "");
			if (fTemplateName == '') {
				dKnowledge.setValue('fTemplateName', '文本模板');
				dKnowledge.setValue('fTemplateFileName', 'txtTemplate.html');
			}
		} else if (fContent == '') {
			var count = getPicCount();
			if (count == 0) {
			    dKnowledge.setValue('fContentType', '');
				dKnowledge.setValue('fContentTypeName', '');
				dKnowledge.setValue('fTemplateName', '');
				dKnowledge.setValue('fTemplateFileName', '');
			}
		}
	}
	if (fieldName == "fPicture1" || fieldName == "fPicture2"
			|| fieldName == "fPicture3") {
		var fContent = dKnowledge.getValue('fContent');
		var count = getPicCount();
		var fTemplateName = "", fTemplateFileName = "";
		if(event.value != ''){
			dKnowledge.setValue('fContentType', 'htmltemplate');
			dKnowledge.setValue('fContentTypeName', 'HTML模板');
			dKnowledge.setValue('fDocument', '');
			dKnowledge.setValue('fLinkURL', '');
		}
		if(count == 0){
			if(''==fContent){
				dKnowledge.setValue('fContentType', '');
				dKnowledge.setValue('fContentTypeName', '');
				dKnowledge.setValue('fTemplateName', '');
				dKnowledge.setValue('fTemplateFileName', '');
			}else{
				dKnowledge.setValue('fTemplateName', '文本模板');
				dKnowledge.setValue('fTemplateFileName', 'txtTemplate.html');
			}
		}else{
			fTemplateName = "文本+" + count + "图片模板";
			fTemplateFileName = "txtAnd" + count + "PicTemplate.html";
			dKnowledge.setValue("fTemplateName", fTemplateName);
			dKnowledge.setValue("fTemplateFileName", fTemplateFileName);
		}
	}
}
function getPicCount() {
	var dKnowledge = justep.xbl('dKnowledge');
	var count = 0;
	var fPicture1 = dKnowledge.getValue("fPicture1");
	var fPicture2 = dKnowledge.getValue("fPicture2");
	var fPicture3 = dKnowledge.getValue("fPicture3");
	if (fPicture1 != '') {
		count += 1;
	}
	if (fPicture2 != '') {
		count += 1;
	}
	if (fPicture3 != '') {
		count += 1;
	}
	return count;
}
/* 预览 */
function previewStaticPage(event) {
	var data = justep.xbl('dKnowledge');
	var kwid = data.getCurrentRowId();
	if (kwid != '') {
		if (data.saveData()) {
			var title = data.getValue('fTitle');
			var process = justep.Context.getCurrentProcess();
			var activity = justep.Context.getCurrentActivity();
			var url = "/OA/knowledge/process/viewKnowledge/viewKnowledge.w"
					+ "?process=" + process + "&activity=" + activity
					+ "&kwid=" + kwid + "&operator=preview";
			justep.Portal.openWindow(title, url);
		}
	}
}
/* 审批发布 */
function approveRelaseKnowledge(event) {
	var data = justep.xbl('dKnowledge');
	if (data.saveData()) {
		var kwid = data.getCurrentRowId();
		var flowEngine = justep.xbl("processKW");
		var taskid = justep.Context.getTask();
		if (taskid == null || taskid == '') {
			flowEngine.start(null, null, kwid);
		}
		flowEngine.advanceQuery();
	}
}
/* 直接发布 */
function relaseKnowledge(event) {
	var data = justep.xbl('dKnowledge');
	if (data.isChanged()) {
		alert('请先保存！');
		return;
	}
	var canRelease = canReleaseKWFun();
	if (!canRelease) {
		return;
	}
	try {
		var kwid = data.getCurrentRowId();
		var cfm = window.confirm('确定要发布吗?');
		if (cfm) {
			var fReleaseOgnID = justep.Context.getCurrentOgnID();
			var fReleaseOgnName = justep.Context.getCurrentOgnName();
			var fReleaseDeptID = justep.Context.getCurrentDeptID()
					|| justep.Context.getCurrentOgnID();
			var fReleaseDeptName = justep.Context.getCurrentDeptName() || justep.Context.getCurrentOgnName();
			var fReleasePsnID = justep.Context.getCurrentPersonID();
			var fReleasePsnName = justep.Context
					.getCurrentPersonMemberNameWithAgent();
			var fReleasePsnFID = justep.Context.getCurrentPersonMemberFID();
			var fReleasePsnFName = justep.Context
					.getCurrentPersonMemberFNameWithAgent();
			var fReleaseTime = justep.Date.toString(justep.System.datetime(),
					justep.Date.STANDART_FORMAT);
			data.setRowData(kwid, [fReleaseOgnID, fReleaseOgnName,
					fReleaseDeptID, fReleaseDeptName, fReleasePsnID,
					fReleasePsnName, fReleasePsnFID, fReleasePsnFName,
					fReleaseTime, '1', '已发布'], ['fReleaseOgnID',
					'fReleaseOgnName', 'fReleaseDeptID', 'fReleaseDeptName',
					'fReleasePsnID', 'fReleasePsnName', 'fReleasePsnFID',
					'fReleasePsnFName', 'fReleaseTime', 'fReleaseStatus',
					'fReleaseStatusName']);
			data.saveData();
			alert("发布成功!");
		}
	} catch (e) {
		alert("发布知识出错!");
	}
}
// 判断当前人是否有权限发布知识(不走流程的直接发布)
function canReleaseKWFun() {
	var folderID = justep.xbl('dKnowledge').getValue('fFolderID');
	if (folderID && (folderID != '')) {
		var param = new justep.Request.ActionParam();
		param.setString("folderID", folderID);
		var r = justep.Request.sendBizRequest(justep.Context
				.getCurrentProcess(), justep.Context.getCurrentActivity(),
				"canReleaseKWAction", param);

		if (!justep.Request.isBizSuccess(r)) {
			alert("对不起,发布失败了!");
		} else {
			var can = justep.Request.transform(justep.Request.getData(r.responseXML));
			if (can == "true") {
				return true;
			} else {
				alert("对不起,您目前没有发布知识的权限!");
			}
		}
	} else {
		alert("请先选择一个有效的栏目!");
	}
	return false;
}
/* 取消发布 */
function cancelRelaseKnowledge(event) {
	var data = justep.xbl('dKnowledge');
	if (data) {
		try {
			var kwid = data.getCurrentRowId();
			if (kwid != '') {
				var cfm = window.confirm('确定要取消发布吗?');
				if (cfm) {
					data.setValue("fReleaseStatus", "2");
					data.setValue("fReleaseStatusName", "已取消");
					data.saveData();
					alert('取消发布成功!');
				}
			}
		} catch (e) {
			alert("取消发布失败! ");
		}
	}
}
function dlgSmallpicSend(event) {
	var kwID = justep.xbl('dKnowledge').getCurrentRowId();
	return {
		"kwID" : kwID
	};
}
function canOpenThumbnail() {
	var data = justep.xbl('dKnowledge');
	if (data.isChanged()) {
		return true;
	} else {
		return false;
	}
}
function openThumbnail(event) {

	justep.xbl('dlgSmallpic').open();
}
function dlgSmallpicReceive(event) {
	var dKnowledge = justep.xbl('dKnowledge');
	dKnowledge.filters.setFilter("dKnowledgeFilter1", "OA_KM_Knowledge = '"+ event.data +"'");
	dKnowledge.refreshData();
}
function newKnowledge(event){
	var data = justep.xbl('dKnowledge');
	if (data.saveData()) {
		var kwid = data.getCurrentRowId();
		var folderID = data.getValue("fFolderID");
		var folderName = data.getValue("fFolderName");
		var folderFullID = data.getValue("fFolderFullID");
		var folderFullName = data.getValue("fFolderFullName");
		var otherFolders = data.getValue("fOtherFolders");
		var isNeedApprove = data.getValue("fIsNeedApprove");

		data.newData();

		if (confirm("是否发布到新建前同样的栏目?")) {
			if (kwid != '' && kwid != undefined) {
				data.setValue("fFolderID", folderID);
				data.setValue("fFolderName", folderName);
				data.setValue("fFolderFullID", folderFullID);
				data.setValue("fFolderFullName", folderFullName);
				data.setValue("fOtherFolders", otherFolders);
				data.setValue("fIsNeedApprove", isNeedApprove);
			}
		} else {
			otherFolderIDs = "";
		}
	}
}
function trgKeyWordClick(event){
	var wDlgKeyWord = justep.xbl("wDlgKeyWord");
	wDlgKeyWord.initEveryTimes = true;
	wDlgKeyWord.open();
};
function wDlgKeyWordSend(event){
	return {
		"keyWord" : justep.xbl('dKnowledge').getValue("fKeyword")
	};
};
function wDlgKeyWordReceive(obj){
	justep.xbl('dKnowledge').setValue("fKeyword",obj.data);
};

