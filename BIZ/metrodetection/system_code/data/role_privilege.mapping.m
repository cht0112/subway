<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="ROLE_PRIVILEGE"/><mapping concept="ROLE_PRIVILEGE"><table name="ROLE_PRIVILEGE" type="owner-table"><key field="fID" type="String"/>
<item field="ROLE_ID" relation="rOLEID" type="Integer"/>
<item field="MANAGEMENT_TYPE" relation="mANAGEMENTTYPE" type="Decimal"/>
<item field="PRIVILEGE_ID" relation="pRIVILEGEID" type="Decimal"/>
<index fields="ROLE_ID,PRIVILEGE_ID" name="AK_KEY_1_ROLE_PRI" type="UNIQUE"/>
</table>
</mapping>
</model>