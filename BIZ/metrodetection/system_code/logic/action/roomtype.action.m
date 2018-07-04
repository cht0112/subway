<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="roomtypeAction" global="false" procedure="roomtypeProcedure">
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="DETECTION_ROOM_INFO"/>  
    <private name="select" type="String" value="DETECTION_ROOM_INFO.rOOMTYPE as rOOMTYPE,DETECTION_ROOM_INFO.rOOMCNAME as rOOMCNAME,DETECTION_ROOM_INFO.rOOMENAME as rOOMENAME,DETECTION_ROOM_INFO,DETECTION_ROOM_INFO.iMAGE as iMAGE,DETECTION_ROOM_INFO.mEMO as mEMO,ROOM_TYPE_CODE.rOOMTYPECNAME as rOOMTYPECNAME,case when DETECTION_ROOM_INFO.iMAGE is null then '0' else '1' end  as im"/>  
    <private name="from" type="String" value="DETECTION_ROOM_INFO DETECTION_ROOM_INFO  optional  join ROOM_TYPE_CODE ROOM_TYPE_CODE on DETECTION_ROOM_INFO.rOOMTYPE = ROOM_TYPE_CODE"/>  
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
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
<label language="zh_CN">房间类型</label>
</action>
</model>