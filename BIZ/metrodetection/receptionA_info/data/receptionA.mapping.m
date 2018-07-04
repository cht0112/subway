<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="RECEPTION_INFO"/><mapping concept="RECEPTION_INFO"><table name="RECEPTION_INFO" type="owner-table"><key field="RECEPTION_ID" type="Integer"/>
<item field="VISIT_DATE" relation="VISIT_DATE" type="Date"/>
<item field="VISITOR_PERSONS" relation="VISITOR_PERSON" type="Integer"/>
<item field="RECEPT_UNIT" relation="RECEPT_UNIT" type="String"/>
<item field="RECEPT_LEADER" relation="RECEPT_LEADER" type="String"/>
<item field="CONTENT_DESC" relation="CONTENT_DESC" type="String"/>
<item field="VISITOR" relation="VISITOR"/>
<item field="MEMO" relation="MEMO"/>
</table>
</mapping>
</model>