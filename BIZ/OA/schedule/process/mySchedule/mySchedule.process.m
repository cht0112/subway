<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="myScheduleProcess"> 
    <label language="zh_CN">我的日程</label>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">startActivity</label> 
    </static-activity>  
    <static-activity name="mySchedulePortalActivity"> 
      <label language="zh_CN">我的日程(portalMore)</label> 
    </static-activity>  
    <has-action action="querySDSCHEDULEAction" access-permission="public"/>  
    <has-action action="saveSDSCHEDULEAction" access-permission="public"/>  
    <has-action action="createSDSCHEDULEAction" access-permission="public"/>  
    <has-action action="querySDEXECUTORAction" access-permission="public"/>  
    <has-action action="saveSDEXECUTORAction" access-permission="public"/>  
    <has-action action="createSDEXECUTORAction" access-permission="public"/>  
    <has-action action="newScheduleAction" access-permission="public"/>  
    <has-action action="deleteScheduleAction" access-permission="public"/>  
    <has-action action="updateScheduleAction" access-permission="public"/>  
    <has-action action="orgSelectDialogQueryAction" access-permission="public"/> 
  </process> 
</model>
