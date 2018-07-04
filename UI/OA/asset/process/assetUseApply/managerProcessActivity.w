<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:256px;left:132px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="true" id="dUseApply" concept="OA_AS_UseApplyM" store-type="simple" onValueChanged="dUseApplyValueChanged"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASUseApplyMAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASUseApplyMAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASUseApplyMAction"/>  
      <rule id="dataBizRule1" relation="fRequire" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fApplyReason" readonly="true()"/>  
      <rule id="dataBizRule3" relation="fRemark" readonly="true()"/>  
      <rule id="dataBizRule5" relation="fProcess" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="true" id="dUseArrange" concept="OA_AS_UseArrange" store-type="simple"> 
      <reader id="default4" action="/OA/asset/logic/action/queryASUseArrangeAction"/>  
      <writer id="default5" action="/OA/asset/logic/action/saveASUseArrangeAction"/>  
      <creator id="default6" action="/OA/asset/logic/action/createASUseArrangeAction"/>  
      <master id="master1" data="dUseApply" relation="fMasterID" auto-load="true"/>  
      <rule id="dataBizRule4" concept="OA_AS_UseArrange" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="true" id="dProcessType" store-type="simple"> 
      <rows xmlns="" id="default11">  
        <row id="default12"> 
          <cell id="default13">安排</cell>  
          <cell id="default14">0</cell> 
        </row>  
        <row id="default15"> 
          <cell id="default16">购置</cell>  
          <cell id="default17">1</cell> 
        </row>  
        <row id="default18"> 
          <cell id="default19">调拨</cell>  
          <cell id="default20">2</cell> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="value" readonly="(data('dProcessType')/value != '0') or (call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrUseApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar1" data="dUseApply" executeConcept="OA_AS_UseExecute" process-engine="assetUseApplyProcess"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="assetUseApplyProcess" data="dUseApply" onBeforeAdvanceQuery="managerProcessActivity.assetUseApplyProcessBeforeAdvanceQuery"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" width="650px" height="458px" modal="true" id="wDlgAssetCard" url="/OA/asset/process/dialog/singleSelectCard/singleSelectCard.w" title="选择资产" reload-on-open="true" onReceive="wDlgAssetCardReceive" onSend="wDlgAssetCardSend"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dUseApply"/>  
    <xui:view auto-load="true" id="vUseApply"> 
      <xforms:output id="optApplyDeptName" ref="data('dUseApply')/fApplyDeptName" style="height:100%;width:100%;"/>  
      <xforms:output id="optApplyPsnName" ref="data('dUseApply')/fApplyPsnName" style="height:100%;width:100%;"/>  
      <xforms:output id="optNO" ref="data('dUseApply')/fNO" style="height:100%;width:100%;background-color:transparent;"/>  
      <xforms:output id="optApplyDate" ref="data('dUseApply')/fApplyDate" format="yyyy-MM-dd" style="height:100%;width:100%;"/>  
      <xforms:output id="optKind" ref="data('dUseApply')/fKind" style="height:100%;width:100%;"/>  
      <xforms:output id="optName" ref="data('dUseApply')/fName" style="height:100%;width:100%;"/>  
      <xforms:output id="optDemandDate" ref="data('dUseApply')/fDemandDate" format="yyyy-MM-dd" style="height:100%;width:100%;"/>  
      <xforms:output id="optReturnDate" ref="data('dUseApply')/fReturnDate" format="yyyy-MM-dd" style="height:100%;width:100%;"/>  
      <xforms:textarea ref="data('dUseApply')/fApplyReason" id="taApplyReason" style="height:100%;width:100%;"/>  
      <xforms:textarea ref="data('dUseApply')/fRequire" id="taRequire" style="height:100%;width:100%;"/>  
      <xforms:textarea ref="data('dUseApply')/fRemark" id="taRemark" style="height:100%;width:100%;"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltProcessName" ref="data('dUseApply')/fProcess" label-ref="data('dUseApply')/fProcessName" style="height:100%;width:100%;" dropdown-height="100px"> 
        <xforms:label ref="label" id="xuiLabel3"/>  
        <xforms:value ref="value" id="default9"/>  
        <xforms:itemset id="default10" data="dProcessType" auto-load-data="true"> 
          <xforms:column ref="label" id="default21"/>  
          <xforms:column ref="value" visible="false" id="default22"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:output id="optArrangeDate" ref="data('dUseArrange')/fArrangeDate" format="yyyy-MM-dd" style="height:100%;width:100%;"/>  
      <xforms:output id="optArrangePsnName" ref="data('dUseArrange')/fArrangePsnName" style="height:100%;width:100%;"/>  
      <xforms:output id="optCode" ref="data('dUseArrange')/fCode" style="height:100%;width:100%;"/>  
      <xforms:output id="optSubKind" ref="data('dUseArrange')/fKind" style="width:100%;height:100%;"/>  
      <xforms:output id="optSubName" ref="data('dUseArrange')/fName" style="height:100%;width:100%;"/>  
      <xforms:output id="optSpecType" ref="data('dUseArrange')/fSpecType" style="height:100%;width:100%;"/>  
      <xforms:output id="optUnit" ref="data('dUseArrange')/fUnit" style="width:100%;height:100%;"/>  
      <xforms:trigger id="trgSelectAsset" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" ref="data('dProcessType')/value"> 
        <xforms:label id="xuiLabel4">选择资产</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">trgSelectAssetDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetUseApplyDeal.xls"> 
        <place control="trgSelectAsset" id="controlPlace5" style="height:100%;width:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default7"> 
              <xhtml:td id="td2" style="height:35px"> 
                <place control="tbrUseApply" id="controlPlace2"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default8"> 
              <xhtml:td id="td4"> 
                <place control="vUseApply" id="controlPlace4"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default23"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace7" style="width:744px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <place control="assetUseApplyProcess" id="controlPlace3" style="width:24px;top:13px;left:145px;"/>  
          <place control="wDlgAssetCard" id="controlPlace6" style="top:296px;left:296px;"/> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
            <place control="processChart" id="controlPlace1" style="height:100%;width:100%;"/> 
          <xforms:action id="action1" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="managerProcessActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
