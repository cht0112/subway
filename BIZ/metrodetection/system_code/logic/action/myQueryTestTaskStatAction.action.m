<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryTestTaskStatAction" global="false" procedure="myQueryTestTaskStatProcedure"> 
    <label language="zh_CN">新建单项测试任务统计查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_TASK_STAT"/>  
    <private name="select" type="String" value="TEST_TASK_STAT.*,TEST_PROJECT_INFO,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,BUSINESS_STAGE_CODE,BUSINESS_STAGE_CODE.bUSINESSSTAGECNAME as bUSINESSSTAGECNAME,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREPOSTCODE as mANUFACTUREPOSTCODE,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.pLANOPERATORID as pLANOPERATORID,TEST_CASE_BASE_INFO.tESTCASEID as tESTCASEID,TEST_CASE_BASE_INFO.tESTCASENAME as tESTCASENAME,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME"/>  
    <private name="from" type="String" value="TEST_TASK_STAT TEST_TASK_STAT  optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_TASK_STAT.pROJECTID = TEST_PROJECT_INFO optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_TASK_STAT.bUSINESSID = BUSINESS_TYPE_CODE optional  join BUSINESS_STAGE_CODE BUSINESS_STAGE_CODE on TEST_TASK_STAT.bUSINESSSTAGE =   BUSINESS_STAGE_CODE.bUSINESSSTAGE optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on TEST_TASK_STAT.mANUFACTUREID = AFC_MANUFACTURER_INFO optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_TASK_STAT.tASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join TEST_CASE_BASE_INFO TEST_CASE_BASE_INFO on TEST_TASK_STAT.tESTCASEID = TEST_CASE_BASE_INFO.tESTCASEID optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TEST_TASK_STAT.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/report_data/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_TASK_STAT"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
