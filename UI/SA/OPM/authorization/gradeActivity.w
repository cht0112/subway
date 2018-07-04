<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/SA/OPM/authorization/mainActivity.w" >

   <data id="dOrgTree" onRefreshCreateParam="gradeActivity.dOrgTreeRefreshCreateParam"  xui:update-mode="merge"/>
   <tree-option id="treeOption1" root-filter="1=1"  xui:update-mode="merge"/>
   <xhtml:div id="wdSearchOrg" onSend="gradeActivity.wdSearchOrgSend"  xui:update-mode="merge"/>
   <xhtml:div id="wdSelectRoles" onSend="gradeActivity.wdSelectRolesSend"  xui:update-mode="merge"/>
    <xhtml:script id="htmlScript1_8" src="gradeActivity.js" xui:parent="resource1" xui:update-mode="insert" />

</window>