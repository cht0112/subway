<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="orgSelectDialogQueryAction" global="true" procedure="orgSelectDialogQueryProcedure"> 
    <private name="concept" type="String" value="SA_OPOrg"/>  
    <private name="select" type="String" value="SA_OPOrg.*"/>  
    <private name="from" type="String" value="SA_OPOrg SA_OPOrg optional join SA_OPPerson SA_OPPerson on SA_OPOrg.sPersonID = SA_OPPerson "/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/system/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="SA_OPOrg"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="SA_OPOrg.sSequence asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>  
    <public name="queryKind" type="String" value=""/>  
    <public name="manageCodes" type="String" value=""/>  
    <public name="groupParentID" type="String" value=""/>  
    <label language="zh_CN">组织机构对话框组织查询</label> 
  </action>  
  <procedure name="orgSelectDialogQueryProcedure" code-model="/appCommon/logic/code" code="OrgSelectDialogProcedure.query"> 
    <parameter name="concept" type="String"/>  
    <parameter name="idColumn" type="String"/>  
    <parameter name="select" type="String"/>  
    <parameter name="from" type="String"/>  
    <parameter name="condition" type="String"/>  
    <parameter name="range" type="List"/>  
    <parameter name="filter" type="String"/>  
    <parameter name="distinct" type="Boolean"/>  
    <parameter name="offset" type="Integer"/>  
    <parameter name="limit" type="Integer"/>  
    <parameter name="columns" type="String"/>  
    <parameter name="orderBy" type="String"/>  
    <parameter name="aggregate" type="String"/>  
    <parameter name="aggregateColumns" type="String"/>  
    <parameter name="variables" type="Map"/>  
    <parameter name="dataModel" type="String"/>  
    <parameter name="fnModel" type="String"/>  
    <parameter name="queryKind" type="String"/> 
    <parameter name="manageCodes" type="String"/> 
    <parameter name="groupParentID" type="String"/> 
  </procedure> 
</model>
