<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:164px;height:auto;left:91px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" limit="1" data-type="json" auto-load="false"
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
    <xui:view id="detailView" class="xui-container"> 
      <xui:layout id="layout1" type="cell.excel" src="detail.xls" style="width:100%;height:200px;"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbarView"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar"
        data="masterData" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem3"/>  
        <item name="save-item" id="barItem5"/>  
        <item name="refresh-item" id="barItem7"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        style=";" data="detailData" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="delete-item" id="barItem4"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="detailGrid"
      data="detailData"/>  
    <xui:layout style="width:100%;height:100%;"> 
      <xui:place control="windowReceiver" id="controlPlace2"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout2" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top2"> 
          <place control="toolbarView" id="controlPlace1"/>  
          <place control="detailView"/>  
          <xui:place control="toolbars1" id="controlPlace3"/> 
        </top>  
        <center id="borderLayout-center2"> 
          <xui:place control="detailGrid" id="controlPlace4" style="height:100%;width:100%;"/> 
        </center> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="detail.js"/> 
  </resource> 
</xui:window>
