<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:217px;left:278px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="dataMain" concept="DOCUMENTS_DESTROY_RECORD" direct-delete="false" store-type="simple" auto-new="true"><creator id="default1" action="/metrodetection/system_code/logic/action/createDOCUMENTS_DESTROY_RECORDAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/myQuerydocuments_destroy_record"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveDOCUMENTS_DESTROY_RECORDAction"></writer>
  <rule id="dataBizRule1" relation="aPPLICATIONTIME" required="true()" alert="'销毁申请时间不能为空!'"></rule>
  <rule id="dataBizRule2" relation="dESTROYTYPE" required="true()" alert="'销毁类别不能为空!'"></rule>
  <rule id="dataBizRule5" relation="fILEVER" required="true()" alert="'文件版本不能为空!'"></rule>
  </data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="P_DOCUMENTS_ARCHIVE" limit="200">
   <creator id="default39"></creator>
   <reader id="default39" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default40"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE">
   <creator id="default63" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
   <reader id="default61" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
   <writer id="default62" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE">
   <creator id="default72" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
   <reader id="default73" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
   <writer id="default74" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data auto-load="false" auto-new="true" component="/UI/system/components/data.xbl.xml#bizData" concept="P_DOCUMENTS_BORROW_RECORD" id="bizData2" limit="20" offset="0" store-type="simple" update-mode="whereAll" onAfterNew="mainActivity.dataMainAfterNew">
   <reader action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_BORROW_RECORDAction" id="default49"></reader>
   <writer action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_BORROW_RECORDAction" id="default50"></writer>
   <creator action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_BORROW_RECORDAction" id="default51"></creator>
   <rule id="dataBizRule10" relation="aPPLICATIONTIME" required="true()" alert="'借阅申请时间不能为空!'"></rule>
   <rule id="dataBizRule9" relation="pFILEID" required="true()" alert="'编号不能为空!'"></rule>
   <rule id="dataBizRule11" relation="dOCUMENTCATEGORY" required="true()" alert="'文档科目不能为空!'"></rule>
   <rule id="dataBizRule12" relation="dOCUMENTTYPE" required="true()" alert="'文档类型不能为空!'"></rule>
   <rule id="dataBizRule8" relation="pFILENAME" required="true()" alert="'文档名称不能为空!'"></rule>
   <rule id="dataBizRule7" relation="bORROWER" required="true()" alert="'借阅者不能为空!'"></rule>
   <rule id="dataBizRule13" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"></rule></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action>
  <data id="docNodeTree" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_DocNode" is-tree="true" offset="1" limit="-1" auto-load="true" onIndexChanged="docNodeTreeIndexChanged" confirm-refresh="false">
   <reader action="/SA/doc/logic/action/queryDocNodeAction" id="default75"></reader>
   <writer id="default76"></writer>
   <creator id="default69"></creator>
   <filter name="sKindFilter" id="filter1">SA_DocNode.sKind='dir'</filter>
   <filter name="sFlagFilter" id="filter2">SA_DocNode.sFlag=1</filter>
   <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL" id="docNodeTreeRootFilter"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="docData" concept="SA_DocNode" limit="200">
   <reader id="default77" action="/SA/doc/logic/action/queryDocNodeAction"></reader></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace2" style="width:865px;height:637px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars2" id="controlPlace3" style="position:absolute;top:5px;left:5px;height:38px;width:76px;"></xui:place>
  <xui:place control="toolbars3" id="controlPlace4" style="position:absolute;width:400px;height:25px;top:5px;left:79px;"></xui:place>
  <xui:place control="view2" id="controlPlace5" style="top:45px;width:857px;position:relative;left:5px;height:499px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="dataMain">
<item id="barItem1" name="save-item"></item></xui:bar></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"><xui:bar component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" mode="IMG_TXT_LR" process="process1">
   <item name="advance-process-item" id="barItem10"></item>
   <item name="suspend-process-item" id="barItem12"></item>
   <item name="abort-process-item" id="barItem13"></item>
   <item name="process-chart-item" id="barItem15"></item>
  <item name="execute-list-item" id="barItem2"></item>
   </xui:bar></xhtml:div>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:93%;" id="excelLayout1" src="excelLayout7.xls"></xhtml:div>
  <xui:place control="process1" id="controlPlace1" style="position:absolute;width:24px;top:5px;left:464px;"></xui:place></layout>
  <xforms:input id="input3" ref="data('dataMain')/aPPLICATIONTIME" format="yyyy-MM-dd" disabled="true" tabindex="2"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/fILEVER" disabled="true" tabindex="8"></xforms:input>
  <xforms:textarea ref="data('dataMain')/fILEDESC" id="textarea1" style="height:129px;" disabled="true" tabindex="10"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea2" style="height:129px;" tabindex="11"></xforms:textarea>
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="dataMain"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/sECRETLEVEL" disabled="true" tabindex="9">
   <xforms:label ref="col_1" id="default4"></xforms:label>
   <xforms:value ref="col_0" id="default5"></xforms:value>
   <xforms:itemset id="default6" auto-load-data="true">
  <xforms:column ref="col_0" visible="false" id="default18"></xforms:column>
  <xforms:column ref="col_1" id="default19"></xforms:column>
  <itemset-data xmlns="" id="default7">
   <rows xmlns="" id="default8">
    <row id="default9">
     <cell id="default10">1</cell>
     <cell id="default11">普通</cell></row> 
    <row id="default12">
     <cell id="default13">2</cell>
     <cell id="default14">秘密</cell></row> 
    <row id="default15">
     <cell id="default16">3</cell>
     <cell id="default17">机密</cell></row> 
    <row id="default33">
     <cell id="default34">4</cell>
     <cell id="default35">绝密</cell></row> </rows> </itemset-data></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dESTROYTYPE" onCloseup="mainActivity.gridSelect2Closeup" tabindex="1">
   <xforms:label ref="col_1" id="default20"></xforms:label>
   <xforms:value ref="col_0" id="default21"></xforms:value>
   <xforms:itemset id="default22"><itemset-data xmlns="" id="default23">
   <rows xmlns="" id="default24">
    <row id="default25">
     <cell id="default26">1</cell>
     <cell id="default27">电子文档销毁</cell></row> 
    <row id="default28">
     <cell id="default29">2</cell>
     <cell id="default30">纸质文档销毁</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default31"></xforms:column>
  <xforms:column ref="col_1" id="default32"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/fILEID" label-ref="data('dataMain')/fILENAME" onCloseup="mainActivity.gridSelect3Closeup" onDropdown="mainActivity.gridSelect3Dropdown" tabindex="7">
   <xforms:label ref="pFILENAME" id="default36"></xforms:label>
   <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default37"></xforms:value>
   <xforms:itemset id="default38" data="bizData1" auto-load-data="true">
  <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default43"></xforms:column>
  <xforms:column ref="pFILENAME" id="default44"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/dOCUMENTCATEGORY" onCloseup="mainActivity.gridSelect4Closeup" label-ref="data('dataMain')/dOCUMENTCATEGORYCNAME" tabindex="5">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default41"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default42"></xforms:value>
   <xforms:itemset id="default45" data="kemu" auto-load-data="true">
  
  
  
  
  
  
  
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default52"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default53"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/dOCUMENTTYPE" label-ref="data('dataMain')/dOCUMENTTYPECNAME" tabindex="6" onCloseup="mainActivity.gridSelect5Closeup">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default46"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default47"></xforms:value>
   <xforms:itemset id="default48" data="leixing" auto-load-data="true">
  
  
  
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default70"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default71"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator="," value-separator="," ext-separator="," id="treeSelect1" ref="data('dataMain')/sParentID" label-ref="data('dataMain')/sDocName1" delay="true" onCloseup="mainActivity.treeSelect1Closeup" tabindex="3">
   <xforms:label id="default54" ref="sDocName"></xforms:label>
   <xforms:value id="default55" ref="sParentID"></xforms:value>
   <xforms:itemset id="default56" data="docNodeTree" auto-load-data="true">
  <xforms:column ref="sParentID" visible="false" id="default84"></xforms:column>
  <xforms:column ref="sDocName" id="default85"></xforms:column></xforms:itemset></xhtml:div>
<!--  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6">-->
<!--   <xforms:label ref="" id="default57"></xforms:label>-->
<!--   <xforms:value ref="" id="default58"></xforms:value>-->
<!--   <xforms:itemset id="default59"></xforms:itemset></xhtml:div>-->
<!--  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect7">-->
<!--   <xforms:label ref="" id="default60"></xforms:label>-->
<!--   <xforms:value ref="" id="default64"></xforms:value>-->
<!--   <xforms:itemset id="default65"></xforms:itemset></xhtml:div>-->
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect8" ref="data('dataMain')/fILEID" input-changeable="true" tabindex="4">
   <xforms:label ref="sDocName" id="default66"></xforms:label>
   <xforms:value ref="SA_DocNode" id="default67"></xforms:value>
   <xforms:itemset id="default68" data="docData" auto-load-data="true">
  <xforms:column ref="SA_DocNode" visible="false" id="default80"></xforms:column>
  <xforms:column ref="sDocName" id="default81"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>
