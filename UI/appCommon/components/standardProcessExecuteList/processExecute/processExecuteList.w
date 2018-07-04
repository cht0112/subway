<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:316px;height:auto;left:140px;"> 
    <data xmlns="" id="rdTask" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default12"> 
        <action id="default13" name="queryTaskAction" columns="sName,sActivityName,sExecutorDeptName,sExecutorPersonName,sContent,sActualStartTime,sActualFinishTime"
          type="action"/> 
      </source> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done">
      <xforms:script id="xformsScript2"><![CDATA[processExecuteList.model1ModelConstructDone(event)]]></xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="30px" id="borderLayout-top1">
          <xui:place control="toolbars1" id="controlPlace4"/>
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="windowReceiver" id="controlPlace3" style="top:134px;left:232px;"/>  
          <xui:place control="reportTaskList" id="controlPlace1" style="height:100%;width:auto;"/>
        </center>
      </xhtml:div>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="processExecuteList.windowReceiverReceive"/>
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar1"
        report="reportTaskList"> 
        <item name="report-page-setup-item" id="barItem1"/>  
        <item name="report-preview-item" id="barItem2"/>  
        <item name="report-print-item" id="barItem3"/>
      </xui:bar>  
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar1"
        report="reportTaskList"> 
        <item name="report-export-pdf-item" id="barItem4"/>  
        <item name="report-export-word-item" id="barItem5"/>  
        <item name="report-export-excel-item" id="barItem6"/>
      </xui:bar>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="" report-name="流程记录"
      auto-load="true" data-list="rdTask" id="reportTaskList" column-width="1">
      <layout-content id="default1"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="1" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 18px"></td><td  style="WIDTH: 140px"></td><td  style="WIDTH: 299px"></td><td  style="WIDTH: 105px"></td><td  style="WIDTH: 52px"></td><td  style="WIDTH: 105px"></td></tr>
     <tr><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td></tr>
     <tr><td  style="HEIGHT: 26px"></td><td  style="HEIGHT: 26px"></td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">环节</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">附言</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">部门</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">人员</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle">时间</td></tr>
     <tr><td  style="HEIGHT: 26px"></td><td  style="HEIGHT: 26px"></td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">rdTask.select(rdTask.sActivityName)</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">rdTask.sContent</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">rdTask.sExecutorDeptName</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">rdTask.sExecutorPersonName</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle" format="yyyy/m/d h:mm;@">rdTask.sActualFinishTime</td></tr>
  </table>
]]></layout-content>
    </xhtml:div>
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="processExecuteList.js"/>
  </xui:resource> 
</xui:window>
