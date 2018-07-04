<window xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xui="http://www.justep.com/xui"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:f="http://orbeon.org/oxf/xml/formatting"
	xmlns:justep="http://www.justep.com/x5#"
	xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
	xmlns="http://www.justep.com/xui"
	component="/UI/system/components/window.xbl.xml#window" id="window_1">
	<xforms:model id="officeViewer">
	</xforms:model>
	<xui:resource>
		<xhtml:style type="text/css"><![CDATA[
            body {
                margin-left: 0px;
                margin-top: 0px;
                margin-right: 0px;
                margin-bottom: 0px;
            }
            span {
                font-size: 0.75em;
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
            }
            a:focus, a:hover {
                color: #666;
            }
            li {
                font-size: 0.75em;
            }
         ]]></xhtml:style>
         <xhtml:script language="JavaScript" type="text/javascript"><![CDATA[
            (function () {
            	$OV('ov').CreateOfficeViewer('100%','100%');
                var fn = function () {
                    _OV("ov").style.height = document.body.offsetHeight - 4;
                    _OV("ov").style.height = Math.max(OV.getElementByID("ovParent").offsetHeight, document.body.offsetHeight - 4);
                };
                OV.addEvent(window, "resize", fn);
                fn();
                OP.officeViewerResize = fn;
            })();
        ]]></xhtml:script>
        <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil.js"></xhtml:script>
        <xhtml:script language="JavaScript" type="text/javascript"><![CDATA[
        	var OP = {
	        	officeFieldTemplate: function() {
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
		            	XMLEvents.dispatch(jQuery("officeViewerFieldDialog"), 'DOMActivate');
		            } else
		            	_OV("ov").focus();
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
		            	XMLEvents.dispatch(jQuery("officeViewerFieldDialog"), 'DOMActivate');
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
	            	OP.officeViewerResize();
	            },
	            officeShowField: function() {
	                _OV("ov").WordToggleShowCodes(true);
	                _OV("ov").focus();
	            },
	            officeHideField: function() {
	                _OV("ov").WordToggleShowCodes(false);
	                _OV("ov").focus();
	            },
	            officeAutomation: function(id, ov) {
	            	if (!OV.isClear(window.parent) && !OV.isClear(window.parent.officeAutomation) && 
	            		OV.isFunction(window.parent.officeAutomation)) {
	            		window.parent.officeAutomation(id, ov);
	            	}
	            }, 
	            officeNotifyCtrlReady: function() {
	            	_OV("ov").InitOfficeViewer;
	            	_OV("ov").focus();
	            },
	            officeViewerInit: function(obj) {
	            	if (_OV("ov").isOpened) return;
	            	this.OVP = obj;
	            	this.OVP.saving = false;
	            	this.OVP.isRevision = false;
	            	this.OVP.isModified = false;
	            	if (this.OVP.programID == "History") {
	            		OV.getElementByID("ovTools").style.display = "none";
	            		_OV("ov").Toolbars = false;
	            		_OV("ov").HttpInit();
    					_OV("ov").HttpAddpostString("FileID", this.OVP.fileID);
    					_OV("ov").HttpAddpostString("FileExt", this.OVP.fileExt);
    					_OV("ov").HttpAddpostString("VersionID", this.OVP.versionID);
    					_OV("ov").HttpOpenFileFromStream(window.location.protocol + "//" + window.location.host + "/UIServer/officeviewer.do");
    					if (_OV("ov").IsWordOpened()) {
    						_OV("ov").WordRevisionNone();
    					}
    					_OV("ov").OfficeProtectDocument();
	            	} else {
	            		OV.getElementByID("toolsFieldOperate").style.display="none";
		            	OV.getElementByID("toolsFieldList").style.display="none";
		            	OV.getElementByID("inputFilename").value = this.OVP.filename;
	            		OV.getElementByID("ovTools").style.display = "";
	            		_OV("ov").Toolbars = true;
	            	
		            	if (this.OVP.programID == "OpenOffice") {
		            		this.OVP.isModified = !(this.OVP.filePath == "" || OV.isClear(this.OVP.filePath));
		            		if (this.OVP.isModified) {
		    					this.OVP.documentID = this.OVP.filePath.substr(Math.max(this.OVP.filePath.lastIndexOf('\\'),this.OVP.filePath.lastIndexOf('/')) + 1);
		    					this.OVP.isRevision = !(this.OVP.revisionFilePath == "" || OV.isClear(this.OVP.revisionFilePath));
		    					if (this.OVP.isRevision) {
		    						var id = this.OVP.documentID;
		    						this.OVP.documentID = this.OVP.revisionFilePath.substr(Math.max(this.OVP.revisionFilePath.lastIndexOf('\\'),this.OVP.revisionFilePath.lastIndexOf('/')) + 1);
		    						this.OVP.revisionDocumentID = id;
		    					} else {
		    						this.OVP.revisionDocumentID = "";
		    					}
		    					_OV("ov").HttpInit();
		    					_OV("ov").HttpAddpostString("DocumentID", this.OVP.documentID);
		    					_OV("ov").HttpAddpostString("FileExt", this.OVP.fileExt);
		    					_OV("ov").HttpOpenFileFromStream(window.location.protocol + "//" + window.location.host + "/UIServer/officeviewer.do");
		    				} else {
		    					_OV("ov").HttpInit();
		    					_OV("ov").HttpAddpostString("FileID", this.OVP.fileID);
		    					_OV("ov").HttpAddpostString("FileExt", this.OVP.fileExt);
		    					_OV("ov").HttpOpenFileFromStream(window.location.protocol + "//" + window.location.host + "/UIServer/officeviewer.do");
		    				}
		    				if (_OV("ov").IsWordOpened()) {
		    					_OV("ov").WordRevisionInit(!this.OVP.isModified, this.OVP.userName, this.OVP.userInitials);
		    				}
		            	} else if (this.OVP.programID == "Template") {
		            		_OV("ov").HttpInit();
							_OV("ov").HttpAddpostString("FileID", this.OVP.templateID);
							_OV("ov").HttpAddpostString("FileExt", this.OVP.templateExt);
							_OV("ov").HttpOpenFileFromStream(window.location.protocol + "//" + window.location.host + "/UIServer/officeviewer.do");
							if (_OV("ov").IsWordOpened()) {
								_OV("ov").WordRevisionInit(true, this.OVP.userName, this.OVP.userInitials);
							}
							OP.officeAutomation(this.OVP.id, _OV("ov"));
		            	} else if (this.OVP.programID != "-") {
		            		_OV("ov").CreateDoc(this.OVP.programID);
							if (_OV("ov").IsWordOpened()) {
								_OV("ov").WordRevisionInit(true, this.OVP.userName, this.OVP.userInitials);
							}
		            	}
		            	if (this.OVP.showField && _OV("ov").IsWordOpened()) {
		            		OV.getElementByID("toolsFieldOperate").style.display="";
		            		OV.getElementByID("toolsFieldList").style.display="";
		            		OP.officeUpdateField();
		            	}
		            	_OV("ov").DisableOfficeButton();
	            	}
	            },
	            officeNotifySendData: function(item, cancel) {
	            	if ((item == 3) && cancel && !this.OVP.saving) {
	            		this.OVP.saving = true;
	            		if (this.OVP.programID == "History") {
	            			var noneResult = {
	            				isReadOnly: true
	            			};
	            			return noneResult;
	            		} else {
							var filename = OV.getElementByID("inputFilename").value + _OV("ov").GetOpenedFileExt();
							_OV("ov").HttpInit();
							if ((this.OVP.programID == "OpenOffice") && this.OVP.isModified) {
								_OV("ov").HttpAddPostOpenedFile(this.OVP.documentID + "|" + filename);
							} else {
								_OV("ov").HttpAddPostOpenedFile(filename);
							}
							_OV("ov").HttpPost(window.location.protocol + "//" + window.location.host + "/UIServer/officeviewer.do");
							var HTTPResult = OV.JSON.parse(_OV("ov").HttpResult);
							HTTPResult.filename = filename;
							if (_OV("ov").IsWordOpened()) {
								HTTPResult.changes = OV.escape(OV.Base64.encode(_OV("ov").WordGetRevisionJSON()));
								_OV("ov").ActiveDocument.AcceptAllRevisions();
								_OV("ov").HttpInit();
								if (this.OVP.isRevision) {
									_OV("ov").HttpAddPostOpenedFile(this.OVP.revisionDocumentID + "|" + filename);
								} else {
									_OV("ov").HttpAddPostOpenedFile(filename);
								}
								_OV("ov").HttpPost(window.location.protocol + "//" + window.location.host + "/UIServer/officeviewer.do");
								var revisionHTTPResult = OV.JSON.parse(_OV("ov").HttpResult);
								revisionHTTPResult.filename = HTTPResult.filename;
								revisionHTTPResult.changes = HTTPResult.changes;
								revisionHTTPResult.revisionFilePath = HTTPResult.filePath;
								HTTPResult = revisionHTTPResult;
							} else {
								HTTPResult.changes = "";
							}
							HTTPResult.isReadOnly = false;
							return HTTPResult;
						}
	            	}
	            },
	            officeNotifyCancel: function() {
	            	_OV("ov").Close();
	            	OV.getElementByID("toolsFieldOperate").style.display="none";
	            	OV.getElementByID("toolsFieldList").style.display="none";
	            }
            };
        ]]></xhtml:script>
        <xhtml:script language="JavaScript" type="text/javascript" for="ov" event="NotifyCtrlReady">
            OP.officeNotifyCtrlReady();
        </xhtml:script>
        <xhtml:script language="JavaScript" type="text/javascript" for="ov" event="OnFileCommand(item, cancel)">
        	notifySendData("xml-text", item, cancel);
        </xhtml:script>
	</xui:resource>
	
	<xui:view id="view_1">
		<xui:layout>
			<xhtml:table width="100%" border="0" cellspacing="0" cellpadding="0" id="table_1">
	            <xhtml:tr>
	                <xhtml:td id="ovParent" width="100%">
	                	<xhtml:div id="ov"></xhtml:div>
	                </xhtml:td>
	            	<xhtml:td id="ovTools" valign="top" style="display:none">
	                    <xhtml:div class="tools" id="div_1">
	                    	<xhtml:div id="toolsFilename">
		                        <xhtml:span>文件名称</xhtml:span>
		                        <xhtml:ul>
		                            <xhtml:li>
		                                <xhtml:input type="text" style="width:160px;" id="inputFilename"/>
		                            </xhtml:li>
		                        </xhtml:ul>
	                    	</xhtml:div>
	                    	<xhtml:div id="toolsShowMode">
		                        <xhtml:span>显示模式</xhtml:span>
		                        <xhtml:ul>
		                            <xhtml:li><xhtml:a href="#" onclick="OP.officeFullScreen()">全屏模式</xhtml:a> - 编辑区域全屏 </xhtml:li>
		                        </xhtml:ul>
	                        </xhtml:div>
	                        <xhtml:div id="toolsFieldOperate" style="display:none">
		                        <xhtml:span>域操作</xhtml:span>
		                        <xhtml:ul>
		                            <xhtml:li><xhtml:a href="#" onclick="OP.officeInsertField()">插入域</xhtml:a> - 当前位置插入域 </xhtml:li>
		                            <xhtml:li><xhtml:a href="#" onclick="OP.officeEditField()">编辑域</xhtml:a> - 编辑当前选中域 </xhtml:li>
		                            <xhtml:li><xhtml:a href="#" onclick="OP.officeDeleteField()">删除域</xhtml:a> - 删除当前选中域 </xhtml:li>
		                            <xhtml:li><xhtml:a href="#" onclick="OP.officeShowField()">显示域</xhtml:a> - 显示所有隐藏域 </xhtml:li>
		                            <xhtml:li><xhtml:a href="#" onclick="OP.officeHideField()">隐藏域</xhtml:a> - 隐藏所有显示域 </xhtml:li>
		                        </xhtml:ul>
	                        </xhtml:div>
	                        <xhtml:div id="toolsFieldList" style="display:none">
		                        <xhtml:span>域列表</xhtml:span>
		                        <xhtml:ul id="fieldList">
		                        </xhtml:ul>
	                        </xhtml:div>
	                    </xhtml:div>
	                </xhtml:td>
	            </xhtml:tr>
	        </xhtml:table>
	        <!-- TODO: 域操作尚未实现
	        <xhtml:div component="/UI/system/components/dialogSelect.xbl.xml#dialogSelect" 
	        		   caller-id="officeViewerFieldDialog" call-tag="[d]/system/service/doc/office/officeViewerFieldDialog.w" can-refresh="false" caption="文档域编辑窗口" before-excute-fun="officeViewerFieldDialogInit" prepare-variable="input-data" 
		        output-data-type="xml-text" input-data-type="xml-text" pagesetup="true">
		        <xhtml:div params-define="main-param" dialog-width="530" dialog-height="100" for="client"/>
		        <xhtml:script><![CDATA[
					function officeViewerFieldDialogInit(doc) {
						doc = doc.replace(/<option\/>/, "<option>" + OV.JSON.stringify(OP.OVFP) + "</option>");
						return doc;
					}
				]]></xhtml:script>
		        <xforms:action ev:event="after-selected">
		            <xforms:script>
		                var doc = xforms.XMLEvents.getValueByName(event, "data", "");
		                var docLoader = commonUtils.getXMLDocByText(doc);
		                var node = docLoader.doXPath("/main-result/data/text()", null, null, "single");
		                if (node) {
	    	                OP.OVFP = OV.JSON.parse(node.nodeValue);
	    	                OP.officeFieldDialogOK(OP.OVFP);
		                }
		            </xforms:script>
		        </xforms:action>
		        <xforms:action ev:event="after-cancel">
		        	<xforms:script>
		                OP.officeFieldDialogCancel();
		            </xforms:script>
		        </xforms:action>
		    </xhtml:div>
			 -->
		</xui:layout>
	</xui:view>
	
	<layout>

	</layout>
</window>