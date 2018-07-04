<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="DOCUMENT_TYPE_CODE"/><mapping concept="DOCUMENT_TYPE_CODE"><table name="DOCUMENT_TYPE_CODE" type="owner-table"><key field="fID" type="String"/>
<item field="DOCUMENT_CATEGORY" relation="dOCUMENTCATEGORY" type="Integer"/>
<item field="DOCUMENT_TYPE" relation="dOCUMENTTYPE" type="Integer"/>
<item field="DOCUMENT_TYPE_CNAME" relation="dOCUMENTTYPECNAME" type="String"/>
<item field="DOCUMENT_TYPE_ENAME" relation="dOCUMENTTYPEENAME" type="String"/>
<index fields="DOCUMENT_TYPE" name="AK_KEY_1_DOCUMENT" type="UNIQUE"/>
</table>
</mapping>
</model>