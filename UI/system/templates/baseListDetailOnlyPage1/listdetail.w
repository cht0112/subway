<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model" style="height:auto;top:121px;left:275px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" data-type="json" 
      direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereVersion"> 
      <reader id="default3"/>  
      <writer id="default4"/>  
      <creator id="default5"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xui:place control="view1" id="controlPlace3" style="margin:auto;position:relative;width:800px;height:100%;"/>
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger"
        operation-owner="dataMain" operation="new" class="button-blue" appearance="image-text"> 
        <xforms:label id="newTriggerLabel"/> 
      </xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger"
        operation-owner="dataMain" operation="save" appearance="image-minimal"> 
        <xforms:label id="saveTriggerLabel"/> 
      </xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger"
        operation-owner="dataMain" operation="refresh" appearance="image-minimal"> 
        <xforms:label id="refreshTriggerLabel"/> 
      </xforms:trigger>
      <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMain"></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
        id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        class="grid-compact" row-height="30" header-row-height="30"/>
      <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination"
        id="pagination1" data="dataMain" items="first last pre next" first-label="首页"
        pre-label="上页" next-label="下页" last-label="尾页" align="right" page-count="15"/>
      <layout type="flow" style="position:relative;" id="layout1">
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
          separator="false" separator-size="1" id="ngtbMain" expandable="false" expanded="true"
          expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5" expanded-width="75"> 
          <xui:place control="newTrigger" id="newTriggerPlace"/>  
          <xui:place control="saveTrigger" id="saveTriggerPlace"/>  
          <xui:place control="refreshTrigger" id="refreshTriggerPlace"/> 
        <xui:place control="trigger1" id="controlPlace6"></xui:place></xhtml:div>
        <xui:place control="bizDataFilterMenu1" id="controlPlace4" style="top:85px;left:361px;"></xui:place><place control="grdMain" id="controlPlace2" style="width:100%;height:197px;"/>
        <xui:place control="pagination1" id="controlPlace1"/>
        <place control="vDetail" id="controlPlace5" style="width:100%;height:320px;"></place></layout>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show">
   <xforms:label id="default2"><![CDATA[]]></xforms:label></xforms:trigger>
  <xui:view auto-load="true" id="vDetail" class="xui-container">
   <layout id="layout2" src="mainActivity.xls" style="height:200px;" type="excel"></layout></xui:view></xui:view>
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
