<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="DEFECT_TRACK_BUG_INFO"/><mapping concept="DEFECT_TRACK_BUG_INFO"><table name="DEFECT_TRACK_BUG_INFO" type="owner-table"><key field="DEFECT_ID" type="Integer"/>
<index fields="VERSION_ID" name="RELATIONSHIP_5_FK" type="NORMAL"/>
<index fields="FUNC_ID" name="RELATIONSHIP_6_FK" type="NORMAL"/>
<item field="VERSION_ID" relation="VERSION_ID"/>
<item field="FUNC_ID" relation="FUNC_ID"/>
</table>
</mapping>
</model>