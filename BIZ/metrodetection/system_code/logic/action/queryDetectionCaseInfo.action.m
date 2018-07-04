<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryDetectionCaseInfo" global="false" procedure="queryDetectionCaseInfoProcedure">
    <label language="zh_CN">查看测试用例检测信息</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_CASE_DECTION_INFO"/>  
    <private name="select" type="String" value="tcdi.*,dot.*,dtc.*,drt.*,drc.*"/>  
    <private name="from" type="String" value="TEST_CASE_DECTION_INFO tcdi  optional  join DEVICE_TYPE_CODE dtc on  tcdi.aPPLYFORDEVICETYPE = dtc.dEVICETYPE AND tcdi.aPPLYFOROBJECT = dtc.dETECTIONOBJECTTYPE  optional  join DETECTION_OBJECT_TYPE dot on dtc.dETECTIONOBJECTTYPE = dot optional  join DETECTION_RANGE_CODE drc on  tcdi.aPPLYFORSUBRANGE = drc.dETECTIONRANGEID AND tcdi.aPPLYFORRANGE = drc.dETECTIONRANGETYPE  optional  join DETECTION_RANGE_TYPE drt on drc.dETECTIONRANGETYPE = drt"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="tcdi"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
<action name="queryDetectionCaseInfoModify" global="false" procedure="queryDetectionCaseInfoModifyProcedure">
<label language="zh_CN">查看测试用例检测信息2</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_CASE_DECTION_INFO"/>  
    <private name="select" type="String" value="tcdi.*,dot.*,dtc.*,drt.*,drc.*"/>  
    <private name="from" type="String" value="TEST_CASE_DECTION_INFO tcdi  optional  join DEVICE_TYPE_CODE dtc on  tcdi.aPPLYFORDEVICETYPE = dtc.dEVICETYPE AND tcdi.aPPLYFOROBJECT = dtc.dETECTIONOBJECTTYPE  optional  join DETECTION_OBJECT_TYPE dot on dtc.dETECTIONOBJECTTYPE = dot optional  join DETECTION_RANGE_CODE drc on  tcdi.aPPLYFORSUBRANGE = drc.dETECTIONRANGEID AND tcdi.aPPLYFORRANGE = drc.dETECTIONRANGETYPE  optional  join DETECTION_RANGE_TYPE drt on drc.dETECTIONRANGETYPE = drt"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="tcdi"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>
