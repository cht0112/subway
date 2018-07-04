<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="window_1">  
  <xforms:model id="dataModel" style="top:206px;height:auto;left:334px;"> 
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
        <action columns="BUSINESSID,BUSINESSTYPENAME,taskToal,exampleTotal,weastTimeTotal"
          type="action" name="mytest"/> 
      </source> 
    </data>  
    <data xmlns="" id="chartTestTaskSummaryRD" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default9">
        <action id="default10" name="chartTestTaskAction" columns="BUSINESSID,BUSINESSTYPENAME,taskToal,exampleTotal,weastTimeTotal"
          type="action"/>
      </source>
    </data>  
    <data xmlns="" id="taskSummaryRD" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default11">
        <action id="default14" name="chartTestTaskSummaryAction" type="action"
          columns="BUSINESSID,BUSINESSTYPENAME,total,summaryType"/>
      </source>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="taskTimeData" concept="TEST_PROJECT_TASK_INFO" store-type="simple">
      <creator id="default24" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction"/>  
      <reader id="default25" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_TASK_INFOAction"/>  
      <writer id="default26" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction"/>
    </data>  
    <xforms:action id="action2" ev:event="onload">
      <xforms:script id="xformsScript2"><![CDATA[test.dataModelLoad(event)]]></xforms:script>
    </xforms:action> 
  </xforms:model>  
  <view auto-load="true" id="view_1"> 
    <view auto-load="true" id="toolbarView"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars_1"
        style="width:182px;"> 
        <bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar"
          report="gridReport"> 
          <item name="report-page-setup-item"/>  
          <item name="report-preview-item"/>  
          <item name="report-print-item"/> 
        </bar>  
        <bar component="/UI/system/components/reportBar.xbl.xml#exportBar"
          id="exportBar" report="gridReport"> 
          <item name="report-export-pdf-item"/>  
          <item name="report-export-word-item"/>  
          <item name="report-export-excel-item"/> 
        </bar> 
      </xhtml:div>  
      <xui:layout id="layout3"/> 
    </view>  
    <view auto-load="true" id="gridReportView"> 
      <xhtml:div auto-load="true" component="/UI/system/components/report.xbl.xml#report"
        data-list="ds1,chartTestTaskSummaryRD" id="gridReport" report-name="主从报表"
        src="reports/test_gridReport.xls"/>  
      <layout id="layout1" style="width:100%;height:100%;" type="flow"> 
        <xui:place control="view1" id="controlPlace1" style="height:1px;width:1px;position:relative;"/>  
        <place control="gridReport" id="grid_c" style="width:100%;height:100%;"/> 
      </layout>  
      <xui:view auto-load="true" id="view1" class="xui-container"> 
        <layout type="flow" style="height:1px;width:1px;position:relative;" id="layout2">
          <xui:place control="chart1" id="controlPlace2" style="height:100%;width:100%;"/>  
          <xui:place control="chartTask" id="controlPlace4" style="height:100%;width:100%;"/>  
          <xui:place control="chartTime" id="controlPlace3" style="height:100%;width:100%;"/>  
          <xui:place control="chart5" id="controlPlace5" style="height:100%;width:100%;"/>
        </layout>  
        <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
          auto-load="false" data-list="taskSummaryRD" id="chart1">  
          <chart id="chart2"> 
            <config id="default1">
              <title id="default4" visible="false" position="TOP"/>  
              <legend id="default17" visible="true" position="RIGHT"/>
            </config>  
            <series-set id="series-set1">
              <series id="chartSeries1" chart-type="vertical-bar" name="cylinderverticalbar3dchart"> 
                <config id="config1">
                  <category-title id="default2">分类</category-title>  
                  <serie-number id="default3" start="0" end="1000" visible="true" step="1"
                    auto="true"/>  
                  <category-item-label-visible id="default5">true</category-item-label-visible>  
                  <category-margin id="default6">0.1</category-margin>  
                  <category-upper-margin id="default7">0.2</category-upper-margin>  
                  <category-item-margin id="default15">0.0</category-item-margin>  
                  <category-item-max-width id="default16">0.1</category-item-max-width>
                </config>  
                <data title="summaryType" categoryAxis="BUSINESSTYPENAME" numberAxis="total"
                  ref="taskSummaryRD" autoData="true" id="data5"/>
              </series> 
            </series-set>
          </chart> 
        </xhtml:div>  
        <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
          auto-load="false" data-list="chartTestTaskSummaryRD" id="chartTask">  
          <chart id="chart6"> 
            <config id="default12">
              <title id="default13" visible="true" position="TOP">任务总数</title>  
              <legend id="default18" visible="true" position="RIGHT"/>
            </config>  
            <series-set id="series-set3">
              <series id="chartSeries2" chart-type="pie" name="piechart">
                <data categoryAxis="BUSINESSTYPENAME" numberAxis="taskToal"
                  ref="chartTestTaskSummaryRD" id="seriesData1"/>  
                <config id="config2">
	                <!--特定扇区突出率-->  
	                <!--index：扇区索引号，value：突出率值                      -->  
	                <explode-percent index="0" value="0.1D"/>  
	                <!--no-data-message：没有数据时显示内容-->
	                <!--<label-font name="宋体" style="0" size="12"/>-->
	                <no-data-message>no</no-data-message> 
                </config>
              </series>
            </series-set>
          </chart> 
        </xhtml:div>  
        <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
          auto-load="false" data-list="chartTestTaskSummaryRD" id="chartTime">  
          <chart id="chart4"> 
            <config id="default8">
              <title id="default19" visible="true" position="TOP">用例总数</title>  
              <legend id="default20" visible="true" position="RIGHT"/>
            </config>  
            <series-set id="series-set2">
              <series id="chartSeries3" chart-type="pie" name="piechart">
                <data categoryAxis="BUSINESSTYPENAME" numberAxis="exampleTotal"
                  ref="chartTestTaskSummaryRD" id="seriesData2"/>  
                <config id="config3">
                	<!--特定扇区突出率-->  
	                <!--index：扇区索引号，value：突出率值                      -->  
	                <explode-percent index="0" value="0.1D"/>  
	                <!--no-data-message：没有数据时显示内容-->
	                <label-font name="宋体" style="0" size="12"/>
	                <no-data-message>nono</no-data-message> 
                </config>
              </series>
            </series-set>
          </chart> 
        </xhtml:div>  
        <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
          auto-load="false" data-list="chartTestTaskSummaryRD" id="chart5">  
          <chart id="chart7"> 
            <config id="default21">
              <title id="default22" visible="true" position="TOP">计划工时总数</title>  
              <legend id="default23" visible="true" position="RIGHT"/>
            </config>  
            <series-set id="series-set4">
              <series id="chartSeries4" chart-type="pie-3d" name="piechart">
                <data categoryAxis="BUSINESSTYPENAME" numberAxis="weastTimeTotal"
                  ref="chartTestTaskSummaryRD" id="seriesData3"/>  
                <config id="config4">
	                <!--特定扇区突出率-->  
	                <!--index：扇区索引号，value：突出率值                      -->  
	                <explode-percent index="0" value="0.1D"/>  
	                <!--no-data-message：没有数据时显示内容-->
	                <label-font name="宋体"         style="0" size="12"/>
	                <no-data-message>没有数据</no-data-message> 
                </config>
              </series>
            </series-set>
          </chart> 
        </xhtml:div>
      </xui:view> 
    </view>  
    <layout style="height:100%;wight:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel_1"
        style="height:100%;width:100%;"> 
        <tab id="gridReportTab"> 
          <label>网格报表</label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout_1" style="height:100%;"> 
            <top size="30px"> 
              <place control="toolbarView"/>  
              <xui:place control="view2" id="controlPlace6" style="width:870px;height:62px;"/>
            </top>  
            <center> 
              <place control="gridReportView" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </tab> 
      </xhtml:div> 
    </layout>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;width:870px;height:62px;"
        id="layout4">
        <xui:place control="toolbars1" id="controlPlace7" style="position:absolute;width:344px;top:2px;height:25px;left:37px;"/>  
        <xui:place control="input1" id="controlPlace8" style="position:absolute;width:148px;top:4px;left:327px;"/>  
        <xhtml:label id="label1" style="position:absolute;top:9px;left:247px;" class="xui-label">任务制定期限</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;width:13px;top:10px;left:483px;"
          class="xui-label">至</xhtml:label>  
        <xui:place control="input2" id="controlPlace9" style="position:absolute;left:499px;top:5px;"/>  
        <xui:place control="trigger1" id="controlPlace10" style="position:absolute;top:4px;left:681px;"/>
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
        <xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar1"
          report="gridReport"> 
          <item name="report-page-setup-item" id="barItem1"/>  
          <item name="report-preview-item" id="barItem2"/>  
          <item name="report-print-item" id="barItem3"/>
        </xui:bar>  
        <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar"
          id="exportBar1" report="gridReport"> 
          <item name="report-export-pdf-item" id="barItem4"/>  
          <item name="report-export-word-item" id="barItem5"/>  
          <item name="report-export-excel-item" id="barItem6"/>
        </xui:bar>
      </xhtml:div>  
      <xforms:input id="input1" ref="data('taskTimeData')/pLANSTARTDATE" format="yyyy-MM-dd"/>  
      <xforms:input id="input2" format="yyyy-MM-dd" ref="data('taskTimeData')/pLANENDINGDATE"/>  
      <xforms:trigger id="trigger1"> 
        <xforms:label id="xuiLabel1">查询</xforms:label>  
        <xforms:action id="action1" ev:event="DOMActivate">
          <xforms:script id="xformsScript1">test.dataModelLoad(event)</xforms:script>
        </xforms:action>
      </xforms:trigger>
    </xui:view>
  </view>  
  <resource id="resource1">
    <xhtml:script id="htmlScript1" src="test.js"/>
  </resource>
</window>
