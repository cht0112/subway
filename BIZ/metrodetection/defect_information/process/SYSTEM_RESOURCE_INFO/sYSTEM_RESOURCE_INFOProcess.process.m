<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="sYSTEM_RESOURCE_INFOProcess"> 
    <label language="zh_CN">检测系统问题资源库</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">检测系统问题资源库</label> 
    </static-activity>  
    <has-action action="querySYSTEM_RESOURCE_INFOAction" access-permission="public"/>  
    <has-action action="saveSYSTEM_RESOURCE_INFOAction" access-permission="public"/>  
    <has-action action="createSYSTEM_RESOURCE_INFOAction" access-permission="public"/>  
    <has-action action="systemAction" access-permission="public"/>  
    <has-action action="querySYSTEM_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="saveSYSTEM_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="createSYSTEM_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="queryERROR_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="saveERROR_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="createERROR_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="queryDEVICE_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="saveDEVICE_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="createDEVICE_TYPE_CODEAction" access-permission="public"/>  
    <has-action action="querySYSTEM_PROBLEM_RECORDAction" access-permission="public"/>  
    <has-action action="saveSYSTEM_PROBLEM_RECORDAction" access-permission="public"/>  
    <has-action action="createSYSTEM_PROBLEM_RECORDAction" access-permission="public"/>  
    <has-action action="NewSystemAction" access-permission="public"/>  
    <has-action action="queryDETECTION_OBJECT_TYPEAction" access-permission="public"/> 
  </process> 
</model>
