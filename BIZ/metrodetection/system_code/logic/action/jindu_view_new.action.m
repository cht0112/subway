<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">








<action name="queryJINDU_VIEW_NEWAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="JINDU_VIEW_NEW"/>
<private name="select" type="String" value="JINDU_VIEW_NEW.*"/>
<private name="from" type="String" value="JINDU_VIEW_NEW JINDU_VIEW_NEW"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="JINDU_VIEW_NEW"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveJINDU_VIEW_NEWAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="JINDU_VIEW_NEW"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createJINDU_VIEW_NEWAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="JINDU_VIEW_NEW"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>