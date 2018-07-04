<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:143px;top:506px;height:auto;left:116px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="dataMain" concept="SYSTEM_RESOURCE_INFO"><creator id="default1" action="/metrodetection/system_code/logic/action/createSYSTEM_RESOURCE_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/querySYSTEM_RESOURCE_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveSYSTEM_RESOURCE_INFOAction"></writer></data>
  <xforms:action id="action4" ev:event="xbl-loaded"><xforms:script id="xformsScript4"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="windowDialog.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="height:49px;width:595px;"></xui:place>
  <xui:place control="view2" id="controlPlace6" style="height:100%;width:100%;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" onclick="windowDialog.inputbutton1Click(event)" style="width:75px;float:right" type="button" value="确认选择"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1">
  <xui:place control="toolbars2" id="controlPlace5" style="position:absolute;top:9px;left:17px;height:41px;width:295px;"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="dataMain">
   <item id="customBarItem4"><xhtml:div component="/UI/system/components/smartFilter.xbl.xml#smartFilter" id="smartFilter2" filter-data="dataMain" filter-relations="eRRORSOLUTION" onGetCondition="windowDialog.smartFilter2GetCondition" auto-refresh="true"></xhtml:div></item>
   <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default22"><![CDATA[要搜索的内容]]></xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[xforms.blur(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item> 
        <item id="customBarItem1"></item></xui:bar></xhtml:div>
  </xui:view>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout2"><xui:place control="grid1" style="width:100%;height:100%;top:5px;left:8px;" id="controlPlace7"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid1" data="dataMain">
   <column ref="eRRORSOLUTION" label="问题解决方法" width="228px" type="ro" id="gridColumn1"></column>
  </xhtml:div>
  </xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="windowDialog.js"></xhtml:script></xui:resource> 
</xui:window>
