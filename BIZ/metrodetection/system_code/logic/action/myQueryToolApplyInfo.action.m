<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryToolApplyInfo" global="false" procedure="myQueryToolApplyInfoProcedure">
    <label language="zh_CN">自建工具应用检测信息</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TOOL_APPLY_INFO"/>  
    <private name="select" type="String" value="TOOL_APPLY_INFO,TOOL_APPLY_INFO.tOOLTYPEID as tOOLTYPEID,TOOL_APPLY_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,TOOL_APPLY_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,TOOL_APPLY_INFO.aPPLYFORRANGE as aPPLYFORRANGE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,TOOL_APPLY_INFO.tOOLNO2 as tOOLNO2"/>  
    <private name="from" type="String" value="TOOL_APPLY_INFO TOOL_APPLY_INFO  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on TOOL_APPLY_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TOOL_APPLY_INFO.aPPLYFOROBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND TOOL_APPLY_INFO.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on TOOL_APPLY_INFO.aPPLYFORRANGE = DETECTION_RANGE_TYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TOOL_APPLY_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
