<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:179px;left:81px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dDiscardApply" concept="OA_AS_DiscardApply" auto-new="false" store-type="simple" onValueChanged="dDiscardApplyValueChanged"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASDiscardApplyAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASDiscardApplyAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASDiscardApplyAction"/>  
      <rule id="dataBizRule1" relation="fApplyDeptID" alert="'申请部门不能为空！'" required="true()"/>  
      <rule id="dataBizRule2" relation="fApplyPsnID" alert="'申请人不能为空!'" required="true()"/>  
      <rule id="dataBizRule3" relation="fApplyDate" alert="'申请日期不能为空!'" required="true()"/>  
      <rule id="dataBizRule4" concept="OA_AS_DiscardApply" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="selectAssetCard" src="" auto-load="true" id="dSelectTrg" store-type="simple"> 
      <rows xmlns="" id="default8">  
        <row id="default9"> 
          <cell id="default10"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="selectAssetCard" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <xforms:action id="action3" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript3">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="print" src="" auto-load="true" id="dBtn" style=";">
      <rule id="dataRule2" column="print" readonly="not(contains('discardApplyActivity', call('justep.Context.getCurrentActivity')))"/>
    </data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrDiscardApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar" executeConcept="OA_AS_DiscardExecute" data="dDiscardApply" process-engine="assetDiscardApplyProcess"/>  
      <!--<xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" style=";" data="dDiscardApply"> 
        <item id="customBarItem1">
          <xforms:trigger id="trgPrint" appearance="image" src="/UI/system/images/report/print_print.gif" dis-src="/UI/system/images/report/print_print_g.gif" style="width:26px;"> 
            <xforms:label id="xuiLabel4">打印</xforms:label>  
            <xforms:action id="action4" ev:event="DOMActivate">
              <xforms:script id="xformsScript4">startActivity.trgPrintClick(event)</xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
        <item name="separator" id="separatorItem1"/> 
      </xui:bar>
    --></xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="assetDiscardApplyProcess" data="dDiscardApply" onBeforeAdvanceQuery="startActivity.assetDiscardApplyProcessBeforeAdvanceQuery"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择资产" width="650px" height="458px" modal="true" id="wDlgAssetCard" url="/OA/asset/process/dialog/singleSelectCard/singleSelectCard.w" reload-on-open="true" onReceive="wDlgAssetCardReceive" onSend="wDlgAssetCardSend"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dDiscardApply"/>  
    <xui:view auto-load="true" id="vDiscardApply"> 
      <xforms:output id="optNO" ref="data('dDiscardApply')/fNO" style="background-color:transparent;"/>  
      <xforms:input style="width:140px" id="iptApplyDate" ref="data('dDiscardApply')/fApplyDate" auto-size="true" format="yyyy-MM-dd"/>  
      <xforms:output id="optName" ref="data('dDiscardApply')/fName"/>  
      <xforms:output id="optKind" ref="data('dDiscardApply')/fKind"/>  
      <xforms:output id="optEvaluateValue" ref="data('dDiscardApply')/fEvaluateValue" format="format-number('0,000.00')"/>  
      <xforms:output id="optUsedYea" ref="data('dDiscardApply')/fUsedYear"/>  
      <xforms:output id="optCode" ref="data('dDiscardApply')/fCode"/>  
      <xforms:output id="optSpecType" ref="data('dDiscardApply')/fSpecType"/>  
      <xforms:output id="optServiceYear" ref="data('dDiscardApply')/fServiceYear"/>  
      <xforms:textarea ref="data('dDiscardApply')/fReason" id="taReason" auto-size="true"/>  
      <xforms:textarea ref="data('dDiscardApply')/fRemark" id="taRemark" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dDiscardApply')/fApplyDeptID" label-ref="data('dDiscardApply')/fApplyDeptName"> 
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
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dDiscardApply')/fApplyPsnID" label-ref="data('dDiscardApply')/fApplyPsnName" onDropdown="treeSltPsmDropdown" onCloseup="startActivity.treeSltPsmCloseup"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:trigger id="trgSelectAsset" ref="data('dSelectTrg')/selectAssetCard" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png"> 
        <xforms:label id="xuiLabel3">选择资产</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">trgSelectAssetDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetDiscardApply.xls"> 
        <place control="trgSelectAsset" id="controlPlace5"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default4"> 
              <xhtml:td id="td2" style="height:35px"> 
                <place control="tbrDiscardApply" id="controlPlace2"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default5"> 
              <xhtml:td id="td4"> 
                <place control="vDiscardApply" id="controlPlace4"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default6"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace7" style="width:740px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <place control="assetDiscardApplyProcess" id="controlPlace3" style="width:24px;top:12px;left:145px;"/>  
          <place control="wDlgAssetCard" id="controlPlace6" style="top:54px;left:244px;"/> 
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
    <xhtml:script id="htmlScript1" src="startActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
