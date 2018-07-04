<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="mytest" global="false" procedure="mytestProcedure"> 
    <label language="zh_CN"/>  
    <public type="String" required="false" name="startDate"/>  
    <public type="String" required="false" name="endTaskDate"/> 
  </action>  
  <action name="chartTestTaskAction" global="false" procedure="chartTestTaskProcedure">
    <public type="String" name="startDate"/>  
    <public type="String" name="endTaskDate"/> 
  </action>  
  <action name="chartTestTaskSummaryAction" global="false" procedure="chartTestTaskSummaryProcedure">
    <public type="String" name="startDate" required="false"/>  
    <public type="String" name="endTaskDate" required="false"/> 
  </action>  
  <action name="actualDateAction" global="false" procedure="actualDateProcedure"/>  
  <action name="taskQuery" global="false" procedure="taskQueryProcedure">
    <public type="String" required="false" name="startDate"/>  
    <public type="String" required="false" name="endStaskDate"/> 
  </action>  
   
</model>
