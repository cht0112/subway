<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryToolTypeNamezf" global="false" procedure="myQueryToolTypeNamezfProcedure">
<label language="zh_CN">查询工具分类名称含父类</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TOOL_TYPE_CODE"/>
<private name="select" type="String" value="TOOL_TYPE_CODE.*,TOOL_SORT_CODE.*"/>
<private name="from" type="String" value="TOOL_TYPE_CODE TOOL_TYPE_CODE  optional  join TOOL_SORT_CODE TOOL_SORT_CODE on TOOL_TYPE_CODE.pARENTLEV  =  TOOL_SORT_CODE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TOOL_TYPE_CODE"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>