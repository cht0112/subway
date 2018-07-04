<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="window_1">  
  <xforms:model id="dataModel" style="top:209px;left:525px;"> 
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
        <action columns="MYVERSIONID,MOUNT,MOUNT1" name="defectAnalysisByVersion"
          type="action"/> 
      </source> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="xml"
      columns="projectID,projectName,productID,productName" src="" auto-load="false"
      id="cData" store-type="simple" auto-new="true"/>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="projectData1" concept="DEFECT_TRACK_PROJECT_INFO"> 
      <reader id="default10" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PROJECT_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="productData1" concept="DEFECT_TRACK_PRODUCT_INFO"> 
      <reader id="default11" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PRODUCT_INFOAction"/> 
    </data>  
    <data xmlns="" component="/UI/system/components/reportData.xbl.xml#data" id="ds2">  
      <source id="default9"> 
        <KSQL id="default12"/>  
        <SQL id="default13"> 
          <DEFAULT id="default14"/>  
          <ORACLE id="default15"/>  
          <MSSQL id="default20"/>  
          <DB2 id="default21"/>  
          <SYBASE id="default22"/> 
        </SQL>  
        <action columns="MYVERSIONID,MOUNT,MOUNT1" name="defectAnalysisByVersion"
          type="action" id="action2"/> 
      </source> 
    </data> 
  </xforms:model>  
  <view auto-load="true" id="view_11"> 
    <view auto-load="true" id="toolbarView"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars_1"> 
        <bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar"
          mode="IMG_TXT_LR" report="report1"> 
          <item name="report-page-setup-item"/>  
          <item name="report-preview-item"/>  
          <item name="report-print-item"/> 
        </bar>  
        <bar component="/UI/system/components/reportBar.xbl.xml#exportBar"
          id="exportBar" mode="IMG_TXT_LR" report="report1"> 
          <item name="report-export-pdf-item"/>  
          <item name="report-export-word-item"/>  
          <item name="report-export-excel-item"/> 
        </bar> 
      </xhtml:div> 
    </view>  
    <view auto-load="true" id="gridReportView"> 
      <layout id="layout1" style="width:100%;height:100%;" type="flow"> 
        <xui:place control="toolbars1" id="controlPlace1" style="width:216px;"/>  
        <xui:place control="view1" id="controlPlace3" style="width:753px;height:272px;"/>  
<!--        <xui:place control="view2" id="controlPlace2" style="width:619px;height:196px;"/>-->
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar"
          id="customBar1" style="width:160px;"> 
          <item id="customBarItem4"> 
            <xhtml:label id="label1" class="xui-label"><![CDATA[项目：]]></xhtml:label> 
          </item>  
          <item id="customBarItem1"> 
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
              label-separator="," value-separator="," ext-separator="," id="gridSelect1"
              ref="data('cData')/projectID" label-ref="data('cData')/projectName"
              onCloseup="mainActivity.gridSelect1Closeup"> 
              <xforms:label ref="PROJECT_NAME" id="default1"/>  
              <xforms:value ref="DEFECT_TRACK_PROJECT_INFO" id="default2"/>  
              <xforms:itemset id="default3" data="projectData" auto-load-data="true"> 
                <xforms:column ref="DEFECT_TRACK_PROJECT_INFO" visible="false" id="default16"/>  
                <xforms:column ref="PROJECT_NAME" id="default17"/> 
              </xforms:itemset> 
            </xhtml:div> 
          </item>  
          <item id="customBarItem5"> 
            <xhtml:label id="label2" class="xui-label"><![CDATA[产品：]]></xhtml:label> 
          </item>  
          <item id="customBarItem3"> 
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
              label-separator="," value-separator="," ext-separator="," id="gridSelect2"
              ref="data('cData')/productID" label-ref="data('cData')/productName"
              onDropdown="mainActivity.gridSelect2Dropdown"> 
              <xforms:label ref="PRODUCT_NAME" id="default6"/>  
              <xforms:value ref="DEFECT_TRACK_PRODUCT_INFO" id="default7"/>  
              <xforms:itemset id="default8" data="productData" auto-load-data="true"> 
                <xforms:column ref="DEFECT_TRACK_PRODUCT_INFO" visible="false" id="default18"/>  
                <xforms:column ref="PRODUCT_NAME" id="default19"/> 
              </xforms:itemset> 
            </xhtml:div> 
          </item>  
          <item id="customBarItem2"> 
            <xforms:trigger id="trigger2"> 
              <xforms:label id="default5"><![CDATA[查看]]></xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript1"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
      <xui:view auto-load="false" id="view1" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout2"> 
          <xui:place control="report1" id="controlPlace4" style="position:absolute;width:133%;height:218%;top:39px;left:0px;"/>
          <xui:place control="view2" id="controlPlace2" style="width:619px;top:0;height:426px;left:0;"/> 
        </layout>  
        <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="reports/mainActivity_gridReport.xls"
          report-name="report" auto-load="false" data-list="" id="report1"/>  
        <xui:view auto-load="true" id="view2" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout3">
            <xui:place control="chart1" id="controlPlace5" style="position:absolute;height:23px;width:24px;top:695px;left:104px;"></xui:place></layout>  
          <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart" auto-load="true" data-list="ds2" id="chart1">
   <chart id="chart2">
    <config id="default4">
     <title id="default23" visible="false" position="TOP">Justep图表</title></config> 
    <series-set id="series-set1">
     <series id="chartSeries1" chart-type="vertical-bar" name="verticalbarchart">
      <data ref="ds2" title="缺陷总数" categoryAxis="MYVERSIONID" numberAxis="MOUNT" id="data4"></data>
      <data ref="ds2" title="已关闭缺陷数" categoryAxis="MYVERSIONID" numberAxis="MOUNT1" id="data5"></data>
      <config id="config1">
       <category-title id="default24">缺陷</category-title>
       <serie-title id="default26">数量</serie-title>
       <category-item-label-number-format id="default27">######</category-item-label-number-format>
       <category-tick-label-font id="default29" name="黑体" style="3" size="12"></category-tick-label-font>
       <category-margin id="default31">0.4</category-margin>
       <serie-number id="default33" start="0" end="100" visible="true" step="10" auto="true"></serie-number>
       <category-item-label-font id="default35" name="黑体" style="0" size="10"></category-item-label-font>
       <category-item-margin id="default37">0.1</category-item-margin>
       <category-item-label-visible id="default38">true</category-item-label-visible>
       <category-item-label-angle id="default39">20</category-item-label-angle></config> </series> </series-set> </chart> </xhtml:div></xui:view> 
      </xui:view> 
    </view>  
    <layout style="height:100%;wight:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout_1" style="height:135%;"> 
        <top size="40px"> 
          <place control="toolbarView"/> 
        </top>  
        <center> 
          <place control="gridReportView" style="width:100%;height:82%;"/> 
        </center> 
      </xhtml:div> 
    </layout> 
  </view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</window>
