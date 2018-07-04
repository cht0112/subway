<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:316px;height:auto;left:140px;"> 
    <data xmlns="" id="rdExecuteList" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default12"> 
        <action id="default13" name="getProcessExecuteReportDataAction" columns="fActivityLabel,FOPINION,fCreatePsnName,fCreateTime"
          type="action"/> 
      </source> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height:100%;"> 
        <top size="30px" id="borderLayout-top1">
          <xui:place control="toolbars1" id="controlPlace4"/>
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="windowReceiver" id="controlPlace3" style="top:134px;left:232px;"/>
          <xui:place control="reportExecuteList" id="controlPlace1" style="height:100%;width:100%;"/>
        </center>
      </xhtml:div>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="processExecuteList.windowReceiverReceive"/>
    <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="processExecuteListReport.xls"
      report-name="处理列表" auto-load="false" data-list="" id="reportExecuteList"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar1"
        report="reportExecuteList"> 
        <item name="report-page-setup-item" id="barItem1"/>  
        <item name="report-preview-item" id="barItem2"/>  
        <item name="report-print-item" id="barItem3"/>
      </xui:bar>  
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar1"
        report="reportExecuteList"> 
        <item name="report-export-pdf-item" id="barItem4"/>  
        <item name="report-export-word-item" id="barItem5"/>  
        <item name="report-export-excel-item" id="barItem6"/>
      </xui:bar>
    </xhtml:div>
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="processExecuteList.js"/>
  </xui:resource> 
</xui:window>
