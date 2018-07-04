<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<process name="infomationComplaintProcess" start="start1" end="end1">
		<label language="zh_CN">客户投诉管理</label>
		<static-activity name="mainActivity">
			<label language="zh_CN">投诉处理流程</label>
		<has-action action="queryCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="saveCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="createCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="myQueryComplantFeedbackAction" access-permission="public"></has-action>
<has-action action="queryCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="saveCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="createCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="myComplaintInfoSelete" access-permission="public"></has-action>
<has-action action="myQueryComplaintFeedAndHR" access-permission="public"></has-action>
</static-activity>
	



<place name="start1"><label language="zh_CN">开始</label>
<has-token token="init"></has-token>
</place>
<token name="init"></token>
<business-activity name="businessActivity1" condition="true"><label language="zh_CN">客户投诉登记</label>
<input name="x" unit="start1"></input>
<output name="x" unit="businessActivity2"></output>





































<execute-rule condition="isStartingProcess()" task-assign-mode="together"><executor-range range-expr="currentPersonMember2()" default-expr="currentPersonMember2()"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('投诉登记:',complaintFn())</item>
</task-relation-value>
</execute-rule>
</business-activity>
<business-activity name="businessActivity2" condition="true"><label language="zh_CN">投诉意见分析</label>
<input name="x" unit="businessActivity1"></input>

















<output name="x" unit="businessActivity3"></output>



















































































<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('投诉分析:',complaintFn())</item>
</task-relation-value>
</execute-rule>



















</business-activity>




































<business-activity name="businessActivity3" condition="true"><label language="zh_CN">投诉处置审核</label>
<input name="x" unit="businessActivity2"></input>



























<output name="x" unit="businessActivity4"></output>
<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('处置审核:',complaintFn())</item>
</task-relation-value>
</execute-rule>



















</business-activity>



















<start-rule condition="true"><task-relation-value><item relation="sName">complaintFn()</item>
</task-relation-value>
</start-rule>


<business-activity name="businessActivity4" condition="true"><label language="zh_CN">处理效果验证</label>
<input name="x" unit="businessActivity3"></input>

<output name="x" unit="end1"></output>

<execute-rule condition="true" task-assign-mode="together"><executor-range range-expr="findOrgUnitsHasCActivity('', false)" default-expr=""><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sPreemptMode">'tpmOpen'</item>
<item relation="sExecuteMode">'temPreempt'</item>
<item relation="sName">concat('效果验证:',complaintFn())</item>
</task-relation-value>
</execute-rule>



















</business-activity>

<place name="end1"><label language="zh_CN">结束</label>
</place>

























































<notice-rule condition="true" dialog-enabled="true" save-enabled="true" task-assign-mode="singleness"><occasion>finishProcess</occasion>
<executor-range range-expr="findActivityCreator('START')" default-expr="findActivityCreator('START')"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sEURL">'/metrodetection/customer_service/process/infomationComplaint/complaintProcessQueryDetail.w'</item>
<item relation="sExecuteMode2">'finishWhenOpen'</item>
<item relation="sName">concat(complaintFn(),'结束通知')</item>
</task-relation-value>
</notice-rule>













<has-action action="queryCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="saveCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="createCUSTOMER_COMPLAINT_INFOAction" access-permission="public"></has-action>
<has-action action="myComplaintInfoSelete" access-permission="public"></has-action>
<has-action action="myQueryComplantFeedbackAction" access-permission="public"></has-action>
<has-action action="queryCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="saveCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="createCUSTOMER_COMPLAINT_FEEDBACKAction" access-permission="public"></has-action>
<has-action action="myQueryComplaintFeedAndHR" access-permission="public"></has-action>
<has-action action="queryHR_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="complaintProcessQueryReport" access-permission="public"></has-action>
<has-action action="complaintProcessQueryAction" access-permission="public"></has-action>
</process>
</model>
