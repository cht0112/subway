<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="mdDefault" style="top:105px;height:auto;left:23px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataMaster" store-type="grid"
      direct-delete="true"> 
      <reader id="default1"/>  
      <writer id="default2"/>  
      <creator id="default3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataDetail" confirm-delete="false"> 
      <reader id="default4"/>  
      <writer id="default5"/>  
      <creator id="default6"/>  
      <master id="master1" data="dataMaster"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngtbMaster1"
        data="dataMaster" mode="IMG_TXT_LR"> 
        <item> 
        

            
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script > <![CDATA[listdetailmd.newItemClick(event);]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger>
            
        </item>  
        <item name="delete-item" id="barItem3"/>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="filter-pro-item" id="barItem1"></item><item name="custom-page-item" id="barItem11" page-count="0" items="pre,next,ext"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdMaster" data="dataMaster" onRowDblClick="listdetailmd.grdMasterRowDblClick"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngtbMaster2"
        data="dataMaster" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem12"/>  
        <item name="save-item" id="barItem13"/>  
        <item name="delete-item" id="barItem14"/>  
        <item name="refresh-item" id="barItem15"/>  
        <item name="separator" id="separatorItem3"/>  
        <item name="filter-pro-item" id="barItem2"></item><item name="first-item" id="barItem18"/>  
        <item name="pre-item" id="barItem19"/>  
        <item name="next-item" id="barItem20"/>  
        <item name="last-item" id="barItem21"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngtbDetail"
        data="dataDetail" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem23"/>  
        <item name="delete-item" id="barItem25"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" src="detail.xls" type="excel"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdDetail"
      data="dataDetail"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top size="40px" id="borderLayout-top1"> 
              <place control="tbsMaster1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5"/>  
              <place control="tbsDetail" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="grdDetail" id="controlPlace6" style="width:100%;height:100%"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="listdetailmd.js"/> 
  </xui:resource> 
</xui:window>
