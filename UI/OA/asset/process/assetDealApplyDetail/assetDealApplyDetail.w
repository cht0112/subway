<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:109px;left:75px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dDealApply" concept="OA_AS_DealApply" store-type="simple"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASDealApplyAction"/>  
      <rule id="dataBizRule1" relation="fReason" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fRemark" readonly="true()"/> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vDealApply"> 
      <xforms:output id="optApplyDeptName" ref="data('dDealApply')/fApplyDeptName"/>  
      <xforms:output id="optApplyPsnName" ref="data('dDealApply')/fApplyPsnName"/>  
      <xforms:output id="optNO" ref="data('dDealApply')/fNO"/>  
      <xforms:output id="optApplyDate" ref="data('dDealApply')/fApplyDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optDealType" ref="data('dDealApply')/fDealType"/>  
      <xforms:output id="optEvaluateValue" ref="data('dDealApply')/fEvaluateValue" format="format-number('0,000.00')"/>  
      <xforms:output id="optKind" ref="data('dDealApply')/fKind"/>  
      <xforms:output id="optUsedYear" ref="data('dDealApply')/fUsedYear"/>  
      <xforms:output id="optCode" ref="data('dDealApply')/fCode"/>  
      <xforms:output id="optSpecType" ref="data('dDealApply')/fSpecType"/>  
      <xforms:output id="optServiceYear" ref="data('dDealApply')/fServiceYear"/>  
      <xforms:output id="optName" ref="data('dDealApply')/fName"/>  
      <xforms:textarea ref="data('dDealApply')/fReason" id="taReason" auto-size="true"/>  
      <xforms:textarea ref="data('dDealApply')/fRemark" id="taRemark" auto-size="true"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetDealApplyQuery.xls"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dDealApply" config-file="/OA/asset/process/assetDealApply/processExecuteConfig.xml"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default3"> 
              <xhtml:td id="td4"> 
                <place control="vDealApply" id="controlPlace1"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default2"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace3" style="width:743px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
            <place control="processChart" id="controlPlace2" style="height:100%;width:100%;"/> 
          <xforms:action id="action1" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetDealApplyDetail.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>
