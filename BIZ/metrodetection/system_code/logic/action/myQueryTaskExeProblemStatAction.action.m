<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryTaskExeProblemStatAction" global="false" procedure="myQueryTaskExeProblemStatProcedure"> 
    <label language="zh_CN">新建测试任务执行问题汇总</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TASK_EXECUTE_PROBLEM_STAT"/>  
    <private name="select" type="String" value="TASK_EXECUTE_PROBLEM_STAT.*,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREPOSTCODE as mANUFACTUREPOSTCODE,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,PROBLEM_PRIOR_CODE,PROBLEM_PRIOR_CODE.pROBLEMPRIORCNAME as pROBLEMPRIORCNAME,PROBLEM_TYPE_CODE,PROBLEM_TYPE_CODE.pROBLEMTYPECNAME as pROBLEMTYPECNAME,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME"/>  
    <private name="from" type="String" value="TASK_EXECUTE_PROBLEM_STAT TASK_EXECUTE_PROBLEM_STAT  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TASK_EXECUTE_PROBLEM_STAT.bUSINESSID = BUSINESS_TYPE_CODE optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on TASK_EXECUTE_PROBLEM_STAT.mANUFACTUREID = AFC_MANUFACTURER_INFO optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TASK_EXECUTE_PROBLEM_STAT.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join PROBLEM_PRIOR_CODE PROBLEM_PRIOR_CODE on TASK_EXECUTE_PROBLEM_STAT.pROBLEMPRIOR = PROBLEM_PRIOR_CODE optional  join PROBLEM_TYPE_CODE PROBLEM_TYPE_CODE on TASK_EXECUTE_PROBLEM_STAT.pROBLEMTYPE =  PROBLEM_TYPE_CODE.pROBLEMTYPE and  TASK_EXECUTE_PROBLEM_STAT.pROBLEMPRIOR  =  PROBLEM_TYPE_CODE.pROBLEMPRIOR"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/report_data/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TASK_EXECUTE_PROBLEM_STAT"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
