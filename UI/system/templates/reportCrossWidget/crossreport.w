<?xml version="1.0" encoding="UTF-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" id="window_1" xmlns:xforms="http://www.justep.com/xforms">  
   <xforms:model id="dataModel" style="height:auto;top:19px;left:23px;"> 
    <xhtml:div xmlns="" id="r1" component="/UI/system/components/reportData.xbl.xml#data">  
      <source> 
        <KSQL/>  
        <SQL> 
          <DEFAULT id="default1"/>  
          <ORACLE id="default2"/>  
          <MSSQL id="default3"/>  
          <DB2 id="default4"/>  
          <SYBASE id="default5"/> 
        </SQL> 
        <action />
      </source> 
    </xhtml:div>  

    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0" limit="20" update-mode="whereVersion" auto-load="true" id="b1" auto-new="false" store-type="simple"> 
      <reader id="default8"/>  
      <writer id="default9"/>  
      <creator id="default10"/> 
    </data> 
    
        <data id="c1" store-type="simple" columns="" component="/UI/system/components/data.xbl.xml#data"> 
      <rows xmlns="">  
        <row> 
          <cell/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>
  
  <xui:view id="view_1" auto-load="true"> 
    <xui:layout style="height:100%;wight:100%;"> 
      <xui:place control="crossReport" id="crossReport_c" style="width:100%;height:100%;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/report.xbl.xml#report" id="crossReport" src="reports/crossReport.xls" report-name="" auto-load="true" data-list=""></xhtml:div></xui:view> 
</xui:window>
