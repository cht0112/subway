<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="width:150px;top:65px;height:auto;left:60px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="1" update-mode="whereVersion" auto-load="false" id="dUseApply" concept="OA_MT_UseApply"
      store-type="simple"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTUSEAPPLYAction"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view id="vApplyInfo"> 
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
      <xforms:output id="optArrBoardroom" ref="data('dUseApply')/fArrBoardroom"/>  
      <xforms:output id="optArrBeginTime" ref="data('dUseApply')/fArrBeginTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:output id="optArrDeptName" ref="data('dUseApply')/fArrDeptName"/>  
      <xforms:output id="optArrPsnName" ref="data('dUseApply')/fArrPsnName"/>  
      <xforms:output id="optArrEndTime" ref="data('dUseApply')/fArrEndTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:output id="optArrTime" ref="data('dUseApply')/fArrTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:output id="optArrRemark" ref="data('dUseApply')/fArrRemark"/>  
      <xforms:output id="optOutPsns" ref="data('dUseApply')/fOutPsns"/>  
      <xforms:textarea ref="data('dUseApply')/fArrRemark" id="taArrRemark" auto-size="true"/>  
      <layout id="layout1" type="excel" src="boardroomUseApplyQuery.xls"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart"
      id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList"
      panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList1"
      data="dUseApply" config-file="/OA/meeting/process/boardroomUseApply/processExecuteConfig.xml"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel2"
        style="height:100%;width:100%;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel3">详细</xui:label>  
          <xhtml:table id="table21" align="center"> 
            <xhtml:tr> 
              <xhtml:td > 
                <place control="vApplyInfo" id="controlPlace1"/> 
              <xui:place control="standardProcessExecuteList1" id="controlPlace2" style="width:740px;" /></xhtml:td> 
            </xhtml:tr>  
            </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel4">流程轨迹</xui:label>  
          <xforms:action id="action2" ev:event="xforms-select"> 
            <xforms:script id="xformsScript2">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action>  
          <place control="processChart" id="controlPlace5" style="height:100%;width:100%;"/> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="useApplyDetail.js"/> 
  </xui:resource> 
</xui:window>
