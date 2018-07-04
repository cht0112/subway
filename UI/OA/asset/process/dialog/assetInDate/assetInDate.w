<?xml version="1.0" encoding="UTF-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window"
	xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<xforms:model id="mdMain" style="top:15px;left:309px;">
		<data component="/UI/system/components/data.xbl.xml#data"
			columns="assetInDate" src="" auto-load="true" id="dAssetInDate"
			store-type="simple">
			<rows xmlns="" id="default2">
				<row id="default3">
					<cell id="default4" />
				</row>
			</rows>
			<rule id="dataRule1" column="assetInDate" type="xsd:date" />
		</data>
	
		<xforms:action id="action3" ev:event="onload">
		<xforms:script id="xformsScript3">mdMainload(event)</xforms:script></xforms:action></xforms:model>
	<xui:view id="rootView">
		<xforms:input ref="data('dAssetInDate')/assetInDate" id="iptDate"
			format="yyyy-MM-dd" auto-size="true" />
		<xforms:trigger id="trgOK">
			<xforms:label>确定</xforms:label>
			<xforms:action id="action1" ev:event="DOMActivate">
				<xforms:script id="xformsScript1">trgOKDOMActivate(event)
				</xforms:script>
			</xforms:action>
		</xforms:trigger>
		<xforms:trigger id="trgCancel">
			<xforms:label>取消</xforms:label>
			<xforms:action ev:event="DOMActivate">
				<xforms:script>trgCancelDOMActivate(event)
				</xforms:script>
			</xforms:action>
		</xforms:trigger>
		<xui:layout style="height:100%;" type="excel"
			src="inDate.xls">
		</xui:layout>
	</xui:view>
	<xui:resource>
		<xhtml:script id="htmlScript1" src="assetInDate.js" />
		<xhtml:script type="text/javascript"
			src="/UI/system/components/windowDialog/FrameWindow.js" />
		<xhtml:link rel="STYLESHEET" type="text/css"
			href="/UI/appCommon/css/common.css" />
	</xui:resource>
</xui:window>
