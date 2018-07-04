var officeEditorDialog = {};
officeEditorDialog.noChange = 'W10=';

window.isSaved = false;
window.isCreateVersion = false;
window.onbeforeunload =  function(){
	if(!window.isCreateVersion){
		//点击关闭按钮时候
		if(!window.isSaved){
			var data ={
				changes: officeEditorDialog.noChange,	
				type : "officeAction"
			};
			justep.xbl('attachmentEditor2Receiver').sendData(data);
			//window.modalReceiver.sendMessage(data);
		}
		return "请检查文件是否已经保存/成文,如果有未保存的数据会丢失的!";
	}
};

$(window).resize(function() {
	if($.browser.version != "6.0" && $.browser.version != "7.0"){
		$('#ov').width($('#ovParent').width());
		$('#ov').height($('#ovParent').height());
	}
});

/*$(function(){
	$('body').bind('modalReceiveData',function(event,data){
		var officeEditor = new OfficeEditor(data);
		officeEditorDialog.officeEditor = officeEditor;
		officeEditor.init();
	});
});
function test(){
	//var data = {"host":"/defaultDocNameSpace","userName":"system","userInitials":"system","programID":"OpenOffice","showField":false,"fileID":"","filename":"数据库切分技术方案比较","fileExt":".docx","isPrint":true,"cacheName":"464-DOC","revisionCacheName":"464-DOC"}
	var data = {"host":"/defaultDocNameSpace","userName":"system","userInitials":"system","programID":"OpenOffice","showField":false,"fileID":"27-defaultDocNameSpace","filename":"spring","fileExt":".docx","isPrint":true,"cacheName":"","revisionCacheName":""};
	var officeEditor = new OfficeEditor(JSON.stringify(data));
	officeEditorDialog.officeEditor = officeEditor;
	officeEditor.init();
}
*/
var OfficeEditor = function(data){
	this.OVP = data;
	this.OVP.filename = decodeURI(this.OVP.filename);
	this.OVP.saving = false;
	this.OVP.isModified = false;
	this.OVP.state = (this.OVP.programID != "OpenOffice") && (this.OVP.programID != "Template") ? "new" : "edit";
	this.OVP.showSeal = justep.doc._seal_default_show2 ? true : this.OVP.showSeal;
	$("#fileName").val(this.OVP.filename);
};

OfficeEditor.prototype = {
	init:function(){
		$OV2('ov').CreateOfficeViewer('100%', '100%');
		if($.browser.version == "6.0" || $.browser.version == "7.0"){
			$('#toolbars1').css('position','static');
			$('#ov').height($('#ov').height()-55);
		}
		if(this.OVP.programID == "OpenOffice"){
			this.openOffice();
		}else if(this.OVP.programID == "Template"){
			this.openTemplate();
		}else if(this.OVP.programID != "-"){
			this.createOffice();
		}
		if(this.OVP.programID.indexOf('Application')!= -1 || this.OVP.programID == "Template"){
    		$('#docSave').hide();
    	}
		if($.browser.msie && this.OVP.programID == "OpenOffice" && this.OVP.showSeal){
			//TODO:签章能力，仅在ie环境 ，并且文档服务配置为直连的方式才可以
			this.renderSealArea();
		}else if(!$.browser.msie && this.OVP.showSeal){
			$('#saveTip').find('span').text('签章能力仅在IE浏览器下支持').end().fadeIn(2000,function(){$(this).fadeOut(1000,function(){
				$('#saveTip').text('保存成功');
			})});
		}
		justep.xbl('attachmentEditor2Receiver').sendData({type:"officeLoaded"});
	},
	getUrl:function(docPath,fileID,resultID){
		var u="";
    	if(fileID){
    		u =justep.doc.InnerUtils.getdocServerAction(docPath, "/repository/file/cache/office/"+fileID);
    	}else if(resultID){
    		u = justep.doc.InnerUtils.getdocServerAction(docPath, "/repository/resultInfo/" + resultID);
    	}else{
    		u = justep.doc.InnerUtils.getdocServerAction(docPath, "/repository/file/cache/office/new");
    	}
		this.docUrl = u.indexOf(window.location.protocol) < 1 ? u : window.location.protocol+"//"+ window.location.host + u;
		return this.docUrl;
	},
	openOffice:function(){
		var OVObj = $OV2("ov");
		//编辑逻辑
		this.OVP.isModified = !(this.OVP.cacheName == "" || OV2.isClear(this.OVP.cacheName));
		if (this.OVP.isModified) {
			OVObj.HttpInit();
			var fileID = this.OVP.fileID;
			var partType = "content";
			if(this.OVP.revisionCacheName){
				fileID = this.OVP.revisionCacheName;
				partType = "revision";
			}else if(this.OVP.cacheName){
				fileID = this.OVP.cacheName;
			}
			OVObj.HttpAddPostString("FileID",fileID);
			OVObj.HttpAddPostString("FileExt",this.OVP.fileExt);
			OVObj.HttpAddPostString("PartType",partType);
			OVObj.HttpOpenFileFromStream(this.getUrl(this.OVP.host),OVObj.GetProgIDByDocType(this.OVP.fileExt));
			var errorCode = OVObj.GetErrorCode();
			if(errorCode!= 0){
				alert(new justep.Message(justep.Message.JUSTEP232092).getMessage());
			}
			if (OVObj.IsWordOpened()) {
				OVObj.WordRevisionInit(false, this.OVP.userName, this.OVP.userInitials);
			}
		} else {
			OVObj.HttpInit();
			OVObj.HttpAddPostString("FileID", this.OVP.fileID);
			OVObj.HttpAddPostString("FileExt", this.OVP.fileExt);
			//TODO:_word_all_history2 不推荐采用全局变量  这个特性暂时没人用,需要重构成组件属性
			if (justep.doc._word_all_history2){
				var fileinfo = justep.doc.InnerUtils.queryDocByFileId(this.OVP.host,this.OVP.fileID ,this.OVP.filename);
				//TODO: part_3 逻辑已经过时
				var partType = !fileinfo.parts.part_3 ? "content" : "revision";
				OVObj.HttpAddPostString("PartType", partType);	
			}
			OVObj.HttpOpenFileFromStream(this.getUrl(this.OVP.host),OVObj.GetProgIDByDocType(this.OVP.fileExt));
			var errorCode = OVObj.GetErrorCode();
			if(errorCode!= 0){
				alert(new justep.Message(justep.Message.JUSTEP232092).getMessage());
			}
			if (OVObj.IsWordOpened()) {
				OVObj.WordRevisionInit(!justep.doc._word_all_history2, this.OVP.userName, this.OVP.userInitials);
			}
		}
	},
	openTemplate:function(){
		var OVObj = $OV2("ov");
		//从模版新建
		OVObj.HttpInit();
		OVObj.HttpAddPostString("FileID", this.OVP.templateID);
		OVObj.HttpAddPostString("FileExt", this.OVP.templateExt);
		OVObj.HttpOpenFileFromStream(this.getUrl(this.OVP.templateHost),OVObj.GetProgIDByDocType(this.OVP.templateExt));
		var errorCode = OVObj.GetErrorCode();
		if(errorCode!= 0){
			alert(new justep.Message(justep.Message.JUSTEP232092).getMessage());
		}
		if (OVObj.IsWordOpened()) {
			OVObj.WordRevisionInit(true, this.OVP.userName, this.OVP.userInitials);
		}
	},
	renderSealArea: function() {
		$('#toogleSeal').show();
		$('#toogleSeal').toggle(function(){
			$('#ovParent').width('80%');
			$('#slider').show();
		},function(){
			$('#ovParent').width('100%');
			$('#slider').hide();
		});
		var self = this;
		//TODO: 签章权限应该走数据权限,所以这块从文档中心读取权限的代码不抽取到docUtils.js中
		function getDocAuthList(){
			var docAuthList = justep.doc.InnerUtils.getDocAuthList();
			var docAuthListArr = {};
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
			self.docAuthListArr = docAuthListArr;
		}
            
        function getAccessBysDocPath(docFullPath){
				var access = 1;	
				for(var item in self.docAuthListArr){
					var docAccess = null;
					while(docFullPath){
						$.each(self.docAuthListArr[item],function(n,value){
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
		
    	var sealNodeID = justep.doc._seal_doc_node_sid2;
    	if(!sealNodeID) return;
    	var resRow = justep.doc.InnerUtils.queryDoc("", "", ["sFileID","sDocName","sDocPath"], "", "sParentID='" + sealNodeID + "'");
    	var sealJSON = [];
    	for(var i=0;i < resRow.length;i++){
    		if(self.docAuthListArr == undefined){
    			getDocAuthList();
    		}
    		var rowId = resRow[i].userdata.id.value;
    		var sDocPath = resRow[i].sDocPath.value;
    		var imageAccess = getAccessBysDocPath(sDocPath+'/'+rowId,-1);
			if(imageAccess % 8 < 4){
				continue;
			}					            		
    		var sFileID = resRow[i].sFileID.value;
    		var sDocName = resRow[i].sDocName.value;
    		var resCell_t = sDocName.replace($OV2("ov").resCellRegExp_t,"");
    		var resCell_f = JSON.stringify({sDocPath:sDocPath,sFileID:sFileID,sDocName:sDocName});
    		sealJSON.push({picName:resCell_t,picInfo:resCell_f});
    	}
    	
    	if (resRow.length > 0){
    		$("#sealsDiv").show();
    		var sealListEle = $('<ul></ul>').attr('id','sealList');
    		var self = this;
    		for (var i in sealJSON){
    			$('<li></li>').append($('<span></span>').bind('click',function(){
    				self.insertSeal(sealJSON[i].picInfo);
    			}).text(sealJSON[i].picName)).appendTo(sealListEle);
	    	}
	    	sealListEle.appendTo('#sealsDiv');
    	}
    },
	insertSeal:function(params){
    	params = JSON.parse(params);
    	var sDocPath = params.sDocPath;
    	var sFileID = params.sFileID;
    	var docServer = justep.doc.InnerUtils.getdocServerAction(sDocPath,'/repository/file/view/' + sFileID + '/last/content');
    	if(docServer.indexOf('http') != 0){
			docServer = window.location.protocol+"//"+window.location.host+docServer;
		}
		try{
		    var shape = $OV2("ov").getApplication().Selection.InlineShapes.AddPicture(docServer, false, true);
		    if(shape){
		        var oShape = shape.ConvertToShape();
		        oShape.WrapFormat.Type = 5;
		        oShape.ZOrder(4);
		        oShape.PictureFormat.TransparentBackground = true;
		        oShape.PictureFormat.TransparencyColor = 0xFFFFFF;
			}
		 }catch(e){}
	},
	createOffice:function(){
		//新建空白office文件
		var OVObj = $OV2("ov");
		OVObj.CreateDoc(this.OVP.programID);
		if (OVObj.IsWordOpened()) {
			OVObj.WordRevisionInit(true, this.OVP.userName, this.OVP.userInitials);
		}
	},
	saveToServer:function(createVersion){
		var OVObj = $OV2("ov");
		if(this.OVP.saving == false && OVObj.IsDocOpened()){
			var docExt = OVObj.GetOpenedFileExt();
			var filename = $('#fileName').val() + docExt;
			OVObj.DisableStandardCommand(1,false);
			OVObj.HttpInit();
			OVObj.HttpAddPostString("fileID",this.OVP.fileID?this.OVP.fileID:"");
			OVObj.HttpAddPostString("cacheName",this.OVP.cacheName?this.OVP.cacheName:"");								
			OVObj.HttpAddPostString("partType","revision");
			var resultID = justep.Utils.randomString();
			OVObj.HttpAddPostString("resultID",resultID);
			OVObj.HttpAddPostOpenedFile(filename);
			OVObj.HttpPost(this.getUrl(this.OVP.host));
			var HTTPResult = OVObj.GetHttpResult(this.getUrl(this.OVP.host,'',resultID));
			HTTPResult.filename = filename;
			HTTPResult.changes = "";
			if(OVObj.IsWordOpened()){
				HTTPResult.changes = OV2.Base64.encode(OVObj.WordGetRevisionJSON());
				if(createVersion){
					OVObj.ActiveDocument().AcceptAllRevisions();
				}
			}
			OVObj.HttpInit();
			OVObj.HttpAddPostOpenedFile(filename);
			OVObj.HttpAddPostString("fileID",this.OVP.fileID?this.OVP.fileID:"");
			OVObj.HttpAddPostString("changes",HTTPResult.changes);
			OVObj.HttpAddPostString("partType","content");
			OVObj.HttpAddPostString("cacheName",HTTPResult.cacheName);
			resultID = justep.Utils.randomString();
			OVObj.HttpAddPostString("resultID",resultID);	
			OVObj.HttpPost(this.getUrl(this.OVP.host));
			
			var revisionHTTPResult = OVObj.GetHttpResult(this.getUrl(this.OVP.host,'',resultID));
			
			revisionHTTPResult.revisionCacheName = HTTPResult.cacheName;
			revisionHTTPResult.filename = HTTPResult.filename;
			revisionHTTPResult.changes = HTTPResult.changes;
			HTTPResult = revisionHTTPResult;
			HTTPResult.isReadOnly = false;
			HTTPResult.createVersion = createVersion;
			HTTPResult.type = "officeAction";
			justep.xbl('attachmentEditor2Receiver').sendData(HTTPResult);
			//window.modalReceiver.sendMessage(HTTPResult);
			this.OVP.saving = false;
			if(createVersion){
				window.isCreateVersion = true; 
				window.close();
			}else{
				window.isSaved = true;
				$('#saveTip').fadeIn(2000,function(){$(this).fadeOut(1000)});
			}
		}
	}
};
/**
 *  接管异常，防止异常提示框被office控件挡住
 **/
onerror = pageErrorHandler;
function pageErrorHandler(msg, url, line, stack) {
	msg = ('string'==typeof(msg) && msg)? msg.replace(/Uncaught Error:/,''):'未知错误！';
	var msgs = msg.split("|");
	var detail = msgs.length > 1 ? (msgs[1] == "" ? msg : msgs[1]) : msg;
	if(url){detail += ('\n at ('+url); if(line) detail += (':'+line); detail += ')';}
	if(stack) detail += ('\n'+stack);
	alert(new justep.Message(justep.Message.JUSTEP232093,detail).getMessage());
	return false;
}

officeEditorDialog.docSaveClick = function(event){
	officeEditorDialog.officeEditor.saveToServer(false);
};

officeEditorDialog.docCreateVersionClick = function(event){
	officeEditorDialog.officeEditor.saveToServer(true);
};

officeEditorDialog.attachmentEditor2ReceiverReceive = function(event){
	var data = JSON.parse(event.data);
	if(data.type == "officeLoaded"){
		var func = data.func;
		var params = data.params;
		var officeEditor = officeEditorDialog.officeEditor;
		var execFunc = new Function("params","officeEditor","return (" + func.toString() +")")(params,officeEditor);
		execFunc.call(window);
	}else {
		var officeEditor = new OfficeEditor(data);
		officeEditorDialog.officeEditor = officeEditor;
		officeEditor.init();
		$('body').trigger("officeOpened");
	}
};
