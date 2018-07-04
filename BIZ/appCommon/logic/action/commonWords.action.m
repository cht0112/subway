<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryCommonWordsAction" procedure="bizQueryProcedure" global="true"> 
    <private name="concept" type="String" value="AP_CommonWords"/>  
    <private name="select" type="String" value="AP_CommonWords.*"/>  
    <private name="from" type="String" value="AP_CommonWords AP_CommonWords"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/appCommon/data"/>  
    <private name="fnModel" type="String" value="/appCommon/logic/fn"/>  
    <protected name="condition" type="String" value="AP_CommonWords.fPersonID = :currentPersonID()"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="AP_CommonWords"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="AP_CommonWords.fCommonWords"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveCommonWordsAction" procedure="bizSaveProcedure" global="true"> 
    <permission name="insertRange" type="List"/>
    <permission name="deleteRange" type="List"/>
    <permission name="updateRange" type="List"/>
    <private name="fnModel" type="String" value="/system/logic/fn"/>  
    <private name="concept" type="String" value="AP_CommonWords"/>  
    <public name="table" type="Object"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <private name="dataModel" type="String" value="/appCommon/data"/> 
  </action>  
  <action name="createCommonWordsAction" procedure="bizCreateProcedure" global="true"> 
    <private name="concept" type="String" value="AP_CommonWords"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/appCommon/logic/fn"/> 
  </action> 
</model>
