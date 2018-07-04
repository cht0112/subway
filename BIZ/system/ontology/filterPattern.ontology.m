<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<concept name="SA_FilterPattern" default-value-expr="guid()">
		<has-relation relation="version">
			<label language="zh_CN">版本</label>
		</has-relation>
		<label language="zh_CN">过滤模式</label>
		<has-relation relation="sName">
			<label language="zh_CN">名称</label>
		</has-relation>
		<has-relation relation="sPerson" data-type="SA_OPPerson" default-value-expr="operatorID()">
			<label language="zh_CN">操作员</label>
		</has-relation>
		<has-relation relation="sProcess">
			<label language="zh_CN">过程</label>
		</has-relation>
		<has-relation relation="sActivity">
			<label language="zh_CN">环节</label>
		</has-relation>
		<has-relation relation="sInstance" data-type="String">
			<label language="zh_CN">数据</label>
		</has-relation>
		<has-relation relation="sContent">
			<label language="zh_CN">内容</label>
		</has-relation>
		<has-relation relation="sOrderNum" data-type="Integer" default-value-expr="nextSeq('$SA_FILTERPATTERN_ORDER$')">
			<label language="zh_CN">顺序号</label>
		</has-relation>
	</concept>
	<relation name="sPerson" data-type="String">
		<label language="zh_CN">操作员</label>
	</relation>
	<relation name="sInstance" data-type="String">
		<label language="zh_CN">数据</label>
	</relation>
	<relation name="sOrderNum" data-type="Integer">
		<label language="zh_CN">顺序号</label>
	</relation>
</model>