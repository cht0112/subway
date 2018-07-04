<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="createMppProcedure" code-model="/metrodetection/system_code/logic/code" code="CreateMpp.createMpp"> 
    <parameter name="applicationNo" type="Integer"/> 
  </procedure>  
  <procedure name="importMppProcedure" code-model="/metrodetection/system_code/logic/code" code="CreateMpp.importMpp"> 
    <parameter name="filename" type="String"/>
    <parameter name="applicationNo" type="String"/>
    <parameter name="timeParam" type="String"/>
  </procedure> 
</model>
