<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="wdwSendDoc">  
  <resource> 
    <xhtml:script src="/UI/system/components/printHtml/formPrint.js"/> 
  </resource>  
  <xforms:model id="model1" style="top:357px;left:32px;"> 
    <data id="dataMain" component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="1" limit="20"  auto-load="true" store-type="grid"> 
      <reader/>  
      <!-- 
    
      <rule concept="DEMO_SendDoc" readonly="true()"/>  
         -->
      <calculate-relation relation="recNO" type="xsd{semicolon}integer"/> 
    </data> 
  </xforms:model>  
  <view id="rootView" auto-load="true"> 
    <view id="vToolBar" auto-load="true"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars_1"> 
        <bar data="dataMain" component="/UI/system/components/bar.xbl.xml#navigatorBar"
          id="navigatorBar_1" mode="IMG_TXT_LR"> 
          <item name="filter-pro-item" id="barItem1"></item><item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="custom-page-item" page-count="0" items="pre,next,ext"/>  
          <item name="next-page-item"/>  
          <item name="all-page-item"/>  
          <item> 
            <xforms:trigger id="trigger_2"> 
              <xforms:label>打印</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>justep.HtmlPrint.printForm(["tdSendDocList","tdSendDocDetail"]);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger id="trigger_3"> 
              <xforms:label>打印预览</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>justep.HtmlPrint.printpreview(["tdSendDocList","tdSendDocDetail"]);</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </bar> 
      </xhtml:div> 
    </view>  
    <view id="vDetailToolBar" auto-load="true"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
          data="dataMain" mode="IMG_TXT_LR"> 
          <item name="filter-pro-item" id="barItem2"></item><item name="first-item"/>  
          <item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="last-item"/> 
        </xui:bar> 
      </xhtml:div>  
      <layout> 
        <place control="toolbars1"/> 
      </layout> 
    </view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="gridMain" onRowDblClick="listQuery.gridMainRowDblClick"/>  
    <view id="vDetail" class="xui-container"> 
      <layout src="detail.xls" type="cell.excel" style="position:relative;height:100%;width:100%;"/> 
    </view>  
    <xui:view auto-load="false" id="vProcessChart"> 
      <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart"
        id="processChart"/>  
      <xui:layout style="height:100%;width:100%;"> 
        <place control="processChart" style="height:100%;width:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <layout style="height:100%;width:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabs" style="height:100%;width:100%;"> 
        <tab id="tabList"> 
          <label>列表</label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top size="40px" id="borderLayout-top1"> 
              <place control="vToolBar"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="gridMain" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </tab>  
        <tab id="tabDetail"> 
          <label>详细</label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top size="40px" id="borderLayout-top2"> 
              <place control="vDetailToolBar"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" style="height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
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
