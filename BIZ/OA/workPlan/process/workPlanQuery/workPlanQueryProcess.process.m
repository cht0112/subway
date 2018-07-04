<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<process name="workPlanQueryProcess">
		<label language="zh_CN">工作计划查询</label>
		<static-activity name="mainActivity">
			<label language="zh_CN">工作计划查询</label>	
		</static-activity>
		<has-action action="queryOA_GZJHAction" access-permission="public"/>
		<has-action action="queryOA_GZNRAction" access-permission="public"/>
	</process>
</model>
