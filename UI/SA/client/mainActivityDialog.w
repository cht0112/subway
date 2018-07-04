<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xu="http://www.xmldb.org/xupdate" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xui="http://www.justep.com/xui" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" extends="/UI/system/dialog/base2/multiList.w">  
  <data id="main" concept="SA_App" xui:update-mode="merge"/>  
  <creator action="/system/logic/action/createSA_AppAction" id="default1_1" xui:parent="main" xui:update-mode="insert"/>  
  <reader action="/system/logic/action/querySA_AppAction" id="default2_1" xui:parent="main" xui:update-mode="insert"/>  
  <writer action="/system/logic/action/saveSA_AppAction" id="default3_1" xui:parent="main" xui:update-mode="insert"/>  
  <item id="displayColumnId" value="sName" xui:update-mode="merge"/>  
  <column id="default4_1" label="名称" ref="sName" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert"/>  
  <column id="default5_1" label="编码" ref="sCode" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert"/>  
  <column id="default6_1" label="模块" ref="sModel" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert"/>  
  <column id="default7_1" label="描述" ref="sDescription" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert"/>  
  <column id="default8_1" label="应用版本" ref="sAppVersion" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert"/>  
  <column id="default9_1" label="供应商名称" ref="sVendorName" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert"/>  
  <xhtml:div id="smartFilter" filter-relations="sName,sCode" xui:update-mode="merge"/> 
</window>
