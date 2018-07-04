<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xforms:model id="model1" style="top:314px;height:auto;left:405px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData1" concept="TEST_PROJECT_TASK_INFO"><creator id="default1" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/toolProtect/logic/action/ToolProtectAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="bizData2"></data></xforms:model>  
  <xui:view id="rootView" class="xui-container"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout" type="absolute"><xui:place control="view1" id="controlPlace1" style="height:739px;position:absolute;width:188px;top:0;left:0;"></xui:place>
  <xui:place control="view5" id="controlPlace8" style="position:absolute;top:3px;left:198px;height:726px;width:585px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="treeSelect1" id="controlPlace2" style="position:absolute;top:5px;left:5px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator="," value-separator="," ext-separator="," id="treeSelect1" ref="data('bizData1')/tOOLCNAME">
   <xforms:label id="default4" ref="tOOLCNAME"></xforms:label>
   <xforms:value id="default5" ref="DETECTION_TOOL_INFO"></xforms:value>
   <xforms:itemset id="default6" data="bizData2" auto-load-data="true">
  <xforms:column ref="DETECTION_TOOL_INFO" visible="false" id="default11"></xforms:column>
  <xforms:column ref="tOOLCNAME" id="default12"></xforms:column></xforms:itemset></xhtml:div></xui:view>
  <xui:view auto-load="true" id="view5" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout5"></layout>
  </xui:view></xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
