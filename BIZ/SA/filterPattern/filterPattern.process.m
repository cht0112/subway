<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<process name="filterPatternProcess" kind="system">
		<static-activity name="mainActivity">
			<label language="zh_CN">过滤模式管理</label>
		</static-activity>
		<label language="zh_CN">过滤模式管理</label>
		<has-action action="queryFilterPatternAction"></has-action>
		<has-action action="saveFilterPatternAction"></has-action>
		<has-action action="createFilterPatternAction"></has-action>
	</process>
</model>