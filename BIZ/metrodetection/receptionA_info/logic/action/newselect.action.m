<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="newSelect" global="false" procedure="newSelectProcedure">

<label language="zh_CN">自定义屏幕信息</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="SCREEN_LOCATION_INFO"/>  
    <private name="select" type="String" value="SCREEN_LOCATION_INFO,SCREEN_LOCATION_INFO.IDENTIFY_CODE as IDENTIFY_CODE,SCREEN_LOCATION_INFO.SCREEN_LOCALTION as SCREEN_LOCALTION,case when SCREEN_LOCATION_INFO.LOCATION_TYPE = 1 then '楼层入口' when SCREEN_LOCATION_INFO.LOCATION_TYPE = 2 then '检测室门口' when SCREEN_LOCATION_INFO.LOCATION_TYPE = 3 then '检测设备上方' else '其它' end as LOCATION_TYPE1,case when SCREEN_LOCATION_INFO.SCREEN_TYPE = 1 then '32寸屏' when SCREEN_LOCATION_INFO.SCREEN_TYPE = 2 then '39寸屏' when SCREEN_LOCATION_INFO.SCREEN_TYPE = 3 then '46寸屏' else '其它' end as SCREEN_TYPE1,SCREEN_LOCATION_INFO.USE_DESC as USE_DESC,SCREEN_LOCATION_INFO.MEMO as MEMO,SCREEN_LOCATION_INFO.LOCATION_TYPE as LOCATION_TYPE,SCREEN_LOCATION_INFO.SCREEN_TYPE as SCREEN_TYPE"/>  
    <private name="from" type="String" value="SCREEN_LOCATION_INFO SCREEN_LOCATION_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/receptionA_info/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="SCREEN_LOCATION_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 

</action>
</model>