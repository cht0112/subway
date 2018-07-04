<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<process name="defectBugAnalysisProcess">
		<label language="zh_CN">缺陷统计分析</label>
		<static-activity name="mainActivity">
			<label language="zh_CN">缺陷统计分析</label>
		</static-activity>
	

















<has-action action="defectAnalysisByVersion" access-permission="public"></has-action>
<has-action action="queryDEFECT_TRACK_PRODUCT_INFOAction" access-permission="public"></has-action>
<has-action action="queryDEFECT_TRACK_PROJECT_INFOAction" access-permission="public"></has-action>
<has-action action="queryDefectProductAction" access-permission="public"></has-action>
<has-action action="defectAnalysisByPriority" access-permission="public"></has-action>
<has-action action="defectAnalysisBySeverity" access-permission="public"></has-action>
</process>
</model>
