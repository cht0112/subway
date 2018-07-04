<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:245px;left:131px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dDealApply" concept="OA_AS_DealApply" store-type="simple" auto-new="false" onValueChanged="dDealApplyValueChanged"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASDealApplyAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASDealApplyAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASDealApplyAction"/>  
      <rule id="dataBizRule1" relation="fApplyDeptID" alert="'申请部门不能为空!'" required="true()"/>  
      <rule id="dataBizRule2" relation="fApplyPsnID" alert="'申请人不能为空!'" required="true()"/>  
      <rule id="dataBizRule3" relation="fApplyDate" alert="'申请日期不能为空!'" required="true()"/>  
      <rule id="dataBizRule4" relation="fDealTypeID" alert="'处置类型不能为空!'" required="true()"/>  
      <rule id="dataBizRule5" concept="OA_AS_DealApply" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dDealType" concept="OA_AS_DealMode" store-type="simple" order-by="fSequence:asc"> 
      <reader id="default14" action="/OA/asset/logic/action/queryASDealModeAction"/>  
      <filter name="useStatusFilter" id="filter1">OA_AS_DealMode.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="selectAssetCard" src="" auto-load="true" id="dSelectTrg" store-type="simple"> 
      <rows xmlns="" id="default15">  
        <row id="default16"> 
          <cell id="default17"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="selectAssetCard" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <xforms:action id="action3" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript3">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrDealApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar" executeConcept="OA_AS_DealExecute" data="dDealApply" process-engine="assetDealApplyProcess"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="assetDealApplyProcess" data="dDealApply" onBeforeAdvanceQuery="startActivity.assetDealApplyProcessBeforeAdvanceQuery"/>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择资产" width="650px" height="458px" modal="true" id="wDlgAssetCard" url="/OA/asset/process/dialog/singleSelectCard/singleSelectCard.w" reload-on-open="true" onReceive="wDlgAssetCardReceive" onSend="wDlgAssetCardSend"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dDealApply"/>  
    <xui:view auto-load="true" id="vDealApply"> 
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dDealApply')/fApplyDeptID" label-ref="data('dDealApply')/fApplyDeptName"> 
          <xforms:itemset/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="psmSelect" show-org-types="psm"> 
        <xforms:model id="mdPsm"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dPsm"> 
            <tree-option id="treeOption1" root-filter="1=1"/>  
            <reader id="psmAction" action="/SA/opm/logic/action/queryPersonMemberAction"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dDealApply')/fApplyPsnID" label-ref="data('dDealApply')/fApplyPsnName" onDropdown="treeSltPsmDropdown" onCloseup="startActivity.treeSltPsmCloseup"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:output id="optNO" ref="data('dDealApply')/fNO"/>  
      <xforms:input id="iptApplyDate" ref="data('dDealApply')/fApplyDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optName" ref="data('dDealApply')/fName"/>  
      <xforms:output id="optKind" ref="data('dDealApply')/fKind"/>  
      <xforms:output id="optCode" ref="data('dDealApply')/fCode"/>  
      <xforms:output id="optSpecType" ref="data('dDealApply')/fSpecType"/>  
      <xforms:output id="optServiceYear" ref="data('dDealApply')/fServiceYear"/>  
      <xforms:output id="optUsedYear" ref="data('dDealApply')/fUsedYear"/>  
      <xforms:output id="optEvaluateValue" ref="data('dDealApply')/fEvaluateValue" format="format-number('0,000.00')"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltDealType" ref="data('dDealApply')/fDealTypeID" label-ref="data('dDealApply')/fDealType" dropdown-height="200px"> 
        <xforms:label ref="fName" id="xuiLabel3"/>  
        <xforms:value ref="OA_AS_DealMode" id="default8"/>  
        <xforms:itemset id="default9" data="dDealType" auto-load-data="true"> 
          <xforms:column ref="fName" id="default13"/>  
          <xforms:column ref="OA_AS_DealMode" visible="false" id="default12"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dDealApply')/fReason" id="taReason"/>  
      <xforms:textarea ref="data('dDealApply')/fRemark" id="taRemark"/>  
      <xforms:trigger id="trgSelectAsset" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" ref="data('dSelectTrg')/selectAssetCard"> 
        <xforms:label id="xuiLabel4">选择资产</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">trgSelectAssetDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetDealApply.xls"> 
        <place control="trgSelectAsset" id="controlPlace5"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default4"> 
              <xhtml:td id="td2" style="height:35px"> 
                <place control="tbrDealApply" id="controlPlace1"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default5"> 
              <xhtml:td id="td4"> 
                <place control="vDealApply" id="controlPlace4"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default6"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace7" style="width:743px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <place control="assetDealApplyProcess" id="controlPlace2" style="width:24px;top:8px;left:132px;"/>  
          <place control="wDlgAssetCard" id="controlPlace6" style="top:52px;left:247px;"/> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
            <place control="processChart" id="controlPlace3" style="height:100%;width:100%;"/> 
          <xforms:action id="action1" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="startActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
