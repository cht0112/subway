<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="mytestProcedure" code-model="/metrodetection/system_code/logic/code" code="mytesttest.mytest"> 
    <parameter name="startDate" type="String"/>  
    <parameter name="endTaskDate" type="String"/> 
  </procedure>  
  <procedure name="chartTestTaskProcedure" code-model="/metrodetection/system_code/logic/code" code="mytesttest.chartTestTask"> 
    <parameter name="startDate" type="String"/>  
    <parameter name="endTaskDate" type="String"/> 
  </procedure>  
  <procedure name="chartTestTaskSummaryProcedure" code-model="/metrodetection/system_code/logic/code" code="mytesttest.chartTestTaskSummary"> 
    <parameter name="startDate" type="String"/>  
    <parameter name="endTaskDate" type="String"/> 
  </procedure>  
  <procedure name="actualDateProcedure" code-model="/metrodetection/system_code/logic/code" code="mytesttest.actualDate"/>  
  <procedure name="taskQueryProcedure" code-model="/metrodetection/system_code/logic/code" code="System_code.taskQuery"> 
    <parameter name="startDate" type="String"/>  
    <parameter name="endStaskDate" type="String"/> 
  </procedure>  
</model>
