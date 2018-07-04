<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:265px;left:97px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="16" update-mode="whereVersion" auto-load="true" id="dList" concept="OA_SD_SCHEDULE"> 
      <reader action="/OA/schedule/logic/action/querySDSCHEDULEAction"/>  
      <writer action="/OA/schedule/logic/action/saveSDSCHEDULEAction"/>  
      <creator action="/OA/schedule/logic/action/createSDSCHEDULEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="psnid,keyword,org_person,org,person,parent_org" auto-load="false" id="dFilter" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:action ev:event="onload"> 
      <xforms:script>mdMainload(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrManage"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="dList"> 
        <item name="newAuth"> 
          <xforms:trigger appearance="image" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label>新建日程</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>showSchedule("new","","");</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="deleteItem"> 
          <xforms:trigger appearance="image" src="/UI/system/images/standardToolbar/standard/remove.gif" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> 
            <xforms:label>删除日程</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>deleteSchedule();</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="filter-pattern-item"/>  
        <item name="separator"/>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="custom-page-item" id="barItem7"/>  
        <item> 
          <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" id="query_date" filter-data="dList" filter-date-relation1="OA_SD_Schedule.fBeginTime" auto-size="true" default-select="3" style="width:70px;" filter-date-mode="range" filter-date-relation2="OA_SD_Schedule.fEndTime"/> 
        </item>  
        <item> 
          <xhtml:div component="/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter" id="orgFilter" filter-data="dList" auto-size="true" dropdown-height="200" person-id-relation="fCreatePsnID " org-url-relation="OA_SD_Schedule.fCreateURL" style="width:120px;" manage-type-codes="'scheduleManagement'"/> 
        </item>  
        <item> 
          <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="query_keyword" filter-data="dList" filter-relations="fTitle,fExecutors" auto-size="true" style="width:100px;"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view id="vList"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdSchedule" data="dList"> 
        <column ref="recNo" label="序号" show-index="true"/>  
        <column ref="fTitle" label="日程主题" type="html" width="190" onRender="openMyScheduleDialog"/>  
        <column ref="fBeginTime" label="开始时间" type="dateTime" width="120" format="yyyy-MM-dd hh:mm"/>  
        <column ref="fEndTime" label="结束时间" type="dateTime" width="120" format="yyyy-MM-dd hh:mm"/>  
        <column ref="fExecutors" label="执行人" type="ed" width="200"/>  
        <column ref="fCreatePsnName" label="创建人" type="ro" width="100"/>  
        <column ref="fCreateTime" label="创建时间" type="dateTime" format="yyyy-MM-dd hh:mm" width="120"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" width="690px" height="380px" modal="true" id="dlgScheduleArrange" url="/OA/schedule/process/schedule/schedule.w" title="日程安排" onSend="dlgScheduleArrangeSend" onReceive="dlgScheduleArrangeReceive"/>  
      <xui:layout style="height:100%"> 
        <place control="grdSchedule" style="width:100%;height:100%;"/>  
        <place control="dlgScheduleArrange"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%"> 
      <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="35px"> 
          <xhtml:td> 
            <place control="tbrManage"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vList"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="/UI/OA/schedule/js/test.js"/>  
    <xhtml:script src="scheduleManagement.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:link href="/UI/appCommon/css/common.css" rel="STYLESHEET" type="text/css"/> 
  </xui:resource> 
</xui:window>
