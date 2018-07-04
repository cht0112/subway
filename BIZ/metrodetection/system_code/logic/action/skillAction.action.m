<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQuerySkillAction" global="false" procedure="myQuerySkillProcedure"> 
    <label language="zh_CN">自建人员技能查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="HR_SKILL_INFO"/>  
    <private name="select" type="String" value="HR_SKILL_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,HR_SKILL_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,HR_SKILL_INFO.aPPLYFORRANGE as aPPLYFORRANGE,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,HR_SKILL_INFO.oPERATORID as oPERATORID,HR_SKILL_INFO"/>  
    <private name="from" type="String" value="HR_SKILL_INFO HR_SKILL_INFO  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on HR_SKILL_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on HR_SKILL_INFO.aPPLYFOROBJECT   =  DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE   and  HR_SKILL_INFO.aPPLYFORDEVICETYPE  =  DEVICE_TYPE_CODE.dEVICETYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on HR_SKILL_INFO.aPPLYFORRANGE = DETECTION_RANGE_TYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_resource/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="HR_SKILL_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  
</action> 
</model>
