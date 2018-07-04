<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="model" style="width:143px;height:auto;top:603px;left:384px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_App" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereVersion"> 
      <creator action="/system/logic/action/createSA_AppAction" id="default2"/>  
      <reader action="/system/logic/action/querySA_AppAction" id="default3"/>  
      <writer action="/system/logic/action/saveSA_AppAction" id="default4"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xforms:trigger appearance="image-text" class="button-blue" component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger" operation="new" operation-owner="dataMain"> 
      <xforms:label id="newTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger" operation="save" operation-owner="dataMain"> 
      <xforms:label id="saveTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger" operation="delete" operation-owner="dataMain"> 
      <xforms:label id="deleteTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger" operation="refresh" operation-owner="dataMain"> 
      <xforms:label id="refreshTriggerLabel"/> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" data="dataMain" id="bizDataFilterMenu1"/>  
    <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" header-row-height="30" id="grdMain" row-height="30" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default5" label="名称" ref="sName" type="ed" width="150px"/>  
      <column id="default6" label="编码" ref="sCode" type="ed" width="100px"/>  
      <column id="default7" label="模块" ref="sModel" type="ed" width="100px"/>  
      <column id="default9" label="应用版本" ref="sAppVersion" type="ed" width="100px"/>  
      <column id="default10" label="供应商名称" ref="sVendorName" type="ed" width="150px"/>  
      <column id="default11" label="可用状态" ref="sValidState" type="ed" width="100px"/>  
      <column id="default8" label="创建时间" ref="sCreateTime" type="ro" width="150px"/> 
    </xhtml:div>  
    <xhtml:div align="right" component="/UI/system/components/pagination.xbl.xml#pagination" data="dataMain" first-label="首页" id="pagination1" items="first last pre next" last-label="尾页" next-label="下页" page-count="15" pre-label="上页"/>  
    <xui:layout style="overflow:auto;height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top1" size="40px"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" expandable="false" expanded="false" id="ngtbMain" separator="false" separator-size="1"> 
            <xui:place control="newTrigger" id="newTriggerPlace"/>  
            <xui:place control="saveTrigger" id="saveTriggerPlace"/>  
            <xui:place control="deleteTrigger" id="controlPlace2"/>  
            <xui:place control="refreshTrigger" id="refreshTriggerPlace"/>  
            <xui:place control="queryTrigger" id="controlPlace4"/>  
            <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="sName,sCode" id="smartFilter1" style="width:120px;"></xhtml:div>  
            <xforms:trigger appearance="image" class="button-yellow" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-search" id="searchTrigger" operation="refresh" operation-owner="dataMain" style="width:30px;">  
              <xforms:label id="searchTriggerLabel"></xforms:label> 
            </xforms:trigger> 
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="bizDataFilterMenu1" id="controlPlace3" style="top:106px;left:628px;"/>  
          <place control="grdMain" id="controlPlace1" style="width:100%;height:100%"/> 
        </center>  
        <bottom id="borderLayout-bottom1" size="45px"> 
          <place control="pagination1" id="controlPlace5"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" id="queryTrigger" operation="show" operation-owner="bizDataFilterMenu1"> 
      <xforms:label id="default1"/> 
    </xforms:trigger> 
  </xui:view>  
  <xui:resource id="resource"/> 
</xui:window>
