<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="complaintSettlingProcess"> 
    <label language="zh_CN">客户投诉处理</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">客户投诉处理</label>  
        
        
        
        
       
    













































































































<has-action action="queryCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="myQueryComplantFeedbackAction" access-permission="public"></has-action>
<has-action action="queryCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="saveCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<listener action="saveCUSTOMER_COMPLAINT_FEEDBACKAction" event="before" handler="mainActivityBeforeSaveCUSTOMER_COMPLAINT_FEEDBACKActionProcedure"></listener>
<listener action="saveCUSTOMER_COMPLAINT_FEEDBACKAction" event="after" handler="mainActivityAfterSaveCUSTOMER_COMPLAINT_FEEDBACKActionProcedure"></listener>
<has-action action="createCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="queryHR_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="myQueryComplaintFeedAndHR" access-permission="public"></has-action>
</static-activity> 
  </process> 
</model>
