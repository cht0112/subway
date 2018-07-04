<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model" style="top:154px;height:auto;left:31px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="10" auto-load="true"></data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver"/>  
    <xhtml:div component="/UI/system/components/config.xbl.xml#config" id="config"> 
      <!--			<item id="returnColumnId" name="returnColumn" label="返回列" value=""/>--> 
    </xhtml:div>  
    <xui:view id="toolbarGridView" auto-load="true"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="main" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid" onRowDblClick="justep.SingleList.gridRowDblClick" style="width:100%;height:100%;" class="grid-compact"/>  
      <xui:layout style="height:100%;width:100%" id="toolbarGridLayout"> 
        <xhtml:div id="toolbarGridTable" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
          <top size="38px" id="bl2-t"> 
               
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="4"><xui:place control="smartFilter" id="controlPlace5"></xui:place><xui:place control="filterImg" id="controlPlace24" style="width:26px;"></xui:place>
  <xui:place control="btn-refresh" id="controlPlace6" style="width:63px;"></xui:place></xhtml:div>
  
  <xui:place control="pagination1" id="controlPlace4" style="display: block;position:absolute;top:0;right:0px"></xui:place></top>  
          <center id="bl2-c"> 
              <xui:place control="grid" style="height:100%;width:100%;overflow:auto;"/> 
          </center>
          <bottom size="4px" id="bl2-b"/> 
        </xhtml:div> 
      </xui:layout> 
    <xhtml:div component="/UI/system/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="main" auto-refresh="true"></xhtml:div><xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="filterImg" appearance="image" image-text-mode="LR" class="button-yellow" icon-class="icon-system-search">
   <xforms:label id="xuiLabel11">搜索</xforms:label>
   <xforms:action id="action5" ev:event="DOMActivate"><xforms:script id="xformsScript5"><![CDATA[singleList.filterImgClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" class="small" items="pre next" id="pagination1" data="main" page-count="1" pre-label="&amp;lt;" next-label="&gt;"></xhtml:div>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn-refresh" appearance="minimal">
   <xforms:label id="default4"><![CDATA[刷新页面]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[justep.SingleList.windowRefresh(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
    <xui:view id="buttonView" auto-load="true"> 
      <xhtml:button class="xui-button dialog-button-refresh" onclick="justep.SingleList.windowRefresh()" id="refresh-btn">刷新</xhtml:button>  
      <xui:layout id="layout1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;margin:10px 0;"><xui:place control="ensure-btn" id="controlPlace1"></xui:place>
  <xui:place control="cancel-btn" id="controlPlace2"></xui:place></xhtml:div>
  </xui:layout>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="ensure-btn" class="button-green">
   <xforms:label id="default1"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[justep.SingleList.windowOK()]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="cancel-btn" appearance="minimal" class="button-blue">
   <xforms:label id="default2"><![CDATA[取消]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[justep.SingleList.windowCancel()]]></xforms:script></xforms:action></xforms:trigger>
  </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="windowReceiver" id="windowReceiverPlace" style="top:73px;left:769px;"/>  
      <xhtml:div id="rootTable" border-size="8px" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
            <center id="bl1-c">
            	<xui:place control="toolbarGridView" id="toolbarGridPlace"/>
            </center>
            <bottom size="38px" id="bl1-b">
            	<xui:place control="buttonView"/>
            </bottom> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource"> 
    <xhtml:script id="htmlScript1" src="/UI/system/dialog/base2/singleList.js"/>  
    <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="/UI/system/dialog/base2/dialog.css"/> 
  </xui:resource> 
</xui:window>
