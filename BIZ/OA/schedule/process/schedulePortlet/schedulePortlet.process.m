<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="schedulePortletProcess" kind="SYSTEM"> 
    <label language="zh_CN">port页面</label>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">startActivity</label> 
    </static-activity>
    <static-activity name="schedulePortletActivity_static"> 
      <label language="zh_CN">schedulePortletActivity_static</label> 
    </static-activity>
    <has-action action="getScheduleDataAction" access-permission="public"/>  
    <has-action action="getScheduleCountAction" access-permission="public"/> 
  </process> 
</model>
