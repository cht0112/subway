<window 
  xmlns:justep="http://www.justep.com/x5#" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:data="http://www.justep.com/x5/xui/data#" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:f="http://orbeon.org/oxf/xml/formatting" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="templete/listSingleTemplete.w" >

  <div id="quickSearch" xui:update-mode="delete"/>
   <data id="main" concept="SA_OPRole" relations="sName,sCode,sCatalog,sRoleKind,sDescription,sSequence,sParentRolesNames"  xui:update-mode="merge"/>
    <filter id="mainFilter" name="ValidStateFilter" xui:parent="main" xui:update-mode="insert" >
SA_OPRole.sValidState = 1</filter>
   <reader id="readerAction" action="/SA/OPM/logic/action/queryOPRoleAction"  xui:update-mode="merge"/>
    <xhtml:script xui:parent="jsResource" xui:update-mode="insert" >
</xhtml:script>
    <xhtml:input id="quickSearch" value="UPPER(SA_OPRole.sName) LIKE '%[QUICKTEXT]%' OR UPPER(SA_OPRole.sCode) LIKE '%[QUICKTEXT]%'" xui:parent="configViewDiv" xui:update-mode="insert" />
    <column align="center" label="" onRender="generateRoleKindUI" ref="sRoleKind" type="html" visable="false" width="20px" xui:parent="listGrid" xui:update-mode="insert" />
    <column ref="sName" visable="false" width="150px" xui:parent="listGrid" xui:update-mode="insert" />
    <column ref="sCode" visable="false" width="150px" xui:parent="listGrid" xui:update-mode="insert" />
    <column ref="sDescription" visable="false" width="150px" xui:parent="listGrid" xui:update-mode="insert" />

</window>