<?xml version="1.0" encoding="UTF-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window"
	xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<xui:resource>
		<xhtml:script src="/UI/appCommon/portletResource/portlet_table.js" />
		<xhtml:script src="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcalendar.js" />
		<xhtml:script src="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcommon.js" />
		<!--<xhtml:link href="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcalendar.css"
			rel="STYLESHEET" type="text/css"/>-->
		<!--<xhtml:link href="/UI/appCommon/css/common.css" rel="STYLESHEET"
		type="text/css" />-->
		<!--<xhtml:link rel="STYLESHEET" type="text/css"
		href="/UI/appCommon/portletResource/portlet_table.css" />-->
		<xhtml:script id="htmlScript1" src="schedulePortlet_leader.js" />
		<xhtml:style>
			<![CDATA[
				.tableClass {
				font-size: 12.5px;
				color: #1f3a87;
				border: none;
				border-spacing: 0px;
				margin: 0;
				padding: 0px;
				width: 100%;
				overflow: hidden;
				table-layout: fixed;
				font-family: "宋体";
			}
			.tableClass tr {
				height: 18px;
			}
			.tableClass tr td a {			
				font-size:12.5px;
				color:#1f3a87;
				white-space: nowrap;
				text-decoration: none;
				display: block;
				width: 100%;
				overflow: hidden;
				-o-text-overflow: ellipsis;
				text-overflow: ellipsis;
				font-family: "宋体";
			}
			.tableClass tr td a:hover {
				text-decoration:underline;
				color:#0A73E9;
				font-size:12.5px;
			}
			.tableClass tfoot tr td {
				text-align: right;
				font-weight: bold;
			}
			]]>
		</xhtml:style>
	</xui:resource>
	<xforms:model id="mdMain" style="top:10px;left:18px;">
		<xforms:action id="action2" ev:event="onload">
		<xforms:script id="xformsScript2">mdMainload(event)</xforms:script></xforms:action>
	</xforms:model>
	<xui:view id="rootView">
		<xui:layout style="width:100%;">
		<xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0">
			<xhtml:tr height="148px">
				<xhtml:td style="text-align: center;" valign="top">
					<!--<xhtml:table id="textTable" style="width:100%;" class="portletTable"  cellspacing="0" cellpadding="0"></xhtml:table>-->
					<xhtml:div id="textDiv"/>
				</xhtml:td>
			</xhtml:tr>
			<xhtml:tr height="10px" style="text-align: center;">
				<xhtml:td align="right">
					<xhtml:div id="divCount" style="font:10pt;"/>
				</xhtml:td>
			</xhtml:tr>
		</xhtml:table>
		</xui:layout>
	</xui:view>
</xui:window>
