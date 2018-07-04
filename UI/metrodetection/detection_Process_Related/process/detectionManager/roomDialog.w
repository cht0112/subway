<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/system/dialog/base/multiList.w" >

    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_OBJECT_TYPE" id="roomFilterData" store-type="simple" update-mode="whereAll" xui:parent="model" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction" id="default1_8" />
<reader action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction" id="default2_8" />
<writer action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction" id="default3_8" />
</data>
   <data id="main" concept="DETECTION_ROOM_INFO"  xui:update-mode="merge"/>
    <creator action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction" id="default1_4" xui:parent="main" xui:update-mode="insert" />
    <reader action="/metrodetection/system_code/logic/action/myQuerySiteRes" id="default2_4" xui:parent="main" xui:update-mode="insert" />
    <writer action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction" id="default3_4" xui:parent="main" xui:update-mode="insert" />
   <item id="displayColumnId" value="rOOMCNAME"  xui:update-mode="merge"/>
    <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1_7" xui:parent="toolbars" xui:update-mode="insert" >
<item id="customBarItem2_7" >
<xforms:trigger id="btnRoom" >
<xforms:label id="xuiLabel1_7" >






查询应用检测对象类型</xforms:label>
<xforms:action ev:event="DOMActivate" id="action1_8" >
<xforms:script id="xformsScript1_8" >






roomDialog.btnRoomClick(event)</xforms:script>
</xforms:action>
</xforms:trigger>
</item>
</xui:bar>
   <xui:bar id="navigatorBar" style="width:475px;"  xui:update-mode="merge"/>
    <item id="customBarItem1_7" xui:parent="navigatorBar" xui:update-mode="insert" >
<xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="roomSelect" option-data="roomFilterData" option-label="dETECTIONOBJECTCNAME" ref="data('roomFilterData')/dETECTIONOBJECTCNAME" />
</item>
   <xhtml:div id="smartFilter" filter-relations="rOOMTYPE,rOOMCNAME,rOOMAREA,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,tESTTASKID,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME"  xui:update-mode="merge"/>
    <column id="default5_4" label="房间名称" ref="rOOMCNAME" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column id="gridColumn1_2" label="房间类型" ref="rOOMTYPECNAME" type="ed" width="100px" xui:parent="grid" xui:update-mode="insert" />
    <column id="default7_4" label="区域" ref="rOOMAREA" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column id="gridColumn1_1" label="应用检测对象类型" ref="dETECTIONOBJECTCNAME" type="ed" width="133px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column id="gridColumn2_1" label="应用检测对象" ref="dEVICETYPECNAME" type="ed" width="99px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column id="gridColumn3_1" label="应用检测方面类型" ref="dETECTIONRANGECNAME" type="ed" width="129px" xui:parent="grid" xui:update-mode="insert" />
    <column id="default11_4" label="测试任务ID" ref="tESTTASKID" type="ro" width="100px" xui:parent="grid" xui:update-mode="insert" />
    <column id="default12_4" label="计划占用起始日期时间" ref="oCCUPYSTARTDATETIME" type="ro" width="153px" xui:parent="grid" xui:update-mode="insert" />
    <column id="default13_4" label="计划占用结束日期时间" ref="oCCUPYENDDATETIME" type="ro" width="146px" xui:parent="grid" xui:update-mode="insert" />
    <xhtml:script id="htmlScript1_8" src="roomDialog.js" xui:parent="resource" xui:update-mode="insert" />

</window>