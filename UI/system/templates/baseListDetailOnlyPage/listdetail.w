<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:128px;left:173px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" data-type="json"
      direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereVersion"> 
      <reader id="default3"/>  
      <writer id="default4"/>  
      <creator id="default5"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="save-item" id="barItem2"/>
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item name="filter-pro-item" id="barItem5"></item><item id="barItem11" name="custom-page-item" page-count="0" items="pre,next,ext"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"></xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" src="mainActivity.xls" style="height:200px;" type="excel"/> 
    </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 

            <place control="tbsMain1" id="controlPlace1"/> 
      
            <place control="grdMain" id="controlPlace2" style="width:100%;height:200px;"/> 
       
            <place control="vDetail" id="controlPlace5" style="height:200px;"/> 
      
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
