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
    <xforms:action ev:event="onload"> 
      <xforms:script>mdMainload(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="dSchedule" concept="SAMPLE_DEVICE_OCCUPY_INFO" store-type="simple" limit="200">
      <creator id="default4"/>  
      <reader id="default5" action="/metrodetection/system_code/logic/action/myQuerySampleDeviceScheduleAction"/>  
      <writer id="default6"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" concept="SAMPLE_DEVICE_INFO" is-tree="false" store-type="simple" id="sampleDeviceInfoData">
      <creator id="default1"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_INFOAction"/>  
      <writer id="default3"/>
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <view id="vSchedule"> 
      <xhtml:div id="schedulerComponent" class="dhx_cal_container" style="width:100%;height:100%;"> 
        <xhtml:div class="dhx_cal_navline"> 
          <!-- 内容定义 -->  
          <xhtml:div class="dhx_cal_prev_button_room"/>  
          <!-- 上一天按钮 -->  
          <xhtml:div class="dhx_cal_next_button_room"/>  
          <!-- 下一天按钮 -->  
          <xhtml:div class="dhx_cal_today_button_room"/>  
          <!-- 今天按钮 -->  
          <xhtml:div class="dhx_cal_date_room"/>  
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
    <xhtml:script id="htmlScript1" src="/UI/metrodetection/detection_Process_Related/process/detectionManager/DeviceSchedule1.js"/>  
    <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="schedule.css"/>
  </resource>
</xui:window>
