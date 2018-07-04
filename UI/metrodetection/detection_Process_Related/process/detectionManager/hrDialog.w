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

   <xforms:model id="model" style="top:161px;height:auto;left:328px;"  xui:update-mode="merge"/>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_APPLICATION_INFO" id="applicationData" store-type="simple" update-mode="whereAll" xui:parent="model" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_APPLICATION_INFOAction" id="default1_5" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_APPLICATION_INFOAction" id="default2_5" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_APPLICATION_INFOAction" id="default3_5" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROLE_ID" id="roleData" store-type="grid" update-mode="whereAll" xui:parent="model" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createROLE_IDAction" id="default5_2" />
<reader action="/metrodetection/system_code/logic/action/myQueryAllRoleOfOperatorAction" id="default6_2" />
<writer action="/metrodetection/system_code/logic/action/saveROLE_IDAction" id="default7_2" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_6" xui:parent="model" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_6" >







hrDialog.modelLoad(event)</xforms:script>
</xforms:action>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROLE_ID" id="rData" store-type="simple" update-mode="whereAll" xui:parent="model" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createROLE_IDAction" id="default3_3" />
<reader action="/metrodetection/system_code/logic/action/queryROLE_IDAction" id="default4_3" />
<writer action="/metrodetection/system_code/logic/action/saveROLE_IDAction" id="default5_3" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_MEMBER_INFO" data-type="json" id="projectMemberData" store-type="simple" update-mode="whereAll" xui:parent="model" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_MEMBER_INFOAction" id="default3_4" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_MEMBER_INFOAction" id="default4_4" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_MEMBER_INFOAction" id="default5_4" />
</data>
   <data id="main" concept="HR_BASE_INFO" update-mode="whereAll"  xui:update-mode="merge"/>
    <creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction" id="default1_6" xui:parent="main" xui:update-mode="insert" />
    <reader action="/metrodetection/system_code/logic/action/myQueryHRInfo" id="default2_6" xui:parent="main" xui:update-mode="insert" />
    <writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction" id="default3_6" xui:parent="main" xui:update-mode="insert" />
    <calculate-relation id="calculate-relation1_2" relation="calIndex" type="xsd:integer" xui:parent="main" xui:update-mode="insert" />
   <xhtml:div id="windowReceiver" onReceive="hrDialog.windowReceiverReceive"  xui:update-mode="merge"/>
   <item id="displayColumnId" value="OPERATOR_NAME"  xui:update-mode="merge"/>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="view2_2" xui:parent="toolbarGridView" xui:update-mode="insert" >
<xui:layout xmlns:xui="http://www.justep.com/xui" id="layout3_1" />
</xui:view>
   <xui:bar id="navigatorBar" style="width:475px;height:34px;"  xui:update-mode="merge"/>
    <item id="customBarItem1_5" xui:parent="navigatorBar" xui:update-mode="insert" />
    <item id="customBarItem11_2" xui:parent="navigatorBar" xui:update-mode="insert" />
   <xhtml:div id="smartFilter" filter-relations="OPERATOR_NAME,OFFICE_ID_CNAME,ROLE_ID,ROLE_NAME,aPPLICATION_NO"  xui:update-mode="merge"/>
   <xhtml:div id="grid" onAfterIndexChanged="hrDialog.gridAfterIndexChanged" onRowCheck="hrDialog.gridRowCheck" onRowClick="hrDialog.gridRowClick"  xui:update-mode="merge"/>
    <xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn1_3" label="姓名" ref="OPERATOR_NAME" type="ed" width="105px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn8_2" label="职位" ref="OFFICE_ID_CNAME" type="ed" width="115px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" align="center" editor="gridSelect9_2" id="gridColumn7_3" label="角色名称" ref="ROLE_NAME" type="select" width="130px" xui:parent="grid" xui:update-mode="insert" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" ext-separator="," id="gridSelect9_2" label-ref="data('main')/ROLE_NAME" label-separator="," onCloseup="hrDialog.gridSelect9_2Closeup" ref="data('main')/ROLEID" value-separator="," >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="xuiLabel9_2" ref="rOLENAME" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default27_2" ref="rowID" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" auto-load-data="true" data="roleData" id="default28_2" >
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default1_4" ref="ROLE_ID" visible="false" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" id="default2_4" ref="rOLENAME" />
</xforms:itemset>
</xhtml:div>
</xui:column>
    <xui:place xmlns:xui="http://www.justep.com/xui" control="view2_2" id="controlPlace4_2" style="width:275px;height:31px;" xui:parent="bl3-c" xui:update-mode="insert" />
   <xhtml:button id="refresh-btn" onclick="hrDialog.refresh_btnClick(event)"  xui:update-mode="merge"/>
   <xhtml:button id="ensure-btn" onclick="hrDialog.ensure_btnClick(event)"  xui:update-mode="merge"/>
   <xui:place id="controlPlace3" style="top:49px;left:656px;"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_1" src="hrDialog.js" xui:parent="resource" xui:update-mode="insert" />

</window>