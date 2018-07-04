<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" cacheable="true" id="flow_monitor_app">  
  <xforms:model id="mainmodel" style="width:122px;top:245px;height:90px;left:558px;"> 
    <data id="flowData" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Task" offset="0" limit="20" order-by="sCreateTime:desc" confirm-refresh="false" filter-relations="sName,sCreateTime,sActualStartTime,sActualFinishTime,sStatusName,sData1" auto-load="false"> 
      <reader action="/system/logic/action/queryTaskCenterAction1"/>  
      <filter name="_custom_system_filter_">SA_Task.sKindID='tkProcessInstance'</filter> 
    </data>  
    <data id="taskData" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Task" offset="0" limit="20" filter-relations="sName,sExecutorFID,sExecutorDeptName,sExecutorPersonName,sCreatorFID,sCreatorPersonName,sActualStartTime,sActualFinishTime,sLimitTime,sStatusName" order-by="sActualStartTime:asc" auto-load="false"> 
      <master data="flowData" relation="sFlowID" auto-load="false"/>  
      <reader action="/system/logic/action/queryTaskCenterAction1"/>  
      <writer action="/system/logic/action/saveTaskCenterAction1"/>  
      <filter name="_custom_system_filter_">SA_Task.sExecutorFID like '/%' AND NOT(SA_Task.sName IS NULL) AND ((SA_Task.sKindID='tkTask') OR (SA_Task.sKindID='tkExecutor') OR (SA_Task.sKindID IS NULL))</filter> 
    </data>  
    <data id="customFilter" component="/UI/system/components/data.xbl.xml#data" store-type="simple" columns="status,org,person,parent_org,like" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell>executing</cell>  
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data id="customData" component="/UI/system/components/data.xbl.xml#data" store-type="simple" columns="flow_awaken,recycle,spec_flow_out,modify_flow_data,need_refresh_taskData,need_refresh_taskDetail,need_refresh_processChart,title,process" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>true</cell>  
          <cell>true</cell>  
          <cell>true</cell>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <!--  
    <xforms:bind nodeset="data('customData')/process" readonly="not((data('taskData')/sStatusID = 'tesReady' or data('taskData')/sStatusID = 'tesExecuting') and ((call('justep.Context.getCurrentPersonID') = data('taskData')/sExecutorPersonID) or call('isMyOrgP', data('taskData')/sExecutorFID)))"/>
    -->  
    <xforms:bind nodeset="data('customData')/flow_awaken" readonly="-1&gt;=index('flowData') or not(data('flowData')/sStatusID = 'tesPaused')"/>  
    <xforms:bind nodeset="data('customData')/recycle" readonly="-1&gt;=index('taskData') or (data('taskData')/sCatalogID != 'tsProcess') or (not((data('taskData')/sStatusID = 'tesReady' or data('taskData')/sStatusID = 'tesExecuting'))) or not(call('justep.Context.getCurrentPersonID') = data('taskData')/sCreatorPersonID) or (data('taskData')/sExecutorPersonID='')"/>  
    <xforms:bind nodeset="data('customData')/spec_flow_out" readonly="-1&gt;=index('taskData') or not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting')) or (instance('taskData')/sExecutorPersonID='')"/>  
    <xforms:bind nodeset="data('customData')/modify_flow_data" readonly="-1&gt;=index('taskData') or not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting')) or (instance('taskData')/sExecutorPersonID='')"/>  
    <xforms:action ev:event="onload"> 
      <xforms:script>mainActivity.mainmodelLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <view id="rootView"> 
    <view id="flowData_View"> 
      <xhtml:div id="flowData_Grid" data="flowData" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%; height: 100%;" onRowDblClick="gotoTaskDataTab" onAfterIndexChanged="mainActivity.flowData_GridAfterIndexChanged" class="grid-compact"> 
        <column width="*" sort="str" ref="sName"/>  
        <column width="130px" sort="str" type="dateTime" ref="sCreateTime" readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualStartTime" readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualFinishTime" readonly="true"/>  
        <column width="60px" sort="str" ref="sStatusName"/>  
        <column width="300px" sort="str" ref="sData1" label="单据号"/> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%"> 
        <place control="flowData_Grid"/> 
      </layout> 
    </view>  
    <view id="taskData_View"> 
      <xhtml:div id="taskData_Grid" data="taskData" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%; height: 100%;" onAfterIndexChanged="mainActivity.taskData_GridAfterIndexChanged" class="grid-compact"> 
        <column width="*" sort="str" ref="sName"/>  
        <column width="100px" sort="str" ref="sExecutorDeptName"/>  
        <column width="100px" sort="str" ref="sExecutorPersonName"/>  
        <column width="200px" sort="str" ref="sCreatorFID"/>  
        <column width="60px" sort="str" ref="sCreatorPersonName"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualStartTime" readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sLimitTime" readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualFinishTime" readonly="true"/>  
        <column width="60px" sort="str" ref="sStatusName"/> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%"> 
        <place control="taskData_Grid"/> 
      </layout> 
    </view>  
    <view id="hidden_View"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="流程特送" width="646px" height="424px" modal="true" id="specFlowoutDialog" url="/SA/process/monitor/dialog/specFlowOut.w" onSend="mainActivity.specFlowoutDialogSend" onReceive="mainActivity.specFlowoutDialogReceive" style="top:287px;left:131px;" dialogUpdate="true"/>  
      <xhtml:div style="display: none"> 
        <xhtml:div component="/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog" id="customFilterDialog"/>  
        <xhtml:div id="taskDataProcess" component="/UI/system/components/process.xbl.xml#process" auto-close="false" auto-filter="false" auto-start="false" auto-save="false" onBackCommit="refreshTaskDataState" onAdvanceCommit="refreshTaskDataState" onTransferCommit="refreshTaskDataState" onSuspendCommit="refreshTaskDataState" onAbortCommit="refreshTaskDataState" old-version="false"/>  
        <xforms:dialog level="modal" close="true" appearance="full" title="修改执行者" height="450px" width="520px" id="modifyExecutorDialog" visible="false"> 
          <xforms:action ev:event="xforms-dialog-open"> 
            <xforms:script>mainActivity.modifyExecutorDialogOpened(event);</xforms:script> 
          </xforms:action>  
          <xforms:action ev:event="xforms-dialog-close"> 
            <xforms:script>mainActivity.modifyExecutorDialogClosed(event);</xforms:script> 
          </xforms:action>  
          <xhtml:iframe id="modifyExecutorDialogFrame" name="modifyExecutorDialogFrame" src="about:blank" frameborder="no" style="width: 100%; height: 100%"/> 
        </xforms:dialog>  
        <xforms:dialog level="modal" close="true" appearance="full" title="修改任务标题" height="111px" width="400px" id="modifyTitleDialog" visible="false"> 
          <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="font-size: 13px; table-layout: fixed;"> 
            <xhtml:tr height="8px"> 
              <xhtml:td width="8px"/>  
              <xhtml:td/>  
              <xhtml:td width="8px"/> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td/>  
              <xhtml:td>请输入新标题：</xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr valign="bottom"> 
              <xhtml:td/>  
              <xhtml:td> 
                <xforms:input ref="instance('customData')/title" auto-size="true" style="width: 100%;"/> 
              </xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr align="right" height="30px" valign="bottom"> 
              <xhtml:td/>  
              <xhtml:td> 
                <xhtml:table cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed"> 
                  <xhtml:tr> 
                    <xhtml:td align="right"> 
                      <xforms:trigger class="trigger_size" style="margin-right: 8px;"> 
                        <xforms:label>确 定</xforms:label>  
                        <xforms:action ev:event="DOMActivate"> 
                          <xforms:script>mainActivity.modifyTitleDialogOkClick(event);</xforms:script> 
                        </xforms:action> 
                      </xforms:trigger> 
                    </xhtml:td>  
                    <xhtml:td width="75px"> 
                      <xforms:trigger class="trigger_size"> 
                        <xforms:label>取 消</xforms:label>  
                        <xforms:action ev:event="DOMActivate"> 
                          <xforms:script>mainActivity.modifyTitleDialogCancelClick(event);</xforms:script> 
                        </xforms:action> 
                      </xforms:trigger> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr height="8px"> 
              <xhtml:td/>  
              <xhtml:td/>  
              <xhtml:td/> 
            </xhtml:tr> 
          </xhtml:table> 
        </xforms:dialog> 
      </xhtml:div> 
    </view>  
    <layout style="width: 100%; height: 100%"> 
      <place control="hidden_View"/>  
      <xhtml:div data="main" component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%; height: 100%;" id="tablist" class="noneborder"> 
        <tab id="flowData_Tab" selected="true"> 
          <label>流程实例</label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top size="38px" id="borderLayout-top1"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" expandable="true" expanded-position="3" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-width="80"> 
                <xui:place control="trigger3" id="controlPlace2"/>  
                <xui:place control="trigger4" id="controlPlace4"/>
                <xhtml:div id="date-selector" default-select="3" component="/UI/system/components/dateFilter.xbl.xml#dateFilter" bound-width="100" style="margin: 0; width: 100px;" onChanged="setDateTimeFilter" filter-date-mode="single"/>
                <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" style="margin: 0px 0 0 0; width:100px;" multi-select="true" dropdown-height="100px" onCloseup="setStatusFilter" id="status-ctl-id" ref="data('customFilter')/status"> 
                  <option value="executing">处理中</option>  
                  <option value="finished">已完成</option>  
                  <option value="paused">已暂停</option>  
                  <option value="aborted">已终止</option> 
                </xhtml:div>
                <xforms:input ref="instance('customFilter')/like" auto-size="true" style="width:100px;"> 
                  <xforms:action ev:event="xforms-value-changed"> 
                    <xforms:script>mainActivity.likeInputValueChanged(event);</xforms:script> 
                  </xforms:action>  
                  <xforms:action ev:event="DOMActivate"> 
                    <xforms:script>mainActivity.refreshClick(event);</xforms:script> 
                  </xforms:action> 
                </xforms:input>
                <xforms:trigger id="seach-trigger" appearance="image" class="button-yellow" icon-class="icon-system-search" style="width:32px;"> 
                  <xforms:label>查询</xforms:label>  
                  <xforms:action ev:event="DOMActivate"> 
                    <xforms:script>mainActivity.refreshClick(event);</xforms:script> 
                  </xforms:action> 
                </xforms:trigger> 
              </xhtml:div>  
              <xui:place control="bizDataFilterMenu1" id="controlPlace3"/>
            </top>  
            <center id="borderLayout-center1"> 
              <place control="flowData_View"/> 
            </center>  
            <bottom size="38px" id="borderLayout-bottom1">
              <xui:place control="pagination1" id="controlPlace1"/>
            </bottom>
          </xhtml:div> 
        </tab>  
        <tab id="taskData_Tab"> 
          <label>任务列表</label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>mainActivity.taskData_TabSelect()</xforms:script> 
          </xforms:action>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top size="38px" id="borderLayout-top2"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2">
                <xui:place control="trigger5" id="controlPlace5"/>  
                <xui:place control="btn-stop" id="controlPlace6"/>  
                <xui:place control="trigger7" id="controlPlace7"/>  
                <xui:place control="trigger8" id="controlPlace9"/>  
                <xui:place control="trigger13" id="controlPlace14"/>
                <xui:place control="trigger14" id="controlPlace15" style="width:50px;"/>
                <xui:place control="trigger9" id="controlPlace10" style="width:47px;"/>  
                <xui:place control="trigger10" id="controlPlace11" style="width:74px;"/>  
                <xui:place control="trigger11" id="controlPlace12" style="width:87px;"/>  
                <xui:place control="trigger15" id="controlPlace17" style="width:87px;"/>
              </xhtml:div>  
              <xui:place control="bizDataFilterMenu2" id="controlPlace16"/>
            </top>  
            <center id="borderLayout-center2"> 
              <place control="taskData_View"/> 
            </center>  
            <bottom size="50px" id="borderLayout-bottom2">
              <xui:place control="pagination2" id="controlPlace8"/>
            </bottom>
          </xhtml:div> 
        </tab>  
        <tab id="flowTrack_Tab"> 
          <label>流程轨迹</label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>mainActivity.flowTrack_TabSelect()</xforms:script> 
          </xforms:action>  
          <!--  
          <xhtml:div style="height:100%" component="/UI/system/components/processChart.xbl.xml#processChart" id="processGraph"/>
          -->  
          <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%;height:100%;overflow:auto;"> 
            <xui:tab selected="true"> 
              <xui:label>轨迹图</xui:label>  
              <xhtml:div id="track" component="/UI/system/components/processChart.xbl.xml#processTrackChart" style="height:100%;"/> 
            </xui:tab>  
            <xui:tab> 
              <xui:label>波特图</xui:label>  
              <!-- 
				<xforms:action ev:event="xforms-select">
					<xforms:script>
						var tab = justep.xbl('<xsl:value-of select="$tabID"/>');
						var self = tab.getXBLParentElement(tab.domNode).xblObject;
						self.__loadBot();
					</xforms:script>	
				</xforms:action>
				 -->  
              <xhtml:div id="pert" component="/UI/system/components/processChart.xbl.xml#processPertChart" style="height:100%;"/> 
            </xui:tab> 
          </xhtml:div> 
        </tab>  
        <tab id="taskData_Detail_Tab"> 
          <label>流程数据</label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>mainActivity.taskData_Detail_TabSelect()</xforms:script> 
          </xforms:action>  
          <xhtml:iframe id="_detail-data-frame_" name="_detail-data-frame_" src="about:blank" frameborder="no" style="width: 100%; height: 100%"/> 
        </tab> 
      </xhtml:div> 
    </layout>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination1" align="right" data="flowData"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" operation-owner="flowData" operation="refresh" appearance="image-minimal"> 
      <xforms:label id="default1"><![CDATA[]]></xforms:label>
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="flowData"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" operation-owner="bizDataFilterMenu1" appearance="image-minimal" operation="show"> 
      <xforms:label id="default2"/>
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination2" data="taskData" align="right"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" class="button-blue" appearance="image-text" icon-class="icon-system-play" ref="data('customData')/flow_awaken"> 
      <xforms:label id="default3">唤醒</xforms:label>
    <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.awakenProcess(event)]]></xforms:script></xforms:action></xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn-stop" class="button-blue" appearance="image-text" icon-class="icon-system-stop" ref="data('customData')/process"> 
      <xforms:label id="default4">终止</xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3">mainActivity.trigger1Click(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger7" class="button-blue" icon-class="icon-system-pause" appearance="image-text" ref="data('customData')/process"> 
      <xforms:label id="default5">暂停</xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4">mainActivity.trigger2Click(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" class="button-blue" icon-class="icon-system-back" appearance="image-text" ref="instance('customData')/recycle"> 
      <xforms:label id="default6"><![CDATA[回收]]></xforms:label>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5"><![CDATA[mainActivity.recycleClick(event)]]></xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger9" appearance="image-minimal" ref="instance('customData')/spec_flow_out"> 
      <xforms:label id="default7"><![CDATA[特送]]></xforms:label>  
      <xforms:action id="action7" ev:event="DOMActivate">
        <xforms:script id="xformsScript7"><![CDATA[mainActivity.specflowClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger10" appearance="image-minimal" ref="instance('customData')/modify_flow_data"> 
      <xforms:label id="default8"><![CDATA[修改执行者]]></xforms:label>  
      <xforms:action id="action8" ev:event="DOMActivate">
        <xforms:script id="xformsScript8"><![CDATA[mainActivity.modifyExecutorClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger11" appearance="image-minimal" ref="instance('customData')/modify_flow_data"> 
      <xforms:label id="default9"><![CDATA[修改任务标题]]></xforms:label>  
      <xforms:action id="action9" ev:event="DOMActivate">
        <xforms:script id="xformsScript9"><![CDATA[mainActivity.modifyCaptionClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger13" appearance="image-minimal" operation-owner="taskData" operation="refresh"> 
      <xforms:label id="default11"><![CDATA[]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger14" appearance="minimal" operation-owner="bizDataFilterMenu2" operation="show"> 
      <xforms:label id="default12"/>
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu2" data="taskData"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger15" appearance="image-minimal" ref="instance('customData')/modify_flow_data"> 
      <xforms:label id="default13"><![CDATA[定制流程]]></xforms:label>  
      <xforms:action id="action6" ev:event="DOMActivate">
        <xforms:script id="xformsScript6"><![CDATA[mainActivity.trigger3Click(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="/UI/SA/process/monitor/mainActivity.js"/>  
    <xhtml:style> <![CDATA[
    .trigger_size {width: 75px; height: 24px; margin: 0; padding: 0;}
    ]]></xhtml:style> 
  </resource> 
</window>
