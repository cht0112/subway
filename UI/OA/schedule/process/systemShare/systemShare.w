<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script type="text/javascript" src="systemShare.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/OPM/roleManagement/startActivity.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxWindows/dhtmlxwindows.css"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxWindows/skins/dhtmlxwindows_dhx_blue.css"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="top:243px;left:52px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" concept="OA_SD_SHARERANGE" offset="1" limit="20" order-by="" auto-load="false" onBeforeRefresh="mainBeforeRefresh"> 
      <xui:reader action="/OA/schedule/logic/action/querySDSHARERANGEAction"/>  
      <xui:creator action="/OA/schedule/logic/action/createSDSHARERANGEAction"/>  
      <xui:writer action="/OA/schedule/logic/action/saveSDSHARERANGEAction"/>  
      <filter name="typeFilter" id="filterMain">OA_SD_SHARERANGE.fShareType = 0</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="insert" src="" auto-load="true" id="dBtnState" store-type="simple"> 
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="default3"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="insert" readonly="data('dBtnState')/insert='0'"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <!--工具条-->  
    <xui:view id="vSystemShare" auto-load="true"> 
      <xhtml:table id="table_1"> 
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:div width="100%" height="40px" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars_1"> 
              <bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar_1"> 
                <item name="insertShareOrg"> 
                  <xforms:trigger appearance="image" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif" ref="data('dBtnState')/insert"> 
                    <xforms:label>添加组织</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>addShareToQuery()</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </item>  
                <item name="delete-item"/>  
                <item name="filter-item"/>  
                <item name="save-item"/>  
                <item name="refresh-item"/>  
                <item name="separator" id="separatorItem1"/>  
                <item name="custom-page-item" id="barItem7"/> 
              </bar> 
            </xhtml:div> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:view>  
    <!--授权列表-->  
    <xui:view id="vShareGrid" auto-load="true"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择共享范围" width="670px" height="450px" modal="true" id="dlgShareToPerson" url="/appCommon/dialogs/orgSelectDialog/orgMultiSelect/mainActivity.w" onSend="dlgShareToPersonSend" onReceive="dlgShareToPersonReceive" style="top:297px;left:49px;"/>  
      <xhtml:div data="main" id="grdShareIssue" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%;height:100%"> 
        <xui:column ref="recNo" label="序号" show-index="true"/>  
        <xui:column ref="fShareToOrgFName" label="共享到组织全称" type="ro"/> 
      </xhtml:div> 
    </xui:view>  
    <xui:view id="vSearch" auto-load="true"/>  
    <xui:view id="vOrgTree" style="height:100%" auto-load="true"> 
      <xhtml:div id="org-tree" component="/UI/system/components/orgTree.xbl.xml#orgTree" show-org-types="" style="height:100%"> 
        <data id="orgTreeData" component="/UI/system/components/data.xbl.xml#bizData" auto-load="true"/>  
        <xhtml:div style="background-color: white; overflow: auto;width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" onAfterIndexChanged="grid1AfterIndexChanged"/> 
      </xhtml:div>  
      <xui:layout style="width:100%;height:100%;"> 
        <xui:place control="org-tree" style="width:100%;height:100%"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%;"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="26%" has-drag-bar="true" has-arrow-button="true" mode="horz" id="HSplitter_1"> 
        <xhtml:div region="left" id="div_1"> 
          <xhtml:table border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed" width="100%" height="100%" id="table_2" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td align="left" valign="top"> 
                <xui:place control="vOrgTree" style="width:100%;height:100%"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div>  
        <xhtml:div region="right" id="div_2"> 
          <xhtml:table cellpadding="0" cellspacing="0" width="100%" height="100%" id="table_3" style="table-layout:fixed;width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td align="left" style="height:35px"> 
                <xui:place control="vSystemShare" style="width:100%;height:100%"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td align="left" valign="top"> 
                <xui:place control="vShareGrid" style="width:100%;height:100%"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view> 
</xui:window>
