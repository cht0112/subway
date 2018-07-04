<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:16px;left:634px;"><xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[mainActivity.model1Load(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout" type="absolute">
  
  <xhtml:textarea cols="5" rows="5" id="sysCode" class="xui-textarea" style="position:absolute;top:120px;left:76px;height:122px;width:520px;"></xhtml:textarea><xhtml:div id="display" style="position:absolute;left:76px;top:52px;">您的系统上次密钥更新时间：</xhtml:div>
  <xhtml:label id="label2" style="position:absolute;top:100px;left:76px;" class="xui-label"><![CDATA[系统特征码：（在http://reg.justep.com的“License管理”功能中获取密钥更新码使用）]]></xhtml:label>
  <xui:place control="trigger1" id="controlPlace1" style="position:absolute;top:171px;width:100px;left:614px;"></xui:place>
  <xhtml:textarea cols="5" rows="5" id="regCode" class="xui-textarea" style="position:absolute;left:76px;height:122px;position:absolute;top:310px;width:520px;"></xhtml:textarea>
  <xhtml:label id="label3" class="xui-label" style="position:absolute;left:76px;position:absolute;top:287px;"><![CDATA[License密钥更新码：（获取License密钥更新码请登录http://reg.justep.com使用“获取License密钥更新码”功能）]]></xhtml:label>
  <xui:place control="trigger2" id="controlPlace2" style="position:absolute;top:361px;width:100px;left:614px;"></xui:place></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" icon-class="icon-system-vcard" appearance="image-text" class="button-blue">
   <xforms:label id="default1"><![CDATA[获取特征码]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" appearance="image-text" icon-class="icon-system-key" class="button-blue">
   <xforms:label id="default2"><![CDATA[密钥更新]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>
