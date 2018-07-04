<?xml version="1.0" encoding="UTF-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window"
	xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">
	<xforms:model id="model1" style="top:20px;left:10px;">
		<data component="/UI/system/components/data.xbl.xml#bizData"
			offset="1" limit="1" update-mode="whereVersion" auto-load="false"
			id="mainData" concept="OA_AS_CheckM" auto-new="true" store-type="simple">
			<reader id="default1" action="/OA/asset/logic/action/queryASCheckMAction" />
			<writer id="default2" action="/OA/asset/logic/action/saveASCheckMAction" />
			<creator id="default3" action="/OA/asset/logic/action/createASCheckMAction" />
		</data>
		<data component="/UI/system/components/data.xbl.xml#bizData"
			offset="1" limit="20" update-mode="whereVersion" auto-load="true"
			id="subData" concept="OA_AS_CheckD">
			<reader id="default4" action="/OA/asset/logic/action/queryASCheckDAction" />
			<writer id="default5" action="/OA/asset/logic/action/saveASCheckDAction" />
			<creator id="default6" action="/OA/asset/logic/action/createASCheckDAction" />
			<master id="master1" data="mainData" relation="fMasterID" />
		<calculate-relation relation="recNo" id="calculate-relation1"></calculate-relation></data>
	</xforms:model>
	<xui:view id="rootView">
		<xforms:output id="optNO" ref="data('mainData')/fNO"
			auto-size="true" />
		<xforms:input ref="data('mainData')/fDate" id="iptDate"
			format="yyyy-MM-dd" auto-size="true" />
		<xforms:textarea ref="data('mainData')/fRemark"
			id="taRemark" auto-size="true" />
		<xforms:textarea ref="data('mainData')/fCheckDepts"
			id="taCheckDepts" auto-size="true" />
		<xforms:textarea ref="data('mainData')/fCheckPsns"
			id="taCheckPsns" auto-size="true" />
		<xui:view id="vTbrAssetCheck">
			<xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars"
				id="tbrAssetCheck">
				<xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar"
					id="ngBarAssetCheck" data="subData">
					<item name="insert-item" id="barItem1" />
					<item name="delete-item" id="barItem2" />
					<item name="refresh-item" id="barItem3" />
					<item name="custom-page-item" id="pageItem" />
				</xui:bar>
			</xhtml:div>
			<xui:layout style="height:100%">
				<place control="tbrAssetCheck" />
			</xui:layout>
		</xui:view>
		<xui:view id="vGrdAssetCheck">
			<xhtml:div component="/UI/system/components/grid.xbl.xml#grid"
				show-header-menu="hide-column,save-layout,group-column,adjust-column"
				id="grdAssetCheck" data="subData">
				<column ref="recNo" type="ro" width="30" show-index="true" label="序号"/>
				<column id="gridColumn2" ref="fCheckItem" label="验收项" type="ed"
					width="120" />
				<column label="验收人" width="80" ref="fCheckPsn"
					type="ro"></column>
				<column label="情况说明" width="150" ref="fDescription"
					type="ed"></column>
				<column label="备注" width="144" ref="fRemark"
					type="ed"></column>
			</xhtml:div>
			<xui:layout style="height:100%;width:100%;">
				<place control="grdAssetCheck" style="width:100%;height:100%;" />
			</xui:layout>
		</xui:view>
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
		<xui:layout style="height:100%;width:100%;" type="excel"
			src="check.xls">
			<place control="vTbrAssetCheck" />
			<place control="vGrdAssetCheck" style="width:100%;"/>
		</xui:layout>
	</xui:view>
	<xui:resource>
		<xhtml:script id="htmlScript1" src="assetInCheck.js" />
		<xhtml:script type="text/javascript"
			src="/UI/system/components/windowDialog/FrameWindow.js" />
		<xhtml:link rel="STYLESHEET" type="text/css"
			href="/UI/appCommon/css/common.css" />
	</xui:resource>
</xui:window>
