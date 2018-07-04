<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="complaintProcessQueryProcedure" code-model="/metrodetection/system_code/logic/code" code="System_code.complaintProcessQuery"> 
    <parameter name="concept" type="String"/>
    <parameter name="idColumn" type="String"/>
    <parameter name="select" type="String"/>
    <parameter name="from" type="String"/>
    <parameter name="aggregate" type="String"/>
    <parameter name="condition" type="String"/>
    <parameter name="range" type="List"/>
    <parameter name="filter" type="String"/>
    <parameter name="limit" type="Integer"/>
    <parameter name="offset" type="Integer"/>
    <parameter name="distinct" type="Boolean"/>
    <parameter name="columns" type="String"/>
    <parameter name="orderBy" type="String"/>
    <parameter name="aggregateColumns" type="String"/>
    <parameter name="variables" type="Map"/>
    <parameter name="fnModel" type="String"/>
    <parameter name="dataModel" type="String"/>
    <parameter name="status" type="String"/>
    <parameter name="org" type="String"/>
  </procedure> 
</model>
