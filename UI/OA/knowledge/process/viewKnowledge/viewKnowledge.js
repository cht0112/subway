
function mdKnowledgeLoad(event){
	var kwid = justep.Request.URLParams.kwid;
	if (kwid == '')
		return;
	callInsertReader();
	var data = justep.xbl('dKnowledge');
	data.filters.setFilter("KWFilter", "OA_KM_Knowledge='" + kwid + "'");
	data.refreshData();
	onLoadFunction();
	showReaded();
	showNotReaded();
	loadAttachment();
}

function mdKnowledgeConstructDone(event) {
}
/*
 * 加载附件
 */
function loadAttachment(){
	justep.xbl('attachmentEditor1').loadData();
}
function onLoadFunction() {
	var data = justep.xbl('dKnowledge');
	var rowid = data.getCurrentRowId();
	var contentType = data.getValue('fContentType');
	var iframeID = 'staticIframe';
	var iframe = document.getElementById(iframeID);
	if (contentType == 'htmltemplate') {
		var staticPageUrl = data.getValue('fContentURL');
		iframe.src = staticPageUrl+"?"+justep.XData.createUUID();
	} else if (contentType == 'urllink') {
		var fLinkURL = data.getValue('fLinkURL');
		fLinkURL = fLinkURL.trim(" ");
		if ((fLinkURL.indexOf("http://") != 0)
				&& (fLinkURL.indexOf("HTTP://") != 0)) {
			fLinkURL = "http://" + fLinkURL;
		}
		iframe.src = fLinkURL;
	} else if (contentType == 'uploaddoc') {
		var docInfo_s = data.getValue('fDocument');
		if (docInfo_s == "") {
			alert("没有上传文档！");
			return false;
		}
		var docInfo = eval('(' + docInfo_s + ')');
		if (docInfo) {
			var docPath = docInfo[0].docPath;
			var fileID = docInfo[0].fileID;
			var docName = docInfo[0].docName;
			var docID = docInfo[0].docID;
			var host = docPath.substring(1);
			host = host.indexOf("/") == -1 ? host : host.substring(0, host.indexOf("/"));
			host = "/"+host;
			var versionID = versionID ? versionID : "last";
			var partType = partType ? partType : "content";
			//var docServerInfo = justep.Doc.getDocServerByDocPath(docPath);
			//var url = docServerInfo.url + "/repository/file/view/" + fileID + "?" + "bsessionid=" + justep.Request.URLParams["bsessionid"];
			var sdocPath = justep.Doc.getDocFullPath(docID, docPath);
			var url = justep.Doc.getdocServerAction(sdocPath, "/repository/file/view/"+fileID+"/last/content");
			
			var conentName = docName.split(".")[0];
			if (conentName.length >= 15) {
				conentName = conentName.substring(0, 12) + "...";
			}
			contentLinkSpan.innerHTML="<font size='2'>正文 <a href='"+ url +"'>" + conentName + "</a></font> ";

			if ('.doc.docx.xls.xlsx.ppt.mpp.vsd.'.indexOf(String(/\.[^\.]+$/
					.exec(docName))
					+ '.') >= 0) {
				var programID = 'OpenOffice';
				var OVP = {};
				OVP.host = docPath;
				OVP.programID = programID;
				OVP.versionID = versionID;
				OVP.partType = partType;
				OVP.fileID = fileID;		
				OVP.fileExt = String(/\.[^\.]+$/.exec(docName));
				OVP.filename = docName.substr(0, docName.lastIndexOf('.'));
				OVP.filename = escape(OVP.filename);
				var param = "<data>" + unescape(OV.JSON.stringify(OVP)) + "</data>";
				 justep.Request.callURL("/OA/knowledge/components/office/officeViewerWindow.w?process=" 
				 	+ justep.Context.getCurrentProcess()
				 	+ "&activity=" + justep.Context.getCurrentActivity()
				 	, iframeID, param);
			} else {
				iframe.src = url;
			}
		}
	} else {}
	fillAttachments();
}

/**
 * 获取附件个数
 */
function fillAttachments() {
	var attachemntsField = justep.xbl('dKnowledge').getValue('fAttachment');
	var attachments = eval(attachemntsField);
	var attachmentCount = (attachments == null ? 0 : attachments.length);
	aAtachment.innerHTML = attachmentCount;
}

/**
 * 调用插入已阅数据action
 */
function callInsertReader() {
	var kwid = justep.Request.URLParams.kwid;
	var operator = justep.Request.URLParams.operator;
	if ((kwid != "") && (operator != 'preview')) {
		var flag = insertReadersAction(kwid);
	}
}

/**
 * 插入一条阅读数据
 */
function insertReadersAction(KWID) {
	var param = new justep.Request.ActionParam();
	param.setString("KWID", KWID);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "insertReadersAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		return false;
	} else {
		return true;
	}
}

// 显示附件对话框
function showAttachmentDialog() {
	xforms('attachmentDialog').open();
}

// 显示已阅人员对话框
function showReadedDialog() {
	var dlg = justep.xbl('dlgReaded');
	dlg.initEveryTimes = true;
	dlg.open();
}


function dlgReadedSend(event) {
	var kwid = justep.xbl('dKnowledge').getCurrentRowId();
	return {"kwid":kwid};
}

// 显示未阅人员对话框
function showNotReadedDialog() {
	callNotReaderAction();
	xforms('noReaderDialog').open();
}

/**
 * 调用获取未阅人数数据action
 */
function callNotReaderAction() {
	var KWID = justep.xbl('dKnowledge').getCurrentRowId();
	if (KWID != "") {
		var noreaders = getNotReaderAction().responseXML;
		var tempDivValue = "<table border=\"0\" height=3> "
							+"<tr><td width=\"80\" align=\"center\"></td><td align=\"center\"></td></tr></table>"
							+"<table border=\"1\"   style= \"BORDER-COLLAPSE:collapse;width:98% \" align=\"center\"> "
							+"<tr style=\"font-size:12px;font-weight:bold\" bgcolor=\"#F0F8FF\" height=\"25px\"><td width=\"80\" align=\"center\">姓名</td><td align=\"center\">所在部门</td></tr>";
		
		var len=justep.XML.eval(noreaders,"/root/data/xbiz:xml/noReaders","single",'xmlns:xbiz="http://www.justep.com/xbiz#"').childNodes.length;
		noreaders = justep.XML.fromString(noreaders.xml.replace(/xbiz:xml/g,"jscheme"));						
		// var len =
		// noreaders.selectNodes('/root/data/jscheme/noReaders/*').length;
		for(var i=1;i<=len;i++)
		{
			var nameURL = "/root/data/jscheme/noReaders/reader[" + i + "]/sName";
			var fNameURL = "/root/data/jscheme/noReaders/reader[" + i + "]/sFName";
			if(i%2==1) {
				tempDivValue +="<tr style=\"font-size:12px;\" bgcolor=\"#D7D7D7\"><td>"+noreaders.selectSingleNode(nameURL).text+"</td>"+"<td>"+noreaders.selectSingleNode(fNameURL).text+"</td></tr>";
			} else{
				tempDivValue +="<tr style=\"font-size:12px;\"><td>"+noreaders.selectSingleNode(nameURL).text+"</td>"+"<td>"+noreaders.selectSingleNode(fNameURL).text+"</td></tr>";
			}
		}
		tempDivValue +="</table>";
	   noReaderDiv.innerHTML = tempDivValue;
	}
}

/**
 * 获取未阅人数
 */
function getNotReaderAction() {
	var KWID = justep.xbl('dKnowledge').getCurrentRowId();
	var param = new justep.Request.ActionParam();
	param.setString("KWID", KWID);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getNoReadersAction",
			param);
	if (!justep.Request.isBizSuccess(r)) {
		return '';
	} else {
		return r;
	}
}

/**
 * 显示已阅人数
 */
function showReaded() {
	var data = justep.xbl('dKnowledge');
	if(data) {
		var kwid = data.getCurrentRowId();
		if(kwid != '') {
			var count = data.getValue("fReaderCount");
			if(count != '') {
				readedCounts.innerHTML = count;
				return;
			}
		}
	}
	readedCounts.innerHTML = 'unknow';
}

// 显示未阅人数
function showNotReaded() {
	var data = justep.xbl('dKnowledge');
	if(data) {
		var kwid = data.getCurrentRowId();
		if(kwid != '') {
			var count = getNotReadCountsAction(kwid);
			if(count != '') {
				readingCounts.innerHTML = count;
				return;
			}
		}
	}
	readingCounts.innerHTML = 'unknow';
}

// 统计未阅人数
function getNotReadCountsAction(KWID) {
	var KWID = justep.xbl('dKnowledge').getCurrentRowId();
	var param = new justep.Request.ActionParam();
	param.setString("KWID", KWID);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getNoReaderCountAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		return '';
	} 
	
	return justep.Request.transform(justep.Request.getData(r.responseXML));;
}

// 去除字符串左右空格
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
function trigger1Click(event){
	var kwid = justep.Request.URLParams.kwid;
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
			}else if(result=="NO"){
				alert("当前文档已经设置关注！");
			}
		}
};
