<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:382px;left:223px;"><data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="sName,sExecuteMode,sExecuteModeLabel,sPreemptMode,sPreemptModeLabel,sExecuteMode2,sExecuteMode2Label" src="" auto-load="false" id="dMain" store-type="simple"><rows xmlns="" id="default1">
   <row id="default2">
    <cell id="default3"></cell>
    <cell id="default4"></cell>
    <cell id="default5"></cell></row> </rows>
  <rule id="dataRule1" column="sPreemptMode" readonly="data('dMain')/sExecuteMode != 'temPreempt'"></rule></data>
  </xforms:model>  
  <xui:view id="rootView" class="xui-container"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout" type="flow"><xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;">
   <top size="35px" id="borderLayout-top1"><xui:place control="viewTop" id="controlPlace9" style="width:100%;position:relative;height:32px;"></xui:place></top>
   <center id="borderLayout-center1"><xui:place control="viewAdvance" id="controlPlace24" style="width:100%;height:32px;position:relative;"></xui:place>
  <xui:place control="viewBack" id="controlPlace33" style="width:100%;height:32px;"></xui:place>
  <xui:place control="viewTemplate" id="controlPlace36" style="width:100%;height:32px;"></xui:place></center>
  <bottom size="35px" id="borderLayout-bottom1"><xui:place control="viewBottom" id="controlPlace4" style="position:relative;height:100%;width:100%;"></xui:place></bottom></xhtml:div>
  <xui:place control="windowReceiver" id="controlPlace37" style="top:287px;left:75px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="viewBottom" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout2">
  <xui:place control="btnCancel" id="controlPlace5" style="width:80px;float:right;margin-right:8px;margin-top:5px;"></xui:place><xui:place control="btnOk" id="controlPlace5" style="width:80px;float:right;margin-right:8px;margin-top:5px;"></xui:place></layout>
  <xforms:trigger id="btnOk" class="button-green" appearance="image-text">
   <xforms:label id="xuiLabel1">确定</xforms:label>
   <xforms:action id="action2" ev:event="DOMActivate">
    <xforms:script id="xformsScript2">advancedOptionOfTo.btnOkClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnCancel" appearance="image-minimal">
   <xforms:label id="xuiLabel2">取消</xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate">
    <xforms:script id="xformsScript1">advancedOptionOfTo.btnCancelClick(event)</xforms:script></xforms:action> </xforms:trigger></xui:view>
  <xui:view auto-load="true" id="viewTop" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout3"><xui:place control="view4" id="controlPlace10" style="float:left;position:relative;padding-top:12px;padding-left:10px;height:auto;width:50px;"></xui:place>
  <xui:place control="view5" id="controlPlace11" style="width:auto;margin-left:60px;position:relative;padding-right:8px;padding-left:8px;height:auto;padding-top:8px;"></xui:place></layout>
  <xui:view auto-load="true" id="view4" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout4"><xhtml:label id="label1" class="xui-label" style="width:60px">任务标题</xhtml:label></layout></xui:view>
  <xui:view auto-load="true" id="view5" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout5"><xui:place control="inputName" id="controlPlace1" style="width:100%;"></xui:place></layout>
  <xforms:input id="inputName" ref="data('dMain')/sName"></xforms:input></xui:view></xui:view>
  <xui:view auto-load="true" id="viewAdvance" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout15"><xui:place control="view16" id="controlPlace27" style="height:32px;width:50%;float:left;"></xui:place>
  <xui:place control="view19" id="controlPlace28" style="height:32px;width:50%;float:left;"></xui:place></layout>
  <xui:view auto-load="true" id="view16" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout17">
    <xui:place control="view18" id="controlPlace26" style="float:left;position:relative;padding-top:12px;padding-left:10px;height:auto;width:50px;"></xui:place>
    <xui:place control="view17" id="controlPlace25" style="width:auto;margin-left:60px;position:relative;padding-right:8px;padding-left:8px;height:auto;padding-top:8px;"></xui:place></layout> 
   <xui:view auto-load="true" id="view18" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout18"><xhtml:label id="label2" class="xui-label">执行模式</xhtml:label></layout></xui:view> 
   <xui:view auto-load="true" id="view17" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout16"><xui:place control="gridSelectExecuteMode" id="controlPlace7" style="width:100%;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelectExecuteMode" ref="data('dMain')/sExecuteMode" label-ref="data('dMain')/sExecuteModeLabel">
   <xforms:label ref="col_1" id="xuiLabel3"></xforms:label>
   <xforms:value ref="col_0" id="default14"></xforms:value>
   <xforms:itemset id="default15">
    <itemset-data xmlns="" id="default16">
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
    <xforms:column ref="col_1" id="default58"></xforms:column></xforms:itemset> </xhtml:div></xui:view> </xui:view>
  <xui:view auto-load="true" id="view19" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout20">
    <xui:place control="view20" id="controlPlace29" style="float:left;position:relative;padding-top:12px;padding-left:10px;height:auto;width:50px;"></xui:place>
    <xui:place control="view21" id="controlPlace30" style="width:auto;margin-left:60px;position:relative;padding-right:8px;padding-left:8px;height:auto;padding-top:8px;"></xui:place></layout> 
   <xui:view auto-load="true" id="view20" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout19"><xhtml:label id="label3" class="xui-label">抢占模式</xhtml:label></layout></xui:view> 
   <xui:view auto-load="true" id="view21" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout21"><xui:place control="gridSelectPreemptMode" id="controlPlace8" style="width:100%;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelectPreemptMode" ref="data('dMain')/sPreemptMode" label-ref="data('dMain')/sPreemptModeLabel">
   <xforms:label ref="col_1" id="xuiLabel4"></xforms:label>
   <xforms:value ref="col_0" id="default29"></xforms:value>
   <xforms:itemset id="default30">
    <itemset-data xmlns="" id="default47">
     <rows xmlns="" id="default48">
      <row id="default49">
       <cell id="default50">tpmOpen</cell>
       <cell id="default51">打开时抢占</cell></row> 
      <row id="default52">
       <cell id="default53">tpmExecute</cell>
       <cell id="default54">执行时抢占</cell></row> </rows> </itemset-data> 
    <xforms:column ref="col_0" visible="false" id="default55"></xforms:column>
    <xforms:column ref="col_1" id="default56"></xforms:column></xforms:itemset> </xhtml:div></xui:view> </xui:view></xui:view>
  <xui:view auto-load="true" id="viewBack" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout23">
    <xui:place control="view24" id="controlPlace32" style="float:left;position:relative;padding-top:12px;padding-left:10px;height:auto;width:50px;"></xui:place>
    <xui:place control="view22" id="controlPlace31" style="width:auto;margin-left:60px;position:relative;padding-right:8px;padding-left:8px;height:auto;padding-top:8px;"></xui:place></layout> 
   <xui:view auto-load="true" id="view24" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout24"><xhtml:label id="labelExecuteMode2" class="xui-label">返回模式</xhtml:label></layout></xui:view> 
   <xui:view auto-load="true" id="view22" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout22"><xui:place control="gridSelectExecuteMode2" id="controlPlace2" style="width:100%;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelectExecuteMode2" ref="data('dMain')/sExecuteMode2" label-ref="data('dMain')/sExecuteMode2Label">
   <xforms:label ref="col_1" id="default9"></xforms:label>
   <xforms:value ref="col_0" id="default8"></xforms:value>
   <xforms:itemset id="default35">
    <xforms:column ref="col_0" visible="false" id="default11"></xforms:column>
    <xforms:column ref="col_1" id="default6"></xforms:column>
    <itemset-data xmlns="" id="default37">
     <rows xmlns="" id="default38">
      <row id="default39">
       <cell id="default40">flowToFront</cell>
       <cell id="default41">原路返回</cell></row> 
      <row id="default42">
       <cell id="default43">flowToAgain</cell>
       <cell id="default44">重新流转</cell></row> 
      <row id="default45">
       <cell id="default46">flowToFrontOrAgain</cell>
       <cell id="default59">原路返回或重新流转</cell></row> </rows> </itemset-data> </xforms:itemset> </xhtml:div></xui:view> </xui:view>
  <xui:view auto-load="true" id="viewTemplate" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout26">
    <xui:place control="viewLeft" id="controlPlace35" style="float:left;position:relative;padding-top:12px;padding-left:10px;height:auto;width:50px;"></xui:place>
    <xui:place control="viewRight" id="controlPlace34" style="width:auto;margin-left:60px;position:relative;padding-right:8px;padding-left:8px;height:auto;padding-top:8px;"></xui:place></layout> 
   <xui:view auto-load="true" id="viewLeft" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout27"></layout></xui:view> 
   <xui:view auto-load="true" id="viewRight" class="xui-container">
    <layout type="flow" style="position:relative;" id="layout25"></layout></xui:view> </xui:view>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="advancedOptionOfTo.windowReceiverReceive"></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="advancedOptionOfTo.js"></xhtml:script></xui:resource> 
</xui:window>
