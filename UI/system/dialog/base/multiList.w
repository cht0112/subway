<?xml version="1.0" encoding="utf-8"?>
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" 
	component="/UI/system/components/window.xbl.xml#window">
	<xforms:model id="model" style="top:105px;height:auto;left:22px;">
		<data id="main" component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="10" auto-load="true" onAfterRefreshPage="justep.MultiList._doPageChange">
			<calculate-relation relation="ch" type="xs:string"/>
		</data>
	</xforms:model>
	<xui:view id="rootView" auto-load="true">
		<xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver"/>
		
		<xhtml:div component="/UI/system/components/config.xbl.xml#config" id="config">
<!--			<item id="returnColumnId" name="returnColumn" label="返回列" value="" />-->
			<item id="displayColumnId" name="displayColumn" label="显示列" value="" />
		</xhtml:div>
		
		<xui:view id="toolbarGridView" auto-load="true">
			<xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars">
				<xui:bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar">
					<item>
						<xhtml:div style="width:100px" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="main" auto-refresh="true"/>
					</item>
					<item>
						<xhtml:img id="filterImg" src="/UI/system/images/search24.gif" alt="查询" onclick="xforms.blur();justep.xbl('main').refreshData();"/>
					</item>
					<item id="customPageItem" name="custom-page-item" page-count="0" items="pre,next,ext"/>
				</xui:bar>
			</xhtml:div>
			<xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="main" multi-selection="true" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid" 
				onRowChecked="justep.MultiList._doCheckRow" onRowCheckedAll="justep.MultiList._doCheckAll" style="width:100%;height:100%;border:1px solid #D3D3D3;">
				<column label="#master_checkbox" width="30px" align="center" ref="ch" type="checkbox" select-ref="ch"/>
			</xhtml:div>
			<xui:layout style="height:100%;width:100%" id="toolbarGridLayout">
	        <xhtml:div id="borderLayout3" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
	          <top size="35px" id="bl3-t"> 
	              <xui:place control="toolbars" style="width:100%;height:100%"/> 
	          </top>  
	          <center id="bl3-c"> 
	              <xui:place control="grid"/> 
	          </center>  
			  <bottom size="100px" id="bl3-b">
			  		<xui:place control="selectView" style="height:100px;width:100%"/>
	          </bottom> 
	        </xhtml:div> 
			</xui:layout>
			<xui:view id="selectView" auto-load="true">
		        <xhtml:div id="borderLayout4" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
                  <top size="28px" id="bl4-t"> 
					<xhtml:div id="selectBar" class="multi-select-bar" style="height:100%;">
						<xhtml:div style="float:left;margin-top:6px;" id="d1">选中列表</xhtml:div>
						<xhtml:div class="multi-select-count" style="float:left;margin-top:6px;" onselectstart="return false;" id="d2">(共0项):</xhtml:div>
						<xhtml:div class="multi-delete-img" style="float:right;visibility:hidden;margin-right:2px;border:1px solid #ffffff;padding:2px;" 
							onmouseover="if(!this.getAttribute('_disabled'))this.style.border='1px ridge #dfe8f6'" onmouseout="this.style.border='1px solid #ffffff'" 
							onselectstart="return false;" onclick="justep.MultiList.removeAllRow()" id="d3">
							<xhtml:img alt="全部删除" src="/UI/system/images/templete/reset.gif" id="i1"/>
							<xhtml:span style="cursor:pointer;">全部删除</xhtml:span>
						</xhtml:div>
					</xhtml:div>
				  </top>
                  <center style="border:1px solid #D3D3D3;" id="bl4-c"> 
                    <xhtml:div id="selectHome" style="height:100%;overflow-y:auto"/> 
                  </center>
                  <bottom size="4px" id="bl4-b"/> 
                </xhtml:div> 
			</xui:view>
		</xui:view>
		<xui:view id="buttonView" auto-load="true">
			<xhtml:button class="xui-button dialog-button-refresh" onclick="justep.MultiList.windowRefresh()" id="refresh-btn">刷新</xhtml:button>
			<xhtml:button class="xui-button dialog-button-ok" onclick="justep.MultiList.windowCancel()" id="cancel-btn">取消</xhtml:button>
			<xhtml:button class="xui-button dialog-button-cancel" onclick="justep.MultiList.windowOK()" id="ensure-btn">确定</xhtml:button>
		</xui:view>
		<xui:layout style="height:100%;width:100%" id="rootLayout">
			<xui:place control="config" style="top:166px;left:22px;"/>
			<xui:place control="windowReceiver" id="controlPlace3" style="top:110px;left:206px;"/>
		      <xhtml:div id="rootTable" border-size="8px" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
		            <center id="bl1-c">
		            	<xui:place control="toolbarGridView" id="toolbarGridPlace"/>
		            </center>
		            <bottom size="22px" id="bl1-b">
		            	<xui:place control="buttonView"/>
		            </bottom> 
		      </xhtml:div> 
		</xui:layout>
	</xui:view>
	<xui:resource id="resource">
		<xhtml:script id="htmlScript1" src="/UI/system/dialog/base/multiList.js"/>
		<xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="/UI/system/dialog/base/dialog.css"></xhtml:link>
		<xhtml:style>
			.multi-select-bar { 
				white-space:nowrap; height:20px;
			}
			.multi-select-bar div{ 
				vertical-align : middle; 
				text-align:center; } 
			.multi-select-bar img { 
				vertical-align : middle; 
				line-height:24px; 
			} 
			.multi-select-item{ 
				float:left; 
				white-space:nowrap; 
				vertical-align:middle; 
				height:20px; 
				line-height:20px; <!--background-color:#b1c5ec;--> <!-- border:1px solid #e3ebf7;-->
			 } 
			 .multi-select-item img{ 
			 	margin-right:2px; 
			 } 
			 .multi-delete-img{ 
			 	cursor:hand;
			 	margin-top:2px 
			 } 
		</xhtml:style>
	</xui:resource>
</xui:window>