<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryPersonSignatureAction" procedure="bizQueryProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="AP_PersonSignature"/>  
    <private name="select" type="String" value="AP_PersonSignature.*"/>  
    <private name="from" type="String" value="AP_PersonSignature AP_PersonSignature"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/appCommon/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="AP_PersonSignature"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <procedure name="initPersonSignatureProcedure" code-model="/appCommon/logic/code" code="PersonSignatureProcedure.initPersonSignature"> 
    <parameter name="personID" type="String"/> 
  </procedure>  
  <action name="initPersonSignatureAction" global="false" procedure="initPersonSignatureProcedure"> 
    <label language="zh_CN">初始化个人签名</label>  
    <public name="personID" type="String"/> 
  </action> 
</model>
