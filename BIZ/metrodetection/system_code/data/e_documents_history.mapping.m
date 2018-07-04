<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="E_DOCUMENTS_HISTORY"/><mapping concept="E_DOCUMENTS_HISTORY"><table name="E_DOCUMENTS_HISTORY" type="owner-table"><key field="fID" type="String"/>
<item field="E_FILE_ID" relation="eFILEID" type="String"/>
<item field="FILE_VER" relation="fILEVER" type="String"/>
<item field="E_FILE" relation="eFILE"/>
<item field="CHANGER" relation="cHANGER" type="String"/>
<item field="CHANGE_DATE" relation="cHANGEDATE" type="DateTime"/>
<item field="MEMO" relation="mEMO" type="String"/>
<index fields="E_FILE_ID,FILE_VER" name="AK_KEY_1_E_DOC_HIS" type="UNIQUE"/>
</table>
</mapping>
</model>