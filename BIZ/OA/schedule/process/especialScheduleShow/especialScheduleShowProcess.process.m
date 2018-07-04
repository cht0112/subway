<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="especialScheduleShowProcess"> 
    <label language="zh_CN">领导日程查看</label>  
    <static-activity name="mainActivity"/>  
    <has-action action="queryOA_v_especialScheduleAction" access-permission="public"/>  
    <has-action action="queryEspecialSchedulePersonAction" access-permission="public"/>  
    <has-action action="saveEspecialSchedulePersonAction" access-permission="public"/>  
    <has-action action="createEspecialSchedulePersonAction" access-permission="public"/> 
  </process> 
</model>
