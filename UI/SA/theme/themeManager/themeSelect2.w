<window 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/system/dialog/base2/singleList.w" >

   <data id="main" concept="Portal2Profiles" relations="sThemeName,sPublishType"  xui:update-mode="merge"/>
    <filter id="filter1" name="filter0" xui:parent="main" xui:update-mode="insert" >
<![CDATA[Portal2Profiles.sThemeActivity<>'disable' and Portal2Profiles.sPublishType='system']]>
</filter>
    <reader action="/portal2/logic/action/queryPortal2ProfilesAction" id="readerAction" xui:parent="main" xui:update-mode="insert" />
    <column align="center" ref="sThemeName" visable="true" width="150px" xui:parent="grid" xui:update-mode="insert" />
   <xhtml:div id="smartFilter" filter-relations="sThemeName"  xui:update-mode="merge"/>

</window>