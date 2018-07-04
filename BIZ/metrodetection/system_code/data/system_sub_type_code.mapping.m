<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="SYSTEM_SUB_TYPE_CODE"/><mapping concept="SYSTEM_SUB_TYPE_CODE"><table name="SYSTEM_SUB_TYPE_CODE" type="owner-table"><key field="fID" type="String"/>
<item field="SYSTEM_TYPE" relation="sYSTEMTYPE" type="Integer"/>
<item field="SYSTEM_SUB_TYPE" relation="sYSTEMSUBTYPE" type="Decimal"/>
<item field="SYSTEM_SUB_TYPE_CNAME" relation="sYSTEMSUBTYPECNAME" type="String"/>
<item field="SYSTEM_SUB_TYPE_ENAME" relation="sYSTEMSUBTYPEENAME" type="String"/>
<index fields="SYSTEM_TYPE,SYSTEM_SUB_TYPE" name="AK_KEY_1_SYSTEM_S" type="UNIQUE"/>
</table>
</mapping>
</model>