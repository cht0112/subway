<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryTestTaskExeIndividualAction" global="false" procedure="myQueryTestTaskExeIndividualProcedure">
    <label language="zh_CN">新建测试任务执行进度查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_TASK_EXECUTE_INDIVIDUAL"/>  
    <private name="select" type="String" value="ttei.*,TEST_PROJECT_INFO,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,test.tESTCASEID as tESTCASEID,test.tESTCASENAME as tESTCASENAME,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.pLANOPERATORID as pLANOPERATORID"/>  
    <private name="from" type="String" value="TEST_TASK_EXECUTE_INDIVIDUAL ttei  optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on ttei.pROJECTID = TEST_PROJECT_INFO optional  join TEST_CASE_BASE_INFO test on ttei.tESTCASEID = test.tESTCASEID optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on ttei.tASKID = TEST_PROJECT_TASK_INFO.tASKID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/report_data/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="ttei"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
