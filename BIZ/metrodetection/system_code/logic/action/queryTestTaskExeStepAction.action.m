<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryTestTaskExeStepAction" global="false" procedure="queryTestTaskExeStepProcedure">
    <label language="zh_CN">新建测试子用例步骤查询</label> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="TEST_TASK_EXECUTE_STEP,TEST_TASK_EXECUTE_STEP.tASKID as tASKID,TEST_TASK_EXECUTE_STEP.tESTCASEVER as tESTCASEVER,TEST_TASK_EXECUTE_STEP.tESTCASEID as tESTCASEID,TEST_TASK_EXECUTE_STEP.sUBTESTCASEID as sUBTESTCASEID,TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPID as sUBTESTCASESTEPID,TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPDESC as sUBTESTCASESTEPDESC,TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPPRIOR as sUBTESTCASESTEPPRIOR,case when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPEXECUTE = 0 then '未执行' when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPEXECUTE = 1 then '执行中' when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPEXECUTE = 2 then '已执行' when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPEXECUTE = 3 then '延迟' end as sUBTESTCASESTEPEXECUTE,case when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPCHECK = 0 then '未知' when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPCHECK = 1 then '成功' when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPCHECK = 2 then '失败' when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPCHECK = 3 then '受阻' end as sUBTESTCASESTEPCHECK,TEST_TASK_EXECUTE_STEP.eXECUTEDATETIME as eXECUTEDATETIME,TEST_TASK_EXECUTE_STEP.rEPORTDATE as rEPORTDATE,case when TEST_TASK_EXECUTE_STEP.sUBTESTCASESTEPCHECK = 1 then '' else '!' end as mark,TEST_PROJECT_TASK_INFO.pROJECTID as pROJECTID,TEST_PROJECT_TASK_INFO.tASKID as tASKID1,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME"/>  
    <private name="from" type="String" value="TEST_TASK_EXECUTE_STEP TEST_TASK_EXECUTE_STEP  optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_TASK_EXECUTE_STEP.tASKID  =  TEST_PROJECT_TASK_INFO.tASKID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_TASK_EXECUTE_STEP"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>
  </action> 
</model>
