<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="complaintAnalysisSeverity" global="false" procedure="complaintAnalysisSeverityProcedure">
    <public type="String" name="startDate1" required="false"/>  
    <public type="String" name="endDate1" required="false"/>  
    <label language="zh_CN">投诉统计按照严重程度</label> 
  </action> 
<action name="complaintAnalysisSeverityChart" global="false" procedure="complaintAnalysisSeverityChartProcedure"><label language="zh_CN">投诉统计严重程度图表用</label>
<public type="String" name="startDate1" required="false"></public>
<public type="String" name="endDate1" required="false"></public>
</action>
</model>
