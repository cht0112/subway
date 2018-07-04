<?xml version="1.0" encoding="utf-8"?>
<window xmlns="http://www.justep.com/xui" xmlns:xu="http://www.xmldb.org/xupdate" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xui="http://www.justep.com/xui" 
	xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" extends="singleList.w">
	<data id="main" is-tree="true" limit="-1" offset="0" auto-load="true" xui:update-mode="merge"/>
	<xhtml:div component="/UI/system/components/grid.xbl.xml#grid" appearance="tree" id="grid" style="width:100%;height:100%;border:1px solid #D3D3D3;" xui:update-mode="replace-and-replace" 
		data="main" onRowDblClick="justep.SingleList.gridRowDblClick">
		<xui:column id="treeColumn" label="请指定树节点列" ref="" type="tree" readonly="true" width="100px"/>
	</xhtml:div>
	<xhtml:div id="smartFilter" component="/UI/system/components/quickLocate.xbl.xml#treeLocate" data="main" tree="grid" style="width:120px;" xui:update-mode="replace"/>
	<xhtml:img id="filterImg" xui:update-mode="delete"></xhtml:img>
	<item id="customPageItem" xui:update-mode="delete"></item>
</window>