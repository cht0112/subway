<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="wdwSendDoc">  
  <resource> 
    <xhtml:script src="/UI/system/components/printHtml/formPrint.js"/> 
  </resource>  
  <xforms:model id="model1" style="height:auto;top:364px;left:498px;"> 
    <data id="dataMain" component="/UI/system/components/data.xbl.xml#bizData" data-type="json"
      offset="1" limit="20" auto-load="true" store-type="grid"> 
      <reader/>  
      <calculate-relation relation="recNO" type="xsd{semicolon}integer"/> 
    </data> 
  </xforms:model>  
  <view id="rootView" auto-load="true"> 
    <view id="listView" auto-load="true"> 
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="queryTrigger" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show">
   <xforms:label id="default1"><![CDATA[]]></xforms:label></xforms:trigger><xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger1"
        appearance="image-minimal" operation-owner="dataMain" operation="refresh"> 
        <xforms:label id="saveTriggerLabel"/> 
      </xforms:trigger>  
      <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMain"></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
        id="gridMain" onRowDblClick="listQuery.gridMainRowDblClick" class="grid-compact"
        row-height="30" header-row-height="30"/>  
      <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination"
        id="pagination1" data="dataMain" items="first last pre next" first-label="首页"
        pre-label="上页" next-label="下页" last-label="尾页" align="right" page-count="15"/>  
      <layout style="height:100%;width:100%;"> 
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout1" style="width:100%;height:100%;"> 
          <top size="40px" id="borderLayout-top1"> 
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
              separator="false" separator-size="1" id="ngtbMain" expandable="false"
              expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="3"
              expanded-width="75"> 
              <xui:place control="queryTrigger" id="controlPlace5"></xui:place><xui:place control="refreshTrigger1" id="saveTriggerPlace"/>  
              </xhtml:div> 
          </top>  
          <center id="borderLayout-center1"> 
            <xui:place control="bizDataFilterMenu1" id="controlPlace4" style="top:71px;left:182px;"></xui:place><place control="gridMain" style="width:100%;height:100%;"/> 
          </center>  
          <bottom size="40px" id="borderLayout-bottom1"> 
            <xui:place control="pagination1" id="controlPlace1"/> 
          </bottom> 
        </xhtml:div> 
      </layout> 
    </view>  
    <xui:view auto-load="false" id="vProcessChart"> 
      <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart"
        id="processChart"/>  
      <xui:layout style="height:100%;width:100%;"> 
        <place control="processChart" style="height:100%;width:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <xui:view id="detailView" auto-load="true" class="xui-container"> 
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="preTrigger"
        operation-owner="dataMain" appearance="image-minimal" operation="prevRow"> 
        <xforms:label id="default2"/> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="nextTrigger"
        operation-owner="dataMain" appearance="image-minimal" operation="nextRow"> 
        <xforms:label id="default16"/> 
      </xforms:trigger>  
      <view id="vDetail" class="xui-container"> 
        <layout src="detail.xls" type="flow" style="height:100%;width:100%;position:relative;"/> 
      </view>  
      <layout id="layout1"> 
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout2" style="width:100%;height:100%;"> 
          <center id="borderLayout-center2"> 
            <place control="vDetail" style="height:100%;width:100%;position:relative;"/> 
          </center>  
          <bottom size="40px" id="borderLayout-bottom2">
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
              separator="false" separator-size="16" id="buttonBar4" style="float:right;"> 
              <xui:place control="preTrigger" id="controlPlace7"/>  
              <xui:place control="nextTrigger" id="controlPlace9"/> 
            </xhtml:div>
          </bottom>
        </xhtml:div> 
      </layout> 
    </xui:view>  
    <layout style="height:100%;width:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabs" style="height:100%;width:100%;"
        class="noneborder"> 
        <tab id="tabList"> 
          <label>列表</label>  
          <place control="listView" style="height:100%;"/> 
        </tab>  
        <tab id="tabDetail"> 
          <label>详细</label>  
          <place control="detailView" id="controlPlace3" style="width:100%;height:100%;"/> 
        </tab>  
        <xui:tab id="tabProcessChart"> 
          <xui:label>流程图</xui:label>  
          <place control="vProcessChart" style="width:100%;"/>  
          <xforms:action id="action1" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">listQuery.tabProcessChartSelect()</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </layout> 
  </view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="listQuery.js"/> 
  </resource> 
</window>
