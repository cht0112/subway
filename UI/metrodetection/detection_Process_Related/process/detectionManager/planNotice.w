<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:180px;left:633px;height:221px;"> 
    <data auto-load="false" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TEST_APPLICATION_INFO" id="dataMain" limit="20" offset="0" store-type="simple"
      update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/queryTestApplication"
        id="default8"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTEST_APPLICATION_INFOAction"
        id="default9"/>  
      <creator action="/metrodetection/system_code/logic/action/createTEST_APPLICATION_INFOAction"
        id="default10"/> 
    <rule id="dataBizRule1" relation="pRODUCTMANUFACTUREID" alert="'开发单位不能为空!'" readonly="true()" concept="TEST_APPLICATION_INFO"></rule>
  </data>  
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
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default32" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default33" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default34" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default35" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="SA_TaskData" concept="SA_Task" store-type="simple" limit="2000"><reader id="default21" action="/system/logic/action/queryTaskAction"></reader>
  <creator id="default22" action="/system/logic/action/createTaskAction"></creator>
  <writer id="default38" action="/system/logic/action/saveTaskAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="sampleDeviceData" concept="SAMPLE_DEVICE_INFO" store-type="simple"><creator id="default44" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction"></creator>
  <reader id="default45" action="/metrodetection/system_code/logic/action/myQuerySampleDeviceInfo"></reader>
  <writer id="default46" action="/metrodetection/system_code/logic/action/select_sample"></writer></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[planNotice.mdDefaultLoad(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" data="dataMain"
      id="flw" onAdvanceCommit="mainActivityNew.flwAdvanceCommit" onAbortCommit="mainActivityNew.flwAbortCommit"/>  
    <layout id="layout1" style="height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:123%;"> 
        <center id="borderLayout-center1"> 
          <xui:place control="view1" id="controlPlace1" style="position:relative;width:697px;height:416px;"/> 
        <xui:place control="view2" id="controlPlace2" style="height:191px;width:794px;"></xui:place></center>  
        </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:102px;left:742px;"/> 
    </layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="cell.excel" style="width:697px;height:616px;"
        id="layout2" src="notice.xls"/>  
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
  <xforms:input id="input3" class="xui-autofill" ref="data('dataMain')/COMPANY_PROMISE"></xforms:input></xui:view> 
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout3"><xui:place control="grid1" id="controlPlace3" style="position:absolute;height:100%;width:100%;top:10px;left:0;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="sampleDeviceData"><xui:column id="gridColumn3" ref="pROJECTNAME" label="项目名称" type="ro" width="100px"></xui:column><xui:column id="gridColumn4" ref="mANUFACTUREIDCNAME" label="供应商名称" type="ro" width="100px"></xui:column><xui:column id="gridColumn5" ref="dETECTIONOBJECTCNAME" label="检测对象" type="ro" width="100px"></xui:column><xui:column id="gridColumn1" ref="typ" type="ro" width="100px" label="检测类型"></xui:column>
  <xui:column id="gridColumn2" ref="dEVICEID1" label="设备ID" type="ro" width="100px"></xui:column>
  
  
  <xui:column id="gridColumn6" ref="dEADLINERECEIVEDATE" label="最晚进场日期" type="ro" width="147px"></xui:column></xhtml:div></xui:view></xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivityNew.js"/> 
  <xhtml:script id="htmlScript2" src="planNotice.js"></xhtml:script></resource> 
</window>
