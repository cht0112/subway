<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryScheduleHrOccupyInfoAction" global="false" procedure="myQueryScheduleHrOccupyInfoProcedure">
<label language="zh_CN">自建查询日历人员占用信息</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="HR_OCCUPY_INFO"/>  
    <private name="select" type="String" value="HR_OCCUPY_INFO,HR_OCCUPY_INFO.oPERATORID as oPERATORID,HR_OCCUPY_INFO.tESTTASKID as tESTTASKID,HR_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,HR_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,HR_OCCUPY_INFO.mEMO as mEMO,TEST_PROJECT_TASK_INFO.pROJECTID as pROJECTID,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,HR_SKILL_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME"/>  
    <private name="from" type="String" value="HR_OCCUPY_INFO HR_OCCUPY_INFO  optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on HR_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_TASK_INFO.pROJECTID = TEST_PROJECT_INFO optional  join HR_SKILL_INFO HR_SKILL_INFO on HR_OCCUPY_INFO.oPERATORID = HR_SKILL_INFO.oPERATORID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String" value="HR_OCCUPY_INFO.oCCUPYENDDATETIME &gt;= :currentDate()"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="HR_OCCUPY_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>