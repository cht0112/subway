<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="/UI/OA/schedule/components/dhtmlxScheduler/codebase/dhtmlxscheduler.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:link href="/UI/OA/schedule/components/dhtmlxScheduler/codebase/dhtmlxscheduler.css" rel="STYLESHEET" type="text/css"/>  
    <xhtml:script src="scheduleQuery.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/OA/schedule/components/dhtmlxScheduler/sources/locale_cn.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/OA/schedule/js/scheduleExt.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/OA/schedule/js/addScheduleInterface.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:link href="/UI/appCommon/css/common.css" rel="STYLESHEET" type="text/css"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="width:150px;top:288px;height:105px;left:248px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dList" concept="OA_SD_SCHEDULE" order-by="fBeginTime:desc"> 
      <reader action="/OA/schedule/logic/action/querySDSCHEDULEAction"/>  
      <writer action="/OA/schedule/logic/action/saveSDSCHEDULEAction"/>  
      <creator action="/OA/schedule/logic/action/createSDSCHEDULEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dSchedule" concept="OA_SD_SCHEDULE" order-by="fBeginTime:desc"> 
      <reader action="/OA/schedule/logic/action/querySDSCHEDULEAction"/>  
      <writer action="/OA/schedule/logic/action/saveSDSCHEDULEAction"/>  
      <creator action="/OA/schedule/logic/action/createSDSCHEDULEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="datetime,keyword,anyValue" auto-load="true" id="customFilter" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columnids="personList,anyValue,filter" auto-load="true" id="customFilter1" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dPerson" concept="V_SA_OPPerson" onIndexChanged="dPersonIndexChanged"> 
      <reader action="/OA/common/logic/action/querySAOPPersonAction"/> 
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
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridList" data="dSchedule" style="display: none;"/>  
      <xui:layout style="height:100%;width:100%;"> 
        <place control="gridList" style="width:100%;height:100%;"/>  
        <place control="schedulerComponent" style="width:100%;height:100%;"/> 
      </xui:layout> 
    </view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrSchedule"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2" data="dList"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="custom-page-item" id="barItem7"/>  
        <item> 
          <xhtml:div id="triSee" default-select="3" component="/UI/system/components/dateFilter.xbl.xml#dateFilter" bound-width="100" style="margin:1px 0 0 0;width:100px;" onChanged="triSeeChanged"/> 
        </item>  
        <item> 
          <xhtml:div style="width:150px;" id="divQuery"> 
            <xforms:input ref="data('customFilter')/keyword" id="query_keyword" auto-size="true" style="width:150px;"> 
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>query_keywordxforms_value_changed(event)</xforms:script> 
              </xforms:action> 
            </xforms:input> 
          </xhtml:div> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view id="vList"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="日程安排" width="690px" height="330px" modal="true" id="dlgScheduleArrange" url="/OA/schedule/process/schedule/scheduleView.w" onSend="scheduleArrangeDialogSend" onReceive="scheduleArrangeDialogReceive"/>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdSchedule" data="dList" onRowDblclick="grid1RowDblclick"> 
        <column ref="recNo" label="序号" type="ro" show-index="true" width="30"/>  
        <column ref="fTitle" label="日程主题" type="html" onRender="openMyScheduleDialog" width="120"/>  
        <column ref="fBeginTime" label="开始时间" type="dateTime" width="110" format="yyyy-MM-dd hh:mm"/>  
        <column ref="fEndTime" label="结束时间" type="dateTime" width="110" format="yyyy-MM-dd hh:mm"/>  
        <column ref="fCreatePsnName" label="创建人" type="ro" width="80"/>  
        <column ref="fCreateTime" label="创建时间" type="dateTime" format="yyyy-MM-dd hh:mm"/> 
      </xhtml:div>  
      <xui:layout style="height:100%;"> 
        <place control="grdSchedule" style="width:100%;height:100%;"/>  
        <place control="dlgScheduleArrange" style="top:358px;left:360px;"/> 
      </xui:layout>  
      <layout/> 
    </xui:view>  
    <xui:view id="vShareIssue"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdShareIssue" data="dPerson"> 
        <column ref="sName" label="名称" type="ed" width="60"/>  
        <column ref="sMainOrgFName" label="所属机构" type="ed"/> 
      </xhtml:div>  
      <xui:layout style="height:100%;"> 
        <place control="grdShareIssue" style="width:100%;height:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrShareBar"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar" data="dPerson"> 
        <item name="pre-item" id="barItem8"/>  
        <item name="next-item" id="barItem9"/>  
        <item> 
          <xhtml:div id="divInput"> 
            <xforms:input style="width:120px" id="iptSharekey" ref="data('customFilter')/anyValue"> 
              <xforms:action id="action1" ev:event="xforms-value-changed"> 
                <xforms:script id="xformsScript1">input1xforms_value_changed(event)</xforms:script> 
              </xforms:action> 
            </xforms:input> 
          </xhtml:div> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <layout style="height:100%;"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="25%" has-drag-bar="true" has-arrow-button="true" mode="horz" id="HSplitter_1" style="width:100%;height:100%;" status="normal"> 
        <xhtml:div region="left" id="div_1" style="width:25%;height:100%;"> 
          <xhtml:table cellpadding="0" cellspacing="0" style="table-layout:fixed;width:100%;height:100%;" width="100%" height="100%" id="table_2" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr height="35px"> 
              <xhtml:td align="left"> 
                <place control="tbrShareBar" style="height:42%;"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td align="left" valign="top" colspan="1"> 
                <place control="vShareIssue"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div>  
        <xhtml:div region="right" id="div_2" style="width:75%;height:100%;"> 
          <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%"> 
            <xui:tab id="schedulerTab" selected="true" style="overflow:hidden;"> 
              <xui:label>日程</xui:label>  
              <xforms:action ev:event="xforms-select"> 
                <xforms:script>schedulerTabxforms_select(event)</xforms:script> 
              </xforms:action>  
              <place control="vSchedule" style="width:100%;height:100%;"/> 
            </xui:tab>  
            <xui:tab id="listTab"> 
              <xui:label>列表</xui:label>  
              <xforms:action ev:event="xforms-select"> 
                <xforms:script>listTabxforms_select(event)</xforms:script> 
              </xforms:action>  
              <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                <xhtml:tr height="35px"> 
                  <xhtml:td> 
                    <place control="tbrSchedule"/> 
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
        </xhtml:div> 
      </xhtml:div> 
    </layout> 
  </xui:view> 
</xui:window>
