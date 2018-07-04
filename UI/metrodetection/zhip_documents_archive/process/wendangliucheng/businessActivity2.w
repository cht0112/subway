<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:114px;left:525px;">
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="dataMain" concept="P_DOCUMENTS_BORROW_RECORD" store-type="simple">
      <creator id="default4" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_BORROW_RECORDAction" />  
      <reader id="default5" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_BORROW_RECORDAction" />  
      <writer id="default6" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_BORROW_RECORDAction" />
    </data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple">
      <creator id="default1" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"/>
    </data>  
    
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE"><creator id="default11" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
  <reader id="default12" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
  <writer id="default13" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE"><creator id="default14" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
  <reader id="default15" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
  <writer id="default16" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO"><creator id="default23" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default24" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default27" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[businessActivity2.model1XBLLoaded(event)]]></xforms:script></xforms:action>
  <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereVersion">
   <reader action="/system/logic/action/queryOrgAction" id="default4_7"></reader></data>
  <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll">
   <creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction" id="default5_7"></creator>
   <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default6_7"></reader>
   <writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction" id="default7_7"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData1" concept="P_DOCUMENTS_ARCHIVE">
   <creator id="default38"></creator>
   <reader id="default39" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default40"></writer></data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xui:place control="view1" id="controlPlace1" style="width:790px;height:617px;"/>
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1">
        <xui:place control="toolbars1" id="controlPlace2" style="position:absolute;top:5px;height:25px;width:78px;left:1px;"/>  
        <xui:place control="toolbars2" id="controlPlace3" style="position:absolute;width:400px;height:25px;top:5px;left:76px;"/>  
        <xui:place control="view2" id="controlPlace4" style="top:47px;left:7px;width:860px;height:570px;position:relative;"></xui:place></layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" style="width:76px;" data="cData"> 
          <item name="save-item" id="barItem2"/> 
        </xui:bar>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2">
        <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
          id="processBar1" mode="IMG_TXT_LR" process="process1"> 
          <item name="back-process-item" id="barItem9"/>  
          <item name="advance-process-item" id="barItem10"/>  
          <item name="suspend-process-item" id="barItem12"/>  
          <item name="abort-process-item" id="barItem13"/>  
          <item name="process-chart-item" id="barItem15"/>
  <item name="execute-list-item" id="barItem1"></item> 
        </xui:bar>
      </xhtml:div>  
      <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%; height: 100%;" id="excelLayout1" src="excelLayout7.xls"></xhtml:div>
  <xui:place control="process1" id="controlPlace5" style="position:absolute;top:198px;left:493px;"></xui:place></layout>
  <xforms:input ref="data('dataMain')/aPPLICATIONTIME" id="aPPLICATIONTIME5"></xforms:input>
  <xforms:input ref="data('dataMain')/pFILEID" id="pFILEID5"></xforms:input>
  <xforms:input ref="data('dataMain')/dOCUMENTCATEGORY" id="dOCUMENTCATEGORY5"></xforms:input>
  <xforms:input ref="data('dataMain')/dOCUMENTTYPE" id="dOCUMENTTYPE5"></xforms:input>
  <xforms:input ref="data('dataMain')/pFILENAME" id="pFILENAME5"></xforms:input>
  <xforms:input ref="data('dataMain')/bORROWER" id="bORROWER5"></xforms:input>
  <xforms:input ref="data('dataMain')/rETURNDATE" id="rETURNDATE5"></xforms:input>
  <xforms:input ref="data('dataMain')/iNDEEDRETURNDATE" id="iNDEEDRETURNDATE5"></xforms:input>
  <xforms:input ref="data('dataMain')/mEMO" id="mEMO5"></xforms:input>
  <xforms:input id="input1" ref="data('dataMain')/pFILEID"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/dOCUMENTCATEGORY"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/dOCUMENTTYPE"></xforms:input>
  <xforms:input id="input4" ref="data('dataMain')/bORROWER"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/rETURNDATE" format="yyyy-MM-dd" disabled="true"></xforms:input>
  <xforms:input id="input6" ref="data('dataMain')/pFILENAME" disabled="true"></xforms:input>
  <xforms:input id="input7" ref="data('dataMain')/aPPLICATIONTIME" format="yyyy-MM-dd" disabled="true"></xforms:input>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea1" style="height:80px;" disabled="true"></xforms:textarea>
  <xforms:select1 ref="data('cData')/cHECKRESULT" id="radio1">
   <xforms:item id="selectItem1">
    <xforms:label id="default7"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default8"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default9"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default10"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:textarea ref="data('cData')/cHECKDESC" id="textarea2" style="height:96px;"></xforms:textarea>
  <xforms:textarea ref="data('cData')/mEMO" id="textarea3" style="height:100px;"></xforms:textarea>
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="dataMain" auto-filter="false" onAdvanceCommit="businessActivity2.process1AdvanceCommit"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/dOCUMENTCATEGORY" disabled="true">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default17"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default18"></xforms:value>
   <xforms:itemset id="default19" data="kemu" auto-load-data="true">
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default25"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default26"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dOCUMENTTYPE" disabled="true">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default20"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default21"></xforms:value>
   <xforms:itemset id="default22" data="leixing" auto-load-data="true">
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default29"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default30"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/bORROWER" disabled="true">
   <xforms:label ref="oPERATORNAME" id="default28"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default31"></xforms:value>
   <xforms:itemset id="default32" data="hrData" auto-load-data="true">
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default35"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default36"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/pFILEID" label-ref="data('dataMain')/pFILENAME" disabled="true">
   <xforms:label ref="pFILENAME" id="default33"></xforms:label>
   <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default34"></xforms:value>
   <xforms:itemset id="default37" data="bizData1" auto-load-data="true">
  <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default43"></xforms:column>
  <xforms:column ref="pFILENAME" id="default44"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view>
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="businessActivity2.js"></xhtml:script></xui:resource> 
</xui:window>
