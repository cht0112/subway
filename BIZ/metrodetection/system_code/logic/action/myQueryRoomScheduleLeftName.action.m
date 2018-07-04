<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryRoomScheduleLeftName" global="false" procedure="myQueryRoomScheduleLeftNameProcedure"><label language="zh_CN">自建查询房间日历左边名称</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="DETECTION_ROOM_INFO"/>  
    <private name="select" type="String" value="ROOM_APPLY_INFO,DETECTION_ROOM_INFO,DETECTION_ROOM_INFO.rOOMCNAME as rOOMCNAME,ROOM_APPLY_INFO.rOOMAREA as rOOMAREA,ROOM_APPLY_INFO.rOOMID as rOOMID"/>  
    <private name="from" type="String" value="DETECTION_ROOM_INFO DETECTION_ROOM_INFO  optional  join ROOM_APPLY_INFO ROOM_APPLY_INFO on DETECTION_ROOM_INFO = ROOM_APPLY_INFO.rOOMID"/>  
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