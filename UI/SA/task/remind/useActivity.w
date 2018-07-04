<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" cacheable="true" id="remind_task__app">  
  <xforms:model id="mainmodel" style="width:85px;top:43px;height:110px;left:79px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="main" concept="SA_WorkRemind"> 
      <reader id="default1" action="/SA/task/logic/action/queryWorkRemindAction"/>  
      <rule id="dataBizRule1" relation="sName"/>  
      <rule id="dataBizRule4" relation="sTypeName"/>  
      <rule id="dataBizRule9" relation="sLimitTime"/>  
      <rule id="dataBizRule23" relation="sStatusID"/>  
      <filter name="filter2" id="filter3">SA_WorkRemind.sStatusID = 'tesReady' OR SA_WorkRemind.sStatusID = 'tesExecuting'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="overData" concept="SA_WorkRemind"> 
      <reader id="default2" action="/SA/task/logic/action/queryWorkRemindAction"/>  
      <rule id="dataBizRule20" relation="sName"/>  
      <rule id="dataBizRule21" relation="sLimitTime"/>  
      <rule id="dataBizRule22" relation="sStatusID"/>  
      <rule id="dataBizRule24" relation="sTypeName"/>  
      <filter name="filter3" id="filter4">SA_WorkRemind.sStatusID = 'tesFinished'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="configData" concept="SA_RemindConfig" auto-new="false" store-type="simple"> 
      <reader id="default3" action="/SA/task/logic/action/queryRemindConfigAction"/> 
    </data>  
    <xforms:action ev:event="onload"> 
      <xforms:script> <![CDATA[
				useActivityOnLoad();

			]]> </xforms:script> 
    </xforms:action>  
    <xforms:action/> 
  </xforms:model>  
  <view id="view1" auto-load="true"> 
    <view id="list_toolbar"> 
      <xhtml:div width="100%" height="40px" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"> 
          <item name="refresh-item"/>  
          <item name="filter-pattern-item"/>  
          <item name="separator"/>  
          <item name="first-item"/>  
          <item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="last-item"/> 
        </bar> 
      </xhtml:div> 
    </view>  
    <view id="list_grid" auto-load="true"> 
      <xhtml:div id="main_grid" data="main" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%; height: 100%;"> 
        <column id="gridColumn5" ref="sStatusID" label="是否再提醒" type="html" width="160px" onRender="getRemindState"/>  
        <column id="gridColumn6" ref="sName" label="主题" type="ro" width="220px"/>  
        <column id="gridColumn7" ref="sLimitTime" label="提醒开始时间" type="dateTime" width="120px"/> 
      </xhtml:div>  
      <layout style="width: 100%; height: 100%"> 
        <place control="main_grid"/> 
      </layout> 
    </view>  
    <view id="detail_toolbar" auto-load="true"> 
      <xhtml:div width="100%" height="40px" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
        <bar data="overData" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"> 
          <item name="refresh-item"/>  
          <item name="separator"/>  
          <item name="first-item"/>  
          <item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="last-item"/> 
        </bar> 
      </xhtml:div> 
    </view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridOver" data="overData"> 
      <column id="gridColumn1" ref="sName" label="主题" type="ro" width="220px"/>  
      <column id="gridColumn2" ref="sTypeName" label="任务类型" type="ro" width="160px"/>  
      <column id="gridColumn3" ref="sLimitTime" label="限制时间" type="dateTime" width="120px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="任务提醒窗口" id="remindTaskw" url="/SA/task/remind/showActivity.w" status="" width="496px" height="464px" reload-on-open="true" minmaxable="true" resizable="true" autosize="true" dialogUpdate="true"/>  
    <layout style="width: 100%; height: 100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%; height: 100%;" id="tablist"> 
        <tab id="list_tab" selected="true"> 
          <label>提醒任务</label>  
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
          <label>过期任务</label>  
          <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed" id="table3" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr height="40px"> 
              <xhtml:td> 
                <place control="detail_toolbar"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr valign="top"> 
              <xhtml:td> 
                <place control="gridOver" id="controlPlace1" style="width:100%;height:100%;"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </tab> 
      </xhtml:div>  
      <place control="remindTaskw" id="controlPlace2"/> 
    </layout> 
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="useActivity.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/remind/mainActivity.js"/> 
  </resource> 
</window>
