<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="ToolProtectAction" global="false" procedure="ToolProtectProcedure"><label language="zh_CN">自建查询项目</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="DETECTION_TOOL_INFO"/>
<private name="select" type="String" value="DETECTION_TOOL_INFO.*,TOOL_OCCUPY_INFO,TOOL_OCCUPY_INFO.tOOL_NO as tOOL_NO,TOOL_OCCUPY_INFO.tESTTASKID as tESTTASKID,TOOL_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,TOOL_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TOOL_OCCUPY_INFO.mEMO as mEMO,TEST_PROJECT_TASK_INFO,TEST_PROJECT_TASK_INFO.pROJECTID as pROJECTID,TEST_PROJECT_TASK_INFO.tASKTYPE as tASKTYPE,TEST_PROJECT_TASK_INFO.tASKID as tASKID,TEST_PROJECT_TASK_INFO.pLANOPERATORID as pLANOPERATORID,TEST_PROJECT_TASK_INFO.pLANSTARTDATE as pLANSTARTDATE,TEST_PROJECT_TASK_INFO.pLANENDINGDATE as pLANENDINGDATE,TEST_PROJECT_TASK_INFO.tESTTASKAREA as tESTTASKAREA,TEST_PROJECT_TASK_INFO.tESTTASKITERATIVE as tESTTASKITERATIVE,TEST_PROJECT_TASK_INFO.tESTTASKREASON as tESTTASKREASON,TEST_PROJECT_TASK_INFO.aCTUALOPERATORID as aCTUALOPERATORID,TEST_PROJECT_TASK_INFO.aCTUALSTARTDATE as aCTUALSTARTDATE,TEST_PROJECT_TASK_INFO.aCTUALENDINGDATE as aCTUALENDINGDATE,TEST_PROJECT_TASK_INFO.tASKEXECUTE as tASKEXECUTE,TEST_PROJECT_TASK_INFO.tASKCHECK as tASKCHECK,TEST_PROJECT_TASK_INFO.tESTTASKFILE as tESTTASKFILE,TEST_PROJECT_TASK_INFO.tESTTASKRESULTFILE as tESTTASKRESULTFILE"/>
<private name="from" type="String" value="DETECTION_TOOL_INFO DETECTION_TOOL_INFO  optional  join TOOL_OCCUPY_INFO TOOL_OCCUPY_INFO on DETECTION_TOOL_INFO.tOOLID = TOOL_OCCUPY_INFO.tOOL_NO optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TOOL_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="DETECTION_TOOL_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>