<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryMEMBER_IN_USERGROUPAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="MEMBER_IN_USERGROUP"/>
<private name="select" type="String" value="MEMBER_IN_USERGROUP.*"/>
<private name="from" type="String" value="MEMBER_IN_USERGROUP MEMBER_IN_USERGROUP"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_Authority_Related/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="MEMBER_IN_USERGROUP"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveMEMBER_IN_USERGROUPAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="MEMBER_IN_USERGROUP"/>
<private name="dataModel" type="String" value="/metrodetection/system_Authority_Related/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createMEMBER_IN_USERGROUPAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="MEMBER_IN_USERGROUP"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>