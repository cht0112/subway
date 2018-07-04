<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_TASK_CASE_INFO"/>

<mapping concept="TEST_TASK_CASE_INFO"><table name="TEST_TASK_CASE_INFO" type="owner-table"><key field="fID" type="String"/>
<item field="PROJECT_ID" relation="pROJECTID" type="Decimal"/>
<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="TEST_CASE_VER" relation="tESTCASEVER" type="Decimal"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="BUSINESS_ID" relation="bUSINESSID" type="Decimal"/>
<item field="BUSINESS_STAGE" relation="bUSINESSSTAGE" type="Decimal"/>
<item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Decimal"/>
<item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>
<index fields="TASK_ID,TEST_CASE_VER,TEST_CASE_ID" name="AK_KEY_1_TTCI" type="UNIQUE"/>
</table>
</mapping>
</model>