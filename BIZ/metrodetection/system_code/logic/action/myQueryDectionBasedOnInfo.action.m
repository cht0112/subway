<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryDectionBasedOnInfo" global="false" procedure="myQueryDectionBasedOnInfoProcedure">
    <label language="zh_CN">自建检测依据查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="DECTION_BASED_ON_INFO"/>  
    <private name="select" type="String" value="DECTION_BASED_ON_INFO,DECTION_BASED_ON_INFO.dECTIONBASEDONNAME as dECTIONBASEDONNAME,DECTION_BASED_ON_INFO.vALIDDATETIME as vALIDDATETIME,VALID_STATE_CODE,VALID_STATE_CODE.vALIDSTATECNAME as vALIDSTATECNAME,DECTION_BASED_ON_INFO.vALIDSTATE as vALIDSTATE1,DECTION_BASED_ON_INFO.version as version1"/>  
    <private name="from" type="String" value="DECTION_BASED_ON_INFO DECTION_BASED_ON_INFO  optional  join VALID_STATE_CODE VALID_STATE_CODE on DECTION_BASED_ON_INFO.vALIDSTATE = VALID_STATE_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DECTION_BASED_ON_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
