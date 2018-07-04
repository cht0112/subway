<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:153px;left:501px;"><data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="path" src="" auto-load="false" id="modelData" store-type="simple" confirm-refresh="false"></data>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="selected,name" src="" auto-load="false" id="conceptData" store-type="grid"></data>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="model" src="" auto-load="true" id="selectedData" store-type="simple"><rows xmlns="" id="default7">
   <row id="default8">
    <cell id="default9"></cell></row> </rows></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[mainActivity.model1Load(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;">
   <top size="30px" id="borderLayout-top1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="width:100%;height:100%;">
  <xhtml:label id="label1" class="xui-label"><![CDATA[请选择数据模块：]]></xhtml:label><xui:place control="gridSelect1" id="controlPlace2" style="width:400px;"></xui:place><xui:place control="exportTrigger" id="controlPlace1" style="width:140px;"></xui:place>
  </xhtml:div></top>
   <center id="borderLayout-center1"><xui:place control="conceptGrid" id="controlPlace3" style="height:100%;width:100%;"></xui:place></center>
  </xhtml:div></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="exportTrigger">
   <xforms:label id="default1"><![CDATA[数据导出KSQL]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[mainActivity.exportTriggerClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('selectedData')/model" label-ref="data('selectedData')/model" onCloseup="mainActivity.gridSelect1Closeup">
   <xforms:label ref="model" id="default2"></xforms:label>
   <xforms:value ref="model" id="default3"></xforms:value>
   <xforms:itemset id="default4" data="modelData" auto-load-data="true" independence="true"><xforms:column ref="model" id="default6"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid" header-row-height="36" row-height="36" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="conceptGrid" data="conceptData" multi-selection="true"><xui:column id="gridColumn1" ref="selected" label="#master_checkbox" type="ch" width="36" align="center"></xui:column>
  <xui:column id="gridColumn2" ref="name" label="需要导出的概念" type="ed" width="*" filter-editor="#text_filter"></xui:column></xhtml:div>
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script>
  <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"></xhtml:script></xui:resource> 
</xui:window>
