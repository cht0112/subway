<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryTestTaskExeProblemAction" global="false" procedure="queryTestTaskExeProblemProcedure"> 
    <label language="zh_CN">新建测试任务执行问题查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_TASK_EXECUTE_PROBLEM"/>  
    <private name="select" type="String" value="ttep.*,PROBLEM_PRIOR_CODE,PROBLEM_PRIOR_CODE.pROBLEMPRIORCNAME as pROBLEMPRIORCNAME,PROBLEM_TYPE_CODE,PROBLEM_TYPE_CODE.pROBLEMPRIOR as pROBLEMPRIOR1,PROBLEM_TYPE_CODE.pROBLEMTYPE as pROBLEMTYPE,PROBLEM_TYPE_CODE.pROBLEMTYPECNAME as pROBLEMTYPECNAME,tpti.pROJECTID as pROJECTID,tpti.tASKID as tASKID,tpti.tASKNAME as tASKNAME"/>  
    <private name="from" type="String" value="TEST_TASK_EXECUTE_PROBLEM ttep  optional  join PROBLEM_PRIOR_CODE PROBLEM_PRIOR_CODE on ttep.pROBLEMPRIOR = PROBLEM_PRIOR_CODE optional  join PROBLEM_TYPE_CODE PROBLEM_TYPE_CODE on  ttep.pROBLEMTYPE = PROBLEM_TYPE_CODE.pROBLEMTYPE AND ttep.pROBLEMPRIOR = PROBLEM_TYPE_CODE.pROBLEMPRIOR  optional  join TEST_PROJECT_TASK_INFO tpti on ttep.tASKID = tpti.tASKID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="ttep"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
