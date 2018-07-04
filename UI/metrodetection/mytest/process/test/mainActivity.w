<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xforms:model id="model1" style="top:225px;height:auto;left:439px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="bizData1" concept="ME_MyTest"><creator id="default1" action="/metrodetection/system_code/logic/action/createME_MyTestAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryME_MyTestAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveME_MyTestAction"></writer></data></xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace2" style="width:413px;height:241px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="grid2" id="controlPlace4" style="position:absolute;width:341px;height:103px;top:122px;left:34px;"></xui:place>
  <xui:place control="toolbars1" id="controlPlace6" style="position:absolute;top:74px;width:400px;height:25px;left:22px;"></xui:place></layout>
  <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid" header-row-height="36" row-height="36" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid2" data="bizData1"><xui:column id="gridColumn1" ref="fName" label="name" type="ed" width="154px"></xui:column>
  <xui:column id="gridColumn2" ref="fAge" label="age" type="ed" width="142px"></xui:column></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1">
   <item name="insert-item" id="barItem1"></item>
   <item name="save-item" id="barItem2"></item>
   <item name="delete-item" id="barItem3"></item>
   <item name="refresh-item" id="barItem4"></item>
   <item name="filter-pro-item" id="customBarItem1"></item>
   <item name="separator" id="customBarItem2"></item>
   <item name="first-item" id="barItem5"></item>
   <item name="pre-item" id="barItem6"></item>
   <item name="next-item" id="barItem7"></item>
   <item name="last-item" id="barItem8"></item>
   <item name="separator" id="customBarItem3"></item>
   <item name="custom-page-item" id="customPageItem1"></item></xui:bar></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
