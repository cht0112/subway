<?xml version="1.0" encoding="utf-8"?>
<model xmlns="http://www.justep.com/model"
	xmlns:m="http://www.justep.com/model">
	<process name="commonWordsProcess" kind="system">
		<label language="zh_CN">我的常用语</label>
		<has-action action="queryCommonWordsAction"/>
		<has-action action="saveCommonWordsAction"/>
		<has-action action="createCommonWordsAction"/>
		<static-activity name="mainActivity">
			<label language="zh_CN">我的常用语</label>
		</static-activity>
	</process>
</model>