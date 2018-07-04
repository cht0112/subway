<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assetDealApplyProcess" start="start1" end="end1"> 
    <label language="zh_CN">资产处置申请</label>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">资产处置申请</label> 
    </static-activity>  
    <static-activity name="noticeActivity"> 
      <label language="zh_CN">资产处置通知</label> 
    </static-activity>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="dealApplyActivity" condition="true"> 
      <label language="zh_CN">处置申请</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="deptDirectorActivity"/> 
    
<execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember()" default-expr="currentPersonMember()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DealApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DealApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DealApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="deptDirectorActivity" condition="true"> 
      <label language="zh_CN">部门领导审批</label>  
      <input name="x" unit="dealApplyActivity"/>  
      <output name="x" unit="mainDeptDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="dealApplyActivity"/> 
      </back-rule> 
    

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivityInAEDept('START',true)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DealApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DealApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DealApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="mainDeptDirectorActivity" condition="true"> 
      <label language="zh_CN">主管部门审批</label>  
      <input name="x" unit="deptDirectorActivity"/>  
      <output name="x" unit="end1"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="dealApplyActivity"/> 
      </back-rule> 
    

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('',  true )" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DealApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DealApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DealApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
<advance-rule condition="true" dialog-enabled="false" save-enabled="false" jump-enabled="false" customized-enabled="false" ignore-execute-mode="false" task-wait="false" task-join="false"></advance-rule>
</business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
    <has-action action="queryASKindAction" access-permission="public"/>  
    <has-action action="createASDealModeAction" access-permission="public"/>  
    <has-action action="queryASCardAction" access-permission="public"/>  
    <has-action action="createASDealApplyAction" access-permission="public"/>  
    <has-action action="queryASDealApplyAction" access-permission="public"/>  
    <has-action action="saveASDealApplyAction" access-permission="public"/>  
    <has-action action="queryASDealModeAction" access-permission="public"/>  
    <listener action="finishProcessAction" event="after" handler="assetDealApplyProcessAfterFinishProcedure"/>  
     
  <notice-rule condition="true" dialog-enabled="true" save-enabled="false" task-assign-mode="singleness"><occasion>finishProcess</occasion>
<executor-range range-expr="orgUnitsOr(findActivityExecutor('dealApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))" default-expr="orgUnitsOr(findActivityExecutor('dealApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sEURL">'/OA/asset/process/assetDealApply/noticeActivity.w'</item>
<item relation="sExecuteMode2">'finishWhenOpen'</item>
<item relation="sName">concat('通知:','【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DealApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DealApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DealApply',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</notice-rule>
</process> 
</model>
