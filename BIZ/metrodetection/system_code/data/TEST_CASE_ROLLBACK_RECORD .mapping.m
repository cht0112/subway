<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_CASE_ROLLBACK_RECORD"/>




<mapping concept="TEST_CASE_ROLLBACK_RECORD"><table name="TEST_CASE_ROLLBACK_RECORD" type="owner-table"><key field="ROLLBACK_RECORD_NO" type="Decimal"/>
<item field="AUTHORIZER_ID" relation="AUTHORIZER_ID"/>
<item field="OPERATOR_ID" relation="OPERATOR_ID"/>
<item field="ROLLBACK_DESC" relation="ROLLBACK_DESC"/>
<item field="PROJECT_ID" relation="PROJECT_ID"/>
<item field="TASK_ID" relation="TASK_ID"/>
<item field="TEST_CASE_ID" relation="TEST_CASE_ID"/>
<item field="ROLLBACK_TIME" relation="ROLLBACK_TIME"/>
<item field="TIMES" relation="TIMES"/>
</table>
</mapping>
</model>