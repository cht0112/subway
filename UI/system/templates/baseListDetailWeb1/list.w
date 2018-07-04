<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="height:auto;top:164px;left:318px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="1"
      limit="20" xui:update-mode="whereVersion" auto-load="true" id="listData" direct-delete="true"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowRunner.xbl.xml#windowRunner" id="detailRunner" onReceive="list.detailRunnerReceive"></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="listGrid"
      data="listData" onRowDblClick="list.listGridRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column" row-height="30" class="grid-compact" header-row-height="30"/>  
    <xui:layout style="height:100%;width:100%"> 
     
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="40px" id="borderLayout-top1"> 
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="2" id="navigatorBar" expandable="false" expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="6" expanded-width="75">
   <xui:place control="newTrigger" id="controlPlace2"></xui:place>
   <xui:place control="editTrigger" id="controlPlace6"></xui:place>
   <xui:place control="deleteTrigger" id="controlPlace3"></xui:place>
   <xui:place control="refreshTrigger" id="controlPlace4"></xui:place>
   <xui:place control="trigger1" id="controlPlace8"></xui:place></xhtml:div></top>  
        <center id="borderLayout-center1">
          
          <place control="listGrid" style="width:100%;height:100%;"/> 
        </center> 
      <bottom size="45px" id="borderLayout-bottom1"><xui:place control="pagination1" id="controlPlace10"></xui:place></bottom></xhtml:div> 
      
     <xui:place control="detailRunner" id="controlPlace1" style="top:127px;left:381px;"></xui:place>
     
    <xui:place control="bizDataFilterMenu1" id="controlPlace7" style="left:501px;top:193px;"></xui:place></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger" class="button-blue" appearance="image-text" icon-class="icon-system-plus">
   <xforms:label id="newTriggerLabel">新建</xforms:label>
   <xforms:action id="action2" ev:event="DOMActivate">
    <xforms:script id="xformsScript2">list.insertItemClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="editTrigger" icon-class="icon-system-edit-alt" appearance="image-minimal">
   <xforms:label id="default1">编辑</xforms:label>  
   <xforms:action id="action1" ev:event="DOMActivate">
    <xforms:script id="xformsScript1"><![CDATA[list.editItemClick(event)]]></xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger" operation-owner="listData" appearance="image-minimal" icon-class="icon-system-trash" operation="delete">
   <xforms:label id="deleteTriggerLabel"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger" operation-owner="listData" appearance="image-minimal" operation="refresh">
   <xforms:label id="refreshTriggerLabel"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show">
   <xforms:label id="default2"></xforms:label></xforms:trigger>
  <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="listData"></xhtml:div>
  <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" id="pagination1" data="listData" items="first last pre next" first-label="首页" pre-label="上页" next-label="下页" last-label="尾页" align="right" page-count="15"></xhtml:div></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="list.js"/> 
  </xui:resource>  
</xui:window> 
