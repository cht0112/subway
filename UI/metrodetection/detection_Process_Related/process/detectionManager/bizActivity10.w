<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/metrodetection/detection_Process_Related/process/detectionManager/mainActivity.w" >

  <div id="action1" xui:update-mode="delete"/>
  <div id="vDetail" xui:update-mode="delete"/>
  <div id="controlPlace11" xui:update-mode="delete"/>
   <xforms:model id="mdDefault" style="height:auto;top:164px;left:362px;"  xui:update-mode="merge"/>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_7" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_7" >
<![CDATA[bizActivity10.mdDefaultLoad(event)]]>
</xforms:script>
</xforms:action>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_SCHEME_BASE_INFO" confirm-refresh="false" data-type="json" id="detectionScheme" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryTEST_SCHEME_BASE_INFOAction" id="default3" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="RECURRENCE_TEST_SCHEME" confirm-refresh="false" data-type="json" id="recurrenceSchemeD" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryRECURRENCE_TEST_SCHEMEAction" id="default1_2" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_INFO" confirm-refresh="false" data-type="json" id="testProjectInfoD" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction" id="default2_2" />
</data>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
   <data id="afcData" store-type="simple"  xui:update-mode="merge"/>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_7" xui:parent="rootView" xui:update-mode="insert" >
<layout id="layout1_7" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="myFrame" id="controlPlace2_7" style="position:absolute;height:100%;width:100%;top:5px;left:5px;" />
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" auto-load="true" component="/UI/system/components/windowFrame.xbl.xml#windowFrame" id="myFrame" onInit="bizActivity10.myFrameInit" onReceive="bizActivity10.myFrameReceive" />
</xui:view>
    <item id="customBarItem1_7" xui:parent="navigatorBar1" xui:update-mode="insert" />
   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
    <xui:place xmlns:xui="http://www.justep.com/xui" control="view1_7" id="controlPlace1_7" style="height:100%;width:100%;" xui:parent="borderLayout-center1" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_7" src="bizActivity10.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>