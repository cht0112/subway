<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:37px;height:auto;left:575px;">
  <data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="value" src="" auto-load="true" id="mainData" onCustomRefresh="getRelationValueDialog.mainDataCustomRefresh" auto-new="false" onBeforeRefresh="getRelationValueDialog.mainDataBeforeRefresh"></data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px">
   <top size="38px" id="borderLayout-top1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="8">
  <xhtml:input type="text" id="filter-input" class="xui-input"></xhtml:input><xui:place control="trigger1" id="controlPlace1" style="width:37px;"></xui:place></xhtml:div>
  <xui:place control="pagination1" id="controlPlace4" style="display: block;position:absolute;top:0;right:0px"></xui:place></top>
   <center id="borderLayout-center1"><xui:place control="grid1" id="controlPlace3" style="height:100%;width:100%;"></xui:place></center>
  <bottom size="28px" id="borderLayout-bottom1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="width:150px;display:block;float:right;">
   <xui:place control="btn-ok-id" id="controlPlace5"></xui:place>
   <xui:place control="btn-cancel-id" id="controlPlace7"></xui:place></xhtml:div></bottom></xhtml:div></xui:layout> 
  <xforms:trigger id="trigger1" class="button-yellow" icon-class="icon-system-search" appearance="image">
   <xforms:label id="default1">trigger</xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[getRelationValueDialog.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btn-ok-id" appearance="image-text" class="button-green">
   <xforms:label id="default5">确  定</xforms:label>
   <xforms:action id="action6" ev:event="DOMActivate"><xforms:script id="xformsScript6"><![CDATA[getRelationValueDialog.btn_ok_idClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btn-cancel-id" appearance="image-minimal">
   <xforms:label id="default7">取 消</xforms:label>
   <xforms:action id="action5" ev:event="DOMActivate"><xforms:script id="xformsScript5"><![CDATA[getRelationValueDialog.btn_cancel_idClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" header-row-height="36" row-height="20" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" class="grid-flat xui-grid-hide-head xui-grid-hide-VLine" data="mainData"><xui:column id="gridColumn1" type="ed" width="*" ref="temp" label="temp"></xui:column></xhtml:div>
  <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" class="small" items="pre next" id="pagination1" data="mainData" page-count="1" pre-label="&amp;lt;" next-label="&gt;"></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="getRelationValueDialog.js"></xhtml:script></xui:resource> 
</xui:window>
