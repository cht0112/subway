<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:194px;left:630px;"> 
    <data auto-load="false" auto-new="true" component="/UI/system/components/data.xbl.xml#bizData" concept="CHANGE_APPLY_INFO" id="dataMain" limit="20" offset="0" store-type="simple" update-mode="whereAll" data-type="xml"> 
      <reader action="/metrodetection/system_resource/logic/action/MyQuerryNameAction" id="default8"/>  
      <writer action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction" id="default9"/>  
      <creator action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction" id="default10"/>  
      <rule id="default3" relation="CHANGE_APPLY_NOAPPLYNO" required="true()"/>  
      <rule id="default6" relation="CHANGE_TITLETITLE" required="true()" alert="'变更提案标题不能为空!'"/>  
      <rule id="default18" relation="CHANGE_CONTENTCONTENT" required="true()" alert="'变更内容不能为空!'"/>  
      <rule id="default35" relation="APPLY_PERSONPERSON" required="true()"/>  
      <rule id="default38" relation="APPLY_DATEDATE" required="true()"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default1" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default2" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default4" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default5" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="TEST_PROJECT_INFO">
   <creator id="default7" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
   <reader id="default11" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
   <writer id="default12" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data><xforms:action id="action2" ev:event="onload"><xforms:script id="xformsScript2"><![CDATA[mainActivity.mdDefaultLoad(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="main" concept="SA_Task" onAfterRefreshPage="mainActivity.mainAfterRefreshPage" order-by="sCreateTime desc" store-type="simple" limit="2000" data-type="json">
   <reader id="default23" action="/system/logic/action/queryTaskAction"></reader>
   <calculate-relation relation="calcIndex" id="calculate-relation1"></calculate-relation>
   <creator id="default24" action="/system/logic/action/createTaskAction"></creator>
   <writer id="default20" action="/system/logic/action/saveTaskAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="navigatorBar1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif">  
            <xforms:label>  <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate">  
              <xforms:script>  <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" mode="IMG_TXT_LR" process="flw"> 
        <item id="barItem13" name="advance-process-item"/>  
        <item id="barItem16" name="abort-process-item"/>  
        <item id="barItem1" name="process-chart-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" data="dataMain" id="flw" onAdvanceCommit="mainActivity.flwAdvanceCommit" onAbortCommit="mainActivity.flwAbortCommit" auto-filter="false"/>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout7" style="height:100%;position:relative;" type="flow"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:92%;" id="excelLayout1" src="excelLayout2.xls"><xui:place control="input2" id="controlPlace1"></xui:place>
  </xhtml:div></layout>  
      <xforms:input ref="data('dataMain')/CHANGE_APPLY_DOC_NO" id="CHANGE_APPLY_DOC_NO2" disabled="true" style="width:170px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" id="CHANGE_APPLY_NOAPPLYNO2" disabled="true" style="width:149px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TITLETITLE" id="CHANGE_TITLETITLE2" style="width:455px;"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_IDID" id="PROJECT_IDID2" style="width:455px;"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_NAMENAME" id="PROJECT_NAMENAME2" style="width:453px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT2" style="width:457px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="CHANGE_CONTENTCONTENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_REASONREASON" id="CHANGE_REASONREASON2"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPACT_RANGERANGE" id="IMPACT_RANGERANGE2"></xforms:input>
  <xforms:input ref="data('dataMain')/POTENTIAL_RISKRISK" id="POTENTIAL_RISKRISK2"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOLVE_RISKRISK" id="RESOLVE_RISKRISK2"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="IMPLEMENTATION_PROCESSPROCESS2"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="RESOURCES_NEEDEDNEEDED2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TIMETIME" id="CHANGE_TIMETIME2"></xforms:input>
  <xforms:input ref="data('dataMain')/oPERATORNAME" id="APPLY_PERSONPERSON2" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/APPLY_DATEDATE" id="APPLY_DATEDATE2" style="width:148px;" format="yyyy-MM-dd" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/oPERATORNAME1" id="APPLY_APPROVER2"></xforms:input>
  <xforms:input ref="data('dataMain')/APPLY_APPROVE_DATE" id="APPLY_APPROVE_DATE2" readonly="true"></xforms:input>
  <xforms:textarea ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="textarea1" style="height:41px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_REASONREASON" id="textarea2" style="height:60px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPACT_RANGERANGE" id="textarea3" style="height:52px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea4" style="height:53px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOLVE_RISKRISK" id="textarea5" style="height:52px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="textarea6" style="height:63px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="textarea7" style="height:38px;"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" style="width:456px;" ref="data('dataMain')/PROJECT_NAMENAME" onCloseup="mainActivity.gridSelect1Closeup">
   <xforms:label ref="pROJECTNAME" id="default13"></xforms:label>
   <xforms:value ref="pROJECTNAME" id="default14"></xforms:value>
   <xforms:itemset id="default15" data="bizData1" auto-load-data="true">
  <xforms:column ref="TEST_PROJECT_INFO" visible="false" id="default21"></xforms:column>
  <xforms:column ref="pROJECTNAME" id="default22"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input2" ref="data('dataMain')/PROJECT_IDID"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/CHANGE_CONTENTCONTENT" multi-select="true" style="width:455px;">
   <xforms:label ref="col_0" id="default16"></xforms:label>
   <xforms:value ref="col_0" id="default17"></xforms:value>
   <xforms:itemset id="default19" auto-load-data="true">
  
  
  
  
  <xforms:column ref="col_0" id="default52"></xforms:column>
  <itemset-data xmlns="" id="default63">
   <rows xmlns="" id="default64">
    <row id="default65">
     <cell id="default66">检测内容</cell></row> 
    <row id="default67">
     <cell id="default68">人员分配</cell></row> 
    <row id="default69">
     <cell id="default70">时间安排</cell></row> 
    <row id="default71">
     <cell id="default72">系统资源</cell></row> </rows> </itemset-data></xforms:itemset></xhtml:div>
  <xforms:input id="input4" ref="data('dataMain')/CHANGE_TIMETIME" style="width:147px;" format="yyyy-MM-dd" readonly="true"></xforms:input>
  <xforms:input id="input1" ref="data('dataMain')/oPERATORNAME1"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/APPLY_APPROVE_DATE" format="yyyy-MM-dd" readonly="true"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/PROJECT_IDID" readonly="true"></xforms:input></xui:view>  
    <layout id="layout1" style="height:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:111%;"> 
        <top id="borderLayout-top1" size="44px"> 
          <place control="tbsMain" id="controlPlace4"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="vDetail" id="controlPlace11" style="position:relative;width:676px;height:93%;"/> 
        </center> 
      </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:20px;left:584px;"/> 
    </layout> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</window>
