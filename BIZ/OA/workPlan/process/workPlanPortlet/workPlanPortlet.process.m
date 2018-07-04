<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="workPlanPortletProcess" kind="SYSTEM"> 
    <label language="zh_CN">计划Portlet</label>  
    <static-activity name="workPlanActivity"> 
      <label language="zh_CN">计划Portlet</label> 
    </static-activity>  
    <static-activity name="workPlanActivity_static1"> 
      <label language="zh_CN">计划Portlet</label> 
    </static-activity>  
    <static-activity name="workPlanActivity_static2"> 
      <label language="zh_CN">计划Portlet</label> 
    </static-activity>  
    <has-action action="workPlansOfWeekAcion" access-permission="public"/>  
    <has-action action="getWorkPlanAction" access-permission="public"/>  
    <has-action action="getDeptWorkPlanAction" access-permission="public"/>  
    <has-action action="getOfficeWorkPlanAction" access-permission="public"/>  
    <has-action action="getDeptWorkPlanOfCurrWeekAction" access-permission="public"/>  
    <has-action action="getOfficeWorkPlanOfCurrMonthAction" access-permission="public"/> 
  </process> 
</model>
