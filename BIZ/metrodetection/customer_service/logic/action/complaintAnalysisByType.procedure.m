<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="complaintAnalysisByTypeProcedure" code-model="/metrodetection/customer_service/logic/code" code="customerReport.complaintAnalysisByType"> 
    <parameter name="startDate" type="String"/>  
    <parameter name="endDate" type="String"/> 
  </procedure>  
  <procedure name="complaintAnalysisByTypeChartProcedure" code-model="/metrodetection/customer_service/logic/code" code="customerReport.complaintAnalysisByTypeChart">
    <parameter name="startDate" type="String"/>
    <parameter name="endDate" type="String"/>
  </procedure>
</model>
