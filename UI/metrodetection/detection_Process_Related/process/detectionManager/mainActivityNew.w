<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:180px;left:633px;"> 
    <data auto-load="false" auto-new="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TEST_APPLICATION_INFO" id="dataMain" limit="20" offset="0" store-type="simple"
      update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/queryTestApplication"
        id="default8"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTEST_APPLICATION_INFOAction"
        id="default9"/>  
      <creator action="/metrodetection/system_code/logic/action/createTEST_APPLICATION_INFOAction"
        id="default10"/> 
    <rule id="dataBizRule1" relation="pRODUCTMANUFACTUREID" required="true()" alert="'开发单位不能为空!'"></rule>
  <rule id="dataBizRule2" relation="pRODUCTNAME" required="true()" alert="'产品名称不能为空!'"></rule>
  <rule id="dataBizRule3" relation="dETECTIONOBJECTTYPE" required="true()" alert="'申请检测对象类别不能为空!'"></rule>
  <rule id="dataBizRule4" relation="dEVICETYPE" required="true()" alert="'申请检测对象不能为空!'"></rule>
  <rule id="dataBizRule5" relation="bUSINESSID" required="true()" alert="'申请检测业务不能为空!'"></rule>
  <rule id="dataBizRule6" relation="lINEID" required="true()" alert="'申请检测对象应用路线不能为空!'"></rule>
  <rule id="dataBizRule7" relation="aSSIGNEDMANUFACTUREID" alert="'委托单位不能为空!'" required="true()"></rule>
  <rule id="dataBizRule8" relation="eXPECTENDINGDATE" required="true()" alert="'预期完成日期不能为空!'"></rule>
  <rule id="dataBizRule9" relation="COMPANY_PROMISE" required="true()" alert="'承诺样品最晚进场天数不能为空'"></rule></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="afcData" concept="AFC_MANUFACTURER_INFO" store-type="grid"> 
      <creator id="default74" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"/>  
      <reader id="default75" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"/>  
      <writer id="default76" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="detObjType" concept="DETECTION_OBJECT_TYPE" store-type="grid"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"/>  
      <writer id="default7" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="businessData" concept="BUSINESS_TYPE_CODE" store-type="grid"> 
      <creator id="default14" action="/metrodetection/system_code/logic/action/createBUSINESS_TYPE_CODEAction"/>  
      <reader id="default15" action="/metrodetection/system_code/logic/action/queryBUSINESS_TYPE_CODEAction"/>  
      <writer id="default85" action="/metrodetection/system_code/logic/action/saveBUSINESS_TYPE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="deviceTypeCodeData" concept="DEVICE_TYPE_CODE" store-type="grid"> 
      <creator id="default12" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"/>  
      <reader id="default13" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"/>  
      <writer id="default88" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="manufactureData" concept="AFC_MANUFACTURER_INFO" store-type="simple"><creator id="default17"></creator>
  <reader id="default18" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default31"></writer></data>
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2">mainActivityNew.mdDefaultXBLLoaded(event)</xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default32" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default33" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default34" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default35" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="SA_TaskData" concept="SA_Task" store-type="simple" limit="2000"><reader id="default21" action="/system/logic/action/queryTaskAction"></reader>
  <creator id="default22" action="/system/logic/action/createTaskAction"></creator>
  <writer id="default38" action="/system/logic/action/saveTaskAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="jiagongdanweiDB" concept="AFC_MANUFACTURER_INFO" store-type="simple"><reader id="default44" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="xml" auto-load="true" id="detectionBaseInfoD" concept="DECTION_BASED_ON_INFO" confirm-refresh="true" store-type="simple"><reader id="default48" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_ON_INFOAction"></reader></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="navigatorBar1" mode="IMG_TXT_LR"> 
        <item id="barItem2" name="save-item"/> 

<!--        <item> -->
<!--          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"-->
<!--            dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> -->
<!--            <xforms:label> <![CDATA[保存]]> </xforms:label>  -->
<!--            <xforms:action ev:event="DOMActivate"> -->
<!--              <xforms:script><![CDATA[mainActivityNew.saveMasClick(event)]]></xforms:script> -->
<!--            </xforms:action> -->
<!--          </xforms:trigger> -->
<!--        </item> -->

      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
        id="processBar1" process="flw" mode="IMG_TXT_LR"> 
        <item id="barItem13" name="advance-process-item"/>  
        <item id="barItem16" name="abort-process-item"/>  
        <item id="barItem1" name="process-chart-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" data="dataMain"
      id="flw" onAdvanceCommit="mainActivityNew.flwAdvanceCommit" onAbortCommit="mainActivityNew.flwAbortCommit"/>  
    <layout id="layout1" style="height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:123%;"> 
        <top id="borderLayout-top1" size="41px"> 
          <place control="tbsMain" id="controlPlace4" style="height:32px;width:424px;"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="view1" id="controlPlace1" style="position:relative;width:697px;height:577px;"/> 
        </center>  
        </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:102px;left:742px;"/> 
    </layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="cell.excel" style="width:697px;height:616px;"
        id="layout2" src="excelLayout28.xls"/>  
      <xforms:input ref="data('dataMain')/pRODUCTNAME" id="pRODUCTNAME" class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/lINEID" id="lINEID" class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/dECTIONBASEDONNAME" id="dECTIONBASEDONNAME"
        class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/cONTACTPERSON" id="cONTACTPERSON" class="xui-autofill" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/cONTACTMOBILE" id="cONTACTMOBILE" class="xui-autofill" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/cONTACTTELEPHONE" id="cONTACTTELEPHONE" class="xui-autofill" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/cONTACTEMAIL" id="cONTACTEMAIL" class="xui-autofill" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/cONTACTADDRESS" id="cONTACTADDRESS" class="xui-autofill" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/cONTACTPOSTCODE" id="cONTACTPOSTCODE" class="xui-autofill" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/cONTACTFAXNUMBER" id="cONTACTFAXNUMBER" class="xui-autofill" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/eXPECTENDINGDATE" id="eXPECTENDINGDATE" class="xui-autofill" format="yyyy-MM-dd"/>  
      <xforms:input ref="data('dataMain')/pRODUCTSTYLE" id="pRODUCTSTYLE" class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/cOMPANYTYPE" id="cOMPANYTYPE" class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/aPPLICATIONFIELDS" id="aPPLICATIONFIELDS"
        class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/dEVELOPMENTTOOLS" id="dEVELOPMENTTOOLS" class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/cOMPILERENVIRONMENT" id="cOMPILERENVIRONMENT"
        class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/pRODUCTCONFIGURATION" id="pRODUCTCONFIGURATION"
        class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/fEATURESANDMODELS" id="fEATURESANDMODELS"
        class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/tESTINGREQUIREMENTS" id="tESTINGREQUIREMENTS"
        class="xui-autofill"/>  
      <xforms:input ref="data('dataMain')/oPERATORNAME" id="oPERATORID" class="xui-autofill" disabled="true"/>  
      <xforms:input ref="data('dataMain')/mNITLTELEPHONE" id="mNITLTELEPHONE" class="xui-autofill" disabled="true"/>  
      <xforms:input ref="data('dataMain')/mNITLFAXNUMBER" id="mNITLFAXNUMBER" class="xui-autofill" disabled="true"/>  
      <xforms:input ref="data('dataMain')/mNITLMOBILE" id="mNITLMOBILE" class="xui-autofill" disabled="true"/>  
      <xforms:input ref="data('dataMain')/mNITLEMAIL" id="mNITLEMAIL" class="xui-autofill" disabled="true"/>  
      <xforms:input ref="data('dataMain')/mNITLADDRESS" id="mNITLADDRESS" class="xui-autofill" disabled="true"/>  
      <xforms:input ref="data('dataMain')/mNITLPOSTCODE" id="mNITLPOSTCODE" class="xui-autofill" disabled="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/aSSIGNEDMANUFACTUREID" label-ref="data('dataMain')/mANUFACTUREIDCNAME" onCloseup="mainActivityNew.gridSelect1Closeup" onDropdown="mainActivityNew.gridSelect1Dropdown"> 
        <xforms:label ref="mANUFACTUREIDCNAME" id="xuiLabel1"/>  
        <xforms:value ref="AFC_MANUFACTURER_INFO" id="default3"/>  
        <xforms:itemset id="default4" data="afcData" independence="true" auto-load-data="true"> 
            
          
        
  
  <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default5"></xforms:column>
  <xforms:column ref="mANUFACTUREIDCNAME" id="default6"></xforms:column></xforms:itemset> 
      </xhtml:div>  
<!--      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","-->
<!--        value-separator="," ext-separator="," id="gridSelect2" class="xui-autofill"-->
<!--        ref="data('dataMain')/pRODUCTMANUFACTUREID"> -->
<!--        <xforms:label ref="mANUFACTUREIDCNAME" id="xuiLabel2"/>  -->
<!--        <xforms:value ref="AFC_MANUFACTURER_INFO" id="default17"/>  -->
<!--        <xforms:itemset id="default18" data="afcData"> -->
<!--          <xforms:column ref="mANUFACTUREIDCNAME" id="default21"/>  -->
<!--          <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default22"/> -->
<!--        </xforms:itemset> -->
<!--      </xhtml:div>  -->
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" class="xui-autofill"
        ref="data('dataMain')/dETECTIONOBJECTTYPE" label-ref="data('dataMain')/dETECTIONOBJECTCNAME" onCloseup="mainActivityNew.gridSelect3Closeup"> 
        <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel3"/>  
        <xforms:value ref="DETECTION_OBJECT_TYPE" id="default23"/>  
        <xforms:itemset id="default24" data="detObjType" auto-load-data="true"> 
            
           
        <xforms:column ref="dETECTIONOBJECTCNAME" id="default19"></xforms:column>
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default20"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect4" class="xui-autofill"
        ref="data('dataMain')/bUSINESSID" label-ref="data('dataMain')/bUSINESSIDCNAME"> 
        <xforms:label ref="bUSINESSIDCNAME" id="xuiLabel4"/>  
        <xforms:value ref="BUSINESS_TYPE_CODE" id="default25"/>  
        <xforms:itemset id="default26" data="businessData" auto-load-data="true"> 
          <xforms:column ref="BUSINESS_TYPE_CODE" visible="false" id="default42"/>  
          <xforms:column ref="bUSINESSIDCNAME" id="default43"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect5" class="xui-autofill"
        ref="data('dataMain')/dEVICETYPE" label-ref="data('dataMain')/dEVICETYPECNAME"> 
        <xforms:label ref="dEVICETYPECNAME" id="xuiLabel5"/>  
        <xforms:value ref="dEVICETYPE" id="default27"/>  
        <xforms:itemset id="default28" data="deviceTypeCodeData" auto-load-data="true"> 
            
          
        
  
  
  
  
  <xforms:column ref="dEVICETYPE" visible="false" id="default36"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default37"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dataMain')/mEMO" id="textarea1" class="xui-autofill"/>
<!--    <xforms:input id="input1" ref="data('dataMain')/pRODUCTMANUFACTUREID"></xforms:input>-->
<!--  <xforms:input id="input3" ref="data('dataMain')/pRODUCTMANUFACTUREID"></xforms:input>-->
<!--  <xforms:input id="input5"></xforms:input>-->
<!--  <xforms:input id="input6"></xforms:input>-->
<!--  <xforms:input id="input7"></xforms:input> -->
<!--  <xforms:input id="input10" ref="data('dataMain')/pRODUCTMANUFACTUREID"></xforms:input>-->
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" class="xui-autofill" ref="data('dataMain')/pRODUCTMANUFACTUREID" label-ref="data('dataMain')/wtName" onDropdown="mainActivityNew.gridSelect2Dropdown">
				   
				   
				   
				
   <xforms:label ref="mANUFACTUREIDCNAME" id="xuiLabel2"></xforms:label>
   <xforms:value ref="AFC_MANUFACTURER_INFO" id="default11"></xforms:value>
   <xforms:itemset id="default16" auto-load-data="true" data="afcData">
  <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default29"></xforms:column>
  <xforms:column ref="mANUFACTUREIDCNAME" id="default30"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input1" class="xui-autofill" ref="data('dataMain')/APP_DOC_NO"></xforms:input>
  <xforms:input id="input2" class="xui-autofill" ref="data('dataMain')/APP_DOC_ID"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" class="xui-autofill" ref="data('dataMain')/cOMPANYTYPE" multi-select="true">
   <xforms:label ref="col_1" id="default39"></xforms:label>
   <xforms:value ref="col_1" id="default40"></xforms:value>
   <xforms:itemset id="default41" auto-load-data="true">
  
  
  <itemset-data xmlns="" id="default131">
   <rows xmlns="" id="default132">
    <row id="default133">
     <cell id="default134">独立科研机构</cell></row> 
    <row id="default135">
     <cell id="default136">大专院校</cell></row> 
    <row id="default137">
     <cell id="default138">国有企业</cell></row> 
    <row id="default139">
     <cell id="default140">股份公司</cell></row> 
    <row id="default141">
     <cell id="default142">集体个体</cell></row> 
    <row id="default143">
     <cell id="default144">其他</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_1" id="default145"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect7" class="xui-autofill" ref="data('dataMain')/aPPLICATIONFIELDS" multi-select="true">
   <xforms:label ref="col_1" id="default111"></xforms:label>
   <xforms:value ref="col_1" id="default112"></xforms:value>
   <xforms:itemset id="default113" auto-load-data="true">
  
  
  <itemset-data xmlns="" id="default124">
   <rows xmlns="" id="default125">
    <row id="default126">
     <cell id="default127">交通</cell></row> 
    <row id="default128">
     <cell id="default129">其他</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_1" id="default130"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input3" class="xui-autofill" ref="data('dataMain')/COMPANY_PROMISE"></xforms:input>
  <xforms:textarea ref="data('dataMain')/iNSTALLREQUIRE" id="iNSTALLREQUIRE" class="xui-autofill"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect8" class="xui-autofill" ref="data('dataMain')/pROCESSUNIT" onCloseup="mainActivityNew.gridSelect8Closeup" label-ref="data('dataMain')/pROCESSUNIT" onDropdown="mainActivityNew.gridSelect8Dropdown">
   <xforms:label ref="mANUFACTUREIDCNAME" id="default45"></xforms:label>
   <xforms:value ref="AFC_MANUFACTURER_INFO" id="default46"></xforms:value>
   <xforms:itemset id="default47" data="jiagongdanweiDB" auto-load-data="true" independence="false">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default119"></xforms:column>
  <xforms:column ref="mANUFACTUREIDCNAME" id="default120"></xforms:column>
  <xforms:column ref="cONTACTTELEPHONE" id="default121"></xforms:column>
  <xforms:column ref="fAXNUMBER" id="default122"></xforms:column>
  <xforms:column ref="mANUFACTUREADDRESS" id="default123"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect9" class="xui-autofill" ref="data('dataMain')/dECTIONBASEDONNAME" multi-select="true" label-ref="data('dataMain')/dECTIONBASEDONNAME" onCloseup="mainActivityNew.gridSelect9Closeup">
   <xforms:label ref="dECTIONBASEDONNAME" id="default49"></xforms:label>
   <xforms:value ref="dECTIONBASEDONNAME" id="default50"></xforms:value>
   <xforms:itemset id="default51" data="detectionBaseInfoD" auto-load-data="true">
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="DECTION_BASED_ON_INFO" id="default62"></xforms:column>
  <xforms:column ref="dECTIONBASEDONNAME" id="default63"></xforms:column></xforms:itemset></xhtml:div></xui:view> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivityNew.js"/> 
  </resource> 
</window>
