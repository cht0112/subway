<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryDECTION_BASED_STANDARDAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="DECTION_BASED_STANDARD"/>
<private name="select" type="String" value="DECTION_BASED_STANDARD.*"/>
<private name="from" type="String" value="DECTION_BASED_STANDARD DECTION_BASED_STANDARD"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="DECTION_BASED_STANDARD"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveDECTION_BASED_STANDARDAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="DECTION_BASED_STANDARD"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createDECTION_BASED_STANDARDAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="DECTION_BASED_STANDARD"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>