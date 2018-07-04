<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="projectMemberListAction" global="false" procedure="projectMemberListProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_PROJECT_MEMBER_INFO"/>  
    <private name="select" type="String" value="TEST_PROJECT_MEMBER_INFO,TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID as PROJECTMEMBERID,TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO as APPLICATION_NO,HR_BASE_INFO.oPERATORNAME as OPERATORNAME,HR_BASE_INFO.pOSITIONID as POSITIONID,HR_OCCUPY_INFO.oCCUPYSTARTDATETIME as PCCUPYSTARTDATETIME,HR_OCCUPY_INFO.oCCUPYENDDATETIME as OCCUPYENDDATETIME,TEST_PROJECT_INFO.pROJECTNAME as PROJECTNAME,TEST_PROJECT_TASK_INFO.tASKID as TASKID,TEST_PROJECT_TASK_INFO.tASKNAME as TASKNAME,POSITION_TYPE_CODE.pOSITIONIDCNAME as POSITIONIDCNAME"/>  
    <private name="from" type="String" value="TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO  optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = TEST_PROJECT_INFO.aPPLICATIONNO optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_PROJECT_INFO = TEST_PROJECT_TASK_INFO.pROJECTID optional  join HR_OCCUPY_INFO HR_OCCUPY_INFO on HR_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = TEST_PROJECT_MEMBER_INFO.pROJECTMEMBERID optional  join POSITION_TYPE_CODE POSITION_TYPE_CODE on POSITION_TYPE_CODE = HR_BASE_INFO.pOSITIONID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String" value="1 = 0"/>  
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