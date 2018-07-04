<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="model1" style="height:auto;top:312px;left:113px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" data-type="json"
      columns="index,app,create,init" src="" auto-load="false" id="data1"/>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1"><![CDATA[appDbManagerActivity.model1Load(event)]]></xforms:script> 
    </xforms:action> 
  <data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="client" src="" auto-load="true" id="clientData" store-type="simple"><rows xmlns="" id="default3">
   <row id="default4">
    <cell id="default5"></cell></row> </rows></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="39px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar1"> 
            <xui:place control="refresh" id="controlPlace1"/> 
          
  <xhtml:label id="label1" class="xui-label"><![CDATA[租户：]]></xhtml:label><xui:place control="input1" id="controlPlace4"></xui:place><xui:place control="clientTrigger" id="controlPlace3"></xui:place>
  </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="grid1" id="controlPlace2" style="width:100%;height:100%;"/> 
        </center> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refresh"> 
      <xforms:label id="default1"><![CDATA[刷新]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[appDbManagerActivity.refreshClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid"
      header-row-height="36" row-height="36" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid1" data="data1"> 
      <xui:column id="gridColumn3" ref="index" label="序号" type="ro" width="46px" align="center"/>
      <xui:column id="gridColumn1" ref="app" label="应用模块" type="ro" width="300px"/>  
      <xui:column id="gridColumn2" ref="create" label="创建表" type="html" width="150px"
        onRender="appDbManagerActivity.grid1_createRender" align="center"/>  
      <xui:column id="gridColumn4" ref=" init" label="初始化表" type="html" width="150px"
        onRender="appDbManagerActivity.grid1_initRender" align="center"/>
    </xhtml:div> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="clientTrigger">
   <xforms:label id="default2"><![CDATA[添加租户]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[appDbManagerActivity.clientTriggerClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:input id="input1" ref="data('clientData')/client"></xforms:input></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="appDbManagerActivity.js"/>  
    <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>
