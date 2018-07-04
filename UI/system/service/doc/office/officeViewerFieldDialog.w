<xui:window xmlns:justep="http://www.justep.com/x5#" xmlns:xui="http://www.justep.com/xui"
	xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="2.0"
	xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:saxon="http://saxon.sf.net/"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:ns="http://www.justep.com/x5#" 
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	component="/UI/system/components/window.xbl.xml#window">
	
	<xforms:model id="officeViewerFieldDialog">
		<xforms:instance id="instance"> 
			<form xmlns="">
				<root>
					<id></id> 
				</root> 
			</form> 
		</xforms:instance>
		
		<!--<xforms:instance id="fieldGridData" language="CONSTANT" readonly="true" type="simple" columnids="SA_DocActivityTemplateField,sFieldID,sFieldName">
			<rows xmlns="">
			</rows>
		</xforms:instance>-->
		<xui:data id="fieldGridData" store-type="grid" component="/UI/system/components/data.xbl.xml#data" 
			columns="SA_DocActivityTemplateField,sFieldID,sFieldName">
		<rule id="dataRule1" column="SA_DocActivityTemplateField" readonly="true()"></rule>
  <rule id="dataRule2" column="sFieldID" readonly="true()"></rule>
  <rule id="dataRule3" column="sFieldName" readonly="true()"></rule></xui:data>
		
	</xforms:model>
	
	<xui:resource>
		<xhtml:style type="text/css"><![CDATA[
            body {
                margin-left: 7px;
                margin-top: 7px;
                margin-right: 7px;
                margin-bottom: 7px;
            }
            legend, span {
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
    	<xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil2.js"></xhtml:script>
        <xhtml:script src="/UI/system/components/dialog/dialog.js" />
		<xhtml:script src="/UI/system/components/windowDialog/windowDialog.js" />
		<xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js" />
        <xhtml:script language="JavaScript" type="text/javascript">
        	<![CDATA[
        	function getFun(funOrName){
				if(typeof(funOrName) == "function") return funOrName;
				var funName = justep.String.trim(funOrName);
				if(funName == "") return null;
				var fun = null;
				try{
					eval("if(typeof(" + funName + ") == 'function') fun = " + funName + ";");
				}
				catch(e){}
				return fun;
			}
			function excuteKSQLQuery(dataModel, ksqlText, map){
				var param = new justep.Request.ActionParam();
				param.setString('ksql',ksqlText);
				param.setString('dataModel',dataModel);
				param.setNULL('variables');
				param.setNULL('fnModel');
				return justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(), 'ksqlQueryAction', param, null, null, true);
			}
        	var OP = {
        		queryLinkReady: false,
        		linkList: new Array(),
	            officeViewerFieldInit: function(obj) {
	            	this.OVFP = obj;
	            	document.getElementById('inputFieldID').value = this.OVFP.fieldID;
	            	document.getElementById('inputFieldName').value = this.OVFP.fieldName;
	            },
	            officeNotifySendData : function() {
	            	this.OVFP.fieldID = document.getElementById('inputFieldID').value;
	            	this.OVFP.fieldName = document.getElementById('inputFieldName').value;
	            	return OV.JSON.stringify(this.OVFP);
	            },
	            toggleFieldGrid : function(source) {
	            	if (source.innerHTML == "∵&nbsp;&nbsp;选择域") {
	            		if (!OP.queryLinkReady) {
	            			OP.queryLinkReady = true;
	            			OP.queryLink();
	            		}
	            		source.innerHTML = "∴&nbsp;&nbsp;选择域";
	            		document.getElementById('trGrid').style.display = "";
	            		document.getElementById('trGridSplit').style.display = "";
	            	} else {
	            		source.innerHTML = "∵&nbsp;&nbsp;选择域";
	            		document.getElementById('trGrid').style.display = "none";
	            		document.getElementById('trGridSplit').style.display = "none";
	            	}
	            },
	            updateSelectActivity: function() {
	            	var sProcess = document.getElementById('selectProcess').value;
	            	document.getElementById("selectActivity").options.length = 0;
	            	var index = 0;
	            	for (var i = 0; i < OP.linkList.length; i++) {
	            		if (OP.linkList[i].sProcess == sProcess) {
	            			var sActivity = OP.linkList[i].sActivity;
	            			document.getElementById("selectActivity")[index] = new Option(sActivity, sActivity);
	            			index++;
	            		}
	            	}
	            },
	            selectProcessChange: function() {
	            	OP.updateSelectActivity();
	            	OP.showFieldGrid();
	            },
	            selectActivityChange: function() {
	            	OP.showFieldGrid();
	            },
	            showFieldGrid: function() {
	            	var id = "";
	            	for (var i = 0; i < OP.linkList.length; i++) {
	            		if ((OP.linkList[i].sProcess == document.getElementById('selectProcess').value) &&
							(OP.linkList[i].sActivity == document.getElementById("selectActivity").value)) {
	            			id = OP.linkList[i].id;
	            			break;
	            		}
	            	}
	            	if (!OP.showFieldGridData(id)) {
	            		OP.loadFields(id);
	            	}
	            },
	            showFieldGridData: function(linkID, xml) {
	            	for (var i = 0; i < OP.linkList.length; i++) {
	            		if (OP.linkList[i].id == linkID) {
	            			if (OV.isClear(xml)) {
	            				if (OV.isClear(OP.linkList[i].xml)) return false;
	            				xml = OP.linkList[i].xml;
	            			} else {
	            				OP.linkList[i].xml = xml;
	            			}
	            			justep.xbl('fieldGridData').loadData(null, xml, null, false);
	            			break;
	            		}
	            	}
	            	return true;
	            },
	            
	            queryLink: function() {
	                var root = excuteKSQLQuery("/system/data", "select SA_DocLinkDefine, SA_DocLinkDefine.sProcess,SA_DocLinkDefine.sActivity from SA_DocLinkDefine SA_DocLinkDefine ORDER BY SA_DocLinkDefine.sProcess asc,SA_DocLinkDefine.sActivity asc");
	           		
					var rows = justep.XML.eval(root.responseXML, "//rows/row");
					var linkProcessNameList = new Array();
					for (var i = 0; i < rows.length; i++) {
						var row = justep.XML.eval(rows[i], 'cell');						
						OP.linkList[i] = {};
						var lst = "id,sProcess,sActivity".split(",");
						for(var j = 0; j < lst.length; j++){
							var name = lst[j];
							var value = justep.XML.getNodeText(row[j]);
							OP.linkList[i][name] = value;
						}
						var sProcess = OP.linkList[i].sProcess;
						if (linkProcessNameList.toString().indexOf(sProcess) == -1) {
							linkProcessNameList.push(sProcess);
							document.getElementById("selectProcess")[linkProcessNameList.length - 1] = new Option(sProcess, sProcess);
						}
					}
					OP.selectProcessChange();
				},
            
	            loadFields: function(id) {
            		var root = excuteKSQLQuery("/system/data", "select SA_DocActivityTemplateField,SA_DocActivityTemplateField.sFieldID,SA_DocActivityTemplateField.sFieldName from SA_DocActivityTemplateField SA_DocActivityTemplateField where SA_DocActivityTemplateField.sDocLinkDefineID='"+id+"'");
                    justep.xbl('fieldGridData').loadXML(root.responseXML, null, false, null);
				    //justep.xbl('fieldGridData').loadData(null, root.responseXML, null, false);
				 					
	            }
	            
            };
            
            justep.windowDialogReceiver.acceptParentParamsFun = function(event){
				var data = event.data;
            	OP.officeViewerFieldInit(data);
            }
            
            fieldGridDbClick = function(){
                    var grid = justep.xbl('fieldGridData');
					//if (grid.selectedRows.length == 1) {
						document.getElementById('inputFieldID').value = grid.getValue('sFieldID');
      					document.getElementById('inputFieldName').value = grid.getValue('sFieldName');
					//}	            
 	        }
        ]]>
        </xhtml:script>
	</xui:resource>
	
	<xui:view>
		<xui:layout>
			<xhtml:table>
				<xhtml:tr>
					<xhtml:td>
						<xhtml:table width="100%" border="0" cellspacing="0" cellpadding="0">
							<xhtml:tr>
								<xhtml:td width="100%">
									<xhtml:span>域标识:&#160;</xhtml:span><xhtml:input id="inputFieldID" type="text"></xhtml:input>
									<xhtml:span>&#160;</xhtml:span><xhtml:span>&#160;</xhtml:span>
									<xhtml:span>域名称:&#160;</xhtml:span><xhtml:input id="inputFieldName" type="text"></xhtml:input>
									<xhtml:span>&#160;</xhtml:span><xhtml:span>&#160;</xhtml:span>
									</xhtml:td>
							</xhtml:tr>
							<xhtml:tr id="trGridSplit" style="display:none;">
								<xhtml:td>
									<xhtml:span>&#160;</xhtml:span>
								</xhtml:td>
							</xhtml:tr>
							<xhtml:tr id="trGrid" style="display:none;">
								<xhtml:td width="100%">
									<xhtml:fieldset>
										<xhtml:legend>选择模板域</xhtml:legend>
											<xhtml:table width="100%" border="0" cellspacing="0" cellpadding="0">
												<xhtml:tr>
													<xhtml:td>
		      											<xhtml:span>过程名:&#160;</xhtml:span>
		      												<xhtml:select id="selectProcess" onchange="OP.selectProcessChange()" style="width:300">
		      												</xhtml:select>
		      											<xhtml:span>&#160;</xhtml:span><xhtml:span>&#160;</xhtml:span>
		      											<xhtml:span>活动名:&#160;</xhtml:span>
		      											<xhtml:select id="selectActivity" onchange="OP.selectActivityChange()" style="width:100">
		      											</xhtml:select>
		      										</xhtml:td>
		      									</xhtml:tr>
		      									<xhtml:tr>
													<xhtml:td>
														<xhtml:span>&#160;</xhtml:span>
													</xhtml:td>
												</xhtml:tr>
												<xhtml:tr>
													<xhtml:td>
														<!--<xforms:grid data="fieldGridData" id="fieldGrid" style="width:100%;height:140;"> 
															<xforms:column width="180" ref="sFieldID" label="域标识" />
															<xforms:column width="120" ref="sFieldName" label="域名称" />
															<xforms:action ev:event="xforms-row-dblclick">
																<xforms:script>
																	var grid = xforms('fieldGrid').grid;
																	if (grid.selectedRows.length == 1) {
																		document.getElementById('inputFieldID').value = grid.getValueByName('sFieldID');
						            									document.getElementById('inputFieldName').value = grid.getValueByName('sFieldName');
																	}
																</xforms:script>
															</xforms:action>
														</xforms:grid>
													-->
													     <xhtml:div data="fieldGridData" id="fieldGrid" onRowDblClick="fieldGridDbClick"
														      component="/UI/system/components/grid.xbl.xml#grid" style="width:100%;height:140;overflow:hidden">
															<xui:column width="180" ref="sFieldID" label="域标识"  />
															<xui:column width="120"  ref="sFieldName" label="域名称" />
														</xhtml:div>
													</xhtml:td>
												</xhtml:tr>
		      								</xhtml:table>
	                   				 </xhtml:fieldset>
								</xhtml:td>
							</xhtml:tr>
						</xhtml:table>
      				</xhtml:td>
				</xhtml:tr>
 				<xhtml:tr>
 					<xhtml:td>
 					 <xhtml:table style="table-layout:fixed;">
							<xhtml:tr>
								<xhtml:td width="100%" />
									<xhtml:td width="60px" align="right">
										<xforms:trigger>
											<xforms:label>确定</xforms:label>
											<xforms:action ev:event="DOMActivate">
												<xforms:script>
													justep.windowDialogReceiver.windowEnsure(OP.officeNotifySendData());
												</xforms:script>
											</xforms:action>
										</xforms:trigger>
									</xhtml:td>
									<xhtml:td width="60px" align="right">
										<xforms:trigger>
											<xforms:label>取消</xforms:label>
											<xforms:action ev:event="DOMActivate">
												<xforms:script>
													justep.windowDialogReceiver.windowCancel();
												</xforms:script>
											</xforms:action>
										</xforms:trigger>
								</xhtml:td>
							</xhtml:tr>
						</xhtml:table>
				 		<!--<xforms:trigger>
							<xforms:label>确定</xforms:label>
							<xforms:action ev:event="DOMActivate">
								<xforms:script>
									justep.windowDialogReceiver.windowEnsure(OP.officeNotifySendData());
								</xforms:script>
							</xforms:action>
						</xforms:trigger>-->
						<!--<xforms:trigger>
							<xforms:label>取消</xforms:label>
							<xforms:action ev:event="DOMActivate">
								<xforms:script>
									justep.windowDialogReceiver.windowCancel();
								</xforms:script>
							</xforms:action>
						</xforms:trigger>-->
		 			</xhtml:td>
 				</xhtml:tr>
 			</xhtml:table>
		</xui:layout>
	</xui:view>
</xui:window>