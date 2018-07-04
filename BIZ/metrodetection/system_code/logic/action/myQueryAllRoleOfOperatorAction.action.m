<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryAllRoleOfOperatorAction" global="false" procedure="myQueryAllRoleOfOperatorProcedure"><label language="zh_CN">自建查询操作员所有角色</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="ROLE_ID"/>  
    <private name="select" type="String" value="ROLE_ID,ROLE_ID.rOLENAME as rOLENAME,ROLE_OPERATOR.oPERATORID as oPERATORID"/>  
    <private name="from" type="String" value="ROLE_ID ROLE_ID  optional  join ROLE_OPERATOR ROLE_OPERATOR on ROLE_ID  =   ROLE_OPERATOR.rOLEID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="ROLE_ID"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>