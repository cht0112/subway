<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryProjectMemberAction" global="false" procedure="myQueryProjectMemberProcedure">
<label language="zh_CN">自建项目成员查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_PROJECT_MEMBER_INFO"/>  
    <private name="select" type="String" value="TEST_PROJECT_MEMBER_INFO,TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID as pROJECTMEMBERID,TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO as aPPLICATION_NO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO.pOSITIONID as pOSITIONID,HR_OCCUPY_INFO.oCCUPYSTARTDATETIME as pCCUPYSTARTDATETIME,HR_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME,POSITION_TYPE_CODE.pOSITIONIDCNAME as pOSITIONIDCNAME"/>  
    <private name="from" type="String" value="TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO  optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = TEST_PROJECT_INFO.aPPLICATIONNO optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_PROJECT_INFO = TEST_PROJECT_TASK_INFO.pROJECTID optional  join HR_OCCUPY_INFO HR_OCCUPY_INFO on HR_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID optional  join POSITION_TYPE_CODE POSITION_TYPE_CODE on POSITION_TYPE_CODE = HR_BASE_INFO.pOSITIONID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_PROJECT_MEMBER_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryProjectMemberForPlanAction" global="false" procedure="myQueryProjectMemberForPlanProcedure">
<label language="zh_CN">查询项目成员2</label>
 <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_PROJECT_MEMBER_INFO"/>  
    <private name="select" type="String" value="TEST_PROJECT_MEMBER_INFO,TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID as pROJECTMEMBERID,TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO as aPPLICATION_NO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO.pOSITIONID as pOSITIONID,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,POSITION_TYPE_CODE.pOSITIONIDCNAME as pOSITIONIDCNAME,TEST_PROJECT_TASK_INFO,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME,HR_OCCUPY_INFO,HR_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,HR_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TEST_PROJECT_TASK_INFO.aCTUALSTARTDATE as aCTUALSTARTDATE,TEST_PROJECT_TASK_INFO.aCTUALENDINGDATE as aCTUALENDINGDATE"/>  
    <private name="from" type="String" value="TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO  optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = TEST_PROJECT_INFO.aPPLICATIONNO optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID optional  join POSITION_TYPE_CODE POSITION_TYPE_CODE on POSITION_TYPE_CODE = HR_BASE_INFO.pOSITIONID optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_PROJECT_INFO = TEST_PROJECT_TASK_INFO.pROJECTID AND TEST_PROJECT_TASK_INFO.pLANOPERATORID = HR_BASE_INFO optional  join HR_OCCUPY_INFO HR_OCCUPY_INFO on HR_BASE_INFO = HR_OCCUPY_INFO.oPERATORID AND TEST_PROJECT_TASK_INFO.tASKID = HR_OCCUPY_INFO.tESTTASKID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_PROJECT_MEMBER_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryProjectMemberActionForSel" global="false" procedure="myQueryProjectMemberActionForSelProcedure"><label language="zh_CN">下拉表查询项目成员</label>
 <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_PROJECT_MEMBER_INFO"/>  
    <private name="select" type="String" value="TEST_PROJECT_MEMBER_INFO.*,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>  
    <private name="from" type="String" value="TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO  optional  join HR_BASE_INFO HR_BASE_INFO on TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID = HR_BASE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_PROJECT_MEMBER_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>