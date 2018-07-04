<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:135px;height:auto;left:71px;"><data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="sName" src="" auto-load="false" id="dMain" store-type="simple"><rows xmlns="" id="default1">
   <row id="default2">
    <cell id="default3"></cell>
    <cell id="default4"></cell>
    <cell id="default5"></cell></row> </rows></data>
  </xforms:model>  
  <xui:view id="rootView" class="xui-container"> 
    <xui:layout style="height:100%;width:100%;position:relative" id="rootLayout" type="absolute"><xui:place control="inputName" id="controlPlace1" style="position:absolute;width:300px;top:15px;left:70px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;width:60px;top:22px;left:10px;" class="xui-label"><![CDATA[通知标题]]></xhtml:label>
  <xui:place control="btnOk" id="controlPlace4" style="position:absolute;width:80px;top:120px;left:200px;"></xui:place>
  <xui:place control="btnCancel" id="controlPlace5" style="position:absolute;width:80px;top:120px;left:290px;"></xui:place>
  <xui:place control="windowReceiver" id="controlPlace6" style="position:absolute;top:87px;left:102px;"></xui:place>
  </xui:layout> 
  <xforms:input id="inputName" ref="data('dMain')/sName"></xforms:input>
  <xforms:trigger id="btnOk" appearance="image-text" class="button-green">
   <xforms:label id="xuiLabel1"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[advancedOptionOfNotice.btnOkClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btnCancel" appearance="image-minimal">
   <xforms:label id="xuiLabel2"><![CDATA[取消]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[advancedOptionOfNotice.btnCancelClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="advancedOptionOfNotice.windowReceiverReceive"></xhtml:div>
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="advancedOptionOfNotice.js"></xhtml:script></xui:resource> 
</xui:window>
