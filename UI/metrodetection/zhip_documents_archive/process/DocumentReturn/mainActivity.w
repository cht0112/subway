<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:261px;left:284px;"> 
    <data auto-load="true" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData" concept="P_DOCUMENTS_BORROW_RECORD" id="dBorrowReturn" limit="20" offset="0" store-type="grid" update-mode="whereAll" onValueChanging="mainActivity.dataMainValueChanging" confirm-refresh="false" filter-relations="aPPLICATIONTIME,pFILENAME,rETURNDATE,dOCUMENTCATEGORYCNAME,dOCUMENTTYPECNAME">
   <reader action="/metrodetection/system_code/logic/action/myQueryp_documents_borrow_record" id="default37"></reader>
   <writer action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_BORROW_RECORDAction" id="default36"></writer>
   <creator action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_BORROW_RECORDAction" id="default41"></creator>
   <rule id="dataBizRule10" relation="aPPLICATIONTIME" required="true()" alert="'借阅申请时间不能为空!'"></rule>
   <rule id="default4" relation="pFILEID" required="true()" alert="'编号不能为空!'"></rule>
   <rule id="dataBizRule11" relation="dOCUMENTCATEGORY" required="true()" alert="'文档科目不能为空!'"></rule>
   <rule id="dataBizRule8" relation="dOCUMENTTYPE" required="true()" alert="'文档类型不能为空!'"></rule>
   <rule id="dataBizRule9" relation="pFILENAME" required="true()" alert="'文档名称不能为空!'"></rule>
   <rule id="default19" relation="bORROWER" required="true()" alert="'借阅者不能为空!'"></rule>
   <rule id="default22" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"></rule>
  <calculate-relation relation="recCB" id="calculate-relation1"></calculate-relation>
  </data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE" confirm-refresh="false">
   <creator id="default24" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
   <reader id="default32" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
   <writer id="default29" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE" confirm-refresh="false">
   <creator id="default26" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
   <reader id="default31" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
   <writer id="default30" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO" confirm-refresh="false">
   <creator id="default27" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default29" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default30" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="bizData1" concept="P_DOCUMENTS_ARCHIVE" confirm-refresh="false">
   <creator id="default38"></creator>
   <reader id="default39" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default40"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple" confirm-refresh="false">
   <creator id="default99" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default97" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default100" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="xml" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple" confirm-refresh="false">
   <reader id="default98" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="guidang" concept="P_DOCUMENTS_ARCHIVE" store-type="simple" onValueChanged="mainActivity.guidangValueChanged" confirm-refresh="false"><creator id="default1" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xui:place control="dlgBorrowReturn" id="controlPlace11" style="position:absolute;top:79px;left:508px;"></xui:place>
  <xui:place control="view1" id="controlPlace1" style="width:805px;height:644px;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="文档归还" width="580px" height="350px" modal="true" id="dlgBorrowReturn" url="/UI/metrodetection/zhip_documents_archive/process/DocumentReturn/guihuan.w" onReceive="mainActivity.dlgBorrowReturnReceive" onClose="mainActivity.dlgBorrowReturnClose"></xhtml:div>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace2" style="position:absolute;top:8px;left:5px;height:39px;width:462px;"></xui:place>
  <xui:place control="btnReturn" id="controlPlace3" style="position:absolute;width:62px;height:30px;top:9px;left:437px;"></xui:place>
  <xui:place control="view2" id="controlPlace4" style="position:absolute;height:100%;width:100%;top:12px;left:5px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="dBorrowReturn" style="width:454px;">
   <item name="refresh-item" id="barItem4"></item>
   <item name="filter-pro-item" id="customBarItem1"></item>
   <item name="separator" id="customBarItem2"></item>
   <item name="first-item" id="barItem5"></item>
   <item name="pre-item" id="barItem6"></item>
   <item name="next-item" id="barItem7"></item>
   <item name="last-item" id="barItem8"></item>
   </xui:bar></xhtml:div>
  <xforms:trigger id="btnReturn">
   <xforms:label id="default5"><![CDATA[归还]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[mainActivity.btnReturnClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout2"><xui:place control="view3" id="controlPlace5" style="position:absolute;height:100%;width:100%;top:37px;left:5px;"></xui:place>
  </layout>
  <xui:view auto-load="true" id="view3" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout3">
  <xui:place control="grid1" style="height:100%;width:131%;top:5px;left:5px;" id="controlPlace6"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid1" data="dBorrowReturn">
  <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center" checked-value="2"/>
   <column ref="dOCUMENTCATEGORYCNAME" label="文档科目" width="100px" type="ro" id="gridColumn5"></column><column ref="dOCUMENTTYPECNAME" label="文档类型" width="100px" type="ro" id="gridColumn6"></column><column ref="pFILENAME" label="文档名称" width="196px" type="ro" id="gridColumn2"></column><column ref="oPERATORNAME2" label="借阅者" width="100px" type="ro" id="gridColumn7"></column><column ref="aPPLICATIONTIME" label="借阅申请时间" width="100px" type="ro" id="gridColumn1" format="yyyy-MM-dd"></column>
   
   <column ref="rETURNDATE" label="预计归还日期" width="100px" type="ro" id="gridColumn3" format="yyyy-MM-dd"></column>
   </xhtml:div></xui:view>
  </xui:view></xui:view></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
