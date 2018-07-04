<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="multiList.w" >

  <div id="rootLayout" xui:update-mode="delete"/>
  <div id="btn-refresh" xui:update-mode="delete"/>
  <div id="controlPlace6" xui:update-mode="delete"/>
  <div id="bl4-b" xui:update-mode="delete"/>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" id="treeMain" is-tree="true" limit="-1" offset="0" xui:parent="model" xui:update-mode="insert" />
    <xui:layout xmlns:xui="http://www.justep.com/xui" id="rootLayout" style="height:100%;width:100%" xui:parent="rootView" xui:update-mode="insert" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="config" id="configPlace" style="top:218px;left:32px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="windowReceiver" id="windowReceiverPlace" style="top:24px;left:591px;" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" border-size="8px" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="rootTable" style="width:100%; height:100%;" >
<center >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="rootTable1" style="width:100%; height:100%;" >
<center >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" adjust-by-arrow="true" component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="35%" has-arrow-button="true" has-drag-bar="true" id="splitter1" mode="horz" style="width:100%;height:100%" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" region="left" >
<place control="treeView" style="width:100%;height:100%;" />
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" region="right" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="rightDiv" style="width:100%; height:100%;" >
<left border-size="2px" />
<center id="bl1-cp" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="toolbarGridView" id="toolbarGridPlacep" />
</center>
</xhtml:div>
</xhtml:div>
</xhtml:div>
</center>
<bottom size="4px" />
</xhtml:div>
</center>
<bottom size="38px" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="buttonView" />
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1_5" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="btn-refresh" id="controlPlace6" style="width:63px;" />
</xhtml:div>
</bottom>
</xhtml:div>
</xui:layout>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" id="treeView" xui:parent="rootView" xui:update-mode="insert" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" appearance="tree" class="ui-light xui-no-border" component="/UI/system/components/grid.xbl.xml#grid" data="treeMain" id="treeGrid" style="border:1px solid #D3D3D3;width:100%;height:100% " >
<xui:column xmlns:xui="http://www.justep.com/xui" id="treeColumn" label="请指定树节点列" readonly="true" ref="" type="tree" />
</xhtml:div>
<xui:layout xmlns:xui="http://www.justep.com/xui" id="treeLayout" style="height:100%;width:100%;" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout5" style="width:100%; height:100%;" >
<top size="38px" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3_1" >
<xui:place xmlns:xui="http://www.justep.com/xui" control="treeLocate" id="controlPlace2_1" style="width:120px;" />
</xhtml:div>
</top>
<center >
<place control="treeGrid" />
</center>
<right border-size="2px" >
</right>
</xhtml:div>
</xui:layout>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="ui-light" component="/UI/system/components/quickLocate.xbl.xml#treeLocate" data="treeMain" id="treeLocate" tree="treeGrid" />
</xui:view>
    <xforms:trigger xmlns:xforms="http://www.justep.com/xforms" appearance="minimal" component="/UI/system/components/trigger.xbl.xml#trigger" id="btn-refresh" xui:parent="rootView" xui:update-mode="insert" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default4" >




刷新页面</xforms:label>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="DOMActivate" id="action3" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript3" >




justep.MultiList.windowRefresh(event)</xforms:script>
</xforms:action>
</xforms:trigger>
   <xhtml:div id="buttonBar3" style="margin-left:5px;"  xui:update-mode="merge"/>
   <xhtml:div id="pagination1" first-label="&lt;&lt;" last-label=">>" next-label=">" pre-label="&lt;" items="pre next"  xui:update-mode="merge"/>
   <xhtml:div id="buttonBar1" style="width:150px;display:block;float:right"  xui:update-mode="merge"/>

</window>