<model xmlns="http://www.justep.com/model"
	xmlns:m="http://www.justep.com/model">
	<process name="taskViewProcess">
		<label language="zh_CN">待办和提交</label>
		
		
		
		<static-activity name="mainActivity"/>
	


<static-activity name="waitActivity"><label language="zh_CN">待办</label>
</static-activity>
<static-activity name="submitActivity"><label language="zh_CN">提交</label>
</static-activity>













<has-action action="querySubmitTaskAction" access-permission="public"></has-action>
<has-action action="queryWaitTaskAction" access-permission="public"></has-action>
<has-action action="queryTaskSummaryAction" access-permission="public"></has-action>
<has-action action="queryWaitTask2Action" access-permission="public"></has-action>
<has-action action="querySubmitTask2Action" access-permission="public"></has-action>
</process>
</model>