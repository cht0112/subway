<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xui="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/system/dialog/base/singleList.w"> 
   
  <data id="main" concept="SA_ThemeDefine" xui:update-mode="merge-and-append"
    relations="sThemeName,sThemeLayoutInfo,sThemePublishType"> 
    <filter name="filter0" id="filter1"><![CDATA[SA_ThemeDefine.sThemeActivity<>'disable' and SA_ThemeDefine.sThemePublishType='system']]></filter> 
  </data>  
  
  <reader id="readerAction" action="/SA/theme/logic/action/queryThemeDefineAction"
    xui:parent="main" xui:update-mode="insert"/>  
    
  <item name="refresh-item" id="barItem4" xui:parent="navigatorBar" xui:update-mode="insert"/> 
  
  <xhtml:div id="smartFilter" filter-relations="sThemeName" xui:update-mode="merge"/>   
      
  <xhtml:div id="grid" xui:update-mode="merge-and-append"> 
    <column ref="sThemeName" width="150px" visable="true" align="center"/>  
    <column ref="sThemePublishType" width="150px" visable="true"/> 
  </xhtml:div> 
</window>
