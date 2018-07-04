<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryTestSchemeCaseAction" global="false" procedure="myQueryTestSchemeCaseProcedure"> 
    <label language="zh_CN">新建检测方案用例查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_SCHEME_CASE_INFO"/>  
    <private name="select" type="String" value="TEST_SCHEME_CASE_INFO,TEST_SCHEME_CASE_INFO.tESTSCHEMEID as tESTSCHEMEID,TEST_SCHEME_CASE_INFO.bUSINESSID as bUSINESSID,TEST_SCHEME_CASE_INFO.bUSINESSSTAGE as bUSINESSSTAGE,TEST_SCHEME_CASE_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,TEST_SCHEME_CASE_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,TEST_SCHEME_CASE_INFO.tESTCASEVER as tESTCASEVER,TEST_SCHEME_CASE_INFO.tESTCASEID as tESTCASEID,TEST_CASE_BASE_INFO.tESTCASEVER as tESTCASEVER1,TEST_CASE_BASE_INFO.tESTCASEID as tESTCASEID1,TEST_CASE_BASE_INFO.tESTCASENAME as tESTCASENAME,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,BUSINESS_STAGE_CODE,BUSINESS_STAGE_CODE.bUSINESSID as bUSINESSID2,BUSINESS_STAGE_CODE.bUSINESSSTAGE as bUSINESSSTAGE1,BUSINESS_STAGE_CODE.bUSINESSSTAGECNAME as bUSINESSSTAGECNAME,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE as dETECTIONOBJECTTYPE,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME"/>  
    <private name="from" type="String" value="TEST_SCHEME_CASE_INFO TEST_SCHEME_CASE_INFO  optional  join TEST_CASE_BASE_INFO TEST_CASE_BASE_INFO on TEST_SCHEME_CASE_INFO.tESTCASEVER = TEST_CASE_BASE_INFO.tESTCASEVER AND TEST_SCHEME_CASE_INFO.tESTCASEID = TEST_CASE_BASE_INFO.tESTCASEID optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_SCHEME_CASE_INFO.bUSINESSID  =  BUSINESS_TYPE_CODE optional  join BUSINESS_STAGE_CODE BUSINESS_STAGE_CODE on TEST_SCHEME_CASE_INFO.bUSINESSID  =  BUSINESS_STAGE_CODE.bUSINESSID  and  TEST_SCHEME_CASE_INFO.bUSINESSSTAGE  =  BUSINESS_STAGE_CODE.bUSINESSSTAGE optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on TEST_SCHEME_CASE_INFO.aPPLYFOROBJECT  =  DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TEST_SCHEME_CASE_INFO.aPPLYFOROBJECT  =  DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE  and  TEST_SCHEME_CASE_INFO.aPPLYFORDEVICETYPE  =  DEVICE_TYPE_CODE.dEVICETYPE"/>  
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
    <public name="orderBy" type="String" value="TEST_SCHEME_CASE_INFO.tESTSCHEMEID desc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
