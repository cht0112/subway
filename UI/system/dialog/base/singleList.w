<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model" style="top:154px;height:auto;left:31px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="10" auto-load="true"></data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver"/>  
    <xhtml:div component="/UI/system/components/config.xbl.xml#config" id="config"> 
      <!--			<item id="returnColumnId" name="returnColumn" label="返回列" value=""/>--> 
    </xhtml:div>  
    <xui:view id="toolbarGridView" auto-load="true"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars"> 
        <xui:bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar"> 
          <item> 
            <xhtml:div style="width:100px" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="main" auto-refresh="true"/> 
          </item>  
          <item> 
            <xhtml:img id="filterImg" src="/UI/system/images/search24.gif" alt="i18n{query}" onclick="xforms.blur();justep.xbl('main').refreshData();"/> 
          </item>  
          <item id="customPageItem" name="custom-page-item" page-count="0" items="pre,next,ext"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="main" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid" onRowDblClick="justep.SingleList.gridRowDblClick" style="width:100%;height:100%;border:1px solid #D3D3D3;"/>  
      <xui:layout style="height:100%;width:100%" id="toolbarGridLayout"> 
        <xhtml:div id="toolbarGridTable" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
          <top size="35px" id="bl2-t"> 
              <xui:place control="toolbars" style="width:100%;height:100%"/> 
          </top>  
          <center id="bl2-c"> 
              <xui:place control="grid" style="height:100%;width:100%;overflow:auto;"/> 
          </center>
          <bottom size="4px" id="bl2-b"/> 
        </xhtml:div> 
      </xui:layout> 
    </xui:view>  
    <xui:view id="buttonView" auto-load="true"> 
      <xhtml:button class="xui-button dialog-button-refresh" onclick="justep.SingleList.windowRefresh()" id="refresh-btn">i18n{refresh}</xhtml:button>  
      <xhtml:button class="xui-button dialog-button-ok" onclick="justep.SingleList.windowCancel()" id="cancel-btn">i18n{cancel}</xhtml:button>  
      <xhtml:button class="xui-button dialog-button-cancel" onclick="justep.SingleList.windowOK()" id="ensure-btn">i18n{ok}</xhtml:button> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="windowReceiver" id="windowReceiverPlace" style="top:24px;left:591px;"/>  
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
    <xhtml:script id="htmlScript1" src="/UI/system/dialog/base/singleList.js"/>  
    <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="/UI/system/dialog/base/dialog.css"/> 
  </xui:resource> 
</xui:window>
