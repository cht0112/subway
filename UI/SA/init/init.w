<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window" sys-param="false" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:229px;height:auto;left:245px;"></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="18px" id="borderLayout-top1">
        </top>  
        <center id="borderLayout-center1">
        	<xhtml:h1 style="text-align:center">初始化系统库</xhtml:h1>
          <xui:place control="init" id="controlPlace1" style="width:100%;"/>
        </center>  
        <bottom size="33px" id="borderLayout-bottom1"/>
      </xhtml:div>
    </xui:layout>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="init"
      appearance="image-text" class="button-blue"> 
      <xforms:label id="default1"><![CDATA[初始化系统库]]></xforms:label>
    <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[initActivity.initClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="init.js"></xhtml:script>
  <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"></xhtml:script>
  <xhtml:script id="htmlScript3" src="/UI/portal2/process/portal/lib/md5.js"></xhtml:script>
  <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="/UI/portal2/process/portal/index.css"></xhtml:link>
  <xhtml:script id="htmlScript4" src="/UI/portal2/process/portal/lib/jquery.isloading.js"></xhtml:script></xui:resource> 
</xui:window>
