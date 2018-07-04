<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xu="http://www.xmldb.org/xupdate" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xui="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="wSelectSencondKeyWordDialog" extends="/UI/system/service/commonChoose/templete/listMultiTemplete.w">  
  <div id="displayAlias" xui:update-mode="delete"/>  
  <div id="returnAliasList" xui:update-mode="delete"/>  
  <div id="quickSearch" xui:update-mode="delete"/>  
  <data id="main" concept="OA_Pub_SencondKeyWord" order-by="fName:asc" relations="fName" xui:update-mode="merge"/>  
  <filter name="fState" xui:parent="main" xui:update-mode="insert">OA_Pub_SencondKeyWord.fUseStatus='1'</filter>  
  <reader id="readerAction" action="/OA/common/logic/action/queryOA_Pub_SencondKeyWordAction" xui:update-mode="merge"/>  
  <xhtml:input id="displayAlias" value="fName" xui:parent="configViewDiv" xui:update-mode="insert"/>  
  <xhtml:input id="returnAliasList" value="fName" xui:parent="configViewDiv" xui:update-mode="insert"/>  
  <xhtml:input id="quickSearch" value="UPPER(OA_Pub_SencondKeyWord.fName) LIKE '%[QUICKTEXT]%'" xui:parent="configViewDiv" xui:update-mode="insert"/>  
  <xhtml:div id="listGrid" style="height:100%;width:570px" xui:update-mode="merge"/>  
  <column label="名称" ref="fName" type="ro" width="300" xui:parent="listGrid" xui:update-mode="insert"/> 
</window>
