<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model" style="height:auto;top:449px;left:368px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataMaster" store-type="grid"
      direct-delete="true"> 
      <reader id="default1"/>  
      <writer id="default2"/>  
      <creator id="default3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataDetail" confirm-delete="false"> 
      <reader id="default4"/>  
      <writer id="default5"/>  
      <creator id="default6"/>  
      <master id="master1" data="dataMaster"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 

    <xui:view auto-load="true" id="listView" class="xui-container"> 
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger"
        class="button-blue" appearance="image-text" icon-class="icon-system-plus"> 
        <xforms:label id="newTriggerLabel"><![CDATA[新建]]></xforms:label>
      <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[listdetailmd.newItemClick(event)]]></xforms:script></xforms:action></xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger"
        operation-owner="dataMaster" appearance="image-minimal" operation="delete"> 
        <xforms:label id="saveTriggerLabel"><![CDATA[]]></xforms:label>
      </xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger"
        operation-owner="dataMaster" appearance="image-minimal" operation="refresh"> 
        <xforms:label id="refreshTriggerLabel"><![CDATA[]]></xforms:label>
      </xforms:trigger>
      <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMaster"></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="grdMaster" data="dataMaster" onRowDblClick="listdetailmd.grdMasterRowDblClick"
        class="grid-compact" row-height="30" header-row-height="30"/>
      <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination"
        id="pagination1" data="dataMaster" items="first last pre next" first-label="首页"
        pre-label="上页" next-label="下页" last-label="尾页" align="right" page-count="15"/>
      <layout type="flow" style="position:relative;" id="layout2">
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout1" style="width:100%;height:100%;"> 
          <top size="40px" id="borderLayout-top1"> 
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
              separator="false" separator-size="1" id="ngtbMaster1" expandable="true"
              expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5"
              expanded-width="75"> 
              <xui:place control="newTrigger" id="newTriggerPlace"/>  
              <xui:place control="saveTrigger" id="saveTriggerPlace"/>  
              <xui:place control="refreshTrigger" id="refreshTriggerPlace"/>
            <xui:place control="trigger5" id="controlPlace10"></xui:place></xhtml:div> 
          </top>  
          <center id="borderLayout-center1"> 
            <xui:place control="bizDataFilterMenu1" id="controlPlace4" style="top:83px;left:395px;"></xui:place><place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
          </center>  
          <bottom size="45px" id="borderLayout-bottom1">
            <xui:place control="pagination1" id="controlPlace1"/>
          </bottom>
        </xhtml:div>
      </layout>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show">
   <xforms:label id="default13"><![CDATA[]]></xforms:label></xforms:trigger></xui:view>  
    <xui:view auto-load="true" id="detailView" class="xui-container"> 
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2"
        operation-owner="dataMaster" class="button-blue" appearance="image-text" operation="new"> 
        <xforms:label id="default8"><![CDATA[]]></xforms:label>
      </xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1"
        operation-owner="dataMaster" appearance="image-minimal" operation="save"> 
        <xforms:label id="default7"><![CDATA[]]></xforms:label>
      </xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4"
        appearance="image-minimal" operation-owner="dataMaster" operation="delete"> 
        <xforms:label id="default10"><![CDATA[]]></xforms:label>
      </xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3"
        operation-owner="dataMaster" appearance="image-minimal" operation="refresh"> 
        <xforms:label id="default9"><![CDATA[]]></xforms:label>
      </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="preTrigger" operation-owner="dataMaster" appearance="image-minimal" operation="prevRow">
   <xforms:label id="default11"><![CDATA[]]></xforms:label></xforms:trigger><xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="nextTrigger" operation-owner="dataMaster" appearance="image-minimal" operation="nextRow">
   <xforms:label id="default16"><![CDATA[]]></xforms:label></xforms:trigger>
      <xui:view auto-load="true" id="vDetail" class="xui-container"> 
        <layout id="layout1" src="detail.xls" style="position:relative;"></layout> 
      </xui:view>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8"
        operation-owner="dataDetail" class="button-blue" appearance="image-text" operation="new"> 
        <xforms:label id="default12"/>
      </xforms:trigger>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6"
        appearance="image-minimal" operation-owner="dataDetail" operation="delete"> 
        <xforms:label id="default14"/>
      </xforms:trigger>
      <layout type="flow" style="position:relative;width:800px;margin:auto;" id="layout3">
  
         
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
              separator="false" separator-size="1" id="ngtbMaster2" expandable="false"
              expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5"
              expanded-width="75"> 
              <xui:place control="trigger2" id="controlPlace8"/>  
              <xui:place control="trigger1" id="controlPlace7"/>  
              <xui:place control="trigger4" id="controlPlace9"/>
              <xui:place control="trigger3" id="controlPlace3"/>
            </xhtml:div>
               <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="true" separator-size="16" id="buttonBar4" style="margin-left:10px;">
   <xui:place control="preTrigger" id="controlPlace15"></xui:place>
   <xui:place control="nextTrigger" id="controlPlace16"></xui:place></xhtml:div>
            <place control="vDetail" id="controlPlace5" style="width:100%;height:214px;"/>  
            
       <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="2" id="ngtbDetail" expandable="false" expanded="false" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5" expanded-width="75"> 
              <xui:place control="trigger8" id="controlPlace11" />  
              <xui:place control="trigger6" id="controlPlace14" /> 
            </xhtml:div> 
          
             
          <place control="grdDetail" id="controlPlace6" style="width:100%;height:320px;"></place> 
   
      </layout>
    
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdDetail" data="dataDetail" class="grid-compact" row-height="30" header-row-height="30"></xhtml:div></xui:view>
    
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;" class="noneborder"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xui:place control="listView" id="controlPlace12" style="position:relative;width:100%;height:100%;"/>
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xui:place control="detailView" id="controlPlace13" style="position:relative;width:100%;height:100%;"/>
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="listdetailmd.js"/> 
  </xui:resource> 
</xui:window>
