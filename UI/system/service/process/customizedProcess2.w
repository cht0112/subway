<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:62px;height:auto;left:333px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="xml" auto-load="false" id="main" concept="SA_ProcessTemplate" relations="sName,sKindID,sProcess,sProcessName,sActivity,sActivityName,sScopeID,sCreatorFID,sCreatorFName,sCreatorName,sCreatorID,sCreateTime,sContent,version,sTypeID,sContent2,sTemplateID,sScopeName" confirm-refresh="false"> 
      <reader id="default1" action="/system/logic/action/queryProcessTemplateAction"/>  
      <writer id="default2" action="/system/logic/action/saveProcessTemplateAction"/>  
      <creator id="default3" action="/system/logic/action/createProcessTemplateAction"/> 
    </data>  
    
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="flow"> 
      <xui:place control="windowReceiver1" id="controlPlace1" style="top:92px;left:67px;"/>  
      <xui:place control="grid1" id="controlPlace2" style="height:100px;width:100%;display:none"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;"> 
        <center id="borderLayout-center1">
          <xhtml:div id="designer" class="xui-container" style="width:100%;height:100%" onLoadTemplateAfter="customizedProcess2.loadTemplateAfter" component="/UI/system/components/processDesigner.xbl.xml#processDesigner">
          </xhtml:div>
         
        </center>  
        <bottom size="24px" id="borderLayout-bottom1"> 
          <xui:place control="trigger4" id="controlPlace6" style="float:right;margin-right:8px;"/>  
          <xui:place control="trigger5" id="controlPlace7" style="float:right;margin-right:30px;"/>  
          </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver1" onReceive="customizedProcess2.windowReceiver1Receive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid1" data="main"> 
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ed" width="100"/>  
      <xui:column id="gridColumn2" ref="sKindID" label="任务分类" type="ed" width="100"/>  
      <xui:column id="gridColumn3" ref="sProcess" label="过程" type="ed" width="100"/>  
      <xui:column id="gridColumn4" ref="sProcessName" label="过程" type="ed" width="100"/>  
      <xui:column id="gridColumn5" ref="sActivity" label="环节" type="ed" width="100"/>  
      <xui:column id="gridColumn6" ref="sActivityName" label="环节" type="ed" width="100"/>  
      <xui:column id="gridColumn7" ref="sScopeID" label="作用范围" type="ed" width="100"/>  
      <xui:column id="gridColumn8" ref="sCreatorFID" label="提交者FID" type="ed" width="100"/>  
      <xui:column id="gridColumn9" ref="sCreatorFName" label="提交者" type="ed" width="100"/>  
      <xui:column id="gridColumn10" ref="sCreatorName" label="提交者" type="ed" width="100"/>  
      <xui:column id="gridColumn11" ref="sCreatorID" label="提交者ID" type="ed" width="100"/>  
      <xui:column id="gridColumn12" ref="sCreateTime" label="创建时间" type="ed" width="100"/>  
      <xui:column id="gridColumn13" ref="sContent" label="内容" type="ed" width="100"/>  
      <xui:column id="gridColumn14" ref="version" label="版本" type="ed" width="100"/>  
      <xui:column id="gridColumn15" ref="sTypeID" label="类型" type="ed" width="100"/>  
      <xui:column id="gridColumn16" ref="sScopeName" type="ed" width="100"/>  
      <xui:column id="gridColumn17" ref="sContent2" label="内容" type="ed" width="100"/> 
    </xhtml:div>  
    <xforms:trigger id="trigger4"> 
      <xforms:label id="xuiLabel4"><![CDATA[取  消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[customizedProcess2.trigger4Click(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger5"> 
      <xforms:label id="xuiLabel5"><![CDATA[确  定]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[customizedProcess2.trigger5Click(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
      </xui:view>
  <resource id="resource1"><xhtml:script id="htmlScript1" src="customizedProcess2.js"></xhtml:script>
  <!--  
  <xhtml:script id="htmlScript2" src="/UI/system/service/process/chart/processDesigner.js"></xhtml:script>
  <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="/UI/system/service/process/chart/chart.css"></xhtml:link>
  -->
  </resource>
</xui:window>  