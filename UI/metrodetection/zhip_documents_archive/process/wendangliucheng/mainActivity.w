<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:347px;left:150px;"> 
    <data auto-load="false" auto-new="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="P_DOCUMENTS_BORROW_RECORD" id="dataMain" limit="20" offset="0" store-type="simple"
      update-mode="whereAll" onAfterNew="mainActivity.dataMainAfterNew" confirm-delete="false"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryp_documents_borrow_record"
        id="default8"/>  
      <writer action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_BORROW_RECORDAction"
        id="default9"/>  
      <creator action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_BORROW_RECORDAction"
        id="default10"/>  
      <rule id="default1" relation="aPPLICATIONTIME" required="true()" alert="'借阅申请时间不能为空!'"/>  
      <rule id="default4" relation="pFILEID" required="true()" alert="'编号不能为空!'"/>  
      <rule id="default7" relation="dOCUMENTCATEGORY" required="true()" alert="'文档科目不能为空!'"/>  
      <rule id="default13" relation="dOCUMENTTYPE1" required="true()" alert="'文档类型不能为空!'"/>  
      <rule id="default16" relation="pFILENAME" required="true()" alert="'文档名称不能为空!'"/>  
      <rule id="default19" relation="bORROWER" required="true()" alert="'借阅者不能为空!'"/>  
      <rule id="default22" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE"><creator id="default2" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
  <reader id="default3" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
  <writer id="default5" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE"><creator id="default6" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
  <reader id="default11" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
  <writer id="default12" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO"><creator id="default28" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default29" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default30" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData1" concept="P_DOCUMENTS_ARCHIVE"><creator id="default38"></creator>
  <reader id="default39" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
  <writer id="default40"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple">
   <creator id="default99" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default97" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default100" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple">
   <reader id="default98" action="/system/logic/action/queryOrgAction"></reader></data>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="navigatorBar1" mode="IMG_TXT_LR"> 
        <item id="barItem2" name="save-item"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
        id="processBar1" mode="IMG_TXT_LR" process="flw"> 
        <item id="barItem13" name="advance-process-item"/>  
        <item id="barItem15" name="suspend-process-item"/>  
        <item id="barItem16" name="abort-process-item"/>  
        <item id="barItem1" name="process-chart-item"/>
  <item name="execute-list-item" id="barItem3"></item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" data="dataMain"
      id="flw" auto-filter="false"/>  
    <layout id="layout1" style="height:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top1"> 
          <place control="tbsMain" id="controlPlace4"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="view1" id="controlPlace1" style="width:673px;height:588px;position:relative;"/>
        </center> 
      </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:183px;left:51px;"/> 
    </layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="flow" style="position:relative;" id="layout2">
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          style="width:100%; height: 100%;" id="excelLayout1" src="excelLayout1.xls"/>
      </layout>  
      <xforms:input ref="data('dataMain')/aPPLICATIONTIME" id="aPPLICATIONTIME3" format="yyyy-MM-dd" disabled="true" tabindex="5"/>  
      <xforms:input ref="data('dataMain')/pFILEID" id="pFILEID3"/>  
      <xforms:input ref="data('dataMain')/dOCUMENTCATEGORY" id="dOCUMENTCATEGORY3"/>  
      <xforms:input ref="data('dataMain')/dOCUMENTTYPE" id="dOCUMENTTYPE3"/>  
      <xforms:input ref="data('dataMain')/pFILENAME" id="pFILENAME3"/>  
      <xforms:input ref="data('dataMain')/bORROWER" id="bORROWER3"/>  
      <xforms:input ref="data('dataMain')/rETURNDATE" id="rETURNDATE3" format="yyyy-MM-dd" tabindex="6"/>  
      <xforms:input ref="data('dataMain')/iNDEEDRETURNDATE" id="iNDEEDRETURNDATE3"/>  
      <xforms:input ref="data('dataMain')/mEMO" id="mEMO3"/>
    <xforms:textarea ref="data('dataMain')/mEMO" id="textarea1" tabindex="7"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/dOCUMENTCATEGORY" tabindex="1" onCloseup="mainActivity.gridSelect1Closeup" label-ref="data('dataMain')/dOCUMENTCATEGORYCNAME">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default14"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default15"></xforms:value>
   <xforms:itemset id="default17" data="kemu" auto-load-data="true">
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default25"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default26"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dOCUMENTTYPE1" onDropdown="mainActivity.gridSelect2Dropdown" tabindex="2" onCloseup="mainActivity.gridSelect2Closeup" label-ref="data('dataMain')/dOCUMENTTYPECNAME">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default18"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default20"></xforms:value>
   <xforms:itemset id="default21" auto-load-data="true" data="leixing">
  
  
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default33"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default34"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/bORROWER" disabled="true" tabindex="4">
   <xforms:label ref="oPERATORNAME" id="default23"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default24"></xforms:value>
   <xforms:itemset id="default27" data="hrData" auto-load-data="true">
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default35"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default36"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/pFILEID" label-ref="data('dataMain')/pFILENAME" tabindex="3">
   <xforms:label ref="pFILENAME" id="default31"></xforms:label>
   <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default32"></xforms:value>
   <xforms:itemset id="default37" data="bizData1" auto-load-data="true">
  <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default43"></xforms:column>
  <xforms:column ref="pFILENAME" id="default44"></xforms:column></xforms:itemset></xhtml:div></xui:view>
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</window>
