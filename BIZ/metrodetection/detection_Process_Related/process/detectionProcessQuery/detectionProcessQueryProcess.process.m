<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="detectionProcessQueryProcess"> 
    <label language="zh_CN">检测流程查询</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">检测流程查询</label> 
    </static-activity>  
      
      
     
  











<has-action action="detectionProcessQueryAction" access-permission="public"></has-action>
<has-action action="queryTEST_APPLICATION_INFOAction" access-permission="public"></has-action>
<has-action action="detectionProcessQueryReport" access-permission="public"><public name="variables" type="Map"></public>
<public name="fnModel" type="String"></public>
<public name="sFlowID" type="String"></public>
</has-action>
<has-action action="queryTestApplication" access-permission="public"></has-action>
<has-action action="exportWordAction" access-permission="public"></has-action>
</process> 
</model>
