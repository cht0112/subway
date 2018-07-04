<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" id="window_1">  
  <xforms:model id="dataModel" style="top:209px;left:525px;"> 
    <data xmlns="" id="r1" component="/UI/system/components/reportData.xbl.xml#data">  
      <source> 
        <KSQL/>  
        <SQL> 
          <DEFAULT/>  
          <ORACLE/>  
          <MSSQL/>  
          <DB2/>  
          <SYBASE/> 
        </SQL>  
        <action/> 
      </source> 
    </data>  
    <data id="c1" store-type="simple" columns="" component="/UI/system/components/data.xbl.xml#data"> 
      <rows xmlns="">  
        <row> 
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0" limit="20" update-mode="whereVersion" auto-load="true" id="b1" auto-new="false" store-type="simple"> 
      <reader id="default8"/>  
      <writer id="default9"/>  
      <creator id="default10"/> 
    </data> 
  </xforms:model>  
  <view id="view_1" auto-load="true"> 
    <view id="toolbarView" auto-load="true"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars_1"> 
        <bar component="/UI/system/components/reportBar.xbl.xml#printBar" report="groupReport" id="printBar" mode="IMG_TXT_LR"> 
          <item name="report-page-setup-item"/>  
          <item name="report-preview-item"/>  
          <item name="report-print-item"/> 
        </bar>  
        <bar component="/UI/system/components/reportBar.xbl.xml#exportBar" report="groupReport" id="exportBar" mode="IMG_TXT_LR"> 
          <item name="report-export-pdf-item"/>  
          <item name="report-export-word-item"/>  
          <item name="report-export-excel-item"/> 
        </bar> 
      </xhtml:div> 
    </view>  
    <view id="groupReportView" auto-load="true"> 
      <xhtml:div component="/UI/system/components/report.xbl.xml#report" id="groupReport" src="reports/groupGrid.xls" report-name="" auto-load="true" data-list=""/>  
      <layout id="layout1" type="flow" style="width:100%;height:100%;"> 
        <place control="groupReport" id="group_c" style="width:100%;height:100%;"/> 
      </layout> 
    </view>  
    <layout style="height:100%;wight:100%;"> 

          <xhtml:div id="borderLayout_1" style="height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
            <top size="40px"> 
              <place control="toolbarView"/> 
            </top>
            <center> 
              <place control="groupReportView" style="height:100%;width:100%;"/> 
            </center>  
          </xhtml:div> 
          

    </layout> 
  </view> 
</window>
