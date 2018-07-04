<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryQA_SUPERVISION_PLAN_ROUNDAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="QA_SUPERVISION_PLAN_ROUND"/>
<private name="select" type="String" value="QA_SUPERVISION_PLAN_ROUND.*,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>
<private name="from" type="String" value="QA_SUPERVISION_PLAN_ROUND QA_SUPERVISION_PLAN_ROUND  optional  join HR_BASE_INFO HR_BASE_INFO on QA_SUPERVISION_PLAN_ROUND.SUPERVISION_PERSON =  HR_BASE_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/quality_supervision/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="QA_SUPERVISION_PLAN_ROUND"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
<label language="zh_CN">查询质量监督计划轮次信息</label>
</action>
<action name="saveQA_SUPERVISION_PLAN_ROUNDAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="QA_SUPERVISION_PLAN_ROUND"/>
<private name="dataModel" type="String" value="/metrodetection/quality_supervision/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createQA_SUPERVISION_PLAN_ROUNDAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="QA_SUPERVISION_PLAN_ROUND"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>