<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:271px;left:143px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dList" concept="OA_MT_BOARDROOM" order-by="fCode:asc" direct-delete="true" filter-relations="fType,fHoldNum,fUse,fFloor,fUseStatusName,fAddress,fCode,fName,fRemark"> 
      <reader action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/>  
      <writer action="/OA/meeting/logic/action/saveMTBOARDROOMAction"/>  
      <creator action="/OA/meeting/logic/action/createMTBOARDROOMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="startUse,stopUse" src="" auto-load="true" id="dBtnStatus" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('dBtnStatus')/startUse" readonly="instance('dList')/fUseStatus = '1'"/>  
    <xforms:bind nodeset="instance('dBtnStatus')/stopUse" readonly="not(instance('dList')/fUseStatus = '1')"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="vToolbar"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="dList" mode="IMG_TXT_LR"> 
          <item> 
            <xforms:trigger appearance="image-text" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif" style="width:95px;"> 
              <xforms:label>新增会议室</xforms:label>  
              <xforms:action id="action2" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript2">trigger2DOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="save-item" id="barItem2"/>  
          <item name="delete-item" id="barItem3"/>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-item" id="barItem5"/>  
          <item name="filter-pattern-item" id="barItem6"/>  
          <item name="separator" id="separatorItem1"/>  
          <item name="custom-page-item" id="pageItem" page-count="0"/>  
          <item name="separator"/>  
          <item name="startUse"> 
            <xforms:trigger appearance="image-text" id="trgStartUse" ref="instance('dBtnStatus')/startUse" src="/UI/appCommon/images/start_use.gif" dis-src="/UI/appCommon/images/un_start_use.gif" style="width:59px;"> 
              <xforms:label>启用</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>startUseFun(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="allUse"> 
            <xforms:trigger appearance="image-text" id="trgAllUse" src="/UI/appCommon/images/all_use.gif" dis-src="/UI/appCommon/images/all_use.gif" style="width:81px;"> 
              <xforms:label>全部启用</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>useAllFun(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="stopUse"> 
            <xforms:trigger appearance="image-text" id="trgStopUse" ref="instance('dBtnStatus')/stopUse" src="/UI/appCommon/images/stop_use.gif" dis-src="/UI/appCommon/images/un_stop_use.gif" style="width:58px;"> 
              <xforms:label>停用</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>stopUseFun(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
      <layout style="height:35px" id="layout1"> 
        <place control="toolbars1" id="controlPlace4"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室信息" width="700px" height="400px" modal="true" id="dlgBoardroomInfo" url="/OA/meeting/process/boardroomDetail/boardroomDetail.w" onSend="dlgBoardroomInfoSend" onReceive="dlgBoardroomInfoReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdBoardroom" data="dList"> 
      <column ref="recNo" label="序号" show-index="true"/>  
      <column id="gridColumn5" ref="fUseStatusName" label="启用标识" type="ro" width="60"/>  
      <column id="gridColumn7" ref="fCode" label="编码" type="ro" width="80"/>  
      <column id="gridColumn8" ref="fName" label="名称" type="html" width="100" onRender="gridBoardroom_fNameRender"/>  
      <column id="gridColumn1" ref="fType" label="会议室类型" type="ro" width="100"/>  
      <column id="gridColumn2" ref="fHoldNum" label="容纳人数" type="ro" width="60"/>  
      <column id="gridColumn3" ref="fUse" label="主要用途" type="ro" width="100"/>  
      <column id="gridColumn4" ref="fFloor" label="所在楼层" type="ro" width="80"/>  
      <column id="gridColumn6" ref="fAddress" label="地址" type="ro" width="100"/>  
      <column id="gridColumn9" ref="fRemark" label="备注" type="ro"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <place control="vToolbar" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="grdBoardroom" id="controlPlace5" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="dlgBoardroomInfo" id="controlPlace7" style="top:348px;left:505px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="boardroomSet.js" type="text/javascript"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="boardroomSet.js"/> 
  </resource> 
</xui:window>
