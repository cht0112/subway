<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:236px;left:528px;"><data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="sName,sExecuteMode,sExecuteModeLabel,sPreemptMode,sPreemptModeLabel,sCreateTime,sLimitTime,sWarningTime" src="" auto-load="false" id="dMain" store-type="simple"><rows xmlns="" id="default1">
   <row id="default2">
    <cell id="default3"></cell>
    <cell id="default4"></cell>
    <cell id="default5"></cell></row> </rows>
  <rule id="dataRule1" column="sPreemptMode" readonly="data('dMain')/sExecuteMode != 'temPreempt'" type="xsd:string"></rule>
  <rule id="dataRule3" column="sCreateTime" type="xsd:dateTime"></rule>
  <rule id="dataRule4" column="sLimitTime" type="xsd:dateTime"></rule>
  <rule id="dataRule5" column="sWarningTime" type="xsd:dateTime"></rule></data>
  </xforms:model>  
  <xui:view id="rootView" class="xui-container"> 
    <xui:layout style="height:100%;width:100%;position:relative" id="rootLayout" type="absolute"><xui:place control="inputName" id="controlPlace1" style="position:absolute;top:15px;left:70px;width:361px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;width:60px;top:22px;left:10px;" class="xui-label"><![CDATA[任务标题]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;width:60px;left:10px;top:55px;" class="xui-label"><![CDATA[执行模式]]></xhtml:label>
  <xhtml:label id="label3" style="position:absolute;width:60px;top:54px;left:222px;" class="xui-label"><![CDATA[抢占模式]]></xhtml:label>
  <xui:place control="btnOk" id="controlPlace4" style="position:absolute;width:80px;left:200px;top:170px;"></xui:place>
  <xui:place control="btnCancel" id="controlPlace5" style="position:absolute;width:80px;left:290px;top:170px;"></xui:place>
  <xui:place control="windowReceiver" id="controlPlace6" style="position:absolute;top:98px;left:508px;"></xui:place>
  <xui:place control="gridSelectExecuteMode" id="controlPlace7" style="position:absolute;left:70px;top:50px;width:134px;"></xui:place>
  <xui:place control="gridSelectPreemptMode" id="controlPlace8" style="position:absolute;top:50px;left:275px;width:154px;"></xui:place>
  <xui:place control-label="input2" id="controlLabel2" style="position:absolute;top:90px;left:10px;" label="提交时间"></xui:place><xui:place control="input2" id="controlPlace3" style="position:absolute;top:85px;left:70px;width:360px;"></xui:place>
  <xui:place control-label="input3" id="controlLabel3" style="position:absolute;height:16px;top:130px;left:10px;" label="完成期限"></xui:place><xui:place control="input3" id="controlPlace9" style="position:absolute;top:124px;left:70px;width:135px;"></xui:place>
  <xui:place control-label="input4" id="controlLabel4" style="position:absolute;top:132px;left:222px;" label="提醒时间"></xui:place><xui:place control="input4" id="controlPlace10" style="position:absolute;top:124px;left:275px;"></xui:place></xui:layout> 
  <xforms:input id="inputName" ref="data('dMain')/sName"></xforms:input>
  <xforms:trigger id="btnOk">
   <xforms:label id="xuiLabel1"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[advancedOptionOfTo.btnOkClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btnCancel">
   <xforms:label id="xuiLabel2"><![CDATA[取消]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[advancedOptionOfTo.btnCancelClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="advancedOptionOfTo.windowReceiverReceive"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelectExecuteMode" ref="data('dMain')/sExecuteMode" label-ref="data('dMain')/sExecuteModeLabel">
   <xforms:label ref="col_1" id="xuiLabel3"></xforms:label>
   <xforms:value ref="col_0" id="default14"></xforms:value>
   <xforms:itemset id="default15"><itemset-data xmlns="" id="default16">
   <rows xmlns="" id="default17">
    <row id="default18">
     <cell id="default19">temSequential</cell>
     <cell id="default20">顺序</cell></row> 
    <row id="default21">
     <cell id="default22">temPreempt</cell>
     <cell id="default23">抢占</cell></row> 
    <row id="default24">
     <cell id="default25">temSimultaneous</cell>
     <cell id="default26">同时</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default57"></xforms:column>
  <xforms:column ref="col_1" id="default58"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelectPreemptMode" ref="data('dMain')/sPreemptMode" label-ref="data('dMain')/sPreemptModeLabel">
   <xforms:label ref="col_1" id="xuiLabel4"></xforms:label>
   <xforms:value ref="col_0" id="default29"></xforms:value>
   <xforms:itemset id="default30"><itemset-data xmlns="" id="default47">
   <rows xmlns="" id="default48">
    <row id="default49">
     <cell id="default50">tpmOpen</cell>
     <cell id="default51">打开时抢占</cell></row> 
    <row id="default52">
     <cell id="default53">tpmExecute</cell>
     <cell id="default54">执行时抢占</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default55"></xforms:column>
  <xforms:column ref="col_1" id="default56"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input2" ref="data('dMain')/sCreateTime"></xforms:input>
  <xforms:input id="input3" ref="data('dMain')/sLimitTime"></xforms:input>
  <xforms:input id="input4" ref="data('dMain')/sWarningTime"></xforms:input></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="advancedOptionOfTo.js"></xhtml:script></xui:resource> 
</xui:window>
