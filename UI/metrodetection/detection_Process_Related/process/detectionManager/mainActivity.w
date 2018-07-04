<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:408px;left:302px;"> 
    <data auto-load="false" auto-new="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TEST_APPLICATION_INFO" id="dataMain" limit="20" offset="0" store-type="simple"
      update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/queryTestApplication"
        id="default8"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTEST_APPLICATION_INFOAction"
        id="default9"/>  
      <creator action="/metrodetection/system_code/logic/action/createTEST_APPLICATION_INFOAction"
        id="default10"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="afcData" concept="AFC_MANUFACTURER_INFO"> 
      <creator id="default74" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"/>  
      <reader id="default75" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"/>  
      <writer id="default76" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="detObjType" concept="DETECTION_OBJECT_TYPE" store-type="simple"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"/>  
      <writer id="default7" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="businessData" concept="BUSINESS_TYPE_CODE" store-type="simple"> 
      <creator id="default14" action="/metrodetection/system_code/logic/action/createBUSINESS_TYPE_CODEAction"/>  
      <reader id="default15" action="/metrodetection/system_code/logic/action/queryBUSINESS_TYPE_CODEAction"/>  
      <writer id="default85" action="/metrodetection/system_code/logic/action/saveBUSINESS_TYPE_CODEAction"/> 
    </data>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">mainActivity.mdDefaultLoad(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="deviceTypeCodeData" concept="DEVICE_TYPE_CODE" store-type="grid"> 
      <creator id="default12" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"/>  
      <reader id="default13" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"/>  
      <writer id="default88" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="navigatorBar1" mode="IMG_TXT_LR"> 
        <item id="barItem2" name="save-item"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
        id="processBar1" process="flw" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="back-process-item"/>  
        <item id="barItem13" name="advance-process-item"/>  
        <item id="barItem15" name="suspend-process-item"/>  
        <item id="barItem16" name="abort-process-item"/>  
        <item id="barItem1" name="process-chart-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" data="dataMain"
      id="flw"/>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout7" style="position:relative;height:100%;" type="absolute"> 
        <place control-label="iptPRODUCTNAME" id="default5" style="font-size:10pt;position: absolute;top:70px;left:31px;"/>  
        <place control="iptPRODUCTNAME" id="default6" style="font-size:10pt;position: absolute;width:150px;top:62px;left:181px;"/>  
        <place control-label="iptLINEID" id="default16" style="font-size:10pt;position: absolute;top:130px;left:31px;"/>  
        <place control="iptLINEID" id="default17" style="font-size:10pt;position: absolute;width:150px;top:122px;left:181px;"/>  
        <place control-label="iptDECTIONBASEDONNAME" id="default18" style="font-size:10pt;position: absolute;top:125px;left:382px;"/>  
        <place control="iptDECTIONBASEDONNAME" id="default19" style="font-size:10pt;position: absolute;width:150px;top:123px;left:503px;"/>  
        <place control-label="iptCONTACTPERSON" id="default20" style="font-size:10pt;position: absolute;top:160px;left:31px;"/>  
        <place control="iptCONTACTPERSON" id="default21" style="font-size:10pt;position: absolute;width:150px;top:152px;left:181px;"/>  
        <place control-label="iptCONTACTMOBILE" id="default22" style="font-size:10pt;position: absolute;top:155px;left:382px;"/>  
        <place control="iptCONTACTMOBILE" id="default23" style="font-size:10pt;position: absolute;width:150px;top:153px;left:503px;"/>  
        <place control-label="iptCONTACTTELEPHONE" id="default24" style="font-size:10pt;position: absolute;top:190px;left:31px;"/>  
        <place control="iptCONTACTTELEPHONE" id="default25" style="font-size:10pt;position: absolute;width:150px;top:182px;left:181px;"/>  
        <place control-label="iptCONTACTEMAIL" id="default26" style="font-size:10pt;position: absolute;top:185px;left:382px;"/>  
        <place control="iptCONTACTEMAIL" id="default27" style="font-size:10pt;position: absolute;width:150px;top:183px;left:503px;"/>  
        <place control-label="iptCONTACTADDRESS" id="default28" style="font-size:10pt;position: absolute;top:220px;left:31px;"/>  
        <place control="iptCONTACTADDRESS" id="default29" style="font-size:10pt;position: absolute;width:150px;top:212px;left:181px;"/>  
        <place control-label="iptCONTACTPOSTCODE" id="default30" style="font-size:10pt;position: absolute;top:215px;left:382px;"/>  
        <place control="iptCONTACTPOSTCODE" id="default31" style="font-size:10pt;position: absolute;width:150px;top:213px;left:503px;"/>  
        <place control-label="iptCONTACTFAXNUMBER" id="default32" style="font-size:10pt;position: absolute;top:250px;left:31px;"/>  
        <place control="iptCONTACTFAXNUMBER" id="default33" style="font-size:10pt;position: absolute;width:150px;top:242px;left:181px;"/>  
        <place control-label="iptAPPLICATIONDATE" id="default34" style="font-size:10pt;position: absolute;top:245px;left:382px;"/>  
        <place control="iptAPPLICATIONDATE" id="default35" style="font-size:10pt;position: absolute;width:150px;top:243px;left:503px;"/>  
        <place control-label="iptEXPECTENDINGDATE" id="default36" style="font-size:10pt;position: absolute;top:280px;left:31px;"/>  
        <place control="iptEXPECTENDINGDATE" id="default37" style="font-size:10pt;position: absolute;width:150px;top:272px;left:181px;"/>  
        <place control-label="iptPRODUCTSTYLE" id="default38" style="font-size:10pt;position: absolute;top:275px;left:382px;"/>  
        <place control="iptPRODUCTSTYLE" id="default39" style="font-size:10pt;position: absolute;width:150px;top:273px;left:503px;"/>  
        <place control-label="iptCOMPANYTYPE" id="default40" style="font-size:10pt;position: absolute;top:308px;left:30px;"/>  
        <place control="iptCOMPANYTYPE" id="default41" style="font-size:10pt;position: absolute;width:150px;top:302px;left:181px;"/>  
        <place control-label="iptAPPLICATIONFIELDS" id="default42" style="font-size:10pt;position: absolute;top:305px;left:382px;"/>  
        <place control="iptAPPLICATIONFIELDS" id="default43" style="font-size:10pt;position: absolute;width:150px;top:300px;left:503px;"/>  
        <place control-label="iptDEVELOPMENTTOOLS" id="default44" style="font-size:10pt;position: absolute;top:338px;left:30px;"/>  
        <place control="iptDEVELOPMENTTOOLS" id="default45" style="font-size:10pt;position: absolute;width:150px;top:332px;left:181px;"/>  
        <place control-label="iptCOMPILERENVIRONMENT" id="default46" style="font-size:10pt;position: absolute;top:335px;left:382px;"/>  
        <place control="iptCOMPILERENVIRONMENT" id="default47" style="font-size:10pt;position: absolute;width:150px;top:330px;left:503px;"/>  
        <place control-label="iptPRODUCTCONFIGURATION" id="default48" style="font-size:10pt;position: absolute;top:368px;left:30px;"/>  
        <place control="iptPRODUCTCONFIGURATION" id="default49" style="font-size:10pt;position: absolute;width:150px;top:362px;left:181px;"/>  
        <place control-label="iptFEATURESANDMODELS" id="default50" style="font-size:10pt;position: absolute;top:365px;left:382px;"/>  
        <place control="iptFEATURESANDMODELS" id="default51" style="font-size:10pt;position: absolute;width:150px;top:360px;left:503px;"/>  
        <place control-label="iptTESTINGREQUIREMENTS" id="default52" style="font-size:10pt;position: absolute;top:398px;left:30px;"/>  
        <place control="iptTESTINGREQUIREMENTS" id="default53" style="font-size:10pt;position: absolute;width:150px;top:392px;left:181px;"/>  
        <place control-label="iptOPERATORID" id="default54" style="font-size:10pt;position: absolute;top:395px;left:382px;"/>  
        <place control="iptOPERATORID" id="default55" style="font-size:10pt;position: absolute;width:150px;top:390px;left:503px;"/>  
        <place control-label="iptMNITLTELEPHONE" id="default56" style="font-size:10pt;position: absolute;top:428px;left:30px;"/>  
        <place control="iptMNITLTELEPHONE" id="default57" style="font-size:10pt;position: absolute;width:150px;top:422px;left:181px;"/>  
        <place control-label="iptMNITLFAXNUMBER" id="default58" style="font-size:10pt;position: absolute;top:425px;left:382px;"/>  
        <place control="iptMNITLFAXNUMBER" id="default59" style="font-size:10pt;position: absolute;width:150px;top:420px;left:503px;"/>  
        <place control-label="iptMNITLMOBILE" id="default60" style="font-size:10pt;position: absolute;top:458px;left:30px;"/>  
        <place control="iptMNITLMOBILE" id="default61" style="font-size:10pt;position: absolute;width:150px;top:452px;left:181px;"/>  
        <place control-label="iptMNITLEMAIL" id="default62" style="font-size:10pt;position: absolute;top:455px;left:382px;"/>  
        <place control="iptMNITLEMAIL" id="default63" style="font-size:10pt;position: absolute;width:150px;top:450px;left:503px;"/>  
        <place control-label="iptMNITLADDRESS" id="default64" style="font-size:10pt;position: absolute;top:488px;left:30px;"/>  
        <place control="iptMNITLADDRESS" id="default65" style="font-size:10pt;position: absolute;width:150px;top:482px;left:181px;"/>  
        <place control-label="iptMNITLPOSTCODE" id="default66" style="font-size:10pt;position: absolute;top:485px;left:382px;"/>  
        <place control="iptMNITLPOSTCODE" id="default67" style="font-size:10pt;position: absolute;width:150px;top:480px;left:503px;"/>  
        <place control-label="iptRECEIPTER" id="default68" style="font-size:10pt;position: absolute;top:518px;left:30px;"/>  
        <place control="iptRECEIPTER" id="default69" style="font-size:10pt;position: absolute;width:150px;top:512px;left:181px;"/>  
        <place control-label="iptRECEIPTDATE" id="default70" style="font-size:10pt;position: absolute;top:515px;left:382px;"/>  
        <place control="iptRECEIPTDATE" id="default71" style="font-size:10pt;position: absolute;width:150px;top:510px;left:503px;"/>  
        <place control-label="iptMEMO" id="default72" style="font-size:10pt;position: absolute;top:548px;left:30px;"/>  
        <place control="iptMEMO" id="default73" style="font-size:10pt;position: absolute;width:150px;top:542px;left:181px;"/>  
        <xui:place control-label="gridSelect1" id="controlLabel1" style="position:absolute;top:34px;left:31px;"/>  
        <xui:place control="gridSelect1" id="controlPlace1" style="position:absolute;top:26px;left:181px;"/>  
        <xui:place control-label="gridSelect2" id="controlLabel2" style="position:absolute;top:65px;left:382px;"/>  
        <xui:place control="gridSelect2" id="controlPlace2" style="position:absolute;top:63px;left:503px;"/>  
        <xui:place control-label="gridSelect3" id="controlLabel3" style="position:absolute;top:96px;left:382px;"/>  
        <xui:place control="gridSelect3" id="controlPlace3" style="position:absolute;top:94px;left:503px;"/>  
        <xui:place control-label="gridSelect4" id="controlLabel4" style="position:absolute;top:31px;left:382px;"/>  
        <xui:place control="gridSelect4" id="controlPlace5" style="position:absolute;top:29px;left:503px;"/>  
        <xui:place control-label="gridSelect5" id="controlLabel5" style="position:absolute;top:99px;left:33px;"/>  
        <xui:place control="gridSelect5" id="controlPlace6" style="position:absolute;top:93px;left:181px;"/>  
        <xui:place control="trigger1" id="controlPlace8" style="position:absolute;top:2px;left:574px;"/> 
      </layout>  
      <xforms:input id="iptPRODUCTNAME" ref="data('dataMain')/pRODUCTNAME"/>  
      <xforms:input id="iptLINEID" ref="data('dataMain')/lINEID"/>  
      <xforms:input id="iptDECTIONBASEDONNAME" ref="data('dataMain')/dECTIONBASEDONNAME"/>  
      <xforms:input id="iptCONTACTPERSON" ref="data('dataMain')/cONTACTPERSON"/>  
      <xforms:input id="iptCONTACTMOBILE" ref="data('dataMain')/cONTACTMOBILE"/>  
      <xforms:input id="iptCONTACTTELEPHONE" ref="data('dataMain')/cONTACTTELEPHONE"/>  
      <xforms:input id="iptCONTACTEMAIL" ref="data('dataMain')/cONTACTEMAIL"/>  
      <xforms:input id="iptCONTACTADDRESS" ref="data('dataMain')/cONTACTADDRESS"/>  
      <xforms:input id="iptCONTACTPOSTCODE" ref="data('dataMain')/cONTACTPOSTCODE"/>  
      <xforms:input id="iptCONTACTFAXNUMBER" ref="data('dataMain')/cONTACTFAXNUMBER"/>  
      <xforms:input id="iptAPPLICATIONDATE" ref="data('dataMain')/aPPLICATIONDATE"/>  
      <xforms:input id="iptEXPECTENDINGDATE" ref="data('dataMain')/eXPECTENDINGDATE"/>  
      <xforms:input id="iptPRODUCTSTYLE" ref="data('dataMain')/pRODUCTSTYLE"/>  
      <xforms:input id="iptCOMPANYTYPE" ref="data('dataMain')/cOMPANYTYPE"/>  
      <xforms:input id="iptAPPLICATIONFIELDS" ref="data('dataMain')/aPPLICATIONFIELDS"/>  
      <xforms:input id="iptDEVELOPMENTTOOLS" ref="data('dataMain')/dEVELOPMENTTOOLS"/>  
      <xforms:input id="iptCOMPILERENVIRONMENT" ref="data('dataMain')/cOMPILERENVIRONMENT"/>  
      <xforms:input id="iptPRODUCTCONFIGURATION" ref="data('dataMain')/pRODUCTCONFIGURATION"/>  
      <xforms:input id="iptFEATURESANDMODELS" ref="data('dataMain')/fEATURESANDMODELS"/>  
      <xforms:input id="iptTESTINGREQUIREMENTS" ref="data('dataMain')/tESTINGREQUIREMENTS"/>  
      <xforms:input id="iptOPERATORID" ref="data('dataMain')/oPERATORID"/>  
      <xforms:input id="iptMNITLTELEPHONE" ref="data('dataMain')/mNITLTELEPHONE"/>  
      <xforms:input id="iptMNITLFAXNUMBER" ref="data('dataMain')/mNITLFAXNUMBER"/>  
      <xforms:input id="iptMNITLMOBILE" ref="data('dataMain')/mNITLMOBILE"/>  
      <xforms:input id="iptMNITLEMAIL" ref="data('dataMain')/mNITLEMAIL"/>  
      <xforms:input id="iptMNITLADDRESS" ref="data('dataMain')/mNITLADDRESS"/>  
      <xforms:input id="iptMNITLPOSTCODE" ref="data('dataMain')/mNITLPOSTCODE"/>  
      <xforms:input id="iptRECEIPTER" ref="data('dataMain')/rECEIPTER"/>  
      <xforms:input id="iptRECEIPTDATE" ref="data('dataMain')/rECEIPTDATE"/>  
      <xforms:input id="iptMEMO" ref="data('dataMain')/mEMO"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/aSSIGNEDMANUFACTUREID"> 
        <xforms:label id="xuiLabel1" ref="mANUFACTUREIDCNAME"/>  
        <xforms:value id="default77" ref="AFC_MANUFACTURER_INFO"/>  
        <xforms:itemset id="default78" data="afcData" independence="true"> 
          <xforms:column ref="mANUFACTUREIDCNAME" id="default82"/>  
          <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default83"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dETECTIONOBJECTTYPE"> 
        <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel2"/>  
        <xforms:value ref="DETECTION_OBJECT_TYPE" id="default11"/>  
        <xforms:itemset id="default79" data="detObjType"> 
          <xforms:column ref="detection_object_type" visible="false" id="default80"/>  
          <xforms:column ref="dETECTIONOBJECTCNAME" id="default81"/>  
          <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default84"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/bUSINESSID"> 
        <xforms:label ref="bUSINESSIDCNAME" id="xuiLabel3"/>  
        <xforms:value ref="BUSINESS_TYPE_CODE" id="default86"/>  
        <xforms:itemset id="default87" data="businessData" independence="false"> 
          <xforms:column ref="BUSINESS_TYPE_CODE" visible="false" id="default91"/>  
          <xforms:column ref="BUSINESS_ID_CNAME" visible="false" id="default92"/>  
          <xforms:column ref="bUSINESSIDCNAME" id="default93"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/pRODUCTMANUFACTUREID"> 
        <xforms:label ref="mANUFACTUREIDCNAME" id="xuiLabel4"/>  
        <xforms:value ref="AFC_MANUFACTURER_INFO" id="default3"/>  
        <xforms:itemset id="default4" data="afcData"> 
          <xforms:column ref="mANUFACTUREIDCNAME" id="default89"/>  
          <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default90"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/dEVICETYPE"
        label-ref="data('dataMain')/dEVICETYPECNAME"> 
        <xforms:label id="xuiLabel5" ref="dEVICETYPECNAME"/>  
        <xforms:value id="default94" ref="dEVICETYPE"/>  
        <xforms:itemset id="default95" data="deviceTypeCodeData" auto-load-data="true"> 
            
           
        
  <xforms:column ref="dEVICETYPE" visible="false" id="default98"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default99"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xforms:trigger id="trigger1"> 
        <xforms:label id="xuiLabel6">trigger</xforms:label>  
        <xforms:action id="action2" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript2">mainActivity.trigger1Click(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger> 
    </xui:view>  
    <layout id="layout1" style="height:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top1" size="32px"> 
          <place control="tbsMain" id="controlPlace4"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="vDetail" id="controlPlace11" style="height:100%;"/> 
        </center> 
      </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:102px;left:742px;"/> 
    </layout> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</window>
