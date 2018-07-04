<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryPROCESS_RESULT_ANALYSIS_VIEWAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="PROCESS_RESULT_ANALYSIS_VIEW"/>
<private name="select" type="String" value="PROCESS_RESULT_ANALYSIS_VIEW.*,case when abs(PROCESS_RESULT_ANALYSIS_VIEW.SUCCSESSCOUNT)/abs(PROCESS_RESULT_ANALYSIS_VIEW.SUBCOUNT)=1 then '' else '*' end as mark"/>
<private name="from" type="String" value="PROCESS_RESULT_ANALYSIS_VIEW PROCESS_RESULT_ANALYSIS_VIEW"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="PROCESS_RESULT_ANALYSIS_VIEW"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="savePROCESS_RESULT_ANALYSIS_VIEWAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="PROCESS_RESULT_ANALYSIS_VIEW"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createPROCESS_RESULT_ANALYSIS_VIEWAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="PROCESS_RESULT_ANALYSIS_VIEW"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>