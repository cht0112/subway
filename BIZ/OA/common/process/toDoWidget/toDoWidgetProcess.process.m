<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="toDoWidgetProcess" kind="SYSTEM"> 
    <label language="zh_CN">我的待办</label>  
    <static-activity name="mainActivity"/>  
    <has-action action="getToDoDataAction" access-permission="public"/> 
  </process> 
</model>
