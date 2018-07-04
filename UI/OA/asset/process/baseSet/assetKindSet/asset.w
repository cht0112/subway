<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:72px;left:271px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="assetTypeD" concept="TOOL_TYPE_CODE" confirm-delete="false" confirm-refresh="false" direct-delete="true" store-type="simple" limit="-1"><reader id="default1" action="/metrodetection/system_code/logic/action/queryTOOL_TYPE_CODEAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="toolSortD" concept="TOOL_SORT_CODE" direct-delete="true" confirm-delete="false" confirm-refresh="false" store-type="simple" limit="-1"><reader id="default2" action="/metrodetection/system_code/logic/action/queryTOOL_SORT_CODEAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="toolCategoryD" concept="TOOL_CATEGORY_CODE" direct-delete="true" confirm-delete="false" confirm-refresh="false" store-type="simple" limit="-1"><reader id="default3" action="/metrodetection/system_code/logic/action/queryTOOL_CATEGORY_CODEAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="xml" columns="toolCategory,toolSort,toolType" src="" auto-load="true" id="toolSortTypeCategoryCD" store-type="simple" confirm-delete="true" confirm-refresh="false"><rule id="dataRule1" column="toolCategory" required="true()" alert="'不能为空'"></rule>
  <rule id="dataRule2" column="toolSort" alert="'不能为空'" required="true()"></rule>
  <rule id="dataRule3" column="toolType" alert="'不能为空'" required="true()"></rule></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="windowReceiver1" id="controlPlace1" style="position:absolute;top:247px;left:246px;"></xui:place>
  <xui:place control="view1" id="controlPlace2" style="height:100%;width:100%;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1" onReceive="asset.windowReceiver1Receive"></xhtml:div>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;top:46px;left:72px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace4" style="position:absolute;top:89px;left:72px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace5" style="position:absolute;top:137px;left:72px;"></xui:place>
  <xui:place control="trigger1" id="controlPlace6" style="position:absolute;top:188px;left:100px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;top:48px;left:20px;" class="xui-label"><![CDATA[工具分类]]></xhtml:label>
  <xhtml:label id="label2" class="xui-label" style="position:absolute;left:20px;position:absolute;top:93px;"><![CDATA[工具类型]]></xhtml:label>
  <xhtml:label id="label4" class="xui-label" style="position:absolute;left:20px;position:absolute;position:absolute;top:139px;"><![CDATA[工具名字]]></xhtml:label></layout>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('toolSortTypeCategoryCD')/toolCategory">
   <xforms:label ref="tOOLCATEGORYCNAME" id="default4"></xforms:label>
   <xforms:value ref="TOOL_CATEGORY_CODE" id="default5"></xforms:value>
   <xforms:itemset id="default6" data="toolCategoryD" auto-load-data="true">
  
  
  
  <xforms:column ref="TOOL_CATEGORY_CODE" visible="false" id="default13"></xforms:column>
  <xforms:column ref="tOOLCATEGORYCNAME" id="default14"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('toolSortTypeCategoryCD')/toolSort" onDropdown="asset.gridSelect2Dropdown">
   <xforms:label ref="tOOLSORTCNAME" id="default7"></xforms:label>
   <xforms:value ref="TOOL_SORT_CODE" id="default8"></xforms:value>
   <xforms:itemset id="default9" data="toolSortD" auto-load-data="true">
  
  
  
  <xforms:column ref="TOOL_SORT_CODE" visible="false" id="default15"></xforms:column>
  <xforms:column ref="tOOLSORTCNAME" id="default16"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('toolSortTypeCategoryCD')/toolType" onDropdown="asset.gridSelect3Dropdown">
   <xforms:label ref="tOOLTYPECNAME" id="default10"></xforms:label>
   <xforms:value ref="TOOL_TYPE_CODE" id="default11"></xforms:value>
   <xforms:itemset id="default12" data="assetTypeD" auto-load-data="true">
  
  
  
  <xforms:column ref="TOOL_TYPE_CODE" visible="false" id="default17"></xforms:column>
  <xforms:column ref="tOOLTYPECNAME" id="default18"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:trigger id="trigger1">
   <xforms:label id="default37"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[asset.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="asset.js"></xhtml:script></xui:resource> 
</xui:window>
