<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:110px;left:15px;"> 
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
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsFlow"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngtb"
        data="dataMaster" mode="IMG_TXT_LR"> 
        <item name="save-item" id="barItem2"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
        id="flwBar" process="flw" mode="IMG_TXT_LR"> 
        <item name="back-process-item" id="barItem12"/>  
        <item name="advance-process-item" id="barItem13"/>  
        <item name="transfer-task-item" id="barItem14"/>  
        <item name="suspend-process-item" id="barItem15"/>  
        <item name="abort-process-item" id="barItem16"/>  
        <item name="customized-process-item" id="barItem17"/>  
        <item name="process-chart-item" id="barItem3"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="flw"
      data="dataMaster"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdDetail" data="dataDetail"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngtbDetail"
        data="dataDetail" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="delete-item" id="barItem4"/>  
        <item name="refresh-item" id="barItem5"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="filter-pro-item" id="barItem6"></item><item name="first-item" id="barItem8"/>  
        <item name="pre-item" id="barItem9"/>  
        <item name="next-item" id="barItem10"/>  
        <item name="last-item" id="barItem11"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem18" page-count="0" items="pre,next,ext"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout3" type="excel" src="detail.xls"/> 
    </xui:view>  
    <layout style="height:100%" id="layout1"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout2" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top2"> 
          <place control="tbsFlow" id="controlPlace4"/>  
          <place control="vDetail" id="controlPlace1"/>  
          <place control="tbsDetail" id="controlPlace3"/> 
        </top>  
        <center id="borderLayout-center2"> 
          <place control="grdDetail" id="controlPlace2" style="width:100%;height:100%;"/> 
        </center> 
      </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:183px;left:51px;"/> 
    </layout>  
    <layout id="layout2"/> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="flowmd.js"/> 
  </resource> 
</window>
