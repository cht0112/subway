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
   <xforms:model id="mdDefault" style="width:208px;top:224px;left:832px;height:277px;"  xui:update-mode="merge"/>
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
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="PLAN_VIEW" id="vData" is-tree="true" onValueChanged="bizActivity4.vDataValueChanged" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createPLAN_VIEWAction" id="default13_2" />
<reader action="/metrodetection/system_code/logic/action/queryPLAN_VIEWAction" id="default14_2" />
<writer action="/metrodetection/system_code/logic/action/savePLAN_VIEWAction" id="default15_2" />
<tree-option id="default16_2" parent-relation="fPARENTID" />
<rule id="dataBizRule1_2" readonly="data('vData')/fPARENTID='' or data('vData')/fPARENTID='root'" relation="sTARTTIME" />
<calculate-relation id="calculate-relation1_1" relation="calculate0" />
<rule id="dataBizRule2_2" readonly="data('vData')/fPARENTID='' or data('vData')/fPARENTID='root'" relation="eNDTIME" />
<rule id="dataBizRule3_2" readonly="data('vData')/fPARENTID='' or data('vData')/fPARENTID='root'" relation="qZRW" />
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
<rule id="dataBizRule4_1" relation="qAMANAGER" required="true()" />
<rule id="dataBizRule5_1" relation="tESTMANAGER" required="true()" />
<rule id="dataBizRule6_1" relation="tECHMANAGER" required="true()" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="OPERATOR_PASSWORD" data-type="json" id="personData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createOPERATOR_PASSWORDAction" id="default1_1" />
<reader action="/metrodetection/system_code/logic/action/queryOPERATOR_PASSWORDAction" id="default2_1" />
<writer action="/metrodetection/system_code/logic/action/saveOPERATOR_PASSWORDAction" id="default11_1" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_MEMBER_INFO" data-type="xml" id="projectMember" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_MEMBER_INFOAction" id="default4_2" />
<reader action="/metrodetection/system_code/logic/action/myQueryProjectMemberAction" id="default5_2" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_MEMBER_INFOAction" id="default6_2" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_TASK_INFO" data-type="json" id="taskData" onValueChanging="bizActivity4.taskDataValueChanging" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
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
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="CASE_HOUSE" data-type="json" id="caseHouseData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createCASE_HOUSEAction" id="default29_1" />
<reader action="/metrodetection/system_code/logic/action/queryCASE_HOUSEAction" id="default30_1" />
<writer action="/metrodetection/system_code/logic/action/saveCASE_HOUSEAction" id="default31_1" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_5" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_5" >
<![CDATA[qualityNotice.mdDefaultLoad(event)]]>
</xforms:script>
</xforms:action>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_MEMBER_INFO" data-type="xml" id="member" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_MEMBER_INFOAction" id="default1_11" />
<reader action="/metrodetection/system_code/logic/action/myQueryProjectMemberForPlanAction" id="default2_11" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_MEMBER_INFOAction" id="default3_11" />
<calculate-relation id="calculate-relation1_11" relation="calculate1" />
</data>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
   <data id="afcData" store-type="simple"  xui:update-mode="merge"/>
   <xui:view id="rootView" class="xui-container"  xui:update-mode="merge"/>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view3_7" xui:parent="rootView" xui:update-mode="insert" >
<layout id="layout3_7" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="view2_7" id="controlPlace3_7" style="width:1017px;height:456px;position:absolute;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="memberView" id="controlPlace1_3" style="position:absolute;height:209px;width:698px;top:560px;left:49px;" />
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
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view2_7" >
<layout id="layout2_7" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_22" id="controlPlace1_22" style="width:100%;position:absolute;top:5px;height:246px;left:50px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_24" id="controlPlace1_24" style="height:220px;width:100%;position:absolute;top:218px;left:50px;" />
</layout>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_22" >
<layout id="layout1_22" src="excelLayout32.xls" style="height:246px;width:100%;position:relative;left:50px;" type="cell.excel" />
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
<layout id="layout1_24" src="excelLayout34.xls" style="height:220px;width:100%;position:relative;left:50px;" type="cell.excel" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="pROJECTNAME" ref="data('pData')/pROJECTNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTPERSON" ref="data('pData')/cONTACTPERSON" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTMOBILE" ref="data('pData')/cONTACTMOBILE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTTELEPHONE" ref="data('pData')/cONTACTTELEPHONE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="cONTACTEMAIL" ref="data('pData')/cONTACTEMAIL" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" id="nOTIFYTYPE" ref="data('pData')/nOTIFYTYPE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="pROJECTDATE" ref="data('pData')/pROJECTDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="eNDINGDATE" ref="data('pData')/eNDINGDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-autofill" format="yyyy-MM-dd" id="mAKEDATE" ref="data('pData')/mAKEDATE" />
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
</xui:view>
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="memberView" >
<layout id="layout1_3" style="position:relative;" type="absolute" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="grid1_3" id="controlPlace2_3" style="position:absolute;height:100%;left:0px;top:54px;width:143%;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-label" id="label2_3" style="position:absolute;left:0px;width:100%;background-color:#F2FFFD;height:20px;text-align:center;font-style:inherit;color:#000000;font-family:黑体;font-size:15px;top:30px;" >
<![CDATA[项目成员]]>
</xhtml:label>
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="member" id="grid1_3" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn5_11" label="序号" ref="calculate1" show-index="true" type="ed" width="62px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_3" label="姓名" ref="oPERATORNAME" type="ed" width="109px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn3_3" label="岗位" ref="pOSITIONIDCNAME" type="ed" width="107px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_11" label="项目名称" ref="pROJECTNAME" type="ed" width="163px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2_11" label="任务名称" ref="tASKNAME" type="ed" width="194px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn3_11" label="计划占用起始日期时间" ref="oCCUPYSTARTDATETIME" type="ed" width="149px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4_11" label="计划占用结束日期时间" ref="oCCUPYENDDATETIME" type="ed" width="186px" />
</xhtml:div>
</xui:view>
</xui:view>
   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
   <layout id="layout1" style="width:1012px;height:100%;"  xui:update-mode="merge"/>
    <xui:place xmlns:xui="http://www.justep.com/xui" control="view3_7" id="controlPlace4_7" style="width:1108px;height:528px;" xui:parent="layout1" xui:update-mode="insert" />
   <place id="controlPlace7" style="width:24px;top:229px;left:893px;"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_3" src="bizActivity4.js" xui:parent="rsMain" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_5" src="qualityNotice.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>