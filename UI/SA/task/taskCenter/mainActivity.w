<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:290px;left:788px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="main" concept="SA_Task" onRefreshCreateParam="mainActivity.mainRefreshCreateParam" onIndexChanged="mainActivity.mainIndexChanged" onAfterRefresh="mainActivity.mainAfterRefresh" onAfterRefreshPage="mainActivity.mainAfterRefreshPage" order-by="sCreateTime desc"> 
      <reader id="default1" action="/SA/task/logic/action/queryTaskCenterAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="status,statusLabel,org,orgLabel" src="" auto-load="true" store-type="simple" id="custom_filter"> 
      <rows xmlns="" id="default4">  
        <row id="default5"> 
          <cell id="default6"/>  
          <cell id="default7"/> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action3" ev:event="onload"> 
      <xforms:script id="xformsScript3">mainActivity.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="dlgChart" id="controlPlace4" style="top:25px;left:761px;"/>  
      <xui:place control="process" id="controlPlace5" style="width:24px;top:102px;left:433px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="38px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" expandable="false" expanded-position="6" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-width="80" separator-size="8">
            <xui:place control="trgExecute" id="controlPlace11"/>  
            <xui:place control="trgBrowse" id="controlPlace13"/>  
            <xui:place control="trigger5" id="controlPlace16"/>
            <xui:place control="trigger6" id="controlPlace17"/>
            <xui:place control="more" id="controlPlace15"/>  
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="margin:0px 0px 0px 0px;" separator-size="4">
              <xui:place control="dateFilter1" id="controlPlace7" style="width:80px;float:left;margin-top:2px;"/>  
              <xui:place control="orgPersonFilter" id="controlPlace8" style="width:150px;float:left;margin-top:2px;"/>  
              <xui:place control="gridSelect1" id="controlPlace6" style="width:60px;float:left;margin-top:2px;"/>  
              <xui:place control="smartFilter1" id="controlPlace9" style="width:100px;float:left;margin-top:2px;"/>  
              <xui:place control="trgSearch" id="controlPlace10" style="width:32px;"/>
            </xhtml:div>
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="grid" id="controlPlace1" style="width:100%;height:100%;"/> 
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
          <xui:place control="pagination1" id="controlPlace3"/>
        </bottom>
      </xhtml:div>  
      <xui:place control="bizDataFilterMenu1" id="controlPlace18" style="top:308px;left:255px;"/>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="流程轨迹" width="396px" height="264px" modal="true" id="dlgChart" url="/UI/SA/task/taskCenter/dialogs/processChart.w" resizable="true" status="maximize" left="0" top="0" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="process" auto-close="false" auto-start="false" auto-save="false" auto-filter="false"/>  
    <!-- appearance="image" -->  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid" data="main" onRowDblClick="mainActivity.gridRowDblClick" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn9" ref="calcIndex" type="ro" width="30px" align="center" show-index="true" label="序号"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="200px"/>  
      <xui:column id="gridColumn2" ref="sTypeName" label="类型" type="ro" width="80px"/>  
      <xui:column id="gridColumn3" ref="sStatusName" label="状态" type="ro" width="60px" align="center"/>  
      <xui:column id="gridColumn8" ref="sSummary" label="摘要" type="html" width="300px" onRender="mainActivity.grid_sSummaryRender"/>  
      <xui:column id="gridColumn7" ref="sCreatorPersonName" label="提交人" type="ro" width="50px"/>  
      <xui:column id="gridColumn5" ref="sCreateTime" label="提交时间" type="ro" width="120px"/>  
      <xui:column id="gridColumn4" ref="sExecutorNames" label="执行人" type="ro" width="100px"/>  
      <xui:column id="gridColumn6" ref="sExecuteTime" label="执行时间" type="ro" width="120px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination1" align="right" data="main"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trgExecute" class="button-blue" appearance="image-text" icon-class="icon-system-ok"> 
      <xforms:label id="default19"><![CDATA[处理]]></xforms:label>  
      <xforms:action id="action6" ev:event="DOMActivate">
        <xforms:script id="xformsScript6"><![CDATA[mainActivity.trgExecuteClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trgBrowse" appearance="image-minimal" icon-class="icon-system-eye"> 
      <xforms:label id="default21"><![CDATA[查看]]></xforms:label>  
      <xforms:action id="action8" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript8">mainActivity.trgBrowseClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/menuButton.xbl.xml#menuButton" id="more" label="更多操作"> 
      <menuitem id="menuitem3" label="任务回收" name="recycleItem" onClick="mainActivity.trgRecycleClick" icon-class="icon-system-back"/>  
      <menuitem id="menuitem1" label="流程轨迹" name="flowItem" onClick="mainActivity.trgChartClick" icon-class="icon-system-sitemap"/>  
      <menuitem id="recordItem" label="流程记录" name="recordItem" onClick="mainActivity.trgExecuteListClick"/> 
    </xhtml:div>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" appearance="image-minimal" operation-owner="main" operation="refresh"> 
      <xforms:label id="default23"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show" icon-class="icon-system-search"> 
      <xforms:label id="default24"><![CDATA[查询]]></xforms:label> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="main"/>  
    <xhtml:div default-select="0" component="/UI/system/components/dateFilter.xbl.xml#dateFilter" onChanged="" filter-date-mode="single" id="dateFilter1" filter-data="main" auto-refresh="false" dropdown-height="220px" filter-date-relation1="sCreateTime"/>  
    <xhtml:div onInit="" onChanged="" component="/UI/system/components/orgFilter.xbl.xml#orgFilter" id="orgPersonFilter" auto-refresh="false" dropdown-height="200px" default-value="本人"/>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('custom_filter')/status" label-ref="data('custom_filter')/statusLabel" multi-select="true"> 
      <xforms:label ref="col_0" id="xuiLabel6"/>  
      <xforms:value ref="col_1" id="default2"/>  
      <xforms:itemset id="default3"> 
        <xforms:column ref="col_0" id="default47"/>  
        <xforms:column ref="col_1" visible="false" id="default48"/>  
        <itemset-data xmlns="" id="default8">  
          <rows id="default9">  
            <row id="default10"> 
              <cell id="default11">待办</cell>  
              <cell id="default12">waiting</cell>
            </row>  
            <row id="default13"> 
              <cell id="default14">已办</cell>  
              <cell id="default15">finished</cell>
            </row>  
            <row id="default16"> 
              <cell id="default17">提交</cell>  
              <cell id="default18">submited</cell>
            </row> 
          </rows> 
        </itemset-data> 
      </xforms:itemset> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/smartFilter.xbl.xml#smartFilter" id="smartFilter1" filter-data="main" filter-relations="sName,sTypeName,sCreatorPersonName,sExecutorPersonName,sStatusName" auto-refresh="true"/>  
    <xforms:trigger id="trgSearch" appearance="image" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel10">搜索</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">mainActivity.trgSearchClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="htmlScript2" src="/UI/SA/task/js/common.js"/> 
  </xui:resource> 
</xui:window>
