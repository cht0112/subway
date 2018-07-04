<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:15px;height:auto;left:653px;"/>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout" type="absolute"><xhtml:label id="label1" style="position:absolute;top:27px;left:33px;" class="xui-label"><![CDATA[应用License:]]></xhtml:label>
  <xhtml:textarea cols="5" rows="5" id="appLicense" style="position:absolute;top:27px;left:119px;width:495px;height:236px;" class="xui-textarea"></xhtml:textarea>
  <xui:place control="trigger1" id="controlPlace1" style="position:absolute;top:284px;left:555px;"></xui:place>
  <xhtml:label id="label2" style="position:absolute;left:33px;color:#FF0000;top:286px;" class="xui-label"><![CDATA[注意：开发版不支持运行加密应用，注册成功后请重新启动服务]]></xhtml:label></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="image-text" icon-class="icon-system-ok" class="button-blue">
   <xforms:label id="default1"><![CDATA[注册]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[regAppLicenseActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="regAppLicenseActivity.js"></xhtml:script></xui:resource> 
</xui:window>
