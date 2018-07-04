<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="model1" style="top:245px;height:auto;left:307px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="main" style=";" concept="SA_ProcessTemplate" order-by="sCreateTime:desc" direct-delete="true" confirm-delete-text="确认要删除吗？" limit="1" store-type="simple" confirm-refresh="false"> 
      <reader id="default1" action="/system/logic/action/queryProcessTemplateAction"/>  
      <writer id="default2" action="/system/logic/action/saveProcessTemplate3Action"/>  
      <creator id="default3" action="/system/logic/action/createProcessTemplateAction"/>  
      <filter name="filter0" id="filter1"><![CDATA[SA_ProcessTemplate.sTypeID='PROCESS_TEMPLATE']]></filter>  
      <rule id="dataBizRule1" relation="sProcessName" readonly="true()"/>  
      <rule id="dataBizRule2" relation="sName" required="call('hasName')" alert="'名称不能为空'"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="30px" id="borderLayout-top1"> 
          <xhtml:div class="cell-layout" component="/UI/system/components/cellLayout.xbl.xml#cellLayout" id="cellLayout1" style="width:100%; height: 100%;;" row-height="29"> 
            <layout-content id="default1"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="29" columnWidth="80" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td ></td><td ></td><td ></td><td  style="WIDTH: 33px"></td><td ></td><td ></td><td ></td></tr>
     <tr><td ></td><td  style="HEIGHT: 19px">模板名称：</td><td  colSpan="2" style="HEIGHT: 19px" componentId="name"></td><td  style="HEIGHT: 19px"></td><td  style="HEIGHT: 19px">流    程：</td><td  colSpan="2" style="HEIGHT: 19px" componentId="process"></td></tr>
  </table>
]]></layout-content>  
            <xui:place control="name" id="controlPlace2"/>  
            <xui:place control="process" id="controlPlace3"/> 
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="designer"/> 
        </center>  
        <bottom size="40px" id="borderLayout-bottom1"> 
          <!-- 
          <xui:place control="btnCancel" id="controlPlace4" style="float:right;width:75px;margin-top:8px;margin-right:10px"/>  
          <xui:place control="btnOK" id="controlPlace5" style="float:right;width:75px;margin-top:5px;margin-right:100px;"/>
           -->  
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;margin:10px 0;"> 
            <xui:place control="btnOK" id="controlPlace5"/>  
            <xui:place control="btnCancel" id="controlPlace4"/> 
          </xhtml:div> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="windowReceiver1" id="controlPlace4" style="position:absolute;top:293px;left:162px;"/>  
      <xui:place control="processDialog" id="controlPlace5" style="position:absolute;top:132px;left:299px;"/> 
    </xui:layout>  
    <xforms:input id="name" ref="data('main')/sName"/>  
    <xforms:input id="process" ref="data('main')/sProcessName"/>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1" onReceive="template.windowReceiver1Receive"/>  
    <xhtml:div id="designer" class="xui-container" style="width:100%;height:100%" onLoadTemplateAfter="template.loadTemplateAfter" component="/UI/system/components/processDesigner2.xbl.xml#processDesigner2"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择流程" width="596px" height="464px" modal="true" id="processDialog" url="/UI/system/dialog/process/selectSingleProcess.w" onReceive="template.processDialogReceive" dialogUpdate="true"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnOK" class="button-green"> 
      <xforms:label><![CDATA[确  定]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[template.btnOKClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnCancel"> 
      <xforms:label id="default5"><![CDATA[取  消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[template.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="template.js"/> 
  </xui:resource> 
</xui:window>
