<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="DOCUMENTS_DESTROY_RECORD"/><mapping concept="DOCUMENTS_DESTROY_RECORD"><table name="DOCUMENTS_DESTROY_RECORD" type="owner-table"><key field="DESTROY_APPLICATION_NO" type="Integer"/>
<item field="APPLICATION_TIME" relation="aPPLICATIONTIME" type="Date"/>
<item field="DESTROY_TYPE" relation="dESTROYTYPE" type="Integer"/>
<item field="FILE_ID" relation="fILEID" type="String"/>
<item field="FILE_NAME" relation="fILENAME" type="String"/>
<item field="FILE_VER" relation="fILEVER" type="String"/>
<item field="SECRET_LEVEL" relation="sECRETLEVEL" type="Integer"/>
<item field="FILE_DESC" relation="fILEDESC" type="String"/>
<item field="MEMO" relation="mEMO" type="String"/>
<item relation="oPERATORID" field="OPERATOR_ID"></item>
</table>
</mapping>
</model>