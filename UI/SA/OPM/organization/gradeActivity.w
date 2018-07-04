<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/SA/OPM/organization/mainActivity.w" >

   <data id="dOrgTree" onRefreshCreateParam="gradeActivity.dOrgTreeRefreshCreateParam"  xui:update-mode="merge"/>
   <tree-option id="treeOption1" root-filter="1=1" virtual-root=""  xui:update-mode="merge"/>
   <xhtml:div id="wdSelectMoveToOrg" onSend="gradeActivity.wdSelectMoveToOrgSend"  xui:update-mode="merge"/>
   <xhtml:div id="wdSearchOrg" onSend="gradeActivity.wdSearchOrgSend"  xui:update-mode="merge"/>
   <xhtml:div id="wdAssignPerson" manage-codes="systemManagement"  xui:update-mode="merge"/>
   <xhtml:div id="wdChangeMainOrg" manage-codes="systemManagement"  xui:update-mode="merge"/>
   <xhtml:div id="wdAssignRoles" onSend="gradeActivity.wdAssignRolesSend"  xui:update-mode="merge"/>
   <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_7" src="gradeActivity.js" xui:parent="resource1" xui:update-mode="insert" />
<xu:modifications>
  <xu:remove select="//*[@id='wdAssignPerson']/@root-filter"/>
  <xu:remove select="//*[@id='wdChangeMainOrg']/@root-filter"/>
</xu:modifications>

</window>