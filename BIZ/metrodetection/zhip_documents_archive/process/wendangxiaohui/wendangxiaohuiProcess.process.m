<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<process name="wendangxiaohuiProcess" start="start1" end="end1">
		<label language="zh_CN">文档销毁</label>
		<static-activity name="mainActivity">
			<label language="zh_CN">文档销毁</label>
		</static-activity>
	<place name="start1"><label language="zh_CN">开始</label>
<has-token token="init"></has-token>
</place>
<token name="init"></token>
<business-activity name="businessActivity1" condition="true"><label language="zh_CN">文档销毁申请</label>
<input name="x" unit="start1"></input>
<output name="x" unit="businessActivity2"></output>




<execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember2()" default-expr="currentPersonMember2()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档销毁申请:',documentFn())</item>
</task-relation-value>
</execute-rule>
</business-activity>
<business-activity name="businessActivity2" condition="true"><label language="zh_CN">初审</label>
<input name="x" unit="businessActivity1"></input>
<output name="x" unit="xor1"></output>



<has-action action="queryCHECK_RECORDAction" access-permission="public"></has-action>
<has-action action="queryHR_BASE_INFOAction" access-permission="public"></has-action>

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档销毁初审:',documentFn())</item>
</task-relation-value>
</execute-rule>
</business-activity>
<business-activity name="businessActivity3" condition="true"><label language="zh_CN">复审</label>

<output name="x" unit="xor2"></output>

<has-action action="queryCHECK_RECORDAction" access-permission="public"></has-action>

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档销毁复审:',documentFn())</item>
</task-relation-value>
</execute-rule>
<input name="x" unit="xor1"></input>
</business-activity>
<business-activity name="businessActivity4" condition="true"><label language="zh_CN">终审</label>

<output name="x" unit="businessActivity5"></output>
<input name="x" unit="xor1"></input>
<has-action action="queryCHECK_RECORDAction" access-permission="public"></has-action>

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档销毁终审:',documentFn())</item>
</task-relation-value>
</execute-rule>
<input name="x" unit="xor2"></input>
</business-activity>
<business-activity name="businessActivity5" condition="true"><label language="zh_CN">执行</label>
<input name="x" unit="businessActivity4"></input>
<output name="x" unit="end1"></output>

<input name="x" unit="xor2"></input>


<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('文档销毁执行:',documentFn())</item>
</task-relation-value>
</execute-rule>
<input name="x" unit="xor1"></input>




<has-action action="queryCHECK_RECORDAction" access-permission="public"></has-action>
</business-activity>
<place name="end1"><label language="zh_CN">结束</label>
</place>


































































































<start-rule condition="true"><task-relation-value><item relation="sName">documentFn()</item>
</task-relation-value>
</start-rule>
<place name="xor1"><label language="zh_CN">XOR</label>
</place>
<place name="xor2"><label language="zh_CN">XOR</label>
</place>































<has-action action="queryDOCUMENTS_DESTROY_RECORDAction" access-permission="public"></has-action>
<has-action action="saveDOCUMENTS_DESTROY_RECORDAction" access-permission="public"></has-action>
<has-action action="createDOCUMENTS_DESTROY_RECORDAction" access-permission="public"></has-action>
<has-action action="queryCHECK_RECORDAction" access-permission="public"></has-action>
<has-action action="saveCHECK_RECORDAction" access-permission="public"></has-action>
<has-action action="createCHECK_RECORDAction" access-permission="public"></has-action>
<has-action action="queryHR_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="queryP_DOCUMENTS_ARCHIVEAction" access-permission="public"></has-action>
<has-action action="queryDOCUMENT_CATEGORY_CODEAction" access-permission="public"></has-action>
<has-action action="queryDOCUMENT_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="createP_DOCUMENTS_BORROW_RECORDAction" access-permission="public"></has-action>
<has-action action="createP_DOCUMENTS_BORROW_RECORDAction" access-permission="public"></has-action>
<has-action action="myQuerydocuments_destroy_record" access-permission="public"></has-action>
<has-action action="queryDocNodeAction" access-permission="public"></has-action>
<has-action action="saveDocNodeAction" access-permission="public"></has-action>
<has-action action="saveP_DOCUMENTS_ARCHIVEAction" access-permission="public"></has-action>
<has-action action="destoryE_FileActin" access-permission="public"></has-action>
</process>
</model>
