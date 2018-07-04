<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:184px;left:104px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dUseApply" concept="OA_AS_UseApplyM" order-by="fCreateTime:desc" filter-relations="fNO,fApplyDeptName,fApplyPsnName,fApplyDate,fKind,fName,fDemandDate,fReturnDate,fRequire,fApplyReason,fProcessName,fBizStateName"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASUseApplyMAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <rule id="dataBizRule1" relation="fRequire" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fApplyReason" readonly="true()"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrUseApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessQueryBar.xbl.xml#standardProcessQueryBar" id="standardProcessQueryBar" data="dUseApply" execute-concept="OA_AS_UseExecute" smart-relations="fNO,fBizStateName,fKind,fName,fApplyDeptName,fApplyPsnName,fProcessName"/> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vUseApply"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdUseApply" data="dUseApply" onRowDblClick="grdUseApplyRowDblClick"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fBizStateName" label="状态" type="ro" width="50"/>  
        <column id="gridColumn3" ref="fNO" label="单号" type="html" width="120" onRender="grdUseApply_fNORender"/>  
        <column id="gridColumn4" ref="fKind" label="资产类别" type="ro" width="80"/>  
        <column id="gridColumn5" ref="fName" label="资产名称" type="ro" width="80"/>  
        <column id="gridColumn6" ref="fApplyDeptName" label="申请部门" type="ro" width="100"/>  
        <column id="gridColumn7" ref="fApplyPsnName" label="申请人" type="ro" width="70"/>  
        <column id="gridColumn8" ref="fApplyDate" label="申请日期" type="date" width="80" readonly="true"/>  
        <column id="gridColumn9" ref="fDemandDate" label="需求日期" type="date" width="80" readonly="true"/>  
        <column id="gridColumn10" ref="fReturnDate" label="预计归还日期" type="date" width="80" readonly="true"/>  
        <column id="gridColumn11" ref="fProcessName" label="处理方式" type="ro" width="55"/>  
        <column id="gridColumn12" ref="fRequire" label="领用资产要求" type="txt" width="100"/>  
        <column id="gridColumn13" ref="fApplyReason" label="申请原因" type="txt" width="100"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdUseApply" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default2"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrUseApply" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default3"> 
          <xhtml:td id="td4"> 
            <place control="vUseApply" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetUseApplyQueryActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
