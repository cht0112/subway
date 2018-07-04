<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQuerySiteRes" global="false" procedure="myQuerySiteResProcedure">
   <permission name="range" type="List"/>  
    <private name="concept" type="String" value="DETECTION_ROOM_INFO"/>  
    <private name="select" type="String" value="DETECTION_ROOM_INFO,DETECTION_ROOM_INFO.rOOMTYPE as rOOMTYPE,DETECTION_ROOM_INFO.rOOMCNAME as rOOMCNAME,DETECTION_ROOM_INFO.rOOMENAME as rOOMENAME,ROOM_APPLY_INFO.rOOMAREA as rOOMAREA,ROOM_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,ROOM_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,ROOM_APPLY_INFO.aPPLYFORRANGE as aPPLYFORRANGE,ROOM_OCCUPY_INFO.tESTTASKID as tESTTASKID,ROOM_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,ROOM_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,ROOM_TYPE_CODE,ROOM_TYPE_CODE.rOOMTYPECNAME as rOOMTYPECNAME,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,DETECTION_ROOM_INFO.iMAGE as iMAGE,DETECTION_ROOM_INFO.mEMO as mEMO,ROOM_APPLY_INFO.iMAGE as iMAGE1,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,case when DETECTION_ROOM_INFO.iMAGE is null then '0' else '1' end as im,DETECTION_ROOM_INFO.MANUFACTURE_ID as MANUFACTURE_ID,DETECTION_ROOM_INFO.IS_DELEGATE as IS_DELEGATE,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME"/>  
    <private name="from" type="String" value="DETECTION_ROOM_INFO DETECTION_ROOM_INFO  optional  join ROOM_APPLY_INFO ROOM_APPLY_INFO on DETECTION_ROOM_INFO = ROOM_APPLY_INFO.rOOMID optional  join ROOM_OCCUPY_INFO ROOM_OCCUPY_INFO on DETECTION_ROOM_INFO = ROOM_OCCUPY_INFO.rOOMID optional  join ROOM_TYPE_CODE ROOM_TYPE_CODE on DETECTION_ROOM_INFO.rOOMTYPE = ROOM_TYPE_CODE optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on ROOM_APPLY_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on ROOM_APPLY_INFO.aPPLYFOROBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND ROOM_APPLY_INFO.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on ROOM_APPLY_INFO.aPPLYFORRANGE = DETECTION_RANGE_TYPE optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on ROOM_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_TASK_INFO.pROJECTID = TEST_PROJECT_INFO optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on DETECTION_ROOM_INFO.MANUFACTURE_ID  =  AFC_MANUFACTURER_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_resource/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DETECTION_ROOM_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="DETECTION_ROOM_INFO.rOOMCNAME asc, ROOM_TYPE_CODE.rOOMTYPECNAME asc, ROOM_OCCUPY_INFO.oCCUPYSTARTDATETIME asc, ROOM_OCCUPY_INFO.oCCUPYENDDATETIME asc, ROOM_APPLY_INFO.aPPLYFOROBJECT asc, ROOM_APPLY_INFO.aPPLYFORDEVICETYPE asc, ROOM_APPLY_INFO.aPPLYFORRANGE asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  <label language="zh_CN">自建查询场地</label>
</action> 
</model>
