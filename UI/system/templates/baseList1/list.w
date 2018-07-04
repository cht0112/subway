<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model" style="width:143px;height:auto;top:603px;left:384px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData"  data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataMain" direct-delete="true"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger"
      operation-owner="dataMain" operation="new" class="button-blue" appearance="image-text"> 
      <xforms:label id="newTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger"
      appearance="image-minimal" operation-owner="dataMain" operation="save"> 
      <xforms:label id="saveTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger"
      operation-owner="dataMain" operation="delete" appearance="image-minimal"> 
      <xforms:label id="deleteTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger"
      operation-owner="dataMain" operation="refresh" appearance="image-minimal"> 
      <xforms:label id="refreshTriggerLabel"/> 
    </xforms:trigger>   
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMain"></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdMain" data="dataMain" class="grid-compact" row-height="30" header-row-height="30"/>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" id="pagination1"
      data="dataMain" items="first last pre next" first-label="首页" pre-label="上页"
      next-label="下页" last-label="尾页" align="right" page-count="15"/>  
       
    <xui:layout style="overflow:auto;height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="40px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            separator="false" separator-size="1" id="ngtbMain" expandable="false" expanded="false"> 
            <xui:place control="newTrigger" id="newTriggerPlace"/>  
            <xui:place control="saveTrigger" id="saveTriggerPlace"/>  
            <xui:place control="deleteTrigger" id="controlPlace2"/>  
            <xui:place control="refreshTrigger" id="refreshTriggerPlace"/> 
          <xui:place control="queryTrigger" id="controlPlace4"></xui:place></xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="bizDataFilterMenu1" id="controlPlace3" style="top:5px;left:530px;"></xui:place><place control="grdMain" id="controlPlace1" style="width:100%;height:100%"/> 
        </center>  
        <bottom size="45px" id="borderLayout-bottom1"> 
          <place control="pagination1" id="controlPlace5"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="queryTrigger" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show">
   <xforms:label id="default1"><![CDATA[]]></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource"/> 
</xui:window>
