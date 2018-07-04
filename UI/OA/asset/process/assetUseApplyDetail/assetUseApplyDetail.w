<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:104px;left:72px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dUseApply" concept="OA_AS_UseApplyM" store-type="simple"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASUseApplyMAction"/>  
      <rule id="dataBizRule1" relation="fRequire" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fApplyReason" readonly="true()"/>  
      <rule id="dataBizRule3" relation="fRemark" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="true" id="dUseArrange" concept="OA_AS_UseArrange" store-type="simple"> 
      <reader id="default2" action="/OA/asset/logic/action/queryASUseArrangeAction"/>  
      <master id="master1" data="dUseApply" relation="fMasterID"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dUseApply" config-file="/OA/asset/process/assetUseApply/processExecuteConfig.xml"/>  
    <xui:view auto-load="true" id="vUseApply"> 
      <xforms:output id="optNO" ref="data('dUseApply')/fNO" style="background-color:transparent;"/>  
      <xforms:output id="optApplyDate" ref="data('dUseApply')/fApplyDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optKind" ref="data('dUseApply')/fKind"/>  
      <xforms:output id="optName" ref="data('dUseApply')/fName"/>  
      <xforms:output id="optApplyDeptName" ref="data('dUseApply')/fApplyDeptName"/>  
      <xforms:output id="optApplyPsnName" ref="data('dUseApply')/fApplyPsnName"/>  
      <xforms:output id="optDemandDate" ref="data('dUseApply')/fDemandDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optReturnDate" ref="data('dUseApply')/fReturnDate" format="yyyy-MM-dd"/>  
      <xforms:textarea ref="data('dUseApply')/fApplyReason" id="taApplyReason" auto-size="true"/>  
      <xforms:textarea ref="data('dUseApply')/fRequire" id="taRequire" auto-size="true"/>  
      <xforms:textarea ref="data('dUseApply')/fRemark" id="taRemark" auto-size="true"/>  
      <xforms:output id="optProcessName" ref="data('dUseApply')/fProcessName"/>  
      <xforms:output id="optArrangeDate" ref="data('dUseArrange')/fArrangeDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optArrangePsnName" ref="data('dUseArrange')/fArrangePsnName"/>  
      <xforms:output id="optSubName" ref="data('dUseArrange')/fName"/>  
      <xforms:output id="optUnit" ref="data('dUseArrange')/fUnit"/>  
      <xforms:output id="optSubKind" ref="data('dUseArrange')/fKind"/>  
      <xforms:output id="optCode" ref="data('dUseArrange')/fCode"/>  
      <xforms:output id="optSpecType" ref="data('dUseArrange')/fSpecType"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetUseApplyDetail.xls"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default4"> 
              <xhtml:td id="td4"> 
                <place control="vUseApply" id="controlPlace2"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default3"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace3" style="width:740px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
            <place control="processChart" id="controlPlace1" style="height:100%;width:100%;"/> 
          <xforms:action id="action2" ev:event="xforms-select"> 
            <xforms:script id="xformsScript2">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetUseApplyDetail.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>
