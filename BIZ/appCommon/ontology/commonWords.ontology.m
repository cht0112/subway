<?xml version="1.0" encoding="utf-8"?>
<model xmlns="http://www.justep.com/model">
	<concept name="AP_CommonWords" default-value-expr="guid()">
		<label language="zh_CN">常用语</label>
		<has-relation relation="version" default-value-expr="0" />
		<has-relation relation="fPersonID" default-value-expr="currentPersonID()" />
		<has-relation relation="fPersonName"
			default-value-expr="currentPersonName()" />
		<has-relation relation="fCommonWords" />
		<has-relation relation="fCreateTime"
			default-value-expr="currentDateTime()">
		</has-relation>
	</concept>
	<relation name="fCommonWords" data-type="String"
		single-valued="true" size="1024">
		<label language="zh_CN">常用语</label>
	</relation>
</model>
