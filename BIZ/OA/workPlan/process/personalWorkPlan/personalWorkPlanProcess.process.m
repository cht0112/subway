<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="personalWorkPlanProcess"> 
    <label language="zh_CN">个人工作计划</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">个人工作计划</label> 
    </static-activity>  
    <has-action action="queryOA_GZJHAction" access-permission="public"/>  
    <has-action action="saveOA_GZJHAction" access-permission="public"/>  
    <has-action action="createOA_GZJHAction" access-permission="public"/> 
    <has-action action="queryOA_GZNRAction" access-permission="public"/>  
    <has-action action="saveOA_GZNRAction" access-permission="public"/>  
    <has-action action="createOA_GZNRAction" access-permission="public"/>
  </process> 
</model>
