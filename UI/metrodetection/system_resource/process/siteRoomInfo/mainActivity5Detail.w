<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:69px;left:45px;"> 
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_APPLY_INFO" confirm-refresh="false" direct-delete="true" id="detailData" limit="1" store-type="simple"> 
      <reader action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFOAction"/>  
      <writer action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction"/>  
      <creator action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:view class="xui-container" id="detailView"> 
      <xui:layout id="layout1" style="height:100%;width:100%;position:relative;;position:relative;" type="absolute"> 
        <place control-label="iptROOMID" id="default1" style="font-size:10pt;position: absolute;left:30px;top:38px"/>  
        <place control="iptROOMID" id="default2" style="font-size:10pt;position: absolute;left:130px;top:30px;width:150px;"/>  
        <place control-label="iptROOMAREA" id="default3" style="font-size:10pt;position: absolute;left:330px;top:38px"/>  
        <place control="iptROOMAREA" id="default4" style="font-size:10pt;position: absolute;left:430px;top:30px;width:150px;"/>  
        <place control-label="iptAPPLYFOROBJECT" id="default5" style="font-size:10pt;position: absolute;left:30px;top:68px"/>  
        <place control="iptAPPLYFOROBJECT" id="default6" style="font-size:10pt;position: absolute;left:130px;top:60px;width:150px;"/>  
        <place control-label="iptAPPLYFORDEVICETYPE" id="default7" style="font-size:10pt;position: absolute;left:330px;top:68px"/>  
        <place control="iptAPPLYFORDEVICETYPE" id="default8" style="font-size:10pt;position: absolute;left:430px;top:60px;width:150px;"/>  
        <place control-label="iptAPPLYFORRANGE" id="default9" style="font-size:10pt;position: absolute;left:30px;top:98px"/>  
        <place control="iptAPPLYFORRANGE" id="default10" style="font-size:10pt;position: absolute;left:130px;top:90px;width:150px;"/>  
        <place control-label="iptIMAGE" id="default11" style="font-size:10pt;position: absolute;left:330px;top:98px"/>  
        <place control="iptIMAGE" id="default12" style="font-size:10pt;position: absolute;left:430px;top:90px;width:150px;"/> 
      </xui:layout>  
      <xforms:input id="iptROOMID" ref="data('detailData')/rOOMID"/>  
      <xforms:input id="iptROOMAREA" ref="data('detailData')/rOOMAREA"/>  
      <xforms:input id="iptAPPLYFOROBJECT" ref="data('detailData')/aPPLYFOROBJECT"/>  
      <xforms:input id="iptAPPLYFORDEVICETYPE" ref="data('detailData')/aPPLYFORDEVICETYPE"/>  
      <xforms:input id="iptAPPLYFORRANGE" ref="data('detailData')/aPPLYFORRANGE"/>  
      <xforms:input id="iptIMAGE" ref="data('detailData')/iMAGE"/> 
    </xui:view>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"> 
          <place control="detailView" style="position:relative;"/> 
        </center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xui:place control="triggerCancel" id="controlPlace3" style="float:right;margin-left:8px;margin-right:20px"/>  
          <xui:place control="triggerOK" id="controlPlace2" style="float:right"/> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="windowReceiver" id="controlPlace1"/> 
    </xui:layout>  
    <xforms:trigger id="triggerOK"> 
      <xforms:label id="xuiLabel1">确定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript1">mainActivity5Detail.triggerOKClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="triggerCancel"> 
      <xforms:label id="xuiLabel2">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript2">mainActivity5Detail.triggerCancelClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="mainActivity5Detail.windowReceiverReceive"/> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity5Detail.js"/> 
  </resource> 
</xui:window>
