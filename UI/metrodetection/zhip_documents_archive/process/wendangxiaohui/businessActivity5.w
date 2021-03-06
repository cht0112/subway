<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:292px;left:374px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="dataMain" concept="DOCUMENTS_DESTROY_RECORD" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createDOCUMENTS_DESTROY_RECORDAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/myQuerydocuments_destroy_record"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveDOCUMENTS_DESTROY_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple"><creator id="default4" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[businessActivity5.model1Load(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData1" concept="P_DOCUMENTS_ARCHIVE" store-type="grid">
   <creator id="default44" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"></creator>
   <reader id="default44" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default43" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE">
   <creator id="default63" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
   <reader id="default61" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
   <writer id="default62" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE">
   <creator id="default72" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
   <reader id="default73" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
   <writer id="default74" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data id="docNodeTree" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_DocNode" is-tree="true" offset="1" limit="-1" auto-load="true" confirm-refresh="false">
   <reader action="/SA/doc/logic/action/queryDocNodeAction" id="default75"></reader>
   <writer id="default76"></writer>
   <creator id="default69"></creator>
   <filter name="sKindFilter" id="filter1">SA_DocNode.sKind='dir'</filter>
   <filter name="sFlagFilter" id="filter2">SA_DocNode.sFlag=1</filter>
   <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL" id="docNodeTreeRootFilter"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="docData" concept="SA_DocNode" limit="200">
   <reader id="default77" action="/SA/doc/logic/action/queryDocNodeAction"></reader></data>
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2"><![CDATA[businessActivity5.model1XBLLoaded(event)]]></xforms:script></xforms:action><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData2" concept="SA_DocNode"><creator id="default70" action="/SA/doc/logic/action/createDocNodeAction"></creator>
  <reader id="default71" action="/SA/doc/logic/action/queryDocNodeAction"></reader>
  <writer id="default80" action="/SA/doc/logic/action/saveDocNodeAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData3" concept="P_DOCUMENTS_ARCHIVE" store-type="simple"><creator id="default81" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"></creator>
  <reader id="default84" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
  <writer id="default85" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"></writer></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="width:865px;height:626px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars2" id="controlPlace3" style="position:absolute;width:400px;top:5px;left:9px;height:37px;"></xui:place>
  <xui:place control="view2" id="controlPlace4" style="top:49px;left:9px;width:848px;height:576px;position:relative;"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" mode="IMG_TXT_LR" process="process1">
   <item name="back-process-item" id="barItem9"></item>
   <item name="advance-process-item" id="barItem10"></item>
   <item name="suspend-process-item" id="barItem12"></item>
   <item name="abort-process-item" id="barItem13"></item>
   <item name="process-chart-item" id="barItem15"></item>
  <item name="execute-list-item" id="barItem1"></item>
   </xui:bar></xhtml:div>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:91%;" id="excelLayout1" src="excelLayout6.xls"><xui:place control="attachment2" id="controlPlace6" style="height:287px;"></xui:place>
  <xui:place control="attachment3" id="controlPlace8"></xui:place>
  <xui:place control="attachmentEditor1" id="controlPlace2"></xui:place></xhtml:div>
  <xui:place control="process1" id="controlPlace5" style="position:absolute;width:24px;top:5px;left:562px;"></xui:place></layout>
  <xforms:input ref="data('dataMain')/aPPLICATIONTIME" id="aPPLICATIONTIME11"></xforms:input>
  <xforms:input ref="data('dataMain')/dESTROYTYPE" id="dESTROYTYPE11"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEID" id="fILEID11"></xforms:input>
  <xforms:input ref="data('dataMain')/fILENAME" id="fILENAME11"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEVER" id="fILEVER11"></xforms:input>
  <xforms:input ref="data('dataMain')/sECRETLEVEL" id="sECRETLEVEL11"></xforms:input>
  <xforms:input ref="data('dataMain')/fILEDESC" id="fILEDESC11"></xforms:input>
  <xforms:input ref="data('dataMain')/mEMO" id="mEMO11"></xforms:input>
  <xforms:input id="input1" ref="data('dataMain')/fILEID" disabled="true"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/fILENAME" disabled="true"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/aPPLICATIONTIME" format="yyyy-MM-dd" disabled="true"></xforms:input>
  <xforms:input id="input4" ref="data('dataMain')/fILEVER" disabled="true"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/dESTROYTYPE"></xforms:input>
  <xforms:input id="input6" ref="data('dataMain')/sECRETLEVEL"></xforms:input>
  <xforms:textarea ref="data('dataMain')/fILEDESC" id="textarea1" style="height:79px;" disabled="true"></xforms:textarea>
  <xforms:select1 ref="data('cData')/cHECKRESULT" id="radio1">
   <xforms:item id="selectItem1">
    <xforms:label id="default7"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default8"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default9"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default10"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xhtml:input type="radio" value="" name="" id="input7"></xhtml:input>
  <xhtml:input type="radio" value="" name="" id="input8"></xhtml:input>
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="dataMain" onAfterAdvance="businessActivity5.process1AfterAdvance" auto-save="false" auto-filter="false"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/sECRETLEVEL" disabled="true">
   <xforms:label ref="col_1" id="default11"></xforms:label>
   <xforms:value ref="col_0" id="default12"></xforms:value>
   <xforms:itemset id="default13" auto-load-data="true">
  <xforms:column ref="col_0" visible="false" id="default25"></xforms:column>
  <xforms:column ref="col_1" id="default26"></xforms:column>
  <itemset-data xmlns="" id="default14">
   <rows xmlns="" id="default15">
    <row id="default16">
     <cell id="default17">1</cell>
     <cell id="default18">普通</cell></row> 
    <row id="default19">
     <cell id="default20">2</cell>
     <cell id="default21">秘密</cell></row> 
    <row id="default22">
     <cell id="default23">3</cell>
     <cell id="default24">机密</cell></row> 
    <row id="default40">
     <cell id="default41">4</cell>
     <cell id="default42">绝密</cell></row> </rows> </itemset-data></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dESTROYTYPE" disabled="true">
   <xforms:label ref="col_1" id="default27"></xforms:label>
   <xforms:value ref="col_0" id="default28"></xforms:value>
   <xforms:itemset id="default29" auto-load-data="true"><itemset-data xmlns="" id="default30">
   <rows xmlns="" id="default31">
    <row id="default32">
     <cell id="default33">1</cell>
     <cell id="default34">电子文档销毁</cell></row> 
    <row id="default35">
     <cell id="default36">2</cell>
     <cell id="default37">纸质文档销毁</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default38"></xforms:column>
  <xforms:column ref="col_1" id="default39"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:input type="text" value="" id="input9" class="xui-input" style="width:456px;height:57px;" disabled="true"></xhtml:input>
  <xhtml:input type="text" value="" id="input10" class="xui-input" style="width:456px;height:59px;" disabled="true"></xhtml:input>
  <xhtml:input type="text" value="" id="input11" class="xui-input" style="width:457px;height:59px;" disabled="true"></xhtml:input>
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
   <xforms:itemset id="default55" data="leixing">
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
  <xforms:column ref="sDocName" id="default83"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/attachment.xbl.xml#attachment" display-buttons="newDoc:true;editDoc:true;downloadDoc:true;browseDoc:true;deleteDoc:true;saveDoc:true;docProperties:true;docHistory:true;refreshDoc:true;" runtime="html4" id="attachment2" owner-data="docData" model="model1"></xhtml:div>
  <xhtml:div component="/UI/system/components/attachment.xbl.xml#attachment" display-buttons="newDoc:true;editDoc:true;downloadDoc:true;browseDoc:true;deleteDoc:true;saveDoc:true;docProperties:true;docHistory:true;refreshDoc:true;" runtime="html4" id="attachment3"></xhtml:div>
  <xhtml:div component="/UI/system/components/attachmentEditor.xbl.xml#attachmentEditor" display-buttons="upload:true;template:true;download:true;edit:true;delete:true;history:true;" runtime="html4" id="attachmentEditor1" class="xui-attachmentEditor" ref="data('dataMain')/sParentID" display-style="single"></xhtml:div></xui:view>
  </xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="businessActivity5.js"></xhtml:script></xui:resource> 
</xui:window>
