<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="DEFECT_TRACK_FUNC_INFO"/>
<mapping concept="DEFECT_TRACK_FUNC_INFO"><table name="DEFECT_TRACK_FUNC_INFO" type="owner-table"><key field="FUNC_ID" type="Integer"/>
<index fields="MODULE_ID" name="RELATIONSHIP_3_FK" type="NORMAL"/>
<item field="MODULE_ID" relation="MODULE_ID"/>
<item field="FUNC_NAME" relation="FUNC_NAME"/>
<item field="MEMO" relation="MEMO"/>
<item relation="fChildBugFuncID" field="fChildBugFuncID" type="Integer"></item>
</table>
</mapping>
</model>