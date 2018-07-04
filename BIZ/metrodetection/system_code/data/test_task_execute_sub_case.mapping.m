<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_TASK_EXECUTE_SUB_CASE"/><mapping concept="TEST_TASK_EXECUTE_SUB_CASE"><table name="TEST_TASK_EXECUTE_SUB_CASE" type="owner-table"><key field="fID" type="String"/>

<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="TEST_CASE_VER" relation="tESTCASEVER" type="Decimal"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_ID" relation="sUBTESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_NAME" relation="sUBTESTCASENAME" type="String"/>
<item field="SUB_TEST_CASE_PRIOR" relation="sUBTESTCASEPRIOR" type="Decimal"/>
<item field="SUB_TEST_CASE_ORDER" relation="sUBTESTCASEORDER" type="Decimal"/>
<item field="SUB_TEST_CASE_TIME" relation="sUBTESTCASETIME" type="Decimal"/>
<item field="TIME_UNIT_ID" relation="tIMEUNITID" type="Decimal"/>
<item field="SUB_TEST_CASE_EXECUTE" relation="sUBTESTCASEEXECUTE" type="Decimal"/>
<item field="SUB_TEST_CASE_CHECK" relation="sUBTESTCASECHECK" type="Decimal"/>
<item field="ACTUAL_SUB_TEST_CASE_TIME" relation="aCTUALSUBTESTCASETIME" type="Decimal"/>
<item field="EXECUTE_DATE_TIME" relation="eXECUTEDATETIME" type="DateTime"/>
<item field="SUB_TEST_CASE_DESC" relation="sUBTESTCASEDESC" type="String"/>
<item field="REPORT_DATE" relation="rEPORTDATE" type="DateTime"/>
<index fields="TASK_ID,TEST_CASE_VER,TEST_CASE_ID,SUB_TEST_CASE_ID" name="AK_1_EXECUTE_SUB_CASE" type="UNIQUE"/>
</table>
</mapping>
</model>