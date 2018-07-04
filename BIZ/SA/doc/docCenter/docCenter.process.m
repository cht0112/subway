<?xml version="1.0" encoding="utf-8"?>
<model xmlns="http://www.justep.com/model">
  <process name="docCenterProcess">
		<label language="zh_CN">文档中心</label>
		<has-action action="queryDocNodeAction" />
		<has-action action="createDocNodeAction" />
		<has-action action="saveDocNodeAction" />
		<has-action action="queryAuthAction" />
		<has-action action="createAuthAction" />
		<has-action action="saveAuthAction" />
		<has-action action="queryOrgAction" />
		<!--<has-action action="personGQueryAction" />-->
		<has-action action="queryPermissionAction" />
		<has-action action="queryNameSpaceAction" />
		<has-action action="queryDocAction" />
		<has-action action="addAccessRecordAction" />
		<has-action action="dispatchOptAction"/>
		<has-action action="ksqlQueryAction"/>
		
		<static-activity name="mainActivity">
			<label language="zh_CN">文档中心活动</label>
		</static-activity>
		<static-activity name="docPermissionViewActivity">
			<label language="zh_CN">文档权限属性</label>
		</static-activity>
	</process>
</model>
