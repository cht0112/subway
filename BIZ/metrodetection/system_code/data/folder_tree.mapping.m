<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="FOLDER_TREE"/><mapping concept="FOLDER_TREE"><table name="FOLDER_TREE" type="owner-table"><key field="fOLDER_ID" type="Integer"/>
<item field="FOLDER_NAME" relation="fOLDERNAME" type="String"/>
<item field="PARENT_FOLDER_ID" relation="pARENTFOLDERID" type="Decimal"/>
<item field="MEMO" relation="mEMO" type="String"/>
</table>
</mapping>
</model>