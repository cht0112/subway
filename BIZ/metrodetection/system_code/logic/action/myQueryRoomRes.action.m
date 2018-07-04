<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="querySiteCSQ" global="false" procedure="querySiteCSQProcedure">
    <label language="zh_CN">查询场地基本和检测信息</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="ROOM_APPLY_INFO"/>  
    <private name="select" type="String" value="ROOM_APPLY_INFO,ROOM_APPLY_INFO.rOOMID as rOOMID,ROOM_APPLY_INFO.rOOMAREA as rOOMAREA,ROOM_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,ROOM_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,ROOM_APPLY_INFO.aPPLYFORRANGE as aPPLYFORRANGE,ROOM_APPLY_INFO.iMAGE as iMAGE,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DETECTION_OBJECT_TYPE.dETECTIONOBJECTENAME as dETECTIONOBJECTENAME,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE as dETECTIONOBJECTTYPE,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DEVICE_TYPE_CODE.dEVICETYPEENAME as dEVICETYPEENAME,DETECTION_RANGE_TYPE,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,DETECTION_RANGE_TYPE.dETECTIONRANGEENAME as dETECTIONRANGEENAME,case when ROOM_APPLY_INFO.iMAGE is null then '0' else '1' end  as IM"/>  
    <private name="from" type="String" value="ROOM_APPLY_INFO ROOM_APPLY_INFO  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on ROOM_APPLY_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on  ROOM_APPLY_INFO.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE AND ROOM_APPLY_INFO.aPPLYFOROBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on ROOM_APPLY_INFO.aPPLYFORRANGE = DETECTION_RANGE_TYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_resource/data"/>  
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
