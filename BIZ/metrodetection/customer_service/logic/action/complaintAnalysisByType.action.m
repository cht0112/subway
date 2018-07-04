<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="complaintAnalysisByType" global="false" procedure="complaintAnalysisByTypeProcedure">
    <label language="zh_CN">投诉统计按照投诉类型</label>  
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    <public type="String" name="startDate" required="false"/>  
    <public type="String" name="endDate" required="false"/> 
  </action> 
<action name="complaintAnalysisByTypeChart" global="false" procedure="complaintAnalysisByTypeChartProcedure"><label language="zh_CN">投诉统计类型图表用</label>
<public type="String" name="startDate" required="false"></public>
<public type="String" name="endDate" required="false"></public>
</action>
</model>
