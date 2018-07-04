<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:143px;top:496px;height:auto;left:292px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData1" concept="ROOM_APPLY_INFO" store-type="simple" onIndexChanged="mainActivity6.bizData1IndexChanged"><creator id="default1" action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction"></writer>
  </data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="mainActivity6.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:506px;left:420px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:101%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="width:100%;height:106%;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="30px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="float:right;margin-left:8px;margin-right:20px;width:75px;" type="button" value="取消"/> 
          <xhtml:input class="xui-button" id="input(button)1" onclick="mainActivity6.inputbutton1Click(event)" style="width:75px;float:right" type="button" value="确定"/>  
          </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;width:100%;height:106%;" id="layout1">
  <xui:place control="blobImage1" id="controlPlace3" style="position:absolute;top:5px;left:5px;width:98%;height:75%;"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/blob.xbl.xml#image" id="blobImage1" data="bizData1" relation="iMAGE" concept="ROOM_APPLY_INFO" stretch="true"></xhtml:div>
  </xui:view></xui:view>  
  <xui:resource/> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity6.js"></xhtml:script></resource></xui:window>
