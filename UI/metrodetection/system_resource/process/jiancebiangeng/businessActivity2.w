<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:456px;height:auto;left:348px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="dataMain" concept="CHANGE_APPLY_INFO" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_resource/logic/action/MyQuerryNameAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default4" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default5" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default6" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default7" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[businessActivity2.model1XBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="main" concept="SA_Task" onAfterRefreshPage="mainActivity.mainAfterRefreshPage" order-by="sCreateTime desc" store-type="simple" limit="2000" data-type="json">
   <reader id="default11" action="/system/logic/action/queryTaskAction"></reader>
   <calculate-relation relation="calcIndex" id="calculate-relation1"></calculate-relation>
   <creator id="default12" action="/system/logic/action/createTaskAction"></creator>
   <writer id="default20" action="/system/logic/action/saveTaskAction"></writer></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
  <xui:place control="view1" id="controlPlace1" style="width:731px;height:51px;"></xui:place><xui:place control="process1" id="controlPlace3" style="position:absolute;top:78px;left:486px;"></xui:place>
  <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" class="xui-tabPanel" style="width:100%;height:121%;">
   <xui:tab id="tabPage1">
    <xui:label id="xuiLabel1"><![CDATA[变更审核]]></xui:label>
  <xui:place control="view2" id="controlPlace4" style="width:100%;position:relative;height:100%;"></xui:place></xui:tab> 
   <xui:tab id="tabPage2" xforms-select="businessActivity2.tabPage2Select">
    <xui:label id="xuiLabel2"><![CDATA[变更申请]]></xui:label>
  <xui:place control="view3" id="controlPlace5" style="height:100%;width:100%;position:relative;"></xui:place></xui:tab> </xhtml:div></xui:layout> 
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="dataMain" auto-filter="false"></xhtml:div>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:81%;" id="excelLayout1" src="excelLayout6.xls"></xhtml:div></layout>
  <xforms:input ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="REASON_ASSESSMENTASSESSMENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="RANGE_ASSESSMENTASSESSMENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="RISK_ASSESSMENTASSESSMENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="PROCESS_ASSESSMENTASSESSMENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="RESOURCE_ASSESSMENTASSESSMENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="TIME_ASSESSMENTASSESSMENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/APPROVAL_STATUSSTATUS" id="APPROVAL_STATUSSTATUS1"></xforms:input>
  <xforms:input ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="ACCEPT_OPINIONOPINION1"></xforms:input>
  <xforms:input ref="data('dataMain')/oPERATORNAME2" id="CHANGE_AUDITOR1" style="width:151px;" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_AUDIT_DATE" id="CHANGE_AUDIT_DATE1" format="yyyy-MM-dd" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/MEMO" id="MEMO1"></xforms:input>
  <xforms:textarea ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="textarea1" style="height:68px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="textarea2" style="height:69px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="textarea3" style="height:65px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="textarea4" style="height:59px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="textarea5" style="height:65px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="textarea6" style="height:65px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="textarea7" style="height:67px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea8" style="height:56px;"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/APPROVAL_STATUSSTATUS" style="width:456px;">
   <xforms:label ref="col_1" id="default8"></xforms:label>
   <xforms:value ref="col_0" id="default9"></xforms:value>
   <xforms:itemset id="default10" auto-load-data="true"><itemset-data xmlns="" id="default22">
   <rows xmlns="" id="default23">
    <row id="default24">
     <cell id="default25">1</cell>
     <cell id="default26">已审核</cell></row> 
    <row id="default27">
     <cell id="default28">2</cell>
     <cell id="default29">审核中</cell></row> 
    <row id="default30">
     <cell id="default31">3</cell>
     <cell id="default32">未审核</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default35"></xforms:column>
  <xforms:column ref="col_1" id="default36"></xforms:column></xforms:itemset></xhtml:div></xui:view>
  <xui:view auto-load="true" id="view3" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout3"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:102%;" id="excelLayout2" src="excelLayout7.xls"></xhtml:div></layout>
  <xforms:input ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" id="CHANGE_APPLY_NOAPPLYNO2" disabled="true" style="width:147px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TITLETITLE" id="CHANGE_TITLETITLE2"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_IDID" id="PROJECT_IDID2" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_NAMENAME" id="PROJECT_NAMENAME2" readonly="true" style="width:150px;" disabled="true"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="CHANGE_CONTENTCONTENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_REASONREASON" id="CHANGE_REASONREASON2"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPACT_RANGERANGE" id="IMPACT_RANGERANGE2"></xforms:input>
  <xforms:input ref="data('dataMain')/POTENTIAL_RISKRISK" id="POTENTIAL_RISKRISK2"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOLVE_RISKRISK" id="RESOLVE_RISKRISK2"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="IMPLEMENTATION_PROCESSPROCESS2"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="RESOURCES_NEEDEDNEEDED2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TIMETIME" id="CHANGE_TIMETIME2" disabled="true" format="yyyy-MM-dd"></xforms:input>
  <xforms:input ref="data('dataMain')/oPERATORNAME" id="APPLY_PERSONPERSON2" readonly="true" disabled="true"></xforms:input>
  <xforms:input ref="data('dataMain')/APPLY_APPROVE_DATE" id="APPLY_DATEDATE2" disabled="true" style="width:150px;" format="yyyy-MM-dd"></xforms:input>
  <xforms:input ref="data('dataMain')/oPERATORNAME1" id="CHANGE_AUDITOR2" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_AUDIT_DATE" id="CHANGE_AUDIT_DATE2" disabled="true"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_APPLY_DOC_NO" id="CHANGE_APPLY_DOC_NO2" disabled="true" style="width:148px;"></xforms:input>
  <xforms:textarea ref="data('dataMain')/CHANGE_TITLETITLE" id="textarea9" style="height:54px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_OBJECTOBJECT" id="textarea10" style="height:50px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="textarea11" style="height:53px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_REASONREASON" id="textarea12" style="height:60px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPACT_RANGERANGE" id="textarea13" style="height:61px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea14" style="height:55px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOLVE_RISKRISK" id="textarea15" style="height:62px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="textarea16" style="height:54px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="textarea17" style="height:58px;" readonly="true" disabled="true"></xforms:textarea>
  <xforms:input id="input1" ref="data('dataMain')/oPERATORNAME1" readonly="true"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/APPLY_APPROVE_DATE" disabled="true"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/PROJECT_IDID" readonly="true"></xforms:input></xui:view>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars3" id="controlPlace7" style="position:absolute;left:6px;top:1px;height:92%;width:123%;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3">
   <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar5" data="dataMain">
   <item name="save-item" id="barItem55"></item>
   <item name="refresh-item" id="barItem57"></item>
   </xui:bar><xui:bar component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar2" process="process1" mode="IMG_TXT_LR">
    <item name="advance-process-item" id="barItem32"></item>
    <item name="abort-process-item" id="barItem35"></item>
    <item name="process-chart-item" id="barItem37"></item>
    </xui:bar> </xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="businessActivity2.js"></xhtml:script></xui:resource> 
</xui:window>
