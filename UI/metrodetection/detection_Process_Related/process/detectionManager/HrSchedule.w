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
    <xhtml:script src="/UI/metrodetection/detection_Process_Related/js/scheduleExt.js"
      type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/metrodetection/detection_Process_Related/js/addScheduleInterface.js"
      type="text/javascript" charset="utf-8"/>  
    <xhtml:link href="/UI/metrodetection/detection_Process_Related/css/common.css"
      rel="STYLESHEET" type="text/css"/>  
    <xhtml:script src="/UI/metrodetection/detection_Process_Related/js/appCommon.js"
      type="text/javascript" charset="utf-8"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="width:150px;top:239px;height:105px;left:132px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereAll" auto-load="true" id="hrData" concept="HR_OCCUPY_INFO"> 
      <reader action="/metrodetection/system_code/logic/action/queryHR_OCCUPY_INFOAction"/>  
      <writer action="/metrodetection/system_code/logic/action/saveHR_OCCUPY_INFOAction"/>  
      <creator action="/metrodetection/system_code/logic/action/createHR_OCCUPY_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="dSchedule" concept="HR_OCCUPY_INFO" store-type="simple">
      <creator id="default4" action="/metrodetection/system_code/logic/action/createHR_OCCUPY_INFOAction"/>  
      <reader id="default5" action="/metrodetection/system_code/logic/action/myQueryScheduleHrOccupyInfoAction"/>  
      <writer id="default6" action="/metrodetection/system_code/logic/action/saveHR_OCCUPY_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="hrBaseData" concept="HR_BASE_INFO" is-tree="false" store-type="simple" limit="200">
      <creator id="default1" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/myQueryScheduleHrNameAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"/>
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <view id="vSchedule"> 
      <xhtml:div id="schedulerComponent" class="dhx_cal_container" style="width:100%;height:100%;"> 
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
        <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
        id="windowReceiver" style="top:163px;left:119px;" onReceive="HrSchedule.windowReceiverReceive">
      </xhtml:div>
      </xhtml:div> 
    </view>  
    <layout style="height:100%;"> 
      <xhtml:div id="tabpanel1"
        style="height:100%;width:100%"> 
<!--        <xui:tab id="schedulerTab" selected="true"> -->
<!--          <xui:label></xui:label>  -->
<!--          <xforms:action ev:event="xforms-select"> -->
<!--            <xforms:script>schedulerTabxforms_select(event)</xforms:script> -->
<!--          </xforms:action>  -->
          <place control="vSchedule" style="width:100%;height:100%;"/> 
<!--        </xui:tab> -->
      </xhtml:div> 
    </layout> 
  </xui:view>  
  <resource id="resource1">
    <xhtml:script id="htmlScript1" src="HrSchedule.js"/>  
    <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="schedule.css"/>
  </resource>
</xui:window>
