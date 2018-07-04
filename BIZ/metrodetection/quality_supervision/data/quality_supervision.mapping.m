<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="QA_SUPERVISION_PLAN"/><mapping concept="QA_SUPERVISION_PLAN"><table name="QA_SUPERVISION_PLAN" type="owner-table"><key field="SUPERVISION_PLAN_ID" type="Integer"/>
<item field="SUPERVISION_PLAN_CODE" relation="SUPERVISION_PLAN_CODEPLANCODE" type="String"/>
<item field="SUPERVISION_NO" relation="SUPERVISION_NO" type="String"/>
<item field="PROJECT_ID" relation="PROJECT_ID" type="Integer"/>
<item field="PROJECT_NAME" relation="PROJECT_NAME" type="String"/>
<item field="PROJECT_DATE" relation="PROJECT_DATE" type="Date"/>
<item field="ENDING_DATE" relation="ENDING_DATE" type="Date"/>
<item field="EMPLOYEE_NUMBER" relation="EMPLOYEE_NUMBER" type="Integer"/>
<item field="PROBATION_NUMBER" relation="PROBATION_NUMBER" type="Integer"/>
<item field="STUDENT_NUMBER" relation="STUDENT_NUMBER" type="Integer"/>
<item field="OTHER_NUMBER" relation="OTHER_NUMBER" type="Integer"/>
<item field="TOTAL_NUMBER" relation="TOTAL_NUMBER" type="Integer"/>
<item field="PROJECT_PRIOR" relation="PROJECT_PRIOR" type="Integer"/>
<item field="SUPERVISION_COUNT" relation="SUPERVISION_COUNT" type="Integer"/>
<item field="PLAN_PEOPLE" relation="PLAN_PEOPLE" type="String"/>
<item field="PLAN_DATE" relation="PLAN_DATE" type="Date"/>
<item field="RESPONSOR_VIEW" relation="RESPONSOR_VIEW" type="String"/>
<item field="fChildren" relation="fChildren" type="Integer"/>
<item field="fChildren2" relation="fChildren2" type="Integer"/>
</table>
</mapping>
</model>