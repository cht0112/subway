<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:233px;height:auto;left:59px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="action,name"
      auto-load="false" id="actions"/>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">selectSingleAction.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grid1" data="actions" class="grid-compact"> 
      <column id="gridColumn2" ref="name" label="操作" type="ro" width="*"/> 
      <column id="gridColumn1" ref="action" label="操作" type="ro" width="*" visible="false"/>  
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="windowReceiver1" onReceive="selectSingleAction.windowReceiver1Receive"/>  
    <xui:layout style="height:100%;width:100%" id="rootLayout">
    <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;" border-size="5px">
   <top size="38px" id="borderLayout-top1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="margin-left:5px;"><xhtml:input type="text" value="" id="searchText" class="xui-input" onkeydown="selectSingleAction.searchTextKeydown(event)" style="width:195px; border: 0; border: 1px solid #c0c0c0;line-height:18px;;"></xhtml:input>
  <xui:place control="searchButton" id="controlPlace5" style="width:32px;"></xui:place></xhtml:div></top>
   <center id="borderLayout-center1">
			            <xui:place control="grid1" id="controlPlace1" style="height:100%;width:100%;"/>  
			            <xui:place control="windowReceiver1" id="controlPlace3"/> 
   </center>
  <bottom size="38px" id="borderLayout-bottom1">
             <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace2"></xui:place>
  <xui:place control="btnCancel" id="controlPlace4"></xui:place></xhtml:div></bottom>
  </xhtml:div></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnOK" class="button-green">
   <xforms:label id="default1"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[selectSingleAction.btnOKClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnCancel" appearance="minimal">
   <xforms:label id="default2"><![CDATA[取消]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[selectSingleAction.btnCancelClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="searchButton" class="button-yellow" icon-class="icon-system-search" appearance="image">
   <xforms:label id="default3">trigger</xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[selectSingleAction.searchButtonClick(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="selectSingleAction.js"/> 
  </xui:resource> 
</xui:window>
