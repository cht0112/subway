<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="width:150px;top:290px;height:105px;left:84px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dUseApply" concept="OA_MT_UseApply" store-type="simple" onBeforeSave="dUseApplyBeforeSave" onValueChanged="dUseApplyValueChanged"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTUSEAPPLYAction"/>  
      <writer id="default2" action="/OA/meeting/logic/action/saveMTUSEAPPLYAction"/>  
      <creator id="default3" action="/OA/meeting/logic/action/createMTUSEAPPLYAction"/>  
      <rule relation="fArrDeptID" required="true()" alert="'安排部门必填!'"/>  
      <rule relation="fArrDeptName" required="true()" alert="'安排部门必填!'"/>  
      <rule relation="fArrEndTime" constraint="data('dUseApply')/fArrEndTime&gt;data('dUseApply')/fArrBeginTime" alert="'结束时间必须大于开始时间!'"/>  
      <rule relation="fOutPsns" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dUsePerson" concept="OA_MT_USEAPPLYPSNS" store-type="simple"> 
      <reader id="default4" action="/OA/meeting/logic/action/queryMTUSEAPPLYPSNSAction"/>  
      <writer id="default5" action="/OA/meeting/logic/action/saveMTUSEAPPLYPSNSAction"/>  
      <creator id="default6" action="/OA/meeting/logic/action/createMTUSEAPPLYPSNSAction"/>  
      <master id="master1" data="dUseApply" relation="fMasterID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="bBoardroom" concept="OA_MT_Boardroom" order-by="fCode:asc"> 
      <reader id="default4" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/>  
      <filter name="statusFilter">OA_MT_Boardroom.fUseStatus='1'</filter> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrToolbar"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar1" data="dUseApply" executeConcept="OA_MT_UseExecute" process-engine="boardroomUseApplyProcess"/>  
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item> 
          <xforms:trigger id="trgSearch"> 
            <xforms:label id="xuiLabel4">安排查询</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript5">trgSearchDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室信息" width="700px" height="400px" modal="true" id="wDlgMeetingRoom" url="/OA/meeting/process/boardroomDetail/boardroomDetailread.w" onSend="wDlgMeetingRoomSend"/>  
    <xui:view auto-load="true" id="vArrange" class="xui-container"> 
      <xhtml:div id="divRoom" class="xui-autofill"> 
        <xhtml:a href="#" onclick="trgDetailDOMActivate()">查看</xhtml:a> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:100%" id="boardroomSelect" ref="data('dUseApply')/fArrBoardroomID" label-ref="data('dUseApply')/fArrBoardroom" dropdown-height="200" class="xui-autofill"> 
        <xforms:label ref="fName" id="xuiLabel3"/>  
        <xforms:value ref="rowid" id="default5"/>  
        <xforms:itemset id="default6" data="bBoardroom"> 
          <xforms:column ref="rowid" visible="false" id="default17"/>  
          <xforms:column ref="fName" label="会议室名称" width="80" id="default18"/>  
          <xforms:column ref="fType" label="会议室类型" width="80" id="default20"/>  
          <xforms:column ref="fHoldNum" label="容纳人数" width="60" id="default21"/>  
          <xforms:column ref="fAddress" label="地址" id="default25"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input style="width:100%" id="iptArrBeginTime" ref="data('dUseApply')/fArrBeginTime" format="format-dateTime('yyyy-MM-dd hh:mm')" class="xui-autofill"/>  
      <xforms:input style="width:100%" id="iptArrEndTime" format="format-dateTime('yyyy-MM-dd hh:mm')" ref="data('dUseApply')/fArrEndTime" class="xui-autofill"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%" id="orgSelect" show-org-types="ogn,dpt" class="xui-autofill"> 
        <xforms:model id="model1"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"/> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSelect1" data-ref="dOrg" ref="data('dUseApply')/fArrDeptID" label-ref="data('dUseApply')/fArrDeptName"> 
          <xforms:itemset id="default7" auto-load-data="false"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%" id="orgPsmSelect" show-org-types="psm" class="xui-autofill"> 
        <xforms:model id="model2"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dPsm"> 
            <tree-option id="treeOption1" root-filter="1=1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treePsmSelect" data-ref="dPsm" ref="data('dUseApply')/fArrPsnID" label-ref="data('dUseApply')/fArrPsnName" onDropdown="treePsmSelectDropdown" onCloseup="useArrangeActivity.treePsmSelectCloseup"> 
          <xforms:itemset id="default8" data="dPsm"> 
            <xforms:column ref="sName" id="default19"/>  
            <xforms:column ref="sPersonID" visible="false" id="default22"/> 
          </xforms:itemset>  
          <xforms:value id="default23" ref="sPersonID"/>  
          <xforms:label id="default24" ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:input style="width:100%" id="iptArrTime" ref="data('dUseApply')/fArrTime" format="format-dateTime('yyyy-MM-dd hh:mm')" class="xui-autofill"/>  
      <xforms:output id="optNO" ref="data('dUseApply')/fNO"/>  
      <xforms:output id="optApplyDept" ref="data('dUseApply')/fApplyDeptName"/>  
      <xforms:output id="optApplyPsn" ref="data('dUseApply')/fApplyPsnName"/>  
      <xforms:output id="optApplyDate" ref="data('dUseApply')/fApplyDate" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:output id="optApplyBoardroom" ref="data('dUseApply')/fBoardroom"/>  
      <xforms:output id="optBeginTime" ref="data('dUseApply')/fBeginTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:output id="optEndTime" ref="data('dUseApply')/fEndTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:output id="optApplyPsns" ref="data('dUseApply')/fMeetPsns"/>  
      <xforms:output id="optPsnNum" ref="data('dUseApply')/fMeetPsnNum"/>  
      <xforms:output id="optPhone" ref="data('dUseApply')/fPhone"/>  
      <xforms:output id="optDescription" ref="data('dUseApply')/fDescription"/>  
      <xforms:output id="optRemark" ref="data('dUseApply')/fRemark"/>  
      <xforms:output id="optMeetName" ref="data('dUseApply')/fMeetName"/>  
      <xforms:textarea id="taArrRemark" ref="data('dUseApply')/fArrRemark" auto-size="true" class="xui-autofill"/>  
      <xforms:textarea ref="data('dUseApply')/fOutPsns" id="taOutPsns" auto-size="true" class="xui-autofill"/>  
      <layout id="layout1" type="excel" src="useArrange.xls" style="height:100%;width:100%;"> 
        <place control="orgSelect" id="orgSelectPlace"/>  
        <place control="orgPsmSelect" id="orgPsmSelect"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="boardroomUseApplyProcess" data="dUseApply" onBeforeAdvanceQuery="boardroomUseApplyProcessBeforeAdvanceQuery"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList1" data="dUseApply"/>  
    <!--<xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室信息" width="690" height="380" modal="true" id="wDlgMeetingRooma" url="/OA/meeting/process/boardroomDetail/boardroomDetail.w"></xhtml:div>-->  
    <xui:layout style="height:100%;width:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center" class="xui-container"> 
            <xhtml:tr> 
              <xhtml:td id="td1" style="height:35px"> 
                <place control="tbrToolbar" id="controlPlace1"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td colspan="2"> 
                <place control="vArrange" id="controlPlace2" style="height:100%;width:100%;"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default7"> 
              <xhtml:td id="td1" colspan="2"> 
                <xui:place control="standardProcessExecuteList1" id="controlPlace7" style="width:740px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
          <place control="processChart" id="controlPlace4" style="height:100%;width:100%;"/>  
          <xforms:action id="action4" ev:event="xforms-select"> 
            <xforms:script id="xformsScript3">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div>  
      <place control="wDlgMeetingRoom" id="controlPlace6" style="top:335px;left:341px;"/>  
      <place control="boardroomUseApplyProcess" id="controlPlace3" style="width:24px;top:339px;left:380px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="useArrangeActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
