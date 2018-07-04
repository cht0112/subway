<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:286px;height:auto;left:346px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" limit="1" auto-load="false"
      id="detailData" store-type="simple" confirm-refresh="false" direct-delete="true"> 
      <reader/>  
      <writer/>  
      <creator/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view id="detailView" class="xui-container"> 
      <xui:layout id="layout1" type="cell.excel" style="height:100%;width:100%;position:relative;" src="detail.xls"/> 
    </xui:view>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1">
          <place control="detailView" style="position:relative;"/> 
        </center>  
        <bottom size="40px" id="borderLayout-bottom1"> 
          <xui:place control="triggerCancel" id="controlPlace3" style="float:right;margin-left:8px;margin-right:20px"/>  
          <xui:place control="triggerOK" id="controlPlace2" style="float:right"/> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="windowReceiver" id="controlPlace1" style="top:492px;left:108px;"/> 
    </xui:layout>  
    <xforms:trigger id="triggerOK" class="button-green" icon-class=" " appearance="image-text"> 
      <xforms:label id="xuiLabel1">确定</xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">detail.triggerOKClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="triggerCancel" appearance="image-minimal" icon-class=" "> 
      <xforms:label id="xuiLabel2">取消</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">detail.triggerCancelClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="detail.windowReceiverReceive"/> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="detail.js"/> 
  </resource> 
</xui:window>
