<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="AFC_MANUFACTURER_INFO"/><mapping concept="AFC_MANUFACTURER_INFO"><table name="AFC_MANUFACTURER_INFO" type="owner-table"><key field="mANUFACTURE_ID" type="Integer"/>
<item field="MANUFACTURE_ID_CNAME" relation="mANUFACTUREIDCNAME" type="String"/>
<item field="MANUFACTURE_ID_ENAME" relation="mANUFACTUREIDENAME" type="String"/>
<item field="MANUFACTURE_TYPE" relation="mANUFACTURETYPE" type="Decimal"/>
<item field="MANUFACTURE_ADDRESS" relation="mANUFACTUREADDRESS" type="String"/>
<item field="MANUFACTURE_POSTCODE" relation="mANUFACTUREPOSTCODE" type="Decimal"/>
<item field="CONTACT_TELEPHONE" relation="cONTACTTELEPHONE" type="String"/>
<item field="CONTACTOR" relation="cONTACTOR" type="String"/>
<item field="CONTACT_MOBILE" relation="cONTACTMOBILE" type="String"/>
<item field="FAX_NUMBER" relation="fAXNUMBER" type="String"/>
<item field="CONTACT_EMAIL" relation="cONTACTEMAIL" type="String"/>
<item field="MEMO" relation="mEMO" type="String"/>
<item field="oPERATOR_ID" relation="oPERATOR_ID"/>
</table>
</mapping>
</model>