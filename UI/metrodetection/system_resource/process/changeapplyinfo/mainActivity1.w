<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xforms:model id="model1" style="height:auto;top:647px;left:210px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData1" concept="CHANGE_APPLY_INFO" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryCHANGE_APPLY_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction"></writer>
  <rule id="dataBizRule1" concept="CHANGE_APPLY_INFO" readonly="data('bizData1')/CHANGE_APPLY_NOAPPLYNO=true()"></rule>
  <rule id="dataBizRule2" relation="CHANGE_APPLY_NOAPPLYNO"></rule>
  <rule id="dataBizRule3" relation="CHANGE_TITLETITLE"></rule>
  <rule id="dataBizRule4" relation="PROJECT_IDID"></rule>
  <rule id="dataBizRule5" relation="PROJECT_NAMENAME"></rule>
  <rule id="dataBizRule6" relation="CHANGE_OBJECTOBJECT"></rule>
  <rule id="dataBizRule7" relation="CHANGE_CONTENTCONTENT"></rule>
  <rule id="dataBizRule8" relation="CHANGE_REASONREASON"></rule>
  <rule id="dataBizRule9" relation="IMPACT_RANGERANGE"></rule>
  <rule id="dataBizRule10" relation="POTENTIAL_RISKRISK"></rule>
  <rule id="dataBizRule11" relation="RESOLVE_RISKRISK"></rule>
  <rule id="dataBizRule12" relation="IMPLEMENTATION_PROCESSPROCESS"></rule>
  <rule id="dataBizRule13" relation="RESOURCES_NEEDEDNEEDED"></rule>
  <rule id="dataBizRule14" relation="CHANGE_TIMETIME"></rule>
  <rule id="dataBizRule15" relation="APPLY_PERSONPERSON"></rule>
  <rule id="dataBizRule16" relation="APPLY_DATEDATE"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData2" concept="CHANGE_APPLY_INFO" store-type="simple"><creator id="default4" action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryCHANGE_APPLY_INFOAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData3" concept="TEST_PROJECT_INFO"><creator id="default13" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default14" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default15" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="width:676px;position:relative;height:347px;"></xui:place>
  <xui:place control="view2" id="controlPlace2" style="width:659px;height:389px;position:relative;"></xui:place>
  </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout1">
  <xui:place control="view7" id="controlPlace9" style="width:652px;height:53px;"></xui:place><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:102%;height:75%;" id="excelLayout1" src="excelLayout2.xls"></xhtml:div>
  </layout>
  <xforms:input ref="data('bizData1')/CHANGE_APPLY_NOAPPLYNO" id="CHANGE_APPLY_NOAPPLYNO2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_TITLETITLE" id="CHANGE_TITLETITLE2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/PROJECT_IDID" id="PROJECT_IDID2" readonly="true" disabled="true"></xforms:input>
  <xforms:input ref="data('bizData1')/PROJECT_NAMENAME" id="PROJECT_NAMENAME2" readonly="true" disabled="true"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_CONTENTCONTENT" id="CHANGE_CONTENTCONTENT2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_REASONREASON" id="CHANGE_REASONREASON2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/IMPACT_RANGERANGE" id="IMPACT_RANGERANGE2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/POTENTIAL_RISKRISK" id="POTENTIAL_RISKRISK2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/RESOLVE_RISKRISK" id="RESOLVE_RISKRISK2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/IMPLEMENTATION_PROCESSPROCESS" id="IMPLEMENTATION_PROCESSPROCESS2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/RESOURCES_NEEDEDNEEDED" id="RESOURCES_NEEDEDNEEDED2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/CHANGE_TIMETIME" id="CHANGE_TIMETIME2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/APPLY_PERSONPERSON" id="APPLY_PERSONPERSON2" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/APPLY_DATEDATE" id="APPLY_DATEDATE2" readonly="true" style="width:151px;"></xforms:input>
  <xui:view auto-load="true" id="view7" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout7"><xui:place control="toolbars3" id="controlPlace10" style="position:absolute;width:400px;top:9px;left:5px;height:36px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="bizData1">
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
  <xhtml:div component="/UI/system/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'" id="gridFilter1" style="width:150px;">
   <xforms:label ref="" id="default7"></xforms:label>
   <xforms:value ref="" id="default8"></xforms:value>
   <xforms:itemset id="default9"></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'" id="gridFilter2" style="width:150px;">
   <xforms:label ref="" id="default10"></xforms:label>
   <xforms:value ref="" id="default11"></xforms:value>
   <xforms:itemset id="default12"></xforms:itemset></xhtml:div>
  <xforms:input id="input1" ref="data('bizData1')/PROJECT_IDID"></xforms:input>
  <xforms:input id="input2" ref="data('bizData1')/PROJECT_NAMENAME" style="width:150px;" readonly="true"></xforms:input></xui:view>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%; height: 100%;" id="excelLayout2" src="excelLayout6.xls"></xhtml:div></layout>
<!--  <xforms:input ref="data('bizData2')/REASON_ASSESSMENTASSESSMENT" id="REASON_ASSESSMENTASSESSMENT3" style="height:18px;"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/RANGE_ASSESSMENTASSESSMENT" id="RANGE_ASSESSMENTASSESSMENT3"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/RISK_ASSESSMENTASSESSMENT" id="RISK_ASSESSMENTASSESSMENT3"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/PROCESS_ASSESSMENTASSESSMENT" id="PROCESS_ASSESSMENTASSESSMENT3"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/RESOURCE_ASSESSMENTASSESSMENT" id="RESOURCE_ASSESSMENTASSESSMENT3"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/TIME_ASSESSMENTASSESSMENT" id="TIME_ASSESSMENTASSESSMENT3"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/APPROVAL_STATUSSTATUS" id="APPROVAL_STATUSSTATUS3"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/ACCEPT_OPINIONOPINION" id="ACCEPT_OPINIONOPINION3"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/PLAN_AUDIT_DATEAUDITDATE" id="PLAN_AUDIT_DATEAUDITDATE3" format="yyyy-MM-dd"></xforms:input>-->
<!--  <xforms:input ref="data('bizData2')/PLAN_AUDITORAUDITOR" id="PLAN_AUDITORAUDITOR3"></xforms:input>-->
  <xforms:input ref="data('bizData1')/REASON_ASSESSMENTASSESSMENT" id="REASON_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('bizData1')/RANGE_ASSESSMENTASSESSMENT" id="RANGE_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('bizData1')/RISK_ASSESSMENTASSESSMENT" id="RISK_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('bizData1')/PROCESS_ASSESSMENTASSESSMENT" id="PROCESS_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('bizData1')/RESOURCE_ASSESSMENTASSESSMENT" id="RESOURCE_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('bizData1')/TIME_ASSESSMENTASSESSMENT" id="TIME_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('bizData1')/APPROVAL_STATUSSTATUS" id="APPROVAL_STATUSSTATUS4"></xforms:input>
  <xforms:input ref="data('bizData1')/ACCEPT_OPINIONOPINION" id="ACCEPT_OPINIONOPINION4"></xforms:input>
  <xforms:input ref="data('bizData1')/PLAN_AUDIT_DATEAUDITDATE" id="PLAN_AUDIT_DATEAUDITDATE4"></xforms:input>
  <xforms:input ref="data('bizData1')/PLAN_AUDITORAUDITOR" id="PLAN_AUDITORAUDITOR4"></xforms:input></xui:view>
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
