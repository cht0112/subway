<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="especialScheduleProcess"> 
    <label language="zh_CN">领导日程安排</label>  
    <static-activity name="mainActivity"/>  
    <has-action action="createOA_SD_ScheduleEspAction" access-permission="public"/>  
    <has-action action="queryOA_SD_ScheduleEspAction" access-permission="public"/>  
    <has-action action="saveOA_SD_ScheduleEspAction" access-permission="public"/>  
    <has-action action="queryEspecialSchedulePersonAction" access-permission="public"/>  
    <has-action action="createSDEXECUTORAction" access-permission="public"/>  
    <has-action action="querySDEXECUTORAction" access-permission="public"/>  
    <has-action action="saveSDEXECUTORAction" access-permission="public"/> 
    <has-action action="deleteScheduleExecutorsAction" access-permission="public"/>
    <has-action action="checkPersonScheduleAction" access-permission="public"/>
  </process> 
</model>
