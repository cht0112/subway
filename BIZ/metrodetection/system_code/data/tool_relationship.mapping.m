<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TOOL_RELATIONSHIP"/><mapping concept="TOOL_RELATIONSHIP"><table name="TOOL_RELATIONSHIP" type="owner-table"><key field="TOOL_TYPE_ID" type="Integer"/>

<item field="TOOL_CATEGORY" relation="tOOLCATEGORY" type="Integer"/>
<item field="TOOL_SORT" relation="tOOLSORT" type="Integer"/>
<item field="TOOL_TYPE" relation="tOOLTYPE" type="Integer"/>
<index fields="TOOL_CATEGORY" name="AK_KEY_1_TOOL_REL" type="UNIQUE"/>
</table>
</mapping>
</model>