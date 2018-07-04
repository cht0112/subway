<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="BUSINESS_STAGE_CODE"/><mapping concept="BUSINESS_STAGE_CODE"><table name="BUSINESS_STAGE_CODE" type="owner-table"><key field="fID" type="String"/>
<item field="BUSINESS_ID" relation="bUSINESSID" type="Integer"/>
<item field="BUSINESS_STAGE" relation="bUSINESSSTAGE" type="Decimal"/>
<item field="BUSINESS_STAGE_CNAME" relation="bUSINESSSTAGECNAME" type="String"/>
<item field="BUSINESS_STAGE_ENAME" relation="bUSINESSSTAGEENAME" type="String"/>
<index fields="BUSINESS_ID,BUSINESS_STAGE" name="AK_KEY_1_BUSINESS" type="UNIQUE"/>
</table>
</mapping>
</model>