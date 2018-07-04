<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="SUB_TEST_CASE_STEP_INFO"/><mapping concept="SUB_TEST_CASE_STEP_INFO"><table name="SUB_TEST_CASE_STEP_INFO" type="owner-table"><key field="fID" type="String"/>
<item field="TEST_CASE_VER" relation="tESTCASEVER" type="Integer"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_ID" relation="sUBTESTCASEID" type="String"/>
<item field="SUB_TEST_CASE_STEP_ID" relation="sUBTESTCASESTEPID" type="Decimal"/>
<item field="SUB_TEST_CASE_STEP_DESC" relation="sUBTESTCASESTEPDESC" type="String"/>
<item field="SUB_TEST_CASE_STEP_PRIOR" relation="sUBTESTCASESTEPPRIOR" type="Decimal"/>
<index fields="TEST_CASE_VER,TEST_CASE_ID,SUB_TEST_CASE_ID,SUB_TEST_CASE_STEP_ID" name="AK_1_SUB_TEST_CASE_STEP" type="UNIQUE"/>
</table>
</mapping>
</model>