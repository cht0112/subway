<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" cacheable="true" id="work_task_app">  
  <xforms:model id="mainmodel" style="height:auto;top:200px;left:754px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_WorkTask" offset="0" limit="20" order-by="sCreateTime:desc" auto-load="false" onValueChanged="mainActivity.mainValueChanged" onRefreshCreateParam="mainActivity.mainRefreshCreateParam" filter-relations="sImportanceName,sName,sProjectName,sCustomerName,sPlanName,sStatusName,sExecutorFName,sExecuteTime,sCreatorFName,sCreateTime,sLastModifyTime" direct-delete="true" onIndexChanged="mainActivity.mainIndexChanged"> 
      <reader action="/SA/task/logic/action/queryWorkTaskAction"/>  
      <writer action="/SA/task/logic/action/saveWorkTaskAction"/>  
      <creator action="/SA/task/logic/action/createWorkTaskAction"/>  
      <!--  
			<calculate-relation relation="sExecutorDeptFName" type="xs:string"/>
			<calculate-relation relation="sExecutorDeptFID" type="xs:string"/>
			<rule relation="sExecutorFName" calculate="call('calculateExecutorFName')"/>
			<rule relation="sExecutorFID" calculate="call('calculateExecutorFID')"/>
			-->  
      <rule relation="sContent" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sContent" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="version" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sCode" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sName" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))" required="true()" alert="concat('编号:  ', data('main')/sCode, '   ','主题不能为空！')"/>  
      <rule relation="sDistributeTime" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sCreateTime" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sLastModifyTime" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <!--  
			<rule relation="sTypeID" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>
			-->  
      <rule relation="sCustomerID" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sProjectID" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sPlanID" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sEmergencyID" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sImportanceID" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sLimitTime" readonly="not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sRemark" readonly="not(contains(data('main')/sExecutorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sExpectStartTime" readonly="not(contains(data('main')/sExecutorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sExpectFinishTime" readonly="not(contains(data('main')/sExecutorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sActualStartTime" readonly="not(contains(data('main')/sExecutorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sActualFinishTime" readonly="not(contains(data('main')/sExecutorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sExecuteTime" readonly="not(contains(data('main')/sExecutorFID, call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sStatusID" readonly="not(contains(data('main')/sExecutorFID, call('justep.Context.getCurrentPersonID')))"/> 
    </data>  
    <data id="task_importance" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Importance" auto-load="false" store-type="simple"> 
      <reader action="/system/logic/action/queryImportanceAction"/> 
    </data>  
    <data id="task_emergency" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Emergency" auto-load="false" store-type="simple"> 
      <reader action="/system/logic/action/queryEmergencyAction"/> 
    </data>  
    <data id="task_status" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_TaskStatus" auto-load="false" store-type="simple"> 
      <reader action="/system/logic/action/queryStatusAction"/> 
    </data>  
    <data id="custom_filter" auto-load="true" component="/UI/system/components/data.xbl.xml#data" store-type="simple" columns="type,org_person,org,person,parent_org,status,like"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>submited</cell>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">mainActivity.mainmodelLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <view id="view1"> 
    <view id="list-custom-filter-bar"> 
      <!-- onChanged="setOrgPersonFilter1" -->  
      <!-- onCloseup="setPersonAndStatusFilter1" -->  
      <!-- 
				<xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"  id="div1"
					width="100px" style="width:100px"  ref="data('custom_filter')/status" auto-size="true" multi-select="true">
					<xforms:label ref="label" />
					<xforms:value ref="value" />
					<xforms:itemset>
						<xforms:column ref="label"/>
						<xforms:column ref="value" visible='false'/>
						<itemset-data>
							<rows xmlns="">
								<row>
									<cell>待办</cell>
									<cell>waiting</cell>
								</row>
								<row>
									<cell>已办</cell>
									<cell>finished</cell>
								</row>
								<row>
									<cell>提交</cell>
									<cell>submited</cell>
								</row>
							</rows>
						</itemset-data>
					</xforms:itemset>
				</xhtml:div>
				 -->  
      <layout> 
        </layout> 
    </view>  
    <view id="list_grid"> 
      <xhtml:div id="main_grid" data="main" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%; height: 100%;" onRowDblClick="mainActivity.mainGridRowDblClick" class="grid-compact"> 
        <column ref="sImportanceName" width="20px" label="!"/>  
        <column ref="sName" width="120px"/>  
        <column ref="sProjectName" width="100px"/>  
        <column ref="sCustomerName" width="100px"/>  
        <column ref="sPlanName" width="100px"/>  
        <column ref="sStatusName" width="60px"/>  
        <column ref="sExecutorDeptName" width="100px"/>  
        <column ref="sExecutorPersonName" width="100px"/>  
        <column ref="sExecuteTime" type="date" width="70px" readonly="true"/>  
        <column ref="sCreatorDeptName" width="100px"/>  
        <column ref="sCreatorPersonName" width="100px"/>  
        <column ref="sCreateTime" width="70px" type="date" readonly="true"/>  
        <column ref="sLastModifyTime" width="80px" type="date" readonly="true"/> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%"> 
        <place control="main_grid"/> 
      </layout> 
    </view>  
    <view id="detail_form" auto-load="false" class="xui-container"> 
      <layout style="width: 100%; height: 100%;position:relative;" type="flow"><xhtml:div class="cell-layout" component="/UI/system/components/cellLayout.xbl.xml#cellLayout" id="cellLayout1" style="width:100%;height:100%;;">
   <place id="default2" control="WorkTaskSerialNumber" style="width:100%;"></place>
   <place id="default4" control="WorkTaskName" style="width:100%;"></place>
   <place id="default5" control="WorkTaskCustomId" style="width:100%;"></place>
   <place id="default7" control="WorkTaskImportance" style="width:100%;"></place>
   <place id="default8" control="WorkTaskWorkPlan" style="width:100%;"></place>
   <place id="default9" control="WorkTaskProjectId" style="width:100%;"></place>
   <place id="default11" control="WorkTaskEmergency" style="width:100%;"></place>
   <place id="default13" control="WorkTaskLimitDate" style="width:100%;"></place>
   <place id="default15" control="WorkTaskContent" style="width:100%;"></place>
   <place id="default17" control="WorkTaskSubmitterId" style="width:100%;"></place>
   <place id="default19" control="WorkTaskSubmitDate" style="width:100%;"></place>
   <place id="default20" control="WorkTaskHandleDepartmentId" style="width:100%;"></place>
   <place id="default22" control="WorkTaskHandleStatus" style="width:100%;"></place>
   <place id="default24" control="WorkTaskDistributeDate" style="width:100%;"></place>
   <place id="default26" control="WorkTaskHandleDate" style="width:100%;"></place>
   <place id="default28" control="WorkTaskPlanStartDate" style="width:100%;"></place>
   <place id="default30" control="WorkTaskPlanEndDate" style="width:100%;"></place>
   <place id="default32" control="WorkTaskRealityStartDate" style="width:100%;"></place>
   <place id="default34" control="WorkTaskRealityEndDate" style="width:100%;"></place>
   <place id="default36" control="WorkTaskHandleDiscription" style="width:100%;color:#3366FF;"></place>
   <layout-content id="default37"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="80" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 101px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td></tr>
     <tr><td  style="HEIGHT: 50px"></td><td  colSpan="10" style="HEIGHT: 50px" componentId="buttonBar3"></td></tr>
     <tr><td  style="HEIGHT: 32px"></td><td  colSpan="10" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; HEIGHT: 32px; FONT-SIZE: 19px; FONT-WEIGHT: bold; VERTIAL-ALIGN: middle">工作任务</td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="5" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #bfdbff; PADDING-LEFT: 3px; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; FONT-WEIGHT: bold; vertial-align: middle">基本信息</td><td  style="BORDER-BOTTOM: #808080 1px solid; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; VERTIAL-ALIGN: middle"></td><td  style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: right; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; VERTIAL-ALIGN: middle">编码：</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskSerialNumber"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*名 称</td><td  colSpan="8" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskName"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">客 户</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskCustomId"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*重 要 性</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskImportance"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">计划/工作项</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskWorkPlan"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">项 目</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskProjectId"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*紧 迫 度</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskEmergency"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">限制时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskLimitDate"></td></tr>
     <tr><td  style="HEIGHT: 183px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 183px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">内 容</td><td  colSpan="8" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 183px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: top" componentId="WorkTaskContent"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*提 交 者</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskSubmitterId"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*创建时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskSubmitDate"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="10" style="BORDER-BOTTOM: #808080 1px solid; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #bfdbff; PADDING-LEFT: 3px; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #808080 1px solid; vertial-align: middle">处理情况</td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*处 理 人</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskHandleDepartmentId"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*状 态</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskHandleStatus"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">发布时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskDistributeDate"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">处理时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskHandleDate"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">预计开始时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskPlanStartDate"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">预计结束时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskPlanEndDate"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">开始时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskRealityStartDate"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">结束时间</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskRealityEndDate"></td></tr>
     <tr><td  style="HEIGHT: 183px"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 183px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">处理情况</td><td  colSpan="8" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; HEIGHT: 183px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: top" componentId="WorkTaskHandleDiscription"></td></tr>
     <tr><td  style="HEIGHT: 50px"></td><td  colSpan="10" style="HEIGHT: 50px" componentId="buttonBar4"></td></tr>
  </table>]]></layout-content>
   <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="16" id="buttonBar3" style="height:25px;float:right;">
    <xui:place control="trigger8" id="controlPlace11"></xui:place>
    <xui:place control="trigger10" id="controlPlace13"></xui:place></xhtml:div> 
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="16" id="buttonBar4" style="padding:0 30px 0  10px;height:25px;float:right;;;">
   <xui:place control="trigger7" id="controlPlace14"></xui:place>
   <xui:place control="trigger9" id="controlPlace15"></xui:place></xhtml:div></xhtml:div></layout> 
    <xforms:input ref="data('main')/sCode" id="WorkTaskSerialNumber" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sName" id="WorkTaskName" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sCustomerName" id="WorkTaskCustomId" auto-size="true" class="xui-autofill"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="WorkTaskImportance" label-ref="data('main')/sImportanceName" ref="data('main')/sImportanceID" dropdown-height="74px" option-data="task_importance" option-label="sName" option-value="rowid" onCloseup="mainActivity.WorkTaskImportanceCloseup" class="xui-autofill"></xhtml:div>
  <xforms:input ref="data('main')/sPlanName" id="WorkTaskWorkPlan" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sProjectName" id="WorkTaskProjectId" auto-size="true" class="xui-autofill"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="WorkTaskEmergency" label-ref="data('main')/sEmergencyName" ref="data('main')/sEmergencyID" dropdown-height="74px" option-data="task_emergency" option-label="sName" option-value="rowid" onCloseup="mainActivity.WorkTaskEmergencyCloseup" class="xui-autofill"></xhtml:div>
  <xforms:input ref="data('main')/sLimitTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskLimitDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:textarea mediatype="text/html" ref="data('main')/sContent" xforms:rows="20" xforms:cols="122" incremental="true" id="WorkTaskContent" auto-size="true" class="xui-autofill"></xforms:textarea>
  <xforms:output ref="data('main')/sCreatorFName" id="WorkTaskSubmitterId" auto-size="true"></xforms:output>
  <xforms:output ref="data('main')/sCreateTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskSubmitDate" auto-size="true"></xforms:output>
  <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="WorkTaskHandleDepartmentId" class="xui-autofill">
   <xforms:model id="model1">
    <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="data1"></xui:data></xforms:model> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" ref="data('main')/sExecutorFID" label-ref="data('main')/sExecutorFName" auto-size="true" id="treeSelect2" dropdown-height="100" data-ref="data1">
    <xforms:label ref="sFName" id="default24"></xforms:label>
    <xforms:value ref="sFID" id="default25"></xforms:value></xhtml:div> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="WorkTaskHandleStatus" label-ref="data('main')/sStatusName" ref="data('main')/sStatusID" dropdown-height="128px" option-data="task_status" option-label="sName" option-value="rowid" onCloseup="mainActivity.WorkTaskHandleStatusCloseup" class="xui-autofill"></xhtml:div>
  <xforms:output ref="data('main')/sDistributeTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskDistributeDate" auto-size="true"></xforms:output>
  <xforms:input ref="data('main')/sExecuteTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskHandleDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sExpectStartTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskPlanStartDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sExpectFinishTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskPlanEndDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sActualStartTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskRealityStartDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sActualFinishTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskRealityEndDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:textarea mediatype="text/html" ref="data('main')/sRemark" xforms:rows="20" xforms:cols="122" incremental="true" id="WorkTaskHandleDiscription" auto-size="true" class="xui-autofill"></xforms:textarea>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" operation-owner="main" operation="save" appearance="image-text" class="button-blue">
   <xforms:label id="default18"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger10" operation-owner="main" operation="delete" appearance="image-text" class="button-orange">
   <xforms:label id="default18"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger7" operation-owner="main" operation="prevRow" appearance="image-minimal">
   <xforms:label id="default21"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger9" operation-owner="main" operation="nextRow" appearance="image-minimal">
   <xforms:label id="default23"></xforms:label></xforms:trigger></view>  
    <layout style="width: 100%; height: 100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%; height: 100%;" id="tablist" class="noneborder"> 
        <tab id="list_tab" selected="true"> 
          <label>列表</label>
          <!--   
		  <xhtml:table border="0" style="height:100%;width:100%;table-layout:fixed;"
		        component="/UI/system/components/tableLayout.xbl.xml#tableLayout" cellpadding="0"
		        cellspacing="0"> 
		        <xhtml:tr id="tr1"> 
		          <xhtml:td id="td1" height="35px"> 
		            <place control="list_toolbar" style="height:35px;"/>  
		          </xhtml:td> 
		        </xhtml:tr>  
		        <xhtml:tr id="tr3"> 
		          <xhtml:td id="td5" height="35px">
		          -->            
		           
          <xhtml:div style="border:0px;width:100%;height:100%;" id="table2" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
            <top size="38px"> 
                <place control="list-custom-filter-bar"/> 
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" expandable="true" expanded-position="5" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-width="80">
	            <xui:place control="trigger2" id="controlPlace7"></xui:place>
	  			<xui:place control="trigger3" id="controlPlace8"></xui:place>
	  			<xui:place control="trigger4" id="controlPlace9"></xui:place>
	  			<xui:place control="trigger5" id="controlPlace10"></xui:place>
	            <place control="date-selector" id="controlPlace2" style="margin: 0px 0 0 0;width:100px;"></place>
	  			<place control="orgPersonFilter" id="controlPlace3" style="width: 100px;"></place>
	  			<place control="div1" id="controlPlace4" style="margin: 0px 0 0 0; width:100px;"></place>
	  			<xhtml:div id="div2" style="width:100px;height:auto;" class="xui-container"><xui:place control="input1" id="controlPlace5" style="width:100%;"></xui:place></xhtml:div>
	  			<place control="trigger1" id="controlPlace6" style="width:32px;"></place>
  			</xhtml:div>
  			<xui:place control="bizDataFilterMenu2" id="controlPlace12"></xui:place></top>  
            <center> 
                <place control="list_grid"/> 
            </center> 
          <bottom size="38px" id="borderLayout-bottom1"><xui:place control="pagination1" id="controlPlace1"></xui:place></bottom></xhtml:div>
           
        </tab>  
        <tab id="detail_tab" xforms-select="mainActivity.detailTabSelect"> 
          <label>详细</label>
          <xhtml:div style="margin:0 auto;height:100%;width:760px;">
	            <place control="detail_form"/> 
   
          </xhtml:div>  
        </tab> 
      </xhtml:div> 
    </layout> 
  <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination1" align="right" data="main"></xhtml:div>
  <xhtml:div id="date-selector" default-select="3" component="/UI/system/components/dateFilter.xbl.xml#dateFilter" filter-date-mode="single" bound-width="60px" onChanged="mainActivity.dateSelectorChanged"></xhtml:div>
  <xhtml:div component="/UI/system/components/orgFilter.xbl.xml#orgFilter" has-person-member="true" default-value="本人" id="orgPersonFilter" manage-codes="businessManagement"></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" multi-select="true" dropdown-height="75px" id="div1" ref="data('custom_filter')/status">
   <option value="waiting" id="default1">待办</option>
   <option value="finished" id="default3">已办</option>
   <option value="submited" id="default6">提交</option></xhtml:div>
  <xforms:input ref="data('custom_filter')/like" auto-size="true" id="input1">
   <xforms:action ev:event="DOMActivate" id="action5">
    <xforms:script id="xformsScript5">justep.xbl(&quot;main&quot;).refreshData();</xforms:script></xforms:action> 
   <xforms:action id="action2" ev:event="xforms-value-changed">
    <xforms:script id="xformsScript2">mainActivity.input1Change(event)</xforms:script></xforms:action> </xforms:input>
  <xforms:trigger id="trigger1" appearance="image" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="default10">搜索</xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">mainActivity.trigger1Click(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="trigger2" appearance="image-text" image-text-mode="LR" icon-class="icon-system-plus" class="button-blue">
   <xforms:label id="xuiLabel1">新建</xforms:label>
   <xforms:action id="action4" ev:event="DOMActivate">
    <xforms:script id="xformsScript4">mainActivity.trigger2Click(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" operation-owner="main" operation="delete" appearance="image-minimal">
   <xforms:label id="default12"><![CDATA[]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" operation-owner="main" operation="refresh" appearance="image-minimal">
   <xforms:label id="default14"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" operation-owner="bizDataFilterMenu2" appearance="image-minimal" operation="show">
   <xforms:label id="default16"></xforms:label></xforms:trigger>
  <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu2" data="main"></xhtml:div>
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/workTask/mainActivity.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/js/common.js"/> 
  </resource> 
</window>
