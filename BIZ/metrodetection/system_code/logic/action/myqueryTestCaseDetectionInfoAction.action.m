<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myqueryTestCaseDetectionInfoAction" global="false" procedure="myqueryTestCaseDetectionInfoProcedure"> 
    <label language="zh_CN">新建测试用例检测信息查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="distinct TEST_CASE_DECTION_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME"/>  
    <private name="from" type="String" value="TEST_CASE_DECTION_INFO TEST_CASE_DECTION_INFO  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on TEST_CASE_DECTION_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE"/>  
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
  <action name="myQueryTestCaseDetectionObjectAction" global="false" procedure="myQueryTestCaseDetectionObjectProcedure"> 
    <label language="zh_CN">新建检测用例对象类别查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="distinct TEST_CASE_DECTION_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME"/>  
    <private name="from" type="String" value="TEST_CASE_DECTION_INFO TEST_CASE_DECTION_INFO  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on TEST_CASE_DECTION_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE"/>  
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
<action name="myQueryTestCaseDetectionDeviceAction" global="false" procedure="myQueryTestCaseDetectionDeviceProcedure"><label language="zh_CN">新建测试用例对象查询</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="distinct TEST_CASE_DECTION_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,TEST_CASE_DECTION_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME"/>  
    <private name="from" type="String" value="TEST_CASE_DECTION_INFO TEST_CASE_DECTION_INFO  optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on DEVICE_TYPE_CODE.dEVICETYPE = TEST_CASE_DECTION_INFO.aPPLYFORDEVICETYPE AND TEST_CASE_DECTION_INFO.aPPLYFOROBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on DETECTION_OBJECT_TYPE = TEST_CASE_DECTION_INFO.aPPLYFOROBJECT"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="dEVICETYPE"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>
</action>
</model>
