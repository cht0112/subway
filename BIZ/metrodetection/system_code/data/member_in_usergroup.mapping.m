<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="MEMBER_IN_USERGROUP"/><mapping concept="MEMBER_IN_USERGROUP"><table name="MEMBER_IN_USERGROUP" type="owner-table"><key field="fID" type="String"/>
<item field="OPERATOR_ID" relation="oPERATORID" type="String"/>
<item field="GROUP_MEMBER_ID" relation="gROUPMEMBERID" type="String"/>
<index fields="GROUP_MEMBER_ID,OPERATOR_ID" name="AK_KEY_1_MEMBER_I" type="UNIQUE"/>
</table>
</mapping>
</model>