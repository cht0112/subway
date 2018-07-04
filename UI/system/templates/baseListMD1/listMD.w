<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:86px;left:635px;"> 
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
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMaster"/>
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster" id="grdMaster" show-header-menu="hide-column,save-layout,group-column,adjust-column" class="grid-compact" row-height="30" header-row-height="30"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail" id="grdDetail" class="grid-compact" row-height="30" header-row-height="30"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="596px" height="364px" modal="true" id="windowDialog1" url="/UI/system/templates/baseListMD1/dialog.w" dialogUpdate="true"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" operation-owner="dataMaster" class="button-blue" appearance="image-text" operation="new"> 
      <xforms:label id="default8"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" operation-owner="dataMaster" icon-class="icon-system-floppy" appearance="image-minimal" operation="save"> 
      <xforms:label id="default7"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" operation-owner="dataMaster" appearance="image-minimal" icon-class="icon-system-refresh" operation="refresh"> 
      <xforms:label id="default9"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" appearance="image-minimal" operation-owner="dataMaster" icon-class="icon-system-trash" operation="delete"> 
      <xforms:label id="default10"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" id="pagination2" data="dataMaster" items="first last pre next" first-label="首页" pre-label="上页" next-label="下页" last-label="尾页" align="right" page-count="15"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" class="button-blue" appearance="image-text" icon-class="icon-system-plus"> 
      <xforms:label id="default12"><![CDATA[新建]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[listMD.insertTriggerClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6" appearance="image-minimal" operation-owner="dataDetail" operation="delete" icon-class="icon-system-trash"> 
      <xforms:label id="default14"/> 
    </xforms:trigger>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowDialog1" id="controlPlace3" style="top:166px;left:328px;"/>  
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="60%" mode="vert" has-arrow-button="true" id="VSplitter1" class="xui-splitter" style="width:100%;height:100%;"> 
        <xhtml:div region="top" id="div1">
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top size="40px" id="borderLayout-top1">
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="1" id="ngtbMaster1" expandable="false" expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="6" expanded-width="75"> 
                <xui:place control="trigger2" id="controlPlace8"/>  
                <xui:place control="trigger1" id="controlPlace7"/>  
                <xui:place control="trigger4" id="controlPlace9"/>  
                <xui:place control="trigger3" id="controlPlace7"/>  
                <xui:place control="queryTrigger" id="controlPlace4"/>
              </xhtml:div>
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="bizDataFilterMenu1" id="controlPlace1" style="top:8px;left:615px;"/>
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/>
            </center>  
            <bottom size="45px" id="borderLayout-bottom1">
              <xui:place control="pagination2" id="controlPlace10"/>
            </bottom>
          </xhtml:div>
        </xhtml:div>  
        <xhtml:div region="bottom" id="div2">
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top size="40px" id="borderLayout-top2">
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="2" id="ngtbDetail" expandable="false" expanded="false" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="5" expanded-width="75"> 
                <xui:place control="trigger8" id="controlPlace11"/>  
                <xui:place control="trigger6" id="controlPlace14"/> 
              </xhtml:div>
            </top>  
            <center id="borderLayout-center2">
              <place control="grdDetail" id="controlPlace6" style="width:100%;height:200px;"/>
            </center>
          </xhtml:div>
        </xhtml:div>
      </xhtml:div>
    </xui:layout>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="queryTrigger" appearance="image-minimal" operation-owner="bizDataFilterMenu1" operation="show"> 
      <xforms:label id="default11"><![CDATA[]]></xforms:label>
    </xforms:trigger>
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="listMD.js"/> 
  </resource> 
</xui:window>
