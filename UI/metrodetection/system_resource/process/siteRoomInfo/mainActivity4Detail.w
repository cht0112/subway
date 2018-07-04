<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:164px;height:auto;left:91px;"> 
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_ROOM_INFO" confirm-refresh="false" direct-delete="true" id="masterData" limit="1" onSaveCommit="mainActivity4Detail.detailDataSaveCommit" store-type="simple"> 
      <reader action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction"/>  
      <creator action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_APPLY_INFO" confirm-delete="false" id="detailData" limit="-1" style=";" update-mode="whereVersion"> 
      <master data="masterData" id="master1" relation="rOOMID"/>  
      <creator action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction" id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFOAction" id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction" id="default3"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="mainActivity4Detail.windowReceiverReceive"/>  
    <xui:view class="xui-container" id="detailView"> 
      <xui:layout id="layout1" style="width:100%;position:relative;height:133.0px;" type="absolute"> 
        <place control-label="iptROOMTYPE" id="default10" style="font-size:10pt;position: absolute;left:30px;top:38px"/>  
        <place control="iptROOMTYPE" id="default11" style="font-size:10pt;position: absolute;left:130px;top:30px;width:150px;"/>  
        <place control-label="iptROOMCNAME" id="default12" style="font-size:10pt;position: absolute;left:330px;top:38px"/>  
        <place control="iptROOMCNAME" id="default13" style="font-size:10pt;position: absolute;left:430px;top:30px;width:150px;"/>  
        <place control-label="iptROOMENAME" id="default14" style="font-size:10pt;position: absolute;left:30px;top:68px"/>  
        <place control="iptROOMENAME" id="default15" style="font-size:10pt;position: absolute;left:130px;top:60px;width:150px;"/>  
        <place control-label="iptIMAGE" id="default16" style="font-size:10pt;position: absolute;left:330px;top:68px"/>  
        <place control="iptIMAGE" id="default17" style="font-size:10pt;position: absolute;left:430px;top:60px;width:150px;"/>  
        <place control-label="iptMEMO" id="default18" style="font-size:10pt;position: absolute;left:30px;top:98px"/>  
        <place control="iptMEMO" id="default19" style="font-size:10pt;position: absolute;left:130px;top:90px;width:150px;"/> 
      </xui:layout>  
      <xforms:input id="iptROOMTYPE" ref="data('masterData')/rOOMTYPE"/>  
      <xforms:input id="iptROOMCNAME" ref="data('masterData')/rOOMCNAME"/>  
      <xforms:input id="iptROOMENAME" ref="data('masterData')/rOOMENAME"/>  
      <xforms:input id="iptIMAGE" ref="data('masterData')/iMAGE"/>  
      <xforms:input id="iptMEMO" ref="data('masterData')/mEMO"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbarView"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="masterData" id="navigatorBar"> 
        <item id="barItem3" name="insert-item"/>  
        <item id="barItem5" name="save-item"/>  
        <item id="barItem7" name="refresh-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="detailData" id="navigatorBar1" style=";"> 
        <item id="barItem1" name="insert-item"/>  
        <item id="barItem4" name="delete-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="detailData" id="detailGrid"> 
      <column id="default4" label="房间编号" ref="rOOMID" type="ed" width="100px"/>  
      <column id="default5" label="区域" ref="rOOMAREA" type="ed" width="100px"/>  
      <column id="default6" label="应用检测对象类型" ref="aPPLYFOROBJECT" type="ed" width="100px"/>  
      <column id="default7" label="应用检测对象" ref="aPPLYFORDEVICETYPE" type="ed" width="100px"/>  
      <column id="default8" label="应用检测方面类型" ref="aPPLYFORRANGE" type="ed" width="100px"/>  
      <column id="default9" label="区域位置图" ref="iMAGE" type="ed" width="100px"/> 
    </xhtml:div>  
    <xui:layout style="width:100%;height:100%;"> 
      <xui:place control="windowReceiver" id="controlPlace2"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
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
    <xhtml:script id="htmlScript1" src="mainActivity4Detail.js"/> 
  </resource> 
</xui:window>
