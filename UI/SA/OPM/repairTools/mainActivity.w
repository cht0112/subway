<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:112px;left:250px;"/>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="absolute">
      <xui:place control="btnRepairOrg" id="controlPlace1" style="position:absolute;width:225px;height:30px;top:35px;left:80px;"></xui:place></xui:layout> 
  <xforms:trigger id="btnRepairOrg" icon-class="icon-system-ok" appearance="image-text" class="button-green">
   <xforms:label id="xuiLabel1"><![CDATA[修复组织路径]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.btnRepairOrgClick(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>
  <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"></xhtml:script></xui:resource> 
</xui:window>
