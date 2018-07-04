<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="querySYSTEM_TYPE_CODEAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="SYSTEM_TYPE_CODE"/>
<private name="select" type="String" value="SYSTEM_TYPE_CODE.*"/>
<private name="from" type="String" value="SYSTEM_TYPE_CODE SYSTEM_TYPE_CODE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="SYSTEM_TYPE_CODE"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
<label language="zh_CN">查询系统类型</label>
</action>
<action name="saveSYSTEM_TYPE_CODEAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="SYSTEM_TYPE_CODE"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createSYSTEM_TYPE_CODEAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="SYSTEM_TYPE_CODE"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>