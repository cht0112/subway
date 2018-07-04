<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="width:143px;top:150px;height:75px;left:182px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataMain"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdMain" data="dataMain"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngtbMain"
        data="dataMain"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="save-item" id="barItem2"/>  
        <item name="delete-item" id="barItem3"/>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="filter-pro-item" id="barItem5"></item><item name="first-item" id="barItem7"/>  
        <item name="pre-item" id="barItem8"/>  
        <item name="next-item" id="barItem9"/>  
        <item name="last-item" id="barItem10"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem11" page-count="0" items="pre,next,ext"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="tbsMain" id="controlPlace2"/>  
      <place control="grdMain" id="controlPlace1" style="width:100%;height:300px"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
