<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryROOM_APPLY_INFOAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
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
<action name="saveROOM_APPLY_INFOAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="ROOM_APPLY_INFO"/>
<private name="dataModel" type="String" value="/metrodetection/system_resource/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createROOM_APPLY_INFOAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="ROOM_APPLY_INFO"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryRoomInfo" global="false" procedure="queryRoomInfoProcedure">
<label language="zh_CN">查询场地资源信息</label>
<private name="ksql" type="String" value="select ROOM_APPLY_INFO.rOOMID as rOOMID,ROOM_APPLY_INFO.rOOMAREA as rOOMAREA,ROOM_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,ROOM_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,ROOM_APPLY_INFO.aPPLYFORRANGE as aPPLYFORRANGE,ROOM_OCCUPY_INFO.tESTTASKID as tESTTASKID,ROOM_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,ROOM_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME from ROOM_APPLY_INFO ROOM_APPLY_INFO  join ROOM_OCCUPY_INFO ROOM_OCCUPY_INFO on ROOM_APPLY_INFO.rOOMID = ROOM_OCCUPY_INFO.rOOMID"></private>
<public name="variables" type="Map"></public>
<private name="dataModel" type="String" value="/metrodetection/system_resource/data"></private>
<public name="fnModel" type="String"></public>
</action>
</model>