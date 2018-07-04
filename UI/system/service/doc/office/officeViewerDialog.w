<xui:window xmlns:justep="http://www.justep.com/x5#" xmlns:xui="http://www.justep.com/xui"
	xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="2.0"
	xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:saxon="http://saxon.sf.net/"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:ns="http://www.justep.com/x5#" 
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	component="/UI/system/components/window.xbl.xml#window" id="window_1">
	<xforms:model id="officeViewerDialogModel">
		<xforms:action ev:event="onload">
			<xforms:script>
			<![CDATA[
				justep.Browser.IE6 = false;
				justep.Browser.IE7 = false;
				justep.Browser.IE8 = true;
				loaded=true;
				url='#triggerExEvent=true';
				location=url;
			]]>	
			</xforms:script>
		</xforms:action>
	</xforms:model>
	<xui:resource>
		<xhtml:link rel="STYLESHEET"  type="text/css" href="/form/dhtmlx/dhtmlxWindows/dhtmlxwindows.css"/>
		<xhtml:link rel="STYLESHEET"  type="text/css" href="/form/dhtmlx/dhtmlxWindows/skins/dhtmlxwindows_dhx_blue.css"/>
		<xhtml:style type="text/css">
        	<![CDATA[
            body {
                margin-left: 0px;
                margin-top: 0px;
                margin-right: 0px;
                margin-bottom: 0px;
            }
            span {
                font-size:14px;
                font-weight: 700;
                color: #313334;
            }
            .tools {
                margin-left: 7px;
                margin-top: 7px;
                margin-right: 7px;
                margin-bottom: 7px;
            }
            .fieldLeft {
                float: left;
            }
            .fieldRight {
                float: right;
            }
            ul {
                list-style-type: none;
                margin: 1px 0px 5px 10px;
                color: #ccc;
            }
            a {
                color: #6b7b95;
                font-size:13px;
            }
            a:focus, a:hover {
                color: #666;
            }
            li {
                font-size: 0.75em;
                line-height:25px;
            }
         	]]>
        </xhtml:style>
        <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil.js"></xhtml:script>
        <xhtml:script src="/UI/system/components/dialog/dialog.js" />
		<xhtml:script src="/UI/system/components/windowDialog/windowDialog.js" />
		<xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js" />
		<!--<xhtml:script src="/UI/system/service/doc/office/config.js" />-->
        <xhtml:script language="JavaScript" type="text/javascript">
        	<![CDATA[
        	var loaded = false;
        	var inited = false;
        	var OP = {
	        	officeFieldTemplate: function() {
	        		/*
	        		<div id="fieldItem_{FieldID}">
		                <div class="fieldLeft">
		                    <a href="#" onclick="OP.officeSelectField('{FieldID}')">{Index}.{FieldID}</a> - {FieldName}`
		                </div>
		                <div class="fieldRight">
		                    <a href="#" onclick="OP.officeEditField('{FieldID}')">E</a>&#160;<a href="#" onclick="OP.officeDeleteField('{FieldID}')">D</a>
		                </div>
	                </div><br/>
	                */
	        	},
	            officeFullScreen: function() {
	                _OV("ov").FullScreen = !_OV("ov").FullScreen;
	                _OV("ov").focus();
	            },
	            officeSelectField: function(fieldID) {
	                _OV("ov").WordFieldSelect(fieldID);
	                _OV("ov").focus();
	            },
	            officeInsertField: function() {
	            	if (!_OV("ov").WordFieldSelected()) {
		            	this.OVFP = {};
		            	this.OVFP.isInsert = true;
		            	this.OVFP.fieldID = _OV("ov").WordGetNewFieldID();
		            	this.OVFP.fieldName = "";
		            	openOfficeFieldDialog();
		            } else
		            	_OV("ov").focus();
	            },
	            officeUpdateFieldValue: function() {
	            	OP.officeAutomation(this.OVP.id, _OV("ov"), 'UpdateFieldValue');
	            },
	            officeFieldDialogOK: function(offiecViewerFieldParam) {
	            	if (offiecViewerFieldParam.isInsert) {
	            		_OV("ov").WordInsertField(offiecViewerFieldParam.fieldID, offiecViewerFieldParam.fieldName);
		            } else {
		            	var field = _OV("ov").WordGetField(offiecViewerFieldParam.oldFieldID);
		            	_OV("ov").WordUpdateField(field, offiecViewerFieldParam.fieldID, offiecViewerFieldParam.fieldName);
		            }
		            OP.officeUpdateField();
		            _OV("ov").focus();
	            },
	            officeFieldDialogCancel: function() {
		            _OV("ov").focus();
	            },
	            officeEditField: function(fieldID) {
	                var field = _OV("ov").WordGetField(fieldID);
	                if (!OV.isClear(field)) {
	                	this.OVFP = {};
		            	this.OVFP.isInsert = false;
		            	this.OVFP.fieldID = _OV("ov").WordGetFieldID(field);
		            	this.OVFP.fieldName = _OV("ov").WordGetFieldName(field);
		            	this.OVFP.oldFieldID = this.OVFP.fieldID;
		            	openOfficeFieldDialog();
	                } else
	                	_OV("ov").focus();
	            },
	            officeDeleteField: function(fieldID) {
	            	if (OV.isClear(fieldID)) {
	                	_OV("ov").WordDeleteFields();
	                } else {
	                	_OV("ov").WordDeleteFields(fieldID);
	                }
	                OP.officeUpdateField();
	                _OV("ov").focus();
	            },
	            officeUpdateField: function() {
	            	var innerHTML = _OV("ov").WordGetFieldInfo(undefined, OV.getMultiLine(OP.officeFieldTemplate));
	            	var fieldList = OV.getElementByID("fieldList");
	            	fieldList.innerHTML = innerHTML || "";
	            	fieldList.innerHTML = fieldList.innerHTML.replace(/ - \`/g, '').replace(/\`/g, '');
	            	if(OP.officeViewerResize){
		            	OP.officeViewerResize();
	            	}
	            },
	            officeShowField: function() {
	                _OV("ov").WordToggleShowCodes(true);
	                _OV("ov").focus();
	            },
	            officeHideField: function() {
	                _OV("ov").WordToggleShowCodes(false);
	                _OV("ov").focus();
	            },
	            officeInserPicture:function(params){
	            	params = JSON.parse(params);
	            	var sDocPath = params.sDocPath;
	            	var sFileID = params.sFileID;
	            	var docServer = justep.Doc.getdocServerAction(sDocPath,'/repository/file/view/' + sFileID + '/last/content');
            		if(docServer.indexOf('http') != 0){
            			docServer = window.location.protocol+"//"+window.location.host+docServer;
            		}
					var localFileName = _OV("ov").HttpDownloadFileToTempDir(docServer.indexOf('?')!=-1?docServer+'&FileName='+params.sDocName:docServer+'?FileName='+params.sDocName, '', '') || docServer;
					try{
					    var shape = _OV("ov").Application.Selection.InlineShapes.AddPicture(localFileName, false, true);
					    if(shape){
					        var oShape = shape.ConvertToShape();
					        oShape.WrapFormat.Type = 5;
					        oShape.ZOrder(4);
					        oShape.PictureFormat.TransparentBackground = true;
					        oShape.PictureFormat.TransparencyColor = 0xFFFFFF;
    					}
					 }catch(e){}
					_OV("ov").ClearTempFiles();
	            },
	            officeUpdateSeal: function() {
	            	var docNodeSID = _seal_doc_node_sid;
	            	if(!docNodeSID) return;
	            	var resRow = justep.Doc.queryDoc("", "", ["sFileID","sDocName","sDocPath"], "", "sParentID='" + docNodeSID + "'");
	            	var sealJSON = [];
	            	for(var i=0;i < resRow.length;i++){
	            		var rowId = resRow[i].userdata.id.value;
	            		var sDocPath = resRow[i].sDocPath.value;
	            		var imageAccess = getAccessBysDocPath(sDocPath+'/'+rowId,-1);
						if(imageAccess == -1){
							imageAccess = getTreeIndexChangedAccess(sDocPath);
						}
						if(imageAccess % 8 < 4){
							continue;
						}					            		
	            		var sFileID = resRow[i].sFileID.value;
	            		var sDocName = resRow[i].sDocName.value;
	            		var resCell_t = sDocName.replace(_OV("ov").resCellRegExp_t,"");
	            		var resCell_f = JSON.stringify({sDocPath:sDocPath,sFileID:sFileID,sDocName:sDocName});
	            		sealJSON.push({t:resCell_t,f:resCell_f});
	            	}
	            	
	            	if (resRow.length==0)
	            		OV.getElementByID("toolsSealList").style.display="";
	            	
	            	var innerHTML = "";
	            	for (var i in sealJSON)
	            		innerHTML += "<li><a href='#' onclick='OP.officeInserPicture(this.rel);' rel='" + sealJSON[i].f + "'>" + sealJSON[i].t + "</a></li>";
	            	var sealList = OV.getElementByID("sealList");
	            	sealList.innerHTML = innerHTML || "";
	            	if(OP.officeViewerResize){
		            	OP.officeViewerResize();
	            	}
	            },
	            officeAutomation: function(id, ov, programID) {
		            if ((programID == 'BeforeOK') || (programID == 'AfterOK')|| (programID == 'OpenOffice')){
       	            	if (!OV.isClear(window.parent) && !OV.isClear(window.parent.officeAutomation) && 
		            		OV.isFunction(window.parent.officeAutomation)) {
		            		window.parent.officeAutomation(id, ov, programID);
	    	        	}
	            		return;
	            	}
	            	url='#excuteJS&id='+ id+ ';ov='+ov.id+';programID='+programID;
	            	location=url;
	            }, 
	            officeNotifyCtrlReady: function() {
	            	_OV("ov").InitOfficeViewer();
	            	_OV("ov").focus();
	            },
	            getHost:function(docPath,fileID){
	            	var u="";
	            	if(fileID){
	            		u =justep.Doc.getdocServerAction(docPath, "/repository/file/cache/office/"+fileID);
	            	}else{
						u = justep.Doc.getdocServerAction(docPath, "/repository/file/cache/office/new");
	            	}
           			this.docUrl = u.indexOf(window.location.protocol) < 1 ? u : window.location.protocol+"//"+ window.location.host + u;
            		return this.docUrl;	 
	            },
	            officeViewerInit: function(obj) {
	            	inited = true;
	            	if (_OV("ov").isOpened) return;
	            	this.OVP = obj;
	            	if (_seal_default_show) this.OVP.showSeal = true;
	            	if (_show_menubar) this.OVP.showMenubar = true;	
	            	this.OVP.saving = false;
	            	this.OVP.isModified = false;
            		this.OVP.state = (this.OVP.programID != "OpenOffice") && (this.OVP.programID != "Template") ? "new" : "edit";
            		if(this.OVP.programID=="Word.Document"||this.OVP.programID == "Template"||this.OVP.programID=="Excel.Sheet"||this.OVP.programID=="PowerPoint.Show"||this.OVP.programID=="MSProject.Project"){
	            		$('#docSave').css('display','none');
	            	}
	            	if (loaded) {
	            		initLayout();
	            	}
	            	var docHost = this.OVP.host;
	            	if (this.OVP.programID == "History") {
	            		OV.getElementByID("ovTools").style.display = "none";
	            		_OV("ov").Toolbars = false;
	            		_OV("ov").HttpInit();
    					_OV("ov").HttpAddpostString("FileID", this.OVP.fileID);
    					_OV("ov").HttpAddpostString("FileExt", this.OVP.fileExt);
    					_OV("ov").HttpAddpostString("VersionID", this.OVP.versionID);
    					_OV("ov").HttpOpenFileFromStream(this.getHost(docHost,this.OVP.fileID));
    					if (_OV("ov").IsWordOpened()) {
    						_OV("ov").WordRevisionNone();
    					}
    					_OV("ov").OfficeProtectDocument();
	            	} else {
	            		OV.getElementByID("toolsFieldOperate").style.display="none";
	            		OV.getElementByID("toolsTemplateOperate").style.display="none";
		            	OV.getElementByID("toolsFieldList").style.display="none";
		            	OV.getElementByID("toolsSealList").style.display="none";
		            	OV.getElementByID("inputFilename").value = this.OVP.filename;
	            		OV.getElementByID("ovTools").style.display = "";
	            		_OV("ov").Toolbars = true;
	            		if(this.OVP.showMenubar){
	            			_OV("ov").Menubar=true;
	            		}
	            		_OV("ov").DisableFileCommand(this.OVP.isPrint);
		            	if (this.OVP.programID == "OpenOffice") {
		            		this.OVP.isModified = !(this.OVP.cacheName == "" || OV.isClear(this.OVP.cacheName));
		            		if (this.OVP.isModified) {
		            			_OV("ov").HttpInit();
		            			var fileID=this.OVP.fileID;
		            			var partType="content";
		            			if(this.OVP.revisionCacheName){
		            				fileID=this.OVP.revisionCacheName;
		            				partType="revision";
		            			}else if(this.OVP.cacheName){
		            				fileID=this.OVP.cacheName;
		            			}
		            			_OV("ov").HttpAddpostString("FileID", fileID);
		    					_OV("ov").HttpAddpostString("FileExt", this.OVP.fileExt);
		    					_OV("ov").HttpAddpostString("PartType", partType);
		    					_OV("ov").HttpOpenFileFromStream(this.getHost(docHost));
		    					
		    				} else {
		    					_OV("ov").HttpInit();
		    					_OV("ov").HttpAddpostString("FileID", this.OVP.fileID);
		    					_OV("ov").HttpAddpostString("FileExt", this.OVP.fileExt);
		    					
		    					if (_word_all_history){
		    						var fileinfo = justep.Doc.queryDocByFileId(this.OVP.host,this.OVP.fileID ,this.OVP.filename);
			   						
			   						var partType = !fileinfo.parts.part_3 ? "content" : "revision";
			   						_OV("ov").HttpAddpostString("PartType", partType);	
		    					}
		    					_OV("ov").HttpOpenFileFromStream(this.getHost(docHost));
		    				}
		    				if (_OV("ov").IsWordOpened()) {
		    					if (this.OVP.isModified)
		    						_OV("ov").WordRevisionInit(false, this.OVP.userName, this.OVP.userInitials);
		    					else
		    						_OV("ov").WordRevisionInit(!_word_all_history, this.OVP.userName, this.OVP.userInitials);
	
		    				}
		    				OP.officeAutomation(this.OVP.id, _OV("ov"), this.OVP.programID);
		    				OP.officeAutomation(this.OVP.id, _OV("ov"), 'UpdateFieldValue');
		    				
		            	} else if (this.OVP.programID == "Template") {
		            		_OV("ov").HttpInit();
							_OV("ov").HttpAddpostString("FileID", this.OVP.templateID);
							_OV("ov").HttpAddpostString("FileExt", this.OVP.templateExt);
							_OV("ov").HttpOpenFileFromStream(this.getHost(this.OVP.templateHost));
							if (_OV("ov").IsWordOpened()) {
								_OV("ov").WordRevisionInit(true, this.OVP.userName, this.OVP.userInitials);
							}
							OP.officeAutomation(this.OVP.id, _OV("ov"), this.OVP.programID);
		            	} else if (this.OVP.programID != "-") {
		            		_OV("ov").CreateDoc(this.OVP.programID);
							if (_OV("ov").IsWordOpened()) {
								_OV("ov").WordRevisionInit(true, this.OVP.userName, this.OVP.userInitials);
							}
		            	}
		            	if (_OV("ov").IsWordOpened()){
			            	if (this.OVP.showField) {
			            		OV.getElementByID("toolsFieldOperate").style.display="block";
			            		OV.getElementByID("toolsFieldList").style.display="block";
			            		OP.officeUpdateField();
			            	} else {
			            		if (this.OVP.showSeal) {
			            			OP.officeUpdateSeal();
			            			OV.getElementByID("toolsSealList").style.display="block";
			            		}
			            		OV.getElementByID("toolsTemplateOperate").style.display="block";
			            	}
		            	}
		            	_OV("ov").DisableOfficeButton();	
	            	}
	            	this.OVP.initRevision=_OV("ov").WordGetRevisionJSON();
	            },
				officeNotifyClose:function(){
					if(_OV("ov").IsDirty&&_OV("ov").WordGetRevisionJSON()!=this.OVP.initRevision){
						if(window.confirm('有数据已经修改，是否保存数据?')){
							return 'saveClose';
						}else{
							OP.changeInfo = '';
							var url= '#excuteJS&id=officeAction';
							location=url;
							return 'close';
						}
					}else{
						//用来解锁
						OP.changeInfo = '';
						var url= '#excuteJS&id=officeAction';
						location=url;
						return 'close';
					}
				},
	            officeNotifySendData: function(item, cancel,createVersion) {
	            	if ((item == 3) && cancel && !this.OVP.saving) {
	            		this.OVP.saving = true;
	            		if (this.OVP.programID == "History") {
	            			var noneResult = {
	            				isReadOnly: true
	            			};
	            			return noneResult;
	            		} else {
	            			if (_OV("ov").IsWordOpened()) { 
								OP.officeAutomation(this.OVP.id, _OV("ov"), 'BeforeOK');
							}
							var filename = OV.getElementByID("inputFilename").value + _OV("ov").GetOpenedFileExt();
							_OV("ov").HttpInit();
							
							_OV("ov").HttpAddpostString("fileID",this.OVP.fileID?this.OVP.fileID:"");
							_OV("ov").HttpAddpostString("cacheName",this.OVP.cacheName?this.OVP.cacheName:"");								
							_OV("ov").HttpAddpostString("partType","revision");
							
							_OV("ov").HttpAddPostOpenedFile(filename);
							
							_OV("ov").HttpPost(this.getHost(this.OVP.host));
							var HTTPResult = OV.JSON.parse(_OV("ov").HttpResult);
							
							HTTPResult.filename = filename;
							
							if (_OV("ov").IsDocOpened()) {
								HTTPResult.changes="";
								if(_OV("ov").IsWordOpened()){
									HTTPResult.changes = OV.Base64.encode(_OV("ov").WordGetRevisionJSON());
									if(createVersion){
										_OV("ov").ActiveDocument.AcceptAllRevisions();
									}
								}
								
								_OV("ov").HttpInit();
									
								_OV("ov").HttpAddPostOpenedFile(filename);
								
								_OV("ov").HttpAddpostString("fileID",this.OVP.fileID?this.OVP.fileID:"");
								_OV("ov").HttpAddpostString("changes",HTTPResult.changes);
								_OV("ov").HttpAddpostString("partType","content");
								_OV("ov").HttpAddpostString("cacheName",HTTPResult.cacheName);
									
								_OV("ov").HttpPost(this.getHost(this.OVP.host));
								var revisionHTTPResult = OV.JSON.parse(_OV("ov").HttpResult);
								revisionHTTPResult.revisionCacheName = HTTPResult.cacheName;
								revisionHTTPResult.filename = HTTPResult.filename;
								revisionHTTPResult.changes = HTTPResult.changes;
								HTTPResult = revisionHTTPResult;
							} else {
								HTTPResult.changes = "";
								
							}
							
							HTTPResult.isReadOnly = false;
							HTTPResult.createVersion = createVersion;
							
	            			if (_OV("ov").IsWordOpened()) {
								OP.officeAutomation(this.OVP.id, _OV("ov"), 'AfterOK');
							}
							var sdata = OV.JSON.stringify(HTTPResult);
							OP.changeInfo = sdata;
							var url= '#excuteJS&id=officeAction;';
            				location=url;
            				this.OVP.saving=false;
						}
	            	}
	            	if(createVersion){
	            		OP.closeDoc();
	            	}
	            	
	            },
	            getChangeInfo :function(){
	            	return OP.changeInfo;
	            },
				officeCloseButtonClick : function(item, cancel,createVersion){
					if(_OV("ov").IsDirty&&_OV("ov").WordGetRevisionJSON()!=this.OVP.initRevision){
						if(window.confirm('有数据已经修改，是否保存数据?')){
							return this.officeNotifySendData(item, cancel,createVersion);
						}else{
							return "";
						}
					}else{
						return "";
					}
				},
	            officeNotifyCancel: function() {
	            	_OV("ov").Close();
	            	OV.getElementByID("toolsFieldOperate").style.display="none";
	            	OV.getElementByID("toolsTemplateOperate").style.display="none";
	            	OV.getElementByID("toolsFieldList").style.display="none";
	            	OV.getElementByID("toolsSealList").style.display="none";
	            },
	            closeDoc:function(){
	            	var url= '#excuteJS&id=closeDoc;';
					location=url;
	            	url='#closeDoc';
					location=url;
            	}
            }

        	function initLayout() {
        	 	setLayout(OP.OVP.programID != "Word.Document");
        	 	OP.officeNotifyCtrlReady();
        	}
        	
        	function setLayout(toEnd) {
	        	var splitter = justep.xbl("splitter");
        	 	if (toEnd) {
        			splitter.moveToEnd();		        
		        }
        	}

            function acceptData(data) {
            	getDocAuthList();
            	setTimeout(function(){
            		$OV('ov').CreateOfficeViewer('100%','100%');
		            var jsonObj = JSON.parse(data);
		            jsonObj.filename=decodeURI(jsonObj.filename);
		   			OP.officeViewerInit(jsonObj);
            	},5);
            	
            }

            function notifyCancel() {
            	OP.officeNotifyCancel();
            }
            
            function afterOfficeFieldDialogEnsure(event){
				OP.OVFP = OV.JSON.parse(event.data);
				OP.officeFieldDialogOK(OP.OVFP);
            }
            
            function openOfficeFieldDialog(){
            	justep.Doc.openOfficeFieldDialog(OP.OVFP, afterOfficeFieldDialogEnsure);
            }
            
            
            function getDocAuthList(){
				docAuthList = justep.Doc.getDocAuthList();
				 
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
        	]]>
        </xhtml:script>

        <xhtml:script language="JavaScript" type="text/javascript" for="ov" event="OnFileCommand(item, cancel)">
        	notifySendData("xml-text", item, cancel);
        </xhtml:script>
	</xui:resource>
	
	<xui:view id="view_1" auto-load="true">
		<xui:layout style="height:100%;width:100%;">
			<xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter"
				id="splitter"
				has-drag-bar="true"
				has-arrow-button="true"
				mode="horz" fix-size="80%" fix-type="right" collapse-type="right">
				<xhtml:div region="left" id="div_1">
					<!-- 注意：这里加入一个边框，是为了splitter设置toEnd时刺激绘制，没有的话IE下会到导致不刷新 -->
					<xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="docNodeTreePart" style="width:100%; height:100%;">
						<center id="wordPart">
						<xhtml:div id="ovParent" style="border:1px solid #D3E2E5:width:100%;height:100%">
							<xhtml:div id="ov"></xhtml:div>
						</xhtml:div>	
						</center>
						<bottom size="35">
							<xhtml:div style="width:100%;height:100%;float:right;margin-top:4px;margin-right:8px;">
								<xhtml:span id="docSave" style ="margin-right:8px;float:right;">
									<xhtml:button id="btn_save" class="xforms-trigger xui-button" style="width:75px;margin-bottom: 3px" onclick="OP.officeNotifySendData(3,true,false);">保存</xhtml:button>
								</xhtml:span>
								<xhtml:span id="docCreateVersion" style ="margin-right:8px;float:right;">
									<xhtml:button id="btn_createVersion" class="xforms-trigger xui-button" style="width:75px;margin-bottom: 3px" onclick="OP.officeNotifySendData(3,true,true);">成文</xhtml:button>
								</xhtml:span>
							</xhtml:div>
						</bottom>
					</xhtml:div>
				</xhtml:div>
				<xhtml:div region="right" id="div_2">
					<xhtml:div id="ovTools" valign="top" style="display:none">
						<xhtml:div class="tools" id="div_3">
						 <xhtml:div  id="div_4">
							<xhtml:div id="toolsFilename" style="display:block;">
								<span>文件名称</span>
								<ul>
									<li>
										<xhtml:input type="text" style="width:160px;" id="inputFilename" />
									</li>
								</ul>
							</xhtml:div>
							<xhtml:div id="toolsShowMode" style="display:none;">
								<span>显示模式</span>
								<ul>
									<li>
										<a href="#" onclick="OP.officeFullScreen()">全屏模式</a>
										- 编辑区域全屏
									</li>
								</ul>
							</xhtml:div>
							</xhtml:div>
							<xhtml:div id="toolsTemplateOperate" style="display:none">
								<span>模板操作</span>
								<ul>
									<li>
										<a href="#" onclick="OP.officeUpdateFieldValue()">更新域</a>
										- 从表单中更新数据
									</li>
								</ul>
							</xhtml:div>
							<xhtml:div id="toolsFieldOperate" style="display:none">
								<span>域操作</span>
								<ul>
									<li>
										<a href="#" onclick="OP.officeInsertField()">插入域</a>
										- 当前位置插入域
									
									</li>
									<li>
										<a href="#" onclick="OP.officeEditField()">编辑域</a>
										- 编辑当前选中域
									
									</li>
									<li>
										<a href="#" onclick="OP.officeDeleteField()">删除域</a>
										- 删除当前选中域
									
									</li>
									<li>
										<a href="#" onclick="OP.officeShowField()">显示域</a>
										- 显示所有隐藏域
									
									</li>
									<li>
										<a href="#" onclick="OP.officeHideField()">隐藏域</a>
										- 隐藏所有显示域
									
									</li>
								</ul>
							</xhtml:div>
							<xhtml:div id="toolsFieldList" style="display:none">
								<span>域列表</span>
								<ul id="fieldList">
								</ul>
							</xhtml:div>
							<xhtml:div id="toolsSealList" style="display:none">
								<span>插入签章</span>
								<ul id="sealList">
								</ul>
							</xhtml:div>
						</xhtml:div>
					</xhtml:div>
			</xhtml:div>
		</xhtml:div>
		</xui:layout>
	</xui:view>		
</xui:window>