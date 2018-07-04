<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="ROLE_OPERATOR"/><mapping concept="ROLE_OPERATOR"><table name="ROLE_OPERATOR" type="owner-table"><key field="fID" type="String"/>
<item field="OPERATOR_ID" relation="oPERATORID" type="String"/>
<item field="ROLE_ID" relation="rOLEID" type="Decimal"/>
<item field="MANAGEMENT_TYPE" relation="mANAGEMENTTYPE" type="Decimal"/>
<index fields="OPERATOR_ID,ROLE_ID" name="AK_KEY_1_ROLE_OPE" type="UNIQUE"/>
</table>
</mapping>
</model>