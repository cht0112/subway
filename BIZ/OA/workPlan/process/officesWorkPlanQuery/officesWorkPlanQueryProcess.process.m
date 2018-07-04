<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="officesWorkPlanQueryProcess"> 
    <label language="zh_CN">处工作计划查询</label>  
    <static-activity name="mainActivity"/>  
    <has-action action="queryOA_GZJHAction" access-permission="public"/>  
    <has-action action="saveOA_GZJHAction" access-permission="public"/>  
    <has-action action="createOA_GZJHAction" access-permission="public"/>  
    <has-action action="getBizConfigAction" access-permission="public"/> 
  </process> 
</model>
