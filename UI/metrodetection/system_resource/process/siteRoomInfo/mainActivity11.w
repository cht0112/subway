<?xml version="1.0" encoding="UTF-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms"
	component="/UI/system/components/window.xbl.xml#window"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	cacheable="true"
	id="wdwListTask" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<resource>        
		<xhtml:script type="text/javascript"
			src="mainActivity.js"></xhtml:script>  
		<xhtml:script type="text/javascript"
			src="/UI/system/service/commonChoose/js/listSingleTemplete.js" />
		<xhtml:script type="text/javascript"
			src="/UI/system/components/windowDialog/windowDialogReceiver.js" />
		<xhtml:script type="text/javascript"
			src="/UI/system/service/commonChoose/js/commonChoosePara.js" />
		<xhtml:script type="text/javascript"
			src="/UI/system/components/windowDialog/windowDialog.js" />
		<xhtml:script type="text/javascript"
			src="/UI/system/components/dialog/dialog.js" />
		<xhtml:link rel="STYLESHEET" type="text/css"
			href="/form/dhtmlx/dhtmlxWindows/dhtmlxwindows.css" />
		<xhtml:link rel="STYLESHEET" type="text/css"
			href="/form/dhtmlx/dhtmlxWindows/skins/dhtmlxwindows_dhx_blue.css" />
	</resource>   
	<xforms:model id="mdWorkTask" style="top:108px;height:auto;left:49px;">
		<data id="dataSA_WorkTask" component="/UI/system/components/data.xbl.xml#bizData"
			concept="SA_WorkTask"
			offset="1" limit="20"
			order-by="sCreateTime:desc"
			auto-load="true" direct-delete="true">   
			<reader action="/SA/task/logic/action/queryWorkTaskAction" />
			<writer action="/SA/task/logic/action/saveWorkTaskAction" />
			<creator action="/SA/task/logic/action/createWorkTaskAction" />
			<calculate-relation relation="btn" type="xs:string"></calculate-relation>
			<calculate-relation relation="name" type="xs:string"></calculate-relation>
			<calculate-relation relation="checkbox" type="xs:string"></calculate-relation>
			<rule concept="SA_WorkTask" readonly="true()" />
		</data>
	</xforms:model>
	<xui:view id="vAllTask">
		<xui:view id="vToolBar">  
			<xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars"
				width="100%" height="10%" id="tbsWorkTask" style="height:32px;">
				<xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar"
					id="ngtbWorkTask" data="dataSA_WorkTask">     
					<item name="save-item" />
					<item name="delete-item" />
					<item name="first-item" />
					<item name="pre-item" />
					<item name="next-item" />
					<item name="last-item" />
					<xui:item>                               
						<xhtml:button id="button1" class="xui-button" onclick="mainActivity.addWork(event)">添加</xhtml:button>
					</xui:item><xui:item>     
						<xhtml:button id="button2" class="xui-button" onclick="mainActivity.deleteCol(event)" style="width:74px;">删除选中</xhtml:button>
					</xui:item>
				</xui:bar>
			</xhtml:div>
			   
		</xui:view>     
			<xhtml:div component="/UI/system/components/grid.xbl.xml#grid"
				id="vList" data="dataSA_WorkTask">
				<xui:column ref="btn" type="html" width="140px" label="操作"
					onRender="mainActivity.btnHtml" />
				<xui:column ref="checkbox" type="html" width="30px" label=""
					onRender="mainActivity.checkBox" />
				<xui:column ref="sImportanceName" label="!" type="ed"
					width="30px" />
				<!--<xui:column ref="sName" label="名称" type="ed" width="100px" />-->
				        
				<xui:column ref="sName" type="html" width="100px" label="名称"
					onRender="mainActivity.link" />
		    
				<xui:column ref="sProjectName" label="项目名称" type="ed"
					width="100px" />
				<xui:column ref="sCustomerName" label="客户名称" type="ed"
					width="100px" />
				<xui:column ref="sPlanName" label="计划名称" type="ed" width="100px" />
				<xui:column ref="sStatusName" label="状态名称" type="ed"
					width="100px" />
				<xui:column ref="sExecutorFName" label="执行人" type="ed"
					width="100px" />
<!--				<xui:column ref="sExecutorDeptName" label="执行部门" type="ed"-->
<!--					width="100px" />-->
				<xui:column ref="sExecuteTime" label="处理时间" type="dateTime"
					width="100px" />
				<xui:column ref="sCreatorFName" label="提交人" type="ed"
					width="100px" />
<!--				<xui:column ref="sCreatorDeptName" label="提交部门" type="ed"-->
<!--					width="100px" />-->
				<xui:column ref="sCreateTime" label="创建时间" type="dateTime"
					width="100px" />
				<xui:column ref="sLastModifyTime" label="最后修改时间" type="dateTime"
					width="100px" />
			</xhtml:div>     
		<xui:layout style="width:100%;height:100%;">
			<xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" 
      			style="width:100%; height: 100%;" id="table_1">
				<top size="36px">
						<xui:place control="vToolBar" />
				</top>
				<center>     
						<xui:place control="vList" style="width:100%;height:100%;"/>
				</center>
			</xhtml:div>
		</xui:layout>
	</xui:view>
</xui:window>
