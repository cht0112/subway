<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:158px;left:200px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="value" src="" auto-load="true" id="dValues" style=";" confirm-refresh="false"/> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;" border-size="8">
   <top size="38px" id="borderLayout-top1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="8"><xui:place control="triggerInsert" id="controlPlace6"></xui:place>
  <xui:place control="triggerDelete" id="controlPlace7"></xui:place></xhtml:div></top>
   <center id="borderLayout-center1"><xui:place control="gridValues" id="controlPlace2" style="height:100%;width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"></xui:place></center>
  <bottom size="70px" id="borderLayout-bottom1">
  
  <xhtml:label id="label3" style="width:100%;float:left;" class="xui-label">表达式示例：</xhtml:label><xhtml:label id="label1" style="width:100%;float:left;" class="xui-label">　　允许查询“项目一部”下所有人的工作记录：OR(SA_WorkRecord.sCreatorFName like '%/项目一部/%')</xhtml:label>
  <xhtml:label id="label2" style="width:100%;float:left;" class="xui-label">　　只允许查询自己的工作记录：AND(SA_WorkRecord.sCreatorPersonID = :currentPersonID())</xhtml:label>
  <xui:place control="btnCancel" id="controlPlace4" style="float:right;width:75px;margin-top:5px;"></xui:place><xui:place control="btnOK" id="controlPlace5" style="float:right;width:75px;margin-top:5px;margin-right:8px;"></xui:place></bottom></xhtml:div>
  <xui:place control="receiver" id="controlPlace3" style="top:228px;left:384px;"></xui:place></xui:layout> 
  <xforms:trigger id="btnCancel" appearance="minimal">
   <xforms:label id="xuiLabel2"><![CDATA[取消]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[policyValues.btnCancelClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btnOK" class="button-green" appearance="image-text">
   <xforms:label id="xuiLabel3"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[policyValues.btnOKClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridValues" data="dValues" edit-mode="true" class="grid-compact" space-column="false">
   <xui:column id="gridColumn1" ref="value" type="ed" label="value" width="*"></xui:column></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="policyValues.receiverReceive"></xhtml:div>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="triggerInsert" icon-class="icon-system-plus" class="button-blue" appearance="image-text">
   <xforms:label id="default1"><![CDATA[新建]]></xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[policyValues.insertItemClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="triggerDelete" appearance="image-minimal" operation-owner="dValues" operation="delete">
   <xforms:label id="default2"><![CDATA[]]></xforms:label>
   </xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="policyValues.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  <xhtml:script id="htmlScript2"></xhtml:script></xui:resource> 
</xui:window>
