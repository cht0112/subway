<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryTestProJectTaskInfoAction" global="false" procedure="queryTestProJectTaskInfoProcedure">
    <label language="zh_CN">查询项目测试任务信息New</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_PROJECT_TASK_INFO"/>  
    <private name="select" type="String" value="TEST_PROJECT_TASK_INFO,TEST_PROJECT_TASK_INFO.pROJECTID as pROJECTID,TEST_PROJECT_TASK_INFO.tASKTYPE as tASKTYPE,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.pLANOPERATORID as pLANOPERATORID,TEST_PROJECT_TASK_INFO.pLANSTARTDATE as pLANSTARTDATE,TEST_PROJECT_TASK_INFO.pLANENDINGDATE as pLANENDINGDATE,TEST_PROJECT_TASK_INFO.tESTTASKAREA as tESTTASKAREA,TEST_PROJECT_TASK_INFO.tESTTASKITERATIVE as tESTTASKITERATIVE,TEST_PROJECT_TASK_INFO.tESTTASKREASON as tESTTASKREASON,TEST_PROJECT_TASK_INFO.aCTUALOPERATORID as aCTUALOPERATORID,TEST_PROJECT_TASK_INFO.aCTUALSTARTDATE as aCTUALSTARTDATE,TEST_PROJECT_TASK_INFO.aCTUALENDINGDATE as aCTUALENDINGDATE,TEST_PROJECT_TASK_INFO.tASKEXECUTE as tASKEXECUTE,TEST_PROJECT_TASK_INFO.tESTTASKFILE as tESTTASKFILE,TEST_PROJECT_TASK_INFO.tESTTASKRESULTFILE as tESTTASKRESULTFILE,TEST_TASK_REASON_CODE,TEST_TASK_REASON_CODE.tESTTASKREASONCNAME as tESTTASKREASONCNAME,TEST_TASK_REASON_CODE.tESTTASKREASONENAME as tESTTASKREASONENAME,case when TEST_PROJECT_TASK_INFO.tASKEXECUTE = 0 then '未执行' when TEST_PROJECT_TASK_INFO.tASKEXECUTE = 1 then '准备执行' when TEST_PROJECT_TASK_INFO.tASKEXECUTE = 2 then '执行中' when TEST_PROJECT_TASK_INFO.tASKEXECUTE = 3 then '完成' when TEST_PROJECT_TASK_INFO.tASKEXECUTE = 9 then '手工导入' else '无法完成' end  as taskExecuteName,case when TEST_PROJECT_TASK_INFO.tASKCHECK = 0 then '未知' when TEST_PROJECT_TASK_INFO.tASKCHECK = 1 then '成功' when TEST_PROJECT_TASK_INFO.tASKCHECK = 2 then '失败' when TEST_PROJECT_TASK_INFO.tASKCHECK = 3 then '无法完成' end  as tASKCHECK,TEST_PROJECT_INFO,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>  
    <private name="from" type="String" value="TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO  optional  join TEST_TASK_REASON_CODE TEST_TASK_REASON_CODE on TEST_PROJECT_TASK_INFO.tESTTASKREASON = TEST_TASK_REASON_CODE optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_TASK_INFO.pROJECTID = TEST_PROJECT_INFO optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = TEST_PROJECT_TASK_INFO.pLANOPERATORID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_PROJECT_TASK_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
