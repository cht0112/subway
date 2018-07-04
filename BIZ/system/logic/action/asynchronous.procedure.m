<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="createRemindProcedure" code-model="/system/logic/code" code="com.justep.system.asynchronous.CreateRemindTask.create"> 
    <parameter name="sid" type="String"/> 
  </procedure>  
  <procedure name="createRemindTaskProcedure" code-model="/system/logic/code" code="System.createRemindTask">
    <parameter name="sid" type="String"/>
  </procedure>
</model>
