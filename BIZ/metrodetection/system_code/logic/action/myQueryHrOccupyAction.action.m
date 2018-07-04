<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryHrOccupyAction" global="false" procedure="myQueryHrOccupyProcedure"><label language="zh_CN">自建技术查看人员信息Action</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="HR_BASE_INFO"/>  
    <private name="select" type="String" value="HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,HR_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,case when HR_BASE_INFO.oPERATORSTATE = 1 then '正常' when HR_BASE_INFO.oPERATORSTATE = 2 then '工作' when HR_BASE_INFO.oPERATORSTATE = 3 then '病假' when HR_BASE_INFO.oPERATORSTATE = 4 then '年假' when HR_BASE_INFO.oPERATORSTATE = 5 then '事假' when HR_BASE_INFO.oPERATORSTATE = 6 then '公出' when HR_BASE_INFO.oPERATORSTATE = 7 then '离职' end as oPERATORSTATE"/>  
    <private name="from" type="String" value="HR_BASE_INFO HR_BASE_INFO  optional  join HR_OCCUPY_INFO HR_OCCUPY_INFO on HR_BASE_INFO = HR_OCCUPY_INFO.oPERATORID optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on HR_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_TASK_INFO.pROJECTID = TEST_PROJECT_INFO optional  join HR_SKILL_INFO HR_SKILL_INFO on HR_BASE_INFO = HR_SKILL_INFO.oPERATORID optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on HR_SKILL_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on HR_SKILL_INFO.aPPLYFOROBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND HR_SKILL_INFO.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on HR_SKILL_INFO.aPPLYFORRANGE = DETECTION_RANGE_TYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_resource/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="HR_BASE_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>