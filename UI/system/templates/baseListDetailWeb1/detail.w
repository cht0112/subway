<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:206px;height:auto;left:231px;"> 
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
      <xui:layout id="layout1" type="flow" src="detail.xls" style="height:100%;width:100%;position:relative;"/> 
    </xui:view>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="40px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="1" id="navigatorBar" expandable="false" expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5" expanded-width="75">
   <xui:place control="newTrigger" id="controlPlace3"></xui:place>
   <xui:place control="deleteTrigger" id="controlPlace5"></xui:place>
   <xui:place control="refreshTrigger" id="controlPlace6"></xui:place>
   </xhtml:div></top>  
        <center id="borderLayout-center1"> 
          <place control="detailView" style="position:relative;"/> 
        </center> 
      </xhtml:div>  
      <xui:place control="windowReceiver" id="controlPlace2" style="top:129px;left:644px;"/> 
    </xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger" class="button-blue" appearance="image-text" operation-owner="detailData" operation="new">
   <xforms:label id="newTriggerLabel">新建</xforms:label>
   </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger" operation-owner="detailData" appearance="image-minimal" operation="save">
   <xforms:label id="deleteTriggerLabel"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger" operation-owner="detailData" appearance="image-minimal" operation="refresh">
   <xforms:label id="refreshTriggerLabel"></xforms:label></xforms:trigger>
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="detail.js"/> 
  </resource> 
</xui:window>
