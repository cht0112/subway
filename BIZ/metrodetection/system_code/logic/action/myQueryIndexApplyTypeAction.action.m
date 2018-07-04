<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryIndexApplyTypeAction" global="false" procedure="myQueryIndexApplyTypeProcedure"> 
  <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="distinct INDEX_ID_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME"/>  
    <private name="from" type="String" value="INDEX_ID_APPLY_INFO INDEX_ID_APPLY_INFO  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on DETECTION_OBJECT_TYPE = INDEX_ID_APPLY_INFO.aPPLYFOROBJECT"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="aPPLYFOROBJECT"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
    </action>
</model>
