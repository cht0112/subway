<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;left:626px;top:71px;"> 
    <data xmlns="" component="/UI/system/components/reportData.xbl.xml#data" id="ds1">  
      <source id="default1"> 
        <KSQL id="default2"/>  
        <SQL id="default3"> 
          <DEFAULT id="default4"/>  
          <ORACLE id="default5"/>  
          <MSSQL id="default6"/>  
          <DB2 id="default7"/>  
          <SYBASE id="default8"/> 
        </SQL>  
        <action columns="MYVERSIONID,MOUNT,MOUNT1" name="defectAnalysisByVersion"
          type="action" id="action1"/> 
      </source> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="xml"
      columns="projectID,projectName,productID,productName" src="" auto-load="false"
      id="cData" store-type="simple" auto-new="true"/>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="projectData" concept="DEFECT_TRACK_PROJECT_INFO"> 
      <reader id="default10" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PROJECT_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="productData" concept="DEFECT_TRACK_PRODUCT_INFO"> 
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
    <data xmlns="" id="ds11" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default58"> 
        <action id="default59" name="defectAnalysisByPriority" columns="PRIORITY_NAME,MOUNT,MOUNT1"
          type="action"/> 
      </source> 
    </data>  
    <data xmlns="" id="ds22" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default61"> 
        <action id="default62" name="defectAnalysisByPriority" columns="PRIORITY_NAME,MOUNT,MOUNT1"
          type="action"/> 
      </source> 
    </data> 
  <data xmlns="" id="ds111" component="/UI/system/components/reportData.xbl.xml#data">
   <source id="default71"><action id="default73" name="defectAnalysisBySeverity" columns="SEVERITY_NAME,MOUNT,MOUNT1" type="action"></action></source></data>
  <data xmlns="" id="ds222" component="/UI/system/components/reportData.xbl.xml#data">
   <source id="default72"><action id="default74" name="defectAnalysisBySeverity" columns="SEVERITY_NAME,MOUNT,MOUNT1" type="action"></action></source></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="productData1" concept="DEFECT_TRACK_PRODUCT_INFO">
   <reader id="default75" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PRODUCT_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="projectData1" concept="DEFECT_TRACK_PROJECT_INFO">
   <reader id="default76" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PROJECT_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="projectData11" concept="DEFECT_TRACK_PROJECT_INFO">
   <reader id="default78" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PROJECT_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="productData11" concept="DEFECT_TRACK_PRODUCT_INFO">
   <reader id="default77" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PRODUCT_INFOAction"></reader></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
        class="xui-tabPanel" style="width:100%;height:800px;"> 
        <xui:tab id="tabPage1" xforms-select="defectBugAnalysis.tabPage1Select"> 
          <xui:label id="xuiLabel1"><![CDATA[按缺陷版本统计]]></xui:label>  
          <xui:place control="view_1" id="controlPlace11" style="height:100%;width:100%;"/> 
        </xui:tab>  
        <xui:tab id="tabPage2" xforms-select="defectBugAnalysis.tabPage2Select"> 
          <xui:label id="xuiLabel2"><![CDATA[按缺陷类型统计]]></xui:label>  
          <xui:place control="view9" id="controlPlace14" style="height:100%;width:100%;"/> 
        </xui:tab>  
        <xui:tab id="tabPage3" xforms-select="defectBugAnalysis.tabPage3Select"> 
          <xui:label id="xuiLabel3"><![CDATA[按缺陷等级统计]]></xui:label> 
          <xui:place control="view21" id="controlPlace15" style="height:100%;width:928px;"/>
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <view auto-load="true" id="view_1"> 
      <view auto-load="true" id="toolbarView"> 
        <xui:layout id="layout18"><xui:place control="toolbars7" id="controlPlace30" style="height:31px;width:628px;"></xui:place>
  <xui:place control="toolbars1" id="controlPlace1"></xui:place></xui:layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars7"><xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar4" report="report1" mode="IMG_TXT_LR">
   <item name="report-page-setup-item" id="barItem19"></item>
   <item name="report-preview-item" id="barItem20"></item>
   <item name="report-print-item" id="barItem21"></item></xui:bar>
  <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar4" mode="IMG_TXT_LR" report="report1">
   <item name="report-export-pdf-item" id="barItem22"></item>
   <item name="report-export-word-item" id="barItem23"></item>
   <item name="report-export-excel-item" id="barItem24"></item></xui:bar>
  </xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1">
   <item id="customBarItem1">
    <xhtml:label id="label1" class="xui-label">项目</xhtml:label></item> 
   <item id="customBarItem3">
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('cData')/projectID" label-ref="data('cData')/projectName" onCloseup="defectBugAnalysis.gridSelect1Closeup">
     <xforms:label ref="PROJECT_NAME" id="default16"></xforms:label>
     <xforms:value ref="DEFECT_TRACK_PROJECT_INFO" id="default17"></xforms:value>
     <xforms:itemset id="default18" data="projectData" auto-load-data="true">
      <xforms:column ref="DEFECT_TRACK_PROJECT_INFO" visible="false" id="default36"></xforms:column>
      <xforms:column ref="PROJECT_NAME" id="default40"></xforms:column></xforms:itemset> </xhtml:div> </item> 
   <item id="customBarItem2">
    <xhtml:label id="label2" class="xui-label">产品</xhtml:label></item> 
   <item id="customBarItem4">
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('cData')/productID" label-ref="data('cData')/productName" onDropdown="defectBugAnalysis.gridSelect2Dropdown">
     <xforms:label ref="PRODUCT_NAME" id="default19"></xforms:label>
     <xforms:value ref="DEFECT_TRACK_PRODUCT_INFO" id="default25"></xforms:value>
     <xforms:itemset id="default28" data="productData" auto-load-data="true">
      <xforms:column ref="DEFECT_TRACK_PRODUCT_INFO" visible="false" id="default32"></xforms:column>
      <xforms:column ref="PRODUCT_NAME" id="default34"></xforms:column></xforms:itemset> </xhtml:div> </item> 
   <item id="customBarItem5">
    <xforms:trigger id="trigger1">
     <xforms:label id="default30">查看</xforms:label>
     <xforms:action id="action3" ev:event="DOMActivate">
      <xforms:script id="xformsScript1">defectBugAnalysis.trigger1Click(event)</xforms:script></xforms:action> </xforms:trigger> </item> </xui:bar></xhtml:div></view>  
      <view auto-load="true" id="gridReportView"> 
        <layout id="layout1" style="width:100%;height:100%;" type="flow"> 
          <xui:place control="view1" id="controlPlace3" style="height:100%;width:100%;"/>  
          <!--        <xui:place control="view2" id="controlPlace2" style="width:619px;height:196px;"/>--> 
        </layout>  
        <xui:view auto-load="false" id="view1" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout2"> 
            <xui:place control="report1" id="controlPlace4" style="position:absolute;top:38px;width:100%;height:100%;left:7px;"/>  
            <xui:place control="view2" id="controlPlace2" style="width:619px;height:266px;top:157px;left:116px;"/> 
          </layout>  
          <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="reports/mainActivity_gridReport.xls"
            report-name="report" auto-load="false" data-list="" id="report1"/>  
          <xui:view auto-load="true" id="view2" class="xui-container"> 
            <layout type="absolute" style="position:relative;" id="layout3"> 
              <xui:place control="chart1" id="controlPlace5" style="position:absolute;height:23px;width:24px;top:695px;left:104px;"/> 
            </layout>  
            <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
              auto-load="true" data-list="ds2" id="chart1">  
              <chart id="chart2"> 
                <config id="default4"> 
                  <title id="default23" visible="false" position="TOP">Justep图表</title> 
                </config>  
                <series-set id="series-set1"> 
                  <series id="chartSeries1" chart-type="vertical-bar" name="verticalbarchart"> 
                    <data ref="ds2" title="缺陷总数" categoryAxis="MYVERSIONID"
                      numberAxis="MOUNT" id="data4"/>  
                    <data ref="ds2" title="已关闭缺陷数" categoryAxis="MYVERSIONID"
                      numberAxis="MOUNT1" id="data5"/>  
                    <config id="config1"> 
                      <category-title id="default24">缺陷</category-title>  
                      <serie-title id="default26">数量</serie-title>  
                      <category-item-label-number-format id="default27">######</category-item-label-number-format>  
                      <category-tick-label-font id="default29" name="黑体" style="3" size="12"/>  
                      <category-margin id="default31">0.4</category-margin>  
                      <serie-number id="default33" start="0" end="100" visible="true"
                        step="10" auto="true"></serie-number>  
                      <category-item-label-font id="default35" name="黑体" style="0" size="10"/>  
                      <category-item-margin id="default37">0.1</category-item-margin>  
                      <category-item-label-visible id="default38">true</category-item-label-visible>  
                      <category-item-label-angle id="default39">20</category-item-label-angle> 
                    <serie-number-format id="default67">####.0</serie-number-format></config> 
                  </series> 
                </series-set> 
              </chart> 
            </xhtml:div> 
          </xui:view> 
        </xui:view> 
      </view>  
      <layout style="height:100%;wight:100%;"> 
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout_12" style="height:100%;width:100%;"> 
          <top size="73px"> 
            <place control="toolbarView" style="height:83px;width:724px;"/> 
          </top>  
          <center> 
            <place control="gridReportView" style="width:100%;height:100%;"/> 
          </center> 
        </xhtml:div> 
      </layout> 
    </view>  
    <view auto-load="true" id="view9"> 
      <layout style="height:100%;wight:100%;"> 
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout_133" style="height:100%;width:100%;"> 
          <top size="85px"> 
            <place control="toolbarView1" style="height:45px;width:744px;"/> 
          </top>  
          <center> 
            <place control="gridReportView1" style="width:100%;height:100%;"/> 
          </center> 
        </xhtml:div> 
      </layout>  
      <view auto-load="true" id="toolbarView1"> 
        <layout type="absolute" style="position:relative;" id="layout11"> 
          <xui:place control="toolbars2" id="controlPlace6" style="position:absolute;height:40px;width:536px;left:1px;top:1px;"></xui:place>
  <xui:place control="toolbars3" id="controlPlace7" style="position:absolute;width:526px;height:34px;left:1px;top:36px;"></xui:place></layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar1" mode="IMG_TXT_LR" report="report3">
   <item name="report-page-setup-item" id="barItem1"></item>
   <item name="report-preview-item" id="barItem2"></item>
   <item name="report-print-item" id="barItem3"></item></xui:bar>
  <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar1" mode="IMG_TXT_LR" report="report3">
   <item name="report-export-pdf-item" id="barItem4"></item>
   <item name="report-export-word-item" id="barItem5"></item>
   <item name="report-export-excel-item" id="barItem6"></item></xui:bar></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"><xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar2"><item id="customBarItem6"><xhtml:label id="label3" class="xui-label"><![CDATA[项目]]></xhtml:label></item>
  <item id="customBarItem8"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('cData')/projectID" label-ref="data('cData')/projectName" onCloseup="defectBugAnalysis.gridSelect3Closeup">
   <xforms:label ref="PROJECT_NAME" id="default41"></xforms:label>
   <xforms:value ref="DEFECT_TRACK_PROJECT_INFO" id="default42"></xforms:value>
   <xforms:itemset id="default43" data="projectData1" auto-load-data="true"><xforms:column ref="DEFECT_TRACK_PROJECT_INFO" visible="false" id="default48"></xforms:column>
  <xforms:column ref="PROJECT_NAME" id="default49"></xforms:column></xforms:itemset></xhtml:div></item><item id="customBarItem7"><xhtml:label id="label4" class="xui-label"><![CDATA[产品]]></xhtml:label></item>
  <item id="customBarItem9"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('cData')/productID" label-ref="data('cData')/productName" onDropdown="defectBugAnalysis.gridSelect4Dropdown">
   <xforms:label ref="PRODUCT_NAME" id="default44"></xforms:label>
   <xforms:value ref="DEFECT_TRACK_PRODUCT_INFO" id="default45"></xforms:value>
   <xforms:itemset id="default46" data="productData1" auto-load-data="true"><xforms:column ref="DEFECT_TRACK_PRODUCT_INFO" visible="false" id="default50"></xforms:column>
  <xforms:column ref="PRODUCT_NAME" id="default51"></xforms:column></xforms:itemset></xhtml:div></item>
  <item id="customBarItem10"><xforms:trigger id="trigger2">
   <xforms:label id="default47"><![CDATA[查看]]></xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[defectBugAnalysis.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></item></xui:bar></xhtml:div></view>  
      <view auto-load="true" id="gridReportView1"> 
        <layout type="flow" style="width:100%;height:100%;" id="layout12"> 
          <!--<xui:place control="report3" id="controlPlace27" style="position:absolute;top:49px;left:5px;"/> -->  
          <xui:place control="view15" id="controlPlace26" style="position:absolute;top:49px;left:5px;"/>
        </layout>  
        <xui:view auto-load="false" id="view15" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout16"> 
            <xui:place control="view16" id="controlPlace29" style="position:absolute;top:205px;left:183px;width:531px;height:343px;"/>  
            <xui:place control="report3" id="controlPlace27" style="position:absolute;width:460%;height:361%;left:17px;top:-15px;"/> 
          </layout>  
          <xui:view auto-load="false" id="view16" class="xui-container"> 
            <layout type="absolute" style="position:relative;" id="layout17"> 
              <xui:place control="chart5" id="controlPlace28" style="position:absolute;left:5px;top:443px;width:40px;height:25px;"/> 
            </layout>  
            <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
              auto-load="true" data-list="" id="chart5">  
              <chart id="chart6"> 
                <config id="default60"> 
                  <title id="default63" visible="false" position="TOP">Justep图表</title> 
                </config>  
                <series-set id="series-set3"> 
                  <series id="chartSeries3" chart-type="vertical-bar" name="verticalbarchart"> 
                    <data ref="ds22" title="缺陷数量" categoryAxis="PRIORITY_NAME"
                      numberAxis="MOUNT" id="data1"/>  
                    <data ref="ds22" title="已关闭数量" categoryAxis="PRIORITY_NAME"
                      numberAxis="MOUNT1" id="data2"/>  
                    <config id="config2"> 
                      <category-title id="default64">缺陷类型</category-title>  
                      <category-margin id="default65">0.4</category-margin>  
                      <category-item-label-number-format id="default68">######</category-item-label-number-format>  
                      <category-item-label-angle id="default69">20</category-item-label-angle>  
                      <category-item-label-visible id="default70">true</category-item-label-visible>
                    <serie-number-format id="default79">####.0</serie-number-format></config> 
                  </series> 
                </series-set> 
              </chart> 
            </xhtml:div> 
          </xui:view>  
          <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="reports/byPriority.xls"
            report-name="report" auto-load="true" data-list="ds11" id="report3"/> 
        </xui:view> 
      </view> 
    </view> 
    <view auto-load="true" id="view21"> 
      <layout style="height:100%;wight:100%;"> 
        <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
          id="borderLayout_13" style="height:100%;width:100%;"> 
          <top size="74px"> 
            <place control="toolbarView11" style="height:72px;"/> 
          </top>  
          <center> 
            <place control="gridReportView11" style="width:100%;height:102%;"/> 
          </center> 
        </xhtml:div> 
      </layout>  
      <view auto-load="true" id="toolbarView11"> 
        <layout type="absolute" style="position:relative;" id="layout11"> 
          <xui:place control="toolbars4" id="controlPlace8" style="position:absolute;width:569px;height:38px;top:1px;left:1px;"></xui:place>
  <xui:place control="toolbars5" id="controlPlace9" style="position:absolute;height:34px;width:482px;left:1px;top:37px;"></xui:place></layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars4"><xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar2" mode="IMG_TXT_LR" report="report4">
   <item name="report-page-setup-item" id="barItem7"></item>
   <item name="report-preview-item" id="barItem8"></item>
   <item name="report-print-item" id="barItem9"></item></xui:bar>
  <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar2" mode="IMG_TXT_LR" report="report4">
   <item name="report-export-pdf-item" id="barItem10"></item>
   <item name="report-export-word-item" id="barItem11"></item>
   <item name="report-export-excel-item" id="barItem12"></item></xui:bar></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars5"><xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar3"><item id="customBarItem11"><xhtml:label id="label5" class="xui-label"><![CDATA[项目]]></xhtml:label></item>
  <item id="customBarItem13"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('cData')/projectID" label-ref="data('cData')/projectName" onCloseup="defectBugAnalysis.gridSelect5Closeup">
   <xforms:label ref="PROJECT_NAME" id="default52"></xforms:label>
   <xforms:value ref="DEFECT_TRACK_PROJECT_INFO" id="default53"></xforms:value>
   <xforms:itemset id="default54" data="projectData11" auto-load-data="true">
  <xforms:column ref="DEFECT_TRACK_PROJECT_INFO" visible="false" id="default80"></xforms:column>
  <xforms:column ref="PROJECT_NAME" id="default81"></xforms:column></xforms:itemset></xhtml:div></item><item id="customBarItem12"><xhtml:label id="label6" class="xui-label"><![CDATA[产品]]></xhtml:label></item>
  <item id="customBarItem14"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('cData')/productID" label-ref="data('cData')/productName" onDropdown="defectBugAnalysis.gridSelect6Dropdown">
   <xforms:label ref="PRODUCT_NAME" id="default55"></xforms:label>
   <xforms:value ref="DEFECT_TRACK_PRODUCT_INFO" id="default56"></xforms:value>
   <xforms:itemset id="default57" data="productData11" auto-load-data="true"><xforms:column ref="DEFECT_TRACK_PRODUCT_INFO" visible="false" id="default82"></xforms:column>
  <xforms:column ref="PRODUCT_NAME" id="default83"></xforms:column></xforms:itemset></xhtml:div></item>
  <item id="customBarItem15"><xforms:trigger id="trigger3">
   <xforms:label id="default66"><![CDATA[查看]]></xforms:label>
  <xforms:action id="action5" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[defectBugAnalysis.trigger3Click(event)]]></xforms:script></xforms:action></xforms:trigger></item></xui:bar></xhtml:div></view>  
      <view auto-load="true" id="gridReportView11"> 
        <layout type="flow" style="width:100%;height:100%;" id="layout12"> 
          <!--<xui:place control="report4" id="controlPlace27" style="position:absolute;top:49px;left:5px;"/> -->  
          <xui:place control="view55" id="controlPlace26" style="position:absolute;top:49px;left:5px;"/>
        </layout>  
        <xui:view auto-load="false" id="view55" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout16"> 
            <xui:place control="view23" id="controlPlace29" style="position:absolute;top:200px;height:320px;width:536px;left:66px;"/>  
            <xui:place control="report4" id="controlPlace27" style="position:absolute;height:361%;width:441%;top:-9px;left:16px;"/> 
          </layout>  
          <xui:view auto-load="false" id="view23" class="xui-container"> 
            <layout type="absolute" style="position:relative;" id="layout17"> 
              <xui:place control="chart16" id="controlPlace28" style="position:absolute;left:92px;top:450px;width:37px;height:19px;"/> 
            </layout>  
            <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" chart-name="chart"
              auto-load="true" data-list="" id="chart16">  
              <chart id="chart6"> 
                <config id="default60"> 
                  <title id="default63" visible="false" position="TOP">Justep图表</title> 
                </config>  
                <series-set id="series-set3"> 
                  <series id="chartSeries3" chart-type="vertical-bar" name="verticalbarchart"> 
                      
                      
                    <config id="config2"> 
                      <category-title id="default64">缺陷等级</category-title>  
                      <category-margin id="default65">0.4</category-margin>  
                      <category-item-label-number-format id="default68">######</category-item-label-number-format>  
                      <category-item-label-angle id="default69">20</category-item-label-angle>  
                      <category-item-label-visible id="default70">true</category-item-label-visible>
                    <serie-number-format id="default84">####.0</serie-number-format></config> 
                  <data ref="ds222" title="缺陷数量" categoryAxis="SEVERITY_NAME" numberAxis="MOUNT" id="data3"></data>
  <data ref="ds222" title="已关闭数量" categoryAxis="SEVERITY_NAME" numberAxis="MOUNT1" id="data6"></data></series> 
                </series-set> 
              </chart> 
            </xhtml:div> 
          </xui:view>  
          <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="reports/BySeverity.xls"
            report-name="report" auto-load="true" data-list="ds11,ds111" id="report4"/> 
        </xui:view> 
      </view> 
    </view>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="defectBugAnalysis.js"/> 
  </xui:resource> 
</xui:window>
