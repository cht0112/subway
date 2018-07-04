<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="complaintAnalysisByReleaseProcedure" code-model="/metrodetection/customer_service/logic/code" code="Customer_service.complaintAnalysisByRelease"> 
    <parameter name="startDate" type="Date"/>  
    <parameter name="endDate" type="Date"/> 
  </procedure>  
  <procedure name="complaintAnalysisSeverityProcedure" code-model="/metrodetection/customer_service/logic/code" code="customerReport.complaintAnalysisSeverity"> 
    <parameter name="startDate" type="Date"/>
    <parameter name="endDate" type="Date"/>
  </procedure> 
</model>
