<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryProjectManagerAction" global="false" procedure="myQueryProjectManagerProcedure">
<label language="zh_CN">自建查询项目负责人</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="ROLE_ID"/>  
    <private name="select" type="String" value="rid as ROLE_ID,op as oPERATORID,op.uSERNAME as uSERNAME,rid.rOLENAME as rOLENAME,miu.oPERATORID as oPERATORID1"/>  
    <private name="from" type="String" value="ROLE_ID rid  optional  join ROLE_OPERATOR ro on rid = ro.rOLEID optional  join OPERATOR_PASSWORD opg on opg = ro.oPERATORID join MEMBER_IN_USERGROUP miu on opg = miu.oPERATORID optional  join OPERATOR_PASSWORD op on miu.gROUPMEMBERID = op"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_Authority_Related/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String" value="opg.uSERTYPE = 2"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="ROLE_ID"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="rid.rOLENAME asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>