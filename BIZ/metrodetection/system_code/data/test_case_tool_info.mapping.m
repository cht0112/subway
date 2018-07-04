<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="TEST_CASE_TOOL_INFO"/><mapping concept="TEST_CASE_TOOL_INFO"><table name="TEST_CASE_TOOL_INFO" type="owner-table"><key field="fID" type="String"/>
<item field="TEST_CASE_VER" relation="tESTCASEVER" type="Integer"/>
<item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>
<item field="TOOL_TYPE_ID" relation="tOOLTYPEID" type="Decimal"/>
<item field="TOOL_MODEL" relation="tOOLMODEL" type="String"/>
<item field="TOOL_STANDARDS" relation="tOOLSTANDARDS" type="String"/>
<item field="TOOL_NUMBER" relation="tOOLNUMBER" type="Decimal"/>
<index fields="TEST_CASE_VER,TEST_CASE_ID,TOOL_TYPE_ID,TOOL_MODEL,TOOL_STANDARDS" name="AK_KEY_1_TEST_CASE_TOOL_INFO" type="UNIQUE"/>
</table>
</mapping>
</model>