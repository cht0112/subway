<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:261px;left:172px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dDiscardApply" concept="OA_AS_DiscardApply" store-type="simple"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASDiscardApplyAction"/>  
      <rule id="dataBizRule1" relation="fReason" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fRemark" readonly="true()"/> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dDiscardApply" config-file="/OA/asset/process/assetDiscardApply/processExecuteConfig.xml"/>  
    <xui:view auto-load="true" id="vDiscardApply"> 
      <xforms:output id="optApplyDeptName" ref="data('dDiscardApply')/fApplyDeptName"/>  
      <xforms:output id="optApplyPsnName" ref="data('dDiscardApply')/fApplyPsnName"/>  
      <xforms:output id="optCode" ref="data('dDiscardApply')/fCode"/>  
      <xforms:output id="optKind" ref="data('dDiscardApply')/fKind"/>  
      <xforms:output id="optSpecType" ref="data('dDiscardApply')/fSpecType"/>  
      <xforms:output id="optServiceYear" ref="data('dDiscardApply')/fServiceYear"/>  
      <xforms:output id="optUsedYear" ref="data('dDiscardApply')/fUsedYear"/>  
      <xforms:output id="optNO" ref="data('dDiscardApply')/fNO"/>  
      <xforms:output id="optApplyDate" ref="data('dDiscardApply')/fApplyDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optName" ref="data('dDiscardApply')/fName"/>  
      <xforms:output id="optEvaluateValue" ref="data('dDiscardApply')/fEvaluateValue" format="format-number('0,000.00')"/>  
      <xforms:textarea ref="data('dDiscardApply')/fReason" id="taReason" auto-size="true"/>  
      <xforms:textarea ref="data('dDiscardApply')/fRemark" id="taRemark" auto-size="true"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetDiscardApplyDetail.xls"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"><!-- 
            <xhtml:tr id="tr"> 
              <xhtml:td id="td"> 
                <xui:place control="toolbars1" id="controlPlace4"/>
              </xhtml:td> 
            </xhtml:tr>  
            --><xhtml:tr id="default4"> 
              <xhtml:td id="td6"> 
                <place control="vDiscardApply" id="controlPlace2"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default2"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace3" style="width:740px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
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
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" style=";" data="dDiscardApply"> 
        <item name="refresh-item" id="barItem4"/>
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem1">
          <xforms:trigger id="trgPrint" appearance="image" style="width:24px;height:24px;" src="/UI/system/images/report/print_print.gif" dis-src="/UI/system/images/report/print_print_g.gif"> 
            <xforms:label id="xuiLabel3">打印</xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate">
              <xforms:script id="xformsScript3">assetDiscardApplyDetail.trgPrintClick(event)</xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
      </xui:bar>
    </xhtml:div>
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetDiscardApplyDetail.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>
