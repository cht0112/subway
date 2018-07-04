<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryIndexSystemValueAction" global="false" procedure="myQueryIndexSystemValueProcedure"> 
    <label language="zh_CN">新建指标库定义查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="INDEX_SYSTEM_PARAMETER"/>  
    <private name="select" type="String" value="INDEX_SYSTEM_PARAMETER.*,VALID_STATE_CODE,VALID_STATE_CODE.vALIDSTATECNAME as vALIDSTATECNAME,DECTION_BASED_ON_INFO,DECTION_BASED_ON_INFO.dECTIONBASEDONNAME as dECTIONBASEDONNAME"/>  
    <private name="from" type="String" value="INDEX_SYSTEM_PARAMETER INDEX_SYSTEM_PARAMETER  optional  join VALID_STATE_CODE VALID_STATE_CODE on INDEX_SYSTEM_PARAMETER.vALIDSTATE = VALID_STATE_CODE optional  join DECTION_BASED_ON_INFO DECTION_BASED_ON_INFO on INDEX_SYSTEM_PARAMETER.dECTIONBASEDONID = DECTION_BASED_ON_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="INDEX_SYSTEM_PARAMETER"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
