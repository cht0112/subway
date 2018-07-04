<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="SECRET_LEVEL_CODE"/><mapping concept="SECRET_LEVEL_CODE"><table name="SECRET_LEVEL_CODE" type="owner-table"><key field="fID" type="String"/>
<item field="SECRET_LEVEL" relation="sECRETLEVEL" type="Integer"/>
<item field="SECRET_LEVEL_CNAME" relation="sECRETLEVELCNAME" type="String"/>
<item field="SECRET_LEVEL_ENAME" relation="sECRETLEVELENAME" type="String"/>
<index fields="SECRET_LEVEL_CNAME" name="AK_KEY_1_SECRET_L" type="UNIQUE"/>
</table>
</mapping>
</model>