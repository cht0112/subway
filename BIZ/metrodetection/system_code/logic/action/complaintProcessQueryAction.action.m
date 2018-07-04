<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">

<action name="complaintProcessQueryAction" global="false" procedure="complaintProcessQueryProcedure"><label language="zh_CN">自建投诉处理流程查询</label>
		<private name="concept" type="String" value="SA_Task"/>
		<public name="idColumn" type="String" value="SA_Task"/>
		<private name="select" type="String" value="SA_Task.*,case when SA_Task.sStatusName = '尚未处理' then '编辑中' when SA_Task.sStatusName = '已完成' then '已完成' when SA_Task.sStatusName = '已终止' then '已终止' else '处理中' end as sStatusName1"/>
		<private name="from" type="String" value="SA_Task SA_Task"/>
		<private name="aggregate" type="String"/>
		<protected name="condition" type="String" value="SA_Task.sParent is null AND SA_Task.sTypeName = '客户投诉管理'"/>
		<permission name="range" type="List"/>
		<public name="filter" type="String"/>
		<public name="limit" type="Integer"/>
		<public name="offset" type="Integer"/>
		<public name="distinct" type="Boolean"/>
		<public name="columns" type="String"/>
		<public name="orderBy" type="String"/>
		<public name="aggregateColumns" type="String"/>
		<public name="variables" type="Map"/>
		<private name="fnModel" type="String"/>
		<private name="dataModel" type="String" value="/system/data"/>
		<public type="String" name="status" required="false"/>
		<public type="String" required="false" name="org"/>
</action>
</model>