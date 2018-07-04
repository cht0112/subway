<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xui="http://www.justep.com/xui" id="docNodeSelect" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="docNodeSelectModel" style="top:93px;height:auto;left:177px;"> 
    <data id="docNodeTree" component="/UI/system/components/data.xbl.xml#bizData" store-type="grid" concept="SA_DocNode" is-tree="true" offset="1" limit="-1" auto-load="true"> 
      <reader action="/system/logic/action/queryDocNodeAction"/>  
      <writer action="/system/logic/action/saveDocNodeAction"/>  
      <creator action="/system/logic/action/createDocNodeAction"/>  
      <filter name="sKindFilter">SA_DocNode.sKind='dir'</filter>  
      <filter name="sFlagFilter">SA_DocNode.sFlag=1</filter>  
      <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL"/> 
    </data> 
  </xforms:model>  
  <resource> 
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil2.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script type="text/javascript">function getDocInfoData(){ var docNodeTree = justep.xbl("docNodeTree"); var rowId = docNodeTree.getCurrentRowId(); var rootName = docNodeTree.getValue("sDocName",rowId); var docPath = docNodeTree.getValue("sDocPath",rowId); var rootPath = justep.doc.InnerUtils.getDocFullPath(rowId, docPath); var data = { rootName: rootName, rootPath: rootPath }; return data; };</xhtml:script> 
  </resource>  
  <view style="height:100%;width:100%;"> 
    <layout style="height:100%;width:100%;"> 
      <xhtml:table style="width:100%;height:100%;table-layout:fixed" cellspacing="8" border="0" cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td> 
            <place control="docTreeView" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr height="22px"> 
          <xhtml:td> 
            <xforms:trigger id="btnCancel" appearance="minimal" style="float:right"> 
		      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
		      <xforms:action id="action3" ev:event="DOMActivate">
		        <xforms:script id="xformsScript3"><![CDATA[justep.windowDialogReceiver.windowCancel()]]></xforms:script>
		      </xforms:action>
		    </xforms:trigger>  
		    <xforms:trigger id="btnOK" class="button-green" style="float:right"> 
		      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
		      <xforms:action id="action2" ev:event="DOMActivate">
		        <xforms:script id="xformsScript2"><![CDATA[justep.windowDialogReceiver.windowEnsure(getDocInfoData())]]></xforms:script>
		      </xforms:action>
		    </xforms:trigger> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </layout>  
    <view id="docTreeView"> 
      <xhtml:div style="border: 1px solid #D3D3D3;width:100%;height:100%;" data="docNodeTree" id="docNodeTreeGrid" appearance="tree" component="/UI/system/components/grid.xbl.xml#grid" class="ui-light"> 
        <column label="名称" ref="sDocName" type="tree" width="*" readonly="true"/> 
      </xhtml:div>  
      <xui:layout id="layout2" style="height:100%;width:100%;"> 
        <xui:place control="docNodeTreeGrid" id="controlPlace4" style="width:100%;height:100%;"/> 
      </xui:layout> 
    </view> 
  </view> 
</window>
