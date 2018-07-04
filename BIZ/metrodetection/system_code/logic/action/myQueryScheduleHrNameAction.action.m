<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryScheduleHrNameAction" global="false" procedure="myQueryScheduleHrNameProcedure">
<label language="zh_CN">自建日历员工姓名查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="HR_BASE_INFO"/>  
    <private name="select" type="String" value="HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>  
    <private name="from" type="String" value="HR_BASE_INFO HR_BASE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="HR_BASE_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer" required="false"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>