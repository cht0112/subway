<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="width:150px;top:419px;height:86px;left:150px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dArrange" concept="OA_MT_RoomArrange" store-type="simple" onValueChanged="dArrangeValueChanged"> 
      <writer id="default1" action="/OA/meeting/logic/action/saveMTRoomArrangeAction"/>  
      <reader id="default2" action="/OA/meeting/logic/action/queryMTRoomArrangeAction"/>  
      <creator id="default3" action="/OA/meeting/logic/action/createMTRoomArrangeAction"/>  
      <rule id="dataBizRule1" relation="fMeetName" required="true()" alert="'会议主题不能为空!'"/>  
      <rule id="dataBizRule2" relation="fBeginTime" required="true()" alert="'开始时间不能为空!'"/>  
      <rule id="dataBizRule3" relation="fEndTime" constraint="data('dArrange')/fEndTime &gt; data('dArrange')/fBeginTime" alert="'结束时间必须大于开始时间!'"/>  
      <rule id="dataBizRule4" relation="fBoardroomID" required="true()" alert="'会议室不能为空!'"/>  
      <rule relation="fMeetPsnNum" readonly="true()"/>  
      <rule concept="OA_MT_RoomArrange" readonly="call('justep.Context.getCurrentPersonID') != data('dArrange')/fArrPsnID and data('dArrange')/fArrPsnID != ''"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dPerson" concept="OA_MT_ARRANGEPSNS" store-type="simple"> 
      <reader id="default4" action="/OA/meeting/logic/action/queryMTARRANGEPSNSAction"/>  
      <writer id="default5" action="/OA/meeting/logic/action/saveMTARRANGEPSNSAction"/>  
      <creator id="default6" action="/OA/meeting/logic/action/createMTARRANGEPSNSAction"/>  
      <master id="master1" data="dArrange" relation="fMasterID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dBoardroom" concept="OA_MT_BOARDROOM" store-type="simple"> 
      <filter name="statusFilter">OA_MT_Boardroom.fUseStatus='1'</filter>  
      <reader id="default7" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="canSelect" src="" auto-load="true" id="selectFilter" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('selectFilter')/canSelect" readonly="call('justep.Context.getCurrentPersonID') != data('dArrange')/fArrPsnID and data('dArrange')/fArrPsnID !=''"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择参会人员" width="600px" height="350px" modal="true" id="dlgMeetPsn" url="/appCommon/dialogs/orgSelectDialog/orgMultiSelect/mainActivity.w" onSend="dlgMeetPsnSend" onReceive="dlgMeetPsnReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室信息" width="700px" height="400px" modal="true" id="wDlgMeetingRoom" url="/OA/meeting/process/boardroomDetail/boardroomDetailread.w" onSend="wDlgMeetingRoomSend"/>  
    <xui:view auto-load="true" id="vArrangeInfo"> 
      <xforms:input id="fMeetName" ref="data('dArrange')/fMeetName" style="width:100%"/>  
      <xforms:input style="width:100%" id="fBeginTime" ref="data('dArrange')/fBeginTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:input style="width:100%" id="fEndTime" ref="data('dArrange')/fEndTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:input style="width:100%" id="fMeetPsns" ref="data('dArrange')/fMeetPsns"/>  
      <xforms:textarea ref="data('dArrange')/fMeetPsns" id="taMeetPsns" auto-size="true" readonly="true"/>  
      <xforms:input style="width:100%" id="fMeetPsnNum" ref="data('dArrange')/fMeetPsnNum"/>  
      <xforms:select id="isSendMsg" ref="data('dArrange')/fExtendStr1" style="height:100%;width:100%;"> 
        <xforms:item id="selectItem1"> 
          <xforms:label id="xuiLabel1">是否发送短信通知</xforms:label>  
          <xforms:value id="default8">1</xforms:value> 
        </xforms:item> 
      </xforms:select>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%" id="orgDeptSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="model2"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrgDept"/> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeDeptSelect" data-ref="bizData2" ref="data('dArrange')/fUseOgnId" label-ref="data('dArrange')/fUseOrgName" dropdown-height="200"> 
          <xforms:itemset id="default2"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%" id="orgPsmSelect" show-org-types="psm"> 
        <xforms:model id="model3"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrgPsm"> 
            <tree-option id="psmTreeOption" root-filter="1=1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treePsmSelect" data-ref="bizData3" ref="data('dArrange')/fUsePsnID" label-ref="data('dArrange')/fUsePsnName" onDropdown="treePsmSelectDropdown" onCloseup="arrangeDetail.treePsmSelectCloseup" dropdown-height="200"> 
          <xforms:itemset id="default3" data="dOrgPsm"> 
            <xforms:column ref="sName" id="default12"/>  
            <xforms:column ref="sPersonID" visible="false" id="default13"/> 
          </xforms:itemset>  
          <xforms:value id="default9" ref="sPersonID"/>  
          <xforms:label id="default10" ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div id="divRoom"> 
        <xhtml:a href="#" onclick="divRoomDOMActivate()">查 看</xhtml:a> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:100%" id="boardGrid" ref="data('dArrange')/fBoardroomID" label-ref="data('dArrange')/fBoardroom" delay-create-grid="false" dropdown-height="200"> 
        <xforms:label ref="fName" id="xuiLabel7"/>  
        <xforms:value ref="rowid" id="default23"/>  
        <xforms:itemset id="default24" data="dBoardroom" auto-load-data="false"> 
          <xforms:column ref="fName" label="会议室名称" width="80" id="default19"/>  
          <xforms:column ref="rowid" visible="false" id="default20"/>  
          <xforms:column ref="fType" label="会议室类型" width="80" id="default37"/>  
          <xforms:column ref="fHoldNum" label="容纳人数" width="80" id="default38"/>  
          <xforms:column ref="fAddress" label="地址" width="80" id="default39"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:trigger id="trgSelectPsn" ref="data('selectFilter')/canSelect" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png"> 
        <xforms:label id="xuiLabel2">选择参会人员</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action1"> 
          <xforms:script id="xformsScript1">trgSelectPsnDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triRefresh" style="height:100%;width:60px;"> 
        <xforms:label id="xuiLabel3">刷 新</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">triRefreshDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triEnsure" ref="data('selectFilter')/canSelect" style="width:60px;height:100%;"> 
        <xforms:label id="xuiLabel4">确 定</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action3"> 
          <xforms:script id="xformsScript3">triEnsureDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triCancel" style="height:100%;width:60px;"> 
        <xforms:label id="xuiLabel5">取 消</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action4"> 
          <xforms:script id="xformsScript4">triCancelDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:textarea ref="data('dArrange')/fRemark" id="xformsTextarea2" auto-size="true"/>  
      <xforms:textarea ref="data('dArrange')/fOutPsns" id="taOutPsns" auto-size="true"> 
        <!-- 
        <xforms:action id="action5" ev:event="DOMFocusOut"> 
          <xforms:script id="xformsScript5">taOutPsnsDOMFocusOut(event)</xforms:script> 
        </xforms:action>-->  
        <xforms:action id="action6" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript6">taOutPsnsxforms_value_changed(event)</xforms:script> 
        </xforms:action> 
      </xforms:textarea>  
      <layout style="height:100%;" id="layout1" type="excel" src="arrangeDetail.xls"> 
        <place control="taOutPsns" id="controlPlace3" style="width:320px;height:150px"/>  
        <place control="boardGrid" id="controlPlace6"/>  
        <xui:place control="checkbox1" id="controlPlace5" style="width:140px;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="vArrangeInfo" id="controlPlace1"/>  
      <place control="dlgMeetPsn" id="controlPlace2"/>  
      <place control="wDlgMeetingRoom" id="controlPlace4"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="arrangeDetail.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
