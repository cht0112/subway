justep.attachment = function(id,autoCreateVersion){
	this.autoCreateVersion=autoCreateVersion;
	this.changeLog = {items:[],autoCreateVersion:this.autoCreateVersion,createVersionLogs:[],"operate":"","url":"",process:justep.Context.getCurrentProcess(),activity:justep.Context.getCurrentActivity(),isHttps:justep.Doc.isHttps()};
	this.OVP = {
		id : id,
		username : justep.Context.getCurrentPersonName() + justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"" ,
		userInitials : justep.Context.getCurrentPersonName()
	};
};

justep.attachment.prototype.init = function(){
	var define = justep.Doc.queryDefine(this.process, this.activity, this.keyId ,true);
	if(define){
		if(define.rootPath){
			this.rootPath = define.rootPath;
		}
		if(define.subPath){
			this.subPath = define.subPath;
		}
		if(define.limitSize){
			this.limitSize = define.limitSize;
		}
		if(define.access){
			this.access = define.access;
		}
	}
};

justep.attachment.prototype.loadData = function(){
	if(this.ownerRelation || !this.ownerID){
		var data = justep.xbl(this.ownerData);
		if(!data) return;
		this.billID = this.ownerRelation?data.getValue(this.ownerRelation):data.getRowId();
	}else{
		var node = xforms.XPath.get(this.ownerID).evaluate(new xforms.ExprContext())[0];
	    this.billID = node? node.getValue(): null;
	}
	if(this.billID){
		this.getDoc();
		this.getDir();
		
	}
};

justep.attachment.prototype.ownerChanged = function(){
	var lastProcess = this.process;
	var lastAvtivity = this.activity;
	this.process = justep.Context.getCurrentProcess();
	this.activity = justep.Context.getCurrentActivity();
	if(this.activity !=lastAvtivity || this.process !=lastProcess ){
		this.init();
	}
	this.loadData();
};

justep.attachment.prototype.getDir = function(){
	var response = justep.Doc.queryLinkedDir(this.billID, this.process, this.activity, this.rootPath, this.subPath);
	var rows = justep.XML.eval0(response.responseXML, "//row[cell/@changed=1 or userdata[@name='is-linked']!='true']");
	for (var i = 0; i<rows.length; i++) {
		var row = rows[i];
		var cells = justep.XML.eval0(row, 'cell');
		if (justep.XML.getNodeText(cells[7]) == "false") {
			justep.Doc.addChangeLog(this.changeLog, "newDir", [row.getAttribute('id'), "0", "", "", justep.XML.getNodeText(cells[0]), "dir", "", justep.XML.getNodeText(cells[1]), justep.XML.getNodeText(cells[2]), justep.XML.getNodeText(cells[3]), "", "", "", "", ""], [], this.billID);
		}
	}
	
	var treeData = justep.xbl(this.attachmentTree);
	treeData.loadXML(response.responseXML, function(){
			treeData.getStore().expandAll();
			treeData.setIndex(treeData.getCount());			
		}, false, null);	
};

justep.attachment.prototype.getDoc = function(){
	var response = justep.Doc.queryLinkedDoc(this.billID,this.rootPath,this.subPath);
	justep.xbl(this.attachmentList).loadXML(response.responseXML, null, false, null);
};

justep.attachment.prototype.refreshDocData = function(){
	if (this.checkEvent("onRefreshDocClick")){
		var eventData = {
				'cancel' : false,
				'source' : this
		};
 		this.callEvent("onRefreshDocClick", [eventData]);
 		if (eventData.cancel)
			return;
	}
	this.getDoc();
	this.filterFile();
	//this.changeLog = justep.XML.fromString("<data/>");//TODO: 导致dir changeLog丢失							
	this.changeLog = {items:[],autoCreateVersion:this.autoCreateVersion,createVersionLogs:[],"operate":"","url":"",process:justep.Context.getCurrentProcess(),activity:justep.Context.getCurrentActivity(),isHttps:justep.Doc.isHttps()};
	this.refreshChangedStatus();
};

justep.attachment.prototype.refreshAllData = function(){
	if (this.checkEvent("onRefreshClick")){
		var eventData = {
				'cancel' : false,
				'source' : this
		};
 		this.callEvent("onRefreshClick",[eventData]);
 		if (eventData.cancel)
			return;
	}
	this.loadData();
};

justep.attachment.prototype.dirChanged = function(){
	this.filterFile();
	var access = this.access;

	justep.xbl(this.permissions).setValue("newDoc", ((access % 512) >= 256).toString(), "permissions");
};

justep.attachment.prototype.docChanged = function(){
	var access = this.access;
	var otherAccess = null;
	
	var permissions = justep.xbl(this.permissions);
	permissions.setValue("browseDoc", ((access % 4) >= 2).toString(), "permissions");
	permissions.setValue("downloadDoc", ((access % 8) >= 4).toString(), "permissions");
	permissions.setValue("deleteDoc", ((access % 2048) >= 1024).toString(), "permissions");
	permissions.setValue("editDoc", ((access % 1024) >= 512).toString(), "permissions");
};

justep.attachment.prototype.filterFile = function(){
	var tree = justep.xbl(this.attachmentTree);
	var path=tree.getValue('sDocPath');
	var id=tree.getCurrentRowId();
	id=id.substr(id.lastIndexOf(':')+1);
	var fullPath = justep.Doc.getDocFullPath(id, path);
	var grid = justep.xbl(this.attachmentList).getStore();
	/* 12: 第八列，对应sDocPath */
	grid.filterByPro(13,function(val){
		return val==fullPath;
	});
	if(grid.getRowsNum()>0 && grid.getIndex()!=0){
		grid.setIndex(0);
	}else{
		xforms.openAction();
		try{
			xforms.addChange(grid.instance.model);
			grid.instance.model.setRebuilded(true);
		}finally{
			xforms.closeAction();
		}
	}
};

justep.attachment.prototype.isChanged = function(){
	return (!!this.changeLog.items && this.changeLog.items.length>0);
};

justep.attachment.prototype.refreshChangedStatus = function(){
	if(this.isChanged() && this.ownerData){
		var ownerData = justep.xbl(this.ownerData);
		var rowId = ownerData.getCurrentRowId();
		if(!ownerData.isChanged())
			ownerData.setRowState(rowId, "edit");
		/* TODO：废弃原直接调用xform方式刺激主数据保存按钮，改用data上的方法
	
		var ownerData = justep.xbl(this.ownerData).getStore();
		var row = ownerData.rowsAr[ownerData.selectRowID];
		ownerData.setModify(row);
		xforms.openAction();
		xforms.addChange(ownerData.instance.model);
		xforms.closeAction();
		*/
	}
	justep.xbl(this.permissions).setValue("saveDoc", this.isChanged().toString(),"permissions");
};

justep.attachment.prototype.showDocAttributeDialog = function(){
	if(this.isChanged()){
		alert("修改文件属性前，请先保存数据");
		return;
	}
	if (this.checkEvent("onAttributeClick")){
		var eventData = {
				'cancel' : false,
				'data' : justep.xbl(this.attachmentList),
				'source' : this
		};
 		this.callEvent("onAttributeClick", [eventData]);
 		if (eventData.cancel)
			return;
	}
	var afterEnsureFun = function(event){
		var grid = justep.xbl(this.attachmentList);
		if(grid.isChanged()) {
			this.attributeChanged();
		}
		this.save();
	};
	justep.Doc.openDocInfoDialog(justep.xbl(this.attachmentList), afterEnsureFun, this);
};

justep.attachment.prototype.showHistoryRecordDialog = function(){	
	var grid = justep.xbl(this.attachmentList);
	var docID = grid.getCurrentRowId();
	var fileID = grid.getValue("sFileID", docID);
	if (this.checkEvent("onHistoryClick")){
		var eventData = {
				'cancel' : false,
				'data' : grid,
				'source' : this
		};
 		this.callEvent("onHistoryClick", [eventData]);
 		if (eventData.cancel)
			return;
	}
	justep.Doc.openDocHistoryDialog(docID, fileID, this.rootPath, this.access,this.notifyPrintEvent());
};

justep.attachment.prototype.officeHandler = function(event){
    if (!justep.Doc.checkOcx())
	   return;
	var item = event.getData().menuitem;
	if (this.checkEvent("onOfficeOperate")){
		var eventData = {
				'cancel' : false,
				'data' : item,
				'source' : this
		};
		this.callEvent("onOfficeOperate", [eventData]);
		if (eventData.cancel){
			return;
		}
	}
	this.OVP.host = this.rootPath;
	this.OVP.programID = item.program;
	this.OVP.filename = item.filename;
	this.OVP.isPrint = this.notifyPrintEvent();
	if (item.program == 'OpenOffice') {
		var grid = justep.xbl(this.attachmentList);
		var filename = grid.getValue("sDocName");
		this.OVP.fileID = grid.getValue("sFileID");
		this.OVP.fileExt = String(/\.[^\.]+$/.exec(filename));
		this.OVP.filename = filename.substr(0, filename.lastIndexOf('.'));
		if ('.doc.docx.xls.xlsx.ppt.mpp.vsd.'.indexOf(this.OVP.fileExt + '.') >= 0) {
			var rowid = grid.getCurrentRowId();
			var currentNode = justep.Doc.evalChangeLog(this.changeLog, rowid);
			if (currentNode != null) {
				var node;
				this.OVP.cacheName = !currentNode.cache_name ? "" : currentNode.cache_name;
				this.OVP.revisionCacheName = !currentNode.revision_cache_name ? "" : currentNode.revision_cache_name;
			}else if(grid.getValue('sFileID')){
				var docID = grid.getCurrentRowId();
				var cacheInfo =justep.Doc.queryDocCache(docID);
				if(cacheInfo.isLockSuccess=="success"||cacheInfo.isLockSuccess=="noNeedLock"){
					grid.setValue('sEditorFID',justep.Context.getCurrentPersonName());
					this.OVP.cacheName =cacheInfo.sCacheName;
					this.OVP.revisionCacheName = cacheInfo.sRevisionCacheName;
					this.lastOperation=cacheInfo.isLockSuccess;
				}else if(cacheInfo.isLockSuccess=="failure"){
					alert("该文件正在被别人编辑,您不能编辑，只能浏览最新版本");
					return;
				}
			}
			
			var afterEditOfficeDialogSelect = function(data){
				if (data != ''&&data.changes!='W10=') {
					this.lastOperation="noNeedLock";
					this.update(data.filename, data.mediatype, data.size, data.cacheName, data.revisionCacheName, data.changes,data.createVersion);
				}else{
					if(data != ''&&data.changes=='W10='&&data.createVersion){
						this.createVersion(docID, fileID, data.filename, docPath);
					}else if (this.lastOperation=="success") {
						justep.xbl(this.attachmentList).setValue('sEditorFID','');
						justep.Doc.unLockDoc(justep.xbl(this.attachmentList).getCurrentRowId());
					}
				}
			};
			justep.Doc.openOfficeDialog(this.OVP.id+"_docExtDiv", this.OVP.id+"_docExtObj", this.OVP ,afterEditOfficeDialogSelect, this);
		} else {
			alert("请选择Office文档记录！");
		}
	} else if (item.program == 'Template') {
		this.newOfficeFromTemplate();
	} else if (item.program != '-') {
		this.newOffice();
	}
};

justep.attachment.prototype.createVersion = function(docID, fileID, docName, docPath){
	if(fileID==''){
		return ;
	}
	if (this.checkEvent("onCreateVersion")){
		var eventData = {
				'cancel' : false,
				'data' : {'docID' : docID, 'fileID' : fileID, 'docName' : docName,'docPath' : docPath},
				'source' : this
		};
 		this.callEvent("onCreateVersion", [eventData]);
 		if (eventData.cancel)
			return;
	}
	
	var currentNode = justep.Doc.evalChangeLog(this.changeLog, docID);
	if (currentNode != null) {
		justep.Doc.removeChangeLog(this.changeLog,docID);
	}
	var createSucess =justep.Doc.createVersion(docID);
	if(createSucess=="success"){
		var data = justep.xbl(this.attachmentList);
		data.setValue('sEditorFID','');
		data.setValue('sEditorDeptName','');
		data.setValue('sEditorName','');
	}else if(createSucess=="failure"){
		alert('成文失败');
	}else if(createSucess=="lockFailure"){
		alert('您没有新修改的内容，不能成文');
	//TODO:管理员手动解锁造成的情况	
	}else if(createSucess=="commitCacheFailure"){
		alert('您没有新修改的内容，不能成文');
	}else{
		throw "成文异常,不支持的返回状态";
	}
};


justep.attachment.prototype.getTemplate = function(){
	if(!this.officeTemplates) 
	    this.officeTemplates = new Array();
	var define = justep.Doc.queryDefine(this.process, this.activity,this.keyId);
	this.officeTemplates = define.docTemplate;
};

justep.attachment.prototype.newOfficeFromTemplate = function(){
	this.getTemplate();		
	if (this.checkEvent("onNewFromTemplate")){
		var eventData = {
				'cancel' : false,
				'data' : this.officeTemplates,
				'source' : this
		};
 		this.callEvent("onNewFromTemplate", [eventData]);
 		if (eventData.cancel)
			return;
	}
	this.OVP.showField  = true;
	if(this.officeTemplates.length == 1){
		var cell = this.officeTemplates[0];
		var templateDocName = cell.sDocName; 
		this.OVP.templateHost = cell.sDocPath;
		this.OVP.templateID =  cell.sFileId;
		this.OVP.templateExt = String(/\.[^\.]+$/.exec(templateDocName));
		this.OVP.filename = templateDocName.substr(0, templateDocName.lastIndexOf('.'));
		this.newOffice();
	}else if(this.officeTemplates.length > 0){
		var afterTemplateDialogSelect = function(event){
			var templateDocName = event.data.templateDocName;
			this.OVP.templateHost = event.data.templateHost;
			this.OVP.templateID = event.data.templateFileID;
			this.OVP.templateExt = String(/\.[^\.]+$/.exec(templateDocName));
			this.OVP.filename = templateDocName.substr(0, templateDocName.lastIndexOf('.'));
			this.newOffice();
		};
		justep.Doc.openDocTemplateDialog(this.officeTemplates ,afterTemplateDialogSelect, this);
	}else{
		alert("请正确设置模板！");
	}
};

justep.attachment.prototype.newOffice = function(){
	var afterNewOfficeDialogSelect = function(data){
		if(data!=''){
			this.upload(data.filename, data.mediatype, data.size, data.cacheName, data.revisionCacheName, data.changes);
		}
		
	};
	justep.Doc.openOfficeDialog(this.OVP.id+"_docExtDiv", this.OVP.id+"_docExtObj", this.OVP ,afterNewOfficeDialogSelect, this);
};

justep.attachment.prototype.upload = function(docName, kind, size, cacheName, revisionCacheName, changes){
	var tree = justep.xbl(this.attachmentTree);
	var parentID = tree.getCurrentRowId();
	var docPath = justep.Doc.getDocFullPath(parentID, tree.getValue("sDocPath"));
	var displayPath = justep.Doc.getDocFullDisplayPath(tree.getValue("sDocName"), tree.getValue("sDocDisplayPath"));
	var list = justep.xbl(this.attachmentList);
	var docID = (new justep.UUID()).valueOf();
	list.insert(docID,0);
	list.setValue("sDocName",docName);
	list.setValue("sSize",size);
	list.setValue("sCreatorName",justep.Context.getCurrentPersonName());
	list.setValue("sCreateTime",justep.System.datetimeString());
	list.setValue("sLastWriterName",justep.Context.getCurrentPersonName());
	list.setValue("sLastWriteTime",justep.System.datetimeString());
	list.setValue("sParentID",parentID);
	list.setValue("sDocPath",docPath);
	list.setValue("sDocDisplayPath",displayPath);
	justep.Doc.addChangeLog(this.changeLog, "new", [docID, "0", "", "", docName, kind, size, parentID, docPath, displayPath, "", "", "", "", ""], ["attachment",cacheName, revisionCacheName, changes], this.billID);
	this.refreshChangedStatus();
};

justep.attachment.prototype.update = function(docName, kind, size, cacheName, revisionCacheName, commentFileContent,createVersion){
	var list = justep.xbl(this.attachmentList);
	list.setValue("sDocName",docName);
	list.setValue("sKind",kind);
	list.setValue("sSize",size);
	list.setValue("sLastWriterName",justep.Context.getCurrentPersonName());
	list.setValue("sLastWriteTime",justep.System.datetimeString());
	this.attributeChanged(cacheName, revisionCacheName, commentFileContent,createVersion);
};

justep.attachment.prototype.attributeChanged = function(cacheName, revisionCacheName, commentFileContent,createVersion) {
	var list = justep.xbl(this.attachmentList);
	var rowid = list.getCurrentRowId();
	var version = list.getValue("version");
	var fileID = list.getValue("sFileID");
	var docVersionID = list.getValue("sDocLiveVersionID");
	var docName = list.getValue("sDocName");
	var kind = list.getValue("sKind");
	var size = list.getValue("sSize");
	var parentID = list.getValue("sParentID");
	var docPath = list.getValue("sDocPath");
	var displayPath = list.getValue("sDocDisplayPath");
	var description = list.getValue("sDescription");
	var classification = list.getValue("sClassification"); 
	var keywords = list.getValue("sKeywords"); 
	var finishTime = list.getValue("sFinishTime"); 
	var serialNumber = list.getValue("sDocSerialNumber");
	
	var items = this.changeLog.items;
	var index = -1;
	for(var i = 0 ; i<items.length ; i++ ){
		if(items[i].doc_id==rowid){
			index = i;
			break;
		}
	};
	if(index>=0){
		var it = this.changeLog.items[index];
		var filePorps = ["attachment", cacheName, revisionCacheName, commentFileContent];
		if(!cacheName){
			version = it.version;
			kind = it.kind;
			filePorps = [it.doc_type,it.cache_name,it.revision_cache_name,it.comment_file_content];
		}
		justep.Doc.modifyChangeLog(it, [version, fileID, docVersionID, docName, kind, size, parentID, docPath, displayPath, 
		                                  description, classification, keywords, finishTime, serialNumber,!cacheName?"edit":null], filePorps );		
	}else{		
		justep.Doc.addChangeLog(this.changeLog, !cacheName?"editInfo":"edit", [rowid, version, fileID, docVersionID, docName, kind, size, parentID, docPath, displayPath, 
		                                                 description, classification, keywords, finishTime, serialNumber], ["attachment", cacheName, revisionCacheName, commentFileContent],this.billID);
	}
	
	//TODO:修改 sa_docnode表的scachename和srevisioncachename的值，放到officeviewerDialog控件里面做
	if(fileID&&cacheName){
		justep.Doc.commitDocCache(rowid,this.changeLog);
	}
	
	if(createVersion&&fileID){
		this.createVersion(rowid, fileID, docName, docPath);
	}
	this.refreshChangedStatus();
	
};

justep.attachment.prototype.deleteDoc = function() {
	if(!confirm('是否删除数据？')){
		return;
	}
	var list = justep.xbl(this.attachmentList);
	var rowid = list.getCurrentRowId();
	var docPath =list.getValue('sDocPath');
	if (this.checkEvent("onDeleteClick")){
		var eventData = {
				'cancel' : false,
				'data' : list,
				'source' : this
		};
 		this.callEvent("onDeleteClick", [eventData]);
 		if (eventData.cancel)
			return;
    }
	
	var items = this.changeLog.items;
	var isExist = false;
	for(var item in items){
		if(items[item].doc_id==rowid){
			this.changeLog.items.pop(items[item]);
			isExist = true;
		}	
	}
	if(!isExist){		
		var version = list.getValue("version");
		justep.Doc.addChangeLog(this.changeLog, "delete", [rowid, version,,,,,,,docPath], [], this.billID);
	}
	list.deleteData();
	this.refreshChangedStatus();
};
						
justep.attachment.prototype.downloadDoc = function() {	
	var list = justep.xbl(this.attachmentList);
	var fileID = list.getValue("sFileID");
	if (this.checkEvent("onDownloadClick")){
		var eventData = {
				'cancel' : false,
				'data' : list,
				'source' : this
		};
 		this.callEvent("onDownloadClick", [eventData]);
 		if (eventData.cancel)
			return;
	}
	justep.Doc.downloadDocByFileID(this.rootPath, fileID);
};
			
justep.attachment.prototype.browseDoc = function() {
	if (this.checkEvent("onBrowseDocClick")){
		var eventData = {
				'cancel' : false,
				'data' : justep.xbl(this.attachmentList),
				'source' : this
		};
 		this.callEvent("onBrowseDocClick", [eventData]);
 		if (eventData.cancel)
			return;
	}	
    if (!justep.Doc.checkOcx())
	   return;
	var list = justep.xbl(this.attachmentList);
	var filename = list.getValue('sDocName');
	var fileID = list.getValue("sFileID");
	justep.Doc.browseDocByFileID(this.rootPath, filename, fileID, "last", "content", 'OpenOffice',this.notifyPrintEvent());
};

justep.attachment.prototype.notifyPrintEvent = function(){
	var result = _office_isPrint;
	if (this.checkEvent("onGetIsPrint")){
		var eventData = {
				'source' : this,
				'isPrint' : _office_isPrint
		};
 		this.callEvent("onGetIsPrint", [eventData]);
 		result = eventData.isPrint ;			
	}
	return result;
};

justep.attachment.prototype.save = function() {
	if (this.checkEvent("onSaveClick")){
		var eventData = {
				'cancel' : false,
				'source' : this
			};
 		this.callEvent("onSaveClick", [eventData]);
 		if (eventData.cancel)
			return;
	}
	if(!this.isChanged()&&!this.autoCreateVersion){
		return;
	}
	//TODO:成文
	if(this.autoCreateVersion){
		var data = justep.xbl(this.ownerData);
		var changedIDs =data.getChangedIDList('edit');
		if(changedIDs.length>0){
			this.changeLog.changedBillIDs=changedIDs.join(',');
		}
	}
	justep.Doc.saveDoc(this.changeLog,true);
	this.changeLog = {items:[],autoCreateVersion:this.autoCreateVersion,createVersionLogs:[],"operate":"","url":"",process:justep.Context.getCurrentProcess(),activity:justep.Context.getCurrentActivity(),isHttps:justep.Doc.isHttps()};
	this.refreshChangedStatus();
};


justep.attachment.prototype.createVersionBatch = function(changedIDs) {
	var isHttps = justep.Doc.isHttps();
    var sendParam = new justep.Request.ActionParam();
	sendParam.setBoolean('isHttps', isHttps);
	sendParam.setList('billIDs', changedIDs);
	
	sendParam.setList('process', justep.Context.getCurrentProcess());
	sendParam.setList('activity', justep.Context.getCurrentActivity());
	response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "createVersionBatchAction", sendParam, null, null, true);
	if(justep.Request.isBizSuccess(response)){
		return response;
	}else{
		throw new Error("juestp.Doc.createVersionBatch失败！");
	}
}

justep.attachment.prototype.loadButtonElements = function() {
	var displayButtons = justep.xbl(this.displayButtons);
	for(var item in this.buttons){
		try{
			displayButtons.setValue(item, this.buttons[item].toString(), "displayButtons");
		}finally{
			continue;
		}
	}
};



justep.attachment.prototype.createUploadElement = function() {
	if(this.extensionFilter){
		var filter = this.transformExtensionFilter(this.extensionFilter);
	}
	var docPath = this.subPath?this.rootPath+"/"+this.subPath :this.rootPath;
	
	var uploadDocItem = document.getElementById(this._id + "_uploadDocItem");
	if(uploadDocItem ==null){
		justep.xbl(this._id + "_newDocMenuXbl").refreshMenu(); 
		uploadDocItem = document.getElementById(this._id + "_uploadDocItem");
	}
	var uploaderId =  this._id + "_uploadDocItemDiv";
	var uploaderJ = $('#'+uploaderId);
	if (uploaderJ.length == 0){
		uploaderJ = $("<div/>").attr('id',uploaderId).css('position','absolute');
		$(uploadDocItem).before(uploaderJ);
	}
	if(this.runtime=="flash"){
		var ClickCallback = function(event){
			var self = this;
			if (self.checkEvent("onUploadClick")){
				var eventData = {
						'cancel' : false,
						'source' : this
				};
	 		    self.callEvent("onUploadClick", [eventData]);
	 		    if (eventData.cancel)
					return;
		    }
		    xforms(this._id+"_newDocMenu").hide();
		};
		
		var selectedCallback = function(fileList,uploader){
			var self = this;
			if (self.checkEvent("onFileSelected")){
				var eventData = {
						'cancel' : false,
						'source' : this,
						'fileList':fileList,
						'uploader':uploader
				};
	 		   self.callEvent("onFileSelected", [eventData]);
	 		   if(eventData.cancel){
	 			  return true;
	 		   }
		    }
		};
		
		var completedCallback = function(fileList,uploader){
			var self = this;
			if (self.checkEvent("onUploadCompleted")){
				var eventData = {
						'source' : this,
						'fileList':fileList,
						'uploader':uploader
				};
	 		   self.callEvent("onUploadCompleted", [eventData]);
		    }
		};
		var param ={
				'containerID':uploaderId,
				'docPath':docPath,
				'limitSize':this.limitSize,
				'uploadResponse':this.upload,
				'click':ClickCallback,
				'width':160,
				'height':27,
				'zIndex':1,
				'filter':filter,
				'multiFiles':true,
				'caller':this,
				'selectedCallback':selectedCallback,
				'completedCallback':completedCallback
		};
		this.uploader = justep.Doc.getFlashUploader(param);
	}else if(this.runtime == "html4"){
		var completedCallback = function(docName,uploader,response){
			var file = $(response).find("file");
			var kind = $(file).attr("mediatype");
			var cacheName = $(file).attr("file-name");
			var size = $(file).attr("fileSize");
			this.upload(docName, kind, size, cacheName);
			xforms(this._id+"_newDocMenu").hide();
		};
		var uploadParam = {
			'uploaderDiv':uploaderId,
			'docPath':docPath,
			'completeCallBack':completedCallback,
			'caller':this,
			'filter':filter
		};
		this.uploader = justep.Doc.getHtml4Uploader(uploadParam);
		var uploadDocItemDivJ = $('#'+this._id + "_uploadDocItemDiv");
		uploadDocItemDivJ.css('height','27px');
		uploadDocItemDivJ.css('width','100%');
		uploadDocItemDivJ.css('z-index','1');
	}
};

justep.attachment.prototype.transformExtensionFilter = function(extensionFilter){
	if(this.runtime == "flash"){
		var filter = [];
		extensionFilter = extensionFilter.split(",");
		for(var i=0; i < extensionFilter.length; i++){
			var item = extensionFilter[i].split("|");
			filter.push({description:jQuery.trim(item[0]), extensions:jQuery.trim(item[1])});
		}
		return filter;
	}else if(this.runtime == "html4"){
		var filter = new Array();
		extensionFilter = extensionFilter.split(",");
		for(var i=0; i < extensionFilter.length; i++){
			var item = extensionFilter[i].split("|");
			var miniType = jQuery.trim(item[1]).replace(new RegExp('\\*\\.','gm'),'');
			miniType = miniType.replace(new RegExp(';','gm'),'|');
			filter.push(miniType);
		}
		return filter.join('|');
	}
};

justep.attachment.prototype.setAutoLoad = function(flag) {
	this.autoLoad = flag;
	justep.xbl(this.permissions).setValue("saveDoc", this.isChanged().toString(),"permissions");
	if (flag){
		if(this.isLogined) return;
		this.init();
		var data = justep.xbl(this.ownerData);
		if(data.getCount()>0) this.loadData();
		this.attachStoreEvent();
		this.isLogined = true ;
	}
};

justep.attachment.prototype.refresh = function() {
    this.setAutoLoad(true);
};

justep.attachment.prototype.attachStoreEvent = function(){
	var data = justep.xbl(this.ownerData);
	if(data){
		var recallback = function(event){
			if(!this.autoLoad) return;
			var self = this;			
			window.setTimeout(function(){
				self.ownerChanged();},200);
		};
		
		data.attachEvent(justep.XData.EVENT_REFRESHPAGEDATA_AFTER, recallback, this);
		data.attachEvent(justep.XData.EVENT_REFRESHDATA_AFTER, recallback, this);
		data.attachEvent(justep.XData.EVENT_INDEX_CHANGED, recallback, this);
		
		var afterSaveCallback = function(event){
			var self = this;
			self.save();
		};
		data.attachEvent(justep.XData.EVENT_SAVEDATA_AFTER, afterSaveCallback , this);
		
	}
};

justep.attachment.prototype.getAttachmentData = function() {
	return justep.xbl(this.attchmentList);
};

justep.attachment.prototype.setAttachmentPermission = function(access) {
	var permissions = justep.xbl(this.permissions);	
	permissions.setValue("browseDoc", ((access % 4) >= 2).toString(), "permissions");
	permissions.setValue("downloadDoc", ((access % 8) >= 4).toString(), "permissions");
	permissions.setValue("deleteDoc", ((access % 2048) >= 1024).toString(), "permissions");
	permissions.setValue("editDoc", ((access % 1024) >= 512).toString(), "permissions");
	permissions.setValue("newDoc", ((access % 512) >= 256).toString(), "permissions");
};

justep.attachment.prototype.setExtensionFilter = function(extensionFilter){
	this.extensionFilter = extensionFilter;
	this.createUploadElement();
};

justep.attachment.prototype.getImage = function() {
    return '/form/dhtmlx/dhtmlxGrid/imgs/folderClosed.gif';	
};

justep.attachment.prototype.onAfterTreeIndexChanged = function(){
	this.dirChanged();
};

justep.attachment.prototype.onAfterListIndexChanged = function(){
	this.docChanged();
};

justep.attachment.prototype.onListRowDblClick = function(){
	if(this.access % 4 >= 2)
		this.browseDoc();
};

justep.attachment.prototype.attachGridEvent = function(){
	justep.xbl(this.treeGrid).attachEvent("onAfterIndexChanged", this.onAfterTreeIndexChanged, this);
	justep.xbl(this.listGrid).grid.attachEvent("onRowDblClicked", this.onListRowDblClick, this);
	justep.xbl(this.listGrid).attachEvent("onAfterIndexChanged", this.onAfterListIndexChanged, this);
	justep.xbl(this.attachmentList).attachEvent(justep.XData.EVENT_REFRESHDATA_AFTER, this.onAfterListIndexChanged, this);
};

justep.attachment.prototype.setDisplayButtons = function(buttons){
	var displayButtons = justep.xbl(this.displayButtons);
	for(var item in buttons){
		try{
			displayButtons.setValue(item, buttons[item].toString(), "displayButtons");
			this.buttons[item]=buttons[item];
		}finally{
			continue;
		}
	}
};

justep.attachment.prototype.getDisplayButtons = function(buttons){
    return this.buttons;	
};

justep.attachment.prototype.addEvents = function(){
    this.__onCreate = this.domNode.getAttribute("onCreate")? justep.Function.get(this.domNode.getAttribute("onCreate")):null;
	if(this.__onCreate && typeof this.__onCreate =="function"){
		this.attachEvent("onCreate", this.__onCreate, this);
	}
	this.__onNewFromTemplate = this.domNode.getAttribute("onNewFromTemplate")? justep.Function.get(this.domNode.getAttribute("onNewFromTemplate")):null;
	if(this.__onNewFromTemplate && typeof this.__onNewFromTemplate =="function"){
		this.attachEvent("onNewFromTemplate", this.__onNewFromTemplate, this);
	}
	this.__onUploadClick = this.domNode.getAttribute("onUploadClick")? justep.Function.get(this.domNode.getAttribute("onUploadClick")):null;
	if(this.__onUploadClick && typeof this.__onUploadClick =="function"){
		this.attachEvent("onUploadClick", this.__onUploadClick, this);
	}
	this.__onReUploadClick = this.domNode.getAttribute("onReUploadClick")? justep.Function.get(this.domNode.getAttribute("onReUploadClick")):null;
	if(this.__onReUploadClick && typeof this.__onReUploadClick =="function"){
		this.attachEvent("onReUploadClick", this.__onReUploadClick, this);
	}
	this.__onFileSelected = this.domNode.getAttribute("onFileSelected")? justep.Function.get(this.domNode.getAttribute("onFileSelected")):null;
	if(this.__onFileSelected && typeof this.__onFileSelected =="function"){
		this.attachEvent("onFileSelected", this.__onFileSelected, this);
	}
	this.__onUploadCompleted = this.domNode.getAttribute("onUploadCompleted")? justep.Function.get(this.domNode.getAttribute("onUploadCompleted")):null;
	if(this.__onUploadCompleted && typeof this.__onUploadCompleted =="function"){
		this.attachEvent("onUploadCompleted", this.__onUploadCompleted, this);
	}
	this.__onOfficeOperate = this.domNode.getAttribute("onOfficeOperate")? justep.Function.get(this.domNode.getAttribute("onOfficeOperate")):null;
	if(this.__onOfficeOperate && typeof this.__onOfficeOperate =="function"){
		this.attachEvent("onOfficeOperate", this.__onOfficeOperate, this);
	}
	this.__onDeleteClick = this.domNode.getAttribute("onDeleteClick")? justep.Function.get(this.domNode.getAttribute("onDeleteClick")):null;
	if(this.__onDeleteClick && typeof this.__onDeleteClick =="function"){
		this.attachEvent("onDeleteClick", this.__onDeleteClick, this);
	}
	this.__onAttributeClick = this.domNode.getAttribute("onAttributeClick")? justep.Function.get(this.domNode.getAttribute("onAttributeClick")):null;
	if(this.__onAttributeClick && typeof this.__onAttributeClick =="function"){
		this.attachEvent("onAttributeClick", this.__onAttributeClick, this);
	}
	this.__onSaveClick = this.domNode.getAttribute("onSaveClick")? justep.Function.get(this.domNode.getAttribute("onSaveClick")):null;
	if(this.__onSaveClick && typeof this.__onSaveClick =="function"){
		this.attachEvent("onSaveClick", this.__onSaveClick, this);
	}
	this.__onDownloadClick = this.domNode.getAttribute("onDownloadClick")? justep.Function.get(this.domNode.getAttribute("onDownloadClick")):null;
	if(this.__onDownloadClick && typeof this.__onDownloadClick =="function"){
		this.attachEvent("onDownloadClick", this.__onDownloadClick, this);
	}
	this.__onBrowseDocClick = this.domNode.getAttribute("onBrowseDocClick")? justep.Function.get(this.domNode.getAttribute("onBrowseDocClick")):null;
	if(this.__onBrowseDocClick && typeof this.__onBrowseDocClick =="function"){
		this.attachEvent("onBrowseDocClick", this.__onBrowseDocClick, this);
	}
	this.__onHistoryClick = this.domNode.getAttribute("onHistoryClick")? justep.Function.get(this.domNode.getAttribute("onHistoryClick")):null;
	if(this.__onHistoryClick && typeof this.__onHistoryClick =="function"){
		this.attachEvent("onHistoryClick", this.__onHistoryClick, this);
	}
	this.__onRefreshDocClick = this.domNode.getAttribute("onRefreshDocClick")? justep.Function.get(this.domNode.getAttribute("onRefreshDocClick")):null;
	if(this.__onRefreshDocClick && typeof this.__onRefreshDocClick =="function"){
		this.attachEvent("onRefreshDocClick", this.__onRefreshDocClick, this);
	}
	this.__onRefreshClick = this.domNode.getAttribute("onRefreshClick")? justep.Function.get(this.domNode.getAttribute("onRefreshClick")):null;
	if(this.__onRefreshClick && typeof this.__onRefreshClick =="function"){
		this.attachEvent("onRefreshClick", this.__onRefreshClick, this);
	}
	this.__onGetIsPrint = this.domNode.getAttribute("onGetIsPrint")? justep.Function.get(this.domNode.getAttribute("onGetIsPrint")):null;
	if(this.__onGetIsPrint && typeof this.__onGetIsPrint =="function"){
		this.attachEvent("onGetIsPrint", this.__onGetIsPrint, this);
	}
	if (this.checkEvent("onCreate")){
 		this.callEvent("onCreate", [{'source' : this}]);
	}
};

function imageCellFun(aa) {
	if (aa.value == '') {
		return '&#160;';
	} else {
		return "<img alt='正在编辑' src='"
				+ justep.Request.convertURL("UI/system/images/doc/editing.gif",true)
				+ "'/>";
	}
}
