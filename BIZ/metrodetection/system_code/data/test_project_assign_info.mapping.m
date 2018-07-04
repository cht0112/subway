<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_PROJECT_ASSIGN_INFO"/><mapping concept="TEST_PROJECT_ASSIGN_INFO"><table name="TEST_PROJECT_ASSIGN_INFO" type="owner-table"><key field="fID" type="String"/>
<item field="PROJECT_ID" relation="pROJECTID" type="Integer"/>
<item field="TASK_ID" relation="tASKID" type="Decimal"/>
<item field="ASSIGNED_CONTRACT_CODE" relation="aSSIGNEDCONTRACTCODE" type="String"/>
<item field="MANUFACTURE_ID" relation="mANUFACTUREID" type="Decimal"/>
<item field="DECTION_DEVICE" relation="dECTIONDEVICE" type="String"/>
<item field="DECTION_CONTENT" relation="dECTIONCONTENT" type="String"/>
<item field="ASSIGNED_DATE" relation="aSSIGNEDDATE" type="DateTime"/>
<item field="ASSIGNED_CONTACTOR" relation="aSSIGNEDCONTACTOR" type="String"/>
<item field="CONTACT_TELEPHONE" relation="cONTACTTELEPHONE" type="String"/>
<item field="MEMO" relation="mEMO" type="String"/>
<index fields="TASK_ID" name="AK_1_TEST_PROJECT_ASSIGN" type="UNIQUE"/>
</table>
</mapping>
</model>