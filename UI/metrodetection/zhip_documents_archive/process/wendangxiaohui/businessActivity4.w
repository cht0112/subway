<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:149px;left:359px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="dataMain" concept="DOCUMENTS_DESTROY_RECORD" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createDOCUMENTS_DESTROY_RECORDAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/myQuerydocuments_destroy_record"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveDOCUMENTS_DESTROY_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple"><creator id="default4" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[businessActivity4.model1XBLLoaded(event)]]></xforms:script></xforms:action>
  <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereVersion">
   <reader action="/system/logic/action/queryOrgAction" id="default4_7"></reader></data>
  <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll">
   <creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction" id="default5_7"></creator>
   <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default6_7"></reader>
   <writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction" id="default7_7"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="P_DOCUMENTS_ARCHIVE">
   <creator id="default44"></creator>
   <reader id="default44" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default43"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE">
   <creator id="default63" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
   <reader id="default61" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
   <writer id="default62" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE">
   <creator id="default72" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
   <reader id="default73" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
   <writer id="default74" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data id="docNodeTree" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_DocNode" is-tree="true" offset="1" limit="-1" auto-load="true" onIndexChanged="docNodeTreeIndexChanged" confirm-refresh="false">
   <reader action="/SA/doc/logic/action/queryDocNodeAction" id="default75"></reader>
   <writer id="default76"></writer>
   <creator id="default69"></creator>
   <filter name="sKindFilter" id="filter1">SA_DocNode.sKind='dir'</filter>
   <filter name="sFlagFilter" id="filter2">SA_DocNode.sFlag=1</filter>
   <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL" id="docNodeTreeRootFilter"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="docData" concept="SA_DocNode" limit="200">
   <reader id="default77" action="/SA/doc/logic/action/queryDocNodeAction"></reader></data>
  <xforms:action id="action2" ev:event="onload"><xforms:script id="xformsScript2"><![CDATA[businessActivity4.model1Load(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="width:870px;height:620px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace2" style="position:absolute;top:3px;left:3px;height:38px;width:78px;"></xui:place>
  <xui:place control="toolbars2" id="controlPlace3" style="position:absolute;width:400px;height:25px;top:3px;left:77px;"></xui:place>
  <xui:place control="view2" id="controlPlace4" style="left:8px;top:43px;width:849px;height:580px;position:relative;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="cData">
   <item name="save-item" id="barItem2"></item>
   </xui:bar></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" mode="IMG_TXT_LR" process="process1">
   <item name="back-process-item" id="barItem9"></item>
   <item name="advance-process-item" id="barItem10"></item>
   <item name="suspend-process-item" id="barItem12"></item>
   <item name="abort-process-item" id="barItem13"></item>
   <item name="process-chart-item" id="barItem15"></item>
  <item name="execute-list-item" id="barItem1"></item>
   </xui:bar></xhtml:div>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:92%;" id="excelLayout1" src="excelLayout5.xls"></xhtml:div>
  <xui:place control="process1" id="controlPlace5" style="position:absolute;top:313px;left:134px;"></xui:place></layout>
  <xforms:input ref="data('dataMain')/aPPLICATIONTIME" id="aPPLICATIONTIME10"></xforms:input>
  <xforms:input ref="data('dataMain')/dESTROYTYPE" id="dESTROYTYPE10"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEID" id="fILEID10"></xforms:input>
  <xforms:input ref="data('dataMain')/fILENAME" id="fILENAME10"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEVER" id="fILEVER10"></xforms:input>
  <xforms:input ref="data('dataMain')/sECRETLEVEL" id="sECRETLEVEL10"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEDESC" id="fILEDESC10"></xforms:input>
  <xforms:input ref="data('dataMain')/mEMO" id="mEMO10"></xforms:input>
  <xforms:input id="input1" ref="data('dataMain')/fILEID" disabled="true"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/fILENAME" disabled="true"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/aPPLICATIONTIME" format="yyyy-MM-dd" disabled="true"></xforms:input>
  <xforms:input id="input4" ref="data('dataMain')/dESTROYTYPE"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/fILEVER" disabled="true"></xforms:input>
  <xforms:input id="input6" ref="data('dataMain')/sECRETLEVEL"></xforms:input>
  <xforms:textarea ref="data('dataMain')/fILEDESC" id="textarea1" style="height:99px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea2" style="height:49px;" disabled="true"></xforms:textarea>
  <xforms:select1 ref="data('cData')/cHECKRESULT" id="radio1">
   <xforms:item id="selectItem1">
    <xforms:label id="default7"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default8"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default9"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default10"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:textarea ref="data('cData')/cHECKDESC" id="textarea3" style="height:86px;"></xforms:textarea>
  <xforms:textarea ref="data('cData')/mEMO" id="textarea4" style="height:110px;"></xforms:textarea>
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="dataMain" auto-filter="false"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/sECRETLEVEL" disabled="true">
   <xforms:label ref="col_1" id="default11"></xforms:label>
   <xforms:value ref="col_0" id="default12"></xforms:value>
   <xforms:itemset id="default13" auto-load-data="true">
  <xforms:column ref="col_0" visible="false" id="default36"></xforms:column>
  <xforms:column ref="col_1" id="default37"></xforms:column>
  <itemset-data xmlns="" id="default25">
   <rows xmlns="" id="default26">
    <row id="default27">
     <cell id="default28">1</cell>
     <cell id="default29">普通</cell></row> 
    <row id="default30">
     <cell id="default31">2</cell>
     <cell id="default32">秘密</cell></row> 
    <row id="default33">
     <cell id="default34">3</cell>
     <cell id="default35">机密</cell></row> 
    <row id="default40">
     <cell id="default41">4</cell>
     <cell id="default42">绝密</cell></row> </rows> </itemset-data></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dESTROYTYPE" disabled="true">
   <xforms:label ref="col_1" id="default14"></xforms:label>
   <xforms:value ref="col_0" id="default15"></xforms:value>
   <xforms:itemset id="default16" auto-load-data="true"><itemset-data xmlns="" id="default17">
   <rows xmlns="" id="default18">
    <row id="default19">
     <cell id="default20">1</cell>
     <cell id="default21">电子文档销毁</cell></row> 
    <row id="default22">
     <cell id="default23">2</cell>
     <cell id="default24">纸质文档销毁</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default38"></xforms:column>
  <xforms:column ref="col_1" id="default39"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/fILEID" label-ref="data('dataMain')/fILENAME" disabled="true">
   <xforms:label ref="pFILENAME" id="default45"></xforms:label>
   <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default46"></xforms:value>
   <xforms:itemset id="default47" data="bizData1" auto-load-data="true">
  <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default50"></xforms:column>
  <xforms:column ref="pFILENAME" id="default51"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('bizData1')/dOCUMENTCATEGORY" disabled="true">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default48"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default49"></xforms:value>
   <xforms:itemset id="default52" data="kemu" auto-load-data="true">
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default58"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default59"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('bizData1')/dOCUMENTTYPE" disabled="true">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default53"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default54"></xforms:value>
   <xforms:itemset id="default55" data="leixing" auto-load-data="true">
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default65"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default66"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator="," value-separator="," ext-separator="," id="treeSelect1" ref="data('dataMain')/sParentID" label-ref="data('dataMain')/sDocName1" delay="true" disabled="true">
   <xforms:label id="default56" ref="sDocName"></xforms:label>
   <xforms:value id="default57" ref="sParentID"></xforms:value>
   <xforms:itemset id="default60" data="docNodeTree" auto-load-data="true">
  <xforms:column ref="sParentID" visible="false" id="default78"></xforms:column>
  <xforms:column ref="sDocName" id="default79"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('dataMain')/fILEID" label-ref="data('dataMain')/sDocName" disabled="true">
   <xforms:label ref="sDocName" id="default64"></xforms:label>
   <xforms:value ref="SA_DocNode" id="default67"></xforms:value>
   <xforms:itemset id="default68" data="docData" auto-load-data="true">
  <xforms:column ref="SA_DocNode" visible="false" id="default82"></xforms:column>
  <xforms:column ref="sDocName" id="default83"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="businessActivity4.js"></xhtml:script></xui:resource> 
</xui:window>
