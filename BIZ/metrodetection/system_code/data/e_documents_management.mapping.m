<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="E_DOCUMENTS_MANAGEMENT"/><mapping concept="E_DOCUMENTS_MANAGEMENT"><table name="E_DOCUMENTS_MANAGEMENT" type="owner-table"><key field="fID" type="String"/>
<item field="FOLDER_ID" relation="fOLDERID" type="Integer"/>
<item field="E_FILE_ID" relation="eFILEID" type="String"/>
<item field="E_FILE_NAME" relation="eFILENAME" type="String"/>
<item field="FILE_VER" relation="fILEVER" type="String"/>
<item field="SECRET_LEVEL" relation="sECRETLEVEL" type="Decimal"/>
<item field="E_FILE_PROPERTY" relation="eFILEPROPERTY" type="String"/>
<item field="E_FILE_DESC" relation="eFILEDESC" type="String"/>
<item field="CREATOR" relation="cREATOR" type="String"/>
<item field="CREATE_DATE" relation="cREATEDATE" type="DateTime"/>
<item field="LAST_CHANGER" relation="lASTCHANGER" type="String"/>
<item field="LAST_CHANGE_DATE" relation="lASTCHANGEDATE" type="DateTime"/>
<item field="CHECK_OUT_STATE" relation="cHECKOUTSTATE" type="Decimal"/>
<item field="DESTROY_STATE" relation="dESTROYSTATE" type="Decimal"/>
<item field="MEMO" relation="mEMO" type="String"/>
<index fields="E_FILE_ID,FILE_VER" name="AK_KEY_1_E_DOC_M" type="UNIQUE"/>
</table>
</mapping>
</model>