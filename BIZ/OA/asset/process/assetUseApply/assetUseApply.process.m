<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assetUseApplyProcess" start="start1" end="end1"> 
    <label language="zh_CN">资产使用申请</label>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">资产使用申请</label> 
    </static-activity>  
    <static-activity name="noticeActivity"> 
      <label language="zh_CN">资产使用申请通知</label> 
    </static-activity>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="useApplyActivity" condition="true"> 
      <label language="zh_CN">资产使用申请</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="deptManagerActivity"/> 
    


<execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember()" default-expr="currentPersonMember()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人: ',relationValue('OA_AS_UseApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),' 单号： ',relationValue('OA_AS_UseApplyM',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="deptManagerActivity" condition="true"> 
      <label language="zh_CN">部门领导审批</label>  
      <input name="x" unit="useApplyActivity"/>  
      <output name="x" unit="managerProcessActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true" back-range="specified" > 
        <to activity="useApplyActivity"/> 
      </back-rule> 
    







<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivityInAEDept('START',true)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sExecuteMode">'temSimultaneous'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人: ',relationValue('OA_AS_UseApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),' 单号： ',relationValue('OA_AS_UseApplyM',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="managerProcessActivity" condition="true"> 
      <label language="zh_CN">主管人员办理</label>  
      <input name="x" unit="deptManagerActivity"/>  
      <output name="x" unit="end1"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true" back-range="specified" > 
        <to activity="useApplyActivity"/> 
      </back-rule> 
    




<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('',  true )" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人: ',relationValue('OA_AS_UseApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),' 单号： ',relationValue('OA_AS_UseApplyM',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
<advance-rule condition="true" dialog-enabled="false" save-enabled="false" jump-enabled="false" customized-enabled="false" ignore-execute-mode="false" task-wait="false" task-join="false"></advance-rule>
</business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
      
    <has-action action="queryASKindAction" access-permission="public"/>  
    <has-action action="queryASCardAction" access-permission="public"/>  
    <has-action action="createASUseApplyMAction" access-permission="public"/>  
    <has-action action="queryASUseApplyMAction" access-permission="public"/>  
    <has-action action="saveASUseApplyMAction" access-permission="public"/>  
    <has-action action="createASUseArrangeAction" access-permission="public"/>  
    <has-action action="queryASUseArrangeAction" access-permission="public"/>  
    <has-action action="saveASUseArrangeAction" access-permission="public"/>  
    <has-action action="deleteAssetUseArrangeAction" access-permission="public"/>  
    <listener action="finishProcessAction" event="after" handler="assetUseApplyProcessAfterFinishProcedure"/> 
  


<notice-rule condition="true" dialog-enabled="true" save-enabled="false" task-assign-mode="singleness"><occasion>finishProcess</occasion>
<executor-range range-expr="orgUnitsOr(findActivityExecutor('useApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))" default-expr="orgUnitsOr(findActivityExecutor('useApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))
"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sEURL">'/OA/asset/process/assetUseApply/noticeActivity.w'</item>
<item relation="sExecuteMode2">'finishWhenOpen'</item>
<item relation="sName">concat('通知:','【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人: ',relationValue('OA_AS_UseApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),' 单号： ',relationValue('OA_AS_UseApplyM',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</notice-rule>
</process> 
</model>
