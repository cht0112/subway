<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryTool_Relationship" global="false" procedure="myQueryTool_RelationshipProcedure"><label language="zh_CN">自建工具映射查询</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TOOL_RELATIONSHIP"/>
<private name="select" type="String" value="TOOL_RELATIONSHIP,TOOL_RELATIONSHIP.tOOLCATEGORY as tOOLCATEGORY,TOOL_RELATIONSHIP.tOOLSORT as tOOLSORT,TOOL_RELATIONSHIP.tOOLTYPE as tOOLTYPE,TOOL_CATEGORY_CODE,TOOL_CATEGORY_CODE.tOOLCATEGORYCNAME as tOOLCATEGORYCNAME"/>
<private name="from" type="String" value="TOOL_RELATIONSHIP TOOL_RELATIONSHIP  optional  join TOOL_CATEGORY_CODE TOOL_CATEGORY_CODE on TOOL_RELATIONSHIP = TOOL_CATEGORY_CODE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TOOL_RELATIONSHIP"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>