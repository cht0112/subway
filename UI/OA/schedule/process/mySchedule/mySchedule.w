<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="/UI/OA/schedule/components/dhtmlxScheduler/codebase/dhtmlxscheduler.js"
      type="text/javascript" charset="utf-8"/>  
    <xhtml:link href="/UI/OA/schedule/components/dhtmlxScheduler/codebase/dhtmlxscheduler.css"
      rel="STYLESHEET" type="text/css"/>  
    <xhtml:script src="mySchedule.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/OA/schedule/components/dhtmlxScheduler/sources/locale_cn.js"
      type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="mySchedule.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/OA/schedule/js/scheduleExt.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/OA/schedule/js/addScheduleInterface.js" type="text/javascript"
      charset="utf-8"/>  
    <xhtml:link href="/UI/appCommon/css/common.css" rel="STYLESHEET" type="text/css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="width:150px;top:239px;height:105px;left:132px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dList" concept="OA_SD_Schedule"
      order-by="fBeginTime:desc"> 
      <reader action="/OA/schedule/logic/action/querySDSCHEDULEAction"/>  
      <writer action="/OA/schedule/logic/action/saveSDSCHEDULEAction"/>  
      <creator action="/OA/schedule/logic/action/createSDSCHEDULEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dSchedule" concept="OA_SD_Schedule"
      order-by="fBeginTime:desc"> 
      <reader action="/OA/schedule/logic/action/querySDSCHEDULEAction"/>  
      <writer action="/OA/schedule/logic/action/saveSDSCHEDULEAction"/>  
      <creator action="/OA/schedule/logic/action/createSDSCHEDULEAction"/>  
      <rule relation="fBeginTime" readonly="true()"/>  
      <rule relation="fEndTime" readonly="true()"/>  
      <rule relation="fCreateTime" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="datetime,keyword"
      auto-load="true" id="customFilter" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:action ev:event="onload"> 
      <xforms:script>mdMainload(event)</xforms:script> 
    </xforms:action> 
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
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdList"
        data="dSchedule" style="display: none;"/> 
    </view>
    <xui:view id="vToolbar" auto-load="true"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrList"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
          data="dList"> 
          <item name="newAuth"> 
            <xforms:trigger appearance="image" src="/UI/system/images/standardToolbar/standard/insert.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label>新建日程</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>showSchedule("new","","")</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="deleteItem"> 
            <xforms:trigger appearance="image" src="/UI/system/images/standardToolbar/standard/remove.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> 
              <xforms:label>删除日程</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>deleteSchedule();</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-item" id="barItem5"/>  
          <item name="filter-pattern-item" id="barItem6"/>  
          <item name="separator" id="separatorItem1"/>  
          <item name="custom-page-item" id="barItem7"/>  
          <item name="separator" id="separatorItem2"/>  
          <item> 
            <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"
              id="triSee" filter-data="dList" filter-date-relation1="OA_SD_Schedule.fBeginTime"
              auto-size="false" default-select="3" filter-date-mode="range" filter-date-relation2="OA_SD_Schedule.fEndTime"
              style="width:120px;"/> 
          </item>  
          <item> 
            <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"
              id="divQuery" filter-data="dList" filter-relations="fTitle,fCreatePsnName"
              auto-size="false" style="width:120px;"/> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
      <xui:layout style="width:100%;height:35px;" type="flow"> 
        <xui:place control="tbrList" id="controlPlace1"/> 
      </xui:layout> 
    </xui:view>  
    <xui:view id="vList"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="日程安排" width="690px" height="400px" modal="true" id="dlgScheduleArrange"
        url="/OA/schedule/process/schedule/schedule.w" onSend="scheduleArrangeDialogSend"
        onReceive="scheduleArrangeDialogReceive"/>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdSchedule"
        data="dList" onRowDblclick="grid1RowDblclick"> 
        <column ref="recNo" label="序号" type="ro" width="30" show-index="true"/>  
        <column ref="fTitle" label="日程主题" type="html" onRender="openMyScheduleDialog"
          width="300"/>  
        <column ref="fBeginTime" label="开始时间" type="dateTime" width="120" format="yyyy-MM-dd hh:mm"/>  
        <column ref="fEndTime" label="结束时间" type="dateTime" width="120" format="yyyy-MM-dd hh:mm"/>  
        <column ref="fCreatePsnName" label="创建人" type="ed" width="100"/>  
        <column ref="fCreateTime" label="创建时间" type="dateTime" format="yyyy-MM-dd hh:mm"/> 
      </xhtml:div>  
      <xui:layout style="height:100%;"> 
        <place control="grdSchedule" style="width:100%;height:100%;"/>  
        <place control="dlgScheduleArrange" style="top:358px;left:360px;"/> 
      </xui:layout>  
      <layout/> 
    </xui:view>  
    <layout style="height:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%"> 
        <xui:tab id="schedulerTab" selected="true"> 
          <xui:label>日程</xui:label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>schedulerTabxforms_select(event)</xforms:script> 
          </xforms:action>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <center id="borderLayout-center1">
              <place control="vSchedule" style="width:100%;height:100%;"/>
            </center>
          </xhtml:div>
        </xui:tab>  
        <xui:tab id="listTab" xforms-select="listTabSelect"> 
          <xui:label>列表</xui:label>  
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>listTabxforms_select(event)</xforms:script> 
          </xforms:action>  
          <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;"
            component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr height="35px"> 
              <xhtml:td> 
                <place control="vToolbar"/> 
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
</xui:window>
