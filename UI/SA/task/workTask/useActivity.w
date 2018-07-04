<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" cacheable="true" id="work_task_app">  
  <xforms:model id="mainmodel" style="height:auto;top:244px;left:247px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_WorkTask" offset="0" limit="1" order-by="sCreateTime:desc" auto-load="false" onValueChanged="useActivity.mainValueChanged" filter-relations="sImportanceName,sName,sProjectName,sCustomerName,sPlanName,sStatusName,sExecutorFName,sExecuteTime,sCreatorFName,sCreateTime,sLastModifyTime" store-type="simple"> 
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
      <rule id="dataBizRule1" concept="SA_WorkTask" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') != 'do')"/> 
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
    <data id="custom_data" auto-load="true" component="/UI/system/components/data.xbl.xml#data" store-type="simple" columns="save,toolbar"> 
      <rows xmlns="">  
        <row> 
          <cell>true</cell>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="save" readonly="not(call('justep.XData.canDo','main','Save')) or (not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID'))))"/>  
      <rule id="dataRule2" column="toolbar" relevant="call('justep.Context.getRequestParameter', 'activity-pattern')='do'"/> 
    </data>  
    <!-- 		  
		<xforms:bind nodeset="data('custom_data')/save" readonly="not(call('justep.XData.canDo','main','Save')) or (not(contains(data('main')/sCreatorFID, call('justep.Context.getCurrentPersonID'))))"/>
		<xforms:bind nodeset="data('custom_data')/toolbar" relevant="call('justep.Context.getRequestParameter', 'activity-pattern')='do'"/>			
		<xforms:bind nodeset="data('main')" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') != 'do')"/>
		-->  
    <!--  
		<xforms:action ev:event="xforms-window-close">
			<xforms:script>
			<![CDATA[
				if (typeof(parent.taskPageClose) == "function") {
					parent.taskPageClose();
				}
			]]>
			</xforms:script>
		</xforms:action>
		-->  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">useActivity.mainmodelLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <view id="view1"> 
    <view id="detail_form" class="xui-container"> 
      <!--  
			<xforms:input ref="data('main')/sWorkTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskSWorkTime" auto-size="true"/>
			-->  
      <xforms:input ref="data('main')/version" id="WorkTaskSVersionNumber" auto-size="true"/>  
      <!-- 
			<xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" 
				label-ref="data('main')/sImportanceName" ref="data('main')/sImportanceID" id="WorkTaskImportance" auto-size="true" onCloseup="useActivity.WorkTaskImportanceCloseup">
				<xforms:label ref="sName" />
				<xforms:value ref="rowid" />
				<xforms:itemset data="task_importance"  auto-load-data="true">
					<xforms:column ref="sName" visible="true" width="100"/>
					<xforms:column ref="rowid" visable="false" width="0"/>
				</xforms:itemset>
			</xhtml:div>
		 -->  
      <!--   
			<xhtml:div component="/UI/system/components/dialog-select/dialog-select.xml#dialog-select"
				call-tag="customer-select" caption="选择客户"					
				choose-mode="single" return-variable="this_data"
				data:display-ref="[c]xui-data('main')/justep:SA_WorkTask/justep:sCustomerName">
				<xforms:action ev:event="after-selected">
					<xforms:setvalue data:ref="xui-data('main')/justep:SA_WorkTask/justep:sCustomerID/@rdf:resource" value="$this_data/*[1]/@rdf:id"/>
					<xforms:setvalue data:ref="xui-data('main')/justep:SA_WorkTask/justep:sCustomerID/justep:SA_Customer/@rdf:id" origin="$this_data/*[1]/@rdf:id" />
					<xforms:setvalue data:ref="xui-data('main')/justep:SA_WorkTask/justep:sCustomerName" value="$this_data/*[1]/justep:fName"/>
				</xforms:action>
			</xhtml:div> 
			-->  
      <!--   
			<xhtml:div component="/UI/system/components/dialog-select/dialog-select.xml#dialog-select"
				call-tag="project-select" caption="选择项目"					
				choose-mode="single" return-variable="this_data"
				data:display-ref="[c]xui-data('main')/justep:SA_WorkTask/justep:sProjectName">
				<xforms:action ev:event="after-selected">
					<xforms:setvalue data:ref="xui-data('main')/justep:SA_WorkTask/justep:sProjectID/@rdf:resource" value="$this_data/*[1]/@rdf:id"/>
					<xforms:setvalue data:ref="xui-data('main')/justep:SA_WorkTask/justep:sProjectID/justep:SA_Project/@rdf:id" origin="$this_data/*[1]/@rdf:id" />
					<xforms:setvalue data:ref="xui-data('main')/justep:SA_WorkTask/justep:sProjectName" value="$this_data/*[1]/justep:fTitle"/>
				</xforms:action>
			</xhtml:div>
			-->  
      <!-- 
			<xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" 
				label-ref="data('main')/sEmergencyName" ref="data('main')/sEmergencyID" id="WorkTaskEmergency" auto-size="true" onCloseup="useActivity.WorkTaskEmergencyCloseup">
				<xforms:label ref="sName" />
				<xforms:value ref="rowid" />
				<xforms:itemset data="task_emergency"  auto-load-data="true">
					<xforms:column ref="sName" visible="true" width="100"/>
					<xforms:column ref="rowid" visable="false" width="0"/>
				</xforms:itemset>
			</xhtml:div>
 -->  
      <!-- 
			<xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" 
				label-ref="data('main')/sStatusName" ref="data('main')/sStatusID" id="WorkTaskHandleStatus" auto-size="true" onCloseup="useActivity.WorkTaskHandleStatusCloseup">
				<xforms:label ref="sName" />
				<xforms:value ref="rowid" />
				<xforms:itemset data="task_status"  auto-load-data="true">
					<xforms:column ref="sName" visible="true" width="100"/>
					<xforms:column ref="rowid" visable="false" width="0"/>
				</xforms:itemset>
			</xhtml:div>
 -->  
      <!--  			
			<xhtml:table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed" id="WorkTaskWorkPlan">
				<xhtml:tr>
					<xhtml:td>
						<xforms:output ref="data('main')/sPlanName" id="output1"/>
					</xhtml:td>
					<xhtml:td width="24px">
						<xforms:trigger ref="data('main')/sPlanName" id="trigger1">
							<xforms:label>...</xforms:label>
							<xforms:action ev:event="DOMActivate">
								<xforms:script>
								<![CDATA[
									justep.xbl("planSelect").open();
								]]>
								</xforms:script>
							</xforms:action>
						</xforms:trigger>

						<xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
							id="planSelect"
							width="500"
							height="450"
							title="选择计划/工作项"
							url="/SA/common/planSelectDialog.w"
							onReceive="getPlanData">
						</xhtml:div>
					</xhtml:td>
				</xhtml:tr>
			</xhtml:table>
			-->  
      <!--  
			<xforms:output ref="data('main')/sCreatorDeptName" id="WorkTaskDepartmentId" auto-size="true"/>
			
			<xforms:output ref="data('main')/sCreatorPersonName" id="WorkTaskSubmitterId" auto-size="true"/>
			-->  
      <!--  
			<xhtml:div component="/UI/system/components/opmSelect.xbl.xml#orgSelect" id="WorkTaskHandleDepartmentId">
				<xforms:model id="model1">
					<xui:data component="/UI/system/components/data.xbl.xml#data" id="data1"/>
				</xforms:model>
				<xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" ref="data('main')/sExecutorDeptID" label-ref="data('main')/sExecutorDeptName" auto-size="true" id="treeSelect1">
		<itemset data="data1"/></xhtml:div>
			</xhtml:div>
			
   			<xhtml:div id="WorkTaskHandlePersonId" org-ref="data('main')/sExecutorDeptID" component="/UI/system/components/opmSelect.xbl.xml#personMemberSelect">
				<xforms:model id="model2">
					<xui:data component="/UI/system/components/data.xbl.xml#data" id="data2"/>
				</xforms:model>    			
    			<xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" ref="data('main')/sExecutorPersonID" label-ref="data('main')/sExecutorPersonName" auto-size="true" id="gridSelect1">
		<itemset data="data2"/></xhtml:div>
   			</xhtml:div>
			-->  
      <layout style="width: 100%; height: 100%;position:relative;" type="flow"><xhtml:div class="cell-layout" component="/UI/system/components/cellLayout.xbl.xml#cellLayout" id="cellLayout1" style="width:100%; height: 100%;;;">
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
   <place id="default36" control="WorkTaskHandleDiscription" style="width:100%;"></place>
   <layout-content id="default37"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="80" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 101px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td></tr>
     <tr><td  style="HEIGHT: 38px"></td><td  colSpan="10" style="HEIGHT: 38px" componentId="buttonBar3"></td></tr>
     <tr><td  style="HEIGHT: 32px"></td><td  colSpan="10" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; HEIGHT: 32px; FONT-SIZE: 19px; FONT-WEIGHT: bold; VERTIAL-ALIGN: middle">工作任务</td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="5" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #bfdbff; PADDING-LEFT: 3px; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; FONT-WEIGHT: bold; vertial-align: middle">基本信息</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: right; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; VERTIAL-ALIGN: middle">编码：</td><td  colSpan="3" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskSerialNumber"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">*名 称</td><td  colSpan="8" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskName"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">客 户</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskCustomId"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">*重 要 性</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskImportance"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">计划/工作项</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskWorkPlan"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">项 目</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskProjectId"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">*紧 迫 度</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskEmergency"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">限制时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskLimitDate"></td></tr>
     <tr><td  style="HEIGHT: 183px"></td><td  colSpan="2" style="TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 183px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">内 容</td><td  colSpan="8" style="TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 183px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: top" componentId="WorkTaskContent"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">*提 交 者</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskSubmitterId"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">*创建时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskSubmitDate"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="10" style="BORDER-BOTTOM: #c0c0c0 1px solid; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #bfdbff; PADDING-LEFT: 3px; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #c0c0c0 1px solid; vertial-align: middle">处理情况</td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">*处 理 人</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskHandleDepartmentId"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">*状 态</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskHandleStatus"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">发布时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskDistributeDate"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">处理时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskHandleDate"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">预计开始时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskPlanStartDate"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">预计结束时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskPlanEndDate"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">开始时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskRealityStartDate"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #000000; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">结束时间</td><td  colSpan="3" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: middle" componentId="WorkTaskRealityEndDate"></td></tr>
     <tr><td  style="HEIGHT: 183px"></td><td  colSpan="2" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #c0c0c0 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 183px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; VERTIAL-ALIGN: middle">处理情况</td><td  colSpan="8" style="BORDER-BOTTOM: #c0c0c0 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 183px; FONT-SIZE: 12px; BORDER-TOP: #c0c0c0 1px solid; BORDER-RIGHT: #c0c0c0 1px solid; VERTIAL-ALIGN: top" componentId="WorkTaskHandleDiscription"></td></tr>
  </table>]]></layout-content>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="16" id="buttonBar3" style="height:25px;float:right;;">
   <xui:place control="trigger8" id="controlPlace11"></xui:place>
   <xui:place control="trigger10" id="controlPlace13"></xui:place></xhtml:div></xhtml:div></layout> 
    <xforms:input ref="data('main')/sCode" id="WorkTaskSerialNumber" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sName" id="WorkTaskName" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sCustomerName" id="WorkTaskCustomId" auto-size="true" class="xui-autofill"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="WorkTaskImportance" label-ref="data('main')/sImportanceName" ref="data('main')/sImportanceID" dropdown-height="74px" option-data="task_importance" option-label="sName" option-value="rowid" onCloseup="useActivity.WorkTaskImportanceCloseup" class="xui-autofill"></xhtml:div>
  <xforms:input ref="data('main')/sPlanName" id="WorkTaskWorkPlan" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sProjectName" id="WorkTaskProjectId" auto-size="true" class="xui-autofill"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="WorkTaskEmergency" label-ref="data('main')/sEmergencyName" ref="data('main')/sEmergencyID" dropdown-height="74px" option-data="task_emergency" option-label="sName" option-value="rowid" onCloseup="useActivity.WorkTaskEmergencyCloseup" class="xui-autofill"></xhtml:div>
  <xforms:input ref="data('main')/sLimitTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskLimitDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:textarea mediatype="text/html" ref="data('main')/sContent" xforms:rows="20" xforms:cols="122" incremental="true" id="WorkTaskContent" auto-size="true" class="xui-autofill"></xforms:textarea>
  <xforms:output ref="data('main')/sCreatorFName" id="WorkTaskSubmitterId" auto-size="true"></xforms:output>
  <xforms:output ref="data('main')/sCreateTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskSubmitDate" auto-size="true"></xforms:output>
  <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="WorkTaskHandleDepartmentId" class="xui-autofill">
   <xforms:model id="model1">
    <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="data1"></xui:data></xforms:model> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" ref="data('main')/sExecutorFID" label-ref="data('main')/sExecutorFName" auto-size="true" id="treeSelect2" dropdown-height="100" data-ref="data1">
    <xforms:label ref="sFName" id="default1"></xforms:label>
    <xforms:value ref="sFID" id="default2"></xforms:value></xhtml:div> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="WorkTaskHandleStatus" label-ref="data('main')/sStatusName" ref="data('main')/sStatusID" dropdown-height="128px" option-data="task_status" option-label="sName" option-value="rowid" onCloseup="useActivity.WorkTaskHandleStatusCloseup" class="xui-autofill"></xhtml:div>
  <xforms:output ref="data('main')/sDistributeTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskDistributeDate" auto-size="true"></xforms:output>
  <xforms:input ref="data('main')/sExecuteTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskHandleDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sExpectStartTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskPlanStartDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sExpectFinishTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskPlanEndDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sActualStartTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskRealityStartDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:input ref="data('main')/sActualFinishTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="WorkTaskRealityEndDate" auto-size="true" class="xui-autofill"></xforms:input>
  <xforms:textarea mediatype="text/html" ref="data('main')/sRemark" xforms:rows="20" xforms:cols="122" incremental="true" id="WorkTaskHandleDiscription" auto-size="true" class="xui-autofill"></xforms:textarea>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" operation-owner="main" operation="save" appearance="image-text" class="button-blue">
   <xforms:label id="default18"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger10" operation-owner="main" operation="refresh" appearance="image-minimal" class="button-orange">
   <xforms:label id="default18"></xforms:label></xforms:trigger></view>  
    <layout style="width: 100%; height: 100%">
    	<xhtml:div style="width:760px;margin:0 auto;">
	       <place control="detail_form"/> 
    	</xhtml:div> 
    </layout> 
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/workTask/mainActivity.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/js/common.js"/> 
  </resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="useActivity.js"/> 
  </resource> 
</window>
