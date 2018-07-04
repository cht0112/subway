<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="FOLDER_FILE_PRIVILEG"/><mapping concept="FOLDER_FILE_PRIVILEG"><table name="FOLDER_FILE_PRIVILEG" type="owner-table"><key field="fID" type="String"/>
<item field="PRIVILEGE_CHOOSE" relation="pRIVILEGECHOOSE" type="Integer"/>
<item field="FOLDER_OR_FILE_ID" relation="fOLDERORFILEID" type="String"/>
<item field="USER_OR_GROUP" relation="uSERORGROUP" type="String"/>
<item field="PRIVILEGE_TYPE" relation="pRIVILEGETYPE" type="Decimal"/>
<index fields="PRIVILEGE_CHOOSE,FOLDER_OR_FILE_ID,USER_OR_GROUP" name="AK_KEY_1_FOLDER_F" type="UNIQUE"/>
</table>
</mapping>
</model>