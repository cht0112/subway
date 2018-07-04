<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_TASK_EXECUTE_STEP"/>





<mapping concept="TEST_TASK_EXECUTE_STEP"><table name="TEST_TASK_EXECUTE_STEP" type="owner-table"><key field="fID" type="String"/>
<item field="PROJECT_ID" relation="pROJECTID" type="Integer"/>
<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="TEST_CASE_VER" relation="tESTCASEVER" type="Decimal"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_ID" relation="sUBTESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_STEP_ID" relation="sUBTESTCASESTEPID" type="Decimal"/>
<item field="SUB_TEST_CASE_STEP_DESC" relation="sUBTESTCASESTEPDESC" type="String"/>
<item field="SUB_TEST_CASE_STEP_PRIOR" relation="sUBTESTCASESTEPPRIOR" type="Decimal"/>
<item field="SUB_TEST_CASE_STEP_EXECUTE" relation="sUBTESTCASESTEPEXECUTE" type="Decimal"/>
<item field="SUB_TEST_CASE_STEP_CHECK" relation="sUBTESTCASESTEPCHECK" type="Decimal"/>
<item field="EXECUTE_DATE_TIME" relation="eXECUTEDATETIME" type="DateTime"/>
<item field="REPORT_DATE" relation="rEPORTDATE" type="DateTime"/>
<index fields="TASK_ID,TEST_CASE_VER,TEST_CASE_ID,SUB_TEST_CASE_ID" name="AK_1_TASK_EXECUTE_STEP" type="UNIQUE"/>

<item field="SUB_TEST_CASE_STEP_EXCUTE_DESC " relation="sUBTESTCASESTEPEXCUTEDESC "/>
</table>
</mapping>
</model>