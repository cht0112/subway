<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryRoomScheduleAction" global="false" procedure="myQueryRoomScheduleProcedure"><label language="zh_CN">自建查询日历房间占用信息</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="DETECTION_ROOM_INFO"/>  
    <private name="select" type="String" value="ROOM_APPLY_INFO,DETECTION_ROOM_INFO,DETECTION_ROOM_INFO.rOOMCNAME as rOOMCNAME,DETECTION_ROOM_INFO.rOOMTYPE as rOOMTYPE,ROOM_APPLY_INFO.rOOMAREA as rOOMAREA,ROOM_OCCUPY_INFO.tESTTASKID as tESTTASKID,ROOM_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,ROOM_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,ROOM_TYPE_CODE.rOOMTYPECNAME as rOOMTYPECNAME,DETECTION_ROOM_INFO.iMAGE as iMAGE,case when ROOM_APPLY_INFO.iMAGE is null then '0' else '1' end as im,ROOM_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,ROOM_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,ROOM_APPLY_INFO.aPPLYFORRANGE as aPPLYFORRANGE,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME"/>  
    <private name="from" type="String" value="DETECTION_ROOM_INFO DETECTION_ROOM_INFO  optional  join ROOM_APPLY_INFO ROOM_APPLY_INFO on DETECTION_ROOM_INFO = ROOM_APPLY_INFO.rOOMID optional  join ROOM_OCCUPY_INFO ROOM_OCCUPY_INFO on ROOM_APPLY_INFO.rOOMID = ROOM_OCCUPY_INFO.rOOMID AND ROOM_APPLY_INFO.rOOMAREA = ROOM_OCCUPY_INFO.rOOMAREA optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on ROOM_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_TASK_INFO.pROJECTID = TEST_PROJECT_INFO optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on ROOM_APPLY_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on ROOM_APPLY_INFO.aPPLYFOROBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND ROOM_APPLY_INFO.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on ROOM_APPLY_INFO.aPPLYFORRANGE = DETECTION_RANGE_TYPE optional  join ROOM_TYPE_CODE ROOM_TYPE_CODE on DETECTION_ROOM_INFO.rOOMTYPE = ROOM_TYPE_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="ROOM_APPLY_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>