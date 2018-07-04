<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="change_check_infoProcess"> 
    <label language="zh_CN">变更审核</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">变更审核</label> 
    </static-activity>  
    <has-action action="queryCHANGE_APPLY_INFOAction" access-permission="public"/>  
    <has-action action="saveCHANGE_APPLY_INFOAction" access-permission="public"/>  
    <has-action action="createCHANGE_APPLY_INFOAction" access-permission="public"/>  
    <has-action action="MyQuerryNameAction" access-permission="public"/>  
    <has-action action="queryHR_BASE_INFOAction" access-permission="public"/> 
  </process> 
</model>
