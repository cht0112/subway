<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="MANAGEMENT_TYPE_CODE"/><mapping concept="MANAGEMENT_TYPE_CODE"><table name="MANAGEMENT_TYPE_CODE" type="owner-table"><key field="fID" type="String"/>
<item field="MANAGEMENT_TYPE" relation="mANAGEMENTTYPE" type="Integer"/>
<item field="MANAGEMENT_TYPE_CNAME" relation="mANAGEMENTTYPECNAME" type="String"/>
<item field="MANAGEMENT_TYPE_ENAME" relation="mANAGEMENTTYPEENAME" type="String"/>
<index fields="MANAGEMENT_TYPE_CNAME" name="AK_KEY_1_MANAGEME" type="UNIQUE"/>
</table>
</mapping>
</model>