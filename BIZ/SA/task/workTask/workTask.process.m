<model xmlns="http://www.justep.com/model"
	xmlns:m="http://www.justep.com/model">

	<process name="workTaskProcess" >
		<label language="zh_CN">工作任务</label>
		<has-action action="queryWorkTaskAction"/>
		<has-action action="createWorkTaskAction"/>
		<has-action action="saveWorkTaskAction"/>
		
		<has-action action="queryImportanceAction"/>
		<has-action action="queryEmergencyAction"/>
		<has-action action="queryStatusAction"/>
		<!--  
		<has-action action="queryWPPlanAction"/>
		-->
		<static-activity name="mainActivity"/>
		<static-activity name="useActivity"/>
	</process>
</model>