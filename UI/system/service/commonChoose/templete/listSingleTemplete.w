<window xmlns="http://www.justep.com/xui"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:f="http://orbeon.org/oxf/xml/formatting"
	xmlns:justep="http://www.justep.com/x5#"
	xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
	component="/UI/system/components/window.xbl.xml#window" xmlns:xui="http://www.justep.com/xui">
	<xforms:model id="listSingleChooseModel" style="top:93px;height:auto;left:110px;">
		<data id="main" component="/UI/system/components/data.xbl.xml#bizData"
			offset="0"
			limit="10"
			auto-load="true">
			<reader id="readerAction"/>
		</data>
	</xforms:model>
	<resource id="jsResource">
		<xhtml:script type="text/javascript"
			src="/UI/system/service/commonChoose/js/listSingleTemplete.js" />
		<xhtml:script type="text/javascript"
			src="/UI/system/service/commonChoose/js/commonChoosePara.js" />	
	</resource>
	<resource id="quickSearchFunction">
		<xhtml:script>
			<![CDATA[
			justep.windowDialogReceiver.acceptParentParamsFun = acceptData;
			function quickSearch(){
				if(!justep("quickSearch")) {
					alert("未继承quickSearch标签,快速搜索不能使用");
					return;
				}			
				var searchValue = justep("quickSearch").value;
				if(!searchValue || searchValue == ''){
					alert("未指定快速搜索查询语句，需重写quickSearch的value属性");
					return;
				}
				var key  = justep('quickSearchInput').value;
				if(key == '快速搜索……') key = '';
				if(key == '') searchValue = "";
				else searchValue = searchValue.replace(/\[QUICKTEXT]/g,key.toUpperCase());
				var data = justep.xbl('main');
				if(data){
					data.filters.setFilter('quickSearch' , searchValue);
				}
				data.refreshData();
			}
			]]>
		</xhtml:script>
	</resource>
	<view id="topView" style="height:100%;width:100%">
		<view id="configView">
			<xhtml:div style="display:none" id="configViewDiv">
				<xhtml:input value="sName" id="displayAlias" />
				<xhtml:input value="sName,sCode" id="returnAliasList"/>
				<xhtml:input value="" id="quickSearch"/>
			</xhtml:div>
		</view>
		<view id="toolbarView">
			<xhtml:div width="100%" height="40px" id="toolbarView-pageBar"
				component="/UI/system/components/toolbars.xbl.xml#toolbars">
				<bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar">
					<item name="custom-page-item"/>
					<item>
						<xhtml:input type="text"
							value="快速搜索……"
							id="quickSearchInput"
							style="border:1px solid #99BBE8;color:#C0C0C0;width:100px;"
							onfocus="if(this.value!='快速搜索……') return;this.style.color='black';this.value = ''"
							onkeyup="if (event.keyCode == 13) quickSearch();"
							onblur="if(this.value!='')return;this.style.color='#C0C0C0';this.value='快速搜索……'"/>					
					</item>
					<item>
						<xhtml:span alt="查询"
							style="height:20px; border:1px solid #ffffff;"
							onclick="quickSearch();">
							<xhtml:img src="/UI/system/images/search.gif" alt="查询" />
						</xhtml:span>
					</item>					
				</bar>
			</xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="wr" ></xhtml:div>
			<layout>
				<place control="toolbarView-pageBar"/>
  <xui:place control="wr" id="controlPlace1" style="top:92px;left:27px;"></xui:place>
			</layout>
		</view>
		<view id="listGridView">
			<xhtml:div component="/UI/system/components/grid.xbl.xml#grid"
					data="main" id="listGrid" style="height:100%;width:100%;" onRowDblClick="chooseData.gridRowDblClick">
			</xhtml:div>
			<layout style="height:100%;width:100%;overflow:auto">
				<place control="listGrid"/>
			</layout>
		</view>
		<view id="selectView">
			<xhtml:div id="selectViewDiv">
				<xhtml:div style="height:26px;filter:progid:DXImageTransform.Microsoft.Gradient(startColorStr='#98B2E6', endColorStr='#FFFFFF', gradientType='1');">
					<xhtml:table style="font-size:12px;">
						<xhtml:tr>
							<xhtml:td>&#160;选中列表</xhtml:td>
							<xhtml:td>
								<xhtml:span style="width:18px;MARGIN-RIGHT:auto; MARGIN-LEFT:auto;border:solid 0px #dfe8f6;display:inline;" onmouseover="this.style.border='1px ridge #dfe8f6';" onmouseout="this.style.border='1px solid #dfe8f6'" onmousedown="this.style.border='1px groove'" onmouseup="this.style.border='1px ridge'">
									<xforms:trigger appearance="minimal">
										<xforms:label>
											<xhtml:img style="border:none" alt="清除已选项" src="/UI/system/images/templete/reset_all.gif"/>
										</xforms:label>
										<xforms:action ev:event="DOMActivate">
											<xforms:script>
												chooseData.clearAllSelected();
											</xforms:script>
										</xforms:action>
									</xforms:trigger>
								</xhtml:span>
							</xhtml:td>
							<xhtml:td id="select-count" style="color:#FF0000">共<xhtml:font color="black" id="select-count-value">0</xhtml:font>项</xhtml:td>
						</xhtml:tr>
					</xhtml:table>
				</xhtml:div>
				<xhtml:div id="choose-parent"/>
			</xhtml:div>
		</view>
		<layout id="topLayout" style="width:100%;height:100%">
			<xhtml:table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%" style="table-layout:fixed" component="/UI/system/components/tableLayout.xbl.xml#tableLayout">
				<xhtml:tr height="30px">
					<xhtml:td colspan="2" valign="top" align="left">
						<place control="toolbarView" style="width:100%;height:100%"/>
						<place control="selectView" style="display:none"/>
					</xhtml:td>
				</xhtml:tr>
				<xhtml:tr>
					<xhtml:td colspan="2" valign="top" align="left">
						<place control="listGridView" style="width:100%;height:100%;"/>
					</xhtml:td>   
				</xhtml:tr>                         
				<xhtml:tr height="24px">       
					<xhtml:td valign="top" align="left" >
						<xhtml:input style="vertical-align:middle;padding-left:6px;padding-right:6px;" type="button" value="刷新" onclick="justep.windowReceiver.windowRefresh()" id="refresh-btn"/>
					</xhtml:td>
					<xhtml:td valign="top" align="right" >
						<xhtml:input style="vertical-align:middle;padding-left:6px;padding-right:6px;" type="button" value="确定" onclick="justep.windowReceiver.windowEnsure(windowSend())" id="ensure-btn"/>  
						<xhtml:input style="vertical-align:middle;padding-left:6px;padding-right:6px;" type="button" value="取消" onclick="justep.windowReceiver.windowCancel()" id="cancel-btn"/>                       
					</xhtml:td>
				</xhtml:tr>                                             
			</xhtml:table>
			<place control="configView"/>
		</layout>
	</view>
</window>