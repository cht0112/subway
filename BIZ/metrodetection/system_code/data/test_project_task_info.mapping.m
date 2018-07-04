<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_PROJECT_TASK_INFO"/><mapping concept="TEST_PROJECT_TASK_INFO"><table name="TEST_PROJECT_TASK_INFO" type="owner-table"><key field="fID" type="String"/>
<item field="PROJECT_ID" relation="pROJECTID" type="Integer"/>
<item field="TASK_TYPE" relation="tASKTYPE" type="Decimal"/>
<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="TASK_NAME" relation="tASKNAME"/><item field="PLAN_OPERATOR_ID" relation="pLANOPERATORID" type="String"/>
<item field="PLAN_START_DATE" relation="pLANSTARTDATE" type="DateTime"/>
<item field="PLAN_ENDING_DATE" relation="pLANENDINGDATE" type="DateTime"/>
<item field="TEST_TASK_AREA" relation="tESTTASKAREA" type="String"/>
<item field="TEST_TASK_ITERATIVE" relation="tESTTASKITERATIVE" type="String"/>
<item field="TEST_TASK_REASON" relation="tESTTASKREASON" type="Decimal"/>
<item field="ACTUAL_OPERATOR_ID" relation="aCTUALOPERATORID" type="String"/>
<item field="ACTUAL_START_DATE" relation="aCTUALSTARTDATE" type="DateTime"/>
<item field="ACTUAL_ENDING_DATE" relation="aCTUALENDINGDATE" type="DateTime"/>
<item field="TASK_EXECUTE" relation="tASKEXECUTE" type="Decimal"/>
<item field="TASK_CHECK" relation="tASKCHECK" type="Integer"/>
<item field="TEST_TASK_FILE" relation="tESTTASKFILE" type="Text"/>
<item field="TEST_TASK_RESULT_FILE" relation="tESTTASKRESULTFILE" type="Text"/>
<index fields="TASK_ID" name="AK_1_TEST_PROJECT_TASK" type="UNIQUE"/>

</table>
</mapping>
</model>