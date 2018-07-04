<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="jiancebiangengProcess" start="start1" end="end1"> 
    <label language="zh_CN">检测计划变更审核</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">检测计划变更审核</label>  
      <has-action action="queryCHANGE_APPLY_INFOAction" access-permission="public"/>  
      <has-action action="saveCHANGE_APPLY_INFOAction" access-permission="public"/>  
      <has-action action="createCHANGE_APPLY_INFOAction" access-permission="public"/>  
      <has-action action="MyQuerryNameAction" access-permission="public"/>  
      <has-action action="queryTEST_PROJECT_INFOAction" access-permission="public"/>  
      <has-action action="saveTEST_PROJECT_INFOAction" access-permission="public"/>  
      <has-action action="createTEST_PROJECT_INFOAction" access-permission="public"/>  
      <has-action action="queryHR_BASE_INFOAction" access-permission="public"/>  
      <has-action action="saveHR_BASE_INFOAction" access-permission="public"/>  
      <has-action action="createHR_BASE_INFOAction" access-permission="public"/> 
    </static-activity>  
    <place name="start1">
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="businessActivity1" condition="true">
      <label language="zh_CN">检测计划变更申请单</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="businessActivity2"/>  
      <has-action action="MyQuerryNameAction" access-permission="public"/>  
      <has-action action="queryTEST_PROJECT_INFOAction" access-permission="public"/>  
      <has-action action="saveTEST_PROJECT_INFOAction" access-permission="public"/>  
      <has-action action="createTEST_PROJECT_INFOAction" access-permission="public"/>  
      <has-action action="queryHR_BASE_INFOAction" access-permission="public"/>  
      <has-action action="saveHR_BASE_INFOAction" access-permission="public"/>  
      <has-action action="createHR_BASE_INFOAction" access-permission="public"/>  
      <has-action action="queryCHANGE_APPLY_INFOAction" access-permission="public"/>  
      <has-action action="saveCHANGE_APPLY_INFOAction" access-permission="public"/>  
      <has-action action="createCHANGE_APPLY_INFOAction" access-permission="public"/> 
    


<execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember2()" default-expr="currentPersonMember2()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('检测计划变更申请:',changeApplyFn())</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="businessActivity2" condition="true">
      <label language="zh_CN">检测计划变更审核单</label>  
      <input name="x" unit="businessActivity1"/>  
      <output name="x" unit="end1"/>  
        
        
        
       
    






<has-action action="MyQuerryNameAction" access-permission="public"></has-action>
<has-action action="queryCHANGE_APPLY_INFOAction" access-permission="public"></has-action>
<has-action action="saveCHANGE_APPLY_INFOAction" access-permission="public"></has-action>
<has-action action="createCHANGE_APPLY_INFOAction" access-permission="public"></has-action>
<has-action action="queryHR_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="saveHR_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="createHR_BASE_INFOAction" access-permission="public"></has-action>

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('检测计划变更审核:',changeApplyFn())</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <place name="end1">
      <label language="zh_CN">结束</label> 
    </place>  
    <has-action action="queryCHANGE_APPLY_INFOAction" access-permission="public"/>  
    <has-action action="saveCHANGE_APPLY_INFOAction" access-permission="public"/>  
    <has-action action="createCHANGE_APPLY_INFOAction" access-permission="public"/> 
  </process> 
</model>
