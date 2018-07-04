<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1">
    <xforms:action id="action1" ev:event="onload">
      <xforms:script id="xformsScript1">processChart.model1Load(event)</xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart"
      id="processChart1"/>
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xui:place control="processChart1" id="controlPlace1" style="height:100%;width:100%;"/>
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="processChart.js"/>
  </xui:resource> 
</xui:window>
