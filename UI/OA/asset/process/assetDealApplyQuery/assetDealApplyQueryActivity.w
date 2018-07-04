<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:162px;left:130px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dDealApply" concept="OA_AS_DealApply" order-by="fCreateTime:desc" filter-relations="fNO,fApplyDeptName,fApplyPsnName,fApplyDate,fCode,fKind,fName,fSpecType,fDealType,fBizStateName"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASDealApplyAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrDealApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessQueryBar.xbl.xml#standardProcessQueryBar" id="standardProcessQueryBar" data="dDealApply" execute-concept="OA_AS_DealExecute" smart-relations="fNO,fBizStateName,fCode,fKind,fName,fSpecType,fDealType,fApplyDeptName,fApplyPsnName"/> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDealApply"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdDealApply" data="dDealApply" onRowDblClick="grdDealApplyRowDblClick"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fBizStateName" label="状态" type="ro" width="50"/>  
        <column id="gridColumn3" ref="fNO" label="单据号" type="html" width="120" onRender="grdDealApply_fNORender"/>  
        <column id="gridColumn4" ref="fKind" label="资产类别" type="ro" width="80"/>  
        <column id="gridColumn5" ref="fName" label="资产名称" type="ro" width="98"/>  
        <column id="gridColumn6" ref="fCode" label="资产编号" type="ro" width="80"/>  
        <column id="gridColumn7" ref="fSpecType" label="规格型号" type="ed" width="75"/>  
        <column id="gridColumn8" ref="fDealType" label="处置类型" type="ro" width="70"/>  
        <column id="gridColumn9" ref="fApplyDeptName" label="申请部门" type="ro" width="80"/>  
        <column id="gridColumn10" ref="fApplyPsnName" label="申请人" type="ro" width="70"/>  
        <column id="gridColumn11" ref="fApplyDate" label="申请日期" type="date" width="70" readonly="true"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdDealApply" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;table-layout:fixed;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default2"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrDealApply" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default3"> 
          <xhtml:td id="td4"> 
            <place control="vDealApply" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetDealApplyQueryActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
