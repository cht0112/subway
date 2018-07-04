<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:108px;left:31px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dataMain" auto-new="true"
      store-type="simple"> 
      <reader id="default8"/>  
      <writer id="default9"/>  
      <creator id="default10"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="dataMain" mode="IMG_TXT_LR"> 
        <item name="save-item" id="barItem2"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
        id="processBar1" process="flw" mode="IMG_TXT_LR"> 
        <item name="back-process-item" id="barItem12"/>  
        <item name="advance-process-item" id="barItem13"/>  
        <item name="transfer-task-item" id="barItem14"/>  
        <item name="suspend-process-item" id="barItem15"/>  
        <item name="abort-process-item" id="barItem16"/>  
        <item name="customized-process-item" id="barItem17"/>  
        <item name="process-chart-item" id="barItem1"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="flw"
      data="dataMain"/>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout style="height:100%;" id="layout7" type="excel" src="detail.xls"/> 
    </xui:view>  
    <layout style="height:100%" id="layout1"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top1"> 
          <place control="tbsMain" id="controlPlace4"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="vDetail" id="controlPlace11"/> 
        </center> 
      </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:183px;left:51px;"/> 
    </layout> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="flow.js"/> 
  </resource> 
</window>
