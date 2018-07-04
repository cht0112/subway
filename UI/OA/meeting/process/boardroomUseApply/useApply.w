<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="width:150px;top:384px;height:96px;left:268px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dUseApply" concept="OA_MT_USEAPPLY" store-type="simple" onBeforeSave="dUseApplyBeforeSave" onValueChanged="dUseApplyValueChanged"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTUSEAPPLYAction"/>  
      <writer id="default2" action="/OA/meeting/logic/action/saveMTUSEAPPLYAction"/>  
      <creator id="default3" action="/OA/meeting/logic/action/createMTUSEAPPLYAction"/>  
      <rule relation="fMeetName" required="true()" alert="'会议主题不能为空!'"/>  
      <rule relation="fBoardroomID" required="true()" alert="'会议室不能为空!'"/>  
      <rule relation="fBeginTime" required="true()" alert="'开始时间不能为空!'"/>  
      <rule relation="fEndTime" constraint="data('dUseApply')/fEndTime&gt;data('dUseApply')/fBeginTime" alert="'结束时间必须大于开始时间!'"/>  
      <rule relation="fMeetPsns" readonly="true()"/>  
      <rule relation="fMeetPsnNum" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dUsePerson" concept="OA_MT_USEAPPLYPSNS" store-type="simple"> 
      <reader id="default4" action="/OA/meeting/logic/action/queryMTUSEAPPLYPSNSAction"/>  
      <writer id="default5" action="/OA/meeting/logic/action/saveMTUSEAPPLYPSNSAction"/>  
      <creator id="default6" action="/OA/meeting/logic/action/createMTUSEAPPLYPSNSAction"/>  
      <master id="master1" data="dUseApply" relation="fMasterID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dBoardroom" concept="OA_MT_Boardroom" order-by="fCode:asc"> 
      <reader id="default11" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/>  
      <filter id="useStatusFilter" name="statusFilter">OA_MT_Boardroom.fUseStatus='1'</filter> 
    </data>  
    <xforms:action id="action3" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript3">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrUseApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar1" data="dUseApply" process-engine="boardroomUseApplyProcess" executeConcept="OA_MT_UseExecute"/>  
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar" style="width:56px;"> 
        <item> 
          <xforms:trigger id="trgSearch"> 
            <xforms:label id="xuiLabel6">安排查询</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action6"> 
              <xforms:script id="xformsScript5">trgSearchDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="boardroomUseApplyProcess" data="dUseApply" onBeforeAdvanceQuery="useApply.boardroomUseApplyProcessBeforeAdvanceQuery"/>  
    <xui:view auto-load="true" id="vApplyInfo" class="xui-container"> 
      <xhtml:div id="divRoom" style="height:100%;width:100%;" class="xui-autofill"> 
        <xhtml:a href="#" onclick="trgDetailDOMActivate()">查看</xhtml:a> 
      </xhtml:div>  
      <xforms:output id="optNO" ref="data('dUseApply')/fNO"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%;height:100%;" id="orgSelect" show-org-types="ogn,dpt" class="xui-autofill"> 
        <xforms:model id="model1"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"/> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSelect1" data-ref="dOrg" ref="data('dUseApply')/fApplyDeptID" label-ref="data('dUseApply')/fApplyDeptName"> 
          <xforms:itemset id="default7"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%" id="orgPsmSelect" show-org-types="psm" class="xui-autofill"> 
        <xforms:model id="model2"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dPsm"> 
            <tree-option id="treeOption1" root-filter="1=1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSelect2" data-ref="dPsm" ref="data('dUseApply')/fApplyPsnID" label-ref="data('dUseApply')/fApplyPsnName" onDropdown="treeSelect2Dropdown" onCloseup="useApply.treeSelect2Closeup"> 
          <xforms:itemset id="default8" data="dPsm"> 
            <xforms:column ref="sName" id="default19"/>  
            <xforms:column ref="sPersonID" visible="false" id="default22"/> 
          </xforms:itemset>  
          <xforms:value id="default23" ref="sPersonID"/>  
          <xforms:label id="default24" ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:100%;height:100%;" id="boardroomSelect" ref="data('dUseApply')/fBoardroomID" label-ref="data('dUseApply')/fBoardroom" dropdown-height="200" class="xui-autofill"> 
        <xforms:label ref="fName" id="xuiLabel3"/>  
        <xforms:value ref="rowid" id="default9"/>  
        <xforms:itemset id="default10" data="dBoardroom"> 
          <xforms:column ref="rowid" visible="false" id="default12"/>  
          <xforms:column ref="fName" id="default13" width="80" label="会议室名称"/>  
          <xforms:column ref="fType" id="default14" width="80" label="会议室类型"/>  
          <xforms:column ref="fHoldNum" id="default15" width="60" label="容纳人数"/>  
          <xforms:column ref="fAddress" id="default16" label="地址"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input style="width:100%" id="iptApplyDate" ref="data('dUseApply')/fApplyDate" format="format-dateTime('yyyy-MM-dd hh:mm')" class="xui-autofill"/>  
      <xforms:input style="width:100%;height:100%;" id="iptTitle" ref="data('dUseApply')/fMeetName" class="xui-autofill"/>  
      <xforms:input style="width:100%" id="iptBeginTime" ref="data('dUseApply')/fBeginTime" format="format-dateTime('yyyy-MM-dd hh:mm')" class="xui-autofill"/>  
      <xforms:input style="width:100%" id="iptEndTime" ref="data('dUseApply')/fEndTime" format="format-dateTime('yyyy-MM-dd hh:mm')" class="xui-autofill"/>  
      <xforms:textarea id="iptApplyPsns" ref="data('dUseApply')/fMeetPsns" auto-size="true" class="xui-autofill" readonly="true"/>  
      <xforms:input style="width:100%" id="iptPsnNum" ref="data('dUseApply')/fMeetPsnNum" class="xui-autofill"/>  
      <xforms:input style="width:100%" id="iptPhone" ref="data('dUseApply')/fPhone" class="xui-autofill"/>  
      <xforms:trigger id="trgSelectPsn" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" style="width:25px;" class="xui-autofill"> 
        <xforms:label id="xuiLabel4"><![CDATA[选择参会人员]]></xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">trgSelectPsnDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:textarea ref="data('dUseApply')/fOutPsns" id="taOutPsns" auto-size="true" class="xui-autofill"> 
        <xforms:action id="action4" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript4">taOutPsnsxforms_value_changed(event)</xforms:script> 
        </xforms:action> 
      </xforms:textarea>  
      <xforms:textarea ref="data('dUseApply')/fDescription" id="taDescription" auto-size="true" class="xui-autofill"/>  
      <xforms:textarea ref="data('dUseApply')/fRemark" id="taRemark" auto-size="true" class="xui-autofill"/>  
      <xui:layout id="layout1" type="excel" src="useApply.xls" style="height:100%;width:100%;"> 
        <place control="orgSelect" id="controlOrgPlace2"/>  
        <place control="orgPsmSelect" id="controlPsmPlace3"/> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择参会人员" width="680px" height="450px" modal="true" id="wDlgMeetPsn" url="/system/service/commonChoose/treeListMultiOrgChoose.w" onSend="wDlgMeetPsnSend" onReceive="wDlgMeetPsnReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室信息" width="700px" height="400px" modal="true" id="wDlgMeetingRoom" url="/OA/meeting/process/boardroomDetail/boardroomDetailread.w" onSend="wDlgMeetingRoomSend"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList1" data="dUseApply"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" border="0" align="center" class="xui-container" > 
            <xhtml:tr> 
              <xhtml:td height="35px"> 
                <place control="tbrUseApply" id="controlPlace1"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td valign="top" > 
                <place control="vApplyInfo" id="controlPlace4" style="height:100%;width:100%;"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList1" id="controlPlace6" style="width:740px;"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <place control="boardroomUseApplyProcess" id="controlPlace3" style="width:24px;top:377px;left:534px;"/>  
          <place control="wDlgMeetPsn" id="controlPlace5" style="top:372px;left:490px;"/>  
          <place control="wDlgMeetingRoom" id="controlPlace8" style="top:-177px;left:39px;"/> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
          <xforms:action id="action1" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action>  
          <place control="processChart" id="controlPlace2" style="height:100%;width:100%;"/> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="useApply.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="useApply.js"/> 
  </resource> 
</xui:window>
