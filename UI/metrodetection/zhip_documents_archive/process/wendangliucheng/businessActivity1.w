<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:158px;left:220px;">
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="bizData1" concept="P_DOCUMENTS_BORROW_RECORD"
      store-type="simple">
      <creator id="default1" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_BORROW_RECORDAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_BORROW_RECORDAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_BORROW_RECORDAction"/>
    <rule id="dataBizRule2" relation="aPPLICATIONTIME" required="true()" alert="'借阅申请日期不能为空!'"></rule>
  <rule id="dataBizRule3" relation="pFILEID" required="true()" alert="'编号不能为空!'"></rule>
  <rule id="dataBizRule4" relation="dOCUMENTCATEGORY" required="true()" alert="'文档科目不能为空!'"></rule>
  <rule id="dataBizRule5" relation="dOCUMENTTYPE" required="true()" alert="'文档类型不能为空!'"></rule>
  <rule id="dataBizRule6" relation="pFILENAME" required="true()" alert="'文档名称不能为空!'"></rule>
  <rule id="dataBizRule7" relation="bORROWER" required="true()" alert="'借阅者不能为空!'"></rule>
  <rule id="dataBizRule8" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE"><creator id="default10" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
  <reader id="default11" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
  <writer id="default12" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE"><creator id="default17" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
  <reader id="default18" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
  <writer id="default19" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO"><creator id="default21" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default24" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default25" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData2" concept="P_DOCUMENTS_ARCHIVE">
   <creator id="default38"></creator>
   <reader id="default39" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default40"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[businessActivity1.model1XBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xui:place control="view1" id="controlPlace1" style="width:815px;height:625px;"/>
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1">
        <xui:place control="toolbars1" id="controlPlace2" style="position:absolute;left:4px;height:45px;width:78px;top:1px;"/>  
        <xui:place control="toolbars3" id="controlPlace4" style="position:absolute;width:400px;height:25px;left:81px;top:1px;"/>  
        <xui:place control="view2" id="controlPlace5" style="top:47px;left:2px;width:990px;height:546px;position:relative;"/>
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="bizData1"> 
          <item name="save-item" id="barItem9"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3">
        <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
          id="processBar4" mode="IMG_TXT_LR" process="process1"> 
          <item name="back-process-item" id="barItem30"/>  
          <item name="advance-process-item" id="barItem31"/>  
          <item name="suspend-process-item" id="barItem33"/>  
          <item name="abort-process-item" id="barItem34"/>  
          <item name="process-chart-item" id="barItem36"/>
  <item name="execute-list-item" id="barItem1"></item> 
        </xui:bar>
      </xhtml:div>  
      <xui:view auto-load="true" id="view2" class="xui-container"> 
        <layout type="flow" style="position:relative;" id="layout2">
          <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
            style="width:100%; height: 100%;" id="excelLayout1" src="excelLayout2.xls"/>
        <xui:place control="process1" id="controlPlace3" style="position:absolute;top:371px;left:194px;"></xui:place></layout>  
        <xforms:input ref="data('bizData1')/aPPLICATIONTIME" id="aPPLICATIONTIME4"/>  
        <xforms:input ref="data('bizData1')/pFILEID" id="pFILEID4"/>  
        <xforms:input ref="data('bizData1')/dOCUMENTCATEGORY" id="dOCUMENTCATEGORY4"/>  
        <xforms:input ref="data('bizData1')/dOCUMENTTYPE" id="dOCUMENTTYPE4"/>  
        <xforms:input ref="data('bizData1')/pFILENAME" id="pFILENAME4"/>  
        <xforms:input ref="data('bizData1')/bORROWER" id="bORROWER4"/>  
        <xforms:input ref="data('bizData1')/rETURNDATE" id="rETURNDATE4"/>  
        <xforms:input ref="data('bizData1')/iNDEEDRETURNDATE" id="iNDEEDRETURNDATE4"/>  
        <xforms:input ref="data('bizData1')/mEMO" id="mEMO4"/>
      <xforms:input id="input1" ref="data('dataMain')/pFILEID"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/dOCUMENTCATEGORY"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/dOCUMENTTYPE"></xforms:input>
  <xforms:input id="input4" ref="data('bizData1')/pFILENAME"></xforms:input>
  <xforms:input id="input5" ref="data('bizData1')/bORROWER"></xforms:input>
  <xforms:input id="input6" ref="data('bizData1')/aPPLICATIONTIME" format="yyyy-MM-dd" disabled="true" tabindex="5"></xforms:input>
  <xforms:input id="input7" ref="data('bizData1')/rETURNDATE" format="yyyy-MM-dd" tabindex="6"></xforms:input>
  <xforms:textarea ref="data('bizData1')/mEMO" id="textarea1" tabindex="7"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('bizData1')/dOCUMENTCATEGORY" tabindex="1">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default4"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default5"></xforms:value>
   <xforms:itemset id="default6" data="kemu" auto-load-data="true">
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default15"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default16"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('bizData1')/dOCUMENTTYPE" tabindex="2">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default7"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default8"></xforms:value>
   <xforms:itemset id="default9" data="leixing" auto-load-data="true">
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default22"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default23"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="bizData1" auto-filter="false"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('bizData1')/bORROWER" disabled="true" tabindex="4">
   <xforms:label ref="oPERATORNAME" id="default13"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default14"></xforms:value>
   <xforms:itemset id="default20" data="hrData" auto-load-data="true">
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default28"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default29"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('bizData1')/pFILEID" label-ref="data('bizData1')/pFILENAME" tabindex="3">
   <xforms:label ref="pFILENAME" id="default26"></xforms:label>
   <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default27"></xforms:value>
   <xforms:itemset id="default30" data="bizData2" auto-load-data="true">
  <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default33"></xforms:column>
  <xforms:column ref="pFILENAME" id="default34"></xforms:column></xforms:itemset></xhtml:div></xui:view>
    </xui:view>
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="businessActivity1.js"></xhtml:script></xui:resource> 
</xui:window>
