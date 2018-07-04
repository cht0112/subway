<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryTools" global="false" procedure="myQueryToolsProcedure">
<label language="zh_CN">自建查询工具占用信息</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="DETECTION_TOOL_INFO"/>
<private name="select" type="String" value="DETECTION_TOOL_INFO,DETECTION_TOOL_INFO.tOOLCNAME as tOOLCNAME,DETECTION_TOOL_INFO.tOOLID as tOOLID,TOOL_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,TOOL_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,TOOL_OCCUPY_INFO.tOOLNO1 as tOOLNO1"/>
<private name="from" type="String" value="DETECTION_TOOL_INFO DETECTION_TOOL_INFO  optional  join TOOL_OCCUPY_INFO TOOL_OCCUPY_INFO on DETECTION_TOOL_INFO = TOOL_OCCUPY_INFO.tOOLNO1 optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on TOOL_OCCUPY_INFO.tESTTASKID = TEST_PROJECT_TASK_INFO.tASKID optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on TEST_PROJECT_TASK_INFO.pROJECTID = TEST_PROJECT_INFO"/>
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