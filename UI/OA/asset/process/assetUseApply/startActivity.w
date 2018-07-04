<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:161px;left:55px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dUseApply" concept="OA_AS_UseApplyM" store-type="simple" onValueChanged="dUseApplyValueChanged" auto-new="false"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASUseApplyMAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASUseApplyMAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASUseApplyMAction"/>  
      <rule id="dataBizRule1" relation="fApplyDeptID" required="true()" alert="'申请部门不能为空！'"/>  
      <rule id="dataBizRule2" relation="fApplyPsnID" alert="'申请人不能为空！'" required="true()"/>  
      <rule id="dataBizRule3" relation="fApplyDate" alert="'申请日期不能为空！'" required="true()"/>  
      <rule id="dataBizRule4" relation="fApplyReason" alert="'申请原因不能为空！'" required="true()"/>  
      <rule id="dataBizRule5" concept="OA_AS_UseApplyM" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="false" id="dKind" concept="OA_AS_Kind" order-by="fCode:asc" store-type="simple"> 
      <reader id="default4" action="/OA/asset/logic/action/queryASKindAction"/>  
      <filter name="fUseStatusFilter" id="filter1">OA_AS_Kind.fUseStatus='1'</filter> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrUseApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar" executeConcept="OA_AS_UseExecute" data="dUseApply" process-engine="assetUseApplyProcess"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="assetUseApplyProcess" data="dUseApply"/>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dUseApply"/>  
    <xui:view auto-load="true" id="vUseApply"> 
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt" style="height:100%;width:100%;"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dUseApply')/fApplyDeptID" label-ref="data('dUseApply')/fApplyDeptName"> 
          <xforms:itemset/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="psmSelect" show-org-types="psm" style="height:100%;width:100%;"> 
        <xforms:model id="mdPsm"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dPsm"> 
            <tree-option id="treeOption1" root-filter="1=1"/>  
            <reader id="psmAction" action="/SA/opm/logic/action/queryPersonMemberAction"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dUseApply')/fApplyPsnID" label-ref="data('dUseApply')/fApplyPsnName" onDropdown="treeSltPsmDropdown" onCloseup="startActivity.treeSltPsmCloseup"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltKind" ref="data('dUseApply')/fKindID" label-ref="data('dUseApply')/fKind" style="height:100%;width:100%;" dropdown-height="200px"> 
        <xforms:label ref="fName" id="xuiLabel3"/>  
        <xforms:value ref="OA_AS_Kind" id="default9"/>  
        <xforms:itemset id="default10" data="dKind" auto-load-data="true"> 
          <xforms:column ref="OA_AS_Kind" visible="false" id="default13"/>  
          <xforms:column ref="fName" id="default14"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:output id="optNO" ref="data('dUseApply')/fNO" style="height:100%;width:100%;background-color:transparent;"/>  
      <xforms:input id="iptApplyDate" ref="data('dUseApply')/fApplyDate" format="yyyy-MM-dd"/>  
      <xforms:input id="iptName" ref="data('dUseApply')/fName" style="height:100%;width:100%;"/>  
      <xforms:input id="iptDemandDate" ref="data('dUseApply')/fDemandDate" format="yyyy-MM-dd" style="height:100%;width:100%;"/>  
      <xforms:input id="iptReturnDate" ref="data('dUseApply')/fReturnDate" format="yyyy-MM-dd" style="height:100%;width:100%;"/>  
      <xforms:textarea ref="data('dUseApply')/fApplyReason" id="taApplyReason" style="height:100%;width:100%;"/>  
      <xforms:textarea ref="data('dUseApply')/fRequire" id="taRequire" style="height:100%;width:100%;"/>  
      <xforms:textarea ref="data('dUseApply')/fRemark" id="taRemark" style="width:100%;height:100%;"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetUseApply.xls"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default4"> 
              <xhtml:td id="td2" style="height:35px"> 
                <place control="tbrUseApply" id="controlPlace1"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default5"> 
              <xhtml:td id="td4"> 
                <place control="vUseApply" id="controlPlace3"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default6"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace5" style="width:740px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <place control="assetUseApplyProcess" id="controlPlace2" style="width:24px;top:8px;left:161px;"/> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
            <place control="processChart" id="controlPlace4" style="height:100%;width:100%;"/> 
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
