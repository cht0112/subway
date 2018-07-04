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
   <xforms:model id="mdDefault" style="width:237px;height:auto;top:384px;left:214px;"  xui:update-mode="merge"/>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TOOL_OCCUPY_INFO" data-type="xml" id="detectionToolD" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTOOL_OCCUPY_INFOAction" id="default1_2" />
<reader action="/metrodetection/system_code/logic/action/querytoolOccupyAction" id="default2_2" />
<writer action="/metrodetection/system_code/logic/action/saveTOOL_OCCUPY_INFOAction" id="default3_2" />
<calculate-relation id="calculate-relation2_1" relation="calc" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_OCCUPY_INFO" data-type="xml" id="roomD" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createROOM_OCCUPY_INFOAction" id="default4_2" />
<reader action="/metrodetection/system_code/logic/action/queryRoomOccupyAction" id="default5_2" />
<writer action="/metrodetection/system_code/logic/action/saveROOM_OCCUPY_INFOAction" id="default6_2" />
<calculate-relation id="calculate-relation1_1" relation="cal" type="xsd:string" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_TASK_INFO" confirm-refresh="false" data-type="json" id="testTaskD" store-type="grid" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_TASK_INFOAction" id="default4_1" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_ROOM_INFO" confirm-refresh="false" data-type="json" id="detectionRoomD_1" store-type="grid" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction" id="default16_1" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" confirm-refresh="false" data-type="json" id="hrBaseD" store-type="grid" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default65_1" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_TOOL_INFO" confirm-delete="true" confirm-refresh="false" data-type="json" id="toolBaseD" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_INFOAction" id="default258_1" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_3" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_3" >
<![CDATA[(event)]]>
</xforms:script>
</xforms:action>
    <data auto-load="true" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData" concept="CHANGE_APPLY_INFO" data-type="xml" id="biangeng" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction" id="default3_1" />
<reader action="/metrodetection/system_resource/logic/action/MyQuerryNameAction" id="default5_1" />
<writer action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction" id="default6_1" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_INFO" data-type="json" id="bizData1" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction" id="default2_1" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction" id="default11" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction" id="default1_1" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction" id="default1_4" />
<reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default4" />
<writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction" id="default5" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="xbl-loaded" id="action1_15" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_15" >
<![CDATA[bgsh.mdDefaultXBLLoaded(event)]]>
</xforms:script>
</xforms:action>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereVersion" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/system/logic/action/queryOrgAction" id="default4_15" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_INFO" data-type="json" id="xiangmu" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction" id="default5_3" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction" id="default6_3" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction" id="default7_3" />
</data>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" data-type="json" id="bizData1_3" store-type="simple" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default13_1" />
</data>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="qualtityV" xui:parent="rootView" xui:update-mode="insert" >
<layout id="layout1_2" style="position:relative;" type="flow" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-tabPanel" component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1_8" style="height:100%;width:100%;" >
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabPage1_8" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel1_8" >
<![CDATA[变更审核]]>
</xui:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_9" id="controlPlace1_9" style="height:100%;width:100%;position:relative;" />
</xui:tab>
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabPage2_8" xforms-select="bgsh.tabPage2_8Select" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel2_8" >
<![CDATA[变更申请]]>
</xui:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1_8" id="controlPlace1_8" style="height:100%;width:100%;position:relative;" />
</xui:tab>
</xhtml:div>
</layout>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_APPLY_NOAPPLYNO2" ref="data('biangeng')/CHANGE_APPLY_NOAPPLYNO" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_TITLETITLE2" ref="data('biangeng')/CHANGE_TITLETITLE" style="width:450px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="PROJECT_IDID2" ref="data('biangeng')/PROJECT_IDID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="PROJECT_NAMENAME2" ref="data('biangeng')/PROJECT_NAMENAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_OBJECTOBJECT2" ref="data('biangeng')/CHANGE_OBJECTOBJECT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_CONTENTCONTENT2" ref="data('biangeng')/CHANGE_CONTENTCONTENT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_REASONREASON2" ref="data('biangeng')/CHANGE_REASONREASON" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="IMPACT_RANGERANGE2" ref="data('biangeng')/IMPACT_RANGERANGE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="POTENTIAL_RISKRISK2" ref="data('biangeng')/POTENTIAL_RISKRISK" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="RESOLVE_RISKRISK2" ref="data('biangeng')/RESOLVE_RISKRISK" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="IMPLEMENTATION_PROCESSPROCESS2" ref="data('biangeng')/IMPLEMENTATION_PROCESSPROCESS" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="RESOURCES_NEEDEDNEEDED2" ref="data('biangeng')/RESOURCES_NEEDEDNEEDED" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" format="yyyy-MM-dd" id="CHANGE_TIMETIME2" ref="data('biangeng')/CHANGE_TIMETIME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="APPLY_PERSONPERSON2" readonly="true" ref="data('biangeng')/APPLY_PERSONPERSON" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" format="yyyy-MM-dd" id="APPLY_DATEDATE2" ref="data('biangeng')/APPLY_DATEDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_APPLY_DOC_NO2" ref="data('biangeng')/CHANGE_APPLY_DOC_NO" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="APPLY_APPROVER2" ref="data('biangeng')/APPLY_APPROVER" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" format="yyyy-MM-dd" id="APPLY_APPROVE_DATE2" ref="data('biangeng')/APPLY_APPROVE_DATE" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_1" label-separator="," onCloseup="bgsq.gridSelect1_1Closeup" ref="data('biangeng')/PROJECT_NAMENAME" style="width:448px;" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default7_1" ref="pROJECTNAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default8_1" ref="pROJECTNAME" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="bizData1" id="default9_1" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default11_2" ref="TEST_PROJECT_INFO" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default12_2" ref="pROJECTNAME" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect2_1" label-separator="," multi-select="true" ref="data('biangeng')/CHANGE_CONTENTCONTENT" style="width:451px;" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default10_1" ref="col_0" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default11_1" ref="col_0" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" id="default12_1" >
<itemset-data xmlns="" id="default23_2" >
<rows xmlns="" id="default24_2" >
<row id="default25_2" >
<cell id="default26_2" >








































检测内容</cell>
</row>
<row id="default27_2" >
<cell id="default28_2" >








































人员分配</cell>
</row>
<row id="default29_2" >
<cell id="default30_2" >








































时间安排</cell>
</row>
<row id="default31_2" >
<cell id="default32_2" >








































系统资源</cell>
</row>
</rows>
</itemset-data>
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default34_2" ref="col_0" />
</xforms:itemset>
</xhtml:div>
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea1_2" ref="data('biangeng')/CHANGE_OBJECTOBJECT" style="height:59px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea2_2" ref="data('biangeng')/CHANGE_REASONREASON" style="height:60px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea3_2" ref="data('biangeng')/IMPACT_RANGERANGE" style="height:66px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea4_2" ref="data('biangeng')/POTENTIAL_RISKRISK" style="height:53px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea5_2" ref="data('biangeng')/RESOLVE_RISKRISK" style="height:53px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea6_2" ref="data('biangeng')/IMPLEMENTATION_PROCESSPROCESS" style="height:44px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea7_2" ref="data('biangeng')/RESOURCES_NEEDEDNEEDED" style="height:37px;" />
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_8" >
<layout id="layout1_8" style="position:relative;" type="flow" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/excelLayout.xbl.xml#excelLayout" id="excelLayout1_8" src="excelLayout42.xls" style="width:100%; height: 100%;" />
</layout>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_APPLY_NOAPPLYNO1" readonly="true" ref="data('biangeng')/CHANGE_APPLY_NOAPPLYNO" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_TITLETITLE1" readonly="true" ref="data('biangeng')/CHANGE_TITLETITLE" style="width:446px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="PROJECT_IDID1" readonly="true" ref="data('biangeng')/PROJECT_IDID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="PROJECT_NAMENAME1" readonly="true" ref="data('biangeng')/PROJECT_NAMENAME" style="width:455px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_OBJECTOBJECT1" readonly="true" ref="data('biangeng')/CHANGE_OBJECTOBJECT" style="width:443px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_CONTENTCONTENT1" readonly="true" ref="data('biangeng')/CHANGE_CONTENTCONTENT" style="width:443px;" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_REASONREASON1" ref="data('biangeng')/CHANGE_REASONREASON" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="IMPACT_RANGERANGE1" ref="data('biangeng')/IMPACT_RANGERANGE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="POTENTIAL_RISKRISK1" ref="data('biangeng')/POTENTIAL_RISKRISK" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="RESOLVE_RISKRISK1" ref="data('biangeng')/RESOLVE_RISKRISK" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="IMPLEMENTATION_PROCESSPROCESS1" ref="data('biangeng')/IMPLEMENTATION_PROCESSPROCESS" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="RESOURCES_NEEDEDNEEDED1" ref="data('biangeng')/RESOURCES_NEEDEDNEEDED" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" disabled="true" format="yyyy-MM-dd" id="CHANGE_TIMETIME1" readonly="true" ref="data('biangeng')/CHANGE_TIMETIME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="APPLY_PERSONPERSON1" readonly="true" ref="data('biangeng')/oPERATORNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" disabled="true" format="yyyy-MM-dd" id="APPLY_DATEDATE1" readonly="true" ref="data('biangeng')/APPLY_DATEDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_APPLY_DOC_NO1" readonly="true" ref="data('biangeng')/CHANGE_APPLY_DOC_NO" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="APPLY_APPROVER1" readonly="true" ref="data('biangeng')/oPERATORNAME1" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" disabled="true" format="yyyy-MM-dd" id="APPLY_APPROVE_DATE1" readonly="true" ref="data('biangeng')/APPLY_APPROVE_DATE" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_11" label-separator="," ref="data('biangeng')/CHANGE_REASONREASON" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default27_11" ref="" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default28_11" ref="" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default29_11" />
</xhtml:div>
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea1_11" readonly="true" ref="data('biangeng')/CHANGE_REASONREASON" style="height:46px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea2_11" readonly="true" ref="data('biangeng')/IMPACT_RANGERANGE" style="height:47px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea3_11" readonly="true" ref="data('biangeng')/POTENTIAL_RISKRISK" style="height:51px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea4_11" readonly="true" ref="data('biangeng')/RESOLVE_RISKRISK" style="height:52px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea5_11" readonly="true" ref="data('biangeng')/IMPLEMENTATION_PROCESSPROCESS" style="height:57px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea6_11" readonly="true" ref="data('biangeng')/RESOURCES_NEEDEDNEEDED" style="height:55px;" />
</xui:view>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view1_9" >
<layout id="layout1_9" style="position:relative;" type="flow" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/excelLayout.xbl.xml#excelLayout" id="excelLayout1_9" src="excelLayout43.xls" style="width:100%; height: 100%;" />
</layout>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="REASON_ASSESSMENTASSESSMENT2" ref="data('biangeng')/REASON_ASSESSMENTASSESSMENT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="RANGE_ASSESSMENTASSESSMENT2" ref="data('biangeng')/RANGE_ASSESSMENTASSESSMENT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="RISK_ASSESSMENTASSESSMENT2" ref="data('biangeng')/RISK_ASSESSMENTASSESSMENT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="PROCESS_ASSESSMENTASSESSMENT2" ref="data('biangeng')/PROCESS_ASSESSMENTASSESSMENT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="RESOURCE_ASSESSMENTASSESSMENT2" ref="data('biangeng')/RESOURCE_ASSESSMENTASSESSMENT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="TIME_ASSESSMENTASSESSMENT2" ref="data('biangeng')/TIME_ASSESSMENTASSESSMENT" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="APPROVAL_STATUSSTATUS2" ref="data('biangeng')/APPROVAL_STATUSSTATUS" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="ACCEPT_OPINIONOPINION2" ref="data('biangeng')/ACCEPT_OPINIONOPINION" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="CHANGE_AUDITOR2" readonly="true" ref="data('biangeng')/oPERATORNAME2" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" format="yyyy-MM-dd" id="CHANGE_AUDIT_DATE2" readonly="true" ref="data('biangeng')/CHANGE_AUDIT_DATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="MEMO2" ref="data('biangeng')/MEMO" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect1_9" label-separator="," ref="data('biangeng')/APPROVAL_STATUSSTATUS" style="width:455px;" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default1_9" ref="col_1" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default2_9" ref="col_0" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" id="default3_9" >
<itemset-data xmlns="" id="default12_11" >
<rows xmlns="" id="default13_11" >
<row id="default14_11" >
<cell id="default15_11" >




















1</cell>
<cell id="default16_11" >




















已审核</cell>
</row>
<row id="default17_11" >
<cell id="default18_11" >




















2</cell>
<cell id="default19_11" >








审核中</cell>
</row>
<row id="default20_11" >
<cell id="default21_11" >















3</cell>
<cell id="default22_11" >




















未审核</cell>
</row>
</rows>
</itemset-data>
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default25_11" ref="col_0" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default26_11" ref="col_1" />
</xforms:itemset>
</xhtml:div>
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea1_9" ref="data('biangeng')/RISK_ASSESSMENTASSESSMENT" style="height:55px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea2_9" ref="data('biangeng')/RESOURCE_ASSESSMENTASSESSMENT" style="height:60px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea3_9" ref="data('biangeng')/REASON_ASSESSMENTASSESSMENT" style="height:53px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea4_9" ref="data('biangeng')/RANGE_ASSESSMENTASSESSMENT" style="height:68px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea5_9" ref="data('biangeng')/PROCESS_ASSESSMENTASSESSMENT" style="height:56px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea6_9" ref="data('biangeng')/TIME_ASSESSMENTASSESSMENT" style="height:56px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea7_9" ref="data('biangeng')/ACCEPT_OPINIONOPINION" style="height:65px;" />
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" id="textarea8_9" ref="data('biangeng')/MEMO" style="height:59px;" />
</xui:view>
</xui:view>
    <xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="biangeng" id="navigatorBar1_1" mode="IMG_TXT_LR" xui:before="processBar1" xui:parent="tbsMain" xui:update-mode="insert" >
<item id="barItem2_1" name="save-item" />
</xui:bar>
   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
   <layout id="layout1" style="height:100%;width:100%;"  xui:update-mode="merge"/>
   <xhtml:div id="borderLayout1" style=" height: 100%;width:100%;"  xui:update-mode="merge"/>
   <top id="borderLayout-top1" size="39px"  xui:update-mode="merge"/>
    <xui:place xmlns:xui="http://www.justep.com/xui" control="qualtityV" id="controlPlace1_2" style="width:100%;height:100%;position:relative;" xui:parent="borderLayout-center1" xui:update-mode="insert" />
   <place id="controlPlace7" style="width:24px;top:95px;left:688px;"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_5" src="jiancehuanjingqueren.js" xui:parent="rsMain" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_7" src="bgsq.js" xui:parent="rsMain" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_15" src="bgsh.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>