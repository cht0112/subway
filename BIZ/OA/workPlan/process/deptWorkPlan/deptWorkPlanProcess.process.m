<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="deptWorkPlanProcess" start="start1" end="end1"> 
    <label language="zh_CN">工作计划</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">协同拟制</label> 
    </static-activity>  
    <static-activity name="noticeActivity"> 
      <label language="zh_CN">中心工作计划通知</label> 
    </static-activity>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="deptEdActivity" condition="true"> 
      <label language="zh_CN">流程发起</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="xor1"/> 
    <input name="x" unit="manageActivity"></input>
</business-activity>  
    <business-activity name="manageActivity" condition="true"> 
      <label language="zh_CN">流程处理</label>  
        
        
       
    <input name="x" unit="xor1"></input>
<output name="x" unit="deptEdActivity"></output>
</business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
    <has-action action="queryOA_GZJHAction" access-permission="public"/>  
    <has-action action="saveOA_GZJHAction" access-permission="public"/>  
    <has-action action="createOA_GZJHAction" access-permission="public"/>  
    
    <has-action action="queryOA_GZNRAction" access-permission="public"/>  
    <has-action action="saveOA_GZNRAction" access-permission="public"/>  
    <has-action action="createOA_GZNRAction" access-permission="public"/>
    
    <has-action action="getBizConfigAction" access-permission="public"/>  
    <notice-rule condition="true" dialog-enabled="false" save-enabled="false" task-assign-mode="singleness">
      <occasion>finishProcess</occasion>  
      <executor-range range-expr="findActivityCreator('START')" default-expr="findActivityCreator('START')">
        <kind>PSM</kind> 
      </executor-range>  
      <task-relation-value>
        <item relation="sEURL">'/OA/workPlan/process/deptWorkPlan/noticeActivity.w'</item>  
        <item relation="sExecuteMode2">'finishWhenOpen'</item>  
        <item relation="sName">'通知:中心工作计划:已完成'</item> 
      </task-relation-value> 
    </notice-rule> 
  <place name="xor1"><label language="zh_CN">XOR</label>
</place>
<arc name="x" from="xor1" to="end1"></arc>
</process> 
</model>

