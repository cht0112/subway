<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="officesWorkPlanProcess" start="start1" end="end1"> 
    <label language="zh_CN">工作计划</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">部门工作计划编制</label> 
    </static-activity>  
    <static-activity name="noticeActivity"> 
      <label language="zh_CN">部门工作计划通知</label> 
    </static-activity>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="bizActivity1" condition="true"> 
      <label language="zh_CN">流程发起</label>  
      <input name="x" unit="start1"/>  
      <input name="x" unit="bizActivity2"/> 
      <output name="x" unit="xor1"/>  
    </business-activity>  
    <business-activity name="bizActivity2" condition="true"> 
      <label language="zh_CN">流程处理</label>  
        
      <!--  freedom-enabled="false" -->  
      <execute-rule condition="true" task-assign-mode="together">
        <executor-range range-expr="findOrgUnitsHasActivity('bizActivity2',relationValue('OA_GZJH', :sData1, '', '', 'fCreatePsnFID', '/OA/workPlan/data'),true)"
          default-expr="findOrgUnitsHasActivity('bizActivity2',relationValue('OA_GZJH', :sData1, '', '', 'fCreatePsnFID', '/OA/workPlan/data'),true)">
          <kind>PSM</kind> 
        </executor-range>  
        <task-relation-value>
          <item relation="sPreemptMode">'tpmOpen'</item>  
          <item relation="sExecuteMode">'temPreempt'</item>  
          <item relation="sName">'流程处理:部门工作计划编制'</item> 
        </task-relation-value> 
      </execute-rule>  
      <input name="x" unit="xor1"/> 
      <output name="x" unit="bizActivity1"/>  
    </business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
    <has-action action="queryOA_GZJHAction" access-permission="public"/>  
    <has-action action="saveOA_GZJHAction" access-permission="public"/>  
    <has-action action="createOA_GZJHAction" access-permission="public"/>  
    <has-action action="getBizConfigAction" access-permission="public"/>  
    <has-action action="queryOA_GZNRAction" access-permission="public"/>  
    <has-action action="saveOA_GZNRAction" access-permission="public"/>  
    <has-action action="createOA_GZNRAction" access-permission="public"/>  
    <notice-rule condition="true" dialog-enabled="false" save-enabled="false" task-assign-mode="singleness"> 
      <occasion>finishProcess</occasion>  
      <executor-range range-expr="findActivityCreator('START')" default-expr="findActivityCreator('START')"> 
        <kind>PSM</kind> 
      </executor-range>  
      <task-relation-value> 
        <item relation="sEURL">'/OA/workPlan/process/officesWorkPlan/noticeActivity.w'</item>  
        <item relation="sExecuteMode2">'finishWhenOpen'</item>  
        <item relation="sName">'通知:部门工作计划审批:已完成'</item> 
      </task-relation-value> 
    </notice-rule>  
    <place name="xor1">
      <label language="zh_CN">XOR</label> 
    </place>  
    <arc name="x" from="xor1" to="end1"/> 
  </process> 
</model>
