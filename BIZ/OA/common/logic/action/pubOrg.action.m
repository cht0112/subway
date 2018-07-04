<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
 <action name="querySAOPPersonAction" procedure="bizQueryProcedure" data-model="/OA/common/data">
    <public name="concept" type="String" value="V_SA_OPPerson"/>  
    <private name="select" type="String" value="V_SA_OPPerson.*"/>  
    <private name="from" type="String" value="V_SA_OPPerson V_SA_OPPerson"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/common/data"/>  
    <private name="fnModel" type="String"  value="/system/logic/fn"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="V_SA_OPPerson"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
</model>
