<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/SA/OPM/recycled/mainActivity.w" >

  <div id="btnClearAll" xui:update-mode="delete"/>
  <div id="controlPlace1_1" xui:update-mode="delete"/>
   <data id="dOrg" onRefreshCreateParam="gradeActivity.dOrgRefreshCreateParam"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_1" src="gradeActivity.js" xui:parent="resource1" xui:update-mode="insert" />

</window>