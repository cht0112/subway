
<xui:window xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
	xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://www.justep.com/xui"
	xmlns:xui="http://www.justep.com/xui"
	component="/UI/system/components/window.xbl.xml#window">
	<xui:resource>
		<xhtml:script src="/UI/appCommon/templates/pubBaseCode/pubBaseCodeActivity.js" />
	</xui:resource>
	<xforms:model id="model1" style="top:466px;left:16px;">
		<data component="/UI/system/components/data.xbl.xml#bizData"
			offset="0" limit="20" update-mode="whereVersion" auto-load="true"
			id="dPubBaseCode" concept="Test_Pub_BaseCode" 
			order-by="fSequence:asc" onValueChanged="dPubBaseCodeValueChanged">
			<reader action="/appCommon/data/queryPubBaseCodeAction" />
			<writer action="/appCommon/data/savePubBaseCodeAction" />
			<creator action="/appCommon/data/createPubBaseCodeAction" />
			<rule relation="fName" required="true()" alert="'名称必填!'" />
			<rule relation="fUseStatus" default-value='\"0\"' />
			<rule relation="fUseStatusName" default-value='\"未启用\"' />
		</data>
		<data component="/UI/system/components/data.xbl.xml#data"
			columns="startUse,stopUse" src="" auto-load="true" id="dBtnStatus"
			store-type="simple">
			<rows xmlns="">
				<row>
				</row>
			</rows>
		</data>
		<xforms:bind nodeset="instance('dBtnStatus')/startUse"
			readonly="instance('dPubBaseCode')/fUseStatus = '1'" />
		<xforms:bind nodeset="instance('dBtnStatus')/stopUse"
			readonly="not(instance('dPubBaseCode')/fUseStatus = '1')" />
	</xforms:model>
	<xui:view id="rootView" auto-load="true">
		<xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars"
			id="tbrListToolbar">
			<xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar"
				id="ngaListBar" data="dPubBaseCode" mode="IMG_TXT_LR">
				<item name="insert-item" />
				<item name="save-item" />
				<item name="delete-item" readonly="instance('dPubBaseCode')/fUseStatus != '0'" />
				<item name="refresh-item" />
				<item name="filter-item" />
				<item name="filter-pattern-item" />
  <item name="custom-page-item" id="barItem1"></item>
				<item name="separator" />
				<item name="startUse">
					<xforms:trigger appearance="image"
						id="trgStartUse"
						ref="instance('dBtnStatus')/startUse"
						src="/UI/appCommon/images/start_use.gif"
						dis-src="/UI/appCommon/images/un_start_use.gif">
						<xforms:label>启用</xforms:label>
						<xforms:action ev:event="DOMActivate">
							<xforms:script>
							<![CDATA[
								startUseFun();
							]]>
							</xforms:script>
						</xforms:action>
					</xforms:trigger>
				</item>
				<item name="allUse">
					<xforms:trigger appearance="image"
						id="trgAllUse"
						src="/UI/appCommon/images/all_use.gif"
						dis-src="/UI/appCommon/images/all_use.gif">
						<xforms:label>全部启用</xforms:label>
						<xforms:action ev:event="DOMActivate">
							<xforms:script>
							<![CDATA[
								useAllFun();
							]]>
							</xforms:script>
						</xforms:action>
					</xforms:trigger>
				</item>
				<item name="stopUse">
					<xforms:trigger appearance="image"
						id="trgStopUse"
						ref="instance('dBtnStatus')/stopUse"
						src="/UI/appCommon/images/stop_use.gif"
						dis-src="/UI/appCommon/images/un_stop_use.gif">
						<xforms:label>停用</xforms:label>
						<xforms:action ev:event="DOMActivate">
							<xforms:script>
							<![CDATA[
								stopUseFun();
							]]>
							</xforms:script>
						</xforms:action>
					</xforms:trigger>
				</item>
			</xui:bar>
		</xhtml:div>
		<xhtml:div component="/UI/system/components/grid.xbl.xml#grid"
			show-header-menu="hide-column,save-layout,group-column,adjust-column"
			id="listGrid" data="dPubBaseCode" edit-mode="true">
			<column ref="fUseStatusName" label="启用状态" type="ro" width="60" align="center"/>
			<column ref="fSequence" label="排序" type="ed" width="60" />
			<column ref="fCode" label="编码" type="ed" width="100" />
			<column ref="fName" label="名称" type="ed" width="150" />
			<column ref="fType" label="类型" type="ed" width="80" />
			<column ref="fDescription" label="描述" type="ed" width="280" />
		</xhtml:div>
		<xui:layout style="height:100%;width:100%">
			<xhtml:table style="width:100%;height:100%;cellspacing:0px;table-layout:fixed;">
				<xhtml:tr>
					<xhtml:td style="height:35px;">
						<place control="tbrListToolbar" />
					</xhtml:td>
				</xhtml:tr>
				<xhtml:tr>
					<xhtml:td>
						<place control="listGrid" style="width:100%;height:100%;" />
					</xhtml:td>
				</xhtml:tr>
			</xhtml:table>
		</xui:layout>
	</xui:view>
</xui:window>
