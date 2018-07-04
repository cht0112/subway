<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="NewProblemAction" global="false" procedure="NewProblemProcedure"><label language="zh_CN">自建查询问题</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_TASK_EXECUTE_PROBLEM"/>  
    <private name="select" type="String" value="TEST_TASK_EXECUTE_PROBLEM.*,PROBLEM_RESOURCE_INFO,PROBLEM_RESOURCE_INFO.MANUFACTURE_ID as MANUFACTURE_ID,PROBLEM_RESOURCE_INFO.APPLY_FOR_OBJECT as APPLY_FOR_OBJECT,PROBLEM_RESOURCE_INFO.APPLY_FOR_DEVICE_TYPE as APPLY_FOR_DEVICE_TYPE,PROBLEM_RESOURCE_INFO.DEVICE_STYLE as DEVICE_STYLE,PROBLEM_RESOURCE_INFO.APPLY_FOR_RANGE as APPLY_FOR_RANGE,PROBLEM_RESOURCE_INFO.APPLY_FOR_SUB_RANGE as APPLY_FOR_SUB_RANGE,PROBLEM_RESOURCE_INFO.HARDWARE_VERSION as HARDWARE_VERSION,PROBLEM_RESOURCE_INFO.PROBLEM_PRIOR as PROBLEM_PRIOR,PROBLEM_RESOURCE_INFO.PROBLEM_TYPE as PROBLEM_TYPE,PROBLEM_RESOURCE_INFO.PROBLEM_DESC as PROBLEM_DESC,PROBLEM_RESOURCE_INFO.SOLUTION as SOLUTION,PROBLEM_RESOURCE_INFO.MEMO as MEMO"/>  
    <private name="from" type="String" value="TEST_TASK_EXECUTE_PROBLEM TEST_TASK_EXECUTE_PROBLEM  optional  join PROBLEM_RESOURCE_INFO PROBLEM_RESOURCE_INFO on TEST_TASK_EXECUTE_PROBLEM.pROBLEMID  =  PROBLEM_RESOURCE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/defect_information/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_TASK_EXECUTE_PROBLEM"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>