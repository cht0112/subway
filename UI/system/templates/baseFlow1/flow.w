<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:124px;left:312px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" data-type="json"
      limit="20" update-mode="whereVersion" auto-load="false" id="dataMain" auto-new="true"
      store-type="simple"> 
      <reader id="default8"/>  
      <writer id="default9"/>  
      <creator id="default10"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="flw"
      data="dataMain"/>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout style="height:100%;position:relative;" id="layout7" /> 
    </xui:view>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="advanceTrigger"
      operation-owner="flw" class="button-green" appearance="image-text" operation="advance"> 
      <xforms:label id="default32"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger"
      operation-owner="dataMain" appearance="image-minimal" operation="save"> 
      <xforms:label id="default33"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/menuButton.xbl.xml#menuButton" id="menuButton1"
      label="更多" mode="left"> 
      <menuitem name="suspend" onClick="" id="menuitem1" operation-owner="flw" operation="suspend"/>  
      <menuitem name="abort" onClick="" separator="true" id="menuitem2" operation-owner="flw"
        operation="abort"/>  
      <menuitem name="customized" onClick="" id="menuitem3" operation-owner="flw"
        operation="customized"/>  
      <menuitem name="process-chart" onClick="" id="menuitem4" operation-owner="flw"
        operation="showChart"/>  
      <menuitem id="menuitem5" name="transfer" operation-owner="flw" operation="transfer"/>  
      <menuitem id="menuitem6" name="back" operation-owner="flw" operation="back"/> 
    <menuitem id="menuitem7" name="menuitem7" operation-owner="flw" operation="executeList"></menuitem></xhtml:div>  
    <layout style="height:100%" id="layout1"> 
     <place control="flw" id="controlPlace7" style="width:24px;top:263px;left:325px;"/> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:800px;margin:auto;; height: 100%;"> 
        <top id="borderLayout-top1" size="40px"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            separator="false" separator-size="16" id="buttonBar1"> 
            <xui:place control="advanceTrigger" id="controlPlace1"/>  
            <xui:place control="saveTrigger" id="controlPlace2"/>  
            <xui:place control="menuButton1" id="controlPlace3"/> 
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="vDetail" id="controlPlace11" style="position:relative;height:100%;width:100%;"/> 
        </center> 
      </xhtml:div>  
     
    </layout> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="flow.js"/> 
  </resource> 
</window>
