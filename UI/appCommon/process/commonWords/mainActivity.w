
<xui:window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window"
	xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<xforms:model id="model1" style="top:102px;left:16px;">
		<data component="/UI/system/components/data.xbl.xml#bizData"
			offset="0" limit="-1" update-mode="whereVersion" auto-load="true" id="dCommonWords"
			concept="AP_CommonWords" store-type="grid">
			<reader action="/appCommon/logic/action/queryCommonWordsAction" />
			<writer action="/appCommon/logic/action/saveCommonWordsAction" />
			<creator action="/appCommon/logic/action/createCommonWordsAction" />
			<rule relation="fAP_CommonWords" required="true()" alert="'常用语不能为空'" />
		</data>
	</xforms:model>
	<xui:view id="rootView" auto-load="true">
		<xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars"
			id="toolbars1">
			<xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar"
				id="navigatorBar1" data="dCommonWords">
				<item name="insert-item" />
				<item name="save-item" />
				<item name="delete-item" />
				<item name="refresh-item" />
			</xui:bar>
		</xhtml:div>
		<xhtml:div component="/UI/system/components/grid.xbl.xml#grid"
			show-header-menu="hide-column,save-layout,group-column,adjust-column"
			id="grid1" data="dCommonWords" edit-mode="true">
			<column ref="fCommonWords" label="常用语" type="ed" width="360" />
		</xhtml:div>
		<xui:layout style="height:100%;width:100%">
			<xhtml:table id="table1" style="height:100%;width:100%;"
				cellspacing="5" cellpadding="0">
				<xhtml:tr>
					<xhtml:td style="height:30px;">
						<place control="toolbars1" />
					</xhtml:td>
				</xhtml:tr>
				<xhtml:tr>
					<xhtml:td>
						<place control="grid1" style="width:100%;height:100%;" />
					</xhtml:td>
				</xhtml:tr>
			</xhtml:table>
		</xui:layout>
	</xui:view>
	<xui:resource>
		<xhtml:script src="mainActivity.js" />
	</xui:resource>
</xui:window>
