<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="boardroomSummary.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/knowledgeInterface.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="width:150px;top:228px;height:101px;left:264px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="17" update-mode="whereVersion" auto-load="true" id="dSummary" concept="OA_MT_Summary" store-type="grid" order-by="fCreateTime:desc"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTSummaryAction"/>  
      <writer id="default2" action="/OA/meeting/logic/action/saveMTSummaryAction"/>  
      <creator id="default3" action="/OA/meeting/logic/action/createMTSummaryAction"/>  
      <calculate-relation relation="recNO" id="calculate-relation1" type="xsd:integer"/>  
      <rule id="dataBizRule1" concept="OA_MT_Summary" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dIssue" concept="OA_MT_SummaryIssue" store-type="simple"> 
      <reader id="default4" action="/OA/meeting/logic/action/queryMTSummaryIssueAction"/>  
      <creator id="default5" action="/OA/meeting/logic/action/createMTSummaryIssueAction"/>  
      <writer id="default6" action="/OA/meeting/logic/action/saveMTSummaryIssueAction"/>  
      <master id="master1" data="dSummary" relation="fMasterID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dArrange" concept="OA_MT_RoomArrange" store-type="simple"> 
      <reader id="default7" action="/OA/meeting/logic/action/queryMTRoomArrangeAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dBoardroom" concept="OA_MT_Boardroom" store-type="simple" order-by="fCode:asc"> 
      <reader id="default8" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="roomIDs,roomNames,persons,keyword" src="" auto-load="true" id="commData" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="summaryDetail" concept="OA_MT_Summary" store-type="simple"> 
      <reader id="default22" action="/OA/meeting/logic/action/queryMTSummaryAction"/>  
      <writer id="default23" action="/OA/meeting/logic/action/saveMTSummaryAction"/>  
      <creator id="default24" action="/OA/meeting/logic/action/createMTSummaryAction"/> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:view auto-load="true" id="vToolbar" class="xui-container"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrCondition"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navSummary" data="dSummary" mode="IMG_TXT_LR"> 
         <!--  <item> 
            <xforms:trigger appearance="image" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif" style="width:25px;"> 
              <xforms:label>新增会议纪要</xforms:label>  
              <xforms:action id="action2" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript2">trigger2DOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>-->
          <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[trigger2DOMActivate(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
          <item name="save-item" id="barItem2"/>  
          <item name="delete-item" id="barItem3"/>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="custom-page-item" id="pageItem" page-count="0"/>  
          <item> 
            <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'" id="gridFilter" filter-data="dSummary" filter-relation="fBoardroomID" multi-select="true" style="width:110px;"> 
              <xforms:label ref="fName" id="xuiLabel2"/>  
              <xforms:value ref="OA_MT_Boardroom" id="default9"/>  
              <xforms:itemset id="default10" data="dBoardroom"> 
                <xforms:column ref="fName" id="default19"/>  
                <xforms:column ref="OA_MT_Boardroom" visible="false" id="default20"/> 
              </xforms:itemset> 
            </xhtml:div> 
          </item>  
          <item> 
            <xhtml:div component="/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter" style="width:80px;" id="extOrgFilter" filter-data="dSummary" person-id-relation="fCreatePsnID" org-url-relation="fCreatePsnFID"/> 
          </item><!--  
          <item> 
            <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dSummary" filter-relations="fMeetName,fBoardroom,fUseDeptName,fUsePsnName" style="width:100px;"/> 
          </item>  
          <item> 
            <xforms:trigger id="trgRange"> 
              <xforms:label id="xuiLabel3">发 布</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action1"> 
                <xforms:script id="xformsScript1">trgRangeDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        --></xui:bar> 
      </xhtml:div>  
      <layout id="layout3" type="flow" style="height:100%;width:100%;"> 
        <place control="tbrCondition" id="controlPlace3"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议纪要信息" width="740px" height="450px" modal="true" id="dlgSummaryInfo" url="/OA/meeting/process/boardroomSummary/summaryDetail.w" onSend="dlgSummaryInfoSend" onReceive="dlgSummaryInfoReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择发布范围" width="600px" height="400px" modal="true" id="wDlgRangeIssue" url="/system/service/commonChoose/treeListMultiOrgChoose.w" onSend="wDlgRangeIssueSend" onReceive="wDlgRangeIssueReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdSummary" data="dSummary"> 
      <column ref="recNO" label="序号" width="40" type="ro" show-index="true"/>  
      <column id="gridColumn7" ref="fIssueStateName" label="状态" type="ro" width="45" visible="false"/>  
      <column id="gridColumn4" ref="fMeetName" label="会议主题" type="html" width="120" onRender="grdSummary_fMeetNameRender" visible="false"/>  
      <column id="gridColumn5" ref="fBeginTime" label="开始时间" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/>  
      <column id="gridColumn6" ref="fEndTime" label="结束时间" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/>  
      <column id="gridColumn8" ref="fBoardroom" label="会议室" type="ed" width="110"/>  
      <column id="gridColumn9" ref="fUseDeptName" label="使用部门" type="ed" width="100"/>  
      <column id="gridColumn10" ref="fUsePsnName" label="使用人" type="ed" width="60"/>  
      <column id="gridColumn11" ref="fRemark" label="备注" type="ro"/> 
    </xhtml:div>  
    <layout style="width:100%;height:100%" id="layout1"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <place control="vToolbar"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="grdSummary" id="ctlGrid" style="height:100%;width:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="dlgSummaryInfo" id="controlPlace1" style="top:228px;left:494px;"/>  
      <place control="wDlgRangeIssue" id="controlPlace2" style="top:228px;left:459px;"/> 
    </layout> 
  </xui:view> 
</xui:window>
