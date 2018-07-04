<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myTestCaseBaseDectionInfoAction" global="false" procedure="myTestCaseBaseDectionInfoProcedure"> 
    <label language="zh_CN">新建用例基本和检测信息联合查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_CASE_BASE_INFO"/>  
    <private name="select" type="String" value="tcbi.*,TEST_CASE_DECTION_INFO,TEST_CASE_DECTION_INFO.aPPLYFOROBJECT as aPPLYFOROBJECT,TEST_CASE_DECTION_INFO.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DECTION_BASED_ON_INFO,DECTION_BASED_ON_INFO.dECTIONBASEDONNAME as dECTIONBASEDONNAME"/>  
    <private name="from" type="String" value="TEST_CASE_BASE_INFO tcbi  optional  join TEST_CASE_DECTION_INFO TEST_CASE_DECTION_INFO on tcbi.tESTCASEVER = TEST_CASE_DECTION_INFO.tESTCASEVER AND tcbi.tESTCASEID = TEST_CASE_DECTION_INFO.tESTCASEID optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on TEST_CASE_DECTION_INFO.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TEST_CASE_DECTION_INFO.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE AND DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = DETECTION_OBJECT_TYPE optional  join DECTION_BASED_ON_INFO DECTION_BASED_ON_INFO on DECTION_BASED_ON_INFO = tcbi.dECTIONBASEDONID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="tcbi"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
