<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;top:372px;height:auto;left:241px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData1" concept="ROOM_APPLY_INFO" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="mainActivity9.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="width:650px;height:716px;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" onclick="mainActivity9.inputbutton1Click(event)" style="width:75px;float:right" type="button" value="确定"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="blobImage1" id="controlPlace3" style="position:absolute;width:386px;top:130px;left:229px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/blob.xbl.xml#image" id="blobImage1" data="bizData1" concept="ROOM_APPLY_INFO" relation="iMAGE"></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity9.js"></xhtml:script></xui:resource> 
</xui:window>
