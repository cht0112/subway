<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:456px;left:511px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dataMaster" auto-new="true"
      store-type="simple"> 
      <reader id="default8"/>  
      <writer id="default9"/>  
      <creator id="default10"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataDetail"> 
      <master id="master1" data="dataMaster"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="flw"
      data="dataMaster"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="advanceTrigger"
      operation-owner="flw" class="button-green" appearance="image-text" operation="advance"> 
      <xforms:label id="default32"/> 
    </xforms:trigger>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger"
      operation-owner="dataMaster" appearance="image-minimal" operation="save"> 
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
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout3" type="flow" src="detail.xls" style="position:relative;"/> 
    </xui:view>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger"
      operation-owner="dataDetail" class="button-blue" appearance="image-text" operation="new"> 
      <xforms:label id="newTriggerLabel"><![CDATA[]]></xforms:label> 
    </xforms:trigger>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger"
      operation-owner="dataDetail" appearance="image-minimal" operation="delete"> 
      <xforms:label id="saveTriggerLabel"><![CDATA[]]></xforms:label> 
    </xforms:trigger>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger"
      operation-owner="dataDetail" appearance="image-minimal" operation="refresh"> 
      <xforms:label id="refreshTriggerLabel"><![CDATA[]]></xforms:label> 
    </xforms:trigger>
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu2" data="dataDetail"></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdDetail" data="dataDetail" class="grid-compact" row-height="30" header-row-height="30"/>
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" id="pagination1"
      data="dataMaster" items="first last pre next" first-label="首页" pre-label="上页"
      next-label="下页" last-label="尾页" align="right" page-count="15"/>  
    <layout style="height:100%;width:800px;margin:auto;" id="layout1"> 
      <place control="flw" id="controlPlace7" style="width:24px;top:233px;left:16px;"/>  
  
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            separator="false" separator-size="16" id="buttonBar1"> 
            <xui:place control="advanceTrigger" id="controlPlace6"/>  
            <xui:place control="saveTrigger" id="controlPlace8"/>  
            <xui:place control="menuButton1" id="controlPlace5"/> 
          </xhtml:div>  
          <place control="vDetail" id="controlPlace1" style="width:100%;border-top:1px solid #B5B5B5;border-bottom:1px solid #B5B5B5;height:232px;"/>  
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            separator="false" separator-size="1" id="ngtbMaster1" expandable="true"
            expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5"
            expanded-width="75"> 
            <xui:place control="newTrigger" id="newTriggerPlace"/>  
            <xui:place control="deleteTrigger" id="saveTriggerPlace"/>  
            <xui:place control="refreshTrigger" id="refreshTriggerPlace"/> 
          <xui:place control="queryTrigger" id="controlPlace3"></xui:place></xhtml:div> 
       
          <xui:place control="bizDataFilterMenu2" id="controlPlace10" style="top:47px;left:467px;"></xui:place><place control="grdDetail" id="controlPlace2" style="width:100%;height:320px;"/> 
  
          <xui:place control="pagination1" id="controlPlace9"/> 
 
   
    </layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="queryTrigger" appearance="image-minimal" operation-owner="bizDataFilterMenu2" operation="show">
   <xforms:label id="default1"><![CDATA[]]></xforms:label></xforms:trigger>
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="flowmd.js"/> 
  </resource> 
</window>
