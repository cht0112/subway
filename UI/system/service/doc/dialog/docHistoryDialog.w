<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns:justep="http://www.justep.com/x5#" xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:saxon="http://saxon.sf.net/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xsl:version="2.0" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="docHistoryDialog" style="height:auto;top:82px;left:635px;"> 
    <xui:data id="historyRecord" columns="SA_DocLog,sDocVersionID,sDocName,sSize,sPersonName,sDeptName,sTime" store-type="grid" component="/UI/system/components/data.xbl.xml#data"> 
      <reader action="/SA/task/logic/action/queryTaskCenterAction"/> 
    </xui:data> 
  </xforms:model>  
  <xui:resource> 
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil2.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script> <![CDATA[
			var docHostPath;
			var fileID;
			var docAccess;
			var isPrintDoc = true;
			var currDocVersion ;
			var docID;
			justep.windowDialogReceiver.acceptParentParamsFun = function(event){
				var data = event.data;
				fileID = data.fileID;
				docHostPath = data.docPath;
				docID = data.docID;
				var response = justep.doc.InnerUtils.getAccessRecord(docID, false, true, true);
				justep.xbl("historyRecord").loadXML(response.responseXML, null, false);
				justep.xbl("historyRecord").setIndex(0);				
				initParam(data.access);				
				if(!(typeof data.isPrint === "undefined" || data.isPrint == null)) 	
					isPrintDoc = data.isPrint;			
			}
			function refreshData(){
				var response = justep.doc.InnerUtils.getAccessRecord(docID, false, true, true);
				justep.xbl("historyRecord").loadXML(response.responseXML, null, false);
				justep.xbl("historyRecord").setIndex(0);
			}
			function initParam(access){
				docAccess = typeof access === "undefined" || access == null ? 32768 : access;
				if(!((docAccess % 8) >= 4)){					
					justep.xbl("downlaodBtn").setDisabled(true);										
				}
			}
			
			function browseDocByType(type) {
				var historyRecord = justep.xbl("historyRecord");
				var rowId = historyRecord.getCurrentRowId();
				var docVersion = historyRecord.getValue("sDocVersionID", rowId);
				var docName = historyRecord.getValue("sDocName", rowId);
				justep.doc.InnerUtils.browseDocByFileID(docHostPath, docName, fileID, docVersion, type, 'History',isPrintDoc);
			}

			function browseDoc() {
				browseDocByType("content");
			}

			function browseRevisionDoc() {
				var historyRecord = justep.xbl("historyRecord");
				var rowId = historyRecord.getCurrentRowId();
				var docName = historyRecord.getValue("sDocName", rowId);
				if ('.doc.docx.xls.xlsx.ppt.mpp.vsd.'.indexOf(String(/\.[^\.]+$/.exec(docName)) + '.') >= 0) {
					browseDocByType("revision");
				}
				else {
					alert("“" + docName　+  "”不包含修订类型的文件");
				}
			}
			function deleteVersion(){
				
				var historyRecord = justep.xbl("historyRecord");
				var rowId = historyRecord.getCurrentRowId();
				justep.doc.InnerUtils.deleteVersion(docHostPath, fileID,rowId, '-1');
				refreshData();
			}
			function deleteCurrentVersion(){
				var historyRecord = justep.xbl("historyRecord");
				var rowId = historyRecord.getCurrentRowId();
				var docVersion = historyRecord.getValue("sDocVersionID", rowId);
				justep.doc.InnerUtils.deleteVersion(docHostPath, fileID,rowId, docVersion);
				refreshData();
			}
			
			function downloadDoc(){
				var historyRecord = justep.xbl("historyRecord");
				var rowId = historyRecord.getCurrentRowId();
				var docVersion = historyRecord.getValue("sDocVersionID", rowId);
				justep.doc.InnerUtils.downloadDocByFileID(docHostPath, fileID, docVersion);
			}
			
			function tabPage1Select(){
				var historyRecord = justep.xbl("historyRecord");
				var rowId = historyRecord.getCurrentRowId();
				var docVersion = historyRecord.getValue("sDocVersionID", rowId);
				if(!rowId || docVersion == currDocVersion) 
					return;					
				currDocVersion = docVersion;
				var arr = justep.doc.InnerUtils.browseFileComment(docHostPath, fileID, docVersion);
				var a="";
				for(var i =0 ; i < arr.length ;i++){
					var item = arr[i];
					var revisionType ="其他操作";
					if(item.Type == 1){
						revisionType = "插入";
					}else if(item.Type == 2){
						revisionType = "删除";
					}						
					var content =item.Text?("\r\n内容:"+item.Text):'';
					a += "序号:"+item.Index+"; 操作类型:"+ revisionType +"; 修改人:"+item.Author+"; 修改时间:"+item.Date+";"+content+"\r\n\r\n";
				}
				$("#commentArea").val(a); 
			}
			
		]]> </xhtml:script> 
  </xui:resource>  
  <xui:view style="width:100%;height:100%;"> 
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" 
      	style="width:100%; height:100%" id="border1" border-size="8px">
        <top size="38px">
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="width:100%;"><xui:place control="downlaodBtn" id="controlPlace1" style="width:80px;"></xui:place>
  <xui:place control="trigger2" id="controlPlace2" style="width:82px;"></xui:place>
  <xui:place control="trigger3" id="controlPlace3" style="width:116px;"></xui:place>
  <xui:place control="trigger4" id="controlPlace4" style="width:133px;"></xui:place>
  <xui:place control="trigger5" id="controlPlace5" style="width:134px;"></xui:place></xhtml:div></top>
        <center>
        		<xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabbar" style="height:100%;width:100%;"> 
                    <xui:tab> 
                      <xui:label>常规</xui:label>  
                          <xhtml:div data="historyRecord" id="historyRecordNav" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%;height:328px;" class="grid-compact" row-height="35"> 
                            <xui:column width="30" ref="sDocVersionID" label="版本"/>  
                            <xui:column width="200" ref="sDocName" label="名称"/>  
                            <xui:column width="120" ref="sSize" label="大小(字节)"/>  
                            <xui:column width="120" ref="sPersonName" label="提交人"/>  
                            <xui:column width="120" ref="sDeptName" label="提交人部门" visable="false"/>
                            <xui:column width="*" type="dateTime" ref="sTime" label="提交时间"/>
                          </xhtml:div> 
                    </xui:tab>  
                    <xui:tab xforms-select="tabPage1Select"> 
                      <xui:label>修订项</xui:label>  
                      <xhtml:textarea id="commentArea" class="xui-textarea" style="padding:0;border:0;width:100%;height:328px;" readonly="true"/> 
                    </xui:tab> 
                  </xhtml:div>
        </center>
        <bottom size="30px">
            <xui:place control="trigger6" id="controlPlace6" style="float:right;width:75px;margin-top:8px;margin-right:8px;"></xui:place></bottom>
      </xhtml:div>
    </xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="downlaodBtn" icon-class="icon-system-download" appearance="minimal">
   <xforms:label id="default1"><![CDATA[下载文件]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[downloadDoc(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" icon-class="icon-system-eye" appearance="minimal">
   <xforms:label id="default2"><![CDATA[查看文件]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[browseDoc(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" icon-class="icon-system-eye" appearance="minimal">
   <xforms:label id="default3"><![CDATA[查看修订文件]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[browseRevisionDoc(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" icon-class="icon-system-cancel" appearance="minimal">
   <xforms:label id="default4"><![CDATA[删除当前历史版本]]></xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[deleteCurrentVersion(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" icon-class="icon-system-cancel" appearance="minimal">
   <xforms:label id="default5"><![CDATA[删除历史版本]]></xforms:label>
  <xforms:action id="action5" ev:event="DOMActivate"><xforms:script id="xformsScript5"><![CDATA[deleteVersion(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6" class="button-green">
   <xforms:label id="default6"><![CDATA[关闭]]></xforms:label>
  <xforms:action id="action6" ev:event="DOMActivate"><xforms:script id="xformsScript6"><![CDATA[justep.windowDialogReceiver.windowCancel()]]></xforms:script></xforms:action></xforms:trigger></xui:view> 
</xui:window>
