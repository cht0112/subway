<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="downloadTaskProcedure" code-model="/metrodetection/system_code/logic/code" code="System_code.downloadTask"> 
    <parameter name="taskID" type="List"/> 
  </procedure>  
  <procedure name="uploadTaskProcedure" code-model="/metrodetection/system_code/logic/code" code="System_code.uploadTask"> 
    <parameter name="processes" type="Xml"/> 
  </procedure>  
  <procedure name="downUserProcedure" code-model="/metrodetection/system_code/logic/code" code="System_code.downUser">
    <parameter name="orgID" type="String"/>
  </procedure> 
</model>
