<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:195px;left:83px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" limit="1" auto-load="false"
      id="detailData" store-type="simple" onSaveCommit="detail.detailDataSaveCommit"
      confirm-refresh="false" direct-delete="true"> 
      <reader/>  
      <writer/>  
      <creator/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="detail.windowReceiverReceive"/>
    <xui:view id="detailView" class="xui-container"> 
      <xui:layout id="layout1" type="cell.excel" src="detail.xls" style="height:100%;width:100%;"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbarView"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar"
        data="detailData" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem3"/>  
        <item name="save-item" id="barItem5"/>  
        <item name="refresh-item" id="barItem7"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="40px" id="borderLayout-top1"> 
          <place control="toolbarView" id="controlPlace1"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="detailView"/> 
        </center> 
      </xhtml:div>  
      <xui:place control="windowReceiver" id="controlPlace2"/> 
    </xui:layout> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="detail.js"/> 
  </resource> 
</xui:window>
