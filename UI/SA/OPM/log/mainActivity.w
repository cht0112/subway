<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:70px;height:auto;left:93px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="dLog" concept="SA_Log" order-by="sCreateTime desc" confirm-refresh="false"> 
      <reader id="default1" action="/system/logic/action/queryLogAction"/>  
      <filter name="filter0" id="filter1"><![CDATA[SA_Log.sTypeName = '组织权限变更日志']]></filter>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="flow"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <top size="38px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar1" style="float:left;"> 
            <xui:place control="btnRefresh" id="controlPlace4"/> 
          </xhtml:div>  
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar2" separator-size="4" style="float:left;"> 
            <xhtml:label id="label1" class="xui-label" style="font-size:12px;margin-left:10px;">时间</xhtml:label>  
            <xui:place control="dateFilter1" id="controlPlace6" style="width:71px;"/>  
            <xhtml:label id="label2" class="xui-label" style="font-size:12px;margin-left:10px;">查找</xhtml:label>  
            <xui:place control="smartFilter1" id="controlPlace7"/>  
            <xui:place control="imageSearch" id="controlPlace8" style="height:25px;width:25px;"/> 
          </xhtml:div>  
          <xui:place control="pagination1" id="controlPlace5" style="height:35px;float:right;width:200px;"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="gridLog" id="controlPlace2" style="width:100%;height:100%;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/> 
        </center>  
        <bottom size="200px" id="borderLayout-bottom1"> 
          <xui:place control="textarea1" id="controlPlace3" style="height:100%;width:100%;"/> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="bizDataFilterMenu1" id="controlPlace1" style="top:211px;left:166px;"/> 
    </xui:layout>  
    <xforms:textarea ref="data('dLog')/sETField32" id="textarea1"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridLog" data="dLog" header-row-height="30" row-height="30" class="grid-compact" space-column="false"> 
      <xui:column id="gridColumn1" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>  
      <xui:column id="gridColumn2" ref="sDescription" label="日志描述" type="ro" width="*"/>  
      <xui:column id="gridColumn3" ref="sCreateTime" label="操作时间" type="ro" width="120px"/>  
      <xui:column id="gridColumn4" ref="sCreatorPersonName" label="操作者" type="ro"
        width="50px"/>  
      <xui:column id="gridColumn6" ref="sActivityName" label="业务功能" type="ro" width="100px"/>  
      <xui:column id="gridColumn7" ref="sActionName" label="动作" type="ro" width="100px"/>  
      <xui:column id="gridColumn13" ref="sIP" label="IP地址" type="ro" width="100px"/> 
    </xhtml:div>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnRefresh"
      appearance="image-text" class="button-blue" operation-owner="bizDataFilterMenu1"
      operation="show"> 
      <xforms:label id="default2"/> 
    </xforms:trigger>  
    <xhtml:div default-select="0" component="/UI/system/components/dateFilter.xbl.xml#dateFilter"
      onChanged="" filter-date-mode="single" id="dateFilter1" filter-data="dLog" filter-date-relation1="sCreateTime"
      auto-refresh="true" dropdown-height="200px"/>  
    <xhtml:div component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
      id="smartFilter1" filter-data="dLog" filter-relations="sTypeName,sCreatorPersonName,sActivityName,sActionName,sIP"
      auto-refresh="true" onGetCondition="mainActivity.smartFilter1GetCondition"/>  
    <xforms:trigger id="imageSearch" appearance="image" icon-class="icon-system-search"
      class="button-yellow"> 
      <xforms:label id="xuiLabel1">查找</xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">mainActivity.imageSearchClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next"
      id="pagination1" data="dLog" page-count="1" align="right" class="small" pre-label="上页" next-label="下页"/>  
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu"
      id="bizDataFilterMenu1" data="dLog"/>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
