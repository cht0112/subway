<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" cacheable="true" id="task_remind_app">  
  <xforms:model id="mainmodel" style="width:99px;top:202px;height:auto;left:856px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Remind" offset="1" limit="20" auto-load="true" onSaveCommit="mainSaveCommit" update-mode="whereVersion"> 
      <reader action="/SA/task/logic/action/queryRemindAction"/>  
      <writer action="/SA/task/logic/action/saveRemindAction"/>  
      <creator action="/SA/task/logic/action/createRemindAction"/>  
      <rule relation="sContent" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="version" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sName" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID" required="true()" alert="concat('', instance('main')/sName, '   ','名称不能为空！')"/>  
      <rule relation="sTimerType" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID" required="true()" alert="concat('', instance('main')/sTimerType, '   ','定时类型不能为空！')"/>  
      <rule relation="sTimerTypeName" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sTimes" readonly="&quot;alarm.type.times&quot; != instance('main')/sRemindStyle" required="true()" alert="concat('', instance('main')/sName, '   ','执行次数不能为空！')"/>  
      <rule relation="sActualStartTime" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID" required="true()" alert="concat('', instance('main')/sName, '   ','开始时间不能为空！')"/>  
      <rule relation="sActualFinishTime" readonly="&quot;alarm.type.interval&quot; != instance('main')/sRemindStyle"/>  
      <rule relation="sLastTime" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sIntervalTime" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sProcess" required="true()" alert="concat('', instance('main')/sName, '   ','处理process不能为空！')"/>  
      <rule relation="sActivity" required="true()" alert="concat('', instance('main')/sName, '   ','处理activity不能为空！')"/>  
      <rule relation="sAction" required="true()" alert="concat('', instance('main')/sName, '   ','处理action不能为空！')"/>  
      <rule relation="sStatus" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sRemark" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sReturnable" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sReturnPattern" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sCondition" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sDataModel" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
      <rule relation="sIntervalDay" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID" required="true()" alert="concat('', instance('main')/sCreatorID, '   ','间隔时间不能为空！')"/>  
      <rule relation="sIntervalHour" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID" required="true()" alert="concat('', instance('main')/sCreatorID, '   ','间隔时间不能为空！')"/>  
      <rule relation="sIntervalMin" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID" required="true()" alert="concat('', instance('main')/sCreatorID, '   ','间隔时间不能为空！')"/>  
      <rule relation="sReminder" required="true()" alert="concat('', instance('main')/sReminder, '   ','提醒人不能为空！')"/> 
    </data>  
    <!--    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"-->  
    <!--      limit="20" update-mode="whereVersion" auto-load="true" id="personData" concept="SA_Reminder"-->  
    <!--      store-type="simple"> -->  
    <!--      <reader id="default2" action="/SA/task/logic/action/queryReminderAction"/>  -->  
    <!--      <creator id="default3" action="/SA/task/logic/action/createReminderAction"/>  -->  
    <!--      <writer id="default1" action="/SA/task/logic/action/saveyReminderAction"/>  -->  
    <!--      <master id="master1" data="main" relation="sRemindID"/>  -->  
    <!--      <rule relation="sPersonID"/>  -->  
    <!--      <rule id="dataBizRule4" relation="sRemindID"/> -->  
    <!--    </data>  -->  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="configData" concept="SA_RemindConfig" store-type="simple"> 
      <reader id="default4" action="/SA/task/logic/action/queryRemindConfigAction"/>  
      <filter name="filter0" id="filter1">SA_RemindConfig.sPersonID=:operatorID()</filter> 
    </data> 
  </xforms:model>  
  <view id="view1" auto-load="true"> 
    <view id="list_toolbar"> 
      <xhtml:div width="100%" height="40px" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"> 
          <item> 
            <xhtml:img style="border:none" align="absmiddle" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif" title="新建" onclick="mainActivity.image1Click(event)"/> 
          </item>  
          <item name="save-item"/>  
          <item name="delete-item" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorID"/>  
          <item name="refresh-item"/>  
          <item name="filter-pro-item"/>  
          <item name="separator"/>  
          <item name="first-item"/>  
          <item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="last-item"/>  
          <item name="separator"/>  
          <item name="custom-page-item"/> 
        </bar> 
      </xhtml:div> 
    </view>  
    <view id="list_grid" auto-load="true"> 
      <xhtml:div id="main_grid" data="main" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%; height: 100%;" onRowDblClick="gotoDetailTab" cascade="false" edit-mode="true"> 
        <column id="gridColumn11" ref="sName" label="名称" type="ed" width="100px"/>  
        <column id="gridColumn12" ref="sStatus" label="任务状态" type="ed" width="100px"/>  
        <column id="gridColumn13" ref="sActualStartTime" label="开始时间" type="dateTime" width="100px"/>  
        <column id="gridColumn14" ref="sActualFinishTime" label="结束时间" type="dateTime" width="100px"/>  
        <column id="gridColumn15" ref="sLastTime" label="上次执行时间" type="dateTime" width="100px"/>  
        <column id="gridColumn16" ref="sProcess" label="过程" type="ed" width="100px"/>  
        <column id="gridColumn17" ref="sActivity" label="活动" type="ed" width="100px"/>  
        <column id="gridColumn18" ref="sAction" label="处理action" type="ed" width="100px"/>  
        <column id="gridColumn19" ref="sCreatorName" label="创建人姓名" type="ed" width="100px"/> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%"> 
        <place control="main_grid"/> 
      </layout> 
    </view>  
    <view id="detail_toolbar" auto-load="false"> 
      <xhtml:div width="100%" height="40px" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
        <bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"> 
          <item> 
            <xhtml:img style="border:none" align="absmiddle" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif" title="新建" onclick="mainActivity.image1Click(event)"/> 
          </item>  
          <item name="save-item"> 
            <!--  <xforms:script>
						<![CDATA[						
							setFlag();
							justep.xbl("main").saveData();
						]]>
						</xforms:script>--> 
          </item>  
          <item name="delete-item" readonly="call('justep.Context.getCurrentPersonID') != instance('main')/sCreatorPersonID"/>  
          <item name="refresh-item"/>  
          <item name="filter-pro-item"/>  
          <item name="separator"/>  
          <item name="first-item"/>  
          <item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="last-item"/>  
          <item name="separator"/>  
          <item name="custom-page-item"/> 
        </bar> 
      </xhtml:div> 
    </view>  
    <view id="detail_form" auto-load="true"> 
      <!--  	
      <place control-label="taskRemindCaption" id="controlLabel1"/>
      -->  
      <xhtml:table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;" id="taskRemindPersons"> 
        <xhtml:tr> 
          <xhtml:td style="width:88%;"> 
            <xforms:output id="outputPersons" ref="data('main')/sReminder"/> 
          </xhtml:td>  
          <xhtml:td style="width:75px;"> 
            <xforms:trigger id="trigger2"> 
              <xforms:label>...</xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript1">mainActivity.trigger2Click(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <xforms:input id="taskRemindAction" auto-size="true" ref="data('main')/sAction"/>  
      <xforms:input id="taskRemindName" auto-size="true" ref="data('main')/sName"/>  
      <xforms:input id="taskRemindBak" auto-size="true" ref="data('main')/sRemark"/>  
      <xhtml:table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed;" id="taskRemindDataMod"> 
        <xhtml:tr> 
          <xhtml:td style="width:91%;"> 
            <xforms:output id="outputDataModel" ref="data('main')/sDataModel"/> 
          </xhtml:td>  
          <xhtml:td style="width:75px;"> 
            <xforms:trigger id="trigger3"> 
              <xforms:label>...</xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript1">mainActivity.trigger3Click(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <!--      <xforms:input id="taskRemindDataMod" auto-size="true" ref="data('main')/sDataModel"/>  -->  
      <xforms:input id="taskRemindSQL" auto-size="true" ref="data('main')/sCondition"/>  
      <xforms:input id="taskRemindActivity" auto-size="true" ref="data('main')/sActivity"/>  
      <xforms:select id="taskRemindChannel" ref="data('main')/sRemindStyle"> 
        <xforms:item id="selectItem3"> 
          <xforms:label id="xuiLabel3">短信</xforms:label>  
          <xforms:value id="default7">sms</xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem4"> 
          <xforms:label id="xuiLabel4">MSN</xforms:label>  
          <xforms:value id="default8">msn</xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem5"> 
          <xforms:label id="xuiLabel5">x5Messager</xforms:label>  
          <xforms:value id="default9">x5Messager</xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem6"> 
          <xforms:label id="xuiLabel6">Email</xforms:label>  
          <xforms:value id="default10">email</xforms:value> 
        </xforms:item> 
      </xforms:select>  
      <!--   			<xforms:input id="taskRemindChannel"-->  
      <!--				auto-size="true" ref="data('main')/sRemindChannel" />-->  
      <xforms:input id="taskRemindDay" auto-size="true" ref="data('main')/sIntervalDay"/>  
      <xforms:input id="taskRemindHour" auto-size="true" ref="data('main')/sIntervalHour"/>  
      <xforms:input id="taskRemindMin" auto-size="true" ref="data('main')/sIntervalMin"/>  
      <xforms:input id="taskRemindTimr" auto-size="true" ref="data('main')/sTimes"/>  
      <xforms:input id="taskRemindProcess" auto-size="true" ref="data('main')/sProcess"/>  
      <xforms:input id="taskRemindStart" auto-size="true" format="format-dateTime('yyyy-MM-dd hh:mm')" ref="data('main')/sActualStartTime"/>  
      <xforms:input id="taskRemindEnd" format="format-dateTime('yyyy-MM-dd hh:mm')" auto-size="true" ref="data('main')/sActualFinishTime"/>  
      <xforms:input id="taskRemindLast" auto-size="true" ref="data('main')/sLastTime"/>  
      <xforms:input id="taskRemindCreator" auto-size="true" ref="data('main')/sCreatorName" readonly="true"/>  
      <xforms:textarea ref="data('main')/sContent" id="taskRemindContent" auto-size="true" mediatype="text/html"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="taskTimerType" ref="data('main')/sTimerType" auto-size="true"> 
        <xforms:label ref="labelr"/>  
        <xforms:value ref="valuer"/>  
        <xforms:itemset> 
          <xforms:column ref="labelr"/>  
          <xforms:column ref="valuer" visible="false"/>  
          <itemset-data> 
            <rows xmlns="">  
              <row> 
                <cell>单次</cell>  
                <cell>alarm.type.once</cell> 
              </row>  
              <row> 
                <cell>多次</cell>  
                <cell>alarm.type.times</cell> 
              </row>  
              <row> 
                <cell>时间区间</cell>  
                <cell>alarm.type.interval</cell> 
              </row>  
              <row> 
                <cell>无限次</cell>  
                <cell>alarm.type.infinitely</cell> 
              </row>  
              <row> 
                <cell>每年一次</cell>  
                <cell>alarm.type.yearly</cell> 
              </row>  
              <row> 
                <cell>每月一次</cell>  
                <cell>alarm.type.monthly</cell> 
              </row>  
              <row> 
                <cell>每周一次</cell>  
                <cell>alarm.type.weekly</cell> 
              </row>  
              <row> 
                <cell>每日一次</cell>  
                <cell>alarm.type.daily</cell> 
              </row> 
            </rows> 
          </itemset-data> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="taskConditionType" ref="data('main')/sConditionType" auto-size="true"> 
        <xforms:label ref="labelr"/>  
        <xforms:value ref="valuer"/>  
        <xforms:itemset> 
          <xforms:column ref="labelr"/>  
          <xforms:column ref="valuer" visible="false"/>  
          <itemset-data> 
            <rows xmlns="">  
              <row> 
                <cell>KSQL</cell>  
                <cell>KSQL</cell> 
              </row>  
              <row> 
                <cell>SQL</cell>  
                <cell>SQL</cell> 
              </row> 
            </rows> 
          </itemset-data> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="taskRemindAlarm" ref="data('main')/sStatus" auto-size="true" readonly="true"> 
        <xforms:label ref="labelr"/>  
        <xforms:value ref="valuer"/>  
        <xforms:itemset> 
          <xforms:column ref="labelr"/>  
          <xforms:column ref="valuer" visible="false"/>  
          <itemset-data> 
            <rows xmlns="">  
              <row> 
                <cell>未处理</cell>  
                <cell>alarm.state.create</cell> 
              </row>  
              <row> 
                <cell>正在处理</cell>  
                <cell>alarm.state.execute</cell> 
              </row>  
              <row> 
                <cell>已处理</cell>  
                <cell>alarm.state.finish</cell> 
              </row>  
              <row> 
                <cell>处理出现异常</cell>  
                <cell>alarm.state.exception</cell> 
              </row> 
            </rows> 
          </itemset-data> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="taskAssertType" ref="data('main')/sAssertType" auto-size="true"> 
        <xforms:label ref="labelr"/>  
        <xforms:value ref="valuer"/>  
        <xforms:itemset> 
          <xforms:column ref="labelr"/>  
          <xforms:column ref="valuer" visible="false"/>  
          <itemset-data> 
            <rows xmlns="">  
              <row> 
                <cell>结果非空</cell>  
                <cell>1</cell> 
              </row>  
              <row> 
                <cell>结果为空</cell>  
                <cell>0</cell> 
              </row> 
            </rows> 
          </itemset-data> 
        </xforms:itemset> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%;" type="flow"> 
        <xhtml:div id="excelLayout1" component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%; height: 100%;" src="remind.xls"/> 
      </layout> 
    </view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="任务提醒窗口" width="396px" height="264px" modal="true" id="remindTaskw" url="/SA/tasks/remind/useActivity.w" reload-on-open="true" minmaxable="true" resizable="true" onReceive="mainActivity.remindTaskwReceive" dialogUpdate="true"/>  
    <layout style="width: 100%; height: 100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%; height: 100%;" id="tablist"> 
        <tab id="list_tab" selected="true"> 
          <label>列表</label>  
          <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed;" id="table2" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr height="60px"> 
              <xhtml:td> 
                <place control="list_toolbar"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr valign="top"> 
              <xhtml:td> 
                <place control="list_grid"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </tab>  
        <tab id="detail_tab"> 
          <label>详细</label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>onDetailTabSelect();</xforms:script> 
          </xforms:action>  
          <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed" id="table3" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr height="40px"> 
              <xhtml:td> 
                <place control="detail_toolbar"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr valign="top"> 
              <xhtml:td> 
                <place control="detail_form"/>  
                <xui:place control="windowDialog3" id="controlPlace4"/>  
                <xui:place control="windowDialog2" id="controlPlace3" style="top:313px;left:841px;"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </tab> 
      </xhtml:div>  
      <place control="remindTaskw" id="controlPlace1" style="top:427px;left:867px;"/> 
    </layout>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择业务功能" width="396px" height="314px" modal="true" id="windowDialog3" url="/SA/OPM/dialogs/selectFunTree/selectSingleFunction.w" onReceive="mainActivity.windowDialog3Receive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="396px" height="264px" modal="true" id="windowDialog2" url="/UI/SA/task/remind/SingleNew.w" dialogUpdate="true"/> 
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="mainActivity.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/remind/mainActivity.js"/> 
  </resource> 
</window>
