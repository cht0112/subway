<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="FUNC_ID"/>
<store name="ROLE_OPERATOR"/>
<store name="ROLE_PRIVILEGE"/>
<store name="PRIVILEGE_FUNC"/>

<store name="ROLE_ID"/>



<mapping concept="ROLE_ID"><table name="ROLE_ID" type="owner-table"><key field="ROLE_ID" type="String"/>
<item field="ROLE_NAME" relation="rOLENAME" type="String"/>
<item field="MANAGEMENT_TYPE" relation="mANAGEMENTTYPE" type="Decimal"/>
<item field="OFFICE_ID" relation="oFFICEID" type="Decimal"/>
<item field="POSITION_ID" relation="pOSITIONID" type="Decimal"/>
<item field="RID" relation="rID" type="String"/>
<index fields="ROLE_ID" name="AK_KEY_1_ROLE_ID" type="UNIQUE"/>
</table>
</mapping>

<mapping concept="PRIVILEGE_FUNC"><table name="PRIVILEGE_FUNC" type="owner-table"><key field="PRIVILEGE_ID" type="Decimal"/>

<item field="PRIVILEGE_TYPE" relation="pRIVILEGETYPE" type="Decimal"/>
<item field="FUNC_ID" relation="fUNCID" type="Decimal"/>


</table>
</mapping>
<mapping concept="ROLE_PRIVILEGE"><table name="ROLE_PRIVILEGE" type="owner-table"><key field="fID" type="String"/>
<item field="ROLE_ID" relation="rOLEID" type="Integer"/>
<item field="MANAGEMENT_TYPE" relation="mANAGEMENTTYPE" type="Decimal"/>
<item field="PRIVILEGE_ID" relation="pRIVILEGEID" type="Decimal"/>
<index fields="ROLE_ID,PRIVILEGE_ID" name="AK_KEY_1_ROLE_PRI" type="UNIQUE"/>
</table>
</mapping>
<mapping concept="ROLE_OPERATOR"><table name="ROLE_OPERATOR" type="owner-table"><key field="fID" type="String"/>
<item field="OPERATOR_ID" relation="oPERATORID" type="String"/>
<item field="ROLE_ID" relation="rOLEID" type="Decimal"/>
<item field="MANAGEMENT_TYPE" relation="mANAGEMENTTYPE" type="Decimal"/>
<index fields="OPERATOR_ID,ROLE_ID" name="AK_KEY_1_ROLE_OPE" type="UNIQUE"/>
</table>
</mapping>
<mapping concept="FUNC_ID"><table name="FUNC_ID" type="owner-table">
<item field="FUNC_NAME" relation="fUNCNAME" type="String"/>
<item field="SYSTEM_TYPE" relation="sYSTEMTYPE" type="Decimal"/>
<item field="MANAGEMENT_TYPE" relation="mANAGEMENTTYPE" type="Decimal"/>
<item field="FUNC_ID" relation="fUNCID" type="Integer"/>
<index fields="FUNC_ID" name="AK_KEY_1_FUNC_ID" type="UNIQUE"/>
<key field="fID" type="Integer"/>
</table>
</mapping>
</model>