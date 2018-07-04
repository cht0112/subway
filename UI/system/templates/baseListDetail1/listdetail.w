<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model" style="height:auto;top:375px;left:456px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataMain" direct-delete="true"> 
      <reader id="default3"/>  
      <writer id="default4"/>  
      <creator id="default5"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <!--  列表视图 -->  
    <xui:view id="listView" auto-load="true"> 
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="newTrigger"
        class="button-blue" appearance="image-text" icon-class="icon-system-plus"> 
        <xforms:label id="newTriggerLabel"><![CDATA[新建]]></xforms:label> 
      <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[listdetail.newItemClick(event)]]></xforms:script></xforms:action></xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger"
        operation-owner="dataMain" operation="delete" appearance="image-minimal"  > 
        <xforms:label id="deleteTriggerLabel"/> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger"
        operation-owner="dataMain" operation="refresh" appearance="image-minimal"> 
        <xforms:label id="refreshTriggerLabel"/> 
      </xforms:trigger>  
      <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMain"></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="grdMain" data="dataMain" onRowDblClick="listdetail.grdMainRowDblClick"
        class="grid-compact" row-height="30" header-row-height="30"/>  
      <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination"
        id="pagination1" data="dataMain" items="first last pre next" first-label="首页"
        pre-label="上页" next-label="下页" last-label="尾页" align="right" page-count="15"/>  
      <xui:layout style="height:100%;width:100%" id="listLayout"> 
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout1" style="width:100%; height: 100%;;"> 
          <top size="40px" id="borderLayout-top1"> 
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
              separator="false" separator-size="1" id="ngtbMain1" expandable="false"
              expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5"
              expanded-width="75"> 
              <xui:place control="newTrigger"/>  
              <xui:place control="deleteTrigger"/>  
              <xui:place control="refreshTrigger"/> 
            <xui:place control="queryTrigger" id="controlPlace4"></xui:place></xhtml:div> 
          </top>  
          <center id="borderLayoutCenter"> 
            <xui:place control="bizDataFilterMenu1" id="controlPlace2" style="top:5px;left:431px;"></xui:place><place control="grdMain" id="gridPlace" style="width:100%;height:100%;"/> 
          </center>  
          <bottom size="45px" id="borderLayoutBottom"> 
            <xui:place control="pagination1" id="controlPlace1"/> 
          </bottom> 
        </xhtml:div> 
      </xui:layout> 
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="queryTrigger" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show">
   <xforms:label id="default1"><![CDATA[]]></xforms:label></xforms:trigger></xui:view>  
    <!-- 详细视图 -->  
    <xui:view auto-load="true" id="detailView" class="xui-container"> 
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger"
        operation-owner="dataMain" appearance="image-text" class="button-blue" operation="save"> 
        <xforms:label id="default18"><![CDATA[]]></xforms:label> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger1"
        operation-owner="dataMain" appearance="image-text" class="button-blue" operation="delete"> 
        <xforms:label id="default22"><![CDATA[]]></xforms:label> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="preTrigger"
        operation-owner="dataMain" appearance="image-minimal" operation="prevRow"> 
        <xforms:label id="default2"/> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="nextTrigger"
        operation-owner="dataMain" appearance="image-minimal" operation="nextRow"> 
        <xforms:label id="default16"/> 
      </xforms:trigger>  
      <xui:view auto-load="true" id="formView" class="xui-container"> 
        <layout type="flow" style="position:relative;" id="layout2"/> 
      </xui:view>  
      <layout type="flow" id="detailLayout"> 
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout2" style="width:100%;height:81%;"> 
          <top size="40px" id="borderLayout-top2"> 
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
              separator="false" separator-size="16" id="buttonBar3" style="float:right;"> 
              <xui:place control="saveTrigger" id="controlPlace8"/>  
              <xui:place control="deleteTrigger1" id="controlPlace10"/> 
            </xhtml:div> 
          </top>  
          <center id="borderLayout-center1"> 
            <xui:place control="formView" id="controlPlace6" style="position:relative;width:100%;height:100%;"/> 
          </center>  
          <bottom size="45px" id="borderLayout-bottom1"> 
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
              separator="false" separator-size="16" id="buttonBar4" style="float:right;"> 
              <xui:place control="preTrigger" id="controlPlace7"/>  
              <xui:place control="nextTrigger" id="controlPlace9"/> 
            </xhtml:div> 
          </bottom> 
        </xhtml:div> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;" class="noneborder"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xui:place control="listView" id="listPlace"/> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xui:place control="detailView" id="controlPlace3" style="margin: 0 auto;width:800px;height:100%;"/> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="listdetail.js"/> 
  </xui:resource> 
</xui:window>
