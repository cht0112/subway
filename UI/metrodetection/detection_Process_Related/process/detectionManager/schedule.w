<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <!-- <xhtml:script src="/UI/metrodetection/detection_Process_Related/components/dhtmlxScheduler/codebase/dhtmlxscheduler.js"
      type="text/javascript" charset="utf-8"/>  -->
    <xhtml:link href="/UI/metrodetection/detection_Process_Related/components/dhtmlxScheduler/codebase/dhtmlxscheduler.css"
      rel="STYLESHEET" type="text/css"/>   
   <!-- <xhtml:script src="/UI/metrodetection/detection_Process_Related/components/dhtmlxScheduler/sources/locale_cn.js"
      type="text/javascript" charset="utf-8"/> -->
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/metrodetection/detection_Process_Related/js/scheduleExt.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/metrodetection/detection_Process_Related/js/addScheduleInterface.js" type="text/javascript"
      charset="utf-8"/>  
    <xhtml:link href="/UI/metrodetection/detection_Process_Related/css/common.css" rel="STYLESHEET" type="text/css"/>  
    <xhtml:script src="/UI/metrodetection/detection_Process_Related/js/appCommon.js" type="text/javascript" charset="utf-8"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="width:150px;top:239px;height:105px;left:132px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereAll" auto-load="true" id="hrData" concept="HR_OCCUPY_INFO"> 
      <reader action="/metrodetection/system_code/logic/action/queryHR_OCCUPY_INFOAction"/>  
      <writer action="/metrodetection/system_code/logic/action/saveHR_OCCUPY_INFOAction"/>  
      <creator action="/metrodetection/system_code/logic/action/createHR_OCCUPY_INFOAction"/> 
    </data>  
    
    <xforms:action ev:event="onload"> 
      <xforms:script>mdMainload(event)</xforms:script> 
    </xforms:action > 
    
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="dSchedule" concept="HR_OCCUPY_INFO" store-type="simple"><creator id="default4" action="/metrodetection/system_code/logic/action/createHR_OCCUPY_INFOAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/myQueryScheduleHrOccupyInfoAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveHR_OCCUPY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="hrBaseData" concept="HR_BASE_INFO" is-tree="false" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/myQueryScheduleHrNameAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <view id="vSchedule"> 
      <xhtml:div id="schedulerComponent" class="dhx_cal_container" style="width:100%; height:100%;"> 
        <xhtml:div class="dhx_cal_navline"> 
          <!-- 内容定义 -->  
          <xhtml:div class="dhx_cal_prev_button"/>  
          <!-- 上一天按钮 -->  
          <xhtml:div class="dhx_cal_next_button"/>  
          <!-- 下一天按钮 -->  
          <xhtml:div class="dhx_cal_today_button"/>  
          <!-- 今天按钮 -->  
          <xhtml:div class="dhx_cal_date"/>  
          <!-- 日期显示标签 -->  
          <xhtml:div class="dhx_cal_tab" name="day_tab" style="right:204px;"/>  
          <!-- 天 -->  
          <xhtml:div class="dhx_cal_tab" name="week_tab" style="right:140px;"/>  
          <!-- 周 -->  
          <xhtml:div class="dhx_cal_tab" name="month_tab" style="right:76px;"/>  
          <!-- 月 --> 
        </xhtml:div>  
        <xhtml:div class="dhx_cal_header"> 
          <!-- 日历头区域 --> 
        </xhtml:div>  
        <xhtml:div class="dhx_cal_data" id="scheduleDataDIV"> 
          <!-- 日历数据区域 --> 
        </xhtml:div> 
      </xhtml:div>  


    </view>  
    <xui:view id="vToolbar" auto-load="true"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrList"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="hrData">    
		
		
		
		
		
		
		
		
		
		
		
		
		
	
   <item name="insert-item" id="barItem1"></item>
   <item name="save-item" id="barItem2"></item>
   <item name="delete-item" id="barItem3"></item>
   <item name="refresh-item" id="barItem4"></item>
   <item name="filter-item" id="barItem5"></item>
   <item name="filter-pattern-item" id="barItem6"></item>
   <item name="separator" id="customBarItem1"></item>
   <item name="first-item" id="barItem7"></item>
   <item name="pre-item" id="barItem8"></item>
   <item name="next-item" id="barItem9"></item>
   <item name="last-item" id="barItem10"></item>
   <item name="separator" id="customBarItem2"></item>
   <item name="custom-page-item" id="customPageItem1"></item></xui:bar></xhtml:div>  
      <xui:layout style="width:100%;height:31px;" type="flow"> 
        <xui:place control="tbrList" id="controlPlace1"/> 
      </xui:layout> 
    </xui:view>  
    <xui:view id="vList"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="人员安排" width="690px" height="400px" modal="true" id="dlgScheduleArrange"
        onSend="scheduleArrangeDialogSend" onReceive="scheduleArrangeDialogReceive" url="/UI/metrodetection/detection_Process_Related/process/detectionManager/hrOccupyDialog.w"/>  
      <xui:layout style="height:100%;"> 
        <place control="dlgScheduleArrange" style="top:142px;left:134px;"/> 
      <xui:place control="grid1" id="controlPlace2" style="width:622px;height:279px;"></xui:place></xui:layout>  
      <layout/> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="hrData"><xui:column id="gridColumn1" ref="oPERATORID" label="操作员" type="ed" width="103px"></xui:column>
  <xui:column id="gridColumn2" ref="tESTTASKID" label="测试任务ID" type="ed" width="99px"></xui:column>
  <xui:column id="gridColumn3" ref="oCCUPYSTARTDATETIME" label="计划占用起始日期时间" type="ed" width="160px"></xui:column>
  <xui:column id="gridColumn4" ref="oCCUPYENDDATETIME" label="计划占用结束日期时间" type="ed" width="149px"></xui:column>
  <xui:column id="gridColumn5" ref="mEMO" label="备注" type="ed" width="106px"></xui:column></xhtml:div></xui:view>  
    <layout style="height:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%"> 
        <xui:tab id="schedulerTab" selected="true"> 
          <xui:label>占用信息</xui:label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>schedulerTabxforms_select(event)</xforms:script> 
          </xforms:action >  
          <place control="vSchedule" style="width:100%;height:100%;"/> 
        </xui:tab>  
        <xui:tab id="listTab" > 
          <xui:label>列表</xui:label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>listTabxforms_select(event)</xforms:script> 
          </xforms:action>  
          <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;"
            component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr height="35px"> 
              <xhtml:td> 
                <place control="vToolbar" style="width:100%;height:31px;"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td> 
                <place control="vList"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab> 
      </xhtml:div> 
    </layout> 
  </xui:view> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="schedule.js"></xhtml:script>
  <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="schedule.css"></xhtml:link></resource></xui:window>
