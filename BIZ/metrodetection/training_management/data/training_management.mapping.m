<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="RELATION_PLAN_SUBJECT"/>
<store name="RELATION_CONTENT_SUBJECT"/>
<store name="TRAINING_PLAN_INFO"/>
<store name="TRAINING_EVALUATION_INFO"/>
<store name="TRAINING_COURSE_INFO"/>
<store name="TRAINING_CONTENT_INFO"/><mapping concept="TRAINING_CONTENT_INFO"><table name="TRAINING_CONTENT_INFO" type="owner-table"><key field="TRAINING_CONTENT_ID" type="Integer"/>
<item field="TRAINING_NAME" relation="TRAINING_NAME" type="String"/>
<item field="TRAINING_CONTENT" relation="TRAINING_CONTENT" type="String"/>
<item field="TRAINING_DOC_ID" relation="TRAINING_DOC_ID" type="String"/>
<item field="TRAINING_DOC" relation="TRAINING_DOC"/><item field="fChildContentSubjectContent" relation="fChildContentSubjectContent" type="Integer"/>

</table>
</mapping>
<mapping concept="TRAINING_COURSE_INFO"><table name="TRAINING_COURSE_INFO" type="owner-table"><key field="COURSE_ID" type="Integer"/>
<item field="COURSE_NAME" relation="COURSE_NAME" type="String"/>
<item field="COURSE_LENGTH" relation="COURSE_LENGTH" type="String"/>
<item field="fChildContentSubject" relation="fChildContentSubject" type="Integer"/>
<item field="fChildPlanSubject" relation="fChildPlanSubject" type="Integer"/>
</table>
</mapping>
<mapping concept="TRAINING_EVALUATION_INFO"><table name="TRAINING_EVALUATION_INFO" type="owner-table"><key field="EVALUATION_ID" type="Integer"/>

<item field="EVALUATION_CODE" relation="EVALUATION_CODE" type="String"/>
<item field="EVALUATION_NO" relation="EVALUATION_NO" type="String"/>
<item field="EVALUATED_ID" relation="EVALUATED_ID" type="String"/>
<item field="EVALUATED_DEPT" relation="EVALUATED_DEPT" type="String"/>
<item field="POSITION_ID" relation="POSITION_ID" type="Integer"/>
<item field="WORK_EXP_YEAR" relation="WORK_EXP_YEAR" type="Integer"/>
<item field="WORK_TEST_YEAR" relation="WORK_TEST_YEAR" type="Integer"/>
<item field="ETHICS_EVALUATION" relation="ETHICS_EVALUATION" type="String"/>
<item field="SKILL_EVALUATION" relation="SKILL_EVALUATION" type="String"/>
<item field="EFFECT_EVALUATION" relation="EFFECT_EVALUATION" type="String"/>
<item field="EVALUATEE_DATE" relation="EVALUATEE_DATE" type="Date"/>
<item field="APPROVAL_OPINION" relation="APPROVAL_OPINION" type="String"/>
<item field="APPROVAL_ID" relation="APPROVAL_ID" type="String"/>
<item field="APPROVAL_DATE" relation="APPROVAL_DATE" type="Date"/>
<index fields="TRAINING_PLAN_ID" name="RELATIONSHIP_7_FK" type="NORMAL"/>
</table>
</mapping>
<mapping concept="TRAINING_PLAN_INFO"><table name="TRAINING_PLAN_INFO" type="owner-table"><key field="TRAINING_PLAN_ID" type="Integer"/>
<item field="PLAN_DOC_NO" relation="PLAN_DOC_NO" type="String"/>
<item field="PLAN_NO" relation="PLAN_NO" type="String"/>
<item field="TRAINING_DATE" relation="TRAINING_DATE" type="Date"/>
<item field="DEPT_ID" relation="DEPT_ID" type="String"/>
<item field="TRAINING_TYPE_CODE" relation="TRAINING_TYPE_CODE" type="Integer"/>
<item field="TEACHER_SOURCE_CODE" relation="TEACHER_SOURCE_CODE" type="Integer"/>
<item field="TRAINING_TIME" relation="TRAINING_TIME" type="Integer"/>
<item field="TRAINEE_NUMBER" relation="TRAINEE_NUMBER" type="Integer"/>
<item field="TRAINING_PERIOD" relation="TRAINING_PERIOD" type="Integer"/>
<item field="TRAINING_BUDGET" relation="TRAINING_BUDGET" type="Decimal"/>
<item field="PLAN_MAKER" relation="PLAN_MAKER" type="String"/>
<item field="PLAN_MAKE_DATE" relation="PLAN_MAKE_DATE" type="Date"/>
<item field="PLAN_AUDITOR" relation="PLAN_AUDITOR" type="String"/>
<item field="PLAN_AUDIT_DATE" relation="PLAN_AUDIT_DATE" type="Date"/>
</table>
</mapping>
<mapping concept="RELATION_CONTENT_SUBJECT"><table name="RELATION_CONTENT_SUBJECT" type="owner-table"><key field="RCS_ID" type="Integer"/>
<item field="TRAINING_CONTENT_ID" relation="TRAINING_CONTENT_ID" type="Integer"/>

<index fields="TRAINING_CONTENT_ID" name="RELATIONSHIP_8_FK" type="NORMAL"/>



<item field="COURSE_ID" relation="COURSE_IDID"/>
</table>
</mapping>
<mapping concept="RELATION_PLAN_SUBJECT"><table name="RELATION_PLAN_SUBJECT" type="owner-table"><key field="RPS_ID" type="Integer"/>
<item field="COURSE_ID" relation="COURSE_ID" type="Integer"/>
<item field="TRAINING_PLAN_ID" relation="TRAINING_PLAN_ID" type="Integer"/>
<index fields="TRAINING_PLAN_ID" name="RELATIONSHIP_11_FK" type="NORMAL"/>
<index fields="COURSE_ID" name="RELATIONSHIP_10_FK" type="NORMAL"/>


</table>
</mapping>
</model>