<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_TASK_EXECUTE_INDIVIDUAL"/><mapping concept="TEST_TASK_EXECUTE_INDIVIDUAL"><table name="TEST_TASK_EXECUTE_INDIVIDUAL" type="owner-table"><key field="fID" type="String"/>
<item field="REPORT_DATE" relation="rEPORTDATE" type="Decimal"/>
<item field="PROJECT_ID" relation="pROJECTID" type="Decimal"/>
<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_PASS" relation="sUBTESTCASEPASS" type="Decimal"/>
<item field="SUB_TEST_CASE_FAILED" relation="sUBTESTCASEFAILED" type="Decimal"/>
<item field="SUB_TEST_CASE_BLOCKED" relation="sUBTESTCASEBLOCKED" type="Decimal"/>
<item field="ACTUAL_SUB_TEST_CASE_TIME" relation="aCTUALSUBTESTCASETIME" type="Decimal"/>
<index fields="REPORT_DATE,PROJECT_ID,TASK_ID,TEST_CASE_ID" name="AK_KEY_1_TEST_TAS" type="UNIQUE"/>
</table>
</mapping>
</model>