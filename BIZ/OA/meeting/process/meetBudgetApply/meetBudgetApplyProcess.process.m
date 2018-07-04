<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="meetBudgetApplyProcess" start="start1" end="end1"> 
    <label language="zh_CN">会议费预算申请</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">会议费预算申请</label> 
    </static-activity>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="bizActivity2" condition="true"> 
      <label language="zh_CN">单位领导审批</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="bizActivity3"/> 
    </business-activity>  
    <business-activity name="bizActivity3" condition="true"> 
      <label language="zh_CN">财务部门审批</label>  
      <input name="x" unit="bizActivity2"/>  
      <output name="x" unit="bizActivity4"/> 
    </business-activity>  
    <business-activity name="bizActivity4" condition="true"> 
      <label language="zh_CN">所领导审批</label>  
      <input name="x" unit="bizActivity3"/>  
      <output name="x" unit="end1"/> 
    </business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
    <has-action action="queryOA_MT_BudgetApplyAction" access-permission="public"/>  
    <has-action action="saveOA_MT_BudgetApplyAction" access-permission="public"/>  
    <has-action action="createOA_MT_BudgetApplyAction" access-permission="public"/> 
  </process> 
</model>
