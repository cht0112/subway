<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryTEST_PROJECT_STATAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_PROJECT_STAT"/>
<private name="select" type="String" value="TEST_PROJECT_STAT.*"/>
<private name="from" type="String" value="TEST_PROJECT_STAT TEST_PROJECT_STAT"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/report_data/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TEST_PROJECT_STAT"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveTEST_PROJECT_STATAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="TEST_PROJECT_STAT"/>
<private name="dataModel" type="String" value="/metrodetection/report_data/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createTEST_PROJECT_STATAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="TEST_PROJECT_STAT"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>