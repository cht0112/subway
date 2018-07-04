<?xml version="1.0" encoding="UTF-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window"
	xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<xui:resource>
		<xhtml:script src="/UI/appCommon/portletResource/portlet_table.js" />
		<xhtml:script src="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcalendar.js" />
		<xhtml:script src="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcommon.js" />
		<xhtml:link href="/UI/OA/schedule/process/schedulePortlet/js/dhtmlxCalendar/dhtmlxcalendar.css"
			rel="STYLESHEET" type="text/css"/>
		<xhtml:link href="/UI/appCommon/css/common.css" rel="STYLESHEET"
		type="text/css" />
		<xhtml:link rel="STYLESHEET" type="text/css"
		href="/UI/appCommon/portletResource/portlet_table.css" />
		<xhtml:script id="htmlScript1" src="schedulePortlet.js" />
	</xui:resource>
	<xforms:model id="mdMain" style="top:10px;left:18px;">
		<xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[mdMainload(event)]]></xforms:script></xforms:action></xforms:model>
	<xui:view id="rootView">
		<xui:layout style="width:100%;height:100%">
		<xhtml:table style="height:100%;width:100%;" border="0">
			<xhtml:tr>
				<xhtml:td style="text-align: left;" valign="top">
					<xhtml:table id="textTable" border="0" class="portletTable"></xhtml:table>
				</xhtml:td>
			</xhtml:tr>
			<xhtml:tr style="height:180px;">
				<xhtml:td align="center" valign="bottom">
					<xhtml:div id="dhtmlxCalendar" style="height:175px;"/>
				</xhtml:td>
			</xhtml:tr>
		</xhtml:table>
		</xui:layout>
	</xui:view>
</xui:window>
