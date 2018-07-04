<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:373px;left:67px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dRepairApply" concept="OA_AS_RepairApply" store-type="simple" auto-new="false" onValueChanged="dRepairApplyValueChanged"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASRepairApplyAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASRepairApplyAction"/>  
      <creator id="default3" action="/OA/asset/logic/actiona/createASRepairApplyAction"/>  
      <rule id="dataBizRule1" relation="fApplyDeptID" required="true()" alert="'申请部门不能为空!'"/>  
      <rule id="dataBizRule2" relation="fApplyPsnID" alert="'申请人不能为空!'" required="true()"/>  
      <rule id="dataBizRule3" relation="fApplyDate" alert="'申请日期不能为空!'" required="true()"/>  
      <rule id="dataBizRule4" concept="OA_AS_RepairApply" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dRepairType" concept="OA_AS_RepairType" store-type="simple" order-by="fSequence:asc"> 
      <reader id="default10" action="/OA/asset/logic/action/queryASRepairTypeAction"/>  
      <filter name="repairTypeFilter" id="filter1">OA_AS_RepairType.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="selectAssetCard" src="" auto-load="true" id="dSelectTrg" store-type="simple"> 
      <rows xmlns="" id="default13">  
        <row id="default14"> 
          <cell id="default15"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="selectAssetCard" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <xforms:action id="action3" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript3">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrRepairApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar" executeConcept="OA_AS_RepairExecute" data="dRepairApply" process-engine="assetRepairApplyProcess"/> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vRepairApply"> 
      <xforms:output id="optNO" ref="data('dRepairApply')/fNO" style="background-color:transparent;"/>  
      <xforms:input id="iptApplyDate" ref="data('dRepairApply')/fApplyDate" auto-size="true" format="yyyy-MM-dd"/>  
      <xforms:output id="optName" ref="data('dRepairApply')/fName"/>  
      <xforms:output id="optKind" ref="data('dRepairApply')/fKind"/>  
      <xforms:output id="optCode" ref="data('dRepairApply')/fCode"/>  
      <xforms:output id="optSpecType" ref="data('dRepairApply')/fSpecType"/>  
      <xforms:output id="optServiceYear" ref="data('dRepairApply')/fServiceYear"/>  
      <xforms:output id="iptUsedYear" ref="data('dRepairApply')/fUsedYear" auto-size="true"/>  
      <xforms:output id="optRemainValue" ref="data('dRepairApply')/fRemainValue" format="format-number('0,000.00')"/>  
      <xforms:textarea ref="data('dRepairApply')/fDescription" id="taDescription" auto-size="true"/>  
      <xforms:textarea ref="data('dRepairApply')/fRemark" id="taRemark" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltRepairType" ref="data('dRepairApply')/fRepairTypeID" label-ref="data('dRepairApply')/fRepairType" auto-size="true" dropdown-height="200px"> 
        <xforms:label ref="fName" id="xuiLabel3"/>  
        <xforms:value ref="OA_AS_RepairType" id="default4"/>  
        <xforms:itemset id="default5" data="dRepairType" auto-load-data="true"> 
          <xforms:column ref="OA_AS_RepairType" visible="false" id="default8"/>  
          <xforms:column ref="fName" id="default9"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dRepairApply')/fApplyDeptID" label-ref="data('dRepairApply')/fApplyDeptName"> 
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
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dRepairApply')/fApplyPsnID" label-ref="data('dRepairApply')/fApplyPsnName" onDropdown="treeSltPsmDropdown" onCloseup="startActivity.treeSltPsmCloseup"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:trigger id="trgSelectAsset" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" appearance="image" ref="data('dSelectTrg')/selectAssetCard"> 
        <xforms:label id="xuiLabel4">选择资产</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">trgSelectAssetDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;" id="layout3" type="excel" src="assetRepairApply.xls"> 
        <place control="trgSelectAsset" id="controlPlace2"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="assetRepairApplyProcess" data="dRepairApply" onBeforeAdvanceQuery="startActivity.assetRepairApplyProcessBeforeAdvanceQuery"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择资产" width="650px" height="458px" modal="true" id="wDlgAssetCard" url="/OA/asset/process/dialog/singleSelectCard/singleSelectCard.w" reload-on-open="true" onReceive="wDlgAssetCardReceive" onSend="wDlgAssetCardSend"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dRepairApply"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default6"> 
              <xhtml:td id="td6" style="height:35px"> 
                <place control="tbrRepairApply" id="controlPlace6"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default7"> 
              <xhtml:td id="td8"> 
                <place control="vRepairApply" id="controlPlace7"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default11"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace4" style="width:740px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <place control="assetRepairApplyProcess" id="controlPlace8" style="width:24px;top:10px;left:134px;"/>  
          <place control="wDlgAssetCard" id="controlPlace3" style="top:41px;left:264px;"/> 
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
  <resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="startActivity.js"/> 
  </resource> 
</xui:window>
