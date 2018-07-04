<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryTestBaseCaseInfoAction" global="false" procedure="myQueryTestBaseCaseInfoProcedure"> 
    <label language="zh_CN">新建监测方案用例信息查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_SCHEME_CASE_INFO"/>  
    <private name="select" type="String" value="TEST_SCHEME_CASE_INFO.*,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,BUSINESS_STAGE_CODE.bUSINESSSTAGECNAME as bUSINESSSTAGECNAME,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,BUSINESS_STAGE_CODE.bUSINESSSTAGE as bUSINESSSTAGE1,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE1"/>  
    <private name="from" type="String" value="TEST_SCHEME_CASE_INFO TEST_SCHEME_CASE_INFO  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_SCHEME_CASE_INFO.bUSINESSID = BUSINESS_TYPE_CODE optional  join BUSINESS_STAGE_CODE BUSINESS_STAGE_CODE on TEST_SCHEME_CASE_INFO.bUSINESSSTAGE =  BUSINESS_STAGE_CODE.bUSINESSSTAGE  and   BUSINESS_STAGE_CODE.bUSINESSID  =  BUSINESS_TYPE_CODE optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on TEST_SCHEME_CASE_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TEST_SCHEME_CASE_INFO.aPPLYFORDEVICETYPE =  DEVICE_TYPE_CODE.dEVICETYPE  and  DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE  =  DETECTION_OBJECT_TYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_SCHEME_CASE_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
