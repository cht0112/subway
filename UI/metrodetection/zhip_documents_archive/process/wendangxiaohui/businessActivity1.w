<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:213px;left:193px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="dataMain" concept="DOCUMENTS_DESTROY_RECORD" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createDOCUMENTS_DESTROY_RECORDAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/myQuerydocuments_destroy_record"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveDOCUMENTS_DESTROY_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="P_DOCUMENTS_ARCHIVE">
   <creator id="default8"></creator>
   <reader id="default8" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default7"></writer></data>
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
   <filter name="sFlagFilter" id="filter2">SA_DocNode.sFlag='1'</filter>
   <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL" id="docNodeTreeRootFilter"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="docData" concept="SA_DocNode" limit="200">
   <reader id="default77" action="/SA/doc/logic/action/queryDocNodeAction"></reader></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[businessActivity1.model1XBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="width:756px;height:624px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace2" style="position:absolute;height:25px;left:2px;top:3px;width:77px;"></xui:place>
  <xui:place control="toolbars2" id="controlPlace3" style="position:absolute;width:400px;height:25px;top:3px;left:76px;"></xui:place>
  <xui:place control="view2" id="controlPlace4" style="top:43px;left:4px;width:743px;height:585px;position:relative;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="dataMain">
   <item name="save-item" id="barItem2"></item>
   </xui:bar></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" mode="IMG_TXT_LR" process="process1">
   <item name="advance-process-item" id="barItem10"></item>
   <item name="suspend-process-item" id="barItem12"></item>
   <item name="abort-process-item" id="barItem13"></item>
   <item name="process-chart-item" id="barItem15"></item>
  <item name="execute-list-item" id="barItem1"></item>
   </xui:bar></xhtml:div>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%; height: 100%;" id="excelLayout1" src="excelLayout2.xls"></xhtml:div>
  <xui:place control="process1" id="controlPlace5" style="position:absolute;top:337px;left:63px;"></xui:place></layout>
  <xforms:input ref="data('dataMain')/aPPLICATIONTIME" id="aPPLICATIONTIME7"></xforms:input>
  <xforms:input ref="data('dataMain')/dESTROYTYPE" id="dESTROYTYPE7"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEID" id="fILEID7"></xforms:input>
  <xforms:input ref="data('dataMain')/fILENAME" id="fILENAME7"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEVER" id="fILEVER7"></xforms:input>
  <xforms:input ref="data('dataMain')/sECRETLEVEL" id="sECRETLEVEL7"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEDESC" id="fILEDESC7"></xforms:input>
  <xforms:input ref="data('dataMain')/mEMO" id="mEMO7"></xforms:input>
  <xforms:input id="input1" ref="data('dataMain')/fILEID" disabled="true"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/fILENAME" disabled="true"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/aPPLICATIONTIME" format="yyyy-MM-dd" disabled="true" tabindex="2"></xforms:input>
  <xforms:input id="input4" ref="data('dataMain')/dESTROYTYPE"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/sECRETLEVEL"></xforms:input>
  <xforms:input id="input6" ref="data('dataMain')/fILEVER" disabled="true" tabindex="8"></xforms:input>
  <xforms:textarea ref="data('dataMain')/fILEDESC" id="textarea1" style="height:75px;" disabled="true" tabindex="10"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea2" style="height:71px;" tabindex="11"></xforms:textarea>
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="dataMain"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/sECRETLEVEL" disabled="true" tabindex="9">
   <xforms:label ref="col_1" id="default4"></xforms:label>
   <xforms:value ref="col_0" id="default5"></xforms:value>
   <xforms:itemset id="default6" auto-load-data="true">
  <xforms:column ref="col_0" visible="false" id="default18"></xforms:column>
  <xforms:column ref="col_1" id="default19"></xforms:column>
  <itemset-data xmlns="" id="default23">
   <rows xmlns="" id="default24">
    <row id="default25">
     <cell id="default26">1</cell>
     <cell id="default27">普通</cell></row> 
    <row id="default28">
     <cell id="default29">2</cell>
     <cell id="default30">秘密</cell></row> 
    <row id="default44">
     <cell id="default45">3</cell>
     <cell id="default46">机密</cell></row> 
    <row id="default47">
     <cell id="default48">4</cell>
     <cell id="default49">绝密</cell></row> </rows> </itemset-data></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dESTROYTYPE" onCloseup="businessActivity1.gridSelect2Closeup" tabindex="1">
   <xforms:label ref="col_1" id="default31"></xforms:label>
   <xforms:value ref="col_0" id="default32"></xforms:value>
   <xforms:itemset id="default33" auto-load-data="true"><itemset-data xmlns="" id="default34">
   <rows xmlns="" id="default35">
    <row id="default36">
     <cell id="default37">1</cell>
     <cell id="default38">电子文档销毁</cell></row> 
    <row id="default39">
     <cell id="default40">2</cell>
     <cell id="default41">纸质文档销毁</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default42"></xforms:column>
  <xforms:column ref="col_1" id="default43"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/fILEID" label-ref="data('dataMain')/fILENAME" onCloseup="businessActivity1.gridSelect3Closeup" tabindex="7">
   <xforms:label ref="pFILENAME" id="default9"></xforms:label>
   <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default10"></xforms:value>
   <xforms:itemset id="default11" data="bizData1" auto-load-data="true">
  
  <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default16"></xforms:column>
  <xforms:column ref="pFILENAME" id="default17"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/dOCUMENTCATEGORY" onCloseup="businessActivity1.gridSelect4Closeup" label-ref="data('dataMain')/dOCUMENTCATEGORYCNAME" tabindex="5">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default12"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default13"></xforms:value>
   <xforms:itemset id="default14" data="kemu" auto-load-data="true">
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default51"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default52"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/dOCUMENTTYPE" label-ref="data('dataMain')/dOCUMENTTYPECNAME" tabindex="6">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default15"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default20"></xforms:value>
   <xforms:itemset id="default21" data="leixing" auto-load-data="true">
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default55"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default56"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator="," value-separator="," ext-separator="," id="treeSelect1" ref="data('dataMain')/sParentID" label-ref="data('dataMain')/sDocName1" delay="true" tabindex="3">
   <xforms:label id="default22" ref="sDocName"></xforms:label>
   <xforms:value id="default50" ref="sParentID"></xforms:value>
   <xforms:itemset id="default53" data="docNodeTree" auto-load-data="true">
  <xforms:column ref="sParentID" visible="false" id="default64"></xforms:column>
  <xforms:column ref="sDocName" id="default65"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('dataMain')/fILEID" label-ref="data('dataMain')/sDocName" tabindex="4">
   <xforms:label ref="sDocName" id="default54"></xforms:label>
   <xforms:value ref="SA_DocNode" id="default57"></xforms:value>
   <xforms:itemset id="default58" data="docData" auto-load-data="true">
  <xforms:column ref="SA_DocNode" visible="false" id="default68"></xforms:column>
  <xforms:column ref="sDocName" id="default70"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="businessActivity1.js"></xhtml:script></xui:resource> 
</xui:window>
