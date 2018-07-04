<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryRoomOccupyAction" global="false" procedure="queryRoomOccupyProcedure"> 
    <label language="zh_CN">新建房间占用信息查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="ROOM_OCCUPY_INFO"/>  
    <private name="select" type="String" value="roi,roi.rOOMID as rOOMID,roi.rOOMAREA as rOOMAREA,roi.tESTTASKID as tESTTASKID,roi.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,roi.oCCUPYENDDATETIME as oCCUPYENDDATETIME,roi.rOOMUSED as rOOMUSED,case when roi.rOOMUSED = 1 then '可用' when roi.rOOMUSED = 0 then '不可用' end as rOOMUSEDCNAME,roi.tECHMANAGER as tECHMANAGER,roi.mEMO as mEMO,ROOM_APPLY_INFO.rOOMID as rOOMID1,ROOM_APPLY_INFO.rOOMAREA as rOOMAREA1,ROOM_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,ROOM_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,ROOM_APPLY_INFO.aPPLYFORRANGE as aPPLYFORRANGE,ROOM_APPLY_INFO.iMAGE as iMAGE,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE as dETECTIONOBJECTTYPE,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,DETECTION_ROOM_INFO,DETECTION_ROOM_INFO.rOOMCNAME as rOOMCNAME,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,TEST_PROJECT_INFO,TEST_PROJECT_INFO.aPPLICATIONNO as aPPLICATIONNO,roi.version as version"/>  
    <private name="from" type="String" value="ROOM_OCCUPY_INFO roi  optional  join ROOM_APPLY_INFO ROOM_APPLY_INFO on roi.rOOMID = ROOM_APPLY_INFO.rOOMID AND roi.rOOMAREA = ROOM_APPLY_INFO.rOOMAREA optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on ROOM_APPLY_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = DETECTION_OBJECT_TYPE AND DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = ROOM_APPLY_INFO.aPPLYFOROBJECT AND DEVICE_TYPE_CODE.dEVICETYPE = ROOM_APPLY_INFO.aPPLYFORDEVICETYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on ROOM_APPLY_INFO.aPPLYFORRANGE = DETECTION_RANGE_TYPE optional  join DETECTION_ROOM_INFO DETECTION_ROOM_INFO on DETECTION_ROOM_INFO = ROOM_APPLY_INFO.rOOMID optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on roi.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join HR_BASE_INFO HR_BASE_INFO on roi.tECHMANAGER = HR_BASE_INFO optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_INFO = TEST_PROJECT_TASK_INFO.pROJECTID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="roi"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="querytoolOccupyAction" global="false" procedure="querytoolOccupyProcedure"> 
    <label language="zh_CN">新建工具占用信息查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="TOOL_OCCUPY_INFO,TOOL_OCCUPY_INFO.tESTTASKID as tESTTASKID,TOOL_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,TOOL_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TOOL_OCCUPY_INFO.mEMO as mEMO,TOOL_OCCUPY_INFO.tOOLUSED as tOOLUSED,case when TOOL_OCCUPY_INFO.tOOLUSED = 1 then '可用' when TOOL_OCCUPY_INFO.tOOLUSED = 0 then '不可用' end as tOOLUSEDCNAME,TOOL_OCCUPY_INFO.tECHMANAGER as tECHMANAGER,DETECTION_TOOL_INFO,DETECTION_TOOL_INFO.tOOLCNAME as tOOLCNAME,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,TEST_PROJECT_INFO,TEST_PROJECT_INFO.aPPLICATIONNO as aPPLICATIONNO,TOOL_OCCUPY_INFO.tOOLNO1 as tOOLNO1,TOOL_OCCUPY_INFO.version as version"/>  
    <private name="from" type="String" value="TOOL_OCCUPY_INFO TOOL_OCCUPY_INFO  optional  join DETECTION_TOOL_INFO DETECTION_TOOL_INFO on DETECTION_TOOL_INFO = TOOL_OCCUPY_INFO.tOOLNO1 optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_PROJECT_TASK_INFO.tASKID = TOOL_OCCUPY_INFO.tESTTASKID optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = TOOL_OCCUPY_INFO.tECHMANAGER optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_INFO = TEST_PROJECT_TASK_INFO.pROJECTID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TOOL_OCCUPY_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
