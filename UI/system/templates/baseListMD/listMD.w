<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:149px;height:auto;left:75px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" data-type="json" direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="grid" update-mode="whereVersion"> 
      <reader id="default1"/>  
      <writer id="default2"/>  
      <creator id="default3"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" data-type="json" confirm-delete="false" id="dataDetail" limit="20" offset="0" update-mode="whereVersion"> 
      <reader id="default4"/>  
      <writer id="default5"/>  
      <creator id="default6"/>  
      <master data="dataMaster" id="master1"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster" id="ngtbMaster1" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="save-item" id="barItem2"/>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item name="filter-pro-item" id="barItem5"/>
        <item id="barItem11" name="custom-page-item" items="pre,next,ext" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster" id="grdMaster" show-header-menu="hide-column,save-layout,group-column,adjust-column"></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail" id="ngtbDetail" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action id="action1" ev:event="DOMActivate">
              <xforms:script id="xformsScript1"><![CDATA[listMD.insertTriggerClick(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger> 
        </item>  
        <item id="barItem25" name="delete-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail" id="grdDetail"></xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="tbsMaster1" id="controlPlace1"/>  
      <place control="grdMaster" id="controlPlace2" style="width:100%;height:200px;"/>  
      <place control="tbsDetail" id="controlPlace4"/>  
      <place control="grdDetail" id="controlPlace6" style="width:100%;height:200px;"/>  
      <xui:place control="windowDialog1" id="controlPlace3" style="top:168px;left:280px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="396px" height="264px" modal="true" id="windowDialog1" url="/UI/system/templates/baseListMD/dialog.w" dialogUpdate="true"/> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="listMD.js"/> 
  </resource> 
</xui:window>
