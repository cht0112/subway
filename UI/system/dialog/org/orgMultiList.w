<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:justep="http://www.justep.com/x5#"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xui="http://www.justep.com/xui" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" extends="/UI/system/dialog/base/multiList.w">  
    
  <data id="main" concept="SA_OPOrg" auto-load="false" relations="sName,sParent,sFID,sFName,sValidState,sOrgKindID,sValidState"
    xui:update-mode="merge"/>  
  <filter id="mainFilter" name="ValidStateFilter" xui:parent="main" xui:update-mode="insert">SA_OPOrg.sValidState = 1</filter>  
  <reader id="readerAction" action="/system/logic/action/queryOrgAction" xui:parent="main"
    xui:update-mode="insert"/>  
  <xhtml:div id="smartFilter" filter-relations="sName" xui:update-mode="merge"/> 
  <xhtml:div id="windowReceiver" onReceive="justep.OrgDialog.setFilter"  xui:update-mode="merge"/> 
  <item id="orgKindId" name="orgKind" label="机构类型" value="psm" xui:parent="config" xui:update-mode="insert"/>
  <item id="displayColumnId" value="sName" xui:update-mode="merge" />
  <column label="" onRender="justep.OrgDialog.generateOrgKindImg" ref="sOrgKindID" type="html" width="20px" xui:parent="grid" xui:update-mode="insert" />  
  <column ref="sName" width="120px" xui:parent="grid" xui:update-mode="insert"/>  
  <column ref="sCode" width="100px" xui:parent="grid" xui:update-mode="insert"/> 
  <xhtml:script id="htmlScript1_1" xui:parent="resource" src="orgDialog.js" xui:update-mode="insert"/> 
</window>
