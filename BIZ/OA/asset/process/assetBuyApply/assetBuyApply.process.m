<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assetBuyApplyProcess" start="start1" end="end1"> 
    <label language="zh_CN">资产采购申请</label>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">资产采购申请</label> 
    </static-activity>  
    <static-activity name="noticeActivity"> 
      <label language="zh_CN">资产采购通知</label> 
    </static-activity>  
    <place name="start1"> 
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="applyActivity" condition="true"> 
      <label language="zh_CN">资产采购申请</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="xor1"/> 
    





<execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember()" default-expr="currentPersonMember()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),'（采购金额：',toString(relationValue('OA_AS_BuyApplyM',:sData1,'','','fAmount','/OA/asset/data')),'元）','单号： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="mainDeptDirectorActivity" condition="true"> 
      <label language="zh_CN">处理部门意见</label>  
      <output name="x" unit="departManagerDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="applyActivity"/> 
      </back-rule>  
      <input name="x" unit="deptAuditActivity"/> 
    <input name="x" unit="xor1"></input>






<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),'（采购金额：',toString(relationValue('OA_AS_BuyApplyM',:sData1,'','','fAmount','/OA/asset/data')),'元）','单号： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>

</business-activity>  
    <business-activity name="departManagerDirectorActivity" condition="true"> 
      <label language="zh_CN">办公室意见</label>  
      <input name="x" unit="mainDeptDirectorActivity"/>  
      <output name="x" unit="financeDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="applyActivity"/> 
      </back-rule>  
       
    <input name="x" unit="xor1"></input>








<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', true)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),'（采购金额：',toString(relationValue('OA_AS_BuyApplyM',:sData1,'','','fAmount','/OA/asset/data')),'元）','单号： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>

</business-activity>  
    <business-activity name="financeDirectorActivity" condition="true"> 
      <label language="zh_CN">财务部意见</label>  
      <input name="x" unit="departManagerDirectorActivity"/>  
      <output name="x" unit="managerDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="applyActivity"/> 
      </back-rule>  
    













<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('',  true )" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),'（采购金额：',toString(relationValue('OA_AS_BuyApplyM',:sData1,'','','fAmount','/OA/asset/data')),'元）','单号： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="managerDirectorActivity" condition="true"> 
      <label language="zh_CN">中心领导意见</label>  
      <input name="x" unit="financeDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified"> 
        <to activity="applyActivity"/> 
      </back-rule>  
      <output name="x" unit="end1"/> 
    










<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('',  true )" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),'（采购金额：',toString(relationValue('OA_AS_BuyApplyM',:sData1,'','','fAmount','/OA/asset/data')),'元）','单号： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <place name="end1"> 
      <label language="zh_CN">结束</label> 
    </place>  
      
      
      
      
      
      
      
      
      
    <business-activity name="deptAuditActivity" condition="true"> 
      <label language="zh_CN">部门负责人审批</label>  
        
      <output name="x" unit="mainDeptDirectorActivity"/>  
      <back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true"
        back-range="specified" then-flow-mode="flowToAgain"> 
        <to activity="applyActivity"/> 
      </back-rule> 
    <input name="x" unit="xor1"></input>







<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),'（采购金额：',toString(relationValue('OA_AS_BuyApplyM',:sData1,'','','fAmount','/OA/asset/data')),'元）','单号： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</execute-rule>

</business-activity> 
  
<place name="xor1"><label language="zh_CN">XOR</label>
</place>
<has-action action="queryASKindAction" access-permission="public"></has-action>
<has-action action="queryASUnitAction" access-permission="public"></has-action>
<has-action action="createASBuyApplyMAction" access-permission="public"></has-action>
<has-action action="queryASBuyApplyMAction" access-permission="public"></has-action>
<has-action action="saveASBuyApplyMAction" access-permission="public"></has-action>
<has-action action="createASBuyApplyDAction" access-permission="public"></has-action>
<has-action action="queryASBuyApplyDAction" access-permission="public"></has-action>
<has-action action="saveASBuyApplyDAction" access-permission="public"></has-action>
<has-action action="sqlQueryAction" access-permission="public"><public name="dataModel" type="String" value="/OA/asset/data"></public>
</has-action>
<notice-rule condition="true" dialog-enabled="true" save-enabled="false" task-assign-mode="singleness"><occasion>finishProcess</occasion>
<executor-range range-expr="orgUnitsOr(findActivityExecutor('applyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))" default-expr="orgUnitsOr(findActivityExecutor('applyActivity'),findOrgUnitsHasRoleByCode('xzgdzcadmin', '', true))"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sEURL">'/OA/asset/process/assetBuyApply/noticeActivity.w'</item>
<item relation="sExecuteMode2">'finishWhenOpen'</item>
<item relation="sName">concat('通知:','【',currentProcessLabelOfProcessContext(),':',currentActivityLabelOfProcessContext(),'】','申请人： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fApplyPsnName','/OA/asset/data'),'（采购金额：',toString(relationValue('OA_AS_BuyApplyM',:sData1,'','','fAmount','/OA/asset/data')),'元）','单号： ',relationValue('OA_AS_BuyApplyM',:sData1,'','','fNO','/OA/asset/data'))</item>
</task-relation-value>
</notice-rule>
</process> 
</model>
