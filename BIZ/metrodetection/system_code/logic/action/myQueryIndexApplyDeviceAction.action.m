<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryIndexApplyDeviceAction" global="false" procedure="myQueryIndexApplyDeviceProcedure">
  	<permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="distinct INDEX_ID_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,INDEX_ID_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME"/>  
    <private name="from" type="String" value="INDEX_ID_APPLY_INFO INDEX_ID_APPLY_INFO  optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on INDEX_ID_APPLY_INFO.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="aPPLYFORDEVICETYPE"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>
  </action> 
</model>
