<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="window_1">  
  <xforms:model id="dataModel" style="top:236px;height:auto;left:205px;"> 
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
      <xui:place control="chart" id="controlPlace1" style="height:100%;width:100%;"/> 
    </layout>  
    <xhtml:div xmlns="" component="/UI/system/components/chart.xbl.xml#chart" id="chart" chart-name="统计图表"
      auto-load="true" data-list="">  
      <chart> 
        <config/>  
        <series-set> 
          <series chart-type="" ref=""> 
            <config/> 
          </series> 
        </series-set> 
      </chart> 
    </xhtml:div> 
  </view> 
</window>
