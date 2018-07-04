<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="height:auto;top:139px;left:217px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="1" limit="20" xui:update-mode="whereVersion" auto-load="true" id="listData" direct-delete="true"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" width="596px" height="364px" modal="true" id="detailDialog" onReceive="list.detailDialogReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="listData"/>
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="listGrid" data="listData" onRowDblClick="list.listGridRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column" class="grid-compact" row-height="30" header-row-height="30"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger" class="button-blue" appearance="image-text" icon-class="icon-system-plus"> 
      <xforms:label id="newTriggerLabel"><![CDATA[新建]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[list.insertItemClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="editTrigger" icon-class="icon-system-edit-alt" appearance="image-minimal"> 
      <xforms:label id="default1"><![CDATA[编辑]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[list.editItemClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger" operation-owner="listData" appearance="image-minimal" icon-class="icon-system-trash" operation="delete"> 
      <xforms:label id="deleteTriggerLabel"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger" operation-owner="listData" appearance="image-minimal" operation="refresh"> 
      <xforms:label id="refreshTriggerLabel"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" id="pagination1" data="listData" items="first last pre next" first-label="首页" pre-label="上页" next-label="下页" last-label="尾页" align="right" page-count="15"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;"> 
        <top size="40px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="2" id="navigatorBar" expandable="false" expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="6" expanded-width="75"> 
            <xui:place control="newTrigger" id="controlPlace2"/>  
            <xui:place control="editTrigger" id="controlPlace6"/>
            <xui:place control="deleteTrigger" id="controlPlace3"/>  
            <xui:place control="refreshTrigger" id="controlPlace4"/>  
            <xui:place control="trigger1" id="controlPlace8"/>
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="bizDataFilterMenu1" id="controlPlace7" style="top:5px;left:531px;"/>
          <place control="listGrid" style="width:100%;height:100%;"/> 
        </center>  
        <bottom size="40px" id="borderLayout-bottom1"> 
          <xui:place control="pagination1" id="controlPlace5"/> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="detailDialog" id="controlPlace1" style="top:293px;left:263px;"/> 
    </xui:layout>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show"> 
      <xforms:label id="default2"><![CDATA[]]></xforms:label>
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="list.js"/> 
  </xui:resource> 
</xui:window>
