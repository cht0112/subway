<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns:justep="http://www.justep.com/x5#" xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:saxon="http://saxon.sf.net/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xsl:version="2.0" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="docTemplateDialog"> 
    <xui:data id="attachmentTemplate" columns="sDocName,sFileID,sDocPath" store-type="grid" component="/UI/system/components/data.xbl.xml#data" auto-load="true"/> 
  </xforms:model>  
  <xui:resource> 
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil2.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script> <![CDATA[
			justep.windowDialogReceiver.acceptParentParamsFun = function(event){
			    var initData = event.data;
			    var templateList = justep.xbl("attachmentTemplate");
			    var recordCount = templateList.getCount();
			    for(var i=recordCount-1 ;i >=0; i--){
			        templateList.removeByIndex(i);
			    }
				for(var i=0 ;i<initData.length;i++){
				    row = initData[i];
				    templateList.insert(row.sDocId,i,[row.sDocName,row.sFileId,row.sDocPath]);
				}
			}
		 	function getTemplateData(){
		 		var attachmentTemplate = justep.xbl("attachmentTemplate");
		 		var docID = attachmentTemplate.getCurrentRowId();
				var docPath = attachmentTemplate.getValue("sDocPath", docID);
				var docServerInfo = justep.doc.InnerUtils.getDocServerByDocPath(docPath);
				var templateHost = docPath;
				var data = {
					templateDocName: attachmentTemplate.getValue("sDocName", docID),
					templateHost: templateHost,
					templateFileID: attachmentTemplate.getValue("sFileID", docID)
				};
				return data;
		 	}
			]]> </xhtml:script> 
  </xui:resource>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout id="layout" style="height:100%;width:100%;">
    <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" 
      	style="width:100%;height:100%" border-size="8px" id="border1">
      	<center>
    		<xhtml:div data="attachmentTemplate" id="attachmentTemplateNav" space-column="false" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%;height:100%;" class="grid-compact"> 
              <xui:column ref="sDocName" width="400" label="模板名称"/>
            </xhtml:div>  	 
      	</center>
      	<bottom size="30px">
      		
  <xui:place control="trigger2" id="controlPlace2" style="float:right;width:75px;margin-top:8px;"></xui:place><xui:place control="trigger1" id="controlPlace1" style="float:right;width:75px;margin-top:8px;margin-right:8px;"></xui:place></bottom>
     </xhtml:div> 	 
    </xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" class="button-green">
   <xforms:label id="default1"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[justep.windowDialogReceiver.windowEnsure(getTemplateData())]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" appearance="minimal">
   <xforms:label id="default2"><![CDATA[取消]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[justep.windowDialogReceiver.windowCancel()]]></xforms:script></xforms:action></xforms:trigger></xui:view> 
</xui:window>
