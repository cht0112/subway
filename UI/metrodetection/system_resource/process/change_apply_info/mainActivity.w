<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" cacheable="true" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:394px;height:auto;left:385px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="CHANGE_APPLY_INFO" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryCHANGE_APPLY_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction"></writer>
  <rule id="dataBizRule1" concept="CHANGE_APPLY_INFO" required="true()" alert="'该项不能为空'"></rule>
  <rule id="dataBizRule2" relation="CHANGE_APPLY_NOAPPLYNO" required="true()" alert="'该项不能为空'"></rule>
  <rule id="dataBizRule3" relation="CHANGE_TITLETITLE" alert="'该项不能为空'" required="true()"></rule>
  <rule id="dataBizRule4" relation="CHANGE_CONTENTCONTENT" required="true()" alert="'该项不能为空'"></rule>
  <rule id="dataBizRule5" relation="APPLY_PERSONPERSON" alert="'该项不能为空'" required="true()"></rule>
  <rule id="dataBizRule6" relation="APPLY_DATEDATE" required="true()" alert="'该项不能为空'"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="TEST_PROJECT_INFO"><creator id="default10" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default11" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default12" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="width:805px;height:732px;position:relative;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout1">
  <xui:place control="view6" id="controlPlace9" style="width:1081px;height:46px;"></xui:place><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="height:55%;width:85%;" id="excelLayout1" src="excelLayout1.xls"></xhtml:div>
  </layout>
  <xforms:input ref="data('bizData1')/CHANGE_APPLY_NOAPPLYNO" id="CHANGE_APPLY_NOAPPLYNO1"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_TITLETITLE" id="CHANGE_TITLETITLE1"></xforms:input>
  <xforms:input ref="data('bizData1')/PROJECT_IDID" id="PROJECT_IDID1"></xforms:input>
  <xforms:input ref="data('bizData1')/PROJECT_NAMENAME" id="PROJECT_NAMENAME1"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT1"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_CONTENTCONTENT" id="CHANGE_CONTENTCONTENT1"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_REASONREASON" id="CHANGE_REASONREASON1"></xforms:input>
  <xforms:input ref="data('bizData1')/IMPACT_RANGERANGE" id="IMPACT_RANGERANGE1"></xforms:input>
  <xforms:input ref="data('bizData1')/POTENTIAL_RISKRISK" id="POTENTIAL_RISKRISK1"></xforms:input>
  <xforms:input ref="data('bizData1')/RESOLVE_RISKRISK" id="RESOLVE_RISKRISK1"></xforms:input>
  <xforms:input ref="data('bizData1')/IMPLEMENTATION_PROCESSPROCESS" id="IMPLEMENTATION_PROCESSPROCESS1"></xforms:input>
  <xforms:input ref="data('bizData1')/RESOURCES_NEEDEDNEEDED" id="RESOURCES_NEEDEDNEEDED1"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_TIMETIME" id="CHANGE_TIMETIME1"></xforms:input>
  <xforms:input ref="data('bizData1')/APPLY_PERSONPERSON" id="APPLY_PERSONPERSON1"></xforms:input>
  <xforms:input ref="data('bizData1')/APPLY_DATEDATE" id="APPLY_DATEDATE1" format="yyyy-MM-dd" style="width:150px;"></xforms:input>
  <xui:view auto-load="true" id="view6" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout6"><xui:place control="toolbars4" id="controlPlace10" style="position:absolute;width:400px;left:5px;height:35px;top:5px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars4"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="bizData1" style="width:477px;">
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
   <item name="custom-page-item" id="customPageItem1"></item></xui:bar></xhtml:div></xui:view>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2">
   <xforms:label ref="" id="default8"></xforms:label>
   <xforms:value ref="" id="default9"></xforms:value>
   <xforms:itemset id="default13"></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('bizData1')/PROJECT_IDID" input-changeable="true" label-ref="data('bizData1')/PROJECT_NAMENAME">
   <xforms:label ref="pROJECTNAME" id="default14"></xforms:label>
   <xforms:value ref="TEST_PROJECT_INFO" id="default15"></xforms:value>
   <xforms:itemset id="default16" data="bizData2" auto-load-data="true">
  <xforms:column ref="TEST_PROJECT_INFO" visible="false" id="default7"></xforms:column>
  <xforms:column ref="pROJECTNAME" id="default17"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>
