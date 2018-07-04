<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <action name="queryCustomOrgGroupAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="AP_CustomOrgGroup"/>  
    <private name="select" type="String" value="AP_CustomOrgGroup.*"/>  
    <private name="from" type="String" value="AP_CustomOrgGroup AP_CustomOrgGroup"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/appCommon/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="AP_CustomOrgGroup"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="AP_CustomOrgGroup.fName asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveCustomOrgGroupAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>
    <permission name="deleteRange" type="List"/>
    <permission name="updateRange" type="List"/>
    <private name="fnModel" type="String" value="/system/logic/fn"/>  
    <private name="concept" type="String" value="AP_CustomOrgGroup"/>  
    <private name="dataModel" type="String" value="/appCommon/data"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createCustomOrgGroupAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="AP_CustomOrgGroup"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="queryCustomOrgDetailAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="AP_CustomOrgDetail"/>  
    <private name="select" type="String" value="AP_CustomOrgDetail.*"/>  
    <private name="from" type="String" value="AP_CustomOrgDetail AP_CustomOrgDetail"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/appCommon/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="AP_CustomOrgDetail"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="AP_CustomOrgDetail.fSequence asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveCustomOrgDetailAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>
    <permission name="deleteRange" type="List"/>
    <permission name="updateRange" type="List"/>
    <private name="fnModel" type="String" value="/system/logic/fn"/>  
    <private name="concept" type="String" value="AP_CustomOrgDetail"/>  
    <private name="dataModel" type="String" value="/appCommon/data"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createCustomOrgDetailAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="AP_CustomOrgDetail"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action> 
</model>
