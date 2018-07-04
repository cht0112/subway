<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_TASK_STAT"/><mapping concept="TEST_TASK_STAT"><table name="TEST_TASK_STAT" type="owner-table"><key field="fID" type="String"/>
<item field="PROJECT_ID" relation="pROJECTID" type="Integer"/>
<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="BUSINESS_ID" relation="bUSINESSID" type="Decimal"/>
<item field="BUSINESS_STAGE" relation="bUSINESSSTAGE" type="Decimal"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>
<item field="MANUFACTURE_ID" relation="mANUFACTUREID" type="Decimal"/>
<item field="ACTUAL_OPERATOR_ID" relation="aCTUALOPERATORID" type="String"/>
<item field="SUB_TEST_CASE_NUMBER" relation="sUBTESTCASENUMBER" type="Decimal"/>
<item field="SUB_TEST_CASE_TIME" relation="sUBTESTCASETIME" type="Decimal"/>
<item field="SUB_TEST_CASE_STEP_DATA_NUMBER" relation="sUBTESTCASESTEPDATANUMBER" type="Decimal"/>
<item field="PLAN_START_DATE" relation="pLANSTARTDATE" type="Decimal"/>
<item field="ACTUAL_START_DATE" relation="aCTUALSTARTDATE" type="Decimal"/>
<index fields="PROJECT_ID,TASK_ID,TEST_CASE_ID" name="AK_KEY_2_TEST_TAS" type="UNIQUE"/>
</table>
</mapping>
</model>