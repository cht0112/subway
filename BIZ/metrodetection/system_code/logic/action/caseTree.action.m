<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">



<action name="queryCASE_TREEAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="CASE_TREE"/>
<private name="select" type="String" value="CASE_TREE.*"/>
<private name="from" type="String" value="CASE_TREE CASE_TREE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="CASE_TREE"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveCASE_TREEAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="CASE_TREE"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createCASE_TREEAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="CASE_TREE"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryCASE_TREE_NEWAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="CASE_TREE"/>
<private name="select" type="String" value="ct.*,tsci.*,tsci as TEST_SCHEME_CASE_INFO,tsci.tESTCASEVER as tESTCASEVER,tsci.tESTCASEID as tESTCASEID,tsci.tESTSCHEMEID as tESTSCHEMEID"/>
<private name="from" type="String" value="CASE_TREE ct  optional  join TEST_SCHEME_CASE_INFO tsci on ( ct.CASEID = tsci.tESTCASEID AND ct.CASEVERSION = tsci.tESTCASEVER ) OR (ct.FPARENTID = '')"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="ct"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>









<action name="queryCASE_TREE_NEW1Action" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW"/>
<private name="select" type="String" value="tv.*"/>
<private name="from" type="String" value="CASE_TREE_NEW tv"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="tv"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String" value="tv.cASEVERSION asc"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveCASE_TREE_NEW1Action" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createCASE_TREE_NEW1Action" procedure="bizCreateProcedure"><private name="concept" type="String" value="CASE_TREE_NEW"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryCASE_TREE_NEW_VAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW_V"/>
<private name="select" type="String" value="tv.*"/>
<private name="from" type="String" value="CASE_TREE_NEW_V tv"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="tv"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveCASE_TREE_NEW_VAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW_V"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createCASE_TREE_NEW_VAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="CASE_TREE_NEW_V"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryCASE_TREE_NEW_OBJAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW_OBJ"/>
<private name="select" type="String" value="CASE_TREE_NEW_OBJ.*"/>
<private name="from" type="String" value="CASE_TREE_NEW_OBJ CASE_TREE_NEW_OBJ"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="CASE_TREE_NEW_OBJ"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveCASE_TREE_NEW_OBJAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW_OBJ"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createCASE_TREE_NEW_OBJAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="CASE_TREE_NEW_OBJ"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryCASE_TREE_NEW_OBJ_VAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW_OBJ_V"/>
<private name="select" type="String" value="CASE_TREE_NEW_OBJ_V.*"/>
<private name="from" type="String" value="CASE_TREE_NEW_OBJ_V CASE_TREE_NEW_OBJ_V"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="CASE_TREE_NEW_OBJ_V"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveCASE_TREE_NEW_OBJ_VAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="CASE_TREE_NEW_OBJ_V"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createCASE_TREE_NEW_OBJ_VAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="CASE_TREE_NEW_OBJ_V"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>