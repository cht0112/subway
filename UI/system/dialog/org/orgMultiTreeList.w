<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:justep="http://www.justep.com/x5#" xmlns:xu="http://www.xmldb.org/xupdate"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xui="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" extends="/UI/system/dialog/base/multiTreeList.w">  
  
  <data id="main" concept="SA_OPOrg" auto-load="false" relations="sName,sParent,sFID,sFName,sValidState,sOrgKindID,sValidState"
    xui:update-mode="merge"/>  
  <reader action="/system/logic/action/queryOrgAction" id="readerAction" xui:parent="main"
    xui:update-mode="insert"/>  
  <filter id="mainFilter" name="ValidStateFilter" xui:parent="main" xui:update-mode="insert">SA_OPOrg.sValidState = 1</filter>  
  <data id="treeMain" concept="SA_OPOrg" auto-load="false" confirm-refresh="false"
    onAfterRefresh="justep.OrgDialog.refreshOrgAfter" relations="sName,sParent,sFID,sFName,sValidState,sOrgKindID,sValidState"
    xui:update-mode="merge"/>  
  <reader action="/system/logic/action/queryOrgAction" id="treeReaderAction" xui:parent="treeMain"
    xui:update-mode="insert"/>  
  <filter id="treeMainFilter" name="ValidStateFilter" xui:parent="treeMain" xui:update-mode="insert">SA_OPOrg.sValidState = 1</filter>  
  <tree-option id="tree-option" parent-relation="sParent" root-filter="sParent IS NULL"
    virtual-root="组织机构" xui:parent="treeMain" xui:update-mode="insert"/>  
  <xhtml:div id="smartFilter" filter-relations="sName" xui:update-mode="merge"/>
  <column label="" onRender="justep.OrgDialog.generateOrgKindImg" ref="sOrgKindID" type="html" width="20px" xui:parent="grid" xui:update-mode="insert" /> 
  <column ref="sName" width="120px" xui:parent="grid" xui:update-mode="insert"/>  
  <column ref="sCode" width="100px" xui:parent="grid" xui:update-mode="insert"/>  
  <xhtml:div id="treeGrid" onShowNodeImg="justep.OrgDialog.showNodeImg" xui:update-mode="merge"/>  
  <xui:column id="treeColumn" label="abc" ref="sName" xui:update-mode="merge"/>  
  <xforms:action ev:event="xforms-index-changed" xui:parent="treeGrid" xui:update-mode="insert"> 
    <xforms:script>justep.OrgDialog.treeRowClick(event);</xforms:script> 
  </xforms:action>  
  <xhtml:script id="htmlScript1_2" src="orgDialog.js" xui:parent="resource" xui:update-mode="insert"/>  
  <item id="orgKindId" name="orgKind" label="列表机构类型" value="psm" xui:parent="config" xui:update-mode="insert"/>  
  <item id="orgKindTreeId" name="orgKindTree" label="树机构类型" value="ogn,dpt,pos" xui:parent="config" xui:update-mode="insert"/>
 <item id="displayColumnId" value="sName" xui:update-mode="merge" /> 
    <xhtml:div id="treeLocate" tree="treeGrid" data="treeMain" relations="sName" path-relation="sFID" xui:update-mode="merge"/>
    <xhtml:div id="windowReceiver" onReceive="justep.OrgDialog.setFilter"  xui:update-mode="merge"/>
</window>
