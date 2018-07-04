<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="window_1">  
  <xforms:model id="dataModel" style="height:auto;top:252px;left:313px;"> 
    <data xmlns="" component="/UI/system/components/reportData.xbl.xml#data" id="ds1">  
      <source> 
        <KSQL/>  
        <SQL> 
          <DEFAULT/>  
          <ORACLE/>  
          <MSSQL/>  
          <DB2/>  
          <SYBASE/> 
        </SQL>  
        <action name="complaintAnalysisByType" type="action" columns="TYPE1,COUNT1"/> 
      </source> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="bizData1" concept="CUSTOMER_COMPLAINT_INFO"
      store-type="simple" confirm-delete="false" confirm-refresh="false"> 
      <creator id="default10"/>  
      <reader id="default11" action="/metrodetection/customer_service/logic/action/queryCUSTOMER_COMPLAINT_INFOAction"/>  
      <writer id="default12"/> 
    </data>  
    <data xmlns="" id="reportData1" component="/UI/system/components/reportData.xbl.xml#data">
   <source id="default13"><action id="default14" name="complaintAnalysisSeverity" columns="SEVERITY1,COUNT1" type="action"></action></source></data>
  <data xmlns="" id="ds2" component="/UI/system/components/reportData.xbl.xml#data">
   <source id="default2"><action id="default15" name="complaintAnalysisByTypeChart" columns="TYPE1,COUNT1" type="action"></action></source></data>
  <data xmlns="" id="reportData2" component="/UI/system/components/reportData.xbl.xml#data">
   <source id="default3"><action id="default16" name="complaintAnalysisSeverityChart" columns="SEVERITY1,COUNT1" type="action"></action></source></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="CUSTOMER_COMPLAINT_INFO" confirm-delete="false" confirm-refresh="false" store-type="simple"><creator id="default26"></creator>
  <reader id="default27" action="/metrodetection/customer_service/logic/action/queryCUSTOMER_COMPLAINT_INFOAction"></reader>
  <writer id="default28"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="xml" columns="startDate,endDate" src="" auto-load="false" id="data1" store-type="simple" auto-new="true" confirm-delete="false" confirm-refresh="false"><rule id="dataRule1" column="startDate" type="xsd:date"></rule>
  <rule id="dataRule2" column="endDate" type="xsd:date"></rule></data>
  <xforms:action id="action4" ev:event="xbl-loaded"><xforms:script id="xformsScript4"><![CDATA[mainActivity.dataModelXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="startDate1,endDate1" src="" auto-load="false" id="data3" store-type="simple" auto-new="true" confirm-delete="false" confirm-refresh="false">
   <rule id="dataRule3" column="startDate1" type="xsd:date"></rule>
   <rule id="dataRule4" column="endDate1" type="xsd:date"></rule></data></xforms:model>  
  <view auto-load="true" id="view_1"> 
    <layout style="height:100%;wight:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout_1" style="height:130%;"> 
        <center> 
          <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
            class="xui-tabPanel" style="width:100%;height:136%;"> 
            <xui:tab id="tabPage1"> 
              <xui:label id="xuiLabel1"><![CDATA[按投诉类型统计]]></xui:label>  
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout1" style="width:100%;height:99%;"> 
                <center id="borderLayout-center1"> 
                  <xui:place control="view2" id="controlPlace7" style="width:100%;height:100%;"/> 
                </center> 
              </xhtml:div> 
            </xui:tab>  
            <xui:tab id="tabPage3"> 
              <xui:label id="xuiLabel3"><![CDATA[按严重程度统计]]></xui:label>  
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout2" style="width:100%;height:99%;"> 
                <center id="borderLayout-center2"> 
                  <xui:place control="view3" id="controlPlace6" style="height:100%;width:100%;"/> 
                </center> 
              </xhtml:div> 
            </xui:tab> 
          </xhtml:div> 
        </center> 
      </xhtml:div> 
    </layout>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <!--   <xui:place control="Report1" id="controlPlace9" style="position:absolute;width:719px;left:4px;top:50px;height:696px;"/> -->  
        <xui:place control="view5" id="controlPlace11" style="position:absolute;top:5px;height:89px;width:590px;left:2px;"/>  
        <xui:place control="view4" id="controlPlace2" style="position:absolute;left:12px;top:98px;height:100%;width:100%;"/> 
      </layout>  
      <xui:view auto-load="true" id="view5" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout5"> 
          <xui:place control="toolbars1" id="controlPlace12" style="position:absolute;height:39px;width:535px;left:5px;top:43px;"/>  
          <xui:place control="startDate" id="controlPlace15" style="position:absolute;left:63px;top:10px;"/>  
          <xui:place control="endDate" id="controlPlace16" style="position:absolute;top:10px;left:266px;"/>  
          <xui:place control="trigger1" id="controlPlace17" style="position:absolute;top:8px;left:431px;"/>  
          <xhtml:label id="label3" style="position:absolute;left:5px;top:13px;" class="xui-label"><![CDATA[投诉时间]]></xhtml:label>  
          <xhtml:label id="label5" style="position:absolute;top:13px;left:239px;" class="xui-label"><![CDATA[至]]></xhtml:label>
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
          <bar component="/UI/system/components/reportBar.xbl.xml#printBar"
            id="printBar" report="Report1" style="width:213px;" mode="IMG_TXT_LR"> 
            <item name="report-page-setup-item" id="barItem1"/>  
            <item name="report-preview-item" id="barItem2"/>  
            <item name="report-print-item" id="barItem3"/> 
          </bar>  
          <bar component="/UI/system/components/reportBar.xbl.xml#exportBar"
            id="exportBar" report="Report1" mode="IMG_TXT_LR" style="height:30px;width:156px;"> 
            <item name="report-export-pdf-item" id="barItem4"/>  
            <item name="report-export-word-item" id="barItem5"/>  
            <item name="report-export-excel-item" id="barItem6"/> 
          </bar> 
        </xhtml:div>  
        <xforms:input id="startDate" ref="data('data1')/startDate" format="yyyy-MM-dd" readonly="true"/>  
        <xforms:input id="endDate" ref="data('data1')/endDate" readonly="true"/>  
        <xforms:trigger id="trigger1"> 
          <xforms:label id="default8"><![CDATA[查询]]></xforms:label>
        <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger>
      </xui:view>  
      <xui:view auto-load="true" id="view4" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout4"> 
          <xui:place control="Report1" id="controlPlace9" style="position:absolute;width:100%;height:100%;top:8px;left:12px;"/>  
          <xui:place control="view6" id="controlPlace10" style="position:absolute;top:8px;width:5px;height:5px;left:12px;"/> 
        </layout>  
        <xhtml:div component="/UI/system/components/report.xbl.xml#report" auto-load="true"
          data-list="ds1" id="Report1" src="new_xls111.xls"/>  
        <xui:view auto-load="true" id="view6" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout6"> 
            <xui:place control="chart3" id="controlPlace14" style="position:absolute;top:5px;left:5px;width:5px;height:5px;"/> 
          </layout>  
          <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
            auto-load="false" data-list="ds2" id="chart3">  
            <chart id="chart4"> 
              <config id="default5">
                <title id="default7" visible="false" position="TOP"></title>
              </config>  
              <series-set id="series-set2">
                <series id="chartSeries1" chart-type="vertical-bar" name="verticalbarchart"> 
                  <config id="config1">
                    <category-title id="default6">投诉类型</category-title>
                  <serie-title id="default21">投诉记录数</serie-title>
  <map-tool-tip-format id="default22" type="number">######</map-tool-tip-format>
  <map-tool-tip-label-style id="default23">({0}) = {2}</map-tool-tip-label-style>
  
  
  
  
  <category-item-margin id="default19">0.1</category-item-margin>
  
  <category-item-max-width id="default29">0.2</category-item-max-width>
  <category-item-label-angle id="default24">20</category-item-label-angle>
  
  
  <serie-number-format id="default30">####.0</serie-number-format>
  
  <category-item-label-visible id="default34">true</category-item-label-visible>
  <category-item-label-number-format id="default35">######</category-item-label-number-format></config>  
                  
                
  
  
  
  
  
  
  
  <data title="TYPE1" categoryAxis="TYPE1" numberAxis="COUNT1" ref="ds2" autoData="true" id="data4"></data></series>
              </series-set> 
            </chart> 
          </xhtml:div> 
        </xui:view> 
      </xui:view> 
    </xui:view>  
    <xui:view auto-load="true" id="view3" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout3"> 
        <xui:place control="view7" id="controlPlace3" style="position:absolute;top:5px;height:89px;width:590px;left:2px;"></xui:place>
  <xui:place control="view8" id="controlPlace4" style="position:absolute;left:12px;top:98px;height:100%;width:100%;"></xui:place></layout> 
             
      <xui:view auto-load="true" id="view7" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout7"><xui:place control="toolbars2" id="controlPlace5" style="position:absolute;height:39px;width:535px;left:5px;top:43px;"></xui:place>
  <xhtml:label id="label4" style="position:absolute;left:5px;top:13px;" class="xui-label"><![CDATA[投诉时间]]></xhtml:label>
  <xui:place control="startDate1" id="controlPlace8" style="position:absolute;left:63px;top:10px;"></xui:place>
  <xhtml:label id="label6" style="position:absolute;top:13px;left:239px;" class="xui-label"><![CDATA[至]]></xhtml:label>
  <xui:place control="endDate1" id="controlPlace13" style="position:absolute;top:10px;left:266px;"></xui:place>
  <xui:place control="trigger2" id="controlPlace18" style="position:absolute;top:8px;left:431px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar1" mode="IMG_TXT_LR" report="report2">
   <item name="report-page-setup-item" id="barItem7"></item>
   <item name="report-preview-item" id="barItem8"></item>
   <item name="report-print-item" id="barItem9"></item></xui:bar>
  <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar1" mode="IMG_TXT_LR" report="report2">
   <item name="report-export-pdf-item" id="barItem10"></item>
   <item name="report-export-word-item" id="barItem11"></item>
   <item name="report-export-excel-item" id="barItem12"></item></xui:bar></xhtml:div>
  <xforms:input id="startDate1" ref="data('data3')/startDate1" readonly="true"></xforms:input>
  <xforms:input id="endDate1" ref="data('data3')/endDate1" format="yyyy-MM-dd" readonly="true"></xforms:input>
  <xforms:trigger id="trigger2">
   <xforms:label id="default1"><![CDATA[查询]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>
  <xui:view auto-load="true" id="view8" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout8"><xui:place control="view9" id="controlPlace19" style="position:absolute;top:11px;left:13px;width:29px;height:22px;"></xui:place>
  <xui:place control="report2" id="controlPlace20" style="position:absolute;top:11px;left:13px;width:100%;height:100%;"></xui:place></layout>
  <xui:view auto-load="true" id="view9" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout9"><xui:place control="chart1" id="controlPlace21" style="position:absolute;left:5px;top:5px;height:5px;width:5px;"></xui:place></layout>
  <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart" auto-load="false" data-list="reportData2" id="chart1">
   <chart id="chart2">
    <config id="default9"><title id="default17" visible="false" position="TOP">Justep图表</title></config>
    <series-set id="series-set1"><series id="chartSeries2" chart-type="vertical-bar" name="verticalbarchart">
  <config id="config2"><category-title id="default18">严重程度</category-title>
  
  <serie-title id="default20">投诉记录数</serie-title>
  <category-item-label-angle id="default25">30</category-item-label-angle>
  
  <serie-number-format id="default32">####.0</serie-number-format>
  <category-item-label-visible id="default36">true</category-item-label-visible>
  <category-item-label-number-format id="default37">######</category-item-label-number-format>
  <category-item-margin id="default33">0.1</category-item-margin>
  <category-item-max-width id="default38">0.2</category-item-max-width></config>
  <data title="SEVERITY1" categoryAxis="SEVERITY1" numberAxis="COUNT1" ref="reportData2" autoData="true" id="data2"></data></series></series-set></chart> </xhtml:div></xui:view>
  <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="new_xls_severity.xls" auto-load="true" data-list="reportData1" id="report2"><layout-content id="default4"><![CDATA[]]></layout-content></xhtml:div></xui:view></xui:view>  
    </view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</window>
