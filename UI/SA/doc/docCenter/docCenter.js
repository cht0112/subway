//sid,sParentID,sDocName,sSize,sKind,sDocPath,sDocDisplayPath,sCreator,sCreatorName,sCreatorDeptName,sCreateTime,sEditor,sEditorName,sEditorDept,sLastWriter,sLastWriterDept,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag

var changeLog = null;
var docAuthList = null;
var dirPermissionDialog = null;
var uploader = {
	html4Uploader:null,
	flashUploader:null
};
var reuploader = {
	html4Uploader:null,
	flashUploader:null
};
var rootDisplayPath = null;
var localDirRootNameToUpload = null;
var downNodes = null;
var downDir = null;
var rootDirPath = null;
var currentRootAccess = null;
var docAuthListArr = null;

/* 增加回调事件 */
var ONGETDOCAUTHLIST = "onGetDocAuthList";
var ONGETISPRINT = "onGetIsPrint";
var docCenter = {};
dhtmlxEventable(docCenter);

function newDir(event){
	if(event){
		var item = event.getData().menuitem;
		if(item.program == "uploadDir"){
			// 上传文件夹能力 原来采用ocx实现，考虑到跨平台情况暂时去掉了这个能力
			if (!justep.doc.InnerUtils.checkOcx())
				return;
			createTransportElement("transportDiv", "transport");
			var docNodeTree = justep.xbl("docNodeTree");
			var rowId = docNodeTree.getCurrentRowId();
			var docPath = justep.doc.InnerUtils.getDocFullPath(rowId, docNodeTree.getValue("sDocPath", rowId));
			var docServerInfo = justep.doc.InnerUtils.getDocServerByDocPath(docPath);
			rootDisplayPath = justep.doc.InnerUtils.getDocFullDisplayPath(docNodeTree.getValue("sDocName", rowId), docNodeTree.getValue("sDocDisplayPath", rowId));
			transport.InitUpLoaderParam(docServerInfo.host, docServerInfo.port, "/repository/file/upload", "testuser", "testuser", justep.Request.URLParams["bsessionid"]);
			var localFullPath = transport.GetFileSys().OpenSelectDirDialog();
			if(localFullPath){
				if(localFullPath.lastIndexOf('\\') == localFullPath.length-1){
					var rootName = localFullPath.substring(0,localFullPath.lastIndexOf('\\')-1);
				}else{
					var rootName = localFullPath.substring(localFullPath.lastIndexOf('\\')+1);
				}
				justep.xbl("uploadDirProgress").open();
				localDirRootNameToUpload = localFullPath.replace(new RegExp("\\\\\\\\","g"),"/");
				transport.GetUploader().SetSimUploadLimit(5, 0);
				// changeLog = {items:[],"operate":"","url":""};
				transport.GetUploader().UploadDir(localFullPath);
			}
		}else if(item.program == "createDir"){
			var docNodeTree = justep.xbl("docNodeTree");
			createDir("新建文件夹");
			docNodeTree.saveData();
			docNodeTreeIndexChanged();
		}
	}else{
		alert("error: docCenter.window newDir event is null.");
	}
}

function createDir(docName){
	var docNodeTree = justep.xbl("docNodeTree");
	var currentRowId = docNodeTree.getCurrentRowId();
	var newDirDocPath = justep.doc.InnerUtils.getDocFullPath(currentRowId, docNodeTree.getValue("sDocPath"));
	var newDirDocDisplayPath = justep.doc.InnerUtils.getDocFullDisplayPath(docNodeTree.getValue("sDocName"), docNodeTree.getValue("sDocDisplayPath"));
	docNodeTree.newData(0,currentRowId);
	var newDirID = docNodeTree.getCurrentRowId();
	docNodeTree.setValue("sDocName",docName, newDirID);
	docNodeTree.setValue("sKind","dir", newDirID);
	docNodeTree.setValue("sDocPath",newDirDocPath, newDirID);
	docNodeTree.setValue("sDocDisplayPath",newDirDocDisplayPath, newDirID);
	docNodeTree.setValue("sCreatorFID",justep.Context.getCurrentPersonMemberFID(), newDirID);
	docNodeTree.setValue("sCreatorName",justep.Context.getCurrentPersonName(), newDirID);
	docNodeTree.setValue("sCreatorDeptName",justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"", newDirID);
	docNodeTree.setValue("sCreateTime",justep.System.datetimeString(), newDirID);
	docNodeTree.setValue("sLastWriterFID",justep.Context.getCurrentPersonMemberFID(), newDirID);
	docNodeTree.setValue("sLastWriterName",justep.Context.getCurrentPersonName(), newDirID);
	docNodeTree.setValue("sLastWriterDeptName",justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"", newDirID);
	docNodeTree.setValue("sLastWriteTime",justep.System.datetimeString(), newDirID);
	docNodeTree.setValue("sFlag","1", newDirID);
	docNodeTree.getStore().setValueById(newDirID, "version", "0");
	docNodeTree.setRowState(newDirID, "new", newDirID);
	return newDirID;
}

function onCreateDir(fullParentPath){
	fullParentPath = fullParentPath.replace(new RegExp('\\\\\\\\','g'),'/');
	if(fullParentPath.lastIndexOf('/') == fullParentPath.length-1){
		var docName = fullParentPath.substring(0,fullParentPath.lastIndexOf('/'));
	}else{
		var docName = fullParentPath.substring(fullParentPath.lastIndexOf('/')+1);
	}
	path = localDirRootNameToUpload.substring(localDirRootNameToUpload.lastIndexOf('/'))
	path = path.concat(fullParentPath.replace(localDirRootNameToUpload, ""));
	parentFullDisplayPath = rootDisplayPath.concat(path.substring(0, path.lastIndexOf('/')));
	var parentName = parentFullDisplayPath.substring(parentFullDisplayPath.lastIndexOf('/')+1);
	var parentDisplayPath = parentFullDisplayPath.substring(0, parentFullDisplayPath.lastIndexOf('/'));
	if (parentDisplayPath==""){
		parentDisplayPath="/";
	}
	var docNodeTree = justep.xbl("docNodeTree");
	var rowId = docNodeTree.locate([parentDisplayPath, parentName],["sDocDisplayPath","sDocName"],false,false,false)[0];
	docNodeTree.setIndex(docNodeTree.getIndex(rowId));
	createDir(docName);
}

function onFilesUploaded(file){
	var uploading = document.getElementById("uploading");
	uploading.innerText = file.FullName.replace(new RegExp('\\\\\\\\','g'),'\\');
	var docNodeTree = justep.xbl("docNodeTree");
	var parentID = docNodeTree.getCurrentRowId();
	var docNodeList = justep.xbl("docNodeList");
	var docID = docNodeList.createUUID();
	docNodeList.insert(docID,0);
	var docName = file.FullName.substring(file.FullName.lastIndexOf('\\')+1);
	docNodeList.setValue("sDocName",docName, docID);
	docNodeList.setValue("sParentID",parentID, docID);
	docNodeList.setValue("sKind",file.MediaType, docID);
	docNodeList.setValue("sSize",file.Size, docID);
	docNodeList.setValue("sDocPath",justep.doc.InnerUtils.getDocFullPath(parentID, docNodeTree.getValue("sDocPath", parentID)), docID);
	docNodeList.setValue("sDocDisplayPath",justep.doc.InnerUtils.getDocFullDisplayPath(docNodeTree.getValue("sDocName", parentID), docNodeTree.getValue("sDocDisplayPath", parentID)), docID);
	docNodeList.setValue("sCreatorFID",justep.Context.getCurrentPersonMemberFID(), docID);
	docNodeList.setValue("sCreatorName",justep.Context.getCurrentPersonName(), docID);
	docNodeList.setValue("sCreatorDeptName",justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"", docID);
	docNodeList.setValue("sCreateTime",justep.System.datetimeString(), docID);
	docNodeList.setValue("sLastWriterFID",justep.Context.getCurrentPersonMemberFID(), docID);
	docNodeList.setValue("sLastWriterName",justep.Context.getCurrentPersonName(), docID);
	docNodeList.setValue("sLastWriterDeptName",justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"", docID);
	docNodeList.setValue("sLastWriteTime",justep.System.datetimeString(), docID);
	docNodeList.setValue("sFileID",file.ServerFileName, docID);
	docNodeList.setValue("sDocLiveVersionID","1", docID);
	docNodeList.setValue("sFlag","1", docID);
	docNodeList.getStore().setValueById(docID, "version", "0");
	docNodeList.setRowState(docID, "new");
}

/*
 * Status的枚举类型 TFileStatus = (fsNone, fsTransWait, fsTransIng, fsTransEnd,
 * fsTransStop, fsTransFail, fsReadFileError, fsNetDisConnect);
 */
function onFileStatus(FileIndex,FileFullName, FileSize,TransedSize, Progress, Status){
	if(Status != 1 && Status != 2)
		throw new Error("上传文件夹失败");
}

function onFilesTransed(num){
	justep.xbl("docNodeTree").saveData();
	justep.xbl("docNodeList").saveData();
	justep.xbl("uploadDirProgress").close();
}


function deleteDir(){
	if(confirm('是否删除数据？')){
		var docNodeTree = justep.xbl("docNodeTree");
		var fileID = docNodeTree.getValue("sFileID");
		var docPath = docNodeTree.getValue("sDocPath");
		if(docPath == "/"){
			if(!confirm('如果您要删除跟节点,推荐您去文档配置中删除,在这里删除会造成文档配置和文档树不统一,您确定要继续吗？')){
				return;
			}
		}
		var version = docNodeTree.getValue("version");
		var docVersionID = docNodeTree.getValue("sDocLiveVersionID");
		var docName = docNodeTree.getValue("sDocName");
		var kind = docNodeTree.getValue("sKind");
		var size = docNodeTree.getValue("sSize");
		
		
		changeLog = {items:[],autoCreateVersion:true,"operate":"","url":""};
		justep.doc.InnerUtils.addChangeLog(changeLog, "delete", [docNodeTree.getCurrentRowId(), version, fileID, docVersionID, docName, kind, size, "", docPath, "", "", "", "", "", ""]);
		justep.doc.InnerUtils.deleteDocAction(changeLog,docPath);
		docNodeTree.remove(docNodeTree.getCurrentRowId());	
	}
}

function showDirAttributeDialog(){
	var afterEnsureFun = function(event){
		var docNodeList = justep.xbl("docNodeTree");
		if(docNodeList.isChanged()) {
			docNodeList.setRowState(docNodeList.getCurrentRowId(), "edit");
			docNodeList.saveData();
		}
	}					  
	justep.doc.Dialog.openDocDirInfoDialog(justep.xbl("docNodeTree"), afterEnsureFun);
}

function showPermissionDialog(type){
	if("dir" == type){
		var docNode = justep.xbl("docNodeTree");
		var text = "文件夹权限";
	}else if("doc" == type){
		var docNode = justep.xbl("docNodeList");
		var text = "文件权限";
	}
	if(!dirPermissionDialog){
		dirPermissionDialog = new justep.WindowDialog("dirPermissionDialog","/SA/doc/docCenter/docCenterPermission.w", text,true,"maximize",600,400,0,0,true);
	}else{
		dirPermissionDialog.setTitle(text);	
	}
	dirPermissionDialog.attachEvent("onSend",function(event){
			var rowId = docNode.getCurrentRowId(); 
		    if("dir" == type && docNode.getStore()._isVirtualRoot(rowId)){ 
			   var docPath = "/";
			   var docFullPath = "/";
			}   
			else{
				var docPath = docNode.getValue("sDocPath", rowId); 		   
			    var docFullPath = justep.doc.InnerUtils.getDocFullPath(rowId, docPath);
			}
			var sendParam={};
			sendParam.docPath=docFullPath;
			sendParam.docType=type;
			return sendParam;
		} , dirPermissionDialog);
	dirPermissionDialog.open();
}

function downloadDir(){
	if (!justep.doc.InnerUtils.checkOcx())
		return;	
	createTransportElement("transportDiv", "transport");
	var docNodeTree = justep.xbl("docNodeTree");
	var docPath = justep.doc.InnerUtils.getDocFullPath(docNodeTree.getCurrentRowId(), docNodeTree.getValue("sDocPath"));
	var docServerInfo = justep.doc.InnerUtils.getDocServerByDocPath(docPath);
	transport.InitDownLoaderParam(docServerInfo.host, docServerInfo.port, "/repository/file/download/*", "testuser", "testuser", 5, justep.Request.URLParams["bsessionid"]);			
	downNodes = [];
	var docNodeTree = justep.xbl("docNodeTree");
	var rowId = docNodeTree.getCurrentRowId();
	var fs = transport.GetFileSys();
	downDir = fs.OpenSelectDirDialog();
	if(!downDir){
		return;
	}
	var dl = transport.GetDownLoader();
	dl.ClearFile();
	docNodeTree.expandRows([docNodeTree.getCurrentRowId()]);
	rootDirPath = docNodeTree.getValue("sDocDisplayPath", rowId) + "/";
	dl.SetDestDir(downDir + "\\" + docNodeTree.getValue("sDocName", rowId));
	var docNodeList = justep.xbl("docNodeList");
	for (i = 0; i< docNodeList.getCount(); i++) {
		dl.AddFile(docNodeList.getValue("sDocName", docNodeList.getRowId(i)), docNodeList.getValue("sFileID", docNodeList.getRowId(i)));
	}
	if (docNodeTree.getStore().getAllSubItems(rowId) != "") {
		var list = docNodeTree.getStore().getAllSubItems(rowId).split(',');
		for (i = 0; i< list.length; i++) {
			downNodes.push(list[i]);
		}
	} else if (docNodeList.getCount()==0){
		return;
	}
	dl.StartAll(0);
	justep.xbl("downProgess").open();
}

function onDownBeginRead(FileIndex, FileFullName, FileSize){
   	var downloading = document.getElementById("downloading");
	downloading.innerText = FileFullName;
}

function onDownOver(){
	var dl = transport.GetDownLoader();
	dl.ClearFile();
	if (downNodes.length == 0) {
		justep.xbl("downProgess").close();
	}else{
    	var downNode = downNodes[0];
		var docNodeTree = justep.xbl("docNodeTree");
		docNodeTree._goto(downNode);
		dl.SetDestDir(downDir + "\\" + docNodeTree.getValue("sDocDisplayPath", downNode).replace(rootDirPath, "").replace(new RegExp("/","gm"),"\\") + "\\" + docNodeTree.getValue("sDocName", downNode));
		docNodeTree.expandRows([docNodeTree.getCurrentRowId()]);
		var docNodeList = justep.xbl("docNodeList");
		for (i = 0; i < docNodeList.getCount(); i++) {
			dl.AddFile(docNodeList.getValue("sDocName", docNodeList.getRowId(i)), docNodeList.getValue("sFileID", docNodeList.getRowId(i)));
		}
		var list = docNodeTree.getStore().getAllSubItems(downNode).split(',');
		for (i = 0; i < list.length; i++) {
			if (list[i] != "") {
				downNodes.push(list[i]);
			}
		}
		downNodes.shift();
		dl.StartAll(0);
	}
}

function deleteDoc(){
	if(confirm('是否删除数据？')){
		var docNodeList = justep.xbl("docNodeList");
		var fileID = docNodeList.getValue("sFileID");
		var docPath = docNodeList.getValue("sDocPath");
		var version = docNodeList.getValue("version");
		var docVersionID = docNodeList.getValue("sDocLiveVersionID");
		var docName = docNodeList.getValue("sDocName");
		var kind = docNodeList.getValue("sKind");
		var size = docNodeList.getValue("sSize");
		changeLog = {items:[],autoCreateVersion:true,"operate":"","url":""};
		
		justep.doc.InnerUtils.addChangeLog(changeLog, "delete", [docNodeList.getCurrentRowId(), version, fileID, docVersionID, docName, kind, size, "", docPath, "", "", "", "", "", ""]);
		justep.doc.InnerUtils.deleteDocAction(changeLog,docPath);
		docNodeList.remove(docNodeList.getCurrentRowId());
	}
}


function downloadDoc(){
	if(justep.xbl('permissions').getValue("downloadDoc") == 'true'){
		var docNodeList = justep.xbl("docNodeList");
		var docPath = docNodeList.getValue("sDocPath");
		var fileID = docNodeList.getValue("sFileID");
		addAccessRecord("download");
		justep.doc.InnerUtils.downloadDocByFileID(docPath, fileID);
	}
}

function browseDoc(){
	var docNodeList = justep.xbl("docNodeList");
	var docPath = docNodeList.getValue("sDocPath");
	var rowId = docNodeList.getCurrentRowId();
	var docFullPath = justep.doc.InnerUtils.getDocFullPath(rowId, docPath);
	var access = getAccessBysDocPath(docFullPath , currentRootAccess);
	if(!((access % 4) >= 2)){
		return ;
	}
	
	var filename = docNodeList.getValue("sDocName");
	var fileID = docNodeList.getValue("sFileID");
	justep.doc.InnerUtils.browseDocByFileID(docPath, filename, fileID, "last", "content", 'OpenOffice',NotifyPrintEvent());
}

function NotifyPrintEvent(){
	var result = justep.doc._office_isPrint2;
	if (docCenter.checkEvent(ONGETISPRINT)){
		var eventData = {
				'isPrint' : justep.doc._office_isPrint2,
				'docAuthListArr' : docAuthListArr
		};
 		docCenter.callEvent(ONGETISPRINT, [eventData]);
 		result = eventData.isPrint ;			
	}
	return result;
}

function lockDoc(){
	var docNodeList = justep.xbl("docNodeList");
	if(docNodeList.getCurrentRowId()){
		justep.doc.InnerUtils.lockDoc(docNodeList.getCurrentRowId());
	}
	docNodeList.refreshData();
}

function unlockDoc(){
	var docNodeList = justep.xbl("docNodeList");
	if(docNodeList.getCurrentRowId()){
		if(confirm('强行解锁会造成当前锁定人已经编辑的东西丢失,你确定继续吗？')){
			docNodeList.setValue("sCacheName","");
			docNodeList.setValue("sRevisionCacheName","");
			docNodeList.setValue("sEditorFID", "");
			docNodeList.setValue("sEditorName", "");
			docNodeList.setValue("sEditorDeptName", "");
			docNodeList.saveData();
		}
	}
	docNodeList.refreshData();
}

function upload(docName, kind, size, cacheName, revisionCacheName, commentFileContent){
	var docNodeTree = justep.xbl("docNodeTree");
	var docNodeList = justep.xbl("docNodeList");
	var docID = docNodeList.createUUID();
	var parentID = docNodeTree.getCurrentRowId();
	var docPath = justep.doc.InnerUtils.getDocFullPath(docNodeTree.getCurrentRowId(), docNodeTree.getValue("sDocPath"));
	var displayPath = justep.doc.InnerUtils.getDocFullDisplayPath(docNodeTree.getValue('sDocName'), docNodeTree.getValue('sDocDisplayPath'));
	changeLog = {items:[],autoCreateVersion:true,"operate":"","url":""};
	justep.doc.InnerUtils.addChangeLog(changeLog, "new", [docID, "0", "", "", docName, kind, size, parentID, docPath, displayPath, "", "", "", "", ""], ["document", cacheName, revisionCacheName, commentFileContent]);
	var items = commit(changeLog).rows;
	var fileID = items[0].sFileID.value;
	var docVersionID = items[0].sDocLiveVersionID.value;
	justep.doc.InnerUtils.updateChangeLog(changeLog,docID,fileID,docVersionID);
	docNodeList.insert(docID,0);
	docNodeList.setValue("sDocName",docName, docID);
	docNodeList.setValue("sParentID",parentID, docID);
	docNodeList.setValue("sKind",kind, docID);
	docNodeList.setValue("sSize",size, docID);
	docNodeList.setValue("sDocPath",docPath, docID);
	docNodeList.setValue("sDocDisplayPath",displayPath, docID);
	docNodeList.setValue("sCreatorFID",justep.Context.getCurrentPersonMemberFID(), docID);
	docNodeList.setValue("sCreatorName",justep.Context.getCurrentPersonName(), docID);
	docNodeList.setValue("sCreatorDeptName",justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"", docID);
	docNodeList.setValue("sCreateTime",justep.System.datetimeString(), docID);
	docNodeList.setValue("sLastWriterFID",justep.Context.getCurrentPersonMemberFID(), docID);
	docNodeList.setValue("sLastWriterName",justep.Context.getCurrentPersonName(), docID);
	docNodeList.setValue("sLastWriterDeptName",justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"", docID);
	docNodeList.setValue("sLastWriteTime",justep.System.datetimeString(), docID);
	docNodeList.setValue("sFileID",fileID, docID);
	docNodeList.setValue("sDocLiveVersionID",docVersionID, docID);
	docNodeList.setValue("sFlag","1", docID);
	docNodeList.getStore().setValueById(docID, "version", "0");
	docNodeList.setRowState(docID, "new");
	docNodeList.saveData();
	justep.doc.InnerUtils.commitDocFlag(changeLog);
}

function update(docName, kind, size, cacheName, revisionCacheName, commentFileContent,createVersion){
	var docNodeList = justep.xbl("docNodeList");
	var docID = docNodeList.getCurrentRowId();
	var version = docNodeList.getValue("version");
	var fileID = docNodeList.getValue("sFileID");
	var parentID = docNodeList.getValue("sParentID");
	var docPath = docNodeList.getValue("sDocPath");
	var displayPath	= docNodeList.getValue("sDocDisplayPath");
	var description = docNodeList.getValue("sDescription"); 
	var classification = docNodeList.getValue("sClassification");
	var keywords = docNodeList.getValue("sKeywords"); 
	var finishTime = docNodeList.getValue("sFinishTime");
	var serialNumber = docNodeList.getValue("sDocSerialNumber");
	var docVersionID = docNodeList.getValue("sDocLiveVersionID");
	
	docNodeList.setValue("sDocName",docName, docID);
	docNodeList.setValue("sParentID",parentID, docID);
	docNodeList.setValue("sKind",kind, docID);
	docNodeList.setValue("sSize",size, docID);
	docNodeList.setValue("sLastWriterFID",justep.Context.getCurrentPersonMemberFID(), docID);
	docNodeList.setValue("sLastWriterName",justep.Context.getCurrentPersonName(), docID);
	docNodeList.setValue("sLastWriterDeptName",justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"", docID);
	docNodeList.setValue("sLastWriteTime",justep.System.datetimeString(), docID);
	docNodeList.saveData();
	
	changeLog = {items:[],autoCreateVersion:true,"operate":"","url":""};
	justep.doc.InnerUtils.addChangeLog(changeLog, "edit", [docID, version, fileID, docVersionID, docName, kind, size, parentID, docPath, displayPath, description, classification, keywords, finishTime, serialNumber], ["document", cacheName, revisionCacheName, commentFileContent]);
	if('W10='!=commentFileContent){
		justep.doc.InnerUtils.commitDocCache(docID,changeLog);
	}
	if(!!createVersion){
		// ocx控件挡住了成文状态的提示信息，所以不提示原因
		justep.doc.InnerUtils.createVersion(docID);
	}
	docNodeList.refreshData();
}


function officeHandler(event){
	if (!justep.doc.InnerUtils.checkOcx())
		return;	

	if (!event) {
		alert("error: docCenter.w officeHandler event is null.");
		return;
	}
	var item = event.getData().menuitem;
	var docFullPath = justep.doc.InnerUtils.getDocFullPath(justep.xbl("docNodeTree").getCurrentRowId(), justep.xbl("docNodeTree").getValue("sDocPath"));
	var OVP = {
		// host: getHost(docFullPath),
		host: docFullPath,	
		userName : justep.Context.getCurrentPersonName() + (justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"") ,
		userInitials : justep.Context.getCurrentPersonName(),
		programID: item.program,
		filename: item.filename,
		showField: true,
		isPrint : NotifyPrintEvent()
	};
    if (item.program == 'OpenOffice') {
		var docNodeList = justep.xbl("docNodeList");
		var filename = docNodeList.getValue("sDocName", docNodeList.getCurrentRowId());
		OVP.filename = filename.substr(0, filename.lastIndexOf('.'));
		OVP.fileID = docNodeList.getValue("sFileID", docNodeList.getCurrentRowId());
		OVP.fileExt = String(/\.[^\.]+$/.exec(filename));
		if ('.doc.docx.xls.xlsx.ppt.mpp.vsd.'.indexOf(OVP.fileExt + '.') >= 0) {
			var cacheInfo =justep.doc.InnerUtils.queryDocCache(docNodeList.getCurrentRowId());
			if(cacheInfo.isLockSuccess=="success"||cacheInfo.isLockSuccess=="noNeedLock"){
				OVP.cacheName =cacheInfo.sCacheName; 
				OVP.revisionCacheName = cacheInfo.sRevisionCacheName;
				document.lastOperation=cacheInfo.isLockSuccess;
			}else if(cacheInfo.isLockSuccess=="failure"){
				alert("该文件正在被别人编辑,您不能编辑，只能浏览最新版本");
				return;
			}
			var callback = function(event) {
				var data = event.data;
				if (data.type == "officeAction") {
					if (data.changes != 'W10=') {
						document.lastOperation="noNeedLock";
						update(data.filename, data.mediatype,data.size, data.cacheName, data.revisionCacheName, data.changes,data.createVersion);
					} else {
						if (document.lastOperation == "success") {
							justep.doc.InnerUtils.unLockDoc(docNodeList.getCurrentRowId());
						}
					}
				}
			};		
			justep.doc.Dialog.openOfficeDialog(callback, OVP, this);
		} else {
			alert("请选择Office文档记录！");
		}
	} else if (item.program != '-') {
       	var callback = function(event) {
       		var data = event.data;
			if (data.type == "officeAction") {
				if (data.changes != 'W10=') {
					upload(data.filename, data.mediatype, data.size, data.cacheName, data.revisionCacheName, data.changes);
				}	
       		}
		};
		justep.doc.Dialog.openOfficeDialog(callback, OVP,this);
	}
}

function commit(changeLog){
	var docNodeTree = justep.xbl("docNodeTree");
	var docPath = justep.doc.InnerUtils.getDocFullPath(docNodeTree.getCurrentRowId(), docNodeTree.getValue("sDocPath"));
	return justep.doc.InnerUtils.commitDoc(changeLog,docPath);
}

function showDocAttributeDialog(){
	var afterEnsureFun = function(event){
		var docNodeList = justep.xbl("docNodeList");
		if(docNodeList.isChanged()) {
			docNodeList.setRowState(docNodeList.getCurrentRowId(), "edit");
			docNodeList.saveData();
			justep.doc.InnerUtils.syncCustomFileds(docNodeList.getCurrentRowId());
			docNodeList.refreshData();
		}
	};
	justep.doc.Dialog.openDocInfoDialog(justep.xbl("docNodeList"), afterEnsureFun);
}

function showHistoryRecordDialog(){
	var docNodeList = justep.xbl("docNodeList");
	var docID = docNodeList.getCurrentRowId();
	var fileID = docNodeList.getValue("sFileID", docID);
	var docPath = docNodeList.getValue("sDocPath", docID);

	var docFullPath = justep.doc.InnerUtils.getDocFullPath(docID, docPath);
	var access = getAccessBysDocPath(docFullPath , currentRootAccess);	
	justep.doc.Dialog.openDocHistoryDialog(docID, fileID, docPath,access,NotifyPrintEvent());
}

function showDownloadHistoryRecordDialog(){
	var docNodeList = justep.xbl("docNodeList");
	var docID = docNodeList.getCurrentRowId();
	justep.doc.Dialog.openDocDownloadHistoryDialog(docID);
}

function addAccessRecord(type){
	var docNodeList = justep.xbl("docNodeList");
	var docID = docNodeList.getCurrentRowId();
	var fileID = docNodeList.getValue('sFileID');
	var docName = docNodeList.getValue('sDocName');
	var size = docNodeList.getValue('sSize');
	var docVersionID = docNodeList.getValue('sDocLiveVersionID');
	
	var accessLog = {items:[],"operate":"","url":""};	
	justep.doc.InnerUtils.addChangeLog(accessLog, type, [docID, "0", fileID, docVersionID, docName, "", size, "", "", "", "", "", "", "", ""]);
		
	justep.doc.InnerUtils.addAccessRecord(accessLog);
}

function getDocAuthList(){
	docAuthList = justep.doc.InnerUtils.getDocAuthList();
	if(!docAuthListArr) 
	    docAuthListArr = {}
	for(var deptFID in docAuthList) {
		var authItems = docAuthList[deptFID];
		var deptAuth = new Array();
		var i=0;
		for(var authId in authItems) {
			var authItem = authItems[authId];
			deptAuth[i] = {"authId":authId,"sDocPath":authItem.sDocPath,"sAuthorizeeFID" : authItem.sAuthorizeeFID,"sAccess":authItem.sAccess};
			i++;
		}
		docAuthListArr[deptFID] = deptAuth;
	}
	
	if (docCenter.checkEvent(ONGETDOCAUTHLIST)){
 		docCenter.callEvent(ONGETDOCAUTHLIST, [docAuthListArr]);
	}
}
	        
function authFilter(nodes, docPath, docID) {
	if (docPath == '/') {
		var fullpath = '/' + docID;
	} else {
		var fullpath = docPath + '/' + docID;
	}
	for (i = 0; i < nodes.length; i++) {
		if (fullpath == justep.XML.getNodeText(nodes[i])) {
			return false;
		}
	}
	return true;
}
	       
function onTreeInit(event){
	if(!docAuthList){
		getDocAuthList();
	}
	event.source.grid.attachEvent("onLoadXmlRow",
		function(grid,rowid,xmlrow){
		    if(!grid._isVirtualRoot(rowid)){
				var docPath = grid.getValueByRowXML(xmlrow, 'sDocPath');
				var docFullPath = justep.doc.InnerUtils.getDocFullPath(rowid, docPath);
			}else
			{
				var docPath = "/";
				var docFullPath = "/";
			}
			var docAccess = getAccessBysDocPath(docFullPath,-1);			
			if(docAccess == 0){
			    return false;
			}
			return true;
		}
	);
}

function getAccessBysDocPath(docFullPath , defaultAccess){
	var docAccess = null;
	for(var item in docAuthListArr){
		var itemAceess = defaultAccess;  
		$.each(docAuthListArr[item],function(n,value){
		    if(value.sDocPath == docFullPath){	
		    	itemAceess = value.sAccess;
		       return false;
		    }
		});
		if (!docAccess) docAccess = itemAceess ;
		if(itemAceess > docAccess) docAccess = itemAceess;
	}
	return (docAccess != null && docAccess) > defaultAccess ? docAccess:defaultAccess;
}

function getTreeIndexChangedAccess(docFullPath){
	var access = 1;	
	for(var item in docAuthListArr){
		var docAccess = null;
		while(docFullPath){
			$.each(docAuthListArr[item],function(n,value){
				if(value.sDocPath == docFullPath){
					docAccess = value.sAccess;
					return false;
				}
			});
			if(docAccess != null) break;
			if("/" == docFullPath){
				docAccess = 1;
				break;
			}
			docFullPath = docFullPath.substring(0, docFullPath.lastIndexOf("/"));
			if("" == docFullPath)
				docFullPath = "/";
		}
		if(docAccess > access)
			access = docAccess;
	}
	return access;
}

function docNodeTreeIndexChanged(){
	if(!docAuthList){
		getDocAuthList();
	}
	var docNodeTree = justep.xbl("docNodeTree");
	var rowId = docNodeTree.getCurrentRowId();
	var isVirtualRoot = docNodeTree.getStore()._isVirtualRoot(rowId);
	if(!isVirtualRoot){
		var docPath = docNodeTree.getValue("sDocPath", rowId);
		var docFullPath = justep.doc.InnerUtils.getDocFullPath(rowId, docPath);
		var access = getTreeIndexChangedAccess(docFullPath);
		if(docNodeTree.getCount()==0)  
			access = 1;
	}else{
		var docPath = "/";
		var docFullPath = "/";
		var access = getTreeIndexChangedAccess(docFullPath);
		if(docNodeTree.getCount()==0)  
			access = 1;
		if(access >= 16384)	
		var access = 16384;
	}
	currentRootAccess = access ;  
	var permissions = justep.xbl("permissions");
	permissions.setValue("newDir", ((access % 512) >= 256).toString(), "permissionsRow");
	permissions.setValue("deleteDir", ((access % 2048) >= 1024).toString(), "permissionsRow");
	permissions.setValue("editDir", ((access % 1024) >= 512).toString(), "permissionsRow");
	permissions.setValue("manageDir", ((access % 32768) >= 16384).toString(), "permissionsRow");
	permissions.setValue("downloadDir", ((access % 8) >= 4).toString(), "permissionsRow");
	permissions.setValue("newDoc", ((access % 512) >= 256).toString(), "permissionsRow");
	if(justep.xbl('docNodeList').getCount()>0){
		if(justep.Browser.hasTouch){
			permissions.setValue("editDoc", 'false', "permissionsRow");
		}else{
			permissions.setValue("editDoc", ((access % 1024) >= 512).toString(), "permissionsRow");
		}
		permissions.setValue("deleteDoc", ((access % 2048) >= 1024).toString(), "permissionsRow");
		permissions.setValue("manageDoc", ((access % 32768) >= 16384).toString(), "permissionsRow");
		permissions.setValue("downloadDoc", ((access % 8) >= 4).toString(), "permissionsRow");
		permissions.setValue("browseDoc", ((access % 4) >= 2).toString(), "permissionsRow");
		docNodeListIndexChanged();
	}else if(justep.xbl('docNodeList').getCount() == 0){
		permissions.setValue("editDoc", 'false', "permissionsRow");
		permissions.setValue("deleteDoc",'false' , "permissionsRow");
		permissions.setValue("manageDoc", 'false', "permissionsRow");
		permissions.setValue("downloadDoc", 'false', "permissionsRow");
		permissions.setValue("browseDoc", 'false', "permissionsRow");
	}
}

function docNodeListIndexChanged(){
	if(!docAuthList){
		getDocAuthList();
	}
	var docNodeTree = justep.xbl("docNodeTree");
	var rowId = docNodeTree.getCurrentRowId();
	var isVirtualRoot = docNodeTree.getStore()._isVirtualRoot(rowId);
	var docNodeList = justep.xbl("docNodeList");
	var rowId = docNodeList.getCurrentRowId();
	var docPath = docNodeList.getValue("sDocPath", rowId);
	var docFullPath = justep.doc.InnerUtils.getDocFullPath(rowId, docPath);
	var access = getAccessBysDocPath(docFullPath , currentRootAccess);	
	var permissions = justep.xbl("permissions");
	permissions.setValue("newDoc", ((access % 512) >= 256).toString(), "permissionsRow");
	if(justep.Browser.hasTouch){
		permissions.setValue("editDoc", 'false', "permissionsRow");
	}else{
		permissions.setValue("editDoc", ((access % 1024) >= 512).toString(), "permissionsRow");
	}
	permissions.setValue("deleteDoc", ((access % 2048) >= 1024).toString(), "permissionsRow");
	if(!isVirtualRoot){
		permissions.setValue("manageDoc", ((access % 32768) >= 16384).toString(), "permissionsRow");
	}else{
		permissions.setValue("manageDoc", false, "permissionsRow");
	};
	permissions.setValue("downloadDoc", ((access % 8) >= 4).toString(), "permissionsRow");
	permissions.setValue("browseDoc", ((access % 4) >= 2).toString(), "permissionsRow");
}

function createAttachmentUploader(param){
	var docNodeTreeId = param.docNodeTreeId;
	var uploaderId =param.uploaderId;
	var uploadDocItemId = param.uploadDocItemId;
	var docMenuId = param.docMenuId;
	var uploader = param.uploader;
	var submitCallBack = param.submitCallBack;
	var docNodeTree = justep.xbl(docNodeTreeId);
	var uploaderJ = $('#'+uploaderId);
	var docPath = justep.doc.InnerUtils.getDocFullPath(docNodeTree.getCurrentRowId(), docNodeTree.getValue("sDocPath"));
	if (uploaderJ.length == 0){
		uploaderJ = $("<div/>").attr('id',uploaderId).css('position','absolute');
		$("#"+uploadDocItemId).before(uploaderJ);
	}
	try{
 		var host = justep.doc.InnerUtils.getdocServerAction(docPath, "/repository/file/cache/upload");
	}catch(e){
		alert("justep.doc.InnerUtils.getUploader.uploader.fileSelect：获取文档服务器host失败！");
		throw e;
	}
	if(host.indexOf("uploadDoc.j")!=-1){
		// 转调采用html4
		if(uploader.html4Uploader == null){
			if (justep.Browser.isInApp && justep.Browser.isIDevice) {
					var justepApp = justep.getJustepApp();
					var getUploadUrl = function() {
						var docUrl = host;
						if (docUrl.indexOf("uploadDoc.j") != -1
								&& docUrl.indexOf("#") == -1) {
							docUrl = window.location.protocol + "//"
									+ window.location.host + docUrl;
						}
						return docUrl;
					};
					var uploadCallback = function(response, fileName) {
						var file = $(response).find("file");
						var kind = $(file).attr("mediatype");
						var cacheName = $(file).attr("file-name");
						var size = $(file).attr("fileSize");
						submitCallBack.call(self, fileName, kind, size,
								cacheName);
					};
					justepApp.attachment.uploadAttachment(getUploadUrl,uploadCallback);
			} else {
				var completedCallback = function(docName,uploader,response){
					var file = $(response).find("file");
					var kind = $(file).attr("mediatype");
					var cacheName = $(file).attr("file-name");
					var size = $(file).attr("fileSize");
					submitCallBack.call(this,docName, kind, size, cacheName);
					uploader.disable();
					xforms(docMenuId).hide();
				};
				var uploadParam = {
					'uploaderDiv':uploaderId,
					'docPath':docPath,
					'completeCallBack':completedCallback,
					'caller':this
				};
				uploader.html4Uploader = justep.doc.InnerUtils.getHtml4Uploader(uploadParam);
				uploaderJ.css('height','27px');
				uploaderJ.css('width','100%');
				uploaderJ.css('z-index','1');
			}
		}else{
			uploader.html4Uploader.enable();
			uploader.html4Uploader.setDocPath(docPath);
		}
	}else if (host.indexOf("#")!=-1){
		throw "当前目录您没有上传权限";
	}else if(host.indexOf("http")==0){
		// 直连采用flash
		var completedCallback = function(docName, kind, size, cacheName, revisionCacheName, commentFileContent,createVersion){
			this.upload.call(this,docName, kind, size, cacheName, revisionCacheName, commentFileContent,createVersion);
			this.uploader.flashUploader.disable();
		};
		if(uploader.flashUploader == null){
			uploader.flashUploader = justep.doc.InnerUtils.getUploader(uploaderId, docPath, -1,  submitCallBack, function(){xforms(docMenuId).hide();}, 160, 27, 1, undefined, true);
			uploaderJ.css('height','27px');
			uploaderJ.css('width','100%');
		}else{
			uploader.flashUploader.enable();
			uploader.flashUploader.setDocPath(docPath);
		}
	}
}


function createUploadElement(){
	var param = {
			'docNodeTreeId':'docNodeTree',
			'uploaderId':'uploaderId',
			'uploadDocItemId':'uploadDocItem',
			'docMenuId':'newDocMenu',
			'uploader':this.uploader,
			'submitCallBack':this.upload
	};
	this.createAttachmentUploader(param);
}

function reUpload(docName, kind, size, cacheName, revisionCacheName){
	var docNodeList = justep.xbl("docNodeList");
	var docID = docNodeList.getCurrentRowId();
	var cacheInfo = justep.doc.InnerUtils.queryDocCache(docID);
	if(cacheInfo.isLockSuccess == "failure"){
		alert("该文件正在被别人编辑,请解锁后重新上传");
		return;
	}
	this.update(docName, kind, size, cacheName, revisionCacheName,Base64.encode(justep.Context.getCurrentPersonName()+"重新上传了此文件"),true);
}

function createReuploadElement(){
	var param = {
			'docNodeTreeId':'docNodeTree',
			'uploaderId':'reuploaderId',
			'uploadDocItemId':'reuploadDocItem',
			'docMenuId':'editDocMenu',
			'uploader':this.reuploader,
			'submitCallBack':this.reUpload
		};
		this.createAttachmentUploader(param);
}

function createTransportElement(containerID, objectID) {
	if (!document.getElementById(objectID)) {
		var transport = document.getElementById(containerID);
		transport.outerHTML = '<object id="'
				+ objectID
				+ '" classid="clsid:9E4A15C5-61F4-4EC7-9B5F-7DE2620629BB" style="width:100%"'
				+ 'codebase='
				+ justep.Request.convertURL("/UI/system/service/doc/transport/x5_file_mng.cab#version="+justep.doc._ocx_version,true) + ' style="display:none;" >'
				+ '</object>';
	}
}

function getdocNodeTreeGridImage(data) {
	return '/form/dhtmlx/dhtmlxGrid/imgs/folderClosed.gif';
}

function showNodeImg (event){
	return '/UI/SA/doc/docCenter/images/folder.gif';
}

function imageCellFun(aa) {
	if (aa.value == '') {
		return '';
	} else {
		return "√";
	}
}

function transB2KB(aa) {
	if (aa.value == '') {
		return;
	}
	var tempValue = aa.value;
	var resultValue = "";
	var tempValueStr = new String(tempValue);
	if ((tempValueStr.indexOf('E') != -1) || (tempValueStr.indexOf('e') != -1)) {
		var regExp = new RegExp('^((\\d+.?\\d+)[Ee]{1}(\\d+))$', 'ig');
		var result = regExp.exec(tempValue);
		var power = "";
		if (result != null) {
			resultValue = result[2];
			power = result[3];
			result = regExp.exec(tempValueStr);
		}
		if (resultValue != "") {
			if (power != "") {
				var powVer = Math.pow(10, power);
				resultValue = resultValue * powVer / 1000;
			}
		}
		return parseInt(resultValue) + 1;
	} else {
	   if (tempValue == 0)
	       return parseInt(tempValue) + ''; 	    
		return parseInt(tempValue / 1000) + 1;
	}
}

function setDocIndex(docID, docPath){
	var docNodeTree = justep.xbl("docNodeTree");
	docNodeTree.expandTreeByIdPath(docPath.substring(1));
	var docNodeList = justep.xbl("docNodeList");
	docNodeList.setIndex(docNodeList.getIndex(docID));
}

function addDocPerssion(docFullPath , access){
	var hasPerssion = false;
	for(var i=0 ; i<docAuthListArr.length; i++){
		var it = docAuthListArr[i];
		if(it.sDocPath.value == docFullPath){	
		    it.sAccess.value = access;
		    hasPerssion = true;
		    break;   
		}
	}
	
	if(!hasPerssion){
		var SA_DocAuth	= {changed:"0",originalValue:null,value:(new justep.UUID()).valueOf()};
		var sAccess	= {changed:"0",originalValue:null,value:access};
		var sAuthorizeeFID ={changed:"0",originalValue:null,value:justep.Context.getCurrentPersonMemberFID()};
		var sDocPath = {changed:"0",originalValue:null,value:docFullPath};
		var userdata = {recordState : null};
		docAuthListArr.push({"SA_DocAuth":SA_DocAuth,"sAccess":sAccess,"sAuthorizeeFID":sAuthorizeeFID,"sDocPath":sDocPath,"userdata":userdata});			
	}
	
}

function showRootIptChange(){
	var showRoot = $("#showRootIpt");
	var docNodeTree = justep.xbl("docNodeTree");
	if(showRoot.attr("checked") == true){
		docNodeTree.defTreeOption.option.virtualRootLabel = "文档中心";
		docNodeTree.refreshData();
		docNodeTree.expandRow(docNodeTree.getRowId());
		docNodeTree.first();
		docNodeTree.next();
		docNodeTreeIndexChanged();			
	}else{
		docNodeTree.defTreeOption.option.virtualRootLabel = "";
		docNodeTree.refreshData();
	}
	showRoot.blur();	
}
docCenter.docCenterModelLoad = function(event){
	var docTree = justep.xbl("docNodeTree");
	docTree.refreshData();			   
	docTree.expandRow(docTree.getID());
	docNodeTreeIndexChanged();
	var docID = justep.Context.getRequestParameter("docID");
	var docPath = justep.Context.getRequestParameter("docPath");
	if(docID && docPath){
		setDocIndex(docID, docPath);
	}
};

/**
	name:grid#onBeforeIndexChanged
	description: 当前行改变之前触发，通过return判断是否可以改变行
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":准备选中行的ID}
	@return {boolean} true: 允许行改变；false：禁止行改变；
*/
docCenter.docNodeTreeGridBeforeIndexChanged = function(event){
	xforms("newDocMenu").hide();
	xforms("editDocMenu").hide();
	return true;
};

// 调整ui新增代码
docCenter.trigger1Click = function(event){
	xforms("newDirMenu").show(event.srcElement || event.target);
};

//TODO:repalce
docCenter.trigger2Click = function(event){
	deleteDir();
};

docCenter.trigger3Click = function(event){
	showDirAttributeDialog();
};


docCenter.trigger4Click = function(event){
	showPermissionDialog("dir");
};


docCenter.showRootIptClick = function(event){
	showRootIptChange();
};

docCenter.trigger5Click = function(event){
	if (!(justep.Browser.isInApp && justep.Browser.isIDevice)) {
  		xforms("newDocMenu").show(event.srcElement || event.target);
    }
	createUploadElement();
};

docCenter.editDocTriggerClick = function(event){
	if (justep.Browser.isInApp) {
		alert('移动环境不支持在线编辑');
	}else{
		xforms("editDocMenu").show(event.srcElement || event.target);createReuploadElement();		
	}
};

docCenter.trigger6Click = function(event){
	deleteDoc();
};

docCenter.trigger7Click = function(event){
	showDocAttributeDialog();
};

docCenter.trigger8Click = function(event){
	showPermissionDialog("doc");
};

docCenter.trigger9Click = function(event){
	lockDoc();
};

docCenter.trigger10Click = function(event){
	unlockDoc();
};

docCenter.trigger11Click = function(event){
	downloadDoc();
};

docCenter.trigger12Click = function(event){
	browseDoc();
};

docCenter.trigger13Click = function(event){
	showDownloadHistoryRecordDialog();
};

docCenter.trigger14Click = function(event){
	showHistoryRecordDialog();
};


docCenter.menuitem1Click = function(event){
	deleteDir();
};

docCenter.menuitem2Click = function(event){
	showPermissionDialog("dir");
};


docCenter.docDeleteClick = function(event){
	deleteDoc();
};

docCenter.docAttrClick = function(event){
	showDocAttributeDialog();
};

docCenter.docPermissionClick = function(event){
	showPermissionDialog("doc");
};

docCenter.docLockClick = function(event){
	lockDoc();
};

docCenter.docUnlockClick = function(event){
	unlockDoc();
};

docCenter.docBrowseClick = function(event){
	browseDoc();
};
docCenter.menuitem11Click = function(event){
	showDownloadHistoryRecordDialog();
};

docCenter.menuitem12Click = function(event){
	showHistoryRecordDialog();
};

/**
	name:data#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
docCenter.permissionsValueChanged = function(event){
	//newDir,deleteDir,editDir,manageDir,downloadDir,newDoc,editDoc,deleteDoc,manageDoc,downloadDoc,browseDoc
	var permissions = justep.xbl("permissions");
	if(justep.xbl("dirMoreBtns")){
		justep.xbl("dirMoreBtns").setDisabled('manageDir', !(permissions.getValue("manageDir") == "true"));
		justep.xbl("dirMoreBtns").setDisabled('deleteDir', !(permissions.getValue("deleteDir")  == "true"));
		justep.xbl("docMoreBtns").setDisabled('editDoc', !(permissions.getValue("editDoc")  == "true"));
		
	}
	if(justep.xbl("docMoreBtns")){
		justep.xbl("docMoreBtns").setDisabled('unlockDoc', !(permissions.getValue("editDoc") == "true"));
		justep.xbl("docMoreBtns").setDisabled('lockDoc', !(permissions.getValue("editDoc") == "true"));
		justep.xbl("docMoreBtns").setDisabled('deleteDoc', !(permissions.getValue("deleteDoc") == "true"));
		justep.xbl("docMoreBtns").setDisabled('manageDoc', !(permissions.getValue("manageDoc") == "true"));
		justep.xbl("docMoreBtns").setDisabled('downloadDoc', !(permissions.getValue("downloadDoc") == "true"));
		justep.xbl("docMoreBtns").setDisabled('browseDoc', !(permissions.getValue("browseDoc") == "true"));
		justep.xbl("docMoreBtns").setDisabled('historyDoc', !(permissions.getValue("browseDoc") == "true"));
	}
	
	
};
