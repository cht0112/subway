<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;top:567px;height:auto;left:111px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="SYSTEM_RESOURCE_INFO" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createSYSTEM_RESOURCE_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/systemAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveSYSTEM_RESOURCE_INFOAction"></writer>
  <rule id="dataBizRule1" relation="sYSTEMTYPE" required="true()"></rule>
  <rule id="dataBizRule2" relation="eRRORTYPE" required="true()"></rule>
  <rule id="dataBizRule3" relation="MODULE_NAME" required="true()"></rule>
  <rule id="dataBizRule4" relation="dECTIONOBJECT" required="true()"></rule>
  <rule id="dataBizRule5" relation="dECTIONBUSINESS" required="true()"></rule>
  <rule id="dataBizRule6" relation="eRRORDESC" required="true()"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="SYSTEM_TYPE_CODE"><creator id="default10" action="/metrodetection/system_code/logic/action/createSYSTEM_TYPE_CODEAction"></creator>
  <reader id="default11" action="/metrodetection/system_code/logic/action/querySYSTEM_TYPE_CODEAction"></reader>
  <writer id="default12" action="/metrodetection/system_code/logic/action/saveSYSTEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData3" concept="ERROR_TYPE_CODE"><creator id="default22" action="/metrodetection/system_code/logic/action/createERROR_TYPE_CODEAction"></creator>
  <reader id="default23" action="/metrodetection/system_code/logic/action/queryERROR_TYPE_CODEAction"></reader>
  <writer id="default24" action="/metrodetection/system_code/logic/action/saveERROR_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData4" concept="DEVICE_TYPE_CODE"><creator id="default13" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default14" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default15" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="DialogActivity.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="height:100%;width:100%;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="(event)" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" onclick="DialogActivity.inputbutton1Click(event)" style="width:75px;float:right" type="button" value="确定"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace4" style="position:absolute;top:5px;height:25px;left:5px;width:650px;"></xui:place>
  <xui:place control-label="gridSelect2" id="controlLabel1" style="position:absolute;top:85px;left:30px;" label="系统类型"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace5" style="position:absolute;top:80px;left:96px;"></xui:place><xui:place control-label="gridSelect3" id="controlLabel2" style="position:absolute;top:90px;left:344px;" label="问题类型"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace6" style="position:absolute;top:80px;left:415px;"></xui:place><xui:place control-label="input1" id="controlLabel3" style="position:absolute;top:127px;left:30px;" label="模块名称"></xui:place>
  <xui:place control="input1" id="controlPlace3" style="position:absolute;top:119px;left:96px;"></xui:place>
  <xui:place control-label="gridSelect1" id="controlLabel4" style="position:absolute;top:123px;left:344px;" label="检测对象"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace7" style="position:absolute;top:117px;left:415px;"></xui:place><xui:place control-label="textarea1" id="controlLabel5" style="position:absolute;top:185px;left:30px;" label="检测业务"></xui:place>
  <xui:place control="textarea1" id="controlPlace8" style="position:absolute;top:161px;width:472px;left:96px;height:60px;"></xui:place><xui:place control-label="textarea2" id="controlLabel6" style="position:absolute;left:30px;top:275px;" label="问题描述"></xui:place>
  <xui:place control="textarea2" id="controlPlace9" style="position:absolute;width:474px;left:96px;height:66px;top:247px;"></xui:place><xui:place control-label="textarea3" id="controlLabel7" style="position:absolute;left:6px;top:366px;" label="问题解决办法"></xui:place>
  <xui:place control="textarea3" id="controlPlace10" style="position:absolute;width:474px;left:96px;height:70px;top:336px;"></xui:place><xui:place control-label="textarea4" id="controlLabel8" style="position:absolute;left:54px;top:451px;" label="备注"></xui:place>
  <xui:place control="textarea4" id="controlPlace11" style="position:absolute;width:472px;left:96px;height:57px;top:428px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="bizData1">
   <item name="insert-item" id="barItem1"></item>
   <item name="save-item" id="barItem2"></item>
   <item name="delete-item" id="barItem3"></item>
   <item name="refresh-item" id="barItem4"></item>
   <item name="separator" id="customBarItem3"></item>
   </xui:bar></xhtml:div>
  <xforms:input id="input1" ref="data('bizData1')/MODULE_NAME"></xforms:input>
  <xforms:textarea ref="data('bizData1')/dECTIONBUSINESS" id="textarea1"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/eRRORDESC" id="textarea2"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/eRRORSOLUTION" id="textarea3"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/mEMO" id="textarea4"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('bizData1')/dECTIONOBJECT">
   <xforms:label ref="dEVICETYPECNAME" id="default4"></xforms:label>
   <xforms:value ref="DEVICE_TYPE_CODE" id="default5"></xforms:value>
   <xforms:itemset id="default6" data="bizData4" auto-load-data="true">
    <xforms:column ref="DEVICE_TYPE_CODE" visible="false" id="default28"></xforms:column>
    <xforms:column ref="dEVICETYPECNAME" id="default31"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('bizData1')/eRRORTYPE">
   <xforms:label ref="eRRORTYPECNAME" id="default19"></xforms:label>
   <xforms:value ref="ERROR_TYPE_CODE" id="default20"></xforms:value>
   <xforms:itemset id="default21" data="bizData3" auto-load-data="true">
    <xforms:column ref="ERROR_TYPE_CODE" visible="false" id="default29"></xforms:column>
    <xforms:column ref="eRRORTYPECNAME" id="default30"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('bizData1')/sYSTEMTYPE">
   <xforms:label ref="sYSTEMTYPECNAME" id="default7"></xforms:label>
   <xforms:value ref="SYSTEM_TYPE_CODE" id="default8"></xforms:value>
   <xforms:itemset id="default9" data="bizData2" auto-load-data="true">
    <xforms:column ref="SYSTEM_TYPE_CODE" visible="false" id="default17"></xforms:column>
    <xforms:column ref="sYSTEMTYPECNAME" id="default18"></xforms:column></xforms:itemset> </xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="DialogActivity.js"></xhtml:script></xui:resource> 
</xui:window>
