<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="wendangliuchengProcess" start="start1" end="end1"> 
    <label language="zh_CN">文档流程</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">文档流程</label> 
    <has-action action="queryHR_BASE_INFOAction" access-permission="public"></has-action>
</static-activity>  
    <place name="start1">
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="businessActivity1" condition="true">
      <label language="zh_CN">申请</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="businessActivity2"/>  
       
    
<execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember2()" default-expr="currentPersonMember2()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档借阅申请:',jieyueshenqingFn())</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="businessActivity2" condition="true">
      <label language="zh_CN">初审</label>  
      <input name="x" unit="businessActivity1"/>  
        
        
        
        
      <has-action action="queryCHECK_RECORDAction" access-permission="public"/> 
    
<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档申请初审:',jieyueshenqingFn())</item>
</task-relation-value>
</execute-rule>
<output name="x" unit="xor1"></output>
</business-activity>  
    <business-activity name="businessActivity3" condition="true">
      <label language="zh_CN">复审</label>  
      <input name="x" unit="xor1"/>  
        
        
      <has-action action="queryCHECK_RECORDAction" access-permission="public"/>  
      <has-action action="saveCHECK_RECORDAction" access-permission="public"/>  
      <has-action action="createCHECK_RECORDAction" access-permission="public"/> 
    
<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档申请复审:',jieyueshenqingFn())</item>
</task-relation-value>
</execute-rule>
<output name="x" unit="xor2"></output>
</business-activity>  
    <business-activity name="businessActivity4" condition="true">
      <label language="zh_CN">终审</label>  
      <input name="x" unit="xor2"/>  
      <output name="x" unit="businessActivity5"/>  
      <input name="x" unit="xor1"/>  
      <has-action action="queryCHECK_RECORDAction" access-permission="public"/> 
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档申请终审:',jieyueshenqingFn())</item>
</task-relation-value>
</execute-rule>
</business-activity>  
    <business-activity name="businessActivity5" condition="true">
      <label language="zh_CN">执行</label>  
      <input name="x" unit="businessActivity4"/>  
      <output name="x" unit="end1"/>  
        
        
      <has-action action="queryCHECK_RECORDAction" access-permission="public"/> 
    <execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档申请执行:',jieyueshenqingFn())</item>
</task-relation-value>
</execute-rule>


<input name="x" unit="xor1"></input>
<input name="x" unit="xor2"></input>
</business-activity>  
    <place name="end1">
      <label language="zh_CN">结束</label> 
    </place>  
      
      
      
      
      
      
     
  

















































































<start-rule condition="true"><task-relation-value><item relation="sName">jieyueshenqingFn()</item>
</task-relation-value>
</start-rule>

<place name="xor1"><label language="zh_CN">XOR</label>
</place>
<place name="xor2"><label language="zh_CN">XOR</label>
</place>






























































<has-action action="queryP_DOCUMENTS_BORROW_RECORDAction" access-permission="public"></has-action>
<has-action action="saveP_DOCUMENTS_BORROW_RECORDAction" access-permission="public"></has-action>
<has-action action="createP_DOCUMENTS_BORROW_RECORDAction" access-permission="public"></has-action>
<has-action action="queryDOCUMENT_CATEGORY_CODEAction" access-permission="public"></has-action>
<has-action action="queryDOCUMENT_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="queryHR_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="createCHECK_RECORDAction" access-permission="public"></has-action>
<has-action action="queryCHECK_RECORDAction" access-permission="public"></has-action>
<has-action action="saveCHECK_RECORDAction" access-permission="public"></has-action>
<has-action action="myQueryCheckRecordAllAction" access-permission="public"></has-action>
<has-action action="queryP_DOCUMENTS_ARCHIVEAction" access-permission="public"></has-action>
<has-action action="myQueryborrowState" access-permission="public"></has-action>
<has-action action="saveP_DOCUMENTS_ARCHIVEAction" access-permission="public"></has-action>
<has-action action="createP_DOCUMENTS_ARCHIVEAction" access-permission="public"></has-action>
<has-action action="myQueryp_documents_borrow_record" access-permission="public"></has-action>
</process> 
</model>
