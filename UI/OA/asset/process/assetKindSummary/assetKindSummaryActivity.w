<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:284px;left:176px;"> 
    <data xmlns="" id="dReport" component="/UI/system/components/reportData.xbl.xml#data">  
    	<source>
      <SQL id="default1"> 
        <DEFAULT id="default2"/>  
        <ORACLE id="default3"/>  
        <MSSQL id="default4"/> 
      </SQL> 
    	</source>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="tempOrgID" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default40">  
        <row id="default41"> 
          <cell id="default42"/> 
        </row> 
      </rows> 
    </data>  
    <data xmlns="" id="dPie" component="/UI/system/components/reportData.xbl.xml#data">  
      <source>
      <SQL id="default15"> 
        <DEFAULT id="default26"/>  
        <ORACLE id="default33"/>  
        <MSSQL id="default34"/> 
      </SQL> 
      </source>
    </data>  
    <data xmlns="" id="dBar" component="/UI/system/components/reportData.xbl.xml#data">  
      <source>
      <SQL id="default23"> 
        <DEFAULT id="default35"/>  
        <ORACLE id="default36"/>  
        <MSSQL id="default37"/> 
      </SQL> 
      </source>
    </data>  
    <xforms:action id="action1" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript1">assetKindSummaryActivity.mdMainXBLLoaded(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrReport"> 
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar" report="mixedChart" mode="IMG_TXT_LR"> 
        <item name="report-page-setup-item" id="barItem1"/>  
        <item name="report-preview-item" id="barItem2"/>  
        <item name="report-print-item" id="barItem3"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar" report="mixedChart" mode="IMG_TXT_LR"> 
        <item name="report-export-pdf-item" id="barItem4"/>  
        <item name="report-export-word-item" id="barItem5"/>  
        <item name="report-export-excel-item" id="barItem6"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vMixedChart"> 
      <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="assetKindSummaryActivity.xls" report-name="图表混合报表" auto-load="false" id="mixedChart" data-list="" style="width:px;height:100%"> 
        <mapping id="default19"> 
          <data id="dReport" path="record"> 
            <FKIND path="FKIND" id="default10"/>  
            <FREMAINVALUE path="FREMAINVALUE" id="default11"/> 
          </data> 
        </mapping> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;" id="layout2"> 
        <place control="mixedChart" id="controlPlace5" style="height:100%;width:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vPie"> 
      <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="图表" auto-load="false" id="chartPie" style="width:500px;height:375px;;width:500px;height:375px">  
        <mapping id="default12"> 
          <data id="dPie" path="record"> 
            <FKIND path="FKIND" id="default16"/>  
            <FREMAINVALUE path="FREMAINVALUE" id="default17"/> 
          </data> 
        </mapping>  
        <chart id="chart2"> 
          <config id="default13"> 
            <title id="default19" visible="true" position="TOP">资产所占比例统计</title>  
            <title-font id="default22" name="黑体" style="0" size="18"/> 
          </config>  
          <series-set id="series-set1"> 
            <series id="chartSeriedReport" chart-type="pie" name="piechart" ref="dPie"> 
              <data categoryAxis="FKIND" numberAxis="FREMAINVALUE" ref="dPie" id="default18"/>  
              <config id="default20"> 
                <explode-all-percent id="default21" range="100" value="0.3D"/>
                <!--no-data-message：没有数据时显示内容-->
                <label-font name="宋体"         style="0" size="12"/>
                <no-data-message>没有数据</no-data-message> 
              </config> 
            </series> 
          </series-set> 
        </chart> 
      </xhtml:div>  
      <layout style="height:100%" id="layout2"> 
        <place control="chartPie" id="controlPlace7" style="width:500px;height:375px"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vBarChart"> 
      <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="图表" auto-load="false" id="chartBar" style="width:500px;height:375px;;width:500px;height:375px">  
        <mapping id="default8"> 
          <data id="dBar" path="record"> 
            <FKIND path="FKIND" id="default24"/>  
            <FREMAINVALUE path="FREMAINVALUE" id="default25"/> 
          </data> 
        </mapping>  
        <chart id="chart3"> 
          <config id="default14"> 
            <title id="default28" visible="true" position="TOP">柱图</title>  
            <title-font id="default29" name="黑体" style="0" size="18"/> 
          </config>  
          <series-set id="series-set2"> 
            <series id="chartSeries2" chart-type="vertical-bar" name="verticalbarchart" ref="dBar"> 
              <config id="default30"> 
                <category-title id="default31">资产类别</category-title>  
                <serie-title id="default32">金额（万）</serie-title>  
                <serie-number id="default45" start="0" end="2" visible="true" step="0.1" auto="true"/>  
                <category-item-label-angle id="default47">45</category-item-label-angle>  
                <serie-number-format id="default48">####.00</serie-number-format> 
              </config>  
              <data title="FKIND" categoryAxis="FKIND" numberAxis="FREMAINVALUE" ref="dBar" autoData="true" id="default44"/> 
            </series> 
          </series-set> 
        </chart> 
      </xhtml:div>  
      <layout id="layout3"> 
        <place control="chartBar" id="controlPlace4" style="width:500px;height:375px"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vFilter"> 
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect"> 
        <xforms:model id="model1"> 
          <xui:data component="/UI/system/components/data.xbl.xml#data" id="commData1"/> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSelect" data-ref="commData1" ref="data('dTemp')/tempOrgID" dropdown-height="200" default-label-ref="'选择组织'" multi-select="true" onCloseup="treeSelectCloseup"> 
          <xforms:itemset id="default39"/> 
        </xhtml:div> 
      </xhtml:div>  
      <layout style="height:100%;position:relative;" id="layout4" type="absolute"> 
        <xhtml:label id="htmlLabel1" style="position:absolute;font-size:9pt;width:63px;top:8px;left:2px;">组织机构：</xhtml:label>  
        <place control="orgSelect" id="controlPlace6" style="position:absolute;width:258px;top:1px;left:68px;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table border="0" id="table" style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default5"> 
          <xhtml:td id="td2" style="height:35px;width:100%" colspan="2"> 
            <place control="tbrReport" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default38"> 
          <xhtml:td id="td1" style="height:35px" colspan="2"> 
            <place control="vFilter" id="controlPlace5"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default6"> 
          <xhtml:td id="td4" align="center"> 
            <place control="vMixedChart" id="controlPlace2"/> 
          </xhtml:td>  
          <xhtml:td id="td5" style="display:none"> 
            <place control="vPie" id="controlPlace8"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetKindSummaryActivity.js"/> 
  </xui:resource> 
</xui:window>
