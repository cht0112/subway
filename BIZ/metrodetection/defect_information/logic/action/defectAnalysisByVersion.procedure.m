<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="defectAnalysisByVersionProcedure" code-model="/metrodetection/defect_information/logic/code" code="defectAnalysisByVersion.ByVersion"> 
    <parameter name="productId" type="Integer"/> 
  </procedure>  
  <procedure name="defectAnalysisByPriorityProcedure" code-model="/metrodetection/defect_information/logic/code" code="defectAnalysisByVersion.ByPriority"> 
    <parameter name="productId" type="Integer"/> 
  </procedure>  
  <procedure name="defectAnalysisBySeverityProcedure" code-model="/metrodetection/defect_information/logic/code" code="defectAnalysisByVersion.BySeverity"> 
    <parameter name="productId" type="Integer"/>
  </procedure> 
</model>
