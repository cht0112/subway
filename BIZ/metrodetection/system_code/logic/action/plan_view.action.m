<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
  <action name="queryPLAN_VIEWAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="PLAN_VIEW"/>  
    <private name="select" type="String" value="tv.*,TEST_SCHEME_CASE_INFO.tESTCASEVER as tESTCASEVER,TEST_SCHEME_CASE_INFO.tESTCASEID as tESTCASEID,TEST_SCHEME_CASE_INFO.tESTSCHEMEID as tESTSCHEMEID"/>  
    <private name="from" type="String" value="PLAN_VIEW tv  optional  join TEST_SCHEME_CASE_INFO TEST_SCHEME_CASE_INFO on tv.cASEVERSION = TEST_SCHEME_CASE_INFO.tESTCASEVER AND tv.cASEID = TEST_SCHEME_CASE_INFO.tESTCASEID"/>  
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
  <action name="savePLAN_VIEWAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="PLAN_VIEW"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createPLAN_VIEWAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="PLAN_VIEW"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>
  <action name="queryPLANVIEWTestAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="PLAN_VIEW"/>  
    <private name="select" type="String" value="PLAN_VIEW.*"/>  
    <private name="from" type="String" value="PLAN_VIEW PLAN_VIEW"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="PLAN_VIEW"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>