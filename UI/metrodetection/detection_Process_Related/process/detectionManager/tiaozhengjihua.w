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
  <div id="tbsMain" xui:update-mode="delete"/>
  <div id="vDetail" xui:update-mode="delete"/>
  <div id="borderLayout1" xui:update-mode="delete"/>
   <xforms:model id="mdDefault" style="width:208px;height:auto;top:207px;left:462px;"  xui:update-mode="merge"/>
    <data auto-load="true" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_TASK_INFO" id="testProjectTask" onAfterSave="bizActivity4.testProjectTaskAfterSave" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction" id="default1_4" />
<reader action="/metrodetection/system_code/logic/action/queryTestProJectTaskInfoAction" id="default2_4" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction" id="default3_4" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_TASK_REASON_CODE" id="reasonData" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_TASK_REASON_CODEAction" id="default3_1" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_TASK_REASON_CODEAction" id="default4_1" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_TASK_REASON_CODEAction" id="default5_1" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="PLAN_VIEW" confirm-refresh="false" id="vData" is-tree="true" limit="-1" onValueChanged="planJS.vDataValueChanged" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createPLAN_VIEWAction" id="default13_2" />
<reader action="/metrodetection/system_code/logic/action/queryPLAN_VIEWAction" id="default14_2" />
<writer action="/metrodetection/system_code/logic/action/savePLAN_VIEWAction" id="default15_2" />
<tree-option id="default16_2" parent-relation="fPARENTID" />
<rule id="dataBizRule1_2" readonly="data('vData')/fPARENTID='' or data('vData')/fPARENTID !='root'" relation="sTARTTIME" />
<calculate-relation id="calculate-relation1_1" relation="calculate0" />
<rule id="dataBizRule2_2" readonly="data('vData')/fPARENTID='' or data('vData')/fPARENTID !='root'" relation="eNDTIME" />
<rule id="dataBizRule3_2" readonly="data('vData')/fPARENTID='' or data('vData')/fPARENTID !='root'" relation="qZRW" />
<rule id="dataBizRule4_2" readonly="data('vData')/fPARENTID='' or data('vData')/fPARENTID != 'root'" relation="oPERATORNAME" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" id="hrData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction" id="default7_3" />
<reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default8_3" />
<writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction" id="default9_3" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_ROOM_INFO" id="roomData" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction" id="default17_3" />
<reader action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction" id="default18_3" />
<writer action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction" id="default19_3" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_TOOL_INFO" id="toolData" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_INFOAction" id="default20_3" />
<reader action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_INFOAction" id="default21_3" />
<writer action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_INFOAction" id="default22_3" />
</data>
    <data auto-load="true" columns="name" component="/UI/system/components/data.xbl.xml#data" id="hourData" src="" store-type="simple" xui:parent="mdDefault" xui:update-mode="insert" >
<rows xmlns="" id="default60_3" >
<row id="default61_3" >
<cell id="default62_3" />
</row>
</rows>
</data>
    <data auto-load="true" columns="name" component="/UI/system/components/data.xbl.xml#data" id="temp" src="" store-type="simple" xui:parent="mdDefault" xui:update-mode="insert" >
<rows xmlns="" id="default6_1" >
<row id="default7_1" >
<cell id="default8_1" />
</row>
</rows>
</data>
    <data auto-load="true" columns="name" component="/UI/system/components/data.xbl.xml#data" id="tempoption" src="" store-type="simple" xui:parent="mdDefault" xui:update-mode="insert" >
<rows xmlns="" id="default1_2" >
<row id="default2_2" >
<cell id="default3_2" />
</row>
</rows>
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_SCHEME_BASE_INFO" id="testSchemeData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_SCHEME_BASE_INFOAction" id="default1_5" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_SCHEME_BASE_INFOAction" id="default2_5" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_BASE_INFOAction" id="default3_5" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="NOTIFY_TYPE_CODE" id="notifyTypeData" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createNOTIFY_TYPE_CODEAction" id="default1_9" />
<reader action="/metrodetection/system_code/logic/action/queryNOTIFY_TYPE_CODEAction" id="default2_9" />
<writer action="/metrodetection/system_code/logic/action/saveNOTIFY_TYPE_CODEAction" id="default3_9" />
</data>
    <data auto-load="false" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_INFO" confirm-refresh="false" id="pData" onAfterNew="bizActivity4.pDataAfterNew" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction" id="default1_16" />
<reader action="/metrodetection/system_code/logic/action/queryProject" id="default2_16" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction" id="default3_16" />
<filter id="filter1_46" name="filter0" />
<rule concept="TEST_PROJECT_INFO" id="dataBizRule1_46" required="true()" />
<rule id="dataBizRule2_46" relation="pROJECTNAME" required="true()" />
<rule id="dataBizRule3_46" relation="pROJECTTYPE" required="true()" />
<rule id="dataBizRule4_46" relation="aPPLICATIONNO" required="true()" />
<rule id="dataBizRule5_46" relation="aSSIGNEDMANUFACTUREID" required="true()" />
<rule id="dataBizRule6_46" relation="cONTACTPERSON" required="true()" />
<rule id="dataBizRule7_46" relation="cONTACTMOBILE" required="true()" />
<rule id="dataBizRule8_46" relation="cONTACTTELEPHONE" required="true()" />
<rule id="dataBizRule9_46" relation="nOTIFYTYPE" required="true()" />
<rule id="dataBizRule10_46" relation="lINEID" required="true()" />
<rule id="dataBizRule11_46" relation="bUSINESSID" required="true()" />
<rule id="dataBizRule12_46" relation="mANUFACTUREID" required="true()" />
<rule id="dataBizRule13_46" relation="pROJECTDATE" required="true()" />
<rule id="dataBizRule14_46" relation="eNDINGDATE" required="true()" />
<rule id="dataBizRule15_46" relation="pROJECTMANAGER" required="true()" />
<rule id="dataBizRule16_46" relation="tESTSCHEMEID" required="true()" />
<rule id="dataBizRule17_46" relation="mAKEDATE" required="true()" />
<rule id="dataBizRule18_46" relation="eXECUTESTATE" required="true()" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="OPERATOR_PASSWORD" data-type="json" id="personData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createOPERATOR_PASSWORDAction" id="default1_1" />
<reader action="/metrodetection/system_code/logic/action/queryOPERATOR_PASSWORDAction" id="default2_1" />
<writer action="/metrodetection/system_code/logic/action/saveOPERATOR_PASSWORDAction" id="default11_1" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_MEMBER_INFO" data-type="xml" id="projectMember" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_MEMBER_INFOAction" id="default4_2" />
<reader action="/metrodetection/system_code/logic/action/myQueryProjectMemberActionForSel" id="default5_2" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_MEMBER_INFOAction" id="default6_2" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_TASK_INFO" data-type="json" id="taskData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction" id="default22_2" />
<reader action="/metrodetection/system_code/logic/action/queryTaskRoomDevice" id="default23_2" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction" id="default24_2" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_APPLY_INFO_VIEW" data-type="json" id="areaData" is-tree="true" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFO_VIEWAction" id="default18_1" />
<reader action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFO_VIEWAction" id="default19_1" />
<writer action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFO_VIEWAction" id="default20_1" />
<tree-option id="default7_2" parent-relation="PARENTID" virtual-root="房间信息" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SAMPLE_DEVICE_INFO" data-type="json" id="sampleDeviceData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction" id="default25_1" />
<reader action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_INFOAction" id="default26_1" />
<writer action="/metrodetection/system_code/logic/action/select_sample" id="default27_1" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="CASE_HOUSE" data-type="json" id="caseHouseData" limit="-1" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createCASE_HOUSEAction" id="default29_1" />
<reader action="/metrodetection/system_code/logic/action/queryCASE_HOUSEAction" id="default30_1" />
<writer action="/metrodetection/system_code/logic/action/saveCASE_HOUSEAction" id="default31_1" />
</data>
    <data auto-load="true" columns="name" component="/UI/system/components/data.xbl.xml#data" data-type="json" id="checkTempData" src="" store-type="simple" xui:parent="mdDefault" xui:update-mode="insert" >
<rows xmlns="" id="default44_3" >
<row id="default45_3" >
<cell id="default46_3" />
</row>
</rows>
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_TASK_EXECUTE_SUB_CASE" data-type="json" id="taskExcuteSubCase" limit="-1" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_TASK_EXECUTE_SUB_CASEAction" id="default47_3" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_TASK_EXECUTE_SUB_CASEAction" id="default48_3" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_TASK_EXECUTE_SUB_CASEAction" id="default49_3" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_MEMBER_INFO" data-type="xml" id="projectMemberData" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_MEMBER_INFOAction" id="default1_6" />
<reader action="/metrodetection/system_code/logic/action/myQueryProjectMemberForPlanAction" id="default2_6" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_MEMBER_INFOAction" id="default3_6" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_8" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_8" >
<![CDATA[tiaozhengjihua.mdDefaultLoad(event)]]>
</xforms:script>
</xforms:action>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
   <data id="afcData" store-type="simple"  xui:update-mode="merge"/>
   <xui:view id="rootView" class="xui-container"  xui:update-mode="merge"/>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view3_7" xui:parent="rootView" xui:update-mode="insert" >
<layout id="layout3_7" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbars2_7" id="controlPlace6_7" style="position:absolute;top:4px;left:5px;" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-tabPanel" component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel4_9" style="position:absolute;position:absolute;left:5px;top:47px;height:1017px;width:1200px;" >
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabPage1_3" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel1_3" >
<![CDATA[项目成员]]>
</xui:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="view2_2" id="controlPlace3_2" style="width:100%;height:142%;" />
</xui:tab>
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabPage8_9" xforms-select="tiaozhengjihua.tabPage8_9Select" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel8_9" >
<![CDATA[调整计划]]>
</xui:label>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-container" id="div1_2" style="width:1114px;height:499px;" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="view2_3" id="controlPlace17_3" style="height:41px;width:1098px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="view10_1" id="controlPlace18_1" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_3" id="controlPlace3_3" style="width:1013px;height:38px;" />
</xhtml:div>
<xui:place xmlns:xui="http://www.justep.com/xui" control="view12_1" id="controlPlace21_1" style="width:882px;height:56px;" />
</xui:tab>
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabPage1_2" xforms-select="tiaozhengjihua.tabPage1_2Select" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel2_2" >
<![CDATA[调整房间及工具]]>
</xui:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_2" id="controlPlace2_2" style="width:1114px;height:620px;" />
</xui:tab>
</xhtml:div>
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2_7" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" mode="IMG_TXT_LR" process="flw" >
<item id="barItem12" name="back-process-item" />
<item id="barItem13" name="advance-process-item" />
<item id="barItem15" name="suspend-process-item" />
<item id="barItem16" name="abort-process-item" />
<item id="barItem1" name="process-chart-item" />
</xui:bar>
</xhtml:div>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view2_3" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="vData" delay="false" id="grid13_2" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2_1" label="序号" ref="calculate0" show-index="true" type="ed" width="74" />
<xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn9_2" label="检测任务" ref="tASKID" type="ed" width="65px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn38_2" label="测试用例名称" ref="tESTCASENAME" type="tree" width="251px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn8_2" label="检测方面" readonly="true" ref="rANGENAME" type="ed" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4_1" label="检测对象" readonly="true" ref="dETOBJNAME" type="ed" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_1" label="耗时/小时" ref="sHIJIAN" type="ed" width="100" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_2" label="开始时间" ref="sTARTTIME" type="dateTime" width="155px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2_2" label="结束时间" ref="eNDTIME" type="dateTime" width="150px" />
<xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn1_3" label="前置任务" ref="qZRW" type="ed" width="65" />
<xui:column xmlns:xui="http://www.justep.com/xui" editor="hrselect" id="gridColumn3_2" label="执行人员" ref="pName" type="select" width="115px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="hrselect" label-ref="data('vData')/pName" label-separator="," onCloseup="tiaozhengjihua.hrselectCloseup" ref="data('vData')/oPERATORNAME" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel5_3" ref="oPERATORNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default10_3" ref="pROJECTMEMBERID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="false" data="projectMember" id="default11_3" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default10_2" ref="pROJECTMEMBERID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default11_2" ref="oPERATORNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
</xhtml:div>
<layout id="layout2_3" style="position:relative;width:872px;height:41px;" type="absolute" >
<xhtml:hr xmlns:xhtml="http://www.w3.org/1999/xhtml" id="horizontalRule2_3" style="position:absolute;position:absolute;width:13px;top:15px;left:114px;" />
<xhtml:hr xmlns:xhtml="http://www.w3.org/1999/xhtml" id="horizontalRule5_3" style="position:absolute;width:13px;top:15px;left:331px;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-label" id="label1_3" style="position:absolute;width:40px;top:17px;left:7px;" >






















































































上午</xhtml:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="grid13_2" id="controlPlace14_2" style="position:absolute;height:1102%;left:7px;top:36px;width:136%;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-label" id="label2_3" style="position:absolute;width:40px;top:16px;left:226px;" >












































































































下午</xhtml:label>
<xhtml:input xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-input" id="input17_3" style="position:absolute;width:64px;left:43px;top:11px;" type="text" value="9:00" />
<xhtml:input xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-input" id="input18_3" style="position:absolute;width:64px;left:131px;top:11px;" type="text" value="12:00" />
<xhtml:input xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-input" id="input19_3" style="position:absolute;width:64px;left:261px;top:11px;" type="text" value="13:00" />
<xhtml:input xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-input" id="input20_3" style="position:absolute;width:64px;left:347px;top:11px;" type="text" value="18:00" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="radio1_1" id="controlPlace2_1" style="position:absolute;left:476px;top:12px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="filterCase" id="controlPlace4_2" style="position:absolute;top:11px;left:819px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="triggerinput" id="controlPlace13_2" style="position:absolute;top:11px;left:938px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="triggerOut" id="controlPlace15_2" style="position:absolute;top:11px;left:1026px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="windowDialog2" id="controlPlace16_2" style="position:absolute;top:120px;left:459px;" />
</layout>
<xforms:select1 xmlns:xforms="http://www.justep.com/xforms" id="radio1_1" ref="data('temp')/name" >
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem1_1" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel2_1" >























































正常工作日</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default9_1" >



























































1</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem2_1" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel3_1" >
<![CDATA[













































周六加班]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default10_1" >












































































































2</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem1_5" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default4_5" >
<![CDATA[周日加班]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default5_5" >
<![CDATA[3]]>
</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem2_5" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default6_5" >
<![CDATA[周六日加班]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default7_5" >
<![CDATA[4]]>
</xforms:value>
</xforms:item>
</xforms:select1>
<xforms:select xmlns:xforms="http://www.justep.com/xforms" id="filterCase" ref="data('checkTempData')/name" >
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem3_2" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default21_2" >
<![CDATA[过滤已执行用例]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default28_2" >
<![CDATA[yes]]>
</xforms:value>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="xforms-deselect" id="action3_3" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript3_3" >
<![CDATA[tiaozhengjihua.selectItem3_2DeSelect(event)]]>
</xforms:script>
</xforms:action>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="xforms-select" id="action1_3" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_3" >
<![CDATA[tiaozhengjihua.selectItem3_2Select(event)]]>
</xforms:script>
</xforms:action>
</xforms:item>
</xforms:select>
<xforms:trigger xmlns:xforms="http://www.justep.com/xforms" id="triggerinput" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default9_2" >
<![CDATA[导入计划]]>
</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" id="action2_2" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript2_2" >
<![CDATA[tiaozhengjihua.triggerinputClick(event)]]>
</xforms:script>
</xforms:action>
</xforms:trigger>
<xforms:trigger xmlns:xforms="http://www.justep.com/xforms" id="triggerOut" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default12_2" >
<![CDATA[导出计划]]>
</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" id="action3_2" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript3_2" >
<![CDATA[tiaozhengjihua.triggerOutClick(event)]]>
</xforms:script>
</xforms:action>
</xforms:trigger>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/windowDialog.xbl.xml#windowDialog" height="300px" id="windowDialog2" modal="true" onClose="tiaozhengjihua.windowDialog2Close" title="" url="/UI/metrodetection/detection_Process_Related/process/detectionManager/importMppDialog.w" width="400px" />
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view10_1" >
<layout id="layout10_1" style="position:relative;" type="absolute" />
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_3" >
<xui:layout xmlns:xui="http://www.justep.com/xui" id="layout1_3" />
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view12_1" >
<xforms:select1 xmlns:xforms="http://www.justep.com/xforms" id="radio2_1" ref="data('tempoption')/name" >
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem3_0" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel4_0" >














半日</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default13_0" >














0</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem3_1" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel4_1" >

























































































日</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default13_1" >



















































































1</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem4_1" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel5_1" >




























周</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default14_1" >




















































































2</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem5_1" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel6_1" >












































































































月</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default15_1" >












































































































3</xforms:value>
</xforms:item>
</xforms:select1>
<layout id="layout12_1" style="position:relative;width:882px;height:56px;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="trigger9_1" id="controlPlace22_1" style="position:absolute;width:93px;height:26px;top:11px;left:474px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="radio2_1" id="controlPlace3_1" style="position:absolute;left:286px;top:16px;" />
</layout>
<xforms:trigger xmlns:xforms="http://www.justep.com/xforms" id="trigger9_1" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel10_1" >
<![CDATA[调整任务]]>
</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" id="action1_1" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_1" >





































tiaozhengjihua.trigger9_1Click(event)</xforms:script>
</xforms:action>
</xforms:trigger>
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_2" >
<layout id="layout1_2" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="grid2_2" id="controlPlace5_2" style="position:absolute;height:576px;width:1103px;left:8px;top:75px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="trigger2_2" id="controlPlace6_2" style="position:absolute;top:13px;left:8px;width:87px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="trigger3_2" id="controlPlace7_2" style="position:absolute;top:13px;left:133px;width:87px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="trigger4_2" id="controlPlace8_2" style="position:absolute;left:250px;top:13px;width:115px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbars5_2" id="controlPlace9_2" style="position:absolute;width:400px;top:44px;height:25px;left:8px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="roomScheduleDialog" id="controlPlace1_4" style="position:absolute;top:10px;left:378px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="deviceScheduleDialog" id="controlPlace1_7" style="position:absolute;top:13px;left:454px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolScheduleDialog" id="controlPlace1_2" style="position:absolute;top:27px;left:530px;" />
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="taskData" id="grid2_2" onRowValueChanged="tiaozhengjihua.grid2_2RowValueChanged" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4_2" label="任务名称" ref="tASKNAME" type="ed" width="110px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn7_2" label="执行人" ref="uSERNAME" type="ed" width="121px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn5_2" label="任务开始日期" ref="aCTUALSTARTDATE" type="ed" width="139px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn6_2" label="任务结束日期" ref="aCTUALENDINGDATE" type="ed" width="159px" />
<xui:column xmlns:xui="http://www.justep.com/xui" editor="treeSelect1_2" id="gridColumn2_3" label="房间区域" ref="rOOMCNAME" type="select" width="123px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#treeSelect" ext-separator="," id="treeSelect1_2" label-ref="data('taskData')/rOOMCNAME" label-separator="," ref="data('taskData')/rOOMAREA" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default17_2" ref="AREA" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default18_2" ref="AREAID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="areaData" id="default19_2" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default21_1" ref="AREA" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default22_1" ref="FID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default23_1" ref="ROOMID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default24_1" ref="AREAID" visible="false" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect1_3" id="gridColumn3_3" label="工具中文名称" ref="tOOLCNAME" type="select" width="136px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_3" label-ref="data('taskData')/tOOLCNAME" label-separator="," ref="data('taskData')/tOOLNO1" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default1_3" ref="tOOLCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default2_3" ref="DETECTION_TOOL_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="toolData" id="default3_3" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default5_3" ref="DETECTION_TOOL_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default6_3" ref="tOOLCNAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
<xui:column xmlns:xui="http://www.justep.com/xui" editor="gridSelect1_1" id="gridColumn3_1" label="样品序号" ref="sAMPLEDEVICENO" type="select" width="111px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_1" label-ref="data('taskData')/dEVICEID" label-separator="," ref="data('taskData')/sAMPLEDEVICENO" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default12_1" ref="dEVICEID" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default16_1" ref="SAMPLE_DEVICE_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="sampleDeviceData" id="default17_1" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default6_4" ref="SAMPLE_DEVICE_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default9_4" ref="dEVICEID" />
</xforms:itemset>
</xhtml:div>
</xui:column>
</xhtml:div>
<xforms:trigger xmlns:xforms="http://www.justep.com/xforms" id="trigger2_2" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default25_2" >






























































































房间占用信息</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" id="action1_4" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_4" >
























































tiaozhengjihua.trigger2_2Click(event)</xforms:script>
</xforms:action>
</xforms:trigger>
<xforms:trigger xmlns:xforms="http://www.justep.com/xforms" id="trigger3_2" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default26_2" >



































工具占用信息</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" id="action1_2" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_2" >
























































tiaozhengjihua.trigger3_2Click(event)</xforms:script>
</xforms:action>
</xforms:trigger>
<xforms:trigger xmlns:xforms="http://www.justep.com/xforms" id="trigger4_2" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default27_2" >
<![CDATA[













受测样品占用信息]]>
</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" id="action1_7" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_7" >




















































tiaozhengjihua.trigger4_2Click(event)</xforms:script>
</xforms:action>
</xforms:trigger>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars5_2" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="taskData" id="navigatorBar6_2" >
<item id="customBarItem1_7" >
<xhtml:img xmlns:xhtml="http://www.w3.org/1999/xhtml" align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif" id="saveRoomAndTool" onclick="tiaozhengjihua.saveItemClick(event)" src="/UI/system/images/standardToolbar/standard/save.gif" style="border:none" title="新建" />
</item>
<item id="barItem43_2" name="delete-item" />
<item id="barItem44_2" name="refresh-item" />
<item id="customBarItem16_2" name="filter-pro-item" />
<item id="customBarItem17_2" name="separator" />
<item id="barItem45_2" name="first-item" />
<item id="barItem46_2" name="pre-item" />
<item id="barItem47_2" name="next-item" />
<item id="barItem48_2" name="last-item" />
<item id="customBarItem18_2" name="separator" />
<item id="customPageItem6_2" name="custom-page-item" />
</xui:bar>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/windowDialog.xbl.xml#windowDialog" height="300px" id="roomScheduleDialog" modal="true" status="maximize" title="" url="/UI/metrodetection/detection_Process_Related/process/detectionManager/RoomSchedule1.w" width="400px" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/windowDialog.xbl.xml#windowDialog" height="300px" id="deviceScheduleDialog" modal="true" status="maximize" title="受测样品占用信息" url="/UI/metrodetection/detection_Process_Related/process/detectionManager/DeviceSchedule1.w" width="400px" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/windowDialog.xbl.xml#windowDialog" height="300px" id="toolScheduleDialog" modal="true" status="maximize" title="工具占用信息" url="/UI/metrodetection/asset_information/process/detectionToolInfo/ToolsSchedule.w" width="400px" />
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view2_2" >
<layout id="layout2_2" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_22" id="controlPlace1_22" style="width:100%;height:246px;position:absolute;top:16px;left:5px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_24" id="controlPlace1_24" style="height:220px;width:100%;position:absolute;top:235px;left:5px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="view3_2" id="controlPlace10_2" style="position:absolute;left:5px;width:100%;height:23%;top:594px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="hrDialog" id="controlPlace1_3" style="position:absolute;top:584px;left:223px;" />
</layout>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_22" >
<layout id="layout1_22" src="applyDis.xls" style="height:246px;width:100%;position:relative;left:50px;" type="cell.excel" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="aSSIGNEDMANUFACTUREID" ref="data('dataMain')/aSSIGNEDMANUFACTUREID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="pRODUCTMANUFACTUREID" ref="data('dataMain')/pRODUCTMANUFACTUREID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="pRODUCTNAME" readonly="true" ref="data('dataMain')/pRODUCTNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="dETECTIONOBJECTTYPE" ref="data('dataMain')/dETECTIONOBJECTTYPE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="dEVICETYPE" ref="data('dataMain')/dEVICETYPE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="bUSINESSID" ref="data('dataMain')/bUSINESSID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="lINEID" readonly="true" ref="data('dataMain')/lINEID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="dECTIONBASEDONNAME" readonly="true" ref="data('dataMain')/dECTIONBASEDONNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="aPPLICATIONDATE" readonly="true" ref="data('dataMain')/aPPLICATIONDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="eXPECTENDINGDATE" readonly="true" ref="data('dataMain')/eXPECTENDINGDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="tESTINGREQUIREMENTS" readonly="true" ref="data('dataMain')/tESTINGREQUIREMENTS" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_22" label-ref="data('dataMain')/mANUFACTUREIDCNAME" label-separator="," readonly="true" ref="data('dataMain')/aSSIGNEDMANUFACTUREID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel1_22" ref="mANUFACTUREIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default1_22" ref="AFC_MANUFACTURER_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="afcData" id="default2_22" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default14_23" ref="AFC_MANUFACTURER_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default15_23" ref="mANUFACTUREIDCNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect2_22" label-ref="data('dataMain')/wtName" label-separator="," readonly="true" ref="data('dataMain')/pRODUCTMANUFACTUREID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel2_22" ref="mANUFACTUREIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default3_22" ref="AFC_MANUFACTURER_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="dataMain" id="default4_22" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default17_23" ref="mANUFACTUREIDCNAME" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default18_23" ref="AFC_MANUFACTURER_INFO" visible="false" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect3_22" label-separator="," readonly="true" ref="data('dataMain')/dETECTIONOBJECTTYPE" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel3_22" ref="dETECTIONOBJECTCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default5_22" ref="DETECTION_OBJECT_TYPE" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="detObjType" id="default6_22" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default20_23" ref="DETECTION_OBJECT_TYPE" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default21_23" ref="dETECTIONOBJECTCNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect4_22" label-ref="data('dataMain')/dEVICETYPECNAME" label-separator="," readonly="true" ref="data('dataMain')/dEVICETYPE" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel4_22" ref="dEVICETYPECNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default7_22" ref="dEVICETYPE" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="deviceTypeCodeData" id="default8_22" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default28_23" ref="dEVICETYPE" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default29_23" ref="dEVICETYPECNAME" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default30_23" ref="DEVICE_TYPE_CODE" visible="false" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect5_22" label-ref="data('dataMain')/bUSINESSIDCNAME" label-separator="," readonly="true" ref="data('dataMain')/bUSINESSID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel5_22" ref="bUSINESSIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default9_22" ref="BUSINESS_TYPE_CODE" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="businessData" id="default10_22" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default26_23" ref="BUSINESS_TYPE_CODE" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default27_23" ref="bUSINESSIDCNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect6_22" label-separator="," value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel6_22" ref="" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default11_22" ref="" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default12_22" />
</xhtml:div>
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_24" >
<layout id="layout1_24" src="quality.xls" style="height:220px;width:100%;position:relative;left:50px;" type="cell.excel" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="pROJECTNAME" ref="data('pData')/pROJECTNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTPERSON" ref="data('pData')/cONTACTPERSON" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTMOBILE" ref="data('pData')/cONTACTMOBILE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTTELEPHONE" ref="data('pData')/cONTACTTELEPHONE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTEMAIL" ref="data('pData')/cONTACTEMAIL" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="nOTIFYTYPE" ref="data('pData')/nOTIFYTYPE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="pROJECTDATE" readonly="true" ref="data('pData')/pROJECTDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="eNDINGDATE" readonly="true" ref="data('pData')/eNDINGDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="mAKEDATE" readonly="true" ref="data('pData')/mAKEDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="eXECUTESTATE" ref="data('pData')/eXECUTESTATE" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_24" label-ref="data('pData')/cname2" label-separator="," readonly="true" ref="data('pData')/aSSIGNEDMANUFACTUREID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel1_24" ref="mANUFACTUREIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default1_24" ref="AFC_MANUFACTURER_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="afcData" id="default2_24" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default6_24" ref="AFC_MANUFACTURER_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default7_24" ref="mANUFACTUREIDCNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect2_24" label-ref="data('pData')/cname1" label-separator="," ref="data('pData')/mANUFACTUREID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel2_24" ref="mANUFACTUREIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default3_24" ref="AFC_MANUFACTURER_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="afcData" id="default4_24" independence="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default9_24" ref="AFC_MANUFACTURER_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default10_24" ref="mANUFACTUREIDCNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect3_24" label-separator="," ref="data('pData')/nOTIFYTYPE" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel3_24" ref="nOTIFYTYPECNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default11_24" ref="NOTIFY_TYPE_CODE" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="notifyTypeData" id="default12_24" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default16_24" ref="NOTIFY_TYPE_CODE" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default17_24" ref="nOTIFYTYPECNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect4_24" label-separator="," onCloseup="bizActivity4.gridSelect4_24Closeup" readonly="true" ref="data('pData')/bUSINESSID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel4_24" ref="bUSINESSIDCNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default13_24" ref="BUSINESS_TYPE_CODE" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="businessData" id="default14_24" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default21_24" ref="BUSINESS_TYPE_CODE" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default22_24" ref="bUSINESSIDCNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect5_24" label-separator="," ref="data('pData')/tESTSCHEMEID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel5_24" ref="tESTSCHEMENAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default23_24" ref="TEST_SCHEME_BASE_INFO" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="testSchemeData" id="default24_24" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default26_24" ref="TEST_SCHEME_BASE_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default27_24" ref="tESTSCHEMENAME" />
</xforms:itemset>
</xhtml:div>
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="textarea1_24" ref="data('pData')/mEMO" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="input1_24" readonly="true" ref="data('pData')/lINEID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="input1_3" ref="data('pData')/lINEID" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect2_3" label-ref="data('pData')/name1" label-separator="," ref="data('pData')/qAMANAGER" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default4_3" ref="oPERATORNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default12_3" ref="pROJECTMEMBERID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="projectMember" id="default13_3" independence="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default7_4" ref="pROJECTMEMBERID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default8_4" ref="oPERATORNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect3_3" label-ref="data('pData')/name2" label-separator="," ref="data('pData')/tESTMANAGER" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default14_3" ref="oPERATORNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default15_3" ref="pROJECTMEMBERID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="projectMember" id="default16_3" independence="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default10_4" ref="pROJECTMEMBERID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default11_4" ref="oPERATORNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-autofill" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect4_3" label-ref="data('pData')/name3" label-separator="," ref="data('pData')/tECHMANAGER" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default23_3" ref="oPERATORNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default24_3" ref="pROJECTMEMBERID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" data="projectMember" id="default25_3" independence="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default13_4" ref="pROJECTMEMBERID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default14_4" ref="oPERATORNAME" />
</xforms:itemset>
</xhtml:div>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="input1_6" ref="data('pData')/name4" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="input2_6" ref="data('pData')/excuteDsr" />
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view3_2" >
<layout id="layout3_2" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbars1_2" id="controlPlace11_2" style="position:absolute;width:400px;height:25px;top:14px;left:0;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="grid1_10" id="controlPlace1_10" style="height:100%;width:98%;position:absolute;top:59px;left:0px;" />
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1_2" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="projectMemberData" id="navigatorBar1_2" mode="IMG_TXT_LR" >
<item >
<xforms:trigger xmlns:xforms="http://www.justep.com/xforms" appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" >
<![CDATA[新建]]>
</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" >
<![CDATA[tiaozhengjihua.insertTriggerClick(event)]]>
</xforms:script>
</xforms:action>
</xforms:trigger>
</item>
<item id="barItem2_2" name="save-item" />
<item id="barItem4_2" name="refresh-item" />
<item id="customBarItem1_2" name="filter-pro-item" />
<item id="customBarItem2_2" name="separator" />
<item id="barItem5_2" name="first-item" />
<item id="barItem6_2" name="pre-item" />
<item id="barItem7_2" name="next-item" />
<item id="barItem8_2" name="last-item" />
<item id="customBarItem3_2" name="separator" />
<item id="customPageItem1_2" name="custom-page-item" />
</xui:bar>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="projectMemberData" id="grid1_10" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn5_10" label="序号" ref="calculate0" show-index="true" type="ed" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn3_10" label="姓名" ref="oPERATORNAME" type="ed" width="121px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4_10" label="岗位" ref="pOSITIONIDCNAME" type="ed" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2_10" label="项目名称" ref="pROJECTNAME" type="ed" width="197px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn6_10" label="任务名称" ref="tASKNAME" type="ed" width="194px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn7_10" label="计划占用起始日期时间" ref="aCTUALSTARTDATE" type="ed" width="181px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn8_10" label="计划占用结束日期时间" ref="aCTUALENDINGDATE" type="ed" width="175px" />
</xhtml:div>
</xui:view>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/windowDialog.xbl.xml#windowDialog" height="300px" id="hrDialog" modal="true" onClose="tiaozhengjihua.hrDialogClose" onReceive="tiaozhengjihua.hrDialogReceive" title="" url="/UI/metrodetection/detection_Process_Related/process/detectionManager/projectMemberDialog.w" width="400px" />
</xui:view>
</xui:view>
   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
   <layout id="layout1" style="width:1012px;height:100%;"  xui:update-mode="merge"/>
    <xui:place xmlns:xui="http://www.justep.com/xui" control="view3_7" id="controlPlace4_7" style="width:1108px;height:528px;" xui:parent="layout1" xui:update-mode="insert" />
   <place id="controlPlace7" style="width:24px;top:229px;left:893px;"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_3" src="bizActivity4.js" xui:parent="rsMain" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_1" src="tiaozhengjihua.js" xui:parent="rsMain" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_2_1" src="planJS.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>