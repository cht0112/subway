<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="recurrenceSchemeAndProjectAction" global="false" procedure="recurrenceSchemeAndProjectProcedure">
    <label language="zh_CN">新建回归方案和项目查询</label> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="RECURRENCE_TEST_SCHEME"/>  
    <private name="select" type="String" value="RECURRENCE_TEST_SCHEME,RECURRENCE_TEST_SCHEME.APPLICATION_NO as APPLICATION_NO,RECURRENCE_TEST_SCHEME.TEST_SCHEME_ID as curTESTSCHEMEID,RECURRENCE_TEST_SCHEME.IS_USED as IS_USED,TEST_SCHEME_BASE_INFO,TEST_SCHEME_BASE_INFO.tESTSCHEMENAME as tESTSCHEMENAME,TEST_SCHEME_BASE_INFO.tESTSCHEMEDESC as tESTSCHEMEDESC,TEST_SCHEME_BASE_INFO.bUSINESSID as bUSINESSID,TEST_SCHEME_BASE_INFO.dECTIONBASEDONID as dECTIONBASEDONID,TEST_SCHEME_BASE_INFO.mAKEDATETIME as mAKEDATETIME,TEST_SCHEME_BASE_INFO.vALIDSTATE as vALIDSTATE,TEST_SCHEME_BASE_INFO.aPPLICATIONNO as aPPLICATIONNO,DECTION_BASED_ON_INFO,DECTION_BASED_ON_INFO.dECTIONBASEDONNAME as dECTIONBASEDONNAME,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME"/>  
    <private name="from" type="String" value="RECURRENCE_TEST_SCHEME RECURRENCE_TEST_SCHEME  optional  join TEST_SCHEME_BASE_INFO TEST_SCHEME_BASE_INFO on RECURRENCE_TEST_SCHEME.TEST_SCHEME_ID = TEST_SCHEME_BASE_INFO optional  join DECTION_BASED_ON_INFO DECTION_BASED_ON_INFO on TEST_SCHEME_BASE_INFO.dECTIONBASEDONID = DECTION_BASED_ON_INFO optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_SCHEME_BASE_INFO.bUSINESSID = BUSINESS_TYPE_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="RECURRENCE_TEST_SCHEME"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="TEST_SCHEME_BASE_INFO desc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
