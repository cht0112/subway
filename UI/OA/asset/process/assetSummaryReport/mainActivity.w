<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:418px;left:286px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="beginDate,endDate,query,dayNum,orgID" src="" auto-load="true" id="dTemp" style=";" store-type="simple"> 
      <rows xmlns="" id="default6">  
        <row id="default7"> 
          <cell id="default8"/>  
          <cell id="default9"/>  
          <cell id="default10"/>  
          <cell id="default11"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="beginDate" type="xsd:date"/>  
      <rule id="dataRule2" column="endDate" type="xsd:date" alert='"结束时间数据格式不对"'/>  
      <rule id="dataRule3" column="dayNum" type="xsd:integer"/> 
    </data>  
    <data xmlns="" id="rData" component="/UI/system/components/reportData.xbl.xml#data" style=";">  
      <source id="default1"> 
      <action id="default29" name="assetSummaryMainAction" type="action"></action></source> 
    </data>  
    <data xmlns="" id="rDataD" component="/UI/system/components/reportData.xbl.xml#data" style=";">  
      <source id="default111"> 
      <action id="default30" name="assetSummaryDetailAction" type="action"></action></source> 
    </data>  
    <xforms:action id="action4" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript4">mainActivity.mdMainXBLLoaded(event)</xforms:script> 
    </xforms:action>  
    <data xmlns="" id="rDCharZT" component="/UI/system/components/reportData.xbl.xml#data" style=";">  
      <source id="default14"> 
      <action id="default32" name="assetSummaryZTAction" type="action"></action></source> 
    </data>  
    <data xmlns="" id="rDCharBT" component="/UI/system/components/reportData.xbl.xml#data" style=";">  
      <source id="default14"> 
      <action id="default33" name="assetSummaryBTAction" type="action"></action></source> 
    </data> 
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1">mainActivity.mdMainLoad(event)</xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table id="table1" class="xui-container" style="height:100%;width:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="tr3"> 
          <xhtml:td id="td5" height="35px" colspan="1"> 
            <xui:place control="toolbars1" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr1"> 
          <xhtml:td id="td2" height="30px" colspan="1"> 
            <xui:place control="vFilter" id="controlPlace5" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr2"> 
          <xhtml:td id="td1114" style="width:13px;display:none"> 
            <xui:place control="vChartZT" id="controlPlace2111"/>  
            <xui:place control="vChartBT" id="controlPlace1112"/> 
          </xhtml:td>  
          <xhtml:td id="td4" align="center"> 
            <xui:place control="vDetail" id="controlPlace3"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar1" style=";" report="report" mode="IMG_TXT_LR"> 
        <item name="report-page-setup-item" id="barItem1"/>  
        <item name="report-preview-item" id="barItem2"/>  
        <item name="report-print-item" id="barItem3"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar1" style=";" report="report" mode="IMG_TXT_LR"> 
        <item name="report-export-pdf-item" id="barItem4"/>  
        <item name="report-export-word-item" id="barItem5"/>  
        <item name="report-export-excel-item" id="barItem6"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout1" style="height:100%;width:100%;"> 
        <xui:place control="report" id="controlPlace4" style="width:100%;height:100%;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="assetSummaryReport.xls" report-name="report" auto-load="false" data-list="" id="report"/> 
    </xui:view>  
    <xui:view auto-load="true" id="vFilter" class="xui-container"> 
      <layout id="layout2" style="position:relative;width:100%;height:100%;" type="cell.excel" src="filter.xls"/>  
      <xforms:input id="iptBeginDate" class="xui-autofill" ref="data('dTemp')/beginDate" format="yyyy-MM-dd" readonly="true"/>  
      <xforms:input id="iptEndDate" class="xui-autofill" ref="data('dTemp')/endDate" format="yyyy-MM-dd" readonly="true"/>  
      <xforms:trigger id="trgQuery" style="cursor:hand;" appearance="image" src="/UI/appCommon/images/search.png" ref="data('dTemp')/query"> 
        <xforms:label id="xuiLabel1">查询</xforms:label>  
        <xforms:action id="action3" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript3">mainActivity.trgQueryClick(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:input id="iptDay" class="xui-autofill" ref="data('dTemp')/dayNum" input-regex="^[0-9]*[1-9][0-9]*$"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" class="xui-autofill" show-org-types="ogn,dpt" selectable-org-types="dpt" use-virtual-root="true"> 
        <xforms:model id="model1"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="bizData1"/> 
        </xforms:model>  
        <xhtml:div class="xui-autofill" component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSelect1" data-ref="bizData1" ref="data('dTemp')/orgID" multi-select="true" dropdown-height="250" default-label-ref="'全部'"> 
          <xforms:itemset id="default12"/> 
        </xhtml:div> 
      </xhtml:div> 
    </xui:view>  
    <xui:view auto-load="true" id="vChartZT" class="xui-container"> 
      <layout id="layout3" style="height:100%;width:100%;"> 
        <xui:place control="chartZT" id="controlPlace6"/> 
      </layout>  
      <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart" auto-load="false" data-list="rDCharZT" id="chartZT">  
        <chart id="chart2"> 
          <config id="default13"> 
            <title id="default18" visible="true" position="TOP">统计柱状图</title>  
            <title-font id="default26" name="黑体" style="0" size="16"/> 
          </config>  
          <series-set> 
            <series chart-type="vertical-bar-3d" ref="rDChar"> 
              <data title="单位：个" categoryAxis="FNAME" numberAxis="CT" ref="rDCharZT" color="#1E90FF" id="data1"/>  
              <config id="default19"> 
                <category-title id="default20">统计分类</category-title>  
                <category-item-label-angle id="default21">35</category-item-label-angle>  
                <category-item-label-visible id="default22">true</category-item-label-visible>  
                <category-item-label-number-format id="default23">######</category-item-label-number-format>  
                <category-margin id="default24">0.4</category-margin>  
                <serie-title id="default25">统计数据</serie-title>  
                <category-title-font id="default31" name="黑体" style="0" size="10"/> 
              </config> 
            </series> 
          </series-set> 
        </chart> 
      </xhtml:div> 
    </xui:view>  
    <xui:view auto-load="true" id="vChartBT" class="xui-container"> 
      <layout id="layout13" style="height:100%;width:100%;"> 
        <xui:place control="chartBT" id="controlPlace116"/> 
      </layout>  
      <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart" auto-load="false" data-list="rDCharBT" id="chartBT">  
        <chart id="chart112"> 
          <config id="default1113"> 
            <title id="default1118" visible="true" position="TOP">类别统计饼图</title>  
            <title-font id="default28" name="黑体" style="0" size="16"/> 
          </config>  
          <series-set> 
            <series id="chartSeries2" chart-type="pie" name="piechart"> 
              <data categoryAxis="FKINDNAME" numberAxis="AMOUNT" ref="rDCharBT" id="default3"/>  
              <config id="default15"> 
                <explode-all-percent id="default119" range="100" value="0.3D"/>  
                <map-tool-tip-number-format id="default17">######.00</map-tool-tip-number-format> 
                <!--no-data-message：没有数据时显示内容-->
                <label-font name="宋体"         style="0" size="12"/>
                <no-data-message>没有数据</no-data-message> 
              </config> 
            </series> 
          </series-set> 
        </chart> 
      </xhtml:div> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
