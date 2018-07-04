<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" >

  <div id="mdDefault" xui:update-mode="delete"/>
  <div id="rootView" xui:update-mode="delete"/>
  <div id="rsMain" xui:update-mode="delete"/>
    <div id="mdDefault" xui:update-mode="insert" xui:parent="" />
    <div id="rootView" xui:update-mode="insert" xui:parent="" />
    <div id="rsMain" xui:update-mode="insert" xui:parent="" />
    <div id="mdDefault" xui:update-mode="insert" xui:parent="" />
    <div id="rootView" xui:update-mode="insert" xui:parent="" />
    <div id="rsMain" xui:update-mode="insert" xui:parent="" />
    <div id="mdDefault" xui:update-mode="insert" xui:parent="" />
    <div id="rootView" xui:update-mode="insert" xui:parent="" />
    <div id="rsMain" xui:update-mode="insert" xui:parent="" />
    <div id="mdDefault" xui:update-mode="insert" xui:parent="" />
    <div id="rootView" xui:update-mode="insert" xui:parent="" />
    <div id="rsMain" xui:update-mode="insert" xui:parent="" />
    <div id="mdDefault" xui:update-mode="insert" xui:parent="" />
    <div id="rootView" xui:update-mode="insert" xui:parent="" />
    <div id="rsMain" xui:update-mode="insert" xui:parent="" />
    <xforms:model xmlns:xforms="http://www.justep.com/xforms" id="model1" style="height:auto;left:563px;top:18px;" xui:update-mode="insert" xui:parent="" >
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="testSchemeBaseInfoD" concept="TEST_SCHEME_BASE_INFO" store-type="simple" auto-new="false" >
<creator id="default1" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_BASE_INFOAction" />
<reader id="default2" action="/metrodetection/system_code/logic/action/myQuerylist" />
<writer id="default3" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_BASE_INFOAction" />
</data>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="dectionBaseInfoD" concept="DECTION_BASED_ON_INFO" store-type="simple" >
<creator id="default7" action="/metrodetection/system_code/logic/action/createDECTION_BASED_ON_INFOAction" />
<reader id="default8" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_ON_INFOAction" />
<writer id="default9" action="/metrodetection/system_code/logic/action/saveDECTION_BASED_ON_INFOAction" />
</data>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="businessTypeCodeD" concept="BUSINESS_TYPE_CODE" store-type="simple" >
<creator id="default10" action="/metrodetection/system_code/logic/action/createBUSINESS_TYPE_CODEAction" />
<reader id="default11" action="/metrodetection/system_code/logic/action/queryBUSINESS_TYPE_CODEAction" />
<writer id="default12" action="/metrodetection/system_code/logic/action/saveBUSINESS_TYPE_CODEAction" />
</data>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="validStateCodeD" concept="VALID_STATE_CODE" store-type="simple" >
<creator id="default13" action="/metrodetection/system_code/logic/action/createVALID_STATE_CODEAction" />
<reader id="default14" action="/metrodetection/system_code/logic/action/queryVALID_STATE_CODEAction" />
<writer id="default15" action="/metrodetection/system_code/logic/action/saveVALID_STATE_CODEAction" />
</data>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="testSchemeCaseInfoD" concept="TEST_SCHEME_CASE_INFO" store-type="simple" >
<creator id="default16" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_CASE_INFOAction" />
<reader id="default17" action="/metrodetection/system_code/logic/action/myQueryTestBaseCaseInfoAction" />
<writer id="default18" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_CASE_INFOAction" />
</data>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="testCaseBaseInfoD" concept="TEST_CASE_BASE_INFO" onAfterRefresh="hgfash.testCaseBaseInfoDAfterRefresh" limit="-1" >
<creator id="default19" action="/metrodetection/system_code/logic/action/createTEST_CASE_BASE_INFOAction" />
<reader id="default20" action="/metrodetection/system_code/logic/action/myTestCaseBaseDectionInfoAction" />
<writer id="default21" action="/metrodetection/system_code/logic/action/saveTEST_CASE_BASE_INFOAction" />
<calculate-relation relation="checkBox" id="calculate-relation1" />
<calculate-relation relation="serialNumber" id="calculate-relation2" />
<calculate-relation relation="calmark" id="calculate-relation3" type="xsd:string" />
</data>
<data component="/UI/system/components/data.xbl.xml#data" data-type="xml" columns="businessId,businessStage,businessStageName" src="" auto-load="true" id="businessCD" auto-new="false" store-type="simple" confirm-refresh="false" >
<rows xmlns="" id="default30" >
<row id="default31" >
<cell id="default32" />
<cell id="default33" />
<cell id="default34" />
</row>
</rows>
</data>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="businessStageD" concept="BUSINESS_STAGE_CODE" store-type="simple" >
<creator id="default35" action="/metrodetection/system_code/logic/action/createBUSINESS_STAGE_CODEAction" />
<reader id="default38" action="/metrodetection/system_code/logic/action/queryBUSINESS_STAGE_CODEAction" />
<writer id="default39" action="/metrodetection/system_code/logic/action/saveBUSINESS_STAGE_CODEAction" />
</data>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="indexAndRelationD" concept="RELATIONSHIP_INDEX_AND_CASE" confirm-refresh="false" store-type="simple" >
<reader id="default43" action="/metrodetection/system_code/logic/action/queryRELATIONSHIP_INDEX_AND_CASEAction" />
</data>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" id="action1" ev:event="onload" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1" >
<![CDATA[hgfash.model1Load(event)]]>
</xforms:script>
</xforms:action>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="dataMain" concept="TEST_APPLICATION_INFO" confirm-refresh="false" store-type="simple"><reader id="default46" action="/metrodetection/system_code/logic/action/queryTEST_APPLICATION_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="recurrenceSchemeD" concept="RECURRENCE_TEST_SCHEME" store-type="simple" confirm-refresh="false"><reader id="default47" action="/metrodetection/system_code/logic/action/queryRECURRENCE_TEST_SCHEMEAction"></reader></data></xforms:model>
    <xui:view xmlns:xui="http://www.justep.com/xui" id="rootView" xui:update-mode="insert" xui:parent="" >
<xui:layout xmlns:xui="http://www.justep.com/xui" style="height:100%;width:100%" id="rootLayout" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="view1" id="controlPlace1" style="height:100%;width:100%;" />
</xui:layout>
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" id="view1" class="xui-container" >
<layout type="absolute" style="position:relative;" id="layout1" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbars1" id="controlPlace2" style="position:absolute;width:400px;top:5px;height:25px;left:5px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="testSchemeP" id="controlPlace3" style="position:absolute;width:24px;top:134px;left:436px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="input1" id="controlPlace4" style="position:absolute;left:104px;top:79px;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label1" class="xui-label" style="position:absolute;position:absolute;left:24px;top:82px;" >





检测方案名称</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label9" class="xui-label" style="position:absolute;color:#FF0000;width:10px;position:absolute;position:absolute;left:16px;top:82px;" >





*</xhtml:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="gridSelect1" id="controlPlace5" style="position:absolute;left:370px;top:75px;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label4" class="xui-label" style="position:absolute;width:65px;position:absolute;left:302px;top:76px;" >





检测依据ID</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:295px;top:77px;" >





*</xhtml:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="gridSelect2" id="controlPlace6" style="position:absolute;top:105px;left:103px;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label3" class="xui-label" style="position:absolute;width:55px;position:absolute;left:49px;top:108px;" >





业务类型</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:42px;top:108px;" >





*</xhtml:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="gridSelect3" id="controlPlace7" style="position:absolute;left:370px;top:106px;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label6" class="xui-label" style="position:absolute;width:55px;position:absolute;left:314px;top:110px;" >





有效状态</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;position:absolute;left:306px;top:111px;" >





*</xhtml:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="textarea2" id="controlPlace9" style="position:absolute;height:37px;left:104px;width:421px;top:162px;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label5" class="xui-label" style="position:absolute;position:absolute;left:25px;top:134px;" >





制作日期时间</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label12" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:17px;top:134px;" >





*</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label2" class="xui-label" style="position:absolute;position:absolute;left:25px;top:165px;" >





检测方案描述</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label14" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:13px;top:165px;" >





*</xhtml:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="input2" id="controlPlace10" style="position:absolute;left:102px;top:134px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbars3" id="controlPlace8" style="position:absolute;left:5px;height:37px;top:210px;width:365px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="testCaseGrid" id="controlPlace12" style="position:absolute;left:5px;top:253px;width:905px;height:248px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="gridSelect4" id="controlPlace13" style="position:absolute;top:216px;left:314px;" />
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label7" class="xui-label" style="position:absolute;width:52px;position:absolute;left:261px;top:220px;" >





业务阶段</xhtml:label>
<xhtml:label xmlns:xhtml="http://www.w3.org/1999/xhtml" id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;position:absolute;position:absolute;top:220px;left:250px;" >





*</xhtml:label>
<xui:place xmlns:xui="http://www.justep.com/xui" control="relationWD" id="controlPlace11" style="position:absolute;top:349px;left:838px;" />
</layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" process="testSchemeP" mode="IMG_TXT_LR" >
<item name="back-process-item" id="barItem1" />
<item name="advance-process-item" id="barItem2" />
<item name="suspend-process-item" id="barItem4" />
<item name="abort-process-item" id="barItem5" />
<item name="process-chart-item" id="barItem7" />
<item name="execute-list-item" id="customBarItem1" />
</xui:bar>
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="testSchemeBaseInfoD" >
<item id="customBarItem3" />
<item name="refresh-item" id="barItem11" />
</xui:bar>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true" data-type="xml" dialog-window="/UI/system/service/process/dialogs/processDialog.w" dialog-height="480" dialog-width="600" id="testSchemeP" data="testSchemeBaseInfoD" auto-filter="false" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input1" ref="data('testSchemeBaseInfoD')/tESTSCHEMENAME" readonly="true" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('testSchemeBaseInfoD')/dECTIONBASEDONID" label-ref="data('testSchemeBaseInfoD')/dECTIONBASEDONNAME" readonly="true" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" ref="dECTIONBASEDONNAME" id="default4" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" ref="DECTION_BASED_ON_INFO" id="default5" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default6" data="dectionBaseInfoD" auto-load-data="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="DECTION_BASED_ON_INFO" visible="false" id="default22" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="dECTIONBASEDONNAME" id="default23" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('testSchemeBaseInfoD')/bUSINESSID" label-ref="data('testSchemeBaseInfoD')/bUSINESSIDCNAME" readonly="true" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" ref="bUSINESSIDCNAME" id="default24" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" ref="BUSINESS_TYPE_CODE" id="default25" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default26" data="businessTypeCodeD" auto-load-data="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="BUSINESS_TYPE_CODE" visible="false" id="default36" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="bUSINESSIDCNAME" id="default37" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('testSchemeBaseInfoD')/vALIDSTATE" label-ref="data('testSchemeBaseInfoD')/vALIDSTATECNAME" readonly="true" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" ref="vALIDSTATECNAME" id="default27" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" ref="VALID_STATE_CODE" id="default28" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default29" data="validStateCodeD" auto-load-data="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="VALID_STATE_CODE" visible="false" id="default44" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="vALIDSTATECNAME" id="default45" />
</xforms:itemset>
</xhtml:div>
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" ref="data('testSchemeBaseInfoD')/tESTSCHEMEDESC" id="textarea2" readonly="true" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input2" ref="data('testSchemeBaseInfoD')/mAKEDATETIME" readonly="true" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar2" data="testSchemeCaseInfoD" >
<item id="barItem12" />
<item name="refresh-item" id="barItem14" />
</xui:bar>
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar3" data="testCaseBaseInfoD" >
<item name="filter-pro-item" id="customBarItem2" />
</xui:bar>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="testCaseGrid" data="testCaseBaseInfoD" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn7" ref="checkBox" label="#master_checkbox" type="ch" width="23px" align="center" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn8" ref="serialNumber" label="序号" type="ro" width="31px" align="center" show-index="true" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1" ref="tESTCASEVER" label="测试用例版本" type="ro" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2" ref="tESTCASEID" label="测试用例ID" type="ro" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn3" ref="tESTCASENAME" label="测试用例名称" type="ro" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4" ref="dETECTIONOBJECTCNAME" label="对象类别" type="ro" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn5" ref="dEVICETYPECNAME" label="检测对象" type="ro" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn6" ref="dECTIONBASEDONNAME" label="检测依据文件名称" type="ro" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn9" ref="calmark" label="用例指标" type="html" width="100px" onRender="hgfash.testCaseGrid_calmarkRender" />
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('businessCD')/businessStage" label-ref="data('businessCD')/businessStageName" readonly="true" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" ref="bUSINESSSTAGECNAME" id="default40" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" ref="bUSINESSSTAGE" id="default41" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default42" data="businessStageD" auto-load-data="true" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="bUSINESSSTAGE" visible="false" id="default51" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="bUSINESSSTAGECNAME" id="default52" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="子用例和指标映射信息" width="730px" height="400px" modal="true" id="relationWD" url="/UI/metrodetection/testing_standard/process/testscheme_baseinfo/relationIndex.w" left="238px" />
</xui:view>
</xui:view>
    <xui:resource xmlns:xui="http://www.justep.com/xui" id="resource1" xui:update-mode="insert" xui:parent="" >
<xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript2" src="hgfash.js" />
</xui:resource>

</window>