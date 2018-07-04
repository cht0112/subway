<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="APPLICATION_TYPE_CODE"/><mapping concept="APPLICATION_TYPE_CODE"><table name="APPLICATION_TYPE_CODE" type="owner-table"><key field="fID" type="String"/>
<item field="APPLICATION_TYPE" relation="aPPLICATIONTYPE" type="Integer"/>
<item field="APPLICATION_TYPE_CNAME" relation="aPPLICATIONTYPECNAME" type="String"/>
<item field="APPLICATION_TYPE_ENAME" relation="aPPLICATIONTYPEENAME" type="String"/>
<index fields="APPLICATION_TYPE_CNAME" name="AK_KEY_1_APPLICAT" type="UNIQUE"/>
</table>
</mapping>
</model>