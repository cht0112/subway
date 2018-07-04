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

    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_9" xui:parent="model" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_9" >
<![CDATA[projectMemberDialog.modelLoad(event)]]>
</xforms:script>
</xforms:action>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_MEMBER_INFO" confirm-delete="false" confirm-refresh="false" data-type="json" direct-delete="true" id="projectMemberData" store-type="simple" update-mode="whereAll" xui:parent="model" xui:update-mode="insert" >
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_MEMBER_INFOAction" id="default3_4" />
<reader action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_MEMBER_INFOAction" id="default4_4" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_MEMBER_INFOAction" id="default5_4" />
</data>
   <data id="main" concept="HR_BASE_INFO"  xui:update-mode="merge"/>
    <reader action="/metrodetection/system_code/logic/action/myQueryHRInfo" id="default1_4" xui:parent="main" xui:update-mode="insert" />
   <xhtml:div id="windowReceiver" onReceive="projectMemberDialog.windowReceiverReceive"  xui:update-mode="merge"/>
   <item id="displayColumnId" value="OPERATOR_NAME"  xui:update-mode="merge"/>
   <xhtml:div id="smartFilter" filter-relations="oPERATORNAME,oFFICEID,pOSITIONID"  xui:update-mode="merge"/>
    <xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn3_3" label="姓名" ref="OPERATOR_NAME" type="ed" width="100px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn5_3" label="岗位" ref="POSITION_ID_CNAME" type="ed" width="114px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn4_3" label="职位" ref="OFFICE_ID_CNAME" type="ed" width="106px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn1_3" label="操作员状态" ref="OPERATORSTATE" type="ed" width="100px" xui:parent="grid" xui:update-mode="insert" />
   <xhtml:button id="ensure-btn" onclick="projectMemberDialog.ensure_btnClick(event)"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_9" src="projectMemberDialog.js" xui:parent="resource" xui:update-mode="insert" />

</window>