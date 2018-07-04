<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_PROJECT_INFO"/>

<mapping concept="TEST_PROJECT_INFO"><table name="TEST_PROJECT_INFO" type="owner-table"><key field="pROJECT_ID" type="Integer"/>
<item field="APPLICATION_NO" relation="aPPLICATIONNO" type="Integer"/>
<item field="TEST_SCHEME_ID" relation="tESTSCHEMEID" type="Integer"/>
<item field="PROJECT_NAME" relation="pROJECTNAME" type="String"/>
<item field="PROJECT_TYPE" relation="pROJECTTYPE" type="Integer"/>
<item field="ASSIGNED_MANUFACTURE_ID" relation="aSSIGNEDMANUFACTUREID" type="Integer"/>
<item field="CONTACT_PERSON" relation="cONTACTPERSON" type="String"/>
<item field="CONTACT_MOBILE" relation="cONTACTMOBILE" type="String"/>
<item field="CONTACT_TELEPHONE" relation="cONTACTTELEPHONE" type="String"/>
<item field="CONTACT_EMAIL" relation="cONTACTEMAIL" type="String"/>
<item field="NOTIFY_TYPE" relation="nOTIFYTYPE" type="Integer"/>
<item field="LINE_ID" relation="lINEID" type="Integer"/>
<item field="BUSINESS_ID" relation="bUSINESSID" type="Integer"/>
<item field="MANUFACTURE_ID" relation="mANUFACTUREID" type="Decimal"/>
<item field="PROJECT_DATE" relation="pROJECTDATE" type="Date"/>
<item field="ENDING_DATE" relation="eNDINGDATE" type="Date"/>
<item field="PROJECT_MANAGER" relation="pROJECTMANAGER" type="String"/>
<item field="QA_MANAGER" relation="qAMANAGER" type="String"/>
<item field="TEST_MANAGER" relation="tESTMANAGER" type="String"/>
<item field="TECH_MANAGER" relation="tECHMANAGER" type="String"/>
<item field="MAKE_DATE" relation="mAKEDATE" type="Date"/>
<item field="EXECUTE_STATE" relation="eXECUTESTATE" type="Integer"/>
<item field="MEMO" relation="mEMO" type="String"/>
<index fields="TEST_SCHEME_ID" name="REFERENCE_39_FK" type="NORMAL"/>
<index fields="APPLICATION_NO" name="REFERENCE_37_FK" type="NORMAL"/>
</table>
</mapping>
</model>