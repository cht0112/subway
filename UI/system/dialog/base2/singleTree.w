<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="singleList.w" >

  <div id="smartFilter" xui:update-mode="delete"/>
  <div id="filterImg" xui:update-mode="delete"/>
  <div id="controlPlace24" xui:update-mode="delete"/>
   <data id="main" is-tree="true" limit="-1"  xui:update-mode="merge"/>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="ui-light" component="/UI/system/components/quickLocate.xbl.xml#treeLocate" data="main" id="smartFilter" style="width:120px;" tree="grid" xui:before="pagination1" xui:parent="toolbarGridView" xui:update-mode="insert" />
   <xhtml:div id="grid" appearance="tree" class="ui-light" style="width:100%;height:100%;border:1px solid #D3D3D3;"  xui:update-mode="merge"/>
    <xui:column xmlns:xui="http://www.justep.com/xui" id="treeColumn" label="请指定树节点列" readonly="true" ref="" type="tree" xui:parent="grid" xui:update-mode="insert" />
   <xhtml:div id="pagination1" next-label=">" pre-label="&lt;" items="pre next"  xui:update-mode="merge"/>
<xu:modifications>
  <xu:remove select="//*[@id='grid']/@show-header-menu"/>
</xu:modifications>

</window>