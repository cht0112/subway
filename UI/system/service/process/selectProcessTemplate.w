<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xu="http://www.xmldb.org/xupdate"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xui="http://www.justep.com/xui" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" extends="/UI/system/dialog/base/singleList.w">  
  <xforms:action ev:event="xforms-model-construct" id="action1_4" xui:parent="model"
    xui:update-mode="insert">  
    <xforms:script id="xformsScript1_4">  <![CDATA[selectProcessTemplate.modelModelConstruct(event)]]> </xforms:script> 
  </xforms:action>  
  <data id="main" concept="SA_ProcessTemplate" onBeforeRefresh="selectProcessTemplate.mainBeforeRefresh"
    onRefreshCreateParam="selectProcessTemplate.mainRefreshCreateParam" relations="sName,sKindID,sProcess,sProcessName,sActivity,sActivityName,sScopeID,sCreatorFID,sCreatorFName,sCreatorName,sCreatorID,sCreateTime,sContent,version,sTypeID,sContent2,sScopeName"
    auto-load="false" limit="20" xui:update-mode="merge"/>  
  <creator action="/system/logic/action/createProcessTemplateAction" id="default1_2"
    xui:parent="main" xui:update-mode="insert"/>  
  <reader action="/system/logic/action/queryProcessTemplateAction" id="default2_2"
    xui:parent="main" xui:update-mode="insert"/>  
  <writer action="/system/logic/action/saveProcessTemplateAction" id="default3_2"
    xui:parent="main" xui:update-mode="insert"/>  
  <xhtml:div id="windowReceiver" onReceive="selectProcessTemplate.windowReceiverReceive"
    xui:update-mode="merge"/>  
  <xhtml:div id="smartFilter" filter-relations="sName" xui:update-mode="merge"/>  
  <column id="default4_2" label="i18n{label}" ref="sName" type="ro" width="560px" xui:parent="grid"
    xui:update-mode="insert"/>  
  <xhtml:script id="htmlScript1_4" src="selectProcessTemplate.js" xui:parent="resource"
    xui:update-mode="insert"></xhtml:script>  
</window>
