<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" id="docNodeSelect" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:144px;left:57px;"> 
    <data id="docNodeTree" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_DocNode" is-tree="true" offset="1" limit="-1" auto-load="true"> 
      <reader action="/system/logic/action/queryDocNodeAction"/>  
      <writer action="/system/logic/action/saveDocNodeAction"/>  
      <creator action="/system/logic/action/createDocNodeAction"/>  
      <filter name="sKindFilter">SA_DocNode.sKind='dir'</filter>  
      <filter name="sFlagFilter">SA_DocNode.sFlag=1</filter>  
      <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL"
        id="docNodeTreeRootFilter"/> 
    </data>  
    <data id="docNodeList" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_DocNode" offset="1" limit="-1" auto-load="true" filter-relations="sDocName,sCreatorName,sCreatorDeptName,sCreateTime,sEditorName,sEditorDeptName,sLastWriterName,sLastWriterDeptName,sDocSerialNumber,sKeywords"> 
      <reader action="/system/logic/action/queryDocNodeAction"/>  
      <writer action="/system/logic/action/saveDocNodeAction"/>  
      <creator action="/system/logic/action/createDocNodeAction"/>  
      <filter name="sKindFilter">SA_DocNode.sKind&lt;&gt;'dir'</filter>  
      <filter name="sFlagFilter">SA_DocNode.sFlag=1</filter>  
      <master data="docNodeTree" relation="sParentID" auto-load="true"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;" border-size="8px"> 
        <center id="borderLayout-center1"> 
          <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter"
            id="splitter" has-drag-bar="true" has-arrow-button="true" mode="horz"
            fix-size="30%" style="width:100%;height:100%;"> 
            <xhtml:div region="left" style="width:100%;height:100%;"> 
              <place control="docNodeTreeView" style="width:100%; height:100%"/> 
            </xhtml:div>  
            <xhtml:div region="right"> 
              <place control="docNodeListView" style="width:100%; height:100%"/> 
            </xhtml:div> 
          </xhtml:div> 
        </center>  
        <bottom size="38px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar1" style="float:right;margin:8px 0;">
            <xforms:trigger id="btnOK" class="button-green"> 
              <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
              <xforms:action id="action2" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript2"><![CDATA[selectTmpDialog.windowEnsure()]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xforms:trigger id="btnCancel" appearance="minimal"> 
              <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
              <xforms:action id="action3" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript3"><![CDATA[justep.windowDialogReceiver.windowCancel()]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </xhtml:div>
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <view id="docNodeTreeView"> 
      <xhtml:div style="width:100%; height:100%; border-top: 1px solid #D3D3D3; border-bottom: 1px solid #D3D3D3;border-left: 1px solid #D3D3D3; border-right: 1px solid #D3D3D3;"
        data="docNodeTree" id="docNodeTreeGrid" appearance="tree" component="/UI/system/components/grid.xbl.xml#grid"
        onShowNodeImg="selectTmpDialog.docNodeTreeGridShowNodeImg" class="ui-light"> 
        <column label="名称" ref="sDocName" type="tree" width="*"/> 
      </xhtml:div> 
    </view>  
    <view id="docNodeListView"> 
      <xhtml:div data="docNodeList" id="docNodeListGrid" component="/UI/system/components/grid.xbl.xml#grid"
        style="width:100%;height:100%;" class="grid-compact"> 
        <column label="名称" ref="sDocName" width="*"/>  
        <column width="80px" ref="sSize" label="大小(KB)" type="html" onRender="transB2KB"
          readonly="true"/> 
      </xhtml:div> 
    </view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script id="htmlScript1" src="selectTmpDialog.js"/> 
  </xui:resource> 
</xui:window>
