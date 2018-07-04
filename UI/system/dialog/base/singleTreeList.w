<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="singleList.w" >

  <div id="rootLayout" xui:update-mode="delete"/>
  <div id="bl2-b" xui:update-mode="delete"/>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" id="treeMain" is-tree="true" limit="-1" offset="0" xui:parent="model" xui:update-mode="insert" />
    <xui:view auto-load="true" id="treeView" xui:parent="rootView" xui:update-mode="insert" >
<xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="quickLocateToolbar" >
<xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar" >
<item >
<xhtml:div component="/UI/system/components/quickLocate.xbl.xml#treeLocate" data="treeMain" id="treeLocate" style="width:120px;" tree="treeGrid" />
</item>
</xui:bar>
</xhtml:div>
<xhtml:div appearance="tree" component="/UI/system/components/grid.xbl.xml#grid" data="treeMain" id="treeGrid" style="border:1px solid #D3D3D3;width:100%;height:100%" >
<xui:column id="treeColumn" label="请指定树节点列" readonly="true" ref="" type="tree" width="100px" />
</xhtml:div>
<xui:layout id="treeLayout" style="height:100%;width:100%" >
<xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout5" style="width:100%; height:100%;" >
<top size="35px" >
<xui:place control="quickLocateToolbar" style="width:100%;height:100%" />
</top>
<center >
<place control="treeGrid" />
</center>
</xhtml:div>
</xui:layout>
</xui:view>
    <xui:layout id="rootLayout" style="height:100%;width:100%" xui:parent="rootView" xui:update-mode="insert" >
<xui:place control="config" id="configPlace" style="top:218px;left:32px;" />
<xui:place control="windowReceiver" id="windowReceiverPlace" style="top:13px;left:589px;" />
<xhtml:div border-size="8px" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="rootTable" style="width:100%; height:100%;" >
<center >
<xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="rootTable1" style="width:100%; height:100%;" >
<center >
<xhtml:div adjust-by-arrow="true" component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="35%" has-arrow-button="true" has-drag-bar="true" id="splitter1" mode="horz" style="width:100%;height:100%" >
<xhtml:div region="left" >
<place control="treeView" style="width:100%;height:100%;" />
</xhtml:div>
<xhtml:div region="right" >
<xui:place control="toolbarGridView" id="toolbarGridPlace" style="" />
</xhtml:div>
</xhtml:div>
</center>
<bottom size="4px" />
</xhtml:div>
</center>
<bottom size="22px" >
<xui:place control="buttonView" />
</bottom>
</xhtml:div>
</xui:layout>

</window>