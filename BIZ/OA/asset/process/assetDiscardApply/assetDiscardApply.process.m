<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assetDiscardApplyProcess" start="start1" end="end1"> 
    <label language="zh_CN">资产报废申请</label>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="discardApplyActivity" condition="true"> 
      <label language="zh_CN">报废申请</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="xor1"/> 
    <execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember()" default-expr="currentPersonMember()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="deptManagerActivity" condition="true"> 
      <label language="zh_CN">部门领导审批</label>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="discardApplyActivity"/> 
      </back-rule>  
      <input name="x" unit="xor1"/>  
      <output name="x" unit="managerProcessActivity"/>  
       
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivityInAEDept('discardApplyActivity',false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sExecuteMode">'temSequential'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="managerProcessActivity" condition="true"> 
      <label language="zh_CN">主管部门审核</label>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="discardApplyActivity"/> 
      </back-rule>  
      <input name="x" unit="xor1"/>  
      <input name="x" unit="deptManagerActivity"/>  
      <output name="x" unit="officeActivity"/>  
        
      <advance-rule condition="true" dialog-enabled="true" save-enabled="false" jump-enabled="false"
        customized-enabled="false" ignore-execute-mode="false" task-wait="false" task-join="false"/> 
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
    <listener action="finishProcessAction" event="after" handler="assetDiscardApplyProcessAfterFinishProcedure"/>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">资产报废申请</label> 
    </static-activity>  
    <static-activity name="noticeActivity"> 
      <label language="zh_CN">资产报废通知</label> 
    </static-activity>  
    <notice-rule condition="true" dialog-enabled="true" save-enabled="false" task-assign-mode="singleness">
      <occasion>finishProcess</occasion>  
      <executor-range range-expr="orgUnitsOr(findActivityExecutor('discardApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))"
        default-expr="orgUnitsOr(findActivityExecutor('discardApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true)) ">
        <kind>PSM</kind> 
      </executor-range>  
      <task-relation-value>
        <item relation="sEURL">'/OA/asset/process/assetDiscardApply/noticeActivity.w'</item>  
        <item relation="sExecuteMode2">'finishWhenOpen'</item>  
        <item relation="sName">'通知:资产报废申请'</item> 
      </task-relation-value> 
    </notice-rule>  
    <place name="xor1">
      <label language="zh_CN">XOR</label> 
    </place>  
    <business-activity name="officeActivity" condition="true">
      <label language="zh_CN">办公室意见</label>  
      <input name="x" unit="xor1"/>  
      <input name="x" unit="managerProcessActivity"/>  
      <output name="x" unit="financeActivity"/>  
       
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="financeActivity" condition="true">
      <label language="zh_CN">财务部意见</label>  
      <input name="x" unit="officeActivity"/>  
      <output name="x" unit="managerActivity"/>  
        
      <advance-rule condition="true" dialog-enabled="true" save-enabled="false" jump-enabled="false"
        customized-enabled="false" ignore-execute-mode="false" task-wait="false" task-join="false"/> 
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="managerActivity" condition="true">
      <label language="zh_CN">主管领导审批</label>  
      <input name="x" unit="financeActivity"/>  
      <output name="x" unit="end1"/>  
        
      <advance-rule condition="true" dialog-enabled="true" save-enabled="false" jump-enabled="false"
        customized-enabled="false" ignore-execute-mode="false" task-wait="false" task-join="false"/> 
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_DiscardApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_DiscardApply',:sData1,'','','fNO','/OA/asset/data'))
</item>
</task-relation-value>
</execute-rule>
</business-activity>  
      
      
      
      
     
    
  





<has-action action="queryASKindAction" access-permission="public"></has-action>
<has-action action="queryASCardAction" access-permission="public"></has-action>
<has-action action="createASDiscardApplyAction" access-permission="public"></has-action>
<has-action action="queryASDiscardApplyAction" access-permission="public"></has-action>
<has-action action="saveASDiscardApplyAction" access-permission="public"></has-action>
<has-action action="sqlQueryAction" access-permission="public"><public name="dataModel" type="String" value="/OA/asset/data"></public>
</has-action>
</process> 
</model>
