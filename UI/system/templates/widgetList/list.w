<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:model component="/UI/system/components/quick/model.xbl.xml#model" id="modelQ"
    style="top:113px;left:61px;"> 
    <xhtml:data auto-load="true" offset="0" limit="20" component="/UI/system/components/quick/data.xbl.xml#bizDataQ"
      id="main"> 
      <creator id="default1"/>  
      <reader id="default2"/>  
      <writer id="default3"/> 
    </xhtml:data> 
  </xui:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/quick/grid.xbl.xml#dgridQ" id="dgridQ1"
      data="main" onRenderCell="list.dgridQ1RenderCell"/>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="dgridQ1" id="controlPlace2" style="width:100%;"/> 
    </xui:layout> 
  </xui:view>  
  <resource id="res1"> 
    <xhtml:style id="stl1"/>  
    <xhtml:style id="stl2">a:link { text-decoration:none; color:#1f3a87; font-size:12px; } a:visited { text-decoration:none; color:#1f3a87; font-size:12px; } a:hover { text-decoration:underline; color:#0A73E9; font-size:12px; } a:active { text-decoration:none; color:#1f3a87; font-size:12px; }</xhtml:style>  
    <xhtml:script id="htmlScript1" src="list.js"/>
  </resource> 
</xui:window>
