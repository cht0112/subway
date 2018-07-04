<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="CHECK_RECORD"/><mapping concept="CHECK_RECORD"><table name="CHECK_RECORD" type="owner-table"><key field="fID" type="String"/>
<item field="APPLICATION_NO" relation="aPPLICATIONNO" type="Integer"/>
<item field="APPLICATION_TYPE" relation="aPPLICATIONTYPE" type="Integer"/>
<item field="CHECK_NAME" relation="cHECKNAME" type="String"/>
<item field="CHECKER" relation="cHECKER" type="String"/>
<item field="CHECK_RESULT" relation="cHECKRESULT" type="Integer"/>
<item field="CHECK_DESC" relation="cHECKDESC" type="String"/>
<item field="CHECK_TIME" relation="cHECKTIME" type="Date"/>
<item field="MEMO" relation="mEMO" type="String"/>
<index fields="APPLICATION_NO,APPLICATION_TYPE,CHECK_NAME" name="AK_KEY_1_CHECK_RE" type="UNIQUE"/>
</table>
</mapping>
</model>