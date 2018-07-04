<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="AP_CustomOrgRange"/>
<store name="AP_CustomOrgDetail"/>
<store name="AP_CustomOrgGroup"/><mapping concept="AP_CustomOrgDetail"><table name="AP_CustomOrgDetail" type="owner-table"><key field="fID" type="String"/>
<item field="fMasterID" relation="fMasterID" type="String"/>
</table>
</mapping>
<mapping concept="AP_CustomOrgGroup"><table name="AP_CustomOrgGroup" type="owner-table"><key field="fID" type="String"/>
<item field="fParent" relation="fParent" type="String"/>
</table>
</mapping>
<mapping concept="AP_CustomOrgRange"><table name="AP_CustomOrgRange" type="owner-table"><key field="fID" type="String"/>
<item field="fMasterID" relation="fMasterID" type="String"/>
</table>
</mapping>
</model>