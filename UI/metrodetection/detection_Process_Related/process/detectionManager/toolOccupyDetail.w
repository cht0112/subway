<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xforms:model id="model1" style="top:30px;height:auto;left:463px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="toolOccupyD" concept="TOOL_OCCUPY_INFO" store-type="simple" onAfterRefresh="toolOccupyDetail.toolOccupyDAfterRefresh"><creator id="default1" action="/metrodetection/system_code/logic/action/createTOOL_OCCUPY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/querytoolOccupyAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveTOOL_OCCUPY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrBaseD" concept="HR_BASE_INFO" store-type="simple" confirm-refresh="false"><creator id="default4" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="toolBaseD" concept="DETECTION_TOOL_INFO" store-type="simple"><creator id="default7" action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_INFOAction"></creator>
  <reader id="default8" action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_INFOAction"></reader>
  <writer id="default9" action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="testTaskD" concept="TEST_PROJECT_TASK_INFO" store-type="simple"><creator id="default28" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction"></creator>
  <reader id="default29" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_TASK_INFOAction"></reader>
  <writer id="default30" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction"></writer></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace2" style="position:absolute;top:7px;left:5px;height:39px;width:162px;"></xui:place>
  <xui:place control="input3" id="controlPlace5" style="position:absolute;top:108px;left:87px;"></xui:place>
  <xui:place control="input4" id="controlPlace6" style="position:absolute;left:334px;top:108px;"></xui:place>
  <xui:place control="textarea1" id="controlPlace9" style="position:absolute;top:196px;height:43px;width:400px;left:88px;"></xui:place>
  <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;">*</xhtml:label>
  <xhtml:label id="label1" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;">*</xhtml:label>
  <xhtml:label id="label2" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;">*</xhtml:label>
  <xhtml:label id="label3" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;">*</xhtml:label>
  <xhtml:label id="label4" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;">*</xhtml:label>
  <xhtml:label id="label5" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:26px;">*</xhtml:label>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;left:62px;top:198px;"><![CDATA[备注]]></xhtml:label>
  <xhtml:label id="label8" class="xui-label" style="position:absolute;position:absolute;left:273px;top:156px;"><![CDATA[技术负责人]]></xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;position:absolute;left:26px;top:155px;"><![CDATA[工具可用性]]></xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;position:absolute;top:111px;left:261px;"><![CDATA[占用截止时间]]></xhtml:label>
  <xhtml:label id="label12" class="xui-label" style="position:absolute;position:absolute;top:110px;left:14px;"><![CDATA[占用起始时间]]></xhtml:label>
  <xhtml:label id="label13" class="xui-label" style="position:absolute;position:absolute;left:285px;top:67px;"><![CDATA[任务名称]]></xhtml:label>
  <xhtml:label id="label14" class="xui-label" style="position:absolute;position:absolute;left:37px;top:68px;"><![CDATA[工具名称]]></xhtml:label>
  <xhtml:label id="label16" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label18" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label15" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label19" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label17" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label21" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label23" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label20" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label24" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label22" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label26" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label28" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label25" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label29" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label27" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label31" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:68px;left:274px;;position:absolute;">*</xhtml:label>
  <xhtml:label id="label33" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;top:156px;left:261px;">*</xhtml:label>
  <xhtml:label id="label30" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;left:15px;top:154px;">*</xhtml:label>
  <xhtml:label id="label34" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;top:110px;left:251px;">*</xhtml:label>
  <xhtml:label id="label32" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;left:5px;top:110px;">*</xhtml:label>
  <xui:place control="toolWR" id="controlPlace10" style="position:absolute;top:284px;left:420px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;top:65px;left:87px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace4" style="position:absolute;top:63px;left:334px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;top:150px;left:88px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace8" style="position:absolute;top:150px;left:334px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="toolOccupyD">
   <item name="save-item" id="barItem2"></item>
   <item name="separator" id="customBarItem3"></item><item name="refresh-item" id="barItem4"></item>
   
   </xui:bar></xhtml:div>
  <xforms:input id="input3" ref="data('toolOccupyD')/oCCUPYSTARTDATETIME"></xforms:input>
  <xforms:input id="input4" ref="data('toolOccupyD')/oCCUPYENDDATETIME"></xforms:input>
  <xforms:textarea ref="data('toolOccupyD')/mEMO" id="textarea1"></xforms:textarea>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="toolWR" onReceive="toolOccupyDetail.toolWRReceive"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('toolOccupyD')/tOOL_NO" label-ref="data('toolOccupyD')/tOOLCNAME">
   <xforms:label ref="tOOLCNAME" id="default10"></xforms:label>
   <xforms:value ref="DETECTION_TOOL_INFO" id="default11"></xforms:value>
   <xforms:itemset id="default12" data="hrBaseD">
  
  
  
  
  <xforms:column ref="DETECTION_TOOL_INFO" visible="false" id="default23"></xforms:column>
  <xforms:column ref="tOOLCNAME" id="default24"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('toolOccupyD')/tASKID" label-ref="data('toolOccupyD')/tASKNAME">
   <xforms:label ref="tASKNAME" id="default25"></xforms:label>
   <xforms:value ref="tASKID" id="default26"></xforms:value>
   <xforms:itemset id="default27" data="testTaskD" auto-load-data="true">
  
  
  
  
  <xforms:column ref="tASKID" id="default41"></xforms:column>
  <xforms:column ref="tASKNAME" id="default42"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('toolOccupyD')/tOOLUSED" label-ref="data('toolOccupyD')/tOOLUSEDCNAME">
   <xforms:label ref="col_1" id="default43"></xforms:label>
   <xforms:value ref="col_0" id="default44"></xforms:value>
   <xforms:itemset id="default45" auto-load-data="true"><itemset-data xmlns="" id="default54">
   <rows xmlns="" id="default55">
    <row id="default56">
     <cell id="default57">1</cell>
     <cell id="default58">可用</cell></row> 
    <row id="default59">
     <cell id="default60">0</cell>
     <cell id="default61">不可用</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default64"></xforms:column>
  <xforms:column ref="col_1" id="default65"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('toolOccupyD')/tECHMANAGER" label-ref="data('toolOccupyD')/oPERATORNAME">
   <xforms:label ref="" id="default66"></xforms:label>
   <xforms:value ref="" id="default67"></xforms:value>
   <xforms:itemset id="default68" data="hrBaseD" auto-load-data="true">
  
  
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default75"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default76"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="toolOccupyDetail.js"></xhtml:script></xui:resource> 
</xui:window>
