<window 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:justep="http://www.justep.com/x5#" 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:data="http://www.justep.com/x5/xui/data#" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/system/dialog/base/singleList.w" >

   <data id="main" concept="SA_OPOrg" relations="sName,sParent,sFID,sFName,sValidState,sOrgKindID,sValidState" auto-load="false"  xui:update-mode="merge"/>
    <filter id="mainFilter" name="ValidStateFilter" xui:parent="main" xui:update-mode="insert" >

SA_OPOrg.sValidState = 1</filter>
    <reader action="/system/logic/action/queryOrgAction" id="readerAction" xui:parent="main" xui:update-mode="insert" />
   <xhtml:div id="windowReceiver" onReceive="justep.OrgDialog.setFilter"  xui:update-mode="merge"/>
    <item id="orgKindId" label="机构类型" name="orgKind" value="psm" xui:parent="config" xui:update-mode="insert" />
   <xhtml:div id="smartFilter" filter-relations="sName"  xui:update-mode="merge"/>
    <column label="" onRender="justep.OrgDialog.generateOrgKindImg" ref="sOrgKindID" type="html" width="20px" xui:parent="grid" xui:update-mode="insert" />
    <column ref="sName" width="120px" xui:parent="grid" xui:update-mode="insert" />
    <column ref="sCode" width="100px" xui:parent="grid" xui:update-mode="insert" />
    <xhtml:script id="htmlScript1_1" src="orgDialog.js" xui:parent="resource" xui:update-mode="insert" />
</window>