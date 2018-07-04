<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">  
  <process name="assetRepairApplyProcess" start="start1" end="end1"> 
    <label language="zh_CN">资产维修申请</label>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">资产维修申请</label> 
    </static-activity>  
    <static-activity name="noticeActivity"> 
      <label language="zh_CN">资产维修通知</label> 
    </static-activity>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="repairApplyActivity" condition="true"> 
      <label language="zh_CN">维修申请</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="deptDirectorActivity"/> 
    <execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember()" default-expr="currentPersonMember()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_RepairApply',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="deptDirectorActivity" condition="true">
 
      <label language="zh_CN">部门领导审批</label>  
      <input name="x" unit="repairApplyActivity"/>  
      <output name="x" unit="mainDeptDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true" back-range="specified" > 
        <to activity="repairApplyActivity"/> 
      </back-rule> 
    




<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivityInAEDept('START',true)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_RepairApply',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="mainDeptDirectorActivity" condition="true"> 
      <label language="zh_CN">主管部门审核</label>  
      <input name="x" unit="deptDirectorActivity"/>  
      <output name="x" unit="handlerDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true" back-range="specified" > 
        <to activity="repairApplyActivity"/> 
      </back-rule> 
    

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_RepairApply',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="handlerDirectorActivity" condition="true"> 
      <label language="zh_CN">经办人办理</label>  
      <input name="x" unit="mainDeptDirectorActivity"/>  
      <output name="x" unit="end1"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true" back-range="specified" > 
        <to activity="repairApplyActivity"/> 
      </back-rule> 
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_RepairApply',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
      
    <has-action action="queryASKindAction" access-permission="public"/>  
    <has-action action="queryASUnitAction" access-permission="public"/>  
    <has-action action="queryASRepairTypeAction" access-permission="public"/>  
    <has-action action="queryASCardAction" access-permission="public"/>  
    <has-action action="createASRepairApplyAction" access-permission="public"/>  
    <has-action action="queryASRepairApplyAction" access-permission="public"/>  
    <has-action action="saveASRepairApplyAction" access-permission="public"/>  
    <has-action action="createASRepairItemAction" access-permission="public"/>  
    <has-action action="queryASRepairItemAction" access-permission="public"/>  
    <has-action action="saveASRepairItemAction" access-permission="public"/>  
    <has-action action="createASFittingInfoAction" access-permission="public"/>  
    <has-action action="queryASFittingInfoAction" access-permission="public"/>  
    <has-action action="saveASFittingInfoAction" access-permission="public"/> 
  
<notice-rule condition="true" dialog-enabled="true" save-enabled="false" task-assign-mode="singleness"><occasion>finishProcess</occasion>
<executor-range range-expr="orgUnitsOr(findActivityExecutor('repairApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))" default-expr="orgUnitsOr(findActivityExecutor('repairApplyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sEURL">'/OA/asset/process/assetRepairApply/noticeActivity.w'</item>
<item relation="sExecuteMode2">'finishWhenOpen'</item>
<item relation="sName">concat('通知:','【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请部门： ',relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDeptName','/OA/asset/data'),'（申请日期：',toString(relationValue('OA_AS_RepairApply',:sData1,'','','fApplyDate','/OA/asset/data')),'）','单号： ',relationValue('OA_AS_RepairApply',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</notice-rule>
</process> 
</model>