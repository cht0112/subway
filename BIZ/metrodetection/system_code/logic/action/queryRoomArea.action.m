<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryRoomArea" global="false" procedure="queryRoomAreaProcedure"><label language="zh_CN">查询房间和区域构建树形结构</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="ROOM_APPLY_INFO"/>
<private name="select" type="String" value="ROOM_APPLY_INFO.*"/>
<private name="from" type="String" value="ROOM_APPLY_INFO ROOM_APPLY_INFO"/>
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