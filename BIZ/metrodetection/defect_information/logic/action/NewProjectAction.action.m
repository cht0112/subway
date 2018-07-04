<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="NewProjectAction" global="false" procedure="NewProjectProcedure"><label language="zh_CN">自建项目查询</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_TASK_EXECUTE_PROBLEM"/>
<private name="select" type="String" value="TEST_TASK_EXECUTE_PROBLEM.*,PROBLEM_PRIOR_CODE.pROBLEMPRIORCNAME as pROBLEMPRIORCNAME,PROBLEM_TYPE_CODE.pROBLEMTYPECNAME as pROBLEMTYPECNAME,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>
<private name="from" type="String" value="TEST_TASK_EXECUTE_PROBLEM TEST_TASK_EXECUTE_PROBLEM  optional  join PROBLEM_PRIOR_CODE PROBLEM_PRIOR_CODE on TEST_TASK_EXECUTE_PROBLEM.pROBLEMPRIOR = PROBLEM_PRIOR_CODE optional  join PROBLEM_TYPE_CODE PROBLEM_TYPE_CODE on TEST_TASK_EXECUTE_PROBLEM.pROBLEMTYPE = PROBLEM_TYPE_CODE.pROBLEMTYPE optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TEST_TASK_EXECUTE_PROBLEM.tASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join HR_BASE_INFO HR_BASE_INFO on TEST_TASK_EXECUTE_PROBLEM.oPERATORID = HR_BASE_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
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