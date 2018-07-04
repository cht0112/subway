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
  <div id="navigatorBar1" xui:update-mode="delete"/>
  <div id="controlPlace11" xui:update-mode="delete"/>
   <xforms:model id="mdDefault" style="height:auto;top:50px;left:355px;"  xui:update-mode="merge"/>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TOOL_OCCUPY_INFO" data-type="xml" id="detectionToolD" update-mode="whereVersion" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTOOL_OCCUPY_INFOAction" id="default1_2" />
<reader action="/metrodetection/system_code/logic/action/querytoolOccupyAction" id="default2_2" />
<writer action="/metrodetection/system_code/logic/action/saveTOOL_OCCUPY_INFOAction" id="default3_2" />
<calculate-relation id="calculate-relation2_1" relation="calc" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_OCCUPY_INFO" confirm-refresh="false" data-type="xml" id="roomD" update-mode="whereVersion" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createROOM_OCCUPY_INFOAction" id="default4_2" />
<reader action="/metrodetection/system_code/logic/action/queryRoomOccupyAction" id="default5_2" />
<writer action="/metrodetection/system_code/logic/action/saveROOM_OCCUPY_INFOAction" id="default6_2" />
<calculate-relation id="calculate-relation1_1" relation="cal" type="xsd:string" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_TASK_INFO" confirm-refresh="false" data-type="xml" id="testTaskD" store-type="grid" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_TASK_INFOAction" id="default4_1" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_ROOM_INFO" confirm-refresh="false" data-type="xml" id="detectionRoomD_1" store-type="grid" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction" id="default16_1" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" confirm-refresh="false" data-type="xml" id="hrBaseD" store-type="grid" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default65_1" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_TOOL_INFO" confirm-delete="true" confirm-refresh="false" data-type="xml" id="toolBaseD" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_INFOAction" id="default258_1" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_3" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_3" >
<![CDATA[jiancehuanjingqueren.mdDefaultLoad(event)]]>
</xforms:script>
</xforms:action>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="qualtityV" xui:parent="rootView" xui:update-mode="insert" >
<layout id="layout1_2" style="position:relative;" type="absolute" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-tabPanel" component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1_2" style="position:absolute;left:2px;top:151px;height:60%;width:93%;" >
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabPage1_2" xforms-select="jiancehuanjingqueren.tabPage1_2Select" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel1_2" >
<![CDATA[占用工具列表]]>
</xui:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="useV" id="controlPlace4_2" style="height:99%;width:100%;" />
</xui:tab>
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabPage2_2" xforms-select="jiancehuanjingqueren.tabPage2_2Select" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel2_2" >
<![CDATA[占用房间列表]]>
</xui:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="view4_2" id="controlPlace6_2" style="height:100%;width:100%;" />
</xui:tab>
</xhtml:div>
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_3" id="controlPlace1_3" style="top:5px;left:2px;position:relative;width:653px;height:142px;" />
</layout>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="useV" >
<layout id="layout3_2" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolGrid" id="controlPlace5_2" style="position:absolute;left:1px;width:99%;height:204px;top:45px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbars1_1" id="controlPlace1_1" style="position:absolute;width:400px;left:1px;top:3px;height:35px;" />
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="detectionToolD" id="toolGrid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" >
<xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn14_1" label="序号" ref="calc" show-index="true" type="ro" width="32px" />
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect22_1" id="gridColumn20_2" label="任务名称" ref="tASKNAME" type="select" width="120px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect22_1" label-ref="data('detectionToolD')/tASKNAME" label-separator="," readonly="true" ref="data('detectionToolD')/tESTTASKID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default247_1" ref="tASKNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default248_1" ref="tASKID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="testTaskD" id="default249_1" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default256_1" ref="tASKID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default257_1" ref="tASKNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect23_1" id="gridColumn19_2" label="工具名称" ref="tOOLCNAME" type="select" width="110px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect23_1" label-ref="data('detectionToolD')/tOOLCNAME" label-separator="," readonly="true" ref="data('detectionToolD')/tOOL_NO" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default259_1" ref="tOOLCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default260_1" ref="DETECTION_TOOL_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="toolBaseD" id="default261_1" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default268_1" ref="DETECTION_TOOL_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default269_1" ref="tOOLCNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect24_1" id="gridColumn22_2" label="工具的可用性" ref="tOOLUSEDCNAME" type="select" width="100px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect24_1" label-ref="data('detectionToolD')/tOOLUSEDCNAME" label-separator="," ref="data('detectionToolD')/tOOLUSED" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default270_1" ref="col_1" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default271_1" ref="col_0" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default272_1" >
<itemset-data xmlns="" id="default286_1" >
<rows id="default287_1" >
<row id="default288_1" >
<cell id="default289_1" >







1</cell>
<cell id="default290_1" >







可用</cell>
</row>
<row id="default291_1" >
<cell id="default292_1" >







0</cell>
<cell id="default293_1" >







不可用</cell>
</row>
</rows>
</itemset-data>
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default300_1" ref="col_0" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default301_1" ref="col_1" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect1_2" id="gridColumn21_2" label="技术负责人" ref="oPERATORNAME" type="select" width="111px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_2" label-ref="data('detectionToolD')/oPERATORNAME" label-separator="," readonly="true" ref="data('detectionToolD')/tECHMANAGER" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default7_2" ref="oPERATORNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default8_2" ref="HR_BASE_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="hrBaseD" id="default9_2" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default16_2" ref="HR_BASE_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default17_2" ref="oPERATORNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4_6" label="计划占用起始日期时间" ref="oCCUPYSTARTDATETIME" type="ed" width="139px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn5_6" label="计划占用结束日期时间" ref="oCCUPYENDDATETIME" type="ed" width="135px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_4" label="备注" ref="mEMO" type="ed" width="112px" />
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1_1" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="detectionToolD" id="navigatorBar1_1" mode="IMG_TXT_LR" >
<item id="barItem2_1" name="save-item" />
<item id="barItem4_1" name="refresh-item" />
<item id="customBarItem1_1" name="filter-pro-item" />
<item id="customBarItem2_1" name="separator" />
<item id="customPageItem1_1" name="custom-page-item" />
</xui:bar>
</xhtml:div>
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view4_2" >
<layout id="layout4_2" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="roomGrid" id="controlPlace7_2" style="position:absolute;left:1px;top:42px;height:77%;width:99%;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbars2_1" id="controlPlace2_1" style="position:absolute;width:400px;left:1px;top:3px;height:37px;" />
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="roomD" id="roomGrid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn6_1" label="序号" ref="cal" show-index="true" type="ro" width="27px" />
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect15_1" id="gridColumn10_1" label="任务名称" ref="tASKNAME" type="select" width="126px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect15_1" label-ref="data('roomD')/tASKNAME" label-separator="," readonly="true" ref="data('roomD')/tESTTASKID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default148_1" ref="tASKNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default149_1" ref="tASKID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="testTaskD" id="default150_1" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default161_1" ref="tASKID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default162_1" ref="tASKNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_1" label="房间可用性" ref="rOOMUSED" type="ro" visible="false" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect16_1" id="gridColumn9_1" label="房间中文名称" ref="rOOMCNAME" type="select" width="106px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect16_1" label-ref="data('roomD')/rOOMCNAME" label-separator="," readonly="true" ref="data('roomD')/rOOMID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default163_1" ref="rOOMCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default164_1" ref="DETECTION_ROOM_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="detectionRoomD_1" id="default165_1" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default172_1" ref="DETECTION_ROOM_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default173_1" ref="rOOMCNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect20_1" id="gridColumn8_1" label="房间可用性" ref="rOOMUSEDCNAME" type="select" width="106px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect20_1" label-ref="data('roomD')/rOOMUSEDCNAME" label-separator="," ref="data('roomD')/rOOMUSED" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default208_1" ref="col_1" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default209_1" ref="col_0" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default210_1" >
<itemset-data xmlns="" id="default224_1" >
<rows id="default225_1" >
<row id="default226_1" >
<cell id="default227_1" >







1</cell>
<cell id="default228_1" >







可用</cell>
</row>
<row id="default229_1" >
<cell id="default230_1" >







0</cell>
<cell id="default231_1" >







不可用</cell>
</row>
</rows>
</itemset-data>
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default234_1" ref="col_0" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default235_1" ref="col_1" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect21_1" id="gridColumn11_1" label="技术负责人" ref="oPERATORNAME" type="select" width="113px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect21_1" label-ref="data('roomD')/oPERATORNAME" label-separator="," readonly="true" ref="data('roomD')/tECHMANAGER" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default236_1" ref="oPERATORNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default237_1" ref="HR_BASE_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="hrBaseD" id="default238_1" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default245_1" ref="HR_BASE_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default246_1" ref="oPERATORNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn13_1" label="计划占用起始日期时间" ref="oCCUPYSTARTDATETIME" type="ro" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2_6" label="计划占用结束日期时间" ref="oCCUPYENDDATETIME" type="ro" width="141px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn8_2" label="区域" ref="rOOMAREA" type="ro" width="109px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn12_1" label="备注" ref="mEMO" type="ed" width="103px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2_1" label="质量负责人" ref="tECHMANAGER" type="ed" visible="false" width="100px" />
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2_1" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="roomD" id="navigatorBar2_1" mode="IMG_TXT_LR" >
<item id="barItem10_1" name="save-item" />
<item id="barItem12_1" name="refresh-item" />
<item id="customBarItem4_1" name="filter-pro-item" />
<item id="customBarItem5_1" name="separator" />
<item id="customPageItem2_1" name="custom-page-item" />
</xui:bar>
</xhtml:div>
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_3" >
<layout id="layout1_3" style="position:relative;" type="flow" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/excelLayout.xbl.xml#excelLayout" id="excelLayout1_3" src="excelLayout39.xls" style="width:100%; height: 100%;" />
</layout>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="pRODUCTMANUFACTUREID1" readonly="true" ref="data('dataMain')/pRODUCTMANUFACTUREID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="pRODUCTNAME2" readonly="true" ref="data('dataMain')/pRODUCTNAME" style="width:164px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="dECTIONBASEDONNAME1" readonly="true" ref="data('dataMain')/dECTIONBASEDONNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="mNITLPOSTCODE1" readonly="true" ref="data('dataMain')/mNITLPOSTCODE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="mANUFACTUREIDCNAME1" readonly="true" ref="data('dataMain')/mANUFACTUREIDCNAME" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect2_7" label-separator="," readonly="true" ref="data('dataMain')/aSSIGNEDMANUFACTUREID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default4_7" ref="mANUFACTUREIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default5_7" ref="AFC_MANUFACTURER_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="afcData" id="default6_7" independence="false" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default17_7" ref="AFC_MANUFACTURER_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default18_7" ref="mANUFACTUREIDCNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect3_8" label-separator="," readonly="true" ref="data('dataMain')/pRODUCTMANUFACTUREID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default19_8" ref="mANUFACTUREIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default20_8" ref="AFC_MANUFACTURER_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="afcData" id="default21_8" independence="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default32_8" ref="AFC_MANUFACTURER_INFO" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default33_8" ref="mANUFACTUREIDCNAME" />
</xforms:itemset>
</xhtml:div>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input1_8" readonly="true" ref="data('dataMain')/aPPLICATIONDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="aSSIGNEDMANUFACTUREID1" ref="data('dataMain')/aSSIGNEDMANUFACTUREID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="pRODUCTNAME1" ref="data('dataMain')/pRODUCTNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="cONTACTPERSON1" readonly="true" ref="data('dataMain')/cONTACTPERSON" style="width:169px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="cONTACTEMAIL1" readonly="true" ref="data('dataMain')/cONTACTEMAIL" style="width:163px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="cONTACTPOSTCODE1" readonly="true" ref="data('dataMain')/cONTACTPOSTCODE" style="width:170px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="aPPLICATIONDATE1" readonly="true" ref="data('dataMain')/aPPLICATIONDATE" style="width:163px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="eXPECTENDINGDATE1" readonly="true" ref="data('dataMain')/eXPECTENDINGDATE" style="width:171px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="rECEIPTDATE1" readonly="true" ref="data('dataMain')/rECEIPTDATE" style="width:161px;" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_3" label-ref="data('dataMain')/mANUFACTUREIDCNAME" label-separator="," readonly="true" ref="data('dataMain')/aSSIGNEDMANUFACTUREID" style="width:172px;" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default1_3" ref="mANUFACTUREIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default2_3" ref="AFC_MANUFACTURER_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="afcData" id="default3_3" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default14_3" ref="AFC_MANUFACTURER_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default15_3" ref="mANUFACTUREIDCNAME" />
</xforms:itemset>
</xhtml:div>
</xui:view>
</xui:view>
   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
   <layout id="layout1" style="height:100%;width:100%;"  xui:update-mode="merge"/>
   <xhtml:div id="borderLayout1" style=" height: 100%;width:82%;"  xui:update-mode="merge"/>
   <top id="borderLayout-top1" size="39px"  xui:update-mode="merge"/>
    <xui:place xmlns:xui="http://www.justep.com/xui" control="qualtityV" id="controlPlace1_2" style="height:114%;width:100%;" xui:parent="borderLayout-center1" xui:update-mode="insert" />
   <place id="controlPlace7" style="width:24px;top:95px;left:688px;"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_5" src="jiancehuanjingqueren.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>