<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryINDEX_SYSTEM_VALUEAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="INDEX_SYSTEM_VALUE"/>
<private name="select" type="String" value="INDEX_SYSTEM_VALUE.*"/>
<private name="from" type="String" value="INDEX_SYSTEM_VALUE INDEX_SYSTEM_VALUE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="INDEX_SYSTEM_VALUE"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveINDEX_SYSTEM_VALUEAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="INDEX_SYSTEM_VALUE"/>
<private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createINDEX_SYSTEM_VALUEAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="INDEX_SYSTEM_VALUE"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>