<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="height:auto;top:399px;left:479px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" limit="1" auto-load="false"
      id="masterData" store-type="simple" onSaveCommit="detail.detailDataSaveCommit"
      confirm-refresh="false" direct-delete="true"> 
      <reader/>  
      <writer/>  
      <creator/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" update-mode="whereVersion"
      auto-load="true" id="detailData" style=";" limit="-1" confirm-delete="false"> 
      <master id="master1" data="masterData"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="detail.windowReceiverReceive"/>  
    <xui:view id="detailView" class="xui-container" auto-load="true"> 
      <xui:layout id="layout1" type="cell.excel" src="detail.xls" style="width:100%;height:200px;"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="1" id="ngtbMaster2" expandable="true" expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5" expanded-width="75">
   <xui:place control="trigger2" id="controlPlace8"></xui:place>
   <xui:place control="trigger1" id="controlPlace7"></xui:place>
   <xui:place control="trigger4" id="controlPlace9"></xui:place>
   <xui:place control="trigger3" id="controlPlace3"></xui:place></xhtml:div>
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="detailGrid"
      data="detailData" class="grid-compact" header-row-height="30" row-height="30"/>  
    <xui:layout style="width:100%;height:100%;"> 
      <xui:place control="windowReceiver" id="controlPlace2"/>  
 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="1" id="navigatorBar" expandable="true" expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5" expanded-width="75">
   <xui:place control="trigger10" id="controlPlace5"></xui:place>
   <xui:place control="trigger5" id="controlPlace12"></xui:place>
   <xui:place control="trigger7" id="controlPlace10"></xui:place>
   </xhtml:div>
          <place control="detailView" style="width:100%;height:200px;"/>  
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="2" id="ngtbDetail" expandable="true" expanded="false" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5" expanded-width="75">
   <xui:place control="trigger8" id="controlPlace11"></xui:place>
   <xui:place control="trigger6" id="controlPlace14"></xui:place></xhtml:div>
 
          <xui:place control="detailGrid" id="controlPlace4" style="height:320px;width:100%"/> 
 
    </xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" operation-owner="detailData" class="button-blue" appearance="image-text" operation="new">
   <xforms:label id="default12"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6" appearance="image-minimal" operation-owner="detailData" operation="delete">
   <xforms:label id="default14"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" operation-owner="dataMaster" class="button-blue" appearance="image-text" operation="new">
   <xforms:label id="default8"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" operation-owner="dataMaster" appearance="image-minimal" operation="save">
   <xforms:label id="default7"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" appearance="image-minimal" operation-owner="dataMaster" operation="delete">
   <xforms:label id="default10"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" operation-owner="dataMaster" appearance="image-minimal" operation="refresh">
   <xforms:label id="default9"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger10" operation-owner="masterData" class="button-blue" appearance="image-text" operation="new">
   <xforms:label id="default2"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" operation-owner="masterData" appearance="image-minimal" operation="save">
   <xforms:label id="default3"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger7" appearance="image-minimal" operation-owner="masterData" operation="refresh">
   <xforms:label id="default4"></xforms:label></xforms:trigger>
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="detail.js"/> 
  </resource> 
</xui:window>
