<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" cacheable="true"
  id="flow_monitor_app">  
  <xforms:model id="mainmodel" style="width:122px;top:245px;height:90px;left:558px;"> 
    <data id="flowData" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_Task" offset="0" limit="20" order-by="sCreateTime:desc" confirm-refresh="false"
      filter-relations="sName,sCreateTime,sActualStartTime,sActualFinishTime,sStatusName,sData1"
      auto-load="false"> 
      <reader action="/system/logic/action/queryTaskCenterAction1"/>  
      <filter name="_custom_system_filter_">SA_Task.sKindID='tkProcessInstance'</filter> 
    </data>  
    <data id="taskData" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_Task" offset="0" limit="20" filter-relations="sName,sLimitTime,sActualStartTime,sActualFinishTime,sCreatorFID,sCreatorPersonName,sExecutorPersonName,sExecutorDeptName,sStatusName"
      order-by="sActualStartTime:asc" auto-load="false"> 
      <master data="flowData" relation="sFlowID" auto-load="false"/>  
      <reader action="/system/logic/action/queryTaskCenterAction1"/>  
      <writer action="/system/logic/action/saveTaskCenterAction1"/>  
      <filter name="_custom_system_filter_">SA_Task.sExecutorFID like '/%' AND NOT(SA_Task.sName IS NULL) AND ((SA_Task.sKindID='tkTask') OR (SA_Task.sKindID='tkExecutor') OR (SA_Task.sKindID IS NULL))</filter> 
    </data>  
    <data id="customFilter" component="/UI/system/components/data.xbl.xml#data"
      store-type="simple" columns="status,org,person,parent_org,like" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell>executing</cell>  
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data id="customData" component="/UI/system/components/data.xbl.xml#data"
      store-type="simple" columns="flow_awaken,recycle,spec_flow_out,modify_flow_data,need_refresh_taskData,need_refresh_taskDetail,need_refresh_processChart,title,process"
      auto-load="true"> 
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
    <view id="flowData_ToolBar_View"> 
      <xhtml:div width="100%" id="flowData_ToolBar" component="/UI/system/components/toolbars.xbl.xml#toolbars"> 
        <!--   
        <bar data="flowData" component="/UI/system/components/bar.xbl.xml#navigatorBarReserved" id="customNavigatorBar"> 
          <item name="refresh-item"> 
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>mainActivity.refreshClick(event);</xforms:script> 
            </xforms:action> 
          </item>  
          <item name="filter-item"> 
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>mainActivity.filterItemClick(event);</xforms:script> 
            </xforms:action> 
          </item>  
          <item name="separator"/>  
          <item name="first-item"/>  
          <item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="last-item"/>  
          <item name="separator"/>  
          <item> 
            <xhtml:div component="/UI/system/components/pageNavigator.xbl.xml#pageNavigator" id="customPageNavigator" offset="0" limit="20" onPageChanged="flowDataPageChanged" data="flowData"/> 
          </item>  
          <item name="separator"/>  
          <item> 
            <xforms:trigger ref="instance('customData')/flow_awaken" appearance="minimal" style="width: 45px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">唤醒</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.awakenProcess(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="separator"/>  
          <item> 
            <xhtml:div id="date-selector" default-select="3" component="/UI/system/components/dateFilter.xbl.xml#dateFilter" bound-width="100" style="margin: 0; width: 100px" onChanged="setDateTimeFilter" filter-date-mode="single"/> 
          </item>  
          <item> 
            <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" style="margin: 0px 0 0 0; width:100px;" multi-select="true" dropdown-height="100px" onCloseup="setStatusFilter" id="status-ctl-id" ref="data('customFilter')/status"> 
              <option value="executing">处理中</option>  
              <option value="finished">已完成</option>  
              <option value="paused">已暂停</option>  
              <option value="aborted">已终止</option> 
            </xhtml:div> 
          </item>  
          <item> 
            <xforms:input ref="instance('customFilter')/like" auto-size="true" style="width:100px"> 
              <xforms:action ev:event="xforms-value-changed"> 
                <xforms:script>mainActivity.likeInputValueChanged(event);</xforms:script> 
              </xforms:action>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.refreshClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:input> 
          </item>  
          <item> 
            <xforms:trigger id="seach-trigger" appearance="image" src="/UI/SA/task/taskCenter/images/search.gif"> 
              <xforms:label>查询</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.refreshClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </bar>
        -->  
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
          mode="IMG_TXT_LR" data="flowData"> 
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-item" id="barItem5"/>  
          <item name="separator" id="customBarItem1"/>  
          <item name="custom-page-item" id="customPageItem1" items="pre,next,ext"/>  
          <item name="separator"/>  
          <item> 
            <xforms:trigger ref="instance('customData')/flow_awaken" appearance="minimal"
              style="width: 45px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">唤醒</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.awakenProcess(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="separator"/> 
        </xui:bar> 
      </xhtml:div>  
      <layout> 
        <xhtml:table cellpadding="0px" cellspacing="0px"> 
          <xhtml:tr> 
            <xhtml:td> 
              <place control="flowData_ToolBar"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr> 
            <xhtml:td> 
              <xhtml:table> 
                <xhtml:tr> 
                  <xhtml:td>日期</xhtml:td>  
                  <xhtml:td> 
                    <xhtml:div id="date-selector" default-select="3" component="/UI/system/components/dateFilter.xbl.xml#dateFilter"
                      bound-width="100" style="margin: 0; width: 100px" onChanged="setDateTimeFilter"
                      filter-date-mode="single"/> 
                  </xhtml:td>  
                  <xhtml:td>状态</xhtml:td>  
                  <xhtml:td> 
                    <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect"
                      style="margin: 0px 0 0 0; width:100px;" multi-select="true"
                      dropdown-height="100px" onCloseup="setStatusFilter" id="status-ctl-id"
                      ref="data('customFilter')/status"> 
                      <option value="executing">处理中</option>  
                      <option value="finished">已完成</option>  
                      <option value="paused">已暂停</option>  
                      <option value="aborted">已终止</option> 
                    </xhtml:div> 
                  </xhtml:td>  
                  <xhtml:td>查找</xhtml:td>  
                  <xhtml:td> 
                    <xforms:input ref="instance('customFilter')/like" auto-size="true"
                      style="width:100px"> 
                      <xforms:action ev:event="xforms-value-changed"> 
                        <xforms:script>mainActivity.likeInputValueChanged(event);</xforms:script> 
                      </xforms:action>  
                      <xforms:action ev:event="DOMActivate"> 
                        <xforms:script>mainActivity.refreshClick(event);</xforms:script> 
                      </xforms:action> 
                    </xforms:input> 
                  </xhtml:td>  
                  <xhtml:td> 
                    <xforms:trigger id="seach-trigger" src="/UI/SA/task/taskCenter/images/search.gif"> 
                      <xforms:label>查询</xforms:label>  
                      <xforms:action ev:event="DOMActivate"> 
                        <xforms:script>mainActivity.refreshClick(event);</xforms:script> 
                      </xforms:action> 
                    </xforms:trigger> 
                  </xhtml:td> 
                </xhtml:tr> 
              </xhtml:table> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </layout> 
    </view>  
    <view id="flowData_View"> 
      <xhtml:div id="flowData_Grid" data="flowData" component="/UI/system/components/grid.xbl.xml#grid"
        style="width:100%; height: 100%;" onRowDblClick="gotoTaskDataTab" onAfterIndexChanged="mainActivity.flowData_GridAfterIndexChanged"> 
        <column width="200px" sort="str" ref="sName"/>  
        <column width="130px" sort="str" type="dateTime" ref="sCreateTime" readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualStartTime"
          readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualFinishTime"
          readonly="true"/>  
        <column width="60px" sort="str" ref="sStatusName"/>  
        <column width="300px" sort="str" ref="sData1" label="单据号"/> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%"> 
        <place control="flowData_Grid"/> 
      </layout> 
    </view>  
    <view id="taskData_ToolBar_View"> 
      <xhtml:div width="100%" id="taskData_ToolBar" component="/UI/system/components/toolbars.xbl.xml#toolbars"> 
        <bar data="taskData" component="/UI/system/components/bar.xbl.xml#navigatorBar"
          mode="IMG_TXT_LR"> 
          <item name="refresh-item"/>  
          <item name="filter-item"/>  
          <item name="separator"/>  
          <item name="custom-page-item" items="pre,next,ext"/>  
          <item name="separator"/>  
          <item id="customBarItem3"> 
            <xforms:trigger id="trigger1" appearance="image-text" src="/UI/system/images/standardToolbar/standard/stop.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_stop.gif"
              ref="data('customData')/process"> 
              <xforms:label id="xuiLabel1"><![CDATA[终止]]></xforms:label> 
            <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger> 
          </item>  
          <item id="customBarItem4">
            <xforms:trigger id="trigger2" appearance="image-text" src="/UI/system/images/standardToolbar/standard/pause.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_pause.gif"
              ref="data('customData')/process"> 
              <xforms:label id="xuiLabel2"><![CDATA[暂停]]></xforms:label>
            <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger>
          </item>
          <item> 
            <xforms:trigger appearance="image-text" src="/UI/system/images/standardToolbar/standard/recycle_task.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_recycle_task.gif"
              ref="instance('customData')/recycle"> 
              <xforms:label>回收</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.recycleClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger ref="instance('customData')/spec_flow_out" appearance="minimal"
              style="width: 45px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">特送</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.specflowClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger ref="instance('customData')/modify_flow_data" appearance="minimal"
              style="width: 85px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">修改执行者</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.modifyExecutorClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger ref="instance('customData')/modify_flow_data" appearance="minimal"
              style="width: 90px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">修改任务标题</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.modifyCaptionClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
          <item> 
            <xforms:trigger ref="instance('customData')/modify_flow_data" appearance="image-text"
              style="width: 90px; text-align: center; height: 24px;" src="/UI/system/images/standardToolbar/standard/customized.gif" dis-src="/UI/system/images/standardToolbar/standard/un_customized.gif"> 
              <xforms:label style="color: black">定制流程</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script><![CDATA[mainActivity.trigger3Click(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </bar>  
        <!--  
        <bar component="/UI/system/components/processBar.xbl.xml#processBarReserved"
          id="customProcessBar" process="taskDataProcess"> 
          <item name="back-process-item" readonly="not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting') and ((call('justep.Context.getCurrentPersonID') = instance('taskData')/sExecutorPersonID) or call('isMyOrgP', instance('taskData')/sExecutorFID)))"> 
            <xforms:action id="action1" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript1">mainActivity.barItem1Click(event)</xforms:script> 
            </xforms:action> 
          </item>  
          <item name="suspend-process-item" readonly="not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting') and ((call('justep.Context.getCurrentPersonID') = instance('taskData')/sExecutorPersonID) or call('isMyOrgP', instance('taskData')/sExecutorFID)))"> 
            <xforms:action id="action4" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript4">mainActivity.barItem4Click(event)</xforms:script> 
            </xforms:action> 
          </item>  
          <item name="abort-process-item" readonly="not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting') and ((call('justep.Context.getCurrentPersonID') = instance('taskData')/sExecutorPersonID) or call('isMyOrgP', instance('taskData')/sExecutorFID)))"> 
            <xforms:action id="action5" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript5">mainActivity.barItem5Click(event)</xforms:script> 
            </xforms:action> 
          </item>  
          <item> 
            <xforms:trigger appearance="image" src="/UI/system/images/standardToolbar/standard/recycle_task.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_recycle_task.gif"
              ref="instance('customData')/recycle"> 
              <xforms:label>回收</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.recycleClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="separator"/>  
          <item> 
            <xforms:trigger ref="instance('customData')/spec_flow_out" appearance="minimal"
              style="width: 45px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">特送</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.specflowClick(event);<![CDATA[
				]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="separator"/>  
          <item> 
            <xforms:trigger ref="instance('customData')/modify_flow_data" appearance="minimal"
              style="width: 85px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">修改执行者</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.modifyExecutorClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger ref="instance('customData')/modify_flow_data" appearance="minimal"
              style="width: 90px; text-align: center; height: 24px;"> 
              <xforms:label style="color: black">修改任务标题</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>mainActivity.modifyCaptionClick(event);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </bar> 
        --> 
      </xhtml:div> 
    </view>  
    <view id="taskData_View"> 
      <xhtml:div id="taskData_Grid" data="taskData" component="/UI/system/components/grid.xbl.xml#grid"
        style="width:100%; height: 100%;" onAfterIndexChanged="mainActivity.taskData_GridAfterIndexChanged"> 
        <column width="200px" sort="str" ref="sName"/>  
        <column width="200px" sort="str" ref="sExecutorDeptName"/>  
        <column width="200px" sort="str" ref="sExecutorPersonName"/>  
        <column width="200px" sort="str" ref="sCreatorFID"/>  
        <column width="60px" sort="str" ref="sCreatorPersonName"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualStartTime"
          readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sLimitTime" readonly="true"/>  
        <column width="130px" sort="str" type="dateTime" ref="sActualFinishTime"
          readonly="true"/>  
        <column width="60px" sort="str" ref="sStatusName"/> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%"> 
        <place control="taskData_Grid"/> 
      </layout> 
    </view>  
    <view id="hidden_View"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="流程特送" width="650px" height="460px" modal="true" id="specFlowoutDialog"
        url="/SA/process/monitor/dialog/specFlowOut.w" onSend="mainActivity.specFlowoutDialogSend"
        onReceive="mainActivity.specFlowoutDialogReceive" style="top:287px;left:131px;"/>  
      <xhtml:div style="display: none"> 
        <xhtml:div component="/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"
          id="customFilterDialog"/>  
        <xhtml:div id="taskDataProcess" component="/UI/system/components/process.xbl.xml#process"
          auto-close="false" auto-filter="false" auto-start="false" auto-save="false"
          onBackCommit="refreshTaskDataState" onAdvanceCommit="refreshTaskDataState"
          onTransferCommit="refreshTaskDataState" onSuspendCommit="refreshTaskDataState"
          onAbortCommit="refreshTaskDataState" old-version="true"/>  
        <xforms:dialog level="modal" close="true" appearance="full" title="修改执行者" height="450px"
          width="520px" id="modifyExecutorDialog" visible="false"> 
          <xforms:action ev:event="xforms-dialog-open"> 
            <xforms:script>mainActivity.modifyExecutorDialogOpened(event);</xforms:script> 
          </xforms:action>  
          <xforms:action ev:event="xforms-dialog-close"> 
            <xforms:script>mainActivity.modifyExecutorDialogClosed(event);</xforms:script> 
          </xforms:action>  
          <xhtml:iframe id="modifyExecutorDialogFrame" name="modifyExecutorDialogFrame"
            src="about:blank" frameborder="no" style="width: 100%; height: 100%"/> 
        </xforms:dialog>  
        <xforms:dialog level="modal" close="true" appearance="full" title="修改任务标题" height="111px"
          width="400px" id="modifyTitleDialog" visible="false"> 
          <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%"
            style="font-size: 13px; table-layout: fixed;"> 
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
      <xhtml:div data="main" component="/UI/system/components/tabs.xbl.xml#tabs"
        style="width:100%; height: 100%;" id="tablist"> 
        <tab id="flowData_Tab" selected="true"> 
          <label>流程实例</label>  
          <xhtml:table width="100%" height="100%" style="table-layout:fixed" cellpadding="0"
            component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td height="70px"> 
                <place control="flowData_ToolBar_View"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td> 
                <place control="flowData_View"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </tab>  
        <tab id="taskData_Tab"> 
          <label>任务列表</label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>mainActivity.taskData_TabSelect()</xforms:script> 
          </xforms:action>  
          <xhtml:table width="100%" height="100%" style="table-layout:fixed" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td height="40px"> 
                <place control="taskData_ToolBar_View"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr height="100%"> 
              <xhtml:td> 
                <place control="taskData_View"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
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
              <xhtml:div id="track" component="/UI/system/components/processChart.xbl.xml#processTrackChart"
                style="height:100%;"/> 
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
              <xhtml:div id="pert" component="/UI/system/components/processChart.xbl.xml#processPertChart"
                style="height:100%;"/> 
            </xui:tab> 
          </xhtml:div> 
        </tab>  
        <tab id="taskData_Detail_Tab"> 
          <label>流程数据</label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>mainActivity.taskData_Detail_TabSelect()</xforms:script> 
          </xforms:action>  
          <xhtml:iframe id="_detail-data-frame_" name="_detail-data-frame_" src="about:blank"
            frameborder="no" style="width: 100%; height: 100%"/> 
        </tab> 
      </xhtml:div> 
    </layout> 
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="/UI/SA/process/monitor/mainActivity.js"/>  
    <xhtml:style> <![CDATA[
    .trigger_size {width: 75px; height: 24px; margin: 0; padding: 0;}
    ]]></xhtml:style> 
  </resource> 
</window>
