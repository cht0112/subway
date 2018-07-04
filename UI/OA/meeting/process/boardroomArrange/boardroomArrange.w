<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:271px;left:143px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dList" concept="OA_MT_RoomArrange" order-by="fBeginTime:desc"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTRoomArrangeAction"/>  
      <writer id="default2" action="/OA/meeting/logic/action/saveMTRoomArrangeAction"/>  
      <creator id="default3" action="/OA/meeting/logic/action/createMTRoomArrangeAction"/>  
      <rule relation="fBeginTime" readonly="true()"/>  
      <rule relation="fEndTime" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dBoardroom" concept="OA_MT_Boardroom" store-type="simple" order-by="fCode:asc"> 
      <reader id="default4" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="roomIDs,status,keyword" src="" auto-load="true" id="dFilter" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell>1</cell>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="true" id="dStatus" store-type="simple"> 
       
    <rows xmlns="" id="default9">
   <row id="default10">
    <cell id="default11">已安排</cell>
    <cell id="default12">1</cell></row> 
   <row id="default13">
    <cell id="default14">已取消</cell>
    <cell id="default15">0</cell></row> </rows></data>  
    <xforms:action id="action6" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript6">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vToolbar"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrListBar"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="dList" mode="IMG_TXT_LR"> 
          <item name="refresh-item" id="barItem4"/>  
          <item name="custom-page-item" id="pageItem" page-count="5"/> 
          <item>
          	<xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter"
              style="width:110px;" all-selected-label="'全部'" id="gridFilter" filter-data="dList"
              filter-relation="fBoardroomID" multi-select="true" default-label="'选择会议室'" dropdown-height="200px" auto-size="false"> 
              <xforms:label ref="fName" id="xuiLabel7"/>  
              <xforms:value ref="OA_MT_Boardroom" id="default7"/>  
              <xforms:itemset id="default8" data="dBoardroom"> 
                <xforms:column ref="fName" id="default5"/>  
                <xforms:column ref="OA_MT_Boardroom" visible="false" id="default6"/> 
              </xforms:itemset> 
            </xhtml:div>
          </item>
           <item> 
            <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter"
              style="width:80px" all-selected-label="'全部'" id="statusFilter" filter-data="dList"
              filter-relation="fEffect" multi-select="true" default-label="'已安排'"
              default-value="'1'" onGetCondition="boardroomArrange.statusFilterGetCondition"> 
              <xforms:label ref="label" id="xuiLabel8"/>  
              <xforms:value ref="value" id="default19"/>  
              <xforms:itemset id="default20" data="dStatus"> 
                <xforms:column ref="label" id="default21"/>  
                <xforms:column ref="value" visible="false" id="default22"/> 
              </xforms:itemset> 
            </xhtml:div> 
          </item>  
          <item> 
            <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"
              style="width:100px;" id="smartFilter" filter-data="dList" filter-relations="fBoardroom,fMeetName,fUseOrgName,fUsePsnName"/> 
          </item>  
          <item> 
            <xforms:trigger id="trgArrange" style="width:55px;"> 
              <xforms:label id="xuiLabel2">安排</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action3"> 
                <xforms:script id="xformsScript1">trgArrangeDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger id="trgRearrange" style="width:55px;"> 
              <xforms:label id="xuiLabel4">调配</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action5"> 
                <xforms:script id="xformsScript2">trgRearrangeDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger id="trgCancel" style="width:55px;"> 
              <xforms:label id="xuiLabel3">取消</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action4"> 
                <xforms:script id="xformsScript3">trgCancelDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item> 
            <xforms:trigger id="trgSearch" style="width:55px;"> 
              <xforms:label id="xuiLabel1">安排查询</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action1"> 
                <xforms:script id="xformsScript5">trgSearchDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
    </xui:view>  
    <xui:view auto-load="true" id="vList"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室信息" width="700px" height="400px" modal="true" id="dlgBoardroomInfo" url="/OA/meeting/process/boardroomDetail/boardroomDetail.w" onSend="dlgBoardroomInfoSend" onReceive="dlgBoardroomInfoReceive"/>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室安排" width="710px" height="440px" modal="true" id="dlgArrangeInfo" url="/OA/meeting/process/boardroomArrangeDialog/arrangeDetail.w" onSend="dlgArrangeInfoSend" onReceive="dlgArrangeInfoReceive"/>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridBoardroom" data="dList"> 
        <column ref="recNo" label="序号" show-index="true"/>  
        <column id="gridColumn7" ref="fEffect" label="状态" type="html" width="60" onRender="gridBoardroom_fEffectRender"/>  
        <column id="gridColumn3" ref="fBoardroom" label="会议室" type="html" width="100" onRender="gridBoardroom_fBoardroomRender"/>  
        <column id="gridColumn4" ref="fMeetName" label="会议主题" type="html" width="100" onRender="gridBoardroom_fMeetNameRender"/>  
        <column id="gridColumn1" ref="fUseOrgName" label="使用部门" type="ro" width="100"/>  
        <column id="gridColumn2" ref="fUsePsnName" label="使用人" type="ro" width="60"/>  
        <column id="gridColumn5" ref="fBeginTime" label="开始时间" type="dateTime" width="110" format="yyyy-MM-dd hh:mm"/>  
        <column id="gridColumn6" ref="fEndTime" label="结束时间" type="dateTime" width="110" format="yyyy-MM-dd hh:mm"/>  
        <column id="gridColumn10" ref="fRemark" label="备注" type="ro"/> 
      </xhtml:div>  
      <layout style="height:100%;" id="layout2"> 
        <place control="dlgBoardroomInfo" id="controlPlace7" style="top:82px;left:18px;"/>  
        <place control="dlgArrangeInfo" id="controlPlace1" style="top:114px;left:70px;"/>  
        <place control="gridBoardroom" id="controlPlace5" style="width:100%;height:100%;text-align:justify"/> 
      </layout> 
    </xui:view>  
    <layout style="height:100%;width:100%"> 
      <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed;" id="table2" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="35px"> 
          <xhtml:td align="left"> 
            <place control="vToolbar" style="height:36px;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vList"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="boardroomArrange.js" type="text/javascript"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>
