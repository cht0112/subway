<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="OA_Pub_SencondKeyWord"/>
<store name="OA_Pub_FirstKeyWord"/>
<store name="OA_Pub_EndKeyWord"/><mapping concept="OA_Pub_FirstKeyWord"><table name="OA_Pub_BaseCode" type="owner-table"><key field="fID" type="String"/>
<discriminator field="fScope" value="首主题词"/>
</table>
</mapping>
<mapping concept="OA_Pub_SencondKeyWord"><table name="OA_Pub_BaseCode" type="owner-table"><key field="fID" type="String"/>
<discriminator field="fScope" value="自选主题词"/>
</table>
</mapping>
<mapping concept="OA_Pub_EndKeyWord"><table name="OA_Pub_BaseCode" type="owner-table"><key field="fID" type="String"/>
<discriminator field="fScope" value="末主题词"/>
</table>
</mapping>
</model>