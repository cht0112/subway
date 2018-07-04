<?xml version="1.0" encoding="utf-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" 
	xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">
	<xforms:model id="model1" style="top:85px;left:143px;">
		<data component="/UI/system/components/data.xbl.xml#data" columns="ch,name,label" src="" auto-load="true" id="dActions" store-type="grid"/>
	</xforms:model>
	<xui:view id="rootView">
		<xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="selectProtectedActions.receiverReceive"/>
		<xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridActions" data="dActions" 
			onRowDblClick="selectProtectedActions.gridActionsRowDblClick">
			<xui:column id="gridColumn1" ref="ch" label="#master_checkbox" type="ch" width="30px" align="center"/>
			<xui:column id="gridColumn2" ref="name" label="name" type="ed" width="100px" visible="false"/>
			<xui:column id="gridColumn3" ref="label" label="动作" type="ro"/>
		</xhtml:div>
		<xui:layout id="rootLayout" type="flow" style="height:100%;width:100%;position:relative;">
			<xui:place control="receiver" id="controlPlace2" style="top:168px;left:206px;"/>
			<xhtml:table id="table1" component="/UI/system/components/tableLayout.xbl.xml#tableLayout" style="height:100%;width:100%;table-layout:fixed;" cellspacing="8" cellpadding="0" border="0">
				<xhtml:tr id="tr1">
					<xhtml:td id="td1">
						<xui:place control="gridActions" id="controlPlace1" 
							style="height:100%;width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/>
					</xhtml:td>
				</xhtml:tr>
				<xhtml:tr id="tr2" height="22px">
					<xhtml:td id="td3" align="right">
						<xhtml:input type="button" value="确定" id="btnOK" style="width:75px;" class="xui-button" onclick="selectProtectedActions.btnOKClick(event)"/>
						<xhtml:input type="button" value="取消" id="btnCancel" style="width:75px;" class="xui-button" onclick="selectProtectedActions.btnCancelClick(event)"/>
					</xhtml:td>
				</xhtml:tr>
			</xhtml:table>
		</xui:layout>
	</xui:view>
	<xui:resource id="resource1">
		<xhtml:script id="htmlScript1" src="selectProtectedActions.js"/>
		<xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>
	</xui:resource>
</xui:window>