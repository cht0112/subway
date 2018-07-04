<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="complaintAnalysisProcess"> 
    <label language="zh_CN">客户投诉统计</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">客户投诉统计</label> 
    























<has-action action="queryCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="complaintAnalysisSeverity" access-permission="public"></has-action>
<has-action action="complaintAnalysisByType" access-permission="public"></has-action>
<has-action action="complaintAnalysisSeverityChart" access-permission="public"></has-action>
<has-action action="complaintAnalysisByTypeChart" access-permission="public"></has-action>
</static-activity>  
    
  
















<has-action action="queryCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="complaintAnalysisByType" access-permission="public"></has-action>
<has-action action="complaintAnalysisSeverity" access-permission="public"></has-action>
<has-action action="complaintAnalysisSeverityChart" access-permission="public"></has-action>
<has-action action="complaintAnalysisByTypeChart" access-permission="public"></has-action>
</process> 
</model>
