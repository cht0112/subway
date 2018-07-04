<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xforms:model id="model1" style="top:50px;height:auto;left:431px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="roomOccupyD" concept="ROOM_OCCUPY_INFO" store-type="simple" onAfterRefresh="roomOccupydetail.roomOccupyDAfterRefresh" confirm-refresh="false"><creator id="default1" action="/metrodetection/system_code/logic/action/createROOM_OCCUPY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryRoomOccupyAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveROOM_OCCUPY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrBaseD" concept="HR_BASE_INFO" confirm-refresh="false" store-type="simple"><creator id="default4" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="testTaskD" concept="TEST_PROJECT_TASK_INFO" store-type="simple"><creator id="default35" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction"></creator>
  <reader id="default36" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_TASK_INFOAction"></reader>
  <writer id="default37" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="roomBaseD" concept="DETECTION_ROOM_INFO" store-type="simple"><creator id="default60" action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction"></creator>
  <reader id="default61" action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction"></reader>
  <writer id="default62" action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction"></writer></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace2" style="position:absolute;top:6px;left:5px;height:38px;width:167px;"></xui:place>
  <xui:place control="input4" id="controlPlace6" style="position:absolute;top:103px;left:336px;"></xui:place>
  <xui:place control="input5" id="controlPlace7" style="position:absolute;top:146px;left:89px;"></xui:place>
  <xui:place control="textarea1" id="controlPlace9" style="position:absolute;top:191px;height:45px;width:402px;left:90px;"></xui:place>
  <xui:place control="textarea2" id="controlPlace10" style="position:absolute;top:263px;height:45px;width:404px;left:90px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;left:40px;top:65px;" class="xui-label"><![CDATA[房间名称]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;left:276px;top:65px;" class="xui-label"><![CDATA[技术负责人]]></xhtml:label>
  <xhtml:label id="label3" style="position:absolute;top:106px;left:40px;" class="xui-label"><![CDATA[任务名称]]></xhtml:label>
  <xhtml:label id="label4" style="position:absolute;left:263px;top:107px;" class="xui-label"><![CDATA[占用起始时间]]></xhtml:label>
  <xhtml:label id="label5" style="position:absolute;left:16px;top:149px;" class="xui-label"><![CDATA[占用截止时间]]></xhtml:label>
  <xhtml:label id="label6" style="position:absolute;top:149px;left:275px;" class="xui-label"><![CDATA[房间可用性]]></xhtml:label>
  <xhtml:label id="label7" style="position:absolute;top:195px;left:41px;" class="xui-label"><![CDATA[房间区域]]></xhtml:label>
  <xhtml:label id="label8" style="position:absolute;top:265px;left:63px;" class="xui-label"><![CDATA[备注]]></xhtml:label>
  <xhtml:label id="label9" style="position:absolute;color:#FF0000;top:195px;left:31px;" class="xui-label"><![CDATA[*]]></xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:149px;left:263px;">*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:149px;left:6px;">*</xhtml:label>
  <xhtml:label id="label12" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:107px;left:253px;">*</xhtml:label>
  <xhtml:label id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:65px;left:267px;">*</xhtml:label>
  <xhtml:label id="label14" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:65px;left:32px;">*</xhtml:label>
  <xui:place control="roomWR" id="controlPlace11" style="position:absolute;top:183px;left:541px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace8" style="position:absolute;top:145px;left:337px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace12" style="position:absolute;top:102px;left:90px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace13" style="position:absolute;top:62px;left:336px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace14" style="position:absolute;top:61px;left:90px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="roomOccupyD">
   <item name="save-item" id="barItem2"></item>
   <item name="separator" id="customBarItem2"></item><item name="refresh-item" id="barItem4"></item>
   
   </xui:bar></xhtml:div>
  <xforms:input id="input4" ref="data('roomOccupyD')/oCCUPYSTARTDATETIME"></xforms:input>
  <xforms:input id="input5" ref="data('roomOccupyD')/oCCUPYENDDATETIME"></xforms:input>
  <xforms:textarea ref="data('roomOccupyD')/rOOMAREA" id="textarea1"></xforms:textarea>
  <xforms:textarea ref="data('roomOccupyD')/mEMO" id="textarea2"></xforms:textarea>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="roomWR" onReceive="roomOccupydetail.roomWRReceive"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('roomOccupyD')/rOOMUSED" label-ref="data('roomOccupyD')/rOOMUSEDCNAME">
   <xforms:label ref="col_1" id="default7"></xforms:label>
   <xforms:value ref="col_0" id="default8"></xforms:value>
   <xforms:itemset id="default9"><itemset-data xmlns="" id="default23">
   <rows xmlns="" id="default24">
    <row id="default25">
     <cell id="default26">1</cell>
     <cell id="default27">可用</cell></row> 
    <row id="default28">
     <cell id="default29">0</cell>
     <cell id="default30">不可用</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default33"></xforms:column>
  <xforms:column ref="col_1" id="default34"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('roomOccupyD')/tESTTASKID" label-ref="data('roomOccupyD')/tASKNAME">
   <xforms:label ref="tASKNAME" id="default38"></xforms:label>
   <xforms:value ref="tASKID" id="default39"></xforms:value>
   <xforms:itemset id="default40" data="testTaskD" auto-load-data="true">
  
  
  <xforms:column ref="tASKID" visible="false" id="default47"></xforms:column>
  <xforms:column ref="tASKNAME" id="default48"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('roomOccupyD')/tECHMANAGER" label-ref="data('roomOccupyD')/oPERATORNAME" readonly="true">
   <xforms:label ref="oPERATORNAME" id="default49"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default50"></xforms:value>
   <xforms:itemset id="default51" data="hrBaseD" auto-load-data="true">
  
  
  <xforms:column ref="HR_BASE_INFO" id="default58"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default59"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('roomOccupyD')/rOOMID" label-ref="data('roomOccupyD')/rOOMCNAME">
   <xforms:label ref="rOOMCNAME" id="default63"></xforms:label>
   <xforms:value ref="DETECTION_ROOM_INFO" id="default64"></xforms:value>
   <xforms:itemset id="default65" data="roomBaseD">
  
  
  <xforms:column ref="DETECTION_ROOM_INFO" visible="false" id="default72"></xforms:column>
  <xforms:column ref="rOOMCNAME" id="default73"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="roomOccupydetail.js"></xhtml:script></xui:resource> 
</xui:window>
