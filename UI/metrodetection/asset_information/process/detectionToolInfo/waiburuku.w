<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:143px;height:auto;top:179px;left:609px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="beipinbeijian" concept="DETECTION_TOOL_MOVING_RECORD" store-type="simple">
   <creator id="default1" action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_MOVING_RECORDAction"></creator>
   <reader id="default2" action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_MOVING_RECORDAction"></reader>
   <writer id="default3" action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_MOVING_RECORDAction"></writer>
  <rule id="dataBizRule3" relation="oPERATORID" required="true()" alert="'操作员不能为空!'"></rule>
  <rule id="dataBizRule4" relation="tOOLTYPEID" required="true()" alert="'工具类型不能为空!'"></rule>
  <rule id="dataBizRule6" relation="tOOLIDSTATE" required="true()" alert="'工具状态不能为空!'"></rule>
  <rule id="dataBizRule7" relation="tOOLNUMBER" required="true()" alert="'工具数量不能为空!'"></rule>
  <rule id="dataBizRule8" relation="mOVINGREASON" required="true()" alert="'出入库原因不能为空!'"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="toolData" concept="DETECTION_TOOL_INFO" store-type="simple">
   <reader id="default4" action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_INFOAction"></reader>
  <creator id="default52" action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_INFOAction"></creator>
  <writer id="default53" action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData1" concept="TOOL_SORT_CODE" store-type="grid" confirm-refresh="false" confirm-delete="false">
   <creator id="default28" action="/metrodetection/system_code/logic/action/createTOOL_SORT_CODEAction"></creator>
   <reader id="default27" action="/metrodetection/system_code/logic/action/queryTOOL_SORT_CODEAction"></reader>
   <writer id="default50" action="/metrodetection/system_code/logic/action/saveTOOL_SORT_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData2" concept="USE_STATE_CODE" store-type="grid" confirm-refresh="false">
   <creator id="default57" action="/metrodetection/system_code/logic/action/createUSE_STATE_CODEAction"></creator>
   <reader id="default58" action="/metrodetection/system_code/logic/action/queryUSE_STATE_CODEAction"></reader>
   <writer id="default59" action="/metrodetection/system_code/logic/action/saveUSE_STATE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="hrData" concept="HR_BASE_INFO">
   <creator id="default37" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default61" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default60" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple">
   <reader id="default67" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple">
   <creator id="default69" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
   <reader id="default71" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
   <writer id="default72" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData3" concept="TEST_PROJECT_INFO">
   <reader id="default68" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData4" concept="TEST_PROJECT_TASK_INFO">
   <reader id="default77" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_TASK_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData5" concept="USE_STATE_CODE">
   <reader id="default85" action="/metrodetection/system_code/logic/action/queryUSE_STATE_CODEAction"></reader></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="waiburuku.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:124px;left:732px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="width:668px;height:591px;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" style="width:75px;float:right" type="button" value="确定" onclick="waiburuku.inputbutton1Click(event)"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="oPERATEDATETIME" style="position: absolute;width: 153px;top:19px;left:95px;" id="controlPlace3"></xui:place>
  <xui:place control="tOOLID" style="position: absolute;width: 153px;top:79px;left:95px;" id="controlPlace9"></xui:place>
  <xui:place control="tOOLNUMBER" style="position: absolute;width: 153px;top:108px;left:95px;" id="controlPlace11"></xui:place>
  <xhtml:label id="label1" style="position:absolute;top:25px;left:20px;" class="xui-label"><![CDATA[操作日期时间]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;top:54px;left:57px;" class="xui-label"><![CDATA[操作员]]></xhtml:label>
  <xhtml:label id="label4" style="position:absolute;top:84px;left:56px;" class="xui-label"><![CDATA[工具ID]]></xhtml:label>
  <xhtml:label id="label5" style="position:absolute;top:114px;left:45px;" class="xui-label"><![CDATA[工具数量]]></xhtml:label>
  <xhtml:label id="label6" style="position:absolute;top:140px;left:66px;" class="xui-label"><![CDATA[备注]]></xhtml:label>
  <xhtml:label id="label7" style="position:absolute;left:307px;top:25px;" class="xui-label"><![CDATA[操作类型]]></xhtml:label>
  <xhtml:label id="label9" style="position:absolute;left:307px;top:55px;" class="xui-label"><![CDATA[工具类型]]></xhtml:label>
  <xhtml:label id="label10" style="position:absolute;left:308px;top:83px;" class="xui-label"><![CDATA[工具状态]]></xhtml:label>
  <xhtml:label id="label11" style="position:absolute;left:297px;top:114px;" class="xui-label"><![CDATA[出入库原因]]></xhtml:label>
  <xui:place control="textarea1" id="controlPlace6" style="position:absolute;height:99px;left:95px;width:420px;top:137px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace7" style="width:156px;position:absolute;left:358px;top:18px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace4" style="width:157px;position:absolute;left:358px;top:48px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace8" style="width:157px;position:absolute;left:358px;top:78px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace10" style="width:157px;position:absolute;left:358px;top:108px;"></xui:place>
  <xui:place control="gridSelect5" id="controlPlace5" style="position:absolute;top:48px;width:153px;left:95px;"></xui:place>
  </layout>
  <xforms:input ref="data('beipinbeijian')/oPERATEDATETIME" id="oPERATEDATETIME" format="yyyy-MM-dd" disabled="true"></xforms:input>
  <xforms:input ref="data('beipinbeijian')/tOOLID" id="tOOLID" disabled="true"></xforms:input>
  <xforms:input ref="data('beipinbeijian')/tOOLNUMBER" id="tOOLNUMBER"></xforms:input>
  <xforms:textarea ref="data('beipinbeijian')/mEMO" id="textarea1"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('beipinbeijian')/oPERATETYPE" disabled="true">
   <xforms:label ref="col_1" id="default5"></xforms:label>
   <xforms:value ref="col_0" id="default6"></xforms:value>
   <xforms:itemset id="default7" auto-load-data="true">
    <itemset-data xmlns="" id="default8">
     <rows xmlns="" id="default9">
      <row id="default10">
       <cell id="default11">1</cell>
       <cell id="default12">领用</cell></row> 
      <row id="default13">
       <cell id="default14">2</cell>
       <cell id="default15">归还</cell></row> 
      <row id="default16">
       <cell id="default17">3</cell>
       <cell id="default18">外部入库</cell></row> 
      <row id="default19">
       <cell id="default20">4</cell>
       <cell id="default21">外部出库</cell></row> </rows> </itemset-data> 
    <xforms:column ref="col_0" visible="false" id="default22"></xforms:column>
    <xforms:column ref="col_1" id="default23"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('beipinbeijian')/tOOLTYPEID">
   <xforms:label ref="tOOLSORTCNAME" id="default24"></xforms:label>
   <xforms:value ref="TOOL_SORT_CODE" id="default25"></xforms:value>
   <xforms:itemset id="default26" data="bizData1" auto-load-data="true">
    <xforms:column ref="TOOL_SORT_CODE" visible="false" id="default31"></xforms:column>
    <xforms:column ref="tOOLSORTCNAME" id="default32"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('beipinbeijian')/tOOLIDSTATE">
   <xforms:label ref="uSESTATECODECNAME" id="default33"></xforms:label>
   <xforms:value ref="USE_STATE_CODE" id="default34"></xforms:value>
   <xforms:itemset id="default35" data="bizData2" auto-load-data="true">
    <xforms:column ref="USE_STATE_CODE" visible="false" id="default38"></xforms:column>
    <xforms:column ref="uSESTATECODECNAME" id="default39"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('beipinbeijian')/mOVINGREASON">
   <xforms:label ref="col_1" id="default40"></xforms:label>
   <xforms:value ref="col_0" id="default41"></xforms:value>
   <xforms:itemset id="default42" auto-load-data="true">
     
    <xforms:column ref="col_0" visible="false" id="default55"></xforms:column>
    <xforms:column ref="col_1" id="default56"></xforms:column>
  <itemset-data xmlns="" id="default43">
   <rows xmlns="" id="default44">
    <row id="default45">
     <cell id="default46">2</cell>
     <cell id="default47">维修</cell></row> 
    <row id="default48">
     <cell id="default49">3</cell>
     <cell id="default51">校准</cell></row> </rows> </itemset-data></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('beipinbeijian')/oPERATORID" disabled="true">
   <xforms:label ref="oPERATORNAME" id="default29"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default30"></xforms:value>
   <xforms:itemset id="default36" data="hrData" auto-load-data="true">
    <xforms:column ref="HR_BASE_INFO" visible="false" id="default64"></xforms:column>
    <xforms:column ref="oPERATORNAME" id="default65"></xforms:column></xforms:itemset> </xhtml:div>
  </xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="waiburuku.js"></xhtml:script></xui:resource> 
</xui:window>
