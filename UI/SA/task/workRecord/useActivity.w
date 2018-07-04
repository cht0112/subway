<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" cacheable="true" id="work_record_app">  
  <xforms:model id="mainmodel" style="top:220px;height:auto;left:447px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_WorkRecord" offset="0" limit="1" order-by="sCreateTime:desc" auto-load="false" filter-relations="sImportanceName,sName,sProjectName,sCustomerName,sPlanName,sStatusName,sExecutorFName,sExecuteTime,sCreatorFName,sCreateTime,sLastModifyTime" onValueChanged="useActivity.mainValueChanged" store-type="simple"> 
      <reader action="/SA/task/logic/action/queryWorkRecordAction"/>  
      <writer action="/SA/task/logic/action/saveWorkRecordAction"/>  
      <creator action="/SA/task/logic/action/createWorkRecordAction"/>  
      <!--  
			<rule concept="SA_WorkRecord" readonly="not(contains(data('main')/sCreatorFID,call('justep.Context.getCurrentPersonID')))"/>
			-->  
      <rule relation="sActualStartTime" readonly="true()"/>  
      <rule relation="sActualFinishTime" readonly="true()"/>  
      <rule relation="sCreatorFName" readonly="true()"/>  
      <rule relation="sCreateTime" readonly="true()"/>  
      <rule id="dataBizRule1" concept="SA_WorkRecord" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') != 'do') or not(contains(data('main')/sCreatorFID,call('justep.Context.getCurrentPersonID')))"/> 
    </data>  
    <data id="task_importance" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Importance" auto-load="false" store-type="simple"> 
      <reader action="/system/logic/action/queryImportanceAction"/> 
    </data>  
    <!--  
		<xforms:bind nodeset="data('custom_data')/save" readonly="not(call('justep.XData.canDo','main','Save')) or not(contains(data('main')/sCreatorFID,call('justep.Context.getCurrentPersonID')))"/>
		-->  
    <data id="custom_data" auto-load="true" component="/UI/system/components/data.xbl.xml#data" store-type="simple" columns="save,toolbar"> 
      <rows xmlns="">  
        <row> 
          <cell>true</cell>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="save" readonly="not(call('justep.XData.canDo','main','Save')) or not(contains(data('main')/sCreatorFID,call('justep.Context.getCurrentPersonID')))"/>  
      <rule id="dataRule2" column="toolbar" relevant="call('justep.Context.getRequestParameter', 'activity-pattern')='do'"/> 
    </data>  
    <!--    
		<xforms:bind nodeset="data('custom_data')/toolbar" relevant="call('justep.Context.getRequestParameter', 'activity-pattern')='do'"/>			
		<xforms:bind nodeset="data('main')" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') != 'do') or not(contains(data('main')/sCreatorFID,call('justep.Context.getCurrentPersonID')))"/>
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
    <view id="detail_toolbar"> 
      <xforms:group id="a" ref="data('custom_data')/toolbar"> 
        <xhtml:div width="100%" height="40px" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbar"> 
          <bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"> 
            <item name="save-item"> 
              <!--  
							<xforms:script>
							<![CDATA[
								justep.xbl("main").saveData();
								if (typeof(parent.refresh) == "function") {
									parent.refresh();
								}
							]]>
							</xforms:script>
							--> 
            </item>  
            <item name="refresh-item"/> 
          </bar> 
        </xhtml:div> 
      </xforms:group>  
      <layout style="width: 100%; height: 40px"> 
        <place control="a"/> 
      </layout> 
    </view>  
    <view id="detail_form" class="xui-container"> 
      <xforms:output ref="data('main')/sCode" id="TaskSerialNumber" auto-size="true"/>  
      <xforms:input ref="data('main')/sName" id="TaskName" auto-size="true" class="xui-autofill"/>  
      <xforms:input ref="data('main')/sCustomerName" id="TaskCustomId" auto-size="true" class="xui-autofill"/>  
      <!--
			<xhtml:div component="/UI/system/components/dialog_select.xbl.xml#dialogSelect"
					call-tag="customer-select" caption="选择客户"
					choose-mode="single" return-variable="this_data"
					display-ref="[c]data('main')/sCustomerName" id="TaskCustomId">
					<xforms:action ev:event="after-selected">
						<xforms:setvalue data:ref="data('main')/justep:SA_WorkRecord/sCustomerID" value="$this_data/*[1]/@rdf:id"/>
						<xforms:setvalue data:ref="data('main')/justep:SA_WorkRecord/sCustomerName" origin="$this_data/*[1]/justep:fName" />
					</xforms:action>
			</xhtml:div>
			-->  
      <!-- 
		      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" 
		      	label-ref="data('main')/sImportanceName" ref="data('main')/sImportanceID" id="TaskImportance" auto-size="true" onCloseup="useActivity.TaskImportanceCloseup"> 
		        <xforms:label ref="sName"/>  
		        <xforms:value ref="rowid"/>  
		        <xforms:itemset data="task_importance" auto-load-data="true"> 
		          <xforms:column ref="sName" visible="true"/>  
		          <xforms:column ref="rowid" visible="false"/> 
		        </xforms:itemset> 
		      </xhtml:div>  
			 -->  
      <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="TaskImportance" label-ref="data('main')/sImportanceName" ref="data('main')/sImportanceID" dropdown-height="74px" option-data="task_importance" option-label="sName" option-value="rowid" onCloseup="useActivity.TaskImportanceCloseup" class="xui-autofill"/>  
      <xforms:input ref="data('main')/sPlanName" id="TaskWorkPlan" auto-size="true" class="xui-autofill"/>  
      <!--  
			<xhtml:table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed" id="TaskWorkPlan">
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
      <xforms:input ref="data('main')/sProjectName" auto-size="true" id="TaskProjectId" class="xui-autofill"/>  
      <!-- 选择项目 -->  
      <xforms:textarea mediatype="text/html" ref="data('main')/sContent" auto-size="true" xforms:rows="20" xforms:cols="122" incremental="true" id="TaskContent" class="xui-autofill"/>  
      <xforms:input ref="data('main')/sActualStartTime" auto-size="true" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="TaskRealityStartDate" class="xui-autofill"/>  
      <xforms:input ref="data('main')/sActualFinishTime" auto-size="true" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="TaskRealityEndDate" class="xui-autofill"/>  
      <!--  
			<xforms:input ref="data('main')/sCreatorDeptName" auto-size="true" id="TaskDepartmentId"/>

			<xforms:input ref="data('main')/sCreatorPersonName" auto-size="true" id="TaskSubmitterId"/> 
			-->  
      <xforms:input ref="data('main')/sCreatorFName" auto-size="true" id="TaskSubmitterId" class="xui-autofill"/>  
      <xforms:input ref="data('main')/sCreateTime" auto-size="true" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')" id="TaskSubmitDate" class="xui-autofill"/>  
      <layout style="width: 100%; height: 100%;position:relative;" type="flow"><xhtml:div class="cell-layout" component="/UI/system/components/cellLayout.xbl.xml#cellLayout" id="cellLayout1" style="width:100%; height: 100%;;"><place id="default2" control="TaskSerialNumber" style="width:100%;"></place>
  <place id="default4" control="TaskName" style="width:100%;"></place>
  <place id="default5" control="TaskCustomId" style="width:100%;"></place>
  <place id="default7" control="TaskImportance" style="width:100%;"></place>
  <place id="default8" control="TaskWorkPlan" style="width:100%;"></place>
  <place id="default9" control="TaskProjectId" style="width:100%;"></place>
  <place id="default11" control="TaskContent" style="width:100%;"></place>
  <place id="default13" control="TaskRealityStartDate" style="width:100%;"></place>
  <place id="default15" control="TaskRealityEndDate" style="width:100%;"></place>
  <place id="default17" control="TaskSubmitterId" style="width:100%;"></place>
  <place id="default19" control="TaskSubmitDate" style="width:100%;"></place>
  <layout-content id="default20"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="80" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 101px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 72px"></td></tr>
     <tr><td  style="HEIGHT: 32px"></td><td  style="HEIGHT: 32px"></td><td  colSpan="8" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; HEIGHT: 32px; FONT-SIZE: 19px; FONT-WEIGHT: bold; VERTIAL-ALIGN: middle">工作记录</td><td  style="HEIGHT: 32px; FONT-SIZE: 17px; FONT-WEIGHT: bold; VERTIAL-ALIGN: middle"></td><td  style="HEIGHT: 32px"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  style="HEIGHT: 25px; BORDER-RIGHT: #808080 1px solid"></td><td  colSpan="4" style="BORDER-BOTTOM: #808080 1px solid; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; BORDER-RIGHT-COLOR: ; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; FONT-WEIGHT: bold; VERTIAL-ALIGN: middle">基本信息</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: right; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-LEFT-COLOR: ; BORDER-TOP: #808080 1px solid; VERTIAL-ALIGN: middle">编码：</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BACKGROUND-COLOR: #bfdbff; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-LEFT-COLOR: ; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskSerialNumber"></td><td  style="BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle"></td><td  style="HEIGHT: 25px"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  style="HEIGHT: 25px; BORDER-RIGHT: #808080 1px solid"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*名 称</td><td  colSpan="6" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskName"></td><td  style="BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle"></td><td  style="HEIGHT: 25px"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  style="HEIGHT: 25px; BORDER-RIGHT: #808080 1px solid"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: ; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">客 户</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskCustomId"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: #3366ff; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">*重 要 性</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskImportance"></td><td  style="BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle"></td><td  style="HEIGHT: 25px"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  style="HEIGHT: 25px; BORDER-RIGHT: #808080 1px solid"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; COLOR: ; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">计划/工作项</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskWorkPlan"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">项 目</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskProjectId"></td><td  style="BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle"></td><td  style="HEIGHT: 25px"></td></tr>
     <tr><td  style="HEIGHT: 162px"></td><td  style="HEIGHT: 162px; BORDER-RIGHT: #808080 1px solid"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 162px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle"></td><td  colSpan="6" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 162px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: top" componentId="TaskContent"></td><td  style="BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 162px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle"></td><td  style="HEIGHT: 162px"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  style="HEIGHT: 25px; BORDER-RIGHT: #808080 1px solid"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">开始时间</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskRealityStartDate"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">结束时间</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskRealityEndDate"></td><td  style="TEXT-ALIGN: left; BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle"></td><td  style="HEIGHT: 25px"></td></tr>
     <tr><td  style="HEIGHT: 25px"></td><td  style="HEIGHT: 25px; BORDER-RIGHT: #808080 1px solid"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">提 交 者</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskSubmitterId"></td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #808080 1px solid; BACKGROUND-COLOR: #f7f7f7; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle">创建时间</td><td  colSpan="2" style="BORDER-BOTTOM: #808080 1px solid; TEXT-ALIGN: left; BORDER-LEFT: #808080 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; BORDER-TOP: #808080 1px solid; BORDER-RIGHT: #808080 1px solid; VERTIAL-ALIGN: middle" componentId="TaskSubmitDate"></td><td  style="BORDER-LEFT: #c0c0c0 1px solid; HEIGHT: 25px; FONT-SIZE: 12px; VERTIAL-ALIGN: bottom"></td><td  style="HEIGHT: 25px"></td></tr>
  </table>
]]></layout-content></xhtml:div></layout> 
    </view>  
    <layout style="width: 100%; height: 100%"> 
      <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed" id="table1" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="40px" valign="top"> 
          <xhtml:td> 
            <place control="detail_toolbar"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr valign="top"> 
          <xhtml:td> 
            <place control="detail_form"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </layout> 
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/workRecord/mainActivity.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/js/common.js"/> 
  </resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="useActivity.js"/> 
  </resource> 
</window>
