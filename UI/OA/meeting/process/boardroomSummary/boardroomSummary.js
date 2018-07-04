var dlgOperator = "";
var summaryID = "";
// 加载
function mdMainxforms_model_construct_done(event) {
	var dMain = justep.xbl("dSummary");
	dMain.refreshData();
}
function grdSummary_fMeetNameRender(data) {
	var fid = data.rowId;
	var html = "<a href=\"javascript:openSummaryInfo('" + fid + "')\">"
			+ data.value + "</a>";
	return html;
}

/*function trgRangeDOMActivate() {
	var dMain = justep.xbl("dSummary");
	var fDocument = dMain.getValue("fContent");
	if (fDocument == "" || fDocument == null || fDocument == 'undefined') {
		alert("正文为空，不能发布!");
		return false;
	}
	var summaryID = dMain.getCurrentRowId();
	var summaryType = "summary";
	var isPublished = KnowledgeInterface.isPublishedByBiz(summaryID,
			summaryType);
	if (isPublished && !confirm("此文件已经发布，是否要重新发布？"))
		return;

	var oldPublishedRange = "";
	if (isPublished)
		oldPublishedRange = KnowledgeInterface.getPublishedRangeByBiz(
				summaryID, summaryType);

	if (oldPublishedRange != "") {
		oldPublishedRange = " selected-full-ids='" + oldPublishedRange + "'";
	}
	var rangeInfoDlg = justep.xbl("wDlgRangeIssue");
	if (rangeInfoDlg) {
		rangeInfoDlg.initEveryTimes = true;
		rangeInfoDlg.open();
	}
}*/

function trigger2DOMActivate(event) {
	dlgOperator = "new";
	summaryID = "";
	var summaryInfoDlg = justep.xbl("dlgSummaryInfo");
	if (!summaryInfoDlg) {
		alert("对象 不存在!");
		return;
	}
	summaryInfoDlg.initEveryTimes = true;
	summaryInfoDlg.open();
}
function dlgSummaryInfoReceive(obj) {
	var id = obj.data;
	var data = justep.xbl("dSummary");
	var len = data.getCount();
	for ( var i = 0; i < len; i++) {
		var rID = data.getRowId(i);
		if (rID == id) {
			appCommon.DataUtils.refreshDataByRowIds(data, id, null);
			return;
		}
	}
	data.refreshData();
}
function dlgSummaryInfoSend(event) {
	var params = {
		"operator" : dlgOperator,
		"summaryID" : summaryID
	};
	return params;
}
function grdSummaryRowDblClick(event) {
	var tabs = justep.xbl("tabPSummary").tabbar;
	tabs.setTabActive("tabDetail");
}

function trgListRangeDOMActivate(event) {
}
function trgViewDOMActivate(event) {
}
function trgSelectDOMActivate(event) {
}
function selectBoardroomCloseup(event) {
}

function openSummaryInfo(fID) {
	dlgOperator = "view";
	summaryID = fID;
	var summaryInfoDlg = justep.xbl("dlgSummaryInfo");
	if (!summaryInfoDlg) {
		alert("对象 不存在!");
		return;
	}
	summaryInfoDlg.initEveryTimes = true;
	summaryInfoDlg.open();
}
function wDlgRangeIssueReceive(evt) {
	var sNames = "";
	var sPersonIDs = "";
	var dMain = justep.xbl("dSummary");
	var dPerson = justep.xbl('dIssue');
	var plannames = evt.data.getSimpleStore();
	var right = "";
	for ( var i = 0; i < plannames.getRowsNum(); i++) {
		var rowID = plannames.getRowId(i);
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		var fOrgKind = 'psn';
		/*
		 * var fOrgFullID =
		 * plannames.getValueByName('sOrgID__SA_SA_OPOrg__sFID', i); fOrgFullID =
		 * fOrgFullID + "/" + sPersonId + ".psn";
		 */
		var fOrgFullID = plannames.getValueByName('sFID', i);
		/*
		 * var fOrgFullName =
		 * plannames.getValueByName('sOrgID__SA_OPOrg__sFName', i); fOrgFullName =
		 * fOrgFullName + "/" + sName;
		 */
		var fOrgFullName = plannames.getValueByName('sFName', i);
		if (sPersonIDs.indexOf(rowID + ",") != -1)
			continue;
		sPersonIDs += rowID + ",";
		sNames += sName + ",";
		dPerson.newData();
		dPerson.instance.setValueByName('fOrgKind', fOrgKind);
		dPerson.instance.setValueByName('fOrgID', sPersonId);
		dPerson.instance.setValueByName('fOrgName', sName);
		dPerson.instance.setValueByName('fPersonID', sPersonId);
		dPerson.instance.setValueByName('fPersonName', sName);
		dPerson.instance.setValueByName('fRangeURL', fOrgFullID);
		dPerson.instance.setValueByName('fRangeURLName', fOrgFullName);
		dPerson.instance.setValueByName('version', 0);
		right = right + "<right><fOrgKind>" + fOrgKind + "</fOrgKind><fOrgID>"
				+ sPersonId + "</fOrgID><fOrgName>" + sName
				+ "</fOrgName><fOrgFID>" + fOrgFullID + "</fOrgFID><fOrgFName>"
				+ fOrgFullName + "</fOrgFName><fCanReadKW>1</fCanReadKW>"
				+ "<fCanCreateKW>1</fCanCreateKW>"
				+ "<fCanReadComment>1</fCanReadComment>"
				+ "<fCanCreateComment>1</fCanCreateComment>"
				+ "<fCanReadRecord>1</fCanReadRecord>"
				+ "<fCanScore>1</fCanScore>" + "</right>";
	}
	var fBizID = dMain.getCurrentRowId();
	var fBizType = 'doc';
	var fBizTypeName = '文件中心';
	var fTitle = dMain.getValue("fMeetName");
	var fKeyword = " ";
	var fDocNumber = " ";
	var fWriter = dMain.getValue("fCreatePsnName");
	var fDocument = dMain.getValue("fContent");
	var fAttachment = dMain.getValue("fAttachment");
	var fCreateOgnID = dMain.getValue("fCreateOgnID");
	var fCreateOgnName = dMain.getValue("fCreateOgnName");
	var fCreateDeptID = dMain.getValue("fCreateDeptID");
	var fCreateDeptName = dMain.getValue("fCreateDeptName");
	var fCreatePsnID = dMain.getValue("fCreatePsnID");
	var fCreatePsnName = dMain.getValue("fCreatePsnName");
	var fCreatePsnFullID = dMain.getValue("fCreatePsnFID");
	var fCreatePsnFullName = dMain.getValue("fCreatePsnFName");
	var fReleaseOgnID = justep.Context.getCurrentOgnID();
	var fReleaseOgnName = justep.Context.getCurrentOgnName();
	var fReleaseDeptID = justep.Context.getCurrentDeptID()
			|| justep.Context.getCurrentOgnID();
	var fReleaseDeptName = justep.Context.getCurrentDeptName();
	var fReleasePsnID = justep.Context.getCurrentPersonID();
	var fReleasePsnName = justep.Context.getCurrentPersonMemberName();
	var fReleasePsnFullID = justep.Context.getCurrentPersonMemberFID();
	var fReleasePsnFullName = justep.Context.getCurrentPersonMemberFName();
	var fFolderID = "doc";
	var fFolderName = "文件中心";
	var fFolderFullID = "public/doc";
	var fFolderFullName = "知识中心/文件中心";
	var fContentType = "uploaddoc";
	var fContentTypeName = "上传文档";

	var bizDataPre = "<root>" + "<fBizID>" + fBizID + "</fBizID>"
			+ "<fBizType>" + fBizType + "</fBizType>" + "<fBizTypeName>"
			+ fBizTypeName + "</fBizTypeName>" + "<fTitle>" + fTitle
			+ "</fTitle>" + "<fKeyword>" + fKeyword + "</fKeyword>"
			+ "<fDocNumber>" + fDocNumber + "</fDocNumber>" + "<fWriter>"
			+ fWriter + "</fWriter>" + "<fContentType>" + fContentType
			+ "</fContentType>" + "<fContentTypeName>" + fContentTypeName
			+ "</fContentTypeName>" + "<fDocument>" + fDocument
			+ "</fDocument>" + "<fAttachment>" + fAttachment + "</fAttachment>"
			+ "<fCreateOgnID>" + fCreateOgnID + "</fCreateOgnID>"
			+ "<fCreateOgnName>" + fCreateOgnName + "</fCreateOgnName>"
			+ "<fCreateDeptID>" + fCreateDeptID + "</fCreateDeptID>"
			+ "<fCreateDeptName>" + fCreateDeptName + "</fCreateDeptName>"
			+ "<fCreatePsnID>" + fCreatePsnID + "</fCreatePsnID>"
			+ "<fCreatePsnName>" + fCreatePsnName + "</fCreatePsnName>"
			+ "<fCreatePsnFID>" + fCreatePsnFullID + "</fCreatePsnFID>"
			+ "<fCreatePsnFName>" + fCreatePsnFullName + "</fCreatePsnFName>"
			+ "<fReleaseOgnID>" + fReleaseOgnID + "</fReleaseOgnID>"
			+ "<fReleaseOgnName>" + fReleaseOgnName + "</fReleaseOgnName>"
			+ "<fReleaseDeptID>" + fReleaseDeptID + "</fReleaseDeptID>"
			+ "<fReleaseDeptName>" + fReleaseDeptName + "</fReleaseDeptName>"
			+ "<fReleasePsnID>" + fReleasePsnID + "</fReleasePsnID>"
			+ "<fReleasePsnName>" + fReleasePsnName + "</fReleasePsnName>"
			+ "<fReleasePsnFID>" + fReleasePsnFullID + "</fReleasePsnFID>"
			+ "<fReleasePsnFName>" + fReleasePsnFullName
			+ "</fReleasePsnFName>" + "<fFolderID>" + fFolderID
			+ "</fFolderID>" + "<fFolderName>" + fFolderName + "</fFolderName>"
			+ "<fFolderFullID>" + fFolderFullID + "</fFolderFullID>"
			+ "<fFolderFullName>" + fFolderFullName + "</fFolderFullName>"
			+ "<rights>";
	var bizData = bizDataPre + right + "</rights>" + "</root>";
	// debugger;
	var success = KnowledgeInterface.publishKnowledgeFun(bizData);
	if (success) {
		dMain.setValue("fIssueState", 1);
		dMain.setValue("fIssueStateName", "已发布");
		dMain.saveData();
		alert("发布成功！");
	} else {
		alert("发布失败！");
	}
}
function wDlgRangeIssueSend(event) {
	return {
		getSimpleStore : function() {
			var store = new SimpleStore("spcdata", "sName");
			return store;
		},
		getShowAlias : function() {
			return null;
		},
		selectKind : 'psm',
		viewKind : 'ogn,dpt,pos'
	};

	/*
	 * var data = new SimpleStore('mySimpleStoreas', 'sName,sPersonID'); var
	 * para = new justep.CommonChoosePara('sName,sPersonID', data);
	 * data.loadData(null); return para;
	 */
}