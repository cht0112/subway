<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryOA_Pub_FirstKeyWordAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="OA_Pub_FirstKeyWord"/>
<private name="select" type="String" value="OA_Pub_FirstKeyWord.*"/>
<private name="from" type="String" value="OA_Pub_FirstKeyWord OA_Pub_FirstKeyWord"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/OA/common/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="OA_Pub_FirstKeyWord"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveOA_Pub_FirstKeyWordAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="OA_Pub_FirstKeyWord"/>
<private name="dataModel" type="String" value="/OA/common/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createOA_Pub_FirstKeyWordAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="OA_Pub_FirstKeyWord"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryOA_Pub_SencondKeyWordAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="OA_Pub_SencondKeyWord"/>
<private name="select" type="String" value="OA_Pub_SencondKeyWord.*"/>
<private name="from" type="String" value="OA_Pub_SencondKeyWord OA_Pub_SencondKeyWord"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/OA/common/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="OA_Pub_SencondKeyWord"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveOA_Pub_SencondKeyWordAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="OA_Pub_SencondKeyWord"/>
<private name="dataModel" type="String" value="/OA/common/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createOA_Pub_SencondKeyWordAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="OA_Pub_SencondKeyWord"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryOA_Pub_EndKeyWordAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="OA_Pub_EndKeyWord"/>
<private name="select" type="String" value="OA_Pub_EndKeyWord.*"/>
<private name="from" type="String" value="OA_Pub_EndKeyWord OA_Pub_EndKeyWord"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/OA/common/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="OA_Pub_EndKeyWord"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveOA_Pub_EndKeyWordAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="OA_Pub_EndKeyWord"/>
<private name="dataModel" type="String" value="/OA/common/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createOA_Pub_EndKeyWordAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="OA_Pub_EndKeyWord"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>