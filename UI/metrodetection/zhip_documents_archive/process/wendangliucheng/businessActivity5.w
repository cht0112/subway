<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:286px;left:324px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="dataMain" concept="P_DOCUMENTS_BORROW_RECORD" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_BORROW_RECORDAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/myQueryborrowState"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_BORROW_RECORDAction"></writer></data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple"><creator id="default4" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="json" src="" auto-load="false" id="data1" columns="cHECKRESULT,lable,value" store-type="simple"><rows xmlns="" id="default34">
   <row id="default35">
    <cell id="default36">1</cell>
    <cell id="default37">通过</cell>
    <cell id="default38">1</cell></row> 
   <row id="default39">
    <cell id="default40">2</cell>
    <cell id="default41">拒绝</cell>
    <cell id="default42">2</cell></row> </rows></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE"><creator id="default27" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
  <reader id="default28" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
  <writer id="default29" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE"><creator id="default30" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
  <reader id="default31" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
  <writer id="default32" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO"><creator id="default48" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default49" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default52" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[businessActivity5.model1Load(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData1" concept="P_DOCUMENTS_ARCHIVE" store-type="grid">
   <creator id="default58" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"></creator>
   <reader id="default62" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
   <writer id="default59" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData2" concept="P_DOCUMENTS_ARCHIVE" store-type="simple" direct-delete="true" confirm-delete="false" confirm-refresh="false"><creator id="default66" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"></creator>
  <reader id="default67" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"></reader>
  <writer id="default70" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"></writer></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="width:786px;height:610px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace2" style="position:absolute;width:80px;height:36px;left:2px;top:3px;"></xui:place>
  <xui:place control="toolbars2" id="controlPlace3" style="position:absolute;width:400px;height:25px;top:3px;left:76px;"></xui:place>
  <xui:place control="view2" id="controlPlace4" style="top:47px;left:7px;width:769px;position:relative;height:565px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="bizData2">
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
   <layout type="flow" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:100%;" id="excelLayout1" src="excelLayout6.xls"></xhtml:div>
  <xui:place control="process1" id="controlPlace5" style="position:absolute;width:24px;top:359px;left:209px;"></xui:place></layout>
  <xforms:input id="input1" ref="data('dataMain')/pFILEID"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/dOCUMENTTYPE"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/dOCUMENTCATEGORY"></xforms:input>
  <xforms:input id="input4" ref="data('dataMain')/bORROWER"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/pFILENAME" disabled="true" style="width:149px;"></xforms:input>
  <xforms:input id="input6" ref="data('dataMain')/aPPLICATIONTIME" format="yyyy-MM-dd" disabled="true" style="width:149px;"></xforms:input>
  <xforms:input id="input7" ref="data('dataMain')/rETURNDATE" format="yyyy-MM-dd" disabled="true" style="width:150px;"></xforms:input>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea1" style="height:93px;" disabled="true"></xforms:textarea>
  <xforms:select1 ref="data('cData')/cHECKRESULT" id="radio1">
   <xforms:item id="selectItem1">
    <xforms:label id="default7"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default8"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default9"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default10"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:select1 ref="" id="radio2">
   <xforms:item id="selectItem3">
    <xforms:label id="default11"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default12"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem4">
    <xforms:label id="default13"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default14"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:select1 ref="" id="radio3">
   <xforms:item id="selectItem5">
    <xforms:label id="default15"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default16"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem6">
    <xforms:label id="default17"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default18"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="json" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="process1" data="dataMain" auto-filter="false" onAdvanceCommit="businessActivity5.process1AdvanceCommit"></xhtml:div>
  <xforms:select1 ref="data('data1')/cHECKRESULT" id="radio4">
   <xforms:item id="selectItem7">
    <xforms:label id="default19"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default20"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem8">
    <xforms:label id="default21"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default22"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:select1 ref="data('data1')/cHECKRESULT" id="radio5">
   <xforms:item id="selectItem9">
    <xforms:label id="default23"><![CDATA[通过]]></xforms:label>
    <xforms:value id="default24"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem10">
    <xforms:label id="default25"><![CDATA[拒绝]]></xforms:label>
    <xforms:value id="default26"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/dOCUMENTCATEGORY" disabled="true" style="width:149px;">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default33"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default43"></xforms:value>
   <xforms:itemset id="default44" data="kemu" auto-load-data="true">
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default50"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default51"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dOCUMENTTYPE" disabled="true" style="width:149px;">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default45"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default46"></xforms:value>
   <xforms:itemset id="default47" data="leixing" auto-load-data="true">
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default54"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default55"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/bORROWER" disabled="true" style="width:149px;">
   <xforms:label ref="oPERATORNAME" id="default53"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default56"></xforms:value>
   <xforms:itemset id="default57" data="hrData" auto-load-data="true">
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default60"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default61"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('cData')/DESC2" id="textarea7" style="height:76px;width:458px;"></xforms:textarea>
  <xforms:textarea ref="data('cData')/DESC3" id="textarea8" style="height:68px;width:458px;"></xforms:textarea>
  <xhtml:input type="text" value="" id="input8" class="xui-input"></xhtml:input>
  <xhtml:input type="text" value="" id="input9" class="xui-input" style="width:457px;height:58px;" disabled="true"></xhtml:input>
  <xhtml:input type="text" value="" id="input10" class="xui-input" style="width:457px;height:60px;" disabled="true"></xhtml:input>
  <xhtml:input type="text" value="" id="input11" class="xui-input" style="width:456px;height:62px;" disabled="true"></xhtml:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/pFILEID" label-ref="data('dataMain')/pFILENAME" multi-select="true" disabled="true">
   <xforms:label ref="rowID" id="default63"></xforms:label>
   <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default64"></xforms:value>
   <xforms:itemset id="default65" data="bizData1" auto-load-data="true">
  <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default68"></xforms:column>
  <xforms:column ref="pFILENAME" id="default69"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('bizData2')/aLLOWBORROW">
   <xforms:label ref="col_1" id="default71"></xforms:label>
   <xforms:value ref="col_0" id="default72"></xforms:value>
   <xforms:itemset id="default73" auto-load-data="true"><itemset-data xmlns="" id="default74">
   <rows xmlns="" id="default75">
    <row id="default76">
     <cell id="default77">1</cell>
     <cell id="default78">正常</cell></row> 
    <row id="default79">
     <cell id="default80">2</cell>
     <cell id="default81">已借出</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default84"></xforms:column>
  <xforms:column ref="col_1" id="default85"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="businessActivity5.js"></xhtml:script></xui:resource> 
</xui:window>
