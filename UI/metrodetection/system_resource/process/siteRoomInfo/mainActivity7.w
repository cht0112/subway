<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;top:236px;height:auto;left:309px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData1" concept="DETECTION_ROOM_INFO" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="mainActivity7.windowReceiverReceive"/>  
    <xui:layout style="position:relative;height:100%;width:100%;" type="absolute"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="position:absolute;top:192px;left:398px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;position:absolute;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="height:100%;width:100%;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="25px"> 
            
          <xhtml:input class="xui-button" id="input(button)1" onclick="mainActivity7.inputbutton1Click(event)" style="float:right;margin-left:8px;margin-right:20px;width:75px;" type="button" value="确定" /></bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;height:100%;width:100%;" id="layout1"><xui:place control="blobImage1" id="controlPlace4" style="position:absolute;top:7px;left:5px;height:98%;width:98%;"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/blob.xbl.xml#image" id="blobImage1" data="bizData1" relation="iMAGE" stretch="true" concept="DETECTION_ROOM_INFO"></xhtml:div>
  </xui:view></xui:view>  
  <xui:resource/> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity7.js"></xhtml:script></resource></xui:window>
