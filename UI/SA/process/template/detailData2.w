<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:165px;height:auto;left:117px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="bizData1" concept="SA_ProcessTemplate" confirm-refresh="false" limit="1"><reader id="default2" action="/system/logic/action/queryProcessTemplateAction"></reader>
  <creator id="default3" action="/system/logic/action/createProcessTemplateAction"></creator>
  <writer id="default4" action="/system/logic/action/saveProcessTemplateAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[detailData2.model1XBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="xml" columns="label,value" src="" auto-load="false" id="kindData" store-type="simple"><rows xmlns="" id="default5">
   <row id="default6">
    <cell id="default7">用户</cell>
    <cell id="default8">private</cell></row> 
   <row id="default9">
    <cell id="default10">系统</cell>
    <cell id="default11">public</cell></row> </rows></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="30px" id="borderLayout-top1">
          <xhtml:div class="cell-layout" component="/UI/system/components/cellLayout.xbl.xml#cellLayout"
            id="cellLayout2" style="width:65%;height:323%;">
            <layout-content id="default1"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="80" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 63px"></td><td  style="WIDTH: 97px"></td><td  style="WIDTH: 19px"></td><td  style="WIDTH: 46px"></td><td ></td><td  style="WIDTH: 18px"></td><td  style="WIDTH: 39px"></td><td  style="WIDTH: 95px"></td><td  style="WIDTH: 70px"></td></tr>
     <tr><td ></td><td  style="HEIGHT: 19px">模板名称：</td><td  style="HEIGHT: 19px" componentId="input1"></td><td  style="HEIGHT: 19px"></td><td  style="HEIGHT: 19px">类型：</td><td  style="HEIGHT: 19px" componentId="simpleSelect1"></td><td  style="HEIGHT: 19px"></td><td  style="HEIGHT: 19px">流程：</td><td  style="HEIGHT: 19px"></td><td  style="HEIGHT: 19px" componentId="trigger3"></td></tr>
  </table>
]]></layout-content>
          <xui:place control="input1" id="controlPlace3" style="width:100%;height:20px;"></xui:place>
  <xui:place control="simpleSelect1" id="controlPlace4" style="width:90%;"></xui:place>
  <xui:place control="trigger3" id="controlPlace7" style="width:99%;height:26px;"></xui:place></xhtml:div>
        </top>  
        <center id="borderLayout-center1"><xui:place control="windowReceiver1" id="controlPlace2" style="top:29px;left:72px;"></xui:place><xui:place control="grid1" id="controlPlace1" style="width:647px;height:100px;"></xui:place></center>  
        <bottom size="50px" id="borderLayout-bottom1"></bottom>
      </xhtml:div>
    <xui:place control="windowReceiver2" id="controlPlace5" style="position:absolute;top:202px;left:462px;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="bizData1"><xui:column id="gridColumn1" ref="sName" label="名称" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn2" ref="sKindID" label="任务分类" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn3" ref="sProcessName" label="过程" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn4" ref="sActivityName" label="环节" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn5" ref="sCreatorName" label="提交者" type="ed" width="100px"></xui:column></xhtml:div>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1" onReceive="detailData2.windowReceiver1Receive"></xhtml:div>
  <xforms:input id="input1" ref="data('bizData1')/sName"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="simpleSelect1" ref="data('bizData1')/sKindID" option-data="kindData" option-label="label" option-value="value" dropdown-height="40px"></xhtml:div>
  <xforms:trigger id="trigger3" class="xui-autofill">
   <xforms:label id="xuiLabel3"><![CDATA[选择流程]]></xforms:label></xforms:trigger>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver2" onReceive="detailData2.windowReceiver2Receive"></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="detailData2.js"></xhtml:script></xui:resource> 
</xui:window>
