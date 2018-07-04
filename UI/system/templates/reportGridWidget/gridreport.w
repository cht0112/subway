<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" id="window_1">  
  <xforms:model id="dataModel" style="top:20px;height:auto;left:29px;"> 
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
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="b1" auto-new="false"
      store-type="simple"> 
      <reader id="default8"/>  
      <writer id="default9"/>  
      <creator id="default10"/> 
    </data> 
  </xforms:model>  
  <view id="view_1" auto-load="true"> 
    <layout style="height:100%;wight:100%;"> 
      <place control="gridReport" id="grid_c" style="width:100%;height:100%;"/>
    </layout>  
    <xhtml:div component="/UI/system/components/report.xbl.xml#report" id="gridReport"
      src="reports/grid.xls" report-name="" auto-load="true" data-list=""/>
  </view> 
</window>
