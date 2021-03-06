<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">  
  <action name="queryFilterPatternAction" procedure="bizQueryProcedure" global="false"> 
  	<private name="concept" type="String" value="SA_FilterPattern"/>
    <public name="idColumn" type="String" value="SA_FilterPattern"/>  
    <private name="select" type="String" value="SA_FilterPattern.*"/>  
    <private name="from" type="String" value="SA_FilterPattern SA_FilterPattern"/>  
    <private name="aggregate" type="String"/>  
    <protected name="condition" type="String"/>
    <permission name="range" type="List"/>
    <public name="filter" type="String"/>
    <public name="limit" type="Integer" value="9999"/>
    <public type="Integer" name="offset" value="0"/>
    <public type="Boolean" name="distinct"/>
    <public name="columns" type="String"/>
    <public name="orderBy" type="String"/>
    <public name="aggregateColumns" type="String"/>
    <public name="variables" type="Map"/>
    <private name="fnModel" type="String"/>
    <private name="dataModel" type="String" value="/system/data"/> 
  <label language="zh_CN">查询过虑模式</label>
</action>  
  <action name="saveFilterPatternAction" procedure="bizSaveProcedure" global="false"> 
  	<private name="concept" type="String" value="SA_FilterPattern"/>
      
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Table"/>  
    <private type="String" name="dataModel" value="/system/data"/> 
  <permission name="insertRange" type="List"/><permission name="deleteRange" type="List"/><permission name="updateRange" type="List"/><private name="fnModel" type="String" value="/system/logic/fn"/><label language="zh_CN">保存过虑模式</label>
</action>  
  <action name="createFilterPatternAction" procedure="bizCreateProcedure" global="false"> 
  	<private name="concept" type="String" value="SA_FilterPattern"/>
    <public name="table" type="Table"/>  
    <public name="defaultValues" type="Map"/>  
    <private type="String" name="fnModel" value="/system/logic/fn"/> 
  <label language="zh_CN">新建过虑模式</label>
</action> 
</model>