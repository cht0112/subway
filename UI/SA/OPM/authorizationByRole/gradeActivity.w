<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/SA/OPM/authorizationByRole/mainActivity.w" >

   <data id="dRole" onRefreshCreateParam="gradeActivity.dRoleRefreshCreateParam"  xui:update-mode="merge"/>
   <data id="dAuthorize" onRefreshCreateParam="gradeActivity.dAuthorizeRefreshCreateParam"  xui:update-mode="merge"/>
   <data id="dAuthorizeOrg" onRefreshCreateParam="gradeActivity.dAuthorizeRefreshCreateParam"  xui:update-mode="merge"/>
   <xhtml:div id="wdSelectOrgs" manage-codes="systemManagement"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_4" src="gradeActivity.js" xui:parent="resource1" xui:update-mode="insert" />
<xu:modifications>
  <xu:remove select="//*[@id='wdSelectOrgs']/@root-filter"/>
</xu:modifications>

</window>