<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryContentSubjectAction" global="false" procedure="myQueryContentSubjectProcedure"><label language="zh_CN">自建培训内容与课程关联查询</label>

    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="RELATION_CONTENT_SUBJECT"/>  
    <private name="select" type="String" value="RELATION_CONTENT_SUBJECT,RELATION_CONTENT_SUBJECT.TRAINING_CONTENT_ID as TRAINING_CONTENT_ID,TRAINING_COURSE_INFO.COURSE_NAME as COURSE_NAME,TRAINING_CONTENT_INFO.TRAINING_NAME as TRAINING_NAME,TRAINING_CONTENT_INFO.TRAINING_DOC_ID as TRAINING_DOC_ID,RELATION_CONTENT_SUBJECT.COURSE_IDID as COURSE_IDID,SA_DocNode.sDocName as sDocName,TRAINING_CONTENT_INFO.TRAINING_CONTENT as TRAINING_CONTENT1,TRAINING_CONTENT_INFO.TRAINING_DOC as TRAINING_DOC"/>  
    <private name="from" type="String" value="RELATION_CONTENT_SUBJECT RELATION_CONTENT_SUBJECT  optional  join TRAINING_COURSE_INFO TRAINING_COURSE_INFO on RELATION_CONTENT_SUBJECT.COURSE_IDID = TRAINING_COURSE_INFO optional  join TRAINING_CONTENT_INFO TRAINING_CONTENT_INFO on RELATION_CONTENT_SUBJECT.TRAINING_CONTENT_ID = TRAINING_CONTENT_INFO optional  join SA_DocNode SA_DocNode on TRAINING_CONTENT_INFO.TRAINING_DOC_ID = SA_DocNode"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="RELATION_CONTENT_SUBJECT"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryDeptAction" global="false" procedure="myQueryDeptProcedure"><label language="zh_CN">自建部门查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OPERATOR_PASSWORD"/>  
    <private name="select" type="String" value="OPERATOR_PASSWORD,OPERATOR_PASSWORD.uSERNAME as uSERNAME,OPERATOR_PASSWORD.uSERTYPE as uSERTYPE"/>  
    <private name="from" type="String" value="OPERATOR_PASSWORD OPERATOR_PASSWORD"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String" value="OPERATOR_PASSWORD.uSERTYPE  = 2"/>  
    <public name="distinct" type="Boolean" value="true"/>  
    <public name="idColumn" type="String" value="OPERATOR_PASSWORD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="MyQueryTrainingPlanAction" global="false" procedure="MyQueryTrainingPlanProcedure"><label language="zh_CN">自建培训计划查询</label>

    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TRAINING_PLAN_INFO"/>  
    <private name="select" type="String" value="TRAINING_PLAN_INFO.*,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,OPERATOR_PASSWORD.uSERNAME as uSERNAME,case when TRAINING_PLAN_INFO.TRAINING_TYPE_CODE = 1 then '内部办班' when TRAINING_PLAN_INFO.TRAINING_TYPE_CODE = 2 then '外派培训' when TRAINING_PLAN_INFO.TRAINING_TYPE_CODE = 3 then '学历进修' when TRAINING_PLAN_INFO.TRAINING_TYPE_CODE = 4 then '网络培训' when TRAINING_PLAN_INFO.TRAINING_TYPE_CODE = 5 then '自学' end  as trainingType,case when TRAINING_PLAN_INFO.TEACHER_SOURCE_CODE = 1 then '公司' when TRAINING_PLAN_INFO.TEACHER_SOURCE_CODE = 2 then '外聘' end  as teacherSource,HR_BASE_INFO1.oPERATORNAME as oPERATORNAME1"/>  
    <private name="from" type="String" value="TRAINING_PLAN_INFO TRAINING_PLAN_INFO  optional  join HR_BASE_INFO HR_BASE_INFO on TRAINING_PLAN_INFO.PLAN_MAKER = HR_BASE_INFO optional  join OPERATOR_PASSWORD OPERATOR_PASSWORD on TRAINING_PLAN_INFO.DEPT_ID = OPERATOR_PASSWORD optional  join HR_BASE_INFO HR_BASE_INFO1 on TRAINING_PLAN_INFO.PLAN_AUDITOR = HR_BASE_INFO1"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TRAINING_PLAN_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryPlanSubjectAction" global="false" procedure="myQueryPlanSubjectProcedure"><label language="zh_CN">自建培训计划与课程关联查询</label>

    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="RELATION_PLAN_SUBJECT"/>  
    <private name="select" type="String" value="RELATION_PLAN_SUBJECT,RELATION_PLAN_SUBJECT.COURSE_ID as COURSE_ID,RELATION_PLAN_SUBJECT.TRAINING_PLAN_ID as TRAINING_PLAN_ID,TRAINING_COURSE_INFO.COURSE_NAME as COURSE_NAME,TRAINING_COURSE_INFO.COURSE_LENGTH as COURSE_LENGTH"/>  
    <private name="from" type="String" value="RELATION_PLAN_SUBJECT RELATION_PLAN_SUBJECT  optional  join TRAINING_COURSE_INFO TRAINING_COURSE_INFO on RELATION_PLAN_SUBJECT.COURSE_ID = TRAINING_COURSE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="RELATION_PLAN_SUBJECT"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryMemberInDeptAction" global="false" procedure="myQueryMemberInDeptProcedure"><label language="zh_CN">自建评价人所在部门</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TRAINING_PLAN_INFO"/>  
    <private name="select" type="String" value="TRAINING_PLAN_INFO,TRAINING_PLAN_INFO.PLAN_DOC_NO as PLAN_DOC_NO,TRAINING_PLAN_INFO.DEPT_ID as DEPT_ID,OPERATOR_PASSWORD.uSERNAME as uSERNAME,TRAINING_PLAN_INFO.PLAN_NO as PLAN_NO"/>  
    <private name="from" type="String" value="TRAINING_PLAN_INFO TRAINING_PLAN_INFO  optional  join OPERATOR_PASSWORD OPERATOR_PASSWORD on TRAINING_PLAN_INFO.DEPT_ID = OPERATOR_PASSWORD"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TRAINING_PLAN_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryTrainingEvaluationIdAction" global="false" procedure="myQueryTrainingEvaluationIdProcedure"><label language="zh_CN">自建上岗评价人员信息</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="MEMBER_IN_USERGROUP"/>  
    <private name="select" type="String" value="MEMBER_IN_USERGROUP,MEMBER_IN_USERGROUP.oPERATORID as oPERATORID,MEMBER_IN_USERGROUP.gROUPMEMBERID as gROUPMEMBERID,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>  
    <private name="from" type="String" value="MEMBER_IN_USERGROUP MEMBER_IN_USERGROUP  optional  join HR_BASE_INFO HR_BASE_INFO on MEMBER_IN_USERGROUP.gROUPMEMBERID  =  HR_BASE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="MEMBER_IN_USERGROUP"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryTrainingEvaluationInfoAction" global="false" procedure="myQueryTrainingEvaluationInfoProcedure"><label language="zh_CN">自建上岗资格评价信息</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TRAINING_EVALUATION_INFO"/>  
    <private name="select" type="String" value="TRAINING_EVALUATION_INFO,TRAINING_EVALUATION_INFO.EVALUATION_CODE as EVALUATION_CODE,TRAINING_EVALUATION_INFO.EVALUATION_NO as EVALUATION_NO,TRAINING_EVALUATION_INFO.EVALUATED_ID as EVALUATED_ID,TRAINING_EVALUATION_INFO.EVALUATED_DEPT as EVALUATED_DEPT,TRAINING_EVALUATION_INFO.POSITION_ID as POSITION_ID,TRAINING_EVALUATION_INFO.IDENTIFED as IDENTIFED,TRAINING_EVALUATION_INFO.WORK_EXP_YEAR as WORK_EXP_YEAR,TRAINING_EVALUATION_INFO.WORK_TEST_YEAR as WORK_TEST_YEAR,TRAINING_EVALUATION_INFO.ETHICS_EVALUATION as ETHICS_EVALUATION,TRAINING_EVALUATION_INFO.SKILL_EVALUATION as SKILL_EVALUATION,TRAINING_EVALUATION_INFO.EFFECT_EVALUATION as EFFECT_EVALUATION,TRAINING_EVALUATION_INFO.DEFICIENCY as DEFICIENCY,TRAINING_EVALUATION_INFO.RECOMMENDATION as RECOMMENDATION,TRAINING_EVALUATION_INFO.EVALUATEE as EVALUATEE,TRAINING_EVALUATION_INFO.EVALUATEE_DATE as EVALUATEE_DATE,TRAINING_EVALUATION_INFO.APPROVAL_OPINION as APPROVAL_OPINION,TRAINING_EVALUATION_INFO.APPROVAL_ID as APPROVAL_ID,TRAINING_EVALUATION_INFO.APPROVAL_DATE as APPROVAL_DATE,TRAINING_EVALUATION_INFO.MEMO as MEMO,HR_BASE_INFO.oPERATORNAME as EVALUATED_NAME,HR_BASE_INFO1.oPERATORNAME as EVALUATEE_NAME,HR_BASE_INFO2.oPERATORNAME as APPROVAL_NAME,case when TRAINING_EVALUATION_INFO.POSITION_ID = 1 then '项目经理' when TRAINING_EVALUATION_INFO.POSITION_ID = 2 then '测试工程师' when TRAINING_EVALUATION_INFO.POSITION_ID = 3 then '其他' end  as POSITION_NAME,case when TRAINING_EVALUATION_INFO.IDENTIFED = '1' then '正式员工' when TRAINING_EVALUATION_INFO.IDENTIFED = '2' then '试用期' when TRAINING_EVALUATION_INFO.IDENTIFED = '3' then '实习学生' when TRAINING_EVALUATION_INFO.IDENTIFED = '4' then '其他' end  as IDENTIFED_NAME,OPERATOR_PASSWORD.uSERNAME as uSERNAME,case when TRAINING_EVALUATION_INFO.RECOMMENDATION = '1 3' then '核发' when TRAINING_EVALUATION_INFO.RECOMMENDATION = '2 3' then '核发' else '不予核发' end  as DEFICIENCY_NAME,case when TRAINING_EVALUATION_INFO.APPROVAL_OPINION = '1' then '同意' when TRAINING_EVALUATION_INFO.APPROVAL_OPINION = '2' then '不同意' end  as APPROVAL_OPINION_NAME"/>  
    <private name="from" type="String" value="TRAINING_EVALUATION_INFO TRAINING_EVALUATION_INFO  optional  join HR_BASE_INFO HR_BASE_INFO on TRAINING_EVALUATION_INFO.EVALUATED_ID = HR_BASE_INFO optional  join HR_BASE_INFO HR_BASE_INFO1 on TRAINING_EVALUATION_INFO.EVALUATEE = HR_BASE_INFO1 optional  join HR_BASE_INFO HR_BASE_INFO2 on TRAINING_EVALUATION_INFO.APPROVAL_ID = HR_BASE_INFO2 optional  join OPERATOR_PASSWORD OPERATOR_PASSWORD on TRAINING_EVALUATION_INFO.EVALUATED_DEPT = OPERATOR_PASSWORD"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TRAINING_EVALUATION_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
<action name="myQueryContentAction" global="false" procedure="myQueryContentProcedure"><label language="zh_CN">自建培训内容列表显示查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TRAINING_CONTENT_INFO"/>  
    <private name="select" type="String" value="TRAINING_CONTENT_INFO,TRAINING_CONTENT_INFO.TRAINING_NAME as TRAINING_NAME,TRAINING_CONTENT_INFO.TRAINING_DOC_ID as TRAINING_DOC_ID,TRAINING_CONTENT_INFO.TRAINING_DOC as TRAINING_DOC,TRAINING_CONTENT_INFO.TRAINING_CONTENT as TRAINING_CONTENT,SA_DocNode,SA_DocNode.sParentID as sParentID,SA_DocNode.sDocName as sDocName,SA_DocNode.sSize as sSize,SA_DocNode_4.sDocName as sDocName1"/>  
    <private name="from" type="String" value="TRAINING_CONTENT_INFO TRAINING_CONTENT_INFO  optional  join SA_DocNode SA_DocNode on TRAINING_CONTENT_INFO.TRAINING_DOC_ID = SA_DocNode optional  join SA_DocNode SA_DocNode_4 on SA_DocNode.sParentID = SA_DocNode_4"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/training_management/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TRAINING_CONTENT_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>

</model>