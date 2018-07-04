<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xui:resource>
  	<xhtml:script src="flowTrack.js"/> 
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js" />
  </xui:resource>  
  <xforms:model id="mdMain"><xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1">flowTrack.mdMainLoad(event)</xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart"
        id="processChart" style="height:100%;width:100%;"/> 
    </xui:layout> 
  </xui:view> 
</xui:window>
