<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryTestProjectStatAction" global="false" procedure="myQueryTestProjectStatProcedure"> 
    <label language="zh_CN">新建测试项目统计查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_PROJECT_STAT"/>  
    <private name="select" type="String" value="TEST_PROJECT_STAT.*,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,BUSINESS_STAGE_CODE,BUSINESS_STAGE_CODE.bUSINESSSTAGECNAME as bUSINESSSTAGECNAME,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREPOSTCODE as mANUFACTUREPOSTCODE,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME"/>  
    <private name="from" type="String" value="TEST_PROJECT_STAT TEST_PROJECT_STAT  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_PROJECT_STAT.bUSINESSID = BUSINESS_TYPE_CODE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TEST_PROJECT_STAT.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join BUSINESS_STAGE_CODE BUSINESS_STAGE_CODE on TEST_PROJECT_STAT.bUSINESSSTAGE = BUSINESS_STAGE_CODE.bUSINESSSTAGE AND TEST_PROJECT_STAT.bUSINESSID = BUSINESS_STAGE_CODE.bUSINESSID optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on TEST_PROJECT_STAT.mANUFACTUREID = AFC_MANUFACTURER_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/report_data/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_PROJECT_STAT"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="TEST_PROJECT_STAT desc, TEST_PROJECT_STAT.rEPORTDATE desc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
