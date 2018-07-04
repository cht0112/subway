<?xml version="1.0" encoding="UTF-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:justep="http://www.justep.com/x5#"
	xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xs="http://www.w3.org/2001/XMLSchema"
	component="/UI/system/components/window.xbl.xml#window" xmlns:xforms="http://www.justep.com/xforms">
	<xforms:model id="model1" style="top:84px;left:101px;"></xforms:model>
	<view id="rootView">
		<xui:layout style="width:100%;height:100%">
			<xhtml:table height="100%" width="100%" style="table-layout:fixed;font-size:12px;" cellpadding="0" cellspacing="8" border="0">
				<xhtml:tr valign="middle" height="100%">
					<xhtml:td width="50px" valign="middle" align="right">
						<xhtml:img src="processing.gif" />
					</xhtml:td>
					<xhtml:td id="exportKind" valign="middle">正在生成PDF文档，请稍候...</xhtml:td>
				</xhtml:tr>
			</xhtml:table>
		</xui:layout>
	</view>
	<resource>
		<xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js" />
		<xhtml:script>
			justep.windowDialogReceiver.acceptParentParamsFun = function(event){
				var data = event.data;
				justep('exportKind').innerText = data;
			}
		</xhtml:script>
	</resource>
</xui:window>
