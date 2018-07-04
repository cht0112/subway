<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryTRAINING_PLAN_INFOAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="TRAINING_PLAN_INFO"/>
<private name="select" type="String" value="TRAINING_PLAN_INFO.*"/>
<private name="from" type="String" value="TRAINING_PLAN_INFO TRAINING_PLAN_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TRAINING_PLAN_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveTRAINING_PLAN_INFOAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="TRAINING_PLAN_INFO"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createTRAINING_PLAN_INFOAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="TRAINING_PLAN_INFO"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>






<action name="queryTRAINING_EVALUATION_INFOAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="TRAINING_EVALUATION_INFO"/>
<private name="select" type="String" value="TRAINING_EVALUATION_INFO.*"/>
<private name="from" type="String" value="TRAINING_EVALUATION_INFO TRAINING_EVALUATION_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TRAINING_EVALUATION_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveTRAINING_EVALUATION_INFOAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="TRAINING_EVALUATION_INFO"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createTRAINING_EVALUATION_INFOAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="TRAINING_EVALUATION_INFO"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>






<action name="queryRELATION_PLAN_SUBJECTAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="RELATION_PLAN_SUBJECT"/>
<private name="select" type="String" value="RELATION_PLAN_SUBJECT.*"/>
<private name="from" type="String" value="RELATION_PLAN_SUBJECT RELATION_PLAN_SUBJECT"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="RELATION_PLAN_SUBJECT"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveRELATION_PLAN_SUBJECTAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="RELATION_PLAN_SUBJECT"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createRELATION_PLAN_SUBJECTAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="RELATION_PLAN_SUBJECT"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>






<action name="queryRELATION_CONTENT_SUBJECTAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="RELATION_CONTENT_SUBJECT"/>
<private name="select" type="String" value="RELATION_CONTENT_SUBJECT.*"/>
<private name="from" type="String" value="RELATION_CONTENT_SUBJECT RELATION_CONTENT_SUBJECT"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="RELATION_CONTENT_SUBJECT"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveRELATION_CONTENT_SUBJECTAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="RELATION_CONTENT_SUBJECT"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createRELATION_CONTENT_SUBJECTAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="RELATION_CONTENT_SUBJECT"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryTRAINING_COURSE_INFOAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="TRAINING_COURSE_INFO"/>
<private name="select" type="String" value="TRAINING_COURSE_INFO.*"/>
<private name="from" type="String" value="TRAINING_COURSE_INFO TRAINING_COURSE_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TRAINING_COURSE_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveTRAINING_COURSE_INFOAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="TRAINING_COURSE_INFO"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createTRAINING_COURSE_INFOAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="TRAINING_COURSE_INFO"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryTRAINING_CONTENT_INFOAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="TRAINING_CONTENT_INFO"/>
<private name="select" type="String" value="TRAINING_CONTENT_INFO.*"/>
<private name="from" type="String" value="TRAINING_CONTENT_INFO TRAINING_CONTENT_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TRAINING_CONTENT_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveTRAINING_CONTENT_INFOAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="TRAINING_CONTENT_INFO"/>
<private name="dataModel" type="String" value="/metrodetection/training_management/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createTRAINING_CONTENT_INFOAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="TRAINING_CONTENT_INFO"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
</model>