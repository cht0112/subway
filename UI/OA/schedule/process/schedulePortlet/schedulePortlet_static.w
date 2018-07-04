<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="/UI/appCommon/portletResource/portlet_table.js"/>  
    <xhtml:script src="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcalendar.js"/>  
    <xhtml:script src="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcommon.js"/>  
    <!--<xhtml:link href="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcalendar.css"
			rel="STYLESHEET" type="text/css"/>-->  
    <!--<xhtml:link href="/UI/appCommon/css/common.css" rel="STYLESHEET"
		type="text/css" />-->  
    <!--<xhtml:link rel="STYLESHEET" type="text/css"
		href="/UI/appCommon/portletResource/portlet_table.css" />-->  
    <xhtml:script id="htmlScript1" src="schedulePortlet_static.js"/>  
    <xhtml:style> <![CDATA[
				.tableClass {
				font-size: 15px;
				color: #000000;
				border: none;
				border-spacing: 0px;
				margin: 0;
				padding: 0px;
				width: 100%;
				overflow: hidden;
				table-layout: fixed;
				font-family: "黑体";
				text-decoration: none;
			}
			.tableClass a {			
				font-size:15px;
				color:#000000;
				text-decoration: none;
				white-space: nowrap;
				display: block;
				width: 100%;
				overflow: hidden;
				-o-text-overflow: ellipsis;
				text-overflow: ellipsis;
				font-family: "黑体";
			}
			.tableClass a:hover {
				text-decoration:underline;
				color:#0A73E9;
				font-size:15px;
			}
			]]> </xhtml:style> 
  </xui:resource>  
  <xforms:model id="mdMain" style="top:9px;left:17px;"> 
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">schedulePortlet_static.mdMainLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="width:100%;"> 
      <xhtml:table style="height:100%;width:100%;table-layout:fixed;" border="0" cellspacing="0" cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="text-align: center;" valign="top"> 
            <xhtml:div id="textDiv"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>
