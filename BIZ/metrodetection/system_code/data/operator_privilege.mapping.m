<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="OPERATOR_PRIVILEGE"/><mapping concept="OPERATOR_PRIVILEGE"><table name="OPERATOR_PRIVILEGE" type="owner-table"><key field="fID" type="String"/>
<item field="OPERATOR_ID" relation="oPERATORID" type="String"/>
<item field="PRIVILEGE_ID" relation="pRIVILEGEID" type="Decimal"/>
<index fields="OPERATOR_ID,PRIVILEGE_ID" name="AK_KEY_1_OPERATOR" type="UNIQUE"/>
</table>
</mapping>
</model>