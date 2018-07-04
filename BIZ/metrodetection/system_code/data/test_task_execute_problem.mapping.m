<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_TASK_EXECUTE_PROBLEM"/><mapping concept="TEST_TASK_EXECUTE_PROBLEM"><table name="TEST_TASK_EXECUTE_PROBLEM" type="owner-table"><key field="DECTION_PROBLEM_NO" type="Integer"/>


<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="DEVICE_ID" relation="dEVICEID" type="String"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_ID" relation="sUBTESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_STEP_ID" relation="sUBTESTCASESTEPID" type="Decimal"/>
<item field="EXECUTE_DATE_TIME" relation="eXECUTEDATETIME" type="Date"/>
<item field="PROBLEM_PRIOR" relation="pROBLEMPRIOR" type="Decimal"/>
<item field="PROBLEM_TYPE" relation="pROBLEMTYPE" type="Decimal"/>
<item field="PROBLEM_DESC" relation="pROBLEMDESC" type="String"/>
<item field="OPERATOR_ID" relation="oPERATORID" type="String"/>
<item field="REPORT_DATE" relation="rEPORTDATE" type="DateTime"/>
<item field="MEMO" relation="mEMO" type="String"/>
<item field="PROBLEM_ID" relation="pROBLEMID" type="Decimal"/>
<index fields="DEVICE_ID,SUB_TEST_CASE_STEP_ID,EXECUTE_DATE_TIME" name="AK_1_TASK_EXECUTE_PROBLEM" type="UNIQUE"/>
</table>
</mapping>
</model>