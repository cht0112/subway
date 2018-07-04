<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:143px;height:auto;top:123px;left:528px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="lvliData" concept="SAMPLE_DEVICE_MOVING_RECORD" store-type="simple" confirm-refresh="false">
   <creator id="default1" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_MOVING_RECORDAction"></creator>
   <reader id="default2" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_MOVING_RECORDAction"></reader>
   <writer id="default3" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_MOVING_RECORDAction"></writer>
  <rule id="dataBizRule1" relation="oPERATEDATETIME" required="true()" alert="'操作日期时间不能为空!'"></rule>
  <rule id="dataBizRule2" relation="oPERATETYPE" required="true()" alert="'操作类型不能为空!'"></rule>
  <rule id="dataBizRule13" relation="oPERATORID" required="true()" alert="'操作员不能为空!'"></rule>
  <rule id="dataBizRule15" relation="dEVICEID" required="true()" alert="'设备ID不能为空!'"></rule>
  <rule id="dataBizRule17" relation="oPERATERESULTSTATE" required="true()" alert="'操作结果不能为空!'"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple">
   <reader id="default73" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple">
   <creator id="default71" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
   <reader id="default71" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
   <writer id="default72" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO">
   <creator id="default72" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default75" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default74" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SAMPLE_DEVICE_INFO" direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="simple" update-mode="whereAll" confirm-delete="false">
   <reader action="/metrodetection/system_code/logic/action/myQuerySampleDeviceInfo" id="default77"></reader>
   <writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction" id="default76"></writer>
   <creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction" id="default80"></creator>
   <rule id="dataBizRule4" relation="dEVICETYPE" required="true()" alert="'检测对象不能为空!'"></rule>
   <rule id="dataBizRule5" relation="dECTIONTYPE" required="true()" alert="'检测类型不能为空!'"></rule>
   <rule id="dataBizRule6" relation="sOFTWAREVERSION" required="true()" alert="'软件版本不能为空!'"></rule>
   <rule id="dataBizRule7" relation="hARDWAREVERSION" required="true()" alert="'硬件版本不能为空!'"></rule>
   <rule id="dataBizRule8" relation="dEADLINERECEIVEDATE" required="true()" alert="'最晚进场日期不能为空!'"></rule>
   <rule id="dataBizRule9" relation="iNDEEDRECEIVEDATE" required="true()" alert="'实际进场日期不能为空!'"></rule>
   <rule id="dataBizRule10" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"></rule>
   <rule id="dataBizRule11" relation="iNDEEDRETURNDATE" required="true()" alert="'实际归还日期不能为空!'"></rule>
   <rule id="dataBizRule12" relation="sHAREDFLAG" required="true()" alert="'是否允许资源共用不能为空!'"></rule>
   <rule id="dataBizRule3" relation="mANUFACTUREID" required="true()" alert="'供应商名称不能为空!'"></rule>
   <rule id="dataBizRule16" relation="dEVICEID" alert="'设备ID不能为空!'" required="true()"></rule>
   <filter name="filter0" id="filter1"></filter>
   <calculate-relation relation="recCB" id="calculate-relation2"></calculate-relation></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[neibuguihuan.model1XBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="TEST_PROJECT_INFO"><creator id="default7"></creator>
  <reader id="default8" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default9"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData2" concept="SAMPLE_DEVICE_MOVING_RECORD" store-type="simple"><reader id="default10" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_MOVING_RECORDAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData3" concept="TEST_PROJECT_INFO" store-type="simple"><reader id="default11" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="neibuguihuan.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:414px;left:420px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="width:849px;height:573px;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" style="width:75px;float:right" type="button" value="确定" onclick="neibuguihuan.inputbutton1Click(event)"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="oPERATEDATETIME" style="width: 153px;position:absolute;left:338px;top:41px;" id="controlPlace4"></xui:place>
  <xui:place control="dEVICEID" style="width: 153px;position:absolute;left:338px;top:76px;" id="controlPlace9"></xui:place>
  <xhtml:label id="label1" class="xui-label" style="position:absolute;position:absolute;left:265px;top:45px;">操作日期时间</xhtml:label>
  <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;top:81px;left:39px;">操作员</xhtml:label>
  <xhtml:label id="label4" class="xui-label" style="position:absolute;position:absolute;top:116px;left:27px;">操作结果</xhtml:label>
  <xhtml:label id="label5" class="xui-label" style="position:absolute;position:absolute;top:114px;left:288px;">操作类型</xhtml:label>
  <xhtml:label id="label6" class="xui-label" style="position:absolute;position:absolute;top:45px;left:28px;"><![CDATA[项目名称]]></xhtml:label>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;left:301px;top:81px;"><![CDATA[设备ID]]></xhtml:label>
  <xhtml:label id="label8" class="xui-label" style="position:absolute;position:absolute;left:52px;top:144px;">备注</xhtml:label>
  <xui:place control="gridSelect3" id="controlPlace12" style="position:absolute;width:152px;top:109px;left:77px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace13" style="position:absolute;width:153px;top:109px;left:338px;"></xui:place>
  <xui:place control="gridSelect5" id="controlPlace5" style="width:152px;position:absolute;top:74px;left:77px;"></xui:place>
  <xui:place control="textarea1" id="controlPlace3" style="position:absolute;height:82px;width:414px;left:77px;top:144px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace6" style="position:absolute;left:77px;width:151px;top:40px;"></xui:place></layout>
  <xforms:input ref="data('lvliData')/oPERATEDATETIME" id="oPERATEDATETIME" format="yyyy-MM-dd" disabled="true"></xforms:input>
  <xforms:input ref="data('lvliData')/dEVICEID" id="dEVICEID" disabled="true"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('lvliData')/oPERATERESULTSTATE">
   <xforms:label ref="col_1" id="default44"></xforms:label>
   <xforms:value ref="col_0" id="default40"></xforms:value>
   <xforms:itemset id="default36">
    <itemset-data xmlns="" id="default45">
     <rows xmlns="" id="default43">
      <row id="default39">
       <cell id="default48">0</cell>
       <cell id="default46">成功</cell></row> 
      <row id="default41">
       <cell id="default38">1</cell>
       <cell id="default37">失败</cell></row> </rows> </itemset-data> 
    <xforms:column ref="col_0" visible="false" id="default47"></xforms:column>
    <xforms:column ref="col_1" id="default42"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('lvliData')/oPERATETYPE" disabled="true">
   <xforms:label ref="col_1" id="default53"></xforms:label>
   <xforms:value ref="col_0" id="default49"></xforms:value>
   <xforms:itemset id="default59">
    <itemset-data xmlns="" id="default58">
     <rows xmlns="" id="default64">
      <row id="default67">
       <cell id="default60">1</cell>
       <cell id="default56">供应商移交</cell></row> 
      <row id="default51">
       <cell id="default63">2</cell>
       <cell id="default57">返还供应商</cell></row> 
      <row id="default54">
       <cell id="default52">3</cell>
       <cell id="default62">内部领用</cell></row> 
      <row id="default66">
       <cell id="default50">4</cell>
       <cell id="default65">内部归还</cell></row> </rows> </itemset-data> 
    <xforms:column ref="col_0" visible="false" id="default61"></xforms:column>
    <xforms:column ref="col_1" id="default55"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('lvliData')/oPERATORID" label-ref="data('hrData')/oPERATORNAME" disabled="true">
   <xforms:label ref="oPERATORNAME" id="default68"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default69"></xforms:value>
   <xforms:itemset id="default70" data="hrData" auto-load-data="true">
    <xforms:column ref="HR_BASE_INFO" visible="false" id="default78"></xforms:column>
    <xforms:column ref="oPERATORNAME" id="default79"></xforms:column></xforms:itemset> </xhtml:div>
  <xforms:textarea ref="data('lvliData')/mEMO" id="textarea1"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('lvliData')/pROJECTID" disabled="true" readonly="true">
   <xforms:label ref="pROJECTNAME" id="default4"></xforms:label>
   <xforms:value ref="TEST_PROJECT_INFO" id="default5"></xforms:value>
   <xforms:itemset id="default6" data="bizData1">
  <xforms:column ref="TEST_PROJECT_INFO" visible="false" id="default12"></xforms:column>
  <xforms:column ref="pROJECTNAME" id="default13"></xforms:column></xforms:itemset></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="neibuguihuan.js"></xhtml:script></xui:resource> 
</xui:window>
